import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus } from 'lucide-react';
import { ResidentCard } from '../components/residents/ResidentCard';
import { ResidentDialog } from '../components/residents/ResidentDialog';
import { QuickUpdateDialog } from '../components/residents/QuickUpdateDialog';
import { StatusSummary } from '../components/residents/StatusSummary';
import { StatusHelp } from '../components/residents/StatusHelp';
import { BottomNav } from '../components/layout/BottomNav';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { toast } from 'sonner';
import { useAuth } from '../contexts/AuthContext';
import { listResidents, addResidentActivityWithUpdate } from '../lib/terriiApi';
import { 
  calculateResidentStatus,
  getStatusInfo,
  getStatusCounts
} from '../lib/statusManager';
import type { TerriiResident } from '../models';

// Convert TerriiResident to the format expected by ResidentCard
const mapResidentForCard = (resident: TerriiResident) => {
  const status = calculateResidentStatus(resident.lastUpdate || null);
  
  // Debug logging for image issues
  console.log(`Mapping resident ${resident.name}:`, {
    id: resident.id,
    photo: resident.photo,
    hasPhoto: !!resident.photo
  });
  
  // Map our status enum to ResidentCard's expected status strings  
  const statusMapping = {
    'UP_TO_DATE': 'stable',      // ResidentCard maps 'stable' to 'updated' display
    'NEEDS_UPDATE': 'check',     // ResidentCard maps 'check' to 'needs-update' display  
    'OVERDUE': 'urgent'          // ResidentCard maps 'urgent' to 'overdue' display
  };
  
  return {
    id: resident.id,
    name: resident.name,
    room: resident.room || '',
    photo: resident.photo || null,
    lastUpdate: resident.lastUpdate || 'Never updated',
    status: statusMapping[status] || 'check', // Use the mapped status
    unreadMessages: resident.unreadMessages || 0,
    familyMembers: [] // We'll populate this if needed
  };
};

