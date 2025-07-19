a care provider platform built to improve communication between care staff and families of residents in a dementia care setting. This is the MVP version. The UI should follow a mobile-first structure, use a soft, calming aesthetic (pastel greens, light blue backgrounds, rounded corners, and clean sans-serif typography like Nunito or Inter), and be simple, accessible, and intuitive.

🎨 Global Design System:
Use a soft green (#DFF2E1) and pastel blue (#E6F1FA) palette with white backgrounds and charcoal/grey text.

Font: Nunito or Inter. Use 20pt+ for headings, 14–16pt for body, 12pt for small labels.

Create consistent card components, buttons (primary, secondary, text-only), message bubbles, tags, and graph tiles using Auto Layout.

Navigation: use a bottom nav bar with 5 sections: Residents, Messages, Shared Moments, Angela Sync, Insights.

📱 Core Screens (and their components):
1. Login / Onboarding
Login page with email/password, “Forgot password?” link

First-time user profile setup (name, role, upload photo)

2. Residents Section
Resident List: Cards with profile image, name, room, last update status, quick action buttons

Resident Profile View: Photo, name, Circle of Care (family), Calendar tab (showing activities/visits), Quick Update form (message + photo)

3. Messages Section
Inbox: Threaded list by resident name, unread status, preview message

Message Thread: Chat-style layout with message bubbles, quick replies, attachment options

4. Shared Moments Section
Moments Feed: Cards with optional photo, emoji title, description, category tag, timestamp; filters by tag or date; “Create Post” button

Create Post Screen: Upload photo, enter title, description (max 300 chars), tag dropdown, checkbox “Share with family app”

5. Angela Sync Section
Concern Feed: Cards showing recent family concerns (from ANGii), resident name, suggested staff action, urgency badges; filters and “Mark as Acknowledged” toggle

Concern Detail View: Resident photo, concern details, action buttons (Message Family, Resolve)

6. Insights Section
Dashboard: KPIs (e.g. % residents updated weekly, avg. response time), bar/pie charts, toggle by staff member

Export Report: Summary screen with date filters and CSV/PDF download button

7. Admin Tools (restricted access)
User Management: Add/edit/remove staff, view roles, last login

Staff Activity Tracker: Graph or table of logins, updates sent, moments shared

8. Global Tools
Search overlay: search across residents, messages, posts

Settings screen: profile settings, notifications toggle, logout

Use consistent auto layout, reusable components, and name all frames and components clearly (e.g. ResidentCard, MessageBubble, MomentPost). Prioritise clarity and simplicity. Ensure responsiveness across mobile and tablet viewports.