import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../constants/Theme';
import { Auth } from 'aws-amplify';

export default function LoginScreen({ navigation, onSignedIn }) {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [showPassword,setShowPassword]=useState(false);
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState('');

  const handleLogin = async () => {
    setError('');
    if(!email.trim()||!password.trim()){ setError('Enter email and password'); return; }
    setIsLoading(true);
    try { const user = await Auth.signIn(email.trim(), password); onSignedIn && onSignedIn(user); } catch(e){ setError('Login failed'); } finally { setIsLoading(false); }
  };

  const goToRegister = () => {
    if(navigation && navigation.navigate){ navigation.navigate('Register'); }
  };
  const goToForgot = () => {
    if(navigation && navigation.navigate){ navigation.navigate('ForgotPassword'); }
  };

  return (
    <LinearGradient colors={[Colors.terriiBlue, Colors.terriiGreen]} style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':'height'} style={styles.keyboardAvoid}>
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          <View style={styles.header}>
            <Text style={styles.title}>TERRii Family</Text>
            <Text style={styles.subtitle}>Stay connected with your loved ones in care</Text>
          </View>
          <View style={styles.loginCard}>
            <Text style={styles.loginTitle}>Welcome Back</Text>
            <Text style={styles.loginSubtitle}>Sign in to view updates and stay connected</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Email address" placeholderTextColor={Colors.textLight} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={[styles.input,{paddingRight:50}]} placeholder="Password" placeholderTextColor={Colors.textLight} value={password} onChangeText={setPassword} secureTextEntry={!showPassword} autoCapitalize="none" />
              <TouchableOpacity style={styles.passwordToggle} onPress={()=>setShowPassword(!showPassword)}>
                <Text style={{color:Colors.textLight}}>{showPassword?'Hide':'Show'}</Text>
              </TouchableOpacity>
            </View>
            {error? <Text style={styles.error}>{error}</Text>:null}
            <TouchableOpacity style={[styles.loginButton,isLoading&&styles.loginButtonDisabled]} onPress={handleLogin} disabled={isLoading}>
              {isLoading? <ActivityIndicator color={Colors.cardBackground}/> : <Text style={styles.loginButtonText}>Sign In</Text>}
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotPassword} onPress={goToForgot}><Text style={styles.forgotPasswordText}>Forgot your password?</Text></TouchableOpacity>
            <View style={styles.divider}><View style={styles.dividerLine}/><Text style={styles.dividerText}>or</Text><View style={styles.dividerLine}/></View>
            <TouchableOpacity style={styles.registerButton} onPress={goToRegister}>
              <Text style={styles.registerButtonText}>Register with Invite Code</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}><Text style={styles.footerText}>Need help? Contact your care home directly</Text></View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{flex:1}, keyboardAvoid:{flex:1}, scrollContent:{flexGrow:1,justifyContent:'center',paddingHorizontal:Spacing.lg}, header:{alignItems:'center',marginBottom:Spacing.xl}, title:{fontSize:Typography.fontSize.xxxl,fontWeight:'bold',color:Colors.textPrimary,marginTop:Spacing.md,marginBottom:Spacing.sm}, subtitle:{fontSize:Typography.fontSize.md,color:Colors.textSecondary,textAlign:'center',lineHeight:Typography.lineHeight.md}, loginCard:{backgroundColor:Colors.cardBackground,borderRadius:BorderRadius.lg,padding:Spacing.lg,...Shadows.md}, loginTitle:{fontSize:Typography.fontSize.xl,fontWeight:'bold',color:Colors.textPrimary,textAlign:'center',marginBottom:Spacing.sm}, loginSubtitle:{fontSize:Typography.fontSize.md,color:Colors.textSecondary,textAlign:'center',marginBottom:Spacing.lg,lineHeight:Typography.lineHeight.md}, inputContainer:{flexDirection:'row',alignItems:'center',backgroundColor:Colors.lightBackground,borderRadius:BorderRadius.md,marginBottom:Spacing.md,paddingHorizontal:Spacing.md,borderWidth:1,borderColor:Colors.border}, input:{flex:1,height:50,fontSize:Typography.fontSize.md,color:Colors.textPrimary}, passwordToggle:{position:'absolute',right:Spacing.md,padding:Spacing.xs}, loginButton:{backgroundColor:Colors.terriiDarkBlue,borderRadius:BorderRadius.md,paddingVertical:Spacing.md,marginTop:Spacing.md}, loginButtonDisabled:{opacity:0.6}, loginButtonText:{color:Colors.cardBackground,fontSize:Typography.fontSize.lg,fontWeight:'600',textAlign:'center'}, forgotPassword:{marginTop:Spacing.lg,alignItems:'center'}, forgotPasswordText:{color:Colors.terriiDarkBlue,fontSize:Typography.fontSize.md,fontWeight:'500'}, footer:{marginTop:Spacing.xl,alignItems:'center'}, footerText:{color:Colors.textSecondary,fontSize:Typography.fontSize.sm,textAlign:'center'}, divider:{flexDirection:'row',alignItems:'center',marginVertical:Spacing.lg}, dividerLine:{flex:1,height:1,backgroundColor:Colors.border}, dividerText:{color:Colors.textLight,fontSize:Typography.fontSize.sm,marginHorizontal:Spacing.md}, registerButton:{backgroundColor:Colors.terriiGreen,borderRadius:BorderRadius.md,paddingVertical:Spacing.md}, registerButtonText:{color:Colors.cardBackground,fontSize:Typography.fontSize.lg,fontWeight:'600',textAlign:'center'}, error:{color:'red',textAlign:'center',marginBottom:Spacing.sm}
});
