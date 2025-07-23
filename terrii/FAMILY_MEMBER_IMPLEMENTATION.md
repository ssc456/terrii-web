# Family Member Lifecycle Implementation Plan

## Overview
This document outlines the complete implementation of the family member lifecycle from invitation to active user account, including the technical requirements for AWS email services.

## Architecture Summary

Your current setup is already well-architected:
- ✅ **TerriiResidentFamily** has `userID`, `user`, `isRegistered` fields
- ✅ **TerriiUserRole** includes `FAMILY` role
- ✅ **AWS Cognito** handles user authentication
- ✅ **Role-based access control** already implemented

## Implementation Components

### 1. Family Member Invitation System

#### A. Invitation API Functions
```typescript
// Add to terriiApi.ts

/**
 * Send invitation email to family member
 */
export const sendFamilyMemberInvitation = async (
  familyMemberId: string,
  invitedByName: string,
  careHomeName: string
) => {
  try {
    const familyMember = await getFamilyMemberById(familyMemberId);
    if (!familyMember?.email) {
      throw new Error('Family member has no email address');
    }

    // Generate secure invitation token
    const invitationToken = generateSecureToken();
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7); // 7 days to register

    // Store invitation in database
    await createInvitation({
      familyMemberId,
      token: invitationToken,
      expiresAt: expirationDate.toISOString(),
      invitedBy: invitedByName,
      status: 'PENDING'
    });

    // Send email via AWS SES
    await sendInvitationEmail({
      to: familyMember.email,
      familyMemberName: familyMember.name,
      residentName: familyMember.resident?.name,
      careHomeName,
      invitedByName,
      registrationUrl: `${process.env.REACT_APP_BASE_URL}/family/register?token=${invitationToken}`
    });

    return { success: true, email: familyMember.email };
  } catch (error) {
    console.error('Error sending invitation:', error);
    throw error;
  }
};
```

#### B. Email Templates
Create email templates for different stages:

```html
<!-- Family Member Invitation Email -->
<div style="font-family: 'Nunito', Arial, sans-serif; color: #2C3E50;">
  <div style="background: linear-gradient(135deg, #DFF2E1, #E6F1FA); padding: 40px; text-align: center;">
    <h1 style="color: #2C3E50; margin-bottom: 20px;">You're invited to connect with {{residentName}}</h1>
    <p style="font-size: 18px; margin-bottom: 30px;">
      {{invitedByName}} from {{careHomeName}} has invited you to join TERRii to stay connected with {{residentName}}.
    </p>
    <a href="{{registrationUrl}}" style="background: #C1E8C5; color: #2C3E50; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: 600;">
      Accept Invitation & Register
    </a>
  </div>
  <div style="padding: 30px; background: white;">
    <h2>What is TERRii?</h2>
    <p>TERRii is a secure platform that helps families stay connected with their loved ones in care. You'll be able to:</p>
    <ul>
      <li>Receive updates about {{residentName}}'s daily activities</li>
      <li>View shared moments and photos</li>
      <li>Communicate directly with care staff</li>
      <li>Stay informed about care and wellbeing</li>
    </ul>
    <p style="margin-top: 30px; color: #5A6C7D; font-size: 14px;">
      This invitation will expire in 7 days. If you have any questions, please contact {{careHomeName}} directly.
    </p>
  </div>
</div>
```

### 2. Family Registration Portal

#### A. Registration Routes
```typescript
// Add to App.tsx routes

<Route 
  path="/family/register" 
  element={<FamilyRegistrationScreen />} 
/>
<Route 
  path="/family/dashboard" 
  element={
    <ProtectedRoute allowedRoles={['FAMILY']}>
      <FamilyDashboard />
    </ProtectedRoute>
  } 
/>
<Route 
  path="/family/resident/:residentId" 
  element={
    <ProtectedRoute allowedRoles={['FAMILY']}>
      <FamilyResidentView />
    </ProtectedRoute>
  } 
/>
```

