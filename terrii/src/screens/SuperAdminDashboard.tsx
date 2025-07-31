import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import { listCareHomes, getUsersWithoutTERRiiProfile, listAllTerriiUserProfiles } from '../lib/terriiApi';
import { RoleTestingPanel } from '../components/superadmin/RoleTestingPanel';
import { UserPermissionsManager } from '../components/superadmin/UserPermissionsManager';
import { TerriiUserRole } from '../API';
import { toast } from 'sonner';
import { 
  Building, 
  Users, 
  Plus, 
  UserPlus, 
  LogIn,
  Settings,
  Shield,
  TestTube,
  UserCheck,
  Crown,
  Stethoscope,
  ClipboardList,
  Heart
} from 'lucide-react';

interface CareHomeWithData {
  id: string;
  name: string;
  address?: string | null;
  city?: string | null;
  postCode?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  website?: string | null;
  adminUsers?: {
    items: any[];
    nextToken?: string;
  } | null;
  residents?: {
    items: any[];
    nextToken?: string;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  __typename?: string;
}

export function SuperAdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [careHomes, setCareHomes] = useState<CareHomeWithData[]>([]);
  const [unlinkedUsers, setUnlinkedUsers] = useState<any[]>([]);
  const [allUserProfiles, setAllUserProfiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'role-testing' | 'permissions'>('overview');
  const [stats, setStats] = useState({
    totalCareHomes: 0,
    totalUsers: 0,
    unlinkedUsers: 0,
    totalResidents: 0,
    roleBreakdown: {
      ADMIN: 0,
      MANAGER: 0,
      CARE_STAFF: 0,
      FAMILY: 0
    }
  });

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      
      // Load care homes with full data including residents and admin users
      const careHomesData = await listCareHomes();
      console.log('Care homes data with full details:', careHomesData);
      
      // Log each care home's data structure for debugging
      careHomesData?.forEach((home: any, index: number) => {
        console.log(`Care Home ${index + 1} (${home.name}):`, {
          id: home.id,
          residents: home.residents,
          adminUsers: home.adminUsers,
          residentsCount: home.residents?.items?.length || 0,
          adminUsersCount: home.adminUsers?.items?.length || 0
        });
      });
      
      setCareHomes((careHomesData || []) as CareHomeWithData[]);
      
      // Load users without TERRii profiles (unlinked users)
      const unlinkedUsersData = await getUsersWithoutTERRiiProfile();
      setUnlinkedUsers(unlinkedUsersData || []);
      
      // Load all user profiles for role analysis
      const allProfiles = await listAllTerriiUserProfiles();
      setAllUserProfiles(allProfiles || []);
      
      // Calculate role breakdown
      const roleBreakdown = (allProfiles || []).reduce((acc: any, profile: any) => {
        const role = profile.role;
        acc[role] = (acc[role] || 0) + 1;
        return acc;
      }, { ADMIN: 0, MANAGER: 0, CARE_STAFF: 0, FAMILY: 0 });
      
      // Calculate stats from the loaded data
      const totalResidents = careHomesData?.reduce((total: number, home: any) => {
        const residentCount = home.residents?.items?.length || 0;
        console.log(`Care home ${home.name} has ${residentCount} residents`);
        return total + residentCount;
      }, 0) || 0;

      const totalAdminUsers = careHomesData?.reduce((total: number, home: any) => {
        const adminCount = home.adminUsers?.items?.length || 0;
        console.log(`Care home ${home.name} has ${adminCount} admin users`);
        return total + adminCount;
      }, 0) || 0;

      console.log('Stats calculated:', {
        totalCareHomes: careHomesData?.length || 0,
        totalResidents,
        totalAdminUsers,
        unlinkedUsers: unlinkedUsersData?.length || 0,
        roleBreakdown
      });

      setStats({
        totalCareHomes: careHomesData?.length || 0,
        totalUsers: (allProfiles || []).length, // Total users with TERRii profiles
        unlinkedUsers: unlinkedUsersData?.length || 0,
        totalResidents,
        roleBreakdown
      });
      
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginAs = async (careHomeId: string) => {
    try {
      // Navigate to the care home selection with the specific care home pre-selected
      // This will allow the superadmin to access that care home as if they were a user
      localStorage.setItem('superadmin_login_as_care_home', careHomeId);
      navigate(`/select-care-home?loginAs=${careHomeId}`);
    } catch (error) {
      console.error('Error logging into care home:', error);
      toast.error('Failed to access care home');
    }
  };

  const handleTestRole = async (careHomeId: string, role: TerriiUserRole, testMode: boolean) => {
    try {
      console.log('🧪 Starting role test:', { careHomeId, role, testMode });
      
      if (testMode) {
        // Set the role test mode
        localStorage.setItem('role_test_mode', role);
        localStorage.setItem('superadmin_login_as_care_home', careHomeId);
        
        // Dispatch custom event to trigger immediate AuthContext update
        window.dispatchEvent(new CustomEvent('role-test-mode-changed'));
        
        // Navigate to the care home selection screen which will handle the role testing setup
        navigate(`/select-care-home?loginAs=${careHomeId}&testRole=${role}`);
        
        toast.success(`Testing application as ${role} role`);
      } else {
        // Exit test mode
        localStorage.removeItem('role_test_mode');
        localStorage.removeItem('superadmin_login_as_care_home');
        
        // Dispatch custom event to trigger immediate AuthContext update
        window.dispatchEvent(new CustomEvent('role-test-mode-changed'));
        
        navigate('/admin');
        toast.success('Exited role test mode');
      }
    } catch (error) {
      console.error('Error testing role:', error);
      toast.error('Failed to test role');
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Failed to logout');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-terrii-blue/20 flex items-center justify-center">
        <div className="animate-pulse text-terrii-text-primary">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-terrii-blue/20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-terrii-text-primary">TERRii Super Admin</h1>
              <p className="text-terrii-text-secondary">System Management Dashboard</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-terrii-text-secondary">
                Welcome, {user?.attributes?.email}
              </span>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="text-sm"
              >
                Logout
              </Button>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex space-x-8 border-b">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-terrii-blue text-terrii-blue'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Shield className="h-4 w-4 inline mr-2" />
              System Overview
            </button>
            <button
              onClick={() => setActiveTab('role-testing')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'role-testing'
                  ? 'border-terrii-blue text-terrii-blue'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <TestTube className="h-4 w-4 inline mr-2" />
              Role Testing
            </button>
            <button
              onClick={() => setActiveTab('permissions')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'permissions'
                  ? 'border-terrii-blue text-terrii-blue'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <UserCheck className="h-4 w-4 inline mr-2" />
              User Permissions
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <>
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-terrii p-6">
                <div className="flex items-center">
                  <Building className="h-8 w-8 text-terrii-green" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-terrii-text-secondary">Care Homes</p>
                    <p className="text-2xl font-bold text-terrii-text-primary">{stats.totalCareHomes}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-terrii p-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-terrii-blue" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-terrii-text-secondary">Total Residents</p>
                    <p className="text-2xl font-bold text-terrii-text-primary">{stats.totalResidents}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-terrii p-6">
                <div className="flex items-center">
                  <UserPlus className="h-8 w-8 text-orange-500" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-terrii-text-secondary">Unlinked Users</p>
                    <p className="text-2xl font-bold text-terrii-text-primary">{stats.unlinkedUsers}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-terrii p-6">
                <div className="flex items-center">
                  <Shield className="h-8 w-8 text-purple-500" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-terrii-text-secondary">Total Users</p>
                    <p className="text-2xl font-bold text-terrii-text-primary">{stats.totalUsers}</p>
                  </div>
                </div>
              </div>

              {/* Role Breakdown Card */}
              <div className="bg-white rounded-lg shadow-terrii p-6">
                <div className="mb-4">
                  <p className="text-sm font-medium text-terrii-text-secondary mb-3">Role Distribution</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center">
                        <Crown className="h-3 w-3 mr-1 text-purple-600" />
                        Admin
                      </span>
                      <span className="font-medium">{stats.roleBreakdown.ADMIN}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center">
                        <ClipboardList className="h-3 w-3 mr-1 text-blue-600" />
                        Manager
                      </span>
                      <span className="font-medium">{stats.roleBreakdown.MANAGER}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center">
                        <Stethoscope className="h-3 w-3 mr-1 text-green-600" />
                        Care Staff
                      </span>
                      <span className="font-medium">{stats.roleBreakdown.CARE_STAFF}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center">
                        <Heart className="h-3 w-3 mr-1 text-pink-600" />
                        Family
                      </span>
                      <span className="font-medium">{stats.roleBreakdown.FAMILY}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Button
                onClick={() => navigate('/admin/care-homes')}
                className="h-20 bg-terrii-green-dark hover:bg-terrii-green text-white flex items-center justify-center space-x-3"
              >
                <Building className="h-6 w-6" />
                <span className="text-lg">Manage Care Homes</span>
              </Button>
              
              <Button
                onClick={() => navigate('/admin/users')}
                className="h-20 bg-terrii-blue hover:bg-terrii-blue/90 text-white flex items-center justify-center space-x-3"
              >
                <Users className="h-6 w-6" />
                <span className="text-lg">Manage Users</span>
              </Button>
              
              <Button
                onClick={() => setActiveTab('role-testing')}
                className="h-20 bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center space-x-3"
              >
                <TestTube className="h-6 w-6" />
                <span className="text-lg">Test Roles</span>
              </Button>
            </div>

            {/* Care Homes Overview */}
            <div className="bg-white rounded-lg shadow-terrii mb-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-terrii-text-primary">Care Homes</h2>
                  <Button
                    onClick={() => navigate('/admin/care-homes')}
                    variant="outline"
                    className="text-sm"
                  >
                    View All
                  </Button>
                </div>
              </div>
              <div className="p-6">
                {careHomes.length === 0 ? (
                  <div className="text-center py-8">
                    <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-terrii-text-secondary">No care homes created yet</p>
                    <Button
                      onClick={() => navigate('/admin/care-homes')}
                      className="mt-4 bg-terrii-green-dark hover:bg-terrii-green text-white"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Create First Care Home
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {careHomes.slice(0, 6).map((careHome) => (
                      <div key={careHome.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-terrii-text-primary">{careHome.name}</h3>
                          <Button
                            onClick={() => handleLoginAs(careHome.id)}
                            variant="outline"
                            size="sm"
                            className="text-xs"
                          >
                            <LogIn className="h-3 w-3 mr-1" />
                            Login
                          </Button>
                        </div>
                        {careHome.address && (
                          <p className="text-sm text-terrii-text-secondary mb-2">{careHome.address}</p>
                        )}
                        <div className="flex justify-between text-xs text-terrii-text-secondary">
                          <span>Residents: {careHome.residents?.items?.length || 0}</span>
                          <span>Staff: {careHome.adminUsers?.items?.length || 0}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Unlinked Users Alert */}
            {unlinkedUsers.length > 0 && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <UserPlus className="h-6 w-6 text-orange-500 mr-3" />
                    <div>
                      <h3 className="font-medium text-orange-900">
                        {unlinkedUsers.length} users need care home assignment
                      </h3>
                      <p className="text-sm text-orange-700">
                        These users have registered but haven't been linked to a care home yet.
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => navigate('/admin/users')}
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Manage Users
                  </Button>
                </div>
              </div>
            )}
          </>
        )}

        {activeTab === 'role-testing' && (
          <div className="space-y-6">
            {careHomes.length === 0 ? (
              <div className="bg-white rounded-lg shadow-terrii p-6">
                <div className="text-center py-8">
                  <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-terrii-text-secondary">No care homes available for testing</p>
                  <Button
                    onClick={() => navigate('/admin/care-homes')}
                    className="mt-4 bg-terrii-green-dark hover:bg-terrii-green text-white"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Care Home
                  </Button>
                </div>
              </div>
            ) : (
              careHomes.map((careHome) => (
                <RoleTestingPanel
                  key={careHome.id}
                  careHomeId={careHome.id}
                  careHomeName={careHome.name}
                  onTestRole={handleTestRole}
                />
              ))
            )}
          </div>
        )}

        {activeTab === 'permissions' && (
          <UserPermissionsManager 
            onUserUpdated={loadDashboardData}
          />
        )}
      </div>
    </div>
  );
}
