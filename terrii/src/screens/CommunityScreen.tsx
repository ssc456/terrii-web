import { useState, useEffect } from 'react';
import { 
  Bell, Filter, Plus, Search, MessageCircle, Users, 
  BarChart3, Heart, Eye, Shield, Pin, Clock, Check, CheckCircle, UserX, MoreHorizontal
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { Switch } from '../components/ui/Switch';
import { Label } from '../components/ui/Label';
import { Card } from '../components/ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { Avatar, AvatarFallback } from '../components/ui/Avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/DropdownMenu';
import { PostCard } from '../components/community/PostCard';
import { CreatePostDialog } from '../components/community/CreatePostDialog';
import { BottomNav } from '../components/layout/BottomNav';
import { S3Image } from '../components/ui/S3Image';
import { toast } from 'sonner';
import { communityCategories, CommunityPost } from '../mock/community';
import { useAuth } from '../contexts/AuthContext';
import { TerriiCommunityPost, TerriiCommunityComment, TerriiUserRole } from '../API';
import { 
  listCommunityPosts, 
  createCommunityPost, 
  addCommunityComment, 
  togglePostLike, 
  getCareHome,
  updateCareHome, // Added for persisting community settings
  incrementCommunityPostViews,
  toggleCommunityPostHeart,
  incrementCommunityPostCommentCount
} from '../lib/terriiApi';
import { TerriiCommunityPostStatus } from '../API';

export function CommunityScreen() {
  const { user, terriiProfile } = useAuth();
  const staffRoles = ['CARE_STAFF','ADMIN','MANAGER'];
  const isStaffUser = staffRoles.includes(terriiProfile?.role as any);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
  const [isNoticeBoardMode, setIsNoticeBoardMode] = useState(true);
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [backendPosts, setBackendPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showMemberManagement, setShowMemberManagement] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    newPosts: true,
    replies: true,
    mentions: true
  });
  const [careHomeSettings, setCareHomeSettings] = useState<any>(null);
  // Local editable settings (initialized from careHomeSettings when loaded)
  const [communityMode, setCommunityMode] = useState<'NOTICE_BOARD' | 'TWO_WAY'>('NOTICE_BOARD');
  const [allowFamilyPosts, setAllowFamilyPosts] = useState(true);
  const [requireFamilyPostApproval, setRequireFamilyPostApproval] = useState(false);
  const [allowPostComments, setAllowPostComments] = useState(true);
  const [allowPostReactions, setAllowPostReactions] = useState(true);
  // Persist helper declared here so it's in scope
  const persistCommunitySettings = async (partial: any) => {
    if (!terriiProfile?.careHomeID) return;
    try {
      const updated = await updateCareHome(terriiProfile.careHomeID, {
        communityMode,
        allowFamilyPosts,
        requireFamilyPostApproval,
        allowPostComments,
        allowPostReactions,
        ...partial
      });
      setCareHomeSettings(updated);
      if (partial.communityMode) {
        setCommunityMode(partial.communityMode);
        setIsNoticeBoardMode(partial.communityMode === 'NOTICE_BOARD');
      }
    } catch (e) {
      console.error('Failed to persist community settings', e);
    }
  };

  // Determine user role
  const userRole: 'staff' | 'family' = isStaffUser ? 'staff' : 'family';

  // Load community posts from backend
  useEffect(() => {
    loadCommunityPosts();
  }, [terriiProfile?.careHomeID]);

  // Load care home settings
  useEffect(() => {
    if (terriiProfile?.careHomeID) {
      (async () => {
        const careHome = await getCareHome(terriiProfile.careHomeID);
        setCareHomeSettings(careHome);
        if (careHome?.communityMode) {
          setIsNoticeBoardMode(careHome.communityMode === 'NOTICE_BOARD');
        }
      })();
    }
  }, [terriiProfile?.careHomeID]);

  const loadCommunityPosts = async () => {
    try {
      setLoading(true);
      const response = await listCommunityPosts(terriiProfile?.careHomeID);
      setBackendPosts(response || []);
      
      // Transform backend posts to frontend format
      const transformedPosts = response?.map(transformBackendPost) || [];
      setPosts(transformedPosts);
    } catch (error) {
      console.error('Error loading community posts:', error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const transformBackendPost = (backendPost: any): CommunityPost => {
    // Map backend enum status to UI status keys
    const rawStatus = backendPost.status as TerriiCommunityPostStatus | null;
    let uiStatus: CommunityPost['status'] = 'published';
    if (rawStatus === TerriiCommunityPostStatus.PENDING) uiStatus = 'pending_approval';
    if (rawStatus === TerriiCommunityPostStatus.REJECTED) uiStatus = 'rejected';
    if (rawStatus === TerriiCommunityPostStatus.ARCHIVED) uiStatus = 'archived';
    
    const author = backendPost.createdBy;
    const isStaff = author?.role === TerriiUserRole.CARE_STAFF || author?.role === TerriiUserRole.ADMIN || author?.role === TerriiUserRole.MANAGER;
    
    const derivedTitle = (backendPost.title || '').trim()
      ? backendPost.title.trim()
      : (backendPost.content || '').slice(0, 80) + ((backendPost.content || '').length > 80 ? '...' : '');

    const heartCount = backendPost.heartCount || 0;
    const likeCount = backendPost.likes || 0;
    const viewCount = backendPost.viewCount || 0;
    const category = backendPost.category || 'general';
    
    return {
      id: backendPost.id,
      title: derivedTitle,
      content: backendPost.content,
      author: {
        id: author?.id || 'unknown',
        name: author?.user?.firstName 
          ? `${author.user.firstName} ${author.user.lastName || ''}`.trim()
          : 'Unknown User',
        role: isStaff ? 'Staff' : 'Family Member',
        photo: author?.profilePicture || null,
        isStaff: isStaff
      },
      timestamp: new Date(backendPost.createdAt),
      category,
      isPinned: backendPost.isPinned || false,
      status: uiStatus,
      replies: [],
      reactions: {
        likes: {
          count: likeCount,
          users: []
        },
        hearts: {
          count: heartCount,
          users: []
        },
        hasLiked: false,
        hasHearted: false
      },
      tags: (backendPost.tags || []).filter((tag: string | null): tag is string => tag !== null),
      allowReplies: true,
      attachments: (backendPost.media || [])
        .filter((mediaKey: string | null): mediaKey is string => mediaKey !== null)
        .map((mediaKey: string, index: number) => ({
          id: `${backendPost.id}_${index}`,
          type: 'image' as const,
          url: mediaKey,
          name: `image_${index}.jpg`
        })),
      views: viewCount,
      reportCount: 0,
      media: (backendPost.media || []).filter((mediaKey: string | null): mediaKey is string => mediaKey !== null),
      isAnnouncement: backendPost.isAnnouncement || false
    };
  };

  // Mock community members data
  const communityMembers = [
    { id: 'staff1', name: 'Sarah Johnson', role: 'Care Manager', type: 'staff', status: 'active', joinDate: '2024-01-15' },
    { id: 'staff2', name: 'Maria Rodriguez', role: 'Activities Coordinator', type: 'staff', status: 'active', joinDate: '2024-01-15' },
    { id: 'staff3', name: 'Dr. Patricia Kim', role: 'Medical Director', type: 'staff', status: 'active', joinDate: '2024-01-15' },
    { id: 'family1', name: 'Susan Thompson', role: 'Family Member', type: 'family', status: 'active', joinDate: '2024-02-01', residentName: 'Margaret Thompson' },
    { id: 'family2', name: 'Lisa Chen', role: 'Family Member', type: 'family', status: 'active', joinDate: '2024-02-15', residentName: 'Robert Chen' },
    { id: 'family3', name: 'Michael Thompson', role: 'Family Member', type: 'family', status: 'pending', joinDate: '2024-03-01', residentName: 'Margaret Thompson' }
  ];

  // Helper function to get initials from name
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const handlePostClick = (postId: string) => {
    console.log(`Viewing post: ${postId}`);
    incrementCommunityPostViews(postId).catch(()=>{});
  };

  const handlePostAction = async (postId: string, action: string) => {
    console.log(`Action ${action} on post: ${postId}`);
    if (action === 'approve' && terriiProfile?.id) {
      // approval functionality not implemented yet
      setPosts(posts.map(p => p.id === postId ? { ...p, status: 'published' } : p));
      return;
    }
    if (action === 'reject' && terriiProfile?.id) {
      // rejection functionality not implemented yet
      setPosts(posts.map(p => p.id === postId ? { ...p, status: 'rejected' } : p));
      return;
    }
    if (action === 'delete') {
      setPosts(posts.filter(post => post.id !== postId));
    } else if (action === 'pin') {
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, isPinned: true } : post
      ));
    } else if (action === 'unpin') {
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, isPinned: false } : post
      ));
    } else if (action === 'approve') {
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, status: 'published' as const } : post
      ));
    }
  };

  const handleCreatePost = async (postData: any) => {
    if (!terriiProfile?.id || !terriiProfile?.careHomeID) {
      toast.error('User authentication required');
      return;
    }

    try {
      const familyRequiresApproval = requireFamilyPostApproval;
      const initialStatus = isStaffUser ? TerriiCommunityPostStatus.PUBLISHED : (familyRequiresApproval ? TerriiCommunityPostStatus.PENDING : TerriiCommunityPostStatus.PUBLISHED);

      const newBackendPost = await createCommunityPost({
        title: postData.title?.trim() || null,
        lowerCaseTitle: postData.title?.trim().toLowerCase() || null,
        content: postData.content,
        category: postData.category || 'general',
        createdByID: terriiProfile.id,
        careHomeID: terriiProfile.careHomeID,
        media: postData.attachments?.map((att: any) => att.url) || [],
        tags: postData.tags || [],
        isPinned: postData.isPinned || false,
        isAnnouncement: postData.isAnnouncement || false,
        mode: communityMode,
        likes: 0,
        heartCount: 0,
        viewCount: 0,
        commentCount: 0,
        status: initialStatus,
        requiresApproval: initialStatus === TerriiCommunityPostStatus.PENDING,
        isDeleted: false
      });

      const newPost = transformBackendPost(newBackendPost);
      setPosts([newPost, ...posts]);
      setIsCreateDialogOpen(false);
      toast.success(initialStatus === TerriiCommunityPostStatus.PENDING ? 'Post submitted for approval' : 'Post created successfully');
    } catch (error) {
      console.error('Failed to create post:', error);
      toast.error('Failed to create post');
    }
  };

  // Handle post like/unlike
  const handleLikePost = async (postId: string) => {
    if (!terriiProfile?.id) {
      toast.error('User authentication required');
      return;
    }

    try {
      // Get current like status from the post
      const currentPost = posts.find(post => post.id === postId);
      const hasLiked = currentPost?.reactions.hasLiked || false;
      const action = hasLiked ? 'unlike' : 'like';
      
      await togglePostLike(postId, action);
      
      // Update local state optimistically
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post.id === postId 
            ? {
                ...post,
                reactions: {
                  ...post.reactions,
                  likes: {
                    ...post.reactions.likes,
                    count: hasLiked 
                      ? post.reactions.likes.count - 1 
                      : post.reactions.likes.count + 1
                  },
                  hasLiked: !hasLiked
                }
              }
            : post
        )
      );
    } catch (error) {
      console.error('Failed to toggle like:', error);
      toast.error('Failed to update like');
    }
  };

  // Handle post heart/unheart
  const handleHeartPost = async (postId: string) => {
    try {
      setPosts(prev => prev.map(p => p.id === postId ? {
        ...p,
        reactions: {
          ...p.reactions,
            hearts: {
              ...p.reactions.hearts,
              count: p.reactions.hasHearted ? p.reactions.hearts.count - 1 : p.reactions.hearts.count + 1
            },
            hasHearted: !p.reactions.hasHearted
        }
      } : p));
      await toggleCommunityPostHeart(postId, posts.find(p=>p.id===postId)?.reactions.hasHearted ? 'unheart' : 'heart');
    } catch (e) {
      console.error('Heart toggle failed', e);
    }
  };

  // Handle post comment
  const handleCommentPost = async (postId: string, content: string) => {
    if (!terriiProfile?.id) {
      toast.error('User authentication required');
      return;
    }

    try {
      const comment = await addCommunityComment({
        content,
        createdByID: terriiProfile.id,
        postID: postId
      });

      setPosts(prevPosts => 
        prevPosts.map(post => 
          post.id === postId 
            ? {
                ...post,
                replies: [
                  ...post.replies,
                  {
                    id: comment.id,
                    content: comment.content,
                    author: {
                      id: terriiProfile.id,
                      name: terriiProfile.userID || 'You',
                      role: isStaffUser ? 'Staff' : 'Family Member',
                      isStaff: isStaffUser,
                      photo: terriiProfile.profilePicture || undefined
                    },
                    timestamp: new Date(comment.createdAt),
                    reactions: { likes: 0, hearts: 0 }
                  }
                ]
              }
            : post
        )
      );
      await incrementCommunityPostCommentCount(postId).catch(()=>{});
      toast.success('Comment added successfully');
    } catch (error) {
      console.error('Failed to add comment:', error);
      toast.error('Failed to add comment');
    }
  };

  const handleSelectChange = (postId: string, selected: boolean) => {
    if (selected) {
      setSelectedPosts([...selectedPosts, postId]);
    } else {
      setSelectedPosts(selectedPosts.filter(id => id !== postId));
    }
  };

  const handleClearSelection = () => {
    setSelectedPosts([]);
  };

  const handleBulkAction = (action: string) => {
    if (action === 'delete') {
      setPosts(posts.filter(post => !selectedPosts.includes(post.id)));
      setSelectedPosts([]);
    } else if (action === 'approve') {
      setPosts(posts.map(post => 
        selectedPosts.includes(post.id) 
          ? { ...post, status: 'published' as const } 
          : post
      ));
      setSelectedPosts([]);
    }
  };

  const filteredPosts = posts
    .filter(post => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          (post.title.toLowerCase().includes(query)) ||
          (post.content.toLowerCase().includes(query)) ||
          post.author.name.toLowerCase().includes(query) ||
          post.tags.some((tag: string) => tag.toLowerCase().includes(query))
        );
      }
      return true;
    })
    .filter(post => {
      // Filter by category
      if (activeCategory === 'all') return true;
      return post.category.toLowerCase() === activeCategory.toLowerCase();
    })
    .filter(post => {
      // In notice board mode, only show staff posts or pinned family posts
      if (isNoticeBoardMode) {
        return post.author.isStaff || post.isPinned;
      }
      return true;
    });

  // Sort posts - pinned first, then by date
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return b.timestamp.getTime() - a.timestamp.getTime();
  });

  // For staff users, show pending posts at the top in a separate section
  const pendingPosts = userRole === 'staff' 
    ? sortedPosts.filter(post => post.status === 'pending_approval')
    : [];
  
  const publishedPosts = sortedPosts.filter(post => 
    post.status === 'published' || (userRole !== 'staff' && post.status === 'pending_approval')
  );

  return (
    <div className="container mx-auto p-4 pt-16 md:pt-20 pb-24">
      {/* Enhanced Header with Community Stats */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4 mb-4">
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
            isNoticeBoardMode 
              ? 'bg-terrii-info/20 text-terrii-info border-terrii-info/30'
              : 'bg-terrii-success/20 text-terrii-success border-terrii-success/30'
          }>
            {isNoticeBoardMode ? 'Notice Board Mode' : 'Two-Way Community (Moderated)'}
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
        
        {/* Analytics Panel */}
        {showAnalytics && userRole === 'staff' && (
          <div className="mt-4 p-4 bg-terrii-warning/20 rounded-lg border border-terrii-warning-dark">
            <h3 className="font-medium text-terrii-text-primary mb-4">Community Analytics</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4 mb-4">
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
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {member.status === 'pending' ? (
                          <DropdownMenuItem>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Approve Member
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem>
                            <UserX className="h-4 w-4 mr-2" />
                            Remove Member
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Admin Panel */}
        {showAdminPanel && userRole === 'staff' && (
          <div className="mt-4 p-4 bg-terrii-blue/20 rounded-lg border border-terrii-blue-dark">
            <Tabs defaultValue="settings" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="moderation">Moderation</TabsTrigger>
              </TabsList>
              <TabsContent value="settings">
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-terrii-text-secondary">Community Mode</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-terrii-text-secondary">Notice Board</span>
                      <Switch
                        checked={communityMode === 'TWO_WAY'}
                        onCheckedChange={(checked) => {
                          const mode = checked ? 'TWO_WAY' : 'NOTICE_BOARD';
                          setCommunityMode(mode);
                          setIsNoticeBoardMode(mode === 'NOTICE_BOARD');
                          persistCommunitySettings({ communityMode: mode });
                        }}
                      />
                      <span className="text-sm text-terrii-text-secondary">Two-Way</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Allow family posts</Label>
                      <Switch checked={allowFamilyPosts} onCheckedChange={(v)=>{setAllowFamilyPosts(v);persistCommunitySettings({allowFamilyPosts:v});}} />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Require family post approval</Label>
                      <Switch checked={requireFamilyPostApproval} onCheckedChange={(v)=>{setRequireFamilyPostApproval(v);persistCommunitySettings({requireFamilyPostApproval:v});}} />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Allow comments</Label>
                      <Switch checked={allowPostComments} onCheckedChange={(v)=>{setAllowPostComments(v);persistCommunitySettings({allowPostComments:v});}} />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Allow reactions</Label>
                      <Switch checked={allowPostReactions} onCheckedChange={(v)=>{setAllowPostReactions(v);persistCommunitySettings({allowPostReactions:v});}} />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="moderation">
                <div className="space-y-3">
                  <h3 className="font-medium text-terrii-text-primary">Pending Approval ({pendingPosts.length})</h3>
                  {pendingPosts.length === 0 ? (
                    <p className="text-terrii-text-light text-sm">No posts pending approval</p>
                  ) : (
                    <div className="space-y-2">
                      {pendingPosts.map(post => (
                        <div key={post.id} className="flex items-center justify-between p-2 bg-white rounded border">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-terrii-text-primary">{post.title}</p>
                            <p className="text-xs text-terrii-text-light">
                              By {post.author.name} • {new Date(post.timestamp).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handlePostAction(post.id, 'approve')}
                            >
                              <Check className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-terrii-error"
                              onClick={() => handlePostAction(post.id, 'delete')}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-terrii-text-primary">
          {isNoticeBoardMode ? 'Notice Board' : 'Community'}
        </h1>
        
        <div className="flex items-center gap-2">
          {userRole === 'staff' && (
            <div className="flex items-center gap-2 mr-2">
              <Switch 
                id="notice-mode" 
                checked={isNoticeBoardMode}
                onCheckedChange={setIsNoticeBoardMode}
              />
              <Label htmlFor="notice-mode" className="text-sm">
                Notice Board Mode
              </Label>
            </div>
          )}
          
          {(userRole === 'staff' || (!isNoticeBoardMode && allowFamilyPosts)) && (
            <Button onClick={() => { if(isStaffUser || allowFamilyPosts){ setIsCreateDialogOpen(true);} }}>
              <Plus className="h-4 w-4 mr-2" />
              {userRole === 'staff' 
                ? (isNoticeBoardMode ? 'Post Notice' : 'New Post') 
                : 'New Post'}
            </Button>
          )}
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-terrii-text-light" />
          <Input
            type="search"
            placeholder="Search posts..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Button variant="outline" onClick={() => setFilterModalOpen(!filterModalOpen)}>
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        
        {userRole === 'staff' && selectedPosts.length > 0 && (
          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              {selectedPosts.length} selected
            </Badge>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleClearSelection}
            >
              Clear
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleBulkAction('approve')}
            >
              Approve
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-terrii-error"
              onClick={() => handleBulkAction('delete')}
            >
              Delete
            </Button>
          </div>
        )}
      </div>
      
      {filterModalOpen && (
        <div className="mb-6 p-4 border rounded-lg bg-white">
          <h3 className="font-medium mb-3">Filter By Category</h3>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setActiveCategory('all')}
            >
              All Categories
            </Badge>
            {communityCategories.map((category) => (
              <Badge
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Badge>
            ))}
          </div>
          
          {userRole === 'staff' && (
            <>
              <h3 className="font-medium mt-4 mb-3">Status</h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="cursor-pointer"
                >
                  <Bell className="h-3 w-3 mr-1" />
                  Pending Approval ({pendingPosts.length})
                </Badge>
              </div>
            </>
          )}
        </div>
      )}
      
      {/* For staff: Pending approval section */}
      {userRole === 'staff' && pendingPosts.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-terrii-warning flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              Pending Approval ({pendingPosts.length})
            </h2>
          </div>
          
          <div className="space-y-4">
            {pendingPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                userRole={userRole}
                onClick={handlePostClick}
                onAction={handlePostAction}
                showCheckbox={userRole === 'staff'}
                isSelected={selectedPosts.includes(post.id)}
                onSelectChange={handleSelectChange}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Main posts section */}
      <div className="space-y-4">
        {publishedPosts.length === 0 ? (
          <div className="text-center py-8">
            <MessageCircle className="h-12 w-12 mx-auto text-terrii-text-light opacity-20" />
            <p className="mt-4 text-terrii-text-light">
              {searchQuery 
                ? 'No posts match your search criteria'
                : isNoticeBoardMode
                  ? 'No notices have been posted yet'
                  : 'No community posts yet. Be the first to post!'}
            </p>
            {(userRole === 'staff' || !isNoticeBoardMode) && (
              <Button
                className="mt-4"
                onClick={() => setIsCreateDialogOpen(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                {userRole === 'staff'
                  ? (isNoticeBoardMode ? 'Post Notice' : 'New Post')
                  : 'New Post'}
              </Button>
            )}
          </div>
        ) : (
          publishedPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              userRole={userRole}
              onClick={handlePostClick}
              onAction={handlePostAction}
              onLike={handleLikePost}
              onHeart={handleHeartPost}
              onComment={handleCommentPost}
              showCheckbox={userRole === 'staff' && selectedPosts.length > 0}
              isSelected={selectedPosts.includes(post.id)}
              onSelectChange={handleSelectChange}
            />
          ))
        )}
      </div>
      
      <CreatePostDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onSubmit={handleCreatePost}
        categories={communityCategories}
        isStaff={userRole === 'staff'}
      />
      
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