#### B. Family Registration Screen
```typescript
// Create: src/screens/FamilyRegistrationScreen.tsx

import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Auth } from '../lib/amplify';
import { validateInvitationToken, linkUserToFamilyMember } from '../lib/terriiApi';

export function FamilyRegistrationScreen() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [invitation, setInvitation] = useState(null);
  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(true);
  const [registering, setRegistering] = useState(false);

  const invitationToken = searchParams.get('token');

  useEffect(() => {
    if (invitationToken) {
      validateInvitation();
    } else {
      // Invalid invitation
      navigate('/');
    }
  }, [invitationToken]);

  const validateInvitation = async () => {
    try {
      const invitationData = await validateInvitationToken(invitationToken);
      if (invitationData.isValid) {
        setInvitation(invitationData);
        // Pre-fill email if available
        setRegistrationData(prev => ({
          ...prev,
          email: invitationData.familyMember.email || ''
        }));
      } else {
        throw new Error('Invalid or expired invitation');
      }
    } catch (error) {
      console.error('Error validating invitation:', error);
      navigate('/', { 
        state: { 
          error: 'Invalid or expired invitation link' 
        } 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    
    if (registrationData.password !== registrationData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      setRegistering(true);

      // Create Cognito user account
      const { user } = await Auth.signUp({
        username: registrationData.email,
        password: registrationData.password,
        attributes: {
          email: registrationData.email,
          given_name: registrationData.firstName,
          family_name: registrationData.lastName,
          'custom:userType': 'FAMILY_MEMBER'
        }
      });

      // Link user to family member record
      await linkUserToFamilyMember(
        user.userId, 
        invitation.familyMember.email
      );

      // Mark invitation as used
      await markInvitationAsUsed(invitationToken);

      toast.success('Registration successful! Please check your email to verify your account.');
      navigate('/family/verify', { 
        state: { 
          email: registrationData.email,
          residentName: invitation.familyMember.resident.name
        }
      });

    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed. Please try again.');
    } finally {
      setRegistering(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-terrii-blue/20 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-terrii max-w-md w-full p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-terrii-text-primary mb-4">
            Welcome to TERRii
          </h1>
          <p className="text-terrii-text-secondary">
            You've been invited to stay connected with {invitation?.familyMember.resident.name} 
            at {invitation?.careHome.name}
          </p>
        </div>

        <form onSubmit={handleRegistration} className="space-y-6">
          {/* Registration form fields */}
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name"
              value={registrationData.firstName}
              onChange={(e) => setRegistrationData(prev => ({
                ...prev, firstName: e.target.value
              }))}
              required
            />
            <Input
              label="Last Name"
              value={registrationData.lastName}
              onChange={(e) => setRegistrationData(prev => ({
                ...prev, lastName: e.target.value
              }))}
              required
            />
          </div>

          <Input
            label="Email Address"
            type="email"
            value={registrationData.email}
            onChange={(e) => setRegistrationData(prev => ({
              ...prev, email: e.target.value
            }))}
            required
            disabled={!!invitation?.familyMember.email}
          />

          <Input
            label="Password"
            type="password"
            value={registrationData.password}
            onChange={(e) => setRegistrationData(prev => ({
              ...prev, password: e.target.value
            }))}
            required
            minLength={8}
          />

          <Input
            label="Confirm Password"
            type="password"
            value={registrationData.confirmPassword}
            onChange={(e) => setRegistrationData(prev => ({
              ...prev, confirmPassword: e.target.value
            }))}
            required
            minLength={8}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={registering}
          >
            {registering ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>
      </div>
    </div>
  );
}
```

### 3. Family Member Portal

