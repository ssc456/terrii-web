# Enhanced Family Member Invite System - Security Implementation

## Security Improvements Made

### 1. **Double Validation Required**
- ✅ Invite code (8-digit XXXX-XXXX format)
- ✅ Email address (must match family member's email on file)
- ✅ Both must be correct to proceed with registration

### 2. **Anti-Brute Force Protection**
```typescript
// Before: Only code validation
validateInviteCode(code: string)

// After: Code + Email validation
validateInviteCode(code: string, email: string)
```

### 3. **Database Schema Updates**
```graphql
type TerriiInviteCode @model {
  id: ID!
  code: String! @index(name: "byCode")
  email: String! @index(name: "byEmail")  # NEW: Store email for validation
  familyMemberID: ID!
  isUsed: Boolean!
  expiresAt: AWSDateTime!
  # ... other fields
}
```

### 4. **Enhanced Validation Flow**

#### Web App (Staff):
1. Staff clicks "Generate Invite Code" for family member
2. System checks family member has email address
3. Generates unique 8-digit code
4. Stores code with associated email in database
5. Displays code to staff with email requirement notice

#### Mobile App (Family Member):
1. Family member enters their email address first
2. Then enters the 8-digit invite code
3. System validates BOTH code AND email match database
4. Only proceeds if both are correct
5. Links user account to family member record

### 5. **Security Benefits**

#### Prevents Brute Force Attacks:
- **Before**: Attacker could try all 100,000,000 possible 8-digit codes
- **After**: Attacker needs BOTH valid code AND correct email address
- **Impact**: Reduces successful brute force probability from 1:100M to approximately 1:100M × email_domain_size

#### Prevents Social Engineering:
- Family member must know their own email address (as provided to care home)
- Random person with stolen code cannot register without correct email

#### Audit Trail:
- Each invite code is tied to specific email address
- Can track which family member was intended for each code
- Failed validation attempts can be logged for security monitoring

### 6. **Implementation Details**

#### API Changes:
```typescript
// Web App Functions
generateFamilyInviteCode(familyMemberID, createdByUserID) 
  -> { success: boolean, code: string, email: string }

// Mobile App Functions  
validateInviteCode(code: string, email: string)
  -> { isValid: boolean, error?: string, ... }

useInviteCode(code: string, email: string, userID: string) 
  -> boolean
```

#### UI Changes:
- **Web App**: Shows email requirement in invite modal instructions
- **Mobile App**: Email field moved to top, required before code validation
- Clear error messages for mismatched code/email combinations

### 7. **User Experience Flow**

#### For Care Home Staff:
1. Select family member with email address
2. Click "📱 Invite" button
3. See generated code and copy/share with family member
4. Instructions clearly state both code and email needed

#### For Family Members:
1. Download TERRii Family app
2. Enter email address (as provided to care home)
3. Enter 8-digit invite code received from staff
4. Validate both together
5. Complete registration with validated code/email pair

### 8. **Error Handling**

#### Specific Error Messages:
- "Invalid invite code or email combination"
- "This invite code has already been used"
- "This invite code has expired"
- "Family member must have an email address to receive an invite"

#### Security Considerations:
- Don't reveal whether code or email was wrong (prevents enumeration)
- Rate limiting can be added at API Gateway level
- Failed attempts can be logged for monitoring

### 9. **Next Steps for Production**

1. **Rate Limiting**: Add AWS API Gateway rate limiting
2. **Monitoring**: CloudWatch alerts for failed validation attempts
3. **Logging**: Enhanced logging for security audit trail
4. **Testing**: Security penetration testing of invite system
5. **Documentation**: User guides for care home staff

This implementation significantly enhances security while maintaining a smooth user experience for legitimate family members.
