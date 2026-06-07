# TECHNICAL ARCHITECTURE — AI Companion Sprints

---

## SYSTEM ARCHITECTURE OVERVIEW

```
Customer → Email (text) → Email Processing System → AI Model → Response → Email Send → Customer
                               ↓
                        Companion Data Store
                               ↓
                        Quality Control Log
```

**Flow:**
1. Customer emails companion@sprintai.com
2. System captures email, extracts message
3. Passes to AI model with companion personality spec
4. Model generates response
5. System sends response back via email
6. Logs interaction for quality control

---

## AI MODEL OPTIONS

### **OPTION A: Claude (Recommended)**

#### **Model Choice: Claude 3.5 Sonnet**

**Why Sonnet (not Haiku, not Opus)?**

| Model | Cost | Speed | Quality | Use Case |
|-------|------|-------|---------|----------|
| Haiku | $0.80/M input, $4/M output | Fast | Good | High volume, simple tasks |
| **Sonnet** | **$3/M input, $15/M output** | **Fast** | **Excellent** | **Balanced: quality + cost** |
| Opus | $15/M input, $75/M output | Slower | Best-in-class | Complex reasoning only |

**For companion sprints:** Sonnet is ideal
- Fast enough for email (no latency issues)
- Quality high enough for emotional conversations (good at understanding nuance)
- Cost reasonable at scale ($3-5/customer/month for typical usage)
- Best option for personality consistency (better than Haiku, cheaper than Opus)

#### **Cost Breakdown (Sonnet)**

**Assumptions:**
- 100 customers/month
- Average 20 messages/customer over 4 weeks
- Average 1,000 tokens per exchange (input + output)

**Calculation:**
- 100 customers × 20 messages × 1,000 tokens = 2,000,000 tokens/month
- Input (60% of tokens): 1,200,000 tokens × $3/M = $3.60
- Output (40% of tokens): 800,000 tokens × $15/M = $12.00
- **Total API cost: $15.60/month for 100 customers**
- **Cost per customer: $0.156/month** ← Incredible margin at $9.99

**At 500 customers:** $78/month API cost = $0.156 per customer (same efficiency)

**Unit Economics with Sonnet:**
- Price: $9.99
- Payment processor: -$0.50 (5%)
- API cost: -$0.156
- **Margin: $9.34 per customer** ← 93% margin

**This is the #1 reason to choose Claude:** Margin profile is exceptional

---

#### **Why Not Other Claude Models?**

**Haiku ($0.80/$4):**
- Cost: ~$0.05/customer (even cheaper)
- Downside: Lower quality for nuanced emotional conversations
- Risk: Haiku sometimes misses subtext, gives generic responses
- Verdict: NOT RECOMMENDED for personality-driven companions

**Opus ($15/$75):**
- Cost: ~$0.50/customer (expensive)
- Upside: Marginally better quality
- Downside: Slower response time, overkill for this use case
- Verdict: NOT NEEDED for MVP, revisit if Sonnet quality insufficient

---

### **OPTION B: OpenAI GPT-4o**

**Cost:** $2.50/M input, $10/M output

**Comparison to Claude Sonnet:**
- Similar quality
- Slightly cheaper ($15/M → $12.50/M at scale)
- API latency similar
- Support/reliability: Both solid

**Why Claude wins:**
- Better at personality/character consistency (trained differently)
- Better at understanding nuance in emotional conversations
- Better context window (200K vs 128K)
- Elizabeth's existing Claude API account

**Verdict:** GPT-4o viable alternative, but Claude Sonnet preferred

---

### **OPTION C: Open Source (Llama, Mistral)**

**Cost:** Self-hosted = $50-200/month infrastructure + custom dev

**Upside:**
- Full control
- Privacy (data stays on your servers)
- No API dependency

**Downside:**
- Significantly worse quality than Claude/GPT-4
- Requires infrastructure expertise
- Harder to maintain personality consistency
- Support burden (debugging, fine-tuning)
- Infrastructure costs high relative to API costs

**Verdict:** NOT RECOMMENDED for MVP. Infrastructure complexity too high.

---

## RECOMMENDATION: Claude 3.5 Sonnet

**Rationale:**
1. **Lowest total cost** when accounting for quality + API cost
2. **Best personality/emotion handling** for companion use case
3. **Exceptional margins** (93% at scale)
4. **Fast enough** (no latency concerns for email)
5. **Proven** (already using for Lumi)
6. **Sustainable** (not vulnerable to price changes, established product)

