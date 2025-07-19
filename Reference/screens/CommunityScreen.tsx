import { useState, useRef } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';
import { Checkbox } from '../ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Progress } from '../ui/progress';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { 
  MessageCircle, Plus, Heart, MessageSquare, Pin, MoreHorizontal, Shield, Camera, Filter, Search, 
  Clock, Users, Eye, Trash2, AlertTriangle, ThumbsUp, Reply, Edit, Archive, Flag, Copy, Share2,
  Bell, Settings, BarChart3, UserCheck, UserX, Crown, Star, TrendingUp, Calendar, MapPin,
  Image as ImageIcon, Video, FileText, X, Send, CheckCircle, AlertCircle, Upload, Download,
  Globe, Lock, Zap, Target
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface CommunityScreenProps {
  onCreatePost: (post: any) => void;
  onReplyToPost: (postId: string, reply: string) => void;
  onToggleMode: (mode: 'notice-board' | 'two-way') => void;
  userRole: 'staff' | 'family';
  onEditPost?: (postId: string, updates: any) => void;
  onDeletePost?: (postId: string) => void;
  onModeratePost?: (postId: string, action: string) => void;
  onManageUser?: (userId: string, action: string) => void;
}

export function CommunityScreen({ 
  onCreatePost, 
  onReplyToPost, 
  onToggleMode, 
  userRole = 'staff',
  onEditPost,
  onDeletePost,
  onModeratePost,
  onManageUser
}: CommunityScreenProps) {
  const [currentMode, setCurrentMode] = useState<'notice-board' | 'two-way'>('notice-board');
  const [selectedThread, setSelectedThread] = useState<string | null>(null);
  const [filterBy, setFilterBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showMemberManagement, setShowMemberManagement] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [editingPost, setEditingPost] = useState<string | null>(null);
  const [notificationSettings, setNotificationSettings] = useState({
    newPosts: true,
    replies: true,
    mentions: true
  });

  // Mock data - in real app would come from API
  const [posts, setPosts] = useState([
    {
      id: '1',
      title: 'Welcome to Peaceful Place Families Community',
      content: 'We\'re excited to launch this new space for our care community to connect, share updates, and support each other. Please review our community guidelines in the pinned post below.',
      author: {
        id: 'staff1',
        name: 'Sarah Johnson',
        role: 'Care Manager',
        photo: null,
        isStaff: true,
      },
      timestamp: new Date(Date.now() - 60 * 60 * 1000),
      category: 'Announcements',
      isPinned: true,
      status: 'published',
      replies: [],
      reactions: { 
        likes: { count: 12, users: ['user1', 'user2'] },
        hearts: { count: 5, users: ['user3'] },
        hasLiked: false,
        hasHearted: false
      },
      tags: ['Welcome', 'Guidelines'],
      allowReplies: true,
      attachments: [],
      views: 45,
      reportCount: 0
    },
    {
      id: '2',
      title: 'Holiday Activities Schedule - December 2024',
      content: 'Here\'s our festive December calendar! We have carol singing on the 15th, cookie decorating on the 18th, and our annual holiday party on the 22nd. Family members are welcome to join us for the holiday party from 2-4 PM.',
      author: {
        id: 'staff2',
        name: 'Maria Rodriguez',
        role: 'Activities Coordinator',
        photo: null,
        isStaff: true,
      },
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      category: 'Events',
      isPinned: false,
      status: 'published',
      replies: [
        {
          id: 'r1',
          content: 'This sounds wonderful! My mom Margaret loves singing. Will there be Christmas carols she might remember?',
          author: {
            id: 'family1',
            name: 'Susan Thompson',
            role: 'Family Member',
            isStaff: false,
          },
          timestamp: new Date(Date.now() - 30 * 60 * 1000),
          reactions: { likes: 3, hearts: 1 }
        }
      ],
      reactions: { 
        likes: { count: 8, users: [] },
        hearts: { count: 3, users: [] },
        hasLiked: true,
        hasHearted: false
      },
      tags: ['Events', 'Holidays'],
      allowReplies: true,
      attachments: [
        {
          id: 'a1',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop',
          name: 'holiday-calendar.jpg'
        }
      ],
      views: 32,
      reportCount: 0
    },
    {
      id: '3',
      title: 'Medication Schedule Changes',
      content: 'Please note: The pharmacy delivery will be moved to Tuesdays starting next week. This may affect some residents\' medication timing. Our nursing team will coordinate with families if any adjustments are needed.',
      author: {
        id: 'staff3',
        name: 'Dr. Patricia Kim',
        role: 'Medical Director',
        photo: null,
        isStaff: true,
      },
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      category: 'Medical',
      isPinned: false,
      status: 'published',
      replies: [],
      reactions: { 
        likes: { count: 4, users: [] },
        hearts: { count: 0, users: [] },
        hasLiked: false,
        hasHearted: false
      },
      tags: ['Medical', 'Schedule'],
      allowReplies: false,
      attachments: [],
      views: 28,
      reportCount: 0
    },
    {
      id: '4',
      title: 'Gratitude for the Care Team',
      content: 'I wanted to share how grateful our family is for the incredible care my father Robert has been receiving. The staff goes above and beyond every day. Thank you for treating him like family.',
      author: {
        id: 'family2',
        name: 'Lisa Chen',
        role: 'Family Member',
        photo: null,
        isStaff: false,
      },
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      category: 'Appreciation',
      isPinned: false,
      status: 'published',
      replies: [
        {
          id: 'r2',
          content: 'Thank you so much for these kind words, Lisa. Robert brings such joy to our days too!',
          author: {
            id: 'staff1',
            name: 'Sarah Johnson',
            role: 'Care Manager',
            isStaff: true,
          },
          timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
          reactions: { likes: 8, hearts: 2 }
        }
      ],
      reactions: { 
        likes: { count: 15, users: [] },
        hearts: { count: 8, users: [] },
        hasLiked: false,
        hasHearted: true
      },
      tags: ['Appreciation', 'Family'],
      allowReplies: true,
      attachments: [],
      views: 51,
      reportCount: 0
    },
    {
      id: '5',
      title: 'New Garden Project Proposal',
      content: 'I\'d love to start a small herb garden that residents can help tend. Has anyone tried something like this before? Looking for advice and volunteers!',
      author: {
        id: 'family3',
        name: 'Michael Thompson',
        role: 'Family Member',
        photo: null,
        isStaff: false,
      },
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
      category: 'Projects',
      isPinned: false,
      status: 'pending_approval',
      replies: [],
      reactions: { 
        likes: { count: 0, users: [] },
        hearts: { count: 0, users: [] },
        hasLiked: false,
        hasHearted: false
      },
      tags: ['Garden', 'Projects', 'Volunteers'],
      allowReplies: true,
      attachments: [],
      views: 0,
      reportCount: 0
    }
  ]);

  const communityMembers = [
    { id: 'staff1', name: 'Sarah Johnson', role: 'Care Manager', type: 'staff', status: 'active', joinDate: '2024-01-15' },
    { id: 'staff2', name: 'Maria Rodriguez', role: 'Activities Coordinator', type: 'staff', status: 'active', joinDate: '2024-01-15' },
    { id: 'staff3', name: 'Dr. Patricia Kim', role: 'Medical Director', type: 'staff', status: 'active', joinDate: '2024-01-15' },
    { id: 'family1', name: 'Susan Thompson', role: 'Family Member', type: 'family', status: 'active', joinDate: '2024-02-01', residentName: 'Margaret Thompson' },
    { id: 'family2', name: 'Lisa Chen', role: 'Family Member', type: 'family', status: 'active', joinDate: '2024-02-15', residentName: 'Robert Chen' },
    { id: 'family3', name: 'Michael Thompson', role: 'Family Member', type: 'family', status: 'pending', joinDate: '2024-03-01', residentName: 'Margaret Thompson' }
  ];

  const categories = [
    { value: 'all', label: 'All Categories', count: posts.filter(p => p.status === 'published').length },
    { value: 'announcements', label: 'Announcements', count: posts.filter(p => p.category === 'Announcements' && p.status === 'published').length },
    { value: 'events', label: 'Events', count: posts.filter(p => p.category === 'Events' && p.status === 'published').length },
    { value: 'medical', label: 'Medical', count: posts.filter(p => p.category === 'Medical' && p.status === 'published').length },
    { value: 'appreciation', label: 'Appreciation', count: posts.filter(p => p.category === 'Appreciation' && p.status === 'published').length },
    { value: 'projects', label: 'Projects', count: posts.filter(p => p.category === 'Projects' && p.status === 'published').length }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const handleModeToggle = (mode: 'notice-board' | 'two-way') => {
    setCurrentMode(mode);
    onToggleMode(mode);
  };

  const filteredPosts = posts
    .filter(post => {
      // Only show published posts to family members, staff can see all
      if (userRole === 'family' && post.status !== 'published') return false;
      
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = filterCategory === 'all' || 
        post.category.toLowerCase() === filterCategory.toLowerCase();
      
      const matchesFilter = filterBy === 'newest' ? true :
        filterBy === 'pinned' ? post.isPinned :
        filterBy === 'my-posts' ? post.author.name === 'Sarah Johnson' :
        filterBy === 'most-liked' ? post.reactions.likes.count > 5 : true;
      
      return matchesSearch && matchesCategory && matchesFilter;
    })
    .sort((a, b) => {
      if (filterBy === 'pinned') {
        if (a.isPinned && !b.isPinned) return -1;
        if (!a.isPinned && b.isPinned) return 1;
      }
      if (filterBy === 'most-liked') {
        return b.reactions.likes.count - a.reactions.likes.count;
      }
      return b.timestamp.getTime() - a.timestamp.getTime();
    });

  const handlePostAction = (postId: string, action: string) => {
    switch (action) {
      case 'like':
        setPosts(prev => prev.map(post => {
          if (post.id === postId) {
            const hasLiked = post.reactions.hasLiked;
            return {
              ...post,
              reactions: {
                ...post.reactions,
                likes: {
                  count: hasLiked ? post.reactions.likes.count - 1 : post.reactions.likes.count + 1,
                  users: hasLiked 
                    ? post.reactions.likes.users.filter(u => u !== 'current-user')
                    : [...post.reactions.likes.users, 'current-user']
                },
                hasLiked: !hasLiked
              }
            };
          }
          return post;
        }));
        break;
      case 'heart':
        setPosts(prev => prev.map(post => {
          if (post.id === postId) {
            const hasHearted = post.reactions.hasHearted;
            return {
              ...post,
              reactions: {
                ...post.reactions,
                hearts: {
                  count: hasHearted ? post.reactions.hearts.count - 1 : post.reactions.hearts.count + 1,
                  users: hasHearted 
                    ? post.reactions.hearts.users.filter(u => u !== 'current-user')
                    : [...post.reactions.hearts.users, 'current-user']
                },
                hasHearted: !hasHearted
              }
            };
          }
          return post;
        }));
        break;
      case 'pin':
        setPosts(prev => prev.map(post => 
          post.id === postId ? { ...post, isPinned: !post.isPinned } : post
        ));
        break;
      case 'approve':
        setPosts(prev => prev.map(post => 
          post.id === postId ? { ...post, status: 'published' } : post
        ));
        onModeratePost?.(postId, 'approve');
        break;
      case 'archive':
        setPosts(prev => prev.map(post => 
          post.id === postId ? { ...post, status: 'archived' } : post
        ));
        onModeratePost?.(postId, 'archive');
        break;
      case 'edit':
        setEditingPost(postId);
        setShowCreatePost(true);
        break;
      case 'delete':
        setPosts(prev => prev.filter(post => post.id !== postId));
        onDeletePost?.(postId);
        break;
      case 'report':
        setPosts(prev => prev.map(post => 
          post.id === postId ? { ...post, reportCount: post.reportCount + 1 } : post
        ));
        break;
      case 'copy':
        navigator.clipboard.writeText(window.location.origin + '/community/' + postId);
        break;
    }
  };

  const handleReplySubmit = (postId: string) => {
    if (!replyText.trim()) return;
    
    const newReply = {
      id: `r${Date.now()}`,
      content: replyText,
      author: {
        id: 'current-user',
        name: 'Sarah Johnson',
        role: 'Care Assistant',
        isStaff: true,
      },
      timestamp: new Date(),
      reactions: { likes: 0, hearts: 0 }
    };
    
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          replies: [...post.replies, newReply]
        };
      }
      return post;
    }));
    
    setReplyText('');
    onReplyToPost(postId, replyText);
  };

  const handleBulkAction = (action: string) => {
    switch (action) {
      case 'approve':
        setPosts(prev => prev.map(post => 
          selectedPosts.includes(post.id) ? { ...post, status: 'published' } : post
        ));
        break;
      case 'archive':
        setPosts(prev => prev.map(post => 
          selectedPosts.includes(post.id) ? { ...post, status: 'archived' } : post
        ));
        break;
      case 'delete':
        setPosts(prev => prev.filter(post => !selectedPosts.includes(post.id)));
        break;
    }
    setSelectedPosts([]);
    setShowBulkActions(false);
  };

  const currentPost = selectedThread ? posts.find(p => p.id === selectedThread) : null;
  const pendingPosts = posts.filter(p => p.status === 'pending_approval');
  const reportedPosts = posts.filter(p => p.reportCount > 0);

  if (selectedThread && currentPost) {
    return (
      <div className="h-full bg-terrii-blue/5">
        {/* Thread Detail Header */}
        <div className="bg-white border-b border-border p-4">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedThread(null)}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Community</span>
            </Button>
            
            {userRole === 'staff' && (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={() => handlePostAction(currentPost.id, 'pin')}>
                  <Pin className="h-4 w-4 mr-1" />
                  {currentPost.isPinned ? 'Unpin' : 'Pin'} Post
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handlePostAction(currentPost.id, 'edit')}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Post
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handlePostAction(currentPost.id, 'copy')}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Link
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handlePostAction(currentPost.id, 'archive')}>
                      <Archive className="h-4 w-4 mr-2" />
                      Archive Post
                    </DropdownMenuItem>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <DropdownMenuItem 
                          className="text-terrii-error"
                          onSelect={(e) => e.preventDefault()}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Post
                        </DropdownMenuItem>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Post</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete "{currentPost.title}"? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction 
                            onClick={() => handlePostAction(currentPost.id, 'delete')}
                            className="bg-terrii-error"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2 mb-2">
            <Badge variant="outline" className={
              currentMode === 'notice-board' 
                ? 'bg-terrii-info/20 text-terrii-info border-terrii-info/30'
                : 'bg-terrii-success/20 text-terrii-success border-terrii-success/30'
            }>
              {currentMode === 'notice-board' ? 'Notice Board Mode' : 'Two-Way Community (Moderated)'}
            </Badge>
            {currentPost.isPinned && (
              <Badge variant="outline" className="bg-terrii-warning/20 text-terrii-warning">
                <Pin className="h-3 w-3 mr-1" />
                Pinned
              </Badge>
            )}
            {currentPost.status === 'pending_approval' && (
              <Badge variant="outline" className="bg-terrii-warning/20 text-terrii-warning">
                <Clock className="h-3 w-3 mr-1" />
                Pending Approval
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Main Post */}
          <Card className="shadow-terrii">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="w-12 h-12">
                  {currentPost.author.photo ? (
                    <AvatarImage src={currentPost.author.photo} alt={currentPost.author.name} />
                  ) : (
                    <AvatarFallback className="bg-terrii-green text-terrii-text-primary">
                      {getInitials(currentPost.author.name)}
                    </AvatarFallback>
                  )}
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-terrii-text-primary">{currentPost.author.name}</h3>
                    {currentPost.author.isStaff && (
                      <Badge variant="outline" className="bg-terrii-blue/20 text-terrii-blue-dark">
                        <Shield className="h-3 w-3 mr-1" />
                        Staff
                      </Badge>
                    )}
                    <span className="text-xs text-terrii-text-light">
                      {formatDistanceToNow(currentPost.timestamp, { addSuffix: true })}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-terrii-text-primary mb-3">
                    {currentPost.title}
                  </h2>
                  
                  <p className="text-terrii-text-secondary mb-4 whitespace-pre-wrap">
                    {currentPost.content}
                  </p>
                  
                  {/* Attachments */}
                  {currentPost.attachments.length > 0 && (
                    <div className="mb-4 space-y-2">
                      {currentPost.attachments.map(attachment => (
                        <div key={attachment.id} className="relative">
                          {attachment.type === 'image' && (
                            <img 
                              src={attachment.url} 
                              alt={attachment.name}
                              className="max-w-md h-auto rounded-lg"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handlePostAction(currentPost.id, 'like')}
                        className={`transition-colors ${
                          currentPost.reactions.hasLiked ? 'text-terrii-info' : 'text-terrii-text-light hover:text-terrii-info'
                        }`}
                      >
                        <ThumbsUp className={`h-4 w-4 mr-2 ${currentPost.reactions.hasLiked ? 'fill-current' : ''}`} />
                        {currentPost.reactions.likes.count}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handlePostAction(currentPost.id, 'heart')}
                        className={`transition-colors ${
                          currentPost.reactions.hasHearted ? 'text-terrii-error' : 'text-terrii-text-light hover:text-terrii-error'
                        }`}
                      >
                        <Heart className={`h-4 w-4 mr-2 ${currentPost.reactions.hasHearted ? 'fill-current' : ''}`} />
                        {currentPost.reactions.hearts.count}
                      </Button>
                      <div className="flex items-center space-x-1 text-sm text-terrii-text-light">
                        <Eye className="h-4 w-4" />
                        <span>{currentPost.views} views</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-1">
                      {currentPost.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Replies Section */}
          <div className="space-y-3">
            <h3 className="font-medium text-terrii-text-primary flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              Replies ({currentPost.replies.length})
            </h3>
            
            {currentPost.replies.map(reply => (
              <Card key={reply.id} className="shadow-terrii ml-8">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-terrii-blue text-terrii-text-primary text-xs">
                        {getInitials(reply.author.name)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-sm text-terrii-text-primary">
                          {reply.author.name}
                        </span>
                        {reply.author.isStaff && (
                          <Badge variant="outline" className="bg-terrii-blue/20 text-terrii-blue-dark text-xs">
                            Staff
                          </Badge>
                        )}
                        <span className="text-xs text-terrii-text-light">
                          {formatDistanceToNow(reply.timestamp, { addSuffix: true })}
                        </span>
                      </div>
                      
                      <p className="text-sm text-terrii-text-secondary mb-2">
                        {reply.content}
                      </p>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="h-6 text-xs">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          {reply.reactions.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 text-xs">
                          <Heart className="h-3 w-3 mr-1" />
                          {reply.reactions.hearts}
                        </Button>
                        {userRole === 'staff' && (
                          <Button variant="ghost" size="sm" className="h-6 text-xs">
                            <Flag className="h-3 w-3 mr-1" />
                            Report
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Reply Input */}
          {currentMode === 'two-way' && currentPost.allowReplies && (
            <Card className="shadow-terrii">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-terrii-green text-terrii-text-primary text-xs">
                      SJ
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-3">
                    <Textarea
                      placeholder="Write a reply..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="min-h-[80px]"
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Camera className="h-4 w-4 mr-1" />
                          Photo
                        </Button>
                      </div>
                      <Button 
                        size="sm" 
                        onClick={() => handleReplySubmit(currentPost.id)}
                        disabled={!replyText.trim()}
                        className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-terrii-blue/5">
      <div className="p-4 space-y-4">
        {/* Enhanced Header */}
        <div className="bg-white p-4 rounded-lg shadow-terrii">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-semibold text-terrii-text-primary">Community</h1>
              <p className="text-terrii-text-secondary">Peaceful Place Families</p>
            </div>
            
            <div className="flex items-center space-x-2">
              {userRole === 'staff' && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAnalytics(!showAnalytics)}
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Analytics
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowMemberManagement(!showMemberManagement)}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Members
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAdminPanel(!showAdminPanel)}
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Admin
                  </Button>
                </>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setNotificationSettings(prev => ({ ...prev, newPosts: !prev.newPosts }))}
              >
                <Bell className={`h-4 w-4 mr-2 ${notificationSettings.newPosts ? 'text-terrii-success' : ''}`} />
                Notifications
              </Button>
            </div>
          </div>
          
          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <Card className="p-3">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-terrii-info" />
                <div>
                  <p className="text-sm text-terrii-text-secondary">Total Posts</p>
                  <p className="text-lg font-semibold text-terrii-text-primary">{posts.filter(p => p.status === 'published').length}</p>
                </div>
              </div>
            </Card>
            <Card className="p-3">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-terrii-success" />
                <div>
                  <p className="text-sm text-terrii-text-secondary">Active Members</p>
                  <p className="text-lg font-semibold text-terrii-text-primary">{communityMembers.filter(m => m.status === 'active').length}</p>
                </div>
              </div>
            </Card>
            <Card className="p-3">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-terrii-error" />
                <div>
                  <p className="text-sm text-terrii-text-secondary">Total Reactions</p>
                  <p className="text-lg font-semibold text-terrii-text-primary">
                    {posts.reduce((sum, p) => sum + p.reactions.likes.count + p.reactions.hearts.count, 0)}
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-3">
              <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-terrii-warning" />
                <div>
                  <p className="text-sm text-terrii-text-secondary">Total Views</p>
                  <p className="text-lg font-semibold text-terrii-text-primary">
                    {posts.reduce((sum, p) => sum + p.views, 0)}
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="flex items-center justify-between">
            <Badge variant="outline" className={
              currentMode === 'notice-board' 
                ? 'bg-terrii-info/20 text-terrii-info border-terrii-info/30'
                : 'bg-terrii-success/20 text-terrii-success border-terrii-success/30'
            }>
              {currentMode === 'notice-board' ? 'Notice Board Mode' : 'Two-Way Community (Moderated)'}
            </Badge>
            
            <div className="flex items-center space-x-4 text-sm text-terrii-text-light">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{communityMembers.filter(m => m.status === 'active').length} families connected</span>
              </div>
              {pendingPosts.length > 0 && (
                <div className="flex items-center space-x-1 text-terrii-warning">
                  <Clock className="h-4 w-4" />
                  <span>{pendingPosts.length} pending approval</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Enhanced Admin Panel */}
          {showAdminPanel && userRole === 'staff' && (
            <div className="mt-4 p-4 bg-terrii-blue/20 rounded-lg border border-terrii-blue-dark">
              <Tabs defaultValue="settings" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                  <TabsTrigger value="moderation">Moderation</TabsTrigger>
                  <TabsTrigger value="permissions">Permissions</TabsTrigger>
                </TabsList>
                
                <TabsContent value="settings" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-medium">Community Mode</Label>
                      <p className="text-sm text-terrii-text-secondary">
                        Allow families to post and comment, or staff-only announcements
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-terrii-text-secondary">Notice Board</span>
                      <Switch
                        checked={currentMode === 'two-way'}
                        onCheckedChange={(checked) => handleModeToggle(checked ? 'two-way' : 'notice-board')}
                      />
                      <span className="text-sm text-terrii-text-secondary">Two-Way</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Require post approval</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Allow file attachments</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Enable notifications</Label>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="moderation" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start">
                      <Clock className="h-4 w-4 mr-2" />
                      Review Pending Posts ({pendingPosts.length})
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Reported Content ({reportedPosts.length})
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Archive className="h-4 w-4 mr-2" />
                      Archived Posts
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Deleted Content
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="permissions" className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">Family Member Permissions</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Can create posts</Label>
                        <Switch defaultChecked={currentMode === 'two-way'} />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>Can reply to posts</Label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>Can react to posts</Label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>Can upload attachments</Label>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {/* Member Management Panel */}
          {showMemberManagement && userRole === 'staff' && (
            <div className="mt-4 p-4 bg-terrii-green/20 rounded-lg border border-terrii-green-dark">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-terrii-text-primary">Community Members</h3>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Invite Member
                </Button>
              </div>
              
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {communityMembers.map(member => (
                  <div key={member.id} className="flex items-center justify-between p-2 bg-white rounded border">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-terrii-blue text-terrii-text-primary text-xs">
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-terrii-text-primary">{member.name}</p>
                        <p className="text-xs text-terrii-text-light">
                          {member.role} {member.residentName && `• ${member.residentName}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className={
                        member.status === 'active' ? 'bg-terrii-success/20 text-terrii-success' : 
                        'bg-terrii-warning/20 text-terrii-warning'
                      }>
                        {member.status}
                      </Badge>
                      {member.type === 'staff' && <Crown className="h-4 w-4 text-terrii-warning" />}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <UserCheck className="h-4 w-4 mr-2" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="h-4 w-4 mr-2" />
                            Edit Permissions
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-terrii-error">
                            <UserX className="h-4 w-4 mr-2" />
                            Remove Member
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics Panel */}
          {showAnalytics && userRole === 'staff' && (
            <div className="mt-4 p-4 bg-terrii-warning/20 rounded-lg border border-terrii-warning-dark">
              <h3 className="font-medium text-terrii-text-primary mb-4">Community Analytics</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-semibold text-terrii-text-primary">
                    {Math.round(posts.reduce((sum, p) => sum + p.views, 0) / posts.length)}
                  </p>
                  <p className="text-xs text-terrii-text-secondary">Avg. Views per Post</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-terrii-text-primary">
                    {Math.round(posts.reduce((sum, p) => sum + p.replies.length, 0) / posts.length * 10) / 10}
                  </p>
                  <p className="text-xs text-terrii-text-secondary">Avg. Replies per Post</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-terrii-text-primary">
                    {Math.round(communityMembers.filter(m => m.type === 'family' && m.status === 'active').length / communityMembers.filter(m => m.type === 'family').length * 100)}%
                  </p>
                  <p className="text-xs text-terrii-text-secondary">Family Engagement</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-terrii-text-primary">
                    {posts.filter(p => p.timestamp > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
                  </p>
                  <p className="text-xs text-terrii-text-secondary">Posts This Week</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Most Engaged Posts</h4>
                {posts
                  .sort((a, b) => (b.reactions.likes.count + b.reactions.hearts.count + b.replies.length) - (a.reactions.likes.count + a.reactions.hearts.count + a.replies.length))
                  .slice(0, 3)
                  .map(post => (
                    <div key={post.id} className="flex items-center justify-between p-2 bg-white rounded border">
                      <p className="text-sm font-medium text-terrii-text-primary truncate">{post.title}</p>
                      <div className="flex items-center space-x-2 text-xs text-terrii-text-light">
                        <span>{post.reactions.likes.count + post.reactions.hearts.count} reactions</span>
                        <span>{post.replies.length} replies</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Search and Actions */}
        <div className="bg-white p-4 rounded-lg shadow-terrii">
          <div className="flex items-center space-x-4 mb-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-terrii-text-light" />
              <Input
                placeholder="Search community posts, members, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              {showBulkActions && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleBulkAction('approve')}
                    disabled={selectedPosts.length === 0}
                  >
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Approve ({selectedPosts.length})
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleBulkAction('archive')}
                    disabled={selectedPosts.length === 0}
                  >
                    <Archive className="h-4 w-4 mr-1" />
                    Archive ({selectedPosts.length})
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowBulkActions(false)}
                  >
                    Cancel
                  </Button>
                </>
              )}
              
              {userRole === 'staff' && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowBulkActions(!showBulkActions)}
                >
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Select
                </Button>
              )}
              
              {currentMode === 'two-way' && (userRole === 'staff' || userRole === 'family') && (
                <CreatePostDialog 
                  isOpen={showCreatePost}
                  onOpenChange={setShowCreatePost}
                  onCreatePost={onCreatePost}
                  editingPost={editingPost ? posts.find(p => p.id === editingPost) : undefined}
                  onEditComplete={() => setEditingPost(null)}
                />
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="pinned">Pinned</SelectItem>
                  <SelectItem value="most-liked">Most Liked</SelectItem>
                  <SelectItem value="my-posts">My Posts</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label} ({cat.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="bg-terrii-success/20 text-terrii-success">
                {filteredPosts.length} Posts
              </Badge>
              {pendingPosts.length > 0 && userRole === 'staff' && (
                <Badge variant="outline" className="bg-terrii-warning/20 text-terrii-warning">
                  {pendingPosts.length} Pending
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Community Feed */}
        <div className="space-y-3">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-8">
              <MessageCircle className="h-16 w-16 text-terrii-text-light mx-auto mb-4" />
              <h3 className="text-lg font-medium text-terrii-text-primary mb-2">No posts found</h3>
              <p className="text-terrii-text-secondary mb-4">
                {searchQuery ? 'Try adjusting your search criteria.' : 'Be the first to start a conversation!'}
              </p>
              {currentMode === 'two-way' && (
                <Button 
                  onClick={() => setShowCreatePost(true)}
                  className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create First Post
                </Button>
              )}
            </div>
          ) : (
            filteredPosts.map(post => (
              <div key={post.id} className="relative">
                {showBulkActions && userRole === 'staff' && (
                  <div className="absolute top-4 left-4 z-10">
                    <Checkbox
                      checked={selectedPosts.includes(post.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedPosts(prev => [...prev, post.id]);
                        } else {
                          setSelectedPosts(prev => prev.filter(id => id !== post.id));
                        }
                      }}
                      className="bg-white border-2"
                    />
                  </div>
                )}
                
                <Card 
                  className={`shadow-terrii hover:shadow-terrii-lg transition-all cursor-pointer ${
                    post.status === 'pending_approval' ? 'border-terrii-warning/50' : ''
                  }`}
                  onClick={() => setSelectedThread(post.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12">
                        {post.author.photo ? (
                          <AvatarImage src={post.author.photo} alt={post.author.name} />
                        ) : (
                          <AvatarFallback className="bg-terrii-green text-terrii-text-primary">
                            {getInitials(post.author.name)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium text-terrii-text-primary">{post.author.name}</h3>
                            {post.author.isStaff && (
                              <Badge variant="outline" className="bg-terrii-blue/20 text-terrii-blue-dark">
                                <Shield className="h-3 w-3 mr-1" />
                                Staff
                              </Badge>
                            )}
                            {post.isPinned && (
                              <Badge variant="outline" className="bg-terrii-warning/20 text-terrii-warning">
                                <Pin className="h-3 w-3 mr-1" />
                                Pinned
                              </Badge>
                            )}
                            {post.status === 'pending_approval' && (
                              <Badge variant="outline" className="bg-terrii-warning/20 text-terrii-warning">
                                <Clock className="h-3 w-3 mr-1" />
                                Pending
                              </Badge>
                            )}
                            <span className="text-xs text-terrii-text-light">
                              {formatDistanceToNow(post.timestamp, { addSuffix: true })}
                            </span>
                          </div>
                          
                          {userRole === 'staff' && (
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={(e) => e.stopPropagation()}
                                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handlePostAction(post.id, 'pin')}>
                                  <Pin className="h-4 w-4 mr-2" />
                                  {post.isPinned ? 'Unpin' : 'Pin'} Post
                                </DropdownMenuItem>
                                {post.status === 'pending_approval' && (
                                  <DropdownMenuItem onClick={() => handlePostAction(post.id, 'approve')}>
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Approve Post
                                  </DropdownMenuItem>
                                )}
                                <DropdownMenuItem onClick={() => handlePostAction(post.id, 'edit')}>
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit Post
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handlePostAction(post.id, 'copy')}>
                                  <Copy className="h-4 w-4 mr-2" />
                                  Copy Link
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => handlePostAction(post.id, 'archive')}>
                                  <Archive className="h-4 w-4 mr-2" />
                                  Archive
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handlePostAction(post.id, 'delete')}
                                  className="text-terrii-error"
                                >
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          )}
                        </div>
                        
                        <h2 className="font-semibold text-terrii-text-primary mb-2">
                          {post.title}
                        </h2>
                        
                        <p className="text-terrii-text-secondary mb-3 line-clamp-2">
                          {post.content}
                        </p>
                        
                        {/* Attachments Preview */}
                        {post.attachments.length > 0 && (
                          <div className="mb-3">
                            <div className="flex items-center space-x-2">
                              <ImageIcon className="h-4 w-4 text-terrii-text-light" />
                              <span className="text-sm text-terrii-text-light">
                                {post.attachments.length} attachment{post.attachments.length > 1 ? 's' : ''}
                              </span>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePostAction(post.id, 'like');
                              }}
                              className={`transition-colors ${
                                post.reactions.hasLiked ? 'text-terrii-info' : 'text-terrii-text-light hover:text-terrii-info'
                              }`}
                            >
                              <ThumbsUp className={`h-4 w-4 mr-1 ${post.reactions.hasLiked ? 'fill-current' : ''}`} />
                              {post.reactions.likes.count}
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePostAction(post.id, 'heart');
                              }}
                              className={`transition-colors ${
                                post.reactions.hasHearted ? 'text-terrii-error' : 'text-terrii-text-light hover:text-terrii-error'
                              }`}
                            >
                              <Heart className={`h-4 w-4 mr-1 ${post.reactions.hasHearted ? 'fill-current' : ''}`} />
                              {post.reactions.hearts.count}
                            </Button>
                            <span className="flex items-center text-sm text-terrii-text-light">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              {post.replies.length}
                            </span>
                            <span className="flex items-center text-sm text-terrii-text-light">
                              <Eye className="h-4 w-4 mr-1" />
                              {post.views}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {post.category}
                            </Badge>
                            {post.tags.slice(0, 2).map(tag => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {post.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{post.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// Enhanced Create Post Dialog Component
function CreatePostDialog({ 
  isOpen, 
  onOpenChange, 
  onCreatePost, 
  editingPost,
  onEditComplete 
}: { 
  isOpen: boolean; 
  onOpenChange: (open: boolean) => void; 
  onCreatePost: (post: any) => void;
  editingPost?: any;
  onEditComplete?: () => void;
}) {
  const [title, setTitle] = useState(editingPost?.title || '');
  const [content, setContent] = useState(editingPost?.content || '');
  const [category, setCategory] = useState(editingPost?.category || '');
  const [allowReplies, setAllowReplies] = useState(editingPost?.allowReplies ?? true);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [tags, setTags] = useState<string[]>(editingPost?.tags || []);
  const [isPinned, setIsPinned] = useState(editingPost?.isPinned || false);
  const [postType, setPostType] = useState('text');
  const [eventDetails, setEventDetails] = useState({
    date: '',
    time: '',
    location: ''
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const postData = {
      id: editingPost?.id || Date.now().toString(),
      title,
      content,
      category,
      allowReplies,
      tags,
      attachments: attachments.map(file => ({
        id: Date.now().toString(),
        name: file.name,
        type: file.type.startsWith('image/') ? 'image' : 'file',
        url: URL.createObjectURL(file)
      })),
      isPinned,
      postType,
      eventDetails: postType === 'event' ? eventDetails : undefined
    };
    
    onCreatePost(postData);
    onEditComplete?.();
    
    // Reset form
    setTitle('');
    setContent('');
    setCategory('');
    setAllowReplies(true);
    setAttachments([]);
    setTags([]);
    setIsPinned(false);
    setPostType('text');
    setEventDetails({ date: '', time: '', location: '' });
    onOpenChange(false);
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files);
      setAttachments(prev => [...prev, ...newFiles]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary">
          <Plus className="h-4 w-4 mr-2" />
          New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{editingPost ? 'Edit Post' : 'Create New Post'}</DialogTitle>
          <DialogDescription>
            Share updates, ask questions, or start a conversation with the community.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Post Type Selection */}
          <div>
            <Label>Post Type</Label>
            <RadioGroup value={postType} onValueChange={setPostType} className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="text" id="text" />
                <Label htmlFor="text">Text Post</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="event" id="event" />
                <Label htmlFor="event">Event</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="poll" id="poll" />
                <Label htmlFor="poll">Poll</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label htmlFor="title">Post Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title..."
              required
            />
          </div>
          
          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your thoughts..."
              className="min-h-[120px]"
              required
            />
          </div>
          
          {/* Event Details */}
          {postType === 'event' && (
            <div className="space-y-3 p-4 bg-terrii-blue/10 rounded-lg">
              <h4 className="font-medium">Event Details</h4>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={eventDetails.date}
                    onChange={(e) => setEventDetails(prev => ({ ...prev, date: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={eventDetails.time}
                    onChange={(e) => setEventDetails(prev => ({ ...prev, time: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={eventDetails.location}
                  onChange={(e) => setEventDetails(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="Event location..."
                />
              </div>
            </div>
          )}
          
          <div>
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="events">Events</SelectItem>
                <SelectItem value="appreciation">Appreciation</SelectItem>
                <SelectItem value="questions">Questions</SelectItem>
                <SelectItem value="updates">Updates</SelectItem>
                <SelectItem value="medical">Medical</SelectItem>
                <SelectItem value="activities">Activities</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="tags">Tags (Optional)</Label>
            <Input
              id="tags"
              placeholder="Add tags separated by commas"
              value={tags.join(', ')}
              onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()).filter(Boolean))}
            />
          </div>
          
          {/* File Attachments */}
          <div>
            <Label>Attachments</Label>
            <div className="space-y-3">
              <div className="border-2 border-dashed border-terrii-green/30 rounded-lg p-4 text-center">
                <Camera className="h-8 w-8 mx-auto mb-2 text-terrii-text-light" />
                <p className="text-sm text-terrii-text-secondary mb-2">Add photos or files</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*,.pdf,.doc,.docx"
                  onChange={(e) => handleFileUpload(e.target.files)}
                  className="hidden"
                />
                <Button 
                  type="button"
                  variant="outline" 
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Choose Files
                </Button>
              </div>

              {attachments.length > 0 && (
                <div className="space-y-2">
                  {attachments.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted rounded border">
                      <div className="flex items-center space-x-2">
                        {file.type.startsWith('image/') ? (
                          <ImageIcon className="h-4 w-4 text-terrii-info" />
                        ) : (
                          <FileText className="h-4 w-4 text-terrii-text-secondary" />
                        )}
                        <span className="text-sm text-terrii-text-primary">{file.name}</span>
                        <span className="text-xs text-terrii-text-light">
                          ({(file.size / 1024).toFixed(1)} KB)
                        </span>
                      </div>
                      <Button
                        type="button"
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
              )}
            </div>
          </div>
          
          {/* Post Settings */}
          <div className="space-y-3 p-4 bg-terrii-green/10 rounded-lg">
            <h4 className="font-medium">Post Settings</h4>
            <div className="flex items-center justify-between">
              <Label htmlFor="allow-replies">Allow replies to this post</Label>
              <Switch
                id="allow-replies"
                checked={allowReplies}
                onCheckedChange={setAllowReplies}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="pin-post">Pin this post</Label>
              <Switch
                id="pin-post"
                checked={isPinned}
                onCheckedChange={setIsPinned}
              />
            </div>
          </div>
          
          <div className="flex justify-end space-x-2 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={!title.trim() || !content.trim()}
              className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
            >
              {editingPost ? 'Update Post' : 'Create Post'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}