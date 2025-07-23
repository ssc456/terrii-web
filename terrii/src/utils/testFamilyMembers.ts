/**
 * Comprehensive family member debugging tool
 */

import { 
  addResidentFamilyMember, 
  getResidentFamilyMembers, 
  getResidentWithFullData, 
  listResidents,
  createResident 
} from '../lib/terriiApi';

// Enhanced test for family member functionality
export const debugFamilyMemberWorkflow = async () => {
  console.log('🧪 Starting Comprehensive Family Member Debug...');
  
  try {
    // Get residents first
    console.log('📋 Step 1: Loading residents...');
    const residents = await listResidents('test-care-home-id'); // Replace with actual ID
    
    let testResident;
    if (residents.length === 0) {
      console.log('📝 No residents found, creating a test resident...');
      testResident = await createResident({
        name: 'Test Resident',
        room: 'TEST-001',
        careHomeID: 'test-care-home-id', // Replace with actual ID
        familyMembers: [
          {
            name: 'Created With Resident',
            relationship: 'Daughter',
            phone: '555-000-1111',
            email: 'created.with@example.com'
          }
        ],
        emergencyContact: {
          name: 'Emergency Contact',
          relationship: 'Son',
          phone: '555-000-0000',
          email: 'emergency@example.com'
        }
      });
      console.log('✅ Test resident created:', testResident);
    } else {
      testResident = residents[0];
      console.log('✅ Using existing resident:', testResident.name);
    }
    
    // Step 2: Check initial family members
    console.log('\n� Step 2: Checking initial family members...');
    const initialFamilyMembers = await getResidentFamilyMembers(testResident.id);
    console.log(`✅ Found ${initialFamilyMembers.length} family members initially`);
    initialFamilyMembers.forEach((member, index) => {
      console.log(`  ${index + 1}. ${member.name} (${member.relationship}) - ${member.phone}`);
    });
    
    // Step 3: Add a new family member
    console.log('\n📝 Step 3: Adding a new family member...');
    const newFamilyMemberData = {
      name: `Test Added ${Date.now()}`,
      relationship: 'Son',
      phone: '555-TEST-999',
      email: `test.added.${Date.now()}@example.com`
    };
    
    const addedFamilyMember = await addResidentFamilyMember(testResident.id, newFamilyMemberData);
    console.log('✅ Family member added:', addedFamilyMember);
    
    // Step 4: Verify addition with direct query
    console.log('\n📋 Step 4: Verifying with direct family member query...');
    const afterDirectQuery = await getResidentFamilyMembers(testResident.id);
    console.log(`✅ Now found ${afterDirectQuery.length} family members`);
    afterDirectQuery.forEach((member, index) => {
      console.log(`  ${index + 1}. ${member.name} (${member.relationship}) - ${member.phone}`);
    });
    
    // Step 5: Check full resident data
    console.log('\n📊 Step 5: Checking full resident data...');
    const fullResidentData = await getResidentWithFullData(testResident.id);
    console.log(`✅ Full data shows ${fullResidentData.familyMembers?.length || 0} family members`);
    if (fullResidentData.familyMembers) {
      fullResidentData.familyMembers.forEach((member, index) => {
        console.log(`  ${index + 1}. ${member.name} (${member.relationship}) - ${member.phone}`);
      });
    }
    
    // Step 6: Analysis and results
    console.log('\n🔍 Analysis:');
    console.log(`- Initial count: ${initialFamilyMembers.length}`);
    console.log(`- After adding: ${afterDirectQuery.length}`);
    console.log(`- Full data count: ${fullResidentData.familyMembers?.length || 0}`);
    
    const successfullyAdded = afterDirectQuery.length > initialFamilyMembers.length;
    const showsInFullData = (fullResidentData.familyMembers?.length || 0) >= afterDirectQuery.length;
    
    console.log(`\n✅ Family member addition successful: ${successfullyAdded}`);
    console.log(`✅ Shows in full data query: ${showsInFullData}`);
    
    if (successfullyAdded && showsInFullData) {
      console.log('\n🎉 Family member system working correctly!');
    } else {
      console.log('\n⚠️ Issues detected:');
      if (!successfullyAdded) console.log('  - Family member not being added properly');
      if (!showsInFullData) console.log('  - Family members not showing in full data query');
    }
    
    return {
      success: successfullyAdded && showsInFullData,
      testResident,
      addedMember: addedFamilyMember,
      counts: {
        initial: initialFamilyMembers.length,
        afterAdding: afterDirectQuery.length,
        fullData: fullResidentData.familyMembers?.length || 0
      },
      data: {
        direct: afterDirectQuery,
        fullData: fullResidentData.familyMembers
      }
    };
    
  } catch (error) {
    console.error('❌ Error during family member debug:', error);
    return { success: false, error };
  }
};

