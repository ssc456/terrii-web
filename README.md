# TERRii Project - Complete Overview

This repository contains both the TERRii web application for care home staff and the planned TERRii Family mobile application for family members.

## Project Structure

```
terrii-web/
├── terrii/                              # 🌐 Web App (Staff/Admin)
│   ├── src/                            # React + TypeScript + Vite
│   ├── amplify/                        # AWS Amplify configuration
│   └── package.json
├── terrii-family/                      # 📱 Mobile App (Family) - CURRENT
│   ├── src/                            # React Native + Expo
│   ├── app.json                        # Expo configuration
│   └── package.json
├── shared/                             # 🔄 Shared Resources - PLANNED
│   ├── types/                          # TypeScript definitions
│   ├── utils/                          # Common utilities
│   └── constants/                      # Shared constants
├── docs/                              # 📚 Documentation
└── README.md                          # This file
```

## Applications

### 🌐 TERRii Web App (Current)
**Purpose**: Care home management system for staff and administrators  
**Technology**: React + TypeScript + Vite + AWS Amplify  
**Users**: Super admins, care home admins, care staff  

**Key Features**:
- Resident management and profiles
- Care activity tracking
- Staff communication and messaging
- Family member contact management
- Photo and moment sharing
- Care home administration
- Multi-role access control

**Status**: ✅ Production ready

### 📱 TERRii Family Mobile App (Current)
**Purpose**: Mobile app for family members to stay connected with loved ones  
**Technology**: React Native + Expo + Shared AWS backend  
**Users**: Family members of care home residents  

**Key Features**:
- View loved one's daily activities
- Receive care updates and photos
- Message care staff directly
- View shared moments and memories
- Emergency notifications
- Multi-resident support for families

**Status**: ✅ Implemented and running

## Database Architecture

Your current AWS Amplify database is perfectly designed for both applications:

### Core Models
- **TerriiResident**: Central resident records
- **TerriiResidentFamily**: Family contacts with user linking (`userID`, `isRegistered`)
- **TerriiUserProfile**: Role-based access control (`FAMILY` role ready)
- **TerriiCareHome**: Care home management
- **Activities, Messages, Photos**: Rich content sharing

### Family Integration Ready
- ✅ Family member linking via `TerriiResidentFamily.userID`
- ✅ Registration status tracking with `isRegistered`
- ✅ `FAMILY` role already defined in `TerriiUserRole`
- ✅ Message system supports family communication
- ✅ Multi-resident family support built-in

## Authentication Strategy

### Shared AWS Cognito
Both apps use the same AWS Cognito User Pool:
- **Web App**: Direct staff login with role assignment
- **Mobile App**: Family invitation → registration → linked account

### Access Control
- **Super Admin** (`@acecura.com`): Full system access
- **Admin**: Care home management
- **Staff**: Resident care and family communication
- **Family**: Limited access to linked residents only

## Getting Started

### Web App (Current)
```bash
cd terrii
npm install
npm run dev
```

### Mobile App (Current)
```bash
cd terrii-family
npm install
npx expo start
```

## Development Phases

### Phase 1: Foundation (Weeks 1-2)
- Set up React Native project
- Configure shared AWS backend
- Implement authentication

### Phase 2: Core Features (Weeks 3-6)
- Resident dashboard
- Messaging system
- Activity feeds

### Phase 3: Advanced Features (Weeks 7-10)
- Photo management
- Push notifications
- Offline capabilities

### Phase 4: Launch (Weeks 11-12)
- Testing and optimization
- App store submission

## Key Benefits

### For Families
- 📱 **Mobile-first experience**: Native app optimized for smartphones
- 🔔 **Real-time updates**: Push notifications for activities and messages
- 📸 **Visual connection**: Photos and videos of daily life
- 💬 **Direct communication**: Message care staff instantly
- 🔒 **Secure & private**: HIPAA-compliant with role-based access

### For Care Homes
- 🔄 **Integrated workflow**: Same backend, seamless family engagement
- 👨‍👩‍👧‍👦 **Better family relationships**: Improved communication and transparency
- 📊 **Efficiency gains**: Reduce phone calls, automate updates
- 🎯 **Quality of care**: Families more informed and engaged

### For Development
- 🏗️ **Shared infrastructure**: One backend supports both applications
- 🔧 **Consistent data**: Same database, same user management
- 🚀 **Faster development**: Existing APIs and authentication
- 📈 **Scalable architecture**: Ready for future feature expansion

## Documentation

For detailed planning and implementation information, see:

- **[📋 TERRII_FAMILY_MOBILE_APP_PLAN.md](./TERRII_FAMILY_MOBILE_APP_PLAN.md)** - Complete project plan and overview
- **[💾 DATABASE_SCHEMA_ANALYSIS.md](./DATABASE_SCHEMA_ANALYSIS.md)** - Database design and family integration
- **[🔐 AUTHENTICATION_ACCESS_CONTROL.md](./AUTHENTICATION_ACCESS_CONTROL.md)** - Security and access control strategy
- **[⚙️ MOBILE_APP_TECHNICAL_ARCHITECTURE.md](./MOBILE_APP_TECHNICAL_ARCHITECTURE.md)** - Technical implementation details
- **[🗓️ IMPLEMENTATION_ROADMAP.md](./IMPLEMENTATION_ROADMAP.md)** - Development timeline and milestones

## Next Steps

1. **Review Planning Documents**: Stakeholder approval of features and approach
2. **Secure Resources**: Assign development team and budget
3. **Set Up Development Environment**: Mobile development tools and Expo
4. **Begin Phase 1**: Project initialization and authentication foundation

## Contact

For questions about this project plan or implementation details, please contact the development team.

---

**TERRii** - Bringing families and care homes closer together through technology 💙
