/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMyChats = /* GraphQL */ `
  query GetMyChats($id: ID!) {
    getMyChats(id: $id) {
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
export const listMyChats = /* GraphQL */ `
  query ListMyChats(
    $filter: ModelMyChatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        ChatRoom {
          id
          name
          image
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
      nextToken
      __typename
    }
  }
`;
export const getDebugInfo = /* GraphQL */ `
  query GetDebugInfo($id: ID!) {
    getDebugInfo(id: $id) {
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
export const listDebugInfos = /* GraphQL */ `
  query ListDebugInfos(
    $filter: ModelDebugInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDebugInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        Logging
        Test
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMyFriends = /* GraphQL */ `
  query GetMyFriends($id: ID!) {
    getMyFriends(id: $id) {
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
export const listMyFriends = /* GraphQL */ `
  query ListMyFriends(
    $filter: ModelMyFriendsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getExpoNotifications = /* GraphQL */ `
  query GetExpoNotifications($id: ID!) {
    getExpoNotifications(id: $id) {
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
export const listExpoNotifications = /* GraphQL */ `
  query ListExpoNotifications(
    $filter: ModelExpoNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExpoNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        CommunityPost {
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
        CommunityComment {
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
        CommunityLikes {
          id
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
      nextToken
      __typename
    }
  }
`;
export const getSystemInfo = /* GraphQL */ `
  query GetSystemInfo($id: ID!) {
    getSystemInfo(id: $id) {
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
export const listSystemInfos = /* GraphQL */ `
  query ListSystemInfos(
    $filter: ModelSystemInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSystemInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        value
        options
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCareHomes = /* GraphQL */ `
  query GetCareHomes($id: ID!) {
    getCareHomes(id: $id) {
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
export const listCareHomes = /* GraphQL */ `
  query ListCareHomes(
    $filter: ModelCareHomesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCareHomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUserExtendedInfo = /* GraphQL */ `
  query GetUserExtendedInfo($id: ID!) {
    getUserExtendedInfo(id: $id) {
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
export const listUserExtendedInfos = /* GraphQL */ `
  query ListUserExtendedInfos(
    $filter: ModelUserExtendedInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserExtendedInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getCommunityUserNotifications = /* GraphQL */ `
  query GetCommunityUserNotifications($id: ID!) {
    getCommunityUserNotifications(id: $id) {
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
export const listCommunityUserNotifications = /* GraphQL */ `
  query ListCommunityUserNotifications(
    $filter: ModelCommunityUserNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunityUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        NotificationType
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
        CommunityLikes {
          id
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
          communitypostID
          communityCommentUserId
          createdAt
          parentCommentID
          updatedAt
          __typename
        }
        seen
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
        createdAt
        updatedAt
        communityUserNotificationsUserId
        communityUserNotificationsCommunityLikesId
        communityUserNotificationsCommunityCommentId
        communityUserNotificationsCommunityGroupId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getQuestionGroupTypes = /* GraphQL */ `
  query GetQuestionGroupTypes($id: ID!) {
    getQuestionGroupTypes(id: $id) {
      id
      name
      iconS3URL
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listQuestionGroupTypes = /* GraphQL */ `
  query ListQuestionGroupTypes(
    $filter: ModelQuestionGroupTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionGroupTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        iconS3URL
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCommunityUserGroupRoles = /* GraphQL */ `
  query GetCommunityUserGroupRoles($id: ID!) {
    getCommunityUserGroupRoles(id: $id) {
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
export const listCommunityUserGroupRoles = /* GraphQL */ `
  query ListCommunityUserGroupRoles(
    $filter: ModelCommunityUserGroupRolesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunityUserGroupRoles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userGroupRole
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
        createdAt
        updatedAt
        communityUserGroupRolesUserId
        communityUserGroupRolesCommunityGroupId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCommunityGroup = /* GraphQL */ `
  query GetCommunityGroup($id: ID!) {
    getCommunityGroup(id: $id) {
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
export const listCommunityGroups = /* GraphQL */ `
  query ListCommunityGroups(
    $filter: ModelCommunityGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunityGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCommunityPostPollVotes = /* GraphQL */ `
  query GetCommunityPostPollVotes($id: ID!) {
    getCommunityPostPollVotes(id: $id) {
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
export const listCommunityPostPollVotes = /* GraphQL */ `
  query ListCommunityPostPollVotes(
    $filter: ModelCommunityPostPollVotesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunityPostPollVotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        communitypostpollID
        createdAt
        updatedAt
        communityPostPollVotesUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCommunityPostPoll = /* GraphQL */ `
  query GetCommunityPostPoll($id: ID!) {
    getCommunityPostPoll(id: $id) {
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
export const listCommunityPostPolls = /* GraphQL */ `
  query ListCommunityPostPolls(
    $filter: ModelCommunityPostPollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunityPostPolls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        CommunityPostPollVotes {
          nextToken
          __typename
        }
        communitypostID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCommunityLikes = /* GraphQL */ `
  query GetCommunityLikes($id: ID!) {
    getCommunityLikes(id: $id) {
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
export const listCommunityLikes = /* GraphQL */ `
  query ListCommunityLikes(
    $filter: ModelCommunityLikesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunityLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCommunityComment = /* GraphQL */ `
  query GetCommunityComment($id: ID!) {
    getCommunityComment(id: $id) {
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
export const listCommunityComments = /* GraphQL */ `
  query ListCommunityComments(
    $filter: ModelCommunityCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunityComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCommunityPost = /* GraphQL */ `
  query GetCommunityPost($id: ID!) {
    getCommunityPost(id: $id) {
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
export const listCommunityPosts = /* GraphQL */ `
  query ListCommunityPosts(
    $filter: ModelCommunityPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunityPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const communityPostsByDate = /* GraphQL */ `
  query CommunityPostsByDate(
    $communitygroupID: ID!
    $dateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommunityPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    communityPostsByDate(
      communitygroupID: $communitygroupID
      dateTime: $dateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCalendarItemType = /* GraphQL */ `
  query GetCalendarItemType($id: ID!) {
    getCalendarItemType(id: $id) {
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
export const listCalendarItemTypes = /* GraphQL */ `
  query ListCalendarItemTypes(
    $filter: ModelCalendarItemTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCalendarItemTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRoadMapItems = /* GraphQL */ `
  query GetRoadMapItems($id: ID!) {
    getRoadMapItems(id: $id) {
      id
      text
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRoadMapItems = /* GraphQL */ `
  query ListRoadMapItems(
    $filter: ModelRoadMapItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoadMapItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getManualNotificationsUser = /* GraphQL */ `
  query GetManualNotificationsUser($id: ID!) {
    getManualNotificationsUser(id: $id) {
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
export const listManualNotificationsUsers = /* GraphQL */ `
  query ListManualNotificationsUsers(
    $filter: ModelManualNotificationsUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManualNotificationsUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getManualNotifications = /* GraphQL */ `
  query GetManualNotifications($id: ID!) {
    getManualNotifications(id: $id) {
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
export const listManualNotifications = /* GraphQL */ `
  query ListManualNotifications(
    $filter: ModelManualNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManualNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        ManualNotificationsUser {
          id
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
      nextToken
      __typename
    }
  }
`;
export const getQuestionAnswersUsers = /* GraphQL */ `
  query GetQuestionAnswersUsers($id: ID!) {
    getQuestionAnswersUsers(id: $id) {
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
export const listQuestionAnswersUsers = /* GraphQL */ `
  query ListQuestionAnswersUsers(
    $filter: ModelQuestionAnswersUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionAnswersUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        QuestionAnswers {
          id
          answer
          helpText
          nextQuestionID
          deleted
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
      nextToken
      __typename
    }
  }
`;
export const getQuestionAnswers = /* GraphQL */ `
  query GetQuestionAnswers($id: ID!) {
    getQuestionAnswers(id: $id) {
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
export const listQuestionAnswers = /* GraphQL */ `
  query ListQuestionAnswers(
    $filter: ModelQuestionAnswersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getQuestions = /* GraphQL */ `
  query GetQuestions($id: ID!) {
    getQuestions(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getQuestionGroup = /* GraphQL */ `
  query GetQuestionGroup($id: ID!) {
    getQuestionGroup(id: $id) {
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
export const listQuestionGroups = /* GraphQL */ `
  query ListQuestionGroups(
    $filter: ModelQuestionGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUserQuestionGroups = /* GraphQL */ `
  query GetUserQuestionGroups($id: ID!) {
    getUserQuestionGroups(id: $id) {
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
export const listUserQuestionGroups = /* GraphQL */ `
  query ListUserQuestionGroups(
    $filter: ModelUserQuestionGroupsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserQuestionGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        status
        createdAt
        updatedAt
        userQuestionGroupsUserId
        userQuestionGroupsQuestionGroupId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserRoadmapItems = /* GraphQL */ `
  query GetUserRoadmapItems($id: ID!) {
    getUserRoadmapItems(id: $id) {
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
export const listUserRoadmapItems = /* GraphQL */ `
  query ListUserRoadmapItems(
    $filter: ModelUserRoadmapItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserRoadmapItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getRoadmapGroup = /* GraphQL */ `
  query GetRoadmapGroup($id: ID!) {
    getRoadmapGroup(id: $id) {
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
export const listRoadmapGroups = /* GraphQL */ `
  query ListRoadmapGroups(
    $filter: ModelRoadmapGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoadmapGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        imageS3ObjectKey
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBookmarks = /* GraphQL */ `
  query GetBookmarks($id: ID!) {
    getBookmarks(id: $id) {
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
export const listBookmarks = /* GraphQL */ `
  query ListBookmarks(
    $filter: ModelBookmarksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookmarks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        deleted
        createdAt
        updatedAt
        bookmarksUserId
        bookmarksGuidanceId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getActivityUserApp = /* GraphQL */ `
  query GetActivityUserApp($id: ID!) {
    getActivityUserApp(id: $id) {
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
export const listActivityUserApps = /* GraphQL */ `
  query ListActivityUserApps(
    $filter: ModelActivityUserAppFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivityUserApps(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
        activityUserAppUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGuidanceContent = /* GraphQL */ `
  query GetGuidanceContent($id: ID!) {
    getGuidanceContent(id: $id) {
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
export const listGuidanceContents = /* GraphQL */ `
  query ListGuidanceContents(
    $filter: ModelGuidanceContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGuidanceContents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getGuidanceTypes = /* GraphQL */ `
  query GetGuidanceTypes($id: ID!) {
    getGuidanceTypes(id: $id) {
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
export const listGuidanceTypes = /* GraphQL */ `
  query ListGuidanceTypes(
    $filter: ModelGuidanceTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGuidanceTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        colour
        deleted
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGuidance = /* GraphQL */ `
  query GetGuidance($id: ID!) {
    getGuidance(id: $id) {
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
export const listGuidances = /* GraphQL */ `
  query ListGuidances(
    $filter: ModelGuidanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGuidances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCalendar = /* GraphQL */ `
  query GetCalendar($id: ID!) {
    getCalendar(id: $id) {
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
export const listCalendars = /* GraphQL */ `
  query ListCalendars(
    $filter: ModelCalendarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCalendars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getArticles = /* GraphQL */ `
  query GetArticles($id: ID!) {
    getArticles(id: $id) {
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
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticlesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        imageURL
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const byChatRoom = /* GraphQL */ `
  query ByChatRoom(
    $chatroomID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byChatRoom(
      chatroomID: $chatroomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getJournalEntry = /* GraphQL */ `
  query GetJournalEntry($id: ID!) {
    getJournalEntry(id: $id) {
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
export const listJournalEntries = /* GraphQL */ `
  query ListJournalEntries(
    $filter: ModelJournalEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJournalEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCommunityEvent = /* GraphQL */ `
  query GetCommunityEvent($id: ID!) {
    getCommunityEvent(id: $id) {
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
export const listCommunityEvents = /* GraphQL */ `
  query ListCommunityEvents(
    $filter: ModelCommunityEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunityEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCommunityEventAttendance = /* GraphQL */ `
  query GetCommunityEventAttendance($id: ID!) {
    getCommunityEventAttendance(id: $id) {
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
export const listCommunityEventAttendances = /* GraphQL */ `
  query ListCommunityEventAttendances(
    $filter: ModelCommunityEventAttendanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunityEventAttendances(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        eventID
        CommunityEvent {
          id
          title
          description
          imageS3Key
          eventDateTime
          location
          communityGroupID
          createdByID
          createdAt
          updatedAt
          __typename
        }
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const attendancesByEvent = /* GraphQL */ `
  query AttendancesByEvent(
    $eventID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommunityEventAttendanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attendancesByEvent(
      eventID: $eventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        eventID
        CommunityEvent {
          id
          title
          description
          imageS3Key
          eventDateTime
          location
          communityGroupID
          createdByID
          createdAt
          updatedAt
          __typename
        }
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCommunityCommentLikes = /* GraphQL */ `
  query GetCommunityCommentLikes($id: ID!) {
    getCommunityCommentLikes(id: $id) {
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
export const listCommunityCommentLikes = /* GraphQL */ `
  query ListCommunityCommentLikes(
    $filter: ModelCommunityCommentLikesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunityCommentLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        commentID
        communityCommentLikesUserId
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCarePlanOutputs = /* GraphQL */ `
  query GetCarePlanOutputs($id: ID!) {
    getCarePlanOutputs(id: $id) {
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
export const listCarePlanOutputs = /* GraphQL */ `
  query ListCarePlanOutputs(
    $filter: ModelCarePlanOutputsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarePlanOutputs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        carePlanJSON
        deleted
        carePlanName
        createdAt
        updatedAt
        carePlanOutputsUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTerriiCareHome = /* GraphQL */ `
  query GetTerriiCareHome($id: ID!) {
    getTerriiCareHome(id: $id) {
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
export const listTerriiCareHomes = /* GraphQL */ `
  query ListTerriiCareHomes(
    $filter: ModelTerriiCareHomeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiCareHomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTerriiUserProfile = /* GraphQL */ `
  query GetTerriiUserProfile($id: ID!) {
    getTerriiUserProfile(id: $id) {
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
export const listTerriiUserProfiles = /* GraphQL */ `
  query ListTerriiUserProfiles(
    $filter: ModelTerriiUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiUserProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTerriiResident = /* GraphQL */ `
  query GetTerriiResident($id: ID!) {
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
export const listTerriiResidents = /* GraphQL */ `
  query ListTerriiResidents(
    $filter: ModelTerriiResidentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiResidents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTerriiResidentFamily = /* GraphQL */ `
  query GetTerriiResidentFamily($id: ID!) {
    getTerriiResidentFamily(id: $id) {
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
export const listTerriiResidentFamilies = /* GraphQL */ `
  query ListTerriiResidentFamilies(
    $filter: ModelTerriiResidentFamilyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiResidentFamilies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTerriiResidentMedical = /* GraphQL */ `
  query GetTerriiResidentMedical($id: ID!) {
    getTerriiResidentMedical(id: $id) {
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
export const listTerriiResidentMedicals = /* GraphQL */ `
  query ListTerriiResidentMedicals(
    $filter: ModelTerriiResidentMedicalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiResidentMedicals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTerriiResidentMedication = /* GraphQL */ `
  query GetTerriiResidentMedication($id: ID!) {
    getTerriiResidentMedication(id: $id) {
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
export const listTerriiResidentMedications = /* GraphQL */ `
  query ListTerriiResidentMedications(
    $filter: ModelTerriiResidentMedicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiResidentMedications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        dosage
        time
        medicalInfoID
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTerriiResidentCarePreferences = /* GraphQL */ `
  query GetTerriiResidentCarePreferences($id: ID!) {
    getTerriiResidentCarePreferences(id: $id) {
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
export const listTerriiResidentCarePreferences = /* GraphQL */ `
  query ListTerriiResidentCarePreferences(
    $filter: ModelTerriiResidentCarePreferencesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiResidentCarePreferences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTerriiResidentActivity = /* GraphQL */ `
  query GetTerriiResidentActivity($id: ID!) {
    getTerriiResidentActivity(id: $id) {
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
export const listTerriiResidentActivities = /* GraphQL */ `
  query ListTerriiResidentActivities(
    $filter: ModelTerriiResidentActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiResidentActivities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const activitiesByResidentAndDate = /* GraphQL */ `
  query ActivitiesByResidentAndDate(
    $residentID: ID!
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTerriiResidentActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    activitiesByResidentAndDate(
      residentID: $residentID
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTerriiResidentEmergencyContact = /* GraphQL */ `
  query GetTerriiResidentEmergencyContact($id: ID!) {
    getTerriiResidentEmergencyContact(id: $id) {
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
export const listTerriiResidentEmergencyContacts = /* GraphQL */ `
  query ListTerriiResidentEmergencyContacts(
    $filter: ModelTerriiResidentEmergencyContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiResidentEmergencyContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTerriiMessageThread = /* GraphQL */ `
  query GetTerriiMessageThread($id: ID!) {
    getTerriiMessageThread(id: $id) {
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
export const listTerriiMessageThreads = /* GraphQL */ `
  query ListTerriiMessageThreads(
    $filter: ModelTerriiMessageThreadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiMessageThreads(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTerriiMessage = /* GraphQL */ `
  query GetTerriiMessage($id: ID!) {
    getTerriiMessage(id: $id) {
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
export const listTerriiMessages = /* GraphQL */ `
  query ListTerriiMessages(
    $filter: ModelTerriiMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const messagesByThread = /* GraphQL */ `
  query MessagesByThread(
    $threadID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTerriiMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByThread(
      threadID: $threadID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTerriiMoment = /* GraphQL */ `
  query GetTerriiMoment($id: ID!) {
    getTerriiMoment(id: $id) {
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
export const listTerriiMoments = /* GraphQL */ `
  query ListTerriiMoments(
    $filter: ModelTerriiMomentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiMoments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTerriiMomentComment = /* GraphQL */ `
  query GetTerriiMomentComment($id: ID!) {
    getTerriiMomentComment(id: $id) {
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
export const listTerriiMomentComments = /* GraphQL */ `
  query ListTerriiMomentComments(
    $filter: ModelTerriiMomentCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiMomentComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        momentID
        moment {
          id
          content
          createdByID
          residentID
          careHomeID
          media
          tags
          likes
          isPrivate
          createdAt
          updatedAt
          __typename
        }
        parentCommentID
        replies {
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
      nextToken
      __typename
    }
  }
`;
export const commentsByMoment = /* GraphQL */ `
  query CommentsByMoment(
    $momentID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTerriiMomentCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByMoment(
      momentID: $momentID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        momentID
        moment {
          id
          content
          createdByID
          residentID
          careHomeID
          media
          tags
          likes
          isPrivate
          createdAt
          updatedAt
          __typename
        }
        parentCommentID
        replies {
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
      nextToken
      __typename
    }
  }
`;
export const momentCommentsByParent = /* GraphQL */ `
  query MomentCommentsByParent(
    $parentCommentID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTerriiMomentCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    momentCommentsByParent(
      parentCommentID: $parentCommentID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        momentID
        moment {
          id
          content
          createdByID
          residentID
          careHomeID
          media
          tags
          likes
          isPrivate
          createdAt
          updatedAt
          __typename
        }
        parentCommentID
        replies {
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
      nextToken
      __typename
    }
  }
`;
export const getTerriiCommunityPost = /* GraphQL */ `
  query GetTerriiCommunityPost($id: ID!) {
    getTerriiCommunityPost(id: $id) {
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
export const listTerriiCommunityPosts = /* GraphQL */ `
  query ListTerriiCommunityPosts(
    $filter: ModelTerriiCommunityPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiCommunityPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTerriiCommunityPostLike = /* GraphQL */ `
  query GetTerriiCommunityPostLike($id: ID!) {
    getTerriiCommunityPostLike(id: $id) {
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
export const listTerriiCommunityPostLikes = /* GraphQL */ `
  query ListTerriiCommunityPostLikes(
    $filter: ModelTerriiCommunityPostLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiCommunityPostLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        post {
          id
          title
          lowerCaseTitle
          content
          createdByID
          careHomeID
          category
          media
          tags
          likes
          heartCount
          viewCount
          commentCount
          isPinned
          isAnnouncement
          mode
          status
          requiresApproval
          approvedAt
          approvedByID
          isDeleted
          createdAt
          updatedAt
          __typename
        }
        userProfileID
        userProfile {
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTerriiCommunityComment = /* GraphQL */ `
  query GetTerriiCommunityComment($id: ID!) {
    getTerriiCommunityComment(id: $id) {
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
export const listTerriiCommunityComments = /* GraphQL */ `
  query ListTerriiCommunityComments(
    $filter: ModelTerriiCommunityCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiCommunityComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        postID
        post {
          id
          title
          lowerCaseTitle
          content
          createdByID
          careHomeID
          category
          media
          tags
          likes
          heartCount
          viewCount
          commentCount
          isPinned
          isAnnouncement
          mode
          status
          requiresApproval
          approvedAt
          approvedByID
          isDeleted
          createdAt
          updatedAt
          __typename
        }
        parentCommentID
        replies {
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
      nextToken
      __typename
    }
  }
`;
export const commentsByCommunityPost = /* GraphQL */ `
  query CommentsByCommunityPost(
    $postID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTerriiCommunityCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByCommunityPost(
      postID: $postID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        postID
        post {
          id
          title
          lowerCaseTitle
          content
          createdByID
          careHomeID
          category
          media
          tags
          likes
          heartCount
          viewCount
          commentCount
          isPinned
          isAnnouncement
          mode
          status
          requiresApproval
          approvedAt
          approvedByID
          isDeleted
          createdAt
          updatedAt
          __typename
        }
        parentCommentID
        replies {
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
      nextToken
      __typename
    }
  }
`;
export const communityCommentsByParent = /* GraphQL */ `
  query CommunityCommentsByParent(
    $parentCommentID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTerriiCommunityCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    communityCommentsByParent(
      parentCommentID: $parentCommentID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        postID
        post {
          id
          title
          lowerCaseTitle
          content
          createdByID
          careHomeID
          category
          media
          tags
          likes
          heartCount
          viewCount
          commentCount
          isPinned
          isAnnouncement
          mode
          status
          requiresApproval
          approvedAt
          approvedByID
          isDeleted
          createdAt
          updatedAt
          __typename
        }
        parentCommentID
        replies {
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
      nextToken
      __typename
    }
  }
`;
export const getTerriiInviteCode = /* GraphQL */ `
  query GetTerriiInviteCode($id: ID!) {
    getTerriiInviteCode(id: $id) {
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
export const listTerriiInviteCodes = /* GraphQL */ `
  query ListTerriiInviteCodes(
    $filter: ModelTerriiInviteCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerriiInviteCodes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMyFriendsUser = /* GraphQL */ `
  query GetMyFriendsUser($id: ID!) {
    getMyFriendsUser(id: $id) {
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
export const listMyFriendsUsers = /* GraphQL */ `
  query ListMyFriendsUsers(
    $filter: ModelMyFriendsUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyFriendsUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        myFriendsID
        userID
        myFriends {
          id
          status
          createdAt
          updatedAt
          __typename
        }
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserChatRoom = /* GraphQL */ `
  query GetUserChatRoom($id: ID!) {
    getUserChatRoom(id: $id) {
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
export const listUserChatRooms = /* GraphQL */ `
  query ListUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatRoomID
        userID
        chatRoom {
          id
          name
          image
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
