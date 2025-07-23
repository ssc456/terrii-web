# Family Member Portal - Quick Start Implementation

## 1. AWS Email Configuration (Do This First)

### A. Enable Amazon SES
```bash
# In AWS Console:
# 1. Go to Amazon SES
# 2. Verify your domain or email address
# 3. Request production access (if needed)
# 4. Note your SES region (us-east-1, eu-west-1, etc.)
```

### B. Add Email Lambda Function
```bash
cd /Users/scottcatterall/Documents/GitHub/terrii-web/terrii
amplify add function
```

**When prompted:**
- Template: `Hello World`
- Function name: `sendEmail`
- Runtime: `NodeJS`

Then replace the generated function with:

```javascript
// amplify/backend/function/sendEmail/src/index.js
const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: process.env.AWS_REGION });

exports.handler = async (event) => {
  console.log('Email function called with:', JSON.stringify(event, null, 2));
  
  try {
    const { to, subject, htmlBody, from = 'noreply@terrii.com' } = event;
    
    if (!to || !subject || !htmlBody) {
      throw new Error('Missing required email parameters');
    }

    const params = {
      Source: from,
      Destination: { ToAddresses: [to] },
      Message: {
        Subject: { Data: subject },
        Body: {
          Html: { Data: htmlBody },
          Text: { Data: htmlBody.replace(/<[^>]*>/g, '') } // Strip HTML for text version
        }
      }
    };

    console.log('Sending email with params:', JSON.stringify(params, null, 2));
    const result = await ses.sendEmail(params).promise();
    
    console.log('Email sent successfully:', result.MessageId);
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        messageId: result.MessageId 
      })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        error: error.message 
      })
    };
  }
};
```

### C. Add SES Permissions
Update `amplify/backend/function/sendEmail/sendEmail-cloudformation-template.json`:

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Parameters": {
    "CloudWatchRule": {
      "Type": "String",
      "Default": "NONE"
    },
    "deploymentBucketName": {
      "Type": "String"
    },
    "env": {
      "Type": "String"
    },
    "s3Key": {
      "Type": "String"
    }
  },
  "Conditions": {
    "ShouldNotCreateEnvResources": {
      "Fn::Equals": [
        {
          "Ref": "env"
        },
        "NONE"
      ]
    }
  },
  "Resources": {
    "LambdaFunction": {
      "Type": "AWS::Lambda::Function",
      "Metadata": {
        "aws:asset:path": "./src",
        "aws:asset:property": "Code"
      },
      "Properties": {
        "Code": {
          "S3Bucket": {
            "Ref": "deploymentBucketName"
          },
          "S3Key": {
            "Ref": "s3Key"
          }
        },
        "Handler": "index.handler",
        "FunctionName": {
          "Fn::If": [
            "ShouldNotCreateEnvResources",
            "sendEmail",
            {
              "Fn::Join": [
                "",
                [
                  "sendEmail",
                  "-",
                  {
                    "Ref": "env"
                  }
                ]
              ]
            }
          ]
        },
        "Environment": {
          "Variables": {
            "ENV": {
              "Ref": "env"
            },
            "REGION": {
              "Ref": "AWS::Region"
            }
          }
        },
        "Role": {
          "Fn::GetAtt": [
            "LambdaExecutionRole",
            "Arn"
          ]
        },
        "Runtime": "nodejs18.x",
        "Layers": [],
        "Timeout": 25
      }
    },
    "LambdaExecutionRole": {
      "Type": "AWS::IAM::Role",
      "Properties": {
        "RoleName": {
          "Fn::If": [
            "ShouldNotCreateEnvResources",
            "terriiLambdaRole2a123456",
            {
              "Fn::Join": [
                "",
                [
                  "terriiLambdaRole2a123456",
                  "-",
                  {
                    "Ref": "env"
                  }
                ]
              ]
            }
          ]
        },
        "AssumeRolePolicyDocument": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Effect": "Allow",
              "Principal": {
                "Service": [
                  "lambda.amazonaws.com"
                ]
              },
              "Action": [
                "sts:AssumeRole"
              ]
            }
          ]
        }
      }
    },
    "lambdaexecutionpolicy": {
      "DependsOn": [
        "LambdaExecutionRole"
      ],
      "Type": "AWS::IAM::Policy",
      "Properties": {
        "PolicyName": "lambda-execution-policy",
        "Roles": [
          {
            "Ref": "LambdaExecutionRole"
          }
        ],
        "PolicyDocument": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Effect": "Allow",
              "Action": [
                "logs:CreateLogGroup",
                "logs:CreateLogStream",
                "logs:PutLogEvents"
              ],
              "Resource": {
                "Fn::Sub": [
                  "arn:aws:logs:${region}:${account}:log-group:/aws/lambda/${lambda}:log-stream:*",
                  {
                    "region": {
                      "Ref": "AWS::Region"
                    },
                    "account": {
                      "Ref": "AWS::AccountId"
                    },
                    "lambda": {
                      "Ref": "LambdaFunction"
                    }
                  }
                ]
              }
            },
            {
              "Effect": "Allow",
              "Action": [
                "ses:SendEmail",
                "ses:SendRawEmail"
              ],
              "Resource": "*"
            }
          ]
        }
      }
    }
  },
  "Outputs": {
    "Name": {
      "Value": {
        "Ref": "LambdaFunction"
      }
    },
    "Arn": {
      "Value": {
        "Fn::GetAtt": [
          "LambdaFunction",
          "Arn"
        ]
      }
    },
    "Region": {
      "Value": {
        "Ref": "AWS::Region"
      }
    },
    "LambdaExecutionRole": {
      "Value": {
        "Ref": "LambdaExecutionRole"
      }
    }
  }
}
```

Deploy the function:
```bash
amplify push
```

## 2. Add Invitation Tracking to Schema

Add this to your GraphQL schema:

```graphql
type TerriiInvitation @model @auth(rules: [
  { allow: groups, groups: ["ADMIN", "MANAGER", "CARE_STAFF"] }
]) {
  id: ID!
  familyMemberID: ID! @index(name: "byFamilyMember")
  familyMember: TerriiResidentFamily @belongsTo(fields: ["familyMemberID"])
  token: String! @index(name: "byToken")
  email: String!
  invitedBy: String!
  careHomeName: String!
  status: InvitationStatus!
  expiresAt: AWSDateTime!
  createdAt: AWSDateTime!
  updatedAt: AWSDateTime!
}

