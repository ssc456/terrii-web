Terrii & Terrii Family – Product Requirements and Technical Specification (v0.1) 

 

Last updated: 13 Aug 2025 

 

1) Product Overview 

Terrii is a web platform for care homes to manage residents, share updates (“Moments”), exchange messages with families, and post community announcements. Terrii Family App is a mobile app for family members to view resident updates, engage via comments/reactions, receive messages, and (optionally) post in a care home community when enabled. 

 

Personas 

Hypercare Superadmin: Creates care homes, assigns initial admins, manages platform-level settings. 

Care Home Admin: Manages care home profile, staff, community settings, resident registry, invites families, moderates posts. 

Care Staff: Creates resident updates (Moments/Activities), messages families, views/responds, participates in community. 

Family Member: Views resident Moments/updates, receives/sends messages, reacts/comments, posts in community when allowed. 

 

Tenancy Model 

Global platform (Hypercare) hosts multiple Care Homes. All domain data is scoped by careHomeID. 

Users may have roles per-care-home via TerriiUserProfile. 

Community features operate within a care home. 

 

2) Domain Model (Conceptual) 

This section describes entities and their relationships. It maps to your current GraphQL schema and identifies suggested additions. 

Core Entities 

CareHome 

Profile: name, address, contact details, logo/image 

Settings: community mode (Notice Board vs Two-Way), post approvals, reactions/comments toggles 

Membership: Admins, Staff, Residents 

UserProfile 

Link to Auth User (Cognito) via userID 

Role per care home: ADMIN, CARE_STAFF, MANAGER, FAMILY 

Metadata: lastLogin, profilePicture 

Resident 

Profile: name, room, photo, DOB, admissionDate 

Status: RAG (derived), lastUpdate timestamp 

Relations: FamilyMembers, EmergencyContact 

Optional: Medical (lightweight) and CarePreferences 

Activities feed; Moments feed 

ResidentFamily 

Pre-registered contact record for invitations. 

userID set on registration; isRegistered flag. 

Moments 

Social-style posts scoped to a Resident (and Care Home) 

Content: text, media, tags, privacy flag 

Engagement: comments (threaded), likes/reactions (aggregate + per-user optional) 

Activities 

Structured log entries per Resident (date, activity, notes, staff) 

Used for status freshness and analytics 

Messaging 

MessageThread scoped to a Resident, with participants (staff/admin + family) 

Message entries with sender, attachments, reactions 

Community 

CommunityPost: announcements/updates at Care Home level 

Mode: Notice Board (staff-only posting) or Two-Way (families can post) 

Moderation: approval workflow for family posts, status enum 

Comments (threaded), reactions, view counts, pinning 

InviteCode 

Single-use tokens linking a ResidentFamily to an email address 

Expiry and audit fields 

Audit/Analytics (suggested) 

Event records: append-only log of notable actions for analytics and audit trails 

ReadReceipt/View records: optional per-user post/view tracking for analytics (versus counters only) 

 

Key Relationships 

CareHome ↔ UserProfile (1:N) 

CareHome ↔ Resident (1:N) 

Resident ↔ ResidentFamily (1:N) 

Resident ↔ Moments (1:N) 

Resident ↔ Activities (1:N) 

Resident ↔ MessageThread (1:N) 

MessageThread ↔ Message (1:N) 

CareHome ↔ CommunityPost (1:N) 

CommunityPost ↔ CommunityComment (1:N threaded) 

 

3) Gaps & Suggested Schema Additions 

Your current schema is strong. Suggested gaps and additions: 

Moderation/Reporting 

Add reportedCount, reportedAt, reportedByIDs to TerriiCommunityPost and TerriiMoment (or a separate Report entity with reason/category). Enable staff to action reports. 

Per-User Reactions 

You have TerriiCommunityPostLike. Consider symmetric per-user likes for Moments and per-user reactions table supporting multiple emoji types (not just like/heart). 

Read Receipts / Views 

Add entities for PostView, MomentView, MessageRead to power analytics and badge counts reliably, rather than only aggregate integers. 

Resident RAG Status 

Either store derived status plus statusCalculatedAt and a policy config on CareHome (e.g., updateFreshnessThresholds: {okHours, needsHours, overdueHours}), or compute on-read using last activity/moment timestamp. 

Roles & Permissions 

