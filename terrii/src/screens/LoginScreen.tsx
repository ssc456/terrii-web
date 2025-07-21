import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { toast } from 'sonner';
import { Auth } from '../lib/amplify';
// No need to import amplify.ts again since we're importing Auth from it

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!email || !password) {
      toast.error('Please enter your email and password');
      return;
    }
    
    try {
      setIsLoading(true);
      await login(email, password);
      toast.success('Welcome to TERRii!');
    } catch (error: any) {
      console.error('Login error:', error);
      
      // Handle different Cognito error types
      if (error.code === 'UserNotConfirmedException' || 
          (error.message && error.message.includes('User is not confirmed'))) {
        setErrorMessage('Please verify your account by clicking the link in your email');
      } else if (error.code === 'NotAuthorizedException' || 
                (error.message && error.message.includes('Incorrect username or password'))) {
        setErrorMessage('Incorrect username or password');
      } else if (error.code === 'UserNotFoundException' || 
                (error.message && error.message.includes('User does not exist'))) {
        setErrorMessage('User does not exist');
      } else if (error.code === 'PasswordResetRequiredException' || 
                (error.message && error.message.includes('Password reset required'))) {
        setErrorMessage('Password reset required. Please reset your password');
        handleForgotPassword();
      } else {
        setErrorMessage(error.message || 'Failed to log in. Please try again.');
      }
      
      toast.error('Failed to log in');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setErrorMessage('Please enter your email address to reset your password');
      return;
    }

    try {
      setIsLoading(true);
      await Auth.resetPassword({ username: email });
      setIsResetPassword(true);
      toast.success('Password reset code sent to your email');
    } catch (error: any) {
      console.error('Forgot password error:', error);
      setErrorMessage(error.message || 'Failed to send reset code. Please try again.');
      toast.error('Failed to send reset code');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !resetCode || !newPassword) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    try {
      setIsLoading(true);
      await Auth.confirmResetPassword({
        username: email,
        confirmationCode: resetCode,
        newPassword
      });
      toast.success('Password reset successful! Please log in with your new password');
      setIsResetPassword(false);
      setResetCode('');
      setNewPassword('');
    } catch (error: any) {
      console.error('Reset password error:', error);
      setErrorMessage(error.message || 'Failed to reset password. Please try again.');
      toast.error('Failed to reset password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-terrii-blue/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-terrii p-6 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-terrii-text-primary">TERRii</h1>
            <p className="text-terrii-text-secondary mt-2">Care staff platform</p>
          </div>
          
          {!isResetPassword ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
                  {errorMessage}
                </div>
              )}
              
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
              />
              
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
              
              <Button 
                type="submit" 
                className="w-full bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary" 
                isLoading={isLoading}
              >
                Log In
              </Button>
              
              <div className="text-center">
                <button
                  type="button"
                  className="text-terrii-text-secondary hover:text-terrii-text-primary text-sm underline"
                  onClick={handleForgotPassword}
                >
                  Forgot your password?
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleResetPassword} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
                  {errorMessage}
                </div>
              )}
              
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                disabled={isLoading}
              />
              
              <Input
                label="Verification Code"
                type="text"
                value={resetCode}
                onChange={(e) => setResetCode(e.target.value)}
                placeholder="Enter the code sent to your email"
                required
                disabled={isLoading}
              />
              
              <Input
                label="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={isLoading}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
                isLoading={isLoading}
              >
                Reset Password
              </Button>
              
              <div className="text-center">
                <button
                  type="button"
                  className="text-terrii-text-secondary hover:text-terrii-text-primary text-sm underline"
                  onClick={() => setIsResetPassword(false)}
                >
                  Back to Login
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}