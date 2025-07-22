import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { 
  listAllUsers, 
  getUsersWithoutTERRiiProfile, 
  linkUserToCareHome, 
  listCareHomes,
  getTerriiUserProfile 
} from '../lib/terriiApi';
import { toast } from 'sonner';
import {
  ArrowLeft,
  Users,
  UserPlus,
  Building,
  Mail,
  Calendar,
  UserCheck,
  Shield
} from 'lucide-react';

interface User {
  id: string;
  email?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  userType?: string;
  createdAt?: string;
  terriiProfile?: any;
}

interface CareHome {
  id: string;
  name: string;
  address?: string | null;
}

export function UserManagement() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [unlinkedUsers, setUnlinkedUsers] = useState<any[]>([]);
  const [careHomes, setCareHomes] = useState<CareHome[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // all, linked, unlinked
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [linkingUser, setLinkingUser] = useState(false);
  const [selectedCareHome, setSelectedCareHome] = useState('');
  const [selectedRole, setSelectedRole] = useState<'ADMIN' | 'CARE_STAFF' | 'MANAGER'>('CARE_STAFF');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Load all users
      const allUsersData = await listAllUsers();
      console.log('All users:', allUsersData);
      
      // Load unlinked users
      const unlinkedUsersData = await getUsersWithoutTERRiiProfile();
      console.log('Unlinked users:', unlinkedUsersData);
      
      // Load care homes
      const careHomesData = await listCareHomes();
      
      // For each user, try to get their TERRii profile
      const usersWithProfiles = await Promise.all(
        allUsersData.map(async (userData: any) => {
          try {
            const profile = await getTerriiUserProfile(userData.id);
            return {
              ...userData,
              terriiProfile: profile
            };
          } catch (error) {
            return {
              ...userData,
              terriiProfile: null
            };
          }
        })
      );
      
      setUsers(usersWithProfiles);
      setUnlinkedUsers(unlinkedUsersData || []);
      setCareHomes(careHomesData || []);
      
    } catch (error) {
      console.error('Error loading user management data:', error);
      toast.error('Failed to load user data');
    } finally {
      setLoading(false);
    }
  };

  const handleLinkUser = async () => {
    if (!selectedUser || !selectedCareHome || !selectedRole) {
      toast.error('Please select a care home and role');
      return;
    }

    try {
      setLinkingUser(true);
      await linkUserToCareHome(selectedUser.id, selectedCareHome, selectedRole);
      toast.success(`User linked to care home as ${selectedRole.replace('_', ' ')}`);
      
      // Refresh data
      await loadData();
      
      // Close dialog
      setShowLinkDialog(false);
      setSelectedUser(null);
      setSelectedCareHome('');
      setSelectedRole('CARE_STAFF');
      
    } catch (error) {
      console.error('Error linking user:', error);
      toast.error('Failed to link user to care home');
    } finally {
      setLinkingUser(false);
    }
  };

  const filteredUsers = users.filter(user => {
    const email = user.email || user.name || '';
    const firstName = user.firstName || '';
    const lastName = user.lastName || '';
    
    const matchesSearch = !searchQuery || 
      email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lastName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || 
      (filterStatus === 'linked' && user.terriiProfile) ||
      (filterStatus === 'unlinked' && !user.terriiProfile);
    
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-terrii-blue/20 flex items-center justify-center">
        <div className="animate-pulse text-terrii-text-primary">Loading users...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-terrii-blue/20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Button
                variant="outline"
                onClick={() => navigate('/admin')}
                className="mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-terrii-text-primary">User Management</h1>
                <p className="text-terrii-text-secondary">Manage users and their care home assignments</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-terrii p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-terrii-blue" />
              <div className="ml-4">
                <p className="text-sm font-medium text-terrii-text-secondary">Total Users</p>
                <p className="text-2xl font-bold text-terrii-text-primary">{users.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-terrii p-6">
            <div className="flex items-center">
              <UserCheck className="h-8 w-8 text-terrii-green" />
              <div className="ml-4">
                <p className="text-sm font-medium text-terrii-text-secondary">Linked Users</p>
                <p className="text-2xl font-bold text-terrii-text-primary">
                  {users.filter(u => u.terriiProfile).length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-terrii p-6">
            <div className="flex items-center">
              <UserPlus className="h-8 w-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-terrii-text-secondary">Unlinked Users</p>
                <p className="text-2xl font-bold text-terrii-text-primary">{unlinkedUsers.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-terrii p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search users by email or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="all">All Users</option>
                <option value="linked">Linked to Care Home</option>
                <option value="unlinked">Unlinked</option>
              </select>
            </div>
          </div>
        </div>

        {/* Users List */}
        <div className="bg-white rounded-lg shadow-terrii">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-terrii-text-primary">Users</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredUsers.length === 0 ? (
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-terrii-text-secondary">No users found matching your criteria</p>
              </div>
            ) : (
              filteredUsers.map((userData) => (
                <div key={userData.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-terrii-blue rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">
                          {userData.firstName ? userData.firstName[0] : (userData.email || 'U')[0].toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-terrii-text-primary">
                            {userData.firstName && userData.lastName 
                              ? `${userData.firstName} ${userData.lastName}`
                              : userData.email || userData.name || 'Unknown User'
                            }
                          </h3>
                          {userData.terriiProfile ? (
                            <Badge className="text-xs bg-green-100 text-green-800">
                              <UserCheck className="h-3 w-3 mr-1" />
                              Linked
                            </Badge>
                          ) : (
                            <Badge className="text-xs bg-orange-100 text-orange-800">
                              <UserPlus className="h-3 w-3 mr-1" />
                              Unlinked
                            </Badge>
                          )}
                          {userData.userType === 'ACECURA_ADMIN' && (
                            <Badge variant="outline" className="text-xs">
                              <Shield className="h-3 w-3 mr-1" />
                              Admin
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-terrii-text-secondary mt-1">
                          <span className="flex items-center">
                            <Mail className="h-3 w-3 mr-1" />
                            {userData.email || userData.name || 'No email'}
                          </span>
                          {userData.createdAt && (
                            <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(userData.createdAt).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                        {userData.terriiProfile && (
                          <div className="flex items-center space-x-2 text-xs text-terrii-text-secondary mt-1">
                            <Building className="h-3 w-3" />
                            <span>Role: {userData.terriiProfile.role?.replace('_', ' ')}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {!userData.terriiProfile && userData.userType !== 'ACECURA_ADMIN' && (
                        <Button
                          size="sm"
                          onClick={() => {
                            setSelectedUser(userData);
                            setShowLinkDialog(true);
                          }}
                          className="bg-terrii-green-dark hover:bg-terrii-green text-white"
                        >
                          <UserPlus className="h-4 w-4 mr-2" />
                          Link to Care Home
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Link User Dialog */}
      {showLinkDialog && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-terrii-text-primary mb-4">
              Link User to Care Home
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-terrii-text-secondary mb-2">User:</p>
                <p className="font-medium">{selectedUser.email || selectedUser.name || 'Unknown User'}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-terrii-text-secondary mb-2">
                  Care Home
                </label>
                <select
                  value={selectedCareHome}
                  onChange={(e) => setSelectedCareHome(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  required
                >
                  <option value="">Select a care home</option>
                  {careHomes.map((home) => (
                    <option key={home.id} value={home.id}>
                      {home.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-terrii-text-secondary mb-2">
                  Role
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value as 'ADMIN' | 'CARE_STAFF' | 'MANAGER')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  required
                >
                  <option value="CARE_STAFF">Care Staff</option>
                  <option value="MANAGER">Manager</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setShowLinkDialog(false);
                  setSelectedUser(null);
                  setSelectedCareHome('');
                  setSelectedRole('CARE_STAFF');
                }}
                disabled={linkingUser}
              >
                Cancel
              </Button>
              <Button
                onClick={handleLinkUser}
                isLoading={linkingUser}
                className="bg-terrii-green-dark hover:bg-terrii-green text-white"
              >
                Link User
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
