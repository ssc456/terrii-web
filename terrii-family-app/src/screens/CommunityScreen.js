import React, { useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl, TouchableOpacity, Modal, Pressable, TextInput, Switch, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing } from '../constants/Theme';
import { AppContext } from '../context';
import { API, graphqlOperation } from 'aws-amplify';
import { listTerriiCommunityPosts } from '../graphql/queries';
import { LinearGradient } from 'expo-linear-gradient';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import S3Image from '../components/S3Image';
import { 
  listCommunityPosts, 
  createCommunityPost, 
  addCommunityComment, 
  togglePostLike, 
  togglePostHeart,
  getCareHome,
  canFamilyCreatePosts,
  familyPostsRequireApproval,
  incrementPostViews,
  listCommunityComments
} from '../lib/terriiApi';

dayjs.extend(relativeTime);

// Utility functions for post detail modal
const getAuthorName = (createdBy) => {
  if (!createdBy) return 'Anonymous';
  return createdBy.displayName || createdBy.name || createdBy.userID || 'Unknown User';
};

const getAuthorInitials = (createdBy) => {
  const name = getAuthorName(createdBy);
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'U';
};

const getAuthorRole = (createdBy) => {
  if (!createdBy) return 'User';
  return createdBy.role || createdBy.userType || 'Family Member';
};

const getAuthorColor = (createdBy) => {
  const role = getAuthorRole(createdBy);
  const colors = {
    'STAFF': '#059669',
    'ADMIN': '#DC2626', 
    'FAMILY': '#2563EB',
    'SUPER_ADMIN': '#7C2D12'
  };
  return colors[role] || '#6366F1';
};

const getStatusColor = (status) => {
  const colors = {
    'PUBLISHED': '#F0FDF4',
    'DRAFT': '#FEF3C7',
    'PENDING': '#FEF2F2',
    'ARCHIVED': '#F8FAFC'
  };
  return colors[status] || '#F0FDF4';
};

const getStatusTextColor = (status) => {
  const colors = {
    'PUBLISHED': '#15803D',
    'DRAFT': '#92400E',
    'PENDING': '#DC2626',
    'ARCHIVED': '#64748B'
  };
  return colors[status] || '#15803D';
};

