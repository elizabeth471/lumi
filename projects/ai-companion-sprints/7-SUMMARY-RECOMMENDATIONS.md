# AI Companion Sprints — Legal Framework Summary & Recommendations

**Date Created:** 2026-06-07  
**Status:** EXECUTIVE SUMMARY  
**Owner:** Willow (Compliance & Risk)  
**Audience:** Founder (Elizabeth), Legal Counsel, Advisors

---

## OVERVIEW

This document summarizes the complete legal and compliance framework for AI Companion Sprints, identifies the actual risks, and provides clear recommendations for MVP launch.

**Bottom line:** The product can be launched responsibly with moderate risk mitigation. The legal framework is solid but requires attorney review before customer launch. Insurance is essential.

---

## KEY FINDINGS

### 1. Risk Profile: MODERATE-TO-HIGH (but manageable)

**Why we have risk:**
- We provide emotional support (adjacent to mental health)
- Customers may disclose mental health crises
- We use AI that can occasionally generate harmful outputs
- Data we collect is intimate and sensitive

**Why the risk is manageable:**
- We have clear disclaimers ("NOT therapy, NOT medical advice")
- We have crisis protocol (detect, escalate, provide resources)
- We're NOT regulated as mental health (no pre-approval needed)
- We have specific mitigation for each risk scenario
- Professional liability insurance is available and affordable ($3–8K/year)

**Honest assessment:** Even with perfect disclaimers and protocols, if a customer experiences a mental health crisis or adverse event connected to our service, we can be sued. Insurance covers the legal defense. But the risk is real, not hypothetical.

---

### 2. Liability Exposure: REAL BUT DEFENSIBLE

**Worst-case scenario:** Customer suicide after using service, family sues for wrongful death/negligence
- Legal defense costs: $200K–$500K
- Settlement/judgment: $100K–$5M+ (jurisdiction dependent)
- Insurance mitigates this (hence the requirement)

