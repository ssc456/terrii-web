import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/Dialog';
import { Button } from '../ui/Button';
import { Label } from '../ui/Label';
import { Textarea } from '../ui/Textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/Select';
import { Badge } from '../ui/Badge';
import { toast } from 'sonner';

interface QuickUpdateData {
  activity: string;
  notes: string;
  mood: string;
  healthStatus: string;
  familyNotified: boolean;
}

interface QuickUpdateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  residentName: string;
  onSubmit: (data: QuickUpdateData) => Promise<void>;
}

export function QuickUpdateDialog({ 
  open, 
  onOpenChange, 
  residentName, 
  onSubmit 
}: QuickUpdateDialogProps) {
  const [updateData, setUpdateData] = useState<QuickUpdateData>({
    activity: '',
    notes: '',
    mood: '',
    healthStatus: '',
    familyNotified: false
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!updateData.activity || !updateData.notes.trim()) {
      toast.error('Please select an activity and add notes');
      return;
    }

    try {
      setSubmitting(true);
      await onSubmit(updateData);
      
      // Reset form
      setUpdateData({
        activity: '',
        notes: '',
        mood: '',
        healthStatus: '',
        familyNotified: false
      });
      
      onOpenChange(false);
      toast.success('Quick update saved successfully');
    } catch (error) {
      console.error('Error saving quick update:', error);
      toast.error('Failed to save update');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    setUpdateData({
      activity: '',
      notes: '',
      mood: '',
      healthStatus: '',
      familyNotified: false
    });
    onOpenChange(false);
  };

  const getMoodBadgeColor = (mood: string) => {
    switch (mood) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'fair': return 'bg-yellow-100 text-yellow-800';
      case 'challenging': return 'bg-red-100 text-red-800';
      case 'varies': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getHealthBadgeColor = (health: string) => {
    switch (health) {
      case 'normal': return 'bg-green-100 text-green-800';
      case 'improved': return 'bg-blue-100 text-blue-800';
      case 'minor-concern': return 'bg-yellow-100 text-yellow-800';
      case 'needs-attention': return 'bg-orange-100 text-orange-800';
      case 'emergency': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="text-terrii-green">📝</span>
            Quick Update
          </DialogTitle>
          <DialogDescription>
            Add a quick update for <strong>{residentName}</strong>
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Activity Selection */}
          <div>
            <Label htmlFor="activity" className="text-sm font-medium">
              Activity/Event <span className="text-red-500">*</span>
            </Label>
            <Select value={updateData.activity} onValueChange={(value) => setUpdateData({...updateData, activity: value})}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="What happened today?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="art-therapy">🎨 Art Therapy</SelectItem>
                <SelectItem value="music-therapy">🎵 Music Therapy</SelectItem>
                <SelectItem value="physical-therapy">🏃 Physical Therapy</SelectItem>
                <SelectItem value="social-time">👥 Social Time</SelectItem>
                <SelectItem value="meal-time">🍽️ Meal Time</SelectItem>
                <SelectItem value="medical-visit">🏥 Medical Visit</SelectItem>
                <SelectItem value="family-visit">👨‍👩‍👧‍👦 Family Visit</SelectItem>
                <SelectItem value="personal-care">🧼 Personal Care</SelectItem>
                <SelectItem value="outdoor-activity">🌳 Outdoor Activity</SelectItem>
                <SelectItem value="exercise">💪 Exercise/Movement</SelectItem>
                <SelectItem value="medication">💊 Medication</SelectItem>
                <SelectItem value="wellness-check">✅ Wellness Check</SelectItem>
                <SelectItem value="other">📋 Other Activity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Notes */}
          <div>
            <Label htmlFor="notes" className="text-sm font-medium">
              Notes <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="notes"
              value={updateData.notes}
              onChange={(e) => setUpdateData({...updateData, notes: e.target.value})}
              placeholder="Describe what happened, how the resident responded, any notable observations..."
              className="min-h-[100px] mt-1"
            />
            <div className="text-xs text-terrii-text-light mt-1">
              {updateData.notes.length}/500 characters
            </div>
          </div>

          {/* Mood and Health Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="mood" className="text-sm font-medium">Mood/Demeanor</Label>
              <Select value={updateData.mood} onValueChange={(value) => setUpdateData({...updateData, mood: value})}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="How were they today?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">😊 Excellent</SelectItem>
                  <SelectItem value="good">🙂 Good</SelectItem>
                  <SelectItem value="fair">😐 Fair</SelectItem>
                  <SelectItem value="challenging">😟 Challenging</SelectItem>
                  <SelectItem value="varies">🔄 Varied throughout day</SelectItem>
                </SelectContent>
              </Select>
              {updateData.mood && (
                <Badge className={`mt-2 ${getMoodBadgeColor(updateData.mood)}`}>
                  {updateData.mood.charAt(0).toUpperCase() + updateData.mood.slice(1).replace('-', ' ')}
                </Badge>
              )}
            </div>
            
            <div>
              <Label htmlFor="health" className="text-sm font-medium">Health Status</Label>
              <Select value={updateData.healthStatus} onValueChange={(value) => setUpdateData({...updateData, healthStatus: value})}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Any health notes?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">✅ Normal/Stable</SelectItem>
                  <SelectItem value="improved">📈 Improved</SelectItem>
                  <SelectItem value="minor-concern">⚠️ Minor Concern</SelectItem>
                  <SelectItem value="needs-attention">🚨 Needs Attention</SelectItem>
                  <SelectItem value="emergency">🚨🚨 Emergency</SelectItem>
                </SelectContent>
              </Select>
              {updateData.healthStatus && (
                <Badge className={`mt-2 ${getHealthBadgeColor(updateData.healthStatus)}`}>
                  {updateData.healthStatus.charAt(0).toUpperCase() + updateData.healthStatus.slice(1).replace('-', ' ')}
                </Badge>
              )}
            </div>
          </div>

          {/* Family Notification */}
          <div className="flex items-center space-x-3 p-3 bg-terrii-blue/10 rounded-lg">
            <input
              type="checkbox"
              id="family-notified"
              checked={updateData.familyNotified}
              onChange={(e) => setUpdateData({...updateData, familyNotified: e.target.checked})}
              className="rounded border-gray-300 text-terrii-green focus:ring-terrii-green"
            />
            <Label htmlFor="family-notified" className="text-sm">
              📱 Family has been notified of this update
            </Label>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button 
              variant="outline" 
              onClick={handleCancel}
              disabled={submitting}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit}
              disabled={!updateData.activity || !updateData.notes.trim() || submitting}
              className="bg-terrii-green hover:bg-terrii-green-dark text-white"
            >
              {submitting ? 'Saving...' : 'Save Update'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
