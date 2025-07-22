/**
 * Test utility for debugging resident profile issues
 * This can be used in the browser console to test API functions
 */

import { getResidentWithFullData, listResidents } from '../lib/terriiApi';

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
  (window as any).testRouteParams = testRouteParams;
  
  console.log('🔧 Test functions loaded. You can use:');
  console.log('- testResidentProfile() - Test loading resident data');
  console.log('- testRouteParams() - Test route parameter extraction');
}
