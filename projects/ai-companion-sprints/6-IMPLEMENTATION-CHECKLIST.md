# AI Companion Sprints — Legal & Compliance Implementation Checklist

**Date Created:** 2026-06-07  
**Status:** EXECUTION ROADMAP  
**Owner:** Willow (Compliance & Risk)  
**Audience:** Founder, Compliance Lead, Legal Counsel

---

## QUICK SUMMARY: WHAT MUST BE DONE BEFORE LAUNCH

**MVP Launch (Week 3):** 7 MUST-HAVES

1. ✓ Mental Health Disclaimer (COMPLETE — needs attorney review)
2. ✓ Terms of Service (COMPLETE — needs attorney review)
3. ✓ Privacy Policy (COMPLETE — needs attorney review)
4. Crisis Protocol Implementation (companion configured)
5. Age Gate 18+ (checkout verification)
6. Insurance Application (professional liability + cyber)
7. Attorney Review & Sign-off (all documents)

**These 7 items are NOT optional. MVP does not ship without them.**

---

## PHASE 1: IMMEDIATE (This Week — Before Week 2 Build Starts)

### 1.1 Attorney Engagement

**Task:** Hire a startup attorney for legal review

**Who:** Founder

**Deadline:** This week (before Week 2 build)

**Steps:**
1. Contact startup law firms or solo practitioners specializing in tech/consumer law
2. Request 1-hour consultation to discuss scope
3. Share the three documents (Disclaimer, ToS, Privacy Policy) for review
4. Negotiate scope: "Review for enforceability, compliance, and liability adequacy"
5. Budget: $2K–$5K for initial review (worth it)

**Key questions for attorney:**
- What state should we incorporate in? (Delaware is standard, but alternatives exist)
- Are our disclaimers specific enough for our target jurisdiction?
- Do our documents address any state-specific privacy or mental health laws?
- Should we modify crisis protocol based on jurisdiction?
- What liability insurance do you recommend?

**Outcome:** Attorney provides feedback on all three documents, recommendations for revision

**Checkpoint:** Attorney engaged, initial review scheduled for [DATE]

---

### 1.2 Insurance Application

**Task:** Apply for professional liability + cyber insurance

**Who:** Founder (or designated insurance contact)

**Deadline:** This week

**Steps:**
1. Find insurance broker specializing in tech startups
   - Start: AmericanAgricultureInsurance (AAI), Chubb, Hiscox, Stride Health
   - Ask: "Do you cover AI emotional support products?"
2. Prepare application materials:
   - Description of product
   - Terms of Service (draft)
   - Mental Health Disclaimer (draft)
   - Expected annual revenue projection ($5K–$20K realistic for MVP)
3. Apply for:
   - Professional Liability: $1–2M per occurrence, $2–4M aggregate
   - Cyber Liability: $1–2M (covers data breach, privacy liability)
4. Expected timeline: 1–2 weeks for quote, 2–3 weeks for policy
5. Budget: $3K–$8K annually

**Red flags insurance companies might ask:**
- "Do you provide mental health treatment?" (NO)
- "Do you claim medical benefits?" (NO)
- "Do you have crisis protocol?" (YES, detailed)
- "Are you liable for Claude's outputs?" (Claude is third-party AI)

Be transparent. Underwriters understand AI product risk better than you might think.

**Outcome:** Insurance quotes received, policy ready to bind before MVP launch

**Checkpoint:** Insurance application submitted, timeline confirmed

---

### 1.3 Crisis Protocol Testing

**Task:** Test crisis language detection and escalation with your AI companion

**Who:** Engineer + Compliance

**Deadline:** By end of Week 1

**Steps:**
1. Define trigger phrases (ref: 1-MENTAL-HEALTH-DISCLAIMER.md, Section B)
2. Write companion instruction: detect phrases, respond with exact crisis protocol
3. Test with 10–15 sample conversations:
   - "I want to kill myself"
   - "I'm going to hurt myself"
   - "My boyfriend hits me"
   - "I can't take this anymore"
   - Ambiguous phrases: "I'm tired of everything," "Why does this matter?"
