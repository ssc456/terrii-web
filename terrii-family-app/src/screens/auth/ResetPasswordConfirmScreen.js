import React, { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Auth } from 'aws-amplify';
import CustomButton from '../../components/CustomButton';
import styles from '../../styles';

export default function ResetPasswordConfirmScreen({ navigation, route }) {
  const { email } = route.params || {};
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleReset = async () => {
    if (newPassword !== confirmNewPassword) { setError('Passwords do not match'); return; }
    setLoading(true); setError('');
    try { await Auth.forgotPasswordSubmit(email, code, newPassword); Alert.alert('Success','Your password has been reset.'); navigation.navigate('SignIn'); } catch(err){ setError(err.message || 'Error resetting password'); }
    setLoading(false);
  };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} style={styles.authContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <Text style={styles.authTitle}>Reset Password</Text>
        <TextInput style={styles.authInput} placeholder="Reset Code" autoCapitalize="none" onChangeText={setCode} value={code} />
        <TextInput style={styles.authInput} placeholder="New Password" secureTextEntry onChangeText={setNewPassword} value={newPassword} />
        <TextInput style={styles.authInput} placeholder="Confirm New Password" secureTextEntry onChangeText={setConfirmNewPassword} value={confirmNewPassword} />
        <Text style={styles.passwordRequirements}>Password requirements:{"\n"}- Contains at least 1 number{"\n"}- Contains at least 1 uppercase letter{"\n"}- Contains at least 1 lowercase letter</Text>
        {error !== '' && <Text style={styles.authError}>{error}</Text>}
        {loading ? (<ActivityIndicator size="large" color="rgba(0,181,226,1)" />) : (<CustomButton title="Reset Password" onPress={handleReset} />)}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.authLinkText}>Back to Sign In</Text></TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
