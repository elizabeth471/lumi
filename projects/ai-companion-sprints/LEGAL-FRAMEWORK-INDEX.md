# AI Companion Sprints — Legal & Compliance Framework (Complete Index)

**Date Created:** 2026-06-07  
**Status:** COMPREHENSIVE LEGAL FRAMEWORK — Ready for Attorney Review  
**Owner:** Willow (Compliance & Risk)  
**Last Updated:** 2026-06-07

---

## WHAT YOU'RE READING

This folder contains a complete legal and compliance framework for AI Companion Sprints. It includes:

- **3 customer-facing documents** (ready for attorney review + customization)
- **2 internal risk analyses** (for founder + legal counsel only)
- **1 week-by-week implementation plan** (engineering + operations)
- **1 executive summary** (quick reference for decision-making)

**Total:** 8 documents, ~40,000 words, covering every legal/regulatory angle

**Status:** DRAFT — All documents require attorney review before customer-facing use

---

## DOCUMENT GUIDE

### FOR CUSTOMERS (Requires Attorney Review)

#### 1-MENTAL-HEALTH-DISCLAIMER.md
**Purpose:** Tell customers clearly what you are and aren't

**Covers:**
- Clear disclaimer: "NOT therapy, NOT medical advice, NOT crisis support"
- Crisis hotline numbers (US: 988, UK: 116 123, Canada: 1-833-456-4566, etc.)
- Crisis detection protocol (what phrases trigger escalation)
- Exact companion response to crisis language
- Follow-up procedures (24-hour check-in if customer doesn't respond)
- What to do if customer ignores resources

**How to use:**
- Place on landing page (prominent, not buried)
- Include in purchase confirmation email
- Companion's first message must start with this
- Link to full document from dashboard

**Key section:**
- Part B: Crisis Response Protocol — exact language companion uses
- Part C: Post-crisis procedures — how you follow up
- Part D: What you DON'T do — sets boundaries clearly

**Customization needed:**
- Verify hotline numbers are current for your markets
- Add any state-specific crisis resources (Florida, California, etc., if you have many customers there)
- Adjust language tone if needed (current is direct, not overly warm)

---

#### 2-TERMS-OF-SERVICE.md
**Purpose:** Legal agreement covering service delivery, payments, liability, refunds

**Covers:**
- Age requirement (18+)
- Service description (4-week companion sprint, NOT therapy)
- What we provide vs. what we don't
- User rights and restrictions
- Payment terms (no recurring, must opt-in for new sprint)
- Refunds (pro-rata cancellation, full refund after crisis)
- Liability disclaimer (you're not liable for outcomes)
- Intellectual property (who owns what)
- Dispute resolution (arbitration for US, local law for international)

**How to use:**
- Link prominently on website
- Customer must check "I agree to ToS" before payment
- Include in confirmation email

**Key section:**
- Section 6: Disclaimer of Warranties & Liability — this is your legal defense if something goes wrong
- Section 8: Cancellation & Refunds — clear policy on money back

**Customization needed:**
- State of incorporation (currently placeholder — Delaware is standard)
- Jurisdiction for disputes (currently placeholder — Delaware is standard)
- Any company-specific terms (payment methods, support channels, etc.)

---

#### 3-PRIVACY-POLICY.md
**Purpose:** Explain how you collect, use, store, and protect customer data

**Covers:**
- What data is collected (name, email, conversations, payment info, goal)
- How data is used (provide service, improve AI, comply with law)
- Who data is shared with (Anthropic, Stripe, email provider)
- Data storage and security (encryption, backups, access controls)
- Data retention (how long you keep it, how customers can delete)
- Customer rights (CCPA: access, deletion, opt-out; GDPR: same + more)
- Sensitive topics: COPPA (you don't serve under-13), children's data
- International rules (GDPR for EU, CCPA for California, state laws)
- Changes to policy (30-day notice for changes)

**How to use:**
- Link on website footer
- Reference in ToS
- Make findable (customers should be able to review anytime)

**Key section:**
- Section 7: Your Rights & Control — what customers can do with their data
- Section 9: International Users (GDPR/CCPA) — compliance language for international customers

**Customization needed:**
- Company address (currently placeholder)
- Data storage location (currently: Google Cloud Platform, US — adjust if different)
- Third-party service names (currently generic — add specific vendor names)
- DPA language (reference your data processing agreements with vendors)
- International contact (data protection officer email, if you have one)

---

### FOR INTERNAL USE (Not for customers)

#### 4-LIABILITY-ASSESSMENT.md
**Purpose:** Honest assessment of what could go wrong and how to manage it

**Covers:**
- 7 realistic liability scenarios (suicide/self-harm, harmful advice, data breach, etc.)
- Why disclaimers don't completely eliminate liability
- What liability remains even with perfect mitigation
- Insurance types and coverage needed
- Risk reduction strategies for each scenario
- Likelihood of different bad outcomes

**How to use:**
- Share with attorney (to verify your risk assessment)
- Share with board/advisors (to explain why insurance is necessary)
- Review monthly (update based on actual incidents)
- Use for internal decision-making

**Key section:**
- Part A: Scenarios — realistic situations that could happen
- Part B: Residual Liability — what liability remains even with disclaimers
- Part C: Insurance Requirements — what to buy and why

**Important note:**
- This is not pessimistic, it's realistic
- Risk exists but is manageable
- Insurance makes it manageable

---

#### 5-REGULATORY-LANDSCAPE.md
**Purpose:** Understand which laws apply to your business and which don't

**Covers:**
- FDA: Not regulated (we're not medical)
- Mental health regulation: Not regulated (we're not therapy)
- FTC: Regulated (no false advertising, clear disclaimers required)
- COPPA: Not regulated (age-gating at 18+ removes this entirely)
- Privacy laws: Regulated (CCPA, GDPR, state laws — your Privacy Policy covers this)
- Emerging laws: What to watch (states considering AI mental health regulation)
- Insurance as mitigation: What insurance covers that law doesn't prevent

**How to use:**
- Share with attorney (to verify your regulatory status)
- Use for compliance planning
- Monitor quarterly (state laws change)

**Key section:**
- Part C: Consumer Protection & FTC — what false claims to avoid
- Part E: State Privacy Laws — CCPA/GDPR compliance
- Part F: Mental Health Regulations — what you need to know about emerging laws

**Important note:**
- You're in a regulatory gap (good news for us, bad news if we overstep)
- Staying honest about what you are = avoiding regulatory scrutiny

---

#### 6-IMPLEMENTATION-CHECKLIST.md
**Purpose:** Week-by-week tasks to launch responsibly

**Covers:**
- Phase 1: Attorney engagement, insurance, crisis testing, training (Week 1)
- Phase 2: Finalize documents, implement age gate, set up data security (Weeks 1-2)
- Phase 3: Build integration, test everything, soft launch (Week 2-3)
- Phase 4: Monitor incidents, track feedback, 30-day legal review (Week 3+)

**How to use:**
- Share with team
- Use for project planning
- Track completion weekly
- Don't skip any MUST-HAVE items

**Key section:**
- "Quick Summary: What Must Be Done Before Launch" — 7 non-negotiable items
- "Compliance Checklist (Week-by-Week)" — specific tasks for each phase
- "Risk Mitigation Summary" — what each task accomplishes

**Important note:**
- Some items can be parallelized (attorney + insurance can happen simultaneously)
- But all MUST-HAVE items must be complete before soft launch

---

#### 7-SUMMARY-RECOMMENDATIONS.md
**Purpose:** Executive summary of risks, recommendations, and decisions needed

**Covers:**
- Key findings (risk profile, liability exposure, regulatory status)
- What we've built (summary of 7 documents)
- Critical actions (MUST-DO items)
- Recommendations by priority (MUST-HAVE, SHOULD-HAVE, NICE-TO-HAVE)
- Decision framework (launch vs. delay)
- Post-launch monitoring procedures
- Risk summary (honest assessment of remaining risk)
- Budget summary
- Founder checklist (4 yes/no questions before proceeding)

**How to use:**
- Share with advisors/board
- Use for fundraising discussion
- Reference for decision-making
- Archive for future reference

**Key section:**
- "Critical Actions" — the 7 MUST-DO items this week
- "Decision Framework" — when to launch vs. when to delay
- "Founder Checklist" — 4 questions that determine go/no-go

---

#### LEGAL-QUICK-START.md
**Purpose:** One-page reference for founder (this week's actions)

**Covers:**
- What was built (7 documents)
- 3 biggest risks
- What to do this week (non-negotiable: attorney, insurance, review documents)
- Week-by-week plan
- What's already built
- Critical implementation tasks
- Honest risk assessment
- Decisions to make
- Red flags to watch

**How to use:**
- Read this first (5 minutes)
- Share with co-founders/advisors
- Reference for weekly planning
- Use for risk communication

---

### THIS DOCUMENT

#### LEGAL-FRAMEWORK-INDEX.md
**Purpose:** Navigate all 8 documents, understand what each covers, how to use them

**Covers:**
- Quick summary of each document
- What it covers
- Who should read it
- Key sections
- Customization needed

---

## WHO SHOULD READ WHAT

### Founder (Elizabeth)
**Required reading:**
1. LEGAL-QUICK-START.md (5 min)
2. 7-SUMMARY-RECOMMENDATIONS.md (15 min)
3. 4-LIABILITY-ASSESSMENT.md (understand the risks) (20 min)

**Nice-to-have:**
- 6-IMPLEMENTATION-CHECKLIST.md (see what engineer needs to do)
- 5-REGULATORY-LANDSCAPE.md (understand regulatory status)

**Total time:** 40 minutes minimum, 2 hours maximum

---

### Attorney
**Must review:**
1. 1-MENTAL-HEALTH-DISCLAIMER.md
2. 2-TERMS-OF-SERVICE.md
3. 3-PRIVACY-POLICY.md

**Should review:**
4. 4-LIABILITY-ASSESSMENT.md (verify risk assessment)
5. 5-REGULATORY-LANDSCAPE.md (verify regulatory status)
6. 6-IMPLEMENTATION-CHECKLIST.md (verify procedures)

---

### Engineer
**Must understand:**
1. 1-MENTAL-HEALTH-DISCLAIMER.md (what companion must do)
2. 6-IMPLEMENTATION-CHECKLIST.md (detailed week-by-week tasks)

**Should understand:**
3. 2-TERMS-OF-SERVICE.md (data handling, privacy requirements)
4. 3-PRIVACY-POLICY.md (data storage, retention, deletion)

---

### Customer Support Team
**Must understand:**
1. 1-MENTAL-HEALTH-DISCLAIMER.md (crisis protocol)
2. 6-IMPLEMENTATION-CHECKLIST.md (Section 1.4: Customer Support Training)

**Should understand:**
3. 2-TERMS-OF-SERVICE.md (refund policy)
4. 3-PRIVACY-POLICY.md (customer data rights)

---

### Investors / Advisors
**Should read:**
1. LEGAL-QUICK-START.md (overview)
2. 7-SUMMARY-RECOMMENDATIONS.md (risks and recommendations)
3. 4-LIABILITY-ASSESSMENT.md (understand liability exposure)

---

## QUICK REFERENCE: WHAT TO DO THIS WEEK

```
☐ Founder: Hire attorney (contact 3-5 lawyers, get quotes)
☐ Founder: Apply for insurance (contact 2-3 brokers, get quotes)
☐ Founder: Read LEGAL-QUICK-START.md and 7-SUMMARY-RECOMMENDATIONS.md
☐ Founder: Share all 7 documents with attorney for review
☐ Founder: Share product description + 3 documents with insurance broker
☐ Engineer: Review 1-MENTAL-HEALTH-DISCLAIMER.md (understand crisis protocol)
☐ Engineer: Review 6-IMPLEMENTATION-CHECKLIST.md (plan Week 1-2 tasks)
☐ Team: Schedule 30-minute kick-off to review legal framework
```

**Timeline:** All items complete by Friday EOD

---

## DOCUMENT CUSTOMIZATION CHECKLIST

Before any document goes to a customer or attorney, customize:

### 1-MENTAL-HEALTH-DISCLAIMER.md
- [ ] Verify crisis hotline numbers (call them to confirm they're still active)
- [ ] Add state-specific hotlines if you focus heavily on a region
- [ ] Adjust tone if needed (current is direct, not warm)
- [ ] Verify company name is consistent throughout

### 2-TERMS-OF-SERVICE.md
- [ ] Replace [YOUR COMPANY NAME] with actual company name
- [ ] Replace [INCORPORATE STATE] with state of incorporation (Delaware recommended)
- [ ] Replace [YOUR STATE/REGION] with jurisdiction for disputes
- [ ] Replace email/contact info with actual contact
- [ ] Adjust refund policy if needed (current is pro-rata cancellation)
- [ ] Adjust liability limits if attorney recommends (currently $9.99 max refund)

### 3-PRIVACY-POLICY.md
- [ ] Replace [YOUR COMPANY NAME] with actual company name
- [ ] Replace [REGISTERED ADDRESS] with actual company address
- [ ] Update data storage location (currently: Google Cloud Platform, US)
- [ ] Add specific third-party vendor names (Stripe, Anthropic, email provider)
- [ ] Add DPA references (link to your data processing agreements)
- [ ] Verify hotline availability for all markets (currently: US, UK, Canada, EU)

### 4-LIABILITY-ASSESSMENT.md
- [ ] No customization needed (internal use only)
- [ ] Review for accuracy in your jurisdiction (consult attorney)

### 5-REGULATORY-LANDSCAPE.md
- [ ] No customization needed (general guidance for all US/EU/Canada)
- [ ] Add any state-specific laws relevant to your customers
- [ ] Verify with attorney that you meet compliance requirements

### 6-IMPLEMENTATION-CHECKLIST.md
- [ ] Replace attorney/insurance budget estimates if you have actual quotes
- [ ] Adjust timeline if needed (currently assumes Week 1-3 launch)
- [ ] Add company-specific contacts (attorney, insurance broker)
- [ ] Customize team roles if your structure is different

### 7-SUMMARY-RECOMMENDATIONS.md
- [ ] No customization needed (executive summary, general guidance)
- [ ] Use for decision-making framework

---

## NEXT STEPS

### IMMEDIATE (This Week)
1. **Founder:** Hire attorney
2. **Founder:** Apply for insurance
3. **Team:** Read LEGAL-QUICK-START.md together
4. **Attorney:** Begin review of 3 customer-facing documents

### WEEK 2
1. **Attorney:** Provide feedback on documents
2. **Founder:** Incorporate attorney feedback, make revisions
3. **Engineer:** Begin implementing technical requirements (age gate, crisis protocol)
4. **Insurance:** Provide quotes, begin policy binding

### WEEK 3
1. **Attorney:** Final sign-off on all documents
2. **Founder:** Bind insurance policy
3. **Engineer:** Complete all technical implementations
4. **Support:** Complete crisis response training
5. **Launch:** Soft launch with 20–50 customers

### WEEK 4+
1. **Monitor:** Track crisis incidents, customer feedback
2. **Document:** Log all incidents for legal record
3. **Review:** 30-day legal review with attorney

---

## FREQUENTLY ASKED QUESTIONS

### Q: Do I have to follow all 7 documents exactly?
**A:** No. Attorney will review and customize based on your jurisdiction, business model, and risk profile. These are templates, not gospel.

### Q: What if attorney disagrees with something in these documents?
**A:** Their local knowledge > my general guidance. Follow attorney recommendations.

### Q: Can I launch without attorney review?
**A:** Technically yes. Practically no. That's how you end up with unenforceable contracts and liability exposure. Don't skip this.

### Q: Can I launch without insurance?
**A:** Technically yes. But if a lawsuit happens, you're bankrupt. Don't skip this.

### Q: What if I disagree with the risk assessment in Document 4?
**A:** Discuss with attorney. If they agree risk is lower, great. But don't dismiss it outright — this framework is based on real startup failures.

### Q: Do I need to hire a full-time compliance officer?
**A:** Not for MVP. You (founder) + attorney (on retainer) handle it. At 1,000+ customers, hire a part-time compliance person.

### Q: What if regulations change after launch?
**A:** Document 5 (Regulatory Landscape) includes monitoring plan. Quarterly review + attorney relationship handles it.

### Q: Can I modify the Mental Health Disclaimer to be "softer" or more positive?
**A:** No. Attorney review might suggest clarifications, but don't weaken it. The disclaimer's job is to prevent liability, not to convince people. You have other marketing for that.

---

## DOCUMENT STATUS & VERSIONS

| Document | Status | Requires Attorney Review | Ready for Customers |
|----------|--------|-------------------------|-------------------|
| 1-Mental Health Disclaimer | Draft | Yes | No (after review) |
| 2-Terms of Service | Draft | Yes | No (after review) |
| 3-Privacy Policy | Draft | Yes | No (after review) |
| 4-Liability Assessment | Draft | No | Internal only |
| 5-Regulatory Landscape | Draft | No | Internal only |
| 6-Implementation Checklist | Draft | No | Team only |
| 7-Summary & Recommendations | Draft | No | Internal only |
| LEGAL-QUICK-START | Draft | No | Team + investors |

---

## MAINTENANCE & UPDATES

### Post-Launch Review (30 days)
- Attorney reviews actual incidents + customer feedback
- Update documents based on learnings
- Verify compliance assumptions were correct

### Quarterly Review
- Check for regulatory changes (state laws, FTC guidance)
- Update hotline numbers (verify they're still active)
- Review insurance coverage (adequate for current scale?)
- Update risk register

### Annual Review
- Full legal check-up with attorney
- Compliance audit
- Insurance policy renewal + updates
- Risk assessment update

---

## ACKNOWLEDGMENT

**All documents in this framework are drafts created by Willow (AI Compliance Agent).**

- They are templates, not finished legal documents
- They require attorney review and customization
- They are based on general startup best practices, not jurisdiction-specific law
- They are not a substitute for actual legal counsel
- Use them as a foundation, not as final answers

**Proceed with attorney review before customer-facing use.**

---

**Index Version:** 1.0  
**Last Updated:** 2026-06-07  
**Status:** Ready for Attorney Review  
**Questions:** Contact founder or legal counsel

