import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ResidentsScreen } from './screens/ResidentsScreen';
import { ResidentProfileScreen } from './screens/ResidentProfileScreen';
import { MessagesScreen } from './screens/MessagesScreen';
import { MomentsScreen } from './screens/MomentsScreen';

// Protected route wrapper
function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

function AppRoutes() {
  const { isAuthenticated } = useAuth();
  
  return (
    <Routes>
      <Route 
        path="/login" 
        element={isAuthenticated ? <Navigate to="/" replace /> : <LoginScreen />} 
      />
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <HomeScreen />
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
        path="/angela"
        element={
          <ProtectedRoute>
            {/* <AngelaScreen /> */}
          </ProtectedRoute>
        }
      />
      <Route
        path="/insights"
        element={
          <ProtectedRoute>
            {/* <InsightsScreen /> */}
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
