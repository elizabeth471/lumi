# AI Companion Sprints — Liability Assessment & Risk Analysis

**Date Created:** 2026-06-07  
**Status:** INTERNAL ANALYSIS (Not for customer-facing use)  
**Owner:** Willow (Compliance & Risk)  
**Audience:** Founder, Legal Counsel, Insurance Advisor

---

## EXECUTIVE SUMMARY

AI Companion Sprints faces moderate-to-high liability exposure because it provides emotional support in a domain adjacent to mental health. **Even with strong disclaimers, liability exists.** This assessment identifies:

1. **Real liability scenarios** (honest assessment of what could go wrong)
2. **Residual liability** (what remains even with our mitigations)
3. **Insurance requirements** (what type, minimum coverage)
4. **Risk reduction strategies** (what we can do to lower exposure)

**Bottom line:** We can mitigate significant risk through disclaimers and crisis protocols, but we cannot eliminate it entirely. Professional liability insurance is essential before launch.

---

## PART A: LIABILITY SCENARIOS (What Could Actually Happen)

### Scenario 1: Customer Suicide or Serious Self-Harm After Using Service

**The situation:**
- Customer uses AI Companion Sprints for 2-3 weeks
- Customer experiences a mental health crisis not disclosed to the companion
- Customer attempts suicide or serious self-harm
- Family/estate sues, claiming the Service caused or contributed to harm

**Our liability exposure:**
- **HIGH** — even with disclaimers
- Plaintiff argument: "They marketed emotional support. Customer relied on it instead of professional help. Company failed to recognize crisis warning signs and escalate."
- Our defense: "We provided clear disclaimers. Customer had crisis protocol available. Service is explicitly not therapy."
- **Outcome likelihood:** Dismissal or settlement depending on:
  - Quality of our disclaimers (are they clear, specific, prominent?)
  - Whether crisis language was detected and we escalated
  - Jurisdiction (some states are more plaintiff-friendly on mental health cases)
  - Depth of customer's engagement with professional help

**Residual risk:** MODERATE-HIGH even with our best efforts, because:
- Disclaimers do not eliminate liability entirely (they reduce it)
- Judges/juries may be sympathetic to families
- If we failed to detect/escalate crisis language, we're more liable
- If companion gave harmful advice, we're more liable

### Scenario 2: Companion Gives Harmful or Dangerous Advice

**The situation:**
- Customer asks companion for advice on a sensitive topic
- Companion generates a response that is inaccurate, dangerous, or harmful
- Customer follows the advice and is harmed
- Customer sues for negligence

**Example:**
- Customer asks: "I'm depressed. Should I stop my medication?"
- Companion says: "That's between you and your doctor, but many people find that exercise is better than meds"
- Customer stops medication
- Customer has adverse mental health event
- Customer sues

**Our liability exposure:**
- **MODERATE-HIGH** — we can be sued even if we win
- We cannot prevent Claude from occasionally generating problematic outputs
- Our liability depends on:
  - Did our instructions clearly say "don't give medical advice"?
  - Did we disclose that the companion could make mistakes?
  - Did customer follow advice despite clear disclaimers?

**Residual risk:** MODERATE even with disclaimer, because:
- Juries may find that we should have prevented harmful outputs
- If our instructions were inadequate, we bear responsibility
- AI capability gaps (Claude might not catch all harmful scenarios)

### Scenario 3: Companion Detects Crisis, Customer Ignores Resources

**The situation:**
- Customer discloses crisis language (suicidal ideation, self-harm, abuse)
- Companion escalates and provides crisis hotline numbers
- Customer ignores the resources and attempts harm
- Family sues, claiming we should have done more

**Our liability exposure:**
- **LOW-MODERATE** if we followed protocol correctly
- Plaintiff argument: "You detected a crisis but only sent a text message with a phone number. You should have called emergency services."
- Our defense: "We provided immediate, accurate crisis resources. We cannot monitor the customer after they receive them. We are not a crisis service."
- **Outcome likelihood:** Strong likelihood of dismissal IF:
  - We documented the exact escalation
  - Resources were accurate and prominent
  - We have evidence customer received the message
  - We did not claim to provide crisis coverage

**Residual risk:** LOW-MODERATE if we follow protocol, HIGH if we don't document it

