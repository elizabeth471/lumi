# lighttroupekids — Ian's Onboarding Brief

**For:** Ian (Tech Co-Founder Candidate)  
**From:** Elizabeth & Blossom  
**Status:** Ready for Your Review

---

## What You're Looking At

You're reviewing **three deliverables:**

1. **20 Interactive Mockup Screens** (Grove, Visual Designer)
   - Parent-facing: dashboard, approvals, controls, progress tracking
   - Child-facing: activity browser, video/game/learning experiences
   - Located in: `blossom-platform.html` → Ian's login
   - Status: Complete, publication-ready

2. **Complete Technical Brief** (Blossom)
   - How the system operates
   - Data architecture
   - Backend roadmap
   - COPPA compliance considerations
   - Located in: `IAN-TECHNICAL-BRIEF.md`
   - Status: Complete, ready for your technical assessment

3. **Next.js Prototype** (Dev Agent)
   - All 20 screens as real React components
   - TypeScript + Tailwind styling
   - Client-side routing, basic state management
   - Ready for you to own, refactor, and extend
   - Located in: `prototype/` directory
   - Status: Complete, `npm run dev` and click through

---

## Your Role

You're reviewing this as a **potential technical co-founder**. The question isn't "is this perfect?" — it's **"can I own this and build with it?"**

Your assessment should answer:
1. Does the architecture make sense to you?
2. Is this the right stack for the product?
3. Can you extend this prototype into a production system?
4. Do you want to build this?

---

## The Stack Decision: Next.js vs. Godot

Before you dive in, **we need your input on the technical foundation.**

You have **two viable paths:**

### **Option A: Next.js (Web-First)**

**What you get:**
- Existing prototype (all 20 screens, working)
- React component ecosystem (libraries for everything)
- Fast iteration (parent dashboard features build quickly)
- Web app + React Native for mobile later

**Why it's good:**
- Start shipping to web immediately
- Leverage React/TypeScript ecosystem
- Fast to iterate on parent dashboard feedback
- Smaller barrier to hiring the next engineer

**Why it might not excite you:**
- Game/interactive content feels less natural in React
- Mobile performance requires more work
- Two separate codebases (web + React Native)
- Less like "game development" and more like "CRUD UI development"

**Timeline:** Ship MVP in 6 weeks (prototype → backend → launch)

---

### **Option B: Godot (Game Engine)**

**What you get:**
- Single codebase → web (HTML5) + iOS (native) + Android (native)
- Godot's game engine for interactive content (your strength)
- Native mobile performance
- Child experience feels like a polished game app

**Why it's good:**
- You'd be in your element (game development)
- Single codebase for all platforms
- Native mobile apps are faster/smoother than web wrappers
- The interactive content (games, videos, learning) is idiomatic in Godot

**Why it might be harder:**
- Parent dashboard UI requires custom Godot code (not idiomatic)
- Smaller talent pool if you need to hire help
- More boilerplate for API integration
- Rebuilding the UI from scratch (skip the Next.js prototype)

**Timeline:** Build MVP in 8-10 weeks (design → code parent UI + child experience → backend → launch)

---

### **Option C: Hybrid (The Best of Both)**

**Godot for the child experience:** Activity browser, games, video player, learning modules (what makes Lumi unique)
**Next.js for the parent portal:** Account, approvals, controls, progress tracking (standard CRUD UI)
**Shared backend API:** Data, auth, activity catalog

**Why it's powerful:**
- Each platform does what it's best at
- You focus on game development (Godot)
- Parent UI handled by a web developer (contractor or future hire)
- Flexible deployment (separate web + app stores)

**Why it's complex:**
- Two codebases to maintain
- Sync/data consistency between two clients
- Higher upfront architecture work
- Requires either two engineers or you + contractor

**Timeline:** 10-12 weeks (if you're solo with a contractor for web portion)

---

## What We Need From You

**Answer these three questions, and we'll move forward:**

1. **Technical background:** Game dev (Godot experience)? Web dev (React/Node)? Full-stack? Other?

2. **Godot preference:** Do you have Godot experience? Would you prefer to build this in Godot, or are you comfortable with Next.js?

3. **Timeline preference:** How fast do you want to move? (6 weeks aggressive push, 8-10 weeks comfortable pace, or 12+ weeks with a team?)

Your answers will determine the path:
- Game dev + Godot love → **Option B (Godot) or C (Hybrid)**
- Web dev experience → **Option A (Next.js)**
- Either + strong preference → **We follow your preference**

---

## Next Steps (After You Decide)

**Week 1:** You review prototype + technical brief + mockups
**Week 2:** You assess the stack choice, meet with Blossom to discuss backend architecture
**Week 3:** Formation conversation (if you're interested in joining as co-founder)
**Week 4:** Technical planning + first architecture decisions
**Week 5+:** Build

---

## Files to Review (In Order)

1. **Mockups first** (visual orientation)
   - Click through all 20 screens
   - See what parent and child experiences should feel like
   - 15 minutes

2. **Technical Brief** (understand the problem)
   - Read `IAN-TECHNICAL-BRIEF.md`
   - Understand data architecture, backend roadmap, COPPA implications
   - 30 minutes

3. **Prototype Code** (assess implementation)
   - `cd prototype && npm run dev`
   - Click through the live version
   - Review `prototype/ARCHITECTURE.md` for code structure
   - Read `prototype/README.md` for component organization
   - 30 minutes

4. **Make your assessment** (5 minutes)
   - Is this the right foundation?
   - Which stack appeals to you?
   - Do you want to own this?

**Total time:** ~90 minutes to full understanding

---

## A Note on the Prototype

The Next.js prototype is **not production code.** It's a **communication device** — a way to show:
- Visual design (via Grove)
- User flows (via interaction)
- Technical feasibility (it runs, it's real React code)

You'll refactor it, redesign parts of it, and replace it as you build the real thing. The value isn't "we built it perfectly" — it's "we built it fast enough to validate the concept."

---

## A Note on the Decision

**This is not a permanent lock-in.** If you start with Next.js and realize Godot is better, you can pivot (costs 2-3 weeks). If you start with Godot and realize the parent dashboard complexity is too high, you can split to a hybrid approach.

The most important thing is **starting with momentum.** Pick the stack that excites you, move fast, and iterate.

---

## Questions Before You Start?

Message Blossom (via the chat in this platform) with any questions. She's here to help you understand the product, the prototype, and the technical choices.

---

**Welcome, Ian. Looking forward to your thoughts.**

— Elizabeth & Blossom