export function ResidentsScreen() {
  const navigate = useNavigate();
  const { terriiProfile } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [residents, setResidents] = useState<TerriiResident[]>([]);
  const [loading, setLoading] = useState(true);
  const [showResidentDialog, setShowResidentDialog] = useState(false);
  const [selectedResident, setSelectedResident] = useState<TerriiResident | null>(null);
  const [showQuickUpdate, setShowQuickUpdate] = useState(false);
  const [selectedResidentForUpdate, setSelectedResidentForUpdate] = useState<TerriiResident | null>(null);

  useEffect(() => {
    loadResidents();
  }, [terriiProfile]);

  const loadResidents = async () => {
    if (!terriiProfile?.careHomeID) {
      console.warn('No care home ID found for user');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const residentsData = await listResidents(terriiProfile.careHomeID);
      // Cast the data to properly handle the types
      setResidents((residentsData || []) as any[]);
    } catch (error) {
      console.error('Error loading residents:', error);
      toast.error('Failed to load residents');
    } finally {
      setLoading(false);
    }
  };

  // Handle navigation and actions
  const handleViewProfile = (id: string) => {
    navigate(`/residents/${id}`);
  };

  const handleSendMessage = (id: string) => {
    toast.info(`Sending message to family of resident ${id}`);
    // navigate(`/messages/compose?resident=${id}`);
  };

  const handleQuickUpdate = async (id: string) => {
    const resident = residents.find(r => r.id === id);
    if (resident) {
      setSelectedResidentForUpdate(resident);
      setShowQuickUpdate(true);
    }
  };

  const handleQuickUpdateSubmit = async (data: any) => {
    if (!selectedResidentForUpdate) return;

    try {
      // Use the proper function that updates both activity and lastUpdate timestamp
      await addResidentActivityWithUpdate(selectedResidentForUpdate.id, {
        activity: data.activity,
        notes: data.notes,
        mood: data.mood,
        healthStatus: data.healthStatus,
        familyNotified: data.familyNotified,
        staff: terriiProfile?.name || 'Staff Member'
      });
      
      // Refresh the residents list to show updated status
      await loadResidents();
      toast.success('Quick update saved successfully');
    } catch (error) {
      console.error('Error with quick update:', error);
      toast.error('Failed to save quick update');
      throw error; // Re-throw so the dialog can handle it
    }
  };

  const handleAddResident = () => {
    setSelectedResident(null);
    setShowResidentDialog(true);
  };

  const handleResidentSuccess = (resident: any) => {
    if (selectedResident) {
      // Update existing resident
      setResidents(prev => prev.map(r => r.id === resident.id ? resident : r));
    } else {
      // Add new resident
      setResidents(prev => [...prev, resident]);
    }
  };

  // Calculate status counts for summary using new status system
  const rawStatusCounts = getStatusCounts(residents);
  const statusCounts = {
    stable: rawStatusCounts.upToDate,
    check: rawStatusCounts.needsUpdate, 
    urgent: rawStatusCounts.overdue
  };

  // Filter residents based on search and status filter
  const filteredResidents = residents.filter(resident => {
    const status = calculateResidentStatus(resident.lastUpdate || null);
    
    const matchesSearch = 
      searchQuery === '' || 
      resident.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (resident.room && resident.room.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesStatus = filterStatus === 'all' || 
      (filterStatus === 'stable' && status === 'UP_TO_DATE') ||
      (filterStatus === 'check' && status === 'NEEDS_UPDATE') ||
      (filterStatus === 'urgent' && status === 'OVERDUE');
    
    return matchesSearch && matchesStatus;
  });

  // Sort residents
  const sortedResidents = [...filteredResidents].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'room':
        const roomA = a.room || '';
        const roomB = b.room || '';
        return roomA.localeCompare(roomB);
      case 'status':
        // Use new priority system - lower priority number = higher importance
        const statusA = calculateResidentStatus(a.lastUpdate || null);
        const statusB = calculateResidentStatus(b.lastUpdate || null);
        const infoA = getStatusInfo(statusA);
        const infoB = getStatusInfo(statusB);
        return infoA.priority - infoB.priority;
      default:
        return 0;
    }
  });

  const handleFilterByStatus = (status: string) => {
    setFilterStatus(status);
  };

  if (loading) {
    return (
      <div className="flex flex-col h-screen">
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-terrii-text-primary">Residents</h1>
              <p className="text-terrii-text-secondary text-sm">Manage resident information and updates</p>
            </div>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center bg-terrii-blue/10">
          <div className="animate-pulse text-terrii-text-primary">Loading residents...</div>
        </main>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-terrii-text-primary">Residents</h1>
            <p className="text-terrii-text-secondary text-sm">Manage resident information and updates</p>
          </div>
          <div className="flex items-center gap-2">
            <StatusHelp />
            <Button 
              className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
              onClick={handleAddResident}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 overflow-auto bg-terrii-blue/10 p-4 space-y-4">
        {/* Status Summary Cards */}
        <StatusSummary 
          statusCounts={statusCounts} 
          onFilterByStatus={handleFilterByStatus}
        />
        
        {/* Search and Filters */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search residents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-white"
            >
              <option value="all">All Residents</option>
              <option value="stable">Up to date</option>
              <option value="check">Needs update</option>
              <option value="urgent">Overdue</option>
            </select>
            
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-white"
            >
              <option value="name">Name</option>
              <option value="room">Room</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>
        
        {/* Residents List */}
        <div className="space-y-3">
          {sortedResidents.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-terrii-text-primary mb-2">No residents found</h3>
              <p className="text-terrii-text-secondary mb-4">
                {searchQuery || filterStatus !== 'all' 
                  ? 'No residents match your search criteria.' 
                  : 'No residents found. Add your first resident to get started.'
                }
              </p>
              
              {!searchQuery && filterStatus === 'all' && (
                <Button 
                  className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
                  onClick={handleAddResident}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add First Resident
                </Button>
              )}
            </div>
          ) : (
            sortedResidents.map((resident) => (
              <ResidentCard
                key={resident.id}
                resident={mapResidentForCard(resident)}
                onViewProfile={handleViewProfile}
                onSendMessage={handleSendMessage}
                onQuickUpdate={handleQuickUpdate}
              />
            ))
          )}
        </div>
      </main>
      
      {/* Bottom Navigation */}
      <BottomNav />

      {/* Resident Dialog */}
      <ResidentDialog
        open={showResidentDialog}
        onOpenChange={setShowResidentDialog}
        resident={selectedResident}
        onSuccess={handleResidentSuccess}
      />

      {/* Quick Update Dialog */}
      <QuickUpdateDialog
        open={showQuickUpdate}
        onOpenChange={setShowQuickUpdate}
        residentName={selectedResidentForUpdate?.name || ''}
        onSubmit={handleQuickUpdateSubmit}
      />
    </div>
  );
}