### Scenario 4: Data Breach Exposing Intimate Conversation History

**The situation:**
- We experience a data breach
- Customer's emotional conversations with companion are exposed
- Customer sues for emotional distress, invasion of privacy, and damages
- Potential regulatory fines (GDPR, CCPA)

**Our liability exposure:**
- **HIGH** — both legal and regulatory
- We are responsible for securing customer data
- Intimate mental health information is sensitive and protected under privacy laws
- Customer may claim emotional distress from exposure

**Residual risk:** MODERATE-HIGH (mitigated by encryption, access controls, security measures, but never zero)

### Scenario 5: False Advertising / Misrepresentation

**The situation:**
- We claim the service provides "emotional support and accountability"
- Customer interprets this as "mental health support" despite disclaimers
- Customer relies on service instead of therapy
- Customer is harmed and sues for misrepresentation/false advertising

**Our liability exposure:**
- **MODERATE** — depends on marketing language
- Our marketing materials must be absolutely clear:
  - "NOT therapy"
  - "NOT a substitute for professional help"
  - "For goal support only"
- If marketing is ambiguous or emotional language overstates capabilities, we're at risk

**Residual risk:** LOW if marketing language is precise and aligned with ToS, MODERATE if marketing oversells

### Scenario 6: Companion Enables Abuse or Criminal Activity

**The situation:**
- Customer uses the service to practice manipulative behaviors
- Companion is trained to provide feedback on "persuasion" or "flirting"
- Customer uses companion feedback to manipulate, gaslight, or coerce a partner
- Victim of abuse sues the company for enabling the abuse

**Our liability exposure:**
- **MODERATE** — depends on our instructions to the companion
- We must ensure companions do NOT:
  - Teach manipulation tactics
  - Help with deceptive behavior
  - Normalize abusive dynamics
  - Encourage boundary violation
- If our instructions are vague or irresponsible, we bear liability

**Residual risk:** MODERATE-LOW if instructions are clear, MODERATE if they're ambiguous

### Scenario 7: Regulatory Violations (COPPA, False Claims)

**The situation:**
- FTC investigates our company for:
  - Allowing under-18 users (COPPA violation)
  - Making false claims about mental health benefits
  - Mishandling children's data
- Regulatory action, fines, and forced compliance measures

**Our liability exposure:**
- **HIGH** — regulatory bodies have significant power
- We MUST:
  - Age-gate at 18+ (verify at purchase)
  - Never claim mental health benefits or cures
  - Comply with privacy rules
  - Have clear disclaimers

**Residual risk:** LOW if we enforce age gates and disclaimers, MODERATE-HIGH if enforcement is weak

---

## PART B: RESIDUAL LIABILITY (What Remains Even With Our Mitigations)

Even if we implement every mitigation in this assessment, some liability remains because:

### 1. Emotional Harm Claims Are Hard to Defeat

**The issue:** If a customer is harmed and claims our service contributed, juries are sympathetic, regardless of disclaimers. A family grieving a suicide will find it hard to believe "a company can't be responsible for an AI that told my child to call a hotline."

**What this means:** Even if we win the lawsuit, we incur:
- Legal defense costs ($50K–$500K+)
- Settlement pressure (sometimes cheaper to settle than fight)
- Reputational damage
- Media attention

**Mitigation:** Insurance covers defense costs. But the threat remains.

### 2. AI Hallucination Risk

**The issue:** Claude occasionally generates false or harmful information despite our best instructions. We cannot prevent this 100%.

**Example:** Customer asks about a medication side effect, Claude provides incorrect information.

**What this means:** If Claude says something harmful and customer is harmed, we are partially liable even if we told Claude not to give medical advice.

**Mitigation:** Clear disclaimers reduce liability but don't eliminate it. Insurance covers.

### 3. Crisis Detection Gaps

**The issue:** We cannot detect all crises with 100% accuracy. A customer in distress might not use trigger phrases. They might be subtly expressing danger.

**Example:** Customer writes "I'm tired of trying" (ambiguous, could mean anything). Companion misses it.

**What this means:** If customer is in crisis and we fail to detect it, and harm occurs, we may be liable for negligent failure to escalate.

