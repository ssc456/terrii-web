// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ExpoNotificationType = {
  "COMMUNITY_LIKE": "COMMUNITY_LIKE",
  "COMMUNITY_COMMENT": "COMMUNITY_COMMENT",
  "GROUP_INVITE": "GROUP_INVITE",
  "GUIDANCE_ARTICLE": "GUIDANCE_ARTICLE",
  "MESSAGE": "MESSAGE",
  "MANUAL": "MANUAL"
};

const CommunityNotificationType = {
  "GROUP_INVITE": "GROUP_INVITE",
  "POST_LIKE": "POST_LIKE",
  "POST_COMMENT": "POST_COMMENT",
  "GROUP_POST": "GROUP_POST"
};

const EnumStatuses = {
  "DRAFT": "DRAFT",
  "PUBLISHED": "PUBLISHED",
  "TESTING": "TESTING",
  "SCHEDULED": "SCHEDULED"
};

const EnumCommunityUserGroupRoles = {
  "USER": "USER",
  "GUEST": "GUEST",
  "ADMIN": "ADMIN",
  "OWNER": "OWNER"
};

const QuestionGroupType = {
  "ROADMAP": "ROADMAP",
  "GENERAL": "GENERAL"
};

const EnumUserTypes = {
  "ACECURA_ADMIN": "ACECURA_ADMIN",
  "APP_USER": "APP_USER",
  "TERRII_USER": "TERRII_USER"
};

const TerriiUserRole = {
  "ADMIN": "ADMIN",
  "CARE_STAFF": "CARE_STAFF",
  "MANAGER": "MANAGER"
};

const TerriiResidentStatus = {
  "STABLE": "STABLE",
  "CHECK": "CHECK",
  "URGENT": "URGENT"
};

const { MyChats, DebugInfo, MyFriends, ExpoNotifications, SystemInfo, CareHomes, UserExtendedInfo, CommunityUserNotifications, QuestionGroupTypes, CommunityUserGroupRoles, CommunityGroup, CommunityPostPollVotes, CommunityPostPoll, CommunityLikes, CommunityComment, CommunityPost, CalendarItemType, RoadMapItems, ManualNotificationsUser, ManualNotifications, QuestionAnswersUsers, QuestionAnswers, Questions, QuestionGroup, UserQuestionGroups, UserRoadmapItems, RoadmapGroup, Bookmarks, ActivityUserApp, GuidanceContent, GuidanceTypes, Guidance, Calendar, Articles, ChatRoom, Message, User, JournalEntry, CommunityEvent, CommunityEventAttendance, CommunityCommentLikes, CarePlanOutputs, TerriiCareHome, TerriiUserProfile, TerriiResident, TerriiResidentFamily, TerriiResidentMedical, TerriiResidentMedication, TerriiResidentCarePreferences, TerriiResidentActivity, TerriiResidentEmergencyContact, TerriiMessageThread, TerriiMessage, TerriiMoment, TerriiMomentComment, TerriiCommunityPost, TerriiCommunityComment, MyFriendsUser, UserChatRoom } = initSchema(schema);

export {
  MyChats,
  DebugInfo,
  MyFriends,
  ExpoNotifications,
  SystemInfo,
  CareHomes,
  UserExtendedInfo,
  CommunityUserNotifications,
  QuestionGroupTypes,
  CommunityUserGroupRoles,
  CommunityGroup,
  CommunityPostPollVotes,
  CommunityPostPoll,
  CommunityLikes,
  CommunityComment,
  CommunityPost,
  CalendarItemType,
  RoadMapItems,
  ManualNotificationsUser,
  ManualNotifications,
  QuestionAnswersUsers,
  QuestionAnswers,
  Questions,
  QuestionGroup,
  UserQuestionGroups,
  UserRoadmapItems,
  RoadmapGroup,
  Bookmarks,
  ActivityUserApp,
  GuidanceContent,
  GuidanceTypes,
  Guidance,
  Calendar,
  Articles,
  ChatRoom,
  Message,
  User,
  JournalEntry,
  CommunityEvent,
  CommunityEventAttendance,
  CommunityCommentLikes,
  CarePlanOutputs,
  TerriiCareHome,
  TerriiUserProfile,
  TerriiResident,
  TerriiResidentFamily,
  TerriiResidentMedical,
  TerriiResidentMedication,
  TerriiResidentCarePreferences,
  TerriiResidentActivity,
  TerriiResidentEmergencyContact,
  TerriiMessageThread,
  TerriiMessage,
  TerriiMoment,
  TerriiMomentComment,
  TerriiCommunityPost,
  TerriiCommunityComment,
  MyFriendsUser,
  UserChatRoom,
  ExpoNotificationType,
  CommunityNotificationType,
  EnumStatuses,
  EnumCommunityUserGroupRoles,
  QuestionGroupType,
  EnumUserTypes,
  TerriiUserRole,
  TerriiResidentStatus
};