enum InvitationStatus {
  PENDING
  USED
  EXPIRED
}
```

Run:
```bash
amplify push
```

## 3. Add Email Helper Functions

Create this file:

```typescript
// src/lib/emailService.ts
import { generateClient } from '@aws-amplify/api';
import { Lambda } from '@aws-amplify/functions';

const client = generateClient();

export async function sendFamilyInvitationEmail({
  email,
  familyMemberName,
  residentName, 
  careHomeName,
  invitedByName,
  registrationUrl
}: {
  email: string;
  familyMemberName: string;
  residentName: string;
  careHomeName: string;
  invitedByName: string;
  registrationUrl: string;
}) {
  
  const htmlBody = `
    <div style="font-family: 'Nunito', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #2C3E50;">
      <div style="background: linear-gradient(135deg, #DFF2E1, #E6F1FA); padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: #2C3E50; margin-bottom: 20px; font-size: 28px;">You're invited to connect with ${residentName}</h1>
        <p style="font-size: 18px; margin-bottom: 30px; line-height: 1.5;">
          ${invitedByName} from ${careHomeName} has invited you to join TERRii to stay connected with ${residentName}.
        </p>
        <a href="${registrationUrl}" style="background: #C1E8C5; color: #2C3E50; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: 600; font-size: 16px;">
          Accept Invitation & Register
        </a>
      </div>
      
      <div style="padding: 30px; background: white; border-radius: 0 0 8px 8px;">
        <h2 style="color: #2C3E50; margin-bottom: 20px;">What is TERRii?</h2>
        <p style="line-height: 1.6; margin-bottom: 20px;">TERRii is a secure platform that helps families stay connected with their loved ones in care. You'll be able to:</p>
        <ul style="line-height: 1.8; margin-bottom: 30px; padding-left: 20px;">
          <li>Receive updates about ${residentName}'s daily activities</li>
          <li>View shared moments and photos</li>
          <li>Communicate directly with care staff</li>
          <li>Stay informed about care and wellbeing</li>
        </ul>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #C1E8C5;">
          <p style="margin: 0; color: #5A6C7D; font-size: 14px;">
            <strong>Important:</strong> This invitation will expire in 7 days. If you have any questions, please contact ${careHomeName} directly.
          </p>
        </div>
      </div>
    </div>
  `;

  try {
    const result = await Lambda.invoke({
      funcName: 'sendEmail',
      payload: {
        to: email,
        subject: `You're invited to connect with ${residentName} on TERRii`,
        htmlBody
      }
    });

    console.log('Email sent successfully:', result);
    return { success: true };
  } catch (error) {
    console.error('Error sending invitation email:', error);
    throw new Error('Failed to send invitation email');
  }
}
```

## 4. Update terriiApi.ts

Add these functions to your existing `terriiApi.ts`:

```typescript
// Add to src/lib/terriiApi.ts

