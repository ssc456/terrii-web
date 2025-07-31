import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Input } from '../ui/Input';
import { 
  Users, 
  UserCheck, 
  UserX, 
  Shield, 
  Edit3, 
  Trash2, 
  Plus,
  Search,
  Filter,
  Crown,
  ClipboardList,
  Stethoscope,
  Heart
} from 'lucide-react';
import { TerriiUserRole } from '../../API';
import { updateTerriiUserProfile, deleteTerriiUserProfile, listAllTerriiUserProfiles } from '../../lib/terriiApi';
import { toast } from 'sonner';

interface UserPermissionsManagerProps {
  careHomeId?: string;
  onUserUpdated?: () => void;
}

interface UserWithProfile {
  id: string;
  email: string;
  name: string;
  firstName?: string;
  lastName?: string;
  terriiProfile?: {
    id: string;
    role: TerriiUserRole;
    careHomeID: string;
    careHomeName?: string;
    lastLogin?: string;
    profilePicture?: string;
  } | null;
  userType: string;
  createdAt: string;
}

export function UserPermissionsManager({ careHomeId, onUserUpdated }: UserPermissionsManagerProps) {
  const [users, setUsers] = useState<UserWithProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<TerriiUserRole | 'ALL'>('ALL');
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [editingRole, setEditingRole] = useState<TerriiUserRole | null>(null);

  const roleConfig = {
    [TerriiUserRole.ADMIN]: {
      label: 'Administrator',
      icon: Crown,
      color: 'bg-purple-100 text-purple-800',
      description: 'Full system access'
    },
    [TerriiUserRole.MANAGER]: {
      label: 'Manager',
      icon: ClipboardList,
      color: 'bg-blue-100 text-blue-800',
      description: 'Staff oversight & reporting'
    },
    [TerriiUserRole.CARE_STAFF]: {
      label: 'Care Staff',
      icon: Stethoscope,
      color: 'bg-green-100 text-green-800',
      description: 'Daily care activities'
    },
    [TerriiUserRole.FAMILY]: {
      label: 'Family Member',
      icon: Heart,
      color: 'bg-pink-100 text-pink-800',
      description: 'Linked residents only'
    }
  };

  useEffect(() => {
    loadUsers();
  }, [careHomeId]);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const allProfiles = await listAllTerriiUserProfiles();
      
      // Filter by care home if specified
      const filteredProfiles = careHomeId 
        ? allProfiles.filter((profile: any) => profile.careHomeID === careHomeId)
        : allProfiles;
      
      // Transform to include user data
      const usersWithProfiles = filteredProfiles.map((profile: any) => ({
        id: profile.userID,
        email: profile.user?.email || profile.user?.name || 'Unknown',
        name: profile.user?.firstName && profile.user?.lastName 
          ? `${profile.user.firstName} ${profile.user.lastName}`
          : profile.user?.name || 'Unknown User',
        firstName: profile.user?.firstName,
        lastName: profile.user?.lastName,
        terriiProfile: {
          id: profile.id,
          role: profile.role,
          careHomeID: profile.careHomeID,
          careHomeName: profile.careHome?.name || 'Unknown Care Home',
          lastLogin: profile.lastLogin,
          profilePicture: profile.profilePicture
        },
        userType: profile.user?.userType || 'TERRII_USER',
        createdAt: profile.createdAt
      }));

      setUsers(usersWithProfiles);
    } catch (error) {
      console.error('Error loading users:', error);
      toast.error('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleRoleUpdate = async (userId: string, profileId: string, newRole: TerriiUserRole) => {
    try {
      await updateTerriiUserProfile(profileId, { role: newRole });
      toast.success(`User role updated to ${roleConfig[newRole].label}`);
      await loadUsers();
      onUserUpdated?.();
      setEditingUser(null);
      setEditingRole(null);
    } catch (error) {
      console.error('Error updating user role:', error);
      toast.error('Failed to update user role');
    }
  };

  const handleRemoveUser = async (userId: string, profileId: string) => {
    if (!confirm('Are you sure you want to remove this user from the care home?')) return;
    
    try {
      await deleteTerriiUserProfile(profileId);
      toast.success('User removed from care home');
      await loadUsers();
      onUserUpdated?.();
    } catch (error) {
      console.error('Error removing user:', error);
      toast.error('Failed to remove user');
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'ALL' || user.terriiProfile?.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  if (loading) {
    return (
      <Card className="shadow-terrii">
        <CardContent className="p-6">
          <div className="animate-pulse text-center">Loading users...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-terrii">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Users className="h-5 w-5" />
          <span>User Permissions Manager</span>
          {careHomeId && <Badge variant="outline">Care Home Specific</Badge>}
        </CardTitle>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value as TerriiUserRole | 'ALL')}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="ALL">All Roles</option>
            {Object.entries(roleConfig).map(([role, config]) => (
              <option key={role} value={role}>{config.label}</option>
            ))}
          </select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredUsers.map((user) => {
            const roleInfo = user.terriiProfile ? roleConfig[user.terriiProfile.role] : null;
            const RoleIcon = roleInfo?.icon || UserX;
            
            return (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${roleInfo?.color || 'bg-gray-100 text-gray-600'}`}>
                      <RoleIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{user.name}</h3>
                        {user.userType === 'ACECURA_ADMIN' && (
                          <Badge className="bg-red-100 text-red-800">
                            <Shield className="h-3 w-3 mr-1" />
                            System Admin
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-terrii-text-secondary">{user.email}</p>
                      {user.terriiProfile && (
                        <div className="flex items-center space-x-4 text-xs text-terrii-text-secondary mt-1">
                          <span>Role: {roleInfo?.label}</span>
                          <span>Care Home: {user.terriiProfile.careHomeName}</span>
                          {user.terriiProfile.lastLogin && (
                            <span>Last Login: {new Date(user.terriiProfile.lastLogin).toLocaleDateString()}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {user.terriiProfile && (
                    <>
                      {editingUser === user.id ? (
                        <div className="flex items-center space-x-2">
                          <select
                            value={editingRole || user.terriiProfile.role}
                            onChange={(e) => setEditingRole(e.target.value as TerriiUserRole)}
                            className="px-2 py-1 border border-gray-300 rounded text-sm"
                          >
                            {Object.entries(roleConfig).map(([role, config]) => (
                              <option key={role} value={role}>{config.label}</option>
                            ))}
                          </select>
                          <Button
                            size="sm"
                            onClick={() => editingRole && handleRoleUpdate(user.id, user.terriiProfile!.id, editingRole)}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            Save
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setEditingUser(null);
                              setEditingRole(null);
                            }}
                          >
                            Cancel
                          </Button>
                        </div>
                      ) : (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setEditingUser(user.id);
                              setEditingRole(user.terriiProfile!.role);
                            }}
                          >
                            <Edit3 className="h-3 w-3 mr-1" />
                            Edit Role
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRemoveUser(user.id, user.terriiProfile!.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-3 w-3 mr-1" />
                            Remove
                          </Button>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}

          {filteredUsers.length === 0 && (
            <div className="text-center py-8 text-terrii-text-secondary">
              No users found matching your criteria
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
