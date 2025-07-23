import { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/Select';
import { Switch } from '../components/ui/Switch';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/Avatar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/Dialog';
import { User, Bell, Shield, HelpCircle, LogOut, Camera, Save, Trash2, Play, Building2, Settings2, Home } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { getCareHome, updateCareHome, updateTerriiUserProfile } from '../lib/terriiApi';
import { toast } from 'sonner';
import { Auth } from '../lib/amplify';
import { updateUserAttributes } from 'aws-amplify/auth';
import { Layout } from '../components/layout/Layout';
import { BottomNav } from '../components/layout/BottomNav';

export function SettingsScreen() {
  const { terriiProfile, user, logout, updateTerriiProfile, isSuperAdmin } = useAuth();
  
  // Profile state
  const [profilePicture, setProfilePicture] = useState(terriiProfile?.profilePicture || '');
  
  // User attributes state - editable fields
  const [userAttributes, setUserAttributes] = useState({
    name: user?.attributes?.name || '',
    email: user?.attributes?.email || ''
  });
  
  // Care home state
  const [careHome, setCareHome] = useState<any>(null);
  const [careHomeData, setCareHomeData] = useState({
    name: '',
    address: '',
    city: '',
    postCode: '',
    phoneNumber: '',
    email: '',
    website: ''
  });
  
  // Notification settings
  const [notifications, setNotifications] = useState({
    newMessages: true,
    concernAlerts: true,
    dailyDigest: false,
    weeklyReport: true,
  });
  
  const [loading, setLoading] = useState(false);
  const [careHomeLoading, setCareHomeLoading] = useState(false);

  // Check if user can manage care home (ADMIN or MANAGER roles)
  const canManageCareHome = terriiProfile?.role === 'ADMIN' || terriiProfile?.role === 'MANAGER';

  useEffect(() => {
    loadCareHomeData();
  }, [terriiProfile]);

  // Sync user attributes when user changes
  useEffect(() => {
    if (user?.attributes) {
      setUserAttributes({
        name: user.attributes.name || '',
        email: user.attributes.email || ''
      });
    }
  }, [user?.attributes]);

  const loadCareHomeData = async () => {
    if (!terriiProfile?.careHomeID) return;
    
    try {
      const careHomeInfo = await getCareHome(terriiProfile.careHomeID);
      setCareHome(careHomeInfo);
      setCareHomeData({
        name: careHomeInfo?.name || '',
        address: careHomeInfo?.address || '',
        city: careHomeInfo?.city || '',
        postCode: careHomeInfo?.postCode || '',
        phoneNumber: careHomeInfo?.phoneNumber || '',
        email: careHomeInfo?.email || '',
        website: careHomeInfo?.website || ''
      });
    } catch (error) {
      console.error('Error loading care home data:', error);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

    const handleSaveProfile = async () => {
    if (!terriiProfile?.id) return;
    
    setLoading(true);
    try {
      // Update Cognito user attributes if they've changed
      const attributesToUpdate: any = {};
      
      if (userAttributes.name !== (user?.attributes?.name || '')) {
        attributesToUpdate.name = userAttributes.name;
      }
      
      if (userAttributes.email !== (user?.attributes?.email || '')) {
        attributesToUpdate.email = userAttributes.email;
      }
      
      // Update Cognito user attributes if there are changes
      if (Object.keys(attributesToUpdate).length > 0) {
        await updateUserAttributes({
          userAttributes: attributesToUpdate
        });
        toast.success('Profile information updated successfully');
      }

      // Update TERRii profile (including profile picture)
      if (profilePicture !== terriiProfile.profilePicture) {
        await updateTerriiUserProfile(terriiProfile.id, {
          profilePicture: profilePicture
        });
        
        // Update the context
        updateTerriiProfile({
          ...terriiProfile,
          profilePicture: profilePicture
        });
        
        toast.success('Profile picture updated successfully');
      }
      
      if (Object.keys(attributesToUpdate).length === 0 && profilePicture === terriiProfile.profilePicture) {
        toast.info('No changes to save');
      }
      
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCareHome = async () => {
    if (!careHome?.id || !canManageCareHome) return;
    
    setCareHomeLoading(true);
    try {
      await updateCareHome(careHome.id, careHomeData);
      toast.success('Care home information updated successfully');
      await loadCareHomeData(); // Reload to get updated data
    } catch (error) {
      console.error('Error updating care home:', error);
      toast.error('Failed to update care home information');
    } finally {
      setCareHomeLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Failed to log out');
    }
  };

  const getInitials = (name: string) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getUserDisplayName = () => {
    return userAttributes.name || user?.attributes?.email || 'User';
  };

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case 'ADMIN': return 'Administrator';
      case 'MANAGER': return 'Care Manager';
      case 'CARE_STAFF': return 'Care Staff';
      default: return role;
    }
  };

  return (
    <Layout>
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-terrii-text-primary">Settings</h1>
            <p className="text-terrii-text-secondary">Manage your account and preferences</p>
          </div>
        </div>

        {/* Profile Settings */}
        <Card className="shadow-terrii">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Profile Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Profile Photo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Avatar className="w-20 h-20">
                  {profilePicture ? (
                    <AvatarImage src={profilePicture} alt="Profile" />
                  ) : (
                    <AvatarFallback className="bg-terrii-green text-terrii-text-primary text-xl">
                      {getInitials(getUserDisplayName())}
                    </AvatarFallback>
                  )}
                </Avatar>
                <label className="absolute bottom-0 right-0 bg-terrii-green-dark rounded-full p-2 cursor-pointer hover:bg-terrii-green transition-colors">
                  <Camera className="h-4 w-4 text-terrii-text-primary" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <div>
                <h3 className="font-medium text-terrii-text-primary">{getUserDisplayName()}</h3>
                <p className="text-sm text-terrii-text-secondary">{getRoleDisplayName(terriiProfile?.role || '')}</p>
                <p className="text-xs text-terrii-text-secondary">{careHome?.name}</p>
              </div>
            </div>

            {/* Profile Info - Now Editable */}
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={userAttributes.name}
                  onChange={(e) => setUserAttributes(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                />
                <p className="text-xs text-terrii-text-secondary">
                  This will update your display name across the application
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={userAttributes.email}
                  onChange={(e) => setUserAttributes(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email address"
                />
                <p className="text-xs text-terrii-text-secondary">
                  Changes to email may require verification
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input
                  id="role"
                  value={getRoleDisplayName(terriiProfile?.role || '')}
                  disabled
                  className="bg-gray-50"
                />
                <p className="text-xs text-terrii-text-secondary">
                  Contact your administrator to change your role
                </p>
              </div>
            </div>

            <Button
              onClick={handleSaveProfile}
              disabled={loading}
              className="w-full bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
            >
              <Save className="h-4 w-4 mr-2" />
              {loading ? 'Saving Profile...' : 'Save Profile Changes'}
            </Button>
          </CardContent>
        </Card>

        {/* Care Home Management - Only for ADMIN/MANAGER */}
        {canManageCareHome && (
          <Card className="shadow-terrii">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Building2 className="h-5 w-5" />
                <span>Care Home Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="careHomeName">Care Home Name</Label>
                  <Input
                    id="careHomeName"
                    value={careHomeData.name}
                    onChange={(e) => setCareHomeData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter care home name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="careHomeEmail">Email</Label>
                  <Input
                    id="careHomeEmail"
                    type="email"
                    value={careHomeData.email}
                    onChange={(e) => setCareHomeData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="contact@carehome.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="careHomeAddress">Address</Label>
                  <Input
                    id="careHomeAddress"
                    value={careHomeData.address}
                    onChange={(e) => setCareHomeData(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="Street address"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="careHomeCity">City</Label>
                  <Input
                    id="careHomeCity"
                    value={careHomeData.city}
                    onChange={(e) => setCareHomeData(prev => ({ ...prev, city: e.target.value }))}
                    placeholder="City"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="careHomePostCode">Post Code</Label>
                  <Input
                    id="careHomePostCode"
                    value={careHomeData.postCode}
                    onChange={(e) => setCareHomeData(prev => ({ ...prev, postCode: e.target.value }))}
                    placeholder="Post code"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="careHomePhone">Phone Number</Label>
                  <Input
                    id="careHomePhone"
                    value={careHomeData.phoneNumber}
                    onChange={(e) => setCareHomeData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                    placeholder="+44 1234 567890"
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="careHomeWebsite">Website</Label>
                  <Input
                    id="careHomeWebsite"
                    type="url"
                    value={careHomeData.website}
                    onChange={(e) => setCareHomeData(prev => ({ ...prev, website: e.target.value }))}
                    placeholder="https://www.carehome.com"
                  />
                </div>
              </div>

              <Button
                onClick={handleSaveCareHome}
                disabled={careHomeLoading}
                className="w-full bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
              >
                <Save className="h-4 w-4 mr-2" />
                {careHomeLoading ? 'Saving...' : 'Save Care Home Information'}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Notification Settings */}
        <Card className="shadow-terrii">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Notification Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-terrii-text-primary">New Messages</p>
                <p className="text-sm text-terrii-text-secondary">
                  Get notified when you receive new messages
                </p>
              </div>
              <Switch
                checked={notifications.newMessages}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, newMessages: checked }))
                }
              />
            </div>

            <hr className="border-gray-200" />

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-terrii-text-primary">Concern Alerts</p>
                <p className="text-sm text-terrii-text-secondary">
                  Get notified about urgent family concerns
                </p>
              </div>
              <Switch
                checked={notifications.concernAlerts}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, concernAlerts: checked }))
                }
              />
            </div>

            <hr className="border-gray-200" />

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-terrii-text-primary">Daily Digest</p>
                <p className="text-sm text-terrii-text-secondary">
                  Receive daily summary of activities
                </p>
              </div>
              <Switch
                checked={notifications.dailyDigest}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, dailyDigest: checked }))
                }
              />
            </div>

            <hr className="border-gray-200" />

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-terrii-text-primary">Weekly Report</p>
                <p className="text-sm text-terrii-text-secondary">
                  Receive weekly care insights report
                </p>
              </div>
              <Switch
                checked={notifications.weeklyReport}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, weeklyReport: checked }))
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="shadow-terrii">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Security</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => toast.info('Password change feature coming soon')}
            >
              Change Password
            </Button>
            
            <Button
              variant="outline"
              className="w-full"
              onClick={() => toast.info('Two-factor authentication feature coming soon')}
            >
              Enable Two-Factor Authentication
            </Button>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="shadow-terrii">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <HelpCircle className="h-5 w-5" />
              <span>Support</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => toast.info('Help & FAQ feature coming soon')}
            >
              Help &amp; FAQ
            </Button>
            
            <Button
              variant="outline"
              className="w-full"
              onClick={() => toast.info('Contact support feature coming soon')}
            >
              Contact Support
            </Button>
            
            <Button
              variant="outline"
              className="w-full"
              onClick={() => toast.info('Issue reporting feature coming soon')}
            >
              Report an Issue
            </Button>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="shadow-terrii">
          <CardContent className="p-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Log Out
            </Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav />
    </Layout>
  );
}
