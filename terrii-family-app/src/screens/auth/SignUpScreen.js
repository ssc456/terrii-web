import React, { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, View, Platform } from 'react-native';
import { Auth } from 'aws-amplify';
import CustomButton from '../../components/CustomButton';
import styles from '../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleSignUp = async () => {
    setLoading(true);
    setError('');
    setInfo('');
    setEmail(email.trim());
    if (password !== confirmPassword) { setError('Passwords do not match'); setLoading(false); return; }
    try {
      await Auth.signUp({ username: email, password: password, attributes: { email } });
      setInfo('Sign up successful. Please check your email for confirmation.');
      navigation.navigate('ConfirmSignUp', { email });
    } catch (err) {
      setError(err.message || 'Error signing up');
    }
    setLoading(false);
  };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} style={styles.authContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <Text style={styles.authTitle}>Sign Up</Text>
        <TextInput style={styles.authInput} placeholder="Email" autoCapitalize="none" onChangeText={setEmail} value={email} />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <TextInput style={[styles.authInput, { flex: 1 }]} placeholder="Password" secureTextEntry={!showPassword} onChangeText={setPassword} value={password} />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ padding: 10 }}>
            <MaterialCommunityIcons name={showPassword ? 'eye-off' : 'eye'} size={24} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <TextInput style={[styles.authInput, { flex: 1 }]} placeholder="Confirm Password" secureTextEntry={!showConfirmPassword} onChangeText={setConfirmPassword} value={confirmPassword} />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={{ padding: 10 }}>
            <MaterialCommunityIcons name={showConfirmPassword ? 'eye-off' : 'eye'} size={24} />
          </TouchableOpacity>
        </View>
        <Text style={styles.passwordRequirements}>Password requirements:{"\n"}- Contains at least 1 number{"\n"}- Contains at least 1 uppercase letter{"\n"}- Contains at least 1 lowercase letter</Text>
        {error !== '' && <Text style={styles.authError}>{error}</Text>}
        {info !== '' && <Text style={styles.authInfo}>{info}</Text>}
        {loading ? (<ActivityIndicator size="large" color="rgba(0,181,226,1)" />) : (<CustomButton title="Sign Up" onPress={handleSignUp} />)}
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.authLinkText}>Already have an account? Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