Clarify MANAGER vs ADMIN or collapse to ADMIN. If distinct, define exact deltas (e.g., MANAGER: no billing, no staff invites, can moderate). 

Storage 

For media fields, ensure stable S3 key patterning and a visibility field (PRIVATE, FAMILY, PUBLIC_IN_HOME). 

Soft Delete & Edit History 

You have isDeleted in comments. Consider soft delete on Moments/Posts/Messages with deletedAt, deletedByID. 

Optional editHistory entity for regulatory comfort. 

Notifications 

Add Notification entity with type, targetUserProfileID, payload, deliveryStatus, sentAt to support push/email. 

Community Categories 

Consider enum or taxonomy admin management. Your free-string category is flexible; add TerriiCommunityCategory if you’ll filter/summarize by category. 

Access Controls in Schema 

Current @auth(rules: [{allow: public}]) is too open for PII. Replace with role-/tenant-aware custom resolvers/Lambda auth or allow: owner/groups patterns. See Security section. 

Message Participants 

Model participants as join rows (e.g., ThreadParticipant) instead of an array of strings, to track read state per user and enforce access. 

Tagging/Mentions 

Mentions currently store userProfileIDs. Consider a Mention entity for robust notifications and analytics. 

CareHome Settings 

Add policy object(s): privacyPolicyURL, termsURL, mediaConsentRequired, autoBlurFacesForPublic, postAutoArchiveDays. 

Operational Flags 

Add isArchived on Residents; isActive on UserProfile memberships. 

 

4) Permissions Matrix (RBAC) 

Capability 

Superadmin 

Care Home Admin 

Manager (if used) 

Care Staff 

Family 

Create Care Home 

✓ 

– 

– 

– 

– 

Edit Care Home profile/settings 

✓ 

✓ 

✓ 

– 

View 

Invite/Remove Admins/Staff 

✓ 

✓ 

– 

– 

– 

Invite Family to Resident 

– 

✓ 

✓ 

✓ (if allowed) 

– 

Create Resident 

– 

✓ 

✓ 

✓ 

– 

Edit Resident 

– 

✓ 

✓ 

✓ (limited fields) 

– 

Archive Resident 

– 

✓ 

✓ 

– 

– 

Create Activity/Update 

– 

✓ 

✓ 

✓ 

– 

Create Moment 

– 

✓ 

✓ 

✓ 

– 

Edit/Delete Moment 

– 

✓ 

✓ 

Author 

– 

Comment on Moment 

– 

✓ 

✓ 

✓ 

✓ 

React to Moment 

– 

✓ 

✓ 

✓ 

✓ 

Start Direct Message 

– 

✓ 

✓ 

✓ 

✓ 

Reply in Direct Message 

– 

✓ 

✓ 

✓ 

✓ 

View Community Posts 

– 

✓ 

✓ 

✓ 

✓ 

Create Community Post 

– 

✓ 

✓ 

✓ 

Family only if two-way 

Moderate Community Post 

– 

✓ 

✓ 

– 

– 

Approve/Reject Family Posts 

– 

✓ 

✓ 

– 

– 

View Analytics 

✓ 

✓ 

✓ 

Limited (own) 

Limited (own activity) 

Configure Community Mode 

– 

✓ 

✓ 

– 

– 

Exact enforcement occurs via API auth/resolvers; Family must only see content for their linked Resident and public community content of that care home. 

 

5) Core Workflows 

5.1 Care Home Onboarding (Superadmin) 

Superadmin creates Care Home, uploads logo, sets address, config policy, selects community mode. 

Superadmin creates/assigns first Care Home Admin. 

Admin logs in, invites staff, configures thresholds for RAG, and privacy options. 

 

5.2 Resident Creation and Family Invitation (Admin/Staff) 

Create Resident with profile, room, photo. 

Add Family contacts (name, relationship, email, phone). System creates ResidentFamily and generates InviteCode per email. 

Email/push invite sent. On acceptance, user registers, userID is linked, and role FAMILY membership is created. 

 

5.3 Posting a Resident Moment (Staff/Admin) 

From Resident page, create Moment with text/media/tags. 

Optionally mark as isPrivate (visible only to linked family) or FAMILY scope. 

Save publishes immediately; triggers push notifications to linked family. 

Family can react/comment; staff can reply and moderate. 

 

5.4 Activity Update and RAG 

