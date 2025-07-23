import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
import { NewConversationDialog } from '../components/messages/NewConversationDialog';
import { useAuth } from '../contexts/AuthContext';
import { 
  listMessageThreadsByCareHome, 
  getMessages, 
  sendMessage,
  markThreadAsRead,
  toggleThreadStarred,
  toggleThreadArchived 
} from '../lib/terriiApi';

// Convert TerriiMessageThread to UI format
const mapThreadForUI = (thread: any) => {
  return {
    id: thread.id,
    resident: {
      id: thread.resident?.id || '',
      name: thread.resident?.name || 'Unknown Resident',
      photo: thread.resident?.photo || null,
      room: thread.resident?.room || 'Unknown'
    },
    participants: thread.participants || [],
    lastMessage: thread.lastMessage ? {
      content: thread.lastMessage.content,
      timestamp: new Date(thread.lastMessage.createdAt),
      sender: thread.lastMessage.sender,
      isFromFamily: !thread.lastMessage.isSentByStaff
    } : {
      content: 'No messages yet',
      timestamp: new Date(thread.createdAt || Date.now()),
      sender: 'System',
      isFromFamily: false
    },
    unreadCount: thread.unreadCount || 0,
    isStarred: thread.isStarred || false,
    isMuted: false, // Not in schema, defaulting to false
    isArchived: thread.isArchived || false,
    messages: [] // Will be loaded separately when thread is selected
  };
};

// Convert TerriiMessage to UI format
const mapMessageForUI = (message: any) => {
  return {
    id: message.id,
    content: message.content,
    sender: {
      name: message.sender,
      role: message.isSentByStaff ? 'Care Staff' : 'Family Member',
      photo: null
    },
    timestamp: new Date(message.createdAt),
    isOwn: message.isSentByStaff, // Assuming current user is staff
    status: 'delivered' as const,
    attachments: message.attachmentURL ? [{
      type: 'image' as const,
      url: message.attachmentURL,
      name: 'attachment'
    }] : undefined,
    reactions: message.reactions?.map((reaction: string) => ({
      type: reaction as 'heart' | 'thumbsUp',
      count: 1,
      hasReacted: false
    }))
  };
};

