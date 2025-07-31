import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Auth } from '../lib/amplify';
import { getTerriiUserProfile, updateTerriiUserProfile } from '../lib/terriiApi';
import awsconfig from '../aws-exports.ts';

// Define the TERRii user profile type
type TerriiUserProfile = {
  id: string;
  userID: string;
  role: string;
  careHomeID: string;
  careHome?: any;
  lastLogin?: string | null;
  profilePicture?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  // Added __typename to handle GraphQL responses
  __typename?: string;
  // Add any other fields that come back from the API
  [key: string]: any;
};

type AuthContextType = {
  isAuthenticated: boolean;
  isProfileSetup: boolean;
  isLoading: boolean;
  isSuperAdmin: boolean;
  isInRoleTestMode: boolean;
  currentTestRole: string | null;
  actualSuperAdmin: boolean; // Track if user is actually a superadmin vs just testing
  user: any; // Amplify user object
  terriiProfile: TerriiUserProfile | null;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  completeProfileSetup: () => void;
  updateTerriiProfile: (data: Partial<TerriiUserProfile>) => Promise<TerriiUserProfile>;
  exitRoleTestMode: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProfileSetup, setIsProfileSetup] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [terriiProfile, setTerriiProfile] = useState<TerriiUserProfile | null>(null);
  const [actualSuperAdmin, setActualSuperAdmin] = useState(false);
  
  // Role testing state
  const [isInRoleTestMode, setIsInRoleTestMode] = useState(false);
  const [currentTestRole, setCurrentTestRole] = useState<string | null>(null);
  
  // Computed values for role testing
  const isSuperAdmin = actualSuperAdmin && !isInRoleTestMode;

  // Check for existing auth session on mount
  useEffect(() => {
    checkAuthState();
  }, []);

  // Check for role test mode on component mount and localStorage changes
  useEffect(() => {
    const checkRoleTestMode = () => {
      const testRole = localStorage.getItem('role_test_mode');
      const testCareHomeId = localStorage.getItem('superadmin_login_as_care_home');
      
      console.log('🧪 Checking role test mode:', { 
        testRole, 
        testCareHomeId, 
        actualSuperAdmin, 
        user: user?.userId,
        currentIsInRoleTestMode: isInRoleTestMode 
      });
      
      if (testRole && testCareHomeId && actualSuperAdmin) {
        console.log('🧪 Role test mode detected:', testRole);
        setIsInRoleTestMode(true);
        setCurrentTestRole(testRole);
        
        // Create a mock terriiProfile with the test role
        const mockProfile: TerriiUserProfile = {
          id: 'test-profile',
          userID: user?.userId || 'test-user',
          role: testRole,
          careHomeID: testCareHomeId,
          __typename: 'TerriiUserProfile'
        };
        setTerriiProfile(mockProfile);
        console.log('🧪 Created mock profile for testing:', mockProfile);
      } else {
        // Only clear if we're currently in role test mode but don't have valid localStorage
        if (isInRoleTestMode && (!testRole || !testCareHomeId)) {
          console.log('🧪 Clearing role test mode - missing localStorage data');
          setIsInRoleTestMode(false);
          setCurrentTestRole(null);
          // Reset terriiProfile to original if we have one
          if (actualSuperAdmin) {
            // For superadmin, we clear the profile since they don't have a regular terriiProfile
            setTerriiProfile(null);
          }
        }
      }
    };

    // Run the check immediately
    checkRoleTestMode();
    
    // Listen for our custom role test mode events (for same-tab changes)
    const handleRoleTestModeChange = () => {
      console.log('🧪 Custom role test mode event detected, rechecking...');
      // Small delay to ensure localStorage is updated
      setTimeout(checkRoleTestMode, 50);
    };
    
    // Listen for localStorage changes from other tabs (this doesn't fire for same-tab changes)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'role_test_mode' || e.key === 'superadmin_login_as_care_home') {
        console.log('🧪 LocalStorage changed from another tab, rechecking role test mode');
        checkRoleTestMode();
      }
    };
    
    window.addEventListener('role-test-mode-changed', handleRoleTestModeChange);
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('role-test-mode-changed', handleRoleTestModeChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [actualSuperAdmin, user, isInRoleTestMode]);

  const checkAuthState = async () => {
    try {
      const currentUser = await Auth.getCurrentUser();
      console.log('Current user from Amplify:', currentUser);
      setUser(currentUser);
      setIsAuthenticated(true);
      setIsProfileSetup(true); // Assuming user profile is set up if authenticated
      
      // Check if user is a super admin (has @acecura.com email)
      const userAttributes = await Auth.fetchUserAttributes();
      const userEmail = userAttributes.email || '';
      console.log('User email:', userEmail); // Debug log
      console.log('Is email @acecura.com?', userEmail.endsWith('@acecura.com'));
      setActualSuperAdmin(userEmail.endsWith('@acecura.com'));
      
      // Check for TERRii profile
      try {
        const profile = await getTerriiUserProfile(currentUser.userId);
        if (profile) {
          setTerriiProfile(profile as TerriiUserProfile);
          // Update last login time
          await updateTerriiUserProfile(profile.id, { 
            lastLogin: new Date().toISOString() 
          });
        }
      } catch (profileError) {
        console.error('Error fetching TERRii profile:', profileError);
      }
      
      console.log('User is signed in');
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      setIsProfileSetup(false);
      setTerriiProfile(null);
      setActualSuperAdmin(false);
      console.log('User is not signed in');
    }
    setIsLoading(false);
  };

  const login = async (email: string, password: string) => {
    try {
      console.log('Attempting login with email:', email);
      console.log('GraphQL endpoint:', awsconfig.aws_appsync_graphqlEndpoint);
      console.log('Cognito User Pool ID:', awsconfig.aws_user_pools_id);
      
      const { isSignedIn, nextStep } = await Auth.signIn({ username: email, password });
      
      if (isSignedIn) {
        console.log('Sign in successful');
        const currentUser = await Auth.getCurrentUser();
        console.log('Current user:', currentUser);
        setUser(currentUser);
        setIsAuthenticated(true);
        setIsProfileSetup(true); // Assuming user profile is set up if authenticated
        
        // Check if user is a super admin (has @acecura.com email)
        const userAttributes = await Auth.fetchUserAttributes();
        const userEmail = userAttributes.email || '';
        console.log('User email from login:', userEmail); // Debug log
        setActualSuperAdmin(userEmail.endsWith('@acecura.com'));
        
        // Check for TERRii profile
        try {
          console.log('Fetching TERRii profile for user:', currentUser.userId);
          const profile = await getTerriiUserProfile(currentUser.userId);
          if (profile) {
            console.log('TERRii profile found:', profile);
            setTerriiProfile(profile as TerriiUserProfile);
            // Update last login time
            await updateTerriiUserProfile(profile.id, { 
              lastLogin: new Date().toISOString() 
            });
          } else {
            console.log('No TERRii profile found for user');
          }
        } catch (profileError) {
          console.error('Error fetching TERRii profile:', profileError);
        }
        
        return currentUser;
      } else {
        // Handle next steps if any (MFA, etc.)
        console.log('Authentication requires additional steps:', nextStep);
        throw new Error(`Authentication requires additional steps: ${nextStep?.signInStep}`);
      }
    } catch (error) {
      console.error('Error signing in:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      throw error;
    }
  };

  const updateTerriiProfile = async (data: Partial<TerriiUserProfile>) => {
    if (!terriiProfile) {
      throw new Error('No TERRii profile found to update');
    }
    
    const updatedProfile = await updateTerriiUserProfile(terriiProfile.id, data);
    setTerriiProfile(updatedProfile);
    return updatedProfile;
  };

  const logout = async () => {
    try {
      await Auth.signOut();
      setUser(null);
      setIsAuthenticated(false);
      setIsProfileSetup(false);
      setTerriiProfile(null);
      setActualSuperAdmin(false);
      setIsInRoleTestMode(false);
      setCurrentTestRole(null);
      // Clear any role testing localStorage items
      localStorage.removeItem('role_test_mode');
      localStorage.removeItem('superadmin_login_as_care_home');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const exitRoleTestMode = () => {
    console.log('🧪 Exiting role test mode');
    localStorage.removeItem('role_test_mode');
    localStorage.removeItem('superadmin_login_as_care_home');
    setIsInRoleTestMode(false);
    setCurrentTestRole(null);
    
    // Reset terriiProfile to original if we have one
    if (actualSuperAdmin) {
      // For superadmin, we clear the profile since they don't have a regular terriiProfile
      setTerriiProfile(null);
    }
  };

  const completeProfileSetup = () => {
    setIsProfileSetup(true);
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      isProfileSetup, 
      isLoading,
      isSuperAdmin,
      isInRoleTestMode,
      currentTestRole,
      actualSuperAdmin,
      user,
      terriiProfile,
      login, 
      logout,
      completeProfileSetup,
      updateTerriiProfile,
      exitRoleTestMode
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}