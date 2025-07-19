import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Switch } from '../ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Separator } from '../ui/separator';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { User, Bell, Shield, HelpCircle, LogOut, Camera, Save, Trash2, Play } from 'lucide-react';

interface SettingsScreenProps {
  userProfile: {
    name: string;
    email: string;
    role: string;
    photo?: string;
  };
  onUpdateProfile: (profile: any) => void;
  onLogout: () => void;
  onShowDemo: () => void;
}

export function SettingsScreen({ userProfile, onUpdateProfile, onLogout, onShowDemo }: SettingsScreenProps) {
  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);
  const [role, setRole] = useState(userProfile.role);
  const [photo, setPhoto] = useState(userProfile.photo || '');
  const [notifications, setNotifications] = useState({
    newMessages: true,
    concernAlerts: true,
    dailyDigest: false,
    weeklyReport: true,
  });
  const [loading, setLoading] = useState(false);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onUpdateProfile({
      name,
      email,
      role,
      photo,
    });
    
    setLoading(false);
  };

  const handleDeleteAccount = () => {
    // Handle account deletion
    console.log('Delete account requested');
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="h-full bg-terrii-blue/10">
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-terrii-text-primary">Settings</h1>
            <p className="text-terrii-text-secondary">Manage your account and preferences</p>
          </div>
        </div>

        {/* Demo Section */}
        <Card className="shadow-terrii border-terrii-green/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-terrii-green-dark">
              <Play className="h-5 w-5" />
              <span>Demo Video</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-terrii-text-secondary mb-4">
              Watch our guided demo to see all of TERRii's features in action.
            </p>
            <Button
              onClick={onShowDemo}
              className="w-full bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
            >
              <Play className="h-4 w-4 mr-2" />
              Watch Demo Video
            </Button>
          </CardContent>
        </Card>

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
                  {photo ? (
                    <AvatarImage src={photo} alt="Profile" />
                  ) : (
                    <AvatarFallback className="bg-terrii-green text-terrii-text-primary text-xl">
                      {getInitials(name)}
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
                <h3 className="font-medium text-terrii-text-primary">{name}</h3>
                <p className="text-sm text-terrii-text-secondary">{role}</p>
              </div>
            </div>

            {/* Profile Form */}
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nurse">Nurse</SelectItem>
                    <SelectItem value="care-assistant">Care Assistant</SelectItem>
                    <SelectItem value="activity-coordinator">Activity Coordinator</SelectItem>
                    <SelectItem value="social-worker">Social Worker</SelectItem>
                    <SelectItem value="manager">Care Manager</SelectItem>
                    <SelectItem value="administrator">Administrator</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={handleSaveProfile}
              disabled={loading}
              className="w-full bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
            >
              <Save className="h-4 w-4 mr-2" />
              {loading ? 'Saving...' : 'Save Profile'}
            </Button>
          </CardContent>
        </Card>

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

            <Separator />

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

            <Separator />

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

            <Separator />

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
              onClick={() => console.log('Change password')}
            >
              Change Password
            </Button>
            
            <Button
              variant="outline"
              className="w-full"
              onClick={() => console.log('Two-factor authentication')}
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
              onClick={() => console.log('Help & FAQ')}
            >
              Help &amp; FAQ
            </Button>
            
            <Button
              variant="outline"
              className="w-full"
              onClick={() => console.log('Contact Support')}
            >
              Contact Support
            </Button>
            
            <Button
              variant="outline"
              className="w-full"
              onClick={() => console.log('Report Issue')}
            >
              Report an Issue
            </Button>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="shadow-terrii border-terrii-error/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-terrii-error">
              <Trash2 className="h-5 w-5" />
              <span>Danger Zone</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="w-full">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove all your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteAccount}>
                    Delete Account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="shadow-terrii">
          <CardContent className="p-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={onLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Log Out
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}