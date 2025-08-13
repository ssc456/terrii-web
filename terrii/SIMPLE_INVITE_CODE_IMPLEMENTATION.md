# Simple Invite Code Implementation

## 1. Schema Changes

Add this to your `amplify/backend/api/AcecuraApp/schema.graphql`:

```graphql
type TerriiInviteCode @model @auth(rules: [
  { allow: groups, groups: ["ADMIN", "MANAGER", "CARE_STAFF"] }
]) {
  id: ID!
  code: String! @index(name: "byCode")
  familyMemberID: ID! @index(name: "byFamilyMember")
  familyMember: TerriiResidentFamily @belongsTo(fields: ["familyMemberID"])
  isUsed: Boolean!
  usedAt: AWSDateTime
  expiresAt: AWSDateTime!
  createdByID: ID!
  createdBy: TerriiUserProfile @belongsTo(fields: ["createdByID"])
  createdAt: AWSDateTime!
  updatedAt: AWSDateTime!
}
```

## 2. API Functions for Web App

Add these functions to your `src/lib/terriiApi.ts`:

```typescript
// Add to src/lib/terriiApi.ts

/**
 * Generate a simple 8-digit invite code (XXXX-XXXX format)
 */
function generateInviteCode(): string {
  const chars = '0123456789';
  let code = '';
  for (let i = 0; i < 8; i++) {
    if (i === 4) code += '-';
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

/**
 * Generate invite code for family member
 */
export async function generateFamilyInviteCode(
  familyMemberID: string,
  createdByUserID: string
): Promise<{ success: boolean; code: string }> {
  try {
    // Check if family member already has an unused code
    const existingResponse = await client.graphql({
      query: `
        query GetExistingCode($familyMemberID: ID!) {
          listTerriiInviteCodes(filter: { 
            familyMemberID: { eq: $familyMemberID }
            isUsed: { eq: false }
          }) {
            items {
              id
              code
              expiresAt
            }
          }
        }
      `,
      variables: { familyMemberID }
    });

    const existingCodes = existingResponse.data?.listTerriiInviteCodes?.items || [];
    
    // Check if there's a valid existing code
    const validCode = existingCodes.find(code => 
      new Date(code.expiresAt) > new Date()
    );

    if (validCode) {
      return { success: true, code: validCode.code };
    }

    // Generate new code
    let newCode: string;
    let isUnique = false;
    let attempts = 0;

    do {
      newCode = generateInviteCode();
      attempts++;
      
      // Check if code already exists
      const checkResponse = await client.graphql({
        query: `
          query CheckCodeExists($code: String!) {
            listTerriiInviteCodes(filter: { code: { eq: $code } }) {
              items {
                id
              }
            }
          }
        `,
        variables: { code: newCode }
      });

      isUnique = (checkResponse.data?.listTerriiInviteCodes?.items?.length || 0) === 0;
    } while (!isUnique && attempts < 10);

    if (!isUnique) {
      throw new Error('Failed to generate unique invite code');
    }

    // Set expiration to 7 days from now
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);

    // Create invite code record
    const createResponse = await client.graphql({
      query: `
        mutation CreateInviteCode($input: CreateTerriiInviteCodeInput!) {
          createTerriiInviteCode(input: $input) {
            id
            code
            familyMemberID
            isUsed
            expiresAt
            createdByID
            createdAt
          }
        }
      `,
      variables: {
        input: {
          code: newCode,
          familyMemberID,
          isUsed: false,
          expiresAt: expirationDate.toISOString(),
          createdByID: createdByUserID
        }
      }
    });

    return { 
      success: true, 
      code: newCode
    };
  } catch (error) {
    console.error('Error generating invite code:', error);
    throw error;
  }
}

/**
 * Validate invite code and get family member info
 */
export async function validateInviteCode(code: string) {
  try {
    const response = await client.graphql({
      query: `
        query ValidateInviteCode($code: String!) {
          listTerriiInviteCodes(filter: { code: { eq: $code } }) {
            items {
              id
              code
              familyMemberID
              isUsed
              usedAt
              expiresAt
              familyMember {
                id
                name
                relationship
                email
                residentID
                resident {
                  id
                  name
                  careHome {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      `,
      variables: { code }
    });

    const inviteCodes = response.data?.listTerriiInviteCodes?.items || [];
    
    if (inviteCodes.length === 0) {
      return { isValid: false, error: 'Invalid invite code' };
    }

    const inviteCode = inviteCodes[0];

    if (inviteCode.isUsed) {
      return { isValid: false, error: 'Invite code has already been used' };
    }

    if (new Date(inviteCode.expiresAt) < new Date()) {
      return { isValid: false, error: 'Invite code has expired' };
    }

    return {
      isValid: true,
      inviteCode,
      familyMember: inviteCode.familyMember,
      residentName: inviteCode.familyMember?.resident?.name,
      careHomeName: inviteCode.familyMember?.resident?.careHome?.name
    };
  } catch (error) {
    console.error('Error validating invite code:', error);
    return { isValid: false, error: 'Failed to validate invite code' };
  }
}

/**
 * Use invite code and link user to family member
 */
export async function useInviteCode(
  code: string,
  userID: string
): Promise<boolean> {
  try {
    // First validate the code
    const validation = await validateInviteCode(code);
    if (!validation.isValid) {
      throw new Error(validation.error);
    }

    // Mark invite code as used
    await client.graphql({
      query: `
        mutation UpdateInviteCode($input: UpdateTerriiInviteCodeInput!) {
          updateTerriiInviteCode(input: $input) {
            id
            isUsed
            usedAt
          }
        }
      `,
      variables: {
        input: {
          id: validation.inviteCode.id,
          isUsed: true,
          usedAt: new Date().toISOString()
        }
      }
    });

    // Link user to family member record
    await client.graphql({
      query: `
        mutation UpdateFamilyMember($input: UpdateTerriiResidentFamilyInput!) {
          updateTerriiResidentFamily(input: $input) {
            id
            userID
            isRegistered
          }
        }
      `,
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
    console.error('Error using invite code:', error);
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
              relationship
              resident {
                id
                name
                room
                photo
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
      relationshipType: item.relationship
    })) || [];
  } catch (error) {
    console.error('Error getting residents for family member:', error);
    return [];
  }
}
```

## 3. Web App UI - Add Invite Button

Find your `ResidentProfileScreen.tsx` and add this button in the family members section:

```typescript
// Add this function to ResidentProfileScreen.tsx
const [inviteCode, setInviteCode] = useState<string | null>(null);
const [showInviteModal, setShowInviteModal] = useState(false);

const handleGenerateInviteCode = async (familyMember: any) => {
  try {
    if (!currentUser?.id) {
      toast.error('User not authenticated');
      return;
    }

    const result = await generateFamilyInviteCode(
      familyMember.id,
      currentUser.id
    );
    
    if (result.success) {
      setInviteCode(result.code);
      setShowInviteModal(true);
      toast.success('Invite code generated!');
    }
  } catch (error: any) {
    console.error('Error generating invite code:', error);
    toast.error(error.message || 'Failed to generate invite code');
  }
};

// Add this JSX where family members are displayed
{!familyMember.isRegistered && (
  <div className="flex gap-2 mt-2">
    <Button
      size="sm"
      onClick={() => handleGenerateInviteCode(familyMember)}
      className="bg-terrii-green hover:bg-terrii-green/90"
    >
      📱 Generate Invite Code
    </Button>
  </div>
)}

// Add this modal component
{showInviteModal && inviteCode && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
      <h3 className="text-lg font-semibold mb-4">Family Member Invite Code</h3>
      
      <div className="text-center mb-6">
        <div className="text-3xl font-mono font-bold text-terrii-green mb-2">
          {inviteCode}
        </div>
        <p className="text-sm text-gray-600">
          Share this code with the family member to register
        </p>
      </div>

      <div className="bg-gray-50 rounded p-4 mb-4">
        <h4 className="font-medium mb-2">Instructions:</h4>
        <ol className="text-sm space-y-1 list-decimal list-inside">
          <li>Family member downloads TERRii Family app</li>
          <li>During registration, they enter this code</li>
          <li>Code expires in 7 days</li>
          <li>Code can only be used once</li>
        </ol>
      </div>

      <div className="flex gap-3">
        <Button
          onClick={() => {
            navigator.clipboard.writeText(inviteCode);
            toast.success('Code copied to clipboard!');
          }}
          className="flex-1"
        >
          📋 Copy Code
        </Button>
        <Button
          onClick={() => {
            setShowInviteModal(false);
            setInviteCode(null);
          }}
          variant="outline"
          className="flex-1"
        >
          Close
        </Button>
      </div>
    </div>
  </div>
)}
```

## 4. Mobile App Registration Screen

Create a new registration screen for your `terrii-family` app:

```typescript
// src/screens/FamilyRegistrationScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Auth } from 'aws-amplify';
import { validateInviteCode, useInviteCode } from '../lib/terriiApi';

export function FamilyRegistrationScreen({ navigation }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    inviteCode: ''
  });
  const [inviteValidation, setInviteValidation] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInviteCodeValidation = async () => {
    if (!formData.inviteCode || formData.inviteCode.length !== 9) {
      Alert.alert('Error', 'Please enter a valid 8-digit invite code (XXXX-XXXX)');
      return;
    }

    try {
      setLoading(true);
      const validation = await validateInviteCode(formData.inviteCode);
      
      if (validation.isValid) {
        setInviteValidation(validation);
        Alert.alert(
          'Code Valid!', 
          `You're being invited to connect with ${validation.residentName} at ${validation.careHomeName}`
        );
      } else {
        Alert.alert('Invalid Code', validation.error);
        setInviteValidation(null);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to validate invite code');
      setInviteValidation(null);
    } finally {
      setLoading(false);
    }
  };

  const handleRegistration = async () => {
    if (!inviteValidation) {
      Alert.alert('Error', 'Please validate your invite code first');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters long');
      return;
    }

    try {
      setLoading(true);

      // Create Cognito user account
      const { userSub } = await Auth.signUp({
        username: formData.email,
        password: formData.password,
        attributes: {
          email: formData.email,
          given_name: formData.firstName,
          family_name: formData.lastName,
          'custom:userType': 'FAMILY_MEMBER'
        }
      });

      // Use invite code to link user to family member
      await useInviteCode(formData.inviteCode, userSub);

      Alert.alert(
        'Registration Successful!',
        'Please check your email to verify your account.',
        [{
          text: 'OK',
          onPress: () => navigation.navigate('EmailVerification', {
            email: formData.email,
            residentName: inviteValidation.residentName
          })
        }]
      );

    } catch (error) {
      console.error('Registration error:', error);
      
      let errorMessage = 'Registration failed. Please try again.';
      if (error.code === 'UsernameExistsException') {
        errorMessage = 'An account with this email already exists';
      } else if (error.code === 'InvalidPasswordException') {
        errorMessage = 'Password does not meet requirements';
      }
      
      Alert.alert('Registration Failed', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Join TERRii Family</Text>
        <Text style={styles.subtitle}>Connect with your loved one</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Enter Your Invite Code</Text>
          <View style={styles.codeContainer}>
            <TextInput
              style={styles.codeInput}
              placeholder="XXXX-XXXX"
              value={formData.inviteCode}
              onChangeText={(text) => {
                // Auto-format the code as XXXX-XXXX
                let formatted = text.replace(/[^0-9]/g, '');
                if (formatted.length > 4) {
                  formatted = formatted.substring(0, 4) + '-' + formatted.substring(4, 8);
                }
                setFormData(prev => ({ ...prev, inviteCode: formatted }));
              }}
              maxLength={9}
              autoCapitalize="none"
            />
            <TouchableOpacity 
              style={styles.validateButton}
              onPress={handleInviteCodeValidation}
              disabled={loading || formData.inviteCode.length !== 9}
            >
              <Text style={styles.validateButtonText}>Validate</Text>
            </TouchableOpacity>
          </View>
          
          {inviteValidation && (
            <View style={styles.validationSuccess}>
              <Text style={styles.validationText}>
                ✅ Connecting you with {inviteValidation.residentName} at {inviteValidation.careHomeName}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Create Your Account</Text>
          
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="First Name"
              value={formData.firstName}
              onChangeText={(text) => setFormData(prev => ({ ...prev, firstName: text }))}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Last Name"
              value={formData.lastName}
              onChangeText={(text) => setFormData(prev => ({ ...prev, lastName: text }))}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={formData.email}
            onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password (minimum 8 characters)"
            value={formData.password}
            onChangeText={(text) => setFormData(prev => ({ ...prev, password: text }))}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChangeText={(text) => setFormData(prev => ({ ...prev, confirmPassword: text }))}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={[styles.registerButton, loading && styles.buttonDisabled]}
          onPress={handleRegistration}
          disabled={loading || !inviteValidation}
        >
          <Text style={styles.registerButtonText}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginLinkText}>
            Already have an account? Sign in here
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2C3E50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#5A6C7D',
    marginBottom: 30,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 15,
  },
  codeContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  codeInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 18,
    fontFamily: 'monospace',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  validateButton: {
    backgroundColor: '#C1E8C5',
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft: 10,
    justifyContent: 'center',
  },
  validateButtonText: {
    color: '#2C3E50',
    fontWeight: '600',
  },
  validationSuccess: {
    backgroundColor: '#D4F6D6',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  validationText: {
    color: '#2C3E50',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: 'white',
    marginBottom: 15,
  },
  halfInput: {
    width: '48%',
  },
  registerButton: {
    backgroundColor: '#C1E8C5',
    padding: 18,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  registerButtonText: {
    color: '#2C3E50',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  loginLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginLinkText: {
    color: '#C1E8C5',
    fontSize: 16,
  },
});
```

## 5. QR Code Generation (Optional)

If you want QR codes instead of manual entry, add this to your web app invite modal:

```bash
npm install qrcode react-qr-code
```

```typescript
import QRCode from 'react-qr-code';

// In your invite modal, replace the code display with:
<div className="text-center mb-6">
  <div className="text-2xl font-mono font-bold text-terrii-green mb-4">
    {inviteCode}
  </div>
  <div className="bg-white p-4 rounded border-2 border-gray-200 inline-block">
    <QRCode value={inviteCode} size={150} />
  </div>
  <p className="text-sm text-gray-600 mt-2">
    Scan with phone camera or enter code manually
  </p>
</div>
```

## 6. Deploy Changes

```bash
cd /Users/scottcatterall/Documents/GitHub/terrii-web/terrii
amplify push
```

This implementation gives you:
- ✅ Simple 8-digit codes (XXXX-XXXX)
- ✅ No email setup required
- ✅ QR code option
- ✅ Expiration handling
- ✅ One-time use codes
- ✅ Easy for staff to generate
- ✅ Simple for families to use

The family member registration flow becomes:
1. Staff clicks "Generate Invite Code" → gets XXXX-XXXX
2. Staff shares code with family member
3. Family member downloads app → enters code → registers
4. Code links them to the resident automatically
