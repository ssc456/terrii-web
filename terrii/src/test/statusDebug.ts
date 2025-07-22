// Debug utilities for status calculation issues
// Add these to browser console to debug status calculation

import { calculateResidentStatus, getStatusInfo, getTimeSinceUpdate } from '../lib/statusManager';

// Test function to debug status calculation
export const testStatusCalculation = (lastUpdate: string) => {
  console.log('=== STATUS DEBUG ===');
  console.log('Input lastUpdate:', lastUpdate);
  console.log('Parsed date:', new Date(lastUpdate));
  console.log('Current time:', new Date());
  
  const now = new Date();
  const lastUpdateDate = new Date(lastUpdate);
  const timeDiff = now.getTime() - lastUpdateDate.getTime();
  const hoursSinceUpdate = timeDiff / (1000 * 60 * 60);
  const minutesSinceUpdate = timeDiff / (1000 * 60);
  
  console.log('Time difference (ms):', timeDiff);
  console.log('Hours since update:', hoursSinceUpdate);
  console.log('Minutes since update:', minutesSinceUpdate);
  
  const status = calculateResidentStatus(lastUpdate);
  const statusInfo = getStatusInfo(status);
  const timeSinceText = getTimeSinceUpdate(lastUpdate);
  
  console.log('Calculated status:', status);
  console.log('Status info:', statusInfo);
  console.log('Time since text:', timeSinceText);
  console.log('===================');
  
  return {
    status,
    statusInfo,
    timeSinceText,
    hoursSinceUpdate,
    minutesSinceUpdate
  };
};

// Test function to check current residents in the system
export const testResidentsStatus = () => {
  console.log('=== RESIDENTS STATUS DEBUG ===');
  
  // This function should be called from browser console when on residents page
  const residentCards = document.querySelectorAll('[data-testid="resident-card"]');
  console.log('Found resident cards:', residentCards.length);
  
  // Try to access the React dev tools to get resident data
  if ((window as any).React && (window as any).React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) {
    console.log('React dev tools available - check component state');
  }
  
  console.log('To test specific resident status, use: testStatusCalculation("2024-01-01T12:00:00Z")');
  console.log('===============================');
};

// Make functions available globally for browser console
(window as any).testStatusCalculation = testStatusCalculation;
(window as any).testResidentsStatus = testResidentsStatus;
