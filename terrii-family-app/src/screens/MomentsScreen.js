import React, { useEffect, useState, useCallback, useContext, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl, ActivityIndicator, Modal, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { Colors, Typography, Spacing } from '../constants/Theme';
import { AppContext } from '../context';
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';
import { TouchableOpacity, Image, ScrollView, Pressable } from 'react-native';
import S3Image from '../components/S3Image';
import MomentCard from '../components/MomentCard';
import { getUser, listTerriiResidentFamilies, listTerriiMoments, commentsByMoment, listTerriiUserProfiles } from '../graphql/queries';
import { updateTerriiMoment, createTerriiMomentComment, createUser, createTerriiUserProfile } from '../graphql/mutations';

// Minimal required GraphQL queries extracted from full schema (avoid importing huge auto-gen file for now)
const LIST_FAMILY_LINKS_BY_EMAIL = /* GraphQL */ `query ListTerriiResidentFamilies($filter: ModelTerriiResidentFamilyFilterInput, $limit: Int) { listTerriiResidentFamilies(filter:$filter, limit:$limit){ items { id userID residentID resident { id name photo } } } }`;
// Fallback profile query (filter by userID) - generated listTerriiUserProfiles expects filter
//   using schema's ModelTerriiUserProfileFilterInput.
const LIST_PROFILES_BY_USER = /* GraphQL */ `query ListTerriiProfiles($filter: ModelTerriiProfileFilterInput, $limit: Int) { listTerriiProfiles(filter:$filter, limit:$limit){ items { id userID role careHomeID profilePicture } } }`;

// Helper to parse content (first line title, rest description)
function parseContent(raw) {
  if(!raw) return { title: 'Untitled Moment', description: '' };
  const lines = raw.split(/\r?\n/).filter(l => l.trim() !== '');
  const title = lines[0] || 'Untitled Moment';
  const description = lines.slice(1).join('\n');
  return { title, description };
}

export default function MomentsScreen() {
  const { user, userProfile: contextProfile, profileLoading } = useContext(AppContext) || {};
  const [userProfile, setUserProfile] = useState(null); // terriiProfile (local mirror)
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [residentLinks, setResidentLinks] = useState([]); // families linking to residents
  const [activeResident, setActiveResident] = useState(null);
  const [moments, setMoments] = useState([]);
  const [likedIds, setLikedIds] = useState(new Set());
  const [detailVisible, setDetailVisible] = useState(false);
  const [detailMoment, setDetailMoment] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [commentSubmitting, setCommentSubmitting] = useState(false);
  const creatingProfileRef = useRef(false);
  const userProfileRef = useRef(null);
  useEffect(()=>{ userProfileRef.current = userProfile; }, [userProfile]);

  // Re-added debug helper (was removed causing ReferenceError)
  const debug = useCallback((label, value) => {
    try { console.log(`[MomentsDebug] ${label}:`, value); } catch(_) {}
  }, []);

  // Stable profile ensure (no dependency on changing state to avoid re-render loop)
  const ensureFamilyProfile = useCallback(async (authUserId, links) => {
    if (userProfileRef.current?.id || creatingProfileRef.current) return userProfileRef.current;
    try {
      creatingProfileRef.current = true;
      debug('EnsureProfile.start', { hasUserProfile: !!userProfileRef.current, links: links?.length });
      // Re-query user first
      try {
        const userResp = await API.graphql(graphqlOperation(getUser, { id: authUserId }));
        const existing = userResp?.data?.getUser?.terriiProfile;
        if (existing?.id) {
          debug('EnsureProfile.foundViaGetUser', existing.id);
          setUserProfile(existing);
          return existing;
        }
      } catch (gErr) { debug('EnsureProfile.getUser.error', gErr); }

      // Fallback list profiles
      try {
        const profResp = await API.graphql(graphqlOperation(listTerriiUserProfiles, { filter: { userID: { eq: authUserId } }, limit: 1 }));
        const found = profResp?.data?.listTerriiUserProfiles?.items?.[0];
        if (found?.id) {
          debug('EnsureProfile.foundViaList', found.id);
          setUserProfile(found);
          return found;
        }
      } catch (lErr) { debug('EnsureProfile.listProfiles.error', lErr); }

      // Create if we have resident link to infer careHome
      const firstLink = links && links[0];
      const careHomeID = firstLink?.resident?.careHomeID;
      if (!careHomeID) { debug('EnsureProfile.cannotCreate.noCareHome'); return null; }
      debug('EnsureProfile.createAttempt', { careHomeID });
      const createResp = await API.graphql(graphqlOperation(createTerriiUserProfile, { input: { userID: authUserId, role: 'FAMILY', careHomeID } }));
      const created = createResp?.data?.createTerriiUserProfile;
      if (created?.id) {
        debug('EnsureProfile.created', created.id);
        setUserProfile(created);
        return created;
      } else {
        debug('EnsureProfile.createReturnedNull');
      }
    } catch (e) {
      debug('EnsureProfile.error', e);
    } finally {
      creatingProfileRef.current = false;
    }
    return null;
  }, []);

  const loadData = useCallback(async () => {
    setError(null);
    try {
      setLoading(true);
      // 1. Ensure authenticated user
      let authUser = user;
      if(!authUser) {
        authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
      }
      const userId = authUser?.attributes?.sub || authUser?.username;
      debug('AuthUserId', userId);
      debug('AuthUser.attributes', authUser?.attributes);
      if(!userId) throw new Error('No authenticated user id');

      // 2. Fetch base user to obtain terriiProfile (careHome context if needed)
      const userResp = await API.graphql(graphqlOperation(getUser, { id: userId }));
      const getUserData = userResp?.data?.getUser;
      debug('getUser.raw', getUserData);
      debug('getUser.terriiProfile', getUserData?.terriiProfile);
      if(!userProfileRef.current?.id) setUserProfile(getUserData?.terriiProfile || null);

      if(!getUserData?.terriiProfile){
        // Attempt to find a profile directly (App bootstrap should already have created one; keep as safety)
        try {
          const profResp = await API.graphql(graphqlOperation(listTerriiUserProfiles,{ filter:{ userID:{ eq:userId } }, limit:1 }));
            const foundProfile = profResp?.data?.listTerriiUserProfiles?.items?.[0];
            debug('Fallback.profileByUser', foundProfile?.id);
            if(foundProfile && !userProfileRef.current?.id){ setUserProfile(foundProfile); }
        } catch(pErr){ debug('Fallback.profileByUser.error', pErr); }
      }

      // 3. Fetch resident family links for this user
      const familyResp = await API.graphql(graphqlOperation(listTerriiResidentFamilies, { filter: { userID: { eq: userId } }, limit: 50 }));
      let links = familyResp?.data?.listTerriiResidentFamilies?.items || [];
      debug('FamilyLinks.initialRaw', links.map(l=>l.id));
      if(links.length === 0 && authUser?.attributes?.email){
        debug('FamilyLinks.byUserID.empty','Attempt email fallback');
        try {
          const byEmailResp = await API.graphql(graphqlOperation(LIST_FAMILY_LINKS_BY_EMAIL, { filter: { userID: { attributeExists: false } }, limit: 50 }));
          const emailLinks = (byEmailResp?.data?.listTerriiResidentFamilies?.items||[]).filter(l=> l?.userID==null);
          debug('EmailFallback.candidateCount', emailLinks.length);
          links = links.concat(emailLinks);
        } catch(fbErr){ debug('EmailFallback.error', fbErr); }
      }
      setResidentLinks(links);

      await ensureFamilyProfile(userId, links);

      if(links.length === 0) {
        debug('EarlyExit.noLinks', true);
        setActiveResident(null);
        setMoments([]);
        return;
      }

      const chosen = links[0].resident;
      setActiveResident(chosen);
      debug('ActiveResident', chosen?.id);

      const momentsResp = await API.graphql(graphqlOperation(listTerriiMoments, { filter: { residentID: { eq: chosen.id } }, limit: 100 }));
      let rawMoments = momentsResp?.data?.listTerriiMoments?.items || [];
      debug('RawMoments.beforeSortCount', rawMoments.length);
      rawMoments = rawMoments.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt));
      const transformed = rawMoments.filter(m=> !m.isPrivate).map(m=>{ const { title, description } = parseContent(m.content); return { id:m.id, title, description, createdAt:m.createdAt, resident: m.resident? { id:m.resident.id, name:m.resident.name, photo:m.resident.photo }:null, authorRole:m.createdBy?.role, media:m.media||[], tags:m.tags||[], likes:m.likes||0, isPrivate:!!m.isPrivate }; });
      setMoments(transformed);
    } catch (e) {
      console.warn('Error loading moments data', e);
      setError(e.message || 'Failed to load data');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [user]);

  useEffect(() => { loadData(); }, [loadData]);
  useEffect(()=>{ 
    debug('ContextProfile.change', { has:!!contextProfile, id:contextProfile?.id });
    setUserProfile(contextProfile); 
  }, [contextProfile]);

  const onRefresh = () => { setRefreshing(true); loadData(); };

  const handleToggleLike = async (id) => {
    setMoments(prev => prev.map(m => m.id === id ? { ...m, likes: (m.likes || 0) + (likedIds.has(id)? -1 : 1) } : m));
    setLikedIds(prev => {
      const next = new Set(prev);
      if(next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
    try {
      const target = moments.find(m=>m.id===id);
      if(!target) return;
      const newLikes = (target.likes || 0) + (likedIds.has(id)? -1 : 1);
      await API.graphql(graphqlOperation(updateTerriiMoment,{ input:{ id, likes:newLikes } }));
    } catch(e){
      console.log('Like toggle failed, reverting', e);
      // revert on failure
      setMoments(prev => prev.map(m => m.id === id ? { ...m, likes: (m.likes || 0) + (likedIds.has(id)? 1 : -1) } : m));
      setLikedIds(prev => {
        const next = new Set(prev);
        if(next.has(id)) next.delete(id); else next.add(id);
        return next;
      });
    }
  };

  const openDetail = async (momentItem) => {
    debug('OpenDetail.moment', { id: momentItem.id, title: momentItem.title, mediaCount: momentItem.media?.length });
    setDetailMoment(momentItem);
    setDetailVisible(true);
    await fetchComments(momentItem.id);
  };
  const closeDetail = () => { setDetailVisible(false); setDetailMoment(null); setComments([]); };
  const fetchComments = async (momentID) => {
    debug('FetchComments.start', { momentID });
    try {
      setCommentsLoading(true);
      const resp = await API.graphql(graphqlOperation(commentsByMoment,{ momentID, limit:200 }));
      let items = resp?.data?.commentsByMoment?.items || [];
      debug('FetchComments.rawCountDESC', items.length);
      items = items.slice().reverse();
      debug('FetchComments.reversedFirstIds', items.slice(0,3).map(c=>c.id));
      setComments(items);
    } catch(e){
      debug('FetchComments.error', e);
      Alert.alert('Comments','Failed to load comments.');
    } finally { setCommentsLoading(false); }
  };
  const submitComment = async () => {
    debug('SubmitComment.start', { newComment:newComment.trim(), hasDetail:!!detailMoment, detailMomentId: detailMoment?.id, hasUserProfile: !!userProfile, userProfileId: userProfile?.id });
    if(!newComment.trim()) { debug('SubmitComment.block.empty'); return; }
    if(!detailMoment){ debug('SubmitComment.block.noDetail'); Alert.alert('Comment','No moment selected.'); return; }
    if(profileLoading){ debug('SubmitComment.block.profileLoading'); return; }
    let activeProfile = userProfile;
    if(!activeProfile?.id){
      debug('SubmitComment.noProfile.ensureAttempt');
      // Try once to auto-create/fetch profile before blocking user
      try {
        const authUser = user || await Auth.currentAuthenticatedUser({ bypassCache: true });
        const uid = authUser?.attributes?.sub || authUser?.username;
        await ensureFamilyProfile(uid, residentLinks);
        activeProfile = userProfileRef.current; // ensure updated
      } catch(e){ debug('SubmitComment.ensureAttempt.error', e); }
    }
    if(!activeProfile?.id){ debug('SubmitComment.block.noProfile'); Alert.alert('Profile needed','Profile not ready yet. Pull to refresh and try again.'); return; }
    const tempId = `temp-${Date.now()}`;
    const contentToSend = newComment.trim();
    const optimistic = { id: tempId, content:contentToSend, createdAt:new Date().toISOString(), createdByID:activeProfile.id, createdBy:{ id:activeProfile.id, role:activeProfile.role, profilePicture:activeProfile.profilePicture } };
    debug('SubmitComment.optimistic', optimistic);
    setComments(prev=> [...prev, optimistic]);
    setNewComment('');
    try {
      setCommentSubmitting(true);
      const resp = await API.graphql(graphqlOperation(createTerriiMomentComment,{ input:{ content:contentToSend, createdByID:activeProfile.id, momentID:detailMoment.id } }));
      const created = resp?.data?.createTerriiMomentComment;
      debug('SubmitComment.response', created);
      if(!created){ throw new Error('No comment returned'); }
      setComments(prev => prev.map(c => c.id===tempId? created : c));
    } catch(e){
      debug('SubmitComment.error', e);
      setComments(prev=> prev.filter(c=> c.id!==tempId));
      setNewComment(contentToSend);
      Alert.alert('Comment failed', e.message || 'Unable to post comment.');
    } finally { setCommentSubmitting(false); }
  };

  const SkeletonCard = () => (
    <View style={styles.skelCard}>
      <View style={styles.skelImage} />
      <View style={styles.skelLineWide} />
      <View style={styles.skelLineMed} />
      <View style={styles.skelTagsRow}>
        <View style={styles.skelTag} />
        <View style={styles.skelTag} />
        <View style={styles.skelTagSmall} />
      </View>
    </View>
  );

  const renderItem = ({ item }) => {
    const isLiked = likedIds.has(item.id);
    
    return (
      <MomentCard
        momentData={item}
        isLiked={isLiked}
        onLike={handleToggleLike}
        onComment={() => openDetail(item)}
        onViewDetail={() => openDetail(item)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['left','right']}>{/* drop top edge for tighter top */}
      <FlatList
        data={loading ? Array.from({length:4}, (_,i)=>({ id:`skel-${i}` })) : moments}
        keyExtractor={item => item.id}
        renderItem={loading ? () => <SkeletonCard /> : renderItem}
        ListHeaderComponent={
          <View>
            <View style={styles.headerContainer}>
              <View style={styles.headerMain}>
                <View style={styles.headerTitleRow}>
                  <View style={styles.headerTitleGroup}>
                    <Text style={styles.headerTitle}>Shared Moments</Text>
                    <View style={styles.headerBadgeRow}>
                      <View style={styles.viewModeBadge}>
                        <Text style={styles.viewModeText}>View Only</Text>
                      </View>
                      {activeResident && (
                        <View style={styles.residentBadge}>
                          <Text style={styles.residentBadgeText}>
                            {activeResident.name}
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                </View>
                
                {error && (
                  <View style={styles.errorBanner}>
                    <Text style={styles.errorIcon}>⚠️</Text>
                    <Text style={styles.errorText}>{error}</Text>
                    <Text style={styles.errorHelper}>Check invite link / linkage.</Text>
                  </View>
                )}
                
                {!loading && !error && !activeResident && (
                  <View style={styles.stateBanner}>
                    <Text style={styles.stateIcon}>👤</Text>
                    <Text style={styles.stateText}>No resident linked yet.</Text>
                  </View>
                )}
                
                {!loading && !error && activeResident && moments.length === 0 && (
                  <View style={styles.stateBanner}>
                    <Text style={styles.stateIcon}>📸</Text>
                    <Text style={styles.stateText}>No shared moments available yet.</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        }
        contentContainerStyle={styles.listContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
      <Modal visible={detailVisible} animationType='slide' onRequestClose={closeDetail} presentationStyle='pageSheet'>
        <SafeAreaView style={styles.detailSafe} edges={['top','left','right','bottom']}>
          <View style={styles.detailHeader}> 
            <TouchableOpacity onPress={closeDetail} style={styles.closeBtn}><Text style={styles.closeBtnText}>Close</Text></TouchableOpacity>
            <Text style={styles.detailTitle} numberOfLines={1}>{detailMoment?.title || 'Moment'}</Text>
            <View style={{width:60}} />
          </View>
          <FlatList
            data={comments}
            keyExtractor={c=>c.id}
            ListHeaderComponent={detailMoment && (
              <View style={styles.detailMomentBlock}>
                {detailMoment.media && detailMoment.media.length>0 && (
                  <S3Image s3Key={detailMoment.media[0]} style={styles.detailHero} />
                )}
                <Text style={styles.detailCreatedAt}>{moment(detailMoment.createdAt).format('MMM D, YYYY • h:mm a')}</Text>
                {detailMoment.description ? <Text style={styles.detailDescription}>{detailMoment.description}</Text> : null}
                <View style={styles.detailLikeRow}>
                  <TouchableOpacity style={[styles.actionBtn, likedIds.has(detailMoment.id) && styles.actionBtnActive]} onPress={()=>handleToggleLike(detailMoment.id)}>
                    <Text style={[styles.actionBtnText, likedIds.has(detailMoment.id) && styles.actionBtnTextActive]}>{likedIds.has(detailMoment.id)? 'Liked':'Like'}</Text>
                  </TouchableOpacity>
                  <Text style={styles.detailLikesCount}>{detailMoment.likes} likes</Text>
                </View>
                <Text style={styles.commentsHeading}>Comments</Text>
              </View>
            )}
            renderItem={({item:comment})=>{
              const avatarKey = comment.createdBy?.profilePicture;
              const letter = (comment.createdBy?.role || 'U').charAt(0).toUpperCase();
              return (
                <View style={styles.commentRow}>
                  {avatarKey ? <S3Image s3Key={avatarKey} style={styles.commentAvatar} /> : <View style={styles.commentAvatarFallback}><Text style={styles.commentAvatarLetter}>{letter}</Text></View>}
                  <View style={styles.commentContent}> 
                    <Text style={styles.commentText}>{comment.content}</Text>
                    <Text style={styles.commentMeta}>{moment(comment.createdAt).fromNow()}</Text>
                  </View>
                </View>
              );
            }}
            ListEmptyComponent={commentsLoading ? <ActivityIndicator style={{margin:20}} /> : <Text style={styles.noCommentsText}>No comments yet.</Text>}
            contentContainerStyle={styles.commentsListContent}
            // removed inverted to show chronological order
          />
          <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':'height'} keyboardVerticalOffset={Platform.OS==='ios'?80:0}>
            <View style={styles.commentInputBar}> 
              <TextInput style={styles.commentInput} placeholder='Add a comment...' value={newComment} onChangeText={setNewComment} editable={!commentSubmitting} />
              <TouchableOpacity style={[styles.commentSendBtn, (!newComment.trim()||commentSubmitting) && styles.commentSendDisabled]} disabled={!newComment.trim()||commentSubmitting} onPress={submitComment}>
                <Text style={styles.commentSendText}>{commentSubmitting? '...':'Send'}</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

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
    marginBottom:Spacing.md,
    marginHorizontal:Spacing.lg,
    borderRadius:16,
    shadowColor:'#000',
    shadowOffset:{ width:0, height:1 },
    shadowOpacity:0.05,
    shadowRadius:4,
    elevation:2
  },
  headerMain:{ 
    paddingHorizontal:Spacing.lg,
    paddingVertical:Spacing.sm
  },
  headerTitleRow:{ 
    marginBottom:Spacing.sm
  },
  headerTitleGroup:{ 
    flex:1 
  },
  headerTitle:{ 
    fontSize:Typography.fontSize.xxl || 28, 
    fontWeight:'900', 
    color:Colors.textPrimary,
    letterSpacing:-0.5,
    marginBottom:8
  },
  headerBadgeRow:{ 
    flexDirection:'row', 
    alignItems:'center',
    flexWrap:'wrap',
    gap:8
  },
  viewModeBadge:{ 
    backgroundColor:'#FEF3C7',
    paddingHorizontal:10,
    paddingVertical:4,
    borderRadius:12,
    borderWidth:1,
    borderColor:'#FDE68A'
  },
  viewModeText:{ 
    color:'#92400E',
    fontSize:Typography.fontSize.xs,
    fontWeight:'600'
  },
  residentBadge:{ 
    backgroundColor:'#EFF6FF',
    paddingHorizontal:10,
    paddingVertical:4,
    borderRadius:12,
    borderWidth:1,
    borderColor:'#DBEAFE'
  },
  residentBadgeText:{ 
    color:'#1D4ED8',
    fontSize:Typography.fontSize.xs,
    fontWeight:'600'
  },
  errorBanner:{ 
    flexDirection:'row',
    alignItems:'flex-start',
    backgroundColor:'#FEF2F2',
    paddingHorizontal:12,
    paddingVertical:10,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#FECACA',
    marginTop:Spacing.sm
  },
  errorIcon:{ 
    marginRight:8,
    fontSize:16,
    marginTop:1
  },
  errorText:{ 
    color:'#DC2626',
    fontSize:Typography.fontSize.sm,
    fontWeight:'600',
    flex:1,
    marginBottom:2
  },
  errorHelper:{ 
    color:'#7F1D1D',
    fontSize:Typography.fontSize.xs,
    fontWeight:'400',
    flex:1
  },
  stateBanner:{ 
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#F8FAFC',
    paddingHorizontal:12,
    paddingVertical:10,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#E2E8F0',
    marginTop:Spacing.sm
  },
  stateIcon:{ 
    marginRight:8,
    fontSize:16
  },
  stateText:{ 
    color:Colors.textSecondary,
    fontSize:Typography.fontSize.sm,
    fontWeight:'500',
    flex:1
  },
  
  // Legacy state messages (keeping for compatibility)
  stateBox:{ backgroundColor:Colors.cardBackground, borderRadius:12, padding:Spacing.lg, marginHorizontal:Spacing.lg, marginBottom:Spacing.md, alignItems:'center' },
  helperText:{ fontSize:Typography.fontSize.sm, color:Colors.textSecondary, textAlign:'center' },
  
  // Skeleton loading
  skelCard:{ backgroundColor:Colors.cardBackground, borderRadius:18, padding:Spacing.lg, marginHorizontal:Spacing.lg, marginBottom:Spacing.lg, shadowColor:'#000', shadowOpacity:0.04, shadowRadius:6, shadowOffset:{ width:0, height:3 } },
  skelImage:{ width:'100%', height:120, backgroundColor:Colors.lightBackground, borderRadius:12, marginBottom:Spacing.md },
  skelLineWide:{ width:'85%', height:16, backgroundColor:Colors.lightBackground, borderRadius:8, marginBottom:Spacing.sm },
  skelLineMed:{ width:'60%', height:12, backgroundColor:Colors.lightBackground, borderRadius:6, marginBottom:Spacing.sm },
  skelTagsRow:{ flexDirection:'row', marginTop:Spacing.sm },
  skelTag:{ width:50, height:20, backgroundColor:Colors.lightBackground, borderRadius:10, marginRight:Spacing.sm },
  skelTagSmall:{ width:30, height:20, backgroundColor:Colors.lightBackground, borderRadius:10 },
  
  // Detail modal
  detailSafe:{ flex:1, backgroundColor:Colors.background },
  detailHeader:{ flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:Spacing.lg, paddingTop:Spacing.sm, paddingBottom:Spacing.sm, borderBottomWidth:1, borderColor:'#eee' },
  closeBtn:{ paddingVertical:6, paddingHorizontal:4 },
  closeBtnText:{ color:Colors.terriiDarkBlue, fontWeight:'600' },
  detailTitle:{ fontSize:Typography.fontSize.lg, fontWeight:'700', color:Colors.textPrimary, flex:1, textAlign:'center' },
  detailMomentBlock:{ padding:Spacing.lg, paddingBottom:Spacing.md },
  detailHero:{ width:'100%', height:240, borderRadius:18, marginBottom:Spacing.md, backgroundColor:Colors.lightBackground },
  detailCreatedAt:{ fontSize:Typography.fontSize.xs, color:Colors.textSecondary, marginBottom:Spacing.sm },
  detailDescription:{ fontSize:Typography.fontSize.sm, color:Colors.textPrimary, lineHeight:Typography.lineHeight.sm, marginBottom:Spacing.md },
  detailLikeRow:{ flexDirection:'row', alignItems:'center', marginBottom:Spacing.lg },
  detailLikesCount:{ marginLeft:Spacing.md, fontSize:Typography.fontSize.xs, color:Colors.textSecondary, fontWeight:'600' },
  commentsHeading:{ fontSize:Typography.fontSize.md, fontWeight:'700', color:Colors.textPrimary, marginBottom:Spacing.sm },
  
  // Comments
  commentRow:{ flexDirection:'row', alignItems:'flex-start', paddingHorizontal:Spacing.lg, paddingVertical:Spacing.sm, borderBottomWidth:1, borderColor:'#f2f2f2' },
  commentAvatar:{ width:40, height:40, borderRadius:20, backgroundColor:Colors.lightBackground },
  commentAvatarFallback:{ width:40, height:40, borderRadius:20, backgroundColor:Colors.terriiBlue, alignItems:'center', justifyContent:'center' },
  commentAvatarLetter:{ color:'#fff', fontSize:16, fontWeight:'700' },
  commentContent:{ flex:1, marginLeft:Spacing.sm },
  commentText:{ fontSize:Typography.fontSize.sm, color:Colors.textPrimary, marginBottom:2 },
  commentMeta:{ fontSize:Typography.fontSize.xs, color:Colors.textSecondary },
  noCommentsText:{ textAlign:'center', marginTop:40, color:Colors.textSecondary },
  commentsListContent:{ paddingBottom:120 },
  commentInputBar:{ flexDirection:'row', alignItems:'center', paddingHorizontal:Spacing.lg, paddingVertical:Spacing.sm, borderTopWidth:1, borderColor:'#eee', backgroundColor:Colors.cardBackground },
  commentInput:{ flex:1, backgroundColor:Colors.lightBackground, borderRadius:24, paddingHorizontal:16, paddingVertical:10, fontSize:Typography.fontSize.sm, color:Colors.textPrimary, marginRight:8 },
  commentSendBtn:{ backgroundColor:Colors.terriiDarkBlue, paddingHorizontal:18, paddingVertical:10, borderRadius:24 },
  commentSendDisabled:{ opacity:0.5 },
  commentSendText:{ color:'#fff', fontWeight:'600' },
  
  // Action button styles for detail modal
  actionBtn:{ backgroundColor:Colors.lightBackground, paddingHorizontal:16, paddingVertical:7, borderRadius:16, marginLeft:8 },
  actionBtnActive:{ backgroundColor:Colors.terriiDarkBlue },
  actionBtnText:{ fontSize:Typography.fontSize.xs, color:Colors.textPrimary, fontWeight:'700', letterSpacing:0.5 },
  actionBtnTextActive:{ color:'#fff' },
});
