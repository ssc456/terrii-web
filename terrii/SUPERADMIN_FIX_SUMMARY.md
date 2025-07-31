# SuperAdmin Dashboard & Role Testing Fixes

## Issues Fixed

### 1. GraphQL Schema Error
**Problem**: `listCareHomes` query was trying to access `firstName` and `lastName` fields on `TerriiResident` that don't exist in the schema.

**Error Message**:
```
Validation error of type FieldUndefined: Field 'firstName' in type 'TerriiResident' is undefined
Validation error of type FieldUndefined: Field 'lastName' in type 'TerriiResident' is undefined
```

**Solution**: Created a custom GraphQL query in `terriiApi.ts` that only requests fields that exist in the schema (using `name` instead of `firstName`/`lastName`).

### 2. Role Testing Impersonation Issues
**Problem**: When clicking "View as Family Member", it would:
- Flicker between screens
- Not properly enter role test mode
- Redirect back to admin dashboard instead of simulating the family member experience

**Solution**: 
- Improved AuthContext logic to properly handle localStorage changes and race conditions
- Enhanced ProtectedRoute to better respect role testing mode
- Fixed CareHomeSelectionScreen to avoid profile update conflicts during role testing

## Files Modified

### `/src/lib/terriiApi.ts`
- Replaced auto-generated `listTerriiCareHomes` query with custom query
- Only requests fields that exist in the TerriiResident schema

### `/src/contexts/AuthContext.tsx`
- Enhanced role testing mode detection logic
- Better handling of localStorage changes
- Improved mock profile creation for role testing
- Added proper cleanup on role test mode exit

### `/src/App.tsx`
- Enhanced ProtectedRoute logging for role testing
- Better handling of role test mode transitions

### `/src/screens/CareHomeSelectionScreen.tsx`
- Skip profile updates during role testing mode
- Prevent conflicts with mock profiles

## Testing Instructions

### Test 1: SuperAdmin Dashboard Data Loading
1. Login as superadmin (scott.catterall@acecura.com)
2. Go to `/admin`
3. Verify that:
   - Care home count displays correctly
   - Resident count displays correctly
   - Staff count displays correctly
   - No GraphQL errors in console

### Test 2: Role Testing - Family Member
1. From SuperAdmin dashboard, go to "Role Testing" tab
2. Click "View as Family Member" for any care home
3. Verify that:
   - You're redirected to care home selection
   - Page doesn't flicker between admin and user views
   - You see "Role Testing Mode" banner at top
   - Interface shows family member perspective
   - "Exit Test Mode" button works and returns to admin

### Test 3: Role Testing - Other Roles
Test the same flow for:
- View as Care Staff
- View as Manager
- View as Admin

### Test 4: Exit Role Testing
1. While in any role test mode
2. Click "Exit Test Mode" from the banner
3. Verify you return to SuperAdmin dashboard
4. Verify no localStorage artifacts remain

## Debug Console Commands

In browser console, you can check:
- `localStorage.getItem('role_test_mode')` - Should show current test role or null
- `localStorage.getItem('superadmin_login_as_care_home')` - Should show care home ID or null

## Expected Behavior After Fix

✅ **SuperAdmin Dashboard**: 
- Loads care home data without GraphQL errors
- Shows accurate counts for homes, residents, staff
- Role distribution statistics work correctly

✅ **Role Testing**: 
- Smooth transition into role test mode
- No flickering between admin/user views
- Proper simulation of different user roles
- Clean exit back to admin dashboard

✅ **User Experience**: 
- Family members see appropriate limited interface
- Care staff see resident management features
- Managers see administrative functions
- Each role respects proper access controls

## Technical Details

### GraphQL Query Fix
The issue was that the auto-generated query was requesting fields that don't exist. Our custom query structure:
```graphql
query ListTerriiCareHomes {
  listTerriiCareHomes {
    items {
      id
      name
      # ... other valid fields
      residents {
        items {
          id
          name    # ✅ This exists
          # firstName  # ❌ This doesn't exist
          # lastName   # ❌ This doesn't exist
        }
      }
    }
  }
}
```

### Role Testing Logic
The improved flow:
1. SuperAdmin clicks "View as Family Member"
2. localStorage sets: `role_test_mode=FAMILY`, `superadmin_login_as_care_home=<id>`
3. AuthContext detects localStorage change immediately
4. Creates mock TerriiUserProfile with test role
5. ProtectedRoute respects `isInRoleTestMode` flag
6. User sees family member interface with test mode banner
7. Exit button clears localStorage and returns to admin

This eliminates race conditions and ensures smooth role transitions.
