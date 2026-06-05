# Technical Co-Founder Onboarding — Lumi
**Prepared by Blossom · Delivered on first login**
**Confidential — Internal only**

---

Welcome. You're reading this because the founder trusted you enough to give you access. That means you've already cleared the most important bar. This document is everything Blossom knows that you need to know before your first conversation with the founder — so that conversation is productive, not introductory.

Read this fully before your first session. It will save both of you time.

---

## What Lumi Is

A children's screen time product designed to give kids safe, enriching digital interaction — specifically structured around supervised video experiences, phone-free community support, and multilingual engagement.

The core belief: the only screen time worth allowing is screen time that brings families closer.

**The problem it solves:** Parents are caught between two bad options — give their child a smartphone (safety, content, and social risks) or hold the line (social exclusion, kids feel left out). Lumi is a third option: a device and platform designed specifically for children that satisfies the social and digital pressure kids face, without the risks of a smartphone.

**Target market:** Parents of children aged 6–12, specifically families who are screen-time-conscious, multilingual, or neurodivergent-aware. Wave 1 focus: the phone-free movement community, which is organized, vocal, and actively looking for alternatives.

**Why now:** The phone-free school movement is growing fast. Jonathan Haidt's research on smartphones and adolescent mental health has created mainstream parent anxiety. The market is asking for exactly what Lumi is proposing to build.

---

## Current Stage — Phase 0: Idea Validation

No product exists. No code has been written for the product. No funding has been raised. No team exists beyond the founder and you.

**This is intentional.** The founder is following a disciplined sequence:

1. Validate demand before building anything
2. Form the entity before spending on infrastructure
3. Hire on evidence, not optimism

**Phase 0 success criteria (what needs to happen before Phase 1 begins):**
- 5+ parents say "I would use this and pay for it"
- 1+ pediatrician says "I would recommend this to families"
- 1+ phone-free movement leader says "My community would pilot this"
- Entity formed (Delaware C-Corp)
- Brand name confirmed and attorney-cleared

**Where things stand today:**
- Stakeholder materials package: complete
- Brand name: Jelex (leading candidate — app stores clean, trademark Classes 9/41 clear, domain available, phonetic Spanish check outstanding)
- Entity: not yet formed — waiting on brand name confirmation
- Validation conversations: not yet started

The founder is one decision away (brand name) from starting the formation sequence.

---

## Your Role

You are the Technical Co-Founder. That means:

**You own:**
- All technical architecture decisions
- The engineering roadmap from prototype to product
- Infrastructure, security, and COPPA-compliant data architecture
- Hiring and managing future engineering contractors and staff
- The platform build (Blossom OS — see technical brief)

