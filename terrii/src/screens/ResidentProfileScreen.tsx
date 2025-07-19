import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { residents } from '../mock/residents';
import { Button } from '../components/ui/Button';
import { BottomNav } from '../components/layout/BottomNav';
import { toast } from 'sonner';
import { 
  ArrowLeft, MessageSquare, Calendar, Edit, CheckCircle, 
  Clock, FileText, Heart, Users, Activity, AlertCircle
} from 'lucide-react';

export function ResidentProfileScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Find resident by id
  const resident = residents.find(r => r.id === id);
  
  if (!resident) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <h2 className="text-xl font-semibold mb-4 text-terrii-text-primary">Resident Not Found</h2>
        <p className="text-terrii-text-secondary mb-6">The resident you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/residents')}>
          Back to Residents
        </Button>
      </div>
    );
  }
  
  // Generate initials for avatar
  const initials = resident.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
  
  // Calculate age from date of birth
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
  
  // Handle sending message to family
  const handleSendMessage = () => {
    toast.info(`Sending message to family of ${resident.name}`);
    // navigate(`/messages/compose?resident=${resident.id}`);
  };
  
  // Handle quick update
  const handleQuickUpdate = () => {
    toast.info(`Creating quick update for ${resident.name}`);
    // Show a dialog or navigate to quick update form
  };
  
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/residents')}
            className="p-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              {resident.photo ? (
                <img 
                  src={resident.photo} 
                  alt={resident.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-terrii-blue flex items-center justify-center text-terrii-text-primary font-medium">
                  {initials}
                </div>
              )}
            </div>
            
            <div>
              <h1 className="text-xl font-bold text-terrii-text-primary">{resident.name}</h1>
              <p className="text-terrii-text-secondary text-sm">
                Room {resident.room} • Age {calculateAge(resident.dateOfBirth)}
              </p>
            </div>
          </div>
        </div>
      </header>
      
      {/* Status Banner */}
      <div className="bg-white px-4 py-2 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {resident.status === 'stable' ? (
                <CheckCircle className="h-4 w-4 text-terrii-success" />
              ) : resident.status === 'check' ? (
                <Clock className="h-4 w-4 text-terrii-warning" />
              ) : (
                <Clock className="h-4 w-4 text-terrii-error" />
              )}
              <span className="text-sm font-medium text-terrii-text-primary">
                Status: {resident.status === 'stable' ? 'Up to date' : resident.status === 'check' ? 'Needs update' : 'Overdue'}
              </span>
            </div>
            
            <div className="text-xs text-terrii-text-secondary flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              Last updated {new Date(resident.lastUpdate).toLocaleDateString()}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleSendMessage}
              className="h-8 px-3 border border-gray-200 flex items-center"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              <span>Message Family</span>
            </Button>
            
            <Button
              size="sm"
              onClick={handleQuickUpdate}
              className="h-8 px-3 bg-terrii-green text-terrii-text-primary hover:bg-terrii-green-dark flex items-center"
            >
              <Calendar className="h-4 w-4 mr-2" />
              <span>Quick Update</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex">
          <button
            className={`flex-1 px-4 py-2 text-sm font-medium ${activeTab === 'overview' ? 'border-b-2 border-terrii-blue text-terrii-text-primary' : 'text-terrii-text-secondary'}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`flex-1 px-4 py-2 text-sm font-medium ${activeTab === 'medical' ? 'border-b-2 border-terrii-blue text-terrii-text-primary' : 'text-terrii-text-secondary'}`}
            onClick={() => setActiveTab('medical')}
          >
            Medical
          </button>
          <button
            className={`flex-1 px-4 py-2 text-sm font-medium ${activeTab === 'family' ? 'border-b-2 border-terrii-blue text-terrii-text-primary' : 'text-terrii-text-secondary'}`}
            onClick={() => setActiveTab('family')}
          >
            Family
          </button>
          <button
            className={`flex-1 px-4 py-2 text-sm font-medium ${activeTab === 'activities' ? 'border-b-2 border-terrii-blue text-terrii-text-primary' : 'text-terrii-text-secondary'}`}
            onClick={() => setActiveTab('activities')}
          >
            Activities
          </button>
        </div>
      </div>
      
      {/* Main content */}
      <main className="flex-1 overflow-auto bg-terrii-blue/10 p-4 space-y-4">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Basic Information */}
            <div className="bg-white rounded-lg shadow-terrii p-4">
              <div className="flex items-center space-x-2 mb-3">
                <FileText className="h-5 w-5 text-terrii-text-primary" />
                <h3 className="text-lg font-medium text-terrii-text-primary">Basic Information</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-terrii-text-secondary">Date of Birth:</span>
                  <span className="text-terrii-text-primary">{new Date(resident.dateOfBirth).toLocaleDateString()}</span>
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
                  <span className="text-terrii-text-primary">{new Date(resident.admissionDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terrii-text-secondary">Primary Physician:</span>
                  <span className="text-terrii-text-primary">{resident.medicalInfo.primaryPhysician}</span>
                </div>
              </div>
            </div>
            
            {/* Care Preferences */}
            <div className="bg-white rounded-lg shadow-terrii p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Heart className="h-5 w-5 text-terrii-text-primary" />
                <h3 className="text-lg font-medium text-terrii-text-primary">Care Preferences</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <span className="text-terrii-text-secondary font-medium">Interests:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {resident.carePreferences.interests.map((interest, index) => (
                      <span 
                        key={index}
                        className="inline-block bg-terrii-blue/20 text-terrii-text-primary rounded-full px-2 py-1 text-xs"
                      >
                        {interest}
                      </span>
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
                <div>
                  <span className="text-terrii-text-secondary font-medium">Daily Routine:</span>
                  <p className="text-sm text-terrii-text-primary mt-1">
                    {resident.carePreferences.routine}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'medical' && (
          <div className="space-y-4">
            {/* Medical Conditions */}
            <div className="bg-white rounded-lg shadow-terrii p-4">
              <h3 className="text-lg font-medium text-terrii-text-primary mb-3">Medical Conditions</h3>
              <div className="space-y-2">
                {resident.medicalInfo.conditions.map((condition, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-terrii-warning rounded-full"></div>
                    <span className="text-terrii-text-primary">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Medications */}
            <div className="bg-white rounded-lg shadow-terrii p-4">
              <h3 className="text-lg font-medium text-terrii-text-primary mb-3">Current Medications</h3>
              <div className="space-y-3">
                {resident.medicalInfo.medications.map((med, index) => (
                  <div key={index} className="border-l-4 border-terrii-blue pl-3">
                    <div className="font-medium text-terrii-text-primary">{med.name}</div>
                    <div className="text-sm text-terrii-text-secondary">{med.dosage}</div>
                    <div className="text-xs text-terrii-text-light">{med.time}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Allergies & Restrictions */}
            <div className="bg-white rounded-lg shadow-terrii p-4">
              <h3 className="text-lg font-medium text-terrii-text-primary mb-3">Allergies & Dietary Restrictions</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-terrii-text-primary mb-2">Allergies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {resident.medicalInfo.allergies.map((allergy, index) => (
                      <span 
                        key={index}
                        className="inline-block bg-terrii-error/20 text-terrii-error rounded-full px-2 py-1 text-xs"
                      >
                        {allergy}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-terrii-text-primary mb-2">Dietary Restrictions:</h4>
                  <div className="flex flex-wrap gap-2">
                    {resident.medicalInfo.dietaryRestrictions.map((restriction, index) => (
                      <span 
                        key={index}
                        className="inline-block bg-terrii-info/20 text-terrii-info rounded-full px-2 py-1 text-xs"
                      >
                        {restriction}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'family' && (
          <div className="space-y-4">
            {/* Emergency Contact */}
            <div className="bg-white rounded-lg shadow-terrii p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Users className="h-5 w-5 text-terrii-text-primary" />
                <h3 className="text-lg font-medium text-terrii-text-primary">Family Members & Contacts</h3>
              </div>
              
              {/* Primary Emergency Contact */}
              <div className="bg-terrii-success/10 p-4 rounded-lg border border-terrii-success/20 mb-4">
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
              <div className="space-y-3">
                {resident.familyMembers.map((member, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-terrii-blue/5 rounded-lg">
                    <div>
                      <div className="font-medium text-terrii-text-primary">{member.name}</div>
                      <div className="text-sm text-terrii-text-secondary">{member.relationship}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-terrii-text-secondary">{member.phone}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toast.info(`Messaging ${member.name}`)}
                        className="h-8 px-3 flex items-center"
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'activities' && (
          <div className="space-y-4">
            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow-terrii p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Activity className="h-5 w-5 text-terrii-text-primary" />
                <h3 className="text-lg font-medium text-terrii-text-primary">Recent Activities</h3>
              </div>
              
              <div className="space-y-4">
                {resident.recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 bg-terrii-blue/10 rounded-lg">
                    <div className="w-2 h-2 bg-terrii-success rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-terrii-text-primary">{activity.activity}</h4>
                        <span className="text-xs text-terrii-text-light">{new Date(activity.date).toLocaleDateString()}</span>
                      </div>
                      <p className="text-sm text-terrii-text-secondary mt-1">{activity.notes}</p>
                      <div className="text-xs text-terrii-text-light mt-2">
                        Staff: {activity.staff}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex justify-center">
                <Button 
                  onClick={() => toast.info(`Adding new activity for ${resident.name}`)}
                  className="h-9 px-4 bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary flex items-center"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Add Activity
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}