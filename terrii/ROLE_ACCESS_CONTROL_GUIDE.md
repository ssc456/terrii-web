# TERRii Role-Based Access Control & Testing Guide

## **Current Role Structure**

### **Core TERRii User Roles:**
```typescript
enum TerriiUserRole {
  ADMIN = "ADMIN",           // Care home administrator
  CARE_STAFF = "CARE_STAFF", // Front-line care staff  
  MANAGER = "MANAGER",       // Care home manager
  FAMILY = "FAMILY"          // Family member of resident
}
```

### **System User Types:**
```typescript
enum EnumUserTypes {
  ACECURA_ADMIN = "ACECURA_ADMIN",  // Super admin (system-wide)
  APP_USER = "APP_USER",            // Regular application user
  TERRII_USER = "TERRII_USER"       // TERRii-specific user
}
```

## **Role-Based Access Matrix**

### **🔐 SUPER ADMIN (ACECURA_ADMIN)**
**Current Access:** ✅ Full System Control
- **Care Home Management:** Create, edit, delete any care home
- **User Management:** Link users to care homes with any role
- **System Settings:** Access all system configuration
- **Role Testing:** "Login As" functionality to test any role
- **Analytics:** View system-wide statistics and reporting
- **Data Access:** Can view all data across all care homes

**SuperAdmin Dashboard Features:**
- System Overview with role distribution statistics
- Role Testing Environment for QA
- User Permissions Manager
- Care home quick access with "Login As" buttons

### **👑 ADMIN (Care Home Administrator)**
**Current Access:** ✅ Care Home Management
- **Care Home Settings:** Full control over care home configuration
- **Staff Management:** Invite/manage MANAGER and CARE_STAFF roles
- **Resident Management:** Add/edit/view all residents in care home
- **Family Management:** Invite family members, manage family access
- **Reporting:** Access to care home analytics and reporting
- **Community Moderation:** Pin posts, moderate content
- **System Settings:** Care home-specific settings only

**Restrictions:**
- ❌ Cannot access other care homes
- ❌ Cannot modify system-wide settings
- ❌ Cannot create super admin users

### **📋 MANAGER (Care Home Manager)**
**Current Access:** ✅ Operational Management
- **Staff Coordination:** Manage CARE_STAFF (invite/remove)
- **Resident Access:** View/update all residents in care home
- **Family Coordination:** Send family invitations
- **Reporting:** Access to operational reports
- **Community Management:** Moderate posts, manage announcements
- **Care Planning:** Oversee care plans and activities

**Restrictions:**
- ❌ Cannot modify care home settings (ADMIN only)
- ❌ Cannot invite ADMIN or MANAGER roles
- ❌ Cannot access financial or billing information

### **🩺 CARE_STAFF (Front-line Care)**
**Current Access:** ✅ Resident Care
- **Assigned Residents:** View/update residents assigned to them
- **Daily Activities:** Create moments, log activities
- **Family Communication:** Send messages to families
- **Community Participation:** Create posts, share updates
- **Care Documentation:** Record care notes and observations

**Restrictions:**
- ❌ Cannot invite any users
- ❌ Cannot access admin functions
- ❌ Cannot modify care home settings
- ⚠️ **Future Enhancement:** Limit to assigned residents only

### **❤️ FAMILY (Family Member)**
**Current Status:** 🔄 Implementation Complete (Backend Ready)
- **Linked Residents:** View only residents they're linked to
- **Moments & Updates:** View activities and photos of their residents
- **Messaging:** Receive messages from care staff
- **Community Access:** Limited community participation (read-only or moderated posting)
- **Care Information:** View care summaries for their residents

**Restrictions:**
- ❌ Cannot access care home management
- ❌ Cannot see other residents
- ❌ Cannot invite users or access admin functions
- ❌ Cannot view detailed care records (privacy)

## **Family Member Sub-Types (Future Enhancement)**
```typescript
// Potential extension of FAMILY role
enum FamilyMemberType {
  PRIMARY_CONTACT = "PRIMARY_CONTACT",      // Main decision maker
  SECONDARY_CONTACT = "SECONDARY_CONTACT",   // Additional family member  
  EMERGENCY_CONTACT = "EMERGENCY_CONTACT",   // Emergency contact only
  VISITOR = "VISITOR"                        // Limited visitor access
}
```

## **SuperAdmin Testing Environment**

### **Enhanced Dashboard Features:**

#### **1. System Overview Tab**
- **Role Distribution:** Real-time breakdown of all user roles
- **Care Home Statistics:** Residents, staff, and family counts
- **Unlinked Users Alert:** Users needing care home assignment
- **Quick Actions:** Direct access to management functions

