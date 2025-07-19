import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Filter } from 'lucide-react';
import { residents } from '../mock/residents';
import { ResidentCard } from '../components/residents/ResidentCard';
import { StatusSummary } from '../components/residents/StatusSummary';
import { BottomNav } from '../components/layout/BottomNav';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { toast } from 'sonner';

export function ResidentsScreen() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Handle navigation and actions
  const handleViewProfile = (id: string) => {
    navigate(`/residents/${id}`);
  };

  const handleSendMessage = (id: string) => {
    toast.info(`Sending message to family of resident ${id}`);
    // navigate(`/messages/compose?resident=${id}`);
  };

  const handleQuickUpdate = (id: string) => {
    toast.info(`Quick update for resident ${id}`);
    // Show a dialog or navigate to quick update form
  };

  // Calculate status counts for summary
  const statusCounts = {
    stable: residents.filter(r => r.status === 'stable').length,
    check: residents.filter(r => r.status === 'check').length,
    urgent: residents.filter(r => r.status === 'urgent').length
  };

  // Filter residents based on search and status filter
  const filteredResidents = residents.filter(resident => {
    const matchesSearch = 
      searchQuery === '' || 
      resident.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resident.room.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || resident.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  // Sort residents
  const sortedResidents = [...filteredResidents].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'room':
        return a.room.localeCompare(b.room);
      case 'status':
        // Priority: urgent > check > stable
        const statusPriority: Record<string, number> = { urgent: 0, check: 1, stable: 2 };
        return statusPriority[a.status as keyof typeof statusPriority] - statusPriority[b.status as keyof typeof statusPriority];
      default:
        return 0;
    }
  });

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-terrii-text-primary">Residents</h1>
            <p className="text-terrii-text-secondary text-sm">Manage resident information and updates</p>
          </div>
          <Button 
            className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 overflow-auto bg-terrii-blue/10 p-4 space-y-4">
        {/* Status Summary Cards */}
        <StatusSummary 
          statusCounts={statusCounts} 
          onFilterByStatus={(status) => setFilterStatus(status)} 
        />
        
        {/* Search and Filters */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-terrii-text-light" />
            <Input
              placeholder="Search residents by name or room..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-search"
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            <Select 
              value={filterStatus} 
              onValueChange={setFilterStatus}
              options={[
                { value: 'all', label: 'All Residents' },
                { value: 'stable', label: 'Up to date' },
                { value: 'check', label: 'Needs update' },
                { value: 'urgent', label: 'Overdue' }
              ]}
              placeholder="Filter by status"
              className="w-full sm:w-40 select-terrii"
            />
            
            <Select 
              value={sortBy} 
              onValueChange={setSortBy}
              options={[
                { value: 'name', label: 'Name' },
                { value: 'room', label: 'Room' },
                { value: 'status', label: 'Status' }
              ]}
              placeholder="Sort by"
              className="w-full sm:w-40 select-terrii"
            />
            
            {filterStatus !== 'all' && (
              <Button
                variant="outline"
                onClick={() => setFilterStatus('all')}
                className="text-sm border border-gray-200"
              >
                Clear Filter
              </Button>
            )}
          </div>
        </div>
        
        {/* Residents List */}
        <div className="space-y-3">
          {sortedResidents.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow p-4">
              <p className="text-terrii-text-secondary mb-4">
                {searchQuery || filterStatus !== 'all' 
                  ? 'No residents match your search criteria.' 
                  : 'No residents found. Add your first resident to get started.'
                }
              </p>
              
              {!searchQuery && filterStatus === 'all' && (
                <Button 
                  className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
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
                resident={resident}
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
    </div>
  );
}