import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Alert, ActivityIndicator } from 'react-native';
import { Colors, Typography, Spacing, BorderRadius } from '../constants/Theme';
import { Auth, API, graphqlOperation } from 'aws-amplify';

// Inline minimal queries/mutations needed for invite validation & linking
const VALIDATE_INVITE = /* GraphQL */ `query ListTerriiInviteCodes($filter: ModelTerriiInviteCodeFilterInput) { listTerriiInviteCodes(filter:$filter, limit:1){ items { id code email isUsed expiresAt familyMember { id name residentID resident { id name careHome { id name } } } } } }`;
const UPDATE_INVITE = /* GraphQL */ `mutation UpdateTerriiInviteCode($input: UpdateTerriiInviteCodeInput!){ updateTerriiInviteCode(input:$input){ id isUsed usedAt }}`;
const UPDATE_FAMILY_MEMBER = /* GraphQL */ `mutation UpdateTerriiResidentFamily($input: UpdateTerriiResidentFamilyInput!){ updateTerriiResidentFamily(input:$input){ id userID isRegistered residentID }}`;
const GET_USER = /* GraphQL */ `query GetUser($id: ID!){ getUser(id:$id){ id terriiProfile { id role careHomeID } } }`;
const CREATE_USER_PROFILE = /* GraphQL */ `mutation CreateTerriiUserProfile($input: CreateTerriiUserProfileInput!){ createTerriiUserProfile(input:$input){ id role careHomeID userID }}`;

