import type { Moment } from '../components/moments/MomentCard';

export const moments: Moment[] = [
  {
    id: '1',
    title: 'Morning Art Session',
    emoji: '🎨',
    description: 'Margaret enjoyed painting a beautiful landscape today. She was particularly focused and even helped other residents with their artwork. Her attention to detail is amazing!',
    category: 'Activity',
    timestamp: new Date(),
    status: 'published',
    author: {
      name: 'Sarah Johnson',
      role: 'Care Assistant',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    resident: {
      name: 'Margaret Thompson',
      photo: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    likes: 5,
    comments: ['Wonderful to see her enjoying art!', 'She looks so happy!'],
    hasLiked: false,
    isSharedWithFamily: true,
    tags: ['art', 'painting', 'creative'],
    photos: [
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600',
      'https://images.unsplash.com/photo-1579762593175-20226054cad0?w=800&h=600'
    ],
    engagement: {
      views: 12,
      familyViews: 5,
      shares: 1
    }
  },
  {
    id: '2',
    title: 'Chess Tournament',
    emoji: '♟️',
    description: 'Robert challenged several staff members to chess today and won every game! His strategic thinking is impressive.',
    category: 'Social',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    status: 'pending_approval',
    author: {
      name: 'Mike Peterson',
      role: 'Social Worker',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    resident: {
      name: 'Robert Chen',
      photo: 'https://randomuser.me/api/portraits/men/70.jpg'
    },
    likes: 0,
    comments: [],
    hasLiked: false,
    isSharedWithFamily: false,
    tags: ['friendship', 'chess', 'social'],
    photos: [],
    engagement: {
      views: 5,
      familyViews: 0,
      shares: 0
    }
  },
  {
    id: '3',
    title: 'Birthday Celebration',
    emoji: '🎂',
    description: 'We celebrated Dorothy\'s 85th birthday today with cake and music. Many family members joined via video call. It was a wonderful celebration!',
    category: 'Milestone',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    status: 'published',
    author: {
      name: 'Lisa Wong',
      role: 'Care Manager',
      photo: 'https://randomuser.me/api/portraits/women/56.jpg'
    },
    resident: {
      name: 'Dorothy Williams',
      photo: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    likes: 12,
    comments: ['Happy Birthday Dorothy!', 'The cake looked delicious!', 'Thank you for organizing this special day'],
    hasLiked: true,
    isSharedWithFamily: true,
    tags: ['birthday', 'celebration', 'family'],
    photos: [
      'https://images.unsplash.com/photo-1578922846525-52a84a7e2b98?w=800&h=600',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=600',
      'https://images.unsplash.com/photo-1574314775485-10d29e8d2e9e?w=800&h=600'
    ],
    engagement: {
      views: 28,
      familyViews: 15,
      shares: 4
    }
  }
];
