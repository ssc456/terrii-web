import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ResidentsScreen } from './screens/ResidentsScreen';
import { ResidentProfileScreen } from './screens/ResidentProfileScreen';
import { MessagesScreen } from './screens/MessagesScreen';
import { MomentsScreen } from './screens/MomentsScreen';
import { CommunityScreen } from './screens/CommunityScreen';
import { CareHomeSelectionScreen } from './screens/CareHomeSelectionScreen';
import { SuperAdminDashboard } from './screens/SuperAdminDashboard';
import { CareHomeManagement } from './screens/CareHomeManagement';
import { UserManagement } from './screens/UserManagement';
import { TerriiOnboarding } from './components/TerriiOnboarding';
import './utils/testUtils'; // Load test utilities for debugging

// Protected route wrapper
function ProtectedRoute({ children }: { children: React.ReactElement }) {
  const { isAuthenticated, isLoading, terriiProfile, isSuperAdmin } = useAuth();
  const [showOnboarding, setShowOnboarding] = useState(false);
  
  // Show a loading state while checking auth
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-terrii-text-primary">Loading...</div>
    </div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check for superadmin first - this should take precedence
  const location = window.location.pathname;
  if (isSuperAdmin && location === '/') {
    return <Navigate to="/admin" replace />;
  }
  
  if (isSuperAdmin && (!terriiProfile || !terriiProfile.careHomeID) && location !== '/select-care-home' && !location.startsWith('/admin')) {
    console.log('Redirecting superadmin to admin dashboard');
    return <Navigate to="/admin" replace />;
  }
  
  // Then handle regular users who need onboarding
  if (!terriiProfile && !showOnboarding) {
    return (
      <div className="min-h-screen bg-terrii-blue/20 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <TerriiOnboarding onComplete={() => setShowOnboarding(true)} />
        </div>
      </div>
    );
  }
  
  // Handle users who completed onboarding but need to select a care home
  if (showOnboarding || (terriiProfile && !terriiProfile.careHomeID && location !== '/select-care-home')) {
    return <Navigate to="/select-care-home" replace />;
  }
  
  return children;
}

function AppRoutes() {
  const { isAuthenticated, isSuperAdmin } = useAuth();
  
  return (
    <Routes>
      <Route 
        path="/login" 
        element={isAuthenticated ? <Navigate to="/" replace /> : <LoginScreen />} 
      />
      <Route 
        path="/select-care-home" 
        element={
          <ProtectedRoute>
            <CareHomeSelectionScreen />
          </ProtectedRoute>
        } 
      />
      
      {/* Super Admin Routes */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            {isSuperAdmin ? <SuperAdminDashboard /> : <Navigate to="/" replace />}
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/care-homes" 
        element={
          <ProtectedRoute>
            {isSuperAdmin ? <CareHomeManagement /> : <Navigate to="/" replace />}
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/users" 
        element={
          <ProtectedRoute>
            {isSuperAdmin ? <UserManagement /> : <Navigate to="/" replace />}
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/settings" 
        element={
          <ProtectedRoute>
            {isSuperAdmin ? (
              <div className="min-h-screen p-4 flex items-center justify-center">
                <p className="text-terrii-text-primary">Admin Settings Coming Soon</p>
              </div>
            ) : <Navigate to="/" replace />}
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            {isSuperAdmin ? <SuperAdminDashboard /> : <HomeScreen />}
          </ProtectedRoute>
        } 
      />
      <Route
        path="/residents"
        element={
          <ProtectedRoute>
            <ResidentsScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/residents/:id"
        element={
          <ProtectedRoute>
            <ResidentProfileScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/messages"
        element={
          <ProtectedRoute>
            <MessagesScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moments"
        element={
          <ProtectedRoute>
            <MomentsScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/community"
        element={
          <ProtectedRoute>
            <CommunityScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/angela"
        element={
          <ProtectedRoute>
            <div className="min-h-screen p-4 flex items-center justify-center">
              <p className="text-terrii-text-primary">Angela Screen Coming Soon</p>
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/insights"
        element={
          <ProtectedRoute>
            <div className="min-h-screen p-4 flex items-center justify-center">
              <p className="text-terrii-text-primary">Insights Screen Coming Soon</p>
            </div>
          </ProtectedRoute>
        }
      />
      {/* Add a "catch-all" redirect for unmatched routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
        <Toaster position="top-center" />
      </AuthProvider>
    </BrowserRouter>
  );
}
