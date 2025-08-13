import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Colors, Typography, Spacing } from '../constants/Theme';
import { Auth } from 'aws-amplify';

export default function EmailVerificationScreen({ route, navigation, onVerified }) {
  const { email, residentName } = route.params || {};
  const [code,setCode]=useState('');
  const [loading,setLoading]=useState(false);
  const debug = (l,v)=>console.log(`[VerifyDebug] ${l}:`, v);

  const confirm = async () => {
    try {
      setLoading(true);
      await Auth.confirmSignUp(email, code.trim());
      const user = await Auth.signIn(email, route.params?.password || '');
      debug('SignedInUser', user?.attributes?.sub);
      if(onVerified) onVerified(user);
      else navigation.replace('Login');
    } catch(e){
      console.log('Verification error', e);
      Alert.alert('Error', e.message||'Failed to verify');
    } finally { setLoading(false); }
  };

  const resend = async () => {
    try { setLoading(true); await Auth.resendSignUp(email); Alert.alert('Sent','Verification code re-sent'); } catch(e){ Alert.alert('Error', e.message||'Failed to resend'); } finally { setLoading(false); }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Email</Text>
      <Text style={styles.subtitle}>We sent a code to {email}</Text>
      {residentName && <Text style={styles.subtitle}>Invitation for: {residentName}</Text>}
      <TextInput style={styles.input} placeholder="Verification Code" value={code} onChangeText={setCode} keyboardType='number-pad' />
      <TouchableOpacity style={styles.primaryButton} disabled={loading||code.length<4} onPress={confirm}>
        {loading ? <ActivityIndicator color="#fff"/> : <Text style={styles.primaryButtonText}>Confirm</Text>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkBtn} onPress={resend} disabled={loading}>
        <Text style={styles.linkText}>Resend Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:'center', padding:Spacing.lg, backgroundColor:Colors.background },
  title:{ fontSize:Typography.fontSize.xl, fontWeight:'700', color:Colors.textPrimary, marginBottom:Spacing.sm, textAlign:'center' },
  subtitle:{ fontSize:Typography.fontSize.sm, color:Colors.textSecondary, textAlign:'center', marginBottom:Spacing.xs },
  input:{ backgroundColor:Colors.lightBackground, borderRadius:8, paddingHorizontal:Spacing.md, height:52, marginTop:Spacing.lg, color:Colors.textPrimary, borderWidth:1, borderColor:Colors.border },
  primaryButton:{ backgroundColor:Colors.terriiDarkBlue, paddingVertical:14, borderRadius:10, alignItems:'center', marginTop:Spacing.lg },
  primaryButtonText:{ color:'#fff', fontSize:Typography.fontSize.md, fontWeight:'600' },
  linkBtn:{ alignItems:'center', marginTop:Spacing.md },
  linkText:{ color:Colors.terriiDarkBlue, fontWeight:'600' },
});
