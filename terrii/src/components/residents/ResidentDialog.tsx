import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/Dialog';
import { ResidentForm } from './ResidentForm';
import { useAuth } from '../../contexts/AuthContext';
import { createResident, updateResident } from '../../lib/terriiApi';
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
      } else {
        // Create new resident
        result = await createResident({
          ...formData,
          careHomeID: terriiProfile.careHomeID,
          status: 'STABLE',
          lastUpdate: new Date().toISOString(),
          unreadMessages: 0
        });
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
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