#### **2. Role Testing Tab**
- **Care Home Selection:** Choose any care home for testing
- **Role Simulation:** Test as ADMIN, MANAGER, CARE_STAFF, or FAMILY
- **Quick Login:** One-click access to test different permissions
- **Testing Mode:** Special localStorage flags for role testing

```typescript
// Role testing implementation
localStorage.setItem('role_test_mode', 'ADMIN');
localStorage.setItem('superadmin_login_as_care_home', careHomeId);
```

#### **3. User Permissions Tab**
- **Global User Management:** View/edit all user profiles across system
- **Role Assignment:** Change user roles per care home
- **Permission Auditing:** Track role changes and access patterns
- **Bulk Operations:** Mass role updates and user management

## **UI/UX Differences by Role**

### **Navigation & Features:**

#### **SUPER ADMIN**
```typescript
// Full system access
routes: ['/admin', '/admin/care-homes', '/admin/users', '/admin/settings']
features: ['system_stats', 'role_testing', 'global_user_management']
```

#### **ADMIN**
```typescript
// Care home focused
routes: ['/', '/residents', '/messages', '/moments', '/community', '/settings']
features: ['care_home_management', 'staff_invites', 'family_management', 'reporting']
restrictions: ['no_system_access', 'single_care_home_only']
```

#### **MANAGER**
```typescript
// Operational management
routes: ['/', '/residents', '/messages', '/moments', '/community']
features: ['staff_coordination', 'reporting', 'family_invites']
restrictions: ['no_care_home_settings', 'no_admin_invites']
```

#### **CARE_STAFF**
```typescript
// Direct care focus
routes: ['/', '/residents', '/messages', '/moments', '/community']
features: ['resident_care', 'family_messaging', 'activity_logging']
restrictions: ['no_admin_functions', 'no_user_management']
```

#### **FAMILY**
```typescript
// Family-focused portal
routes: ['/family/dashboard', '/family/resident/:id', '/family/messages', '/family/moments']
features: ['linked_residents_only', 'care_updates', 'messaging']
restrictions: ['no_admin_access', 'limited_community', 'privacy_filtered']
```

## **Implementation Checklist**

### **✅ Completed:**
- [x] Role-based route protection
- [x] SuperAdmin dashboard with role testing
- [x] User management system
- [x] "Login As" functionality for testing
- [x] Role distribution statistics
- [x] Backend API integration for community/moments

### **🔄 In Progress:**
- [ ] Family member portal UI
- [ ] Role-specific component visibility
- [ ] Enhanced permission checks in components

### **📋 Needed:**
- [ ] Care staff resident assignment system
- [ ] Family member invitation workflow
- [ ] Role-based data filtering
- [ ] Audit logging for role changes
- [ ] Family dashboard implementation

## **Testing Your Roles**

### **Using SuperAdmin Dashboard:**

1. **Access Testing Environment:**
   ```
   Login as ACECURA_ADMIN → Navigate to /admin → Role Testing tab
   ```

2. **Test Different Roles:**
   - Select a care home
   - Click role-specific buttons (Admin View, Manager View, etc.)
   - System automatically logs you in as that role
   - Test functionality and UI differences

3. **Return to SuperAdmin:**
   - Clear localStorage testing flags
   - Navigate back to /admin

### **Manual Testing:**
```typescript
// Test role checking in browser console
const { terriiProfile } = useAuth();
console.log('Current role:', terriiProfile?.role);
console.log('Is staff:', ['ADMIN', 'CARE_STAFF', 'MANAGER'].includes(terriiProfile?.role));
console.log('Is family:', terriiProfile?.role === 'FAMILY');
```

## **Security Considerations**

### **Backend Validation:**
- ✅ All role checks must be validated server-side
- ✅ GraphQL auth rules enforce data access
- ✅ Care home isolation prevents cross-access
- ✅ Family members limited to linked residents only

### **Frontend Protection:**
- ✅ Route-level protection with ProtectedRoute component
- ✅ Component-level permission checks
- ✅ API calls validate user permissions
- ⚠️ **Remember:** Frontend security is for UX only, not security

## **Next Steps for Implementation**

1. **Enhance Component Permissions:**
   ```typescript
   // Add role checks to components
   const { terriiProfile } = useAuth();
   const canManageStaff = ['ADMIN', 'MANAGER'].includes(terriiProfile?.role);
   ```

2. **Implement Family Portal:**
   - Create `/family/*` routes
   - Build family-specific components
   - Add resident linking system

3. **Add Resident Assignment:**
   - CARE_STAFF assigned to specific residents
   - Filter data based on assignments
   - Manager oversight of assignments

4. **Audit & Logging:**
   - Track role changes
   - Log permission escalations
   - Monitor cross-care-home access attempts

This comprehensive role system provides secure, scalable access control with proper testing capabilities for your TERRii platform.
