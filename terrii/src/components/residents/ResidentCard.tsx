import { MessageSquare, Calendar, ChevronRight, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { formatDistanceToNow } from 'date-fns';

interface Resident {
  id: string;
  name: string;
  room: string;
  photo: string | null;
  lastUpdate: string;
  status: string;
  unreadMessages?: number;
  familyMembers: Array<{ id: string; name: string; relationship: string; phone: string }>;
}

interface ResidentCardProps {
  resident: Resident;
  onViewProfile: (id: string) => void;
  onSendMessage: (id: string) => void;
  onQuickUpdate: (id: string) => void;
}

export function ResidentCard({ 
  resident, 
  onViewProfile, 
  onSendMessage, 
  onQuickUpdate 
}: ResidentCardProps) {
  // Format lastUpdate to relative time (e.g. "2 hours ago")
  const lastUpdateFormatted = formatDistanceToNow(new Date(resident.lastUpdate), { 
    addSuffix: true 
  });
  
  // Generate initials for avatar fallback
  const initials = resident.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
  
  // Map status to appropriate styling with more subtle/pastel colors
  const getStatusInfo = (status: string) => {
    // Convert our current status values to reference values
    const statusMap: Record<string, string> = {
      'stable': 'updated',
      'check': 'needs-update',
      'urgent': 'overdue'
    };
    
    const mappedStatus = statusMap[status] || status;
    
    const statusStyles = {
      'updated': {
        badge: "bg-terrii-success/15 text-terrii-success",
        line: "bg-terrii-success/70",
        label: "Up to date"
      },
      'needs-update': {
        badge: "bg-terrii-warning/15 text-terrii-warning",
        line: "bg-terrii-warning/70",
        label: "Needs update"
      },
      'overdue': {
        badge: "bg-terrii-error/15 text-terrii-error",
        line: "bg-terrii-error/70",
        label: "Overdue"
      }
    };
    
    return statusStyles[mappedStatus as keyof typeof statusStyles] || statusStyles['needs-update'];
  };
  
  const statusInfo = getStatusInfo(resident.status);
  const unreadMessages = resident.unreadMessages || 0;
  
  return (
    <div className="bg-white rounded-lg shadow-terrii hover:shadow-terrii-lg transition-shadow relative overflow-hidden">
      {/* Status indicator line */}
      <div className={`absolute top-0 left-0 h-1 w-full ${statusInfo.line}`}></div>
      
      <div className="p-4">
        <div className="flex items-center space-x-4">
          {/* Avatar/Photo */}
          <div 
            className="relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden cursor-pointer"
            onClick={() => onViewProfile(resident.id)}
          >
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
            
            {/* Notification indicator if there are unread messages */}
            {unreadMessages > 0 && (
              <div className="absolute -top-1 -right-1 bg-terrii-error text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {unreadMessages}
              </div>
            )}
          </div>
          
          {/* Resident Info */}
          <div className="flex-1 cursor-pointer" onClick={() => onViewProfile(resident.id)}>
            <div className="font-medium text-terrii-text-primary">
              {resident.name}
            </div>
            <div className="flex items-center text-sm">
              <span className="text-terrii-text-secondary">Room {resident.room}</span>
              <span className="mx-2 text-terrii-text-light">•</span>
              <span className="text-terrii-text-light text-xs">{lastUpdateFormatted}</span>
            </div>
          </div>
          
          {/* Status Badge */}
          <div>
            <span className={`inline-flex px-2 py-1 rounded-full text-xs ${statusInfo.badge}`}>
              {statusInfo.label}
            </span>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="flex justify-between mt-3 pt-3 border-t border-gray-100">
          <Button 
            variant="outline" 
            className="h-8 px-3 text-sm flex items-center border border-gray-200"
            onClick={() => onSendMessage(resident.id)}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            <span className="flex items-center">
              Message
              {unreadMessages > 0 && (
                <span className="ml-2 bg-terrii-error text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {unreadMessages}
                </span>
              )}
            </span>
          </Button>
          
          <Button 
            className="h-8 px-3 text-sm bg-terrii-green text-terrii-text-primary hover:bg-terrii-green-dark flex items-center"
            onClick={() => onQuickUpdate(resident.id)}
          >
            <Calendar className="h-4 w-4 mr-2" />
            <span>Update</span>
          </Button>
        </div>
      </div>
    </div>
  );
}