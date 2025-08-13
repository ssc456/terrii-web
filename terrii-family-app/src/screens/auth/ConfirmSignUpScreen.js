import React, { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Auth } from 'aws-amplify';
import CustomButton from '../../components/CustomButton';
import styles from '../../styles';

export default function ConfirmSignUpScreen({ navigation, route }) {
  const { email } = route.params || {};
  const [currEmail, setEmail] = useState(email);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleConfirm = async () => {
    setLoading(true); setError('');
    try { await Auth.confirmSignUp(currEmail, code); Alert.alert('Success','Your account has been confirmed.'); navigation.navigate('SignIn'); } catch(err){ setError(err.message || 'Error confirming sign up'); }
    setLoading(false);
  };
  const handleResend = async () => { try { await Auth.resendSignUp(currEmail); Alert.alert('Resent','A new confirmation code has been sent to your email.'); } catch (err) { Alert.alert('Error', err.message || 'Error resending code'); } };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}} keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="always">
        <Text style={styles.authTitle}>Confirm Sign Up</Text>
        <TextInput style={styles.authInput} placeholder={"Please enter your email address"} autoCapitalize="none" onChangeText={setEmail} value={currEmail} />
        <TextInput style={styles.authInput} placeholder="Confirmation Code" autoCapitalize="none" onChangeText={setCode} value={code} />
        {error !== '' && <Text style={styles.authError}>{error}</Text>}
        {loading ? (<ActivityIndicator size="large" color="rgba(0,181,226,1)" />) : (
          <>
            <CustomButton title="Confirm" onPress={handleConfirm} />
            <TouchableOpacity onPress={handleResend}><Text style={styles.authLinkText}>Resend Code</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}><Text style={styles.authLinkText}>Back to Sign In</Text></TouchableOpacity>
          </>) }
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