export function MessagesScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { terriiProfile } = useAuth();
  const [selectedThread, setSelectedThread] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [messageText, setMessageText] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [threads, setThreads] = useState<any[]>([]);
  const [currentThreadMessages, setCurrentThreadMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [sending, setSending] = useState(false);
  const [showNewConversationDialog, setShowNewConversationDialog] = useState(false);
  
  // Get current thread
  const currentThread = selectedThread 
    ? threads.find(t => t.id === selectedThread) 
    : null;

  useEffect(() => {
    loadThreads();
  }, [terriiProfile]);

  useEffect(() => {
    if (selectedThread) {
      loadMessages(selectedThread);
    }
  }, [selectedThread]);

  // Handle navigation state for starting new conversation
  useEffect(() => {
    const state = location.state as { startConversationForResident?: string };
    if (state?.startConversationForResident) {
      setShowNewConversationDialog(true);
      // Clear the state to prevent reopening on refresh
      navigate(location.pathname, { replace: true });
    }
  }, [location.state, navigate, location.pathname]);

  const loadThreads = async () => {
    if (!terriiProfile?.careHomeID) {
      console.warn('No care home ID found for user');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const threadsData = await listMessageThreadsByCareHome(terriiProfile.careHomeID);
      const mappedThreads = threadsData.map(mapThreadForUI);
      setThreads(mappedThreads);
    } catch (error) {
      console.error('Error loading message threads:', error);
      toast.error('Failed to load message threads');
    } finally {
      setLoading(false);
    }
  };

  const loadMessages = async (threadId: string) => {
    try {
      setLoadingMessages(true);
      const messagesData = await getMessages(threadId);
      const mappedMessages = messagesData.map(mapMessageForUI);
      setCurrentThreadMessages(mappedMessages);
      
      // Mark thread as read
      await markThreadAsRead(threadId);
      
      // Update local state
      setThreads(prev => prev.map(thread => 
        thread.id === threadId 
          ? { ...thread, unreadCount: 0 }
          : thread
      ));
    } catch (error) {
      console.error('Error loading messages:', error);
      toast.error('Failed to load messages');
    } finally {
      setLoadingMessages(false);
    }
  };
  
  // Filter threads based on search and filter
  const filteredThreads = threads.filter(thread => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      thread.resident.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thread.participants.some((p: string) => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
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
    setCurrentThreadMessages([]);
  };

  const handleNewConversationSuccess = async (threadId: string) => {
    // Close the dialog
    setShowNewConversationDialog(false);
    
    // Reload threads to include the new one
    await loadThreads();
    
    // Select the new thread
    setSelectedThread(threadId);
    
    // Load messages for the new thread
    await loadMessages(threadId);
    
    toast.success('New conversation created successfully!');
  };
  
  const handleSendMessage = async () => {
    if (!messageText.trim() || !selectedThread || sending) return;
    
    try {
      setSending(true);
      const senderName = terriiProfile?.user?.name || 'Care Staff';
      
      await sendMessage(selectedThread, messageText, senderName, true); // true = sent by staff
      
      toast.success('Message sent');
      setMessageText('');
      
      // Reload messages to show the new one
      await loadMessages(selectedThread);
      
      // Refresh threads list to update last message
      await loadThreads();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message');
    } finally {
      setSending(false);
    }
  };
  
  const handleStartNewConversation = () => {
    setShowNewConversationDialog(true);
  };

  const handleConversationCreated = async (threadId: string) => {
    // Refresh threads list to show the new conversation
    await loadThreads();
    // Automatically select the new thread
    setSelectedThread(threadId);
    toast.success('New conversation started successfully');
  };
  
  const handleReplyToMessage = (messageId: string) => {
    toast.info(`Replying to message ${messageId}`);
    console.log(`Replying to message ${messageId}`);
  };
  
  const handleReactToMessage = (messageId: string, reaction: string) => {
    toast.success(`Added ${reaction} reaction to message`);
    console.log(`Added ${reaction} reaction to message ${messageId}`);
  };

  const handleToggleStarred = async (threadId: string, isStarred: boolean) => {
    try {
      await toggleThreadStarred(threadId, !isStarred);
      setThreads(prev => prev.map(thread => 
        thread.id === threadId 
          ? { ...thread, isStarred: !isStarred }
          : thread
      ));
      toast.success(isStarred ? 'Removed from starred' : 'Added to starred');
    } catch (error) {
      console.error('Error toggling starred:', error);
      toast.error('Failed to update starred status');
    }
  };

  const handleToggleArchived = async (threadId: string, isArchived: boolean) => {
    try {
      await toggleThreadArchived(threadId, !isArchived);
      setThreads(prev => prev.map(thread => 
        thread.id === threadId 
          ? { ...thread, isArchived: !isArchived }
          : thread
      ));
      toast.success(isArchived ? 'Unarchived' : 'Archived');
    } catch (error) {
      console.error('Error toggling archived:', error);
      toast.error('Failed to update archived status');
    }
  };
  
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };
  
  const getUnreadCount = (filter: string) => {
    switch (filter) {
      case 'unread':
        return threads.filter(t => t.unreadCount > 0).length;
      case 'starred':
        return threads.filter(t => t.isStarred).length;
      case 'archived':
        return threads.filter(t => t.isArchived).length;
      case 'urgent':
        return threads.filter(t => t.unreadCount > 3).length;
      default:
        return threads.filter(t => !t.isArchived).length;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-terrii-blue/20">
        <div className="animate-pulse text-terrii-text-primary">Loading messages...</div>
      </div>
    );
  }
  
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
          {loadingMessages ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-pulse text-terrii-text-secondary">Loading messages...</div>
            </div>
          ) : (
            currentThreadMessages.map((message: any) => (
              <MessageBubble
                key={message.id}
                message={message}
                onReply={handleReplyToMessage}
                onReact={handleReactToMessage}
              />
            ))
          )}
        </div>
        
        {/* Updated message input box with proper full width */}
        <div className="flex items-center w-full px-4 py-3 border-t border-gray-200 bg-white sticky bottom-0 left-0 right-0">
          <Button variant="ghost" size="icon" className="flex-shrink-0 mr-2">
            <Paperclip className="h-5 w-5 text-gray-500" />
          </Button>
          <div className="flex-grow w-full">
            <Input
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Type your message..."
              className="w-full"
            />
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="flex-shrink-0 ml-2"
            onClick={handleSendMessage}
            disabled={sending || !messageText.trim()}
          >
            <Send className="h-5 w-5 text-terrii" />
          </Button>
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

      {/* New Conversation Dialog */}
      <NewConversationDialog
        isOpen={showNewConversationDialog}
        onClose={() => setShowNewConversationDialog(false)}
        onConversationCreated={handleConversationCreated}
      />
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
    result = 'now';
  }
  
  return addSuffix ? `${result} ago` : result;
}