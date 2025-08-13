import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { S3Image } from '../components/ui/S3Image';
import { ResidentDialog } from '../components/residents/ResidentDialog';
import { QuickUpdateDialog } from '../components/residents/QuickUpdateDialog';
import { BottomNav } from '../components/layout/BottomNav';
import { getResidentWithFullData, addResidentActivityWithUpdate, deleteResidentFamilyMember, generateFamilyInviteCode } from '../lib/terriiApi';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';
import { 
  calculateResidentStatus
} from '../lib/statusManager';
import { 
  ArrowLeft, 
  Edit, 
  MessageSquare, 
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  Heart,
  Users,
  Activity,
  Phone,
  Mail,
  Trash2
} from 'lucide-react';

export function ResidentProfileScreen() {
  const { id: residentId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { terriiProfile } = useAuth();
  const [resident, setResident] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showQuickUpdate, setShowQuickUpdate] = useState(false);
  const [inviteCode, setInviteCode] = useState<string | null>(null);
  const [showInviteModal, setShowInviteModal] = useState(false);

  useEffect(() => {
    if (residentId) {
      loadResident();
    }
  }, [residentId]);

  const loadResident = async () => {
    if (!residentId) return;

    try {
      setLoading(true);
      const residentData = await getResidentWithFullData(residentId);
      setResident(residentData);
    } catch (error) {
      console.error('Error loading resident:', error);
      toast.error('Failed to load resident information');
      navigate('/residents');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/residents');
  };

  const handleSendMessage = () => {
    navigate('/messages', { state: { startConversationForResident: residentId } });
  };

  const handleQuickUpdate = async () => {
    setShowQuickUpdate(true);
  };

  const handleQuickUpdateSubmit = async (data: any) => {
    if (!residentId) return;

    try {
      await addResidentActivityWithUpdate(residentId, {
        activity: data.activity,
        notes: data.notes,
        mood: data.mood,
        healthStatus: data.healthStatus,
        familyNotified: data.familyNotified,
        staff: 'Current User' // Replace with actual user name
      });
      
      // Reload resident data
      await loadResident();
      toast.success('Quick update saved successfully');
    } catch (error) {
      console.error('Error saving quick update:', error);
      toast.error('Failed to save quick update');
      throw error; // Re-throw so the dialog can handle it
    }
  };

  const handleEditProfile = () => {
    setShowEditDialog(true);
  };

  const handleResidentUpdate = (updatedResident: any) => {
    setResident(updatedResident);
  };

  const handleDeleteFamilyMember = async (familyMemberId: string, familyMemberName: string) => {
    if (!window.confirm(`Are you sure you want to delete ${familyMemberName} from the family members list?`)) {
      return;
    }

    try {
      await deleteResidentFamilyMember(familyMemberId);
      toast.success(`${familyMemberName} has been removed from family members`);
      
      // Reload resident data to update the family members list
      await loadResident();
    } catch (error) {
      console.error('Error deleting family member:', error);
      toast.error('Failed to delete family member');
    }
  };

  const handleGenerateInviteCode = async (familyMember: any) => {
    try {
      // Get current user ID from auth context
      if (!terriiProfile?.id) {
        toast.error('User profile not found. Please reload the page.');
        return;
      }
      
      const result = await generateFamilyInviteCode(
        familyMember.id,
        terriiProfile.id
      );
      
      if (result.success) {
        setInviteCode(result.code);
        setShowInviteModal(true);
        toast.success(`Invite code generated for ${result.email}!`);
      }
    } catch (error: any) {
      console.error('Error generating invite code:', error);
      toast.error(error.message || 'Failed to generate invite code');
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const calculateAge = (dateOfBirth: string) => {
    if (!dateOfBirth) return 'N/A';
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
  };

  const formatDateTime = (dateTimeString: string) => {
    if (!dateTimeString) return 'N/A';
    const date = new Date(dateTimeString);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      const minutes = Math.floor(diffInHours * 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (diffInHours < 24) {
      const hours = Math.floor(diffInHours);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (diffInHours < 48) {
      return 'Yesterday at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  };

  const getStatusInfo = (lastUpdate: string | null) => {
    // Calculate the current status based on lastUpdate time
    const currentStatus = calculateResidentStatus(lastUpdate);
    
    // Map to the display format expected by the UI
    switch (currentStatus) {
      case 'UP_TO_DATE':
        return { icon: CheckCircle, color: 'text-terrii-success', bg: 'bg-terrii-success/20', text: 'Up to Date' };
      case 'NEEDS_UPDATE':
        return { icon: Clock, color: 'text-terrii-warning', bg: 'bg-terrii-warning/20', text: 'Needs Update' };
      case 'OVERDUE':
        return { icon: AlertCircle, color: 'text-terrii-error', bg: 'bg-terrii-error/20', text: 'Overdue' };
      default:
        return { icon: CheckCircle, color: 'text-terrii-success', bg: 'bg-terrii-success/20', text: 'Up to Date' };
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-terrii-blue/20 flex items-center justify-center">
        <div className="animate-pulse text-terrii-text-primary">Loading resident profile...</div>
      </div>
    );
  }

  if (!resident) {
    return (
      <div className="min-h-screen bg-terrii-blue/20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-terrii-text-primary mb-2">Resident not found</h2>
          <Button onClick={handleBack} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Residents
          </Button>
        </div>
      </div>
    );
  }

  const statusInfo = getStatusInfo(resident.lastUpdate);
  const StatusIcon = statusInfo.icon;

  return (
    <div className="min-h-screen bg-terrii-blue/20 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="p-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleSendMessage}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Message Family
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleQuickUpdate}
              >
                <Plus className="h-4 w-4 mr-2" />
                Quick Update
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleEditProfile}
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
              {resident.photo ? (
                <S3Image 
                  s3Key={resident.photo} 
                  alt={resident.name} 
                  className="w-full h-full object-cover"
                  fallbackSrc={`data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" fill="#e2e8f0"/><text x="32" y="40" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="20" font-weight="500">${getInitials(resident.name)}</text></svg>`)}`}
                />
              ) : (
                <div className="w-full h-full bg-terrii-green rounded-full flex items-center justify-center text-terrii-text-primary text-lg font-medium">
                  {getInitials(resident.name)}
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl font-semibold text-terrii-text-primary">{resident.name}</h1>
              <p className="text-terrii-text-secondary">
                Room {resident.room} • Age {calculateAge(resident.dateOfBirth)}
              </p>
            </div>
          </div>
        </div>

        {/* Status Banner */}
        <div className="bg-white px-4 py-2 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <StatusIcon className={`h-4 w-4 ${statusInfo.color}`} />
                <span className="text-sm font-medium text-terrii-text-primary">
                  Status: {statusInfo.text}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-terrii-text-secondary">
                <Clock className="h-4 w-4" />
                <span>Last updated {resident.lastUpdate ? new Date(resident.lastUpdate).toLocaleString() : 'N/A'}</span>
              </div>
            </div>
            
            <Badge className={`${statusInfo.bg} ${statusInfo.color} border-0`}>
              Active Resident
            </Badge>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4">
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
                    <span className="text-terrii-text-primary">{formatDate(resident.dateOfBirth)}</span>
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
                    <span className="text-terrii-text-primary">{formatDate(resident.admissionDate)}</span>
                  </div>
                  {resident.medicalInfo?.primaryPhysician && (
                    <div className="flex justify-between">
                      <span className="text-terrii-text-secondary">Primary Physician:</span>
                      <span className="text-terrii-text-primary">{resident.medicalInfo.primaryPhysician}</span>
                    </div>
                  )}
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
                  {resident.carePreferences?.interests && (
                    <div>
                      <span className="text-terrii-text-secondary font-medium">Interests:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {resident.carePreferences.interests.map((interest: string) => (
                          <Badge key={interest} variant="outline" className="text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {resident.carePreferences?.communication && (
                    <div>
                      <span className="text-terrii-text-secondary font-medium">Communication:</span>
                      <p className="text-sm text-terrii-text-primary mt-1">
                        {resident.carePreferences.communication}
                      </p>
                    </div>
                  )}
                                    {resident.carePreferences?.mobility && (
                    <div>
                      <span className="text-terrii-text-secondary font-medium">Mobility:</span>
                      <p className="text-sm text-terrii-text-primary mt-1">
                        {resident.carePreferences.mobility}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="medical" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Medical Conditions */}
              {resident.medicalInfo?.conditions && (
                <Card className="shadow-terrii">
                  <CardHeader>
                    <CardTitle>Medical Conditions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {resident.medicalInfo.conditions.map((condition: string) => (
                        <div key={condition} className="flex items-center space-x-2">
                          <AlertCircle className="h-4 w-4 text-terrii-warning" />
                          <span className="text-terrii-text-primary">{condition}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Allergies & Restrictions */}
              <Card className="shadow-terrii">
                <CardHeader>
                  <CardTitle>Allergies & Dietary Restrictions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {resident.medicalInfo?.allergies && (
                      <div>
                        <h4 className="font-medium text-terrii-text-primary mb-2">Allergies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {resident.medicalInfo.allergies.map((allergy: string) => (
                            <Badge key={allergy} className="bg-terrii-error/20 text-terrii-error">
                              {allergy}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {resident.medicalInfo?.dietaryRestrictions && (
                      <div>
                        <h4 className="font-medium text-terrii-text-primary mb-2">Dietary Restrictions:</h4>
                        <div className="flex flex-wrap gap-2">
                          {resident.medicalInfo.dietaryRestrictions.map((restriction: string) => (
                            <Badge key={restriction} className="bg-terrii-info/20 text-terrii-info">
                              {restriction}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
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
                {resident.emergencyContact && (
                  <div className="bg-terrii-success/10 p-4 rounded-lg border border-terrii-success/20">
                    <h4 className="font-medium text-terrii-text-primary mb-2 flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-terrii-success" />
                      <span>Primary Emergency Contact</span>
                    </h4>
                    <div className="space-y-1">
                      <div className="font-medium text-terrii-text-primary">{resident.emergencyContact.name}</div>
                      <div className="text-sm text-terrii-text-secondary">{resident.emergencyContact.relationship}</div>
                      <div className="flex items-center space-x-4 text-sm text-terrii-text-secondary">
                        <div className="flex items-center space-x-1">
                          <Phone className="h-3 w-3" />
                          <span>{resident.emergencyContact.phone}</span>
                        </div>
                        {resident.emergencyContact.email && (
                          <div className="flex items-center space-x-1">
                            <Mail className="h-3 w-3" />
                            <span>{resident.emergencyContact.email}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* All Family Members */}
                {resident.familyMembers && resident.familyMembers.length > 0 && (
                  <div>
                    <h4 className="font-medium text-terrii-text-primary mb-3">All Family Members</h4>
                    <div className="space-y-3">
                      {resident.familyMembers.map((member: any, index: number) => (
                        <div key={member.id || index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                          <div>
                            <div className="font-medium text-terrii-text-primary">{member.name}</div>
                            <div className="text-sm text-terrii-text-secondary">{member.relationship}</div>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-terrii-text-secondary">
                            {member.phone && (
                              <div className="flex items-center space-x-1">
                                <Phone className="h-3 w-3" />
                                <span>{member.phone}</span>
                              </div>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleSendMessage()}
                            >
                              <MessageSquare className="h-4 w-4" />
                            </Button>
                            {!member.isRegistered && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleGenerateInviteCode(member)}
                                className="text-terrii-green hover:text-terrii-green/80 hover:border-terrii-green"
                              >
                                📱 Invite
                              </Button>
                            )}
                            {member.id && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleDeleteFamilyMember(member.id, member.name)}
                                className="text-red-600 hover:text-red-700 hover:border-red-300"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
                  {resident.activities && resident.activities.length > 0 ? (
                    // Sort activities by createdAt (most recent first) before displaying
                    resident.activities
                      .sort((a: any, b: any) => new Date(b.createdAt || b.date).getTime() - new Date(a.createdAt || a.date).getTime())
                      .map((activity: any, index: number) => (
                      <div key={activity.id || index} className="flex items-start space-x-4 p-3 bg-terrii-blue/10 rounded-lg">
                        <div className="w-2 h-2 bg-terrii-success rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-terrii-text-primary">{activity.activity}</h4>
                            <span className="text-xs text-terrii-text-light">
                              {formatDateTime(activity.createdAt || activity.date)}
                            </span>
                          </div>
                          {activity.notes && (
                            <p className="text-sm text-terrii-text-secondary mt-1">{activity.notes}</p>
                          )}
                          {activity.staff && (
                            <div className="text-xs text-terrii-text-light mt-2">
                              Staff: {activity.staff}
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-terrii-text-secondary">No activities recorded yet</p>
                      <Button
                        onClick={handleQuickUpdate}
                        className="mt-4 bg-terrii-green-dark hover:bg-terrii-green text-white"
                        size="sm"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add First Activity
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Edit Dialog */}
      <ResidentDialog
        open={showEditDialog}
        onOpenChange={setShowEditDialog}
        resident={resident}
        onSuccess={handleResidentUpdate}
      />

      {/* Quick Update Dialog */}
      <QuickUpdateDialog
        open={showQuickUpdate}
        onOpenChange={setShowQuickUpdate}
        residentName={resident?.name || ''}
        onSubmit={handleQuickUpdateSubmit}
      />

      {/* Invite Code Modal */}
      {showInviteModal && inviteCode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Family Member Invite Code</h3>
            
            <div className="text-center mb-6">
              <div className="text-3xl font-mono font-bold text-terrii-green mb-2">
                {inviteCode}
              </div>
              <p className="text-sm text-gray-600">
                Share this code with the family member to register
              </p>
            </div>

            <div className="bg-gray-50 rounded p-4 mb-4">
              <h4 className="font-medium mb-2">Instructions:</h4>
              <ol className="text-sm space-y-1 list-decimal list-inside">
                <li>Family member downloads TERRii Family app</li>
                <li>During registration, they enter this code AND their email address</li>
                <li>Both code and email must match for security</li>
                <li>Code expires in 7 days</li>
                <li>Code can only be used once</li>
              </ol>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(inviteCode);
                  toast.success('Code copied to clipboard!');
                }}
                className="flex-1"
              >
                📋 Copy Code
              </Button>
              <Button
                onClick={() => {
                  setShowInviteModal(false);
                  setInviteCode(null);
                }}
                variant="outline"
                className="flex-1"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
