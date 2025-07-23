import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { X, Search, MessageCircle, Users, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Badge } from '../ui/Badge';
import { useAuth } from '../../contexts/AuthContext';
import { listResidents, getResidentFamilyMembers, createThreadWithMessage } from '../../lib/terriiApi';

interface NewConversationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConversationCreated: (threadId: string) => void;
}

interface Resident {
  id: string;
  name: string;
  room: string;
  photo?: string;
  familyMembers?: FamilyMember[];
}

interface FamilyMember {
  id: string;
  name: string;
  relationship: string;
  email?: string;
  phone?: string;
  userID?: string;
  isRegistered?: boolean;
}

export function NewConversationDialog({ isOpen, onClose, onConversationCreated }: NewConversationDialogProps) {
  const { terriiProfile } = useAuth();
  const [residents, setResidents] = useState<Resident[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResident, setSelectedResident] = useState<Resident | null>(null);
  const [selectedFamilyMembers, setSelectedFamilyMembers] = useState<FamilyMember[]>([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    if (isOpen && terriiProfile?.careHomeID) {
      loadResidents();
    }
  }, [isOpen, terriiProfile]);

  const loadResidents = async () => {
    if (!terriiProfile?.careHomeID) return;
    
    try {
      setLoading(true);
      const residentsData = await listResidents(terriiProfile.careHomeID);
      
      // Load family members for each resident
      const residentsWithFamily = await Promise.all(
        residentsData.map(async (resident: any) => {
          try {
            const familyMembers = await getResidentFamilyMembers(resident.id);
            return {
              ...resident,
              familyMembers: familyMembers || []
            };
          } catch (error) {
            console.warn(`Failed to load family members for ${resident.name}:`, error);
            return {
              ...resident,
              familyMembers: []
            };
          }
        })
      );
      
      setResidents(residentsWithFamily);
    } catch (error) {
      console.error('Error loading residents:', error);
      toast.error('Failed to load residents');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateConversation = async () => {
    if (!selectedResident || selectedFamilyMembers.length === 0 || !message.trim()) {
      toast.error('Please select a resident, family members, and write a message');
      return;
    }

    try {
      setCreating(true);
      
      const senderName = terriiProfile?.user?.name || 'Care Staff';
      
      // Use family member IDs instead of email strings
      const result = await createThreadWithMessage(
        selectedResident.id,
        selectedFamilyMembers.map(fm => fm.id), // Pass all selected family member IDs
        message,
        senderName,
        true // is staff
      );
      
      toast.success(`Started conversation about ${selectedResident.name}`);
      onConversationCreated(result.thread.id);
      
      // Reset form
      setSelectedResident(null);
      setSelectedFamilyMembers([]);
      setMessage('');
      onClose();
    } catch (error) {
      console.error('Error creating conversation:', error);
      toast.error('Failed to start conversation');
    } finally {
      setCreating(false);
    }
  };

  const filteredResidents = residents.filter(resident =>
    resident.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resident.room.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  const canProceed = selectedResident && selectedFamilyMembers.length > 0 && message.trim();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold text-terrii-text-primary">Start New Conversation</h2>
            <p className="text-sm text-terrii-text-secondary">
              Begin a conversation with a resident's family member
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="w-8 h-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Step 1: Resident Selection */}
          <div>
            <h3 className="text-lg font-medium text-terrii-text-primary mb-3">
              1. Select Resident
            </h3>
            
            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-terrii-text-secondary" />
              <Input
                placeholder="Search residents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-pulse text-terrii-text-secondary">Loading residents...</div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-48 overflow-y-auto">
                {filteredResidents.map((resident) => (
                  <div
                    key={resident.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedResident?.id === resident.id
                        ? 'border-terrii-green bg-terrii-green/10'
                        : 'border-gray-200 hover:border-terrii-green/50'
                    }`}
                    onClick={() => {
                      setSelectedResident(resident);
                      setSelectedFamilyMembers([]); // Reset family members when resident changes
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-terrii-blue rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {resident.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium text-terrii-text-primary">{resident.name}</h4>
                        <p className="text-sm text-terrii-text-secondary">Room {resident.room}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Step 2: Family Member Selection */}
          {selectedResident && (
            <div>
              <h3 className="text-lg font-medium text-terrii-text-primary mb-3">
                2. Select Family Members
              </h3>
              
              {selectedResident.familyMembers && selectedResident.familyMembers.length > 0 ? (
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {selectedResident.familyMembers.map((family) => {
                    const isSelected = selectedFamilyMembers.some(fm => fm.id === family.id);
                    return (
                      <div
                        key={family.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                          isSelected
                            ? 'border-terrii-green bg-terrii-green/10'
                            : 'border-gray-200 hover:border-terrii-green/50'
                        }`}
                        onClick={() => {
                          if (isSelected) {
                            setSelectedFamilyMembers(prev => prev.filter(fm => fm.id !== family.id));
                          } else {
                            setSelectedFamilyMembers(prev => [...prev, family]);
                          }
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-terrii-text-primary">{family.name}</p>
                            <div className="flex items-center space-x-2 text-sm text-terrii-text-secondary">
                              <Badge variant="outline">{family.relationship}</Badge>
                              {family.isRegistered && (
                                <Badge className="bg-green-100 text-green-800 border-green-200">
                                  Registered
                                </Badge>
                              )}
                              {family.phone && (
                                <>
                                  <span>•</span>
                                  <span>{family.phone}</span>
                                </>
                              )}
                              {family.email && (
                                <>
                                  <span>•</span>
                                  <span>{family.email}</span>
                                </>
                              )}
                            </div>
                          </div>
                          {isSelected && (
                            <Badge className="bg-terrii-green text-white">Selected</Badge>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-6 text-terrii-text-secondary">
                  <Users className="h-12 w-12 mx-auto mb-2 text-terrii-text-light" />
                  <p>No family members found for {selectedResident.name}</p>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Message Composition */}
          {selectedResident && selectedFamilyMembers.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-terrii-text-primary mb-3">
                3. Write Your Message
              </h3>
              
              <div className="mb-3 p-3 bg-terrii-blue/10 rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-terrii-text-secondary">
                  <Users className="h-4 w-4" />
                  <span>
                    Message to <strong>{selectedFamilyMembers.map(fm => fm.name).join(', ')}</strong> about <strong>{selectedResident.name}</strong>
                  </span>
                </div>
              </div>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terrii-green focus:border-transparent resize-none"
                rows={4}
                maxLength={500}
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-terrii-text-secondary">
                  {message.length}/500 characters
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={creating}
          >
            Cancel
          </Button>
          <Button
            onClick={handleCreateConversation}
            disabled={!canProceed || creating}
            className="bg-terrii-green-dark hover:bg-terrii-green text-white"
          >
            {creating ? (
              <span className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Starting...
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="h-4 w-4 mr-2" />
                Start Conversation
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
