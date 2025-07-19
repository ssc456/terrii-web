import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Camera, Upload } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProfileSetupScreenProps {
  onComplete: (profile: UserProfile) => void;
}

interface UserProfile {
  name: string;
  role: string;
  photo?: string;
}

export function ProfileSetupScreen({ onComplete }: ProfileSetupScreenProps) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    onComplete({
      name,
      role,
      photo: photo || undefined,
    });

    setLoading(false);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-terrii-blue/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-terrii-lg">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
          <CardDescription className="text-terrii-text-secondary">
            Help us personalize your TERRii experience
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Photo */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  {photo ? (
                    <AvatarImage src={photo} alt="Profile" />
                  ) : (
                    <AvatarFallback className="bg-terrii-green text-terrii-text-primary text-xl">
                      {name ? getInitials(name) : <Camera className="h-8 w-8" />}
                    </AvatarFallback>
                  )}
                </Avatar>
                <label className="absolute bottom-0 right-0 bg-terrii-green-dark rounded-full p-2 cursor-pointer hover:bg-terrii-green transition-colors">
                  <Upload className="h-4 w-4 text-terrii-text-primary" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <p className="text-sm text-terrii-text-light">
                Upload a profile photo
              </p>
            </div>
            
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            {/* Role */}
            <div className="space-y-2">
              <Label htmlFor="role">Role *</Label>
              <Select value={role} onValueChange={setRole} required>
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
            
            <Button
              type="submit"
              className="w-full bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
              disabled={loading || !name || !role}
            >
              {loading ? 'Setting up...' : 'Complete Setup'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}