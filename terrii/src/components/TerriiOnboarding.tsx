import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { createTerriiUserProfile, listCareHomes, createCareHome } from '../lib/terriiApi';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { toast } from 'sonner';

type TerriiOnboardingProps = {
  onComplete: () => void;
};

export function TerriiOnboarding({ onComplete }: TerriiOnboardingProps) {
  const { user, isSuperAdmin } = useAuth();
  const [careHomes, setCareHomes] = useState<any[]>([]);
  const [selectedCareHome, setSelectedCareHome] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('CARE_STAFF');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCareHomeName, setNewCareHomeName] = useState('');
  const [newCareHomeAddress, setNewCareHomeAddress] = useState('');
  const [creatingCareHome, setCreatingCareHome] = useState(false);

  useEffect(() => {
    const loadCareHomes = async () => {
      try {
        const homes = await listCareHomes();
        setCareHomes(homes);
        if (homes.length > 0) {
          setSelectedCareHome(homes[0].id);
        }
      } catch (error) {
        console.error('Error loading care homes:', error);
        toast.error('Failed to load care homes');
      }
    };

    loadCareHomes();
  }, []);

  const handleCreateCareHome = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCareHomeName) {
      toast.error('Please enter a care home name');
      return;
    }
    try {
      setCreatingCareHome(true);
      await createCareHome({
        name: newCareHomeName,
        address: newCareHomeAddress,
        createdByID: user?.userId // Pass the user ID to associate as admin
      });
      toast.success('Care home created successfully');
      setShowCreateForm(false);
      setNewCareHomeName('');
      setNewCareHomeAddress('');
      // Refresh care homes list
      const homes = await listCareHomes();
      setCareHomes(homes);
      if (homes.length > 0) {
        setSelectedCareHome(homes[0].id);
      }
    } catch (error) {
      console.error('Error creating care home:', error);
      toast.error('Failed to create care home');
    } finally {
      setCreatingCareHome(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCareHome) {
      toast.error('Please select a care home');
      return;
    }

    try {
      setIsLoading(true);
      
      await createTerriiUserProfile(
        user.userId,
        selectedCareHome,
        role as 'ADMIN' | 'CARE_STAFF' | 'MANAGER',
        user.attributes?.picture || null
      );
      
      toast.success('TERRii profile created successfully');
      onComplete();
    } catch (error) {
      console.error('Error creating TERRii profile:', error);
      toast.error('Failed to create TERRii profile');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-terrii">
      <h2 className="text-xl font-bold text-terrii-text-primary mb-4">Welcome to TERRii</h2>

      {step === 1 && (
        <div>
          <p className="text-terrii-text-secondary mb-6">
            Let's set up your TERRii profile to manage care home residents.
          </p>

          {/* If no care homes and superadmin, show create button or form */}
          {isSuperAdmin && careHomes.length === 0 && !showCreateForm && (
            <div className="mb-6">
              <Button
                onClick={() => setShowCreateForm(true)}
                className="w-full bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
              >
                Create Your First Care Home
              </Button>
            </div>
          )}

          {/* Create Care Home Form */}
          {isSuperAdmin && showCreateForm && (
            <form onSubmit={handleCreateCareHome} className="space-y-4 mb-6">
              <h3 className="text-lg font-medium text-terrii-text-primary">Create New Care Home</h3>
              <Input
                label="Care Home Name"
                value={newCareHomeName}
                onChange={(e) => setNewCareHomeName(e.target.value)}
                placeholder="Enter care home name"
                required
              />
              <Input
                label="Address (Optional)"
                value={newCareHomeAddress}
                onChange={(e) => setNewCareHomeAddress(e.target.value)}
                placeholder="Enter address"
              />
              <div className="flex justify-between pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowCreateForm(false)}
                  disabled={creatingCareHome}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
                  isLoading={creatingCareHome}
                >
                  Create Care Home
                </Button>
              </div>
            </form>
          )}

          {/* Care home selection form (if care homes exist) */}
          {careHomes.length > 0 && (
            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="careHome"
                  className="block text-sm font-medium text-terrii-text-primary"
                >
                  Select your care home
                </label>
                <select
                  id="careHome"
                  value={selectedCareHome}
                  onChange={(e) => setSelectedCareHome(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-terrii-blue"
                  required
                >
                  <option value="" disabled>Select a care home</option>
                  {careHomes.map(home => (
                    <option key={home.id} value={home.id}>
                      {home.name}
                    </option>
                  ))}
                </select>
              </div>
              <Button
                type="submit"
                className="w-full bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
              >
                Continue
              </Button>
            </form>
          )}
        </div>
      )}
      
      {step === 2 && (
        <div>
          <p className="text-terrii-text-secondary mb-6">
            What is your role at the care home?
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="grid grid-cols-1 gap-3">
                <button
                  type="button"
                  onClick={() => setRole('CARE_STAFF')}
                  className={`p-4 text-left rounded-lg border ${
                    role === 'CARE_STAFF'
                      ? 'border-terrii-blue bg-terrii-blue/10'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="font-medium">Care Staff</div>
                  <div className="text-sm text-terrii-text-secondary">
                    Access to resident information and daily care activities
                  </div>
                </button>
                
                <button
                  type="button"
                  onClick={() => setRole('MANAGER')}
                  className={`p-4 text-left rounded-lg border ${
                    role === 'MANAGER'
                      ? 'border-terrii-blue bg-terrii-blue/10'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="font-medium">Care Manager</div>
                  <div className="text-sm text-terrii-text-secondary">
                    Full access including staff management and reporting
                  </div>
                </button>
                
                <button
                  type="button"
                  onClick={() => setRole('ADMIN')}
                  className={`p-4 text-left rounded-lg border ${
                    role === 'ADMIN'
                      ? 'border-terrii-blue bg-terrii-blue/10'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="font-medium">Administrator</div>
                  <div className="text-sm text-terrii-text-secondary">
                    Complete system access including care home settings
                  </div>
                </button>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => setStep(1)}
                className="flex-1"
              >
                Back
              </Button>
              
              <Button 
                type="submit" 
                className="flex-1 bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
                isLoading={isLoading}
              >
                Complete Setup
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
