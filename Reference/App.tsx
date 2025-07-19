import { useState } from 'react';
import { Layout } from './components/Layout';
import { LoginScreen } from './components/screens/LoginScreen';
import { ProfileSetupScreen } from './components/screens/ProfileSetupScreen';
import { ResidentsScreen } from './components/screens/ResidentsScreen';
import { ResidentProfileScreen } from './components/screens/ResidentProfileScreen';
import { MessagesScreen } from './components/screens/MessagesScreen';
import { SharedMomentsScreen } from './components/screens/SharedMomentsScreen';
import { CommunityScreen } from './components/screens/CommunityScreen';
import { AngelaSyncScreen } from './components/screens/AngelaSyncScreen';
import { InsightsScreen } from './components/screens/InsightsScreen';
import { SettingsScreen } from './components/screens/SettingsScreen';
import { DemoVideoScreen } from './components/screens/DemoVideoScreen';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';

interface UserProfile {
  name: string;
  email: string;
  role: string;
  photo?: string;
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProfileSetup, setIsProfileSetup] = useState(false);
  const [currentTab, setCurrentTab] = useState('residents');
  const [selectedMessageThread, setSelectedMessageThread] = useState<string | undefined>();
  const [selectedResidentProfile, setSelectedResidentProfile] = useState<string | undefined>();
  const [showDemo, setShowDemo] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@terrii.com',
    role: 'Care Assistant',
  });

  const handleLogin = async (email: string, password: string) => {
    // Simulate login API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, always succeed
    setIsAuthenticated(true);
    setIsProfileSetup(true); // Skip profile setup for demo
    toast.success('Welcome back to TERRii!');
  };

  const handleForgotPassword = () => {
    toast.info('Password reset instructions sent to your email');
  };

  const handleProfileSetup = (profile: UserProfile) => {
    setUserProfile(profile);
    setIsProfileSetup(true);
    toast.success('Profile setup complete! Welcome to TERRii.');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsProfileSetup(false);
    setCurrentTab('residents');
    setSelectedMessageThread(undefined);
    setSelectedResidentProfile(undefined);
    setShowDemo(false);
    toast.success('Logged out successfully');
  };

  const handleUpdateProfile = (profile: UserProfile) => {
    setUserProfile(profile);
    toast.success('Profile updated successfully');
  };

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    setSelectedMessageThread(undefined);
    setSelectedResidentProfile(undefined);
    
    // Special handling for demo access
    if (tab === 'demo') {
      setShowDemo(true);
      return;
    }
  };

  const handleExitDemo = () => {
    setShowDemo(false);
    setCurrentTab('residents');
  };

  // Resident management handlers
  const handleViewResidentProfile = (residentId: string) => {
    setSelectedResidentProfile(residentId);
    toast.success(`Viewing profile for resident ${residentId}`);
  };

  const handleBackToResidents = () => {
    setSelectedResidentProfile(undefined);
  };

  const handleEditResidentProfile = (residentId: string, updates: any) => {
    console.log('Editing resident profile:', residentId, updates);
    toast.success('Resident profile updated successfully');
  };

  const handleAddResident = (residentData: any) => {
    console.log('Adding new resident:', residentData);
    toast.success(`${residentData.name} has been added as a new resident`);
  };

  const handleArchiveResident = (residentId: string) => {
    console.log('Archiving resident:', residentId);
    toast.info(`Resident ${residentId} has been archived`);
  };

  const handleCallFamily = (residentId: string) => {
    console.log('Calling family for resident:', residentId);
    toast.info(`Initiating call to family for resident ${residentId}`);
  };

  const handleEmailFamily = (residentId: string) => {
    console.log('Emailing family for resident:', residentId);
    toast.info(`Opening email to family for resident ${residentId}`);
  };

  const handleSendMessage = (residentId: string) => {
    setCurrentTab('messages');
    // Start compose dialog for this resident
    toast.success(`Starting message conversation for resident ${residentId}`);
  };

  const handleQuickUpdate = (residentId: string) => {
    toast.success(`Quick update saved for resident ${residentId}`);
  };

  // Enhanced message handlers
  const handleSelectMessageThread = (threadId: string) => {
    setSelectedMessageThread(threadId);
  };

  const handleBackToInbox = () => {
    setSelectedMessageThread(undefined);
  };

  const handleStartNewConversation = (residentId: string, familyMember: string, initialMessage: string) => {
    // In a real app, this would create a new conversation thread
    console.log('Starting new conversation:', { residentId, familyMember, initialMessage });
    toast.success(`Message sent to ${familyMember}!`);
    
    // For demo, you could simulate creating a new thread and selecting it
    // setSelectedMessageThread(newThreadId);
  };

  const handleMessageReply = (messageId: string) => {
    console.log('Replying to message:', messageId);
    toast.info('Reply functionality activated');
  };

  const handleMessageReaction = (messageId: string, type: 'like' | 'heart') => {
    console.log('Reacting to message:', messageId, type);
    toast.success(`Added ${type} reaction to message`);
  };

  const handleMessageEdit = (messageId: string) => {
    console.log('Editing message:', messageId);
    toast.info('Message editing activated');
  };

  const handleMessageDelete = (messageId: string) => {
    console.log('Deleting message:', messageId);
    toast.success('Message deleted');
  };

  const handleMessageForward = (messageId: string) => {
    console.log('Forwarding message:', messageId);
    toast.info('Message forwarding activated');
  };

  const handleMessageStar = (messageId: string) => {
    console.log('Starring message:', messageId);
    toast.success('Message starred');
  };

  const handleMessageFlag = (messageId: string) => {
    console.log('Flagging message:', messageId);
    toast.info('Message reported');
  };

  const handleMessageQuote = (messageId: string) => {
    console.log('Quoting message:', messageId);
    toast.info('Message quoted for reply');
  };

  const handleThreadArchive = (threadId: string) => {
    console.log('Archiving thread:', threadId);
    toast.success('Conversation archived');
  };

  const handleThreadMute = (threadId: string) => {
    console.log('Muting thread:', threadId);
    toast.success('Conversation muted');
  };

  const handleThreadDelete = (threadId: string) => {
    console.log('Deleting thread:', threadId);
    toast.success('Conversation deleted');
  };

  const handleBulkThreadAction = (action: string, threadIds: string[]) => {
    console.log(`Bulk ${action} for threads:`, threadIds);
    toast.success(`Bulk ${action} completed for ${threadIds.length} conversations`);
  };

  const handleFileAttachment = (files: File[]) => {
    console.log('Attaching files:', files.map(f => f.name));
    toast.success(`${files.length} file(s) attached`);
  };

  const handleMessageTemplate = (templateId: string) => {
    console.log('Using message template:', templateId);
    toast.success('Message template applied');
  };

  const handleMessageSchedule = (messageId: string, scheduledTime: Date) => {
    console.log('Scheduling message:', messageId, scheduledTime);
    toast.success('Message scheduled');
  };

  const handleDraftSave = (threadId: string, content: string) => {
    console.log('Saving draft:', threadId, content);
    // In real app, would auto-save draft to storage
  };

  // Enhanced moment handlers
  const handleCreateMoment = (momentData: any) => {
    console.log('Creating moment:', momentData);
    toast.success(`Moment "${momentData.title}" created successfully!`);
    
    // If requires approval, show approval message
    if (momentData.requiresApproval) {
      toast.info('Moment submitted for approval before sharing with family');
    } else if (momentData.shareWithFamily) {
      toast.success('Moment shared with family!');
    }
  };

  const handleEditMoment = (momentId: string, updates: any) => {
    console.log('Editing moment:', momentId, updates);
    toast.success('Moment updated successfully');
  };

  const handleDeleteMoment = (momentId: string) => {
    console.log('Deleting moment:', momentId);
    toast.success('Moment deleted successfully');
  };

  const handleApproveMoment = (momentId: string) => {
    console.log('Approving moment:', momentId);
    toast.success('Moment approved and shared with family!');
  };

  const handleArchiveMoment = (momentId: string) => {
    console.log('Archiving moment:', momentId);
    toast.success('Moment archived successfully');
  };

  const handleLikeMoment = (momentId: string) => {
    console.log('Liking moment:', momentId);
    toast.success('Added like to moment');
  };

  const handleCommentMoment = (momentId: string, comment: string) => {
    console.log('Commenting on moment:', momentId, comment);
    toast.success('Comment added to moment');
  };

  const handleShareMoment = (momentId: string) => {
    console.log('Sharing moment:', momentId);
    toast.info('Sharing options opened');
  };

  const handleMomentReaction = (momentId: string, type: 'like' | 'heart') => {
    console.log('Reacting to moment:', momentId, type);
    toast.success(`Added ${type} reaction to moment`);
  };

  const handleBulkMomentAction = (action: string, momentIds: string[]) => {
    console.log(`Bulk ${action} for moments:`, momentIds);
    toast.success(`Bulk ${action} completed for ${momentIds.length} moments`);
  };

  const handleMomentTemplate = (templateId: string) => {
    console.log('Using moment template:', templateId);
    toast.success('Moment template applied');
  };

  const handleMomentAnalytics = (momentId: string) => {
    console.log('Viewing moment analytics:', momentId);
    toast.info('Moment analytics opened');
  };

  const handleMomentExport = (momentId: string) => {
    console.log('Exporting moment:', momentId);
    toast.success('Moment exported successfully');
  };

  // Enhanced community handlers
  const handleCreatePost = (post: any) => {
    console.log('Creating community post:', post);
    toast.success(`Post "${post.title}" created successfully!`);
    
    if (post.postType === 'event') {
      toast.success('Event created and added to community calendar!');
    }
    
    if (post.isPinned) {
      toast.info('Post has been pinned to the top of the community');
    }
  };

  const handleReplyToPost = (postId: string, reply: string) => {
    console.log('Replying to community post:', postId, reply);
    toast.success('Reply posted successfully');
  };

  const handleToggleCommunityMode = (mode: 'notice-board' | 'two-way') => {
    console.log('Toggling community mode to:', mode);
    toast.success(`Community mode changed to ${mode === 'notice-board' ? 'Notice Board' : 'Two-Way Community'}`);
    
    if (mode === 'two-way') {
      toast.info('Two-way community mode enabled - families can now post and comment');
    } else {
      toast.info('Notice board mode enabled - staff posts only');
    }
  };

  const handleEditPost = (postId: string, updates: any) => {
    console.log('Editing community post:', postId, updates);
    toast.success('Post updated successfully');
  };

  const handleDeletePost = (postId: string) => {
    console.log('Deleting community post:', postId);
    toast.success('Post deleted successfully');
  };

  const handleModeratePost = (postId: string, action: string) => {
    console.log('Moderating community post:', postId, action);
    
    switch (action) {
      case 'approve':
        toast.success('Post approved and published to community');
        break;
      case 'archive':
        toast.success('Post archived successfully');
        break;
      case 'pin':
        toast.success('Post pinned to top of community');
        break;
      case 'unpin':
        toast.success('Post unpinned from community');
        break;
      case 'report':
        toast.info('Post reported for review');
        break;
      default:
        toast.success(`Post ${action} completed`);
    }
  };

  const handleManageUser = (userId: string, action: string) => {
    console.log('Managing community user:', userId, action);
    
    switch (action) {
      case 'approve':
        toast.success('User approved for community access');
        break;
      case 'remove':
        toast.success('User removed from community');
        break;
      case 'edit-permissions':
        toast.info('User permissions updated');
        break;
      case 'view-profile':
        toast.info('Opening user profile');
        break;
      default:
        toast.success(`User ${action} completed`);
    }
  };

  const handleCommunityReaction = (postId: string, type: 'like' | 'heart') => {
    console.log('Reacting to community post:', postId, type);
    toast.success(`Added ${type} reaction to post`);
  };

  const handleBulkPostAction = (action: string, postIds: string[]) => {
    console.log(`Bulk ${action} for community posts:`, postIds);
    toast.success(`Bulk ${action} completed for ${postIds.length} posts`);
  };

  const handleCommunityNotification = (type: string, enabled: boolean) => {
    console.log('Community notification setting:', type, enabled);
    toast.success(`${type} notifications ${enabled ? 'enabled' : 'disabled'}`);
  };

  const handleCommunityAnalytics = () => {
    console.log('Viewing community analytics');
    toast.info('Community analytics opened');
  };

  const handleInviteMember = (memberData: any) => {
    console.log('Inviting community member:', memberData);
    toast.success(`Invitation sent to ${memberData.email}`);
  };

  const handleCommunityExport = () => {
    console.log('Exporting community data');
    toast.success('Community data exported successfully');
  };

  // Enhanced ANGii Sync handlers
  const handleViewConcernDetail = (concernId: string) => {
    console.log('Viewing concern detail:', concernId);
    toast.info(`Opening concern ${concernId} details`);
  };

  const handleMessageFamily = (concernId: string) => {
    console.log('Messaging family about concern:', concernId);
    // Switch to messages and start new conversation
    setCurrentTab('messages');
    toast.success(`Response sent to family about concern ${concernId}`);
  };

  const handleResolveConcern = (concernId: string) => {
    console.log('Resolving concern:', concernId);
    toast.success(`Concern ${concernId} marked as resolved`);
  };

  const handleEditConcern = (concernId: string, updates: any) => {
    console.log('Editing concern:', concernId, updates);
    toast.success('Concern updated successfully');
  };

  const handleDeleteConcern = (concernId: string) => {
    console.log('Deleting concern:', concernId);
    toast.success('Concern deleted successfully');
  };

  const handleEscalateConcern = (concernId: string, escalationType: string) => {
    console.log('Escalating concern:', concernId, escalationType);
    
    switch (escalationType) {
      case 'medical':
        toast.success('Concern escalated to medical team');
        break;
      case 'management':
        toast.success('Concern escalated to care management');
        break;
      case 'urgent':
        toast.success('Concern marked as urgent and escalated');
        break;
      default:
        toast.success('Concern escalated successfully');
    }
  };

  const handleScheduleAppointment = (concernId: string, appointmentData: any) => {
    console.log('Scheduling appointment for concern:', concernId, appointmentData);
    
    const appointmentType = appointmentData.type;
    const appointmentDate = appointmentData.date;
    
    switch (appointmentType) {
      case 'call':
        toast.success(`Phone call scheduled for ${appointmentDate}`);
        break;
      case 'video':
        toast.success(`Video call scheduled for ${appointmentDate}`);
        break;
      case 'meeting':
        toast.success(`In-person meeting scheduled for ${appointmentDate}`);
        break;
      case 'follow-up':
        toast.success(`Follow-up check scheduled for ${appointmentDate}`);
        break;
      default:
        toast.success('Appointment scheduled successfully');
    }
  };

  const handleAddToCarePlan = (concernId: string, carePlanData: any) => {
    console.log('Adding concern to care plan:', concernId, carePlanData);
    toast.success(`Care plan item added: ${carePlanData.goal}`);
    
    if (carePlanData.priority === 'high') {
      toast.info('High priority care plan item created');
    }
  };

  const handleConcernAcknowledge = (concernId: string) => {
    console.log('Acknowledging concern:', concernId);
    toast.success(`Concern ${concernId} acknowledged`);
  };

  const handleConcernStar = (concernId: string, isStarred: boolean) => {
    console.log('Starring concern:', concernId, isStarred);
    toast.success(`Concern ${isStarred ? 'starred' : 'unstarred'}`);
  };

  const handleBulkConcernAction = (action: string, concernIds: string[]) => {
    console.log(`Bulk ${action} for concerns:`, concernIds);
    
    switch (action) {
      case 'acknowledge':
        toast.success(`${concernIds.length} concerns acknowledged`);
        break;
      case 'resolve':
        toast.success(`${concernIds.length} concerns resolved`);
        break;
      case 'escalate':
        toast.success(`${concernIds.length} concerns escalated`);
        break;
      case 'delete':
        toast.success(`${concernIds.length} concerns deleted`);
        break;
      default:
        toast.success(`Bulk ${action} completed for ${concernIds.length} concerns`);
    }
  };

  const handleConcernAnalytics = () => {
    console.log('Viewing concern analytics');
    toast.info('Concern analytics dashboard opened');
  };

  const handleConcernExport = () => {
    console.log('Exporting concern data');
    toast.success('Concern data exported successfully');
  };

  const handleConcernTemplate = (templateId: string) => {
    console.log('Using concern response template:', templateId);
    toast.success('Response template applied');
  };

  const handleFollowUpReminder = (concernId: string, reminderData: any) => {
    console.log('Setting follow-up reminder:', concernId, reminderData);
    toast.success('Follow-up reminder set');
  };

  const handleConcernNotification = (concernId: string, notificationType: string) => {
    console.log('Sending concern notification:', concernId, notificationType);
    toast.success('Notification sent to care team');
  };

  const handleExportReport = () => {
    toast.info('Exporting insights report...');
  };

  // If showing demo, render demo screen
  if (showDemo) {
    return (
      <>
        <DemoVideoScreen onExit={handleExitDemo} />
        <Toaster />
      </>
    );
  }

  // If not authenticated, show login screen with demo option
  if (!isAuthenticated) {
    return (
      <>
        <div className="min-h-screen bg-terrii-blue/20 flex items-center justify-center p-4">
          <div className="w-full max-w-md space-y-4">
            <LoginScreen onLogin={handleLogin} onForgotPassword={handleForgotPassword} />
            
            {/* Demo Access */}
            <div className="text-center">
              <button
                onClick={() => setShowDemo(true)}
                className="text-terrii-text-secondary hover:text-terrii-text-primary underline text-sm"
              >
                Watch Demo Video
              </button>
            </div>
          </div>
        </div>
        <Toaster />
      </>
    );
  }

  // If authenticated but profile not set up, show profile setup
  if (!isProfileSetup) {
    return (
      <>
        <ProfileSetupScreen onComplete={handleProfileSetup} />
        <Toaster />
      </>
    );
  }

  // Main application
  const renderCurrentScreen = () => {
    // Show resident profile detail if selected
    if (selectedResidentProfile) {
      return (
        <ResidentProfileScreen
          residentId={selectedResidentProfile}
          onBack={handleBackToResidents}
          onSendMessage={handleSendMessage}
          onQuickUpdate={handleQuickUpdate}
          onEditProfile={handleEditResidentProfile}
        />
      );
    }

    switch (currentTab) {
      case 'residents':
        return (
          <ResidentsScreen
            onViewProfile={handleViewResidentProfile}
            onSendMessage={handleSendMessage}
            onQuickUpdate={handleQuickUpdate}
            onAddResident={handleAddResident}
          />
        );
      case 'messages':
        return (
          <MessagesScreen
            selectedThread={selectedMessageThread}
            onSelectThread={handleSelectMessageThread}
            onBackToInbox={handleBackToInbox}
            onStartNewConversation={handleStartNewConversation}
          />
        );
      case 'moments':
        return (
          <SharedMomentsScreen
            onCreateMoment={handleCreateMoment}
            onEditMoment={handleEditMoment}
            onDeleteMoment={handleDeleteMoment}
            onApproveMoment={handleApproveMoment}
            onArchiveMoment={handleArchiveMoment}
          />
        );
      case 'community':
        return (
          <CommunityScreen
            onCreatePost={handleCreatePost}
            onReplyToPost={handleReplyToPost}
            onToggleMode={handleToggleCommunityMode}
            onEditPost={handleEditPost}
            onDeletePost={handleDeletePost}
            onModeratePost={handleModeratePost}
            onManageUser={handleManageUser}
            userRole="staff"
          />
        );
      case 'angela':
        return (
          <AngelaSyncScreen
            onViewConcernDetail={handleViewConcernDetail}
            onMessageFamily={handleMessageFamily}
            onResolveConcern={handleResolveConcern}
            onEditConcern={handleEditConcern}
            onDeleteConcern={handleDeleteConcern}
            onEscalateConcern={handleEscalateConcern}
            onScheduleAppointment={handleScheduleAppointment}
            onAddToCarePlan={handleAddToCarePlan}
          />
        );
      case 'insights':
        return <InsightsScreen onExportReport={handleExportReport} />;
      case 'settings':
        return (
          <SettingsScreen
            userProfile={userProfile}
            onUpdateProfile={handleUpdateProfile}
            onLogout={handleLogout}
            onShowDemo={() => setShowDemo(true)}
          />
        );
      default:
        return (
          <ResidentsScreen
            onViewProfile={handleViewResidentProfile}
            onSendMessage={handleSendMessage}
            onQuickUpdate={handleQuickUpdate}
            onAddResident={handleAddResident}
          />
        );
    }
  };

  return (
    <>
      <Layout currentTab={currentTab} onTabChange={handleTabChange}>
        {renderCurrentScreen()}
      </Layout>
      <Toaster />
    </>
  );
}