// Replace prior component implementation with richer forum-style experience
export default function CommunityScreen(){
  const ctxRaw = useContext(AppContext);
  const ctx = ctxRaw && typeof ctxRaw === 'object' ? ctxRaw : {};
  const userProfile = ctx.userProfile || null;
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [careHomeID, setCareHomeID] = useState(null);
  const [careHomeSettings, setCareHomeSettings] = useState(null);
  const [detailPost, setDetailPost] = useState(null);
  const [detailVisible, setDetailVisible] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [newComment, setNewComment] = useState('');

  // Forum style states
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState(''); // debounced value actually used for filtering
  const [searchInput, setSearchInput] = useState(''); // immediate input state
  const [activeReplyPostId, setActiveReplyPostId] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [replyAnon, setReplyAnon] = useState(false);
  const [localReplies, setLocalReplies] = useState({});
  const [likesState, setLikesState] = useState({});
  const [likedMap, setLikedMap] = useState({});
  const [heartsState, setHeartsState] = useState({});
  const [heartedMap, setHeartedMap] = useState({});

  // Create post states
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [createPostTitle, setCreatePostTitle] = useState('');
  const [createPostContent, setCreatePostContent] = useState('');
  const [createPostCategory, setCreatePostCategory] = useState('General');
  const [creatingPost, setCreatingPost] = useState(false);

  // Derive family post capabilities
  const canCreatePosts = canFamilyCreatePosts(careHomeSettings);
  const requiresApproval = familyPostsRequireApproval(careHomeSettings);
  const isStaff = userProfile?.role && ['ADMIN','MANAGER','CARE_STAFF','STAFF'].includes(userProfile.role);
  const isTwoWayMode = careHomeSettings?.communityMode === 'TWO_WAY';

  // Debounce search input
  useEffect(()=>{ const h = setTimeout(()=> setSearch(searchInput.trim()), 300); return ()=> clearTimeout(h); }, [searchInput]);

  const statusColors = useMemo(()=>({
    PUBLISHED: { bg: Colors.terriiGreen, text: '#1D5E2B' },
    PENDING: { bg: '#FFE8B3', text: '#8A5A00' },
    REJECTED: { bg: '#FFD1D1', text: '#9E1C1C' },
    ARCHIVED: { bg: '#E2E8F0', text: '#4A5568' }
  }), []);

  const loadPosts = useCallback(async () => {
    if(!careHomeID){ return; }
    setError(null);
    try {
      setLoading(true);
      
      // Load care home settings first
      const careHome = await getCareHome(careHomeID);
      setCareHomeSettings(careHome);
      
      // Load posts using new API
      const items = await listCommunityPosts(careHomeID);
      
      const likeMap = {};
      const heartMap = {};
      items.forEach(p => { 
        likeMap[p.id] = p.likes || 0;
        heartMap[p.id] = p.heartCount || 0;
      });
      setLikesState(likeMap);
      setHeartsState(heartMap);
      setPosts(items);
    } catch(e){
      console.log('[Community.loadPosts.error]', e);
      setError('Failed to load posts');
    } finally { 
      setLoading(false); 
      setRefreshing(false); 
    }
  }, [careHomeID]);

  useEffect(()=>{ if(userProfile?.careHomeID){ setCareHomeID(userProfile.careHomeID); } }, [userProfile]);
  useEffect(()=>{ if(careHomeID) loadPosts(); }, [careHomeID, loadPosts]);
  const onRefresh = ()=> { setRefreshing(true); loadPosts(); };

  const openDetail = async (post) => { 
    setDetailPost(post); 
    setDetailVisible(true);
    incrementPostViews(post.id).catch(() => {}); // Don't fail if view increment fails
    await loadComments(post.id);
  };
  
  const closeDetail = () => { 
    setDetailVisible(false); 
    setDetailPost(null); 
    setComments([]);
    setNewComment('');
  };

  const loadComments = async (postId) => {
    try {
      setCommentsLoading(true);
      const commentsData = await listCommunityComments(postId);
      setComments(commentsData);
    } catch (error) {
      console.error('Failed to load comments:', error);
      setComments([]);
    } finally {
      setCommentsLoading(false);
    }
  };

  const handleCreatePost = async () => {
    if (!createPostTitle.trim() || !createPostContent.trim()) {
      Alert.alert('Validation Error', 'Please fill in both title and content');
      return;
    }

    if (!userProfile?.id || !careHomeID) {
      Alert.alert('Error', 'User authentication required');
      return;
    }

    try {
      setCreatingPost(true);
      
      const initialStatus = isStaff ? 'PUBLISHED' : (requiresApproval ? 'PENDING' : 'PUBLISHED');
      
      const newPost = await createCommunityPost({
        title: createPostTitle.trim(),
        lowerCaseTitle: createPostTitle.trim().toLowerCase(),
        content: createPostContent.trim(),
        category: createPostCategory.toLowerCase(),
        createdByID: userProfile.id,
        careHomeID: careHomeID,
        media: [],
        tags: [],
        isPinned: false,
        isAnnouncement: false,
        mode: careHomeSettings?.communityMode || 'TWO_WAY',
        likes: 0,
        heartCount: 0,
        viewCount: 0,
        commentCount: 0,
        status: initialStatus,
        requiresApproval: initialStatus === 'PENDING',
        isDeleted: false
      });

      // Add to local state
      setPosts(prevPosts => [newPost, ...prevPosts]);
      
      // Reset form
      setCreatePostTitle('');
      setCreatePostContent('');
      setCreatePostCategory('General');
      setShowCreateDialog(false);
      
      Alert.alert(
        'Success', 
        initialStatus === 'PENDING' 
          ? 'Post submitted for approval' 
          : 'Post created successfully'
      );
    } catch (error) {
      console.error('Failed to create post:', error);
      Alert.alert('Error', 'Failed to create post. Please try again.');
    } finally {
      setCreatingPost(false);
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim() || !detailPost) return;
    
    if (!userProfile?.id) {
      Alert.alert('Error', 'User authentication required');
      return;
    }

    try {
      const comment = await addCommunityComment({
        content: newComment.trim(),
        createdByID: userProfile.id,
        postID: detailPost.id
      });

      // Add to local comments
      setComments(prevComments => [...prevComments, comment]);
      setNewComment('');
    } catch (error) {
      console.error('Failed to add comment:', error);
      Alert.alert('Error', 'Failed to add comment');
    }
  };

  const isStaffPost = (post) => post.createdByRole ? ['ADMIN','MANAGER','CARE_STAFF','STAFF'].includes(post.createdByRole) : (post.status === 'PUBLISHED' && post.requiresApproval === false);

  const filtered = useMemo(()=> posts.filter(p => {
    if(search){
      const q = search.toLowerCase();
      if(!(p.content || '').toLowerCase().includes(q) && !(p.title||'').toLowerCase().includes(q) && !(p.tags||[]).some(t=> t.toLowerCase().includes(q))) return false;
    }
    if(filter==='STAFF' && !isStaffPost(p)) return false;
    if(filter==='FAMILY' && isStaffPost(p)) return false;
    return true;
  }), [posts, search, filter]);

  const submitReply = (postId) => {
    if(!replyText.trim()) return;
    const reply = { id: Date.now().toString(), content: replyText.trim(), isAnonymous: replyAnon, author: replyAnon? 'Anonymous' : (userProfile?.displayName || 'You'), createdAt: new Date().toISOString() };
    setLocalReplies(prev => ({ ...prev, [postId]: [...(prev[postId]||[]), reply] }));
    setReplyText('');
    setReplyAnon(false);
    setActiveReplyPostId(null);
  };

  const toggleLike = useCallback(async (postId) => {
    const isLiked = likedMap[postId];
    const action = isLiked ? 'unlike' : 'like';
    
    // Optimistic update
    setLikesState(prev => ({ 
      ...prev, 
      [postId]: (prev[postId] || 0) + (isLiked ? -1 : 1) 
    }));
    setLikedMap(prev => ({ ...prev, [postId]: !isLiked }));
    
    try {
      await togglePostLike(postId, action);
    } catch (error) {
      // Revert on error
      setLikesState(prev => ({ 
        ...prev, 
        [postId]: (prev[postId] || 0) + (isLiked ? 1 : -1) 
      }));
      setLikedMap(prev => ({ ...prev, [postId]: isLiked }));
      console.error('Failed to toggle like:', error);
    }
  }, [likedMap]);

  const toggleHeart = useCallback(async (postId) => {
    const isHearted = heartedMap[postId];
    const action = isHearted ? 'unheart' : 'heart';
    
    // Optimistic update
    setHeartsState(prev => ({ 
      ...prev, 
      [postId]: (prev[postId] || 0) + (isHearted ? -1 : 1) 
    }));
    setHeartedMap(prev => ({ ...prev, [postId]: !isHearted }));
    
    try {
      await togglePostHeart(postId, action);
    } catch (error) {
      // Revert on error
      setHeartsState(prev => ({ 
        ...prev, 
        [postId]: (prev[postId] || 0) + (isHearted ? 1 : -1) 
      }));
      setHeartedMap(prev => ({ ...prev, [postId]: isHearted }));
      console.error('Failed to toggle heart:', error);
    }
  }, [heartedMap]);

  // --- Render Helpers ---
  const renderPost = useCallback(({ item }) => (
    <PostCard
      post={item}
      isStaff={isStaffPost(item)}
      likes={likesState[item.id]||0}
      liked={!!likedMap[item.id]}
      onLike={() => toggleLike(item.id)}
      replies={localReplies[item.id] || []}
      activeReply={activeReplyPostId===item.id}
      onToggleReply={()=> setActiveReplyPostId(activeReplyPostId===item.id? null : item.id)}
      replyText={replyText}
      setReplyText={setReplyText}
      replyAnon={replyAnon}
      setReplyAnon={setReplyAnon}
      submitReply={()=> submitReply(item.id)}
      openDetail={()=> openDetail(item)}
      statusColors={statusColors}
    />
  ), [activeReplyPostId, likesState, likedMap, localReplies, replyText, replyAnon, statusColors, toggleLike]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['left','right']}>
      <FlatList
        data={loading? Array.from({length:6},(_,i)=>({id:`skel-${i}`})): filtered}
        keyExtractor={item=> item.id}
        renderItem={loading? ()=> <SkeletonCard /> : renderPost}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListHeaderComponent={<Header
          loading={loading}
          error={error}
          count={posts.length}
          filter={filter}
          setFilter={setFilter}
          searchValue={searchInput}
          onChangeSearch={setSearchInput}
          canCreatePosts={canCreatePosts}
          isTwoWayMode={isTwoWayMode}
          onCreatePress={() => setShowCreateDialog(true)}
        />}
        ListFooterComponent={!loading && (!canCreatePosts || !isTwoWayMode) ? <UpgradeCard onPress={()=>{}} /> : null}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={!loading && !error ? <EmptyState /> : null}
      />
      <Modal visible={detailVisible} animationType='slide' onRequestClose={closeDetail} presentationStyle='pageSheet'>
        <SafeAreaView style={styles.detailModalSafe} edges={['top','left','right','bottom']}>
          {/* Modern Header */}
          <View style={styles.detailModalHeader}>
            <TouchableOpacity onPress={closeDetail} style={styles.detailCloseButton}>
              <Text style={styles.detailCloseIcon}>✕</Text>
            </TouchableOpacity>
            <View style={styles.detailHeaderCenter}>
              <Text style={styles.detailModalTitle}>Post Details</Text>
            </View>
            <View style={styles.detailHeaderRight}>
              <TouchableOpacity style={styles.detailShareButton}>
                <Text style={styles.detailShareIcon}>↗</Text>
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView style={styles.detailModalContent} showsVerticalScrollIndicator={false}>
            {detailPost && (
              <>
                {/* Post Header with Author */}
                <View style={styles.detailPostHeader}>
                  <View style={styles.detailAuthorSection}>
                    <View style={styles.detailProfileImageContainer}>
                      {detailPost.createdBy?.profilePicture ? (
                        <S3Image 
                          s3Key={detailPost.createdBy.profilePicture} 
                          style={styles.detailProfileImage} 
                        />
                      ) : (
                        <View style={[styles.detailProfileImageFallback, { backgroundColor: getAuthorColor(detailPost.createdBy) }]}>
                          <Text style={styles.detailProfileImageInitials}>
                            {getAuthorInitials(detailPost.createdBy)}
                          </Text>
                        </View>
                      )}
                    </View>
                    <View style={styles.detailAuthorInfo}>
                      <View style={styles.detailAuthorBadge}>
                        <View style={[styles.detailAuthorDot, { backgroundColor: getAuthorColor(detailPost.createdBy) }]} />
                        <Text style={styles.detailAuthorText}>
                          {getAuthorName(detailPost.createdBy)}
                        </Text>
                      </View>
                      <Text style={styles.detailAuthorSubtext}>
                        {getAuthorRole(detailPost.createdBy)} • {dayjs(detailPost.createdAt).fromNow()}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.detailPostActions}>
                    <View style={[styles.detailStatusBadge, { backgroundColor: getStatusColor(detailPost.status) }]}>
                      <Text style={[styles.detailStatusText, { color: getStatusTextColor(detailPost.status) }]}>
                        {detailPost.status || 'Published'}
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Post Content */}
                <View style={styles.detailContentSection}>
                  {detailPost.title && (
                    <Text style={styles.detailPostTitle}>{detailPost.title}</Text>
                  )}
                  <Text style={styles.detailPostContent}>{detailPost.content}</Text>
                  
                  {/* Media Gallery */}
                  {detailPost.media && detailPost.media.length > 0 && (
                    <View style={styles.detailMediaSection}>
                      {detailPost.media.length === 1 ? (
                        <S3Image 
                          s3Key={detailPost.media[0]} 
                          style={styles.detailSingleMedia}
                        />
                      ) : (
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.detailMediaGallery}>
                          {detailPost.media.map((mediaKey, index) => (
                            <S3Image 
                              key={index}
                              s3Key={mediaKey} 
                              style={[styles.detailGalleryMedia, index === 0 && { marginLeft: 0 }]}
                            />
                          ))}
                        </ScrollView>
                      )}
                    </View>
                  )}

                  {/* Tags */}
                  {detailPost.tags && detailPost.tags.length > 0 && (
                    <View style={styles.detailTagsSection}>
                      <Text style={styles.detailTagsTitle}>Tags</Text>
                      <View style={styles.detailTagsContainer}>
                        {detailPost.tags.map((tag, index) => (
                          <View key={index} style={styles.detailTag}>
                            <Text style={styles.detailTagText}>#{tag}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  )}
                </View>

                {/* Engagement Stats */}
                <View style={styles.detailEngagementSection}>
                  <View style={styles.detailEngagementStats}>
                    <View style={styles.detailStatItem}>
                      <Text style={styles.detailStatNumber}>{detailPost.likes || 0}</Text>
                      <Text style={styles.detailStatLabel}>Likes</Text>
                    </View>
                    <View style={styles.detailStatItem}>
                      <Text style={styles.detailStatNumber}>{detailPost.heartCount || 0}</Text>
                      <Text style={styles.detailStatLabel}>Hearts</Text>
                    </View>
                    <View style={styles.detailStatItem}>
                      <Text style={styles.detailStatNumber}>{detailPost.viewCount || 0}</Text>
                      <Text style={styles.detailStatLabel}>Views</Text>
                    </View>
                    <View style={styles.detailStatItem}>
                      <Text style={styles.detailStatNumber}>{comments.length}</Text>
                      <Text style={styles.detailStatLabel}>Comments</Text>
                    </View>
                  </View>
                  
                  {/* Action Buttons */}
                  <View style={styles.detailActionButtons}>
                    <TouchableOpacity 
                      style={[styles.detailActionButton, likedMap[detailPost.id] && styles.detailActionButtonLiked]} 
                      onPress={() => toggleLike(detailPost.id)}
                    >
                      <Text style={[styles.detailActionIcon, likedMap[detailPost.id] && styles.detailActionIconLiked]}>
                        {likedMap[detailPost.id] ? '❤️' : '🤍'}
                      </Text>
                      <Text style={[styles.detailActionLabel, likedMap[detailPost.id] && styles.detailActionLabelLiked]}>
                        {likedMap[detailPost.id] ? 'Liked' : 'Like'}
                      </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={[styles.detailActionButton, heartedMap[detailPost.id] && styles.detailActionButtonHearted]} 
                      onPress={() => toggleHeart(detailPost.id)}
                    >
                      <Text style={[styles.detailActionIcon, heartedMap[detailPost.id] && styles.detailActionIconHearted]}>
                        {heartedMap[detailPost.id] ? '💙' : '🤍'}
                      </Text>
                      <Text style={[styles.detailActionLabel, heartedMap[detailPost.id] && styles.detailActionLabelHearted]}>
                        {heartedMap[detailPost.id] ? 'Hearted' : 'Heart'}
                      </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.detailActionButton}>
                      <Text style={styles.detailActionIcon}>💬</Text>
                      <Text style={styles.detailActionLabel}>Comment</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Comments Section */}
                {comments.length > 0 && (
                  <View style={styles.detailCommentsSection}>
                    <Text style={styles.detailCommentsTitle}>
                      Comments ({comments.length})
                    </Text>
                    {comments.map((comment, index) => (
                      <View key={comment.id} style={styles.detailCommentItem}>
                        <View style={styles.detailCommentHeader}>
                          <View style={styles.detailCommentAuthor}>
                            {comment.createdBy?.profilePicture ? (
                              <S3Image 
                                s3Key={comment.createdBy.profilePicture} 
                                style={styles.detailCommentAvatar} 
                              />
                            ) : (
                              <View style={[styles.detailCommentAvatarFallback, { backgroundColor: getAuthorColor(comment.createdBy) }]}>
                                <Text style={styles.detailCommentAvatarInitials}>
                                  {getAuthorInitials(comment.createdBy)}
                                </Text>
                              </View>
                            )}
                            <View style={styles.detailCommentAuthorInfo}>
                              <Text style={styles.detailCommentAuthorName}>
                                {getAuthorName(comment.createdBy)}
                              </Text>
                              <Text style={styles.detailCommentTime}>
                                {dayjs(comment.createdAt).fromNow()}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <Text style={styles.detailCommentContent}>{comment.content}</Text>
                      </View>
                    ))}
                  </View>
                )}

                {/* Post Metadata */}
                <View style={styles.detailMetadataSection}>
                  <Text style={styles.detailMetadataTitle}>Post Information</Text>
                  <View style={styles.detailMetadataRow}>
                    <Text style={styles.detailMetadataLabel}>Published:</Text>
                    <Text style={styles.detailMetadataValue}>{formatFull(detailPost.createdAt)}</Text>
                  </View>
                  {detailPost.updatedAt !== detailPost.createdAt && (
                    <View style={styles.detailMetadataRow}>
                      <Text style={styles.detailMetadataLabel}>Updated:</Text>
                      <Text style={styles.detailMetadataValue}>{formatFull(detailPost.updatedAt)}</Text>
                    </View>
                  )}
                  <View style={styles.detailMetadataRow}>
                    <Text style={styles.detailMetadataLabel}>Post ID:</Text>
                    <Text style={styles.detailMetadataValue}>{detailPost.id.slice(-8)}</Text>
                  </View>
                </View>
              </>
            )}
          </ScrollView>
        </SafeAreaView>
      </Modal>

      {/* Create Post Dialog */}
      <Modal visible={showCreateDialog} animationType='slide' onRequestClose={() => setShowCreateDialog(false)} presentationStyle='pageSheet'>
        <SafeAreaView style={styles.detailSafe} edges={['top','left','right','bottom']}>
          <View style={styles.detailHeader}>
            <TouchableOpacity onPress={() => setShowCreateDialog(false)} style={styles.closeBtn}>
              <Text style={styles.closeText}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.detailTitle}>Create Post</Text>
            <TouchableOpacity 
              onPress={handleCreatePost} 
              disabled={!createPostTitle.trim() || !createPostContent.trim() || creatingPost}
              style={[styles.saveBtn, (!createPostTitle.trim() || !createPostContent.trim() || creatingPost) && styles.saveBtnDisabled]}
            >
              <Text style={[styles.saveBtnText, (!createPostTitle.trim() || !createPostContent.trim() || creatingPost) && styles.saveBtnTextDisabled]}>
                {creatingPost ? 'Creating...' : 'Post'}
              </Text>
            </TouchableOpacity>
          </View>
          
          <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView style={styles.createFormScroll} contentContainerStyle={styles.createForm}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Title</Text>
                <TextInput
                  style={styles.textInput}
                  value={createPostTitle}
                  onChangeText={setCreatePostTitle}
                  placeholder="What's happening?"
                  placeholderTextColor={Colors.textLight}
                  multiline={false}
                />
              </View>
              
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Content</Text>
                <TextInput
                  style={[styles.textInput, styles.textAreaInput]}
                  value={createPostContent}
                  onChangeText={setCreatePostContent}
                  placeholder="Share your thoughts with the community..."
                  placeholderTextColor={Colors.textLight}
                  multiline={true}
                  textAlignVertical="top"
                />
              </View>
              
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Category</Text>
                <View style={styles.categorySelector}>
                  {['General', 'Question', 'Update', 'Celebration'].map(category => (
                    <TouchableOpacity
                      key={category}
                      style={[
                        styles.categoryOption,
                        createPostCategory === category && styles.categoryOptionSelected
                      ]}
                      onPress={() => setCreatePostCategory(category)}
                    >
                      <Text style={[
                        styles.categoryOptionText,
                        createPostCategory === category && styles.categoryOptionTextSelected
                      ]}>
                        {category}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              
              {requiresApproval && !isStaff && (
                <View style={styles.approvalNotice}>
                  <Text style={styles.approvalNoticeText}>
                    ℹ️ Your post will be reviewed by staff before being published
                  </Text>
                </View>
              )}
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

// --- New Header (consolidated) ---
const Header = ({ loading, error, count, filter, setFilter, searchValue, onChangeSearch, canCreatePosts, isTwoWayMode, onCreatePress }) => {
  const filters = [ {key:'ALL', label:'All'}, {key:'STAFF', label:'Staff'}, {key:'FAMILY', label:'Family'} ];
  return (
    <View style={styles.headerContainer}>
      {/* Main Header Section */}
      <View style={styles.headerMain}>
        <View style={styles.headerTitleRow}>
          <View style={styles.headerTitleGroup}>
            <Text style={styles.headerTitleNew}>Community</Text>
            <View style={styles.headerBadgeRow}>
              <View style={styles.postCountBadge}>
                <Text style={styles.postCountText}>
                  {loading ? '—' : count}
                </Text>
              </View>
              <Text style={styles.headerSubtitleNew}>
                {loading ? 'Loading...' : `post${count === 1 ? '' : 's'}`}
              </Text>
              {isTwoWayMode && (
                <View style={styles.modeBadge}>
                  <Text style={styles.modeBadgeText}>Interactive</Text>
                </View>
              )}
            </View>
          </View>
          
          {canCreatePosts && isTwoWayMode && (
            <TouchableOpacity style={styles.createButtonNew} onPress={onCreatePress}>
              <Text style={styles.createIconNew}>+</Text>
              <Text style={styles.createButtonTextNew}>New Post</Text>
            </TouchableOpacity>
          )}
        </View>
        
        {error && (
          <View style={styles.errorBanner}>
            <Text style={styles.errorIcon}>⚠️</Text>
            <Text style={styles.errorTextNew}>{error}</Text>
          </View>
        )}
      </View>

      {/* Search and Filter Section */}
      <View style={styles.searchFilterSection}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            value={searchValue}
            onChangeText={onChangeSearch}
            placeholder='Search posts and topics...'
            placeholderTextColor='#9CA3AF'
            style={styles.searchInputNew}
          />
        </View>
        
        <View style={styles.filterRow}>
          {filters.map(f => (
            <TouchableOpacity 
              key={f.key} 
              style={[styles.filterChipNew, filter === f.key && styles.filterChipActiveNew]} 
              onPress={() => setFilter(f.key)}
            >
              <Text style={[styles.filterChipTextNew, filter === f.key && styles.filterChipTextActiveNew]}>
                {f.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

// --- Enhanced Post Card Component with Rich Data ---
const PostCard = ({ post, isStaff, likes, liked, onLike, replies, activeReply, onToggleReply, replyText, setReplyText, replyAnon, setReplyAnon, submitReply, openDetail, statusColors }) => {
  const showStatus = post.status && post.status !== 'PUBLISHED';
  const limitedTags = (post.tags||[]).slice(0,3);
  const authorColor = isStaff ? Colors.terriiDarkBlue : '#8B5CF6';
  const authorBg = isStaff ? '#EBF4FF' : '#F3F0FF';
  
  // Extract user information from createdBy
  const author = post.createdBy || {};
  const authorName = author.userID || 'Unknown User';
  const authorProfilePicture = author.profilePicture;
  const authorRole = author.role;
  
  // Display name based on role
  const displayName = isStaff ? 'Care Team' : 'Family Member';
  const roleText = authorRole === 'ADMIN' ? 'Administrator' : 
                  authorRole === 'MANAGER' ? 'Manager' : 
                  authorRole === 'CARE_STAFF' ? 'Care Staff' : 
                  'Family Member';
  
  return (
    <Pressable style={styles.postCard} onPress={openDetail} android_ripple={{color:'#F8FAFC'}}>
      {/* Enhanced header with profile picture and user info */}
      <View style={styles.postHeader}>
        <View style={styles.authorSection}>
          {/* Profile Picture */}
          <View style={styles.profileImageContainer}>
            {authorProfilePicture ? (
              <S3Image 
                s3Key={authorProfilePicture}
                style={styles.profileImage}
                resizeMode="cover"
                fallback={
                  <View style={[styles.profileImageFallback, { backgroundColor: authorColor }]}>
                    <Text style={styles.profileImageInitials}>
                      {authorName.substring(0, 2).toUpperCase()}
                    </Text>
                  </View>
                }
              />
            ) : (
              <View style={[styles.profileImageFallback, { backgroundColor: authorColor }]}>
                <Text style={styles.profileImageInitials}>
                  {authorName.substring(0, 2).toUpperCase()}
                </Text>
              </View>
            )}
          </View>
          
          {/* Author Info */}
          <View style={styles.authorInfo}>
            <View style={[styles.authorBadge, { backgroundColor: authorBg }]}>
              <View style={[styles.authorDot, { backgroundColor: authorColor }]} />
              <Text style={[styles.authorText, { color: authorColor }]}>
                {displayName}
              </Text>
            </View>
            <Text style={styles.authorSubtext}>{roleText}</Text>
          </View>
        </View>
        
        <View style={styles.headerRight}>
          <Text style={styles.timeText}>{formatTimestamp(post.createdAt)}</Text>
          {showStatus && (
            <View style={[styles.statusBadge, { backgroundColor: statusColors[post.status]?.bg || '#E2E8F0' }]}> 
              <Text style={[styles.statusBadgeText, { color: statusColors[post.status]?.text || '#475569' }]}>
                {post.status}
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Enhanced content section */}
      <View style={styles.postContent}>
        {post.title && <Text style={styles.postTitle}>{post.title}</Text>}
        {!!post.content && <Text style={styles.postBody} numberOfLines={3}>{post.content.trim()}</Text>}
        
        {/* Media Gallery */}
        {post.media && post.media.length > 0 && (
          <View style={styles.mediaContainer}>
            {post.media.length === 1 ? (
              <S3Image 
                s3Key={post.media[0]}
                style={styles.singleImage}
                resizeMode="cover"
                fallback={
                  <View style={styles.imageFallback}>
                    <Text style={styles.imageFallbackText}>📷 Image</Text>
                  </View>
                }
              />
            ) : (
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mediaGallery}>
                {post.media.slice(0, 4).map((mediaKey, index) => (
                  <View key={index} style={styles.galleryImageContainer}>
                    <S3Image 
                      s3Key={mediaKey}
                      style={styles.galleryImage}
                      resizeMode="cover"
                      fallback={
                        <View style={styles.imageFallback}>
                          <Text style={styles.imageFallbackText}>📷</Text>
                        </View>
                      }
                    />
                    {index === 3 && post.media.length > 4 && (
                      <View style={styles.moreImagesOverlay}>
                        <Text style={styles.moreImagesText}>+{post.media.length - 4}</Text>
                      </View>
                    )}
                  </View>
                ))}
              </ScrollView>
            )}
          </View>
        )}
        
        {/* Enhanced tags display */}
        {(limitedTags.length > 0) && (
          <View style={styles.tagsContainer}>
            {limitedTags.map(t => (
              <LinearGradient
                key={t}
                colors={['#F0F9FF', '#E0F2FE']}
                style={styles.tagGradient}
              >
                <Text style={styles.tagText}>#{t}</Text>
              </LinearGradient>
            ))}
            {post.tags && post.tags.length > 3 && (
              <Text style={styles.moreTags}>+{post.tags.length-3} more</Text>
            )}
          </View>
        )}
      </View>

      {/* Enhanced actions bar with more statistics */}
      <View style={styles.actionsBar}>
        <TouchableOpacity 
          onPress={onLike} 
          style={[styles.actionButton, liked && styles.actionButtonLiked]}
          hitSlop={8}
        >
          <Text style={[styles.actionIcon, liked && styles.actionIconLiked]}>
            {liked ? '👍' : '👍'}
          </Text>
          <Text style={[styles.actionLabel, liked && styles.actionLabelLiked]}>
            {likes}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={onToggleReply} 
          style={[styles.actionButton, activeReply && styles.actionButtonActive]}
          hitSlop={8}
        >
          <Text style={styles.actionIcon}>💬</Text>
          <Text style={[styles.actionLabel, activeReply && styles.actionLabelActive]}>
            {(post.commentCount || 0) + replies.length}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={openDetail} 
          style={styles.actionButton}
          hitSlop={8}
        >
          <Text style={styles.actionIcon}>👁️</Text>
          <Text style={styles.actionLabel}>{post.viewCount || 0}</Text>
        </TouchableOpacity>

        {post.heartCount > 0 && (
          <View style={styles.actionButton}>
            <Text style={styles.actionIcon}>❤️</Text>
            <Text style={styles.actionLabel}>{post.heartCount}</Text>
          </View>
        )}
      </View>

      {/* Enhanced reply section */}
      {activeReply && (
        <View style={styles.replySection}>
          <LinearGradient
            colors={['#FAFBFC', '#F8FAFC']}
            style={styles.replyContainer}
          >
            <TextInput
              multiline
              placeholder='Share your thoughts...'
              placeholderTextColor={Colors.textLight}
              value={replyText}
              onChangeText={setReplyText}
              style={styles.replyInput}
            />
            <View style={styles.replyActions}>
              <TouchableOpacity onPress={onToggleReply} style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <View style={styles.replyOptions}>
                <View style={styles.anonymousToggle}>
                  <Switch 
                    value={replyAnon} 
                    onValueChange={setReplyAnon} 
                    trackColor={{false:'#E2E8F0', true:Colors.terriiDarkBlue}} 
                    thumbColor={'#fff'}
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                  />
                  <Text style={styles.anonymousLabel}>Anonymous</Text>
                </View>
                <TouchableOpacity 
                  disabled={!replyText.trim()} 
                  onPress={submitReply} 
                  style={[styles.postButton, !replyText.trim() && styles.postButtonDisabled]}
                >
                  <Text style={[styles.postButtonText, !replyText.trim() && styles.postButtonTextDisabled]}>
                    Post Reply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
          
          {/* Enhanced reply preview with better styling */}
          {replies.length > 0 && (
            <View style={styles.replyPreview}>
              <Text style={styles.replyPreviewTitle}>Recent Replies:</Text>
              {replies.slice(-2).map(r => (
                <View key={r.id} style={styles.replyPreviewItem}>
                  <View style={styles.replyAuthorRow}>
                    <View style={styles.replyAuthorAvatar}>
                      <Text style={styles.replyAuthorInitials}>
                        {(r.isAnonymous ? 'A' : r.author?.substring(0, 1) || 'U').toUpperCase()}
                      </Text>
                    </View>
                    <View style={styles.replyAuthorInfo}>
                      <Text style={styles.replyPreviewAuthor}>
                        {r.isAnonymous ? 'Anonymous' : r.author}
                      </Text>
                      <Text style={styles.replyPreviewTime}>
                        {formatTimestamp(r.createdAt)}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.replyPreviewText} numberOfLines={2}>
                    {r.content}
                  </Text>
                </View>
              ))}
              {replies.length > 2 && (
                <Text style={styles.moreRepliesText}>
                  And {replies.length-2} more repl{replies.length-2===1?'y':'ies'}...
                </Text>
              )}
            </View>
          )}
        </View>
      )}
    </Pressable>
  );
};

// Skeleton placeholder (restored)
const SkeletonCard = () => (
  <View style={styles.postCardSkeleton}>
    <View style={styles.cardAccent} />
    <View style={{flex:1}}>
      <View style={styles.skelLineShort} />
      <View style={styles.skelLine} />
      <View style={styles.skelLine} />
      <View style={[styles.skelLine,{width:'55%'}]} />
    </View>
  </View>
);

// --- Updated UpgradeCard for community context ---
const UpgradeCard = ({ onPress }) => (
  <View style={styles.upgradePlain}> 
    <View style={{flex:1}}>
      <Text style={styles.upgradePlainTitle}>Two-way communication not enabled</Text>
      <Text style={styles.upgradePlainSub}>Contact care home to enable family posting</Text>
    </View>
    <TouchableOpacity onPress={onPress} style={styles.upgradePlainBtn}><Text style={styles.upgradePlainBtnText}>Learn More</Text></TouchableOpacity>
  </View>
);

// Added EmptyState component
const EmptyState = () => (
  <View style={styles.emptyWrap}>
    <Text style={styles.emptyEmoji}>🗨️</Text>
    <Text style={styles.emptyTitle}>No posts yet</Text>
    <Text style={styles.emptyText}>Updates from the care team will appear here.</Text>
  </View>
);

// Helper components & functions
const formatTimestamp = ts => {
  if(!ts) return '';
  const d = dayjs(ts);
  if(dayjs().diff(d, 'day') < 2) return d.fromNow();
  return d.format('D MMM YYYY');
};
const formatFull = ts => dayjs(ts).format('dddd D MMM YYYY • HH:mm');

// Removed old GradientHeader/SearchBar/FilterChips (replaced by Header component)

const styles = StyleSheet.create({
  safeArea:{ flex:1, backgroundColor: Colors.background },
  listContent:{ paddingBottom:Spacing.xxl },
  
  // New modern header styles
  headerContainer:{ 
    backgroundColor:'#fff',
    paddingTop:Spacing.md,
    paddingBottom:Spacing.sm,
    borderBottomWidth:1,
    borderBottomColor:'#F1F5F9',
    marginBottom:Spacing.md
  },
  headerMain:{ 
    paddingHorizontal:Spacing.lg,
    paddingBottom:Spacing.sm
  },
  headerTitleRow:{ 
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'flex-start',
    marginBottom:Spacing.sm
  },
  headerTitleGroup:{ 
    flex:1 
  },
  headerTitleNew:{ 
    fontSize:Typography.fontSize.xxl || 28, 
    fontWeight:'900', 
    color:Colors.textPrimary,
    letterSpacing:-0.5,
    marginBottom:6
  },
  headerBadgeRow:{ 
    flexDirection:'row', 
    alignItems:'center',
    flexWrap:'wrap'
  },
  postCountBadge:{ 
    backgroundColor:Colors.terriiDarkBlue,
    paddingHorizontal:8,
    paddingVertical:2,
    borderRadius:12,
    marginRight:8,
    minWidth:28,
    alignItems:'center'
  },
  postCountText:{ 
    color:'#fff',
    fontSize:Typography.fontSize.sm,
    fontWeight:'700'
  },
  headerSubtitleNew:{ 
    fontSize:Typography.fontSize.sm,
    color:Colors.textSecondary,
    fontWeight:'500',
    marginRight:8
  },
  modeBadge:{ 
    backgroundColor:'#F0FDF4',
    paddingHorizontal:8,
    paddingVertical:3,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#BBF7D0'
  },
  modeBadgeText:{ 
    color:'#15803D',
    fontSize:Typography.fontSize.xs,
    fontWeight:'600'
  },
  createButtonNew:{ 
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:Colors.terriiDarkBlue,
    paddingHorizontal:16,
    paddingVertical:10,
    borderRadius:14,
    shadowColor:Colors.terriiDarkBlue,
    shadowOffset:{ width:0, height:2 },
    shadowOpacity:0.15,
    shadowRadius:6,
    elevation:3
  },
  createIconNew:{ 
    color:'#fff',
    fontSize:Typography.fontSize.lg,
    fontWeight:'600',
    marginRight:6
  },
  createButtonTextNew:{ 
    color:'#fff',
    fontSize:Typography.fontSize.sm,
    fontWeight:'700'
  },
  errorBanner:{ 
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#FEF2F2',
    paddingHorizontal:12,
    paddingVertical:8,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#FECACA',
    marginTop:Spacing.sm
  },
  errorIcon:{ 
    marginRight:8,
    fontSize:16
  },
  errorTextNew:{ 
    color:'#DC2626',
    fontSize:Typography.fontSize.sm,
    fontWeight:'500',
    flex:1
  },
  
  // Search and filter section
  searchFilterSection:{ 
    paddingHorizontal:Spacing.lg,
    paddingBottom:Spacing.sm
  },
  searchContainer:{ 
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#F8FAFC',
    borderRadius:12,
    paddingHorizontal:12,
    paddingVertical:10,
    marginBottom:Spacing.sm,
    borderWidth:1,
    borderColor:'#E2E8F0'
  },
  searchIcon:{ 
    marginRight:8,
    fontSize:16,
    opacity:0.6
  },
  searchInputNew:{ 
    flex:1,
    fontSize:Typography.fontSize.sm,
    color:Colors.textPrimary,
    fontWeight:'400'
  },
  filterRow:{ 
    flexDirection:'row',
    gap:8
  },
  filterChipNew:{ 
    paddingHorizontal:14,
    paddingVertical:8,
    backgroundColor:'#F8FAFC',
    borderRadius:12,
    borderWidth:1,
    borderColor:'#E2E8F0'
  },
  filterChipActiveNew:{ 
    backgroundColor:Colors.terriiDarkBlue,
    borderColor:Colors.terriiDarkBlue
  },
  filterChipTextNew:{ 
    fontSize:Typography.fontSize.sm,
    fontWeight:'600',
    color:Colors.textSecondary
  },
  filterChipTextActiveNew:{ 
    color:'#fff'
  },
  
  // Enhanced post card styles
  postCard:{ 
    backgroundColor:'#fff', 
    borderRadius:16, 
    marginHorizontal:Spacing.lg, 
    marginBottom:Spacing.lg, 
    shadowColor:'#000',
    shadowOffset:{ width:0, height:2 },
    shadowOpacity:0.06,
    shadowRadius:8,
    elevation:3,
    borderWidth:1,
    borderColor:'#F1F5F9'
  },
  
  // Enhanced post header with profile pictures
  postHeader:{ 
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'flex-start', 
    padding:Spacing.md,
    paddingBottom:Spacing.sm,
    borderBottomWidth:1,
    borderBottomColor:'#F8FAFC'
  },
  authorSection:{ 
    flexDirection:'row', 
    alignItems:'center', 
    flex:1 
  },
  profileImageContainer:{ 
    marginRight:Spacing.sm 
  },
  profileImage:{ 
    width:48, 
    height:48, 
    borderRadius:24,
    borderWidth:2,
    borderColor:'#F1F5F9'
  },
  profileImageFallback:{ 
    width:48, 
    height:48, 
    borderRadius:24, 
    justifyContent:'center', 
    alignItems:'center',
    borderWidth:2,
    borderColor:'#F1F5F9'
  },
  profileImageInitials:{ 
    color:'#fff', 
    fontSize:Typography.fontSize.sm, 
    fontWeight:'700' 
  },
  authorInfo:{ 
    flex:1 
  },
  authorBadge:{ 
    flexDirection:'row', 
    alignItems:'center', 
    paddingHorizontal:10, 
    paddingVertical:4, 
    borderRadius:16,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.04)',
    alignSelf:'flex-start',
    marginBottom:2
  },
  authorDot:{ 
    width:6, 
    height:6, 
    borderRadius:3, 
    marginRight:6 
  },
  authorText:{ 
    fontSize:Typography.fontSize.xs, 
    fontWeight:'700',
    letterSpacing:0.3
  },
  authorSubtext:{ 
    fontSize:Typography.fontSize.xxxs || 10, 
    color:Colors.textLight, 
    fontWeight:'500' 
  },
  headerRight:{ 
    alignItems:'flex-end' 
  },
  timeText:{ 
    fontSize:Typography.fontSize.xs, 
    color:Colors.textLight, 
    fontWeight:'500',
    marginBottom:4
  },
  statusBadge:{ 
    paddingHorizontal:8, 
    paddingVertical:4, 
    borderRadius:12,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.08)'
  },
  statusBadgeText:{ 
    fontSize:Typography.fontSize.xxxs || 10, 
    fontWeight:'700', 
    letterSpacing:0.5,
    textTransform:'uppercase'
  },
  
  // Enhanced post content
  postContent:{ 
    padding:Spacing.md,
    paddingTop:Spacing.sm
  },
  postTitle:{ 
    fontSize:Typography.fontSize.lg, 
    fontWeight:'700', 
    color:Colors.textPrimary, 
    marginBottom:Spacing.sm,
    lineHeight:Typography.lineHeight.md
  },
  postBody:{ 
    fontSize:Typography.fontSize.sm, 
    lineHeight:Typography.lineHeight.lg, 
    color:'#64748B', 
    marginBottom:Spacing.md,
    fontWeight:'400'
  },
  
  // Media gallery styles
  mediaContainer:{ 
    marginBottom:Spacing.md 
  },
  singleImage:{ 
    width:'100%', 
    height:200, 
    borderRadius:12,
    backgroundColor:'#F8FAFC'
  },
  mediaGallery:{ 
    marginHorizontal:-4 
  },
  galleryImageContainer:{ 
    marginHorizontal:4, 
    position:'relative' 
  },
  galleryImage:{ 
    width:120, 
    height:120, 
    borderRadius:8,
    backgroundColor:'#F8FAFC'
  },
  imageFallback:{ 
    flex:1, 
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:'#F1F5F9' 
  },
  imageFallbackText:{ 
    color:Colors.textLight, 
    fontSize:Typography.fontSize.sm, 
    fontWeight:'500' 
  },
  moreImagesOverlay:{ 
    position:'absolute', 
    top:0, 
    left:0, 
    right:0, 
    bottom:0, 
    backgroundColor:'rgba(0,0,0,0.6)', 
    borderRadius:8, 
    justifyContent:'center', 
    alignItems:'center' 
  },
  moreImagesText:{ 
    color:'#fff', 
    fontSize:Typography.fontSize.md, 
    fontWeight:'700' 
  },
  
  // Enhanced tags
  tagsContainer:{ 
    flexDirection:'row', 
    flexWrap:'wrap',
    marginBottom:Spacing.sm
  },
  tagGradient:{ 
    paddingHorizontal:10, 
    paddingVertical:5, 
    borderRadius:12, 
    marginRight:6, 
    marginBottom:6,
    borderWidth:1,
    borderColor:'#E0F2FE'
  },
  tagText:{ 
    fontSize:Typography.fontSize.xs, 
    color:'#0369A1', 
    fontWeight:'600',
    letterSpacing:0.2
  },
  moreTags:{ 
    fontSize:Typography.fontSize.xs, 
    color:Colors.textLight, 
    alignSelf:'center', 
    marginLeft:4,
    fontWeight:'500',
    fontStyle:'italic'
  },
  
  // Enhanced actions bar
  actionsBar:{ 
    flexDirection:'row', 
    paddingHorizontal:Spacing.md,
    paddingVertical:Spacing.sm,
    borderTopWidth:1,
    borderTopColor:'#F8FAFC',
    backgroundColor:'#FAFBFC'
  },
  actionButton:{ 
    flexDirection:'row', 
    alignItems:'center', 
    paddingHorizontal:10,
    paddingVertical:6,
    borderRadius:10,
    marginRight:12,
    backgroundColor:'transparent',
    borderWidth:1,
    borderColor:'transparent'
  },
  actionButtonLiked:{ 
    backgroundColor:'#EFF6FF',
    borderColor:'#DBEAFE'
  },
  actionButtonActive:{ 
    backgroundColor:'#F0FDF4',
    borderColor:'#DCFCE7'
  },
  actionIcon:{ 
    fontSize:14, 
    marginRight:4 
  },
  actionIconLiked:{},
  actionLabel:{ 
    fontSize:Typography.fontSize.xs, 
    fontWeight:'600', 
    color:Colors.textSecondary 
  },
  actionLabelLiked:{ 
    color:'#1D4ED8' 
  },
  actionLabelActive:{ 
    color:'#16A34A' 
  },
  
  // Enhanced reply section
  replySection:{ 
    marginTop:0 
  },
  replyContainer:{ 
    margin:Spacing.md,
    borderRadius:12,
    padding:Spacing.md,
    borderWidth:1,
    borderColor:'#E2E8F0'
  },
  replyInput:{ 
    backgroundColor:'#fff', 
    borderRadius:8, 
    padding:12, 
    fontSize:Typography.fontSize.sm, 
    color:Colors.textPrimary, 
    minHeight:80, 
    textAlignVertical:'top', 
    borderWidth:1, 
    borderColor:'#E2E8F0',
    marginBottom:Spacing.sm
  },
  replyActions:{ 
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center'
  },
  cancelButton:{ 
    paddingHorizontal:12, 
    paddingVertical:8,
    borderRadius:8
  },
  cancelButtonText:{ 
    color:Colors.textSecondary, 
    fontSize:Typography.fontSize.sm, 
    fontWeight:'600' 
  },
  replyOptions:{ 
    flexDirection:'row', 
    alignItems:'center' 
  },
  anonymousToggle:{ 
    flexDirection:'row', 
    alignItems:'center',
    marginRight:Spacing.md
  },
  anonymousLabel:{ 
    fontSize:Typography.fontSize.xs, 
    color:Colors.textSecondary, 
    marginLeft:6,
    fontWeight:'500'
  },
  postButton:{ 
    backgroundColor:Colors.terriiDarkBlue, 
    paddingHorizontal:16, 
    paddingVertical:10, 
    borderRadius:10,
    shadowColor:Colors.terriiDarkBlue,
    shadowOffset:{ width:0, height:2 },
    shadowOpacity:0.2,
    shadowRadius:4,
    elevation:2
  },
  postButtonDisabled:{ 
    backgroundColor:'#CBD5E1',
    shadowOpacity:0
  },
  postButtonText:{ 
    color:'#fff', 
    fontSize:Typography.fontSize.sm, 
    fontWeight:'700' 
  },
  postButtonTextDisabled:{ 
    color:'#94A3B8' 
  },
  
  // Enhanced reply preview
  replyPreview:{ 
    margin:Spacing.md,
    marginTop:0,
    borderRadius:8,
    backgroundColor:'#F8FAFC',
    borderWidth:1,
    borderColor:'#E2E8F0'
  },
  replyPreviewTitle:{ 
    fontSize:Typography.fontSize.sm, 
    fontWeight:'600', 
    color:Colors.textPrimary,
    padding:Spacing.sm,
    paddingBottom:0
  },
  replyPreviewItem:{ 
    backgroundColor:'#fff', 
    padding:Spacing.sm, 
    borderRadius:6, 
    margin:Spacing.xs,
    borderWidth:1,
    borderColor:'#F1F5F9'
  },
  replyAuthorRow:{ 
    flexDirection:'row', 
    alignItems:'center', 
    marginBottom:6 
  },
  replyAuthorAvatar:{ 
    width:24, 
    height:24, 
    borderRadius:12, 
    backgroundColor:Colors.terriiDarkBlue, 
    justifyContent:'center', 
    alignItems:'center',
    marginRight:8
  },
  replyAuthorInitials:{ 
    color:'#fff', 
    fontSize:Typography.fontSize.xxs || 11, 
    fontWeight:'700' 
  },
  replyAuthorInfo:{ 
    flex:1 
  },
  replyPreviewAuthor:{ 
    fontSize:Typography.fontSize.xs, 
    fontWeight:'700', 
    color:Colors.terriiDarkBlue 
  },
  replyPreviewTime:{ 
    fontSize:Typography.fontSize.xxxs || 10, 
    color:Colors.textLight,
    fontWeight:'500'
  },
  replyPreviewText:{ 
    fontSize:Typography.fontSize.sm, 
    color:Colors.textSecondary,
    lineHeight:Typography.lineHeight.sm
  },
  moreRepliesText:{ 
    fontSize:Typography.fontSize.xs, 
    color:Colors.textLight, 
    fontStyle:'italic',
    textAlign:'center',
    padding:Spacing.sm
  },
  
  // Footer upgrade
  upgradePlain:{ flexDirection:'row', alignItems:'center', padding:Spacing.md, marginHorizontal:Spacing.lg, marginTop:Spacing.lg, borderRadius:20, backgroundColor:'#FFF7ED', borderWidth:1, borderColor:'#FED7AA' },
  upgradePlainTitle:{ fontSize:Typography.fontSize.md, fontWeight:'700', color:'#9A3412', marginBottom:2 },
  upgradePlainSub:{ fontSize:Typography.fontSize.xs, color:'#B45309' },
  upgradePlainBtn:{ backgroundColor:'#F97316', paddingHorizontal:14, paddingVertical:8, borderRadius:14, marginLeft:Spacing.md },
  upgradePlainBtnText:{ color:'#fff', fontSize:Typography.fontSize.xs, fontWeight:'700' },
  
  // Modern Detail Modal Styles
  detailModalSafe:{ 
    flex:1, 
    backgroundColor:'#fff' 
  },
  detailModalHeader:{ 
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between', 
    paddingHorizontal:Spacing.lg, 
    paddingVertical:Spacing.md, 
    borderBottomWidth:1, 
    borderBottomColor:'#F1F5F9',
    backgroundColor:'#fff'
  },
  detailCloseButton:{ 
    width:32, 
    height:32, 
    borderRadius:16, 
    backgroundColor:'#F8FAFC', 
    justifyContent:'center', 
    alignItems:'center',
    borderWidth:1,
    borderColor:'#E2E8F0'
  },
  detailCloseIcon:{ 
    fontSize:16, 
    color:'#64748B', 
    fontWeight:'600' 
  },
  detailHeaderCenter:{ 
    flex:1, 
    alignItems:'center' 
  },
  detailModalTitle:{ 
    fontSize:Typography.fontSize.lg, 
    fontWeight:'700', 
    color:Colors.textPrimary 
  },
  detailHeaderRight:{ 
    width:32 
  },
  detailShareButton:{ 
    width:32, 
    height:32, 
    borderRadius:16, 
    backgroundColor:'#F8FAFC', 
    justifyContent:'center', 
    alignItems:'center',
    borderWidth:1,
    borderColor:'#E2E8F0'
  },
  detailShareIcon:{ 
    fontSize:16, 
    color:'#64748B', 
    fontWeight:'600' 
  },
  
  // Detail Content
  detailModalContent:{ 
    flex:1 
  },
  detailPostHeader:{ 
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'flex-start', 
    padding:Spacing.lg,
    borderBottomWidth:1,
    borderBottomColor:'#F8FAFC'
  },
  detailAuthorSection:{ 
    flexDirection:'row', 
    alignItems:'center', 
    flex:1 
  },
  detailProfileImageContainer:{ 
    marginRight:Spacing.md 
  },
  detailProfileImage:{ 
    width:56, 
    height:56, 
    borderRadius:28,
    borderWidth:2,
    borderColor:'#F1F5F9'
  },
  detailProfileImageFallback:{ 
    width:56, 
    height:56, 
    borderRadius:28, 
    justifyContent:'center', 
    alignItems:'center',
    borderWidth:2,
    borderColor:'#F1F5F9'
  },
  detailProfileImageInitials:{ 
    color:'#fff', 
    fontSize:Typography.fontSize.lg, 
    fontWeight:'700' 
  },
  detailAuthorInfo:{ 
    flex:1 
  },
  detailAuthorBadge:{ 
    flexDirection:'row', 
    alignItems:'center', 
    marginBottom:4
  },
  detailAuthorDot:{ 
    width:8, 
    height:8, 
    borderRadius:4, 
    marginRight:8 
  },
  detailAuthorText:{ 
    fontSize:Typography.fontSize.md, 
    fontWeight:'700',
    color:Colors.textPrimary
  },
  detailAuthorSubtext:{ 
    fontSize:Typography.fontSize.sm, 
    color:Colors.textLight, 
    fontWeight:'500' 
  },
  detailPostActions:{ 
    alignItems:'flex-end' 
  },
  detailStatusBadge:{ 
    paddingHorizontal:10, 
    paddingVertical:5, 
    borderRadius:14,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.08)'
  },
  detailStatusText:{ 
    fontSize:Typography.fontSize.xs, 
    fontWeight:'700', 
    textTransform:'uppercase',
    letterSpacing:0.5
  },
  
  // Content Section
  detailContentSection:{ 
    padding:Spacing.lg 
  },
  detailPostTitle:{ 
    fontSize:Typography.fontSize.xl, 
    fontWeight:'800', 
    color:Colors.textPrimary, 
    marginBottom:Spacing.md,
    lineHeight:Typography.lineHeight.lg
  },
  detailPostContent:{ 
    fontSize:Typography.fontSize.md, 
    lineHeight:Typography.lineHeight.xl, 
    color:'#374151', 
    marginBottom:Spacing.lg,
    fontWeight:'400'
  },
  
  // Media Section
  detailMediaSection:{ 
    marginBottom:Spacing.lg 
  },
  detailSingleMedia:{ 
    width:'100%', 
    height:240, 
    borderRadius:16,
    backgroundColor:'#F8FAFC'
  },
  detailMediaGallery:{ 
    marginHorizontal:-8 
  },
  detailGalleryMedia:{ 
    width:160, 
    height:160, 
    borderRadius:12, 
    marginHorizontal:8,
    backgroundColor:'#F8FAFC'
  },
  
  // Tags Section
  detailTagsSection:{ 
    marginBottom:Spacing.lg 
  },
  detailTagsTitle:{ 
    fontSize:Typography.fontSize.sm, 
    fontWeight:'600', 
    color:Colors.textPrimary, 
    marginBottom:Spacing.sm 
  },
  detailTagsContainer:{ 
    flexDirection:'row', 
    flexWrap:'wrap',
    gap:8
  },
  detailTag:{ 
    backgroundColor:'#EFF6FF', 
    paddingHorizontal:12, 
    paddingVertical:6, 
    borderRadius:14,
    borderWidth:1,
    borderColor:'#DBEAFE'
  },
  detailTagText:{ 
    fontSize:Typography.fontSize.sm, 
    color:'#1D4ED8', 
    fontWeight:'600' 
  },
  
  // Engagement Section
  detailEngagementSection:{ 
    padding:Spacing.lg,
    borderTopWidth:1,
    borderTopColor:'#F8FAFC',
    backgroundColor:'#FAFBFC'
  },
  detailEngagementStats:{ 
    flexDirection:'row', 
    justifyContent:'space-around', 
    marginBottom:Spacing.lg,
    backgroundColor:'#fff',
    borderRadius:16,
    padding:Spacing.md,
    borderWidth:1,
    borderColor:'#F1F5F9'
  },
  detailStatItem:{ 
    alignItems:'center' 
  },
  detailStatNumber:{ 
    fontSize:Typography.fontSize.lg, 
    fontWeight:'800', 
    color:Colors.textPrimary,
    marginBottom:2
  },
  detailStatLabel:{ 
    fontSize:Typography.fontSize.xs, 
    color:Colors.textLight, 
    fontWeight:'500',
    textTransform:'uppercase',
    letterSpacing:0.5
  },
  detailActionButtons:{ 
    flexDirection:'row', 
    gap:12 
  },
  detailActionButton:{ 
    flex:1, 
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'center',
    paddingVertical:12,
    borderRadius:14,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#E2E8F0'
  },
  detailActionButtonLiked:{ 
    backgroundColor:'#FEF2F2',
    borderColor:'#FECACA'
  },
  detailActionButtonHearted:{ 
    backgroundColor:'#EFF6FF',
    borderColor:'#DBEAFE'
  },
  detailActionIcon:{ 
    fontSize:18, 
    marginRight:6 
  },
  detailActionIconLiked:{},
  detailActionIconHearted:{},
  detailActionLabel:{ 
    fontSize:Typography.fontSize.sm, 
    fontWeight:'600', 
    color:Colors.textSecondary 
  },
  detailActionLabelLiked:{ 
    color:'#DC2626' 
  },
  detailActionLabelHearted:{ 
    color:'#1D4ED8' 
  },
  
  // Comments Section
  detailCommentsSection:{ 
    padding:Spacing.lg,
    borderTopWidth:1,
    borderTopColor:'#F8FAFC'
  },
  detailCommentsTitle:{ 
    fontSize:Typography.fontSize.lg, 
    fontWeight:'700', 
    color:Colors.textPrimary, 
    marginBottom:Spacing.md 
  },
  detailCommentItem:{ 
    backgroundColor:'#fff',
    borderRadius:12,
    padding:Spacing.md,
    marginBottom:Spacing.sm,
    borderWidth:1,
    borderColor:'#F1F5F9'
  },
  detailCommentHeader:{ 
    marginBottom:Spacing.sm 
  },
  detailCommentAuthor:{ 
    flexDirection:'row', 
    alignItems:'center' 
  },
  detailCommentAvatar:{ 
    width:32, 
    height:32, 
    borderRadius:16,
    marginRight:Spacing.sm,
    borderWidth:1,
    borderColor:'#F1F5F9'
  },
  detailCommentAvatarFallback:{ 
    width:32, 
    height:32, 
    borderRadius:16, 
    justifyContent:'center', 
    alignItems:'center',
    marginRight:Spacing.sm,
    borderWidth:1,
    borderColor:'#F1F5F9'
  },
  detailCommentAvatarInitials:{ 
    color:'#fff', 
    fontSize:Typography.fontSize.sm, 
    fontWeight:'600' 
  },
  detailCommentAuthorInfo:{ 
    flex:1 
  },
  detailCommentAuthorName:{ 
    fontSize:Typography.fontSize.sm, 
    fontWeight:'600', 
    color:Colors.textPrimary 
  },
  detailCommentTime:{ 
    fontSize:Typography.fontSize.xs, 
    color:Colors.textLight, 
    fontWeight:'500' 
  },
  detailCommentContent:{ 
    fontSize:Typography.fontSize.sm, 
    lineHeight:Typography.lineHeight.md, 
    color:Colors.textSecondary 
  },
  
  // Metadata Section
  detailMetadataSection:{ 
    padding:Spacing.lg,
    borderTopWidth:1,
    borderTopColor:'#F8FAFC',
    backgroundColor:'#FAFBFC'
  },
  detailMetadataTitle:{ 
    fontSize:Typography.fontSize.md, 
    fontWeight:'600', 
    color:Colors.textPrimary, 
    marginBottom:Spacing.md 
  },
  detailMetadataRow:{ 
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center',
    paddingVertical:8,
    borderBottomWidth:1,
    borderBottomColor:'#F1F5F9'
  },
  detailMetadataLabel:{ 
    fontSize:Typography.fontSize.sm, 
    fontWeight:'500', 
    color:Colors.textLight 
  },
  detailMetadataValue:{ 
    fontSize:Typography.fontSize.sm, 
    fontWeight:'600', 
    color:Colors.textSecondary,
    textAlign:'right',
    flex:1,
    marginLeft:Spacing.sm
  },
  
  // Legacy styles (keeping for compatibility)
  detailSafe:{ flex:1, backgroundColor:Colors.background },
  detailHeader:{ flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:Spacing.lg, paddingVertical:Spacing.md, borderBottomWidth:1, borderColor:'#eee' },
  closeBtn:{ paddingVertical:6, paddingHorizontal:4 },
  closeText:{ color:Colors.terriiDarkBlue, fontWeight:'600' },
  detailTitle:{ fontSize:Typography.fontSize.lg, fontWeight:'700', color:Colors.textPrimary, flex:1, textAlign:'center' },
  saveBtn:{ backgroundColor:Colors.terriiDarkBlue, paddingVertical:8, paddingHorizontal:16, borderRadius:20 },
  saveBtnDisabled:{ backgroundColor:Colors.textLight },
  saveBtnText:{ color:'#fff', fontSize:Typography.fontSize.sm, fontWeight:'700' },
  saveBtnTextDisabled:{ color:Colors.textSecondary },
  detailBody:{ padding:Spacing.lg },
  detailContent:{ fontSize:Typography.fontSize.md, color:Colors.textPrimary, lineHeight:Typography.lineHeight.md, marginBottom:Spacing.md, fontWeight:'500' },
  detailMeta:{ fontSize:Typography.fontSize.xs, color:Colors.textSecondary, marginBottom:Spacing.sm, fontWeight:'600' },
  
  // Legacy tag styles for detail modal
  tagChip:{ backgroundColor:'#EEF2FF', paddingHorizontal:8, paddingVertical:3, borderRadius:10, marginRight:6, marginBottom:6 },
  tagText:{ fontSize:Typography.fontSize.xxs || 11, color:'#4338CA', fontWeight:'600' },
  tagsRow:{ flexDirection:'row', flexWrap:'wrap', marginBottom:4 },
  
  // Create Post Form
  createFormScroll:{ flex:1 },
  createForm:{ padding:Spacing.lg },
  inputGroup:{ marginBottom:Spacing.lg },
  inputLabel:{ fontSize:Typography.fontSize.sm, fontWeight:'600', color:Colors.textPrimary, marginBottom:Spacing.sm },
  textInput:{ backgroundColor:'#fff', borderWidth:1, borderColor:'#E2E8F0', borderRadius:12, padding:Spacing.md, fontSize:Typography.fontSize.sm, color:Colors.textPrimary },
  textAreaInput:{ minHeight:100, textAlignVertical:'top' },
  categorySelector:{ flexDirection:'row', flexWrap:'wrap', gap:8 },
  categoryOption:{ backgroundColor:'#F1F5F9', paddingHorizontal:16, paddingVertical:8, borderRadius:20, borderWidth:1, borderColor:'transparent' },
  categoryOptionSelected:{ backgroundColor:Colors.terriiDarkBlue, borderColor:Colors.terriiDarkBlue },
  categoryOptionText:{ fontSize:Typography.fontSize.sm, fontWeight:'600', color:Colors.textSecondary },
  categoryOptionTextSelected:{ color:'#fff' },
  approvalNotice:{ backgroundColor:'#FEF3C7', padding:Spacing.md, borderRadius:12, borderWidth:1, borderColor:'#F59E0B' },
  approvalNoticeText:{ fontSize:Typography.fontSize.sm, color:'#92400E', textAlign:'center' },
  
  // Empty & skeleton
  emptyWrap:{ alignItems:'center', justifyContent:'center', paddingTop:Spacing.xl },
  emptyEmoji:{ fontSize:48, marginBottom:Spacing.sm },
  emptyTitle:{ fontSize:Typography.fontSize.lg, fontWeight:'700', color:Colors.textPrimary, marginBottom:4 },
  emptyText:{ fontSize:Typography.fontSize.sm, color:Colors.textSecondary, textAlign:'center', maxWidth:260 },
  
  // Enhanced skeleton
  postCardSkeleton:{ 
    backgroundColor:'#fff', 
    borderRadius:16, 
    padding:Spacing.md, 
    marginHorizontal:Spacing.lg, 
    marginBottom:Spacing.lg, 
    borderWidth:1, 
    borderColor:'#F1F5F9' 
  },
  skelLine:{ height:12, backgroundColor:'#F1F5F9', borderRadius:6, marginBottom:6, width:'85%' },
  skelLineShort:{ height:10, backgroundColor:'#F1F5F9', borderRadius:6, marginBottom:Spacing.xs, width:'35%' },
  cardAccent:{ position:'absolute', left:0, top:0, bottom:0, width:4, backgroundColor:Colors.terriiDarkBlue, borderTopLeftRadius:16, borderBottomLeftRadius:16 },
});
