/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createMyChats = /* GraphQL */ `mutation CreateMyChats(
  $input: CreateMyChatsInput!
  $condition: ModelMyChatsConditionInput
) {
  createMyChats(input: $input, condition: $condition) {
    id
    unreadMessages
    lastMessageDateTime
    lastMessage
    chatName
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    ChatRoom {
      id
      name
      image
      Messages {
        nextToken
        __typename
      }
      LastMessage {
        id
        chatroomID
        createdAt
        text
        userID
        mediaS3URL
        needsModeration
        moderationLabel
        moderationScore
        updatedAt
        messageUserId
        __typename
      }
      users {
        nextToken
        __typename
      }
      isChatBot
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
    chatImageS3URL
    createdAt
    updatedAt
    myChatsUserId
    myChatsChatRoomId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMyChatsMutationVariables,
  APITypes.CreateMyChatsMutation
>;
export const updateMyChats = /* GraphQL */ `mutation UpdateMyChats(
  $input: UpdateMyChatsInput!
  $condition: ModelMyChatsConditionInput
) {
  updateMyChats(input: $input, condition: $condition) {
    id
    unreadMessages
    lastMessageDateTime
    lastMessage
    chatName
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    ChatRoom {
      id
      name
      image
      Messages {
        nextToken
        __typename
      }
      LastMessage {
        id
        chatroomID
        createdAt
        text
        userID
        mediaS3URL
        needsModeration
        moderationLabel
        moderationScore
        updatedAt
        messageUserId
        __typename
      }
      users {
        nextToken
        __typename
      }
      isChatBot
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
    chatImageS3URL
    createdAt
    updatedAt
    myChatsUserId
    myChatsChatRoomId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMyChatsMutationVariables,
  APITypes.UpdateMyChatsMutation
>;
export const deleteMyChats = /* GraphQL */ `mutation DeleteMyChats(
  $input: DeleteMyChatsInput!
  $condition: ModelMyChatsConditionInput
) {
  deleteMyChats(input: $input, condition: $condition) {
    id
    unreadMessages
    lastMessageDateTime
    lastMessage
    chatName
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    ChatRoom {
      id
      name
      image
      Messages {
        nextToken
        __typename
      }
      LastMessage {
        id
        chatroomID
        createdAt
        text
        userID
        mediaS3URL
        needsModeration
        moderationLabel
        moderationScore
        updatedAt
        messageUserId
        __typename
      }
      users {
        nextToken
        __typename
      }
      isChatBot
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
    chatImageS3URL
    createdAt
    updatedAt
    myChatsUserId
    myChatsChatRoomId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMyChatsMutationVariables,
  APITypes.DeleteMyChatsMutation
>;
export const createDebugInfo = /* GraphQL */ `mutation CreateDebugInfo(
  $input: CreateDebugInfoInput!
  $condition: ModelDebugInfoConditionInput
) {
  createDebugInfo(input: $input, condition: $condition) {
    id
    user
    Logging
    Test
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDebugInfoMutationVariables,
  APITypes.CreateDebugInfoMutation
>;
export const updateDebugInfo = /* GraphQL */ `mutation UpdateDebugInfo(
  $input: UpdateDebugInfoInput!
  $condition: ModelDebugInfoConditionInput
) {
  updateDebugInfo(input: $input, condition: $condition) {
    id
    user
    Logging
    Test
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDebugInfoMutationVariables,
  APITypes.UpdateDebugInfoMutation
>;
export const deleteDebugInfo = /* GraphQL */ `mutation DeleteDebugInfo(
  $input: DeleteDebugInfoInput!
  $condition: ModelDebugInfoConditionInput
) {
  deleteDebugInfo(input: $input, condition: $condition) {
    id
    user
    Logging
    Test
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDebugInfoMutationVariables,
  APITypes.DeleteDebugInfoMutation
>;
export const createMyFriends = /* GraphQL */ `mutation CreateMyFriends(
  $input: CreateMyFriendsInput!
  $condition: ModelMyFriendsConditionInput
) {
  createMyFriends(input: $input, condition: $condition) {
    id
    status
    Users {
      items {
        id
        myFriendsID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMyFriendsMutationVariables,
  APITypes.CreateMyFriendsMutation
>;
export const updateMyFriends = /* GraphQL */ `mutation UpdateMyFriends(
  $input: UpdateMyFriendsInput!
  $condition: ModelMyFriendsConditionInput
) {
  updateMyFriends(input: $input, condition: $condition) {
    id
    status
    Users {
      items {
        id
        myFriendsID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMyFriendsMutationVariables,
  APITypes.UpdateMyFriendsMutation
>;
export const deleteMyFriends = /* GraphQL */ `mutation DeleteMyFriends(
  $input: DeleteMyFriendsInput!
  $condition: ModelMyFriendsConditionInput
) {
  deleteMyFriends(input: $input, condition: $condition) {
    id
    status
    Users {
      items {
        id
        myFriendsID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMyFriendsMutationVariables,
  APITypes.DeleteMyFriendsMutation
>;
export const createExpoNotifications = /* GraphQL */ `mutation CreateExpoNotifications(
  $input: CreateExpoNotificationsInput!
  $condition: ModelExpoNotificationsConditionInput
) {
  createExpoNotifications(input: $input, condition: $condition) {
    id
    title
    description
    seen
    data
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    CommunityPost {
      id
      text
      mediaS3Key
      dateTime
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      CommunityComments {
        nextToken
        __typename
      }
      CommunityLikes {
        nextToken
        __typename
      }
      CommunityPostPoll {
        nextToken
        __typename
      }
      communitygroupID
      Guidance {
        id
        title
        shortDesc
        longDesc
        thumbURL
        date
        time
        estTime
        deleted
        location
        author
        S3ObjectKey
        status
        active
        lowerCaseTitle
        lowerCaseShortDesc
        scheduleDateTime
        createdAt
        updatedAt
        guidanceGuidanceTypesId
        __typename
      }
      needsModeration
      moderationLabel
      moderationScore
      isScheduled
      createdAt
      updatedAt
      communityPostUserId
      communityPostGuidanceId
      __typename
    }
    CommunityComment {
      id
      text
      likes
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      communitypostID
      communityCommentUserId
      createdAt
      parentCommentID
      replies {
        nextToken
        __typename
      }
      CommunityCommentLikes {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
    CommunityLikes {
      id
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      communitypostID
      createdAt
      updatedAt
      communityLikesUserId
      __typename
    }
    Guidance {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    NotificationType
    createdAt
    updatedAt
    expoNotificationsUserId
    expoNotificationsCommunityPostId
    expoNotificationsCommunityCommentId
    expoNotificationsCommunityLikesId
    expoNotificationsGuidanceId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExpoNotificationsMutationVariables,
  APITypes.CreateExpoNotificationsMutation
>;
export const updateExpoNotifications = /* GraphQL */ `mutation UpdateExpoNotifications(
  $input: UpdateExpoNotificationsInput!
  $condition: ModelExpoNotificationsConditionInput
) {
  updateExpoNotifications(input: $input, condition: $condition) {
    id
    title
    description
    seen
    data
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    CommunityPost {
      id
      text
      mediaS3Key
      dateTime
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      CommunityComments {
        nextToken
        __typename
      }
      CommunityLikes {
        nextToken
        __typename
      }
      CommunityPostPoll {
        nextToken
        __typename
      }
      communitygroupID
      Guidance {
        id
        title
        shortDesc
        longDesc
        thumbURL
        date
        time
        estTime
        deleted
        location
        author
        S3ObjectKey
        status
        active
        lowerCaseTitle
        lowerCaseShortDesc
        scheduleDateTime
        createdAt
        updatedAt
        guidanceGuidanceTypesId
        __typename
      }
      needsModeration
      moderationLabel
      moderationScore
      isScheduled
      createdAt
      updatedAt
      communityPostUserId
      communityPostGuidanceId
      __typename
    }
    CommunityComment {
      id
      text
      likes
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      communitypostID
      communityCommentUserId
      createdAt
      parentCommentID
      replies {
        nextToken
        __typename
      }
      CommunityCommentLikes {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
    CommunityLikes {
      id
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      communitypostID
      createdAt
      updatedAt
      communityLikesUserId
      __typename
    }
    Guidance {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    NotificationType
    createdAt
    updatedAt
    expoNotificationsUserId
    expoNotificationsCommunityPostId
    expoNotificationsCommunityCommentId
    expoNotificationsCommunityLikesId
    expoNotificationsGuidanceId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExpoNotificationsMutationVariables,
  APITypes.UpdateExpoNotificationsMutation
>;
export const deleteExpoNotifications = /* GraphQL */ `mutation DeleteExpoNotifications(
  $input: DeleteExpoNotificationsInput!
  $condition: ModelExpoNotificationsConditionInput
) {
  deleteExpoNotifications(input: $input, condition: $condition) {
    id
    title
    description
    seen
    data
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    CommunityPost {
      id
      text
      mediaS3Key
      dateTime
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      CommunityComments {
        nextToken
        __typename
      }
      CommunityLikes {
        nextToken
        __typename
      }
      CommunityPostPoll {
        nextToken
        __typename
      }
      communitygroupID
      Guidance {
        id
        title
        shortDesc
        longDesc
        thumbURL
        date
        time
        estTime
        deleted
        location
        author
        S3ObjectKey
        status
        active
        lowerCaseTitle
        lowerCaseShortDesc
        scheduleDateTime
        createdAt
        updatedAt
        guidanceGuidanceTypesId
        __typename
      }
      needsModeration
      moderationLabel
      moderationScore
      isScheduled
      createdAt
      updatedAt
      communityPostUserId
      communityPostGuidanceId
      __typename
    }
    CommunityComment {
      id
      text
      likes
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      communitypostID
      communityCommentUserId
      createdAt
      parentCommentID
      replies {
        nextToken
        __typename
      }
      CommunityCommentLikes {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
    CommunityLikes {
      id
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      communitypostID
      createdAt
      updatedAt
      communityLikesUserId
      __typename
    }
    Guidance {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    NotificationType
    createdAt
    updatedAt
    expoNotificationsUserId
    expoNotificationsCommunityPostId
    expoNotificationsCommunityCommentId
    expoNotificationsCommunityLikesId
    expoNotificationsGuidanceId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExpoNotificationsMutationVariables,
  APITypes.DeleteExpoNotificationsMutation
>;
export const createSystemInfo = /* GraphQL */ `mutation CreateSystemInfo(
  $input: CreateSystemInfoInput!
  $condition: ModelSystemInfoConditionInput
) {
  createSystemInfo(input: $input, condition: $condition) {
    id
    name
    value
    options
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSystemInfoMutationVariables,
  APITypes.CreateSystemInfoMutation
>;
export const updateSystemInfo = /* GraphQL */ `mutation UpdateSystemInfo(
  $input: UpdateSystemInfoInput!
  $condition: ModelSystemInfoConditionInput
) {
  updateSystemInfo(input: $input, condition: $condition) {
    id
    name
    value
    options
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSystemInfoMutationVariables,
  APITypes.UpdateSystemInfoMutation
>;
export const deleteSystemInfo = /* GraphQL */ `mutation DeleteSystemInfo(
  $input: DeleteSystemInfoInput!
  $condition: ModelSystemInfoConditionInput
) {
  deleteSystemInfo(input: $input, condition: $condition) {
    id
    name
    value
    options
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSystemInfoMutationVariables,
  APITypes.DeleteSystemInfoMutation
>;
export const createCareHomes = /* GraphQL */ `mutation CreateCareHomes(
  $input: CreateCareHomesInput!
  $condition: ModelCareHomesConditionInput
) {
  createCareHomes(input: $input, condition: $condition) {
    id
    LocationID
    Name
    CareHome
    Type
    Category
    Address1
    Address2
    City
    PostCode
    LocalAuthority
    Region
    ServiceGroup
    CQCURL
    ProviderID
    ProviderName
    RatingCaring
    RatingEffective
    RatingResponsive
    RatingSafe
    RatingWellLed
    RatingOverall
    NHSRegion
    ReportDate
    iRatingCaring
    iRatingEffective
    iRatingResponsive
    iRatingSafe
    iRatingWellLed
    iRatingOverall
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCareHomesMutationVariables,
  APITypes.CreateCareHomesMutation
>;
export const updateCareHomes = /* GraphQL */ `mutation UpdateCareHomes(
  $input: UpdateCareHomesInput!
  $condition: ModelCareHomesConditionInput
) {
  updateCareHomes(input: $input, condition: $condition) {
    id
    LocationID
    Name
    CareHome
    Type
    Category
    Address1
    Address2
    City
    PostCode
    LocalAuthority
    Region
    ServiceGroup
    CQCURL
    ProviderID
    ProviderName
    RatingCaring
    RatingEffective
    RatingResponsive
    RatingSafe
    RatingWellLed
    RatingOverall
    NHSRegion
    ReportDate
    iRatingCaring
    iRatingEffective
    iRatingResponsive
    iRatingSafe
    iRatingWellLed
    iRatingOverall
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCareHomesMutationVariables,
  APITypes.UpdateCareHomesMutation
>;
export const deleteCareHomes = /* GraphQL */ `mutation DeleteCareHomes(
  $input: DeleteCareHomesInput!
  $condition: ModelCareHomesConditionInput
) {
  deleteCareHomes(input: $input, condition: $condition) {
    id
    LocationID
    Name
    CareHome
    Type
    Category
    Address1
    Address2
    City
    PostCode
    LocalAuthority
    Region
    ServiceGroup
    CQCURL
    ProviderID
    ProviderName
    RatingCaring
    RatingEffective
    RatingResponsive
    RatingSafe
    RatingWellLed
    RatingOverall
    NHSRegion
    ReportDate
    iRatingCaring
    iRatingEffective
    iRatingResponsive
    iRatingSafe
    iRatingWellLed
    iRatingOverall
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCareHomesMutationVariables,
  APITypes.DeleteCareHomesMutation
>;
export const createUserExtendedInfo = /* GraphQL */ `mutation CreateUserExtendedInfo(
  $input: CreateUserExtendedInfoInput!
  $condition: ModelUserExtendedInfoConditionInput
) {
  createUserExtendedInfo(input: $input, condition: $condition) {
    id
    field
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserExtendedInfoMutationVariables,
  APITypes.CreateUserExtendedInfoMutation
>;
export const updateUserExtendedInfo = /* GraphQL */ `mutation UpdateUserExtendedInfo(
  $input: UpdateUserExtendedInfoInput!
  $condition: ModelUserExtendedInfoConditionInput
) {
  updateUserExtendedInfo(input: $input, condition: $condition) {
    id
    field
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserExtendedInfoMutationVariables,
  APITypes.UpdateUserExtendedInfoMutation
>;
export const deleteUserExtendedInfo = /* GraphQL */ `mutation DeleteUserExtendedInfo(
  $input: DeleteUserExtendedInfoInput!
  $condition: ModelUserExtendedInfoConditionInput
) {
  deleteUserExtendedInfo(input: $input, condition: $condition) {
    id
    field
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserExtendedInfoMutationVariables,
  APITypes.DeleteUserExtendedInfoMutation
>;
export const createCommunityUserNotifications = /* GraphQL */ `mutation CreateCommunityUserNotifications(
  $input: CreateCommunityUserNotificationsInput!
  $condition: ModelCommunityUserNotificationsConditionInput
) {
  createCommunityUserNotifications(input: $input, condition: $condition) {
    id
    NotificationType
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    CommunityLikes {
      id
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      communitypostID
      createdAt
      updatedAt
      communityLikesUserId
      __typename
    }
    CommunityComment {
      id
      text
      likes
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      communitypostID
      communityCommentUserId
      createdAt
      parentCommentID
      replies {
        nextToken
        __typename
      }
      CommunityCommentLikes {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
    seen
    CommunityGroup {
      id
      CommunityPosts {
        nextToken
        __typename
      }
      name
      description
      imageS3Key
      headerS3Key
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    communityUserNotificationsUserId
    communityUserNotificationsCommunityLikesId
    communityUserNotificationsCommunityCommentId
    communityUserNotificationsCommunityGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommunityUserNotificationsMutationVariables,
  APITypes.CreateCommunityUserNotificationsMutation
>;
export const updateCommunityUserNotifications = /* GraphQL */ `mutation UpdateCommunityUserNotifications(
  $input: UpdateCommunityUserNotificationsInput!
  $condition: ModelCommunityUserNotificationsConditionInput
) {
  updateCommunityUserNotifications(input: $input, condition: $condition) {
    id
    NotificationType
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    CommunityLikes {
      id
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      communitypostID
      createdAt
      updatedAt
      communityLikesUserId
      __typename
    }
    CommunityComment {
      id
      text
      likes
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      communitypostID
      communityCommentUserId
      createdAt
      parentCommentID
      replies {
        nextToken
        __typename
      }
      CommunityCommentLikes {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
    seen
    CommunityGroup {
      id
      CommunityPosts {
        nextToken
        __typename
      }
      name
      description
      imageS3Key
      headerS3Key
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    communityUserNotificationsUserId
    communityUserNotificationsCommunityLikesId
    communityUserNotificationsCommunityCommentId
    communityUserNotificationsCommunityGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommunityUserNotificationsMutationVariables,
  APITypes.UpdateCommunityUserNotificationsMutation
>;
export const deleteCommunityUserNotifications = /* GraphQL */ `mutation DeleteCommunityUserNotifications(
  $input: DeleteCommunityUserNotificationsInput!
  $condition: ModelCommunityUserNotificationsConditionInput
) {
  deleteCommunityUserNotifications(input: $input, condition: $condition) {
    id
    NotificationType
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    CommunityLikes {
      id
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      communitypostID
      createdAt
      updatedAt
      communityLikesUserId
      __typename
    }
    CommunityComment {
      id
      text
      likes
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      communitypostID
      communityCommentUserId
      createdAt
      parentCommentID
      replies {
        nextToken
        __typename
      }
      CommunityCommentLikes {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
    seen
    CommunityGroup {
      id
      CommunityPosts {
        nextToken
        __typename
      }
      name
      description
      imageS3Key
      headerS3Key
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    communityUserNotificationsUserId
    communityUserNotificationsCommunityLikesId
    communityUserNotificationsCommunityCommentId
    communityUserNotificationsCommunityGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommunityUserNotificationsMutationVariables,
  APITypes.DeleteCommunityUserNotificationsMutation
>;
export const createQuestionGroupTypes = /* GraphQL */ `mutation CreateQuestionGroupTypes(
  $input: CreateQuestionGroupTypesInput!
  $condition: ModelQuestionGroupTypesConditionInput
) {
  createQuestionGroupTypes(input: $input, condition: $condition) {
    id
    name
    iconS3URL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQuestionGroupTypesMutationVariables,
  APITypes.CreateQuestionGroupTypesMutation
>;
export const updateQuestionGroupTypes = /* GraphQL */ `mutation UpdateQuestionGroupTypes(
  $input: UpdateQuestionGroupTypesInput!
  $condition: ModelQuestionGroupTypesConditionInput
) {
  updateQuestionGroupTypes(input: $input, condition: $condition) {
    id
    name
    iconS3URL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQuestionGroupTypesMutationVariables,
  APITypes.UpdateQuestionGroupTypesMutation
>;
export const deleteQuestionGroupTypes = /* GraphQL */ `mutation DeleteQuestionGroupTypes(
  $input: DeleteQuestionGroupTypesInput!
  $condition: ModelQuestionGroupTypesConditionInput
) {
  deleteQuestionGroupTypes(input: $input, condition: $condition) {
    id
    name
    iconS3URL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQuestionGroupTypesMutationVariables,
  APITypes.DeleteQuestionGroupTypesMutation
>;
export const createCommunityUserGroupRoles = /* GraphQL */ `mutation CreateCommunityUserGroupRoles(
  $input: CreateCommunityUserGroupRolesInput!
  $condition: ModelCommunityUserGroupRolesConditionInput
) {
  createCommunityUserGroupRoles(input: $input, condition: $condition) {
    id
    userGroupRole
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    CommunityGroup {
      id
      CommunityPosts {
        nextToken
        __typename
      }
      name
      description
      imageS3Key
      headerS3Key
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    communityUserGroupRolesUserId
    communityUserGroupRolesCommunityGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommunityUserGroupRolesMutationVariables,
  APITypes.CreateCommunityUserGroupRolesMutation
>;
export const updateCommunityUserGroupRoles = /* GraphQL */ `mutation UpdateCommunityUserGroupRoles(
  $input: UpdateCommunityUserGroupRolesInput!
  $condition: ModelCommunityUserGroupRolesConditionInput
) {
  updateCommunityUserGroupRoles(input: $input, condition: $condition) {
    id
    userGroupRole
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    CommunityGroup {
      id
      CommunityPosts {
        nextToken
        __typename
      }
      name
      description
      imageS3Key
      headerS3Key
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    communityUserGroupRolesUserId
    communityUserGroupRolesCommunityGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommunityUserGroupRolesMutationVariables,
  APITypes.UpdateCommunityUserGroupRolesMutation
>;
export const deleteCommunityUserGroupRoles = /* GraphQL */ `mutation DeleteCommunityUserGroupRoles(
  $input: DeleteCommunityUserGroupRolesInput!
  $condition: ModelCommunityUserGroupRolesConditionInput
) {
  deleteCommunityUserGroupRoles(input: $input, condition: $condition) {
    id
    userGroupRole
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    CommunityGroup {
      id
      CommunityPosts {
        nextToken
        __typename
      }
      name
      description
      imageS3Key
      headerS3Key
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    communityUserGroupRolesUserId
    communityUserGroupRolesCommunityGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommunityUserGroupRolesMutationVariables,
  APITypes.DeleteCommunityUserGroupRolesMutation
>;
export const createCommunityGroup = /* GraphQL */ `mutation CreateCommunityGroup(
  $input: CreateCommunityGroupInput!
  $condition: ModelCommunityGroupConditionInput
) {
  createCommunityGroup(input: $input, condition: $condition) {
    id
    CommunityPosts {
      items {
        id
        text
        mediaS3Key
        dateTime
        communitygroupID
        needsModeration
        moderationLabel
        moderationScore
        isScheduled
        createdAt
        updatedAt
        communityPostUserId
        communityPostGuidanceId
        __typename
      }
      nextToken
      __typename
    }
    name
    description
    imageS3Key
    headerS3Key
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommunityGroupMutationVariables,
  APITypes.CreateCommunityGroupMutation
>;
export const updateCommunityGroup = /* GraphQL */ `mutation UpdateCommunityGroup(
  $input: UpdateCommunityGroupInput!
  $condition: ModelCommunityGroupConditionInput
) {
  updateCommunityGroup(input: $input, condition: $condition) {
    id
    CommunityPosts {
      items {
        id
        text
        mediaS3Key
        dateTime
        communitygroupID
        needsModeration
        moderationLabel
        moderationScore
        isScheduled
        createdAt
        updatedAt
        communityPostUserId
        communityPostGuidanceId
        __typename
      }
      nextToken
      __typename
    }
    name
    description
    imageS3Key
    headerS3Key
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommunityGroupMutationVariables,
  APITypes.UpdateCommunityGroupMutation
>;
export const deleteCommunityGroup = /* GraphQL */ `mutation DeleteCommunityGroup(
  $input: DeleteCommunityGroupInput!
  $condition: ModelCommunityGroupConditionInput
) {
  deleteCommunityGroup(input: $input, condition: $condition) {
    id
    CommunityPosts {
      items {
        id
        text
        mediaS3Key
        dateTime
        communitygroupID
        needsModeration
        moderationLabel
        moderationScore
        isScheduled
        createdAt
        updatedAt
        communityPostUserId
        communityPostGuidanceId
        __typename
      }
      nextToken
      __typename
    }
    name
    description
    imageS3Key
    headerS3Key
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommunityGroupMutationVariables,
  APITypes.DeleteCommunityGroupMutation
>;
export const createCommunityPostPollVotes = /* GraphQL */ `mutation CreateCommunityPostPollVotes(
  $input: CreateCommunityPostPollVotesInput!
  $condition: ModelCommunityPostPollVotesConditionInput
) {
  createCommunityPostPollVotes(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    communitypostpollID
    createdAt
    updatedAt
    communityPostPollVotesUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommunityPostPollVotesMutationVariables,
  APITypes.CreateCommunityPostPollVotesMutation
>;
export const updateCommunityPostPollVotes = /* GraphQL */ `mutation UpdateCommunityPostPollVotes(
  $input: UpdateCommunityPostPollVotesInput!
  $condition: ModelCommunityPostPollVotesConditionInput
) {
  updateCommunityPostPollVotes(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    communitypostpollID
    createdAt
    updatedAt
    communityPostPollVotesUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommunityPostPollVotesMutationVariables,
  APITypes.UpdateCommunityPostPollVotesMutation
>;
export const deleteCommunityPostPollVotes = /* GraphQL */ `mutation DeleteCommunityPostPollVotes(
  $input: DeleteCommunityPostPollVotesInput!
  $condition: ModelCommunityPostPollVotesConditionInput
) {
  deleteCommunityPostPollVotes(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    communitypostpollID
    createdAt
    updatedAt
    communityPostPollVotesUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommunityPostPollVotesMutationVariables,
  APITypes.DeleteCommunityPostPollVotesMutation
>;
export const createCommunityPostPoll = /* GraphQL */ `mutation CreateCommunityPostPoll(
  $input: CreateCommunityPostPollInput!
  $condition: ModelCommunityPostPollConditionInput
) {
  createCommunityPostPoll(input: $input, condition: $condition) {
    id
    text
    CommunityPostPollVotes {
      items {
        id
        communitypostpollID
        createdAt
        updatedAt
        communityPostPollVotesUserId
        __typename
      }
      nextToken
      __typename
    }
    communitypostID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommunityPostPollMutationVariables,
  APITypes.CreateCommunityPostPollMutation
>;
export const updateCommunityPostPoll = /* GraphQL */ `mutation UpdateCommunityPostPoll(
  $input: UpdateCommunityPostPollInput!
  $condition: ModelCommunityPostPollConditionInput
) {
  updateCommunityPostPoll(input: $input, condition: $condition) {
    id
    text
    CommunityPostPollVotes {
      items {
        id
        communitypostpollID
        createdAt
        updatedAt
        communityPostPollVotesUserId
        __typename
      }
      nextToken
      __typename
    }
    communitypostID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommunityPostPollMutationVariables,
  APITypes.UpdateCommunityPostPollMutation
>;
export const deleteCommunityPostPoll = /* GraphQL */ `mutation DeleteCommunityPostPoll(
  $input: DeleteCommunityPostPollInput!
  $condition: ModelCommunityPostPollConditionInput
) {
  deleteCommunityPostPoll(input: $input, condition: $condition) {
    id
    text
    CommunityPostPollVotes {
      items {
        id
        communitypostpollID
        createdAt
        updatedAt
        communityPostPollVotesUserId
        __typename
      }
      nextToken
      __typename
    }
    communitypostID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommunityPostPollMutationVariables,
  APITypes.DeleteCommunityPostPollMutation
>;
export const createCommunityLikes = /* GraphQL */ `mutation CreateCommunityLikes(
  $input: CreateCommunityLikesInput!
  $condition: ModelCommunityLikesConditionInput
) {
  createCommunityLikes(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    communitypostID
    createdAt
    updatedAt
    communityLikesUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommunityLikesMutationVariables,
  APITypes.CreateCommunityLikesMutation
>;
export const updateCommunityLikes = /* GraphQL */ `mutation UpdateCommunityLikes(
  $input: UpdateCommunityLikesInput!
  $condition: ModelCommunityLikesConditionInput
) {
  updateCommunityLikes(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    communitypostID
    createdAt
    updatedAt
    communityLikesUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommunityLikesMutationVariables,
  APITypes.UpdateCommunityLikesMutation
>;
export const deleteCommunityLikes = /* GraphQL */ `mutation DeleteCommunityLikes(
  $input: DeleteCommunityLikesInput!
  $condition: ModelCommunityLikesConditionInput
) {
  deleteCommunityLikes(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    communitypostID
    createdAt
    updatedAt
    communityLikesUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommunityLikesMutationVariables,
  APITypes.DeleteCommunityLikesMutation
>;
export const createCommunityComment = /* GraphQL */ `mutation CreateCommunityComment(
  $input: CreateCommunityCommentInput!
  $condition: ModelCommunityCommentConditionInput
) {
  createCommunityComment(input: $input, condition: $condition) {
    id
    text
    likes
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    communitypostID
    communityCommentUserId
    createdAt
    parentCommentID
    replies {
      items {
        id
        text
        likes
        communitypostID
        communityCommentUserId
        createdAt
        parentCommentID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    CommunityCommentLikes {
      items {
        id
        commentID
        communityCommentLikesUserId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommunityCommentMutationVariables,
  APITypes.CreateCommunityCommentMutation
>;
export const updateCommunityComment = /* GraphQL */ `mutation UpdateCommunityComment(
  $input: UpdateCommunityCommentInput!
  $condition: ModelCommunityCommentConditionInput
) {
  updateCommunityComment(input: $input, condition: $condition) {
    id
    text
    likes
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    communitypostID
    communityCommentUserId
    createdAt
    parentCommentID
    replies {
      items {
        id
        text
        likes
        communitypostID
        communityCommentUserId
        createdAt
        parentCommentID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    CommunityCommentLikes {
      items {
        id
        commentID
        communityCommentLikesUserId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommunityCommentMutationVariables,
  APITypes.UpdateCommunityCommentMutation
>;
export const deleteCommunityComment = /* GraphQL */ `mutation DeleteCommunityComment(
  $input: DeleteCommunityCommentInput!
  $condition: ModelCommunityCommentConditionInput
) {
  deleteCommunityComment(input: $input, condition: $condition) {
    id
    text
    likes
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    communitypostID
    communityCommentUserId
    createdAt
    parentCommentID
    replies {
      items {
        id
        text
        likes
        communitypostID
        communityCommentUserId
        createdAt
        parentCommentID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    CommunityCommentLikes {
      items {
        id
        commentID
        communityCommentLikesUserId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommunityCommentMutationVariables,
  APITypes.DeleteCommunityCommentMutation
>;
export const createCommunityPost = /* GraphQL */ `mutation CreateCommunityPost(
  $input: CreateCommunityPostInput!
  $condition: ModelCommunityPostConditionInput
) {
  createCommunityPost(input: $input, condition: $condition) {
    id
    text
    mediaS3Key
    dateTime
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    CommunityComments {
      items {
        id
        text
        likes
        communitypostID
        communityCommentUserId
        createdAt
        parentCommentID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    CommunityLikes {
      items {
        id
        communitypostID
        createdAt
        updatedAt
        communityLikesUserId
        __typename
      }
      nextToken
      __typename
    }
    CommunityPostPoll {
      items {
        id
        text
        communitypostID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    communitygroupID
    Guidance {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    needsModeration
    moderationLabel
    moderationScore
    isScheduled
    createdAt
    updatedAt
    communityPostUserId
    communityPostGuidanceId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommunityPostMutationVariables,
  APITypes.CreateCommunityPostMutation
>;
export const updateCommunityPost = /* GraphQL */ `mutation UpdateCommunityPost(
  $input: UpdateCommunityPostInput!
  $condition: ModelCommunityPostConditionInput
) {
  updateCommunityPost(input: $input, condition: $condition) {
    id
    text
    mediaS3Key
    dateTime
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    CommunityComments {
      items {
        id
        text
        likes
        communitypostID
        communityCommentUserId
        createdAt
        parentCommentID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    CommunityLikes {
      items {
        id
        communitypostID
        createdAt
        updatedAt
        communityLikesUserId
        __typename
      }
      nextToken
      __typename
    }
    CommunityPostPoll {
      items {
        id
        text
        communitypostID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    communitygroupID
    Guidance {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    needsModeration
    moderationLabel
    moderationScore
    isScheduled
    createdAt
    updatedAt
    communityPostUserId
    communityPostGuidanceId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommunityPostMutationVariables,
  APITypes.UpdateCommunityPostMutation
>;
export const deleteCommunityPost = /* GraphQL */ `mutation DeleteCommunityPost(
  $input: DeleteCommunityPostInput!
  $condition: ModelCommunityPostConditionInput
) {
  deleteCommunityPost(input: $input, condition: $condition) {
    id
    text
    mediaS3Key
    dateTime
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    CommunityComments {
      items {
        id
        text
        likes
        communitypostID
        communityCommentUserId
        createdAt
        parentCommentID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    CommunityLikes {
      items {
        id
        communitypostID
        createdAt
        updatedAt
        communityLikesUserId
        __typename
      }
      nextToken
      __typename
    }
    CommunityPostPoll {
      items {
        id
        text
        communitypostID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    communitygroupID
    Guidance {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    needsModeration
    moderationLabel
    moderationScore
    isScheduled
    createdAt
    updatedAt
    communityPostUserId
    communityPostGuidanceId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommunityPostMutationVariables,
  APITypes.DeleteCommunityPostMutation
>;
export const createCalendarItemType = /* GraphQL */ `mutation CreateCalendarItemType(
  $input: CreateCalendarItemTypeInput!
  $condition: ModelCalendarItemTypeConditionInput
) {
  createCalendarItemType(input: $input, condition: $condition) {
    id
    name
    colour
    deleted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCalendarItemTypeMutationVariables,
  APITypes.CreateCalendarItemTypeMutation
>;
export const updateCalendarItemType = /* GraphQL */ `mutation UpdateCalendarItemType(
  $input: UpdateCalendarItemTypeInput!
  $condition: ModelCalendarItemTypeConditionInput
) {
  updateCalendarItemType(input: $input, condition: $condition) {
    id
    name
    colour
    deleted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCalendarItemTypeMutationVariables,
  APITypes.UpdateCalendarItemTypeMutation
>;
export const deleteCalendarItemType = /* GraphQL */ `mutation DeleteCalendarItemType(
  $input: DeleteCalendarItemTypeInput!
  $condition: ModelCalendarItemTypeConditionInput
) {
  deleteCalendarItemType(input: $input, condition: $condition) {
    id
    name
    colour
    deleted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCalendarItemTypeMutationVariables,
  APITypes.DeleteCalendarItemTypeMutation
>;
export const createRoadMapItems = /* GraphQL */ `mutation CreateRoadMapItems(
  $input: CreateRoadMapItemsInput!
  $condition: ModelRoadMapItemsConditionInput
) {
  createRoadMapItems(input: $input, condition: $condition) {
    id
    text
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRoadMapItemsMutationVariables,
  APITypes.CreateRoadMapItemsMutation
>;
export const updateRoadMapItems = /* GraphQL */ `mutation UpdateRoadMapItems(
  $input: UpdateRoadMapItemsInput!
  $condition: ModelRoadMapItemsConditionInput
) {
  updateRoadMapItems(input: $input, condition: $condition) {
    id
    text
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRoadMapItemsMutationVariables,
  APITypes.UpdateRoadMapItemsMutation
>;
export const deleteRoadMapItems = /* GraphQL */ `mutation DeleteRoadMapItems(
  $input: DeleteRoadMapItemsInput!
  $condition: ModelRoadMapItemsConditionInput
) {
  deleteRoadMapItems(input: $input, condition: $condition) {
    id
    text
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRoadMapItemsMutationVariables,
  APITypes.DeleteRoadMapItemsMutation
>;
export const createManualNotificationsUser = /* GraphQL */ `mutation CreateManualNotificationsUser(
  $input: CreateManualNotificationsUserInput!
  $condition: ModelManualNotificationsUserConditionInput
) {
  createManualNotificationsUser(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    seen
    createdAt
    updatedAt
    manualNotificationsUserUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateManualNotificationsUserMutationVariables,
  APITypes.CreateManualNotificationsUserMutation
>;
export const updateManualNotificationsUser = /* GraphQL */ `mutation UpdateManualNotificationsUser(
  $input: UpdateManualNotificationsUserInput!
  $condition: ModelManualNotificationsUserConditionInput
) {
  updateManualNotificationsUser(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    seen
    createdAt
    updatedAt
    manualNotificationsUserUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateManualNotificationsUserMutationVariables,
  APITypes.UpdateManualNotificationsUserMutation
>;
export const deleteManualNotificationsUser = /* GraphQL */ `mutation DeleteManualNotificationsUser(
  $input: DeleteManualNotificationsUserInput!
  $condition: ModelManualNotificationsUserConditionInput
) {
  deleteManualNotificationsUser(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    seen
    createdAt
    updatedAt
    manualNotificationsUserUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteManualNotificationsUserMutationVariables,
  APITypes.DeleteManualNotificationsUserMutation
>;
export const createManualNotifications = /* GraphQL */ `mutation CreateManualNotifications(
  $input: CreateManualNotificationsInput!
  $condition: ModelManualNotificationsConditionInput
) {
  createManualNotifications(input: $input, condition: $condition) {
    id
    title
    shortText
    Guidance {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    ManualNotificationsUser {
      id
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      seen
      createdAt
      updatedAt
      manualNotificationsUserUserId
      __typename
    }
    createdAt
    updatedAt
    manualNotificationsGuidanceId
    manualNotificationsManualNotificationsUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateManualNotificationsMutationVariables,
  APITypes.CreateManualNotificationsMutation
>;
export const updateManualNotifications = /* GraphQL */ `mutation UpdateManualNotifications(
  $input: UpdateManualNotificationsInput!
  $condition: ModelManualNotificationsConditionInput
) {
  updateManualNotifications(input: $input, condition: $condition) {
    id
    title
    shortText
    Guidance {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    ManualNotificationsUser {
      id
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      seen
      createdAt
      updatedAt
      manualNotificationsUserUserId
      __typename
    }
    createdAt
    updatedAt
    manualNotificationsGuidanceId
    manualNotificationsManualNotificationsUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateManualNotificationsMutationVariables,
  APITypes.UpdateManualNotificationsMutation
>;
export const deleteManualNotifications = /* GraphQL */ `mutation DeleteManualNotifications(
  $input: DeleteManualNotificationsInput!
  $condition: ModelManualNotificationsConditionInput
) {
  deleteManualNotifications(input: $input, condition: $condition) {
    id
    title
    shortText
    Guidance {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    ManualNotificationsUser {
      id
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      seen
      createdAt
      updatedAt
      manualNotificationsUserUserId
      __typename
    }
    createdAt
    updatedAt
    manualNotificationsGuidanceId
    manualNotificationsManualNotificationsUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteManualNotificationsMutationVariables,
  APITypes.DeleteManualNotificationsMutation
>;
export const createQuestionAnswersUsers = /* GraphQL */ `mutation CreateQuestionAnswersUsers(
  $input: CreateQuestionAnswersUsersInput!
  $condition: ModelQuestionAnswersUsersConditionInput
) {
  createQuestionAnswersUsers(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    QuestionAnswers {
      id
      answer
      helpText
      Questions {
        id
        question
        helpText
        deleted
        isFirstQuestion
        questionNumber
        createdAt
        updatedAt
        questionsQuestionGroupId
        __typename
      }
      nextQuestionID
      deleted
      GuidanceContent {
        id
        title
        shortDesc
        longDesc
        thumbURL
        date
        time
        estTime
        deleted
        location
        author
        S3ObjectKey
        status
        active
        lowerCaseTitle
        lowerCaseShortDesc
        scheduleDateTime
        createdAt
        updatedAt
        guidanceGuidanceTypesId
        __typename
      }
      RoadMapItems {
        id
        text
        description
        createdAt
        updatedAt
        __typename
      }
      QuestionGroup {
        id
        name
        description
        imageS3ObjectKey
        deleted
        type
        status
        groupLevel
        createdAt
        updatedAt
        questionGroupQuestionGroupTypesId
        questionGroupRoadmapGroupId
        __typename
      }
      createdAt
      updatedAt
      questionAnswersQuestionsId
      questionAnswersGuidanceContentId
      questionAnswersRoadMapItemsId
      questionAnswersQuestionGroupId
      __typename
    }
    Questions {
      id
      question
      helpText
      QuestionGroup {
        id
        name
        description
        imageS3ObjectKey
        deleted
        type
        status
        groupLevel
        createdAt
        updatedAt
        questionGroupQuestionGroupTypesId
        questionGroupRoadmapGroupId
        __typename
      }
      deleted
      isFirstQuestion
      questionNumber
      createdAt
      updatedAt
      questionsQuestionGroupId
      __typename
    }
    freeText
    complete
    createdAt
    updatedAt
    questionAnswersUsersUserId
    questionAnswersUsersQuestionAnswersId
    questionAnswersUsersQuestionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQuestionAnswersUsersMutationVariables,
  APITypes.CreateQuestionAnswersUsersMutation
>;
export const updateQuestionAnswersUsers = /* GraphQL */ `mutation UpdateQuestionAnswersUsers(
  $input: UpdateQuestionAnswersUsersInput!
  $condition: ModelQuestionAnswersUsersConditionInput
) {
  updateQuestionAnswersUsers(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    QuestionAnswers {
      id
      answer
      helpText
      Questions {
        id
        question
        helpText
        deleted
        isFirstQuestion
        questionNumber
        createdAt
        updatedAt
        questionsQuestionGroupId
        __typename
      }
      nextQuestionID
      deleted
      GuidanceContent {
        id
        title
        shortDesc
        longDesc
        thumbURL
        date
        time
        estTime
        deleted
        location
        author
        S3ObjectKey
        status
        active
        lowerCaseTitle
        lowerCaseShortDesc
        scheduleDateTime
        createdAt
        updatedAt
        guidanceGuidanceTypesId
        __typename
      }
      RoadMapItems {
        id
        text
        description
        createdAt
        updatedAt
        __typename
      }
      QuestionGroup {
        id
        name
        description
        imageS3ObjectKey
        deleted
        type
        status
        groupLevel
        createdAt
        updatedAt
        questionGroupQuestionGroupTypesId
        questionGroupRoadmapGroupId
        __typename
      }
      createdAt
      updatedAt
      questionAnswersQuestionsId
      questionAnswersGuidanceContentId
      questionAnswersRoadMapItemsId
      questionAnswersQuestionGroupId
      __typename
    }
    Questions {
      id
      question
      helpText
      QuestionGroup {
        id
        name
        description
        imageS3ObjectKey
        deleted
        type
        status
        groupLevel
        createdAt
        updatedAt
        questionGroupQuestionGroupTypesId
        questionGroupRoadmapGroupId
        __typename
      }
      deleted
      isFirstQuestion
      questionNumber
      createdAt
      updatedAt
      questionsQuestionGroupId
      __typename
    }
    freeText
    complete
    createdAt
    updatedAt
    questionAnswersUsersUserId
    questionAnswersUsersQuestionAnswersId
    questionAnswersUsersQuestionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQuestionAnswersUsersMutationVariables,
  APITypes.UpdateQuestionAnswersUsersMutation
>;
export const deleteQuestionAnswersUsers = /* GraphQL */ `mutation DeleteQuestionAnswersUsers(
  $input: DeleteQuestionAnswersUsersInput!
  $condition: ModelQuestionAnswersUsersConditionInput
) {
  deleteQuestionAnswersUsers(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    QuestionAnswers {
      id
      answer
      helpText
      Questions {
        id
        question
        helpText
        deleted
        isFirstQuestion
        questionNumber
        createdAt
        updatedAt
        questionsQuestionGroupId
        __typename
      }
      nextQuestionID
      deleted
      GuidanceContent {
        id
        title
        shortDesc
        longDesc
        thumbURL
        date
        time
        estTime
        deleted
        location
        author
        S3ObjectKey
        status
        active
        lowerCaseTitle
        lowerCaseShortDesc
        scheduleDateTime
        createdAt
        updatedAt
        guidanceGuidanceTypesId
        __typename
      }
      RoadMapItems {
        id
        text
        description
        createdAt
        updatedAt
        __typename
      }
      QuestionGroup {
        id
        name
        description
        imageS3ObjectKey
        deleted
        type
        status
        groupLevel
        createdAt
        updatedAt
        questionGroupQuestionGroupTypesId
        questionGroupRoadmapGroupId
        __typename
      }
      createdAt
      updatedAt
      questionAnswersQuestionsId
      questionAnswersGuidanceContentId
      questionAnswersRoadMapItemsId
      questionAnswersQuestionGroupId
      __typename
    }
    Questions {
      id
      question
      helpText
      QuestionGroup {
        id
        name
        description
        imageS3ObjectKey
        deleted
        type
        status
        groupLevel
        createdAt
        updatedAt
        questionGroupQuestionGroupTypesId
        questionGroupRoadmapGroupId
        __typename
      }
      deleted
      isFirstQuestion
      questionNumber
      createdAt
      updatedAt
      questionsQuestionGroupId
      __typename
    }
    freeText
    complete
    createdAt
    updatedAt
    questionAnswersUsersUserId
    questionAnswersUsersQuestionAnswersId
    questionAnswersUsersQuestionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQuestionAnswersUsersMutationVariables,
  APITypes.DeleteQuestionAnswersUsersMutation
>;
export const createQuestionAnswers = /* GraphQL */ `mutation CreateQuestionAnswers(
  $input: CreateQuestionAnswersInput!
  $condition: ModelQuestionAnswersConditionInput
) {
  createQuestionAnswers(input: $input, condition: $condition) {
    id
    answer
    helpText
    Questions {
      id
      question
      helpText
      QuestionGroup {
        id
        name
        description
        imageS3ObjectKey
        deleted
        type
        status
        groupLevel
        createdAt
        updatedAt
        questionGroupQuestionGroupTypesId
        questionGroupRoadmapGroupId
        __typename
      }
      deleted
      isFirstQuestion
      questionNumber
      createdAt
      updatedAt
      questionsQuestionGroupId
      __typename
    }
    nextQuestionID
    deleted
    GuidanceContent {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    RoadMapItems {
      id
      text
      description
      createdAt
      updatedAt
      __typename
    }
    QuestionGroup {
      id
      name
      description
      imageS3ObjectKey
      deleted
      type
      status
      QuestionGroupTypes {
        id
        name
        iconS3URL
        createdAt
        updatedAt
        __typename
      }
      groupLevel
      RoadmapGroup {
        id
        name
        description
        imageS3ObjectKey
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      questionGroupQuestionGroupTypesId
      questionGroupRoadmapGroupId
      __typename
    }
    createdAt
    updatedAt
    questionAnswersQuestionsId
    questionAnswersGuidanceContentId
    questionAnswersRoadMapItemsId
    questionAnswersQuestionGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQuestionAnswersMutationVariables,
  APITypes.CreateQuestionAnswersMutation
>;
export const updateQuestionAnswers = /* GraphQL */ `mutation UpdateQuestionAnswers(
  $input: UpdateQuestionAnswersInput!
  $condition: ModelQuestionAnswersConditionInput
) {
  updateQuestionAnswers(input: $input, condition: $condition) {
    id
    answer
    helpText
    Questions {
      id
      question
      helpText
      QuestionGroup {
        id
        name
        description
        imageS3ObjectKey
        deleted
        type
        status
        groupLevel
        createdAt
        updatedAt
        questionGroupQuestionGroupTypesId
        questionGroupRoadmapGroupId
        __typename
      }
      deleted
      isFirstQuestion
      questionNumber
      createdAt
      updatedAt
      questionsQuestionGroupId
      __typename
    }
    nextQuestionID
    deleted
    GuidanceContent {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    RoadMapItems {
      id
      text
      description
      createdAt
      updatedAt
      __typename
    }
    QuestionGroup {
      id
      name
      description
      imageS3ObjectKey
      deleted
      type
      status
      QuestionGroupTypes {
        id
        name
        iconS3URL
        createdAt
        updatedAt
        __typename
      }
      groupLevel
      RoadmapGroup {
        id
        name
        description
        imageS3ObjectKey
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      questionGroupQuestionGroupTypesId
      questionGroupRoadmapGroupId
      __typename
    }
    createdAt
    updatedAt
    questionAnswersQuestionsId
    questionAnswersGuidanceContentId
    questionAnswersRoadMapItemsId
    questionAnswersQuestionGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQuestionAnswersMutationVariables,
  APITypes.UpdateQuestionAnswersMutation
>;
export const deleteQuestionAnswers = /* GraphQL */ `mutation DeleteQuestionAnswers(
  $input: DeleteQuestionAnswersInput!
  $condition: ModelQuestionAnswersConditionInput
) {
  deleteQuestionAnswers(input: $input, condition: $condition) {
    id
    answer
    helpText
    Questions {
      id
      question
      helpText
      QuestionGroup {
        id
        name
        description
        imageS3ObjectKey
        deleted
        type
        status
        groupLevel
        createdAt
        updatedAt
        questionGroupQuestionGroupTypesId
        questionGroupRoadmapGroupId
        __typename
      }
      deleted
      isFirstQuestion
      questionNumber
      createdAt
      updatedAt
      questionsQuestionGroupId
      __typename
    }
    nextQuestionID
    deleted
    GuidanceContent {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    RoadMapItems {
      id
      text
      description
      createdAt
      updatedAt
      __typename
    }
    QuestionGroup {
      id
      name
      description
      imageS3ObjectKey
      deleted
      type
      status
      QuestionGroupTypes {
        id
        name
        iconS3URL
        createdAt
        updatedAt
        __typename
      }
      groupLevel
      RoadmapGroup {
        id
        name
        description
        imageS3ObjectKey
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      questionGroupQuestionGroupTypesId
      questionGroupRoadmapGroupId
      __typename
    }
    createdAt
    updatedAt
    questionAnswersQuestionsId
    questionAnswersGuidanceContentId
    questionAnswersRoadMapItemsId
    questionAnswersQuestionGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQuestionAnswersMutationVariables,
  APITypes.DeleteQuestionAnswersMutation
>;
export const createQuestions = /* GraphQL */ `mutation CreateQuestions(
  $input: CreateQuestionsInput!
  $condition: ModelQuestionsConditionInput
) {
  createQuestions(input: $input, condition: $condition) {
    id
    question
    helpText
    QuestionGroup {
      id
      name
      description
      imageS3ObjectKey
      deleted
      type
      status
      QuestionGroupTypes {
        id
        name
        iconS3URL
        createdAt
        updatedAt
        __typename
      }
      groupLevel
      RoadmapGroup {
        id
        name
        description
        imageS3ObjectKey
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      questionGroupQuestionGroupTypesId
      questionGroupRoadmapGroupId
      __typename
    }
    deleted
    isFirstQuestion
    questionNumber
    createdAt
    updatedAt
    questionsQuestionGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQuestionsMutationVariables,
  APITypes.CreateQuestionsMutation
>;
export const updateQuestions = /* GraphQL */ `mutation UpdateQuestions(
  $input: UpdateQuestionsInput!
  $condition: ModelQuestionsConditionInput
) {
  updateQuestions(input: $input, condition: $condition) {
    id
    question
    helpText
    QuestionGroup {
      id
      name
      description
      imageS3ObjectKey
      deleted
      type
      status
      QuestionGroupTypes {
        id
        name
        iconS3URL
        createdAt
        updatedAt
        __typename
      }
      groupLevel
      RoadmapGroup {
        id
        name
        description
        imageS3ObjectKey
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      questionGroupQuestionGroupTypesId
      questionGroupRoadmapGroupId
      __typename
    }
    deleted
    isFirstQuestion
    questionNumber
    createdAt
    updatedAt
    questionsQuestionGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQuestionsMutationVariables,
  APITypes.UpdateQuestionsMutation
>;
export const deleteQuestions = /* GraphQL */ `mutation DeleteQuestions(
  $input: DeleteQuestionsInput!
  $condition: ModelQuestionsConditionInput
) {
  deleteQuestions(input: $input, condition: $condition) {
    id
    question
    helpText
    QuestionGroup {
      id
      name
      description
      imageS3ObjectKey
      deleted
      type
      status
      QuestionGroupTypes {
        id
        name
        iconS3URL
        createdAt
        updatedAt
        __typename
      }
      groupLevel
      RoadmapGroup {
        id
        name
        description
        imageS3ObjectKey
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      questionGroupQuestionGroupTypesId
      questionGroupRoadmapGroupId
      __typename
    }
    deleted
    isFirstQuestion
    questionNumber
    createdAt
    updatedAt
    questionsQuestionGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQuestionsMutationVariables,
  APITypes.DeleteQuestionsMutation
>;
export const createQuestionGroup = /* GraphQL */ `mutation CreateQuestionGroup(
  $input: CreateQuestionGroupInput!
  $condition: ModelQuestionGroupConditionInput
) {
  createQuestionGroup(input: $input, condition: $condition) {
    id
    name
    description
    imageS3ObjectKey
    deleted
    type
    status
    QuestionGroupTypes {
      id
      name
      iconS3URL
      createdAt
      updatedAt
      __typename
    }
    groupLevel
    RoadmapGroup {
      id
      name
      description
      imageS3ObjectKey
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    questionGroupQuestionGroupTypesId
    questionGroupRoadmapGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQuestionGroupMutationVariables,
  APITypes.CreateQuestionGroupMutation
>;
export const updateQuestionGroup = /* GraphQL */ `mutation UpdateQuestionGroup(
  $input: UpdateQuestionGroupInput!
  $condition: ModelQuestionGroupConditionInput
) {
  updateQuestionGroup(input: $input, condition: $condition) {
    id
    name
    description
    imageS3ObjectKey
    deleted
    type
    status
    QuestionGroupTypes {
      id
      name
      iconS3URL
      createdAt
      updatedAt
      __typename
    }
    groupLevel
    RoadmapGroup {
      id
      name
      description
      imageS3ObjectKey
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    questionGroupQuestionGroupTypesId
    questionGroupRoadmapGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQuestionGroupMutationVariables,
  APITypes.UpdateQuestionGroupMutation
>;
export const deleteQuestionGroup = /* GraphQL */ `mutation DeleteQuestionGroup(
  $input: DeleteQuestionGroupInput!
  $condition: ModelQuestionGroupConditionInput
) {
  deleteQuestionGroup(input: $input, condition: $condition) {
    id
    name
    description
    imageS3ObjectKey
    deleted
    type
    status
    QuestionGroupTypes {
      id
      name
      iconS3URL
      createdAt
      updatedAt
      __typename
    }
    groupLevel
    RoadmapGroup {
      id
      name
      description
      imageS3ObjectKey
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    questionGroupQuestionGroupTypesId
    questionGroupRoadmapGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQuestionGroupMutationVariables,
  APITypes.DeleteQuestionGroupMutation
>;
export const createUserQuestionGroups = /* GraphQL */ `mutation CreateUserQuestionGroups(
  $input: CreateUserQuestionGroupsInput!
  $condition: ModelUserQuestionGroupsConditionInput
) {
  createUserQuestionGroups(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    QuestionGroup {
      id
      name
      description
      imageS3ObjectKey
      deleted
      type
      status
      QuestionGroupTypes {
        id
        name
        iconS3URL
        createdAt
        updatedAt
        __typename
      }
      groupLevel
      RoadmapGroup {
        id
        name
        description
        imageS3ObjectKey
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      questionGroupQuestionGroupTypesId
      questionGroupRoadmapGroupId
      __typename
    }
    status
    createdAt
    updatedAt
    userQuestionGroupsUserId
    userQuestionGroupsQuestionGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserQuestionGroupsMutationVariables,
  APITypes.CreateUserQuestionGroupsMutation
>;
export const updateUserQuestionGroups = /* GraphQL */ `mutation UpdateUserQuestionGroups(
  $input: UpdateUserQuestionGroupsInput!
  $condition: ModelUserQuestionGroupsConditionInput
) {
  updateUserQuestionGroups(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    QuestionGroup {
      id
      name
      description
      imageS3ObjectKey
      deleted
      type
      status
      QuestionGroupTypes {
        id
        name
        iconS3URL
        createdAt
        updatedAt
        __typename
      }
      groupLevel
      RoadmapGroup {
        id
        name
        description
        imageS3ObjectKey
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      questionGroupQuestionGroupTypesId
      questionGroupRoadmapGroupId
      __typename
    }
    status
    createdAt
    updatedAt
    userQuestionGroupsUserId
    userQuestionGroupsQuestionGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserQuestionGroupsMutationVariables,
  APITypes.UpdateUserQuestionGroupsMutation
>;
export const deleteUserQuestionGroups = /* GraphQL */ `mutation DeleteUserQuestionGroups(
  $input: DeleteUserQuestionGroupsInput!
  $condition: ModelUserQuestionGroupsConditionInput
) {
  deleteUserQuestionGroups(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    QuestionGroup {
      id
      name
      description
      imageS3ObjectKey
      deleted
      type
      status
      QuestionGroupTypes {
        id
        name
        iconS3URL
        createdAt
        updatedAt
        __typename
      }
      groupLevel
      RoadmapGroup {
        id
        name
        description
        imageS3ObjectKey
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      questionGroupQuestionGroupTypesId
      questionGroupRoadmapGroupId
      __typename
    }
    status
    createdAt
    updatedAt
    userQuestionGroupsUserId
    userQuestionGroupsQuestionGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserQuestionGroupsMutationVariables,
  APITypes.DeleteUserQuestionGroupsMutation
>;
export const createUserRoadmapItems = /* GraphQL */ `mutation CreateUserRoadmapItems(
  $input: CreateUserRoadmapItemsInput!
  $condition: ModelUserRoadmapItemsConditionInput
) {
  createUserRoadmapItems(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    RoadmapGroup {
      id
      name
      description
      imageS3ObjectKey
      createdAt
      updatedAt
      __typename
    }
    RoadMapItems {
      id
      text
      description
      createdAt
      updatedAt
      __typename
    }
    Questions {
      id
      question
      helpText
      QuestionGroup {
        id
        name
        description
        imageS3ObjectKey
        deleted
        type
        status
        groupLevel
        createdAt
        updatedAt
        questionGroupQuestionGroupTypesId
        questionGroupRoadmapGroupId
        __typename
      }
      deleted
      isFirstQuestion
      questionNumber
      createdAt
      updatedAt
      questionsQuestionGroupId
      __typename
    }
    status
    createdAt
    updatedAt
    userRoadmapItemsUserId
    userRoadmapItemsRoadmapGroupId
    userRoadmapItemsRoadMapItemsId
    userRoadmapItemsQuestionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserRoadmapItemsMutationVariables,
  APITypes.CreateUserRoadmapItemsMutation
>;
export const updateUserRoadmapItems = /* GraphQL */ `mutation UpdateUserRoadmapItems(
  $input: UpdateUserRoadmapItemsInput!
  $condition: ModelUserRoadmapItemsConditionInput
) {
  updateUserRoadmapItems(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    RoadmapGroup {
      id
      name
      description
      imageS3ObjectKey
      createdAt
      updatedAt
      __typename
    }
    RoadMapItems {
      id
      text
      description
      createdAt
      updatedAt
      __typename
    }
    Questions {
      id
      question
      helpText
      QuestionGroup {
        id
        name
        description
        imageS3ObjectKey
        deleted
        type
        status
        groupLevel
        createdAt
        updatedAt
        questionGroupQuestionGroupTypesId
        questionGroupRoadmapGroupId
        __typename
      }
      deleted
      isFirstQuestion
      questionNumber
      createdAt
      updatedAt
      questionsQuestionGroupId
      __typename
    }
    status
    createdAt
    updatedAt
    userRoadmapItemsUserId
    userRoadmapItemsRoadmapGroupId
    userRoadmapItemsRoadMapItemsId
    userRoadmapItemsQuestionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserRoadmapItemsMutationVariables,
  APITypes.UpdateUserRoadmapItemsMutation
>;
export const deleteUserRoadmapItems = /* GraphQL */ `mutation DeleteUserRoadmapItems(
  $input: DeleteUserRoadmapItemsInput!
  $condition: ModelUserRoadmapItemsConditionInput
) {
  deleteUserRoadmapItems(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    RoadmapGroup {
      id
      name
      description
      imageS3ObjectKey
      createdAt
      updatedAt
      __typename
    }
    RoadMapItems {
      id
      text
      description
      createdAt
      updatedAt
      __typename
    }
    Questions {
      id
      question
      helpText
      QuestionGroup {
        id
        name
        description
        imageS3ObjectKey
        deleted
        type
        status
        groupLevel
        createdAt
        updatedAt
        questionGroupQuestionGroupTypesId
        questionGroupRoadmapGroupId
        __typename
      }
      deleted
      isFirstQuestion
      questionNumber
      createdAt
      updatedAt
      questionsQuestionGroupId
      __typename
    }
    status
    createdAt
    updatedAt
    userRoadmapItemsUserId
    userRoadmapItemsRoadmapGroupId
    userRoadmapItemsRoadMapItemsId
    userRoadmapItemsQuestionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserRoadmapItemsMutationVariables,
  APITypes.DeleteUserRoadmapItemsMutation
>;
export const createRoadmapGroup = /* GraphQL */ `mutation CreateRoadmapGroup(
  $input: CreateRoadmapGroupInput!
  $condition: ModelRoadmapGroupConditionInput
) {
  createRoadmapGroup(input: $input, condition: $condition) {
    id
    name
    description
    imageS3ObjectKey
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRoadmapGroupMutationVariables,
  APITypes.CreateRoadmapGroupMutation
>;
export const updateRoadmapGroup = /* GraphQL */ `mutation UpdateRoadmapGroup(
  $input: UpdateRoadmapGroupInput!
  $condition: ModelRoadmapGroupConditionInput
) {
  updateRoadmapGroup(input: $input, condition: $condition) {
    id
    name
    description
    imageS3ObjectKey
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRoadmapGroupMutationVariables,
  APITypes.UpdateRoadmapGroupMutation
>;
export const deleteRoadmapGroup = /* GraphQL */ `mutation DeleteRoadmapGroup(
  $input: DeleteRoadmapGroupInput!
  $condition: ModelRoadmapGroupConditionInput
) {
  deleteRoadmapGroup(input: $input, condition: $condition) {
    id
    name
    description
    imageS3ObjectKey
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRoadmapGroupMutationVariables,
  APITypes.DeleteRoadmapGroupMutation
>;
export const createBookmarks = /* GraphQL */ `mutation CreateBookmarks(
  $input: CreateBookmarksInput!
  $condition: ModelBookmarksConditionInput
) {
  createBookmarks(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    Guidance {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    deleted
    createdAt
    updatedAt
    bookmarksUserId
    bookmarksGuidanceId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBookmarksMutationVariables,
  APITypes.CreateBookmarksMutation
>;
export const updateBookmarks = /* GraphQL */ `mutation UpdateBookmarks(
  $input: UpdateBookmarksInput!
  $condition: ModelBookmarksConditionInput
) {
  updateBookmarks(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    Guidance {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    deleted
    createdAt
    updatedAt
    bookmarksUserId
    bookmarksGuidanceId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBookmarksMutationVariables,
  APITypes.UpdateBookmarksMutation
>;
export const deleteBookmarks = /* GraphQL */ `mutation DeleteBookmarks(
  $input: DeleteBookmarksInput!
  $condition: ModelBookmarksConditionInput
) {
  deleteBookmarks(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    Guidance {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    deleted
    createdAt
    updatedAt
    bookmarksUserId
    bookmarksGuidanceId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBookmarksMutationVariables,
  APITypes.DeleteBookmarksMutation
>;
export const createActivityUserApp = /* GraphQL */ `mutation CreateActivityUserApp(
  $input: CreateActivityUserAppInput!
  $condition: ModelActivityUserAppConditionInput
) {
  createActivityUserApp(input: $input, condition: $condition) {
    id
    section
    page
    details
    userGUID
    userEmail
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    createdAt
    updatedAt
    activityUserAppUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateActivityUserAppMutationVariables,
  APITypes.CreateActivityUserAppMutation
>;
export const updateActivityUserApp = /* GraphQL */ `mutation UpdateActivityUserApp(
  $input: UpdateActivityUserAppInput!
  $condition: ModelActivityUserAppConditionInput
) {
  updateActivityUserApp(input: $input, condition: $condition) {
    id
    section
    page
    details
    userGUID
    userEmail
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    createdAt
    updatedAt
    activityUserAppUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateActivityUserAppMutationVariables,
  APITypes.UpdateActivityUserAppMutation
>;
export const deleteActivityUserApp = /* GraphQL */ `mutation DeleteActivityUserApp(
  $input: DeleteActivityUserAppInput!
  $condition: ModelActivityUserAppConditionInput
) {
  deleteActivityUserApp(input: $input, condition: $condition) {
    id
    section
    page
    details
    userGUID
    userEmail
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    createdAt
    updatedAt
    activityUserAppUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteActivityUserAppMutationVariables,
  APITypes.DeleteActivityUserAppMutation
>;
export const createGuidanceContent = /* GraphQL */ `mutation CreateGuidanceContent(
  $input: CreateGuidanceContentInput!
  $condition: ModelGuidanceContentConditionInput
) {
  createGuidanceContent(input: $input, condition: $condition) {
    id
    title
    guidanceID
    content
    link
    order
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGuidanceContentMutationVariables,
  APITypes.CreateGuidanceContentMutation
>;
export const updateGuidanceContent = /* GraphQL */ `mutation UpdateGuidanceContent(
  $input: UpdateGuidanceContentInput!
  $condition: ModelGuidanceContentConditionInput
) {
  updateGuidanceContent(input: $input, condition: $condition) {
    id
    title
    guidanceID
    content
    link
    order
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGuidanceContentMutationVariables,
  APITypes.UpdateGuidanceContentMutation
>;
export const deleteGuidanceContent = /* GraphQL */ `mutation DeleteGuidanceContent(
  $input: DeleteGuidanceContentInput!
  $condition: ModelGuidanceContentConditionInput
) {
  deleteGuidanceContent(input: $input, condition: $condition) {
    id
    title
    guidanceID
    content
    link
    order
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGuidanceContentMutationVariables,
  APITypes.DeleteGuidanceContentMutation
>;
export const createGuidanceTypes = /* GraphQL */ `mutation CreateGuidanceTypes(
  $input: CreateGuidanceTypesInput!
  $condition: ModelGuidanceTypesConditionInput
) {
  createGuidanceTypes(input: $input, condition: $condition) {
    id
    name
    description
    colour
    deleted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGuidanceTypesMutationVariables,
  APITypes.CreateGuidanceTypesMutation
>;
export const updateGuidanceTypes = /* GraphQL */ `mutation UpdateGuidanceTypes(
  $input: UpdateGuidanceTypesInput!
  $condition: ModelGuidanceTypesConditionInput
) {
  updateGuidanceTypes(input: $input, condition: $condition) {
    id
    name
    description
    colour
    deleted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGuidanceTypesMutationVariables,
  APITypes.UpdateGuidanceTypesMutation
>;
export const deleteGuidanceTypes = /* GraphQL */ `mutation DeleteGuidanceTypes(
  $input: DeleteGuidanceTypesInput!
  $condition: ModelGuidanceTypesConditionInput
) {
  deleteGuidanceTypes(input: $input, condition: $condition) {
    id
    name
    description
    colour
    deleted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGuidanceTypesMutationVariables,
  APITypes.DeleteGuidanceTypesMutation
>;
export const createGuidance = /* GraphQL */ `mutation CreateGuidance(
  $input: CreateGuidanceInput!
  $condition: ModelGuidanceConditionInput
) {
  createGuidance(input: $input, condition: $condition) {
    id
    title
    shortDesc
    longDesc
    thumbURL
    date
    time
    estTime
    deleted
    GuidanceTypes {
      id
      name
      description
      colour
      deleted
      createdAt
      updatedAt
      __typename
    }
    location
    author
    S3ObjectKey
    GuidanceContents {
      items {
        id
        title
        guidanceID
        content
        link
        order
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    status
    active
    lowerCaseTitle
    lowerCaseShortDesc
    scheduleDateTime
    createdAt
    updatedAt
    guidanceGuidanceTypesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGuidanceMutationVariables,
  APITypes.CreateGuidanceMutation
>;
export const updateGuidance = /* GraphQL */ `mutation UpdateGuidance(
  $input: UpdateGuidanceInput!
  $condition: ModelGuidanceConditionInput
) {
  updateGuidance(input: $input, condition: $condition) {
    id
    title
    shortDesc
    longDesc
    thumbURL
    date
    time
    estTime
    deleted
    GuidanceTypes {
      id
      name
      description
      colour
      deleted
      createdAt
      updatedAt
      __typename
    }
    location
    author
    S3ObjectKey
    GuidanceContents {
      items {
        id
        title
        guidanceID
        content
        link
        order
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    status
    active
    lowerCaseTitle
    lowerCaseShortDesc
    scheduleDateTime
    createdAt
    updatedAt
    guidanceGuidanceTypesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGuidanceMutationVariables,
  APITypes.UpdateGuidanceMutation
>;
export const deleteGuidance = /* GraphQL */ `mutation DeleteGuidance(
  $input: DeleteGuidanceInput!
  $condition: ModelGuidanceConditionInput
) {
  deleteGuidance(input: $input, condition: $condition) {
    id
    title
    shortDesc
    longDesc
    thumbURL
    date
    time
    estTime
    deleted
    GuidanceTypes {
      id
      name
      description
      colour
      deleted
      createdAt
      updatedAt
      __typename
    }
    location
    author
    S3ObjectKey
    GuidanceContents {
      items {
        id
        title
        guidanceID
        content
        link
        order
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    status
    active
    lowerCaseTitle
    lowerCaseShortDesc
    scheduleDateTime
    createdAt
    updatedAt
    guidanceGuidanceTypesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGuidanceMutationVariables,
  APITypes.DeleteGuidanceMutation
>;
export const createCalendar = /* GraphQL */ `mutation CreateCalendar(
  $input: CreateCalendarInput!
  $condition: ModelCalendarConditionInput
) {
  createCalendar(input: $input, condition: $condition) {
    id
    title
    description
    datetime
    location
    Guidance {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    done
    CalendarItemType {
      id
      name
      colour
      deleted
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    calendarGuidanceId
    calendarUserId
    calendarCalendarItemTypeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCalendarMutationVariables,
  APITypes.CreateCalendarMutation
>;
export const updateCalendar = /* GraphQL */ `mutation UpdateCalendar(
  $input: UpdateCalendarInput!
  $condition: ModelCalendarConditionInput
) {
  updateCalendar(input: $input, condition: $condition) {
    id
    title
    description
    datetime
    location
    Guidance {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    done
    CalendarItemType {
      id
      name
      colour
      deleted
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    calendarGuidanceId
    calendarUserId
    calendarCalendarItemTypeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCalendarMutationVariables,
  APITypes.UpdateCalendarMutation
>;
export const deleteCalendar = /* GraphQL */ `mutation DeleteCalendar(
  $input: DeleteCalendarInput!
  $condition: ModelCalendarConditionInput
) {
  deleteCalendar(input: $input, condition: $condition) {
    id
    title
    description
    datetime
    location
    Guidance {
      id
      title
      shortDesc
      longDesc
      thumbURL
      date
      time
      estTime
      deleted
      GuidanceTypes {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      location
      author
      S3ObjectKey
      GuidanceContents {
        nextToken
        __typename
      }
      status
      active
      lowerCaseTitle
      lowerCaseShortDesc
      scheduleDateTime
      createdAt
      updatedAt
      guidanceGuidanceTypesId
      __typename
    }
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    done
    CalendarItemType {
      id
      name
      colour
      deleted
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    calendarGuidanceId
    calendarUserId
    calendarCalendarItemTypeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCalendarMutationVariables,
  APITypes.DeleteCalendarMutation
>;
export const createArticles = /* GraphQL */ `mutation CreateArticles(
  $input: CreateArticlesInput!
  $condition: ModelArticlesConditionInput
) {
  createArticles(input: $input, condition: $condition) {
    id
    title
    description
    imageURL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateArticlesMutationVariables,
  APITypes.CreateArticlesMutation
>;
export const updateArticles = /* GraphQL */ `mutation UpdateArticles(
  $input: UpdateArticlesInput!
  $condition: ModelArticlesConditionInput
) {
  updateArticles(input: $input, condition: $condition) {
    id
    title
    description
    imageURL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateArticlesMutationVariables,
  APITypes.UpdateArticlesMutation
>;
export const deleteArticles = /* GraphQL */ `mutation DeleteArticles(
  $input: DeleteArticlesInput!
  $condition: ModelArticlesConditionInput
) {
  deleteArticles(input: $input, condition: $condition) {
    id
    title
    description
    imageURL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteArticlesMutationVariables,
  APITypes.DeleteArticlesMutation
>;
export const createChatRoom = /* GraphQL */ `mutation CreateChatRoom(
  $input: CreateChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  createChatRoom(input: $input, condition: $condition) {
    id
    name
    image
    Messages {
      items {
        id
        chatroomID
        createdAt
        text
        userID
        mediaS3URL
        needsModeration
        moderationLabel
        moderationScore
        updatedAt
        messageUserId
        __typename
      }
      nextToken
      __typename
    }
    LastMessage {
      id
      chatroomID
      createdAt
      text
      userID
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      mediaS3URL
      needsModeration
      moderationLabel
      moderationScore
      updatedAt
      messageUserId
      __typename
    }
    users {
      items {
        id
        chatRoomID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    isChatBot
    createdAt
    updatedAt
    chatRoomLastMessageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChatRoomMutationVariables,
  APITypes.CreateChatRoomMutation
>;
export const updateChatRoom = /* GraphQL */ `mutation UpdateChatRoom(
  $input: UpdateChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  updateChatRoom(input: $input, condition: $condition) {
    id
    name
    image
    Messages {
      items {
        id
        chatroomID
        createdAt
        text
        userID
        mediaS3URL
        needsModeration
        moderationLabel
        moderationScore
        updatedAt
        messageUserId
        __typename
      }
      nextToken
      __typename
    }
    LastMessage {
      id
      chatroomID
      createdAt
      text
      userID
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      mediaS3URL
      needsModeration
      moderationLabel
      moderationScore
      updatedAt
      messageUserId
      __typename
    }
    users {
      items {
        id
        chatRoomID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    isChatBot
    createdAt
    updatedAt
    chatRoomLastMessageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChatRoomMutationVariables,
  APITypes.UpdateChatRoomMutation
>;
export const deleteChatRoom = /* GraphQL */ `mutation DeleteChatRoom(
  $input: DeleteChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  deleteChatRoom(input: $input, condition: $condition) {
    id
    name
    image
    Messages {
      items {
        id
        chatroomID
        createdAt
        text
        userID
        mediaS3URL
        needsModeration
        moderationLabel
        moderationScore
        updatedAt
        messageUserId
        __typename
      }
      nextToken
      __typename
    }
    LastMessage {
      id
      chatroomID
      createdAt
      text
      userID
      User {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      mediaS3URL
      needsModeration
      moderationLabel
      moderationScore
      updatedAt
      messageUserId
      __typename
    }
    users {
      items {
        id
        chatRoomID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    isChatBot
    createdAt
    updatedAt
    chatRoomLastMessageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChatRoomMutationVariables,
  APITypes.DeleteChatRoomMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    chatroomID
    createdAt
    text
    userID
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    mediaS3URL
    needsModeration
    moderationLabel
    moderationScore
    updatedAt
    messageUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
    id
    chatroomID
    createdAt
    text
    userID
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    mediaS3URL
    needsModeration
    moderationLabel
    moderationScore
    updatedAt
    messageUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    id
    chatroomID
    createdAt
    text
    userID
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    mediaS3URL
    needsModeration
    moderationLabel
    moderationScore
    updatedAt
    messageUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    name
    status
    image
    ChatRooms {
      items {
        id
        chatRoomID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    userType
    deleted
    firstName
    lastName
    mobileNo
    headerImage
    UserExtendedInfos {
      items {
        id
        field
        value
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    pwdName
    expoNotificationToken
    nativeNotificationToken
    myfriendss {
      items {
        id
        myFriendsID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    postRegistrationComplete
    additionalInformationComplete
    lastActivity
    terriiProfile {
      id
      userID
      user {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      role
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
      lastLogin
      profilePicture
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userTerriiProfileId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    name
    status
    image
    ChatRooms {
      items {
        id
        chatRoomID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    userType
    deleted
    firstName
    lastName
    mobileNo
    headerImage
    UserExtendedInfos {
      items {
        id
        field
        value
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    pwdName
    expoNotificationToken
    nativeNotificationToken
    myfriendss {
      items {
        id
        myFriendsID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    postRegistrationComplete
    additionalInformationComplete
    lastActivity
    terriiProfile {
      id
      userID
      user {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      role
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
      lastLogin
      profilePicture
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userTerriiProfileId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    name
    status
    image
    ChatRooms {
      items {
        id
        chatRoomID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    userType
    deleted
    firstName
    lastName
    mobileNo
    headerImage
    UserExtendedInfos {
      items {
        id
        field
        value
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    pwdName
    expoNotificationToken
    nativeNotificationToken
    myfriendss {
      items {
        id
        myFriendsID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    postRegistrationComplete
    additionalInformationComplete
    lastActivity
    terriiProfile {
      id
      userID
      user {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      role
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
      lastLogin
      profilePicture
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userTerriiProfileId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createJournalEntry = /* GraphQL */ `mutation CreateJournalEntry(
  $input: CreateJournalEntryInput!
  $condition: ModelJournalEntryConditionInput
) {
  createJournalEntry(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    title
    content
    entryDatetime
    imageKey
    emotion
    tag
    createdAt
    updatedAt
    journalEntryUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateJournalEntryMutationVariables,
  APITypes.CreateJournalEntryMutation
>;
export const updateJournalEntry = /* GraphQL */ `mutation UpdateJournalEntry(
  $input: UpdateJournalEntryInput!
  $condition: ModelJournalEntryConditionInput
) {
  updateJournalEntry(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    title
    content
    entryDatetime
    imageKey
    emotion
    tag
    createdAt
    updatedAt
    journalEntryUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateJournalEntryMutationVariables,
  APITypes.UpdateJournalEntryMutation
>;
export const deleteJournalEntry = /* GraphQL */ `mutation DeleteJournalEntry(
  $input: DeleteJournalEntryInput!
  $condition: ModelJournalEntryConditionInput
) {
  deleteJournalEntry(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    title
    content
    entryDatetime
    imageKey
    emotion
    tag
    createdAt
    updatedAt
    journalEntryUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteJournalEntryMutationVariables,
  APITypes.DeleteJournalEntryMutation
>;
export const createCommunityEvent = /* GraphQL */ `mutation CreateCommunityEvent(
  $input: CreateCommunityEventInput!
  $condition: ModelCommunityEventConditionInput
) {
  createCommunityEvent(input: $input, condition: $condition) {
    id
    title
    description
    imageS3Key
    eventDateTime
    location
    communityGroupID
    CommunityGroup {
      id
      CommunityPosts {
        nextToken
        __typename
      }
      name
      description
      imageS3Key
      headerS3Key
      createdAt
      updatedAt
      __typename
    }
    createdByID
    createdBy {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    CommunityEventAttendances {
      items {
        id
        userID
        eventID
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommunityEventMutationVariables,
  APITypes.CreateCommunityEventMutation
>;
export const updateCommunityEvent = /* GraphQL */ `mutation UpdateCommunityEvent(
  $input: UpdateCommunityEventInput!
  $condition: ModelCommunityEventConditionInput
) {
  updateCommunityEvent(input: $input, condition: $condition) {
    id
    title
    description
    imageS3Key
    eventDateTime
    location
    communityGroupID
    CommunityGroup {
      id
      CommunityPosts {
        nextToken
        __typename
      }
      name
      description
      imageS3Key
      headerS3Key
      createdAt
      updatedAt
      __typename
    }
    createdByID
    createdBy {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    CommunityEventAttendances {
      items {
        id
        userID
        eventID
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommunityEventMutationVariables,
  APITypes.UpdateCommunityEventMutation
>;
export const deleteCommunityEvent = /* GraphQL */ `mutation DeleteCommunityEvent(
  $input: DeleteCommunityEventInput!
  $condition: ModelCommunityEventConditionInput
) {
  deleteCommunityEvent(input: $input, condition: $condition) {
    id
    title
    description
    imageS3Key
    eventDateTime
    location
    communityGroupID
    CommunityGroup {
      id
      CommunityPosts {
        nextToken
        __typename
      }
      name
      description
      imageS3Key
      headerS3Key
      createdAt
      updatedAt
      __typename
    }
    createdByID
    createdBy {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    CommunityEventAttendances {
      items {
        id
        userID
        eventID
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommunityEventMutationVariables,
  APITypes.DeleteCommunityEventMutation
>;
export const createCommunityEventAttendance = /* GraphQL */ `mutation CreateCommunityEventAttendance(
  $input: CreateCommunityEventAttendanceInput!
  $condition: ModelCommunityEventAttendanceConditionInput
) {
  createCommunityEventAttendance(input: $input, condition: $condition) {
    id
    userID
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    eventID
    CommunityEvent {
      id
      title
      description
      imageS3Key
      eventDateTime
      location
      communityGroupID
      CommunityGroup {
        id
        name
        description
        imageS3Key
        headerS3Key
        createdAt
        updatedAt
        __typename
      }
      createdByID
      createdBy {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      CommunityEventAttendances {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommunityEventAttendanceMutationVariables,
  APITypes.CreateCommunityEventAttendanceMutation
>;
export const updateCommunityEventAttendance = /* GraphQL */ `mutation UpdateCommunityEventAttendance(
  $input: UpdateCommunityEventAttendanceInput!
  $condition: ModelCommunityEventAttendanceConditionInput
) {
  updateCommunityEventAttendance(input: $input, condition: $condition) {
    id
    userID
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    eventID
    CommunityEvent {
      id
      title
      description
      imageS3Key
      eventDateTime
      location
      communityGroupID
      CommunityGroup {
        id
        name
        description
        imageS3Key
        headerS3Key
        createdAt
        updatedAt
        __typename
      }
      createdByID
      createdBy {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      CommunityEventAttendances {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommunityEventAttendanceMutationVariables,
  APITypes.UpdateCommunityEventAttendanceMutation
>;
export const deleteCommunityEventAttendance = /* GraphQL */ `mutation DeleteCommunityEventAttendance(
  $input: DeleteCommunityEventAttendanceInput!
  $condition: ModelCommunityEventAttendanceConditionInput
) {
  deleteCommunityEventAttendance(input: $input, condition: $condition) {
    id
    userID
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    eventID
    CommunityEvent {
      id
      title
      description
      imageS3Key
      eventDateTime
      location
      communityGroupID
      CommunityGroup {
        id
        name
        description
        imageS3Key
        headerS3Key
        createdAt
        updatedAt
        __typename
      }
      createdByID
      createdBy {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      CommunityEventAttendances {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommunityEventAttendanceMutationVariables,
  APITypes.DeleteCommunityEventAttendanceMutation
>;
export const createCommunityCommentLikes = /* GraphQL */ `mutation CreateCommunityCommentLikes(
  $input: CreateCommunityCommentLikesInput!
  $condition: ModelCommunityCommentLikesConditionInput
) {
  createCommunityCommentLikes(input: $input, condition: $condition) {
    id
    commentID
    communityCommentLikesUserId
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommunityCommentLikesMutationVariables,
  APITypes.CreateCommunityCommentLikesMutation
>;
export const updateCommunityCommentLikes = /* GraphQL */ `mutation UpdateCommunityCommentLikes(
  $input: UpdateCommunityCommentLikesInput!
  $condition: ModelCommunityCommentLikesConditionInput
) {
  updateCommunityCommentLikes(input: $input, condition: $condition) {
    id
    commentID
    communityCommentLikesUserId
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommunityCommentLikesMutationVariables,
  APITypes.UpdateCommunityCommentLikesMutation
>;
export const deleteCommunityCommentLikes = /* GraphQL */ `mutation DeleteCommunityCommentLikes(
  $input: DeleteCommunityCommentLikesInput!
  $condition: ModelCommunityCommentLikesConditionInput
) {
  deleteCommunityCommentLikes(input: $input, condition: $condition) {
    id
    commentID
    communityCommentLikesUserId
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommunityCommentLikesMutationVariables,
  APITypes.DeleteCommunityCommentLikesMutation
>;
export const createCarePlanOutputs = /* GraphQL */ `mutation CreateCarePlanOutputs(
  $input: CreateCarePlanOutputsInput!
  $condition: ModelCarePlanOutputsConditionInput
) {
  createCarePlanOutputs(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    carePlanJSON
    deleted
    carePlanName
    createdAt
    updatedAt
    carePlanOutputsUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCarePlanOutputsMutationVariables,
  APITypes.CreateCarePlanOutputsMutation
>;
export const updateCarePlanOutputs = /* GraphQL */ `mutation UpdateCarePlanOutputs(
  $input: UpdateCarePlanOutputsInput!
  $condition: ModelCarePlanOutputsConditionInput
) {
  updateCarePlanOutputs(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    carePlanJSON
    deleted
    carePlanName
    createdAt
    updatedAt
    carePlanOutputsUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCarePlanOutputsMutationVariables,
  APITypes.UpdateCarePlanOutputsMutation
>;
export const deleteCarePlanOutputs = /* GraphQL */ `mutation DeleteCarePlanOutputs(
  $input: DeleteCarePlanOutputsInput!
  $condition: ModelCarePlanOutputsConditionInput
) {
  deleteCarePlanOutputs(input: $input, condition: $condition) {
    id
    User {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    carePlanJSON
    deleted
    carePlanName
    createdAt
    updatedAt
    carePlanOutputsUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCarePlanOutputsMutationVariables,
  APITypes.DeleteCarePlanOutputsMutation
>;
export const createTerriiCareHome = /* GraphQL */ `mutation CreateTerriiCareHome(
  $input: CreateTerriiCareHomeInput!
  $condition: ModelTerriiCareHomeConditionInput
) {
  createTerriiCareHome(input: $input, condition: $condition) {
    id
    name
    address
    city
    postCode
    phoneNumber
    email
    website
    adminUsers {
      items {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    residents {
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerriiCareHomeMutationVariables,
  APITypes.CreateTerriiCareHomeMutation
>;
export const updateTerriiCareHome = /* GraphQL */ `mutation UpdateTerriiCareHome(
  $input: UpdateTerriiCareHomeInput!
  $condition: ModelTerriiCareHomeConditionInput
) {
  updateTerriiCareHome(input: $input, condition: $condition) {
    id
    name
    address
    city
    postCode
    phoneNumber
    email
    website
    adminUsers {
      items {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    residents {
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerriiCareHomeMutationVariables,
  APITypes.UpdateTerriiCareHomeMutation
>;
export const deleteTerriiCareHome = /* GraphQL */ `mutation DeleteTerriiCareHome(
  $input: DeleteTerriiCareHomeInput!
  $condition: ModelTerriiCareHomeConditionInput
) {
  deleteTerriiCareHome(input: $input, condition: $condition) {
    id
    name
    address
    city
    postCode
    phoneNumber
    email
    website
    adminUsers {
      items {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    residents {
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerriiCareHomeMutationVariables,
  APITypes.DeleteTerriiCareHomeMutation
>;
export const createTerriiUserProfile = /* GraphQL */ `mutation CreateTerriiUserProfile(
  $input: CreateTerriiUserProfileInput!
  $condition: ModelTerriiUserProfileConditionInput
) {
  createTerriiUserProfile(input: $input, condition: $condition) {
    id
    userID
    user {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    role
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
      adminUsers {
        nextToken
        __typename
      }
      residents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    lastLogin
    profilePicture
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerriiUserProfileMutationVariables,
  APITypes.CreateTerriiUserProfileMutation
>;
export const updateTerriiUserProfile = /* GraphQL */ `mutation UpdateTerriiUserProfile(
  $input: UpdateTerriiUserProfileInput!
  $condition: ModelTerriiUserProfileConditionInput
) {
  updateTerriiUserProfile(input: $input, condition: $condition) {
    id
    userID
    user {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    role
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
      adminUsers {
        nextToken
        __typename
      }
      residents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    lastLogin
    profilePicture
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerriiUserProfileMutationVariables,
  APITypes.UpdateTerriiUserProfileMutation
>;
export const deleteTerriiUserProfile = /* GraphQL */ `mutation DeleteTerriiUserProfile(
  $input: DeleteTerriiUserProfileInput!
  $condition: ModelTerriiUserProfileConditionInput
) {
  deleteTerriiUserProfile(input: $input, condition: $condition) {
    id
    userID
    user {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    role
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
      adminUsers {
        nextToken
        __typename
      }
      residents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    lastLogin
    profilePicture
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerriiUserProfileMutationVariables,
  APITypes.DeleteTerriiUserProfileMutation
>;
export const createTerriiResident = /* GraphQL */ `mutation CreateTerriiResident(
  $input: CreateTerriiResidentInput!
  $condition: ModelTerriiResidentConditionInput
) {
  createTerriiResident(input: $input, condition: $condition) {
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
      adminUsers {
        nextToken
        __typename
      }
      residents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    dateOfBirth
    admissionDate
    status
    lastUpdate
    familyMembers {
      items {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    medicalInfo {
      id
      primaryPhysician
      conditions
      medications {
        nextToken
        __typename
      }
      allergies
      dietaryRestrictions
      residentID
      resident {
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
      createdAt
      updatedAt
      __typename
    }
    carePreferences {
      id
      interests
      routine
      communication
      mobility
      residentID
      resident {
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
      createdAt
      updatedAt
      __typename
    }
    activities {
      items {
        id
        date
        activity
        notes
        staff
        residentID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    emergencyContact {
      id
      name
      relationship
      phone
      email
      residentID
      resident {
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
      createdAt
      updatedAt
      __typename
    }
    unreadMessages
    createdAt
    updatedAt
    terriiResidentMedicalInfoId
    terriiResidentCarePreferencesId
    terriiResidentEmergencyContactId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerriiResidentMutationVariables,
  APITypes.CreateTerriiResidentMutation
>;
export const updateTerriiResident = /* GraphQL */ `mutation UpdateTerriiResident(
  $input: UpdateTerriiResidentInput!
  $condition: ModelTerriiResidentConditionInput
) {
  updateTerriiResident(input: $input, condition: $condition) {
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
      adminUsers {
        nextToken
        __typename
      }
      residents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    dateOfBirth
    admissionDate
    status
    lastUpdate
    familyMembers {
      items {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    medicalInfo {
      id
      primaryPhysician
      conditions
      medications {
        nextToken
        __typename
      }
      allergies
      dietaryRestrictions
      residentID
      resident {
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
      createdAt
      updatedAt
      __typename
    }
    carePreferences {
      id
      interests
      routine
      communication
      mobility
      residentID
      resident {
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
      createdAt
      updatedAt
      __typename
    }
    activities {
      items {
        id
        date
        activity
        notes
        staff
        residentID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    emergencyContact {
      id
      name
      relationship
      phone
      email
      residentID
      resident {
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
      createdAt
      updatedAt
      __typename
    }
    unreadMessages
    createdAt
    updatedAt
    terriiResidentMedicalInfoId
    terriiResidentCarePreferencesId
    terriiResidentEmergencyContactId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerriiResidentMutationVariables,
  APITypes.UpdateTerriiResidentMutation
>;
export const deleteTerriiResident = /* GraphQL */ `mutation DeleteTerriiResident(
  $input: DeleteTerriiResidentInput!
  $condition: ModelTerriiResidentConditionInput
) {
  deleteTerriiResident(input: $input, condition: $condition) {
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
      adminUsers {
        nextToken
        __typename
      }
      residents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    dateOfBirth
    admissionDate
    status
    lastUpdate
    familyMembers {
      items {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    medicalInfo {
      id
      primaryPhysician
      conditions
      medications {
        nextToken
        __typename
      }
      allergies
      dietaryRestrictions
      residentID
      resident {
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
      createdAt
      updatedAt
      __typename
    }
    carePreferences {
      id
      interests
      routine
      communication
      mobility
      residentID
      resident {
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
      createdAt
      updatedAt
      __typename
    }
    activities {
      items {
        id
        date
        activity
        notes
        staff
        residentID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    emergencyContact {
      id
      name
      relationship
      phone
      email
      residentID
      resident {
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
      createdAt
      updatedAt
      __typename
    }
    unreadMessages
    createdAt
    updatedAt
    terriiResidentMedicalInfoId
    terriiResidentCarePreferencesId
    terriiResidentEmergencyContactId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerriiResidentMutationVariables,
  APITypes.DeleteTerriiResidentMutation
>;
export const createTerriiResidentFamily = /* GraphQL */ `mutation CreateTerriiResidentFamily(
  $input: CreateTerriiResidentFamilyInput!
  $condition: ModelTerriiResidentFamilyConditionInput
) {
  createTerriiResidentFamily(input: $input, condition: $condition) {
    id
    name
    relationship
    phone
    email
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerriiResidentFamilyMutationVariables,
  APITypes.CreateTerriiResidentFamilyMutation
>;
export const updateTerriiResidentFamily = /* GraphQL */ `mutation UpdateTerriiResidentFamily(
  $input: UpdateTerriiResidentFamilyInput!
  $condition: ModelTerriiResidentFamilyConditionInput
) {
  updateTerriiResidentFamily(input: $input, condition: $condition) {
    id
    name
    relationship
    phone
    email
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerriiResidentFamilyMutationVariables,
  APITypes.UpdateTerriiResidentFamilyMutation
>;
export const deleteTerriiResidentFamily = /* GraphQL */ `mutation DeleteTerriiResidentFamily(
  $input: DeleteTerriiResidentFamilyInput!
  $condition: ModelTerriiResidentFamilyConditionInput
) {
  deleteTerriiResidentFamily(input: $input, condition: $condition) {
    id
    name
    relationship
    phone
    email
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerriiResidentFamilyMutationVariables,
  APITypes.DeleteTerriiResidentFamilyMutation
>;
export const createTerriiResidentMedical = /* GraphQL */ `mutation CreateTerriiResidentMedical(
  $input: CreateTerriiResidentMedicalInput!
  $condition: ModelTerriiResidentMedicalConditionInput
) {
  createTerriiResidentMedical(input: $input, condition: $condition) {
    id
    primaryPhysician
    conditions
    medications {
      items {
        id
        name
        dosage
        time
        medicalInfoID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    allergies
    dietaryRestrictions
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerriiResidentMedicalMutationVariables,
  APITypes.CreateTerriiResidentMedicalMutation
>;
export const updateTerriiResidentMedical = /* GraphQL */ `mutation UpdateTerriiResidentMedical(
  $input: UpdateTerriiResidentMedicalInput!
  $condition: ModelTerriiResidentMedicalConditionInput
) {
  updateTerriiResidentMedical(input: $input, condition: $condition) {
    id
    primaryPhysician
    conditions
    medications {
      items {
        id
        name
        dosage
        time
        medicalInfoID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    allergies
    dietaryRestrictions
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerriiResidentMedicalMutationVariables,
  APITypes.UpdateTerriiResidentMedicalMutation
>;
export const deleteTerriiResidentMedical = /* GraphQL */ `mutation DeleteTerriiResidentMedical(
  $input: DeleteTerriiResidentMedicalInput!
  $condition: ModelTerriiResidentMedicalConditionInput
) {
  deleteTerriiResidentMedical(input: $input, condition: $condition) {
    id
    primaryPhysician
    conditions
    medications {
      items {
        id
        name
        dosage
        time
        medicalInfoID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    allergies
    dietaryRestrictions
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerriiResidentMedicalMutationVariables,
  APITypes.DeleteTerriiResidentMedicalMutation
>;
export const createTerriiResidentMedication = /* GraphQL */ `mutation CreateTerriiResidentMedication(
  $input: CreateTerriiResidentMedicationInput!
  $condition: ModelTerriiResidentMedicationConditionInput
) {
  createTerriiResidentMedication(input: $input, condition: $condition) {
    id
    name
    dosage
    time
    medicalInfoID
    medicalInfo {
      id
      primaryPhysician
      conditions
      medications {
        nextToken
        __typename
      }
      allergies
      dietaryRestrictions
      residentID
      resident {
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
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerriiResidentMedicationMutationVariables,
  APITypes.CreateTerriiResidentMedicationMutation
>;
export const updateTerriiResidentMedication = /* GraphQL */ `mutation UpdateTerriiResidentMedication(
  $input: UpdateTerriiResidentMedicationInput!
  $condition: ModelTerriiResidentMedicationConditionInput
) {
  updateTerriiResidentMedication(input: $input, condition: $condition) {
    id
    name
    dosage
    time
    medicalInfoID
    medicalInfo {
      id
      primaryPhysician
      conditions
      medications {
        nextToken
        __typename
      }
      allergies
      dietaryRestrictions
      residentID
      resident {
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
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerriiResidentMedicationMutationVariables,
  APITypes.UpdateTerriiResidentMedicationMutation
>;
export const deleteTerriiResidentMedication = /* GraphQL */ `mutation DeleteTerriiResidentMedication(
  $input: DeleteTerriiResidentMedicationInput!
  $condition: ModelTerriiResidentMedicationConditionInput
) {
  deleteTerriiResidentMedication(input: $input, condition: $condition) {
    id
    name
    dosage
    time
    medicalInfoID
    medicalInfo {
      id
      primaryPhysician
      conditions
      medications {
        nextToken
        __typename
      }
      allergies
      dietaryRestrictions
      residentID
      resident {
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
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerriiResidentMedicationMutationVariables,
  APITypes.DeleteTerriiResidentMedicationMutation
>;
export const createTerriiResidentCarePreferences = /* GraphQL */ `mutation CreateTerriiResidentCarePreferences(
  $input: CreateTerriiResidentCarePreferencesInput!
  $condition: ModelTerriiResidentCarePreferencesConditionInput
) {
  createTerriiResidentCarePreferences(input: $input, condition: $condition) {
    id
    interests
    routine
    communication
    mobility
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerriiResidentCarePreferencesMutationVariables,
  APITypes.CreateTerriiResidentCarePreferencesMutation
>;
export const updateTerriiResidentCarePreferences = /* GraphQL */ `mutation UpdateTerriiResidentCarePreferences(
  $input: UpdateTerriiResidentCarePreferencesInput!
  $condition: ModelTerriiResidentCarePreferencesConditionInput
) {
  updateTerriiResidentCarePreferences(input: $input, condition: $condition) {
    id
    interests
    routine
    communication
    mobility
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerriiResidentCarePreferencesMutationVariables,
  APITypes.UpdateTerriiResidentCarePreferencesMutation
>;
export const deleteTerriiResidentCarePreferences = /* GraphQL */ `mutation DeleteTerriiResidentCarePreferences(
  $input: DeleteTerriiResidentCarePreferencesInput!
  $condition: ModelTerriiResidentCarePreferencesConditionInput
) {
  deleteTerriiResidentCarePreferences(input: $input, condition: $condition) {
    id
    interests
    routine
    communication
    mobility
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerriiResidentCarePreferencesMutationVariables,
  APITypes.DeleteTerriiResidentCarePreferencesMutation
>;
export const createTerriiResidentActivity = /* GraphQL */ `mutation CreateTerriiResidentActivity(
  $input: CreateTerriiResidentActivityInput!
  $condition: ModelTerriiResidentActivityConditionInput
) {
  createTerriiResidentActivity(input: $input, condition: $condition) {
    id
    date
    activity
    notes
    staff
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerriiResidentActivityMutationVariables,
  APITypes.CreateTerriiResidentActivityMutation
>;
export const updateTerriiResidentActivity = /* GraphQL */ `mutation UpdateTerriiResidentActivity(
  $input: UpdateTerriiResidentActivityInput!
  $condition: ModelTerriiResidentActivityConditionInput
) {
  updateTerriiResidentActivity(input: $input, condition: $condition) {
    id
    date
    activity
    notes
    staff
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerriiResidentActivityMutationVariables,
  APITypes.UpdateTerriiResidentActivityMutation
>;
export const deleteTerriiResidentActivity = /* GraphQL */ `mutation DeleteTerriiResidentActivity(
  $input: DeleteTerriiResidentActivityInput!
  $condition: ModelTerriiResidentActivityConditionInput
) {
  deleteTerriiResidentActivity(input: $input, condition: $condition) {
    id
    date
    activity
    notes
    staff
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerriiResidentActivityMutationVariables,
  APITypes.DeleteTerriiResidentActivityMutation
>;
export const createTerriiResidentEmergencyContact = /* GraphQL */ `mutation CreateTerriiResidentEmergencyContact(
  $input: CreateTerriiResidentEmergencyContactInput!
  $condition: ModelTerriiResidentEmergencyContactConditionInput
) {
  createTerriiResidentEmergencyContact(input: $input, condition: $condition) {
    id
    name
    relationship
    phone
    email
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerriiResidentEmergencyContactMutationVariables,
  APITypes.CreateTerriiResidentEmergencyContactMutation
>;
export const updateTerriiResidentEmergencyContact = /* GraphQL */ `mutation UpdateTerriiResidentEmergencyContact(
  $input: UpdateTerriiResidentEmergencyContactInput!
  $condition: ModelTerriiResidentEmergencyContactConditionInput
) {
  updateTerriiResidentEmergencyContact(input: $input, condition: $condition) {
    id
    name
    relationship
    phone
    email
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerriiResidentEmergencyContactMutationVariables,
  APITypes.UpdateTerriiResidentEmergencyContactMutation
>;
export const deleteTerriiResidentEmergencyContact = /* GraphQL */ `mutation DeleteTerriiResidentEmergencyContact(
  $input: DeleteTerriiResidentEmergencyContactInput!
  $condition: ModelTerriiResidentEmergencyContactConditionInput
) {
  deleteTerriiResidentEmergencyContact(input: $input, condition: $condition) {
    id
    name
    relationship
    phone
    email
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerriiResidentEmergencyContactMutationVariables,
  APITypes.DeleteTerriiResidentEmergencyContactMutation
>;
export const createTerriiMessageThread = /* GraphQL */ `mutation CreateTerriiMessageThread(
  $input: CreateTerriiMessageThreadInput!
  $condition: ModelTerriiMessageThreadConditionInput
) {
  createTerriiMessageThread(input: $input, condition: $condition) {
    id
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    participants
    isStarred
    isArchived
    unreadCount
    lastMessage {
      id
      content
      sender
      isSentByStaff
      threadID
      thread {
        id
        residentID
        participants
        isStarred
        isArchived
        unreadCount
        createdAt
        updatedAt
        terriiMessageThreadLastMessageId
        __typename
      }
      reactions
      attachmentURL
      createdAt
      updatedAt
      __typename
    }
    messages {
      items {
        id
        content
        sender
        isSentByStaff
        threadID
        reactions
        attachmentURL
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    terriiMessageThreadLastMessageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerriiMessageThreadMutationVariables,
  APITypes.CreateTerriiMessageThreadMutation
>;
export const updateTerriiMessageThread = /* GraphQL */ `mutation UpdateTerriiMessageThread(
  $input: UpdateTerriiMessageThreadInput!
  $condition: ModelTerriiMessageThreadConditionInput
) {
  updateTerriiMessageThread(input: $input, condition: $condition) {
    id
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    participants
    isStarred
    isArchived
    unreadCount
    lastMessage {
      id
      content
      sender
      isSentByStaff
      threadID
      thread {
        id
        residentID
        participants
        isStarred
        isArchived
        unreadCount
        createdAt
        updatedAt
        terriiMessageThreadLastMessageId
        __typename
      }
      reactions
      attachmentURL
      createdAt
      updatedAt
      __typename
    }
    messages {
      items {
        id
        content
        sender
        isSentByStaff
        threadID
        reactions
        attachmentURL
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    terriiMessageThreadLastMessageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerriiMessageThreadMutationVariables,
  APITypes.UpdateTerriiMessageThreadMutation
>;
export const deleteTerriiMessageThread = /* GraphQL */ `mutation DeleteTerriiMessageThread(
  $input: DeleteTerriiMessageThreadInput!
  $condition: ModelTerriiMessageThreadConditionInput
) {
  deleteTerriiMessageThread(input: $input, condition: $condition) {
    id
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
    participants
    isStarred
    isArchived
    unreadCount
    lastMessage {
      id
      content
      sender
      isSentByStaff
      threadID
      thread {
        id
        residentID
        participants
        isStarred
        isArchived
        unreadCount
        createdAt
        updatedAt
        terriiMessageThreadLastMessageId
        __typename
      }
      reactions
      attachmentURL
      createdAt
      updatedAt
      __typename
    }
    messages {
      items {
        id
        content
        sender
        isSentByStaff
        threadID
        reactions
        attachmentURL
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    terriiMessageThreadLastMessageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerriiMessageThreadMutationVariables,
  APITypes.DeleteTerriiMessageThreadMutation
>;
export const createTerriiMessage = /* GraphQL */ `mutation CreateTerriiMessage(
  $input: CreateTerriiMessageInput!
  $condition: ModelTerriiMessageConditionInput
) {
  createTerriiMessage(input: $input, condition: $condition) {
    id
    content
    sender
    isSentByStaff
    threadID
    thread {
      id
      residentID
      resident {
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
      participants
      isStarred
      isArchived
      unreadCount
      lastMessage {
        id
        content
        sender
        isSentByStaff
        threadID
        reactions
        attachmentURL
        createdAt
        updatedAt
        __typename
      }
      messages {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      terriiMessageThreadLastMessageId
      __typename
    }
    reactions
    attachmentURL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerriiMessageMutationVariables,
  APITypes.CreateTerriiMessageMutation
>;
export const updateTerriiMessage = /* GraphQL */ `mutation UpdateTerriiMessage(
  $input: UpdateTerriiMessageInput!
  $condition: ModelTerriiMessageConditionInput
) {
  updateTerriiMessage(input: $input, condition: $condition) {
    id
    content
    sender
    isSentByStaff
    threadID
    thread {
      id
      residentID
      resident {
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
      participants
      isStarred
      isArchived
      unreadCount
      lastMessage {
        id
        content
        sender
        isSentByStaff
        threadID
        reactions
        attachmentURL
        createdAt
        updatedAt
        __typename
      }
      messages {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      terriiMessageThreadLastMessageId
      __typename
    }
    reactions
    attachmentURL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerriiMessageMutationVariables,
  APITypes.UpdateTerriiMessageMutation
>;
export const deleteTerriiMessage = /* GraphQL */ `mutation DeleteTerriiMessage(
  $input: DeleteTerriiMessageInput!
  $condition: ModelTerriiMessageConditionInput
) {
  deleteTerriiMessage(input: $input, condition: $condition) {
    id
    content
    sender
    isSentByStaff
    threadID
    thread {
      id
      residentID
      resident {
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
      participants
      isStarred
      isArchived
      unreadCount
      lastMessage {
        id
        content
        sender
        isSentByStaff
        threadID
        reactions
        attachmentURL
        createdAt
        updatedAt
        __typename
      }
      messages {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      terriiMessageThreadLastMessageId
      __typename
    }
    reactions
    attachmentURL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerriiMessageMutationVariables,
  APITypes.DeleteTerriiMessageMutation
>;
export const createTerriiMoment = /* GraphQL */ `mutation CreateTerriiMoment(
  $input: CreateTerriiMomentInput!
  $condition: ModelTerriiMomentConditionInput
) {
  createTerriiMoment(input: $input, condition: $condition) {
    id
    content
    createdByID
    createdBy {
      id
      userID
      user {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      role
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
      lastLogin
      profilePicture
      createdAt
      updatedAt
      __typename
    }
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
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
      adminUsers {
        nextToken
        __typename
      }
      residents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    media
    tags
    likes
    comments {
      items {
        id
        content
        createdByID
        momentID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    isPrivate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerriiMomentMutationVariables,
  APITypes.CreateTerriiMomentMutation
>;
export const updateTerriiMoment = /* GraphQL */ `mutation UpdateTerriiMoment(
  $input: UpdateTerriiMomentInput!
  $condition: ModelTerriiMomentConditionInput
) {
  updateTerriiMoment(input: $input, condition: $condition) {
    id
    content
    createdByID
    createdBy {
      id
      userID
      user {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      role
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
      lastLogin
      profilePicture
      createdAt
      updatedAt
      __typename
    }
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
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
      adminUsers {
        nextToken
        __typename
      }
      residents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    media
    tags
    likes
    comments {
      items {
        id
        content
        createdByID
        momentID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    isPrivate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerriiMomentMutationVariables,
  APITypes.UpdateTerriiMomentMutation
>;
export const deleteTerriiMoment = /* GraphQL */ `mutation DeleteTerriiMoment(
  $input: DeleteTerriiMomentInput!
  $condition: ModelTerriiMomentConditionInput
) {
  deleteTerriiMoment(input: $input, condition: $condition) {
    id
    content
    createdByID
    createdBy {
      id
      userID
      user {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      role
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
      lastLogin
      profilePicture
      createdAt
      updatedAt
      __typename
    }
    residentID
    resident {
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
      familyMembers {
        nextToken
        __typename
      }
      medicalInfo {
        id
        primaryPhysician
        conditions
        allergies
        dietaryRestrictions
        residentID
        createdAt
        updatedAt
        __typename
      }
      carePreferences {
        id
        interests
        routine
        communication
        mobility
        residentID
        createdAt
        updatedAt
        __typename
      }
      activities {
        nextToken
        __typename
      }
      emergencyContact {
        id
        name
        relationship
        phone
        email
        residentID
        createdAt
        updatedAt
        __typename
      }
      unreadMessages
      createdAt
      updatedAt
      terriiResidentMedicalInfoId
      terriiResidentCarePreferencesId
      terriiResidentEmergencyContactId
      __typename
    }
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
      adminUsers {
        nextToken
        __typename
      }
      residents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    media
    tags
    likes
    comments {
      items {
        id
        content
        createdByID
        momentID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    isPrivate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerriiMomentMutationVariables,
  APITypes.DeleteTerriiMomentMutation
>;
export const createTerriiMomentComment = /* GraphQL */ `mutation CreateTerriiMomentComment(
  $input: CreateTerriiMomentCommentInput!
  $condition: ModelTerriiMomentCommentConditionInput
) {
  createTerriiMomentComment(input: $input, condition: $condition) {
    id
    content
    createdByID
    createdBy {
      id
      userID
      user {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      role
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
      lastLogin
      profilePicture
      createdAt
      updatedAt
      __typename
    }
    momentID
    moment {
      id
      content
      createdByID
      createdBy {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      residentID
      resident {
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
      media
      tags
      likes
      comments {
        nextToken
        __typename
      }
      isPrivate
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerriiMomentCommentMutationVariables,
  APITypes.CreateTerriiMomentCommentMutation
>;
export const updateTerriiMomentComment = /* GraphQL */ `mutation UpdateTerriiMomentComment(
  $input: UpdateTerriiMomentCommentInput!
  $condition: ModelTerriiMomentCommentConditionInput
) {
  updateTerriiMomentComment(input: $input, condition: $condition) {
    id
    content
    createdByID
    createdBy {
      id
      userID
      user {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      role
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
      lastLogin
      profilePicture
      createdAt
      updatedAt
      __typename
    }
    momentID
    moment {
      id
      content
      createdByID
      createdBy {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      residentID
      resident {
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
      media
      tags
      likes
      comments {
        nextToken
        __typename
      }
      isPrivate
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerriiMomentCommentMutationVariables,
  APITypes.UpdateTerriiMomentCommentMutation
>;
export const deleteTerriiMomentComment = /* GraphQL */ `mutation DeleteTerriiMomentComment(
  $input: DeleteTerriiMomentCommentInput!
  $condition: ModelTerriiMomentCommentConditionInput
) {
  deleteTerriiMomentComment(input: $input, condition: $condition) {
    id
    content
    createdByID
    createdBy {
      id
      userID
      user {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      role
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
      lastLogin
      profilePicture
      createdAt
      updatedAt
      __typename
    }
    momentID
    moment {
      id
      content
      createdByID
      createdBy {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      residentID
      resident {
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
      media
      tags
      likes
      comments {
        nextToken
        __typename
      }
      isPrivate
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerriiMomentCommentMutationVariables,
  APITypes.DeleteTerriiMomentCommentMutation
>;
export const createTerriiCommunityPost = /* GraphQL */ `mutation CreateTerriiCommunityPost(
  $input: CreateTerriiCommunityPostInput!
  $condition: ModelTerriiCommunityPostConditionInput
) {
  createTerriiCommunityPost(input: $input, condition: $condition) {
    id
    content
    createdByID
    createdBy {
      id
      userID
      user {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      role
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
      lastLogin
      profilePicture
      createdAt
      updatedAt
      __typename
    }
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
      adminUsers {
        nextToken
        __typename
      }
      residents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    media
    tags
    likes
    comments {
      items {
        id
        content
        createdByID
        postID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    isPinned
    isAnnouncement
    mode
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerriiCommunityPostMutationVariables,
  APITypes.CreateTerriiCommunityPostMutation
>;
export const updateTerriiCommunityPost = /* GraphQL */ `mutation UpdateTerriiCommunityPost(
  $input: UpdateTerriiCommunityPostInput!
  $condition: ModelTerriiCommunityPostConditionInput
) {
  updateTerriiCommunityPost(input: $input, condition: $condition) {
    id
    content
    createdByID
    createdBy {
      id
      userID
      user {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      role
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
      lastLogin
      profilePicture
      createdAt
      updatedAt
      __typename
    }
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
      adminUsers {
        nextToken
        __typename
      }
      residents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    media
    tags
    likes
    comments {
      items {
        id
        content
        createdByID
        postID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    isPinned
    isAnnouncement
    mode
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerriiCommunityPostMutationVariables,
  APITypes.UpdateTerriiCommunityPostMutation
>;
export const deleteTerriiCommunityPost = /* GraphQL */ `mutation DeleteTerriiCommunityPost(
  $input: DeleteTerriiCommunityPostInput!
  $condition: ModelTerriiCommunityPostConditionInput
) {
  deleteTerriiCommunityPost(input: $input, condition: $condition) {
    id
    content
    createdByID
    createdBy {
      id
      userID
      user {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      role
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
      lastLogin
      profilePicture
      createdAt
      updatedAt
      __typename
    }
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
      adminUsers {
        nextToken
        __typename
      }
      residents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    media
    tags
    likes
    comments {
      items {
        id
        content
        createdByID
        postID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    isPinned
    isAnnouncement
    mode
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerriiCommunityPostMutationVariables,
  APITypes.DeleteTerriiCommunityPostMutation
>;
export const createTerriiCommunityComment = /* GraphQL */ `mutation CreateTerriiCommunityComment(
  $input: CreateTerriiCommunityCommentInput!
  $condition: ModelTerriiCommunityCommentConditionInput
) {
  createTerriiCommunityComment(input: $input, condition: $condition) {
    id
    content
    createdByID
    createdBy {
      id
      userID
      user {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      role
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
      lastLogin
      profilePicture
      createdAt
      updatedAt
      __typename
    }
    postID
    post {
      id
      content
      createdByID
      createdBy {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
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
      media
      tags
      likes
      comments {
        nextToken
        __typename
      }
      isPinned
      isAnnouncement
      mode
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTerriiCommunityCommentMutationVariables,
  APITypes.CreateTerriiCommunityCommentMutation
>;
export const updateTerriiCommunityComment = /* GraphQL */ `mutation UpdateTerriiCommunityComment(
  $input: UpdateTerriiCommunityCommentInput!
  $condition: ModelTerriiCommunityCommentConditionInput
) {
  updateTerriiCommunityComment(input: $input, condition: $condition) {
    id
    content
    createdByID
    createdBy {
      id
      userID
      user {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      role
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
      lastLogin
      profilePicture
      createdAt
      updatedAt
      __typename
    }
    postID
    post {
      id
      content
      createdByID
      createdBy {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
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
      media
      tags
      likes
      comments {
        nextToken
        __typename
      }
      isPinned
      isAnnouncement
      mode
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTerriiCommunityCommentMutationVariables,
  APITypes.UpdateTerriiCommunityCommentMutation
>;
export const deleteTerriiCommunityComment = /* GraphQL */ `mutation DeleteTerriiCommunityComment(
  $input: DeleteTerriiCommunityCommentInput!
  $condition: ModelTerriiCommunityCommentConditionInput
) {
  deleteTerriiCommunityComment(input: $input, condition: $condition) {
    id
    content
    createdByID
    createdBy {
      id
      userID
      user {
        id
        name
        status
        image
        userType
        deleted
        firstName
        lastName
        mobileNo
        headerImage
        pwdName
        expoNotificationToken
        nativeNotificationToken
        postRegistrationComplete
        additionalInformationComplete
        lastActivity
        createdAt
        updatedAt
        userTerriiProfileId
        __typename
      }
      role
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
      lastLogin
      profilePicture
      createdAt
      updatedAt
      __typename
    }
    postID
    post {
      id
      content
      createdByID
      createdBy {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
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
      media
      tags
      likes
      comments {
        nextToken
        __typename
      }
      isPinned
      isAnnouncement
      mode
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTerriiCommunityCommentMutationVariables,
  APITypes.DeleteTerriiCommunityCommentMutation
>;
export const createMyFriendsUser = /* GraphQL */ `mutation CreateMyFriendsUser(
  $input: CreateMyFriendsUserInput!
  $condition: ModelMyFriendsUserConditionInput
) {
  createMyFriendsUser(input: $input, condition: $condition) {
    id
    myFriendsID
    userID
    myFriends {
      id
      status
      Users {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMyFriendsUserMutationVariables,
  APITypes.CreateMyFriendsUserMutation
>;
export const updateMyFriendsUser = /* GraphQL */ `mutation UpdateMyFriendsUser(
  $input: UpdateMyFriendsUserInput!
  $condition: ModelMyFriendsUserConditionInput
) {
  updateMyFriendsUser(input: $input, condition: $condition) {
    id
    myFriendsID
    userID
    myFriends {
      id
      status
      Users {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMyFriendsUserMutationVariables,
  APITypes.UpdateMyFriendsUserMutation
>;
export const deleteMyFriendsUser = /* GraphQL */ `mutation DeleteMyFriendsUser(
  $input: DeleteMyFriendsUserInput!
  $condition: ModelMyFriendsUserConditionInput
) {
  deleteMyFriendsUser(input: $input, condition: $condition) {
    id
    myFriendsID
    userID
    myFriends {
      id
      status
      Users {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMyFriendsUserMutationVariables,
  APITypes.DeleteMyFriendsUserMutation
>;
export const createUserChatRoom = /* GraphQL */ `mutation CreateUserChatRoom(
  $input: CreateUserChatRoomInput!
  $condition: ModelUserChatRoomConditionInput
) {
  createUserChatRoom(input: $input, condition: $condition) {
    id
    chatRoomID
    userID
    chatRoom {
      id
      name
      image
      Messages {
        nextToken
        __typename
      }
      LastMessage {
        id
        chatroomID
        createdAt
        text
        userID
        mediaS3URL
        needsModeration
        moderationLabel
        moderationScore
        updatedAt
        messageUserId
        __typename
      }
      users {
        nextToken
        __typename
      }
      isChatBot
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
    user {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserChatRoomMutationVariables,
  APITypes.CreateUserChatRoomMutation
>;
export const updateUserChatRoom = /* GraphQL */ `mutation UpdateUserChatRoom(
  $input: UpdateUserChatRoomInput!
  $condition: ModelUserChatRoomConditionInput
) {
  updateUserChatRoom(input: $input, condition: $condition) {
    id
    chatRoomID
    userID
    chatRoom {
      id
      name
      image
      Messages {
        nextToken
        __typename
      }
      LastMessage {
        id
        chatroomID
        createdAt
        text
        userID
        mediaS3URL
        needsModeration
        moderationLabel
        moderationScore
        updatedAt
        messageUserId
        __typename
      }
      users {
        nextToken
        __typename
      }
      isChatBot
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
    user {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserChatRoomMutationVariables,
  APITypes.UpdateUserChatRoomMutation
>;
export const deleteUserChatRoom = /* GraphQL */ `mutation DeleteUserChatRoom(
  $input: DeleteUserChatRoomInput!
  $condition: ModelUserChatRoomConditionInput
) {
  deleteUserChatRoom(input: $input, condition: $condition) {
    id
    chatRoomID
    userID
    chatRoom {
      id
      name
      image
      Messages {
        nextToken
        __typename
      }
      LastMessage {
        id
        chatroomID
        createdAt
        text
        userID
        mediaS3URL
        needsModeration
        moderationLabel
        moderationScore
        updatedAt
        messageUserId
        __typename
      }
      users {
        nextToken
        __typename
      }
      isChatBot
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
    user {
      id
      name
      status
      image
      ChatRooms {
        nextToken
        __typename
      }
      userType
      deleted
      firstName
      lastName
      mobileNo
      headerImage
      UserExtendedInfos {
        nextToken
        __typename
      }
      pwdName
      expoNotificationToken
      nativeNotificationToken
      myfriendss {
        nextToken
        __typename
      }
      postRegistrationComplete
      additionalInformationComplete
      lastActivity
      terriiProfile {
        id
        userID
        role
        careHomeID
        lastLogin
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userTerriiProfileId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserChatRoomMutationVariables,
  APITypes.DeleteUserChatRoomMutation
>;