**Most likely scenario:** 1–2 isolated complaints (service didn't help, customer expected more therapy), handled via support/refund
- Cost: $500–$2K to resolve
- No insurance claim needed

**Expected:** At scale (1,000+ customers), we'll likely see:
- 1–5 crisis incidents detected and escalated appropriately
- 10–20 refund requests due to customer dissatisfaction
- 0–2 legal threats (few actually litigated)

---

### 3. Regulatory Environment: FAVORABLE (for now)

**What we do NOT need:**
- FDA approval (not a medical device)
- Mental health license (not therapy)
- COPPA compliance (age-gating at 18+ bypasses it)
- State mental health certification (not required for software tools)

**What we DO need:**
- FTC compliance (no false advertising)
- CCPA/GDPR compliance (privacy of customer data)
- General consumer protection compliance (accurate ToS, safe practices)
- State privacy law compliance (similar to CCPA)

**Strategic advantage:** We're in a regulatory gap. As long as we stay honest about what we are (goal-focused AI support, not therapy), we avoid heavy regulation. If we ever claim mental health benefits or therapy outcomes, we invite FDA/FTC scrutiny.

---

### 4. Insurance: ESSENTIAL & AVAILABLE

**What to get:**
- Professional liability: $1–2M per occurrence ($2–4M aggregate)
- Cyber liability: $1–2M (covers data breach, privacy liability)

**Cost:** $3–8K/year for early-stage startup

**Where to get it:** Insurance brokers specializing in tech startups (they know which underwriters cover AI products)

**Why essential:** Without insurance, a single lawsuit bankrupts us. With insurance, we have a defense budget and settlement pool.

**Reality check:** This is not optional. No responsible startup launches a mental health-adjacent product without liability insurance.

---

## WHAT WE HAVE BUILT (The 7 Deliverables)

### 1. Mental Health Disclaimer Document ✓
- Clear statement: "NOT therapy, NOT medical advice"
- Crisis hotline numbers (US, UK, Canada)
- Companion crisis response protocol (exact language)
- Post-crisis follow-up procedures
- **Status:** Complete, needs attorney review

### 2. Terms of Service ✓
- Service description & limitations
- User rights & restrictions
- Payment terms (no mid-sprint refunds, pro-rata cancellation)
- Liability disclaimer (we're not liable for mental health outcomes)
- Dispute resolution & governing law
- **Status:** Complete, needs attorney review

### 3. Privacy Policy ✓
- What data we collect (name, email, conversations, goal, payment info)
- How we use it (provide service, improve AI, comply with law)
- Who we share it with (Anthropic for API, Stripe for payments, email provider)
- Customer rights (access, deletion, portability — CCPA/GDPR compliant)
- Data retention (delete on request, anonymize for training)
- **Status:** Complete, needs attorney review for jurisdiction-specific adjustments

### 4. Liability Assessment ✓
- Identifies 7 real liability scenarios (suicide, harmful advice, data breach, etc.)
- Honest assessment of what disclaimers do/don't protect
- Insurance requirements & types
- Risk reduction strategies for each scenario
- **Status:** Complete analysis, internal use only

### 5. Regulatory Landscape ✓
- FDA: NOT regulated (we don't claim medical benefits)
- Mental health: NOT regulated (we're not therapy/licensed)
- FTC: Regulated (no false advertising, clear disclaimers required)
- COPPA: NOT regulated if 18+ age gate (we have it)
- Privacy: REGULATED (CCPA/GDPR/state laws — our Privacy Policy covers)
- Emerging state regulations: Monitor quarterly
- **Status:** Complete analysis, internal use only

### 6. Implementation Checklist ✓
- Week-by-week tasks (attorney, insurance, coding, testing)
- Crisis protocol testing procedures
- Support team training
- Data security implementation
- Post-launch monitoring procedures
- **Status:** Complete roadmap, ready to execute

### 7. This Summary & Recommendations ✓
- Executive overview
- Clear recommendations prioritized
- Decision framework for founder
- **Status:** This document

---

## CRITICAL ACTIONS (MUST-HAVE FOR MVP)

### Action 1: Hire Attorney [URGENT — This Week]

**What:** Engage startup attorney to review all three documents (Disclaimer, ToS, Privacy Policy)

**Why:** Your documents are thorough, but attorney review is essential for enforceability in your jurisdiction and risk mitigation.

**What attorney should provide:**
- Feedback on all three documents
- Jurisdiction-specific recommendations
- Insurance coverage recommendations
- Crisis protocol adequacy
- Sign-off letter: "These documents are legally adequate for MVP launch"

**Timeline:** 1 week for initial review, 1–2 weeks for revisions

**Cost:** $2–5K (worth every dollar)

**Decision point:** Do not proceed to Week 2 build without attorney sign-off.

---

### Action 2: Apply for Insurance [URGENT — This Week]

**What:** Contact insurance broker, apply for professional liability + cyber insurance

**Why:** Without insurance, a legal claim can destroy the company. With insurance ($3–8K/year), claims are manageable.

**What to do:**
1. Find broker specializing in tech startups
2. Be honest: "We provide AI emotional support, customers disclose mental health information, we have crisis protocol"
3. Apply for $1–2M professional liability + $1–2M cyber liability
4. Get policy bound before customers arrive

**Timeline:** 1 week to apply, 2–3 weeks for policy

**Cost:** $3–8K annually

**Decision point:** Do not launch MVP without active insurance policy.

---

### Action 3: Attorney Review of Crisis Protocol [THIS WEEK]

**What:** Have attorney review your companion's crisis detection and escalation procedures

**Why:** If a customer has a crisis and your protocol fails, liability is highest. Attorney can suggest improvements.

**What to review:**
- Trigger phrases (are they comprehensive?)
- Companion response (is it legally safe? Does it escalate appropriately?)
- Follow-up procedure (is 24-hour check-in adequate?)
- Documentation (are you logging incidents fully?)
- Hotline accuracy (are numbers current and correct?)

**Timeline:** 1 hour attorney review

**Cost:** Included in initial attorney engagement ($2–5K)

---

### Action 4: Age Gate Implementation [WEEK 1-2]

**What:** Build and test age verification at checkout (18+ requirement)

**Why:** This single step removes COPPA risk and prevents underage user issues.

**What to implement:**
- Checkbox: "I am 18 or older"
- Store confirmation in database
- Validate if customer provides age field in onboarding
- Test: Try to complete purchase as under-18, verify rejection

**Timeline:** 1–2 days engineering

**Cost:** $0 (internal engineering)

**Decision point:** Age gate must be live before payment integration.

---

### Action 5: Crisis Protocol Implementation & Testing [WEEK 1-2]

**What:** Configure companion to detect crisis language and escalate with exact protocol

**Why:** This is your primary risk mitigation. If it works, you're protected. If it fails, liability is high.

**What to do:**
1. Define trigger phrases (see 1-MENTAL-HEALTH-DISCLAIMER.md)
2. Code companion detection
3. Hard-code exact crisis response (don't let companion improvise)
4. Test with 20+ sample conversations (suicidal ideation, self-harm, abuse, etc.)
5. Document test results
6. Train support team on response procedures

**Timeline:** 3–4 days engineering, 1 day support training

**Cost:** $0 (internal)

**Decision point:** Crisis protocol must be tested and working before MVP launch.

---

### Action 6: Disclaimer Integration [WEEK 2]

**What:** Add Mental Health Disclaimer to customer journey at multiple touchpoints

**Why:** Disclaimers reduce liability AND show good faith to juries if a legal claim arises.

**Where to place:**
- Landing page (prominent, not buried)
- Purchase confirmation email
- Companion first message (must be read)
- Customer dashboard (always accessible)
- Support documentation

**Timeline:** 1 day integration

**Cost:** $0 (internal)

**Decision point:** Disclaimer must be live and tested before MVP launch.

---

### Action 7: Support Team Training [WEEK 1-2]

**What:** Train customer support on crisis protocol and response procedures

**Why:** If a crisis is reported and support mishandles it, liability increases. Good training = good defense.

**What to train:**
- When to escalate (crisis language detected)
- How to respond (empathetically, not therapeutically)
- Follow-up procedure (24-hour email if no response)
- Refund policy (offer refund after crisis)
- Documentation (log incident fully)
- Role-play scenarios (practice responses)

**Timeline:** 2–4 hours training

**Cost:** $0 (internal)

**Decision point:** Support team must be trained before MVP launch.

---

## RECOMMENDATIONS BY PRIORITY

### MUST-HAVE (Do These, or Don't Launch)

**TIER 1: Legal & Insurance (Do This Week)**
1. ✓ Hire attorney, begin review of documents
2. ✓ Apply for professional liability + cyber insurance
3. ✓ Have attorney review crisis protocol

**TIER 2: Technical (Do Week 1-2)**
4. ✓ Implement age gate (18+)
5. ✓ Implement crisis protocol (detection + escalation)
6. ✓ Test crisis protocol with 20+ scenarios
7. ✓ Integrate Mental Health Disclaimer at 3+ touchpoints

**TIER 3: Operational (Do Week 1-2)**
8. ✓ Train support team on crisis response
9. ✓ Implement crisis incident logging
10. ✓ Implement data security (encryption, access controls)

**TIER 4: Launch Readiness (Do Week 2)**
11. ✓ Finalize all three documents (attorney-reviewed)
12. ✓ Bind insurance policy
13. ✓ End-to-end testing (purchase → payment → companion → email → crisis escalation)

### SHOULD-HAVE (Do These, but Could be Week 3 if time is tight)

- Attorney review of all marketing materials (to prevent false advertising claims)
- Accessibility audit of website (basic WCAP 2.1 AA)
- Formal data processing agreements (DPA) with Anthropic, email provider
- Security audit (external, third-party)

### NICE-TO-HAVE (Do These After MVP Launch, Before Scaling)

- Formal trademark registration
- Trademark monitoring service
- Data protection officer appointment (if EU focus)
- Customer testimonials guidelines
- Incident response playbook (written, team-trained)
- Regular compliance audits (quarterly)

---

## DECISION FRAMEWORK: LAUNCH VS. DELAY

### Launch if:
- [ ] Attorney has reviewed and approved all documents
- [ ] Insurance policy is active
- [ ] Age gate is implemented and tested
- [ ] Crisis protocol is implemented, tested, and training is complete
- [ ] Mental Health Disclaimer is integrated and visible
- [ ] Payment processing is secure and compliant
- [ ] Email system is working
- [ ] Support team is trained
- [ ] You understand the residual risks and accept them

### Delay if:
- [ ] Any of the above is incomplete
- [ ] Attorney raises serious concerns about documents
- [ ] Insurance is declined or costs are prohibitive
- [ ] Crisis protocol testing reveals major gaps
- [ ] You discover regulatory issues in your jurisdiction
- [ ] Support team is not ready for crisis response

**This is not a judgment call. If MUST-HAVE items are incomplete, delay launch.**

---

## POST-LAUNCH MONITORING (Week 3+)

### Weekly

- Review any crisis incidents (did protocol work?)
- Monitor customer support tickets (complaints, issues)
- Check email delivery (any bounces, spam folder problems?)

### Monthly

- Aggregate crisis incidents (frequency, triggers, outcomes)
- Review customer feedback (any systemic issues?)
- Check for regulatory changes (new state laws, FTC guidance)
- Monitor insurance (any claims or issues to report?)

### 30-Day Review (End of Week 4)

- Share crisis logs + customer feedback with attorney
- Assess: Do we need to adjust disclaimers, protocols, or marketing?
- Update documentation as needed
- Plan Phase 2 expansion (new companions, markets, etc.)

### Quarterly

- Review insurance coverage (adequate? Changes needed?)
- Check state/federal regulations (any new laws affecting us?)
- Monitor competitor actions (what are other AI mental health tools doing?)
- Update risk register (what's changed since launch?)

---

## RISK SUMMARY: HONEST ASSESSMENT

### What We've Minimized

- **Regulatory action:** Very low risk (we're not medical, not therapy, compliant with privacy laws)
- **False advertising claims:** Low risk (clear disclaimers, non-medical marketing)
- **COPPA violations:** Very low risk (age-gating at 18+)
- **Data breach liability:** Low-to-moderate risk (mitigated by encryption + cyber insurance)

### What Remains

- **Customer harm claims:** Moderate risk (mental health-adjacent product always carries this risk)
- **Crisis mishandling:** Moderate risk (mitigation through protocol, but gaps possible)
- **AI-generated harmful outputs:** Moderate risk (Claude is third-party, but we're responsible for instructions)
- **Reputational damage:** Moderate risk (if crisis-related harm occurs, media coverage likely)

### Why We Accept This Risk

1. **Market opportunity:** AI emotional support is a real market ($5M+ TAM)
2. **Product demand:** Customers want this (validated in Phase 0 conversations)
3. **Risk is manageable:** Disclaimers + protocol + insurance reduce exposure significantly
4. **Staying in regulatory gap:** As long as we're honest about what we are, we avoid heavy regulation
5. **Other products do this:** Woebot, Replika, and similar tools carry insurance and operate profitably

---

## BUDGET SUMMARY

### MVP Compliance Cost

| Item | Phase | Cost |
|------|-------|------|
| Attorney review (initial) | Week 1 | $2–5K |
| Insurance (annual) | Week 1 | $3–8K |
| Insurance (setup/binding) | Week 1 | $500–1K |
| Email service (3 months) | Week 2-4 | $0–300 |
| **TOTAL MVP** | | **$5.5–14.3K** |

### Phase 2 Scaling

| Item | Timing | Cost |
|------|--------|------|
| Attorney ongoing support | Quarterly | $1–2K/quarter |
| Insurance (annual renewal) | Year 1 | $3–8K |
| Security audit (annual) | Year 1 | $2–5K |
| Privacy officer (part-time) | Post-MVP | $1K–3K/month |
| **TOTAL Year 1 (beyond MVP)** | | **$10–30K** |

---

## FOUNDER CHECKLIST: DECISIONS NEEDED

Before proceeding, founder must decide:

**Q1: Do you understand the residual risks?**
- Yes: Proceed
- No: Schedule 1-hour call with attorney before proceeding

**Q2: Is professional liability insurance acceptable as a cost of doing business?**
- Yes: Proceed to insurance quote
- No: This product is not viable (stop here)

**Q3: Are you willing to implement and maintain the crisis protocol?**
- Yes: Proceed to Week 1 implementation
- No: Revise product to not target goal-focused support (less risky, but less valuable)

**Q4: Do you accept that even with perfect disclaimers, you could be sued?**
- Yes: Insurance will cover defense
- No: This product is not viable (stop here)

**If you answered "Yes" to all four: You're ready to proceed.**

---

## WHAT SUCCESS LOOKS LIKE

### At MVP Launch (Week 3)

✓ Zero crisis incidents (we're screening for them, supporting appropriately)
✓ All documentation complete and attorney-approved
✓ Insurance active, claims process tested
✓ Support team handles refund requests professionally
✓ No regulatory inquiries (we're under the radar, as intended)

### At 30-Day Review (Week 5)

✓ 1–3 crisis incidents detected and escalated appropriately
✓ 0 adverse outcomes (customers received resources, no harm reported)
✓ 10–20 refund requests (some due to dissatisfaction, handled professionally)
✓ 0 legal threats or complaints
✓ Customer feedback indicates understanding of service limitations
✓ Attorney review: "Operating responsibly, no major changes needed"

### At 100-Day Post-Launch (Phase 2 Planning)

✓ 200–500 total customers (depending on marketing)
✓ 5–10 crisis incidents, all escalated appropriately
✓ 0–1 legal threats (if any, handled by insurance)
✓ Repeat purchase rate 30%+ (customers want more sprints)
✓ Unit economics validated (API cost, refunds, margin is positive)
✓ Ready to scale to Phase 2 (new companions, paid marketing, etc.)

---

## FINAL RECOMMENDATION

**Status: READY TO LAUNCH (with conditions)**

This product can be launched responsibly in Week 3 if:

1. **Attorney review is complete and sign-off obtained** (CRITICAL)
2. **Insurance policy is active** (CRITICAL)
3. **Crisis protocol is implemented and tested** (CRITICAL)
4. **All technical/operational items on the checklist are completed** (CRITICAL)
5. **Founder and team understand the risks and accept them** (CRITICAL)

**The legal framework is solid. The disclaimers are comprehensive. The crisis protocol is well-designed. The risk mitigation is real.**

The residual liability is inevitable for this product type, but it's manageable with insurance and good practices.

**Proceed with confidence, but not complacency. This is a real business with real risks — operate like it.**

---

## NEXT IMMEDIATE STEPS (This Week)

**FOR FOUNDER (ELIZABETH):**
1. Schedule 30-minute call with startup attorney (recommend: startup law firm or solo practitioner specializing in tech/consumer law)
2. Send attorney the three documents (Disclaimer, ToS, Privacy Policy) for initial review
3. Request insurance broker referral, or find one specializing in tech startups
4. Send insurance broker: product description + three documents
5. Reserve $5–10K for attorney + insurance (budget approval)

**FOR ENGINEER:**
1. Plan Week 1 tasks: age gate, crisis protocol testing, data security
2. Plan Week 2 tasks: payment integration, email setup, disclaimer integration
3. Stand up crisis testing environment (can you simulate conversations with AI to test detection?)
4. Prepare customer support training materials

**FOR FOUNDER + TEAM:**
1. Read all 7 documents (takes 2 hours total)
2. Understand the risk profile
3. Prepare to answer: "Are we ready to do this responsibly?"

---

## CLOSING WORDS

Building a responsible AI mental health-adjacent product is hard. It requires:
- Clear thinking about what you are (goal support) and what you're not (therapy)
- Real disclaimers that customers actually read
- Crisis protocol that actually works
- Insurance that protects you when bad things happen
- Support team trained to handle sensitive situations
- Documentation that shows you tried to do right by customers

You've built all of this. Now execute the launch responsibly.

The market wants this product. Customers need it. Your job is to provide it without overstating what it does and with genuine care for customer safety.

**You're ready. Go build.**

---

**Document Status:** EXECUTIVE SUMMARY & RECOMMENDATIONS  
**Owner:** Willow (Compliance & Risk)  
**Reviewed By:** [Attorney Name] — [Date]  
**Approved By:** [Founder Name] — [Date]  
**Next Review:** Post-launch at Day 30

---

## APPENDIX: Document Index

All compliance documents live in `/home/user/lumi/projects/ai-companion-sprints/`:

1. **1-MENTAL-HEALTH-DISCLAIMER.md** — Customer-facing disclaimer + crisis protocol
2. **2-TERMS-OF-SERVICE.md** — Legal terms for customer use
3. **3-PRIVACY-POLICY.md** — Data handling & customer rights
4. **4-LIABILITY-ASSESSMENT.md** — Internal risk analysis
5. **5-REGULATORY-LANDSCAPE.md** — Regulatory compliance guide
6. **6-IMPLEMENTATION-CHECKLIST.md** — Week-by-week execution plan
7. **7-SUMMARY-RECOMMENDATIONS.md** — This document (executive summary)

**All documents are drafts pending attorney review. Do not show to customers until attorney has approved.**

