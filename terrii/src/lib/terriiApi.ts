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
  role: 'ADMIN' | 'CARE_STAFF' | 'MANAGER',
  profilePicture?: string
) => {
  try {
    const userProfileData = {
      userID: userId,
      careHomeID: careHomeId,
      role: role as any, // Cast to any to handle enum conversion
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
 * Update a care home
 * @param careHomeId The ID of the care home
 * @param data The data to update
 * @returns The updated care home
 */
export const updateCareHome = async (careHomeId: string, data: any) => {
  try {
    const response = await client.graphql({
      query: mutations.updateTerriiCareHome,
      variables: {
        input: {
          id: careHomeId,
          ...data
        }
      }
    });
    return response.data.updateTerriiCareHome;
  } catch (error) {
    console.error('Error updating care home:', error);
    throw error;
  }
};

/**
 * Delete a care home
 * @param careHomeId The ID of the care home
 * @returns The deleted care home
 */
export const deleteCareHome = async (careHomeId: string) => {
  try {
    const response = await client.graphql({
      query: mutations.deleteTerriiCareHome,
      variables: {
        input: { id: careHomeId }
      }
    });
    return response.data.deleteTerriiCareHome;
  } catch (error) {
    console.error('Error deleting care home:', error);
    throw error;
  }
};

/**
 * List all regular users (non-TERRii)
 * @returns A list of all users
 */
export const listAllUsers = async () => {
  try {
    const response = await client.graphql({
      query: queries.listUsers
    });
    return response.data.listUsers.items;
  } catch (error) {
    console.error('Error listing users:', error);
    throw error;
  }
};

/**
 * Get users without TERRii profiles (unlinked users)
 * @returns A list of users without TERRii profiles
 */
export const getUsersWithoutTERRiiProfile = async () => {
  try {
    // Get all users
    const allUsers = await listAllUsers();
    
    // Get all TERRii profiles
    const profilesResponse = await client.graphql({
      query: queries.listTerriiUserProfiles
    });
    const profiles = profilesResponse.data.listTerriiUserProfiles.items;
    
    // Filter users who don't have TERRii profiles
    const linkedUserIds = profiles.map((profile: any) => profile.userID);
    const unlinkedUsers = allUsers.filter((user: any) => 
      !linkedUserIds.includes(user.id) && 
      user.userType === 'APP_USER' // Only include regular app users, not admins
    );
    
    return unlinkedUsers;
  } catch (error) {
    console.error('Error getting users without TERRii profiles:', error);
    throw error;
  }
};

/**
 * Link a user to a care home with a specific role
 * @param userId The user ID
 * @param careHomeId The care home ID
 * @param role The role to assign
 * @returns The created TERRii user profile
 */
export const linkUserToCareHome = async (userId: string, careHomeId: string, role: 'ADMIN' | 'CARE_STAFF' | 'MANAGER') => {
  try {
    return await createTerriiUserProfile(userId, careHomeId, role);
  } catch (error) {
    console.error('Error linking user to care home:', error);
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
 * Create a new resident with all related data
 * @param data The resident data including medical info, family members, etc.
 * @returns The newly created resident with all related data
 */
export const createResident = async (data: any) => {
  try {
    // First create the basic resident record
    const residentResponse = await client.graphql({
      query: mutations.createTerriiResident,
      variables: {
        input: {
          name: data.name,
          room: data.room,
          careHomeID: data.careHomeID,
          dateOfBirth: data.dateOfBirth,
          admissionDate: data.admissionDate,
          status: data.status || 'STABLE',
          lastUpdate: data.lastUpdate || new Date().toISOString(),
          unreadMessages: data.unreadMessages || 0,
          photo: data.photo
        }
      }
    });

    const newResident = residentResponse.data.createTerriiResident;

    // Create medical information if provided
    if (data.medicalInfo) {
      await client.graphql({
        query: mutations.createTerriiResidentMedical,
        variables: {
          input: {
            residentID: newResident.id,
            primaryPhysician: data.medicalInfo.primaryPhysician,
            conditions: data.medicalInfo.conditions || [],
            allergies: data.medicalInfo.allergies || [],
            dietaryRestrictions: data.medicalInfo.dietaryRestrictions || []
          }
        }
      });
    }

    // Create emergency contact if provided
    if (data.emergencyContact) {
      await client.graphql({
        query: mutations.createTerriiResidentEmergencyContact,
        variables: {
          input: {
            residentID: newResident.id,
            name: data.emergencyContact.name,
            relationship: data.emergencyContact.relationship,
            phone: data.emergencyContact.phone,
            email: data.emergencyContact.email
          }
        }
      });
    }

    // Create care preferences if provided
    if (data.carePreferences) {
      await client.graphql({
        query: mutations.createTerriiResidentCarePreferences,
        variables: {
          input: {
            residentID: newResident.id,
            interests: data.carePreferences.interests || [],
            routine: data.carePreferences.routine,
            communication: data.carePreferences.communication,
            mobility: data.carePreferences.mobility
          }
        }
      });
    }

    // Create family members if provided
    if (data.familyMembers && data.familyMembers.length > 0) {
      for (const familyMember of data.familyMembers) {
        await client.graphql({
          query: mutations.createTerriiResidentFamily,
          variables: {
            input: {
              residentID: newResident.id,
              name: familyMember.name,
              relationship: familyMember.relationship,
              phone: familyMember.phone,
              email: familyMember.email
            }
          }
        });
      }
    }

    // Return the created resident with full data
    return await getResidentWithFullData(newResident.id);
  } catch (error) {
    console.error('Error creating resident:', error);
    throw error;
  }
};

/**
 * Get resident with all related data (full profile)
 * @param residentId The ID of the resident
 * @returns The resident with all related data
 */
export const getResidentWithFullData = async (residentId: string) => {
  try {
    // Get the basic resident data
    const residentResponse = await client.graphql({
      query: queries.getTerriiResident,
      variables: { id: residentId }
    });
    
    const resident = residentResponse.data.getTerriiResident;
    if (!resident) {
      throw new Error('Resident not found');
    }

    // Get all related data
    const [familyMembers, medicalInfo, carePreferences, activities, emergencyContact] = await Promise.all([
      getResidentFamilyMembers(residentId),
      getResidentMedicalInfo(residentId),
      getResidentCarePreferences(residentId),
      getResidentActivities(residentId),
      getResidentEmergencyContact(residentId)
    ]);

    return {
      ...resident,
      familyMembers: familyMembers || [],
      medicalInfo: medicalInfo?.[0] || null,
      carePreferences: carePreferences || null,
      activities: activities || [],
      emergencyContact: emergencyContact || null
    };
  } catch (error) {
    console.error('Error fetching resident with full data:', error);
    throw error;
  }
};

/**
 * Get emergency contact for a resident
 * @param residentId The ID of the resident
 * @returns The resident's emergency contact
 */
export const getResidentEmergencyContact = async (residentId: string) => {
  try {
    const response = await client.graphql({
      query: queries.listTerriiResidentEmergencyContacts,
      variables: {
        filter: {
          residentID: { eq: residentId }
        }
      }
    });
    
    const contacts = response.data.listTerriiResidentEmergencyContacts?.items;
    if (contacts && contacts.length > 0) {
      return contacts[0];
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching resident emergency contact:', error);
    throw error;
  }
};

/**
 * Add an activity for a resident
 * @param residentId The ID of the resident
 * @param activityData The activity data
 * @returns The newly created activity
 */
export const addResidentActivity = async (residentId: string, activityData: any) => {
  try {
    // Build comprehensive notes that include mood and health status if provided
    let notes = activityData.notes || '';
    
    if (activityData.mood || activityData.healthStatus || activityData.familyNotified) {
      const additionalInfo = [];
      if (activityData.mood) {
        additionalInfo.push(`Mood: ${activityData.mood}`);
      }
      if (activityData.healthStatus) {
        additionalInfo.push(`Health Status: ${activityData.healthStatus}`);
      }
      if (activityData.familyNotified) {
        additionalInfo.push(`Family notified: Yes`);
      }
      
      if (additionalInfo.length > 0) {
        notes = notes + (notes ? '\n\n' : '') + additionalInfo.join(', ');
      }
    }

    const response = await client.graphql({
      query: mutations.createTerriiResidentActivity,
      variables: {
        input: {
          residentID: residentId,
          date: activityData.date || new Date().toISOString().split('T')[0],
          activity: activityData.activity,
          notes: notes,
          staff: activityData.staff
        }
      }
    });
    return response.data.createTerriiResidentActivity;
  } catch (error) {
    console.error('Error adding resident activity:', error);
    throw error;
  }
};

/**
 * Add a resident activity and update the resident's last update time
 * This ensures the resident's status is updated correctly
 * @param residentId The ID of the resident
 * @param activityData The activity data to add
 * @returns Object containing both the activity and updated resident
 */
export const addResidentActivityWithUpdate = async (residentId: string, activityData: any) => {
  try {
    // First add the activity
    const activity = await addResidentActivity(residentId, activityData);
    
    // Then update the resident's lastUpdate field
    const updateResponse = await client.graphql({
      query: mutations.updateTerriiResident,
      variables: {
        input: {
          id: residentId,
          lastUpdate: new Date().toISOString()
        }
      }
    });
    
    return {
      activity: activity,
      resident: updateResponse.data.updateTerriiResident
    };
  } catch (error) {
    console.error('Error adding resident activity with update:', error);
    throw error;
  }
};

/**
 * Update resident status and last update time
 * @param residentId The ID of the resident
 * @param status The new status
 * @param notes Optional notes for the update
 * @returns The updated resident
 */
export const updateResidentStatus = async (residentId: string, status: string, notes?: string) => {
  try {
    const updateData: any = {
      id: residentId,
      status: status,
      lastUpdate: new Date().toISOString()
    };

    const response = await client.graphql({
      query: mutations.updateTerriiResident,
      variables: {
        input: updateData
      }
    });

    // If notes are provided, add an activity record
    if (notes) {
      await addResidentActivity(residentId, {
        activity: 'Status Update',
        notes: notes,
        staff: 'System' // You might want to pass the current user's name here
      });
    }

    return response.data.updateTerriiResident;
  } catch (error) {
    console.error('Error updating resident status:', error);
    throw error;
  }
};

/**
 * Delete a resident and all related data
 * @param residentId The ID of the resident
 * @returns Success confirmation
 */
export const deleteResident = async (residentId: string) => {
  try {
    // Note: In a real implementation, you might want to soft delete or archive residents
    // instead of permanently deleting them for data retention purposes
    
    const response = await client.graphql({
      query: mutations.deleteTerriiResident,
      variables: {
        input: { id: residentId }
      }
    });
    
    return response.data.deleteTerriiResident;
  } catch (error) {
    console.error('Error deleting resident:', error);
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
    
    // Sort activities by createdAt (newest first) - use createdAt for better time precision
    const activities = response.data.listTerriiResidentActivities.items;
    return activities.sort((a, b) => {
      const timeA = new Date(a.createdAt || a.date).getTime();
      const timeB = new Date(b.createdAt || b.date).getTime();
      return timeB - timeA; // Newest first
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
export const togglePostLike = async (postId: string, action: 'like' | 'unlike') => {
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
    
    // Calculate new likes count
    let newLikesCount = post.likes || 0;
    if (action === 'like') {
      newLikesCount += 1;
    } else if (action === 'unlike' && newLikesCount > 0) {
      newLikesCount -= 1;
    }
    
    // Update the post with new likes count
    const updateResponse = await client.graphql({
      query: mutations.updateTerriiCommunityPost,
      variables: {
        input: {
          id: postId,
          likes: newLikesCount
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