Staff records an Activity (e.g., “Morning walk”). 

System updates Resident lastUpdate. 

Nightly job (or on-read) computes RAG based on lastUpdate vs thresholds: 

Green: updated within okHours (e.g., ≤24h) 

Amber: between okHours and needsHours (e.g., 24–72h) 

Red: ≥ overdueHours (e.g., >72h) 

 

5.5 Direct Messaging 

Staff/Admin starts a Message Thread for a Resident selecting one or more Family Members. 

Messages appear in both web app and family app with delivered/read states. 

Attachments optionally supported. 

Threads can be starred/archived by staff; unread counts shown per user. 

 

5.6 Community Announcements and Two-Way Mode 

Staff/Admin creates Community Post, optionally pinning/announcing. 

If Two-Way enabled: Family can submit posts. 

If requireFamilyPostApproval: family posts are PENDING. Admin/Manager approves → PUBLISHED or REJECTED. 

All members in the care home can view published posts; comments/reactions per settings. 

 

5.7 Reporting/Moderation 

Any user can report a post/comment/moment. 

Admin reviews report queue, takes action: hide, delete (soft), warn, or block. 

 

6) Product Features (with View/Action Rules) 

6.1 Care Home Web App 

Dashboard 

Resident RAG summary (counts and percentages) 

Moments/Activities in last X days 

Message inbox with unresolved/reply-needed filter 

Community posts performance (views/comments) 

Residents 

List/search/filter by name, room, status (RAG), tags 

Add/Edit/Archive Resident 

Quick actions: Add Activity, Create Moment, Start Message 

Resident detail: profile, family list, activities timeline, moments, emergency contact, preferences, medical (light) 

Messages 

Inbox (by Resident or Family participant), states: unread, awaiting reply, archived 

Thread detail with attachments, reactions, read receipts 

Compose new thread, add participants 

Moments 

Summary: total moments, likes, comments, unseen comments (filters by date range) 

List with search/filter by resident, creator, tags 

View/Moderate/Delete (soft), edit titles/content 

Community 

Create/edit posts, pin/announce 

Moderate pending posts 

Comment/reaction controls per settings 

People 

Staff management: invite/remove, assign roles 

Family management: view invites, resend, revoke 

Care Home Settings 

Community mode and approval settings 

RAG thresholds 

Privacy/media consent options 

Branding (logo, colors), profile info 

Analytics (see section 8) 

 

6.2 Terrii Family Mobile App 

Home 

Feed of Moments for linked Residents (most recent first) 

Quick filter by resident, unread-only toggle 

Resident 

Profile overview (photo, room), latest status, activities summary 

Messages 

Threads per Resident with staff/admin 

Send/receive with attachments 

Community 

View staff/admin posts 

If Two-Way enabled: create posts; if approval required, see status 

Profile 

Update name, profile picture, notification preferences 

 

7) Analytics & Observability 

Metrics (Care Home scope; date-range filterable) 

Residents 

Count by RAG status 

Average time between updates (per resident, aggregate) 

Last update time distribution 

Moments 

Count, likes, comments, unique viewers 

Top creators, top-engaged moments 

Messaging 

Threads started, replies sent 

Median time-to-first-response (staff to family) 

Unreplied threads > X hours 

Community 

Posts by type (staff/family), approvals, rejection reasons 

Views, comments, reactions 

Invitations 

Sent, accepted, time-to-accept, expired 

 

Event Logging (append-only) 

Event types: RESIDENT_CREATED, MOMENT_PUBLISHED, MESSAGE_SENT, POST_APPROVED, INVITE_ACCEPTED, VIEWED_*, REACTION_ADDED, COMMENT_ADDED, SETTINGS_CHANGED. 

Fields: id, timestamp, actorUserProfileID, careHomeID, entityType, entityID, verb, metadata. 

 

Dashboards 

Manager/Admin dashboards with export (CSV) per area. 

 

8) Notifications 

Channels: Push (Expo/APNs/FCM), Email (transactional), optional SMS later. 

Triggers (user configurable): 

New Moment on linked Resident 

Direct Message received 

Community announcement (staff-admin only or all) 

Approval outcomes on submitted posts 

Quiet hours per user; daily digest option. 

 

9) Security, Privacy, Compliance 

Multi-tenancy isolation: All queries filtered by careHomeID; enforce via custom resolvers and JWT claims for role + allowed careHomeIDs. 