**Mitigation:** Clear instructions to err on the side of caution (escalate ambiguous language). Documentation. But not perfect.

### 4. Disclaimers Are Not Absolute Liability Shields

**The issue:** Disclaimers reduce liability but do not eliminate it. Courts can rule disclaimers "unconscionable," "unclear," or "unenforceable" if:
- They're hidden in fine print (not prominent)
- They contradict marketing materials
- They're so broad they're obviously unenforceable
- The harm was foreseeable and preventable

**What this means:** Even with strong disclaimers, we can still be sued and held liable if a court finds the disclaimer inadequate.

**Mitigation:** Make disclaimers prominent, specific, and repeated. Don't contradict them in marketing. But some risk remains.

### 5. Class Action Risk

**The issue:** If multiple customers are harmed similarly, there's risk of class action lawsuit, which is expensive to defend (even if we win).

**Example:** If our crisis detection fails consistently and multiple customers in crisis are missed, they could file a class action.

**Mitigation:** Insurance covers class action defense. But it's a significant risk.

---

## PART C: INSURANCE REQUIREMENTS

### What Type of Insurance We Need

**1. Professional Liability Insurance (General Liability)**

**What it covers:**
- Negligence claims (customer claims we failed to provide adequate service)
- Bodily injury or emotional distress claims
- Defense costs (legal fees, expert witnesses)
- Settlements and judgments
- Privacy liability (if we're sued for data handling)

**Recommended coverage:**
- Minimum: $1–2 million per occurrence
- Aggregate: $2–4 million annually
- Estimated cost: $2K–$5K/year (depending on underwriter, risk profile, revenue)

**Why we need it:**
- Covers mental health-adjacent liability (emotional distress claims)
- Covers defense of crisis protocol claims
- Covers settlement if harm occurs

**Key question for underwriter:** "We provide AI emotional support, not therapy. Do you cover mental health adjacent products?"

---

**2. Cyber Liability & Data Breach Insurance**

**What it covers:**
- Data breach response (notification, credit monitoring)
- Regulatory fines (GDPR, CCPA, state privacy laws)
- Customer notification costs
- Forensic investigation
- Extortion/ransomware demands
- Privacy liability (claims from breached customers)

**Recommended coverage:**
- Minimum: $1–2 million per occurrence
- Estimated cost: $1K–$3K/year for early-stage startup

**Why we need it:**
- We store intimate customer conversations
- Breach = significant regulatory risk + customer claims
- Notification and remediation costs can be substantial

---

**3. Errors & Omissions (E&O) Insurance**

**What it covers:**
- Claims that we failed to perform (companion generation failures, etc.)
- Claims of inadequate service
- Defense costs
- Regulatory investigation costs

**Recommended coverage:**
- Minimum: $1–2 million
- Estimated cost: $1.5K–$3K/year

**Why we need it:**
- Covers claims about AI performance failures
- Covers regulatory investigation costs
- Often bundles with professional liability

---

**Total Estimated Insurance Cost:** $4.5K–$11K/year for $1–2M coverage

**Is this mandatory before launch?** YES — for legal due diligence and risk management. Investors will require it. Customers may ask about it.

---

### How to Get Insurance

**Step 1: Talk to an insurance broker** who specializes in tech startups or AI companies
- Brokers know which underwriters will cover AI products
- They negotiate better rates than direct application
- They understand the mental health-adjacent risk

**Step 2: Be honest about the product**
- "We provide AI emotional support for 4-week sprints"
- "Customers interact via email"
- "Crisis detection and escalation protocol"
- "We provide disclaimers and crisis resources"
- "Not a therapy service, but adjacent to mental health"

**Underwriters understand this space better than you might think.** Companies like Woebot, Replika, and other AI mental health tools carry insurance. It's available.

**Step 3: Expect underwriters to require:**
- Copy of your Terms of Service
- Copy of Mental Health Disclaimer
- Crisis Protocol documentation
- Examples of companion instructions
- Evidence of age-gating (18+)
- Your data security practices

**Step 4: Choose a policy** that covers:
- Professional liability (mental health adjacent)
- Cyber liability (data breach)
- Defense costs (legal fees)

---

## PART D: RISK REDUCTION STRATEGIES

### Strategy 1: Fortify Disclaimers (ALREADY DONE)

**What we're doing:**
- Mental Health Disclaimer in multiple locations (landing page, purchase, first message)
- Specific, clear language: "NOT therapy, NOT medical advice, NOT crisis support"
- Crisis protocol built into companion instructions
- Repeating disclaimers to emphasize seriousness

**Effectiveness:** MODERATE-HIGH at reducing liability claims, but not eliminating them

**Next steps:**
- Attorney review of disclaimer language (ensure it's optimized for your jurisdiction)
- A/B testing to confirm customers understand (optional, but good practice)
- Regular updates as regulations change

---

### Strategy 2: Implement Robust Crisis Protocol (ALREADY DONE)

**What we're doing:**
- Trigger phrase detection (suicide, self-harm, abuse language)
- Automatic escalation with crisis hotline numbers
- Pausing sprint until customer confirms safety
- Documenting all crisis incidents
- Follow-up email at 24 hours if no response

**Effectiveness:** HIGH at reducing liability if crisis occurs

**Next steps:**
- Train customer support team on crisis protocol
- Test trigger detection with sample conversations
- Localize hotline numbers for all markets (US, UK, Canada, EU)
- Ensure documentation system is secure and audit-ready

---

### Strategy 3: Clear Companion Instructions (CRITICAL)

**What we're doing:**
- Instructing companions to NEVER:
  - Diagnose mental health conditions
  - Prescribe medications or treatments
  - Promise mental health outcomes
  - Minimize customer concerns
  - Provide therapy techniques
- Instructing companions to ALWAYS:
  - Ask clarifying questions rather than assume
  - Defer medical/mental health questions to professionals
  - Acknowledge limitations
  - Escalate crisis language immediately

**Effectiveness:** HIGH at reducing harmful output claims

**Next steps:**
- Document companion instructions in detail
- Review with attorney before launch
- Test companions with adversarial inputs (what if customer says X?)
- Monitor actual conversations for policy violations

---

### Strategy 4: Age Gating & Verification (COPPA COMPLIANCE)

**What we're doing:**
- Requiring users to confirm they are 18+ at purchase
- Stripe payment = de facto age verification (payment methods typically require adult)

**Effectiveness:** HIGH for preventing child user claims

**Next steps:**
- Add explicit checkbox: "I confirm I am 18 or older"
- Make checkbox prominent and required
- Document that customer confirmed age at checkout
- Monitor for obvious underage users (age field in onboarding)

---

### Strategy 5: Transparency in Marketing (PREVENT FALSE ADVERTISING CLAIMS)

**What we're doing:**
- Marketing language must match what the service actually provides
- Avoid overstating emotional support capabilities
- Emphasize "goal-focused, 4-week sprint" not "cure your depression"
- Repeat disclaimers on landing page

**Effectiveness:** MODERATE at reducing misrepresentation claims

**Next steps:**
- Attorney review of all marketing materials
- Ensure marketing doesn't contradict ToS or disclaimers
- Avoid testimonials that claim mental health improvement ("I'm cured!")
- Use evidence-based language: "customers report X" not "will achieve X"

---

### Strategy 6: Data Security & Breach Response (CYBER LIABILITY)

**What we're doing:**
- SSL/TLS encryption for data in transit
- AES-256 encryption for data at rest
- Limited employee access (role-based)
- Regular backups
- Security monitoring

**Effectiveness:** HIGH at reducing breach likelihood, MODERATE at reducing liability if breach occurs

**Next steps:**
- Annual security audit (external, third-party)
- Penetration testing
- Incident response plan (what to do if breach is detected)
- Cyber liability insurance (covers investigation + notification)

---

### Strategy 7: Document Everything (LEGAL PROTECTION)

**What we're doing:**
- Crisis incidents logged (date, customer, trigger, response, outcome)
- Customer support conversations saved
- Companion conversation history retained
- Terms & Disclaimers with customer signature/acceptance

**Effectiveness:** HIGH at legal defense (proves we tried to mitigate risk)

**Next steps:**
- Implement secure logging system for crisis incidents
- Audit trail for all customer interactions
- Regular backup of logs
- Access controls (who can see crisis logs)
- Retention policy (keep for legal statute of limitations, typically 3–7 years)

---

## PART E: HONEST LIABILITY ASSESSMENT

### What We CAN Control

- Quality of disclaimers
- Crisis protocol implementation
- Companion instruction clarity
- Data security
- Age verification
- Marketing accuracy
- Documentation of our efforts
- Insurance coverage

### What We CANNOT Control

- How customers interpret the service
- Whether customers follow disclaimers
- Whether customers use professional help instead
- Customer mental health outcomes
- Court/jury decisions
- Regulatory enforcement
- Claude's occasional harmful outputs
- Jury sympathy in mental health cases

### Expected Liability Outcomes (Realistic Scenarios)

**Scenario A: No major incidents**
- Small claims for refunds or service complaints
- No lawsuit, handled via customer support or chargeback disputes
- Insurance premiums stay low

**Scenario B: Isolated harmful incident (1 customer)**
- Lawsuit for emotional distress/negligence
- Our defense: "We provided clear disclaimers, crisis protocol, resources"
- Likely outcome: Dismissal or settlement ($10K–$50K)
- Insurance covers defense + settlement
- No regulatory action if we escalated properly

**Scenario C: Crisis detection failure leading to harm**
- Customer in crisis, we failed to detect trigger phrases, customer harmed
- Lawsuit for negligence
- Our defense: "Protocol was in place, but missed this case"
- Likely outcome: Settlement ($50K–$200K)
- Insurance covers
- Regulatory review of our practices

**Scenario D: Class action or regulatory action**
- Multiple similar harms, or FTC investigation for false advertising
- High legal costs ($100K–$500K)
- Insurance covers
- Forced policy changes
- Possible fine (if COPPA or privacy violation)

**Worst case:** A customer suicide or serious self-harm directly attributed to our service, family sues for wrongful death/serious injury
- Legal costs: $200K–$1M+
- Settlement/judgment: $100K–$5M+ (depending on circumstances, jurisdiction, evidence)
- Insurance limits matter (minimum $1M recommended)
- Regulatory investigation
- Company reputation damage

---

## PART F: RECOMMENDATIONS

### MUST-HAVE Before Launch (Week 2)

1. **Mental Health Disclaimer** — Complete ✓ (done)
2. **Terms of Service** — Complete ✓ (done)
3. **Privacy Policy** — Complete ✓ (done)
4. **Crisis Protocol** — Implemented ✓ (companion configured)
5. **Legal Review** — REQUIRED (attorney review of all three documents)
6. **Insurance** — Apply for professional liability + cyber liability coverage
7. **Age Gate** — Implement 18+ verification at checkout

### NICE-TO-HAVE Before Launch (Phase 2)

- Security audit (external)
- Penetration testing
- Customer testimonials guidelines
- Marketing language review
- Incident response plan (written, tested)

### ONGOING (After Launch)

- Monitor crisis incidents (track frequency and outcomes)
- Monitor customer feedback for harmful outputs
- Update disclaimers based on feedback/incidents
- Annual insurance review
- Annual legal compliance review
- Regulatory monitoring (changes to COPPA, state laws, etc.)

---

## PART G: WHAT TO DISCUSS WITH ATTORNEY

Before launch, discuss with a startup attorney:

1. **Jurisdiction & Incorporation** — Where should we incorporate? (affects liability exposure)
2. **Disclaimer Adequacy** — Are our disclaimers specific enough for our jurisdiction?
3. **Regulatory Obligations** — Any state-specific regulations on AI or mental health tools?
4. **Insurance** — What policy limits should we target?
5. **Crisis Protocol** — Does our protocol meet legal standards for crisis handling?
6. **Data Retention** — How long must we keep crisis logs for legal purposes?
7. **Liability Liability** — Can we limit liability for AI-generated harmful content?

---

## CONCLUSION

**Liability is real, but manageable.**

With strong disclaimers, crisis protocol, clear companion instructions, age verification, and professional liability insurance, we can significantly reduce (but not eliminate) our exposure. The service can be launched responsibly.

**The key is transparency:** telling customers clearly what we are, what we're not, and what to do if they're in crisis.

---

**Document Status:** DRAFT — Internal analysis  
**Next Review:** Post-launch at 30 days (assess actual crisis frequency)  
**Audience:** Founder, Attorney, Insurance Advisor
