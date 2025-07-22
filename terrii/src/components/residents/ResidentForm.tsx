import { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Label } from '../ui/Label';
import { ImageUpload } from '../ui/ImageUpload';
import { Plus, X } from 'lucide-react';
import { toast } from 'sonner';

interface ResidentFormData {
  // Basic Information
  name: string;
  room: string;
  dateOfBirth: string;
  admissionDate: string;
  photo?: string;

  // Emergency Contact
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
    email: string;
  };

  // Medical Information
  medicalInfo: {
    primaryPhysician: string;
    conditions: string[];
    allergies: string[];
    dietaryRestrictions: string[];
  };

  // Care Preferences
  carePreferences: {
    interests: string[];
    routine: string;
    communication: string;
    mobility: string;
  };

  // Family Members (additional to emergency contact)
  familyMembers: Array<{
    name: string;
    relationship: string;
    phone: string;
    email: string;
  }>;
}

interface ResidentFormProps {
  initialData?: Partial<ResidentFormData>;
  onSubmit: (data: ResidentFormData) => Promise<void>;
  onCancel: () => void;
  isEditing?: boolean;
  loading?: boolean;
}

export function ResidentForm({ 
  initialData, 
  onSubmit, 
  onCancel, 
  isEditing = false, 
  loading = false 
}: ResidentFormProps) {
  const [formData, setFormData] = useState<ResidentFormData>({
    name: initialData?.name || '',
    room: initialData?.room || '',
    dateOfBirth: initialData?.dateOfBirth || '',
    admissionDate: initialData?.admissionDate || new Date().toISOString().split('T')[0],
    photo: initialData?.photo || '',

    emergencyContact: {
      name: initialData?.emergencyContact?.name || '',
      relationship: initialData?.emergencyContact?.relationship || '',
      phone: initialData?.emergencyContact?.phone || '',
      email: initialData?.emergencyContact?.email || ''
    },

    medicalInfo: {
      primaryPhysician: initialData?.medicalInfo?.primaryPhysician || '',
      conditions: initialData?.medicalInfo?.conditions || [],
      allergies: initialData?.medicalInfo?.allergies || [],
      dietaryRestrictions: initialData?.medicalInfo?.dietaryRestrictions || []
    },

    carePreferences: {
      interests: initialData?.carePreferences?.interests || [],
      routine: initialData?.carePreferences?.routine || '',
      communication: initialData?.carePreferences?.communication || '',
      mobility: initialData?.carePreferences?.mobility || ''
    },

    familyMembers: initialData?.familyMembers || []
  });

  const [tempInputs, setTempInputs] = useState({
    condition: '',
    allergy: '',
    dietaryRestriction: '',
    interest: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.room.trim()) {
      toast.error('Name and room are required fields');
      return;
    }

    if (!formData.emergencyContact.name.trim() || !formData.emergencyContact.phone.trim()) {
      toast.error('Emergency contact name and phone are required');
      return;
    }

    try {
      await onSubmit(formData);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to save resident information');
    }
  };

  const addListItem = (field: keyof typeof tempInputs, targetField: string) => {
    const value = tempInputs[field].trim();
    if (!value) return;

    if (targetField === 'medicalInfo.conditions') {
      setFormData(prev => ({
        ...prev,
        medicalInfo: {
          ...prev.medicalInfo,
          conditions: [...prev.medicalInfo.conditions, value]
        }
      }));
    } else if (targetField === 'medicalInfo.allergies') {
      setFormData(prev => ({
        ...prev,
        medicalInfo: {
          ...prev.medicalInfo,
          allergies: [...prev.medicalInfo.allergies, value]
        }
      }));
    } else if (targetField === 'medicalInfo.dietaryRestrictions') {
      setFormData(prev => ({
        ...prev,
        medicalInfo: {
          ...prev.medicalInfo,
          dietaryRestrictions: [...prev.medicalInfo.dietaryRestrictions, value]
        }
      }));
    } else if (targetField === 'carePreferences.interests') {
      setFormData(prev => ({
        ...prev,
        carePreferences: {
          ...prev.carePreferences,
          interests: [...prev.carePreferences.interests, value]
        }
      }));
    }

    setTempInputs(prev => ({ ...prev, [field]: '' }));
  };

  const removeListItem = (targetField: string, index: number) => {
    if (targetField === 'medicalInfo.conditions') {
      setFormData(prev => ({
        ...prev,
        medicalInfo: {
          ...prev.medicalInfo,
          conditions: prev.medicalInfo.conditions.filter((_, i) => i !== index)
        }
      }));
    } else if (targetField === 'medicalInfo.allergies') {
      setFormData(prev => ({
        ...prev,
        medicalInfo: {
          ...prev.medicalInfo,
          allergies: prev.medicalInfo.allergies.filter((_, i) => i !== index)
        }
      }));
    } else if (targetField === 'medicalInfo.dietaryRestrictions') {
      setFormData(prev => ({
        ...prev,
        medicalInfo: {
          ...prev.medicalInfo,
          dietaryRestrictions: prev.medicalInfo.dietaryRestrictions.filter((_, i) => i !== index)
        }
      }));
    } else if (targetField === 'carePreferences.interests') {
      setFormData(prev => ({
        ...prev,
        carePreferences: {
          ...prev.carePreferences,
          interests: prev.carePreferences.interests.filter((_, i) => i !== index)
        }
      }));
    }
  };

  const addFamilyMember = () => {
    setFormData(prev => ({
      ...prev,
      familyMembers: [...prev.familyMembers, { name: '', relationship: '', phone: '', email: '' }]
    }));
  };

  const updateFamilyMember = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      familyMembers: prev.familyMembers.map((member, i) => 
        i === index ? { ...member, [field]: value } : member
      )
    }));
  };

  const removeFamilyMember = (index: number) => {
    setFormData(prev => ({
      ...prev,
      familyMembers: prev.familyMembers.filter((_, i) => i !== index)
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
      {/* Basic Information */}
      <div className="bg-white rounded-lg p-6 shadow-terrii">
        <h3 className="text-lg font-semibold text-terrii-text-primary mb-4">Basic Information</h3>
        
        {/* Photo Upload */}
        <div className="mb-6">
          <Label>Resident Photo</Label>
          <ImageUpload
            currentImage={formData.photo}
            onImageChange={(s3Key) => setFormData(prev => ({ ...prev, photo: s3Key || undefined }))}
            folder="terrii-residents"
            placeholder="Upload resident photo"
            className="mt-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter full name"
              required
            />
          </div>
          <div>
            <Label htmlFor="room">Room Number *</Label>
            <Input
              id="room"
              value={formData.room}
              onChange={(e) => setFormData(prev => ({ ...prev, room: e.target.value }))}
              placeholder="e.g., 101A"
              required
            />
          </div>
          <div>
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input
              id="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="admissionDate">Admission Date</Label>
            <Input
              id="admissionDate"
              type="date"
              value={formData.admissionDate}
              onChange={(e) => setFormData(prev => ({ ...prev, admissionDate: e.target.value }))}
            />
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-white rounded-lg p-6 shadow-terrii">
        <h3 className="text-lg font-semibold text-terrii-text-primary mb-4">Emergency Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="emergencyName">Contact Name *</Label>
            <Input
              id="emergencyName"
              value={formData.emergencyContact.name}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                emergencyContact: { ...prev.emergencyContact, name: e.target.value }
              }))}
              placeholder="Full name"
              required
            />
          </div>
          <div>
            <Label htmlFor="emergencyRelationship">Relationship</Label>
            <select
              id="emergencyRelationship"
              value={formData.emergencyContact.relationship}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                emergencyContact: { ...prev.emergencyContact, relationship: e.target.value }
              }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select relationship</option>
              <option value="spouse">Spouse</option>
              <option value="daughter">Daughter</option>
              <option value="son">Son</option>
              <option value="parent">Parent</option>
              <option value="sibling">Sibling</option>
              <option value="friend">Friend</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <Label htmlFor="emergencyPhone">Phone Number *</Label>
            <Input
              id="emergencyPhone"
              value={formData.emergencyContact.phone}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                emergencyContact: { ...prev.emergencyContact, phone: e.target.value }
              }))}
              placeholder="+1 (555) 123-4567"
              required
            />
          </div>
          <div>
            <Label htmlFor="emergencyEmail">Email</Label>
            <Input
              id="emergencyEmail"
              type="email"
              value={formData.emergencyContact.email}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                emergencyContact: { ...prev.emergencyContact, email: e.target.value }
              }))}
              placeholder="email@example.com"
            />
          </div>
        </div>
      </div>

      {/* Medical Information */}
      <div className="bg-white rounded-lg p-6 shadow-terrii">
        <h3 className="text-lg font-semibold text-terrii-text-primary mb-4">Medical Information</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="primaryPhysician">Primary Physician</Label>
            <Input
              id="primaryPhysician"
              value={formData.medicalInfo.primaryPhysician}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                medicalInfo: { ...prev.medicalInfo, primaryPhysician: e.target.value }
              }))}
              placeholder="Dr. Name"
            />
          </div>

          {/* Medical Conditions */}
          <div>
            <Label>Medical Conditions</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={tempInputs.condition}
                onChange={(e) => setTempInputs(prev => ({ ...prev, condition: e.target.value }))}
                placeholder="Add a medical condition"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addListItem('condition', 'medicalInfo.conditions'))}
              />
              <Button
                type="button"
                onClick={() => addListItem('condition', 'medicalInfo.conditions')}
                className="px-3"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.medicalInfo.conditions.map((condition, index) => (
                <div key={index} className="bg-blue-100 border border-blue-200 text-blue-800 px-3 py-2 rounded-lg text-sm flex items-center gap-2 shadow-sm">
                  <span className="font-medium">{condition}</span>
                  <button
                    type="button"
                    onClick={() => removeListItem('medicalInfo.conditions', index)}
                    className="text-blue-600 hover:text-blue-800 hover:bg-blue-200 rounded-full p-1 transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Allergies */}
          <div>
            <Label>Allergies</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={tempInputs.allergy}
                onChange={(e) => setTempInputs(prev => ({ ...prev, allergy: e.target.value }))}
                placeholder="Add an allergy"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addListItem('allergy', 'medicalInfo.allergies'))}
              />
              <Button
                type="button"
                onClick={() => addListItem('allergy', 'medicalInfo.allergies')}
                className="px-3"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.medicalInfo.allergies.map((allergy, index) => (
                <div key={index} className="bg-red-100 border border-red-200 text-red-800 px-3 py-2 rounded-lg text-sm flex items-center gap-2 shadow-sm">
                  <span className="font-medium">{allergy}</span>
                  <button
                    type="button"
                    onClick={() => removeListItem('medicalInfo.allergies', index)}
                    className="text-red-600 hover:text-red-800 hover:bg-red-200 rounded-full p-1 transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Dietary Restrictions */}
          <div>
            <Label>Dietary Restrictions</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={tempInputs.dietaryRestriction}
                onChange={(e) => setTempInputs(prev => ({ ...prev, dietaryRestriction: e.target.value }))}
                placeholder="Add a dietary restriction"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addListItem('dietaryRestriction', 'medicalInfo.dietaryRestrictions'))}
              />
              <Button
                type="button"
                onClick={() => addListItem('dietaryRestriction', 'medicalInfo.dietaryRestrictions')}
                className="px-3"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.medicalInfo.dietaryRestrictions.map((restriction, index) => (
                <div key={index} className="bg-orange-100 border border-orange-200 text-orange-800 px-3 py-2 rounded-lg text-sm flex items-center gap-2 shadow-sm">
                  <span className="font-medium">{restriction}</span>
                  <button
                    type="button"
                    onClick={() => removeListItem('medicalInfo.dietaryRestrictions', index)}
                    className="text-orange-600 hover:text-orange-800 hover:bg-orange-200 rounded-full p-1 transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Care Preferences */}
      <div className="bg-white rounded-lg p-6 shadow-terrii">
        <h3 className="text-lg font-semibold text-terrii-text-primary mb-4">Care Preferences</h3>
        <div className="space-y-4">
          {/* Interests */}
          <div>
            <Label>Interests & Hobbies</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={tempInputs.interest}
                onChange={(e) => setTempInputs(prev => ({ ...prev, interest: e.target.value }))}
                placeholder="Add an interest or hobby"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addListItem('interest', 'carePreferences.interests'))}
              />
              <Button
                type="button"
                onClick={() => addListItem('interest', 'carePreferences.interests')}
                className="px-3"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.carePreferences.interests.map((interest, index) => (
                <div key={index} className="bg-green-100 border border-green-200 text-green-800 px-3 py-2 rounded-lg text-sm flex items-center gap-2 shadow-sm">
                  <span className="font-medium">{interest}</span>
                  <button
                    type="button"
                    onClick={() => removeListItem('carePreferences.interests', index)}
                    className="text-green-600 hover:text-green-800 hover:bg-green-200 rounded-full p-1 transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="routine">Daily Routine Preferences</Label>
            <Textarea
              id="routine"
              value={formData.carePreferences.routine}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                carePreferences: { ...prev.carePreferences, routine: e.target.value }
              }))}
              placeholder="Describe preferred daily routine, meal times, activities..."
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="communication">Communication Notes</Label>
            <Textarea
              id="communication"
              value={formData.carePreferences.communication}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                carePreferences: { ...prev.carePreferences, communication: e.target.value }
              }))}
              placeholder="How the resident prefers to communicate, any special considerations..."
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="mobility">Mobility Notes</Label>
            <Textarea
              id="mobility"
              value={formData.carePreferences.mobility}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                carePreferences: { ...prev.carePreferences, mobility: e.target.value }
              }))}
              placeholder="Mobility aids, assistance needed, restrictions..."
              rows={2}
            />
          </div>
        </div>
      </div>

      {/* Additional Family Members */}
      <div className="bg-white rounded-lg p-6 shadow-terrii">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-terrii-text-primary">Additional Family Members</h3>
          <Button type="button" onClick={addFamilyMember} variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Family Member
          </Button>
        </div>
        <div className="space-y-4">
          {formData.familyMembers.map((member, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium text-terrii-text-primary">Family Member {index + 1}</h4>
                <Button
                  type="button"
                  onClick={() => removeFamilyMember(index)}
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:text-red-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input
                  value={member.name}
                  onChange={(e) => updateFamilyMember(index, 'name', e.target.value)}
                  placeholder="Name"
                />
                <select
                  value={member.relationship}
                  onChange={(e) => updateFamilyMember(index, 'relationship', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select relationship</option>
                  <option value="spouse">Spouse</option>
                  <option value="daughter">Daughter</option>
                  <option value="son">Son</option>
                  <option value="parent">Parent</option>
                  <option value="sibling">Sibling</option>
                  <option value="friend">Friend</option>
                  <option value="other">Other</option>
                </select>
                <Input
                  value={member.phone}
                  onChange={(e) => updateFamilyMember(index, 'phone', e.target.value)}
                  placeholder="Phone number"
                />
                <Input
                  type="email"
                  value={member.email}
                  onChange={(e) => updateFamilyMember(index, 'email', e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-4 pt-6 border-t">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button 
          type="submit" 
          disabled={loading}
          className="bg-terrii-green-dark hover:bg-terrii-green text-white"
        >
          {loading ? 'Saving...' : isEditing ? 'Update Resident' : 'Add Resident'}
        </Button>
      </div>
    </form>
  );
}
