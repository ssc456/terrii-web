import { useState, useRef } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Checkbox } from '../ui/checkbox';
import { Switch } from '../ui/switch';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { MessageBubble } from '../MessageBubble';
import { CopilotTrigger } from '../copilot/CopilotTrigger';
import { TERRiiCopilot } from '../copilot/TERRiiCopilot';
import { 
  ArrowLeft, Send, Paperclip, MoreHorizontal, Clock, CheckCircle2, Users, Search, 
  Filter, Plus, Edit3, Archive, Trash2, Volume2, VolumeX, Star, StarOff,
  Forward, Copy, Download, Image, FileText, X, Check, AlertCircle,
  Phone, Mail, Calendar, Settings, MessageSquare
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface MessagesScreenProps {
  selectedThread?: string;
  onSelectThread: (threadId: string) => void;
  onBackToInbox: () => void;
  onStartNewConversation?: (residentId: string, familyMember: string, initialMessage: string) => void;
}

export function MessagesScreen({ 
  selectedThread, 
  onSelectThread, 
  onBackToInbox,
  onStartNewConversation 
}: MessagesScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [messageText, setMessageText] = useState('');
  const [showCopilot, setShowCopilot] = useState(false);
  const [showComposeDialog, setShowComposeDialog] = useState(false);
  const [showThreadOptions, setShowThreadOptions] = useState(false);
  const [showTemplateDialog, setShowTemplateDialog] = useState(false);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isDraft, setIsDraft] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Compose dialog state
  const [selectedResident, setSelectedResident] = useState('');
  const [selectedFamilyMember, setSelectedFamilyMember] = useState('');
  const [composeMessage, setComposeMessage] = useState('');
  const [messageSubject, setMessageSubject] = useState('');

  // Advanced search state
  const [searchFilters, setSearchFilters] = useState({
    dateFrom: '',
    dateTo: '',
    sender: '',
    hasAttachments: false,
    isUnread: false
  });

  // Message templates
  const messageTemplates = [
    {
      id: 'daily-update',
      title: 'Daily Update',
      content: '[Resident Name] had a wonderful day today. They participated in [activity] and seemed to really enjoy [specific detail]. Their mood was [mood] and they [interaction with others].'
    },
    {
      id: 'meal-update',
      title: 'Meal Update',
      content: '[Resident Name] enjoyed their meal today. They ate [amount] of their [meal type] and particularly liked the [specific food]. Their appetite seems [status].'
    },
    {
      id: 'health-update',
      title: 'Health Update',  
      content: 'I wanted to update you on [Resident Name]\'s health status. [Health observation]. We are [care plan/next steps]. Please let me know if you have any questions.'
    },
    {
      id: 'activity-update',
      title: 'Activity Participation',
      content: '[Resident Name] participated in [activity name] today. They [level of engagement] and [specific behaviors/reactions]. We have some [photos/videos] to share with you.'
    },
    {
      id: 'visitor-reminder',
      title: 'Visitor Reminder',
      content: 'Just a friendly reminder that [Resident Name] would love to see you. Visiting hours are [hours] and [any special instructions]. They always brighten up when family visits!'
    }
  ];

  // Mock data for residents and family members
  const residents = [
    { 
      id: '1', 
      name: 'Margaret Thompson', 
      room: '101A',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      familyMembers: [
        { id: 'f1', name: 'Susan Thompson', relationship: 'Daughter', phone: '+1 (555) 123-4567', email: 'susan@email.com' },
        { id: 'f2', name: 'Michael Thompson', relationship: 'Son', phone: '+1 (555) 987-6543', email: 'michael@email.com' }
      ]
    },
    { 
      id: '2', 
      name: 'James Mitchell', 
      room: '102B',
      familyMembers: [
        { id: 'f3', name: 'Mary Mitchell', relationship: 'Wife', phone: '+1 (555) 234-5678', email: 'mary@email.com' },
        { id: 'f4', name: 'David Mitchell', relationship: 'Son', phone: '+1 (555) 345-6789', email: 'david@email.com' }
      ]
    },
    { 
      id: '3', 
      name: 'Dorothy Williams', 
      room: '103A',
      photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop&crop=face',
      familyMembers: [
        { id: 'f5', name: 'Robert Williams', relationship: 'Husband', phone: '+1 (555) 456-7890', email: 'robert@email.com' }
      ]
    },
    { 
      id: '4', 
      name: 'Robert Chen', 
      room: '104B',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      familyMembers: [
        { id: 'f6', name: 'Lisa Chen', relationship: 'Daughter', phone: '+1 (555) 567-8901', email: 'lisa@email.com' },
        { id: 'f7', name: 'Peter Chen', relationship: 'Son', phone: '+1 (555) 678-9012', email: 'peter@email.com' }
      ]
    },
    { 
      id: '5', 
      name: 'Eleanor Rodriguez', 
      room: '105A',
      familyMembers: [
        { id: 'f8', name: 'Carlos Rodriguez', relationship: 'Son', phone: '+1 (555) 789-0123', email: 'carlos@email.com' },
        { id: 'f9', name: 'Maria Rodriguez', relationship: 'Daughter', phone: '+1 (555) 890-1234', email: 'maria@email.com' }
      ]
    }
  ];

  // Mock data - in real app would come from API  
  const [threads, setThreads] = useState([
    {
      id: '1',
      resident: {
        name: 'Margaret Thompson',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
        room: '101A'
      },
      participants: ['Dr. Smith', 'Susan Thompson', 'Care Team'],
      lastMessage: {
        content: 'Thank you for the update about Margaret\'s art therapy session!',
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        sender: 'Susan Thompson',
        isFromFamily: true
      },
      unreadCount: 2,
      isStarred: true,
      isMuted: false,
      isArchived: false,
      messages: [
        {
          id: 'm1',
          content: 'How did Margaret do with her morning activities today?',
          sender: {
            name: 'Dr. Smith',
            role: 'Physician',
            photo: null
          },
          timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
          isOwn: false,
          status: 'read' as const
        },
        {
          id: 'm2',
          content: 'She participated beautifully in music therapy! Margaret sang along to several songs from the 1950s and seemed very engaged. I have some photos I can share.',
          sender: {
            name: 'Sarah Johnson',
            role: 'Care Assistant',
            photo: null
          },
          timestamp: new Date(Date.now() - 3.5 * 60 * 60 * 1000),
          isOwn: true,
          status: 'read' as const,
          attachments: [
            {
              type: 'image' as const,
              url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
              name: 'music-therapy-session.jpg'
            }
          ]
        },
        {
          id: 'm3',
          content: 'That\'s wonderful to hear! Margaret always loved music. Could you please send those photos?',
          sender: {
            name: 'Susan Thompson',
            role: 'Family Member',
            photo: null
          },
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          isOwn: false,
          status: 'read' as const
        },
        {
          id: 'm4',
          content: 'Of course! Here are some photos from today\'s session.',
          sender: {
            name: 'Sarah Johnson',
            role: 'Care Assistant',
            photo: null
          },
          timestamp: new Date(Date.now() - 90 * 60 * 1000),
          isOwn: true,
          status: 'read' as const,
          attachments: [
            {
              type: 'image' as const,
              url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop',
              name: 'art-session-1.jpg'
            },
            {
              type: 'image' as const,
              url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
              name: 'art-session-2.jpg'
            }
          ]
        },
        {
          id: 'm5',
          content: 'Thank you for the update about Margaret\'s art therapy session!',
          sender: {
            name: 'Susan Thompson',
            role: 'Family Member',
            photo: null
          },
          timestamp: new Date(Date.now() - 30 * 60 * 1000),
          isOwn: false,
          status: 'delivered' as const,
          reactions: [
            {
              type: 'heart' as const,
              count: 2,
              hasReacted: false
            }
          ]
        }
      ]
    },
    {
      id: '2',
      resident: {
        name: 'James Mitchell',
        room: '102B'
      },
      participants: ['Dr. Rodriguez', 'Mary Mitchell', 'Physical Therapy'],
      lastMessage: {
        content: 'James completed his physical therapy session today.',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        sender: 'Care Team',
        isFromFamily: false
      },
      unreadCount: 0,
      isStarred: false,
      isMuted: false,
      isArchived: false,
      messages: [
        {
          id: 'm6',
          content: 'James completed his physical therapy session today. He showed good progress with his mobility exercises.',
          sender: {
            name: 'Mike Peterson',
            role: 'Physical Therapist',
            photo: null
          },
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          isOwn: true,
          status: 'read' as const
        }
      ]
    },
    {
      id: '3',
      resident: {
        name: 'Dorothy Williams',
        photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop&crop=face',
        room: '103A'
      },
      participants: ['Nurse Kate', 'Robert Williams'],
      lastMessage: {
        content: 'Dorothy enjoyed today\'s garden time!',
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
        sender: 'Nurse Kate',
        isFromFamily: false
      },
      unreadCount: 1,
      isStarred: false,
      isMuted: false,
      isArchived: false,
      messages: [
        {
          id: 'm7',
          content: 'Dorothy enjoyed today\'s garden time! She spent time with the flowers and seemed very peaceful.',
          sender: {
            name: 'Kate Wilson',
            role: 'Nurse',
            photo: null
          },
          timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
          isOwn: true,
          status: 'delivered' as const
        }
      ]
    }
  ]);

  const currentThread = selectedThread ? threads.find(t => t.id === selectedThread) : null;
  const selectedResidentData = residents.find(r => r.id === selectedResident);

  // Filter threads based on active filter and search
  const filteredThreads = threads.filter(thread => {
    const matchesSearch = searchQuery === '' || 
      thread.resident.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thread.lastMessage.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thread.participants.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesFilter = (() => {
      switch (activeFilter) {
        case 'unread':
          return thread.unreadCount > 0;
        case 'starred':
          return thread.isStarred;
        case 'archived':
          return thread.isArchived;
        case 'urgent':
          return thread.unreadCount > 3; // Consider urgent if many unread
        default:
          return !thread.isArchived; // Don't show archived in 'all'
      }
    })();

    return matchesSearch && matchesFilter;
  });

  const getStatusIcon = (thread: any) => {
    if (thread.unreadCount > 0) {
      return <div className="w-2 h-2 bg-terrii-success rounded-full" />;
    }
    return <CheckCircle2 className="h-4 w-4 text-terrii-text-light" />;
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

  const handleSendMessage = () => {
    if (messageText.trim() || attachments.length > 0) {
      // Handle sending message with attachments
      const messageData = {
        content: messageText,
        attachments: attachments.map(file => ({
          name: file.name,
          size: file.size,
          type: file.type
        }))
      };
      
      console.log('Sending message:', messageData);
      setMessageText('');
      setAttachments([]);
      setIsDraft(false);
    }
  };

  const handleFileAttachment = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files);
      setAttachments(prev => [...prev, ...newFiles]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleCopilotSuggestion = (suggestion: string) => {
    setMessageText(suggestion);
  };

  const handleCopilotAction = (action: string) => {
    console.log('Copilot suggested action:', action);
  };

  const handleReplyToMessage = (messageId: string) => {
    console.log('Replying to message:', messageId);
    // In a real app, this would set reply context
  };

  const handleReactToMessage = (messageId: string, type: 'like' | 'heart') => {
    console.log('Reacting to message:', messageId, type);
    // In a real app, this would update message reactions
  };

  const handleThreadAction = (action: string) => {
    if (!currentThread) return;
    
    setThreads(prev => prev.map(thread => {
      if (thread.id === currentThread.id) {
        switch (action) {
          case 'star':
            return { ...thread, isStarred: !thread.isStarred };
          case 'mute':
            return { ...thread, isMuted: !thread.isMuted };
          case 'archive':
            return { ...thread, isArchived: true };
          case 'delete':
            // In real app, would delete thread
            return thread;
          default:
            return thread;
        }
      }
      return thread;
    }));
    
    console.log(`Thread ${action}:`, currentThread.id);
    
    if (action === 'archive' || action === 'delete') {
      onBackToInbox();
    }
  };

  const handleUseTemplate = (template: any) => {
    const populatedContent = template.content
      .replace('[Resident Name]', currentThread?.resident.name || '[Resident Name]')
      .replace('[activity]', '[activity]')
      .replace('[specific detail]', '[specific detail]')
      .replace('[mood]', '[mood]')
      .replace('[interaction with others]', '[interaction with others]');
    
    setMessageText(populatedContent);
    setShowTemplateDialog(false);
  };

  const handleComposeMessage = () => {
    if (selectedResident && selectedFamilyMember && composeMessage.trim()) {
      const resident = residents.find(r => r.id === selectedResident);
      const familyMember = resident?.familyMembers.find(f => f.id === selectedFamilyMember);
      
      if (resident && familyMember && onStartNewConversation) {
        onStartNewConversation(selectedResident, familyMember.name, composeMessage);
      }
      
      // Reset form
      setSelectedResident('');
      setSelectedFamilyMember('');
      setComposeMessage('');
      setMessageSubject('');
      setShowComposeDialog(false);
      
      console.log('Starting new conversation:', {
        resident: selectedResident,
        familyMember: selectedFamilyMember,
        subject: messageSubject,
        message: composeMessage
      });
    }
  };

  const handleComposeWithCopilot = () => {
    setShowCopilot(true);
  };

  const handleComposeCopilotSuggestion = (suggestion: string) => {
    setComposeMessage(suggestion);
  };

  const handleBulkAction = (action: string) => {
    console.log(`Bulk ${action} for messages:`, selectedMessages);
    setSelectedMessages([]);
    setShowBulkActions(false);
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  // Save draft when typing
  const handleMessageChange = (text: string) => {
    setMessageText(text);
    if (text.trim() && !isDraft) {
      setIsDraft(true);
      // In real app, would auto-save draft
    }
  };

  if (selectedThread && currentThread) {
    return (
      <div className="h-full flex flex-col bg-terrii-blue/5">
        {/* Thread Header */}
        <div className="bg-white border-b border-border p-4">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBackToInbox}
              className="p-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <Avatar className="w-10 h-10">
              {currentThread.resident.photo ? (
                <AvatarImage src={currentThread.resident.photo} alt={currentThread.resident.name} />
              ) : (
                <AvatarFallback className="bg-terrii-green text-terrii-text-primary">
                  {getInitials(currentThread.resident.name)}
                </AvatarFallback>
              )}
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h2 className="font-medium text-terrii-text-primary">{currentThread.resident.name}</h2>
                {currentThread.isStarred && <Star className="h-4 w-4 text-terrii-warning fill-current" />}
                {currentThread.isMuted && <VolumeX className="h-4 w-4 text-terrii-text-light" />}
              </div>
              <div className="flex items-center space-x-2 text-sm text-terrii-text-secondary">
                <Users className="h-3 w-3" />
                <span>{currentThread.participants.join(', ')}</span>
              </div>
            </div>
            
            {/* Thread Actions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => handleThreadAction('star')}>
                  {currentThread.isStarred ? (
                    <>
                      <StarOff className="h-4 w-4 mr-2" />
                      Remove Star
                    </>
                  ) : (
                    <>
                      <Star className="h-4 w-4 mr-2" />
                      Add Star
                    </>
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleThreadAction('mute')}>
                  {currentThread.isMuted ? (
                    <>
                      <Volume2 className="h-4 w-4 mr-2" />
                      Unmute
                    </>
                  ) : (
                    <>
                      <VolumeX className="h-4 w-4 mr-2" />
                      Mute
                    </>
                  )}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Forward className="h-4 w-4 mr-2" />
                  Forward Thread
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Thread Link
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Download className="h-4 w-4 mr-2" />
                  Export Thread
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Phone className="h-4 w-4 mr-2" />
                  Call Family
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Mail className="h-4 w-4 mr-2" />
                  Email Family
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleThreadAction('archive')}>
                  <Archive className="h-4 w-4 mr-2" />
                  Archive Thread
                </DropdownMenuItem>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <DropdownMenuItem 
                      className="text-terrii-error hover:text-terrii-error"
                      onSelect={(e) => e.preventDefault()}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Thread
                    </DropdownMenuItem>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Conversation</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete this conversation with {currentThread.resident.name}? This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction 
                        onClick={() => handleThreadAction('delete')}
                        className="bg-terrii-error hover:bg-terrii-error/90"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {currentThread.messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              onReply={handleReplyToMessage}
              onReact={handleReactToMessage}
            />
          ))}
        </div>

        {/* Draft Indicator */}
        {isDraft && (
          <div className="bg-terrii-warning/20 px-4 py-2 border-t border-terrii-warning/30">
            <div className="flex items-center space-x-2 text-sm text-terrii-warning">
              <Edit3 className="h-4 w-4" />
              <span>Draft saved</span>
            </div>
          </div>
        )}

        {/* Message Input with Attachments */}
        <div className="bg-white border-t border-border p-4">
          {/* Attachment Preview */}
          {attachments.length > 0 && (
            <div className="mb-3 p-3 bg-terrii-blue/10 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-terrii-text-primary">
                  Attachments ({attachments.length})
                </span>
              </div>
              <div className="space-y-2">
                {attachments.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-white rounded border">
                    <div className="flex items-center space-x-2">
                      {file.type.startsWith('image/') ? (
                        <Image className="h-4 w-4 text-terrii-info" />
                      ) : (
                        <FileText className="h-4 w-4 text-terrii-text-secondary" />
                      )}
                      <span className="text-sm text-terrii-text-primary">{file.name}</span>
                      <span className="text-xs text-terrii-text-light">
                        ({(file.size / 1024).toFixed(1)} KB)
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeAttachment(index)}
                      className="h-6 w-6 p-0"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-end space-x-3">
            <div className="flex-1 space-y-2">
              {/* Copilot Trigger and Templates */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-terrii-text-light">Reply as care staff</span>
                <div className="flex items-center space-x-2">
                  <Dialog open={showTemplateDialog} onOpenChange={setShowTemplateDialog}>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Templates
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Message Templates</DialogTitle>
                        <DialogDescription>
                          Choose a template to quickly compose common messages
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-3">
                        {messageTemplates.map(template => (
                          <Card key={template.id} className="cursor-pointer hover:bg-terrii-blue/10" onClick={() => handleUseTemplate(template)}>
                            <CardContent className="p-4">
                              <h4 className="font-medium text-terrii-text-primary mb-2">{template.title}</h4>
                              <p className="text-sm text-terrii-text-secondary line-clamp-2">{template.content}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <CopilotTrigger
                    onClick={() => setShowCopilot(true)}
                    tooltip="Get AI suggestions for your reply"
                    variant="button"
                    size="sm"
                  />
                </div>
              </div>
              
              <div className="flex items-end space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={messageText}
                  onChange={(e) => handleMessageChange(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                  className="flex-1"
                />
                
                {/* File Attachment Button */}
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*,.pdf,.doc,.docx,.txt"
                  onChange={(e) => handleFileAttachment(e.target.files)}
                  className="hidden"
                />
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Paperclip className="h-4 w-4" />
                </Button>
                
                <Button 
                  onClick={handleSendMessage}
                  disabled={!messageText.trim() && attachments.length === 0}
                  className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* TERRii Copilot Modal */}
        <TERRiiCopilot
          isOpen={showCopilot}
          onClose={() => setShowCopilot(false)}
          context="message"
          residentName={currentThread.resident.name}
          originalMessage={currentThread.messages[currentThread.messages.length - 1]?.content}
          onUseSuggestion={handleCopilotSuggestion}
          onSuggestAction={handleCopilotAction}
        />
      </div>
    );
  }

  // Inbox view
  return (
    <div className="h-full bg-terrii-blue/5">
      <div className="p-4 space-y-4">
        {/* Header with New Message Button */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-terrii-text-primary">Messages</h1>
            <p className="text-terrii-text-secondary">Secure communication with families</p>
          </div>
          
          <div className="flex items-center space-x-2">
            {showBulkActions && (
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBulkAction('archive')}
                  disabled={selectedMessages.length === 0}
                >
                  <Archive className="h-4 w-4 mr-1" />
                  Archive ({selectedMessages.length})
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowBulkActions(false)}
                >
                  Cancel
                </Button>
              </div>
            )}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowBulkActions(!showBulkActions)}
            >
              <Check className="h-4 w-4 mr-1" />
              Select
            </Button>
            
            <Dialog open={showComposeDialog} onOpenChange={setShowComposeDialog}>
              <DialogTrigger asChild>
                <Button className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  New Message
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Compose New Message</DialogTitle>
                  <DialogDescription>
                    Start a new conversation with a resident's family member
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4">
                  {/* Resident Selection */}
                  <div>
                    <Label htmlFor="resident">Select Resident</Label>
                    <Select value={selectedResident} onValueChange={setSelectedResident}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a resident..." />
                      </SelectTrigger>
                      <SelectContent>
                        {residents.map(resident => (
                          <SelectItem key={resident.id} value={resident.id}>
                            <div className="flex items-center space-x-2">
                              <Avatar className="w-6 h-6">
                                {resident.photo ? (
                                  <AvatarImage src={resident.photo} alt={resident.name} />
                                ) : (
                                  <AvatarFallback className="bg-terrii-green text-terrii-text-primary text-xs">
                                    {getInitials(resident.name)}
                                  </AvatarFallback>
                                )}
                              </Avatar>
                              <span>{resident.name} - Room {resident.room}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Family Member Selection */}
                  {selectedResidentData && (
                    <div>
                      <Label htmlFor="family-member">Select Family Member</Label>
                      <Select value={selectedFamilyMember} onValueChange={setSelectedFamilyMember}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a family member..." />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedResidentData.familyMembers.map(familyMember => (
                            <SelectItem key={familyMember.id} value={familyMember.id}>
                              <div className="flex flex-col items-start">
                                <span className="font-medium">{familyMember.name}</span>
                                <span className="text-xs text-terrii-text-light">
                                  {familyMember.relationship} • {familyMember.email}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Subject Line */}
                  <div>
                    <Label htmlFor="subject">Subject (Optional)</Label>
                    <Input
                      id="subject"
                      value={messageSubject}
                      onChange={(e) => setMessageSubject(e.target.value)}
                      placeholder="What's this message about?"
                    />
                  </div>

                  {/* Message Content with Copilot */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label htmlFor="message">Message</Label>
                      <CopilotTrigger
                        onClick={handleComposeWithCopilot}
                        tooltip="Get AI help composing your message"
                        size="sm"
                      />
                    </div>
                    <Textarea
                      id="message"
                      value={composeMessage}
                      onChange={(e) => setComposeMessage(e.target.value)}
                      placeholder="Type your message here..."
                      className="min-h-[120px]"
                    />
                  </div>

                  {/* Preview of selected contacts */}
                  {selectedResidentData && selectedFamilyMember && (
                    <div className="bg-terrii-blue/20 p-3 rounded-lg">
                      <div className="flex items-center space-x-3 text-sm">
                        <Avatar className="w-8 h-8">
                          {selectedResidentData.photo ? (
                            <AvatarImage src={selectedResidentData.photo} alt={selectedResidentData.name} />
                          ) : (
                            <AvatarFallback className="bg-terrii-green text-terrii-text-primary text-xs">
                              {getInitials(selectedResidentData.name)}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div>
                          <p className="font-medium text-terrii-text-primary">
                            Message about {selectedResidentData.name}
                          </p>
                          <p className="text-terrii-text-secondary">
                            To: {selectedResidentData.familyMembers.find(f => f.id === selectedFamilyMember)?.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex justify-end space-x-2 pt-4">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setShowComposeDialog(false);
                        setSelectedResident('');
                        setSelectedFamilyMember('');
                        setComposeMessage('');
                        setMessageSubject('');
                      }}
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleComposeMessage}
                      disabled={!selectedResident || !selectedFamilyMember || !composeMessage.trim()}
                      className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Search and Advanced Filters */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-terrii-text-light" />
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          {/* Advanced Search Panel */}
          {showAdvancedSearch && (
            <Card className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date-from">From Date</Label>
                  <Input
                    id="date-from"
                    type="date"
                    value={searchFilters.dateFrom}
                    onChange={(e) => setSearchFilters(prev => ({ ...prev, dateFrom: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="date-to">To Date</Label>
                  <Input
                    id="date-to"
                    type="date"
                    value={searchFilters.dateTo}
                    onChange={(e) => setSearchFilters(prev => ({ ...prev, dateTo: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="sender">Sender</Label>
                  <Input
                    id="sender"
                    placeholder="Search by sender name"
                    value={searchFilters.sender}
                    onChange={(e) => setSearchFilters(prev => ({ ...prev, sender: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="has-attachments"
                      checked={searchFilters.hasAttachments}
                      onCheckedChange={(checked) => setSearchFilters(prev => ({ ...prev, hasAttachments: checked as boolean }))}
                    />
                    <Label htmlFor="has-attachments">Has attachments</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="is-unread"
                      checked={searchFilters.isUnread}
                      onCheckedChange={(checked) => setSearchFilters(prev => ({ ...prev, isUnread: checked as boolean }))}
                    />
                    <Label htmlFor="is-unread">Unread only</Label>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex space-x-2 flex-wrap">
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
              className={`cursor-pointer transition-colors ${
                activeFilter === filter.key
                  ? 'bg-terrii-green-dark text-terrii-text-primary hover:bg-terrii-green'
                  : 'hover:bg-terrii-blue/20'
              }`}
              onClick={() => handleFilterClick(filter.key)}
            >
              <filter.icon className="h-3 w-3 mr-1" />
              {filter.label} ({getUnreadCount(filter.key)})
            </Badge>
          ))}
        </div>

        {/* Empty State or Getting Started Guide */}
        {filteredThreads.length === 0 && activeFilter === 'all' && !searchQuery && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-terrii-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Edit3 className="h-8 w-8 text-terrii-blue-dark" />
            </div>
            <h3 className="text-lg font-medium text-terrii-text-primary mb-2">No conversations yet</h3>
            <p className="text-terrii-text-secondary mb-4">
              Start communicating with families by sending your first message.
            </p>
            <Button 
              onClick={() => setShowComposeDialog(true)}
              className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
            >
              <Plus className="h-4 w-4 mr-2" />
              Send First Message
            </Button>
          </div>
        )}

        {/* No Search Results */}
        {filteredThreads.length === 0 && (searchQuery || activeFilter !== 'all') && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-terrii-text-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-terrii-text-light" />
            </div>
            <h3 className="text-lg font-medium text-terrii-text-primary mb-2">No results found</h3>
            <p className="text-terrii-text-secondary mb-4">
              Try adjusting your search criteria or filters.
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
                setSearchFilters({
                  dateFrom: '',
                  dateTo: '',
                  sender: '',
                  hasAttachments: false,
                  isUnread: false
                });
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Helpful Tips */}
        {filteredThreads.length > 0 && filteredThreads.length < 3 && activeFilter === 'all' && (
          <div className="bg-terrii-green/20 p-4 rounded-lg border border-terrii-green/30">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-terrii-green-dark rounded-full flex items-center justify-center flex-shrink-0">
                <Plus className="h-4 w-4 text-terrii-text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-terrii-text-primary mb-1">💡 Getting Started</h4>
                <p className="text-sm text-terrii-text-secondary mb-2">
                  Keep families informed by sending regular updates about their loved ones. Click "New Message" to start a conversation.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowComposeDialog(true)}
                  className="text-terrii-green-dark border-terrii-green-dark hover:bg-terrii-green/20"
                >
                  Start New Conversation
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Conversations List */}
        <div className="space-y-3">
          {filteredThreads.map((thread) => (
            <Card 
              key={thread.id}
              className={`shadow-terrii hover:shadow-terrii-lg transition-all cursor-pointer ${
                showBulkActions ? 'hover:bg-terrii-blue/10' : ''
              }`}
              onClick={() => {
                if (showBulkActions) {
                  if (selectedMessages.includes(thread.id)) {
                    setSelectedMessages(prev => prev.filter(id => id !== thread.id));
                  } else {
                    setSelectedMessages(prev => [...prev, thread.id]);
                  }
                } else {
                  onSelectThread(thread.id);
                }
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  {showBulkActions && (
                    <Checkbox
                      checked={selectedMessages.includes(thread.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedMessages(prev => [...prev, thread.id]);
                        } else {
                          setSelectedMessages(prev => prev.filter(id => id !== thread.id));
                        }
                      }}
                      onClick={(e) => e.stopPropagation()}
                    />
                  )}
                  
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      {thread.resident.photo ? (
                        <AvatarImage src={thread.resident.photo} alt={thread.resident.name} />
                      ) : (
                        <AvatarFallback className="bg-terrii-green text-terrii-text-primary">
                          {getInitials(thread.resident.name)}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    {thread.unreadCount > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-terrii-success rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-medium">{thread.unreadCount}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-terrii-text-primary">{thread.resident.name}</h3>
                        {thread.isStarred && <Star className="h-4 w-4 text-terrii-warning fill-current" />}
                        {thread.isMuted && <VolumeX className="h-4 w-4 text-terrii-text-light" />}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-terrii-text-light">
                          {formatDistanceToNow(thread.lastMessage.timestamp, { addSuffix: true })}
                        </span>
                        {getStatusIcon(thread)}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-3 w-3 text-terrii-text-light" />
                      <span className="text-xs text-terrii-text-light">
                        {thread.participants.join(', ')}
                      </span>
                    </div>
                    
                    <p className="text-sm text-terrii-text-secondary truncate">
                      <span className="font-medium">{thread.lastMessage.sender}:</span> {thread.lastMessage.content}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* TERRii Copilot for Compose */}
        <TERRiiCopilot
          isOpen={showCopilot}
          onClose={() => setShowCopilot(false)}
          context="compose"
          residentName={selectedResidentData?.name || 'the resident'}
          onUseSuggestion={handleComposeCopilotSuggestion}
          onSuggestAction={handleCopilotAction}
        />
      </div>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-20 right-4 sm:hidden">
        <Button
          onClick={() => setShowComposeDialog(true)}
          className="w-14 h-14 rounded-full bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary shadow-terrii-lg"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}