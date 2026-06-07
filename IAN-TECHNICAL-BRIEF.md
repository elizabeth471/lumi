# lighttroupekids — Technical Architecture & Operations Brief

**For:** Ian (Tech Co-Founder Candidate)  
**From:** Blossom (Project Orchestrator)  
**Date:** June 7, 2026  
**Status:** Ready for Review & Ownership

---

## Executive Summary

lighttroupekids is a screen-time product designed around **transparent parental oversight** and **child agency**. From a technical standpoint, it operates as a three-tier system:

1. **Parent Portal** — Setup, approval, oversight
2. **Child Interface** — Activity discovery, engagement, reflection
3. **Backend System** — User management, data integrity, safety logging

The prototype you're reviewing is a **complete client-side implementation** of all 20 UI screens. What remains is backend infrastructure and legal/compliance integration.

---

## System Architecture

### User Model

**Two user types with different data access:**

```
Parent (Account Owner)
├── Can create multiple child profiles
├── Sets activity approval mode (auto/manual/restricted)
├── Sets time limits and content filters
├── Views child activity history & reflections
└── Cannot see real-time activity (by design)

Child (Managed User)
├── Selects from approved activities
├── Completes activities at their own pace
├── Provides feedback (emoji-based reflection)
├── Can request access to restricted activities
└── Sees only their assigned activities (parental control)
```

### Core Data Entities

#### Activity
```typescript
{
  id: string;
  title: string;
  type: "video" | "game" | "learning";
  description: string;
  learningGoals: string[];
  duration: number; // minutes
  ageRange: [number, number];
  contentLevel: "parent-approved" | "requires-approval" | "restricted";
}
```

#### Activity Session (Child Experience)
```typescript
{
  id: string;
  childId: string;
  activityId: string;
  startedAt: timestamp;
  completedAt?: timestamp;
  reflection?: string; // parent-safe reflection
  timeSpent: number; // seconds
}
```

#### Child Profile
```typescript
{
  id: string;
  parentId: string;
  name: string;
  dateOfBirth: date;
  approvalMode: "auto" | "manual" | "restricted";
  timeLimit: number; // daily minutes, optional
  contentFilter: "all" | "age-appropriate" | "curated";
}
```

### Data Flow

**Parent Setup → Child Activity → Data Recording:**

1. Parent creates account and child profile
2. Parent configures activity approval mode
3. Child logs in (name-based, no password at this stage)
4. Child browses activity library (filtered by content setting)
5. Child selects activity → activity loads
6. Activity completes → reflection collected
7. Session logged with parent-safe metadata (NOT child identity)

**Key Design**: Parent approval of **activities**, not real-time monitoring of **usage**. This builds trust while preserving safety.

---

## Technical Decisions & Why

### 1. Client-Side State Management (React Context, not Redux)

**Why:** At MVP stage, no external dependencies. AppContext handles routing and user data.

**Trade-off:** Scales to ~50 screens. Beyond that, upgrade to Zustand or Redux.

**What You'll Do:** As backend integrates, AppContext becomes a "API client layer" — same interface, but fetches from server.

### 2. TypeScript Throughout

**Why:** Prevents runtime errors on large data model. Catches mistakes at build time.

**All components have full types** — no `any`. You can safely refactor.

### 3. Tailwind CSS (No Design System Library)

**Why:** Grove's design system is pure Tailwind tokens (colors, spacing). Zero abstraction overhead.

**All colors in `tailwind.config.js`** — change one place, updates everywhere. Matches brand palette exactly.

### 4. No Authentication Yet

**Why:** Prototype doesn't need it. Parent can "login" with any email.

**What You'll Add:** Clerk (if you want managed auth) or Supabase (if you want backend + auth bundled).

### 5. No Persistence

**Why:** Data disappears on refresh. Acceptable for prototype review.

**What You'll Add:** localStorage for session persistence, then backend API after.

---

## Parent Flow (Technical)

**Parent Entry Points:**

1. **Welcome Screen** → Onboarding narrative
2. **Child Setup** → Create child profile (name, DOB, approval mode)
3. **Activity Approval Setup** → Choose auto/manual/restricted
4. **Dashboard** → View child profiles, activity stats
5. **Activity Library** → Browse all activities (different from child view)
6. **Controls** → Set time limits, content filters, approval rules
7. **Progress** → View activity history by child (no real-time data)
8. **Settings** → Account preferences, notifications

**Parent Cannot:**
- Monitor in real-time (by design — builds trust)
- See what child is doing right now
- Enforce hard time limits (soft pauses only)

**Parent Can:**
- Pre-approve activities
- Set daily time budgets
- Review completed activities
- See requested activities waiting for approval

### Approval Modes (Three Options)

| Mode | Parent Workload | Child Experience | Use Case |
|------|---|---|---|
| **Auto** | None — all approved | Sees all activities | Trusted child, parent wants no friction |
| **Manual** | High — approves each | Requests → waits → can start | Cautious parent, wants control |
| **Restricted** | Medium — only pre-approved | Sees only whitelisted activities | Age-gated, limited library |

---

## Child Flow (Technical)

**Child Entry Points:**

