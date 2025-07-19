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
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Checkbox } from '../ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { MomentCard } from '../MomentCard';
import { CopilotTrigger } from '../copilot/CopilotTrigger';
import { TERRiiCopilot } from '../copilot/TERRiiCopilot';
import { 
  Plus, Camera, Heart, MessageSquare, Share2, Filter, Search, Calendar, Users, Upload, X,
  Edit, Trash2, Eye, Archive, Clock, CheckCircle, AlertCircle, Image as ImageIcon,
  Video, FileText, Tag, Settings, BarChart3, Send, Copy, Download, Star,
  Globe, Lock, UserCheck, Zap, Target, TrendingUp
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface SharedMomentsScreenProps {
  onCreateMoment: (momentData: any) => void;
  onEditMoment?: (momentId: string, updates: any) => void;
  onDeleteMoment?: (momentId: string) => void;
  onApproveMoment?: (momentId: string) => void;
  onArchiveMoment?: (momentId: string) => void;
}

export function SharedMomentsScreen({ 
  onCreateMoment, 
  onEditMoment, 
  onDeleteMoment, 
  onApproveMoment, 
  onArchiveMoment 
}: SharedMomentsScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'feed' | 'grid'>('feed');
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showCopilot, setShowCopilot] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [selectedMoments, setSelectedMoments] = useState<string[]>([]);
  const [selectedMomentDetail, setSelectedMomentDetail] = useState<string | null>(null);
  const [showComments, setShowComments] = useState<string | null>(null);
  const [showShareDialog, setShowShareDialog] = useState<string | null>(null);
  const [editingMoment, setEditingMoment] = useState<string | null>(null);
  
  // Create moment form state
  const [momentTitle, setMomentTitle] = useState('');
  const [momentContent, setMomentContent] = useState('');
  const [selectedResident, setSelectedResident] = useState('');
  const [activityType, setActivityType] = useState('');
  const [momentCategory, setMomentCategory] = useState('');
  const [shareWithFamily, setShareWithFamily] = useState(true);
  const [requiresApproval, setRequiresApproval] = useState(false);
  const [momentTags, setMomentTags] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [newComment, setNewComment] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Moment templates
  const momentTemplates = [
    {
      id: 'daily-activity',
      title: 'Daily Activity Highlight',
      category: 'Activity',
      emoji: '🎨',
      template: '[Resident] had a wonderful time during [activity] today! They [specific action/response] and seemed to really enjoy [particular aspect]. Their [mood/engagement level] was particularly heartwarming to see.'
    },
    {
      id: 'meal-joy',
      title: 'Mealtime Joy',
      category: 'Meal',
      emoji: '🍽️',
      template: '[Resident] really enjoyed their [meal] today! They particularly loved the [dish] and even asked for seconds. It was lovely to see them [interaction with others/memory shared] during the meal.'
    },
    {
      id: 'social-connection',
      title: 'Social Connection',
      category: 'Social',
      emoji: '👥',
      template: '[Resident] had a beautiful moment connecting with [other person/group]. They [shared story/played game/had conversation] and their face just lit up. These connections mean so much.'
    },
    {
      id: 'wellness-milestone',
      title: 'Wellness Milestone',
      category: 'Wellness',
      emoji: '💪',
      template: '[Resident] reached a wonderful milestone today in their [physical/mental/emotional] wellness journey. They [achievement] and we could see how proud they felt. Small victories that mean everything!'
    },
    {
      id: 'memory-moment',
      title: 'Beautiful Memory',
      category: 'Milestone',
      emoji: '💭',
      template: '[Resident] shared the most beautiful memory today about [topic]. Their eyes sparkled as they told us about [memory details]. These precious moments of clarity are gifts we treasure.'
    }
  ];

  // Mock data - in real app would come from API
  const [moments, setMoments] = useState([
    {
      id: '1',
      title: 'Beautiful Watercolor Art',
      description: 'Margaret spent the afternoon creating a stunning watercolor painting of flowers. Her concentration and joy while painting was wonderful to see!',
      emoji: '🎨',
      category: 'Activity',
      status: 'published',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      author: {
        name: 'Sarah Johnson',
        role: 'Care Assistant',
        photo: null
      },
      resident: {
        name: 'Margaret Thompson',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face'
      },
      likes: 12,
      comments: [
        {
          id: 'c1',
          author: 'Susan Thompson',
          role: 'Family Member',
          content: 'Thank you for sharing this! Mom always loved painting. This brings back so many memories.',
          timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
          likes: 3
        },
        {
          id: 'c2',
          author: 'Sarah Johnson',
          role: 'Care Assistant',
          content: 'She was so focused and peaceful while painting. I could tell it brought her such joy!',
          timestamp: new Date(Date.now() - 30 * 60 * 1000),
          likes: 1
        }
      ],
      hasLiked: false,
      isSharedWithFamily: true,
      tags: ['art', 'creativity', 'peaceful'],
      photos: [
        {
          id: 'p1',
          url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop',
          caption: 'Margaret\'s beautiful watercolor painting'
        }
      ],
      engagement: {
        views: 24,
        familyViews: 8,
        shares: 2
      }
    },
    {
      id: '2',
      title: 'Garden Walk & Memories',
      description: 'James enjoyed a peaceful walk in the rose garden today. He shared beautiful memories about the garden he used to tend with his late wife.',
      emoji: '🌺',
      category: 'Wellness',
      status: 'published',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      author: {
        name: 'Maria Rodriguez',
        role: 'Activities Coordinator',
        photo: null
      },
      resident: {
        name: 'James Mitchell',
        photo: null
      },
      likes: 8,
      comments: [
        {
          id: 'c3',
          author: 'Mary Mitchell',
          role: 'Family Member',
          content: 'He used to spend hours in our garden. I\'m so glad he can still enjoy the roses.',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          likes: 5
        }
      ],
      hasLiked: true,
      isSharedWithFamily: true,
      tags: ['garden', 'memories', 'outdoors'],
      photos: [],
      engagement: {
        views: 18,
        familyViews: 6,
        shares: 1
      }
    },
    {
      id: '3',
      title: 'Music Therapy Joy',
      description: 'Dorothy lit up during today\'s music therapy session! She sang along to several songs from the 1940s and even got up to dance a little.',
      emoji: '🎵',
      category: 'Activity',
      status: 'published',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      author: {
        name: 'Kate Wilson',
        role: 'Music Therapist',
        photo: null
      },
      resident: {
        name: 'Dorothy Williams',
        photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop&crop=face'
      },
      likes: 15,
      comments: [
        {
          id: 'c4',
          author: 'Robert Williams',
          role: 'Family Member',
          content: 'She always loved to dance! Thank you for bringing that joy back to her.',
          timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
          likes: 2
        }
      ],
      hasLiked: false,
      isSharedWithFamily: true,
      tags: ['music', 'dancing', 'joy'],
      photos: [
        {
          id: 'p2',
          url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
          caption: 'Dorothy enjoying the music therapy session'
        }
      ],
      engagement: {
        views: 31,
        familyViews: 12,
        shares: 3
      }
    },
    {
      id: '4',
      title: 'New Friendship Blossoming',
      description: 'Robert and Eleanor discovered they both love chess! They spent the morning playing and sharing stories. It\'s wonderful to see new friendships forming.',
      emoji: '👥',
      category: 'Social',
      status: 'pending_approval',
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
      author: {
        name: 'Mike Peterson',
        role: 'Social Worker',
        photo: null
      },
      resident: {
        name: 'Robert Chen',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
      },
      likes: 0,
      comments: [],
      hasLiked: false,
      isSharedWithFamily: false,
      tags: ['friendship', 'chess', 'social'],
      photos: [],
      engagement: {
        views: 5,
        familyViews: 0,
        shares: 0
      }
    }
  ]);

  const residents = [
    { id: '1', name: 'Margaret Thompson' },
    { id: '2', name: 'James Mitchell' },
    { id: '3', name: 'Dorothy Williams' },
    { id: '4', name: 'Robert Chen' },
    { id: '5', name: 'Eleanor Rodriguez' }
  ];

  const categories = [
    { value: 'all', label: 'All Categories', count: moments.length },
    { value: 'activity', label: 'Activity', count: moments.filter(m => m.category === 'Activity').length },
    { value: 'wellness', label: 'Wellness', count: moments.filter(m => m.category === 'Wellness').length },
    { value: 'social', label: 'Social', count: moments.filter(m => m.category === 'Social').length },
    { value: 'meal', label: 'Meal', count: moments.filter(m => m.category === 'Meal').length },
    { value: 'milestone', label: 'Milestone', count: moments.filter(m => m.category === 'Milestone').length }
  ];

  // Filter and sort moments
  const filteredMoments = moments.filter(moment => {
    const matchesSearch = searchQuery === '' || 
      moment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      moment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      moment.resident.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      moment.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = filterCategory === 'all' || moment.category.toLowerCase() === filterCategory.toLowerCase();
    const matchesStatus = filterStatus === 'all' || moment.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.timestamp.getTime() - a.timestamp.getTime();
      case 'oldest':
        return a.timestamp.getTime() - b.timestamp.getTime();
      case 'most_liked':
        return b.likes - a.likes;
      case 'most_commented':
        return b.comments.length - a.comments.length;
      case 'most_viewed':
        return b.engagement.views - a.engagement.views;
      default:
        return 0;
    }
  });

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files).filter(file => 
        file.type.startsWith('image/') || file.type.startsWith('video/')
      );
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeUploadedFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUseTemplate = (template: any) => {
    setMomentTitle(template.title);
    setMomentCategory(template.category.toLowerCase());
    const populatedContent = template.template
      .replace('[Resident]', selectedResident || '[Resident]')
      .replace('[activity]', activityType || '[activity]');
    setMomentContent(populatedContent);
    setShowTemplates(false);
  };

  const handleCreateMoment = () => {
    const momentData = {
      id: Date.now().toString(),
      title: momentTitle,
      description: momentContent,
      category: momentCategory,
      resident: selectedResident,
      activity: activityType,
      shareWithFamily,
      requiresApproval,
      tags: momentTags,
      files: uploadedFiles,
      status: requiresApproval ? 'pending_approval' : 'published'
    };
    
    console.log('Creating moment:', momentData);
    onCreateMoment(momentData);
    
    // Reset form
    setMomentTitle('');
    setMomentContent('');
    setSelectedResident('');
    setActivityType('');
    setMomentCategory('');
    setShareWithFamily(true);
    setRequiresApproval(false);
    setMomentTags([]);
    setUploadedFiles([]);
    setShowCreateDialog(false);
  };

  const handleLikeMoment = (momentId: string) => {
    setMoments(prev => prev.map(moment => {
      if (moment.id === momentId) {
        return {
          ...moment,
          likes: moment.hasLiked ? moment.likes - 1 : moment.likes + 1,
          hasLiked: !moment.hasLiked
        };
      }
      return moment;
    }));
  };

  const handleCommentMoment = (momentId: string, comment: string) => {
    if (!comment.trim()) return;
    
    const newComment = {
      id: `c${Date.now()}`,
      author: 'Sarah Johnson',
      role: 'Care Assistant',
      content: comment,
      timestamp: new Date(),
      likes: 0
    };
    
    setMoments(prev => prev.map(moment => {
      if (moment.id === momentId) {
        return {
          ...moment,
          comments: [...moment.comments, newComment]
        };
      }
      return moment;
    }));
    
    setNewComment('');
  };

  const handleShareMoment = (momentId: string) => {
    setShowShareDialog(momentId);
  };

  const handleEditMoment = (momentId: string) => {
    const moment = moments.find(m => m.id === momentId);
    if (moment) {
      setMomentTitle(moment.title);
      setMomentContent(moment.description);
      setMomentCategory(moment.category.toLowerCase());
      setEditingMoment(momentId);
      setShowCreateDialog(true);
    }
  };

  const handleDeleteMoment = (momentId: string) => {
    setMoments(prev => prev.filter(m => m.id !== momentId));
    onDeleteMoment?.(momentId);
  };

  const handleApproveMoment = (momentId: string) => {
    setMoments(prev => prev.map(moment => {
      if (moment.id === momentId) {
        return { ...moment, status: 'published', isSharedWithFamily: true };
      }
      return moment;
    }));
    onApproveMoment?.(momentId);
  };

  const handleBulkAction = (action: string) => {
    console.log(`Bulk ${action} for moments:`, selectedMoments);
    
    switch (action) {
      case 'approve':
        setMoments(prev => prev.map(moment => 
          selectedMoments.includes(moment.id) 
            ? { ...moment, status: 'published', isSharedWithFamily: true }
            : moment
        ));
        break;
      case 'archive':
        setMoments(prev => prev.map(moment => 
          selectedMoments.includes(moment.id) 
            ? { ...moment, status: 'archived' }
            : moment
        ));
        break;
      case 'delete':
        setMoments(prev => prev.filter(moment => !selectedMoments.includes(moment.id)));
        break;
    }
    
    setSelectedMoments([]);
    setShowBulkActions(false);
  };

  const handleCopilotSuggestion = (suggestion: string) => {
    setMomentContent(suggestion);
  };

  const openCopilotWithContext = () => {
    setShowCopilot(true);
  };

  const selectedMoment = selectedMomentDetail ? moments.find(m => m.id === selectedMomentDetail) : null;
  const shareDialogMoment = showShareDialog ? moments.find(m => m.id === showShareDialog) : null;

  return (
    <div className="h-full bg-terrii-blue/5">
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-terrii-text-primary">Shared Moments</h1>
            <p className="text-terrii-text-secondary">Capture and share meaningful moments</p>
          </div>
          
          <div className="flex items-center space-x-2">
            {showBulkActions && (
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBulkAction('approve')}
                  disabled={selectedMoments.length === 0}
                >
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Approve ({selectedMoments.length})
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBulkAction('archive')}
                  disabled={selectedMoments.length === 0}
                >
                  <Archive className="h-4 w-4 mr-1" />
                  Archive ({selectedMoments.length})
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
              <CheckCircle className="h-4 w-4 mr-1" />
              Select
            </Button>
            
            <Dialog open={showTemplates} onOpenChange={setShowTemplates}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Templates
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Moment Templates</DialogTitle>
                  <DialogDescription>
                    Quick-start templates for common moments and activities
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {momentTemplates.map(template => (
                    <Card key={template.id} className="cursor-pointer hover:bg-terrii-blue/10" onClick={() => handleUseTemplate(template)}>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-lg">{template.emoji}</span>
                          <h4 className="font-medium text-terrii-text-primary">{template.title}</h4>
                          <Badge variant="outline" className="text-xs">{template.category}</Badge>
                        </div>
                        <p className="text-sm text-terrii-text-secondary line-clamp-3">{template.template}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
            
            <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
              <DialogTrigger asChild>
                <Button className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Moment
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{editingMoment ? 'Edit Moment' : 'Create New Moment'}</DialogTitle>
                  <DialogDescription>
                    Capture and share a meaningful moment from a resident's day with their family.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4">
                  {/* Resident Selection */}
                  <div>
                    <Label htmlFor="resident">Resident</Label>
                    <Select value={selectedResident} onValueChange={setSelectedResident}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a resident..." />
                      </SelectTrigger>
                      <SelectContent>
                        {residents.map(resident => (
                          <SelectItem key={resident.id} value={resident.name}>
                            {resident.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Activity Type */}
                  <div>
                    <Label htmlFor="activity">Activity Type</Label>
                    <Select value={activityType} onValueChange={setActivityType}>
                      <SelectTrigger>
                        <SelectValue placeholder="What activity was this?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="art-therapy">Art Therapy</SelectItem>
                        <SelectItem value="music-therapy">Music Therapy</SelectItem>
                        <SelectItem value="physical-therapy">Physical Therapy</SelectItem>
                        <SelectItem value="social-time">Social Time</SelectItem>
                        <SelectItem value="garden-time">Garden Time</SelectItem>
                        <SelectItem value="meal-time">Meal Time</SelectItem>
                        <SelectItem value="family-visit">Family Visit</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Title */}
                  <div>
                    <Label htmlFor="title">Moment Title</Label>
                    <Input
                      id="title"
                      value={momentTitle}
                      onChange={(e) => setMomentTitle(e.target.value)}
                      placeholder="Give this moment a title..."
                    />
                  </div>

                  {/* Content with Copilot */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label htmlFor="content">Share the Story</Label>
                      <CopilotTrigger
                        onClick={openCopilotWithContext}
                        tooltip="Get AI help writing this moment"
                        size="sm"
                      />
                    </div>
                    <Textarea
                      id="content"
                      value={momentContent}
                      onChange={(e) => setMomentContent(e.target.value)}
                      placeholder="Describe this special moment..."
                      className="min-h-[100px]"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={momentCategory} onValueChange={setMomentCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Categorize this moment..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="activity">Activity</SelectItem>
                        <SelectItem value="wellness">Wellness</SelectItem>
                        <SelectItem value="social">Social</SelectItem>
                        <SelectItem value="meal">Meal</SelectItem>
                        <SelectItem value="milestone">Milestone</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Photo/Media Upload */}
                  <div>
                    <Label>Photos & Media</Label>
                    <div className="space-y-3">
                      <div className="border-2 border-dashed border-terrii-green/30 rounded-lg p-4 text-center">
                        <Camera className="h-8 w-8 mx-auto mb-2 text-terrii-text-light" />
                        <p className="text-sm text-terrii-text-secondary mb-2">Add photos or videos to this moment</p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          accept="image/*,video/*"
                          onChange={(e) => handleFileUpload(e.target.files)}
                          className="hidden"
                        />
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Choose Files
                        </Button>
                      </div>

                      {/* File Preview */}
                      {uploadedFiles.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="relative group">
                              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                                {file.type.startsWith('image/') ? (
                                  <ImageIcon className="h-8 w-8 text-terrii-text-light" />
                                ) : (
                                  <Video className="h-8 w-8 text-terrii-text-light" />
                                )}
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="absolute top-1 right-1 h-6 w-6 p-0 bg-terrii-error text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => removeUploadedFile(index)}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                              <p className="text-xs text-terrii-text-light mt-1 truncate">{file.name}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <Label htmlFor="tags">Tags (Optional)</Label>
                    <Input
                      id="tags"
                      placeholder="Add tags separated by commas (e.g., art, creative, peaceful)"
                      value={momentTags.join(', ')}
                      onChange={(e) => setMomentTags(e.target.value.split(',').map(tag => tag.trim()).filter(Boolean))}
                    />
                  </div>

                  {/* Privacy & Sharing Settings */}
                  <div className="space-y-3 p-4 bg-terrii-blue/10 rounded-lg">
                    <h4 className="font-medium text-terrii-text-primary">Privacy & Sharing</h4>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="share-family">Share with Family</Label>
                        <p className="text-xs text-terrii-text-secondary">Allow family members to see this moment</p>
                      </div>
                      <Switch
                        id="share-family"
                        checked={shareWithFamily}
                        onCheckedChange={setShareWithFamily}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="requires-approval">Requires Approval</Label>
                        <p className="text-xs text-terrii-text-secondary">Moment needs approval before sharing</p>
                      </div>
                      <Switch
                        id="requires-approval"
                        checked={requiresApproval}
                        onCheckedChange={setRequiresApproval}
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end space-x-2 pt-4 border-t">
                    <Button variant="outline" onClick={() => {
                      setShowCreateDialog(false);
                      setEditingMoment(null);
                      // Reset form
                      setMomentTitle('');
                      setMomentContent('');
                      setSelectedResident('');
                      setActivityType('');
                      setMomentCategory('');
                      setUploadedFiles([]);
                      setMomentTags([]);
                    }}>
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleCreateMoment}
                      disabled={!selectedResident || !momentContent || !momentTitle}
                      className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
                    >
                      {editingMoment ? 'Update Moment' : 'Create Moment'}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Analytics Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <Camera className="h-5 w-5 text-terrii-success" />
              <div>
                <p className="text-sm text-terrii-text-secondary">Total Moments</p>
                <p className="text-xl font-semibold text-terrii-text-primary">{moments.length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-terrii-error" />
              <div>
                <p className="text-sm text-terrii-text-secondary">Total Likes</p>
                <p className="text-xl font-semibold text-terrii-text-primary">
                  {moments.reduce((sum, m) => sum + m.likes, 0)}
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-terrii-info" />
              <div>
                <p className="text-sm text-terrii-text-secondary">Comments</p>
                <p className="text-xl font-semibold text-terrii-text-primary">
                  {moments.reduce((sum, m) => sum + m.comments.length, 0)}
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <Eye className="h-5 w-5 text-terrii-warning" />
              <div>
                <p className="text-sm text-terrii-text-secondary">Family Views</p>
                <p className="text-xl font-semibold text-terrii-text-primary">
                  {moments.reduce((sum, m) => sum + m.engagement.familyViews, 0)}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-terrii-text-light" />
              <Input
                placeholder="Search moments, residents, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
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
            
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="pending_approval">Pending Approval</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="most_liked">Most Liked</SelectItem>
                <SelectItem value="most_commented">Most Commented</SelectItem>
                <SelectItem value="most_viewed">Most Viewed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <Badge variant="outline" className="bg-terrii-success/20 text-terrii-success">
                {filteredMoments.length} Moments
              </Badge>
              {moments.filter(m => m.status === 'pending_approval').length > 0 && (
                <Badge variant="outline" className="bg-terrii-warning/20 text-terrii-warning">
                  {moments.filter(m => m.status === 'pending_approval').length} Pending Approval
                </Badge>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode(viewMode === 'feed' ? 'grid' : 'feed')}
              >
                {viewMode === 'feed' ? 'Grid View' : 'Feed View'}
              </Button>
            </div>
          </div>
        </div>

        {/* Moments Feed */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}>
          {filteredMoments.length === 0 ? (
            <div className="text-center py-12 col-span-full">
              <Camera className="h-16 w-16 text-terrii-text-light mx-auto mb-4" />
              <h3 className="text-lg font-medium text-terrii-text-primary mb-2">No moments found</h3>
              <p className="text-terrii-text-secondary mb-4">
                {searchQuery || filterCategory !== 'all' || filterStatus !== 'all'
                  ? 'Try adjusting your search criteria or filters.'
                  : 'Start capturing beautiful moments to share with families.'
                }
              </p>
              {!searchQuery && filterCategory === 'all' && filterStatus === 'all' && (
                <Button 
                  onClick={() => setShowCreateDialog(true)}
                  className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create First Moment
                </Button>
              )}
            </div>
          ) : (
            filteredMoments.map((moment) => (
              <div key={moment.id} className="relative">
                {showBulkActions && (
                  <div className="absolute top-4 left-4 z-10">
                    <Checkbox
                      checked={selectedMoments.includes(moment.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedMoments(prev => [...prev, moment.id]);
                        } else {
                          setSelectedMoments(prev => prev.filter(id => id !== moment.id));
                        }
                      }}
                      className="bg-white border-2"
                    />
                  </div>
                )}
                <MomentCard
                  moment={moment}
                  onLike={handleLikeMoment}
                  onComment={() => setShowComments(moment.id)}
                  onShare={handleShareMoment}
                  onEdit={handleEditMoment}
                  onDelete={handleDeleteMoment}
                  onApprove={handleApproveMoment}
                  onViewDetail={() => setSelectedMomentDetail(moment.id)}
                  viewMode={viewMode}
                />
              </div>
            ))
          )}
        </div>

        {/* Comment Dialog */}
        <Dialog open={!!showComments} onOpenChange={() => setShowComments(null)}>
          <DialogContent className="max-w-2xl">
            {showComments && (() => {
              const moment = moments.find(m => m.id === showComments);
              if (!moment) return null;
              
              return (
                <>
                  <DialogHeader>
                    <DialogTitle>Comments on "{moment.title}"</DialogTitle>
                    <DialogDescription>
                      Join the conversation about this moment
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {moment.comments.length === 0 ? (
                      <div className="text-center py-8">
                        <MessageSquare className="h-12 w-12 text-terrii-text-light mx-auto mb-2" />
                        <p className="text-terrii-text-secondary">No comments yet. Be the first to share your thoughts!</p>
                      </div>
                    ) : (
                      moment.comments.map(comment => (
                        <div key={comment.id} className="flex space-x-3 p-3 bg-terrii-blue/10 rounded-lg">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-terrii-green text-terrii-text-primary text-xs">
                              {getInitials(comment.author)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-medium text-sm text-terrii-text-primary">{comment.author}</span>
                              <Badge variant="outline" className="text-xs">{comment.role}</Badge>
                              <span className="text-xs text-terrii-text-light">
                                {formatDistanceToNow(comment.timestamp, { addSuffix: true })}
                              </span>
                            </div>
                            <p className="text-sm text-terrii-text-secondary">{comment.content}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Button variant="ghost" size="sm" className="h-6 text-xs">
                                <Heart className="h-3 w-3 mr-1" />
                                {comment.likes}
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  
                  <div className="flex space-x-2 pt-4 border-t">
                    <Input
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleCommentMoment(showComments, newComment)}
                      className="flex-1"
                    />
                    <Button 
                      onClick={() => handleCommentMoment(showComments, newComment)}
                      disabled={!newComment.trim()}
                      className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </>
              );
            })()}
          </DialogContent>
        </Dialog>

        {/* Share Dialog */}
        <Dialog open={!!showShareDialog} onOpenChange={() => setShowShareDialog(null)}>
          <DialogContent>
            {shareDialogMoment && (
              <>
                <DialogHeader>
                  <DialogTitle>Share "{shareDialogMoment.title}"</DialogTitle>
                  <DialogDescription>
                    Choose how you'd like to share this moment
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="flex items-center space-x-2">
                      <Copy className="h-4 w-4" />
                      <span>Copy Link</span>
                    </Button>
                    <Button variant="outline" className="flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </Button>
                    <Button variant="outline" className="flex items-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </Button>
                    <Button variant="outline" className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <span>Share Publicly</span>
                    </Button>
                  </div>
                  
                  <div className="p-3 bg-terrii-blue/10 rounded-lg">
                    <h4 className="font-medium text-terrii-text-primary mb-2">Family Access</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-terrii-text-secondary">
                        Currently {shareDialogMoment.isSharedWithFamily ? 'shared' : 'not shared'} with family
                      </span>
                      <Switch checked={shareDialogMoment.isSharedWithFamily} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Moment Detail Dialog */}
        <Dialog open={!!selectedMomentDetail} onOpenChange={() => setSelectedMomentDetail(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedMoment && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <DialogTitle className="flex items-center space-x-2">
                        {selectedMoment.emoji && <span>{selectedMoment.emoji}</span>}
                        <span>{selectedMoment.title}</span>
                      </DialogTitle>
                      <DialogDescription>
                        {selectedMoment.resident.name} • {formatDistanceToNow(selectedMoment.timestamp, { addSuffix: true })}
                      </DialogDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={
                        selectedMoment.status === 'published' ? 'bg-terrii-success/20 text-terrii-success' :
                        selectedMoment.status === 'pending_approval' ? 'bg-terrii-warning/20 text-terrii-warning' :
                        'bg-terrii-text-light/20 text-terrii-text-light'
                      }>
                        {selectedMoment.status.replace('_', ' ').toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Moment Content */}
                  <div>
                    <p className="text-terrii-text-secondary leading-relaxed">{selectedMoment.description}</p>
                  </div>
                  
                  {/* Photos */}
                  {selectedMoment.photos && selectedMoment.photos.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-terrii-text-primary">Photos</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedMoment.photos.map(photo => (
                          <div key={photo.id} className="space-y-2">
                            <img 
                              src={photo.url} 
                              alt={photo.caption || selectedMoment.title}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            {photo.caption && (
                              <p className="text-sm text-terrii-text-light">{photo.caption}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Tags */}
                  {selectedMoment.tags.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-terrii-text-primary">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMoment.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Engagement Stats */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-terrii-blue/10 rounded-lg">
                    <div className="text-center">
                      <p className="text-lg font-semibold text-terrii-text-primary">{selectedMoment.likes}</p>
                      <p className="text-xs text-terrii-text-secondary">Likes</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-terrii-text-primary">{selectedMoment.comments.length}</p>
                      <p className="text-xs text-terrii-text-secondary">Comments</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-terrii-text-primary">{selectedMoment.engagement.views}</p>
                      <p className="text-xs text-terrii-text-secondary">Views</p>
                    </div>
                  </div>
                  
                  {/* Comments Section */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-terrii-text-primary">Comments ({selectedMoment.comments.length})</h4>
                    {selectedMoment.comments.map(comment => (
                      <div key={comment.id} className="flex space-x-3 p-3 bg-white rounded-lg border">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-terrii-green text-terrii-text-primary text-xs">
                            {getInitials(comment.author)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-sm text-terrii-text-primary">{comment.author}</span>
                            <Badge variant="outline" className="text-xs">{comment.role}</Badge>
                            <span className="text-xs text-terrii-text-light">
                              {formatDistanceToNow(comment.timestamp, { addSuffix: true })}
                            </span>
                          </div>
                          <p className="text-sm text-terrii-text-secondary">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* TERRii Copilot Modal */}
        <TERRiiCopilot
          isOpen={showCopilot}
          onClose={() => setShowCopilot(false)}
          context="moment"
          residentName={selectedResident || 'the resident'}
          activityType={activityType}
          onUseSuggestion={handleCopilotSuggestion}
        />
      </div>
    </div>
  );
}