export default function RegistrationScreen({ navigation }) {
  const [step,setStep]=useState(1); // 1=invite validate, 2=account, 3=password confirm
  const [inviteCode,setInviteCode]=useState('');
  const [inviteData,setInviteData]=useState(null);
  const [email,setEmail]=useState('');
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [loading,setLoading]=useState(false);
  const [errors,setErrors]=useState({});

  const DEBUG_UI = true; // toggle inline debug panel

  const debug = (label, value) => console.log(`[InviteDebug] ${label}:`, value);

  const formatCode = (raw) => {
    let f = raw.replace(/[^0-9]/g,'');
    if(f.length>8) f=f.slice(0,8);
    if(f.length>4) f = f.slice(0,4)+'-'+f.slice(4);
    return f;
  };

  const validateInvite = async () => {
    setErrors({});
    debug('ValidateInvite.start', { raw: inviteCode });
    if(inviteCode.length!==9){ setErrors(prev=>({...prev,inviteCode:'Code must be 8 digits (XXXX-XXXX)'})); debug('ValidateInvite.block.lengthFail', inviteCode.length); return; }
    try {
      setLoading(true);
      const codeRaw = inviteCode.replace('-','');
      debug('ValidateAttempt.codeRaw', codeRaw);
      const resp = await API.graphql(graphqlOperation(VALIDATE_INVITE,{ filter:{ code:{ eq:inviteCode }, isUsed:{ eq:false } }}));
      debug('ValidateInvite.graphqlResp', resp?.data?.listTerriiInviteCodes);
      const item = resp?.data?.listTerriiInviteCodes?.items?.[0];
      debug('ValidateInvite.item', item);
      if(!item){ setErrors(prev=>({...prev,inviteCode:'Invalid or used/expired code'})); return; }
      if(item.isUsed){ setErrors(prev=>({...prev,inviteCode:'Code already used'})); return; }
      if(new Date(item.expiresAt) < new Date()){ setErrors(prev=>({...prev,inviteCode:'Code expired'})); return; }
      setInviteData(item);
      setEmail(item.email || '');
      setStep(2);
      debug('ValidateInvite.success.advanceStep', 2);
    } catch(e){ console.log('Invite validation error', e); debug('ValidateInvite.error', e); setErrors(prev=>({...prev,inviteCode:'Validation failed'})); }
    finally { setLoading(false); }
  };

  const register = async () => {
    debug('Register.start', { email, firstName, lastName, pwLen: password.length });
    let localErrors={};
    if(!email) localErrors.email='Email required';
    if(!firstName) localErrors.firstName='First name required';
    if(!lastName) localErrors.lastName='Last name required';
    if(password.length<8) localErrors.password='Min 8 chars';
    if(password!==confirmPassword) localErrors.confirm='Passwords differ';
    if(Object.keys(localErrors).length){ debug('Register.block.validationErrors', localErrors); setErrors(localErrors); return; }

    try {
      setLoading(true);
      debug('Register.inviteData', { inviteId: inviteData?.id, resident: inviteData?.familyMember?.resident?.name });
      const signUpRes = await Auth.signUp({ username: email.trim(), password, attributes:{ email: email.trim(), given_name:firstName.trim(), family_name:lastName.trim() }});
      debug('Register.signUpRes', signUpRes);
      Alert.alert('Verify Email','We sent a verification code to your email.',[{ text:'OK', onPress:()=> { debug('Register.advanceStep',3); setStep(3);} }]);
    } catch(e){ console.log('SignUp error', e); debug('Register.error', e); setErrors(prev=>({...prev,submit:e.message||'Registration failed'})); }
    finally { setLoading(false); }
  };

  const confirmAndLink = async (code) => {
    debug('Confirm.start', { code, inviteId: inviteData?.id });
    try {
      setLoading(true);
      const username = email.trim();
      const confirmRes = await Auth.confirmSignUp(username, code.trim());
      debug('Confirm.result', confirmRes);
      const user = await Auth.signIn(username, password);
      const userId = user?.attributes?.sub || user?.username;
      debug('Confirm.signedInUser', { userId, attrs: user?.attributes });
      // Mark invite used
      const inviteUpdate = await API.graphql(graphqlOperation(UPDATE_INVITE,{ input:{ id: inviteData.id, isUsed:true, usedAt:new Date().toISOString() }}));
      debug('Confirm.inviteUpdated', inviteUpdate?.data?.updateTerriiInviteCode);
      // Link family member
      const linkRes = await API.graphql(graphqlOperation(UPDATE_FAMILY_MEMBER,{ input:{ id: inviteData.familyMember.id, userID:userId, isRegistered:true }}));
      debug('Confirm.familyLinkUpdated', linkRes?.data?.updateTerriiResidentFamily);
      // Ensure user profile exists (role FAMILY)
      const existing = await API.graphql(graphqlOperation(GET_USER,{ id:userId }));
      debug('Confirm.getUserAfterLink', existing?.data?.getUser);
      if(!existing?.data?.getUser?.terriiProfile){
        const residentCareHomeID = inviteData.familyMember?.resident?.careHome?.id;
        debug('Confirm.missingProfile.createAttempt', { residentCareHomeID });
        if(residentCareHomeID){
          const createdProfile = await API.graphql(graphqlOperation(CREATE_USER_PROFILE,{ input:{ userID:userId, role:'FAMILY', careHomeID: residentCareHomeID }}));
          debug('Confirm.profileCreated', createdProfile?.data?.createTerriiUserProfile);
        } else {
          debug('Confirm.profileCreateSkipped','No careHomeID');
        }
      } else {
        debug('Confirm.profileExists','Using existing');
      }
      Alert.alert('Success','Account verified and linked.',[{ text:'Continue', onPress:()=> { debug('Confirm.navigateLogin'); navigation.replace('Login'); } }]);
    } catch(e){ console.log('Confirm/link error', e); debug('Confirm.error', e); Alert.alert('Error', e.message || 'Verification failed'); }
    finally { setLoading(false); }
  };

  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS==='ios'?'padding':'height'}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Family Registration</Text>
        {step===1 && (
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Enter Invite Code</Text>
            <TextInput style={styles.input} placeholder="XXXX-XXXX" value={inviteCode} onChangeText={t=>setInviteCode(formatCode(t))} maxLength={9} autoCapitalize='none' />
            {errors.inviteCode && <Text style={styles.error}>{errors.inviteCode}</Text>}
            <TouchableOpacity style={styles.primaryButton} onPress={validateInvite} disabled={loading}>
              {loading ? <ActivityIndicator color="#fff"/> : <Text style={styles.primaryButtonText}>Validate Code</Text>}
            </TouchableOpacity>
          </View>
        )}
        {step===2 && (
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Create Account</Text>
            <Text style={styles.helper}>Resident: {inviteData?.familyMember?.resident?.name}</Text>
            <Text style={styles.helper}>Care Home: {inviteData?.familyMember?.resident?.careHome?.name}</Text>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize='none' />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <View style={styles.row}>
              <TextInput style={[styles.input,styles.half]} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
              <TextInput style={[styles.input,styles.half]} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
            </View>
            {errors.firstName && <Text style={styles.error}>{errors.firstName}</Text>}
            {errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}
            <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}
            <TextInput style={styles.input} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
            {errors.confirm && <Text style={styles.error}>{errors.confirm}</Text>}
            {errors.submit && <Text style={styles.error}>{errors.submit}</Text>}
            <TouchableOpacity style={styles.primaryButton} onPress={register} disabled={loading}>
              {loading ? <ActivityIndicator color="#fff"/> : <Text style={styles.primaryButtonText}>Register</Text>}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{ setStep(1); }} style={styles.linkBtn}><Text style={styles.linkText}>Back</Text></TouchableOpacity>
          </View>
        )}
        {step===3 && (
          <ConfirmStep email={email} onConfirm={confirmAndLink} loading={loading} />
        )}
        <TouchableOpacity onPress={()=>navigation.replace('Login')} style={styles.linkBtn}><Text style={styles.linkText}>Back to Login</Text></TouchableOpacity>
        {DEBUG_UI && (
          <View style={{ marginTop:Spacing.lg, padding:8, borderWidth:1, borderColor:'#ddd', borderRadius:8 }}>
            <Text style={{ fontSize:11, fontWeight:'700', marginBottom:4 }}>DEBUG STATE</Text>
            <Text style={styles.debugLine}>step: {step}</Text>
            <Text style={styles.debugLine}>inviteData: {inviteData? 'yes':'no'}</Text>
            <Text style={styles.debugLine}>email: {email||'-'}</Text>
            <Text style={styles.debugLine}>firstName/lastName: {firstName}/{lastName}</Text>
            <Text style={styles.debugLine}>errors: {Object.keys(errors).length}</Text>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function ConfirmStep({ email, onConfirm, loading }){
  const [code,setCode]=useState('');
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Verify Email</Text>
      <Text style={styles.helper}>Check {email} for a verification code.</Text>
      <TextInput style={styles.input} placeholder="Verification Code" value={code} onChangeText={setCode} keyboardType='number-pad' />
      <TouchableOpacity style={styles.primaryButton} onPress={()=>onConfirm(code)} disabled={loading || code.length<4}>
        {loading ? <ActivityIndicator color="#fff"/> : <Text style={styles.primaryButtonText}>Confirm & Link</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flexGrow:1, padding:Spacing.lg, backgroundColor:Colors.background, justifyContent:'center' },
  title:{ fontSize:Typography.fontSize.xl, fontWeight:'700', textAlign:'center', marginBottom:Spacing.xl, color:Colors.textPrimary },
  card:{ backgroundColor:'#fff', borderRadius:12, padding:Spacing.lg, marginBottom:Spacing.lg, shadowColor:'#000', shadowOpacity:0.05, shadowRadius:6, shadowOffset:{width:0,height:2} },
  sectionTitle:{ fontSize:Typography.fontSize.lg, fontWeight:'600', marginBottom:Spacing.md, color:Colors.textPrimary },
  input:{ backgroundColor:Colors.lightBackground, borderRadius:8, paddingHorizontal:Spacing.md, height:48, marginBottom:Spacing.md, color:Colors.textPrimary, borderWidth:1, borderColor:Colors.border },
  primaryButton:{ backgroundColor:Colors.terriiDarkBlue, paddingVertical:14, borderRadius:10, alignItems:'center', marginTop:Spacing.sm },
  primaryButtonText:{ color:'#fff', fontSize:Typography.fontSize.md, fontWeight:'600' },
  linkBtn:{ alignItems:'center', marginTop:Spacing.md },
  linkText:{ color:Colors.terriiDarkBlue, fontWeight:'600' },
  row:{ flexDirection:'row', justifyContent:'space-between' },
  half:{ flex:1, marginRight:Spacing.sm },
  helper:{ fontSize:Typography.fontSize.sm, color:Colors.textSecondary, marginBottom:Spacing.sm },
  error:{ color:'red', marginBottom:Spacing.xs },
  debugLine:{ fontSize:10, color:'#555' },
});
