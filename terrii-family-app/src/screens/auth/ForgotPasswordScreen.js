import React, { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Auth } from 'aws-amplify';
import CustomButton from '../../components/CustomButton';
import styles from '../../styles';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const handleForgotPassword = async () => {
    setLoading(true); setError(''); setMessage('');
    try { await Auth.forgotPassword(email); setMessage('A reset code has been sent to your email.'); } catch(err){ setError(err.message || 'Error resetting password'); }
    setLoading(false);
  };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} style={styles.authContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps='handled'>
        <Text style={styles.authTitle}>Forgot Password</Text>
        <TextInput style={styles.authInput} placeholder="Email" autoCapitalize="none" onChangeText={setEmail} value={email} />
        {error !== '' && <Text style={styles.authError}>{error}</Text>}
        {message !== '' && <Text style={styles.authInfo}>{message}</Text>}
        {loading ? (<ActivityIndicator size="large" color="rgba(0,181,226,1)" />) : (<CustomButton title="Send Reset Code" onPress={handleForgotPassword} />)}
        <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordConfirm', { email })}><Text style={styles.authLinkText}>Already have a password reset code?</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.authLinkText}>Back to Sign In</Text></TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