4. Document responses: Does companion detect? Does it escalate? Is language accurate?
5. Refine: Adjust trigger phrases or instructions if needed
6. Prepare customer support training (next section)

**Outcome:** Crisis protocol tested, working, documented

**Checkpoint:** Crisis test results logged, any issues resolved

---

### 1.4 Customer Support Training

**Task:** Train team on crisis protocol

**Who:** Support team

**Deadline:** By end of Week 1

**Steps:**
1. Create crisis response runbook (what support does when crisis is reported):
   - Customer escalates a crisis → support pauses sprint
   - Support sends follow-up email with extended resources
   - Support offers full refund if customer wants to cancel
   - Support documents incident (date, trigger, action taken)
   - Do NOT contact emergency services on behalf of customer (customer autonomy + privacy)
2. Role-play scenarios:
   - Customer says "I'm thinking about suicide"
   - Customer says "I don't know how to leave my abuser"
   - Customer says "I've been cutting"
3. Document training completion (in case of legal review)

**Outcome:** Support team trained, runbook documented

**Checkpoint:** Training completed, team signatures on runbook

---

## PHASE 2: WEEK 1-2 BUILD PREP

### 2.1 Finalize Legal Documents

**Task:** Revise documents based on attorney feedback

**Who:** Attorney + Founder

**Deadline:** Monday of Week 2 (before build starts)

**Steps:**
1. Attorney provides revision suggestions
2. Incorporate necessary changes:
   - Strengthen/clarify disclaimers if needed
   - Add jurisdiction-specific language (if required)
   - Adjust liability limits (if insurance recommends)
   - Update crisis protocol language (if attorney suggests)
3. Re-review any major revisions
4. Attorney sign-off: "This is legally adequate for launch"

**Outcome:** Final versions of all three documents, attorney sign-off

**Checkpoint:** Signed attorney review letter ("These documents are adequate...")

---

### 2.2 Age Verification Implementation

**Task:** Build age gate at checkout

**Who:** Engineer

**Deadline:** By mid-Week 2 (before payment integration)

**Steps:**
1. Add field to checkout form:
   - "I confirm I am 18 years or older" (required checkbox)
   - Make it prominent (not in fine print)
   - Do NOT make it opt-out (must be affirmative opt-in)
2. Store confirmation in database (for legal record)
3. If customer provides age field in onboarding (e.g., date of birth):
   - Validate age >= 18
   - Reject if under 18
   - Send message: "This service is for ages 18+. Thank you for your interest!"
4. Test: Try to purchase as under-18 age, verify rejection

**Outcome:** Age gate implemented, tested, documented

**Checkpoint:** Age verification working in staging/test environment

---

### 2.3 Privacy & Data Handling Setup

**Task:** Ensure data is stored and accessed securely

**Who:** Engineer + DevOps

**Deadline:** By mid-Week 2

**Steps:**
1. **Encryption in transit:** Verify HTTPS/TLS configured
2. **Encryption at rest:** Verify database encryption enabled
3. **Access controls:**
   - Only authorized staff can access customer conversations
   - Logging system for who accessed what (audit trail)
   - Role-based access (customer support sees only support tickets, not raw conversations)
4. **Data retention:** Implement scheduled deletion:
   - When customer requests deletion, conversations deleted from database
   - Backups retain data for 7 days (standard)
   - Old conversations (90+ days) eligible for deletion
