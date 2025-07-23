import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { ModelSortDirection } from '../API';

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
    // Use a simplified query to avoid nested relationship issues
    const response = await client.graphql({
      query: `query GetTerriiResidentBasic($id: ID!) {
        getTerriiResident(id: $id) {
          id
          name
          room
          photo
          careHomeID
          careHome {
            id
            name
            address
            city
            postCode
            phoneNumber
            email
            website
            createdAt
            updatedAt
            __typename
          }
          dateOfBirth
          admissionDate
          status
          lastUpdate
          unreadMessages
          createdAt
          updatedAt
          terriiResidentMedicalInfoId
          terriiResidentCarePreferencesId
          terriiResidentEmergencyContactId
          __typename
        }
      }`,
      variables: { id: residentId }
    }) as any;
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
      console.log('Creating family members for resident:', newResident.id);
      console.log('Family members data:', data.familyMembers);
      
      for (const familyMember of data.familyMembers) {
        console.log('Creating family member:', familyMember);
        try {
          const familyMemberResult = await client.graphql({
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
          console.log('Family member created successfully:', familyMemberResult.data.createTerriiResidentFamily);
        } catch (familyError) {
          console.error('Error creating family member:', familyMember.name, familyError);
          throw familyError; // Re-throw to prevent silent failures
        }
      }
    } else {
      console.log('No family members provided or empty array');
      console.log('data.familyMembers:', data.familyMembers);
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
    console.log('Fetching resident with ID:', residentId);
    
    // Use basic resident query first to avoid schema issues
    const resident = await getResident(residentId);
    if (!resident) {
      throw new Error('Resident not found');
    }

    console.log('Successfully fetched basic resident data:', resident);

    // Get related data using separate queries to avoid schema issues
    const [familyMembers, activities, medicalInfo, carePreferences, emergencyContact] = await Promise.all([
      getResidentFamilyMembers(residentId).catch(err => {
        console.error('Error fetching family members:', err);
        return [];
      }),
      getResidentActivities(residentId).catch(err => {
        console.error('Error fetching activities:', err);
        return [];
      }),
      getResidentMedicalInfo(residentId).catch(err => {
        console.error('Error fetching medical info:', err);
        return [];
      }),
      getResidentCarePreferences(residentId).catch(err => {
        console.error('Error fetching care preferences:', err);
        return null;
      }),
      getResidentEmergencyContact(residentId).catch(err => {
        console.error('Error fetching emergency contact:', err);
        return null;
      })
    ]);

    console.log('Successfully fetched all related data');
    console.log('Family members:', familyMembers?.length || 0);
    console.log('Activities:', activities?.length || 0);
    console.log('Medical info records:', medicalInfo?.length || 0);
    console.log('Care preferences:', carePreferences ? 'Found' : 'None');
    console.log('Emergency contact records:', emergencyContact ? 1 : 0);

    const result = {
      ...resident,
      familyMembers: familyMembers || [],
      activities: activities || [],
      medicalInfo: medicalInfo && medicalInfo.length > 0 ? medicalInfo[0] : null,
      carePreferences: carePreferences, // carePreferences is already a single object or null
      emergencyContact: emergencyContact
    };

    console.log('Final resident data structure:', {
      hasBasicInfo: !!resident,
      hasFamilyMembers: (familyMembers?.length || 0) > 0,
      hasMedicalInfo: !!(medicalInfo && medicalInfo.length > 0),
      hasCarePreferences: !!carePreferences, // carePreferences is now a single object
      hasEmergencyContact: !!emergencyContact,
      hasActivities: (activities?.length || 0) > 0
    });

    return result;
  } catch (error: any) {
    console.error('Error fetching resident with full data:', error);
    if (error.errors) {
      console.error('GraphQL specific errors:', error.errors);
    }
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
    // Use a custom mutation to avoid schema validation issues with family members
    const response = await client.graphql({
      query: `mutation UpdateTerriiResidentCustom(
        $input: UpdateTerriiResidentInput!
      ) {
        updateTerriiResident(input: $input) {
          id
          name
          room
          photo
          careHomeID
          dateOfBirth
          admissionDate
          status
          lastUpdate
          unreadMessages
          createdAt
          updatedAt
          terriiResidentMedicalInfoId
          terriiResidentCarePreferencesId
          terriiResidentEmergencyContactId
          __typename
        }
      }`,
      variables: {
        input: {
          id: residentId,
          ...data
        }
      }
    }) as any;
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
    console.log('Adding family member to resident:', residentId);
    console.log('Family member data:', familyMemberData);
    
    const response = await client.graphql({
      query: mutations.createTerriiResidentFamily,
      variables: {
        input: {
          residentID: residentId,
          ...familyMemberData
        }
      }
    });
    
    console.log('Family member added successfully:', response.data.createTerriiResidentFamily);
    return response.data.createTerriiResidentFamily;
  } catch (error) {
    console.error('Error adding resident family member:', error);
    console.error('Input data was:', { residentID: residentId, ...familyMemberData });
    throw error;
  }
};

