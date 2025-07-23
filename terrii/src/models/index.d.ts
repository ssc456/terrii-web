import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum ExpoNotificationType {
  COMMUNITY_LIKE = "COMMUNITY_LIKE",
  COMMUNITY_COMMENT = "COMMUNITY_COMMENT",
  GROUP_INVITE = "GROUP_INVITE",
  GUIDANCE_ARTICLE = "GUIDANCE_ARTICLE",
  MESSAGE = "MESSAGE",
  MANUAL = "MANUAL"
}

export enum CommunityNotificationType {
  GROUP_INVITE = "GROUP_INVITE",
  POST_LIKE = "POST_LIKE",
  POST_COMMENT = "POST_COMMENT",
  GROUP_POST = "GROUP_POST"
}

export enum EnumStatuses {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  TESTING = "TESTING",
  SCHEDULED = "SCHEDULED"
}

export enum EnumCommunityUserGroupRoles {
  USER = "USER",
  GUEST = "GUEST",
  ADMIN = "ADMIN",
  OWNER = "OWNER"
}

export enum QuestionGroupType {
  ROADMAP = "ROADMAP",
  GENERAL = "GENERAL"
}

export enum EnumUserTypes {
  ACECURA_ADMIN = "ACECURA_ADMIN",
  APP_USER = "APP_USER",
  TERRII_USER = "TERRII_USER"
}

export enum TerriiUserRole {
  ADMIN = "ADMIN",
  CARE_STAFF = "CARE_STAFF",
  MANAGER = "MANAGER",
  FAMILY = "FAMILY"
}

export enum TerriiResidentStatus {
  STABLE = "STABLE",
  CHECK = "CHECK",
  URGENT = "URGENT"
}

type MyChatsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DebugInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MyFriendsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExpoNotificationsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SystemInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CareHomesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserExtendedInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommunityUserNotificationsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuestionGroupTypesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommunityUserGroupRolesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommunityGroupMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommunityPostPollVotesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommunityPostPollMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommunityLikesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommunityCommentMetaData = {
  readOnlyFields: 'updatedAt';
}

type CommunityPostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CalendarItemTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RoadMapItemsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ManualNotificationsUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ManualNotificationsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuestionAnswersUsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuestionAnswersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuestionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuestionGroupMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserQuestionGroupsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserRoadmapItemsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RoadmapGroupMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BookmarksMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ActivityUserAppMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GuidanceContentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GuidanceTypesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GuidanceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CalendarMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ArticlesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatRoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageMetaData = {
  readOnlyFields: 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JournalEntryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommunityEventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommunityEventAttendanceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommunityCommentLikesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CarePlanOutputsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}































type MyFriendsUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserChatRoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerMyChats = {
  readonly id: string;
  readonly unreadMessages?: boolean | null;
  readonly lastMessageDateTime?: string | null;
  readonly lastMessage?: string | null;
  readonly chatName?: string | null;
  readonly User?: User | null;
  readonly ChatRoom?: ChatRoom | null;
  readonly chatImageS3URL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly myChatsUserId?: string | null;
  readonly myChatsChatRoomId?: string | null;
}

type LazyMyChats = {
  readonly id: string;
  readonly unreadMessages?: boolean | null;
  readonly lastMessageDateTime?: string | null;
  readonly lastMessage?: string | null;
  readonly chatName?: string | null;
  readonly User: AsyncItem<User | undefined>;
  readonly ChatRoom: AsyncItem<ChatRoom | undefined>;
  readonly chatImageS3URL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly myChatsUserId?: string | null;
  readonly myChatsChatRoomId?: string | null;
}

export declare type MyChats = LazyLoading extends LazyLoadingDisabled ? EagerMyChats : LazyMyChats

export declare const MyChats: (new (init: ModelInit<MyChats, MyChatsMetaData>) => MyChats) & {
  copyOf(source: MyChats, mutator: (draft: MutableModel<MyChats, MyChatsMetaData>) => MutableModel<MyChats, MyChatsMetaData> | void): MyChats;
}

