// Comprehensive status and activities debugging utilities
// Use these in browser console to debug issues

// Import functions for testing
import { calculateResidentStatus, getStatusInfo, getStatusCounts } from '../lib/statusManager';

// Test status calculation consistency
export const testStatusConsistency = (residents: any[]) => {
  console.log('=== STATUS CONSISTENCY TEST ===');
  
  residents.forEach((resident: any, index: number) => {
    console.log(`\n--- Resident ${index + 1}: ${resident.name} ---`);
    console.log('lastUpdate:', resident.lastUpdate);
    
    // Test individual status calculation
    const individualStatus = calculateResidentStatus(resident.lastUpdate || null);
    const statusInfo = getStatusInfo(individualStatus);
    
    console.log('Individual status calculation:', individualStatus);
    console.log('Status info:', statusInfo);
    
    // Test how it maps for the card
    const statusMapping = {
      'UP_TO_DATE': 'stable',      
      'NEEDS_UPDATE': 'check',       
      'OVERDUE': 'urgent'          
    };
    const cardStatus = statusMapping[individualStatus] || 'check';
    console.log('Card status mapping:', cardStatus);
  });
  
  // Test dashboard summary calculation
  const statusCounts = getStatusCounts(residents);
  console.log('\n--- Dashboard Summary ---');
  console.log('Raw status counts:', statusCounts);
  
  const dashboardCounts = {
    stable: statusCounts.upToDate,
    check: statusCounts.needsUpdate, 
    urgent: statusCounts.overdue
  };
  console.log('Dashboard display counts:', dashboardCounts);
  
  console.log('============================');
};

// Test activity time formatting
export const testActivityTimes = () => {
  console.log('=== ACTIVITY TIME FORMATTING TEST ===');
  
  const testDates = [
    new Date().toISOString(), // Now
    new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
    new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    new Date(Date.now() - 25 * 60 * 60 * 1000).toISOString(), // Yesterday
    new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
  ];
  
  testDates.forEach((dateTime, index) => {
    console.log(`\nTest ${index + 1}: ${dateTime}`);
    console.log('Formatted:', formatDateTime(dateTime));
  });
  
  console.log('=======================================');
};

// Helper function to format datetime (same as in ResidentProfileScreen)
const formatDateTime = (dateTimeString: string) => {
  if (!dateTimeString) return 'N/A';
  const date = new Date(dateTimeString);
  const now = new Date();
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
  
  if (diffInHours < 1) {
    const minutes = Math.floor(diffInHours * 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (diffInHours < 24) {
    const hours = Math.floor(diffInHours);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (diffInHours < 48) {
    return 'Yesterday at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else {
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
};

// Quick test for current page data
export const testCurrentPageData = () => {
  console.log('=== CURRENT PAGE DATA TEST ===');
  
  // Try to get current page context
  const path = window.location.pathname;
  console.log('Current path:', path);
  
  if (path.includes('/residents') && !path.includes('/residents/')) {
    console.log('On residents list page - test status consistency');
    console.log('Run: testStatusConsistency(residents) where residents is your data');
  } else if (path.includes('/residents/')) {
    console.log('On resident profile page - test activities formatting');
    console.log('Check activities tab for improved time display');
  }
  
  console.log('===================================');
};

// Make functions available globally for browser console
(window as any).testStatusConsistency = testStatusConsistency;
(window as any).testActivityTimes = testActivityTimes;
(window as any).testCurrentPageData = testCurrentPageData;
