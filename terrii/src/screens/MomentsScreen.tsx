import { useState, useEffect } from 'react';
import React from 'react';
import { toast } from 'sonner';
import { 
  Plus, Filter, Search, Calendar, MessageSquare, Heart, Share2,
  Edit, Trash2, Archive, CheckCircle, AlertCircle, MessageCircle, Users
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { MomentCard } from '../components/moments/MomentCard';
import type { Moment } from '../components/moments/MomentCard';
import { CreateMomentDialog } from '../components/moments/CreateMomentDialog';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../components/ui/Dialog';
import { Textarea } from '../components/ui/Textarea';
import { useAuth } from '../contexts/AuthContext';
import { 
  listMoments, 
  createMoment, 
  updateMoment, 
  deleteMoment, 
  toggleMomentLike,
  addMomentComment,
  updateMomentPrivacy,
  getUserById
} from '../lib/terriiApi';
import { listResidents } from '../lib/terriiApi';

export function MomentsScreen() {
  const { terriiProfile, user } = useAuth();
  const [moments, setMoments] = useState<any[]>([]);
  const [residents, setResidents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [editingMoment, setEditingMoment] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showComments, setShowComments] = useState<string | null>(null);
  const [newComment, setNewComment] = useState('');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'activity', label: 'Activity' },
    { value: 'wellness', label: 'Wellness' },
    { value: 'social', label: 'Social' },
    { value: 'meal', label: 'Meal' },
    { value: 'milestone', label: 'Milestone' }
  ];

  // Load moments and residents on component mount
  useEffect(() => {
    loadMoments();
    loadResidents();
  }, [terriiProfile]);

  const loadMoments = async () => {
    if (!terriiProfile?.careHomeID) return;
    
    try {
      setLoading(true);
      console.log('Loading moments for care home:', terriiProfile.careHomeID);
      const momentsData = await listMoments(terriiProfile.careHomeID);
      console.log('Raw moments data from API:', momentsData);
      
      // Get unique user IDs from moments to fetch user names
      const userIds = [...new Set(momentsData?.map(moment => moment.createdBy?.userID).filter(Boolean))];
      console.log('User IDs to fetch names for:', userIds);
      
      // Fetch user data for staff member names
      const userDataPromises = userIds.map(async (userId) => {
        if (!userId) return { userId: '', userData: null };
        
        try {
          const userData = await getUserById(userId);
          return { userId, userData };
        } catch (error) {
          console.error(`Error fetching user ${userId}:`, error);
          return { userId, userData: null };
        }
      });
      
      const userResults = await Promise.all(userDataPromises);
      const userMap = new Map();
      userResults.forEach(({ userId, userData }) => {
        if (userData) {
          userMap.set(userId, userData);
        }
      });
      
      console.log('User data map:', userMap);
      
      // Transform moments with user data
      const transformedMoments = momentsData?.map(moment => transformMoment(moment, userMap)) || [];
      console.log('Final transformed moments for state:', transformedMoments);
      setMoments(transformedMoments);
    } catch (error) {
      console.error('Error loading moments:', error);
      toast.error('Failed to load moments');
    } finally {
      setLoading(false);
    }
  };

  const loadResidents = async () => {
    if (!terriiProfile?.careHomeID) return;
    
    try {
      const residentsData = await listResidents(terriiProfile.careHomeID);
      setResidents(residentsData || []);
    } catch (error) {
      console.error('Error loading residents:', error);
      toast.error('Failed to load residents');
    }
  };

  // Transform backend moment to frontend format
  const transformMoment = (backendMoment: any, userMap?: Map<string, any>): Moment => {
    // Debug the raw backend data first
    console.log('Raw backend moment data:', backendMoment);
    
    // Parse content
    let title = 'Untitled Moment';
    let description = '';
    
    if (backendMoment.content) {
      const lines = backendMoment.content.split('\n');
      title = lines[0] || 'Untitled Moment';
      description = lines.slice(2).join('\n').trim() || 'No description';
    }
    
    // Get author information from available data
    let authorName = 'Staff Member';
    let authorPhoto = null;
    
    if (backendMoment.createdBy) {
      const createdBy = backendMoment.createdBy;
      const userId = createdBy.userID;
      const userData = userMap?.get(userId);
      
      // Try to get the actual user name from fetched user data
      if (userData) {
        if (userData.name) {
          authorName = userData.name;
        } else if (userData.firstName && userData.lastName) {
          authorName = `${userData.firstName} ${userData.lastName}`;
        } else if (userData.firstName) {
          authorName = userData.firstName;
        }
      } else if (createdBy.user) {
        // Fallback to nested user data if available (shouldn't happen with current schema)
        if (createdBy.user.name) {
          authorName = createdBy.user.name;
        } else if (createdBy.user.firstName && createdBy.user.lastName) {
          authorName = `${createdBy.user.firstName} ${createdBy.user.lastName}`;
        } else if (createdBy.user.firstName) {
          authorName = createdBy.user.firstName;
        }
      } else {
        // Last fallback - use role info
        authorName = `${createdBy.role} Staff` || 'Staff Member';
      }
      
      // For photos, try profile picture first, then user image
      authorPhoto = createdBy.profilePicture || userData?.image || null;
    }
    
    console.log('Author details:', {
      userId: backendMoment.createdBy?.userID,
      userData: userMap?.get(backendMoment.createdBy?.userID),
      finalAuthorName: authorName,
      finalAuthorPhoto: authorPhoto
    });
    
    console.log('Transformed moment data:', {
      id: backendMoment.id,
      title,
      description,
      authorName,
      authorPhoto,
      resident: backendMoment.resident?.name
    });
    
    // Validate and create timestamp
    let timestamp = new Date();
    if (backendMoment.createdAt) {
      const parsedDate = new Date(backendMoment.createdAt);
      if (!isNaN(parsedDate.getTime())) {
        timestamp = parsedDate;
      } else {
        console.warn('Invalid createdAt timestamp for moment:', backendMoment.id, backendMoment.createdAt);
      }
    }
    
    return {
      id: backendMoment.id,
      title: title,
      description: description,
      emoji: '',
      timestamp: timestamp,
      category: 'Activity',
      status: backendMoment.isPrivate ? 'pending_approval' : 'published',
      author: {
        name: authorName,
        role: backendMoment.createdBy?.role || 'Care Staff',
        photo: authorPhoto
      },
      resident: {
        name: backendMoment.resident?.name || 'Unknown Resident',
        photo: backendMoment.resident?.photo || null
      },
      likes: backendMoment.likes || 0,
      comments: [], // Comments would need separate query
      hasLiked: false, // Would need user-specific logic
      isSharedWithFamily: !backendMoment.isPrivate,
      tags: backendMoment.tags || [],
      photos: backendMoment.media || [],
      engagement: {
        views: 0,
        familyViews: 0,
        shares: 0
      }
    };
  };
  
  // Filter and sort moments (they're already transformed in loadMoments)
  console.log('Moments in state for filtering:', moments);
  const filteredMoments = moments.filter(moment => {
    const matchesSearch = searchQuery === '' || 
      moment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      moment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      moment.resident.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (moment.tags && moment.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const matchesCategory = filterCategory === 'all' || moment.category.toLowerCase() === filterCategory.toLowerCase();
    const matchesStatus = filterStatus === 'all' || moment.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  }).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  
  console.log('Filtered moments for rendering:', filteredMoments);
  
  const handleLikeMoment = async (momentId: string) => {
    try {
      const moment = moments.find(m => m.id === momentId);
      if (!moment) return;
      
      // Toggle like status
      const action = moment.hasLiked ? 'unlike' : 'like';
      await toggleMomentLike(momentId, action);
      
      // Refresh moments to get updated data
      await loadMoments();
      
      toast.success(`${action === 'like' ? 'Added like to' : 'Removed like from'} moment`);
    } catch (error) {
      console.error('Error toggling moment like:', error);
      toast.error('Failed to update like');
    }
  };
  
  const handleCommentMoment = (momentId: string) => {
    setShowComments(momentId);
  };
  
  const handleAddComment = async () => {
    if (!newComment.trim() || !showComments) return;
    
    try {
      await addMomentComment({
        content: newComment,
        momentID: showComments,
        createdByID: terriiProfile?.id
      });
      
      toast.success('Comment added');
      setNewComment('');
      setShowComments(null);
      
      // Refresh moments to show new comment
      await loadMoments();
    } catch (error) {
      console.error('Error adding comment:', error);
      toast.error('Failed to add comment');
    }
  };
  
  const handleShareMoment = async (momentId: string) => {
    try {
      // Toggle privacy status to share with family
      await updateMomentPrivacy(momentId, false);
      await loadMoments();
      
      toast.success('Moment shared with family');
    } catch (error) {
      console.error('Error sharing moment:', error);
      toast.error('Failed to share moment');
    }
  };
  
  const handleEditMoment = (momentId: string) => {
    setEditingMoment(momentId);
    setShowCreateDialog(true);
  };
  
  const handleDeleteMoment = async (momentId: string) => {
    try {
      await deleteMoment(momentId);
      await loadMoments();
      toast.success('Moment deleted successfully');
    } catch (error) {
      console.error('Error deleting moment:', error);
      toast.error('Failed to delete moment');
    }
  };
  
  const handleApproveMoment = async (momentId: string) => {
    try {
      // Set moment as public (not private) to approve it
      await updateMomentPrivacy(momentId, false);
      await loadMoments();
      toast.success('Moment approved and shared with family!');
    } catch (error) {
      console.error('Error approving moment:', error);
      toast.error('Failed to approve moment');
    }
  };
  
  const handleCreateMoment = async (momentData: any) => {
    try {
      if (editingMoment) {
        // Update existing moment
        await updateMoment(editingMoment, {
          content: momentData.content,
          media: momentData.media,
          tags: momentData.tags,
          isPrivate: momentData.isPrivate
        });
        toast.success('Moment updated successfully');
        setEditingMoment(null);
      } else {
        // Create new moment
        if (!terriiProfile?.id || !terriiProfile?.careHomeID) {
          throw new Error('User profile not found. Please ensure you are logged in properly.');
        }
        
        const momentToCreate = {
          ...momentData,
          createdByID: terriiProfile.id,
          careHomeID: terriiProfile.careHomeID
        };
        
        console.log('Creating moment with data:', momentToCreate);
        const createdMoment = await createMoment(momentToCreate);
        console.log('Created moment response:', createdMoment);
        toast.success('Moment created successfully');
      }
      
      // Refresh moments list
      await loadMoments();
    } catch (error) {
      console.error('Error creating/updating moment:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to save moment');
      throw error; // Re-throw to handle in dialog
    }
  };

  const getEditingMomentData = () => {
    if (!editingMoment) return null;
    return moments.find(m => m.id === editingMoment) || null;
  };
  
  // Calculate summary statistics
  const totalMoments = moments.length;
  const publishedMoments = moments.filter((m: Moment) => m.status === 'published').length;
  const pendingMoments = moments.filter((m: Moment) => m.status === 'pending_approval').length;
  const sharedMoments = moments.filter((m: Moment) => m.isSharedWithFamily).length;

  if (loading) {
    return (
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-terrii-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-terrii-text-secondary">Loading moments...</p>
          </div>
        </div>
      </div>
    );
  }
  const totalLikes = moments.reduce((sum, moment) => sum + moment.likes, 0);
  const totalComments = moments.reduce((sum, moment) => sum + moment.comments.length, 0);
  const totalFamilyViews = moments.reduce((sum, moment) => sum + (moment.engagement?.familyViews || 0), 0);
  // Count of moments needing approval
  const pendingApprovalCount = moments.filter(m => m.status === 'pending_approval').length;

  return (
    <div className="min-h-screen flex flex-col bg-terrii-blue/5 relative">
      <div className="flex-1 p-4 space-y-4 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-terrii-text-primary">Shared Moments</h1>
            <p className="text-terrii-text-secondary">Capture and share meaningful moments</p>
          </div>
          
          <Button 
            className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary flex items-center"
            onClick={() => {
              setEditingMoment(null);
              setShowCreateDialog(true);
            }}
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Moment
          </Button>
        </div>
        
        {/* Summary Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-terrii-blue/10 rounded-full mr-3">
                <MessageSquare className="h-5 w-5 text-terrii-blue" />
              </div>
              <div>
                <p className="text-sm text-terrii-text-light">Total Moments</p>
                <h3 className="text-xl font-semibold text-terrii-text-primary">{totalMoments}</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-terrii-success/10 rounded-full mr-3">
                <Heart className="h-5 w-5 text-terrii-success" />
              </div>
              <div>
                <p className="text-sm text-terrii-text-light">Total Likes</p>
                <h3 className="text-xl font-semibold text-terrii-text-primary">{totalLikes}</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-terrii-warning/10 rounded-full mr-3">
                <MessageCircle className="h-5 w-5 text-terrii-warning" />
              </div>
              <div>
                <p className="text-sm text-terrii-text-light">Comments</p>
                <h3 className="text-xl font-semibold text-terrii-text-primary">{totalComments}</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-terrii-blue/10 rounded-full mr-3">
                <Users className="h-5 w-5 text-terrii-blue" />
              </div>
              <div className="flex items-center">
                <div>
                  <p className="text-sm text-terrii-text-light">Family Views</p>
                  <h3 className="text-xl font-semibold text-terrii-text-primary">{totalFamilyViews}</h3>
                </div>
                {pendingApprovalCount > 0 && (
                  <Badge className="ml-2 bg-terrii-warning text-white">
                    {pendingApprovalCount} pending
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-terrii-text-light" />
            <Input
              placeholder="Search moments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center"
              onClick={() => {
                // Toggle filter panel (if implemented)
              }}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center"
              onClick={() => {
                // Show date picker (if implemented)
              }}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Date
            </Button>
          </div>
        </div>
        
        {/* Category Tabs */}
        <Tabs defaultValue="all" onValueChange={setFilterCategory}>
          <TabsList className="bg-terrii-blue/10">
            {categories.map(category => (
              <TabsTrigger key={category.value} value={category.value}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Status Filters */}
          <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
            {[
              { key: 'all', label: 'All Status' },
              { key: 'published', label: 'Published', icon: CheckCircle },
              { key: 'pending_approval', label: 'Pending Approval', icon: AlertCircle },
              { key: 'archived', label: 'Archived', icon: Archive }
            ].map(status => (
              <Badge
                key={status.key}
                variant={filterStatus === status.key ? "default" : "outline"}
                className={`cursor-pointer transition-colors whitespace-nowrap ${
                  filterStatus === status.key
                    ? 'bg-terrii-blue text-white hover:bg-terrii-blue-dark'
                    : 'border-gray-200 hover:bg-gray-100'
                }`}
                onClick={() => setFilterStatus(status.key)}
              >
                {status.icon && <status.icon className="h-3 w-3 mr-1" />}
                {status.label}
              </Badge>
            ))}
          </div>
          
          {/* Moments Grid */}
          <TabsContent value={filterCategory} className="mt-6 space-y-6">
            {filteredMoments.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm p-4">
                <div className="w-16 h-16 bg-terrii-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-terrii-blue-dark" />
                </div>
                <h3 className="text-lg font-medium text-terrii-text-primary mb-2">No moments found</h3>
                <p className="text-terrii-text-secondary mb-4">
                  {searchQuery || filterCategory !== 'all' || filterStatus !== 'all'
                    ? 'Try adjusting your search criteria or filters.'
                    : 'Start capturing meaningful moments by creating your first entry.'}
                </p>
                {!searchQuery && filterCategory === 'all' && filterStatus === 'all' && (
                  <Button 
                    onClick={() => setShowCreateDialog(true)}
                    className="bg-terrii-green-dark hover:bg-terrii-green text-terrii-text-primary flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create First Moment
                  </Button>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
                {filteredMoments.map(moment => {
                  console.log('Rendering MomentCard with data:', moment);
                  return (
                    <MomentCard
                      key={moment.id}
                      moment={moment}
                      onLike={handleLikeMoment}
                      onComment={handleCommentMoment}
                      onShare={handleShareMoment}
                      onEdit={handleEditMoment}
                      onDelete={handleDeleteMoment}
                      onApprove={handleApproveMoment}
                      onViewDetail={handleCommentMoment}
                    />
                  );
                })}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Create/Edit Moment Dialog */}
      <CreateMomentDialog
        open={showCreateDialog}
        onOpenChange={(open) => {
          setShowCreateDialog(open);
          if (!open) setEditingMoment(null);
        }}
        onCreateMoment={handleCreateMoment}
        editingMoment={getEditingMomentData()}
        residents={residents.map(r => ({ id: r.id, name: r.name }))}
        categories={categories.filter(c => c.value !== 'all')}
      />
      
      {/* Comments Dialog */}
      <Dialog open={!!showComments} onOpenChange={() => setShowComments(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Comments</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4 max-h-[50vh] overflow-y-auto">
            {showComments && moments.find((m: Moment) => m.id === showComments)?.comments.map((comment: any, index: number) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm">{comment}</p>
              </div>
            ))}
            
            {showComments && moments.find(m => m.id === showComments)?.comments.length === 0 && (
              <p className="text-center text-terrii-text-light py-6">No comments yet</p>
            )}
          </div>
          
          <div className="flex space-x-2">
            <Textarea
              value={newComment}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-grow"
            />
            <Button onClick={handleAddComment}>Post</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}