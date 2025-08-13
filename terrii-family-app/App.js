// Minimal auth-only clone of Acecura using identical Amplify + polyfills
import './src/crypto-shim';
import './src/global';
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { AppContext } from './src/context';
import LoginScreen from './src/screens/LoginScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import MomentsScreen from './src/screens/MomentsScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import EmailVerificationScreen from './src/screens/EmailVerificationScreen';
import ForgotPasswordScreen from './src/screens/auth/ForgotPasswordScreen';
import ResetPasswordConfirmScreen from './src/screens/auth/ResetPasswordConfirmScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './src/styles';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TopNavigation, { NAV_SCREENS } from './src/components/TopNavigation';
import SettingsScreen from './src/screens/SettingsScreen';
import { getUser, listTerriiUserProfiles } from './src/graphql/queries';
import { createUser, createTerriiUserProfile } from './src/graphql/mutations';

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PlaceholderScreen({ title, subtitle }){
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:32}}>
      <Text style={{fontSize:22, fontWeight:'700', color:'#222', marginBottom:8}}>{title}</Text>
      <Text style={{fontSize:14, color:'#666', textAlign:'center', lineHeight:20}}>{subtitle}</Text>
    </View>
  );
}

export default function App() {
  const [authState, setAuthState] = useState('loading');
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(false);
  const [appScreen,setAppScreen] = useState('moments');

  useEffect(() => {
    (async () => {
      try {
        const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
        setUser(authUser);
        setAuthState('signedIn');
      } catch (e) {
        setAuthState('signIn');
      }
    })();
  }, []);

  const handleSignIn = (user) => {
    setUser(user);
    setAuthState('signedIn');
  };

  const signOut = async () => {
    try { await Auth.signOut(); } catch(e) { console.log('[SignOut.error]', e); }
    setUser(null);
    setAuthState('signIn');
  };

  const ensureUserAndProfile = async (authUser) => {
    if(!authUser) return;
    const uid = authUser?.attributes?.sub || authUser?.username;
    if(!uid) return;
    try {
      setProfileLoading(true);
      console.log('[BootstrapProfile] start', { uid });
      // 1. Get User row
      let userRowResp = await API.graphql(graphqlOperation(getUser,{ id:uid }));
      let userRow = userRowResp?.data?.getUser;
      console.log('[BootstrapProfile] getUser', userRow);
      // 2. If missing create user row
      if(!userRow){
        try {
          const name = `${authUser?.attributes?.given_name||''} ${authUser?.attributes?.family_name||''}`.trim() || undefined;
          const createUserResp = await API.graphql(graphqlOperation(createUser,{ input:{ id:uid, firstName:authUser?.attributes?.given_name, lastName:authUser?.attributes?.family_name, name } }));
            userRow = createUserResp?.data?.createUser;
            console.log('[BootstrapProfile] createUser.done', userRow?.id);
        } catch(cuErr){ console.log('[BootstrapProfile] createUser.error', cuErr); }
      }
      // 3. Determine existing profile (prefer embedded)
      let profile = userRow?.terriiProfile || null;
      if(!profile){
        // list profiles by userID
        try {
          const listResp = await API.graphql(graphqlOperation(listTerriiUserProfiles,{ filter:{ userID:{ eq:uid } }, limit:1 }));
          profile = listResp?.data?.listTerriiUserProfiles?.items?.[0] || null;
          console.log('[BootstrapProfile] listProfiles.result', profile);
        } catch(lpErr){ console.log('[BootstrapProfile] listProfiles.error', lpErr); }
      }
      // 4. If still none create minimal FAMILY profile
      if(!profile){
        try {
          const createProfResp = await API.graphql(graphqlOperation(createTerriiUserProfile,{ input:{ userID:uid, role:'FAMILY' } }));
          profile = createProfResp?.data?.createTerriiUserProfile || null;
          console.log('[BootstrapProfile] createProfile.result', profile);
        } catch(cpErr){ console.log('[BootstrapProfile] createProfile.error', cpErr); }
      }
      setUserProfile(profile);
      console.log('[BootstrapProfile] complete', { hasProfile: !!profile, profileId: profile?.id });
    } finally {
      setProfileLoading(false);
    }
  };

  useEffect(()=>{ if(authState==='signedIn' && user) { ensureUserAndProfile(user); } }, [authState, user]);

  if (authState === 'loading') {
    return <LoadingScreen />;
  }
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <AppContext.Provider value={{ user, userProfile, profileLoading, signOut }}>
          {authState === 'signedIn' ? (
            <NavigationContainer>
              <View style={{flex:1}}>
                <TopNavigation currentScreen={appScreen} onNavigate={(s)=>setAppScreen(s)} onShowUpgrade={()=>{}} />
                <SafeAreaView style={{flex:1}} edges={['left','right','bottom']}>
                  {appScreen==='moments' && <MomentsScreen />}
                  {appScreen==='home' && <PlaceholderScreen title='Home' subtitle='Home feed coming soon.' />}
                  {appScreen==='community' && <CommunityScreen />}
                  {appScreen==='settings' && <SettingsScreen />}
                </SafeAreaView>
              </View>
            </NavigationContainer>
          ) : (
            <NavigationContainer>
              <AuthStack.Navigator screenOptions={{ headerShown: false }}>
                <AuthStack.Screen name="Login">
                  {(props) => <LoginScreen {...props} onSignedIn={handleSignIn} />}
                </AuthStack.Screen>
                <AuthStack.Screen name="Register" component={RegistrationScreen} />
                <AuthStack.Screen name="VerifyEmail">
                  {(props) => <EmailVerificationScreen {...props} onVerified={(signedUser)=>handleSignIn(signedUser)} />}
                </AuthStack.Screen>
                <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <AuthStack.Screen name="ResetPasswordConfirm" component={ResetPasswordConfirmScreen} />
              </AuthStack.Navigator>
              <StatusBar style="auto" />
            </NavigationContainer>
          )}
        </AppContext.Provider>
      </View>
    </SafeAreaProvider>
  );
}
