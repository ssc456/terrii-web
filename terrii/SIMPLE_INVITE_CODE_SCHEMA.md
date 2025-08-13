# Simple Invite Code Schema Addition

Add this to your existing `schema.graphql`:

```graphql
type TerriiInviteCode @model @auth(rules: [
  { allow: groups, groups: ["ADMIN", "MANAGER", "CARE_STAFF"] }
]) {
  id: ID!
  code: String! @index(name: "byCode")
  familyMemberID: ID! @index(name: "byFamilyMember")
  familyMember: TerriiResidentFamily @belongsTo(fields: ["familyMemberID"])
  isUsed: Boolean!
  usedAt: AWSDateTime
  expiresAt: AWSDateTime!
  createdByID: ID!
  createdBy: TerriiUserProfile @belongsTo(fields: ["createdByID"])
  createdAt: AWSDateTime!
  updatedAt: AWSDateTime!
}
```

This simple addition will:
- Track 8-digit invite codes (XXXX-XXXX format)
- Link codes to specific family members
- Track when codes are used
- Set expiration dates (7 days default)
- Track who created the code