**API Setup:**
- Use Claude API (https://api.anthropic.com)
- Batch processing for email delivery (process emails in daily batches = lower cost)
- Token limits: No concerns at $9.99 price point

---

## HOSTING & DELIVERY INFRASTRUCTURE

### **Email Delivery System**

**Architecture:**
```
Email Inbox (Google Workspace) → Email Processing Service → Claude API → Sendgrid → Outgoing Email
```

**Option 1: Simple (Manual initially)**
- Customer emails custom email address
- Email arrives in shared inbox
- Manually copy/paste into Claude API web interface
- Type response
- Send via email
- **Cost:** $0 (just your time)
- **Timeline:** Doesn't scale, works for first 50-100 customers
- **Recommendation:** Start here, migrate to automated at 100 customers

**Option 2: Zapier Automation** (Recommended for MVP)
- Zapier watches email inbox
- Triggers Claude API via webhook
- Formats response
- Sends back automatically
- **Cost:** $25/month (Zapier) + API costs
- **Timeline:** Set up in 1-2 hours
- **Limitation:** Response time ~5 mins per email (Zapier latency)
- **Recommendation:** Good for MVP launch

**Option 3: Custom Backend** (Longer term)
- Node.js/Python server
- Email parser
- Claude API integration
- Response formatter
- Sendgrid integration
- Logging/analytics
- **Cost:** $50-100/month (hosting) + dev time (20-30 hours)
- **Timeline:** 1-2 weeks to build
- **Benefit:** Full control, <1 second response times
- **Recommendation:** Build this once you have 200+ customers

---

## EMAIL SYSTEM SETUP

**Email Provider:** Google Workspace (Business Starter)
- Cost: $6/user/month
- Set up: alex@sprintai.com, casey@sprintai.com, support@sprintai.com
- Benefit: Professional domain, reliability

**Email Processing:**
1. Customer emails alex@sprintai.com
2. Email arrives in shared inbox
3. Zapier or custom system processes it
4. Claude Sonnet generates response
5. Response sent from alex@sprintai.com

**Response SLA:** 
- MVP: Within 6 hours (batch processing)
- Target: Within 1 hour (Zapier)
- Advanced: Within 5 minutes (custom backend)

---

## DATA & PERSISTENCE

**What Gets Stored:**
1. Customer profile (name, email, goal, preferences)
2. Companion specifications (persona, guidelines)
3. Full conversation history (all messages)
4. Interaction logs (timestamps, token counts)

**Where:** 
- MVP: Google Sheet + email (simple)
- Scale: Postgres database + backend API

**Privacy/Compliance:**
- GDPR: Data deletion on request
- Conversations encrypted at rest
- No 3rd party access
- Clear data retention policy (delete after 1 year if customer doesn't request)

---

## SCALABILITY LIMITS

**Phase 1 (Manual):** 0-50 customers
- Manual email processing
- No infrastructure needed
- Response time: Whatever works

**Phase 2 (Zapier):** 50-500 customers
- Automated email processing
- Zapier + Claude API
- Response time: 5 mins
- Cost: $25/month Zapier + API

**Phase 3 (Custom):** 500+ customers
- Custom backend
- Full automation
- Response time: <1 min
- Cost: $50-100/month + dev time

---

## COST SUMMARY (12 Months)

**API Costs (Claude Sonnet):**
- Month 1: $16 (100 customers)
- Month 3: $78 (500 customers)
- Month 6: $156 (1,000 customers)
- Month 12: $312 (2,000 customers)
- **Total Year 1: ~$800** (growing by customer base)

**Infrastructure (Email + Processing):**
- Google Workspace: $6/month = $72/year
- Zapier (if used): $25/month = $300/year (months 2-12)
- Custom backend (if built month 6): $50/month × 7 months = $350/year
- **Total Year 1: ~$720**

**Total Year 1 Infrastructure + API:** ~$1,520

**Revenue at scale:**
- If 1,000 customers buy 1 sprint: $9,990/year revenue
- Costs: $1,520
- **Gross profit: $8,470**
- **Margin: 84.8%**

---

## RECOMMENDATIONS

**Recommended Tech Stack for MVP:**
1. **AI Model:** Claude 3.5 Sonnet
2. **Email Provider:** Google Workspace
3. **Processing:** Zapier (automated but simple)
4. **Data:** Google Sheets (simple, sufficient for MVP)
5. **Response SLA:** Within 6 hours (batch daily)

**Timeline:**
- Day 1: Set up Google Workspace, Zapier
- Day 2: Create Claude Sonnet integration
- Day 3: Test with manual customer
- Day 7: Ready for soft launch

**Future Migrations:**
- Month 3: Build custom backend (when Zapier costs feel high)
- Month 6: Migrate to Postgres if >500 customers
- Month 12: Consider failover/redundancy

---

## RISK MITIGATION

**API Dependency Risk:**
- Mitigation: Claude API is mature, SLA guarantees available
- Backup: GPT-4o integration ready if needed

**Data Loss Risk:**
- Mitigation: Daily backups of Google Sheets
- Mitigation: Conversations also logged in email

**Response Time Risk:**
- Mitigation: Set customer expectations (6-hour response time in MVP)
- Mitigation: Upgrade to custom backend if complaints arise

---

