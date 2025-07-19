import { residents } from './residents';

export interface Sender {
  name: string;
  role: string;
  photo: string | null;
}

export interface Attachment {
  type: 'image' | 'document';
  url: string;
  name: string;
}

export interface MessageReaction {
  type: 'heart' | 'thumbsUp';
  count: number;
  hasReacted: boolean;
}

// Make sure this interface is exported
export interface Message {
  id: string;
  content: string;
  sender: Sender;
  timestamp: Date;
  isOwn: boolean;
  status?: 'sent' | 'delivered' | 'read';
  attachments?: Attachment[];
  isEdited?: boolean;
  reactions?: MessageReaction[];
  replyTo?: {
    id: string;
    sender: string;
    content: string;
  };
  isStarred?: boolean;
}

export interface MessageThread {
  id: string;
  resident: {
    id: string;
    name: string;
    photo: string | null;
    room: string;
  };
  participants: string[];
  lastMessage: {
    content: string;
    timestamp: Date;
    sender: string;
    isFromFamily: boolean;
  };
  unreadCount: number;
  isStarred: boolean;
  isMuted: boolean;
  isArchived: boolean;
  messages: Message[];
}

// Convert resident data to message thread format
const createThreadsFromResidents = (): MessageThread[] => {
  return residents.map((resident, index) => {
    const familyMember = resident.familyMembers[0];
    const isFirstResident = index === 0;
    const isSecondResident = index === 1;
    
    // Create base thread
    const thread: MessageThread = {
      id: `thread-${resident.id}`,
      resident: {
        id: resident.id,
        name: resident.name,
        photo: resident.photo,
        room: resident.room,
      },
      participants: [
        ...resident.familyMembers.map(fm => fm.name),
        'Care Team'
      ],
      lastMessage: {
        content: `Latest update about ${resident.name}`,
        timestamp: new Date(Date.now() - (index * 2 + 1) * 60 * 60 * 1000),
        sender: index % 2 === 0 ? 'Care Team' : familyMember?.name || 'Family',
        isFromFamily: index % 2 !== 0,
      },
      unreadCount: resident.unreadMessages || 0,
      isStarred: index === 2,
      isMuted: index === 3,
      isArchived: false,
      messages: [],
    };

    // Add messages based on resident index
    if (isFirstResident) {
      // First resident - detailed conversation with multiple messages
      thread.messages = [
        {
          id: `msg-${resident.id}-1`,
          content: `How is ${resident.name} doing today? Has there been any improvement with the activities?`,
          sender: {
            name: familyMember?.name || 'Family Member',
            role: 'Family Member',
            photo: null,
          },
          timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
          isOwn: false,
        },
        {
          id: `msg-${resident.id}-2`,
          content: `${resident.name} had a wonderful day! They participated in music therapy and seemed really engaged. They were singing along to some old favorites and interacted well with other residents.`,
          sender: {
            name: 'Sarah Johnson',
            role: 'Care Assistant',
            photo: null,
          },
          timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
          isOwn: true,
          status: 'read',
          attachments: [
            {
              type: 'image',
              url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
              name: 'music-therapy-session.jpg',
            },
          ],
        },
        {
          id: `msg-${resident.id}-3`,
          content: `That's wonderful to hear! ${resident.name} always loved music. Could you send more photos next time?`,
          sender: {
            name: familyMember?.name || 'Family Member',
            role: 'Family Member',
            photo: null,
          },
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          isOwn: false,
          status: 'read',
        },
      ];
    } else if (isSecondResident) {
      // Second resident - brief conversation
      thread.messages = [
        {
          id: `msg-${resident.id}-1`,
          content: `${resident.name} completed physical therapy today and showed good progress with mobility exercises.`,
          sender: {
            name: 'Mike Peterson',
            role: 'Physical Therapist',
            photo: null,
          },
          timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
          isOwn: true,
          status: 'read',
        },
      ];
    } else {
      // Other residents - single message
      thread.messages = [
        {
          id: `msg-${resident.id}-1`,
          content: index % 2 === 0 
            ? `${resident.name} enjoyed the group activity today!` 
            : `When is the next family meeting scheduled?`,
          sender: index % 2 === 0 
            ? {
                name: 'Kate Wilson',
                role: 'Nurse',
                photo: null,
              } 
            : {
                name: familyMember?.name || 'Family Member',
                role: 'Family Member',
                photo: null,
              },
          timestamp: new Date(Date.now() - (index + 1) * 60 * 60 * 1000),
          isOwn: index % 2 === 0,
          status: index % 2 === 0 ? 'delivered' : undefined,
        },
      ];
    }

    return thread;
  });
};

export const messageThreads = createThreadsFromResidents();

export const messageTemplates = [
  {
    id: 'daily-update',
    title: 'Daily Update',
    content: '[Resident Name] had a wonderful day today. They participated in [activity] and seemed to really enjoy [specific detail]. Their mood was [mood] and they [interaction with others].'
  },
  {
    id: 'meal-update',
    title: 'Meal Update',
    content: '[Resident Name] enjoyed their meal today. They ate [amount] of their [meal type] and particularly liked the [specific food]. Their appetite seems [status].'
  },
  {
    id: 'health-update',
    title: 'Health Update',  
    content: 'I wanted to update you on [Resident Name]\'s health status. [Health observation]. We are [care plan/next steps]. Please let me know if you have any questions.'
  },
  {
    id: 'activity-update',
    title: 'Activity Participation',
    content: '[Resident Name] participated in [activity name] today. They [level of engagement] and [specific behaviors/reactions]. We have some photos to share with you.'
  }
];