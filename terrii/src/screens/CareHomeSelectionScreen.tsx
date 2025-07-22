import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { listCareHomes, createCareHome } from '../lib/terriiApi';
import { toast } from 'sonner';
import { Building, Plus, ArrowRight } from 'lucide-react';

export function CareHomeSelectionScreen() {
  const { user, terriiProfile, updateTerriiProfile, isSuperAdmin } = useAuth();
  const [careHomes, setCareHomes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCareHomeId, setSelectedCareHomeId] = useState<string | null>(
    terriiProfile?.careHomeID || null
  );
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCareHomeName, setNewCareHomeName] = useState('');
  const [newCareHomeAddress, setNewCareHomeAddress] = useState('');
  const [creatingCareHome, setCreatingCareHome] = useState(false);
  const navigate = useNavigate();

  // Check for super admin "login as" functionality
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const loginAsCareHomeId = urlParams.get('loginAs');
    const superAdminLoginId = localStorage.getItem('superadmin_login_as_care_home');
    
    if (isSuperAdmin && (loginAsCareHomeId || superAdminLoginId)) {
      const careHomeId = loginAsCareHomeId || superAdminLoginId;
      console.log('Super admin login as care home:', careHomeId);
      
      // Clear the localStorage item
      localStorage.removeItem('superadmin_login_as_care_home');
      
      // Automatically select this care home and navigate
      if (careHomeId) {
        setSelectedCareHomeId(careHomeId);
        
        // Auto-navigate to home after care home is selected
        setTimeout(async () => {
          try {
            if (terriiProfile) {
              await updateTerriiProfile({
                careHomeID: careHomeId
              });
            }
            navigate('/');
            toast.success('Logged into care home as super admin');
          } catch (error) {
            console.error('Error updating profile for super admin login:', error);
            toast.error('Failed to login as care home');
          }
        }, 1000);
      }
    }
  }, [isSuperAdmin, terriiProfile, updateTerriiProfile, navigate]);

  // Log initial state on component mount
  useEffect(() => {
    console.log('CareHomeSelectionScreen initial state:');
    console.log('- Is Super Admin:', isSuperAdmin);
    console.log('- User:', user);
    console.log('- TERRii Profile:', terriiProfile);
    console.log('- Show Create Form:', showCreateForm);
  }, []);
  
  // Directly compute whether to show create form based on current state
  const shouldShowCreateForm = showCreateForm;
  
  // Log the showCreateForm state when it changes
  useEffect(() => {
    console.log('showCreateForm state changed to:', showCreateForm);
  }, [showCreateForm]);

  // Unified effect to handle all cases where we should show the create form
  useEffect(() => {
    // Skip if we're still loading or already showing form
    if (loading || showCreateForm) {
      return;
    }
    
    console.log('Checking if create form should be shown:');
    console.log('- isSuperAdmin:', isSuperAdmin);
    console.log('- careHomes.length:', careHomes.length);
    console.log('- URL create param:', new URLSearchParams(window.location.search).get('create'));
    
    // Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const createParam = urlParams.get('create');
    
    // Show form if any condition is met:
    // 1. URL parameter create=true and user is superadmin
    // 2. User is superadmin and there are no care homes
    if ((createParam === 'true' && isSuperAdmin) || 
        (isSuperAdmin && careHomes.length === 0)) {
      console.log('Showing create form because conditions are met');
      setShowCreateForm(true);
    }
  }, [loading, careHomes.length, isSuperAdmin, showCreateForm]);

  // Fetch care homes on component mount
  useEffect(() => {
    console.log('CareHomeSelectionScreen mounted, fetching care homes...');
    fetchCareHomes();
  }, []);

  // Log state changes for debugging
  useEffect(() => {
    console.log('State change detected:');
    console.log('- Is Super Admin:', isSuperAdmin); 
    console.log('- User:', user);
    console.log('- TERRii Profile:', terriiProfile);
    console.log('- Care Homes count:', careHomes.length);
    console.log('- Loading state:', loading);
    console.log('- Show Create Form:', showCreateForm);
    console.log('- Should Show Create Form:', shouldShowCreateForm);
    console.log('- Selected Care Home ID:', selectedCareHomeId);
  }, [isSuperAdmin, user, terriiProfile, careHomes, loading, showCreateForm, shouldShowCreateForm, selectedCareHomeId]);

  const fetchCareHomes = async () => {
    try {
      setLoading(true);
      console.log('Fetching care homes...');
      const data = await listCareHomes();
      console.log('Care homes data received:', data);
      console.log('Care homes data type:', typeof data, Array.isArray(data));
      console.log('First care home object (if exists):', data && data.length > 0 ? data[0] : 'No care homes');
      
      // Ensure we always set an array, even if the API returns null or undefined
      const careHomesArray = Array.isArray(data) ? data : [];
      setCareHomes(careHomesArray);
      
      // If user has only one care home and none selected, auto-select it
      if (careHomesArray.length === 1 && !selectedCareHomeId) {
        setSelectedCareHomeId(careHomesArray[0].id);
      }
      
      // Force show create form for super admins if there are no care homes
      if (careHomesArray.length === 0 && isSuperAdmin) {
        console.log('No care homes found and user is super admin, forcing show create form');
        setShowCreateForm(true);
      }
    } catch (error) {
      console.error('Error fetching care homes:', error);
      console.error('Full error details:', JSON.stringify(error, null, 2));
      toast.error('Failed to load care homes');
      setCareHomes([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCareHomeSelect = async () => {
    if (!selectedCareHomeId) {
      toast.error('Please select a care home');
      return;
    }

    try {
      // If user already has a profile, update it with the selected care home
      if (terriiProfile) {
        await updateTerriiProfile({
          careHomeID: selectedCareHomeId
        });
      }
      
      // Navigate to home screen
      navigate('/');
      toast.success('Care home selected successfully');
    } catch (error) {
      console.error('Error selecting care home:', error);
      toast.error('Failed to select care home');
    }
  };

  const handleCreateCareHome = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newCareHomeName) {
      toast.error('Please enter a care home name');
      return;
    }

    try {
      setCreatingCareHome(true);
      console.log('Creating care home with data:', {
        name: newCareHomeName,
        address: newCareHomeAddress,
        createdByID: user?.userId
      });
      
      const newCareHome = await createCareHome({
        name: newCareHomeName,
        address: newCareHomeAddress,
        createdByID: user?.userId
      });
      
      console.log('New care home created:', newCareHome);
      
      // Refresh care homes list
      await fetchCareHomes();
      
      // Select the newly created care home
      if (newCareHome && newCareHome.id) {
        setSelectedCareHomeId(newCareHome.id);
      }
      
      // Hide the create form
      setShowCreateForm(false);
      setNewCareHomeName('');
      setNewCareHomeAddress('');
      
      toast.success('Care home created successfully');
    } catch (error) {
      console.error('Error creating care home:', error);
      console.error('Full error details:', JSON.stringify(error, null, 2));
      toast.error('Failed to create care home');
    } finally {
      setCreatingCareHome(false);
    }
  };

  return (
    <div className="min-h-screen bg-terrii-blue/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-terrii p-6 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-terrii-text-primary">Welcome to TERRii</h1>
            <p className="text-terrii-text-secondary mt-2">
              {shouldShowCreateForm 
                ? "Create a new care home" 
                : careHomes.length > 0 ? "Please select a care home" : "No care homes available"}
            </p>
            
            {/* SuperAdmin Actions - Always visible for superadmins when no care homes or creating form */}
            {isSuperAdmin && careHomes.length === 0 && !shouldShowCreateForm && (
              <div className="mt-6 mb-4">
                <Button 
                  onClick={() => setShowCreateForm(true)}
                  className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Care Home
                </Button>
              </div>
            )}
          </div>
          
          {/* Loading State */}
          {loading && (
            <div className="text-center py-8">
              <p>Loading care homes...</p>
            </div>
          )}
          
          {/* Create Care Home Form */}
          {shouldShowCreateForm && (
            <form onSubmit={handleCreateCareHome} className="space-y-4">
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
          
          {/* No Care Homes State - Only show when we're not showing the create form */}
          {!loading && careHomes.length === 0 && !shouldShowCreateForm && !isSuperAdmin && (
            <div className="text-center py-8">
              <p className="text-terrii-text-secondary mb-4">
                You don't have access to any care homes yet. Please contact your administrator.
              </p>
            </div>
          )}
          
          {/* Care Home List */}
          {!loading && careHomes.length > 0 && !showCreateForm && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-terrii-text-secondary">
                  Select Care Home
                </label>
                <div className="space-y-2">
                  {careHomes.map((careHome) => (
                    <div
                      key={careHome.id}
                      className={`flex items-center p-3 border rounded-md cursor-pointer ${
                        selectedCareHomeId === careHome.id
                          ? 'border-terrii-green bg-terrii-green/10'
                          : 'border-gray-200 hover:border-terrii-green/50'
                      }`}
                      onClick={() => setSelectedCareHomeId(careHome.id)}
                    >
                      <Building className="h-5 w-5 text-terrii-text-secondary mr-2" />
                      <div className="flex-1">
                        <p className="font-medium text-terrii-text-primary">{careHome.name}</p>
                        {careHome.address && (
                          <p className="text-xs text-terrii-text-secondary">{careHome.address}</p>
                        )}
                      </div>
                      {selectedCareHomeId === careHome.id && (
                        <div className="h-4 w-4 rounded-full bg-terrii-green"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between pt-4">
                {isSuperAdmin && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowCreateForm(true)}
                    className="flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Create New
                  </Button>
                )}
                
                <Button
                  type="button"
                  onClick={handleCareHomeSelect}
                  className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary flex items-center ml-auto"
                  disabled={!selectedCareHomeId}
                >
                  Continue
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
          
          {/* Debug information - hidden in production */}
          {import.meta.env.DEV && (
            <div className="text-xs mt-6 p-2 bg-gray-100 rounded-md">
              <p>Super Admin: {isSuperAdmin ? 'Yes' : 'No'}</p>
              <p>Care Homes Count: {careHomes.length}</p>
              <p>Loading: {loading ? 'Yes' : 'No'}</p>
              <p>Showing Create Form: {shouldShowCreateForm ? 'Yes' : 'No'}</p>
              <p>Selected Care Home ID: {selectedCareHomeId || 'None'}</p>
              {isSuperAdmin && (
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="mt-2 px-2 py-1 bg-blue-500 text-white rounded-md text-xs"
                >
                  Force Show Create Form
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