import { generateClient } from '@aws-amplify/api';
import { 
  createTerriiInvitation,
  getTerriiInvitationByToken,
  updateTerriiInvitation,
  updateTerriiResidentFamily 
} from '../graphql/mutations';
import { sendFamilyInvitationEmail } from './emailService';
import { v4 as uuidv4 } from 'uuid';

const client = generateClient();

/**
 * Send invitation to family member
 */
export async function inviteFamilyMemberToRegister(
  familyMemberID: string,
  invitedByName: string
): Promise<{ success: boolean; email: string }> {
  try {
    // Get family member details
    const familyMember = await getFamilyMemberById(familyMemberID);
    if (!familyMember?.email) {
      throw new Error('Family member has no email address');
    }

    if (familyMember.isRegistered) {
      throw new Error('Family member is already registered');
    }

    // Generate secure invitation token
    const invitationToken = uuidv4() + '-' + Date.now().toString(36);
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7); // 7 days to register

    // Create invitation record
    const invitation = await client.graphql({
      query: createTerriiInvitation,
      variables: {
        input: {
          familyMemberID,
          token: invitationToken,
          email: familyMember.email,
          invitedBy: invitedByName,
          careHomeName: familyMember.resident?.careHome?.name || 'Care Home',
          status: 'PENDING',
          expiresAt: expirationDate.toISOString()
        }
      }
    });

    // Send invitation email
    const registrationUrl = `${window.location.origin}/family/register?token=${invitationToken}`;
    
    await sendFamilyInvitationEmail({
      email: familyMember.email,
      familyMemberName: familyMember.name,
      residentName: familyMember.resident?.name || 'Your loved one',
      careHomeName: familyMember.resident?.careHome?.name || 'Care Home',
      invitedByName,
      registrationUrl
    });

    return { 
      success: true, 
      email: familyMember.email 
    };
  } catch (error) {
    console.error('Error sending family member invitation:', error);
    throw error;
  }
}

/**
 * Validate invitation token
 */
export async function validateInvitationToken(token: string) {
  try {
    const response = await client.graphql({
      query: getTerriiInvitationByToken,
      variables: { token }
    });

    const invitation = response.data?.getTerriiInvitationByToken?.items?.[0];
    
    if (!invitation) {
      return { isValid: false, error: 'Invalid invitation token' };
    }

    if (invitation.status !== 'PENDING') {
      return { isValid: false, error: 'Invitation has already been used' };
    }

    if (new Date(invitation.expiresAt) < new Date()) {
      return { isValid: false, error: 'Invitation has expired' };
    }

    return {
      isValid: true,
      invitation,
      familyMember: invitation.familyMember,
      residentName: invitation.familyMember?.resident?.name,
      careHomeName: invitation.careHomeName
    };
  } catch (error) {
    console.error('Error validating invitation token:', error);
    return { isValid: false, error: 'Failed to validate invitation' };
  }
}

/**
 * Mark invitation as used and link user to family member
 */
export async function completeInvitationRegistration(
  invitationToken: string,
  userID: string
): Promise<boolean> {
  try {
    // Get invitation
    const validation = await validateInvitationToken(invitationToken);
    if (!validation.isValid) {
      throw new Error(validation.error);
    }

    // Mark invitation as used
    await client.graphql({
      query: updateTerriiInvitation,
      variables: {
        input: {
          id: validation.invitation.id,
          status: 'USED'
        }
      }
    });

    // Link user to family member record
    await client.graphql({
      query: updateTerriiResidentFamily,
      variables: {
        input: {
          id: validation.familyMember.id,
          userID,
          isRegistered: true
        }
      }
    });

    return true;
  } catch (error) {
    console.error('Error completing invitation registration:', error);
    throw error;
  }
}

/**
 * Get residents for a family member user
 */
export async function getResidentsForFamilyMember(userID: string) {
  try {
    const response = await client.graphql({
      query: `
        query GetResidentsForFamilyMember($userID: ID!) {
          listTerriiResidentFamilies(filter: { userID: { eq: $userID } }) {
            items {
              id
              relationshipType
              resident {
                id
                name
                roomNumber
                profilePicture
                careHome {
                  id
                  name
                }
              }
            }
          }
        }
      `,
      variables: { userID }
    });

    return response.data?.listTerriiResidentFamilies?.items?.map(item => ({
      ...item.resident,
      relationshipType: item.relationshipType
    })) || [];
  } catch (error) {
    console.error('Error getting residents for family member:', error);
    return [];
  }
}
```

## 5. Create Family Registration Screen

```typescript
// src/screens/FamilyRegistrationScreen.tsx
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { validateInvitationToken, completeInvitationRegistration } from '../lib/terriiApi';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { toast } from 'react-hot-toast';

