import { useState } from 'react';
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
import { communityPosts, communityCategories } from '../mock/community';
import type { CommunityPost } from '../mock/community';
import { BottomNav } from '../components/layout/BottomNav';

export function CommunityScreen() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
  const [isNoticeBoardMode, setIsNoticeBoardMode] = useState(true);
  const [posts, setPosts] = useState<CommunityPost[]>(communityPosts);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showMemberManagement, setShowMemberManagement] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    newPosts: true,
    replies: true,
    mentions: true
  });

  // Mock community members data
  const communityMembers = [
    { id: 'staff1', name: 'Sarah Johnson', role: 'Care Manager', type: 'staff', status: 'active', joinDate: '2024-01-15' },
    { id: 'staff2', name: 'Maria Rodriguez', role: 'Activities Coordinator', type: 'staff', status: 'active', joinDate: '2024-01-15' },
    { id: 'staff3', name: 'Dr. Patricia Kim', role: 'Medical Director', type: 'staff', status: 'active', joinDate: '2024-01-15' },
    { id: 'family1', name: 'Susan Thompson', role: 'Family Member', type: 'family', status: 'active', joinDate: '2024-02-01', residentName: 'Margaret Thompson' },
    { id: 'family2', name: 'Lisa Chen', role: 'Family Member', type: 'family', status: 'active', joinDate: '2024-02-15', residentName: 'Robert Chen' },
    { id: 'family3', name: 'Michael Thompson', role: 'Family Member', type: 'family', status: 'pending', joinDate: '2024-03-01', residentName: 'Margaret Thompson' }
  ];

  // Mock user role - in a real app, this would come from authentication context
  const userRole: 'staff' | 'family' = 'staff';

  // Helper function to get initials from name
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const handlePostClick = (postId: string) => {
    console.log(`Viewing post: ${postId}`);
    // Navigate to post detail in a real implementation
  };

  const handlePostAction = (postId: string, action: string) => {
    console.log(`Action ${action} on post: ${postId}`);
    
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

  const handleCreatePost = (postData: any) => {
    const newPost: CommunityPost = {
      id: `post_${Date.now()}`,
      title: postData.title,
      content: postData.content,
      author: {
        id: userRole === 'staff' ? 'staff1' : 'family1', // Mock user ID
        name: userRole === 'staff' ? 'Sarah Johnson' : 'Susan Thompson', // Mock user name
        role: userRole === 'staff' ? 'Care Manager' : 'Family Member',
        photo: null,
        isStaff: userRole === 'staff',
      },
      timestamp: new Date(),
      category: postData.category,
      isPinned: false,
      status: userRole === 'staff' ? 'published' : 'pending_approval',
      replies: [],
      reactions: {
        likes: { count: 0, users: [] },
        hearts: { count: 0, users: [] },
        hasLiked: false,
        hasHearted: false
      },
      tags: postData.tags,
      allowReplies: true,
      attachments: postData.attachments,
      views: 0,
      reportCount: 0
    };

    setPosts([newPost, ...posts]);
    setIsCreateDialogOpen(false);
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
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          post.title.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query) ||
          post.author.name.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query))
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
                        checked={!isNoticeBoardMode}
                        onCheckedChange={(checked) => setIsNoticeBoardMode(!checked)}
                      />
                      <span className="text-sm text-terrii-text-secondary">Two-Way</span>
                    </div>
                  </div>
                  
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
                      <Label>Can reply to posts</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Can react to posts</Label>
                      <Switch defaultChecked />
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
          
          {(userRole === 'staff' || !isNoticeBoardMode) && (
            <Button onClick={() => setIsCreateDialogOpen(true)}>
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