Auth: Cognito (Amplify Auth). TerriiUserProfile created on first login for a care home association. 

Authorization: Replace allow: public with group/owner rules or Lambda auth resolvers checking role and tenancy. 

PII & Sensitive Data: Store minimal medical info. Encrypt at rest (S3, Dynamo/Datastore), TLS in transit. 

Media Access: Pre-signed S3 URLs with scoped TTLs. Per-object ACL = Private by default. 

Auditability: Write-once event logs, timestamped edits with editedAt and editor ID. 

Data Retention: Configurable retention periods (e.g., messages 2 years, logs 7 years) with legal hold. 

GDPR: Right to access/export/delete for users; consent management for media of residents. 

 

10) LLM/AI Opportunities (Opt-in) 

Smart Suggestions 

Suggested Moment captions from bullet notes/media context 

Suggested community post templates for recurring events 

Insight Summaries 

Weekly resident wellbeing summary from Activities/Moments 

Inbox triage: summarize long threads, suggest replies 

Anomaly Alerts 

Detect residents overdue for updates beyond norms 

Flag spikes in reports/negative sentiment in comments (privacy-safe) 

Safety Guardrails 

AI-assisted moderation pre-check on family posts/comments 

 

Implement behind feature flags; ensure no PHI/PII leaves region without consent. Prefer server-side enrichment with redaction. 

 

11) Non-Functional Requirements 

Availability: 99.9% target. 

Performance: P95 API < 300ms for common reads, < 800ms for writes. 

Scalability: Horizontal across care homes; S3 for media; CDN for images. 

Accessibility: WCAG 2.1 AA; large fonts and high-contrast themes. 

Internationalization: English first; localization-ready. 

Logging & Monitoring: App logs, metrics, tracing; alerting on error rates. 

 

12) Acceptance Criteria (Selected) 

 

Residents & RAG 

Creating a Resident immediately makes them searchable. 

Recording an Activity updates lastUpdate and recalculates RAG on-read or via scheduled job. 

RAG thresholds configurable per care home; UI badges match status. 

 

Moments 

Family sees new Moments within 5 seconds (push) or on next app refresh. 

Comments appear in threaded order; soft-deleted comments show “Deleted by moderator”. 

Reactions increment per-user; toggling is idempotent. 

 

Messaging 

Message read receipts update within 3 seconds of open. 

Threads can include multiple family members; participants can be added later. 

Staff can archive a thread; family cannot. 

 

Community 

If TWO_WAY, family can submit; if requireFamilyPostApproval, status is PENDING until approved. 

Approved posts are visible to all family & staff in the care home. 

 

Analytics 

Dashboard loads with last 30 days by default; exports CSV under 10s for ≤100k rows. 

 

13) Technical Notes & API Considerations 

GraphQL 

Use custom AppSync resolvers (Lambda) for sensitive mutations/queries to enforce RBAC and tenancy. 

Connections: @hasMany with explicit @index for common queries (already present for many). 

Pagination with nextToken everywhere. 

Indexes to Verify 

activitiesByResidentAndDate (already set): ensure sortKey is date. 

Add momentsByResidentAndCreatedAt for feed. 

Add threadsByResidentAndUpdatedAt for messaging inbox. 

Add postsByCareHomeAndCreatedAt for community feed and moderation queue by status. 

Derived Fields 

Maintain commentCount, viewCount, heartCount using DynamoDB streams/Lambda to avoid race conditions. 

File Uploads 

Signed PUT to S3; metadata includes careHomeID, residentID where applicable. 

Notifications 

Store device tokens per UserProfile; topic per-care-home for announcements. 

 

14) MVP Scope and Phasing 

 

MVP (Phase 1) 

Care home onboarding (Superadmin + Admin) 

Residents (CRUD) + RAG (fixed thresholds) 

Family invitations and registration 

Moments with comments/likes (flat reactions ok) 

Messaging with threads, basic read receipts 

Community Notice Board (staff-only posts) 

Push notifications for Moments/Messages 

Basic analytics: counts and recency 

Secure RBAC enforcement 

 

Phase 2 

Two-Way community with moderation 

Advanced analytics and exports; per-user view tracking 

Configurable RAG thresholds 

Reports/flagging and moderation queue 

AI caption/summary suggestions (opt-in) 

 

