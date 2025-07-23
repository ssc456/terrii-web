## Family Member Testing & Debugging Guide

### Current Issue Analysis

**Problem**: Family members added to residents don't show up in:
1. Resident profile screens
2. New message dialog family member selection

### Root Cause Identified

✅ **FIXED**: GraphQL operations were missing `userID` and `isRegistered` fields
- Ran `amplify codegen` to regenerate GraphQL operations
- Now includes proper fields for family member User linking

### Testing Instructions

**Option 1: Browser Console Testing**
1. Open browser dev tools (F12)
2. Go to Console tab  
3. Run: `testFamilyMembers()`
4. This will test the complete family member flow

**Option 2: Manual Testing Steps**
1. Go to a resident's profile
2. Add a family member through the Edit dialog
3. Check if it appears in the Family tab
4. Try creating a new message and see if family member appears

### Expected Results After Fix

✅ Family members should now:
- Be saved to database correctly
- Appear in resident profile Family tab
- Show up in new message dialog
- Include proper User linking fields (`userID`, `isRegistered`)

### Debugging Functions Available

In browser console:
- `testFamilyMembers()` - Complete family member functionality test
- `testResidentProfile()` - General resident data loading test
- `testRouteParams()` - Test URL parameter extraction

### Next Steps for Implementation

1. **Test Current Fix**: Run the test functions to verify family members work
2. **Update UI Components**: If tests pass, check for any UI-specific issues
3. **Implement User Linking**: Build the family member registration flow

### Key Files Modified

- `src/graphql/queries.ts` - Now includes `userID`, `isRegistered` fields
- `src/graphql/mutations.ts` - Updated family member operations
- `src/utils/testUtils.ts` - Added comprehensive testing functions
- `src/lib/terriiApi.ts` - Already has proper family member functions

### Architecture Status

✅ **Database Schema**: Perfect - supports User linking
✅ **GraphQL Operations**: Fixed - includes all required fields  
✅ **API Functions**: Complete - all CRUD operations available
🔄 **UI Integration**: Test to verify after GraphQL fix
❌ **User Registration Flow**: Still needs implementation

### Family Member Lifecycle Reminder

1. **Contact Creation**: Family member as simple contact record
2. **Invitation**: Care staff invites family member to register  
3. **User Registration**: Family member creates User account
4. **Messaging Enabled**: Real User-to-User messaging

Current fix addresses the foundation (steps 1-2). Steps 3-4 need UI implementation.
