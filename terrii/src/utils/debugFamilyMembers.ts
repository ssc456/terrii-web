/**
 * Debug utility for testing family member functionality
 * Run this in the browser console to test family member operations
 */

import { 
  addResidentFamilyMember, 
  getResidentFamilyMembers, 
  getResidentWithFullData,
  listResidents,
  createResident
} from '../lib/terriiApi';

// Test adding a family member to an existing resident
export const testAddFamilyMember = async (careHomeId?: string) => {
  console.log('🧪 Testing family member addition...');
  
  try {
    // Get residents
    console.log('📋 Loading residents...');
    const residents = await listResidents(careHomeId || 'demo-care-home');
    
    if (residents.length === 0) {
      console.log('❌ No residents found. Please create a resident first.');
      return;
    }
    
    const testResident = residents[0];
    console.log(`✅ Using resident: ${testResident.name} (ID: ${testResident.id})`);
    
    // Check current family members
    console.log('📊 Checking current family members...');
    const currentMembers = await getResidentFamilyMembers(testResident.id);
    console.log(`Current family members: ${currentMembers.length}`);
    currentMembers.forEach((member, index) => {
      console.log(`  ${index + 1}. ${member.name} (${member.relationship})`);
    });
    
    // Add a test family member
    const testFamilyMember = {
      name: `Test Family Member ${Date.now()}`,
      relationship: 'Daughter',
      phone: '555-TEST-123',
      email: `test.${Date.now()}@example.com`
    };
    
    console.log('📝 Adding test family member:', testFamilyMember);
    const addedMember = await addResidentFamilyMember(testResident.id, testFamilyMember);
    console.log('✅ Family member added:', addedMember);
    
    // Verify addition
    console.log('🔍 Verifying addition...');
    const updatedMembers = await getResidentFamilyMembers(testResident.id);
    console.log(`Updated family members: ${updatedMembers.length}`);
    updatedMembers.forEach((member, index) => {
      console.log(`  ${index + 1}. ${member.name} (${member.relationship})`);
    });
    
    // Check full data
    console.log('📊 Checking full resident data...');
    const fullData = await getResidentWithFullData(testResident.id);
    console.log(`Full data family members: ${fullData.familyMembers?.length || 0}`);
    
    // Analysis
    console.log('\n🔍 ANALYSIS:');
    console.log(`- Before: ${currentMembers.length} family members`);
    console.log(`- After direct query: ${updatedMembers.length} family members`);
    console.log(`- Full data query: ${fullData.familyMembers?.length || 0} family members`);
    
    const success = updatedMembers.length > currentMembers.length;
    console.log(`\n${success ? '✅ SUCCESS' : '❌ FAILURE'}: Family member ${success ? 'was' : 'was NOT'} added successfully`);
    
    return {
      success,
      before: currentMembers.length,
      after: updatedMembers.length,
      fullData: fullData.familyMembers?.length || 0,
      addedMember,
      testResident
    };
    
  } catch (error) {
    console.error('❌ Error testing family member addition:', error);
    return { success: false, error };
  }
};

// Test the create resident workflow with family members
export const testCreateResidentWithFamily = async (careHomeId?: string) => {
  console.log('🧪 Testing resident creation with family members...');
  
  try {
    const testData = {
      name: `Test Resident ${Date.now()}`,
      room: 'TEST-001',
      careHomeID: careHomeId || 'demo-care-home',
      dateOfBirth: '1950-01-01',
      admissionDate: new Date().toISOString().split('T')[0],
      familyMembers: [
        {
          name: 'Test Son',
          relationship: 'Son',
          phone: '555-001-001',
          email: 'son@test.com'
        },
        {
          name: 'Test Daughter',
          relationship: 'Daughter',
          phone: '555-002-002',
          email: 'daughter@test.com'
        }
      ],
      emergencyContact: {
        name: 'Emergency Contact',
        relationship: 'Spouse',
        phone: '555-EMERGENCY',
        email: 'emergency@test.com'
      },
      medicalInfo: {
        primaryPhysician: 'Dr. Test',
        conditions: ['Test Condition'],
        allergies: [],
        dietaryRestrictions: []
      },
      carePreferences: {
        interests: ['Reading'],
        routine: 'Morning walks',
        communication: 'Verbal',
        mobility: 'Independent'
      }
    };
    
    console.log('📝 Creating resident with data:', testData);
    
    const newResident = await createResident(testData);
    console.log('✅ Resident created:', newResident);
    
    // Verify family members were created
    const familyMembers = await getResidentFamilyMembers(newResident.id);
    console.log(`✅ Resident has ${familyMembers.length} family members after creation`);
    
    return {
      success: true,
      resident: newResident,
      familyMembers
    };
    
  } catch (error) {
    console.error('❌ Error testing resident creation:', error);
    return { success: false, error };
  }
};

// Make functions available globally for console testing
if (typeof window !== 'undefined') {
  (window as any).testAddFamilyMember = testAddFamilyMember;
  (window as any).testCreateResidentWithFamily = testCreateResidentWithFamily;
}