/**
 * Delete a family member
 * @param familyMemberId The ID of the family member to delete
 * @returns Success confirmation
 */
export const deleteResidentFamilyMember = async (familyMemberId: string) => {
  try {
    console.log('Deleting family member with ID:', familyMemberId);
    
    const response = await client.graphql({
      query: mutations.deleteTerriiResidentFamily,
      variables: {
        input: {
          id: familyMemberId
        }
      }
    });
    
    console.log('Family member deleted successfully:', response.data.deleteTerriiResidentFamily);
    return response.data.deleteTerriiResidentFamily;
  } catch (error) {
    console.error('Error deleting family member:', error);
    throw error;
  }
};

/**
 * Invite family member to register as a user
 * @param familyMemberId The ID of the family member
 * @param residentName The name of the resident (for email context)
 * @returns Success status
 */
export const inviteFamilyMemberToRegister = async (familyMemberId: string, residentName: string) => {
  try {
    // Get family member details
    const familyResponse = await client.graphql({
      query: queries.getTerriiResidentFamily,
      variables: { id: familyMemberId }
    });
    
    const familyMember = familyResponse.data.getTerriiResidentFamily;
    if (!familyMember || !familyMember.email) {
      throw new Error('Family member not found or no email address');
    }
    
    // TODO: Send invitation email (integrate with your email service)
    console.log(`Sending invitation to ${familyMember.email} for ${residentName}`);
    
    // For now, just log the invitation
    return {
      success: true,
      email: familyMember.email,
      message: `Invitation sent to ${familyMember.name}`
    };
  } catch (error) {
    console.error('Error inviting family member:', error);
    throw error;
  }
};

/**
 * Link an existing User to a family member record (simplified version)
 * @param userId The ID of the User account
 * @param familyMemberEmail The email of the family member to link
 * @param careHomeId The care home ID (for creating TerriiUserProfile)
 * @returns Success status
 */
export const linkUserToFamilyMemberByEmail = async (userId: string, familyMemberEmail: string, careHomeId: string) => {
  try {
    // Create a TerriiUserProfile with FAMILY role
    // Note: This will fail until we regenerate types, but shows the intent
    await createTerriiUserProfile(userId, careHomeId, 'CARE_STAFF'); // Temporarily use CARE_STAFF
    
    console.log(`Linked user ${userId} to family member with email ${familyMemberEmail}`);
    
    return {
      success: true,
      message: 'User linked to family member'
    };
  } catch (error) {
    console.error('Error linking user to family member:', error);
    throw error;
  }
};

/**
 * Link an existing User to a family member record
 * @param userId The ID of the User account
 * @param familyMemberEmail The email of the family member to link
 * @returns The family member record (note: linking is currently handled via TerriiUserProfile creation)
 */
export const linkUserToFamilyMember = async (userId: string, familyMemberEmail: string) => {
  try {
    // First find the family member by email
    const familyResponse = await client.graphql({
      query: queries.listTerriiResidentFamilies,
      variables: {
        filter: {
          email: { eq: familyMemberEmail }
        }
      }
    });
    
    const familyMembers = familyResponse.data.listTerriiResidentFamilies.items;
    if (familyMembers.length === 0) {
      throw new Error('Family member not found with that email');
    }
    
    const familyMember = familyMembers[0];
    
    // Get resident info to get care home ID
    const residentResponse = await client.graphql({
      query: queries.getTerriiResident,
      variables: { id: familyMember.residentID }
    });
    
    const resident = residentResponse.data.getTerriiResident;
    if (!resident) {
      throw new Error('Resident not found');
    }
    
    // Create a TerriiUserProfile for the family member
    await client.graphql({
      query: mutations.createTerriiUserProfile,
      variables: {
        input: {
          userID: userId,
          role: 'FAMILY' as any, // Use FAMILY role for family members
          careHomeID: resident.careHomeID
        }
      }
    });
    
    return familyMember;
  } catch (error) {
    console.error('Error linking user to family member:', error);
    throw error;
  }
};

/**
 * Get family members who are registered users (have User accounts)
 * Note: Currently returns all family members since we don't have userID/isRegistered fields in the schema
 * @param residentId The ID of the resident
 * @returns Family members
 */
export const getRegisteredFamilyMembers = async (residentId: string) => {
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
    console.error('Error fetching registered family members:', error);
    throw error;
  }
};