type EagerDebugInfo = {
  readonly id: string;
  readonly user?: string | null;
  readonly Logging?: string | null;
  readonly Test?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDebugInfo = {
  readonly id: string;
  readonly user?: string | null;
  readonly Logging?: string | null;
  readonly Test?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DebugInfo = LazyLoading extends LazyLoadingDisabled ? EagerDebugInfo : LazyDebugInfo

export declare const DebugInfo: (new (init: ModelInit<DebugInfo, DebugInfoMetaData>) => DebugInfo) & {
  copyOf(source: DebugInfo, mutator: (draft: MutableModel<DebugInfo, DebugInfoMetaData>) => MutableModel<DebugInfo, DebugInfoMetaData> | void): DebugInfo;
}

type EagerMyFriends = {
  readonly id: string;
  readonly status?: string | null;
  readonly Users?: (MyFriendsUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMyFriends = {
  readonly id: string;
  readonly status?: string | null;
  readonly Users: AsyncCollection<MyFriendsUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MyFriends = LazyLoading extends LazyLoadingDisabled ? EagerMyFriends : LazyMyFriends

export declare const MyFriends: (new (init: ModelInit<MyFriends, MyFriendsMetaData>) => MyFriends) & {
  copyOf(source: MyFriends, mutator: (draft: MutableModel<MyFriends, MyFriendsMetaData>) => MutableModel<MyFriends, MyFriendsMetaData> | void): MyFriends;
}

type EagerExpoNotifications = {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly seen?: string | null;
  readonly data?: string | null;
  readonly User?: User | null;
  readonly CommunityPost?: CommunityPost | null;
  readonly CommunityComment?: CommunityComment | null;
  readonly CommunityLikes?: CommunityLikes | null;
  readonly Guidance?: Guidance | null;
  readonly NotificationType?: ExpoNotificationType | keyof typeof ExpoNotificationType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly expoNotificationsUserId?: string | null;
  readonly expoNotificationsCommunityPostId?: string | null;
  readonly expoNotificationsCommunityCommentId?: string | null;
  readonly expoNotificationsCommunityLikesId?: string | null;
  readonly expoNotificationsGuidanceId?: string | null;
}

type LazyExpoNotifications = {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly seen?: string | null;
  readonly data?: string | null;
  readonly User: AsyncItem<User | undefined>;
  readonly CommunityPost: AsyncItem<CommunityPost | undefined>;
  readonly CommunityComment: AsyncItem<CommunityComment | undefined>;
  readonly CommunityLikes: AsyncItem<CommunityLikes | undefined>;
  readonly Guidance: AsyncItem<Guidance | undefined>;
  readonly NotificationType?: ExpoNotificationType | keyof typeof ExpoNotificationType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly expoNotificationsUserId?: string | null;
  readonly expoNotificationsCommunityPostId?: string | null;
  readonly expoNotificationsCommunityCommentId?: string | null;
  readonly expoNotificationsCommunityLikesId?: string | null;
  readonly expoNotificationsGuidanceId?: string | null;
}

export declare type ExpoNotifications = LazyLoading extends LazyLoadingDisabled ? EagerExpoNotifications : LazyExpoNotifications

export declare const ExpoNotifications: (new (init: ModelInit<ExpoNotifications, ExpoNotificationsMetaData>) => ExpoNotifications) & {
  copyOf(source: ExpoNotifications, mutator: (draft: MutableModel<ExpoNotifications, ExpoNotificationsMetaData>) => MutableModel<ExpoNotifications, ExpoNotificationsMetaData> | void): ExpoNotifications;
}

type EagerSystemInfo = {
  readonly id: string;
  readonly name?: string | null;
  readonly value?: string | null;
  readonly options?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySystemInfo = {
  readonly id: string;
  readonly name?: string | null;
  readonly value?: string | null;
  readonly options?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SystemInfo = LazyLoading extends LazyLoadingDisabled ? EagerSystemInfo : LazySystemInfo

export declare const SystemInfo: (new (init: ModelInit<SystemInfo, SystemInfoMetaData>) => SystemInfo) & {
  copyOf(source: SystemInfo, mutator: (draft: MutableModel<SystemInfo, SystemInfoMetaData>) => MutableModel<SystemInfo, SystemInfoMetaData> | void): SystemInfo;
}

type EagerCareHomes = {
  readonly id: string;
  readonly LocationID?: string | null;
  readonly Name?: string | null;
  readonly CareHome?: string | null;
  readonly Type?: string | null;
  readonly Category?: string | null;
  readonly Address1?: string | null;
  readonly Address2?: string | null;
  readonly City?: string | null;
  readonly PostCode?: string | null;
  readonly LocalAuthority?: string | null;
  readonly Region?: string | null;
  readonly ServiceGroup?: string | null;
  readonly CQCURL?: string | null;
  readonly ProviderID?: string | null;
  readonly ProviderName?: string | null;
  readonly RatingCaring?: string | null;
  readonly RatingEffective?: string | null;
  readonly RatingResponsive?: string | null;
  readonly RatingSafe?: string | null;
  readonly RatingWellLed?: string | null;
  readonly RatingOverall?: string | null;
  readonly NHSRegion?: string | null;
  readonly ReportDate?: string | null;
  readonly iRatingCaring?: number | null;
  readonly iRatingEffective?: number | null;
  readonly iRatingResponsive?: number | null;
  readonly iRatingSafe?: number | null;
  readonly iRatingWellLed?: number | null;
  readonly iRatingOverall?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCareHomes = {
  readonly id: string;
  readonly LocationID?: string | null;
  readonly Name?: string | null;
  readonly CareHome?: string | null;
  readonly Type?: string | null;
  readonly Category?: string | null;
  readonly Address1?: string | null;
  readonly Address2?: string | null;
  readonly City?: string | null;
  readonly PostCode?: string | null;
  readonly LocalAuthority?: string | null;
  readonly Region?: string | null;
  readonly ServiceGroup?: string | null;
  readonly CQCURL?: string | null;
  readonly ProviderID?: string | null;
  readonly ProviderName?: string | null;
  readonly RatingCaring?: string | null;
  readonly RatingEffective?: string | null;
  readonly RatingResponsive?: string | null;
  readonly RatingSafe?: string | null;
  readonly RatingWellLed?: string | null;
  readonly RatingOverall?: string | null;
  readonly NHSRegion?: string | null;
  readonly ReportDate?: string | null;
  readonly iRatingCaring?: number | null;
  readonly iRatingEffective?: number | null;
  readonly iRatingResponsive?: number | null;
  readonly iRatingSafe?: number | null;
  readonly iRatingWellLed?: number | null;
  readonly iRatingOverall?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CareHomes = LazyLoading extends LazyLoadingDisabled ? EagerCareHomes : LazyCareHomes

export declare const CareHomes: (new (init: ModelInit<CareHomes, CareHomesMetaData>) => CareHomes) & {
  copyOf(source: CareHomes, mutator: (draft: MutableModel<CareHomes, CareHomesMetaData>) => MutableModel<CareHomes, CareHomesMetaData> | void): CareHomes;
}

type EagerUserExtendedInfo = {
  readonly id: string;
  readonly field?: string | null;
  readonly value?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserExtendedInfo = {
  readonly id: string;
  readonly field?: string | null;
  readonly value?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserExtendedInfo = LazyLoading extends LazyLoadingDisabled ? EagerUserExtendedInfo : LazyUserExtendedInfo

export declare const UserExtendedInfo: (new (init: ModelInit<UserExtendedInfo, UserExtendedInfoMetaData>) => UserExtendedInfo) & {
  copyOf(source: UserExtendedInfo, mutator: (draft: MutableModel<UserExtendedInfo, UserExtendedInfoMetaData>) => MutableModel<UserExtendedInfo, UserExtendedInfoMetaData> | void): UserExtendedInfo;
}

type EagerCommunityUserNotifications = {
  readonly id: string;
  readonly NotificationType?: CommunityNotificationType | keyof typeof CommunityNotificationType | null;
  readonly User?: User | null;
  readonly CommunityLikes?: CommunityLikes | null;
  readonly CommunityComment?: CommunityComment | null;
  readonly seen?: boolean | null;
  readonly CommunityGroup?: CommunityGroup | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly communityUserNotificationsUserId?: string | null;
  readonly communityUserNotificationsCommunityLikesId?: string | null;
  readonly communityUserNotificationsCommunityCommentId?: string | null;
  readonly communityUserNotificationsCommunityGroupId?: string | null;
}

type LazyCommunityUserNotifications = {
  readonly id: string;
  readonly NotificationType?: CommunityNotificationType | keyof typeof CommunityNotificationType | null;
  readonly User: AsyncItem<User | undefined>;
  readonly CommunityLikes: AsyncItem<CommunityLikes | undefined>;
  readonly CommunityComment: AsyncItem<CommunityComment | undefined>;
  readonly seen?: boolean | null;
  readonly CommunityGroup: AsyncItem<CommunityGroup | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly communityUserNotificationsUserId?: string | null;
  readonly communityUserNotificationsCommunityLikesId?: string | null;
  readonly communityUserNotificationsCommunityCommentId?: string | null;
  readonly communityUserNotificationsCommunityGroupId?: string | null;
}

export declare type CommunityUserNotifications = LazyLoading extends LazyLoadingDisabled ? EagerCommunityUserNotifications : LazyCommunityUserNotifications

export declare const CommunityUserNotifications: (new (init: ModelInit<CommunityUserNotifications, CommunityUserNotificationsMetaData>) => CommunityUserNotifications) & {
  copyOf(source: CommunityUserNotifications, mutator: (draft: MutableModel<CommunityUserNotifications, CommunityUserNotificationsMetaData>) => MutableModel<CommunityUserNotifications, CommunityUserNotificationsMetaData> | void): CommunityUserNotifications;
}

type EagerQuestionGroupTypes = {
  readonly id: string;
  readonly name?: string | null;
  readonly iconS3URL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestionGroupTypes = {
  readonly id: string;
  readonly name?: string | null;
  readonly iconS3URL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type QuestionGroupTypes = LazyLoading extends LazyLoadingDisabled ? EagerQuestionGroupTypes : LazyQuestionGroupTypes

export declare const QuestionGroupTypes: (new (init: ModelInit<QuestionGroupTypes, QuestionGroupTypesMetaData>) => QuestionGroupTypes) & {
  copyOf(source: QuestionGroupTypes, mutator: (draft: MutableModel<QuestionGroupTypes, QuestionGroupTypesMetaData>) => MutableModel<QuestionGroupTypes, QuestionGroupTypesMetaData> | void): QuestionGroupTypes;
}

type EagerCommunityUserGroupRoles = {
  readonly id: string;
  readonly userGroupRole?: EnumCommunityUserGroupRoles | keyof typeof EnumCommunityUserGroupRoles | null;
  readonly User?: User | null;
  readonly CommunityGroup?: CommunityGroup | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly communityUserGroupRolesUserId?: string | null;
  readonly communityUserGroupRolesCommunityGroupId?: string | null;
}

type LazyCommunityUserGroupRoles = {
  readonly id: string;
  readonly userGroupRole?: EnumCommunityUserGroupRoles | keyof typeof EnumCommunityUserGroupRoles | null;
  readonly User: AsyncItem<User | undefined>;
  readonly CommunityGroup: AsyncItem<CommunityGroup | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly communityUserGroupRolesUserId?: string | null;
  readonly communityUserGroupRolesCommunityGroupId?: string | null;
}

export declare type CommunityUserGroupRoles = LazyLoading extends LazyLoadingDisabled ? EagerCommunityUserGroupRoles : LazyCommunityUserGroupRoles

export declare const CommunityUserGroupRoles: (new (init: ModelInit<CommunityUserGroupRoles, CommunityUserGroupRolesMetaData>) => CommunityUserGroupRoles) & {
  copyOf(source: CommunityUserGroupRoles, mutator: (draft: MutableModel<CommunityUserGroupRoles, CommunityUserGroupRolesMetaData>) => MutableModel<CommunityUserGroupRoles, CommunityUserGroupRolesMetaData> | void): CommunityUserGroupRoles;
}

type EagerCommunityGroup = {
  readonly id: string;
  readonly CommunityPosts?: (CommunityPost | null)[] | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly imageS3Key?: string | null;
  readonly headerS3Key?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommunityGroup = {
  readonly id: string;
  readonly CommunityPosts: AsyncCollection<CommunityPost>;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly imageS3Key?: string | null;
  readonly headerS3Key?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommunityGroup = LazyLoading extends LazyLoadingDisabled ? EagerCommunityGroup : LazyCommunityGroup

export declare const CommunityGroup: (new (init: ModelInit<CommunityGroup, CommunityGroupMetaData>) => CommunityGroup) & {
  copyOf(source: CommunityGroup, mutator: (draft: MutableModel<CommunityGroup, CommunityGroupMetaData>) => MutableModel<CommunityGroup, CommunityGroupMetaData> | void): CommunityGroup;
}

type EagerCommunityPostPollVotes = {
  readonly id: string;
  readonly User?: User | null;
  readonly communitypostpollID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly communityPostPollVotesUserId?: string | null;
}

type LazyCommunityPostPollVotes = {
  readonly id: string;
  readonly User: AsyncItem<User | undefined>;
  readonly communitypostpollID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly communityPostPollVotesUserId?: string | null;
}

export declare type CommunityPostPollVotes = LazyLoading extends LazyLoadingDisabled ? EagerCommunityPostPollVotes : LazyCommunityPostPollVotes

export declare const CommunityPostPollVotes: (new (init: ModelInit<CommunityPostPollVotes, CommunityPostPollVotesMetaData>) => CommunityPostPollVotes) & {
  copyOf(source: CommunityPostPollVotes, mutator: (draft: MutableModel<CommunityPostPollVotes, CommunityPostPollVotesMetaData>) => MutableModel<CommunityPostPollVotes, CommunityPostPollVotesMetaData> | void): CommunityPostPollVotes;
}

type EagerCommunityPostPoll = {
  readonly id: string;
  readonly text?: string | null;
  readonly CommunityPostPollVotes?: (CommunityPostPollVotes | null)[] | null;
  readonly communitypostID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommunityPostPoll = {
  readonly id: string;
  readonly text?: string | null;
  readonly CommunityPostPollVotes: AsyncCollection<CommunityPostPollVotes>;
  readonly communitypostID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommunityPostPoll = LazyLoading extends LazyLoadingDisabled ? EagerCommunityPostPoll : LazyCommunityPostPoll

export declare const CommunityPostPoll: (new (init: ModelInit<CommunityPostPoll, CommunityPostPollMetaData>) => CommunityPostPoll) & {
  copyOf(source: CommunityPostPoll, mutator: (draft: MutableModel<CommunityPostPoll, CommunityPostPollMetaData>) => MutableModel<CommunityPostPoll, CommunityPostPollMetaData> | void): CommunityPostPoll;
}

type EagerCommunityLikes = {
  readonly id: string;
  readonly User?: User | null;
  readonly communitypostID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly communityLikesUserId?: string | null;
}

type LazyCommunityLikes = {
  readonly id: string;
  readonly User: AsyncItem<User | undefined>;
  readonly communitypostID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly communityLikesUserId?: string | null;
}

export declare type CommunityLikes = LazyLoading extends LazyLoadingDisabled ? EagerCommunityLikes : LazyCommunityLikes

export declare const CommunityLikes: (new (init: ModelInit<CommunityLikes, CommunityLikesMetaData>) => CommunityLikes) & {
  copyOf(source: CommunityLikes, mutator: (draft: MutableModel<CommunityLikes, CommunityLikesMetaData>) => MutableModel<CommunityLikes, CommunityLikesMetaData> | void): CommunityLikes;
}

type EagerCommunityComment = {
  readonly id: string;
  readonly text?: string | null;
  readonly likes?: string | null;
  readonly User?: User | null;
  readonly communitypostID: string;
  readonly communityCommentUserId?: string | null;
  readonly createdAt?: string | null;
  readonly parentCommentID?: string | null;
  readonly replies?: (CommunityComment | null)[] | null;
  readonly CommunityCommentLikes?: (CommunityCommentLikes | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyCommunityComment = {
  readonly id: string;
  readonly text?: string | null;
  readonly likes?: string | null;
  readonly User: AsyncItem<User | undefined>;
  readonly communitypostID: string;
  readonly communityCommentUserId?: string | null;
  readonly createdAt?: string | null;
  readonly parentCommentID?: string | null;
  readonly replies: AsyncCollection<CommunityComment>;
  readonly CommunityCommentLikes: AsyncCollection<CommunityCommentLikes>;
  readonly updatedAt?: string | null;
}

export declare type CommunityComment = LazyLoading extends LazyLoadingDisabled ? EagerCommunityComment : LazyCommunityComment

export declare const CommunityComment: (new (init: ModelInit<CommunityComment, CommunityCommentMetaData>) => CommunityComment) & {
  copyOf(source: CommunityComment, mutator: (draft: MutableModel<CommunityComment, CommunityCommentMetaData>) => MutableModel<CommunityComment, CommunityCommentMetaData> | void): CommunityComment;
}

type EagerCommunityPost = {
  readonly id: string;
  readonly text?: string | null;
  readonly mediaS3Key?: string | null;
  readonly dateTime: string;
  readonly User?: User | null;
  readonly CommunityComments?: (CommunityComment | null)[] | null;
  readonly CommunityLikes?: (CommunityLikes | null)[] | null;
  readonly CommunityPostPoll?: (CommunityPostPoll | null)[] | null;
  readonly communitygroupID: string;
  readonly Guidance?: Guidance | null;
  readonly needsModeration?: boolean | null;
  readonly moderationLabel?: string | null;
  readonly moderationScore?: number | null;
  readonly isScheduled?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly communityPostUserId?: string | null;
  readonly communityPostGuidanceId?: string | null;
}

type LazyCommunityPost = {
  readonly id: string;
  readonly text?: string | null;
  readonly mediaS3Key?: string | null;
  readonly dateTime: string;
  readonly User: AsyncItem<User | undefined>;
  readonly CommunityComments: AsyncCollection<CommunityComment>;
  readonly CommunityLikes: AsyncCollection<CommunityLikes>;
  readonly CommunityPostPoll: AsyncCollection<CommunityPostPoll>;
  readonly communitygroupID: string;
  readonly Guidance: AsyncItem<Guidance | undefined>;
  readonly needsModeration?: boolean | null;
  readonly moderationLabel?: string | null;
  readonly moderationScore?: number | null;
  readonly isScheduled?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly communityPostUserId?: string | null;
  readonly communityPostGuidanceId?: string | null;
}

export declare type CommunityPost = LazyLoading extends LazyLoadingDisabled ? EagerCommunityPost : LazyCommunityPost

export declare const CommunityPost: (new (init: ModelInit<CommunityPost, CommunityPostMetaData>) => CommunityPost) & {
  copyOf(source: CommunityPost, mutator: (draft: MutableModel<CommunityPost, CommunityPostMetaData>) => MutableModel<CommunityPost, CommunityPostMetaData> | void): CommunityPost;
}

type EagerCalendarItemType = {
  readonly id: string;
  readonly name?: string | null;
  readonly colour?: string | null;
  readonly deleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCalendarItemType = {
  readonly id: string;
  readonly name?: string | null;
  readonly colour?: string | null;
  readonly deleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CalendarItemType = LazyLoading extends LazyLoadingDisabled ? EagerCalendarItemType : LazyCalendarItemType

export declare const CalendarItemType: (new (init: ModelInit<CalendarItemType, CalendarItemTypeMetaData>) => CalendarItemType) & {
  copyOf(source: CalendarItemType, mutator: (draft: MutableModel<CalendarItemType, CalendarItemTypeMetaData>) => MutableModel<CalendarItemType, CalendarItemTypeMetaData> | void): CalendarItemType;
}

type EagerRoadMapItems = {
  readonly id: string;
  readonly text?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRoadMapItems = {
  readonly id: string;
  readonly text?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RoadMapItems = LazyLoading extends LazyLoadingDisabled ? EagerRoadMapItems : LazyRoadMapItems

export declare const RoadMapItems: (new (init: ModelInit<RoadMapItems, RoadMapItemsMetaData>) => RoadMapItems) & {
  copyOf(source: RoadMapItems, mutator: (draft: MutableModel<RoadMapItems, RoadMapItemsMetaData>) => MutableModel<RoadMapItems, RoadMapItemsMetaData> | void): RoadMapItems;
}

type EagerManualNotificationsUser = {
  readonly id: string;
  readonly User?: User | null;
  readonly seen?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly manualNotificationsUserUserId?: string | null;
}

type LazyManualNotificationsUser = {
  readonly id: string;
  readonly User: AsyncItem<User | undefined>;
  readonly seen?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly manualNotificationsUserUserId?: string | null;
}

export declare type ManualNotificationsUser = LazyLoading extends LazyLoadingDisabled ? EagerManualNotificationsUser : LazyManualNotificationsUser

export declare const ManualNotificationsUser: (new (init: ModelInit<ManualNotificationsUser, ManualNotificationsUserMetaData>) => ManualNotificationsUser) & {
  copyOf(source: ManualNotificationsUser, mutator: (draft: MutableModel<ManualNotificationsUser, ManualNotificationsUserMetaData>) => MutableModel<ManualNotificationsUser, ManualNotificationsUserMetaData> | void): ManualNotificationsUser;
}

type EagerManualNotifications = {
  readonly id: string;
  readonly title?: string | null;
  readonly shortText?: string | null;
  readonly Guidance?: Guidance | null;
  readonly ManualNotificationsUser?: ManualNotificationsUser | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly manualNotificationsGuidanceId?: string | null;
  readonly manualNotificationsManualNotificationsUserId?: string | null;
}

type LazyManualNotifications = {
  readonly id: string;
  readonly title?: string | null;
  readonly shortText?: string | null;
  readonly Guidance: AsyncItem<Guidance | undefined>;
  readonly ManualNotificationsUser: AsyncItem<ManualNotificationsUser | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly manualNotificationsGuidanceId?: string | null;
  readonly manualNotificationsManualNotificationsUserId?: string | null;
}

export declare type ManualNotifications = LazyLoading extends LazyLoadingDisabled ? EagerManualNotifications : LazyManualNotifications

export declare const ManualNotifications: (new (init: ModelInit<ManualNotifications, ManualNotificationsMetaData>) => ManualNotifications) & {
  copyOf(source: ManualNotifications, mutator: (draft: MutableModel<ManualNotifications, ManualNotificationsMetaData>) => MutableModel<ManualNotifications, ManualNotificationsMetaData> | void): ManualNotifications;
}

type EagerQuestionAnswersUsers = {
  readonly id: string;
  readonly User?: User | null;
  readonly QuestionAnswers?: QuestionAnswers | null;
  readonly Questions?: Questions | null;
  readonly freeText?: string | null;
  readonly complete?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly questionAnswersUsersUserId?: string | null;
  readonly questionAnswersUsersQuestionAnswersId?: string | null;
  readonly questionAnswersUsersQuestionsId?: string | null;
}

type LazyQuestionAnswersUsers = {
  readonly id: string;
  readonly User: AsyncItem<User | undefined>;
  readonly QuestionAnswers: AsyncItem<QuestionAnswers | undefined>;
  readonly Questions: AsyncItem<Questions | undefined>;
  readonly freeText?: string | null;
  readonly complete?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly questionAnswersUsersUserId?: string | null;
  readonly questionAnswersUsersQuestionAnswersId?: string | null;
  readonly questionAnswersUsersQuestionsId?: string | null;
}

export declare type QuestionAnswersUsers = LazyLoading extends LazyLoadingDisabled ? EagerQuestionAnswersUsers : LazyQuestionAnswersUsers

export declare const QuestionAnswersUsers: (new (init: ModelInit<QuestionAnswersUsers, QuestionAnswersUsersMetaData>) => QuestionAnswersUsers) & {
  copyOf(source: QuestionAnswersUsers, mutator: (draft: MutableModel<QuestionAnswersUsers, QuestionAnswersUsersMetaData>) => MutableModel<QuestionAnswersUsers, QuestionAnswersUsersMetaData> | void): QuestionAnswersUsers;
}

type EagerQuestionAnswers = {
  readonly id: string;
  readonly answer?: string | null;
  readonly helpText?: string | null;
  readonly Questions?: Questions | null;
  readonly nextQuestionID?: string | null;
  readonly deleted?: boolean | null;
  readonly GuidanceContent?: Guidance | null;
  readonly RoadMapItems?: RoadMapItems | null;
  readonly QuestionGroup?: QuestionGroup | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly questionAnswersQuestionsId?: string | null;
  readonly questionAnswersGuidanceContentId?: string | null;
  readonly questionAnswersRoadMapItemsId?: string | null;
  readonly questionAnswersQuestionGroupId?: string | null;
}

type LazyQuestionAnswers = {
  readonly id: string;
  readonly answer?: string | null;
  readonly helpText?: string | null;
  readonly Questions: AsyncItem<Questions | undefined>;
  readonly nextQuestionID?: string | null;
  readonly deleted?: boolean | null;
  readonly GuidanceContent: AsyncItem<Guidance | undefined>;
  readonly RoadMapItems: AsyncItem<RoadMapItems | undefined>;
  readonly QuestionGroup: AsyncItem<QuestionGroup | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly questionAnswersQuestionsId?: string | null;
  readonly questionAnswersGuidanceContentId?: string | null;
  readonly questionAnswersRoadMapItemsId?: string | null;
  readonly questionAnswersQuestionGroupId?: string | null;
}

export declare type QuestionAnswers = LazyLoading extends LazyLoadingDisabled ? EagerQuestionAnswers : LazyQuestionAnswers

export declare const QuestionAnswers: (new (init: ModelInit<QuestionAnswers, QuestionAnswersMetaData>) => QuestionAnswers) & {
  copyOf(source: QuestionAnswers, mutator: (draft: MutableModel<QuestionAnswers, QuestionAnswersMetaData>) => MutableModel<QuestionAnswers, QuestionAnswersMetaData> | void): QuestionAnswers;
}

type EagerQuestions = {
  readonly id: string;
  readonly question?: string | null;
  readonly helpText?: string | null;
  readonly QuestionGroup?: QuestionGroup | null;
  readonly deleted?: boolean | null;
  readonly isFirstQuestion?: boolean | null;
  readonly questionNumber?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly questionsQuestionGroupId?: string | null;
}

type LazyQuestions = {
  readonly id: string;
  readonly question?: string | null;
  readonly helpText?: string | null;
  readonly QuestionGroup: AsyncItem<QuestionGroup | undefined>;
  readonly deleted?: boolean | null;
  readonly isFirstQuestion?: boolean | null;
  readonly questionNumber?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly questionsQuestionGroupId?: string | null;
}

export declare type Questions = LazyLoading extends LazyLoadingDisabled ? EagerQuestions : LazyQuestions

export declare const Questions: (new (init: ModelInit<Questions, QuestionsMetaData>) => Questions) & {
  copyOf(source: Questions, mutator: (draft: MutableModel<Questions, QuestionsMetaData>) => MutableModel<Questions, QuestionsMetaData> | void): Questions;
}

type EagerQuestionGroup = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly imageS3ObjectKey?: string | null;
  readonly deleted?: boolean | null;
  readonly type?: QuestionGroupType | keyof typeof QuestionGroupType | null;
  readonly status?: EnumStatuses | keyof typeof EnumStatuses | null;
  readonly QuestionGroupTypes?: QuestionGroupTypes | null;
  readonly groupLevel?: number | null;
  readonly RoadmapGroup?: RoadmapGroup | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly questionGroupQuestionGroupTypesId?: string | null;
  readonly questionGroupRoadmapGroupId?: string | null;
}

type LazyQuestionGroup = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly imageS3ObjectKey?: string | null;
  readonly deleted?: boolean | null;
  readonly type?: QuestionGroupType | keyof typeof QuestionGroupType | null;
  readonly status?: EnumStatuses | keyof typeof EnumStatuses | null;
  readonly QuestionGroupTypes: AsyncItem<QuestionGroupTypes | undefined>;
  readonly groupLevel?: number | null;
  readonly RoadmapGroup: AsyncItem<RoadmapGroup | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly questionGroupQuestionGroupTypesId?: string | null;
  readonly questionGroupRoadmapGroupId?: string | null;
}

export declare type QuestionGroup = LazyLoading extends LazyLoadingDisabled ? EagerQuestionGroup : LazyQuestionGroup

export declare const QuestionGroup: (new (init: ModelInit<QuestionGroup, QuestionGroupMetaData>) => QuestionGroup) & {
  copyOf(source: QuestionGroup, mutator: (draft: MutableModel<QuestionGroup, QuestionGroupMetaData>) => MutableModel<QuestionGroup, QuestionGroupMetaData> | void): QuestionGroup;
}

type EagerUserQuestionGroups = {
  readonly id: string;
  readonly User?: User | null;
  readonly QuestionGroup?: QuestionGroup | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userQuestionGroupsUserId?: string | null;
  readonly userQuestionGroupsQuestionGroupId?: string | null;
}

type LazyUserQuestionGroups = {
  readonly id: string;
  readonly User: AsyncItem<User | undefined>;
  readonly QuestionGroup: AsyncItem<QuestionGroup | undefined>;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userQuestionGroupsUserId?: string | null;
  readonly userQuestionGroupsQuestionGroupId?: string | null;
}

export declare type UserQuestionGroups = LazyLoading extends LazyLoadingDisabled ? EagerUserQuestionGroups : LazyUserQuestionGroups

export declare const UserQuestionGroups: (new (init: ModelInit<UserQuestionGroups, UserQuestionGroupsMetaData>) => UserQuestionGroups) & {
  copyOf(source: UserQuestionGroups, mutator: (draft: MutableModel<UserQuestionGroups, UserQuestionGroupsMetaData>) => MutableModel<UserQuestionGroups, UserQuestionGroupsMetaData> | void): UserQuestionGroups;
}

type EagerUserRoadmapItems = {
  readonly id: string;
  readonly User?: User | null;
  readonly RoadmapGroup?: RoadmapGroup | null;
  readonly RoadMapItems?: RoadMapItems | null;
  readonly Questions?: Questions | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userRoadmapItemsUserId?: string | null;
  readonly userRoadmapItemsRoadmapGroupId?: string | null;
  readonly userRoadmapItemsRoadMapItemsId?: string | null;
  readonly userRoadmapItemsQuestionsId?: string | null;
}

type LazyUserRoadmapItems = {
  readonly id: string;
  readonly User: AsyncItem<User | undefined>;
  readonly RoadmapGroup: AsyncItem<RoadmapGroup | undefined>;
  readonly RoadMapItems: AsyncItem<RoadMapItems | undefined>;
  readonly Questions: AsyncItem<Questions | undefined>;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userRoadmapItemsUserId?: string | null;
  readonly userRoadmapItemsRoadmapGroupId?: string | null;
  readonly userRoadmapItemsRoadMapItemsId?: string | null;
  readonly userRoadmapItemsQuestionsId?: string | null;
}

export declare type UserRoadmapItems = LazyLoading extends LazyLoadingDisabled ? EagerUserRoadmapItems : LazyUserRoadmapItems

export declare const UserRoadmapItems: (new (init: ModelInit<UserRoadmapItems, UserRoadmapItemsMetaData>) => UserRoadmapItems) & {
  copyOf(source: UserRoadmapItems, mutator: (draft: MutableModel<UserRoadmapItems, UserRoadmapItemsMetaData>) => MutableModel<UserRoadmapItems, UserRoadmapItemsMetaData> | void): UserRoadmapItems;
}

type EagerRoadmapGroup = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly imageS3ObjectKey?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRoadmapGroup = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly imageS3ObjectKey?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RoadmapGroup = LazyLoading extends LazyLoadingDisabled ? EagerRoadmapGroup : LazyRoadmapGroup

export declare const RoadmapGroup: (new (init: ModelInit<RoadmapGroup, RoadmapGroupMetaData>) => RoadmapGroup) & {
  copyOf(source: RoadmapGroup, mutator: (draft: MutableModel<RoadmapGroup, RoadmapGroupMetaData>) => MutableModel<RoadmapGroup, RoadmapGroupMetaData> | void): RoadmapGroup;
}

type EagerBookmarks = {
  readonly id: string;
  readonly User?: User | null;
  readonly Guidance?: Guidance | null;
  readonly deleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bookmarksUserId?: string | null;
  readonly bookmarksGuidanceId?: string | null;
}

type LazyBookmarks = {
  readonly id: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Guidance: AsyncItem<Guidance | undefined>;
  readonly deleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bookmarksUserId?: string | null;
  readonly bookmarksGuidanceId?: string | null;
}

export declare type Bookmarks = LazyLoading extends LazyLoadingDisabled ? EagerBookmarks : LazyBookmarks

export declare const Bookmarks: (new (init: ModelInit<Bookmarks, BookmarksMetaData>) => Bookmarks) & {
  copyOf(source: Bookmarks, mutator: (draft: MutableModel<Bookmarks, BookmarksMetaData>) => MutableModel<Bookmarks, BookmarksMetaData> | void): Bookmarks;
}

type EagerActivityUserApp = {
  readonly id: string;
  readonly section?: string | null;
  readonly page?: string | null;
  readonly details?: string | null;
  readonly userGUID?: string | null;
  readonly userEmail?: string | null;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly activityUserAppUserId?: string | null;
}

type LazyActivityUserApp = {
  readonly id: string;
  readonly section?: string | null;
  readonly page?: string | null;
  readonly details?: string | null;
  readonly userGUID?: string | null;
  readonly userEmail?: string | null;
  readonly User: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly activityUserAppUserId?: string | null;
}

export declare type ActivityUserApp = LazyLoading extends LazyLoadingDisabled ? EagerActivityUserApp : LazyActivityUserApp

export declare const ActivityUserApp: (new (init: ModelInit<ActivityUserApp, ActivityUserAppMetaData>) => ActivityUserApp) & {
  copyOf(source: ActivityUserApp, mutator: (draft: MutableModel<ActivityUserApp, ActivityUserAppMetaData>) => MutableModel<ActivityUserApp, ActivityUserAppMetaData> | void): ActivityUserApp;
}

type EagerGuidanceContent = {
  readonly id: string;
  readonly title?: string | null;
  readonly guidanceID: string;
  readonly content?: string | null;
  readonly link?: string | null;
  readonly order: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGuidanceContent = {
  readonly id: string;
  readonly title?: string | null;
  readonly guidanceID: string;
  readonly content?: string | null;
  readonly link?: string | null;
  readonly order: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GuidanceContent = LazyLoading extends LazyLoadingDisabled ? EagerGuidanceContent : LazyGuidanceContent

export declare const GuidanceContent: (new (init: ModelInit<GuidanceContent, GuidanceContentMetaData>) => GuidanceContent) & {
  copyOf(source: GuidanceContent, mutator: (draft: MutableModel<GuidanceContent, GuidanceContentMetaData>) => MutableModel<GuidanceContent, GuidanceContentMetaData> | void): GuidanceContent;
}

type EagerGuidanceTypes = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly colour?: string | null;
  readonly deleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGuidanceTypes = {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly colour?: string | null;
  readonly deleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GuidanceTypes = LazyLoading extends LazyLoadingDisabled ? EagerGuidanceTypes : LazyGuidanceTypes

export declare const GuidanceTypes: (new (init: ModelInit<GuidanceTypes, GuidanceTypesMetaData>) => GuidanceTypes) & {
  copyOf(source: GuidanceTypes, mutator: (draft: MutableModel<GuidanceTypes, GuidanceTypesMetaData>) => MutableModel<GuidanceTypes, GuidanceTypesMetaData> | void): GuidanceTypes;
}

type EagerGuidance = {
  readonly id: string;
  readonly title?: string | null;
  readonly shortDesc?: string | null;
  readonly longDesc?: string | null;
  readonly thumbURL?: string | null;
  readonly date?: string | null;
  readonly time?: string | null;
  readonly estTime?: number | null;
  readonly deleted?: boolean | null;
  readonly GuidanceTypes?: GuidanceTypes | null;
  readonly location?: string | null;
  readonly author?: string | null;
  readonly S3ObjectKey?: string | null;
  readonly GuidanceContents?: (GuidanceContent | null)[] | null;
  readonly status?: EnumStatuses | keyof typeof EnumStatuses | null;
  readonly active?: boolean | null;
  readonly lowerCaseTitle?: string | null;
  readonly lowerCaseShortDesc?: string | null;
  readonly scheduleDateTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly guidanceGuidanceTypesId?: string | null;
}

type LazyGuidance = {
  readonly id: string;
  readonly title?: string | null;
  readonly shortDesc?: string | null;
  readonly longDesc?: string | null;
  readonly thumbURL?: string | null;
  readonly date?: string | null;
  readonly time?: string | null;
  readonly estTime?: number | null;
  readonly deleted?: boolean | null;
  readonly GuidanceTypes: AsyncItem<GuidanceTypes | undefined>;
  readonly location?: string | null;
  readonly author?: string | null;
  readonly S3ObjectKey?: string | null;
  readonly GuidanceContents: AsyncCollection<GuidanceContent>;
  readonly status?: EnumStatuses | keyof typeof EnumStatuses | null;
  readonly active?: boolean | null;
  readonly lowerCaseTitle?: string | null;
  readonly lowerCaseShortDesc?: string | null;
  readonly scheduleDateTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly guidanceGuidanceTypesId?: string | null;
}

export declare type Guidance = LazyLoading extends LazyLoadingDisabled ? EagerGuidance : LazyGuidance

export declare const Guidance: (new (init: ModelInit<Guidance, GuidanceMetaData>) => Guidance) & {
  copyOf(source: Guidance, mutator: (draft: MutableModel<Guidance, GuidanceMetaData>) => MutableModel<Guidance, GuidanceMetaData> | void): Guidance;
}

type EagerCalendar = {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly datetime?: string | null;
  readonly location?: string | null;
  readonly Guidance?: Guidance | null;
  readonly User?: User | null;
  readonly done?: boolean | null;
  readonly CalendarItemType?: CalendarItemType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly calendarGuidanceId?: string | null;
  readonly calendarUserId?: string | null;
  readonly calendarCalendarItemTypeId?: string | null;
}

type LazyCalendar = {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly datetime?: string | null;
  readonly location?: string | null;
  readonly Guidance: AsyncItem<Guidance | undefined>;
  readonly User: AsyncItem<User | undefined>;
  readonly done?: boolean | null;
  readonly CalendarItemType: AsyncItem<CalendarItemType | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly calendarGuidanceId?: string | null;
  readonly calendarUserId?: string | null;
  readonly calendarCalendarItemTypeId?: string | null;
}

export declare type Calendar = LazyLoading extends LazyLoadingDisabled ? EagerCalendar : LazyCalendar

export declare const Calendar: (new (init: ModelInit<Calendar, CalendarMetaData>) => Calendar) & {
  copyOf(source: Calendar, mutator: (draft: MutableModel<Calendar, CalendarMetaData>) => MutableModel<Calendar, CalendarMetaData> | void): Calendar;
}

type EagerArticles = {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly imageURL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyArticles = {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly imageURL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Articles = LazyLoading extends LazyLoadingDisabled ? EagerArticles : LazyArticles

export declare const Articles: (new (init: ModelInit<Articles, ArticlesMetaData>) => Articles) & {
  copyOf(source: Articles, mutator: (draft: MutableModel<Articles, ArticlesMetaData>) => MutableModel<Articles, ArticlesMetaData> | void): Articles;
}

type EagerChatRoom = {
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly Messages?: (Message | null)[] | null;
  readonly LastMessage?: Message | null;
  readonly users?: (UserChatRoom | null)[] | null;
  readonly isChatBot: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

type LazyChatRoom = {
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly Messages: AsyncCollection<Message>;
  readonly LastMessage: AsyncItem<Message | undefined>;
  readonly users: AsyncCollection<UserChatRoom>;
  readonly isChatBot: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

export declare type ChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerChatRoom : LazyChatRoom

export declare const ChatRoom: (new (init: ModelInit<ChatRoom, ChatRoomMetaData>) => ChatRoom) & {
  copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom, ChatRoomMetaData>) => MutableModel<ChatRoom, ChatRoomMetaData> | void): ChatRoom;
}

type EagerMessage = {
  readonly id: string;
  readonly chatroomID: string;
  readonly createdAt: string;
  readonly text: string;
  readonly userID: string;
  readonly User?: User | null;
  readonly mediaS3URL?: string | null;
  readonly needsModeration?: boolean | null;
  readonly moderationLabel?: string | null;
  readonly moderationScore?: number | null;
  readonly updatedAt?: string | null;
  readonly messageUserId?: string | null;
}

type LazyMessage = {
  readonly id: string;
  readonly chatroomID: string;
  readonly createdAt: string;
  readonly text: string;
  readonly userID: string;
  readonly User: AsyncItem<User | undefined>;
  readonly mediaS3URL?: string | null;
  readonly needsModeration?: boolean | null;
  readonly moderationLabel?: string | null;
  readonly moderationScore?: number | null;
  readonly updatedAt?: string | null;
  readonly messageUserId?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message, MessageMetaData>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

type EagerUser = {
  readonly id: string;
  readonly name: string;
  readonly status?: string | null;
  readonly image?: string | null;
  readonly ChatRooms?: (UserChatRoom | null)[] | null;
  readonly userType?: EnumUserTypes | keyof typeof EnumUserTypes | null;
  readonly deleted?: boolean | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly mobileNo?: string | null;
  readonly headerImage?: string | null;
  readonly UserExtendedInfos?: (UserExtendedInfo | null)[] | null;
  readonly pwdName?: string | null;
  readonly expoNotificationToken?: string | null;
  readonly nativeNotificationToken?: string | null;
  readonly myfriendss?: (MyFriendsUser | null)[] | null;
  readonly postRegistrationComplete?: boolean | null;
  readonly additionalInformationComplete?: boolean | null;
  readonly lastActivity?: string | null;
  readonly terriiProfile?: TerriiUserProfile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userTerriiProfileId?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly name: string;
  readonly status?: string | null;
  readonly image?: string | null;
  readonly ChatRooms: AsyncCollection<UserChatRoom>;
  readonly userType?: EnumUserTypes | keyof typeof EnumUserTypes | null;
  readonly deleted?: boolean | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly mobileNo?: string | null;
  readonly headerImage?: string | null;
  readonly UserExtendedInfos: AsyncCollection<UserExtendedInfo>;
  readonly pwdName?: string | null;
  readonly expoNotificationToken?: string | null;
  readonly nativeNotificationToken?: string | null;
  readonly myfriendss: AsyncCollection<MyFriendsUser>;
  readonly postRegistrationComplete?: boolean | null;
  readonly additionalInformationComplete?: boolean | null;
  readonly lastActivity?: string | null;
  readonly terriiProfile: AsyncItem<TerriiUserProfile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userTerriiProfileId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerJournalEntry = {
  readonly id: string;
  readonly User?: User | null;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly entryDatetime?: string | null;
  readonly imageKey?: string | null;
  readonly emotion?: string | null;
  readonly tag?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly journalEntryUserId?: string | null;
}

type LazyJournalEntry = {
  readonly id: string;
  readonly User: AsyncItem<User | undefined>;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly entryDatetime?: string | null;
  readonly imageKey?: string | null;
  readonly emotion?: string | null;
  readonly tag?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly journalEntryUserId?: string | null;
}

export declare type JournalEntry = LazyLoading extends LazyLoadingDisabled ? EagerJournalEntry : LazyJournalEntry

export declare const JournalEntry: (new (init: ModelInit<JournalEntry, JournalEntryMetaData>) => JournalEntry) & {
  copyOf(source: JournalEntry, mutator: (draft: MutableModel<JournalEntry, JournalEntryMetaData>) => MutableModel<JournalEntry, JournalEntryMetaData> | void): JournalEntry;
}

type EagerCommunityEvent = {
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly imageS3Key?: string | null;
  readonly eventDateTime: string;
  readonly location: string;
  readonly communityGroupID: string;
  readonly CommunityGroup?: CommunityGroup | null;
  readonly createdByID: string;
  readonly createdBy?: User | null;
  readonly CommunityEventAttendances?: (CommunityEventAttendance | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommunityEvent = {
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly imageS3Key?: string | null;
  readonly eventDateTime: string;
  readonly location: string;
  readonly communityGroupID: string;
  readonly CommunityGroup: AsyncItem<CommunityGroup | undefined>;
  readonly createdByID: string;
  readonly createdBy: AsyncItem<User | undefined>;
  readonly CommunityEventAttendances: AsyncCollection<CommunityEventAttendance>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommunityEvent = LazyLoading extends LazyLoadingDisabled ? EagerCommunityEvent : LazyCommunityEvent

export declare const CommunityEvent: (new (init: ModelInit<CommunityEvent, CommunityEventMetaData>) => CommunityEvent) & {
  copyOf(source: CommunityEvent, mutator: (draft: MutableModel<CommunityEvent, CommunityEventMetaData>) => MutableModel<CommunityEvent, CommunityEventMetaData> | void): CommunityEvent;
}

type EagerCommunityEventAttendance = {
  readonly id: string;
  readonly userID: string;
  readonly User?: User | null;
  readonly eventID: string;
  readonly CommunityEvent?: CommunityEvent | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommunityEventAttendance = {
  readonly id: string;
  readonly userID: string;
  readonly User: AsyncItem<User | undefined>;
  readonly eventID: string;
  readonly CommunityEvent: AsyncItem<CommunityEvent | undefined>;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommunityEventAttendance = LazyLoading extends LazyLoadingDisabled ? EagerCommunityEventAttendance : LazyCommunityEventAttendance

export declare const CommunityEventAttendance: (new (init: ModelInit<CommunityEventAttendance, CommunityEventAttendanceMetaData>) => CommunityEventAttendance) & {
  copyOf(source: CommunityEventAttendance, mutator: (draft: MutableModel<CommunityEventAttendance, CommunityEventAttendanceMetaData>) => MutableModel<CommunityEventAttendance, CommunityEventAttendanceMetaData> | void): CommunityEventAttendance;
}

type EagerCommunityCommentLikes = {
  readonly id: string;
  readonly commentID: string;
  readonly communityCommentLikesUserId: string;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommunityCommentLikes = {
  readonly id: string;
  readonly commentID: string;
  readonly communityCommentLikesUserId: string;
  readonly User: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommunityCommentLikes = LazyLoading extends LazyLoadingDisabled ? EagerCommunityCommentLikes : LazyCommunityCommentLikes

export declare const CommunityCommentLikes: (new (init: ModelInit<CommunityCommentLikes, CommunityCommentLikesMetaData>) => CommunityCommentLikes) & {
  copyOf(source: CommunityCommentLikes, mutator: (draft: MutableModel<CommunityCommentLikes, CommunityCommentLikesMetaData>) => MutableModel<CommunityCommentLikes, CommunityCommentLikesMetaData> | void): CommunityCommentLikes;
}

type EagerCarePlanOutputs = {
  readonly id: string;
  readonly User?: User | null;
  readonly carePlanJSON?: string | null;
  readonly deleted?: boolean | null;
  readonly carePlanName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly carePlanOutputsUserId?: string | null;
}

type LazyCarePlanOutputs = {
  readonly id: string;
  readonly User: AsyncItem<User | undefined>;
  readonly carePlanJSON?: string | null;
  readonly deleted?: boolean | null;
  readonly carePlanName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly carePlanOutputsUserId?: string | null;
}

export declare type CarePlanOutputs = LazyLoading extends LazyLoadingDisabled ? EagerCarePlanOutputs : LazyCarePlanOutputs

export declare const CarePlanOutputs: (new (init: ModelInit<CarePlanOutputs, CarePlanOutputsMetaData>) => CarePlanOutputs) & {
  copyOf(source: CarePlanOutputs, mutator: (draft: MutableModel<CarePlanOutputs, CarePlanOutputsMetaData>) => MutableModel<CarePlanOutputs, CarePlanOutputsMetaData> | void): CarePlanOutputs;
}

type EagerTerriiCareHome = {
  readonly id: string;
  readonly name: string;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly postCode?: string | null;
  readonly phoneNumber?: string | null;
  readonly email?: string | null;
  readonly website?: string | null;
  readonly adminUsers?: (TerriiUserProfile | null)[] | null;
  readonly residents?: (TerriiResident | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTerriiCareHome = {
  readonly id: string;
  readonly name: string;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly postCode?: string | null;
  readonly phoneNumber?: string | null;
  readonly email?: string | null;
  readonly website?: string | null;
  readonly adminUsers: AsyncCollection<TerriiUserProfile>;
  readonly residents: AsyncCollection<TerriiResident>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TerriiCareHome = LazyLoading extends LazyLoadingDisabled ? EagerTerriiCareHome : LazyTerriiCareHome

export declare const TerriiCareHome: (new (init: ModelInit<TerriiCareHome>) => TerriiCareHome) & {
  copyOf(source: TerriiCareHome, mutator: (draft: MutableModel<TerriiCareHome>) => MutableModel<TerriiCareHome> | void): TerriiCareHome;
}

type EagerTerriiUserProfile = {
  readonly id: string;
  readonly userID: string;
  readonly user?: User | null;
  readonly role: TerriiUserRole | keyof typeof TerriiUserRole;
  readonly careHomeID: string;
  readonly careHome?: TerriiCareHome | null;
  readonly lastLogin?: string | null;
  readonly profilePicture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTerriiUserProfile = {
  readonly id: string;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly role: TerriiUserRole | keyof typeof TerriiUserRole;
  readonly careHomeID: string;
  readonly careHome: AsyncItem<TerriiCareHome | undefined>;
  readonly lastLogin?: string | null;
  readonly profilePicture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TerriiUserProfile = LazyLoading extends LazyLoadingDisabled ? EagerTerriiUserProfile : LazyTerriiUserProfile

export declare const TerriiUserProfile: (new (init: ModelInit<TerriiUserProfile>) => TerriiUserProfile) & {
  copyOf(source: TerriiUserProfile, mutator: (draft: MutableModel<TerriiUserProfile>) => MutableModel<TerriiUserProfile> | void): TerriiUserProfile;
}

type EagerTerriiResident = {
  readonly id: string;
  readonly name: string;
  readonly room?: string | null;
  readonly photo?: string | null;
  readonly careHomeID: string;
  readonly careHome?: TerriiCareHome | null;
  readonly dateOfBirth?: string | null;
  readonly admissionDate?: string | null;
  readonly status?: TerriiResidentStatus | keyof typeof TerriiResidentStatus | null;
  readonly lastUpdate?: string | null;
  readonly familyMembers?: (TerriiResidentFamily | null)[] | null;
  readonly medicalInfo?: TerriiResidentMedical | null;
  readonly carePreferences?: TerriiResidentCarePreferences | null;
  readonly activities?: (TerriiResidentActivity | null)[] | null;
  readonly emergencyContact?: TerriiResidentEmergencyContact | null;
  readonly unreadMessages?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly terriiResidentMedicalInfoId?: string | null;
  readonly terriiResidentCarePreferencesId?: string | null;
  readonly terriiResidentEmergencyContactId?: string | null;
}

type LazyTerriiResident = {
  readonly id: string;
  readonly name: string;
  readonly room?: string | null;
  readonly photo?: string | null;
  readonly careHomeID: string;
  readonly careHome: AsyncItem<TerriiCareHome | undefined>;
  readonly dateOfBirth?: string | null;
  readonly admissionDate?: string | null;
  readonly status?: TerriiResidentStatus | keyof typeof TerriiResidentStatus | null;
  readonly lastUpdate?: string | null;
  readonly familyMembers: AsyncCollection<TerriiResidentFamily>;
  readonly medicalInfo: AsyncItem<TerriiResidentMedical | undefined>;
  readonly carePreferences: AsyncItem<TerriiResidentCarePreferences | undefined>;
  readonly activities: AsyncCollection<TerriiResidentActivity>;
  readonly emergencyContact: AsyncItem<TerriiResidentEmergencyContact | undefined>;
  readonly unreadMessages?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly terriiResidentMedicalInfoId?: string | null;
  readonly terriiResidentCarePreferencesId?: string | null;
  readonly terriiResidentEmergencyContactId?: string | null;
}

export declare type TerriiResident = LazyLoading extends LazyLoadingDisabled ? EagerTerriiResident : LazyTerriiResident

export declare const TerriiResident: (new (init: ModelInit<TerriiResident>) => TerriiResident) & {
  copyOf(source: TerriiResident, mutator: (draft: MutableModel<TerriiResident>) => MutableModel<TerriiResident> | void): TerriiResident;
}

type EagerTerriiResidentFamily = {
  readonly id: string;
  readonly name: string;
  readonly relationship?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly residentID: string;
  readonly resident?: TerriiResident | null;
  readonly userID?: string | null;
  readonly user?: User | null;
  readonly isRegistered?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTerriiResidentFamily = {
  readonly id: string;
  readonly name: string;
  readonly relationship?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly residentID: string;
  readonly resident: AsyncItem<TerriiResident | undefined>;
  readonly userID?: string | null;
  readonly user: AsyncItem<User | undefined>;
  readonly isRegistered?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TerriiResidentFamily = LazyLoading extends LazyLoadingDisabled ? EagerTerriiResidentFamily : LazyTerriiResidentFamily

export declare const TerriiResidentFamily: (new (init: ModelInit<TerriiResidentFamily>) => TerriiResidentFamily) & {
  copyOf(source: TerriiResidentFamily, mutator: (draft: MutableModel<TerriiResidentFamily>) => MutableModel<TerriiResidentFamily> | void): TerriiResidentFamily;
}

type EagerTerriiResidentMedical = {
  readonly id: string;
  readonly primaryPhysician?: string | null;
  readonly conditions?: (string | null)[] | null;
  readonly medications?: (TerriiResidentMedication | null)[] | null;
  readonly allergies?: (string | null)[] | null;
  readonly dietaryRestrictions?: (string | null)[] | null;
  readonly residentID: string;
  readonly resident?: TerriiResident | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTerriiResidentMedical = {
  readonly id: string;
  readonly primaryPhysician?: string | null;
  readonly conditions?: (string | null)[] | null;
  readonly medications: AsyncCollection<TerriiResidentMedication>;
  readonly allergies?: (string | null)[] | null;
  readonly dietaryRestrictions?: (string | null)[] | null;
  readonly residentID: string;
  readonly resident: AsyncItem<TerriiResident | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TerriiResidentMedical = LazyLoading extends LazyLoadingDisabled ? EagerTerriiResidentMedical : LazyTerriiResidentMedical

export declare const TerriiResidentMedical: (new (init: ModelInit<TerriiResidentMedical>) => TerriiResidentMedical) & {
  copyOf(source: TerriiResidentMedical, mutator: (draft: MutableModel<TerriiResidentMedical>) => MutableModel<TerriiResidentMedical> | void): TerriiResidentMedical;
}

type EagerTerriiResidentMedication = {
  readonly id: string;
  readonly name: string;
  readonly dosage?: string | null;
  readonly time?: string | null;
  readonly medicalInfoID: string;
  readonly medicalInfo?: TerriiResidentMedical | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTerriiResidentMedication = {
  readonly id: string;
  readonly name: string;
  readonly dosage?: string | null;
  readonly time?: string | null;
  readonly medicalInfoID: string;
  readonly medicalInfo: AsyncItem<TerriiResidentMedical | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TerriiResidentMedication = LazyLoading extends LazyLoadingDisabled ? EagerTerriiResidentMedication : LazyTerriiResidentMedication

export declare const TerriiResidentMedication: (new (init: ModelInit<TerriiResidentMedication>) => TerriiResidentMedication) & {
  copyOf(source: TerriiResidentMedication, mutator: (draft: MutableModel<TerriiResidentMedication>) => MutableModel<TerriiResidentMedication> | void): TerriiResidentMedication;
}

type EagerTerriiResidentCarePreferences = {
  readonly id: string;
  readonly interests?: (string | null)[] | null;
  readonly routine?: string | null;
  readonly communication?: string | null;
  readonly mobility?: string | null;
  readonly residentID: string;
  readonly resident?: TerriiResident | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTerriiResidentCarePreferences = {
  readonly id: string;
  readonly interests?: (string | null)[] | null;
  readonly routine?: string | null;
  readonly communication?: string | null;
  readonly mobility?: string | null;
  readonly residentID: string;
  readonly resident: AsyncItem<TerriiResident | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TerriiResidentCarePreferences = LazyLoading extends LazyLoadingDisabled ? EagerTerriiResidentCarePreferences : LazyTerriiResidentCarePreferences

export declare const TerriiResidentCarePreferences: (new (init: ModelInit<TerriiResidentCarePreferences>) => TerriiResidentCarePreferences) & {
  copyOf(source: TerriiResidentCarePreferences, mutator: (draft: MutableModel<TerriiResidentCarePreferences>) => MutableModel<TerriiResidentCarePreferences> | void): TerriiResidentCarePreferences;
}

type EagerTerriiResidentActivity = {
  readonly id: string;
  readonly date: string;
  readonly activity: string;
  readonly notes?: string | null;
  readonly staff?: string | null;
  readonly residentID: string;
  readonly resident?: TerriiResident | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTerriiResidentActivity = {
  readonly id: string;
  readonly date: string;
  readonly activity: string;
  readonly notes?: string | null;
  readonly staff?: string | null;
  readonly residentID: string;
  readonly resident: AsyncItem<TerriiResident | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TerriiResidentActivity = LazyLoading extends LazyLoadingDisabled ? EagerTerriiResidentActivity : LazyTerriiResidentActivity

export declare const TerriiResidentActivity: (new (init: ModelInit<TerriiResidentActivity>) => TerriiResidentActivity) & {
  copyOf(source: TerriiResidentActivity, mutator: (draft: MutableModel<TerriiResidentActivity>) => MutableModel<TerriiResidentActivity> | void): TerriiResidentActivity;
}

type EagerTerriiResidentEmergencyContact = {
  readonly id: string;
  readonly name: string;
  readonly relationship?: string | null;
  readonly phone: string;
  readonly email?: string | null;
  readonly residentID: string;
  readonly resident?: TerriiResident | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTerriiResidentEmergencyContact = {
  readonly id: string;
  readonly name: string;
  readonly relationship?: string | null;
  readonly phone: string;
  readonly email?: string | null;
  readonly residentID: string;
  readonly resident: AsyncItem<TerriiResident | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TerriiResidentEmergencyContact = LazyLoading extends LazyLoadingDisabled ? EagerTerriiResidentEmergencyContact : LazyTerriiResidentEmergencyContact

export declare const TerriiResidentEmergencyContact: (new (init: ModelInit<TerriiResidentEmergencyContact>) => TerriiResidentEmergencyContact) & {
  copyOf(source: TerriiResidentEmergencyContact, mutator: (draft: MutableModel<TerriiResidentEmergencyContact>) => MutableModel<TerriiResidentEmergencyContact> | void): TerriiResidentEmergencyContact;
}

type EagerTerriiMessageThread = {
  readonly id: string;
  readonly residentID: string;
  readonly resident?: TerriiResident | null;
  readonly participants?: (string | null)[] | null;
  readonly isStarred?: boolean | null;
  readonly isArchived?: boolean | null;
  readonly unreadCount?: number | null;
  readonly lastMessage?: TerriiMessage | null;
  readonly messages?: (TerriiMessage | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly terriiMessageThreadLastMessageId?: string | null;
}

type LazyTerriiMessageThread = {
  readonly id: string;
  readonly residentID: string;
  readonly resident: AsyncItem<TerriiResident | undefined>;
  readonly participants?: (string | null)[] | null;
  readonly isStarred?: boolean | null;
  readonly isArchived?: boolean | null;
  readonly unreadCount?: number | null;
  readonly lastMessage: AsyncItem<TerriiMessage | undefined>;
  readonly messages: AsyncCollection<TerriiMessage>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly terriiMessageThreadLastMessageId?: string | null;
}

export declare type TerriiMessageThread = LazyLoading extends LazyLoadingDisabled ? EagerTerriiMessageThread : LazyTerriiMessageThread

export declare const TerriiMessageThread: (new (init: ModelInit<TerriiMessageThread>) => TerriiMessageThread) & {
  copyOf(source: TerriiMessageThread, mutator: (draft: MutableModel<TerriiMessageThread>) => MutableModel<TerriiMessageThread> | void): TerriiMessageThread;
}

type EagerTerriiMessage = {
  readonly id: string;
  readonly content: string;
  readonly sender: string;
  readonly isSentByStaff: boolean;
  readonly threadID: string;
  readonly thread?: TerriiMessageThread | null;
  readonly reactions?: (string | null)[] | null;
  readonly attachmentURL?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyTerriiMessage = {
  readonly id: string;
  readonly content: string;
  readonly sender: string;
  readonly isSentByStaff: boolean;
  readonly threadID: string;
  readonly thread: AsyncItem<TerriiMessageThread | undefined>;
  readonly reactions?: (string | null)[] | null;
  readonly attachmentURL?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type TerriiMessage = LazyLoading extends LazyLoadingDisabled ? EagerTerriiMessage : LazyTerriiMessage

export declare const TerriiMessage: (new (init: ModelInit<TerriiMessage>) => TerriiMessage) & {
  copyOf(source: TerriiMessage, mutator: (draft: MutableModel<TerriiMessage>) => MutableModel<TerriiMessage> | void): TerriiMessage;
}

type EagerTerriiMoment = {
  readonly id: string;
  readonly content?: string | null;
  readonly createdByID: string;
  readonly createdBy?: TerriiUserProfile | null;
  readonly residentID?: string | null;
  readonly resident?: TerriiResident | null;
  readonly careHomeID: string;
  readonly careHome?: TerriiCareHome | null;
  readonly media?: (string | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly likes?: number | null;
  readonly comments?: (TerriiMomentComment | null)[] | null;
  readonly isPrivate?: boolean | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyTerriiMoment = {
  readonly id: string;
  readonly content?: string | null;
  readonly createdByID: string;
  readonly createdBy: AsyncItem<TerriiUserProfile | undefined>;
  readonly residentID?: string | null;
  readonly resident: AsyncItem<TerriiResident | undefined>;
  readonly careHomeID: string;
  readonly careHome: AsyncItem<TerriiCareHome | undefined>;
  readonly media?: (string | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly likes?: number | null;
  readonly comments: AsyncCollection<TerriiMomentComment>;
  readonly isPrivate?: boolean | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type TerriiMoment = LazyLoading extends LazyLoadingDisabled ? EagerTerriiMoment : LazyTerriiMoment

export declare const TerriiMoment: (new (init: ModelInit<TerriiMoment>) => TerriiMoment) & {
  copyOf(source: TerriiMoment, mutator: (draft: MutableModel<TerriiMoment>) => MutableModel<TerriiMoment> | void): TerriiMoment;
}

type EagerTerriiMomentComment = {
  readonly id: string;
  readonly content: string;
  readonly createdByID: string;
  readonly createdBy?: TerriiUserProfile | null;
  readonly momentID: string;
  readonly moment?: TerriiMoment | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyTerriiMomentComment = {
  readonly id: string;
  readonly content: string;
  readonly createdByID: string;
  readonly createdBy: AsyncItem<TerriiUserProfile | undefined>;
  readonly momentID: string;
  readonly moment: AsyncItem<TerriiMoment | undefined>;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type TerriiMomentComment = LazyLoading extends LazyLoadingDisabled ? EagerTerriiMomentComment : LazyTerriiMomentComment

export declare const TerriiMomentComment: (new (init: ModelInit<TerriiMomentComment>) => TerriiMomentComment) & {
  copyOf(source: TerriiMomentComment, mutator: (draft: MutableModel<TerriiMomentComment>) => MutableModel<TerriiMomentComment> | void): TerriiMomentComment;
}

type EagerTerriiCommunityPost = {
  readonly id: string;
  readonly content: string;
  readonly createdByID: string;
  readonly createdBy?: TerriiUserProfile | null;
  readonly careHomeID: string;
  readonly careHome?: TerriiCareHome | null;
  readonly media?: (string | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly likes?: number | null;
  readonly comments?: (TerriiCommunityComment | null)[] | null;
  readonly isPinned?: boolean | null;
  readonly isAnnouncement?: boolean | null;
  readonly mode?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyTerriiCommunityPost = {
  readonly id: string;
  readonly content: string;
  readonly createdByID: string;
  readonly createdBy: AsyncItem<TerriiUserProfile | undefined>;
  readonly careHomeID: string;
  readonly careHome: AsyncItem<TerriiCareHome | undefined>;
  readonly media?: (string | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly likes?: number | null;
  readonly comments: AsyncCollection<TerriiCommunityComment>;
  readonly isPinned?: boolean | null;
  readonly isAnnouncement?: boolean | null;
  readonly mode?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type TerriiCommunityPost = LazyLoading extends LazyLoadingDisabled ? EagerTerriiCommunityPost : LazyTerriiCommunityPost

export declare const TerriiCommunityPost: (new (init: ModelInit<TerriiCommunityPost>) => TerriiCommunityPost) & {
  copyOf(source: TerriiCommunityPost, mutator: (draft: MutableModel<TerriiCommunityPost>) => MutableModel<TerriiCommunityPost> | void): TerriiCommunityPost;
}

type EagerTerriiCommunityComment = {
  readonly id: string;
  readonly content: string;
  readonly createdByID: string;
  readonly createdBy?: TerriiUserProfile | null;
  readonly postID: string;
  readonly post?: TerriiCommunityPost | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyTerriiCommunityComment = {
  readonly id: string;
  readonly content: string;
  readonly createdByID: string;
  readonly createdBy: AsyncItem<TerriiUserProfile | undefined>;
  readonly postID: string;
  readonly post: AsyncItem<TerriiCommunityPost | undefined>;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type TerriiCommunityComment = LazyLoading extends LazyLoadingDisabled ? EagerTerriiCommunityComment : LazyTerriiCommunityComment

export declare const TerriiCommunityComment: (new (init: ModelInit<TerriiCommunityComment>) => TerriiCommunityComment) & {
  copyOf(source: TerriiCommunityComment, mutator: (draft: MutableModel<TerriiCommunityComment>) => MutableModel<TerriiCommunityComment> | void): TerriiCommunityComment;
}

type EagerMyFriendsUser = {
  readonly id: string;
  readonly myFriends: MyFriends;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMyFriendsUser = {
  readonly id: string;
  readonly myFriends: AsyncItem<MyFriends>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MyFriendsUser = LazyLoading extends LazyLoadingDisabled ? EagerMyFriendsUser : LazyMyFriendsUser

export declare const MyFriendsUser: (new (init: ModelInit<MyFriendsUser, MyFriendsUserMetaData>) => MyFriendsUser) & {
  copyOf(source: MyFriendsUser, mutator: (draft: MutableModel<MyFriendsUser, MyFriendsUserMetaData>) => MutableModel<MyFriendsUser, MyFriendsUserMetaData> | void): MyFriendsUser;
}

type EagerUserChatRoom = {
  readonly id: string;
  readonly chatRoom: ChatRoom;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserChatRoom = {
  readonly id: string;
  readonly chatRoom: AsyncItem<ChatRoom>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerUserChatRoom : LazyUserChatRoom

export declare const UserChatRoom: (new (init: ModelInit<UserChatRoom, UserChatRoomMetaData>) => UserChatRoom) & {
  copyOf(source: UserChatRoom, mutator: (draft: MutableModel<UserChatRoom, UserChatRoomMetaData>) => MutableModel<UserChatRoom, UserChatRoomMetaData> | void): UserChatRoom;
}