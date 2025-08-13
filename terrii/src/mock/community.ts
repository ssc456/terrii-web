import { formatDistanceToNow } from 'date-fns';

export interface CommunityCategory {
  id: string;
  name: string;
  description: string;
  icon?: string;
  restricted?: boolean;
}

export interface CommunityPost {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    role: string;
    photo: string | null;
    isStaff: boolean;
  };
  timestamp: Date;
  category: string;
  isPinned: boolean;
  status: 'published' | 'pending_approval' | 'archived' | 'rejected';
  replies: {
    id: string;
    content: string;
    author: {
      id: string;
      name: string;
      role: string;
      isStaff: boolean;
      photo?: string;
    };
    timestamp: Date;
    reactions: {
      likes: number;
      hearts: number;
    };
  }[];
  reactions: {
    likes: {
      count: number;
      users: string[];
    };
    hearts: {
      count: number;
      users: string[];
    };
    hasLiked: boolean;
    hasHearted: boolean;
  };
  tags: string[];
  allowReplies: boolean;
  attachments: {
    id: string;
    type: 'image' | 'file';
    url: string;
    name: string;
  }[];
  views: number;
  reportCount: number;
  // Backend integration fields
  media?: string[];
  isAnnouncement?: boolean;
}

export const communityPosts: CommunityPost[] = [
  {
    id: '1',
    title: 'Welcome to Peaceful Place Families Community',
    content: 'We\'re excited to launch this new space for our care community to connect, share updates, and support each other. Please review our community guidelines in the pinned post below.',
    author: {
      id: 'staff1',
      name: 'Sarah Johnson',
      role: 'Care Manager',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      isStaff: true,
    },
    timestamp: new Date(Date.now() - 60 * 60 * 1000),
    category: 'Announcements',
    isPinned: true,
    status: 'published',
    replies: [],
    reactions: {
      likes: { count: 12, users: ['user1', 'user2'] },
      hearts: { count: 5, users: ['user3'] },
      hasLiked: false,
      hasHearted: false
    },
    tags: ['Welcome', 'Guidelines'],
    allowReplies: true,
    attachments: [],
    views: 45,
    reportCount: 0
  },
  {
    id: '2',
    title: 'Holiday Activities Schedule - December 2024',
    content: 'Here\'s our festive December calendar! We have carol singing on the 15th, cookie decorating on the 18th, and our annual holiday party on the 22nd. Family members are welcome to join us for the holiday party from 2-4 PM.',
    author: {
      id: 'staff2',
      name: 'Maria Rodriguez',
      role: 'Activities Coordinator',
      photo: 'https://randomuser.me/api/portraits/women/56.jpg',
      isStaff: true,
    },
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    category: 'Events',
    isPinned: false,
    status: 'published',
    replies: [
      {
        id: 'r1',
        content: 'This sounds wonderful! My mom Margaret loves singing. Will there be Christmas carols she might remember?',
        author: {
          id: 'family1',
          name: 'Susan Thompson',
          role: 'Family Member',
          isStaff: false,
          photo: 'https://randomuser.me/api/portraits/women/32.jpg'
        },
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        reactions: { likes: 3, hearts: 1 }
      }
    ],
    reactions: {
      likes: { count: 8, users: [] },
      hearts: { count: 3, users: [] },
      hasLiked: true,
      hasHearted: false
    },
    tags: ['Events', 'Holidays'],
    allowReplies: true,
    attachments: [
      {
        id: 'a1',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop',
        name: 'holiday-calendar.jpg'
      }
    ],
    views: 32,
    reportCount: 0
  },
  {
    id: '3',
    title: 'Medication Schedule Changes',
    content: 'Please note: The pharmacy delivery will be moved to Tuesdays starting next week. This may affect some residents\' medication timing. Our nursing team will coordinate with families if any adjustments are needed.',
    author: {
      id: 'staff3',
      name: 'Dr. Patricia Kim',
      role: 'Medical Director',
      photo: 'https://randomuser.me/api/portraits/women/68.jpg',
      isStaff: true,
    },
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    category: 'Medical',
    isPinned: false,
    status: 'published',
    replies: [],
    reactions: {
      likes: { count: 4, users: [] },
      hearts: { count: 0, users: [] },
      hasLiked: false,
      hasHearted: false
    },
    tags: ['Medical', 'Schedule'],
    allowReplies: false,
    attachments: [],
    views: 28,
    reportCount: 0
  },
  {
    id: '4',
    title: 'Gratitude for the Care Team',
    content: 'I wanted to share how grateful our family is for the incredible care my father Robert has been receiving. The staff goes above and beyond every day. Thank you for treating him like family.',
    author: {
      id: 'family2',
      name: 'Lisa Chen',
      role: 'Family Member',
      photo: 'https://randomuser.me/api/portraits/women/79.jpg',
      isStaff: false,
    },
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    category: 'Appreciation',
    isPinned: false,
    status: 'published',
    replies: [
      {
        id: 'r2',
        content: 'Thank you so much for these kind words, Lisa. Robert brings such joy to our days too!',
        author: {
          id: 'staff1',
          name: 'Sarah Johnson',
          role: 'Care Manager',
          isStaff: true,
          photo: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
        reactions: { likes: 8, hearts: 2 }
      }
    ],
    reactions: {
      likes: { count: 15, users: [] },
      hearts: { count: 8, users: [] },
      hasLiked: false,
      hasHearted: true
    },
    tags: ['Appreciation', 'Family'],
    allowReplies: true,
    attachments: [],
    views: 51,
    reportCount: 0
  },
  {
    id: '5',
    title: 'New Garden Project Proposal',
    content: 'I\'d love to start a small herb garden that residents can help tend. Has anyone tried something like this before? Looking for advice and volunteers!',
    author: {
      id: 'family3',
      name: 'Michael Thompson',
      role: 'Family Member',
      photo: 'https://randomuser.me/api/portraits/men/64.jpg',
      isStaff: false,
    },
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    category: 'Projects',
    isPinned: false,
    status: 'pending_approval',
    replies: [],
    reactions: {
      likes: { count: 0, users: [] },
      hearts: { count: 0, users: [] },
      hasLiked: false,
      hasHearted: false
    },
    tags: ['Garden', 'Projects', 'Volunteers'],
    allowReplies: true,
    attachments: [],
    views: 0,
    reportCount: 0
  }
];

export const communityMembers = [
  { id: 'staff1', name: 'Sarah Johnson', role: 'Care Manager', type: 'staff', status: 'active', joinDate: '2024-01-15' },
  { id: 'staff2', name: 'Maria Rodriguez', role: 'Activities Coordinator', type: 'staff', status: 'active', joinDate: '2024-01-15' },
  { id: 'staff3', name: 'Dr. Patricia Kim', role: 'Medical Director', type: 'staff', status: 'active', joinDate: '2024-01-15' },
  { id: 'family1', name: 'Susan Thompson', role: 'Family Member', type: 'family', status: 'active', joinDate: '2024-02-01', residentName: 'Margaret Thompson' },
  { id: 'family2', name: 'Lisa Chen', role: 'Family Member', type: 'family', status: 'active', joinDate: '2024-02-15', residentName: 'Robert Chen' },
  { id: 'family3', name: 'Michael Thompson', role: 'Family Member', type: 'family', status: 'pending', joinDate: '2024-03-01', residentName: 'Margaret Thompson' }
];

export const categories = [
  { value: 'all', label: 'All Categories', count: communityPosts.filter(p => p.status === 'published').length },
  { value: 'announcements', label: 'Announcements', count: communityPosts.filter(p => p.category === 'Announcements' && p.status === 'published').length },
  { value: 'events', label: 'Events', count: communityPosts.filter(p => p.category === 'Events' && p.status === 'published').length },
  { value: 'medical', label: 'Medical', count: communityPosts.filter(p => p.category === 'Medical' && p.status === 'published').length },
  { value: 'appreciation', label: 'Appreciation', count: communityPosts.filter(p => p.category === 'Appreciation' && p.status === 'published').length },
  { value: 'projects', label: 'Projects', count: communityPosts.filter(p => p.category === 'Projects' && p.status === 'published').length }
];

export const communityCategories: CommunityCategory[] = [
  {
    id: 'announcements',
    name: 'Announcements',
    description: 'Important updates from the facility',
    icon: 'BellRing',
    restricted: true
  },
  {
    id: 'events',
    name: 'Events',
    description: 'Upcoming activities and events',
    icon: 'Calendar'
  },
  {
    id: 'medical',
    name: 'Medical',
    description: 'Health and medical information',
    icon: 'Stethoscope',
    restricted: true
  },
  {
    id: 'appreciation',
    name: 'Appreciation',
    description: 'Recognize and thank staff members',
    icon: 'Heart'
  },
  {
    id: 'projects',
    name: 'Projects',
    description: 'Community improvement initiatives',
    icon: 'Lightbulb'
  },
  {
    id: 'general',
    name: 'General Discussion',
    description: 'For topics that don\'t fit elsewhere',
    icon: 'MessageSquare'
  }
];