1. **Welcome** → Child selects from parent-created profiles
2. **Home** → Activity library grid (filtered by parent settings)
3. **Activity Detail** → Description, learning goals, preview
4. **Activity Experience** → Type-specific interface (video/game/learning)
5. **Reflection** → Emoji-based feedback (happy/okay/challenging)
6. **Help** → FAQs, how to request approval

**Child Cannot:**
- Change approval settings
- Access restricted activities (without parent approval)
- See parent's dashboard
- Request a different parent

**Child Can:**
- Browse approved activities
- Request access to restricted activities
- Complete activities at own pace
- Provide reflection feedback
- Pause and resume activities

### Activity Type Implementations

#### Video Activity
- Play button (mocked player, no actual video)
- Progress bar (fake advancing)
- Captions toggle (UI only)
- Exits after completion

#### Game Activity
- 3×3 grid pattern-matching game (fully interactive)
- Score tracking
- Completion celebration screen
- Can replay

#### Learning Activity
- Multiple-choice question
- Progress tracker ("1 of 3")
- Feedback after submit
- Can review answers

---

## COPPA Compliance (Technical Implications)

**COPPA applies if any user is under 13.**

### Current Prototype Status

| Requirement | Status | Notes |
|---|---|---|
| Parental consent | ❌ Stubbed | Prototype accepts any parent email |
| Verifiable parental consent | ❌ Not implemented | Requires COPPA-compliant consent flow |
| Data minimization | ✅ Designed in | We don't collect real-time location, device ID, etc. |
| Data deletion | ⚠️ Design ready | Code structure supports it; needs backend |
| No behavioral tracking | ✅ Designed in | We log activity completion, not engagement metrics |
| No profiling/targeting | ✅ Designed in | No ads, no recommendation engine |

### What You Must Do Before Launch

1. **Parental Consent Flow**
   - Email-based consent (industry standard for COPPA)
   - Parent clicks link → verifies email → consent recorded
   - Cannot proceed without consent

2. **Data Handling**
   - Document what data you collect (activity completion only)
   - Document retention policy (parents can delete child data)
   - Implement deletion endpoint (required by COPPA)

3. **Legal Review**
   - Have a lawyer review privacy policy
   - Have a lawyer review parental consent flow
   - This is non-negotiable before any user signup

4. **Third-Party Compliance**
   - Any service that touches child data must be COPPA-compliant
   - Supabase: Yes (signs BAA)
   - Stripe: Only for parent payments, not child data
   - Analytics: Must be disabled for child profiles

---

## Backend Architecture (What You'll Build)

### Tech Stack Recommendation

**Primary Option:**
- Supabase (PostgreSQL + Auth + Real-time)
- Reason: COPPA-friendly, easy data deletion, built-in auth

**Alternative Option:**
- Next.js API Routes + Supabase for DB only
- Reason: More control, incremental migration from prototype

### Required Endpoints (Phase 1)

```
POST   /api/auth/consent         — Record parental consent
POST   /api/auth/parent-signup   — Create parent account
POST   /api/children             — Add child profile
POST   /api/activities/:id/start — Begin activity session
POST   /api/activities/:id/complete — End session + save reflection
GET    /api/children/:id/history — Get activity history (parent)
DELETE /api/children/:id/sessions/:id — Delete child data
```

### Database Schema (Minimal)

```sql
parents (id, email, consent_date, created_at)
children (id, parent_id, name, dob, approval_mode)
activities (id, title, type, duration, age_range)
sessions (id, child_id, activity_id, completed_at, reflection)
```

---

## Next Steps for You

### Week 1: Review & Plan
- [ ] Run `npm run dev` in `/prototype` — click through all 20 screens
- [ ] Read `/prototype/ARCHITECTURE.md` for code structure
- [ ] Meet with Blossom to discuss backend tech choice (Supabase vs. other)
- [ ] Plan COPPA legal review timeline

### Week 2–3: Backend Setup
- [ ] Choose auth solution
- [ ] Set up database schema
- [ ] Implement consent flow
- [ ] Add 3–4 core API endpoints

### Week 4: Frontend Integration
- [ ] Replace AppContext API calls with real backend calls
- [ ] Connect parent signup to auth
- [ ] Test data persistence

---

## Questions for You

Before we proceed, answer these:

1. **Backend Preference:** Supabase bundled, or separate (Next.js API + custom DB)?
2. **Auth:** Managed (Clerk, Supabase Auth) or custom?
3. **Data Storage:** PostgreSQL, MongoDB, or other?
4. **Timeline:** When do you want MVP ready for user testing?
5. **Team:** Building solo, or hiring engineers soon?

---

## Success Criteria for Phase 1

- ✅ Prototype reviewed and approved by founder
- ✅ You own the codebase and understand every file
- ✅ Backend architecture documented
- ✅ COPPA legal review completed
- ✅ First 5 test users can sign up and use the product
- ✅ Parent consent flow working
- ✅ Activity data persisting correctly

---

**You now have:**
- A fully working prototype (20 screens)
- Complete architecture documentation
- Clear next steps
- TypeScript + Tailwind foundation to build on

**The code is yours to own, refactor, and extend. Blossom is here to coordinate and support as you build.**

For technical questions on the prototype itself, see `/prototype/README.md` and `/prototype/ARCHITECTURE.md`.
