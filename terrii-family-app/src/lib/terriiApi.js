import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

/**
 * Get care home settings by ID
 * @param {string} careHomeId 
 * @returns {Promise<any>}
 */
export const getCareHome = async (careHomeId) => {
  try {
    const response = await API.graphql(
      graphqlOperation(queries.getTerriiCareHome, { id: careHomeId })
    );
    return response.data.getTerriiCareHome;
  } catch (error) {
    console.error('Error fetching care home:', error);
    throw error;
  }
};

/**
 * List community posts for a care home
 * @param {string} careHomeId 
 * @returns {Promise<any[]>}
 */
export const listCommunityPosts = async (careHomeId) => {
  try {
    const filter = {};
    if (careHomeId) {
      filter.careHomeID = { eq: careHomeId };
    }

    const response = await API.graphql(
      graphqlOperation(queries.listTerriiCommunityPosts, {
        filter: Object.keys(filter).length > 0 ? filter : undefined
      })
    );

    // Sort posts by createdAt timestamp (newest first)
    const posts = response.data.listTerriiCommunityPosts.items;
    return posts.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  } catch (error) {
    console.error('Error listing community posts:', error);
    throw error;
  }
};

/**
 * Create a community post
 * @param {object} postData 
 * @returns {Promise<any>}
 */
export const createCommunityPost = async (postData) => {
  try {
    const response = await API.graphql(
      graphqlOperation(mutations.createTerriiCommunityPost, {
        input: postData
      })
    );

    return response.data.createTerriiCommunityPost;
  } catch (error) {
    console.error('Error creating community post:', error);
    throw error;
  }
};

/**
 * Add a comment to a community post
 * @param {object} commentData 
 * @returns {Promise<any>}
 */
export const addCommunityComment = async (commentData) => {
  try {
    const response = await API.graphql(
      graphqlOperation(mutations.createTerriiCommunityComment, {
        input: {
          content: commentData.content,
          createdByID: commentData.createdByID,
          postID: commentData.postID,
          parentCommentID: commentData.parentCommentID || null,
          mentions: commentData.mentions || null
        }
      })
    );
    return response.data.createTerriiCommunityComment;
  } catch (error) {
    console.error('Error adding community comment:', error);
    throw error;
  }
};

/**
 * Get comments for a community post
 * @param {string} postID 
 * @param {number} limit 
 * @returns {Promise<any[]>}
 */
export const listCommunityComments = async (postID, limit = 50) => {
  try {
    const response = await API.graphql(
      graphqlOperation(queries.commentsByCommunityPost, {
        postID,
        limit,
        sortDirection: 'ASC' // oldest first for better threading
      })
    );

    const items = response.data?.commentsByCommunityPost?.items || [];
    // Filter to only top-level comments for now
    return items.filter(comment => !comment.parentCommentID);
  } catch (error) {
    console.error('Error listing community comments:', error);
    return [];
  }
};

/**
 * Toggle like on a community post
 * @param {string} postId 
 * @param {'like'|'unlike'} action 
 * @returns {Promise<any>}
 */
export const togglePostLike = async (postId, action) => {
  try {
    // Get current post
    const getResp = await API.graphql(
      graphqlOperation(queries.getTerriiCommunityPost, { id: postId })
    );
    
    const post = getResp.data?.getTerriiCommunityPost;
    if (!post) throw new Error('Post not found');
    
    let likes = post.likes || 0;
    if (action === 'like') {
      likes += 1;
    } else if (likes > 0) {
      likes -= 1;
    }
    
    const updateResp = await API.graphql(
      graphqlOperation(mutations.updateTerriiCommunityPost, {
        input: { id: postId, likes }
      })
    );
    
    return updateResp.data.updateTerriiCommunityPost;
  } catch (error) {
    console.error('Error toggling post like:', error);
    throw error;
  }
};

/**
 * Toggle heart on a community post
 * @param {string} postId 
 * @param {'heart'|'unheart'} action 
 * @returns {Promise<any>}
 */
export const togglePostHeart = async (postId, action) => {
  try {
    // Get current post
    const getResp = await API.graphql(
      graphqlOperation(queries.getTerriiCommunityPost, { id: postId })
    );
    
    const post = getResp.data?.getTerriiCommunityPost;
    if (!post) throw new Error('Post not found');
    
    let heartCount = post.heartCount || 0;
    if (action === 'heart') {
      heartCount += 1;
    } else if (heartCount > 0) {
      heartCount -= 1;
    }
    
    const updateResp = await API.graphql(
      graphqlOperation(mutations.updateTerriiCommunityPost, {
        input: { id: postId, heartCount }
      })
    );
    
    return updateResp.data.updateTerriiCommunityPost;
  } catch (error) {
    console.error('Error toggling post heart:', error);
    throw error;
  }
};

/**
 * List moments for a care home or resident
 * @param {string} careHomeId 
 * @param {string} residentId 
 * @returns {Promise<any[]>}
 */