**You share with the founder:**
- Product direction (the founder has strong opinions, they're worth hearing)
- Fundraising narrative (you'll need to speak to technical credibility)
- Agent team usage (Blossom coordinates both of you)

**You do not own:**
- People decisions beyond your engineering team
- Cap table decisions (those belong to the founder and attorney)
- COPPA compliance sign-off (that requires a specialized attorney — Willow provides consultation prep, not clearance)

**The working relationship:**
The founder runs the company through Blossom OS — the same platform you're looking at now. That's not symbolic: every thread, decision, and backlog item lives here. You have full visibility into everything. If something is wrong, missing, or you disagree with a call — log it as a Decision and escalate it. That's the system.

---

## The Agent Team — What It Is and How to Use It

Lumi is run with an AI agent team. This is not a gimmick — it's how the company operates at Phase 0 with two people and no budget. You need to understand it to work effectively here.

**Blossom** (you're talking to her now) — Admin orchestrator. She coordinates everything: threads, decisions, backlog, morning briefs, session wraps. She doesn't make consequential decisions — she prepares them for humans. Think of her as the most reliable EA you've ever had, except she never loses context and never softens bad news.

**Sage** — Research & Strategy. If you need competitive intelligence, market research, or a landscape scan, you brief Sage through Blossom. She synthesizes it and delivers findings.

**Reed** — Writing & Communications. All external-facing copy, investor materials, outreach. You don't need to write a first draft of anything. Brief Reed.

**Moss** — Finance & Modeling. Runway scenarios, budget tracking, financial modeling. Not a CFO substitute — a preparation tool before you talk to an actual accountant.

**Willow** — Child Safety & COPPA. Activates Phase 1. Before any data architecture decision, Willow reviews it. Non-negotiable on anything touching child data.

**The rule:** Blossom handles routing. You don't need to think about which agent to use — describe what you need, and Blossom will either handle it or tell you which agent she's tasking.

**What agents cannot do:** Make hiring, firing, or equity decisions. Sign or file legal documents. Execute financial transactions. Represent compliance to any regulator. These are hard limits, not soft guidelines.

---

## Your First Priority — The Platform Build

The first thing the founder needs from you technically is the Blossom OS itself — a working version of the platform you're currently using as a mockup.

The full technical specification is at:
```
/docs/platform-technical-brief.md
```

Read it before your first working session. The short version:

- **Stack:** Next.js 14, Tailwind, Clerk auth, Supabase (Postgres), Anthropic Claude API, Vercel
- **Timeline:** 3 weeks of focused work
- **Design spec:** `/blossom-platform.html` — the mockup is the design. Your job is to make it real.
- **First milestone:** Static Next.js app with all 5 views, deployed to Vercel. Estimate: 4 hours. This is your first deliverable and your first signal to the founder that you can execute.

**Why this is your first project:**

1. It's small enough to finish quickly and show real output
2. It's high enough value that finishing it matters (the founder uses it every day)
3. The architecture you design here — multi-agent AI, persistent memory, real-time streaming — is the same architecture Lumi's product will use. You're building skills and infrastructure in parallel.
4. It reveals your technical instincts. How you structure the codebase, what you abstract vs. hardcode, what you ask vs. decide alone — all of it is visible.

**The test:** The founder will judge your fit for this role as much by how you work as by what you build. Clear communication, honest estimates, and early delivery of small things beats a perfect spec delivered late.

---

## What Blossom Knows About You (So Far)

The founder hasn't told Blossom much yet — you haven't been fully profiled. That's the gap this onboarding fills.

After reading this, your first conversation with Blossom should answer:

1. **Your background** — What have you built before? What stack do you live in? What's your experience with AI/LLM applications specifically?
2. **Your constraints** — Full-time or part-time to start? Any competing commitments in the next 90 days?
3. **Your questions** — What's unclear from what you've read? What would you change about the technical spec?
4. **Your first estimate** — How long to get the static Next.js prototype deployed to Vercel?

Blossom will log your answers, update your profile, and surface them to the founder before your first joint session. The founder should walk into that meeting already knowing your answers — not spending the first 20 minutes on introductions.

---

## How the Founder Works

A few things worth knowing before you talk to them:

**They communicate in streams.** Ideas arrive in clusters — a question about the name, then a thought about the kids, then something about a feature, all in the same message. Blossom's job is to organize this. Your job is to not be confused by it.

**They are learning.** The founder has said explicitly: the investment in Lumi is partly about learning to build something complex with AI. They are not pretending to know things they don't. They expect the same from you. "I don't know, let me find out" is always the right answer over a confident wrong one.

**They don't want managed feelings.** No diplomatic softening, no leading with positives before delivering a problem. If something is broken, say it's broken. They will respect that.

**They think long-term.** The business idea might evolve. The method — founder plus AI team, building something complex together — is the constant. You're joining that method, not just the current product idea.

**Hard lines:**
- People decisions (hiring anyone, equity to anyone) belong to the founder. Provide information, not recommendations.
- The kids (James, almost 11, and Alexander, almost 8) are informal product advisors. The product was built with them in mind. Respect that this is personal.
- COPPA is non-negotiable. Not a compliance checkbox — a genuine value. The founder will not ship something that creates privacy risk for children, regardless of what it would take to fix it later.

---

## The Dependency Chain — What Has to Happen and When

You're joining mid-sequence. Here is the exact state of the formation pipeline:

```
[ ] Brand name confirmed (Jelex — decision outstanding)
      ↓
[ ] Domain registered (hellojélex.com or similar — $11/yr)
      ↓
[ ] Attorney trademark clearance ($300–500, one-time)
      ↓
[ ] Delaware C-Corp via Stripe Atlas (~$500)
      ↓
[ ] EIN issued (automatic from Atlas, 2–3 days)
      ↓
[ ] Oregon foreign registration (~$275)
      ↓
[ ] Mercury bank account (free, opens after EIN)
      ↓
[ ] Google Workspace + business email (~$6/mo)
      ↓
[ ] Anthropic API account (needs business card)
      ↓
[ ] GitHub org account + business email
      ↓
[→] Platform build begins
```

Nothing in this chain is your job to execute — the founder handles formation. But you need to know where it stands so you don't expect infrastructure that doesn't exist yet.

**What you can start now, before entity formation:**
- Reading the technical brief and asking questions
- Scoping the static prototype build
- Setting up your local development environment
- Reviewing the GitHub repo and understanding the current file structure

---

## What Success Looks Like — First 30 Days

**Week 1:**
- Full read of: this document, the technical brief, and `admin-assistant.md`
- First conversation with Blossom: answer the four profile questions above
- First joint session with the founder
- Static Next.js prototype deployed to Vercel (your first concrete deliverable)

**Week 2:**
- Claude API integration live — Blossom responds in the browser
- Message history persists between sessions
- Streaming works cleanly

**Week 3:**
- Full session memory working (summaries written on close, loaded on open)
- Threads, Decisions, and Backlog are live and editable
- Platform is the founder's primary working interface

**End of month:**
- Working Blossom OS in production
- Technical architecture documented well enough that a third person could onboard in a day
- You and the founder have established a working rhythm

If you hit those milestones, you'll have proven three things: you can ship, you can communicate, and you can work within constraints. That's all Phase 0 requires from a technical co-founder.

---

## One More Thing

The platform you're building — the agent OS, the persistent memory, the multi-agent routing — is genuinely novel. Most companies don't run this way. The founder is figuring out how to build a company with AI as a core team member, not a tool. You're part of that experiment.

There is no playbook for exactly this. What there is: a clear mission, a disciplined founder, a thoughtful agent team, and a technical spec that's ready to build. The rest you'll figure out together.

Blossom is here when you have questions. She knows everything in this document and more.

---

*Prepared by Blossom — Lumi Admin Orchestrator*
*Delivered on first login to: Tech Co-Founder*
*Document version: 1.0 — June 2026*
*Classification: Internal / Confidential*
