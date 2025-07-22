/**
 * Resident Status Management System
 * 
 * This system manages the status of residents based on when they were last updated.
 * The status progression is:
 * 
 * 1. UP_TO_DATE (Green) - Last updated within 24 hours
 * 2. NEEDS_UPDATE (Yellow) - Last updated 24-72 hours ago  
 * 3. OVERDUE (Red) - Last updated more than 72 hours ago
 * 
 * This helps staff prioritize which residents need attention.
 */

export type ResidentStatus = 'UP_TO_DATE' | 'NEEDS_UPDATE' | 'OVERDUE';

export interface StatusInfo {
  status: ResidentStatus;
  displayText: string;
  color: string;
  backgroundColor: string;
  icon: string;
  priority: number; // Lower number = higher priority
  description: string;
}

/**
 * Calculate the current status of a resident based on their last update time
 */
export const calculateResidentStatus = (lastUpdate: string | null): ResidentStatus => {
  if (!lastUpdate) {
    return 'OVERDUE'; // No update time means overdue
  }

  const now = new Date();
  const lastUpdateDate = new Date(lastUpdate);
  const hoursSinceUpdate = (now.getTime() - lastUpdateDate.getTime()) / (1000 * 60 * 60);

  if (hoursSinceUpdate <= 24) {
    return 'UP_TO_DATE';
  } else if (hoursSinceUpdate <= 72) {
    return 'NEEDS_UPDATE';
  } else {
    return 'OVERDUE';
  }
};

/**
 * Get display information for a status
 */
export const getStatusInfo = (status: ResidentStatus): StatusInfo => {
  switch (status) {
    case 'UP_TO_DATE':
      return {
        status,
        displayText: 'Up to Date',
        color: 'text-green-600',
        backgroundColor: 'bg-green-100',
        icon: 'CheckCircle',
        priority: 3,
        description: 'Resident has been checked within the last 24 hours'
      };
    case 'NEEDS_UPDATE':
      return {
        status,
        displayText: 'Needs Update',
        color: 'text-yellow-600',
        backgroundColor: 'bg-yellow-100',
        icon: 'Clock',
        priority: 2,
        description: 'Resident should be checked soon (last update 1-3 days ago)'
      };
    case 'OVERDUE':
      return {
        status,
        displayText: 'Overdue',
        color: 'text-red-600',
        backgroundColor: 'bg-red-100',
        icon: 'AlertCircle',
        priority: 1,
        description: 'Resident needs immediate attention (last update >3 days ago)'
      };
  }
};

/**
 * Get the time since last update in a human-readable format
 */
export const getTimeSinceUpdate = (lastUpdate: string | null): string => {
  if (!lastUpdate) {
    return 'Never updated';
  }

  const now = new Date();
  const lastUpdateDate = new Date(lastUpdate);
  const hoursSinceUpdate = (now.getTime() - lastUpdateDate.getTime()) / (1000 * 60 * 60);

  if (hoursSinceUpdate < 1) {
    const minutes = Math.floor(hoursSinceUpdate * 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (hoursSinceUpdate < 24) {
    const hours = Math.floor(hoursSinceUpdate);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(hoursSinceUpdate / 24);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
};

/**
 * Check if a resident status needs urgent attention
 */
export const isUrgentStatus = (status: ResidentStatus): boolean => {
  return status === 'OVERDUE';
};

/**
 * Sort residents by status priority (most urgent first)
 */
export const sortByStatusPriority = (residents: any[]): any[] => {
  return residents.sort((a, b) => {
    const statusA = calculateResidentStatus(a.lastUpdate);
    const statusB = calculateResidentStatus(b.lastUpdate);
    const infoA = getStatusInfo(statusA);
    const infoB = getStatusInfo(statusB);
    
    // Lower priority number = higher importance
    return infoA.priority - infoB.priority;
  });
};

/**
 * Get status counts for dashboard summary
 */
export const getStatusCounts = (residents: any[]) => {
  const counts = {
    UP_TO_DATE: 0,
    NEEDS_UPDATE: 0,
    OVERDUE: 0
  };

  residents.forEach(resident => {
    const status = calculateResidentStatus(resident.lastUpdate);
    counts[status]++;
  });

  return {
    upToDate: counts.UP_TO_DATE,
    needsUpdate: counts.NEEDS_UPDATE,
    overdue: counts.OVERDUE,
    total: residents.length
  };
};

/**
 * Update a resident's status by setting their lastUpdate to now
 */
export const markResidentAsUpdated = (): string => {
  return new Date().toISOString();
};
