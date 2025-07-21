import { useState, useEffect } from 'react';
import React from 'react';
import { toast } from 'sonner';
import { 
  Plus, Filter, Search, Calendar, MessageSquare, Heart, Share2,
  Edit, Trash2, Archive, CheckCircle, AlertCircle, MessageCircle, Users
} from 'lucide-react';
import { BottomNav } from '../components/layout/BottomNav';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { MomentCard } from '../components/moments/MomentCard';
import type { Moment } from '../components/moments/MomentCard';
import { moments as mockMoments } from '../mock/moments';
import { CreateMomentDialog } from '../components/moments/CreateMomentDialog';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../components/ui/Dialog';
import { Textarea } from '../components/ui/Textarea';

export function MomentsScreen() {
  const [moments, setMoments] = useState<Moment[]>(mockMoments);
  
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [editingMoment, setEditingMoment] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showComments, setShowComments] = useState<string | null>(null);
  const [newComment, setNewComment] = useState('');
  
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
  }).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  
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
    toast.success(`${moments.find(m => m.id === momentId)?.hasLiked ? 'Removed like from' : 'Added like to'} moment`);
  };
  
  const handleCommentMoment = (momentId: string) => {
    setShowComments(momentId);
  };
  
  const handleAddComment = () => {
    if (!newComment.trim() || !showComments) return;
    
    const commentMoment = moments.find(m => m.id === showComments);
    if (!commentMoment) return;
    
    setMoments(prev => prev.map(moment => {
      if (moment.id === showComments) {
        return {
          ...moment,
          comments: [...moment.comments, newComment]
        };
      }
      return moment;
    }));
    
    toast.success('Comment added');
    setNewComment('');
    setShowComments(null);
  };
  
  const handleShareMoment = (momentId: string) => {
    // Use the momentId
    console.log(`Sharing moment with ID: ${momentId}`);
    toast.info('Sharing options opened');
  };
  
  const handleEditMoment = (momentId: string) => {
    setEditingMoment(momentId);
    setShowCreateDialog(true);
  };
  
  const handleDeleteMoment = (momentId: string) => {
    setMoments(prev => prev.filter(m => m.id !== momentId));
    toast.success('Moment deleted successfully');
  };
  
  const handleApproveMoment = (momentId: string) => {
    setMoments(prev => prev.map(moment => {
      if (moment.id === momentId) {
        return { ...moment, status: 'published', isSharedWithFamily: true };
      }
      return moment;
    }));
    toast.success('Moment approved and shared with family!');
  };
  
  const handleCreateMoment = (momentData: any) => {
    if (editingMoment) {
      // Update existing moment
      setMoments(prev => prev.map(moment => {
        if (moment.id === editingMoment) {
          return {
            ...moment,
            ...momentData,
            photos: [...(momentData.photos || [])],
          };
        }
        return moment;
      }));
      toast.success('Moment updated successfully');
      setEditingMoment(null);
    } else {
      // Create new moment
      const newMoment: Moment = {
        ...momentData,
        author: {
          name: 'Sarah Johnson',  // In a real app, use current user
          role: 'Care Assistant',
          photo: null
        },
        likes: 0,
        comments: [],
        hasLiked: false,
        engagement: {
          views: 0,
          familyViews: 0,
          shares: 0
        }
      };
      
      setMoments(prev => [newMoment, ...prev]);
      toast.success('Moment created successfully');
    }
  };
  
  const getEditingMomentData = () => {
    if (!editingMoment) return null;
    return moments.find(m => m.id === editingMoment) || null;
  };
  
  // Calculate summary statistics
  const totalMoments = moments.length;
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
                {category.label} ({category.count})
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
                {filteredMoments.map(moment => (
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
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Create/Edit Moment Dialog */}
      <CreateMomentDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
        onCreateMoment={handleCreateMoment}
        editingMoment={getEditingMomentData()}
        residents={residents}
        categories={categories.filter(c => c.value !== 'all')}
      />
      
      {/* Comments Dialog */}
      <Dialog open={!!showComments} onOpenChange={() => setShowComments(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Comments</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4 max-h-[50vh] overflow-y-auto">
            {showComments && moments.find(m => m.id === showComments)?.comments.map((comment, index) => (
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
      
      <BottomNav />
    </div>
  );
}