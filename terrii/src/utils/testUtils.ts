/**
 * Test utility for debugging resident profile issues
 * This can be used in the browser console to test API functions
 */

import { getResidentWithFullData, listResidents, addResidentFamilyMember, getResidentFamilyMembers } from '../lib/terriiApi';

// Function to test family member functionality
export const testFamilyMemberFunctionality = async () => {
  console.log('🧪 Testing family member functionality...');
  
  try {
    // Get first available resident
    console.log('📋 Getting first available resident...');
    const residents = await listResidents('test-care-home-id');
    
    if (residents.length === 0) {
      throw new Error('No residents found to test with');
    }
    
    const testResident = residents[0];
    console.log(`📝 Testing with resident: ${testResident.name} (ID: ${testResident.id})`);
    
    // Test current family members
    console.log('📊 Current family members:');
    const currentFamilyMembers = await getResidentFamilyMembers(testResident.id);
    console.log('Current family members:', currentFamilyMembers);
    
    // Test adding family member
    console.log('📝 Adding new family member...');
    const newFamilyMember = await addResidentFamilyMember(testResident.id, {
      name: 'Test Family Member ' + Date.now(),
      relationship: 'Daughter',
      phone: '555-987-6543',
      email: 'test.family@example.com'
    });
    
    console.log('✅ Family member added:', newFamilyMember);
    
    // Test retrieving after adding
    console.log('📋 Retrieving family members after adding...');
    const updatedFamilyMembers = await getResidentFamilyMembers(testResident.id);
    console.log('✅ Updated family members:', updatedFamilyMembers);
    
    // Test full data retrieval
    console.log('📊 Getting full resident data...');
    const fullData = await getResidentWithFullData(testResident.id);
    console.log('✅ Full data family members:', fullData.familyMembers);
    
    // Analysis
    console.log('🔍 Analysis:');
    console.log('- Family members before:', currentFamilyMembers?.length || 0);
    console.log('- Family members after direct query:', updatedFamilyMembers?.length || 0);
    console.log('- Family members in full data:', fullData.familyMembers?.length || 0);
    
    if (updatedFamilyMembers?.length > currentFamilyMembers?.length) {
      console.log('✅ Family member was successfully added and retrieved!');
    } else {
      console.log('❌ Family member might not have been added or retrieved properly');
    }
    
    return {
      success: true,
      resident: testResident,
      addedMember: newFamilyMember,
      beforeCount: currentFamilyMembers?.length || 0,
      afterDirectQuery: updatedFamilyMembers?.length || 0,
      afterFullDataQuery: fullData.familyMembers?.length || 0,
      directQuery: updatedFamilyMembers,
      fullDataQuery: fullData.familyMembers
    };
    
  } catch (error) {
    console.error('❌ Error testing family member functionality:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Function to test resident profile loading
export const testResidentProfile = async () => {
  try {
    console.log('🧪 Testing resident profile functionality...');
    
    // First, get list of residents
    console.log('📋 Fetching residents list...');
    const residents = await listResidents('test-care-home-id'); // Use placeholder ID for testing
    console.log(`✅ Found ${residents.length} residents:`, residents);
    
    if (residents.length === 0) {
      console.log('⚠️  No residents found. Please create a resident first.');
      return;
    }
    
    // Test loading the first resident's full data
    const firstResident = residents[0];
    console.log(`🔍 Testing profile load for resident: ${firstResident.name} (ID: ${firstResident.id})`);
    
    const fullData = await getResidentWithFullData(firstResident.id);
    console.log('✅ Full resident data loaded successfully:', fullData);
    
    // Check what data we have
    console.log('📊 Data completeness check:');
    console.log('- Basic info:', !!fullData.name ? '✅' : '❌');
    console.log('- Family members:', fullData.familyMembers?.length || 0, 'found');
    console.log('- Medical info:', !!fullData.medicalInfo ? '✅' : '❌');
    console.log('- Care preferences:', !!fullData.carePreferences ? '✅' : '❌');
    console.log('- Activities:', fullData.activities?.length || 0, 'found');
    console.log('- Emergency contact:', !!fullData.emergencyContact ? '✅' : '❌');
    
    return {
      success: true,
      resident: fullData,
      residents: residents
    };
    
  } catch (error) {
    console.error('❌ Error testing resident profile:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Function to test the route parameter extraction
export const testRouteParams = () => {
  const currentPath = window.location.pathname;
  console.log('🛣️  Current path:', currentPath);
  
  const residentIdMatch = currentPath.match(/\/residents\/(.+)/);
  if (residentIdMatch) {
    const residentId = residentIdMatch[1];
    console.log('✅ Extracted resident ID:', residentId);
    return residentId;
  } else {
    console.log('❌ Not on a resident profile page');
    return null;
  }
};

// Make functions available globally for browser console testing
if (typeof window !== 'undefined') {
  (window as any).testResidentProfile = testResidentProfile;
  (window as any).testFamilyMembers = testFamilyMemberFunctionality;
  (window as any).testRouteParams = testRouteParams;
  
  console.log('🔧 Test functions loaded. You can use:');
  console.log('- testResidentProfile() - Test loading resident data');
  console.log('- testFamilyMembers() - Test family member functionality');
  console.log('- testRouteParams() - Test route parameter extraction');
}
