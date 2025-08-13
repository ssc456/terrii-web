/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMyChats = /* GraphQL */ `
  subscription OnCreateMyChats($filter: ModelSubscriptionMyChatsFilterInput) {
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
`;
export const onUpdateMyChats = /* GraphQL */ `
  subscription OnUpdateMyChats($filter: ModelSubscriptionMyChatsFilterInput) {
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
`;
export const onDeleteMyChats = /* GraphQL */ `
  subscription OnDeleteMyChats($filter: ModelSubscriptionMyChatsFilterInput) {
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
`;
export const onCreateDebugInfo = /* GraphQL */ `
  subscription OnCreateDebugInfo(
    $filter: ModelSubscriptionDebugInfoFilterInput
  ) {
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
`;
export const onUpdateDebugInfo = /* GraphQL */ `
  subscription OnUpdateDebugInfo(
    $filter: ModelSubscriptionDebugInfoFilterInput
  ) {
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
`;
export const onDeleteDebugInfo = /* GraphQL */ `
  subscription OnDeleteDebugInfo(
    $filter: ModelSubscriptionDebugInfoFilterInput
  ) {
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
`;
export const onCreateMyFriends = /* GraphQL */ `
  subscription OnCreateMyFriends(
    $filter: ModelSubscriptionMyFriendsFilterInput
  ) {
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
`;
export const onUpdateMyFriends = /* GraphQL */ `
  subscription OnUpdateMyFriends(
    $filter: ModelSubscriptionMyFriendsFilterInput
  ) {
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
`;
export const onDeleteMyFriends = /* GraphQL */ `
  subscription OnDeleteMyFriends(
    $filter: ModelSubscriptionMyFriendsFilterInput
  ) {
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
`;
export const onCreateExpoNotifications = /* GraphQL */ `
  subscription OnCreateExpoNotifications(
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
`;
export const onUpdateExpoNotifications = /* GraphQL */ `
  subscription OnUpdateExpoNotifications(
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
`;
export const onDeleteExpoNotifications = /* GraphQL */ `
  subscription OnDeleteExpoNotifications(
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
`;
export const onCreateSystemInfo = /* GraphQL */ `
  subscription OnCreateSystemInfo(
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
`;
export const onUpdateSystemInfo = /* GraphQL */ `
  subscription OnUpdateSystemInfo(
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
`;
export const onDeleteSystemInfo = /* GraphQL */ `
  subscription OnDeleteSystemInfo(
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
`;
export const onCreateCareHomes = /* GraphQL */ `
  subscription OnCreateCareHomes(
    $filter: ModelSubscriptionCareHomesFilterInput
  ) {
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
`;
export const onUpdateCareHomes = /* GraphQL */ `
  subscription OnUpdateCareHomes(
    $filter: ModelSubscriptionCareHomesFilterInput
  ) {
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
`;
export const onDeleteCareHomes = /* GraphQL */ `
  subscription OnDeleteCareHomes(
    $filter: ModelSubscriptionCareHomesFilterInput
  ) {
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
`;
export const onCreateUserExtendedInfo = /* GraphQL */ `
  subscription OnCreateUserExtendedInfo(
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
`;
export const onUpdateUserExtendedInfo = /* GraphQL */ `
  subscription OnUpdateUserExtendedInfo(
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
`;
export const onDeleteUserExtendedInfo = /* GraphQL */ `
  subscription OnDeleteUserExtendedInfo(
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
`;
export const onCreateCommunityUserNotifications = /* GraphQL */ `
  subscription OnCreateCommunityUserNotifications(
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
`;
export const onUpdateCommunityUserNotifications = /* GraphQL */ `
  subscription OnUpdateCommunityUserNotifications(
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
`;
export const onDeleteCommunityUserNotifications = /* GraphQL */ `
  subscription OnDeleteCommunityUserNotifications(
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
`;
export const onCreateQuestionGroupTypes = /* GraphQL */ `
  subscription OnCreateQuestionGroupTypes(
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
`;
export const onUpdateQuestionGroupTypes = /* GraphQL */ `
  subscription OnUpdateQuestionGroupTypes(
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
`;
export const onDeleteQuestionGroupTypes = /* GraphQL */ `
  subscription OnDeleteQuestionGroupTypes(
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
`;
export const onCreateCommunityUserGroupRoles = /* GraphQL */ `
  subscription OnCreateCommunityUserGroupRoles(
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
`;
export const onUpdateCommunityUserGroupRoles = /* GraphQL */ `
  subscription OnUpdateCommunityUserGroupRoles(
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
`;
export const onDeleteCommunityUserGroupRoles = /* GraphQL */ `
  subscription OnDeleteCommunityUserGroupRoles(
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
`;
export const onCreateCommunityGroup = /* GraphQL */ `
  subscription OnCreateCommunityGroup(
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
`;
export const onUpdateCommunityGroup = /* GraphQL */ `
  subscription OnUpdateCommunityGroup(
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
`;
export const onDeleteCommunityGroup = /* GraphQL */ `
  subscription OnDeleteCommunityGroup(
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
`;
export const onCreateCommunityPostPollVotes = /* GraphQL */ `
  subscription OnCreateCommunityPostPollVotes(
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
`;
export const onUpdateCommunityPostPollVotes = /* GraphQL */ `
  subscription OnUpdateCommunityPostPollVotes(
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
`;
export const onDeleteCommunityPostPollVotes = /* GraphQL */ `
  subscription OnDeleteCommunityPostPollVotes(
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
`;
export const onCreateCommunityPostPoll = /* GraphQL */ `
  subscription OnCreateCommunityPostPoll(
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
`;
export const onUpdateCommunityPostPoll = /* GraphQL */ `
  subscription OnUpdateCommunityPostPoll(
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
`;
export const onDeleteCommunityPostPoll = /* GraphQL */ `
  subscription OnDeleteCommunityPostPoll(
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
`;
export const onCreateCommunityLikes = /* GraphQL */ `
  subscription OnCreateCommunityLikes(
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
`;
export const onUpdateCommunityLikes = /* GraphQL */ `
  subscription OnUpdateCommunityLikes(
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
`;
export const onDeleteCommunityLikes = /* GraphQL */ `
  subscription OnDeleteCommunityLikes(
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
`;
export const onCreateCommunityComment = /* GraphQL */ `
  subscription OnCreateCommunityComment(
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
`;
export const onUpdateCommunityComment = /* GraphQL */ `
  subscription OnUpdateCommunityComment(
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
`;
export const onDeleteCommunityComment = /* GraphQL */ `
  subscription OnDeleteCommunityComment(
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
`;
export const onCreateCommunityPost = /* GraphQL */ `
  subscription OnCreateCommunityPost(
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
`;
export const onUpdateCommunityPost = /* GraphQL */ `
  subscription OnUpdateCommunityPost(
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
`;
export const onDeleteCommunityPost = /* GraphQL */ `
  subscription OnDeleteCommunityPost(
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
`;
export const onCreateCalendarItemType = /* GraphQL */ `
  subscription OnCreateCalendarItemType(
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
`;
export const onUpdateCalendarItemType = /* GraphQL */ `
  subscription OnUpdateCalendarItemType(
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
`;
export const onDeleteCalendarItemType = /* GraphQL */ `
  subscription OnDeleteCalendarItemType(
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
`;
export const onCreateRoadMapItems = /* GraphQL */ `
  subscription OnCreateRoadMapItems(
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
`;
export const onUpdateRoadMapItems = /* GraphQL */ `
  subscription OnUpdateRoadMapItems(
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
`;
export const onDeleteRoadMapItems = /* GraphQL */ `
  subscription OnDeleteRoadMapItems(
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
`;
export const onCreateManualNotificationsUser = /* GraphQL */ `
  subscription OnCreateManualNotificationsUser(
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
`;
export const onUpdateManualNotificationsUser = /* GraphQL */ `
  subscription OnUpdateManualNotificationsUser(
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
`;
export const onDeleteManualNotificationsUser = /* GraphQL */ `
  subscription OnDeleteManualNotificationsUser(
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
`;
export const onCreateManualNotifications = /* GraphQL */ `
  subscription OnCreateManualNotifications(
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
`;
export const onUpdateManualNotifications = /* GraphQL */ `
  subscription OnUpdateManualNotifications(
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
`;
export const onDeleteManualNotifications = /* GraphQL */ `
  subscription OnDeleteManualNotifications(
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
`;
export const onCreateQuestionAnswersUsers = /* GraphQL */ `
  subscription OnCreateQuestionAnswersUsers(
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
`;
export const onUpdateQuestionAnswersUsers = /* GraphQL */ `
  subscription OnUpdateQuestionAnswersUsers(
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
`;
export const onDeleteQuestionAnswersUsers = /* GraphQL */ `
  subscription OnDeleteQuestionAnswersUsers(
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
`;
export const onCreateQuestionAnswers = /* GraphQL */ `
  subscription OnCreateQuestionAnswers(
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
`;
export const onUpdateQuestionAnswers = /* GraphQL */ `
  subscription OnUpdateQuestionAnswers(
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
`;
export const onDeleteQuestionAnswers = /* GraphQL */ `
  subscription OnDeleteQuestionAnswers(
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
`;
export const onCreateQuestions = /* GraphQL */ `
  subscription OnCreateQuestions(
    $filter: ModelSubscriptionQuestionsFilterInput
  ) {
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
`;
export const onUpdateQuestions = /* GraphQL */ `
  subscription OnUpdateQuestions(
    $filter: ModelSubscriptionQuestionsFilterInput
  ) {
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
`;
export const onDeleteQuestions = /* GraphQL */ `
  subscription OnDeleteQuestions(
    $filter: ModelSubscriptionQuestionsFilterInput
  ) {
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
`;
export const onCreateQuestionGroup = /* GraphQL */ `
  subscription OnCreateQuestionGroup(
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
`;
export const onUpdateQuestionGroup = /* GraphQL */ `
  subscription OnUpdateQuestionGroup(
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
`;
export const onDeleteQuestionGroup = /* GraphQL */ `
  subscription OnDeleteQuestionGroup(
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
`;
export const onCreateUserQuestionGroups = /* GraphQL */ `
  subscription OnCreateUserQuestionGroups(
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
`;
export const onUpdateUserQuestionGroups = /* GraphQL */ `
  subscription OnUpdateUserQuestionGroups(
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
`;
export const onDeleteUserQuestionGroups = /* GraphQL */ `
  subscription OnDeleteUserQuestionGroups(
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
`;
export const onCreateUserRoadmapItems = /* GraphQL */ `
  subscription OnCreateUserRoadmapItems(
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
`;
export const onUpdateUserRoadmapItems = /* GraphQL */ `
  subscription OnUpdateUserRoadmapItems(
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
`;
export const onDeleteUserRoadmapItems = /* GraphQL */ `
  subscription OnDeleteUserRoadmapItems(
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
`;
export const onCreateRoadmapGroup = /* GraphQL */ `
  subscription OnCreateRoadmapGroup(
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
`;
export const onUpdateRoadmapGroup = /* GraphQL */ `
  subscription OnUpdateRoadmapGroup(
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
`;
export const onDeleteRoadmapGroup = /* GraphQL */ `
  subscription OnDeleteRoadmapGroup(
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
`;
export const onCreateBookmarks = /* GraphQL */ `
  subscription OnCreateBookmarks(
    $filter: ModelSubscriptionBookmarksFilterInput
  ) {
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
`;
export const onUpdateBookmarks = /* GraphQL */ `
  subscription OnUpdateBookmarks(
    $filter: ModelSubscriptionBookmarksFilterInput
  ) {
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
`;
export const onDeleteBookmarks = /* GraphQL */ `
  subscription OnDeleteBookmarks(
    $filter: ModelSubscriptionBookmarksFilterInput
  ) {
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
`;
export const onCreateActivityUserApp = /* GraphQL */ `
  subscription OnCreateActivityUserApp(
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
`;
export const onUpdateActivityUserApp = /* GraphQL */ `
  subscription OnUpdateActivityUserApp(
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
`;
export const onDeleteActivityUserApp = /* GraphQL */ `
  subscription OnDeleteActivityUserApp(
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
`;
export const onCreateGuidanceContent = /* GraphQL */ `
  subscription OnCreateGuidanceContent(
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
`;
export const onUpdateGuidanceContent = /* GraphQL */ `
  subscription OnUpdateGuidanceContent(
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
`;
export const onDeleteGuidanceContent = /* GraphQL */ `
  subscription OnDeleteGuidanceContent(
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
`;
export const onCreateGuidanceTypes = /* GraphQL */ `
  subscription OnCreateGuidanceTypes(
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
`;
export const onUpdateGuidanceTypes = /* GraphQL */ `
  subscription OnUpdateGuidanceTypes(
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
`;
export const onDeleteGuidanceTypes = /* GraphQL */ `
  subscription OnDeleteGuidanceTypes(
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
`;
export const onCreateGuidance = /* GraphQL */ `
  subscription OnCreateGuidance($filter: ModelSubscriptionGuidanceFilterInput) {
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
`;
export const onUpdateGuidance = /* GraphQL */ `
  subscription OnUpdateGuidance($filter: ModelSubscriptionGuidanceFilterInput) {
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
`;
export const onDeleteGuidance = /* GraphQL */ `
  subscription OnDeleteGuidance($filter: ModelSubscriptionGuidanceFilterInput) {
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
`;
export const onCreateCalendar = /* GraphQL */ `
  subscription OnCreateCalendar($filter: ModelSubscriptionCalendarFilterInput) {
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
`;
export const onUpdateCalendar = /* GraphQL */ `
  subscription OnUpdateCalendar($filter: ModelSubscriptionCalendarFilterInput) {
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
`;
export const onDeleteCalendar = /* GraphQL */ `
  subscription OnDeleteCalendar($filter: ModelSubscriptionCalendarFilterInput) {
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
`;
export const onCreateArticles = /* GraphQL */ `
  subscription OnCreateArticles($filter: ModelSubscriptionArticlesFilterInput) {
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
`;
export const onUpdateArticles = /* GraphQL */ `
  subscription OnUpdateArticles($filter: ModelSubscriptionArticlesFilterInput) {
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
`;
export const onDeleteArticles = /* GraphQL */ `
  subscription OnDeleteArticles($filter: ModelSubscriptionArticlesFilterInput) {
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
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
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
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
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
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
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
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
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
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
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
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
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
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onCreateJournalEntry = /* GraphQL */ `
  subscription OnCreateJournalEntry(
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
`;
export const onUpdateJournalEntry = /* GraphQL */ `
  subscription OnUpdateJournalEntry(
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
`;
export const onDeleteJournalEntry = /* GraphQL */ `
  subscription OnDeleteJournalEntry(
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
`;
export const onCreateCommunityEvent = /* GraphQL */ `
  subscription OnCreateCommunityEvent(
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
`;
export const onUpdateCommunityEvent = /* GraphQL */ `
  subscription OnUpdateCommunityEvent(
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
`;
export const onDeleteCommunityEvent = /* GraphQL */ `
  subscription OnDeleteCommunityEvent(
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
`;
export const onCreateCommunityEventAttendance = /* GraphQL */ `
  subscription OnCreateCommunityEventAttendance(
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
`;
export const onUpdateCommunityEventAttendance = /* GraphQL */ `
  subscription OnUpdateCommunityEventAttendance(
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
`;
export const onDeleteCommunityEventAttendance = /* GraphQL */ `
  subscription OnDeleteCommunityEventAttendance(
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
`;
export const onCreateCommunityCommentLikes = /* GraphQL */ `
  subscription OnCreateCommunityCommentLikes(
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
`;
export const onUpdateCommunityCommentLikes = /* GraphQL */ `
  subscription OnUpdateCommunityCommentLikes(
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
`;
export const onDeleteCommunityCommentLikes = /* GraphQL */ `
  subscription OnDeleteCommunityCommentLikes(
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
`;
export const onCreateCarePlanOutputs = /* GraphQL */ `
  subscription OnCreateCarePlanOutputs(
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
`;
export const onUpdateCarePlanOutputs = /* GraphQL */ `
  subscription OnUpdateCarePlanOutputs(
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
`;
export const onDeleteCarePlanOutputs = /* GraphQL */ `
  subscription OnDeleteCarePlanOutputs(
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
`;
export const onCreateTerriiCareHome = /* GraphQL */ `
  subscription OnCreateTerriiCareHome(
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
      communityMode
      allowFamilyPosts
      requireFamilyPostApproval
      allowPostReactions
      allowPostComments
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTerriiCareHome = /* GraphQL */ `
  subscription OnUpdateTerriiCareHome(
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
      communityMode
      allowFamilyPosts
      requireFamilyPostApproval
      allowPostReactions
      allowPostComments
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTerriiCareHome = /* GraphQL */ `
  subscription OnDeleteTerriiCareHome(
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
      communityMode
      allowFamilyPosts
      requireFamilyPostApproval
      allowPostReactions
      allowPostComments
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTerriiUserProfile = /* GraphQL */ `
  subscription OnCreateTerriiUserProfile(
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
        communityMode
        allowFamilyPosts
        requireFamilyPostApproval
        allowPostReactions
        allowPostComments
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
`;
export const onUpdateTerriiUserProfile = /* GraphQL */ `
  subscription OnUpdateTerriiUserProfile(
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
        communityMode
        allowFamilyPosts
        requireFamilyPostApproval
        allowPostReactions
        allowPostComments
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
`;
export const onDeleteTerriiUserProfile = /* GraphQL */ `
  subscription OnDeleteTerriiUserProfile(
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
        communityMode
        allowFamilyPosts
        requireFamilyPostApproval
        allowPostReactions
        allowPostComments
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
`;
export const onCreateTerriiResident = /* GraphQL */ `
  subscription OnCreateTerriiResident(
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
        communityMode
        allowFamilyPosts
        requireFamilyPostApproval
        allowPostReactions
        allowPostComments
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
          userID
          isRegistered
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
`;
export const onUpdateTerriiResident = /* GraphQL */ `
  subscription OnUpdateTerriiResident(
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
        communityMode
        allowFamilyPosts
        requireFamilyPostApproval
        allowPostReactions
        allowPostComments
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
          userID
          isRegistered
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
`;
export const onDeleteTerriiResident = /* GraphQL */ `
  subscription OnDeleteTerriiResident(
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
        communityMode
        allowFamilyPosts
        requireFamilyPostApproval
        allowPostReactions
        allowPostComments
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
          userID
          isRegistered
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
`;
export const onCreateTerriiResidentFamily = /* GraphQL */ `
  subscription OnCreateTerriiResidentFamily(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
      userID
      isRegistered
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTerriiResidentFamily = /* GraphQL */ `
  subscription OnUpdateTerriiResidentFamily(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
      userID
      isRegistered
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTerriiResidentFamily = /* GraphQL */ `
  subscription OnDeleteTerriiResidentFamily(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
      userID
      isRegistered
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTerriiResidentMedical = /* GraphQL */ `
  subscription OnCreateTerriiResidentMedical(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onUpdateTerriiResidentMedical = /* GraphQL */ `
  subscription OnUpdateTerriiResidentMedical(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onDeleteTerriiResidentMedical = /* GraphQL */ `
  subscription OnDeleteTerriiResidentMedical(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onCreateTerriiResidentMedication = /* GraphQL */ `
  subscription OnCreateTerriiResidentMedication(
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
`;
export const onUpdateTerriiResidentMedication = /* GraphQL */ `
  subscription OnUpdateTerriiResidentMedication(
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
`;
export const onDeleteTerriiResidentMedication = /* GraphQL */ `
  subscription OnDeleteTerriiResidentMedication(
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
`;
export const onCreateTerriiResidentCarePreferences = /* GraphQL */ `
  subscription OnCreateTerriiResidentCarePreferences(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onUpdateTerriiResidentCarePreferences = /* GraphQL */ `
  subscription OnUpdateTerriiResidentCarePreferences(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onDeleteTerriiResidentCarePreferences = /* GraphQL */ `
  subscription OnDeleteTerriiResidentCarePreferences(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onCreateTerriiResidentActivity = /* GraphQL */ `
  subscription OnCreateTerriiResidentActivity(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onUpdateTerriiResidentActivity = /* GraphQL */ `
  subscription OnUpdateTerriiResidentActivity(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onDeleteTerriiResidentActivity = /* GraphQL */ `
  subscription OnDeleteTerriiResidentActivity(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onCreateTerriiResidentEmergencyContact = /* GraphQL */ `
  subscription OnCreateTerriiResidentEmergencyContact(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onUpdateTerriiResidentEmergencyContact = /* GraphQL */ `
  subscription OnUpdateTerriiResidentEmergencyContact(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onDeleteTerriiResidentEmergencyContact = /* GraphQL */ `
  subscription OnDeleteTerriiResidentEmergencyContact(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onCreateTerriiMessageThread = /* GraphQL */ `
  subscription OnCreateTerriiMessageThread(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onUpdateTerriiMessageThread = /* GraphQL */ `
  subscription OnUpdateTerriiMessageThread(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onDeleteTerriiMessageThread = /* GraphQL */ `
  subscription OnDeleteTerriiMessageThread(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
`;
export const onCreateTerriiMessage = /* GraphQL */ `
  subscription OnCreateTerriiMessage(
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
`;
export const onUpdateTerriiMessage = /* GraphQL */ `
  subscription OnUpdateTerriiMessage(
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
`;
export const onDeleteTerriiMessage = /* GraphQL */ `
  subscription OnDeleteTerriiMessage(
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
`;
export const onCreateTerriiMoment = /* GraphQL */ `
  subscription OnCreateTerriiMoment(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
        communityMode
        allowFamilyPosts
        requireFamilyPostApproval
        allowPostReactions
        allowPostComments
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
          parentCommentID
          likeCount
          replyCount
          mentions
          isDeleted
          editedAt
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
`;
export const onUpdateTerriiMoment = /* GraphQL */ `
  subscription OnUpdateTerriiMoment(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
        communityMode
        allowFamilyPosts
        requireFamilyPostApproval
        allowPostReactions
        allowPostComments
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
          parentCommentID
          likeCount
          replyCount
          mentions
          isDeleted
          editedAt
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
`;
export const onDeleteTerriiMoment = /* GraphQL */ `
  subscription OnDeleteTerriiMoment(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
        communityMode
        allowFamilyPosts
        requireFamilyPostApproval
        allowPostReactions
        allowPostComments
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
          parentCommentID
          likeCount
          replyCount
          mentions
          isDeleted
          editedAt
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
`;
export const onCreateTerriiMomentComment = /* GraphQL */ `
  subscription OnCreateTerriiMomentComment(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
      parentCommentID
      replies {
        items {
          id
          content
          createdByID
          momentID
          parentCommentID
          likeCount
          replyCount
          mentions
          isDeleted
          editedAt
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      likeCount
      replyCount
      mentions
      isDeleted
      editedAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTerriiMomentComment = /* GraphQL */ `
  subscription OnUpdateTerriiMomentComment(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
      parentCommentID
      replies {
        items {
          id
          content
          createdByID
          momentID
          parentCommentID
          likeCount
          replyCount
          mentions
          isDeleted
          editedAt
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      likeCount
      replyCount
      mentions
      isDeleted
      editedAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTerriiMomentComment = /* GraphQL */ `
  subscription OnDeleteTerriiMomentComment(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
      parentCommentID
      replies {
        items {
          id
          content
          createdByID
          momentID
          parentCommentID
          likeCount
          replyCount
          mentions
          isDeleted
          editedAt
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      likeCount
      replyCount
      mentions
      isDeleted
      editedAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTerriiCommunityPost = /* GraphQL */ `
  subscription OnCreateTerriiCommunityPost(
    $filter: ModelSubscriptionTerriiCommunityPostFilterInput
  ) {
    onCreateTerriiCommunityPost(filter: $filter) {
      id
      title
      lowerCaseTitle
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
        communityMode
        allowFamilyPosts
        requireFamilyPostApproval
        allowPostReactions
        allowPostComments
        createdAt
        updatedAt
        __typename
      }
      category
      media
      tags
      likes
      heartCount
      viewCount
      commentCount
      comments {
        items {
          id
          content
          createdByID
          postID
          parentCommentID
          likeCount
          replyCount
          mentions
          isDeleted
          editedAt
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
      status
      requiresApproval
      approvedAt
      approvedByID
      approvedBy {
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
      isDeleted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTerriiCommunityPost = /* GraphQL */ `
  subscription OnUpdateTerriiCommunityPost(
    $filter: ModelSubscriptionTerriiCommunityPostFilterInput
  ) {
    onUpdateTerriiCommunityPost(filter: $filter) {
      id
      title
      lowerCaseTitle
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
        communityMode
        allowFamilyPosts
        requireFamilyPostApproval
        allowPostReactions
        allowPostComments
        createdAt
        updatedAt
        __typename
      }
      category
      media
      tags
      likes
      heartCount
      viewCount
      commentCount
      comments {
        items {
          id
          content
          createdByID
          postID
          parentCommentID
          likeCount
          replyCount
          mentions
          isDeleted
          editedAt
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
      status
      requiresApproval
      approvedAt
      approvedByID
      approvedBy {
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
      isDeleted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTerriiCommunityPost = /* GraphQL */ `
  subscription OnDeleteTerriiCommunityPost(
    $filter: ModelSubscriptionTerriiCommunityPostFilterInput
  ) {
    onDeleteTerriiCommunityPost(filter: $filter) {
      id
      title
      lowerCaseTitle
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
        communityMode
        allowFamilyPosts
        requireFamilyPostApproval
        allowPostReactions
        allowPostComments
        createdAt
        updatedAt
        __typename
      }
      category
      media
      tags
      likes
      heartCount
      viewCount
      commentCount
      comments {
        items {
          id
          content
          createdByID
          postID
          parentCommentID
          likeCount
          replyCount
          mentions
          isDeleted
          editedAt
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
      status
      requiresApproval
      approvedAt
      approvedByID
      approvedBy {
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
      isDeleted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTerriiCommunityPostLike = /* GraphQL */ `
  subscription OnCreateTerriiCommunityPostLike(
    $filter: ModelSubscriptionTerriiCommunityPostLikeFilterInput
  ) {
    onCreateTerriiCommunityPostLike(filter: $filter) {
      id
      postID
      post {
        id
        title
        lowerCaseTitle
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
          createdAt
          updatedAt
          __typename
        }
        category
        media
        tags
        likes
        heartCount
        viewCount
        commentCount
        comments {
          nextToken
          __typename
        }
        isPinned
        isAnnouncement
        mode
        status
        requiresApproval
        approvedAt
        approvedByID
        approvedBy {
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
        isDeleted
        createdAt
        updatedAt
        __typename
      }
      userProfileID
      userProfile {
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
      __typename
    }
  }
`;
export const onUpdateTerriiCommunityPostLike = /* GraphQL */ `
  subscription OnUpdateTerriiCommunityPostLike(
    $filter: ModelSubscriptionTerriiCommunityPostLikeFilterInput
  ) {
    onUpdateTerriiCommunityPostLike(filter: $filter) {
      id
      postID
      post {
        id
        title
        lowerCaseTitle
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
          createdAt
          updatedAt
          __typename
        }
        category
        media
        tags
        likes
        heartCount
        viewCount
        commentCount
        comments {
          nextToken
          __typename
        }
        isPinned
        isAnnouncement
        mode
        status
        requiresApproval
        approvedAt
        approvedByID
        approvedBy {
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
        isDeleted
        createdAt
        updatedAt
        __typename
      }
      userProfileID
      userProfile {
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
      __typename
    }
  }
`;
export const onDeleteTerriiCommunityPostLike = /* GraphQL */ `
  subscription OnDeleteTerriiCommunityPostLike(
    $filter: ModelSubscriptionTerriiCommunityPostLikeFilterInput
  ) {
    onDeleteTerriiCommunityPostLike(filter: $filter) {
      id
      postID
      post {
        id
        title
        lowerCaseTitle
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
          createdAt
          updatedAt
          __typename
        }
        category
        media
        tags
        likes
        heartCount
        viewCount
        commentCount
        comments {
          nextToken
          __typename
        }
        isPinned
        isAnnouncement
        mode
        status
        requiresApproval
        approvedAt
        approvedByID
        approvedBy {
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
        isDeleted
        createdAt
        updatedAt
        __typename
      }
      userProfileID
      userProfile {
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
      __typename
    }
  }
`;
export const onCreateTerriiCommunityComment = /* GraphQL */ `
  subscription OnCreateTerriiCommunityComment(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
        title
        lowerCaseTitle
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
          createdAt
          updatedAt
          __typename
        }
        category
        media
        tags
        likes
        heartCount
        viewCount
        commentCount
        comments {
          nextToken
          __typename
        }
        isPinned
        isAnnouncement
        mode
        status
        requiresApproval
        approvedAt
        approvedByID
        approvedBy {
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
        isDeleted
        createdAt
        updatedAt
        __typename
      }
      parentCommentID
      replies {
        items {
          id
          content
          createdByID
          postID
          parentCommentID
          likeCount
          replyCount
          mentions
          isDeleted
          editedAt
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      likeCount
      replyCount
      mentions
      isDeleted
      editedAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTerriiCommunityComment = /* GraphQL */ `
  subscription OnUpdateTerriiCommunityComment(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
        title
        lowerCaseTitle
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
          createdAt
          updatedAt
          __typename
        }
        category
        media
        tags
        likes
        heartCount
        viewCount
        commentCount
        comments {
          nextToken
          __typename
        }
        isPinned
        isAnnouncement
        mode
        status
        requiresApproval
        approvedAt
        approvedByID
        approvedBy {
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
        isDeleted
        createdAt
        updatedAt
        __typename
      }
      parentCommentID
      replies {
        items {
          id
          content
          createdByID
          postID
          parentCommentID
          likeCount
          replyCount
          mentions
          isDeleted
          editedAt
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      likeCount
      replyCount
      mentions
      isDeleted
      editedAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTerriiCommunityComment = /* GraphQL */ `
  subscription OnDeleteTerriiCommunityComment(
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
        title
        lowerCaseTitle
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
          createdAt
          updatedAt
          __typename
        }
        category
        media
        tags
        likes
        heartCount
        viewCount
        commentCount
        comments {
          nextToken
          __typename
        }
        isPinned
        isAnnouncement
        mode
        status
        requiresApproval
        approvedAt
        approvedByID
        approvedBy {
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
        isDeleted
        createdAt
        updatedAt
        __typename
      }
      parentCommentID
      replies {
        items {
          id
          content
          createdByID
          postID
          parentCommentID
          likeCount
          replyCount
          mentions
          isDeleted
          editedAt
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      likeCount
      replyCount
      mentions
      isDeleted
      editedAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTerriiInviteCode = /* GraphQL */ `
  subscription OnCreateTerriiInviteCode(
    $filter: ModelSubscriptionTerriiInviteCodeFilterInput
  ) {
    onCreateTerriiInviteCode(filter: $filter) {
      id
      code
      familyMemberID
      familyMember {
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
        userID
        isRegistered
        createdAt
        updatedAt
        __typename
      }
      email
      isUsed
      usedAt
      expiresAt
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
      __typename
    }
  }
`;
export const onUpdateTerriiInviteCode = /* GraphQL */ `
  subscription OnUpdateTerriiInviteCode(
    $filter: ModelSubscriptionTerriiInviteCodeFilterInput
  ) {
    onUpdateTerriiInviteCode(filter: $filter) {
      id
      code
      familyMemberID
      familyMember {
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
        userID
        isRegistered
        createdAt
        updatedAt
        __typename
      }
      email
      isUsed
      usedAt
      expiresAt
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
      __typename
    }
  }
`;
export const onDeleteTerriiInviteCode = /* GraphQL */ `
  subscription OnDeleteTerriiInviteCode(
    $filter: ModelSubscriptionTerriiInviteCodeFilterInput
  ) {
    onDeleteTerriiInviteCode(filter: $filter) {
      id
      code
      familyMemberID
      familyMember {
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
        userID
        isRegistered
        createdAt
        updatedAt
        __typename
      }
      email
      isUsed
      usedAt
      expiresAt
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
          communityMode
          allowFamilyPosts
          requireFamilyPostApproval
          allowPostReactions
          allowPostComments
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
      __typename
    }
  }
`;
export const onCreateMyFriendsUser = /* GraphQL */ `
  subscription OnCreateMyFriendsUser(
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
`;
export const onUpdateMyFriendsUser = /* GraphQL */ `
  subscription OnUpdateMyFriendsUser(
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
`;
export const onDeleteMyFriendsUser = /* GraphQL */ `
  subscription OnDeleteMyFriendsUser(
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
`;
export const onCreateUserChatRoom = /* GraphQL */ `
  subscription OnCreateUserChatRoom(
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
`;
export const onUpdateUserChatRoom = /* GraphQL */ `
  subscription OnUpdateUserChatRoom(
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
`;
export const onDeleteUserChatRoom = /* GraphQL */ `
  subscription OnDeleteUserChatRoom(
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
`;
