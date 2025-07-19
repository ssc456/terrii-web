import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { toast } from 'sonner';

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please enter your email and password');
      return;
    }
    
    try {
      setIsLoading(true);
      await login(email, password);
      toast.success('Welcome to TERRii!');
    } catch (error) {
      toast.error('Failed to log in');
      console.error(error);
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
          
          <form onSubmit={handleSubmit} className="space-y-4">
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
              >
                Forgot your password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}