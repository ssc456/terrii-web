/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMyChats = /* GraphQL */ `subscription OnCreateMyChats($filter: ModelSubscriptionMyChatsFilterInput) {
  onCreateMyChats(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMyChatsSubscriptionVariables,
  APITypes.OnCreateMyChatsSubscription
>;
export const onUpdateMyChats = /* GraphQL */ `subscription OnUpdateMyChats($filter: ModelSubscriptionMyChatsFilterInput) {
  onUpdateMyChats(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMyChatsSubscriptionVariables,
  APITypes.OnUpdateMyChatsSubscription
>;
export const onDeleteMyChats = /* GraphQL */ `subscription OnDeleteMyChats($filter: ModelSubscriptionMyChatsFilterInput) {
  onDeleteMyChats(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMyChatsSubscriptionVariables,
  APITypes.OnDeleteMyChatsSubscription
>;
export const onCreateDebugInfo = /* GraphQL */ `subscription OnCreateDebugInfo($filter: ModelSubscriptionDebugInfoFilterInput) {
  onCreateDebugInfo(filter: $filter) {
    id
    user
    Logging
    Test
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDebugInfoSubscriptionVariables,
  APITypes.OnCreateDebugInfoSubscription
>;
export const onUpdateDebugInfo = /* GraphQL */ `subscription OnUpdateDebugInfo($filter: ModelSubscriptionDebugInfoFilterInput) {
  onUpdateDebugInfo(filter: $filter) {
    id
    user
    Logging
    Test
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDebugInfoSubscriptionVariables,
  APITypes.OnUpdateDebugInfoSubscription
>;
export const onDeleteDebugInfo = /* GraphQL */ `subscription OnDeleteDebugInfo($filter: ModelSubscriptionDebugInfoFilterInput) {
  onDeleteDebugInfo(filter: $filter) {
    id
    user
    Logging
    Test
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDebugInfoSubscriptionVariables,
  APITypes.OnDeleteDebugInfoSubscription
>;
export const onCreateMyFriends = /* GraphQL */ `subscription OnCreateMyFriends($filter: ModelSubscriptionMyFriendsFilterInput) {
  onCreateMyFriends(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMyFriendsSubscriptionVariables,
  APITypes.OnCreateMyFriendsSubscription
>;
export const onUpdateMyFriends = /* GraphQL */ `subscription OnUpdateMyFriends($filter: ModelSubscriptionMyFriendsFilterInput) {
  onUpdateMyFriends(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMyFriendsSubscriptionVariables,
  APITypes.OnUpdateMyFriendsSubscription
>;
export const onDeleteMyFriends = /* GraphQL */ `subscription OnDeleteMyFriends($filter: ModelSubscriptionMyFriendsFilterInput) {
  onDeleteMyFriends(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMyFriendsSubscriptionVariables,
  APITypes.OnDeleteMyFriendsSubscription
>;
export const onCreateExpoNotifications = /* GraphQL */ `subscription OnCreateExpoNotifications(
  $filter: ModelSubscriptionExpoNotificationsFilterInput
) {
  onCreateExpoNotifications(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExpoNotificationsSubscriptionVariables,
  APITypes.OnCreateExpoNotificationsSubscription
>;
export const onUpdateExpoNotifications = /* GraphQL */ `subscription OnUpdateExpoNotifications(
  $filter: ModelSubscriptionExpoNotificationsFilterInput
) {
  onUpdateExpoNotifications(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExpoNotificationsSubscriptionVariables,
  APITypes.OnUpdateExpoNotificationsSubscription
>;
export const onDeleteExpoNotifications = /* GraphQL */ `subscription OnDeleteExpoNotifications(
  $filter: ModelSubscriptionExpoNotificationsFilterInput
) {
  onDeleteExpoNotifications(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExpoNotificationsSubscriptionVariables,
  APITypes.OnDeleteExpoNotificationsSubscription
>;
export const onCreateSystemInfo = /* GraphQL */ `subscription OnCreateSystemInfo(
  $filter: ModelSubscriptionSystemInfoFilterInput
) {
  onCreateSystemInfo(filter: $filter) {
    id
    name
    value
    options
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSystemInfoSubscriptionVariables,
  APITypes.OnCreateSystemInfoSubscription
>;
export const onUpdateSystemInfo = /* GraphQL */ `subscription OnUpdateSystemInfo(
  $filter: ModelSubscriptionSystemInfoFilterInput
) {
  onUpdateSystemInfo(filter: $filter) {
    id
    name
    value
    options
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSystemInfoSubscriptionVariables,
  APITypes.OnUpdateSystemInfoSubscription
>;
export const onDeleteSystemInfo = /* GraphQL */ `subscription OnDeleteSystemInfo(
  $filter: ModelSubscriptionSystemInfoFilterInput
) {
  onDeleteSystemInfo(filter: $filter) {
    id
    name
    value
    options
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSystemInfoSubscriptionVariables,
  APITypes.OnDeleteSystemInfoSubscription
>;
export const onCreateCareHomes = /* GraphQL */ `subscription OnCreateCareHomes($filter: ModelSubscriptionCareHomesFilterInput) {
  onCreateCareHomes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCareHomesSubscriptionVariables,
  APITypes.OnCreateCareHomesSubscription
>;
export const onUpdateCareHomes = /* GraphQL */ `subscription OnUpdateCareHomes($filter: ModelSubscriptionCareHomesFilterInput) {
  onUpdateCareHomes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCareHomesSubscriptionVariables,
  APITypes.OnUpdateCareHomesSubscription
>;
export const onDeleteCareHomes = /* GraphQL */ `subscription OnDeleteCareHomes($filter: ModelSubscriptionCareHomesFilterInput) {
  onDeleteCareHomes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCareHomesSubscriptionVariables,
  APITypes.OnDeleteCareHomesSubscription
>;
export const onCreateUserExtendedInfo = /* GraphQL */ `subscription OnCreateUserExtendedInfo(
  $filter: ModelSubscriptionUserExtendedInfoFilterInput
) {
  onCreateUserExtendedInfo(filter: $filter) {
    id
    field
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserExtendedInfoSubscriptionVariables,
  APITypes.OnCreateUserExtendedInfoSubscription
>;
export const onUpdateUserExtendedInfo = /* GraphQL */ `subscription OnUpdateUserExtendedInfo(
  $filter: ModelSubscriptionUserExtendedInfoFilterInput
) {
  onUpdateUserExtendedInfo(filter: $filter) {
    id
    field
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserExtendedInfoSubscriptionVariables,
  APITypes.OnUpdateUserExtendedInfoSubscription
>;
export const onDeleteUserExtendedInfo = /* GraphQL */ `subscription OnDeleteUserExtendedInfo(
  $filter: ModelSubscriptionUserExtendedInfoFilterInput
) {
  onDeleteUserExtendedInfo(filter: $filter) {
    id
    field
    value
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserExtendedInfoSubscriptionVariables,
  APITypes.OnDeleteUserExtendedInfoSubscription
>;
export const onCreateCommunityUserNotifications = /* GraphQL */ `subscription OnCreateCommunityUserNotifications(
  $filter: ModelSubscriptionCommunityUserNotificationsFilterInput
) {
  onCreateCommunityUserNotifications(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommunityUserNotificationsSubscriptionVariables,
  APITypes.OnCreateCommunityUserNotificationsSubscription
>;
export const onUpdateCommunityUserNotifications = /* GraphQL */ `subscription OnUpdateCommunityUserNotifications(
  $filter: ModelSubscriptionCommunityUserNotificationsFilterInput
) {
  onUpdateCommunityUserNotifications(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommunityUserNotificationsSubscriptionVariables,
  APITypes.OnUpdateCommunityUserNotificationsSubscription
>;
export const onDeleteCommunityUserNotifications = /* GraphQL */ `subscription OnDeleteCommunityUserNotifications(
  $filter: ModelSubscriptionCommunityUserNotificationsFilterInput
) {
  onDeleteCommunityUserNotifications(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommunityUserNotificationsSubscriptionVariables,
  APITypes.OnDeleteCommunityUserNotificationsSubscription
>;
export const onCreateQuestionGroupTypes = /* GraphQL */ `subscription OnCreateQuestionGroupTypes(
  $filter: ModelSubscriptionQuestionGroupTypesFilterInput
) {
  onCreateQuestionGroupTypes(filter: $filter) {
    id
    name
    iconS3URL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateQuestionGroupTypesSubscriptionVariables,
  APITypes.OnCreateQuestionGroupTypesSubscription
>;
export const onUpdateQuestionGroupTypes = /* GraphQL */ `subscription OnUpdateQuestionGroupTypes(
  $filter: ModelSubscriptionQuestionGroupTypesFilterInput
) {
  onUpdateQuestionGroupTypes(filter: $filter) {
    id
    name
    iconS3URL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateQuestionGroupTypesSubscriptionVariables,
  APITypes.OnUpdateQuestionGroupTypesSubscription
>;
export const onDeleteQuestionGroupTypes = /* GraphQL */ `subscription OnDeleteQuestionGroupTypes(
  $filter: ModelSubscriptionQuestionGroupTypesFilterInput
) {
  onDeleteQuestionGroupTypes(filter: $filter) {
    id
    name
    iconS3URL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteQuestionGroupTypesSubscriptionVariables,
  APITypes.OnDeleteQuestionGroupTypesSubscription
>;
export const onCreateCommunityUserGroupRoles = /* GraphQL */ `subscription OnCreateCommunityUserGroupRoles(
  $filter: ModelSubscriptionCommunityUserGroupRolesFilterInput
) {
  onCreateCommunityUserGroupRoles(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommunityUserGroupRolesSubscriptionVariables,
  APITypes.OnCreateCommunityUserGroupRolesSubscription
>;
export const onUpdateCommunityUserGroupRoles = /* GraphQL */ `subscription OnUpdateCommunityUserGroupRoles(
  $filter: ModelSubscriptionCommunityUserGroupRolesFilterInput
) {
  onUpdateCommunityUserGroupRoles(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommunityUserGroupRolesSubscriptionVariables,
  APITypes.OnUpdateCommunityUserGroupRolesSubscription
>;
export const onDeleteCommunityUserGroupRoles = /* GraphQL */ `subscription OnDeleteCommunityUserGroupRoles(
  $filter: ModelSubscriptionCommunityUserGroupRolesFilterInput
) {
  onDeleteCommunityUserGroupRoles(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommunityUserGroupRolesSubscriptionVariables,
  APITypes.OnDeleteCommunityUserGroupRolesSubscription
>;
export const onCreateCommunityGroup = /* GraphQL */ `subscription OnCreateCommunityGroup(
  $filter: ModelSubscriptionCommunityGroupFilterInput
) {
  onCreateCommunityGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommunityGroupSubscriptionVariables,
  APITypes.OnCreateCommunityGroupSubscription
>;
export const onUpdateCommunityGroup = /* GraphQL */ `subscription OnUpdateCommunityGroup(
  $filter: ModelSubscriptionCommunityGroupFilterInput
) {
  onUpdateCommunityGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommunityGroupSubscriptionVariables,
  APITypes.OnUpdateCommunityGroupSubscription
>;
export const onDeleteCommunityGroup = /* GraphQL */ `subscription OnDeleteCommunityGroup(
  $filter: ModelSubscriptionCommunityGroupFilterInput
) {
  onDeleteCommunityGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommunityGroupSubscriptionVariables,
  APITypes.OnDeleteCommunityGroupSubscription
>;
export const onCreateCommunityPostPollVotes = /* GraphQL */ `subscription OnCreateCommunityPostPollVotes(
  $filter: ModelSubscriptionCommunityPostPollVotesFilterInput
) {
  onCreateCommunityPostPollVotes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommunityPostPollVotesSubscriptionVariables,
  APITypes.OnCreateCommunityPostPollVotesSubscription
>;
export const onUpdateCommunityPostPollVotes = /* GraphQL */ `subscription OnUpdateCommunityPostPollVotes(
  $filter: ModelSubscriptionCommunityPostPollVotesFilterInput
) {
  onUpdateCommunityPostPollVotes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommunityPostPollVotesSubscriptionVariables,
  APITypes.OnUpdateCommunityPostPollVotesSubscription
>;
export const onDeleteCommunityPostPollVotes = /* GraphQL */ `subscription OnDeleteCommunityPostPollVotes(
  $filter: ModelSubscriptionCommunityPostPollVotesFilterInput
) {
  onDeleteCommunityPostPollVotes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommunityPostPollVotesSubscriptionVariables,
  APITypes.OnDeleteCommunityPostPollVotesSubscription
>;
export const onCreateCommunityPostPoll = /* GraphQL */ `subscription OnCreateCommunityPostPoll(
  $filter: ModelSubscriptionCommunityPostPollFilterInput
) {
  onCreateCommunityPostPoll(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommunityPostPollSubscriptionVariables,
  APITypes.OnCreateCommunityPostPollSubscription
>;
export const onUpdateCommunityPostPoll = /* GraphQL */ `subscription OnUpdateCommunityPostPoll(
  $filter: ModelSubscriptionCommunityPostPollFilterInput
) {
  onUpdateCommunityPostPoll(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommunityPostPollSubscriptionVariables,
  APITypes.OnUpdateCommunityPostPollSubscription
>;
export const onDeleteCommunityPostPoll = /* GraphQL */ `subscription OnDeleteCommunityPostPoll(
  $filter: ModelSubscriptionCommunityPostPollFilterInput
) {
  onDeleteCommunityPostPoll(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommunityPostPollSubscriptionVariables,
  APITypes.OnDeleteCommunityPostPollSubscription
>;
export const onCreateCommunityLikes = /* GraphQL */ `subscription OnCreateCommunityLikes(
  $filter: ModelSubscriptionCommunityLikesFilterInput
) {
  onCreateCommunityLikes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommunityLikesSubscriptionVariables,
  APITypes.OnCreateCommunityLikesSubscription
>;
export const onUpdateCommunityLikes = /* GraphQL */ `subscription OnUpdateCommunityLikes(
  $filter: ModelSubscriptionCommunityLikesFilterInput
) {
  onUpdateCommunityLikes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommunityLikesSubscriptionVariables,
  APITypes.OnUpdateCommunityLikesSubscription
>;
export const onDeleteCommunityLikes = /* GraphQL */ `subscription OnDeleteCommunityLikes(
  $filter: ModelSubscriptionCommunityLikesFilterInput
) {
  onDeleteCommunityLikes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommunityLikesSubscriptionVariables,
  APITypes.OnDeleteCommunityLikesSubscription
>;
export const onCreateCommunityComment = /* GraphQL */ `subscription OnCreateCommunityComment(
  $filter: ModelSubscriptionCommunityCommentFilterInput
) {
  onCreateCommunityComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommunityCommentSubscriptionVariables,
  APITypes.OnCreateCommunityCommentSubscription
>;
export const onUpdateCommunityComment = /* GraphQL */ `subscription OnUpdateCommunityComment(
  $filter: ModelSubscriptionCommunityCommentFilterInput
) {
  onUpdateCommunityComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommunityCommentSubscriptionVariables,
  APITypes.OnUpdateCommunityCommentSubscription
>;
export const onDeleteCommunityComment = /* GraphQL */ `subscription OnDeleteCommunityComment(
  $filter: ModelSubscriptionCommunityCommentFilterInput
) {
  onDeleteCommunityComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommunityCommentSubscriptionVariables,
  APITypes.OnDeleteCommunityCommentSubscription
>;
export const onCreateCommunityPost = /* GraphQL */ `subscription OnCreateCommunityPost(
  $filter: ModelSubscriptionCommunityPostFilterInput
) {
  onCreateCommunityPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommunityPostSubscriptionVariables,
  APITypes.OnCreateCommunityPostSubscription
>;
export const onUpdateCommunityPost = /* GraphQL */ `subscription OnUpdateCommunityPost(
  $filter: ModelSubscriptionCommunityPostFilterInput
) {
  onUpdateCommunityPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommunityPostSubscriptionVariables,
  APITypes.OnUpdateCommunityPostSubscription
>;
export const onDeleteCommunityPost = /* GraphQL */ `subscription OnDeleteCommunityPost(
  $filter: ModelSubscriptionCommunityPostFilterInput
) {
  onDeleteCommunityPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommunityPostSubscriptionVariables,
  APITypes.OnDeleteCommunityPostSubscription
>;
export const onCreateCalendarItemType = /* GraphQL */ `subscription OnCreateCalendarItemType(
  $filter: ModelSubscriptionCalendarItemTypeFilterInput
) {
  onCreateCalendarItemType(filter: $filter) {
    id
    name
    colour
    deleted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCalendarItemTypeSubscriptionVariables,
  APITypes.OnCreateCalendarItemTypeSubscription
>;
export const onUpdateCalendarItemType = /* GraphQL */ `subscription OnUpdateCalendarItemType(
  $filter: ModelSubscriptionCalendarItemTypeFilterInput
) {
  onUpdateCalendarItemType(filter: $filter) {
    id
    name
    colour
    deleted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCalendarItemTypeSubscriptionVariables,
  APITypes.OnUpdateCalendarItemTypeSubscription
>;
export const onDeleteCalendarItemType = /* GraphQL */ `subscription OnDeleteCalendarItemType(
  $filter: ModelSubscriptionCalendarItemTypeFilterInput
) {
  onDeleteCalendarItemType(filter: $filter) {
    id
    name
    colour
    deleted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCalendarItemTypeSubscriptionVariables,
  APITypes.OnDeleteCalendarItemTypeSubscription
>;
export const onCreateRoadMapItems = /* GraphQL */ `subscription OnCreateRoadMapItems(
  $filter: ModelSubscriptionRoadMapItemsFilterInput
) {
  onCreateRoadMapItems(filter: $filter) {
    id
    text
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRoadMapItemsSubscriptionVariables,
  APITypes.OnCreateRoadMapItemsSubscription
>;
export const onUpdateRoadMapItems = /* GraphQL */ `subscription OnUpdateRoadMapItems(
  $filter: ModelSubscriptionRoadMapItemsFilterInput
) {
  onUpdateRoadMapItems(filter: $filter) {
    id
    text
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRoadMapItemsSubscriptionVariables,
  APITypes.OnUpdateRoadMapItemsSubscription
>;
export const onDeleteRoadMapItems = /* GraphQL */ `subscription OnDeleteRoadMapItems(
  $filter: ModelSubscriptionRoadMapItemsFilterInput
) {
  onDeleteRoadMapItems(filter: $filter) {
    id
    text
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRoadMapItemsSubscriptionVariables,
  APITypes.OnDeleteRoadMapItemsSubscription
>;
export const onCreateManualNotificationsUser = /* GraphQL */ `subscription OnCreateManualNotificationsUser(
  $filter: ModelSubscriptionManualNotificationsUserFilterInput
) {
  onCreateManualNotificationsUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateManualNotificationsUserSubscriptionVariables,
  APITypes.OnCreateManualNotificationsUserSubscription
>;
export const onUpdateManualNotificationsUser = /* GraphQL */ `subscription OnUpdateManualNotificationsUser(
  $filter: ModelSubscriptionManualNotificationsUserFilterInput
) {
  onUpdateManualNotificationsUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateManualNotificationsUserSubscriptionVariables,
  APITypes.OnUpdateManualNotificationsUserSubscription
>;
export const onDeleteManualNotificationsUser = /* GraphQL */ `subscription OnDeleteManualNotificationsUser(
  $filter: ModelSubscriptionManualNotificationsUserFilterInput
) {
  onDeleteManualNotificationsUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteManualNotificationsUserSubscriptionVariables,
  APITypes.OnDeleteManualNotificationsUserSubscription
>;
export const onCreateManualNotifications = /* GraphQL */ `subscription OnCreateManualNotifications(
  $filter: ModelSubscriptionManualNotificationsFilterInput
) {
  onCreateManualNotifications(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateManualNotificationsSubscriptionVariables,
  APITypes.OnCreateManualNotificationsSubscription
>;
export const onUpdateManualNotifications = /* GraphQL */ `subscription OnUpdateManualNotifications(
  $filter: ModelSubscriptionManualNotificationsFilterInput
) {
  onUpdateManualNotifications(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateManualNotificationsSubscriptionVariables,
  APITypes.OnUpdateManualNotificationsSubscription
>;
export const onDeleteManualNotifications = /* GraphQL */ `subscription OnDeleteManualNotifications(
  $filter: ModelSubscriptionManualNotificationsFilterInput
) {
  onDeleteManualNotifications(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteManualNotificationsSubscriptionVariables,
  APITypes.OnDeleteManualNotificationsSubscription
>;
export const onCreateQuestionAnswersUsers = /* GraphQL */ `subscription OnCreateQuestionAnswersUsers(
  $filter: ModelSubscriptionQuestionAnswersUsersFilterInput
) {
  onCreateQuestionAnswersUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQuestionAnswersUsersSubscriptionVariables,
  APITypes.OnCreateQuestionAnswersUsersSubscription
>;
export const onUpdateQuestionAnswersUsers = /* GraphQL */ `subscription OnUpdateQuestionAnswersUsers(
  $filter: ModelSubscriptionQuestionAnswersUsersFilterInput
) {
  onUpdateQuestionAnswersUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQuestionAnswersUsersSubscriptionVariables,
  APITypes.OnUpdateQuestionAnswersUsersSubscription
>;
export const onDeleteQuestionAnswersUsers = /* GraphQL */ `subscription OnDeleteQuestionAnswersUsers(
  $filter: ModelSubscriptionQuestionAnswersUsersFilterInput
) {
  onDeleteQuestionAnswersUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQuestionAnswersUsersSubscriptionVariables,
  APITypes.OnDeleteQuestionAnswersUsersSubscription
>;
export const onCreateQuestionAnswers = /* GraphQL */ `subscription OnCreateQuestionAnswers(
  $filter: ModelSubscriptionQuestionAnswersFilterInput
) {
  onCreateQuestionAnswers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQuestionAnswersSubscriptionVariables,
  APITypes.OnCreateQuestionAnswersSubscription
>;
export const onUpdateQuestionAnswers = /* GraphQL */ `subscription OnUpdateQuestionAnswers(
  $filter: ModelSubscriptionQuestionAnswersFilterInput
) {
  onUpdateQuestionAnswers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQuestionAnswersSubscriptionVariables,
  APITypes.OnUpdateQuestionAnswersSubscription
>;
export const onDeleteQuestionAnswers = /* GraphQL */ `subscription OnDeleteQuestionAnswers(
  $filter: ModelSubscriptionQuestionAnswersFilterInput
) {
  onDeleteQuestionAnswers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQuestionAnswersSubscriptionVariables,
  APITypes.OnDeleteQuestionAnswersSubscription
>;
export const onCreateQuestions = /* GraphQL */ `subscription OnCreateQuestions($filter: ModelSubscriptionQuestionsFilterInput) {
  onCreateQuestions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQuestionsSubscriptionVariables,
  APITypes.OnCreateQuestionsSubscription
>;
export const onUpdateQuestions = /* GraphQL */ `subscription OnUpdateQuestions($filter: ModelSubscriptionQuestionsFilterInput) {
  onUpdateQuestions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQuestionsSubscriptionVariables,
  APITypes.OnUpdateQuestionsSubscription
>;
export const onDeleteQuestions = /* GraphQL */ `subscription OnDeleteQuestions($filter: ModelSubscriptionQuestionsFilterInput) {
  onDeleteQuestions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQuestionsSubscriptionVariables,
  APITypes.OnDeleteQuestionsSubscription
>;
export const onCreateQuestionGroup = /* GraphQL */ `subscription OnCreateQuestionGroup(
  $filter: ModelSubscriptionQuestionGroupFilterInput
) {
  onCreateQuestionGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQuestionGroupSubscriptionVariables,
  APITypes.OnCreateQuestionGroupSubscription
>;
export const onUpdateQuestionGroup = /* GraphQL */ `subscription OnUpdateQuestionGroup(
  $filter: ModelSubscriptionQuestionGroupFilterInput
) {
  onUpdateQuestionGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQuestionGroupSubscriptionVariables,
  APITypes.OnUpdateQuestionGroupSubscription
>;
export const onDeleteQuestionGroup = /* GraphQL */ `subscription OnDeleteQuestionGroup(
  $filter: ModelSubscriptionQuestionGroupFilterInput
) {
  onDeleteQuestionGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQuestionGroupSubscriptionVariables,
  APITypes.OnDeleteQuestionGroupSubscription
>;
export const onCreateUserQuestionGroups = /* GraphQL */ `subscription OnCreateUserQuestionGroups(
  $filter: ModelSubscriptionUserQuestionGroupsFilterInput
) {
  onCreateUserQuestionGroups(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserQuestionGroupsSubscriptionVariables,
  APITypes.OnCreateUserQuestionGroupsSubscription
>;
export const onUpdateUserQuestionGroups = /* GraphQL */ `subscription OnUpdateUserQuestionGroups(
  $filter: ModelSubscriptionUserQuestionGroupsFilterInput
) {
  onUpdateUserQuestionGroups(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserQuestionGroupsSubscriptionVariables,
  APITypes.OnUpdateUserQuestionGroupsSubscription
>;
export const onDeleteUserQuestionGroups = /* GraphQL */ `subscription OnDeleteUserQuestionGroups(
  $filter: ModelSubscriptionUserQuestionGroupsFilterInput
) {
  onDeleteUserQuestionGroups(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserQuestionGroupsSubscriptionVariables,
  APITypes.OnDeleteUserQuestionGroupsSubscription
>;
export const onCreateUserRoadmapItems = /* GraphQL */ `subscription OnCreateUserRoadmapItems(
  $filter: ModelSubscriptionUserRoadmapItemsFilterInput
) {
  onCreateUserRoadmapItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserRoadmapItemsSubscriptionVariables,
  APITypes.OnCreateUserRoadmapItemsSubscription
>;
export const onUpdateUserRoadmapItems = /* GraphQL */ `subscription OnUpdateUserRoadmapItems(
  $filter: ModelSubscriptionUserRoadmapItemsFilterInput
) {
  onUpdateUserRoadmapItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserRoadmapItemsSubscriptionVariables,
  APITypes.OnUpdateUserRoadmapItemsSubscription
>;
export const onDeleteUserRoadmapItems = /* GraphQL */ `subscription OnDeleteUserRoadmapItems(
  $filter: ModelSubscriptionUserRoadmapItemsFilterInput
) {
  onDeleteUserRoadmapItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserRoadmapItemsSubscriptionVariables,
  APITypes.OnDeleteUserRoadmapItemsSubscription
>;
export const onCreateRoadmapGroup = /* GraphQL */ `subscription OnCreateRoadmapGroup(
  $filter: ModelSubscriptionRoadmapGroupFilterInput
) {
  onCreateRoadmapGroup(filter: $filter) {
    id
    name
    description
    imageS3ObjectKey
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRoadmapGroupSubscriptionVariables,
  APITypes.OnCreateRoadmapGroupSubscription
>;
export const onUpdateRoadmapGroup = /* GraphQL */ `subscription OnUpdateRoadmapGroup(
  $filter: ModelSubscriptionRoadmapGroupFilterInput
) {
  onUpdateRoadmapGroup(filter: $filter) {
    id
    name
    description
    imageS3ObjectKey
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRoadmapGroupSubscriptionVariables,
  APITypes.OnUpdateRoadmapGroupSubscription
>;
export const onDeleteRoadmapGroup = /* GraphQL */ `subscription OnDeleteRoadmapGroup(
  $filter: ModelSubscriptionRoadmapGroupFilterInput
) {
  onDeleteRoadmapGroup(filter: $filter) {
    id
    name
    description
    imageS3ObjectKey
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRoadmapGroupSubscriptionVariables,
  APITypes.OnDeleteRoadmapGroupSubscription
>;
export const onCreateBookmarks = /* GraphQL */ `subscription OnCreateBookmarks($filter: ModelSubscriptionBookmarksFilterInput) {
  onCreateBookmarks(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBookmarksSubscriptionVariables,
  APITypes.OnCreateBookmarksSubscription
>;
export const onUpdateBookmarks = /* GraphQL */ `subscription OnUpdateBookmarks($filter: ModelSubscriptionBookmarksFilterInput) {
  onUpdateBookmarks(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBookmarksSubscriptionVariables,
  APITypes.OnUpdateBookmarksSubscription
>;
export const onDeleteBookmarks = /* GraphQL */ `subscription OnDeleteBookmarks($filter: ModelSubscriptionBookmarksFilterInput) {
  onDeleteBookmarks(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBookmarksSubscriptionVariables,
  APITypes.OnDeleteBookmarksSubscription
>;
export const onCreateActivityUserApp = /* GraphQL */ `subscription OnCreateActivityUserApp(
  $filter: ModelSubscriptionActivityUserAppFilterInput
) {
  onCreateActivityUserApp(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateActivityUserAppSubscriptionVariables,
  APITypes.OnCreateActivityUserAppSubscription
>;
export const onUpdateActivityUserApp = /* GraphQL */ `subscription OnUpdateActivityUserApp(
  $filter: ModelSubscriptionActivityUserAppFilterInput
) {
  onUpdateActivityUserApp(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateActivityUserAppSubscriptionVariables,
  APITypes.OnUpdateActivityUserAppSubscription
>;
export const onDeleteActivityUserApp = /* GraphQL */ `subscription OnDeleteActivityUserApp(
  $filter: ModelSubscriptionActivityUserAppFilterInput
) {
  onDeleteActivityUserApp(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteActivityUserAppSubscriptionVariables,
  APITypes.OnDeleteActivityUserAppSubscription
>;
export const onCreateGuidanceContent = /* GraphQL */ `subscription OnCreateGuidanceContent(
  $filter: ModelSubscriptionGuidanceContentFilterInput
) {
  onCreateGuidanceContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGuidanceContentSubscriptionVariables,
  APITypes.OnCreateGuidanceContentSubscription
>;
export const onUpdateGuidanceContent = /* GraphQL */ `subscription OnUpdateGuidanceContent(
  $filter: ModelSubscriptionGuidanceContentFilterInput
) {
  onUpdateGuidanceContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGuidanceContentSubscriptionVariables,
  APITypes.OnUpdateGuidanceContentSubscription
>;
export const onDeleteGuidanceContent = /* GraphQL */ `subscription OnDeleteGuidanceContent(
  $filter: ModelSubscriptionGuidanceContentFilterInput
) {
  onDeleteGuidanceContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGuidanceContentSubscriptionVariables,
  APITypes.OnDeleteGuidanceContentSubscription
>;
export const onCreateGuidanceTypes = /* GraphQL */ `subscription OnCreateGuidanceTypes(
  $filter: ModelSubscriptionGuidanceTypesFilterInput
) {
  onCreateGuidanceTypes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGuidanceTypesSubscriptionVariables,
  APITypes.OnCreateGuidanceTypesSubscription
>;
export const onUpdateGuidanceTypes = /* GraphQL */ `subscription OnUpdateGuidanceTypes(
  $filter: ModelSubscriptionGuidanceTypesFilterInput
) {
  onUpdateGuidanceTypes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGuidanceTypesSubscriptionVariables,
  APITypes.OnUpdateGuidanceTypesSubscription
>;
export const onDeleteGuidanceTypes = /* GraphQL */ `subscription OnDeleteGuidanceTypes(
  $filter: ModelSubscriptionGuidanceTypesFilterInput
) {
  onDeleteGuidanceTypes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGuidanceTypesSubscriptionVariables,
  APITypes.OnDeleteGuidanceTypesSubscription
>;
export const onCreateGuidance = /* GraphQL */ `subscription OnCreateGuidance($filter: ModelSubscriptionGuidanceFilterInput) {
  onCreateGuidance(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGuidanceSubscriptionVariables,
  APITypes.OnCreateGuidanceSubscription
>;
export const onUpdateGuidance = /* GraphQL */ `subscription OnUpdateGuidance($filter: ModelSubscriptionGuidanceFilterInput) {
  onUpdateGuidance(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGuidanceSubscriptionVariables,
  APITypes.OnUpdateGuidanceSubscription
>;
export const onDeleteGuidance = /* GraphQL */ `subscription OnDeleteGuidance($filter: ModelSubscriptionGuidanceFilterInput) {
  onDeleteGuidance(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGuidanceSubscriptionVariables,
  APITypes.OnDeleteGuidanceSubscription
>;
export const onCreateCalendar = /* GraphQL */ `subscription OnCreateCalendar($filter: ModelSubscriptionCalendarFilterInput) {
  onCreateCalendar(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCalendarSubscriptionVariables,
  APITypes.OnCreateCalendarSubscription
>;
export const onUpdateCalendar = /* GraphQL */ `subscription OnUpdateCalendar($filter: ModelSubscriptionCalendarFilterInput) {
  onUpdateCalendar(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCalendarSubscriptionVariables,
  APITypes.OnUpdateCalendarSubscription
>;
export const onDeleteCalendar = /* GraphQL */ `subscription OnDeleteCalendar($filter: ModelSubscriptionCalendarFilterInput) {
  onDeleteCalendar(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCalendarSubscriptionVariables,
  APITypes.OnDeleteCalendarSubscription
>;
export const onCreateArticles = /* GraphQL */ `subscription OnCreateArticles($filter: ModelSubscriptionArticlesFilterInput) {
  onCreateArticles(filter: $filter) {
    id
    title
    description
    imageURL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateArticlesSubscriptionVariables,
  APITypes.OnCreateArticlesSubscription
>;
export const onUpdateArticles = /* GraphQL */ `subscription OnUpdateArticles($filter: ModelSubscriptionArticlesFilterInput) {
  onUpdateArticles(filter: $filter) {
    id
    title
    description
    imageURL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateArticlesSubscriptionVariables,
  APITypes.OnUpdateArticlesSubscription
>;
export const onDeleteArticles = /* GraphQL */ `subscription OnDeleteArticles($filter: ModelSubscriptionArticlesFilterInput) {
  onDeleteArticles(filter: $filter) {
    id
    title
    description
    imageURL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteArticlesSubscriptionVariables,
  APITypes.OnDeleteArticlesSubscription
>;
export const onCreateChatRoom = /* GraphQL */ `subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onCreateChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatRoomSubscriptionVariables,
  APITypes.OnCreateChatRoomSubscription
>;
export const onUpdateChatRoom = /* GraphQL */ `subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onUpdateChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatRoomSubscriptionVariables,
  APITypes.OnUpdateChatRoomSubscription
>;
export const onDeleteChatRoom = /* GraphQL */ `subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onDeleteChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatRoomSubscriptionVariables,
  APITypes.OnDeleteChatRoomSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateJournalEntry = /* GraphQL */ `subscription OnCreateJournalEntry(
  $filter: ModelSubscriptionJournalEntryFilterInput
) {
  onCreateJournalEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateJournalEntrySubscriptionVariables,
  APITypes.OnCreateJournalEntrySubscription
>;
export const onUpdateJournalEntry = /* GraphQL */ `subscription OnUpdateJournalEntry(
  $filter: ModelSubscriptionJournalEntryFilterInput
) {
  onUpdateJournalEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateJournalEntrySubscriptionVariables,
  APITypes.OnUpdateJournalEntrySubscription
>;
export const onDeleteJournalEntry = /* GraphQL */ `subscription OnDeleteJournalEntry(
  $filter: ModelSubscriptionJournalEntryFilterInput
) {
  onDeleteJournalEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteJournalEntrySubscriptionVariables,
  APITypes.OnDeleteJournalEntrySubscription
>;
export const onCreateCommunityEvent = /* GraphQL */ `subscription OnCreateCommunityEvent(
  $filter: ModelSubscriptionCommunityEventFilterInput
) {
  onCreateCommunityEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommunityEventSubscriptionVariables,
  APITypes.OnCreateCommunityEventSubscription
>;
export const onUpdateCommunityEvent = /* GraphQL */ `subscription OnUpdateCommunityEvent(
  $filter: ModelSubscriptionCommunityEventFilterInput
) {
  onUpdateCommunityEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommunityEventSubscriptionVariables,
  APITypes.OnUpdateCommunityEventSubscription
>;
export const onDeleteCommunityEvent = /* GraphQL */ `subscription OnDeleteCommunityEvent(
  $filter: ModelSubscriptionCommunityEventFilterInput
) {
  onDeleteCommunityEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommunityEventSubscriptionVariables,
  APITypes.OnDeleteCommunityEventSubscription
>;
export const onCreateCommunityEventAttendance = /* GraphQL */ `subscription OnCreateCommunityEventAttendance(
  $filter: ModelSubscriptionCommunityEventAttendanceFilterInput
) {
  onCreateCommunityEventAttendance(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommunityEventAttendanceSubscriptionVariables,
  APITypes.OnCreateCommunityEventAttendanceSubscription
>;
export const onUpdateCommunityEventAttendance = /* GraphQL */ `subscription OnUpdateCommunityEventAttendance(
  $filter: ModelSubscriptionCommunityEventAttendanceFilterInput
) {
  onUpdateCommunityEventAttendance(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommunityEventAttendanceSubscriptionVariables,
  APITypes.OnUpdateCommunityEventAttendanceSubscription
>;
export const onDeleteCommunityEventAttendance = /* GraphQL */ `subscription OnDeleteCommunityEventAttendance(
  $filter: ModelSubscriptionCommunityEventAttendanceFilterInput
) {
  onDeleteCommunityEventAttendance(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommunityEventAttendanceSubscriptionVariables,
  APITypes.OnDeleteCommunityEventAttendanceSubscription
>;
export const onCreateCommunityCommentLikes = /* GraphQL */ `subscription OnCreateCommunityCommentLikes(
  $filter: ModelSubscriptionCommunityCommentLikesFilterInput
) {
  onCreateCommunityCommentLikes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommunityCommentLikesSubscriptionVariables,
  APITypes.OnCreateCommunityCommentLikesSubscription
>;
export const onUpdateCommunityCommentLikes = /* GraphQL */ `subscription OnUpdateCommunityCommentLikes(
  $filter: ModelSubscriptionCommunityCommentLikesFilterInput
) {
  onUpdateCommunityCommentLikes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommunityCommentLikesSubscriptionVariables,
  APITypes.OnUpdateCommunityCommentLikesSubscription
>;
export const onDeleteCommunityCommentLikes = /* GraphQL */ `subscription OnDeleteCommunityCommentLikes(
  $filter: ModelSubscriptionCommunityCommentLikesFilterInput
) {
  onDeleteCommunityCommentLikes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommunityCommentLikesSubscriptionVariables,
  APITypes.OnDeleteCommunityCommentLikesSubscription
>;
export const onCreateCarePlanOutputs = /* GraphQL */ `subscription OnCreateCarePlanOutputs(
  $filter: ModelSubscriptionCarePlanOutputsFilterInput
) {
  onCreateCarePlanOutputs(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCarePlanOutputsSubscriptionVariables,
  APITypes.OnCreateCarePlanOutputsSubscription
>;
export const onUpdateCarePlanOutputs = /* GraphQL */ `subscription OnUpdateCarePlanOutputs(
  $filter: ModelSubscriptionCarePlanOutputsFilterInput
) {
  onUpdateCarePlanOutputs(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCarePlanOutputsSubscriptionVariables,
  APITypes.OnUpdateCarePlanOutputsSubscription
>;
export const onDeleteCarePlanOutputs = /* GraphQL */ `subscription OnDeleteCarePlanOutputs(
  $filter: ModelSubscriptionCarePlanOutputsFilterInput
) {
  onDeleteCarePlanOutputs(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCarePlanOutputsSubscriptionVariables,
  APITypes.OnDeleteCarePlanOutputsSubscription
>;
export const onCreateTerriiCareHome = /* GraphQL */ `subscription OnCreateTerriiCareHome(
  $filter: ModelSubscriptionTerriiCareHomeFilterInput
) {
  onCreateTerriiCareHome(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerriiCareHomeSubscriptionVariables,
  APITypes.OnCreateTerriiCareHomeSubscription
>;
export const onUpdateTerriiCareHome = /* GraphQL */ `subscription OnUpdateTerriiCareHome(
  $filter: ModelSubscriptionTerriiCareHomeFilterInput
) {
  onUpdateTerriiCareHome(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerriiCareHomeSubscriptionVariables,
  APITypes.OnUpdateTerriiCareHomeSubscription
>;
export const onDeleteTerriiCareHome = /* GraphQL */ `subscription OnDeleteTerriiCareHome(
  $filter: ModelSubscriptionTerriiCareHomeFilterInput
) {
  onDeleteTerriiCareHome(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerriiCareHomeSubscriptionVariables,
  APITypes.OnDeleteTerriiCareHomeSubscription
>;
export const onCreateTerriiUserProfile = /* GraphQL */ `subscription OnCreateTerriiUserProfile(
  $filter: ModelSubscriptionTerriiUserProfileFilterInput
) {
  onCreateTerriiUserProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerriiUserProfileSubscriptionVariables,
  APITypes.OnCreateTerriiUserProfileSubscription
>;
export const onUpdateTerriiUserProfile = /* GraphQL */ `subscription OnUpdateTerriiUserProfile(
  $filter: ModelSubscriptionTerriiUserProfileFilterInput
) {
  onUpdateTerriiUserProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerriiUserProfileSubscriptionVariables,
  APITypes.OnUpdateTerriiUserProfileSubscription
>;
export const onDeleteTerriiUserProfile = /* GraphQL */ `subscription OnDeleteTerriiUserProfile(
  $filter: ModelSubscriptionTerriiUserProfileFilterInput
) {
  onDeleteTerriiUserProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerriiUserProfileSubscriptionVariables,
  APITypes.OnDeleteTerriiUserProfileSubscription
>;
export const onCreateTerriiResident = /* GraphQL */ `subscription OnCreateTerriiResident(
  $filter: ModelSubscriptionTerriiResidentFilterInput
) {
  onCreateTerriiResident(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerriiResidentSubscriptionVariables,
  APITypes.OnCreateTerriiResidentSubscription
>;
export const onUpdateTerriiResident = /* GraphQL */ `subscription OnUpdateTerriiResident(
  $filter: ModelSubscriptionTerriiResidentFilterInput
) {
  onUpdateTerriiResident(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerriiResidentSubscriptionVariables,
  APITypes.OnUpdateTerriiResidentSubscription
>;
export const onDeleteTerriiResident = /* GraphQL */ `subscription OnDeleteTerriiResident(
  $filter: ModelSubscriptionTerriiResidentFilterInput
) {
  onDeleteTerriiResident(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerriiResidentSubscriptionVariables,
  APITypes.OnDeleteTerriiResidentSubscription
>;
export const onCreateTerriiResidentFamily = /* GraphQL */ `subscription OnCreateTerriiResidentFamily(
  $filter: ModelSubscriptionTerriiResidentFamilyFilterInput
) {
  onCreateTerriiResidentFamily(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerriiResidentFamilySubscriptionVariables,
  APITypes.OnCreateTerriiResidentFamilySubscription
>;
export const onUpdateTerriiResidentFamily = /* GraphQL */ `subscription OnUpdateTerriiResidentFamily(
  $filter: ModelSubscriptionTerriiResidentFamilyFilterInput
) {
  onUpdateTerriiResidentFamily(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerriiResidentFamilySubscriptionVariables,
  APITypes.OnUpdateTerriiResidentFamilySubscription
>;
export const onDeleteTerriiResidentFamily = /* GraphQL */ `subscription OnDeleteTerriiResidentFamily(
  $filter: ModelSubscriptionTerriiResidentFamilyFilterInput
) {
  onDeleteTerriiResidentFamily(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerriiResidentFamilySubscriptionVariables,
  APITypes.OnDeleteTerriiResidentFamilySubscription
>;
export const onCreateTerriiResidentMedical = /* GraphQL */ `subscription OnCreateTerriiResidentMedical(
  $filter: ModelSubscriptionTerriiResidentMedicalFilterInput
) {
  onCreateTerriiResidentMedical(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerriiResidentMedicalSubscriptionVariables,
  APITypes.OnCreateTerriiResidentMedicalSubscription
>;
export const onUpdateTerriiResidentMedical = /* GraphQL */ `subscription OnUpdateTerriiResidentMedical(
  $filter: ModelSubscriptionTerriiResidentMedicalFilterInput
) {
  onUpdateTerriiResidentMedical(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerriiResidentMedicalSubscriptionVariables,
  APITypes.OnUpdateTerriiResidentMedicalSubscription
>;
export const onDeleteTerriiResidentMedical = /* GraphQL */ `subscription OnDeleteTerriiResidentMedical(
  $filter: ModelSubscriptionTerriiResidentMedicalFilterInput
) {
  onDeleteTerriiResidentMedical(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerriiResidentMedicalSubscriptionVariables,
  APITypes.OnDeleteTerriiResidentMedicalSubscription
>;
export const onCreateTerriiResidentMedication = /* GraphQL */ `subscription OnCreateTerriiResidentMedication(
  $filter: ModelSubscriptionTerriiResidentMedicationFilterInput
) {
  onCreateTerriiResidentMedication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerriiResidentMedicationSubscriptionVariables,
  APITypes.OnCreateTerriiResidentMedicationSubscription
>;
export const onUpdateTerriiResidentMedication = /* GraphQL */ `subscription OnUpdateTerriiResidentMedication(
  $filter: ModelSubscriptionTerriiResidentMedicationFilterInput
) {
  onUpdateTerriiResidentMedication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerriiResidentMedicationSubscriptionVariables,
  APITypes.OnUpdateTerriiResidentMedicationSubscription
>;
export const onDeleteTerriiResidentMedication = /* GraphQL */ `subscription OnDeleteTerriiResidentMedication(
  $filter: ModelSubscriptionTerriiResidentMedicationFilterInput
) {
  onDeleteTerriiResidentMedication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerriiResidentMedicationSubscriptionVariables,
  APITypes.OnDeleteTerriiResidentMedicationSubscription
>;
export const onCreateTerriiResidentCarePreferences = /* GraphQL */ `subscription OnCreateTerriiResidentCarePreferences(
  $filter: ModelSubscriptionTerriiResidentCarePreferencesFilterInput
) {
  onCreateTerriiResidentCarePreferences(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerriiResidentCarePreferencesSubscriptionVariables,
  APITypes.OnCreateTerriiResidentCarePreferencesSubscription
>;
export const onUpdateTerriiResidentCarePreferences = /* GraphQL */ `subscription OnUpdateTerriiResidentCarePreferences(
  $filter: ModelSubscriptionTerriiResidentCarePreferencesFilterInput
) {
  onUpdateTerriiResidentCarePreferences(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerriiResidentCarePreferencesSubscriptionVariables,
  APITypes.OnUpdateTerriiResidentCarePreferencesSubscription
>;
export const onDeleteTerriiResidentCarePreferences = /* GraphQL */ `subscription OnDeleteTerriiResidentCarePreferences(
  $filter: ModelSubscriptionTerriiResidentCarePreferencesFilterInput
) {
  onDeleteTerriiResidentCarePreferences(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerriiResidentCarePreferencesSubscriptionVariables,
  APITypes.OnDeleteTerriiResidentCarePreferencesSubscription
>;
export const onCreateTerriiResidentActivity = /* GraphQL */ `subscription OnCreateTerriiResidentActivity(
  $filter: ModelSubscriptionTerriiResidentActivityFilterInput
) {
  onCreateTerriiResidentActivity(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerriiResidentActivitySubscriptionVariables,
  APITypes.OnCreateTerriiResidentActivitySubscription
>;
export const onUpdateTerriiResidentActivity = /* GraphQL */ `subscription OnUpdateTerriiResidentActivity(
  $filter: ModelSubscriptionTerriiResidentActivityFilterInput
) {
  onUpdateTerriiResidentActivity(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerriiResidentActivitySubscriptionVariables,
  APITypes.OnUpdateTerriiResidentActivitySubscription
>;
export const onDeleteTerriiResidentActivity = /* GraphQL */ `subscription OnDeleteTerriiResidentActivity(
  $filter: ModelSubscriptionTerriiResidentActivityFilterInput
) {
  onDeleteTerriiResidentActivity(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerriiResidentActivitySubscriptionVariables,
  APITypes.OnDeleteTerriiResidentActivitySubscription
>;
export const onCreateTerriiResidentEmergencyContact = /* GraphQL */ `subscription OnCreateTerriiResidentEmergencyContact(
  $filter: ModelSubscriptionTerriiResidentEmergencyContactFilterInput
) {
  onCreateTerriiResidentEmergencyContact(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerriiResidentEmergencyContactSubscriptionVariables,
  APITypes.OnCreateTerriiResidentEmergencyContactSubscription
>;
export const onUpdateTerriiResidentEmergencyContact = /* GraphQL */ `subscription OnUpdateTerriiResidentEmergencyContact(
  $filter: ModelSubscriptionTerriiResidentEmergencyContactFilterInput
) {
  onUpdateTerriiResidentEmergencyContact(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerriiResidentEmergencyContactSubscriptionVariables,
  APITypes.OnUpdateTerriiResidentEmergencyContactSubscription
>;
export const onDeleteTerriiResidentEmergencyContact = /* GraphQL */ `subscription OnDeleteTerriiResidentEmergencyContact(
  $filter: ModelSubscriptionTerriiResidentEmergencyContactFilterInput
) {
  onDeleteTerriiResidentEmergencyContact(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerriiResidentEmergencyContactSubscriptionVariables,
  APITypes.OnDeleteTerriiResidentEmergencyContactSubscription
>;
export const onCreateTerriiMessageThread = /* GraphQL */ `subscription OnCreateTerriiMessageThread(
  $filter: ModelSubscriptionTerriiMessageThreadFilterInput
) {
  onCreateTerriiMessageThread(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerriiMessageThreadSubscriptionVariables,
  APITypes.OnCreateTerriiMessageThreadSubscription
>;
export const onUpdateTerriiMessageThread = /* GraphQL */ `subscription OnUpdateTerriiMessageThread(
  $filter: ModelSubscriptionTerriiMessageThreadFilterInput
) {
  onUpdateTerriiMessageThread(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerriiMessageThreadSubscriptionVariables,
  APITypes.OnUpdateTerriiMessageThreadSubscription
>;
export const onDeleteTerriiMessageThread = /* GraphQL */ `subscription OnDeleteTerriiMessageThread(
  $filter: ModelSubscriptionTerriiMessageThreadFilterInput
) {
  onDeleteTerriiMessageThread(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerriiMessageThreadSubscriptionVariables,
  APITypes.OnDeleteTerriiMessageThreadSubscription
>;
export const onCreateTerriiMessage = /* GraphQL */ `subscription OnCreateTerriiMessage(
  $filter: ModelSubscriptionTerriiMessageFilterInput
) {
  onCreateTerriiMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerriiMessageSubscriptionVariables,
  APITypes.OnCreateTerriiMessageSubscription
>;
export const onUpdateTerriiMessage = /* GraphQL */ `subscription OnUpdateTerriiMessage(
  $filter: ModelSubscriptionTerriiMessageFilterInput
) {
  onUpdateTerriiMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerriiMessageSubscriptionVariables,
  APITypes.OnUpdateTerriiMessageSubscription
>;
export const onDeleteTerriiMessage = /* GraphQL */ `subscription OnDeleteTerriiMessage(
  $filter: ModelSubscriptionTerriiMessageFilterInput
) {
  onDeleteTerriiMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerriiMessageSubscriptionVariables,
  APITypes.OnDeleteTerriiMessageSubscription
>;
export const onCreateTerriiMoment = /* GraphQL */ `subscription OnCreateTerriiMoment(
  $filter: ModelSubscriptionTerriiMomentFilterInput
) {
  onCreateTerriiMoment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerriiMomentSubscriptionVariables,
  APITypes.OnCreateTerriiMomentSubscription
>;
export const onUpdateTerriiMoment = /* GraphQL */ `subscription OnUpdateTerriiMoment(
  $filter: ModelSubscriptionTerriiMomentFilterInput
) {
  onUpdateTerriiMoment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerriiMomentSubscriptionVariables,
  APITypes.OnUpdateTerriiMomentSubscription
>;
export const onDeleteTerriiMoment = /* GraphQL */ `subscription OnDeleteTerriiMoment(
  $filter: ModelSubscriptionTerriiMomentFilterInput
) {
  onDeleteTerriiMoment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerriiMomentSubscriptionVariables,
  APITypes.OnDeleteTerriiMomentSubscription
>;
export const onCreateTerriiMomentComment = /* GraphQL */ `subscription OnCreateTerriiMomentComment(
  $filter: ModelSubscriptionTerriiMomentCommentFilterInput
) {
  onCreateTerriiMomentComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerriiMomentCommentSubscriptionVariables,
  APITypes.OnCreateTerriiMomentCommentSubscription
>;
export const onUpdateTerriiMomentComment = /* GraphQL */ `subscription OnUpdateTerriiMomentComment(
  $filter: ModelSubscriptionTerriiMomentCommentFilterInput
) {
  onUpdateTerriiMomentComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerriiMomentCommentSubscriptionVariables,
  APITypes.OnUpdateTerriiMomentCommentSubscription
>;
export const onDeleteTerriiMomentComment = /* GraphQL */ `subscription OnDeleteTerriiMomentComment(
  $filter: ModelSubscriptionTerriiMomentCommentFilterInput
) {
  onDeleteTerriiMomentComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerriiMomentCommentSubscriptionVariables,
  APITypes.OnDeleteTerriiMomentCommentSubscription
>;
export const onCreateTerriiCommunityPost = /* GraphQL */ `subscription OnCreateTerriiCommunityPost(
  $filter: ModelSubscriptionTerriiCommunityPostFilterInput
) {
  onCreateTerriiCommunityPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerriiCommunityPostSubscriptionVariables,
  APITypes.OnCreateTerriiCommunityPostSubscription
>;
export const onUpdateTerriiCommunityPost = /* GraphQL */ `subscription OnUpdateTerriiCommunityPost(
  $filter: ModelSubscriptionTerriiCommunityPostFilterInput
) {
  onUpdateTerriiCommunityPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerriiCommunityPostSubscriptionVariables,
  APITypes.OnUpdateTerriiCommunityPostSubscription
>;
export const onDeleteTerriiCommunityPost = /* GraphQL */ `subscription OnDeleteTerriiCommunityPost(
  $filter: ModelSubscriptionTerriiCommunityPostFilterInput
) {
  onDeleteTerriiCommunityPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerriiCommunityPostSubscriptionVariables,
  APITypes.OnDeleteTerriiCommunityPostSubscription
>;
export const onCreateTerriiCommunityComment = /* GraphQL */ `subscription OnCreateTerriiCommunityComment(
  $filter: ModelSubscriptionTerriiCommunityCommentFilterInput
) {
  onCreateTerriiCommunityComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerriiCommunityCommentSubscriptionVariables,
  APITypes.OnCreateTerriiCommunityCommentSubscription
>;
export const onUpdateTerriiCommunityComment = /* GraphQL */ `subscription OnUpdateTerriiCommunityComment(
  $filter: ModelSubscriptionTerriiCommunityCommentFilterInput
) {
  onUpdateTerriiCommunityComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerriiCommunityCommentSubscriptionVariables,
  APITypes.OnUpdateTerriiCommunityCommentSubscription
>;
export const onDeleteTerriiCommunityComment = /* GraphQL */ `subscription OnDeleteTerriiCommunityComment(
  $filter: ModelSubscriptionTerriiCommunityCommentFilterInput
) {
  onDeleteTerriiCommunityComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerriiCommunityCommentSubscriptionVariables,
  APITypes.OnDeleteTerriiCommunityCommentSubscription
>;
export const onCreateMyFriendsUser = /* GraphQL */ `subscription OnCreateMyFriendsUser(
  $filter: ModelSubscriptionMyFriendsUserFilterInput
) {
  onCreateMyFriendsUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMyFriendsUserSubscriptionVariables,
  APITypes.OnCreateMyFriendsUserSubscription
>;
export const onUpdateMyFriendsUser = /* GraphQL */ `subscription OnUpdateMyFriendsUser(
  $filter: ModelSubscriptionMyFriendsUserFilterInput
) {
  onUpdateMyFriendsUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMyFriendsUserSubscriptionVariables,
  APITypes.OnUpdateMyFriendsUserSubscription
>;
export const onDeleteMyFriendsUser = /* GraphQL */ `subscription OnDeleteMyFriendsUser(
  $filter: ModelSubscriptionMyFriendsUserFilterInput
) {
  onDeleteMyFriendsUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMyFriendsUserSubscriptionVariables,
  APITypes.OnDeleteMyFriendsUserSubscription
>;
export const onCreateUserChatRoom = /* GraphQL */ `subscription OnCreateUserChatRoom(
  $filter: ModelSubscriptionUserChatRoomFilterInput
) {
  onCreateUserChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserChatRoomSubscriptionVariables,
  APITypes.OnCreateUserChatRoomSubscription
>;
export const onUpdateUserChatRoom = /* GraphQL */ `subscription OnUpdateUserChatRoom(
  $filter: ModelSubscriptionUserChatRoomFilterInput
) {
  onUpdateUserChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserChatRoomSubscriptionVariables,
  APITypes.OnUpdateUserChatRoomSubscription
>;
export const onDeleteUserChatRoom = /* GraphQL */ `subscription OnDeleteUserChatRoom(
  $filter: ModelSubscriptionUserChatRoomFilterInput
) {
  onDeleteUserChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserChatRoomSubscriptionVariables,
  APITypes.OnDeleteUserChatRoomSubscription
>;