Phase 3 

Categories/taxonomy admin 

Edit histories and legal holds 

Sentiment and anomaly detection 

External integrations (calendar/email digests) 

 

15) User Stories (Expanded) 

Admin 

As an Admin, I can invite staff by email so they can post Moments and message families, ensuring only authorized individuals can contribute. 

As an Admin, I can configure community mode (Notice Board or Two-Way) and enable/disable approval requirements so that family posts align with our communication policy. 

As an Admin, I can view RAG status across residents and filter by status, enabling me to prioritize which residents require updates. 

As an Admin, I can edit the care home profile (name, address, contact details, logo) so information displayed to family members remains accurate. 

As an Admin, I can view and manage pending family invitations, resend or revoke them to control access. 

As an Admin, I can moderate Moments, community posts, and comments, removing inappropriate content to maintain a safe environment. 

As an Admin, I can view analytics dashboards to understand engagement, update frequency, and staff performance. 

As an Admin, I can manage care home settings such as RAG thresholds, privacy settings, and notification preferences. 

As an Admin, I can assign and remove other Admins or Managers, maintaining control over administrative access. 

 

Staff 

As Staff, I can post a Moment with a photo, video, or text to a Resident so families can see updates on their loved one’s daily life. 

As Staff, I can add an Activity update for a Resident to record structured care events that contribute to their RAG status. 

As Staff, I can start a message thread with all or specific family members linked to a Resident, ensuring consistent communication. 

As Staff, I can reply to incoming family messages to maintain a two-way communication channel. 

As Staff, I can search and filter residents by name, room number, or RAG status to quickly locate profiles. 

As Staff, I can view a Resident’s past Moments and Activities to better understand their recent care history. 

As Staff, I can comment on and react to Moments and Community Posts to encourage engagement. 

As Staff, I can moderate family-submitted Community Posts (if permissions allow) to ensure compliance with guidelines. 

 

Family 

As a Family member, I can register using a unique invitation code so I can securely access my loved one’s updates. 

As a Family member, I can see a personalized feed of Moments related to my loved one and filter by date or type. 

As a Family member, I can react to and comment on Moments to show support and engagement. 

As a Family member, I receive push notifications when a new Moment is posted, when I receive a message, or when there’s a community announcement. 

As a Family member, I can send direct messages to care home staff to ask questions or share updates. 

As a Family member, I can view the care home’s profile and contact information. 

As a Family member, I can submit a Community Post (if Two-Way mode is enabled) to share experiences, memories, or questions with other families. 

As a Family member, I can view the status of my submitted posts, including whether they are pending approval, published, or rejected. 

As a Family member, I can update my profile picture, name, and notification preferences to personalize my account. 

 

Superadmin 

As a Superadmin, I can create new care homes, setting initial profile details and settings so they are ready for onboarding. 

As a Superadmin, I can assign the first Admin to a care home so they can take over management. 

As a Superadmin, I can view a list of all care homes on the platform with their activity and engagement summaries. 

As a Superadmin, I can suspend or archive a care home if necessary for compliance or inactivity. 

As a Superadmin, I can configure platform-wide settings such as available community modes, AI feature toggles, and default RAG thresholds. 

As a Superadmin, I can monitor platform analytics to track usage trends, growth, and engagement across all care homes. 

 

 

16) Open Questions 

Do we need a distinct MANAGER role or collapse into ADMIN? 

Do we want per-Resident privacy settings for Moments (e.g., share with sibling families only)? 

What are the default RAG thresholds? Are they uniform across homes? 

Media consent workflow: should family be required to grant consent during onboarding? 

Export requirements: which entities are exportable and by whom? 

 

17) Recommendations Summary 

Tighten security: remove allow: public; move to role-aware resolvers. 

Add per-user reaction and view models for reliable analytics. 

Model thread participants explicitly to support read states and permissions. 

Implement event logging early; analytics depends on it. 

Ship MVP with Notice Board-only community; enable Two-Way as Phase 2 with moderation. 

Keep AI behind feature flags; start with safe, value-add suggestions. 

 

18) Glossary 

Moment: A social-style post linked to a single Resident. 

Community Post: A care-home-wide announcement or discussion (not resident-specific). 

RAG: Red/Amber/Green status indicating recency of updates on a resident. 

Tenant: A Care Home and its data boundary. 

 