export const listMoments = async (careHomeId, residentId = null) => {
  try {
    const filter = {};
    
    if (careHomeId) {
      filter.careHomeID = { eq: careHomeId };
    }
    
    if (residentId) {
      filter.residentID = { eq: residentId };
    }

    const response = await API.graphql(
      graphqlOperation(queries.listTerriiMoments, {
        filter: Object.keys(filter).length > 0 ? filter : undefined
      })
    );

    // Sort moments by createdAt timestamp (newest first)
    const moments = response.data.listTerriiMoments.items;
    return moments.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  } catch (error) {
    console.error('Error listing moments:', error);
    throw error;
  }
};

/**
 * Get a single moment by ID
 * @param {string} momentId 
 * @returns {Promise<any>}
 */
export const getMoment = async (momentId) => {
  try {
    const response = await API.graphql(
      graphqlOperation(queries.getTerriiMoment, { id: momentId })
    );

    return response.data.getTerriiMoment;
  } catch (error) {
    console.error('Error getting moment:', error);
    throw error;
  }
};

/**
 * Toggle like on a moment
 * @param {string} momentId 
 * @param {'like'|'unlike'} action 
 * @returns {Promise<any>}
 */
export const toggleMomentLike = async (momentId, action) => {
  try {
    // First get the current moment
    const getResponse = await API.graphql(
      graphqlOperation(queries.getTerriiMoment, { id: momentId })
    );

    const moment = getResponse.data.getTerriiMoment;
    if (!moment) {
      throw new Error(`Moment with ID ${momentId} not found`);
    }

    // Calculate new likes count
    let newLikesCount = moment.likes || 0;
    if (action === 'like') {
      newLikesCount += 1;
    } else if (action === 'unlike' && newLikesCount > 0) {
      newLikesCount -= 1;
    }

    // Update the moment with new likes count
    const updateResponse = await API.graphql(
      graphqlOperation(mutations.updateTerriiMoment, {
        input: {
          id: momentId,
          likes: newLikesCount
        }
      })
    );

    return updateResponse.data.updateTerriiMoment;
  } catch (error) {
    console.error(`Error ${action === 'like' ? 'liking' : 'unliking'} moment:`, error);
    throw error;
  }
};

/**
 * Add a comment to a moment
 * @param {object} commentData 
 * @returns {Promise<any>}
 */
export const addMomentComment = async (commentData) => {
  try {
    const response = await API.graphql(
      graphqlOperation(mutations.createTerriiMomentComment, {
        input: {
          content: commentData.content,
          createdByID: commentData.createdByID,
          momentID: commentData.momentID,
          parentCommentID: commentData.parentCommentID || null,
          mentions: commentData.mentions || null
        }
      })
    );
    return response.data.createTerriiMomentComment;
  } catch (error) {
    console.error('Error adding moment comment:', error);
    throw error;
  }
};

/**
 * Get comments for a moment
 * @param {string} momentID 
 * @param {number} limit 
 * @returns {Promise<any[]>}
 */
export const listMomentComments = async (momentID, limit = 50) => {
  try {
    const response = await API.graphql(
      graphqlOperation(queries.commentsByMoment, {
        momentID,
        limit,
        sortDirection: 'ASC' // oldest first
      })
    );

    const items = response.data?.commentsByMoment?.items || [];
    // Filter to only top-level comments for now
    return items.filter(comment => !comment.parentCommentID);
  } catch (error) {
    console.error('Error listing moment comments:', error);
    return [];
  }
};

/**
 * Get residents for a family member user
 * @param {string} userID 
 * @returns {Promise<any[]>}
 */
export const getResidentsForFamilyMember = async (userID) => {
  try {
    const response = await API.graphql(
      graphqlOperation(queries.listTerriiResidentFamilies, {
        filter: { userID: { eq: userID } }
      })
    );

    return response.data?.listTerriiResidentFamilies?.items?.map(item => ({
      ...item.resident,
      relationshipType: item.relationship
    })) || [];
  } catch (error) {
    console.error('Error getting residents for family member:', error);
    return [];
  }
};

/**
 * Increment view count for a post
 * @param {string} postId 
 * @returns {Promise<any>}
 */
export const incrementPostViews = async (postId) => {
  try {
    const getResp = await API.graphql(
      graphqlOperation(queries.getTerriiCommunityPost, { id: postId })
    );
    
    const post = getResp.data?.getTerriiCommunityPost;
    if (!post) throw new Error('Post not found');
    
    const viewCount = (post.viewCount || 0) + 1;
    
    const updateResp = await API.graphql(
      graphqlOperation(mutations.updateTerriiCommunityPost, {
        input: { id: postId, viewCount }
      })
    );
    
    return updateResp.data.updateTerriiCommunityPost;
  } catch (error) {
    console.error('Error incrementing post views:', error);
    // Don't throw - view counting is non-critical
  }
};

/**
 * Check if care home allows family posts
 * @param {any} careHome 
 * @returns {boolean}
 */
export const canFamilyCreatePosts = (careHome) => {
  if (!careHome) return false;
  
  // Two-way mode allows family posts
  if (careHome.communityMode === 'TWO_WAY') {
    return careHome.allowFamilyPosts !== false; // default to true if not set
  }
  
  // Notice board mode typically doesn't allow family posts
  return false;
};

/**
 * Check if family posts require approval
 * @param {any} careHome 
 * @returns {boolean}
 */
export const familyPostsRequireApproval = (careHome) => {
  if (!careHome) return true; // default to requiring approval
  return careHome.requireFamilyPostApproval === true;
};
