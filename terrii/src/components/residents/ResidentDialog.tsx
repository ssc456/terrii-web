import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/Dialog';
import { ResidentForm } from './ResidentForm';
import { useAuth } from '../../contexts/AuthContext';
import { createResident, updateResident, addResidentFamilyMember, getResidentWithFullData, getResidentFamilyMembers } from '../../lib/terriiApi';
import { toast } from 'sonner';

interface ResidentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resident?: any; // Existing resident data for editing
  onSuccess: (resident: any) => void;
}

export function ResidentDialog({ open, onOpenChange, resident, onSuccess }: ResidentDialogProps) {
  const { terriiProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const isEditing = !!resident;

  const handleSubmit = async (formData: any) => {
    if (!terriiProfile?.careHomeID) {
      toast.error('No care home selected');
      return;
    }

    console.log('ResidentDialog handleSubmit called with data:', formData);
    console.log('Family members in form data:', formData.familyMembers);

    setLoading(true);
    try {
      let result;
      
      if (isEditing) {
        // Update existing resident
        result = await updateResident(resident.id, {
          name: formData.name,
          room: formData.room,
          dateOfBirth: formData.dateOfBirth,
          admissionDate: formData.admissionDate,
          photo: formData.photo,
          lastUpdate: new Date().toISOString()
        });

        // Handle family members separately for editing
        if (formData.familyMembers && formData.familyMembers.length > 0) {
          console.log('Processing family members for editing:', formData.familyMembers);
          
          // Get existing family members to avoid duplicates
          const existingFamilyMembers = await getResidentFamilyMembers(resident.id);
          console.log('Existing family members:', existingFamilyMembers);
          
          for (const familyMember of formData.familyMembers) {
            console.log('Processing family member:', familyMember);
            
            // Check if this family member already exists (check by name and relationship)
            const alreadyExists = existingFamilyMembers.some((existing: any) => 
              existing.name === familyMember.name && existing.relationship === familyMember.relationship
            );
            
            console.log(`Family member ${familyMember.name} already exists:`, alreadyExists);
            
            if (!alreadyExists) {
              try {
                console.log('Adding new family member:', familyMember);
                const addedMember = await addResidentFamilyMember(resident.id, {
                  name: familyMember.name,
                  relationship: familyMember.relationship,
                  phone: familyMember.phone,
                  email: familyMember.email
                });
                console.log('Family member added successfully:', addedMember);
              } catch (error) {
                console.error('Error adding family member:', familyMember.name, error);
                // Don't throw here, continue with other family members
              }
            }
          }
        } else {
          console.log('No family members to process for editing');
        }
        
        // Refresh the resident data to get updated family members
        result = await getResidentWithFullData(resident.id);
      } else {
        // Create new resident
        console.log('Creating new resident with data:', {
          ...formData,
          careHomeID: terriiProfile.careHomeID,
          status: 'STABLE',
          lastUpdate: new Date().toISOString(),
          unreadMessages: 0
        });
        
        result = await createResident({
          ...formData,
          careHomeID: terriiProfile.careHomeID,
          status: 'STABLE',
          lastUpdate: new Date().toISOString(),
          unreadMessages: 0
        });
        
        console.log('New resident created:', result);
      }

      if (result) {
        toast.success(`Resident ${isEditing ? 'updated' : 'created'} successfully`);
        onSuccess(result);
        onOpenChange(false);
      }
    } catch (error) {
      console.error(`Error ${isEditing ? 'updating' : 'creating'} resident:`, error);
      toast.error(`Failed to ${isEditing ? 'update' : 'create'} resident`);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  // Prepare initial data for editing
  const initialData = resident ? {
    name: resident.name,
    room: resident.room,
    dateOfBirth: resident.dateOfBirth,
    admissionDate: resident.admissionDate,
    photo: resident.photo,
    emergencyContact: resident.emergencyContact || {
      name: '',
      relationship: '',
      phone: '',
      email: ''
    },
    medicalInfo: resident.medicalInfo || {
      primaryPhysician: '',
      conditions: [],
      allergies: [],
      dietaryRestrictions: []
    },
    carePreferences: resident.carePreferences || {
      interests: [],
      routine: '',
      communication: '',
      mobility: ''
    },
    familyMembers: resident.familyMembers || []
  } : undefined;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? `Edit ${resident.name}` : 'Add New Resident'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6">
          <ResidentForm
            initialData={initialData}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            isEditing={isEditing}
            loading={loading}
            residentId={resident?.id}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
