import { createContext, useContext, useState, ReactNode } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  isProfileSetup: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  completeProfileSetup: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProfileSetup, setIsProfileSetup] = useState(false);

  const login = async (email: string, password: string) => {
    // For MVP, accept any email/password
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API call
    setIsAuthenticated(true);
    setIsProfileSetup(true); // For MVP, skip profile setup
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsProfileSetup(false);
  };

  const completeProfileSetup = () => {
    setIsProfileSetup(true);
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      isProfileSetup, 
      login, 
      logout,
      completeProfileSetup 
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