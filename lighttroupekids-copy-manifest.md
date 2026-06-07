# Lighttroupekids Copy Manifest
**Complete copy for 20 screens: Parent (10) + Child (10)**

## Quick Reference

### Parent Screens (PARENT-01 through PARENT-10)
| ID | Screen Name | Purpose |
|---|---|---|
| PARENT-01 | Welcome Onboarding | First landing — sets expectations, builds trust |
| PARENT-02 | Child Setup | Collect child name, age, language preference |
| PARENT-03 | Screen Time Limits | Set daily limits, active hours, downtime |
| PARENT-04 | Activity Approval | Choose control mode: Open / Approval / Curated |
| PARENT-05 | Dashboard Home | Overview of child's activity, quick access |
| PARENT-06 | Progress View | Detailed look at skills, habits, topics explored |
| PARENT-07 | Activities Library | Browse and manage available activities |
| PARENT-08 | Settings & Controls | Account, limits, approval mode, privacy, support |
| PARENT-09 | Approval Inbox | Review and approve child's activity requests |
| PARENT-10 | Onboarding Complete | Finish setup, next steps, quick tips |

### Child Screens (CHILD-01 through CHILD-10)
| ID | Screen Name | Purpose |
|---|---|---|
| CHILD-01 | Welcome — First Time | Child's first landing — warm, clear, not patronizing |
| CHILD-02 | Home Screen | Main hub: time left, suggested activities, favorites |
| CHILD-03 | Activities Browse | Browse all available activities by category |
| CHILD-04 | Activity Detail | Before starting — shows what they'll do and why |
| CHILD-05 | Activity in Progress — Video | Playing a video-based activity |
| CHILD-06 | Activity in Progress — Game | Playing an interactive game |
| CHILD-07 | My Learning | Summary of what they've done, skills explored |
| CHILD-08 | Help & Support | FAQs and contact support |
| CHILD-09 | Approval Request Sent | Confirmation after requesting parent approval |
| CHILD-10 | Time Limit Notice | Warning when daily limit is approaching |

---

## Brand Voice Guide for Integration

**Core principles:**
- Warm, trustworthy, slightly playful (not gimmicky)
- Respects parent intelligence — explains reasoning, not just rules
- Respects child maturity — doesn't talk down, doesn't hide
- Nature-inspired language where it makes sense
- No dark patterns, no fake urgency, no manipulative CTAs
- Transparent about what the product does

**Tone by audience:**
- **Parent copy**: Conversational, honest, reassuring about control
- **Child copy**: Clear instructions, age-appropriate, respectful
- **Shared copy** (buttons, confirmations): Direct, action-oriented, brief

**What to avoid:**
- Hyperbole: "revolutionary," "life-changing," "disrupting"
- Vague promises: "we'll make screen time better"
- Corporate language: "leverage," "synergies," "solutions"
- Emotional manipulation or false urgency
- Anything that overstates what's possible or what exists

---

## Copy Organization in Source File

All copy is in: `/home/user/lumi/lighttroupekids-copy.txt`

**Structure:**
```
PARENT-FACING SCREENS (10)
├── PARENT-01: Welcome Onboarding
├── PARENT-02: Child Setup
├── ... [8 more parent screens]
└── PARENT-10: Onboarding Complete

CHILD-FACING SCREENS (10)
├── CHILD-01: Welcome — First Time
├── CHILD-02: Home Screen
├── ... [8 more child screens]
└── CHILD-10: Time Limit Notice

SHARED ELEMENTS & MICRO-COPY
├── Button Labels
├── Error Messages & Empty States
├── Confirmation Messages
├── Navigation Labels
├── Help / Support Copy (Detailed)
├── Form Helper Text & Descriptions
├── Onboarding Copy Flow
└── Quality Assurance Checklist

NOTES FOR GROVE (HTML/CSS Integration)
└── Formatting, accessibility, mobile-first guidelines
```

---

## How to Use This Copy

### For Grove (Visual Integration)
1. **Exact matching**: Use copy exactly as written — tested against brand voice
2. **Formatting**: Copy is organized by section (HEADER, SUBHEADER, BODY, BUTTONS)
3. **Button labels**: Use precisely as specified — all action-oriented and consistent
4. **Helper text**: Place in smaller font near relevant form fields
5. **Navigation**: Use exact labels from "NAVIGATION LABELS" section
6. **Mobile-first**: All screens designed for 360–480px width first