// Test creation flow specifically
export const testResidentCreationWithFamily = async () => {
  console.log('\n🧪 Testing Resident Creation with Family Members...');
  
  try {
    const testData = {
      name: 'Resident With Family',
      room: 'FAMILY-001',
      careHomeID: 'test-care-home-id', // Replace with actual ID
      emergencyContact: {
        name: 'Emergency Contact',
        relationship: 'Spouse',
        phone: '555-EMG-0000',
        email: 'emergency@example.com'
      },
      familyMembers: [
        {
          name: 'Family Member 1',
          relationship: 'Daughter',
          phone: '555-FAM-0001',
          email: 'fam1@example.com'
        },
        {
          name: 'Family Member 2',
          relationship: 'Son',
          phone: '555-FAM-0002',
          email: 'fam2@example.com'
        }
      ]
    };
    
    console.log('📝 Creating resident with family members...');
    const createdResident = await createResident(testData);
    console.log('✅ Resident created:', createdResident.name);
    
    console.log('\n📋 Checking family members after creation...');
    const familyMembers = await getResidentFamilyMembers(createdResident.id);
    console.log(`✅ Found ${familyMembers.length} family members after creation`);
    
    console.log('\n📊 Checking full data after creation...');
    const fullData = await getResidentWithFullData(createdResident.id);
    console.log(`✅ Full data shows ${fullData.familyMembers?.length || 0} family members`);
    
    const creationWorked = familyMembers.length === testData.familyMembers.length;
    const fullDataWorked = (fullData.familyMembers?.length || 0) === testData.familyMembers.length;
    
    console.log(`\n✅ Family members created correctly: ${creationWorked}`);
    console.log(`✅ Family members in full data: ${fullDataWorked}`);
    
    return {
      success: creationWorked && fullDataWorked,
      createdResident,
      familyMembersCount: familyMembers.length,
      fullDataCount: fullData.familyMembers?.length || 0,
      expected: testData.familyMembers.length
    };
    
  } catch (error) {
    console.error('❌ Error testing resident creation with family:', error);
    return { success: false, error };
  }
};

// Make functions available in browser console
(window as any).debugFamilyMemberWorkflow = debugFamilyMemberWorkflow;
(window as any).testResidentCreationWithFamily = testResidentCreationWithFamily;

console.log('🧪 Family member debug tools loaded!');
console.log('Available functions:');
console.log('- debugFamilyMemberWorkflow()');
console.log('- testResidentCreationWithFamily()');
    
    // Compare results
    console.log('🔍 Comparison:');
    console.log('- Direct query returned:', familyMembers?.length || 0, 'family members');
    console.log('- Full data query returned:', residentWithData.familyMembers?.length || 0, 'family members');
    
    return {
      success: true,
      directQuery: familyMembers,
      fullDataQuery: residentWithData.familyMembers,
      newMember: newFamilyMember
    };
    
  } catch (error) {
    console.error('❌ Error testing family member functionality:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

export const testWithRealResident = async () => {
  console.log('🧪 Testing with first available resident...');
  
  try {
    // Get residents first
    const residents = await listResidents('test-care-home-id'); // Replace with real care home ID
    
    if (residents.length === 0) {
      throw new Error('No residents found to test with');
    }
    
    const testResident = residents[0];
    console.log(`📝 Testing with resident: ${testResident.name} (ID: ${testResident.id})`);
    
    // Test adding family member
    console.log('📝 Adding family member...');
    const newFamilyMember = await addResidentFamilyMember(testResident.id, {
      name: 'Test Family Member',
      relationship: 'Daughter',
      phone: '555-987-6543',
      email: 'test.family@example.com'
    });
    
    console.log('✅ Family member added:', newFamilyMember);
    
    // Test retrieving
    console.log('📋 Retrieving family members...');
    const familyMembers = await getResidentFamilyMembers(testResident.id);
    console.log('✅ Retrieved family members:', familyMembers);
    
    // Test full data retrieval
    console.log('📊 Getting full resident data...');
    const fullData = await getResidentWithFullData(testResident.id);
    console.log('✅ Full data family members:', fullData.familyMembers);
    
    return {
      success: true,
      resident: testResident,
      addedMember: newFamilyMember,
      directQuery: familyMembers,
      fullDataQuery: fullData.familyMembers
    };
    
  } catch (error) {
    console.error('❌ Error in test:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Add to window for easy testing in console
if (typeof window !== 'undefined') {
  (window as any).testFamilyMembers = testWithRealResident;
}
