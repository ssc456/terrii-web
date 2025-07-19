import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { 
  ArrowLeft, Search, Plus, Filter, Send, Paperclip, 
  MessageSquare, Archive, AlertCircle, Star, 
  MoreHorizontal, Users, Check, CheckCircle, 
  CheckCircle2
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { BottomNav } from '../components/layout/BottomNav';
import { MessageBubble } from '../components/messages/MessageBubble';
import { messageThreads, messageTemplates } from '../mock/messages';

export function MessagesScreen() {
  const navigate = useNavigate();
  const [selectedThread, setSelectedThread] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [messageText, setMessageText] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Get current thread
  const currentThread = selectedThread 
    ? messageThreads.find(t => t.id === selectedThread) 
    : null;
  
  // Filter threads based on search and filter
  const filteredThreads = messageThreads.filter(thread => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      thread.resident.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thread.participants.some(p => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
      thread.lastMessage.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Status filter
    const matchesFilter = (() => {
      switch (activeFilter) {
        case 'unread':
          return thread.unreadCount > 0;
        case 'starred':
          return thread.isStarred;
        case 'urgent':
          return thread.unreadCount > 3;
        case 'archived':
          return thread.isArchived;
        default:
          return !thread.isArchived;
      }
    })();
    
    return matchesSearch && matchesFilter;
  });
  
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };
  
  const handleBackToInbox = () => {
    setSelectedThread(null);
  };
  
  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    
    toast.success('Message sent');
    setMessageText('');
    
    // In a real app, we would update the thread with the new message
  };
  
  const handleStartNewConversation = () => {
    toast.info('Starting new conversation');
    // In a real app, we would show a dialog to select resident and compose message
  };
  
  const handleReplyToMessage = (messageId: string) => {
    toast.info('Replying to message');
    // In a real app, this would set reply context
  };
  
  const handleReactToMessage = (messageId: string) => {
    toast.success('Reaction added');
    // In a real app, this would add a reaction to the message
  };
  
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };
  
  const getUnreadCount = (filter: string) => {
    switch (filter) {
      case 'unread':
        return messageThreads.filter(t => t.unreadCount > 0).length;
      case 'starred':
        return messageThreads.filter(t => t.isStarred).length;
      case 'archived':
        return messageThreads.filter(t => t.isArchived).length;
      case 'urgent':
        return messageThreads.filter(t => t.unreadCount > 3).length;
      default:
        return messageThreads.filter(t => !t.isArchived).length;
    }
  };
  
  // Thread view
  if (selectedThread && currentThread) {
    return (
      <div className="flex flex-col h-screen">
        {/* Thread Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBackToInbox}
              className="p-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <div className="w-10 h-10 rounded-full bg-terrii-green flex items-center justify-center text-terrii-text-primary overflow-hidden">
              {currentThread.resident.photo ? (
                <img 
                  src={currentThread.resident.photo} 
                  alt={currentThread.resident.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>{getInitials(currentThread.resident.name)}</span>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h2 className="font-medium text-terrii-text-primary">{currentThread.resident.name}</h2>
                {currentThread.isStarred && <Star className="h-4 w-4 text-terrii-warning fill-current" />}
              </div>
              <div className="flex items-center space-x-2 text-sm text-terrii-text-secondary">
                <Users className="h-3 w-3" />
                <span>{currentThread.participants.join(', ')}</span>
              </div>
            </div>
            
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-terrii-blue/5">
          {currentThread.messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              onReply={handleReplyToMessage}
              onReact={handleReactToMessage}
            />
          ))}
        </div>
        
        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-end space-x-2">
            <Input
              placeholder="Type your message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
              className="flex-1"
            />
            
            <Button 
              variant="ghost" 
              size="sm"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            
            <Button 
              onClick={handleSendMessage}
              disabled={!messageText.trim()}
              className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary flex items-center"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Bottom Nav */}
        <BottomNav />
      </div>
    );
  }
  
  // Inbox view
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-terrii-text-primary">Messages</h1>
            <p className="text-terrii-text-secondary text-sm">Secure communication with families</p>
          </div>
          <Button 
            className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary flex items-center"
            onClick={handleStartNewConversation}
          >
            <Plus className="h-4 w-4 mr-2" />
            New Message
          </Button>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 overflow-auto bg-terrii-blue/10 p-4 space-y-4">
        {/* Interactive Filter Pills */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {[
            { key: 'all', label: 'All Conversations', icon: MessageSquare },
            { key: 'unread', label: 'Unread', icon: AlertCircle },
            { key: 'starred', label: 'Starred', icon: Star },
            { key: 'urgent', label: 'Urgent', icon: AlertCircle },
            { key: 'archived', label: 'Archived', icon: Archive }
          ].map(filter => (
            <Badge
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              className={`cursor-pointer transition-colors whitespace-nowrap ${
                activeFilter === filter.key
                  ? 'bg-terrii-green-dark text-terrii-text-primary hover:bg-terrii-green'
                  : 'border-gray-200 hover:bg-gray-100'
              }`}
              onClick={() => handleFilterClick(filter.key)}
            >
              <filter.icon className="h-3 w-3 mr-1" />
              {filter.label} ({getUnreadCount(filter.key)})
            </Badge>
          ))}
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-terrii-text-light" />
          <Input
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-search"
          />
        </div>
        
        {/* Empty State */}
        {filteredThreads.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-terrii p-4">
            <div className="w-16 h-16 bg-terrii-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-terrii-blue-dark" />
            </div>
            <h3 className="text-lg font-medium text-terrii-text-primary mb-2">No conversations found</h3>
            <p className="text-terrii-text-secondary mb-4">
              {searchQuery || activeFilter !== 'all'
                ? 'Try adjusting your search criteria or filters.'
                : 'Start communicating with families by sending your first message.'}
            </p>
            {!searchQuery && activeFilter === 'all' && (
              <Button 
                onClick={handleStartNewConversation}
                className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                Send First Message
              </Button>
            )}
          </div>
        )}
        
        {/* Conversations List */}
        <div className="space-y-3">
          {filteredThreads.map((thread) => (
            <div 
              key={thread.id}
              className="bg-white rounded-lg shadow-terrii hover:shadow-terrii-lg transition-shadow p-4 cursor-pointer"
              onClick={() => setSelectedThread(thread.id)}
            >
              <div className="flex items-center space-x-3">
                {/* Resident Avatar */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-terrii-green flex items-center justify-center text-terrii-text-primary overflow-hidden">
                    {thread.resident.photo ? (
                      <img 
                        src={thread.resident.photo} 
                        alt={thread.resident.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span>{getInitials(thread.resident.name)}</span>
                    )}
                  </div>
                  {thread.unreadCount > 0 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-terrii-success rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-medium">{thread.unreadCount}</span>
                    </div>
                  )}
                </div>
                
                {/* Thread Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-terrii-text-primary">{thread.resident.name}</h3>
                      {thread.isStarred && <Star className="h-4 w-4 text-terrii-warning fill-current" />}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-terrii-text-light">
                        {formatDistanceToNow(thread.lastMessage.timestamp, { addSuffix: true })}
                      </span>
                      {thread.unreadCount === 0 && (
                        <CheckCircle2 className="h-4 w-4 text-terrii-text-light" />
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-1">
                    <Users className="h-3 w-3 text-terrii-text-light" />
                    <span className="text-xs text-terrii-text-light truncate">
                      {thread.participants.join(', ')}
                    </span>
                  </div>
                  
                  <p className="text-sm text-terrii-text-secondary truncate">
                    <span className="font-medium">{thread.lastMessage.sender}:</span> {thread.lastMessage.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

// Helper function for time formatting
function formatDistanceToNow(date: Date, { addSuffix = false } = {}): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  
  let result = '';
  
  if (diffDay > 0) {
    result = `${diffDay}d`;
  } else if (diffHour > 0) {
    result = `${diffHour}h`;
  } else if (diffMin > 0) {
    result = `${diffMin}m`;
  } else {
    result = 'just now';
  }
  
  if (addSuffix && result !== 'just now') {
    result += ' ago';
  }
  
  return result;
}