#### A. Family Dashboard
```typescript
// Create: src/screens/FamilyDashboard.tsx

export function FamilyDashboard() {
  const { terriiProfile } = useAuth();
  const [myResidents, setMyResidents] = useState([]);
  const [recentUpdates, setRecentUpdates] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState(0);

  useEffect(() => {
    loadFamilyData();
  }, [terriiProfile]);

  const loadFamilyData = async () => {
    try {
      // Get residents this family member is linked to
      const residents = await getResidentsForFamilyMember(terriiProfile.userID);
      setMyResidents(residents);

      // Get recent updates for these residents
      const updates = await getRecentUpdatesForResidents(
        residents.map(r => r.id)
      );
      setRecentUpdates(updates);

      // Get unread message count
      const messageCount = await getUnreadMessageCount(terriiProfile.userID);
      setUnreadMessages(messageCount);
    } catch (error) {
      console.error('Error loading family dashboard:', error);
    }
  };

  return (
    <div className="min-h-screen bg-terrii-blue/20">
      {/* Family-specific header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-4">
          <h1 className="text-xl font-bold text-terrii-text-primary">
            My Family Dashboard
          </h1>
          <p className="text-terrii-text-secondary">
            Stay connected with your loved ones
          </p>
        </div>
      </header>

      <main className="p-4 space-y-6">
        {/* My Residents */}
        <div className="bg-white rounded-lg shadow-terrii p-6">
          <h2 className="text-lg font-semibold mb-4">My Loved Ones</h2>
          <div className="grid gap-4">
            {myResidents.map(resident => (
              <FamilyResidentCard 
                key={resident.id}
                resident={resident}
                onClick={() => navigate(`/family/resident/${resident.id}`)}
              />
            ))}
          </div>
        </div>

        {/* Recent Updates */}
        <div className="bg-white rounded-lg shadow-terrii p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Updates</h2>
          <div className="space-y-3">
            {recentUpdates.map(update => (
              <FamilyUpdateCard key={update.id} update={update} />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-terrii p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              onClick={() => navigate('/family/messages')}
              className="flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Messages</span>
              {unreadMessages > 0 && (
                <Badge className="bg-terrii-error text-white">
                  {unreadMessages}
                </Badge>
              )}
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/family/moments')}
              className="flex items-center justify-center space-x-2"
            >
              <Heart className="h-5 w-5" />
              <span>Shared Moments</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
```

#### B. Role-Based Access Control
```typescript
// Update: src/contexts/AuthContext.tsx

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return {
    ...context,
    // Helper methods for role checking
    isStaff: () => ['ADMIN', 'CARE_STAFF', 'MANAGER'].includes(context.terriiProfile?.role),
    isFamily: () => context.terriiProfile?.role === 'FAMILY',
    canAccessResident: (residentId: string) => {
      if (context.terriiProfile?.role === 'FAMILY') {
        // Family members can only access their linked residents
        return context.myResidents?.some(r => r.id === residentId);
      }
      // Staff can access all residents in their care home
      return context.terriiProfile?.careHomeID !== null;
    }
  };
}
```

#### C. Protected Route Component
```typescript
// Update: ProtectedRoute component

function ProtectedRoute({ 
  children, 
  allowedRoles = [] 
}: { 
  children: React.ReactElement;
  allowedRoles?: string[];
}) {
  const { isAuthenticated, isLoading, terriiProfile, isFamily } = useAuth();
  
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check role-based access
  if (allowedRoles.length > 0 && terriiProfile) {
    if (!allowedRoles.includes(terriiProfile.role)) {
      // Redirect family members to family dashboard
      if (isFamily()) {
        return <Navigate to="/family/dashboard" replace />;
      }
      // Redirect staff to main dashboard
      return <Navigate to="/" replace />;
    }
  }

  // Family members need special routing
  if (isFamily() && !location.pathname.startsWith('/family/')) {
    return <Navigate to="/family/dashboard" replace />;
  }

  return children;
}
```

## AWS Email Configuration

### 1. Amazon SES Setup

#### A. Enable SES in your AWS Account
```bash
# Install AWS CLI and configure
aws configure

# Verify your domain for sending emails
aws sesv2 put-email-identity --email-identity yourdomain.com

# Create sending authorization policy
aws sesv2 put-configuration-set-event-destination \
  --configuration-set-name terrii-emails \
  --event-destination-name cloudwatch-destination \
  --destination \
  CloudWatchDestination='{
    DimensionConfigurations=[{
      DimensionName=MessageTag,
      DimensionValueSource=MessageHeader,
      DefaultDimensionValue=none
    }]
  }'
```

#### B. Create SES Lambda Function
```typescript
// Create: amplify/backend/function/sendEmail/src/index.js

const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' }); // Use your region

exports.handler = async (event) => {
  try {
    const { to, subject, htmlBody, textBody, templateName, templateData } = event;
    
    let params;
    
    if (templateName) {
      // Use SES template
      params = {
        Source: process.env.FROM_EMAIL,
        Destination: { ToAddresses: [to] },
        Template: templateName,
        TemplateData: JSON.stringify(templateData)
      };
      
      await ses.sendTemplatedEmail(params).promise();
    } else {
      // Send custom email
      params = {
        Source: process.env.FROM_EMAIL,
        Destination: { ToAddresses: [to] },
        Message: {
          Subject: { Data: subject },
          Body: {
            Html: { Data: htmlBody },
            Text: { Data: textBody }
          }
        }
      };
      
      await ses.sendEmail(params).promise();
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' })
    };
  }
};
```

