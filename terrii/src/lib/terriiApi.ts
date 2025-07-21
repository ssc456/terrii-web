import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

// Initialize the API client
const client = generateClient();

/**
 * Retrieve the TERRii user profile for a Cognito user
 * @param userId The Cognito user ID
 * @returns The TERRii user profile or null if none exists
 */
export const getTerriiUserProfile = async (userId: string) => {
  try {
    // Query for TERRii user profiles associated with this user
    const response = await client.graphql({
      query: queries.listTerriiUserProfiles,
      variables: {
        filter: {
          userID: {
            eq: userId
          }
        }
      }
    });

    const profiles = response.data.listTerriiUserProfiles.items;
    
    if (profiles && profiles.length > 0) {
      return profiles[0];
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching TERRii user profile:', error);
    throw error;
  }
};

/**
 * Create a new TERRii user profile for an existing user
 * @param userId The Cognito user ID
 * @param careHomeId The ID of the care home
 * @param role The role of the user in the TERRii app
 * @returns The newly created TERRii user profile
 */
export const createTerriiUserProfile = async (
  userId: string, 
  careHomeId: string, 
  role: string,
  profilePicture?: string
) => {
  try {
    const userProfileData = {
      userID: userId,
      careHomeID: careHomeId,
      role: role,
      profilePicture: profilePicture || null,
      lastLogin: new Date().toISOString()
    };

    const response = await client.graphql({
      query: mutations.createTerriiUserProfile,
      variables: {
        input: userProfileData
      }
    });

    return response.data.createTerriiUserProfile;
  } catch (error) {
    console.error('Error creating TERRii user profile:', error);
    throw error;
  }
};

/**
 * Update an existing TERRii user profile
 * @param profileId The ID of the TERRii user profile
 * @param data The data to update
 * @returns The updated TERRii user profile
 */
export const updateTerriiUserProfile = async (profileId: string, data: any) => {
  try {
    const response = await client.graphql({
      query: mutations.updateTerriiUserProfile,
      variables: {
        input: {
          id: profileId,
          ...data
        }
      }
    });

    return response.data.updateTerriiUserProfile;
  } catch (error) {
    console.error('Error updating TERRii user profile:', error);
    throw error;
  }
};

/**
 * Create a new care home
 * @param data The care home data including name, address, and createdByID
 * @returns The newly created care home
 */
export const createCareHome = async (data: any) => {
  try {
    console.log('Creating care home with data:', JSON.stringify(data, null, 2));
    
    // Make sure we have a valid name
    if (!data.name) {
      console.error('No name provided for care home creation');
      throw new Error('A name is required to create a care home');
    }
    
    // Create the input object with required fields
    const careHomeInput: any = {
      name: data.name,
      address: data.address || null,
      city: data.city || null,
      postCode: data.postCode || null,
      phoneNumber: data.phoneNumber || null,
      email: data.email || null,
      website: data.website || null
    };
    
    console.log('Submitting GraphQL mutation with input:', JSON.stringify(careHomeInput, null, 2));
    
    const response = await client.graphql({
      query: mutations.createTerriiCareHome,
      variables: {
        input: careHomeInput
      }
    });

    console.log('Care home creation successful, response:', JSON.stringify(response.data, null, 2));
    
    if (!response.data?.createTerriiCareHome) {
      console.error('No care home returned in create response');
      throw new Error('Failed to create care home: No data returned');
    }
    
    const newCareHome = response.data.createTerriiCareHome;
    
    // If createdByID was provided, create a user profile to associate the creator as an admin
    if (data.createdByID) {
      try {
        await createTerriiUserProfile(
          data.createdByID, 
          newCareHome.id, 
          'ADMIN', // Set the creator as an admin
          data.profilePicture
        );
        console.log('Created admin user profile for creator');
      } catch (userProfileError) {
        console.error('Error creating user profile for care home creator:', userProfileError);
        // We won't fail the whole operation if this fails
      }
    }
    
    return newCareHome;
    
    return response.data.createTerriiCareHome;
  } catch (error: any) {
    console.error('Error creating care home:', error);
    
    // Log more detailed error information if available
    if (error.errors) {
      console.error('GraphQL errors:', JSON.stringify(error.errors, null, 2));
    }
    
    if (error.message) {
      console.error('Error message:', error.message);
    }
    
    // Check for specific error cases
    if (error.message?.includes('GraphQL error: No ModelType found')) {
      console.error('Schema error: TerriiCareHome model may not be defined in the API');
    }
    
    throw error;
  }
};

/**
 * Get a care home by ID
 * @param careHomeId The ID of the care home
 * @returns The care home data
 */
export const getCareHome = async (careHomeId: string) => {
  try {
    const response = await client.graphql({
      query: queries.getTerriiCareHome,
      variables: { id: careHomeId }
    });

    return response.data.getTerriiCareHome;
  } catch (error) {
    console.error('Error fetching care home:', error);
    throw error;
  }
};

/**
 * List all care homes
 * @returns A list of all care homes
 */
export const listCareHomes = async () => {
  try {
    console.log('Executing listCareHomes query...');
    const response = await client.graphql({
      query: queries.listTerriiCareHomes
    });

    console.log('List care homes response:', response);
    console.log('Response data structure:', JSON.stringify(response.data, null, 2));
    
    if (!response.data?.listTerriiCareHomes?.items) {
      console.log('No items property found in response');
      return [];
    }
    
    return response.data.listTerriiCareHomes.items;
  } catch (error) {
    console.error('Error listing care homes:', error);
    console.error('Full error details:', JSON.stringify(error, null, 2));
    throw error;
  }
};

/**
 * Get a resident by ID
 * @param residentId The ID of the resident
 * @returns The resident data
 */
export const getResident = async (residentId: string) => {
  try {
    const response = await client.graphql({
      query: queries.getTerriiResident,
      variables: { id: residentId }
    });
    return response.data.getTerriiResident;
  } catch (error) {
    console.error('Error fetching resident:', error);
    throw error;
  }
};

/**
 * List residents for a care home
 * @param careHomeId The ID of the care home
 * @returns A list of residents
 */
export const listResidents = async (careHomeId: string) => {
  try {
    const response = await client.graphql({
      query: queries.listTerriiResidents,
      variables: {
        filter: {
          careHomeID: { eq: careHomeId }
        }
      }
    });
    return response.data.listTerriiResidents.items;
  } catch (error) {
    console.error('Error listing residents:', error);
    throw error;
  }
};

/**
 * Create a new resident
 * @param data The resident data
 * @returns The newly created resident
 */
export const createResident = async (data: any) => {
  try {
    const response = await client.graphql({
      query: mutations.createTerriiResident,
      variables: {
        input: data
      }
    });
    return response.data.createTerriiResident;
  } catch (error) {
    console.error('Error creating resident:', error);
    throw error;
  }
};

/**
 * Update an existing resident
 * @param residentId The ID of the resident
 * @param data The data to update
 * @returns The updated resident
 */
export const updateResident = async (residentId: string, data: any) => {
  try {
    const response = await client.graphql({
      query: mutations.updateTerriiResident,
      variables: {
        input: {
          id: residentId,
          ...data
        }
      }
    });
    return response.data.updateTerriiResident;
  } catch (error) {
    console.error('Error updating resident:', error);
    throw error;
  }
};

/**
 * Get family members for a resident
 * @param residentId The ID of the resident
 * @returns A list of family members
 */
export const getResidentFamilyMembers = async (residentId: string) => {
  try {
    const response = await client.graphql({
      query: queries.listTerriiResidentFamilies,
      variables: {
        filter: {
          residentID: { eq: residentId }
        }
      }
    });
    return response.data.listTerriiResidentFamilies.items;
  } catch (error) {
    console.error('Error fetching resident family members:', error);
    throw error;
  }
};

/**
 * Add a family member to a resident
 * @param residentId The ID of the resident
 * @param familyMemberData The family member data
 * @returns The newly created family member
 */
export const addResidentFamilyMember = async (residentId: string, familyMemberData: any) => {
  try {
    const response = await client.graphql({
      query: mutations.createTerriiResidentFamily,
      variables: {
        input: {
          residentID: residentId,
          ...familyMemberData
        }
      }
    });
    return response.data.createTerriiResidentFamily;
  } catch (error) {
    console.error('Error adding resident family member:', error);
    throw error;
  }
};

/**
 * Get medical information for a resident
 * @param residentId The ID of the resident
 * @returns The resident's medical information
 */
export const getResidentMedicalInfo = async (residentId: string) => {
  try {
    const response = await client.graphql({
      query: queries.listTerriiResidentMedicals,
      variables: {
        filter: {
          residentID: { eq: residentId }
        }
      }
    });
    return response.data.listTerriiResidentMedicals.items;
  } catch (error) {
    console.error('Error fetching resident medical info:', error);
    throw error;
  }
};

/**
 * Get medications for a resident
 * @param residentId The ID of the resident
 * @returns The resident's medications
 */
export const getResidentMedications = async (residentId: string) => {
  try {
    const response = await client.graphql({
      query: queries.listTerriiResidentMedications,
      variables: {
        filter: {
          // Use the correct field name based on your schema
          medicalInfoID: { eq: residentId }
        }
      }
    });
    return response.data.listTerriiResidentMedications.items;
  } catch (error) {
    console.error('Error fetching resident medications:', error);
    throw error;
  }
};

/**
 * Get care preferences for a resident
 * @param residentId The ID of the resident
 * @returns The resident's care preferences
 */
export const getResidentCarePreferences = async (residentId: string) => {
  try {
    // Query for care preferences directly by resident ID
    const response = await client.graphql({
      query: queries.listTerriiResidentCarePreferences,
      variables: {
        filter: {
          residentID: { eq: residentId }
        }
      }
    });
    
    const preferences = response.data.listTerriiResidentCarePreferences?.items;
    if (preferences && preferences.length > 0) {
      return preferences[0];
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching resident care preferences:', error);
    throw error;
  }
};

/**
 * Get activities for a resident
 * @param residentId The ID of the resident
 * @returns The resident's activities
 */
export const getResidentActivities = async (residentId: string) => {
  try {
    const response = await client.graphql({
      query: queries.listTerriiResidentActivities,
      variables: {
        filter: {
          residentID: { eq: residentId }
        }
      }
    });
    
    // Sort activities by date (newest first) after fetching
    const activities = response.data.listTerriiResidentActivities.items;
    return activities.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error('Error fetching resident activities:', error);
    throw error;
  }
};

/**
 * List message threads for a user
 * @param userId The user ID
 * @returns List of message threads
 */
export const listMessageThreads = async (userId: string) => {
  try {
    const response = await client.graphql({
      query: queries.listTerriiMessageThreads,
      variables: {
        filter: {
          participants: { contains: userId }
        }
      }
    });
    
    return response.data.listTerriiMessageThreads.items;
  } catch (error) {
    console.error('Error listing message threads:', error);
    throw error;
  }
};

/**
 * Get a message thread by ID
 * @param threadId The thread ID
 * @returns The message thread
 */
export const getMessageThread = async (threadId: string) => {
  try {
    const response = await client.graphql({
      query: queries.getTerriiMessageThread,
      variables: { id: threadId }
    });
    
    return response.data.getTerriiMessageThread;
  } catch (error) {
    console.error('Error getting message thread:', error);
    throw error;
  }
};

/**
 * Get messages for a thread
 * @param threadId The thread ID
 * @returns List of messages
 */
export const getMessages = async (threadId: string) => {
  try {
    const response = await client.graphql({
      query: queries.listTerriiMessages,
      variables: {
        filter: {
          threadID: { eq: threadId }
        }
      }
    });
    
    // Sort messages by createdAt timestamp
    const messages = response.data.listTerriiMessages.items;
    return messages.sort((a, b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  } catch (error) {
    console.error('Error getting messages:', error);
    throw error;
  }
};

/**
 * Send a message
 * @param threadId The thread ID
 * @param senderId The sender ID
 * @param content The message content
 * @param isStaff Whether the sender is staff
 * @param attachments Optional attachments
 * @returns The created message
 */
export const sendMessage = async (
  threadId: string, 
  senderId: string, 
  content: string,
  isStaff: boolean,
  attachments?: string[]
) => {
  try {
    const message = {
      threadID: threadId,
      content: content,
      sender: senderId,  // Use sender field not senderID
      isSentByStaff: isStaff,
      attachments: attachments || []
    };
    
    const response = await client.graphql({
      query: mutations.createTerriiMessage,
      variables: {
        input: message
      }
    });
    
    return response.data.createTerriiMessage;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

/**
 * List moments
 * @param careHomeId Optional care home ID to filter by
 * @param residentId Optional resident ID to filter by
 * @returns List of moments
 */
export const listMoments = async (careHomeId?: string, residentId?: string) => {
  try {
    const filter: any = {};
    
    if (careHomeId) {
      filter.careHomeID = { eq: careHomeId };
    }
    
    if (residentId) {
      filter.residentID = { eq: residentId };
    }
    
    const response = await client.graphql({
      query: queries.listTerriiMoments,
      variables: {
        filter: Object.keys(filter).length > 0 ? filter : undefined
      }
    });
    
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
 * Create a moment
 * @param data The moment data
 * @returns The created moment
 */
export const createMoment = async (data: any) => {
  try {
    const response = await client.graphql({
      query: mutations.createTerriiMoment,
      variables: {
        input: data
      }
    });
    
    return response.data.createTerriiMoment;
  } catch (error) {
    console.error('Error creating moment:', error);
    throw error;
  }
};

/**
 * List community posts
 * @param careHomeId Optional care home ID to filter by
 * @returns List of community posts
 */
export const listCommunityPosts = async (careHomeId?: string) => {
  try {
    const filter: any = {};
    
    if (careHomeId) {
      filter.careHomeID = { eq: careHomeId };
    }
    
    const response = await client.graphql({
      query: queries.listTerriiCommunityPosts,
      variables: {
        filter: Object.keys(filter).length > 0 ? filter : undefined
      }
    });
    
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
 * @param data The post data
 * @returns The created post
 */
export const createCommunityPost = async (data: any) => {
  try {
    const response = await client.graphql({
      query: mutations.createTerriiCommunityPost,
      variables: {
        input: data
      }
    });
    
    return response.data.createTerriiCommunityPost;
  } catch (error) {
    console.error('Error creating community post:', error);
    throw error;
  }
};

/**
 * Add a comment to a community post
 * @param data The comment data
 * @returns The created comment
 */
export const addCommunityComment = async (data: any) => {
  try {
    const response = await client.graphql({
      query: mutations.createTerriiCommunityComment,
      variables: {
        input: data
      }
    });
    
    return response.data.createTerriiCommunityComment;
  } catch (error) {
    console.error('Error adding community comment:', error);
    throw error;
  }
};

/**
 * Like or unlike a community post
 * @param postId The post ID
 * @param userId The user ID
 * @param action 'like' or 'unlike'
 * @returns Success status
 */
export const togglePostLike = async (postId: string, userId: string, action: 'like' | 'unlike') => {
  try {
    // First get the current post
    const getResponse = await client.graphql({
      query: queries.getTerriiCommunityPost,
      variables: { id: postId }
    });
    
    const post = getResponse.data.getTerriiCommunityPost;
    if (!post) {
      throw new Error(`Post with ID ${postId} not found`);
    }
    
    // Ensure likes is an array
    let likes: string[] = Array.isArray(post.likes) ? [...post.likes] : [];
    
    if (action === 'like' && !likes.includes(userId)) {
      likes.push(userId);
    } else if (action === 'unlike') {
      likes = likes.filter((id: string) => id !== userId);
    }
    
    // Update the post with new likes array
    const updateResponse = await client.graphql({
      query: mutations.updateTerriiCommunityPost,
      variables: {
        input: {
          id: postId,
          likes: likes
        }
      }
    });
    
    return updateResponse.data.updateTerriiCommunityPost;
  } catch (error) {
    console.error(`Error ${action === 'like' ? 'liking' : 'unliking'} post:`, error);
    throw error;
  }
};

/**
 * Get a single community post by ID
 * @param postId The post ID
 * @returns The community post
 */
export const getCommunityPost = async (postId: string) => {
  try {
    const response = await client.graphql({
      query: queries.getTerriiCommunityPost,
      variables: { id: postId }
    });
    
    return response.data.getTerriiCommunityPost;
  } catch (error) {
    console.error('Error getting community post:', error);
    throw error;
  }
};