export function FamilyRegistrationScreen() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [invitation, setInvitation] = useState<any>(null);
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
      navigate('/', { 
        state: { error: 'No invitation token provided' } 
      });
    }
  }, [invitationToken]);

  const validateInvitation = async () => {
    try {
      const validation = await validateInvitationToken(invitationToken!);
      if (validation.isValid) {
        setInvitation(validation);
        setRegistrationData(prev => ({
          ...prev,
          email: validation.familyMember?.email || ''
        }));
      } else {
        throw new Error(validation.error);
      }
    } catch (error: any) {
      console.error('Error validating invitation:', error);
      navigate('/', { 
        state: { 
          error: error.message || 'Invalid or expired invitation link' 
        } 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registrationData.password !== registrationData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (registrationData.password.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return;
    }

    try {
      setRegistering(true);

      // Create Cognito user account
      const { userSub } = await Auth.signUp({
        username: registrationData.email,
        password: registrationData.password,
        attributes: {
          email: registrationData.email,
          given_name: registrationData.firstName,
          family_name: registrationData.lastName,
          'custom:userType': 'FAMILY_MEMBER'
        }
      });

      // Complete invitation registration (link user to family member)
      await completeInvitationRegistration(invitationToken!, userSub);

      toast.success('Registration successful! Please check your email to verify your account.');
      navigate('/family/verify-email', { 
        state: { 
          email: registrationData.email,
          residentName: invitation.residentName
        }
      });

    } catch (error: any) {
      console.error('Registration error:', error);
      
      if (error.code === 'UsernameExistsException') {
        toast.error('An account with this email already exists');
      } else if (error.code === 'InvalidPasswordException') {
        toast.error('Password does not meet requirements');
      } else {
        toast.error(error.message || 'Registration failed. Please try again.');
      }
    } finally {
      setRegistering(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-terrii-blue/20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-terrii-green mx-auto mb-4"></div>
          <p className="text-terrii-text-secondary">Validating invitation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-terrii-blue/20 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-terrii max-w-md w-full p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-terrii-text-primary mb-4">
            Welcome to TERRii
          </h1>
          <p className="text-terrii-text-secondary">
            You've been invited to stay connected with {invitation?.residentName} 
            at {invitation?.careHomeName}
          </p>
        </div>

        <form onSubmit={handleRegistration} className="space-y-6">
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
            disabled={!!invitation?.familyMember?.email}
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
            placeholder="Minimum 8 characters"
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

        <div className="mt-6 text-center">
          <p className="text-sm text-terrii-text-secondary">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-terrii-green hover:underline"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
```

## 6. Add Routes to App.tsx

Add these routes to your existing App.tsx:

```typescript
// Add to App.tsx routes
<Route path="/family/register" element={<FamilyRegistrationScreen />} />
<Route path="/family/verify-email" element={<FamilyEmailVerificationScreen />} />
<Route 
  path="/family/dashboard" 
  element={
    <ProtectedRoute allowedRoles={['FAMILY']}>
      <FamilyDashboard />
    </ProtectedRoute>
  } 
/>
```

## 7. Test the System

### A. Test Email Function
```bash
# In AWS Lambda console, test with:
{
  "to": "your-email@example.com",
  "subject": "Test Email",
  "htmlBody": "<h1>Hello from TERRii!</h1><p>Email system is working.</p>"
}
```

### B. Test Registration Flow
1. Create a family member with an email in your admin interface
2. Click "Invite Family Member" (you'll need to add this button)
3. Check email for invitation
4. Click registration link
5. Complete registration
6. Verify account is linked

## 8. Add "Invite Family Member" Button

Add this to your family member management screen:

```typescript
// In your existing family member component
const handleInviteFamily = async (familyMember: any) => {
  try {
    await inviteFamilyMemberToRegister(
      familyMember.id,
      currentUser.name
    );
    toast.success(`Invitation sent to ${familyMember.email}`);
  } catch (error: any) {
    toast.error(error.message || 'Failed to send invitation');
  }
};

// Add this button next to family members who aren't registered
{!familyMember.isRegistered && familyMember.email && (
  <Button
    size="sm"
    onClick={() => handleInviteFamily(familyMember)}
    className="bg-terrii-green hover:bg-terrii-green/90"
  >
    📧 Invite to Register
  </Button>
)}
```

This gives you a complete working family member invitation and registration system that integrates with your existing infrastructure.