### For the Founder
This copy is:
- **Ready to integrate**: No additional editing needed before Grove builds it in
- **On-brand**: Every sentence passes the quality gate test
- **Privacy-first**: Transparent about data collection (what is and isn't tracked)
- **Parent-first**: Respects parent control and intelligence
- **Child-safe**: No dark patterns, no manipulative language

---

## Quality Gate: Every Sentence

**Test applied to all copy:**
"Would this feel trustworthy to a parent skeptical about screen time?"

All copy has passed. Examples of what was cut:
- Any "gamification" language (points, achievements, leaderboards)
- Pressure tactics in CTAs ("Start now," "Don't wait")
- Vague benefit claims ("boost learning," "enhance skills")
- Anything that implied the app creates FOMO or dependency

---

## Key Copy Decisions (What and Why)

### Screen Time Limits (PARENT-03)
- **Soft boundaries, not jail**: Phrase emphasizes "pauses, not locks" — reduces parental guilt
- **Override capability**: "You can override anytime if something comes up" — builds trust in parent control
- **Downtime is optional**: Allows flexibility while respecting structure preference

### Approval Workflow (PARENT-04)
- **Three clear modes**: Open / Approval / Curated — no judgment on which parents pick
- **Honest copy**: "Best if..." explanations help parents self-select the right mode
- **Reframes control**: "Stay in control" emphasizes parent agency, not restriction

### Child Welcome (CHILD-01)
- **No patronizing language**: "Explores at your pace" not "Fun for all ages!"
- **Honest about parent visibility**: "Parent can see what you do here" — no secrecy, no shame
- **Clear value**: Lists what they can actually do — not aspirational benefits

### Activity Cards (CHILD-04, both parent and child views)
- **What you'll do** + **Why it matters** (for parent): Helps parent understand value
- **What you'll do** (for child): Clear instructions, no overselling
- **No coercive language**: "You might like this because..." not "You NEED to learn..."

---

## Notes on Specific Sections

### Forms (PARENT-02, PARENT-03, PARENT-04, PARENT-08)
- Helper text explains not just WHAT to fill in, but WHY it matters
- Age field notes that it's "for fit, not judgment"
- Language field offers bilingual option (reflects Lumi's multilingual commitment)

### Dashboard (PARENT-05, PARENT-06)
- Balances transparency with non-intrusiveness
- Shows "what the child did" not "how much the child was watched"
- Framing: "snapshots" not "tracking"

### Progress (PARENT-06)
- Privacy statement at bottom: "We never track [X]" — builds specific trust
- "Rough guides" not "grades" — positions skills as exploration, not ranking

### Error States & Confirmations (Shared)
- Error messages specific, not vague
- Confirmations matter-of-fact, not celebratory
- Empty states always tell you what to do next

### Help & Support (CHILD-08, Shared Support)
- Addresses real concerns: "Is my data private?" "What if I don't finish?"
- Child-specific help is conversational, not authoritative
- "Talk to your parent" appears when appropriate, not as cop-out

---

## Deliverable Format

**All copy is in plain text**: `/home/user/lumi/lighttroupekids-copy.txt`

Each screen is labeled and organized:
```
PARENT-01: Welcome Onboarding
───────────────────────────────────────────────────────────────────────────────

HEADER
[Copy here]

MAIN TEXT
[Copy here]

BUTTON
[Copy here]
```

Grove can extract by screen ID and integrate directly into HTML/CSS.

---

## For Ian (Tech Co-Founder Candidate)

This copy represents:
- **Lumi's actual voice**: Not placeholder. Not rough draft. Final quality.
- **Product clarity**: Every screen explains what the product does and why
- **Trust as feature**: Copy itself is a trust mechanism — transparent, not pushy
- **Multilingual foundation**: References to Spanish, Portuguese, Tagalog, French
- **Neurodivergent-aware**: Recognizes need for clear, predictable interfaces
- **Parent-centered**: Every parent screen respects parent control and intelligence
- **Child-safe**: Zero dark patterns, zero manipulation, zero addiction mechanics

The mockup + this copy = complete product narrative for Ian to evaluate technical feasibility and product fit.

---

## Deadline: TODAY (June 7, 2026)

**Completed**: All 20 screens, all shared elements, complete copy manifest
**Status**: Ready for Grove to integrate into HTML/CSS mockups
**Next step**: Grove builds the interactive mockup with this copy integrated
