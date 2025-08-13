import React, { useState } from 'react';
import { ActivityIndicator, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Auth } from 'aws-amplify';
import CustomButton from '../../components/CustomButton';
import styles from '../../styles';
import aceLogo from '../../../assets/icon.png';

export default function SignInScreen({ navigation, onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleSignIn = async () => {
    setLoading(true);
    setError('');
    try {
      const user = await Auth.signIn(email, password);
      onSignIn(user);
    } catch (err) {
      setError('Error signing in, please check your email address and password');
    }
    setLoading(false);
  };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} style={styles.authContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps='handled'>
        <Image source={aceLogo} style={styles.logo} />
        <Text style={styles.authTitle}>Sign In</Text>
        <TextInput style={styles.authInput} placeholder="Email" autoCapitalize="none" onChangeText={setEmail} value={email} />
        <TextInput style={styles.authInput} placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
        {error !== '' && <Text style={styles.authError}>{error}</Text>}
        {loading ? (
          <ActivityIndicator size="large" color="rgba(0,181,226,1)" />
        ) : (
          <CustomButton title="Sign In" onPress={handleSignIn} />
        )}
        <View style={styles.authLinks}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.authLinkText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.authLinkText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ConfirmSignUp')}>
            <Text style={styles.authLinkText}>Have a registration confirmation code?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordConfirm')}>
            <Text style={styles.authLinkText}>Have a password reset code?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