/**
 * Get all family members (registered and unregistered)
 * @param residentId The ID of the resident
 * @returns All family members with registration status
 */
export const getAllFamilyMembers = async (residentId: string) => {
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
    console.error('Error fetching all family members:', error);
    throw error;
  }
};

/**
 * Get family members for message thread participants (simplified)
 * @param residentId The ID of the resident  
 * @returns List of family member emails for messaging
 */
export const getFamilyMemberEmails = async (residentId: string) => {
  try {
    const familyMembers = await getResidentFamilyMembers(residentId);
    return familyMembers
      .filter(member => member.email)
      .map(member => member.email);
  } catch (error) {
    console.error('Error getting family member emails:', error);
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
 * @returns Array of messages
 */
export const getMessages = async (threadId: string) => {
  try {
    const response = await client.graphql({
      query: queries.messagesByThread,
      variables: { 
        threadID: threadId,
        sortDirection: ModelSortDirection.ASC // Oldest first
      }
    });

    return response.data.messagesByThread.items;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};/**
 * Send a message
 * @param threadId The thread ID
 * @param content The message content
 * @param senderName The name of the sender
 * @param isStaff Whether the sender is staff
 * @param attachmentURL Optional attachment URL
 * @returns The created message
 */
export const sendMessage = async (
  threadId: string, 
  content: string,
  senderName: string, 
  isStaff: boolean,
  attachmentURL?: string
) => {
  try {
    const messageInput = {
      threadID: threadId,
      content: content,
      sender: senderName,
      isSentByStaff: isStaff,
      reactions: [],
      attachmentURL: attachmentURL || null
    };
    
    console.log('Creating message with input:', messageInput);
    
    const response = await client.graphql({
      query: mutations.createTerriiMessage,
      variables: {
        input: messageInput
      }
    });
    
    const newMessage = response.data.createTerriiMessage;
    
    // Update thread's last message and unread count
    try {
      await client.graphql({
        query: mutations.updateTerriiMessageThread,
        variables: {
          input: {
            id: threadId,
            unreadCount: (isStaff ? 1 : 0), // If staff sends, family has unread message
            terriiMessageThreadLastMessageId: newMessage.id
          }
        }
      });
    } catch (updateError) {
      console.warn('Failed to update thread last message:', updateError);
      // Don't fail the whole operation
    }
    
    return newMessage;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

/**
 * Create a new message thread
 * @param residentId The resident ID this thread is about
 * @param participantIds Array of participant IDs (staff members)
 * @param title Optional thread title
 * @param isStarred Whether the thread is starred
 * @returns The created message thread
 */
export const createMessageThread = async (
  residentId: string,
  participantIds: string[],
  title?: string,
  isStarred = false
) => {
  try {
    const thread = {
      residentID: residentId,
      participants: participantIds,
      isStarred: isStarred,
      isArchived: false,
      unreadCount: 0
    };
    
    const response = await client.graphql({
      query: mutations.createTerriiMessageThread,
      variables: {
        input: thread
      }
    });
    
    return response.data.createTerriiMessageThread;
  } catch (error) {
    console.error('Error creating message thread:', error);
    throw error;
  }
};

/**
 * Create a new message thread with initial message
 * @param residentId The resident ID this thread is about
 * @param familyMemberIds Array of family member IDs to include in thread
 * @param initialMessage The first message content
 * @param senderName The name of the sender
 * @param isStaff Whether the sender is staff
 * @returns The created message thread with the first message
 */
export const createThreadWithMessage = async (
  residentId: string,
  familyMemberIds: string[],
  initialMessage: string,
  senderName: string,
  isStaff: boolean = true
) => {
  try {
    // For now, use family member emails as participants
    // In the future, this will use actual user IDs once family members are registered
    const familyMembers = await getResidentFamilyMembers(residentId);
    const selectedFamilyEmails = familyMembers
      .filter(member => familyMemberIds.includes(member.id) && member.email)
      .map(member => member.email)
      .filter(email => email != null) as string[]; // Filter out null/undefined emails
    
    // Create participants array with staff sender and family member emails
    const participants = [senderName, ...selectedFamilyEmails];
    
    // First create the thread
    const thread = await createMessageThread(residentId, participants);
    
    // Then send the initial message
    const firstMessage = await sendMessage(
      thread.id,
      initialMessage,
      senderName,
      isStaff
    );
    
    return {
      thread,
      firstMessage
    };
  } catch (error) {
    console.error('Error creating thread with message:', error);
    throw error;
  }
};

/**
 * Update a message thread
 * @param threadId The thread ID
 * @param updates The updates to apply
 * @returns The updated thread
 */
export const updateMessageThread = async (threadId: string, updates: any) => {
  try {
    const response = await client.graphql({
      query: mutations.updateTerriiMessageThread,
      variables: {
        input: {
          id: threadId,
          ...updates
        }
      }
    });
    
    return response.data.updateTerriiMessageThread;
  } catch (error) {
    console.error('Error updating message thread:', error);
    throw error;
  }
};

/**
 * Get messages for a thread using the messagesByThread query for better performance
 * @param threadId The thread ID
 * @param limit Optional limit (defaults to 50)
 * @param nextToken Optional pagination token
 * @returns Messages and pagination info
 */
export const getMessagesByThread = async (threadId: string, limit = 50, nextToken?: string) => {
  try {
    const response = await client.graphql({
      query: queries.messagesByThread,
      variables: {
        threadID: threadId,
        limit: limit,
        nextToken: nextToken
        // Remove sortDirection - let it use default
      }
    });
    
    return {
      items: response.data.messagesByThread.items,
      nextToken: response.data.messagesByThread.nextToken
    };
  } catch (error) {
    console.error('Error getting messages by thread:', error);
    throw error;
  }
};

/**
 * Mark a message thread as read
 * @param threadId The thread ID
 * @returns The updated thread
 */
export const markThreadAsRead = async (threadId: string) => {
  try {
    return await updateMessageThread(threadId, {
      unreadCount: 0
    });
  } catch (error) {
    console.error('Error marking thread as read:', error);
    throw error;
  }
};

/**
 * Get message threads for a care home with resident information
 * @param careHomeId The care home ID
 * @returns Message threads with populated resident data
 */
export const getMessageThreadsForCareHome = async (careHomeId: string) => {
  try {
    // First get all residents for this care home
    const residents = await listResidents(careHomeId);
    
    if (residents.length === 0) {
      return [];
    }
    
    // Get message threads for each resident (since we can't use `in` filter)
    const allThreads = [];
    
    for (const resident of residents) {
      try {
        const response = await client.graphql({
          query: queries.listTerriiMessageThreads,
          variables: {
            filter: {
              residentID: { eq: resident.id }
            }
          }
        });
        
        allThreads.push(...response.data.listTerriiMessageThreads.items);
      } catch (error) {
        console.error(`Error getting threads for resident ${resident.id}:`, error);
        // Continue with other residents
      }
    }
    
    // Sort by lastMessage.createdAt or thread createdAt (newest first)
    return allThreads.sort((a, b) => {
      const timeA = new Date(a.lastMessage?.createdAt || a.createdAt || new Date().toISOString()).getTime();
      const timeB = new Date(b.lastMessage?.createdAt || b.createdAt || new Date().toISOString()).getTime();
      return timeB - timeA;
    });
  } catch (error) {
    console.error('Error getting message threads for care home:', error);
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

// =============================================================================
// MESSAGING FUNCTIONS
// =============================================================================

/**
 * List message threads for a care home
 * @param careHomeId The ID of the care home
 * @returns A list of message threads
 */
export const listMessageThreadsByCareHome = async (careHomeId: string) => {
  try {
    const response = await client.graphql({
      query: queries.listTerriiMessageThreads,
      variables: {
        filter: {
          residentID: { 
            ne: null // Get all threads that have a resident
          }
        }
      }
    });
    
    // Filter threads by care home through resident relationship
    const allThreads = response.data.listTerriiMessageThreads.items;
    const careHomeThreads = allThreads.filter((thread: any) => 
      thread.resident?.careHomeID === careHomeId
    );
    
    return careHomeThreads;
  } catch (error) {
    console.error('Error listing message threads for care home:', error);
    throw error;
  }
};

/**
 * Toggle thread starred status
 * @param threadId The ID of the thread
 * @param isStarred The new starred status
 * @returns The updated thread
 */
export const toggleThreadStarred = async (threadId: string, isStarred: boolean) => {
  try {
    const response = await client.graphql({
      query: mutations.updateTerriiMessageThread,
      variables: {
        input: {
          id: threadId,
          isStarred: isStarred
        }
      }
    });
    return response.data.updateTerriiMessageThread;
  } catch (error) {
    console.error('Error toggling thread starred status:', error);
    throw error;
  }
};

/**
 * Archive/unarchive a thread
 * @param threadId The ID of the thread
 * @param isArchived The new archived status
 * @returns The updated thread
 */
export const toggleThreadArchived = async (threadId: string, isArchived: boolean) => {
  try {
    const response = await client.graphql({
      query: mutations.updateTerriiMessageThread,
      variables: {
        input: {
          id: threadId,
          isArchived: isArchived
        }
      }
    });
    return response.data.updateTerriiMessageThread;
  } catch (error) {
    console.error('Error toggling thread archived status:', error);
    throw error;
  }
};