#### C. Add Lambda Function to Amplify
```bash
# From your Amplify project root
amplify add function

# Choose:
# - Template: Hello World
# - Function name: sendEmail
# - Runtime: NodeJS

# Update the function code with the SES implementation above

# Deploy
amplify push
```

#### D. Environment Variables
```javascript
// Add to amplify/backend/function/sendEmail/src/index.js environment
process.env.FROM_EMAIL = 'noreply@yourdomain.com';
process.env.CARE_HOME_SUPPORT_EMAIL = 'support@yourdomain.com';
```

### 2. Email Templates in SES

#### A. Family Invitation Template
```json
{
  "TemplateName": "FamilyMemberInvitation",
  "Subject": "You're invited to connect with {{residentName}} on TERRii",
  "HtmlPart": "<!-- HTML template from above -->",
  "TextPart": "Hi {{familyMemberName}}, you've been invited to join TERRii to stay connected with {{residentName}} at {{careHomeName}}. Visit {{registrationUrl}} to get started."
}
```

#### B. Create Templates via CLI
```bash
aws sesv2 create-email-template \
  --template-name FamilyMemberInvitation \
  --template-content file://invitation-template.json
```

### 3. Integration with Your App

#### A. Email Service Functions
```typescript
// Add to terriiApi.ts

import { invokeFunction } from '../lib/amplify';

export const sendInvitationEmail = async (emailData: {
  to: string;
  familyMemberName: string;
  residentName: string;
  careHomeName: string;
  invitedByName: string;
  registrationUrl: string;
}) => {
  try {
    const result = await invokeFunction({
      functionName: 'sendEmail',
      payload: {
        to: emailData.to,
        templateName: 'FamilyMemberInvitation',
        templateData: emailData
      }
    });
    
    return result;
  } catch (error) {
    console.error('Error sending invitation email:', error);
    throw new Error('Failed to send invitation email');
  }
};

export const sendWelcomeEmail = async (familyMemberEmail: string, residentName: string) => {
  try {
    await invokeFunction({
      functionName: 'sendEmail',
      payload: {
        to: familyMemberEmail,
        templateName: 'FamilyMemberWelcome',
        templateData: {
          residentName,
          loginUrl: `${process.env.REACT_APP_BASE_URL}/login`
        }
      }
    });
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw error;
  }
};
```

## Implementation Steps

### Phase 1: Database & API (Week 1)
1. ✅ Schema already supports family member linking
2. Add invitation tracking table
3. Implement invitation API functions
4. Add family member portal API endpoints

### Phase 2: Email Infrastructure (Week 1)
1. Set up Amazon SES
2. Create email templates
3. Deploy Lambda function for email sending
4. Test email delivery

### Phase 3: Registration Portal (Week 2)
1. Create family registration screens
2. Implement invitation validation
3. Add user registration flow
4. Link new users to family member records

### Phase 4: Family Portal (Week 2-3)
1. Create family dashboard
2. Build family-specific screens
3. Implement role-based access control
4. Add family messaging interface

### Phase 5: Staff Interface Updates (Week 3)
1. Add invitation management to staff screens
2. Update family member lists to show registration status
3. Add "Invite Family Member" buttons
4. Update messaging to show registered vs unregistered family

## Security Considerations

1. **Invitation Tokens**: Use cryptographically secure tokens with expiration
2. **Email Verification**: Require email verification for family accounts
3. **Access Control**: Strict role-based access to resident data
4. **Data Privacy**: Family members only see their linked residents
5. **Audit Trail**: Log all family member invitations and registrations

## Cost Considerations

- **AWS SES**: ~$0.10 per 1,000 emails
- **Lambda**: Minimal cost for email function
- **Cognito**: Free for first 50,000 MAUs
- **Storage**: Minimal additional storage for invitation tracking

This implementation provides a complete family member lifecycle while maintaining security and proper access controls.