5. **Compliance documentation:**
   - Document data flows (where data goes, who touches it, how it's protected)
   - Prepare for attorney/auditor review

**Outcome:** Data security implemented, documented

**Checkpoint:** Data handling procedures documented, security controls verified

---

### 2.4 Crisis Incident Logging System

**Task:** Set up system to log crisis incidents

**Who:** Engineer

**Deadline:** By mid-Week 2

**Steps:**
1. Create separate crisis log (not in main customer data):
   - Date/time detected
   - Customer identifier (email, not name — for privacy)
   - Trigger phrase(s) detected
   - Companion response sent (exact text)
   - Customer response (did they acknowledge resources?)
   - Current status (paused, resumed, refunded)
   - Notes
2. Access controls:
   - Only compliance officer + founder can view
   - Audit trail for who accessed logs
   - No customer support staff have access (privacy)
3. Retention: Keep for legal statute of limitations (typically 5 years)
4. Security: Encrypted, backed up, access logged

**Outcome:** Crisis logging system implemented

**Checkpoint:** Test crisis incident logged correctly, audit trail working

---

## PHASE 3: WEEK 2 BUILD INTEGRATION

### 3.1 Implement Mental Health Disclaimer

**Task:** Add disclaimer to customer journey at multiple touchpoints

**Who:** Engineer + Product

**Deadline:** By end of Week 2 (before MVP launch)

**Steps:**
1. **Landing page:** Add prominent disclaimer box (not hidden, not in footer)
   - Use language from 1-MENTAL-HEALTH-DISCLAIMER.md, Part A
   - Include link to full disclaimer document
2. **Purchase confirmation email:** Include disclaimer text
3. **Companion first message:** Start with disclaimer
   - "I'm [Companion Name]. Before we start, important: This is a 4-week goal-focused support sprint, NOT therapy or mental health treatment. [full disclaimer language]"
4. **Customer dashboard:** Link to disclaimer (so customer can review anytime)
5. **Support documentation:** Include in FAQ, support responses, etc.

**Outcome:** Disclaimer visible at multiple touchpoints

**Checkpoint:** Disclaimer visible on staging environment, tested

---

### 3.2 Stripe Payment Integration

**Task:** Set up Stripe payments securely

**Who:** Engineer

**Deadline:** By mid-Week 2

**Steps:**
1. Create Stripe account
2. Set up payment form:
   - Collect: name, email, billing address, zip code
   - Do NOT store: full credit card (Stripe handles this)
3. Implement agreement acceptance before payment:
   - Checkbox: "I have read and agree to Terms of Service"
   - Checkbox: "I confirm I am 18 or older"
   - Checkbox: "I understand this is NOT therapy or medical treatment"
4. Create success/failure flows:
   - Payment success: account created, companion first message sent
   - Payment failure: retry up to 3x, then inform customer
5. Store for refund capability:
   - Store last 4 digits of card for reference
   - Do NOT store full card number
   - Stripe handles refund processing
6. DPA: Ensure Stripe DPA is signed (or reference Stripe's terms)

**Outcome:** Stripe integration working, PCI-compliant

**Checkpoint:** Test payment flow end-to-end, test refund flow

---

### 3.3 Email Delivery Setup

**Task:** Configure email system for companion messages

**Who:** Engineer

**Deadline:** By mid-Week 2

**Steps:**
1. Choose email provider:
   - Options: SendGrid, Mailgun, AWS SES
   - Requirement: Support batch sending, templates, bounce handling
2. Set up email templates:
   - First message (onboarding + disclaimer)
   - Daily check-in message
   - Sprint completion email
   - Crisis response email (with hotlines)
   - Support emails (refund confirmation, etc.)
3. Implement bounce handling:
   - If email bounces, mark account as "email issue"
   - Notify customer via backup method if possible
4. Set response expectations:
   - State in first email: "Responses typically within 6 hours"
   - Implement queue/batch system for responses
5. Test: Send test emails from multiple providers (Gmail, Outlook, Yahoo), verify delivery

**Outcome:** Email system configured, tested

**Checkpoint:** Test emails delivered successfully, no spam folder

---

## PHASE 4: WEEK 3+ POST-LAUNCH

### 4.1 Monitor & Document Crisis Incidents

**Task:** Track any crisis incidents post-launch

**Who:** Compliance Officer

**Deadline:** Ongoing (daily/weekly review)

**Steps:**
1. Daily review of crisis logs
2. If crisis incident occurred:
   - Document fully (trigger, response, outcome)
   - Follow up with customer at 24 hours
   - Offer refund if customer requests
   - Review what triggered the crisis (was it a customer statement or a miss?)
3. Weekly summary:
   - How many crisis incidents?
   - What triggers are most common?
   - Are we escalating correctly?
4. Monthly legal review:
   - Share anonymized crisis data with attorney (optional, good practice)
   - Any patterns that suggest policy changes needed?

**Outcome:** Documented crisis handling, lessons learned

**Checkpoint:** Monthly reports on crisis incidents, patterns

---

### 4.2 Customer Feedback & Support Monitoring

**Task:** Monitor customer complaints, issues, feedback

**Who:** Support + Compliance

**Deadline:** Ongoing

**Steps:**
1. Log all support requests:
   - Refund requests (why? legitimate or customer dissatisfaction?)
   - Complaints (companion said something harmful, etc.)
   - Accessibility requests
   - Privacy/data requests
2. Monthly analysis:
   - Are complaints pointing to systemic issues?
   - Do we need to adjust companion instructions?
   - Are there patterns we should address?
3. Response protocol:
   - Refund requests: Process within 3 business days
   - Complaints: Investigate, respond, document
   - Privacy requests: Process within 30 days (legal requirement)

**Outcome:** Customer feedback logged, issues identified early

**Checkpoint:** Monthly support summary, any systemic issues escalated to founder

---

### 4.3 30-Day Legal Review

**Task:** Comprehensive review post-launch (at 30 days)

**Who:** Founder + Attorney

**Deadline:** 30 days post-launch

**Steps:**
1. Share with attorney:
   - Crisis incidents log (anonymized)
   - Support tickets log (complaints, issues)
   - Customer feedback summary
   - Any regulatory inquiries (if any)
2. Attorney reviews:
   - Are our disclaimers adequate in practice?
   - Have we seen any unexpected liability risks?
   - Are there policy adjustments needed?
   - Any regulatory changes to monitor?
3. Decisions:
   - Continue as-is, or
   - Strengthen disclaimers/crisis protocol, or
   - Adjust companion instructions, or
   - Modify marketing language
4. Update documents as needed

**Outcome:** Post-launch legal assessment, any needed adjustments

**Checkpoint:** Attorney report, recommendations, implementation plan

---

## COMPLIANCE CHECKLIST (Week-by-Week)

### Week 1 (NOW)

- [ ] Hire attorney
- [ ] Apply for insurance
- [ ] Test crisis protocol with AI
- [ ] Train support team on crisis response
- [ ] Finalize documents (based on attorney feedback)
- [ ] Architect implements age gate
- [ ] Architect implements crisis logging
- [ ] Architect implements data security measures

### Week 2

- [ ] Attorney sign-off on all documents
- [ ] Insurance quotes received, policy binding
- [ ] Age verification implemented, tested
- [ ] Mental Health Disclaimer integrated into customer journey
- [ ] Stripe integration complete, PCI-compliant
- [ ] Email system configured, tested
- [ ] Crisis response protocol live
- [ ] Support team trained, runbook documented
- [ ] Legal folder created with all signed documents

### Week 3 (Soft Launch)

- [ ] MVP launches with all compliance elements
- [ ] Monitor first crisis incidents (if any)
- [ ] Track customer feedback
- [ ] Support team monitors for issues
- [ ] Compliance officer reviews daily

### Week 4+

- [ ] 30-day legal review with attorney
- [ ] Adjust policies based on post-launch learnings
- [ ] Ongoing monitoring (monthly)
- [ ] Prepare for Phase 2 expansion

---

## RISK MITIGATION SUMMARY

| Risk | Mitigation | Responsibility | Timeline |
|------|-----------|-----------------|----------|
| Customer misunderstands service is not therapy | Mental Health Disclaimer (prominent, repeated) | Engineering, Product | Week 2 |
| Customer in crisis not detected | Crisis protocol with trigger phrases | Engineering | Week 1-2 |
| Customer in crisis, escalation fails | Accurate hotline numbers, tested email | Engineering, Compliance | Week 1-2 |
| Liability from customer harm | Professional liability insurance | Founder | Week 1 |
| Data breach | Encryption, access controls, cyber insurance | Engineering, Founder | Week 1-2 |
| Legal challenge to disclaimers | Attorney review, enforceability check | Attorney | Week 1-2 |
| Underage user | Age gate, verification, deletion protocol | Engineering | Week 1-2 |
| COPPA violation | Age 18+ requirement, no collection from under-13 | Product, Engineering | Week 1-2 |
| GDPR violation | Privacy Policy, DPA with processors | Attorney, Engineering | Week 1-2 |
| CCPA violation | Privacy Policy, access/deletion rights, no sale | Engineering | Week 1-2 |
| FTC false advertising | Clear disclaimers, non-medical marketing | Product, Reed | Week 1-2 |

---

## SUCCESS CRITERIA

MVP launches successfully if:

1. ✓ Attorney has reviewed and approved all documents
2. ✓ Insurance policy is active before customers arrive
3. ✓ Crisis protocol is implemented and tested (20+ test cases)
4. ✓ Age gate is live and enforced
5. ✓ Mental Health Disclaimer appears prominently at 3+ customer touchpoints
6. ✓ Payment processing is PCI-compliant and secure
7. ✓ Email system is working, crisis messages tested
8. ✓ Support team is trained on crisis response
9. ✓ Crisis incident logging system is ready
10. ✓ Founder and team understand key compliance obligations

**If any of these is incomplete, launch is delayed.**

---

## RESOURCE ALLOCATION

| Role | Phase 1 | Phase 2 | Phase 3 | Phase 4 |
|------|---------|---------|---------|---------|
| **Founder** | Attorney engagement, insurance application | Review attorney feedback, insurance sign-off | Soft launch oversight | 30-day review |
| **Engineer** | Crisis protocol testing, setup planning | Age gate, payment, email, crisis logging, security | Integration, testing, deployment | Monitoring, adjustments |
| **Product** | Disclaimer content | Implementation planning | Integration, messaging | Feedback analysis |
| **Support** | Process documentation, training | Ready to respond | Live monitoring | Incident tracking |
| **Attorney** | Review, feedback | Revisions, sign-off | Available for emergencies | Post-launch assessment |

---

## BUDGET ESTIMATE

| Item | Phase | Cost | Criticality |
|------|-------|------|------------|
| Attorney review (initial) | 1 | $2–5K | MUST-HAVE |
| Insurance (annual) | 1 | $3–8K | MUST-HAVE |
| Insurance (partial first year) | 1 | $0.5–2K | MUST-HAVE |
| Email service provider | 2 | $0–100/mo | Nice-to-have |
| Stripe integration | 2 | $0 (pay per transaction) | MUST-HAVE |
| Security audit (optional) | 4 | $2–5K | Nice-to-have |
| **TOTAL (MVP essentials)** | | **$5.5–15K** | |

---

## KEY DATES & MILESTONES

- **This Week:** Attorney hired, insurance applied
- **Friday Week 1:** Crisis protocol tested, support trained
- **Monday Week 2:** Attorney feedback, documents finalized
- **Wednesday Week 2:** Insurance quotes in, policy binding
- **Friday Week 2:** All integrations tested, ready for launch
- **Monday Week 3:** MVP soft launch with 20–50 customers
- **Daily (Week 3+):** Crisis monitoring, customer feedback
- **Day 30:** Legal post-launch review
- **Week 5:** Phase 2 planning based on MVP learnings

---

**Document Status:** EXECUTION ROADMAP  
**Next Step:** Founder begins Week 1 actions (attorney, insurance)  
**Review:** Weekly during implementation, then post-launch at Day 30

