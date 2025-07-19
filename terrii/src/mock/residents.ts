export const residents = [
  {
    id: "res1",
    name: "Alice Johnson",
    room: "103A",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    lastUpdate: "2025-07-18T12:30:00Z",
    status: "stable",
    unreadMessages: 0,
    familyMembers: [
      { id: "fam1", name: "Robert Johnson", relationship: "Son", phone: "555-123-4567" },
      { id: "fam2", name: "Mary Johnson", relationship: "Daughter", phone: "555-765-4321" }
    ],
    dateOfBirth: "1948-05-12",
    admissionDate: "2023-11-05",
    medicalInfo: {
      primaryPhysician: "Dr. Sarah Williams",
      conditions: ["Dementia - Early Stage", "Hypertension", "Arthritis"],
      medications: [
        { name: "Donepezil", dosage: "5mg daily", time: "Morning" },
        { name: "Lisinopril", dosage: "10mg daily", time: "Morning" }
      ],
      allergies: ["Penicillin"],
      dietaryRestrictions: ["Low sodium"]
    },
    carePreferences: {
      interests: ["Gardening", "Classical Music", "Puzzles"],
      routine: "Prefers morning activities, afternoon rest",
      communication: "Responds well to gentle approach, enjoys conversation about family",
      mobility: "Independent, occasional walking assistance"
    },
    recentActivities: [
      { date: "2025-07-17", activity: "Art Therapy", notes: "Created a watercolor painting", staff: "Sarah Thompson" },
      { date: "2025-07-15", activity: "Garden Time", notes: "Helped plant new flowers", staff: "Mike Peterson" }
    ],
    emergencyContact: {
      name: "Robert Johnson",
      relationship: "Son",
      phone: "555-123-4567",
      email: "robert.johnson@example.com"
    }
  },
  {
    id: "res2",
    name: "Thomas Williams",
    room: "205B",
    photo: "https://randomuser.me/api/portraits/men/42.jpg",
    lastUpdate: "2025-07-17T15:45:00Z",
    status: "check",
    unreadMessages: 2,
    familyMembers: [
      { id: "fam3", name: "Patricia Williams", relationship: "Wife", phone: "555-987-6543" }
    ],
    dateOfBirth: "1945-08-23",
    admissionDate: "2024-01-15",
    medicalInfo: {
      primaryPhysician: "Dr. Michael Chen",
      conditions: ["Dementia - Moderate", "Diabetes Type 2", "Glaucoma"],
      medications: [
        { name: "Metformin", dosage: "500mg twice daily", time: "Morning/Evening" },
        { name: "Timolol eye drops", dosage: "1 drop each eye", time: "Morning" }
      ],
      allergies: ["Sulfa drugs"],
      dietaryRestrictions: ["Diabetic diet", "Low sugar"]
    },
    carePreferences: {
      interests: ["History books", "Bird watching", "News"],
      routine: "Early riser, prefers structured daily schedule",
      communication: "May need reminders to use hearing aid, prefers direct communication",
      mobility: "Uses walker, needs supervision on stairs"
    },
    recentActivities: [
      { date: "2025-07-16", activity: "Reading Group", notes: "Participated in discussion about WWII history", staff: "Alan Roberts" },
      { date: "2025-07-14", activity: "Physical Therapy", notes: "Completed all exercises, showing improvement", staff: "Lisa Chen" }
    ],
    emergencyContact: {
      name: "Patricia Williams",
      relationship: "Wife",
      phone: "555-987-6543",
      email: "patricia.williams@example.com"
    }
  },
  {
    id: "res3",
    name: "Margaret Thompson",
    room: "101A",
    photo: "https://randomuser.me/api/portraits/women/53.jpg",
    lastUpdate: "2025-07-16T09:20:00Z",
    status: "stable",
    unreadMessages: 0,
    familyMembers: [
      { id: "fam4", name: "Susan Thompson", relationship: "Daughter", phone: "555-123-7890" },
      { id: "fam5", name: "Michael Thompson", relationship: "Son", phone: "555-987-6123" }
    ],
    dateOfBirth: "1942-03-15",
    admissionDate: "2023-06-01",
    medicalInfo: {
      primaryPhysician: "Dr. Elizabeth Johnson",
      conditions: ["Alzheimer's", "Osteoporosis", "Hypertension"],
      medications: [
        { name: "Memantine", dosage: "10mg daily", time: "Morning" },
        { name: "Calcium supplements", dosage: "500mg daily", time: "With meals" },
        { name: "Amlodipine", dosage: "5mg daily", time: "Evening" }
      ],
      allergies: ["Shellfish", "Iodine"],
      dietaryRestrictions: ["Soft foods", "Low salt"]
    },
    carePreferences: {
      interests: ["Art", "Music", "Gardening", "Family photos"],
      routine: "Enjoys afternoon naps, prefers activities in morning",
      communication: "Responds well to gentle approach, enjoys conversation about family",
      mobility: "Uses walker, needs assistance with transfers"
    },
    recentActivities: [
      { date: "2025-07-15", activity: "Music Therapy", notes: "Enjoyed singing along to old favorites", staff: "Kate Wilson" },
      { date: "2025-07-13", activity: "Family Visit", notes: "Daughter Susan visited for lunch", staff: "James Parker" }
    ],
    emergencyContact: {
      name: "Susan Thompson",
      relationship: "Daughter",
      phone: "555-123-7890",
      email: "susan.thompson@example.com"
    }
  },
  {
    id: "res4",
    name: "Dorothy Clark",
    room: "112C",
    photo: "https://randomuser.me/api/portraits/women/32.jpg",
    lastUpdate: "2025-07-14T16:45:00Z",
    status: "urgent",
    unreadMessages: 3,
    familyMembers: [
      { id: "fam6", name: "David Clark", relationship: "Son", phone: "555-345-6789" }
    ],
    dateOfBirth: "1939-11-02",
    admissionDate: "2023-08-12",
    medicalInfo: {
      primaryPhysician: "Dr. Robert Miller",
      conditions: ["Dementia - Advanced", "Heart Failure", "Chronic Pain"],
      medications: [
        { name: "Furosemide", dosage: "40mg daily", time: "Morning" },
        { name: "Acetaminophen", dosage: "500mg as needed", time: "For pain (max 4/day)" }
      ],
      allergies: ["Aspirin", "Latex"],
      dietaryRestrictions: ["Pureed diet", "Thickened liquids"]
    },
    carePreferences: {
      interests: ["Being read to", "Soft music", "Hand massage"],
      routine: "Needs assistance with all ADLs, prefers female caregivers",
      communication: "Limited verbal ability, responds to simple instructions",
      mobility: "Wheelchair dependent, needs full assistance"
    },
    recentActivities: [
      { date: "2025-07-14", activity: "Sensory Stimulation", notes: "Responded well to aromatherapy", staff: "Rachel Green" },
      { date: "2025-07-12", activity: "Physician Visit", notes: "Dr. Miller adjusted medication", staff: "Mark Johnson" }
    ],
    emergencyContact: {
      name: "David Clark",
      relationship: "Son",
      phone: "555-345-6789",
      email: "david.clark@example.com"
    }
  },
  {
    id: "res5",
    name: "James Wilson",
    room: "207A",
    photo: "https://randomuser.me/api/portraits/men/29.jpg",
    lastUpdate: "2025-07-18T08:15:00Z",
    status: "stable",
    unreadMessages: 1,
    familyMembers: [
      { id: "fam7", name: "Elizabeth Wilson", relationship: "Daughter", phone: "555-456-7890" },
      { id: "fam8", name: "Richard Wilson", relationship: "Son", phone: "555-567-8901" }
    ],
    dateOfBirth: "1950-07-21",
    admissionDate: "2024-02-03",
    medicalInfo: {
      primaryPhysician: "Dr. Anita Patel",
      conditions: ["Parkinson's Disease", "Depression", "GERD"],
      medications: [
        { name: "Levodopa", dosage: "100mg three times daily", time: "With meals" },
        { name: "Sertraline", dosage: "50mg daily", time: "Morning" },
        { name: "Omeprazole", dosage: "20mg daily", time: "Before breakfast" }
      ],
      allergies: ["Codeine"],
      dietaryRestrictions: ["Soft diet", "Avoid acidic foods"]
    },
    carePreferences: {
      interests: ["Sports discussion", "Audiobooks", "Chess"],
      routine: "Early riser, enjoys outdoor time when possible",
      communication: "Sometimes has difficulty finding words, prefers short conversations",
      mobility: "Uses walking stick, unsteady gait, fall risk"
    },
    recentActivities: [
      { date: "2025-07-18", activity: "Group Exercise", notes: "Completed seated exercises", staff: "Daniel White" },
      { date: "2025-07-16", activity: "Chess Game", notes: "Played with volunteer for 45 minutes", staff: "Amanda Johnson" }
    ],
    emergencyContact: {
      name: "Elizabeth Wilson",
      relationship: "Daughter",
      phone: "555-456-7890",
      email: "elizabeth.wilson@example.com"
    }
  }
];