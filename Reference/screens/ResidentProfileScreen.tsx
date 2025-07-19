import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { 
  ArrowLeft, Edit, MessageSquare, Calendar, Phone, Users, 
  FileText, Heart, Camera, Plus, Activity, Clock, AlertCircle,
  CheckCircle, Settings, Archive, MoreHorizontal
} from 'lucide-react';

interface ResidentProfileScreenProps {
  residentId: string;
  onBack: () => void;
  onSendMessage: (residentId: string) => void;
  onQuickUpdate: (residentId: string) => void;
  onEditProfile: (residentId: string, updates: any) => void;
}

export function ResidentProfileScreen({ 
  residentId, 
  onBack, 
  onSendMessage, 
  onQuickUpdate,
  onEditProfile 
}: ResidentProfileScreenProps) {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock resident data - in real app would be fetched by ID
  const resident = {
    id: residentId,
    name: 'Margaret Thompson',
    room: '101A',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    dateOfBirth: '1952-03-15',
    admissionDate: '2023-06-01',
    emergencyContact: {
      name: 'Susan Thompson',
      relationship: 'Daughter',
      phone: '+1 (555) 123-4567',
      email: 'susan@email.com'
    },
    familyMembers: [
      { name: 'Susan Thompson', relationship: 'Daughter', phone: '+1 (555) 123-4567' },
      { name: 'Michael Thompson', relationship: 'Son', phone: '+1 (555) 987-6543' }
    ],
    medicalInfo: {
      primaryPhysician: 'Dr. Sarah Johnson',
      conditions: ['Dementia', 'Hypertension', 'Arthritis'],
      medications: [
        { name: 'Donepezil', dosage: '5mg daily', time: 'Morning' },
        { name: 'Lisinopril', dosage: '10mg daily', time: 'Morning' },
        { name: 'Ibuprofen', dosage: '400mg as needed', time: 'As needed' }
      ],
      allergies: ['Penicillin', 'Shellfish'],
      dietaryRestrictions: ['Low sodium', 'Diabetic-friendly']
    },
    carePreferences: {
      interests: ['Art', 'Music', 'Gardening', 'Reading'],
      routine: 'Prefers morning activities, afternoon rest',
      communication: 'Responds well to gentle approach, enjoys conversation about family',
      mobility: 'Uses walker, needs assistance with stairs'
    },
    recentActivities: [
      { date: '2024-01-15', activity: 'Art Therapy', notes: 'Created a beautiful watercolor painting', staff: 'Sarah Johnson' },
      { date: '2024-01-14', activity: 'Music Therapy', notes: 'Sang along to 1950s songs', staff: 'Kate Wilson' },
      { date: '2024-01-13', activity: 'Garden Time', notes: 'Enjoyed tending to flowers', staff: 'Mike Peterson' }
    ],
    status: 'updated' as const,
    lastUpdate: '2 hours ago',
    unreadMessages: 0
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const handleEditProfile = () => {
    // Handle profile editing
    console.log('Editing profile for resident:', residentId);
    onEditProfile(residentId, { /* updated data */ });
    setShowEditDialog(false);
  };

  return (
    <div className="h-full bg-terrii-blue/5">
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="p-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <Avatar className="w-12 h-12">
              {resident.photo ? (
                <AvatarImage src={resident.photo} alt={resident.name} />
              ) : (
                <AvatarFallback className="bg-terrii-green text-terrii-text-primary">
                  {getInitials(resident.name)}
                </AvatarFallback>
              )}
            </Avatar>
            
            <div>
              <h1 className="text-2xl font-semibold text-terrii-text-primary">{resident.name}</h1>
              <p className="text-terrii-text-secondary">Room {resident.room} • Age {calculateAge(resident.dateOfBirth)}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onSendMessage(resident.id)}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Message Family
            </Button>
            
            <Button
              size="sm"
              onClick={() => onQuickUpdate(resident.id)}
              className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Quick Update
            </Button>
            
            <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Edit Resident Profile</DialogTitle>
                  <DialogDescription>
                    Update {resident.name}'s information and care preferences.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue={resident.name} />
                    </div>
                    <div>
                      <Label htmlFor="room">Room Number</Label>
                      <Input id="room" defaultValue={resident.room} />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" defaultValue={resident.dateOfBirth} />
                    </div>
                    <div>
                      <Label htmlFor="admission">Admission Date</Label>
                      <Input id="admission" type="date" defaultValue={resident.admissionDate} />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="interests">Interests & Hobbies</Label>
                    <Input id="interests" defaultValue={resident.carePreferences.interests.join(', ')} />
                  </div>
                  
                  <div>
                    <Label htmlFor="routine">Daily Routine Preferences</Label>
                    <Textarea id="routine" defaultValue={resident.carePreferences.routine} />
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setShowEditDialog(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleEditProfile} className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Status Banner */}
        <div className="bg-white p-4 rounded-lg shadow-terrii">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-terrii-success" />
                <span className="font-medium text-terrii-text-primary">Status: Up to date</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-terrii-text-secondary">
                <Clock className="h-4 w-4" />
                <span>Last updated {resident.lastUpdate}</span>
              </div>
            </div>
            
            <Badge className="bg-terrii-success/20 text-terrii-success">
              Active Resident
            </Badge>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="medical">Medical</TabsTrigger>
            <TabsTrigger value="family">Family</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Basic Information */}
              <Card className="shadow-terrii">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Basic Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-terrii-text-secondary">Date of Birth:</span>
                    <span className="text-terrii-text-primary">March 15, 1952</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-terrii-text-secondary">Age:</span>
                    <span className="text-terrii-text-primary">{calculateAge(resident.dateOfBirth)} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-terrii-text-secondary">Room:</span>
                    <span className="text-terrii-text-primary">{resident.room}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-terrii-text-secondary">Admission Date:</span>
                    <span className="text-terrii-text-primary">June 1, 2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-terrii-text-secondary">Primary Physician:</span>
                    <span className="text-terrii-text-primary">{resident.medicalInfo.primaryPhysician}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Care Preferences */}
              <Card className="shadow-terrii">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5" />
                    <span>Care Preferences</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="text-terrii-text-secondary font-medium">Interests:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {resident.carePreferences.interests.map(interest => (
                        <Badge key={interest} variant="outline" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-terrii-text-secondary font-medium">Communication:</span>
                    <p className="text-sm text-terrii-text-primary mt-1">
                      {resident.carePreferences.communication}
                    </p>
                  </div>
                  <div>
                    <span className="text-terrii-text-secondary font-medium">Mobility:</span>
                    <p className="text-sm text-terrii-text-primary mt-1">
                      {resident.carePreferences.mobility}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="medical" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Medical Conditions */}
              <Card className="shadow-terrii">
                <CardHeader>
                  <CardTitle>Medical Conditions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {resident.medicalInfo.conditions.map(condition => (
                      <div key={condition} className="flex items-center space-x-2">
                        <AlertCircle className="h-4 w-4 text-terrii-warning" />
                        <span className="text-terrii-text-primary">{condition}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Medications */}
              <Card className="shadow-terrii">
                <CardHeader>
                  <CardTitle>Current Medications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {resident.medicalInfo.medications.map((med, index) => (
                      <div key={index} className="border-l-4 border-terrii-info pl-3">
                        <div className="font-medium text-terrii-text-primary">{med.name}</div>
                        <div className="text-sm text-terrii-text-secondary">{med.dosage}</div>
                        <div className="text-xs text-terrii-text-light">{med.time}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Allergies & Restrictions */}
              <Card className="shadow-terrii md:col-span-2">
                <CardHeader>
                  <CardTitle>Allergies & Dietary Restrictions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-terrii-text-primary mb-2">Allergies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {resident.medicalInfo.allergies.map(allergy => (
                          <Badge key={allergy} className="bg-terrii-error/20 text-terrii-error">
                            {allergy}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-terrii-text-primary mb-2">Dietary Restrictions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {resident.medicalInfo.dietaryRestrictions.map(restriction => (
                          <Badge key={restriction} className="bg-terrii-info/20 text-terrii-info">
                            {restriction}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="family" className="space-y-4">
            <Card className="shadow-terrii">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Family Members & Contacts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Emergency Contact */}
                <div className="bg-terrii-success/10 p-4 rounded-lg border border-terrii-success/20">
                  <h4 className="font-medium text-terrii-text-primary mb-2 flex items-center space-x-2">
                    <AlertCircle className="h-4 w-4 text-terrii-success" />
                    <span>Primary Emergency Contact</span>
                  </h4>
                  <div className="space-y-1">
                    <div className="font-medium text-terrii-text-primary">{resident.emergencyContact.name}</div>
                    <div className="text-sm text-terrii-text-secondary">{resident.emergencyContact.relationship}</div>
                    <div className="text-sm text-terrii-text-secondary">{resident.emergencyContact.phone}</div>
                    <div className="text-sm text-terrii-text-secondary">{resident.emergencyContact.email}</div>
                  </div>
                </div>

                {/* All Family Members */}
                <div>
                  <h4 className="font-medium text-terrii-text-primary mb-3">All Family Members</h4>
                  <div className="space-y-3">
                    {resident.familyMembers.map((member, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-border">
                        <div>
                          <div className="font-medium text-terrii-text-primary">{member.name}</div>
                          <div className="text-sm text-terrii-text-secondary">{member.relationship}</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-terrii-text-secondary">{member.phone}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onSendMessage(resident.id)}
                          >
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities" className="space-y-4">
            <Card className="shadow-terrii">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5" />
                  <span>Recent Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {resident.recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-3 bg-terrii-blue/10 rounded-lg">
                      <div className="w-2 h-2 bg-terrii-success rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-terrii-text-primary">{activity.activity}</h4>
                          <span className="text-xs text-terrii-text-light">{activity.date}</span>
                        </div>
                        <p className="text-sm text-terrii-text-secondary mt-1">{activity.notes}</p>
                        <div className="text-xs text-terrii-text-light mt-2">
                          Staff: {activity.staff}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}