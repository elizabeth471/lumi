# Lumi Resource Management System

**Purpose**: Track Claude API budget allocation, agent resource usage, and autonomous decision-making for task assignment.

**Current Status**: Phase 0 (active) — Budget 50% of monthly Claude Max plan ($62.50/month)

---

## Budget Framework

### Monthly Allocation
- **Total Claude API Budget**: $124.99/month (Claude Max 5x plan)
- **Lumi Project Allocation**: 50% = $62.50/month
- **Burn Rate Target**: Consistent usage across all weeks, never spike above budget
- **Reset Cycle**: Calendar month (1st–30/31st)

### Current Month Tracking (June 2026)

| Week | Allocation | Used | Remaining | Status |
|------|-----------|------|-----------|--------|
| W1 (1-7) | $15.63 | TBD | TBD | **ACTIVE** |
| W2 (8-14) | $15.63 | — | — | Queued |
| W3 (15-21) | $15.63 | — | — | Queued |
| W4 (22-30) | $15.61 | — | — | Queued |

---

## Agent Registry

Each agent has defined: specialization, primary model, estimated cost-per-task, current status.

### Active Agents (Phase 0)

| Agent | Specialization | Primary Model | Est. Cost/Task | Monthly Budget | Status |
|-------|----------------|-------------|------------|-----------------|--------|
| **Blossom** | Admin, coordination, reasoning | claude-sonnet-4-6 | $0.15 | $28.00 | Active |
| **Sage** | Research, competitive intelligence, market analysis | claude-haiku-4-5 | $0.08 | $10.00 | Active |
| **Reed** | Writing, communication, brand voice | claude-sonnet-4-6 | $0.10 | $12.50 | On-demand |
| **Moss** | Financial modeling, budget tracking | claude-sonnet-4-6 | $0.12 | $7.50 | On-demand |
| **Willow** | COPPA compliance, child safety review | claude-sonnet-4-6 | $0.15 | $3.00 | Dormant |
| **Grove** | Visual development, design briefs | claude-haiku-4-5 | $0.06 | $1.50 | Dormant |

**Total Estimated Monthly**: ~$62.50 (exact allocation)

### Dormant Agents (Activate Phase 1)

| Agent | Specialization | Activation | Budget |
|-------|----------------|-----------|--------|
| **Clover** | Child development SME | Phase 2 (activity design) | TBD |
| **Fern** | Neurodivergent accessibility SME | Phase 2 (activity design) | TBD |
| **Briar** | SEL & emotional safety SME | Phase 2 (activity design) | TBD |
| **Thistle** | Bilingual & cultural validation | Phase 2 (activity design) | TBD |

---

## Usage Tracking — Weekly Breakdown

### How Tracking Works

**Daily:** Blossom logs each task assignment with:
- Agent assigned
- Task description (1 sentence)
- Estimated cost (low/medium/high)
- Actual cost when known
- Time spent (minutes)

**Weekly:** Aggregate to show:
- **Total spend** (all agents combined)
- **Per-agent spend** (breakdown by agent)
- **Tasks completed** (count by agent)
- **Average cost per task** (insights on efficiency)

### Weekly Template (Week 1: June 1-7)

**Status: ACTIVE — $15.63 budget for week**

| Date | Agent | Task | Estimate | Actual | Minutes | Notes |
|------|-------|------|----------|--------|---------|-------|
| Jun 7 | Blossom | Read admin profile, initialize session | Medium | $0.12 | 15 | First session load |
| Jun 7 | Sage | Market scan: competitor landscape | High | TBD | — | Queued |
| Jun 7 | Reed | Draft Ian presentation deck | High | TBD | — | Queued |

**Weekly Summary:**
- **Total spent**: TBD
- **Remaining**: $15.63
- **Agents used**: 1/6 active
- **Tasks completed**: 1
- **Efficiency**: TBD

---

## Autonomous Decision Rules (Blossom's Authority)

### Task Assignment Rules

**Rule 1: Default to cheapest qualified agent**
- Is Haiku sufficient? Assign to Haiku agent first.
- Is Sonnet required? Use Sonnet.
- Is Opus necessary? Document the reason.

**Rule 2: Batch work before activation**
- Before assigning a task: check if 2-3 related tasks exist.
- If yes: batch them into one agent session.
- One agent activation > multiple small tasks.

**Rule 3: Parallel only when independent**
- Parallel activation: Yes, if tasks don't depend on each other.
- Sequential activation: Yes, if later tasks need earlier outputs.
- Never activate agents for sequential work in parallel.

**Rule 4: Background learning budget is fixed**
- Background research: max $50/month total across all agents
- Active session work: takes priority, no limit
- If low on credits: pause background learning entirely

**Rule 5: Escalation requires documentation**
- Escalating to Sonnet from Haiku? Document why Haiku wasn't sufficient.
- Escalating to Opus? This is a rare exception — requires explicit reason.
- Every escalation is logged so we learn when Sonnet/Opus are actually needed.

### Spending Rules

**Rule 1: Stay within weekly allocation**
- If remaining < 1/3 of weekly budget: only critical work
- If remaining < 1/6 of weekly budget: only founder-blocking work
- If budget exhausted: wait for weekly reset (next Monday)

**Rule 2: Never overspend without approval**
- If a task will push us over: ask founder first
- Exception: founder explicitly said "no limit on active work"
- But escalations (Opus) still require documentation

**Rule 3: Efficiency is secondary to quality**
- A task that costs more but produces better output is worth it
- A task that costs less but requires rework is wasteful
- Optimize for: quality first, then efficiency

### When to Use Each Model

| Situation | Model | Rationale |
|-----------|-------|-----------|
| Quick factual lookup, simple analysis | Haiku | Cost: $0.00 per M tokens |
| General writing, research, draft | Sonnet | Speed + quality, moderate cost |
| Complex reasoning, multi-step tasks | Sonnet | Haiku struggles with ambiguity |
| Final review, strategic decisions | Sonnet | Quality critical, cost secondary |
| **Opus only if** | — | — |
| Sonnet fails (documented) + founder approves | Opus | Rare escalation |

---

## Alert System

### Low Budget Alert Threshold

- **Green** (>50% remaining): Normal operations
- **Yellow** (<50%, >25%): Switch to high-efficiency mode, batch tasks
- **Orange** (<25%, >10%): Critical work only, pause non-essential background
- **Red** (<10%): Pause everything except blocking issues, founder approval required

### Monthly Reset Alert

- **Day 27 of month**: "Budget reset in 4 days"
- **Day 30 of month**: "Budget reset tomorrow. Plan next week's work."
- **Day 1 of new month**: "New monthly budget loaded. $62.50 available."

### Usage Spike Alert

- If any single task costs >$2: flag to founder
- If any single day costs >$1: notify founder with breakdown
- If any agent costs >budget in a month: recommend model downgrade

---

## Session-Level Tracking

At the end of each session, Blossom logs:

```
SESSION COST LOG — [DATE]

Tasks executed:
- [Agent]: [Task] — $[cost] in [minutes] minutes
- [Agent]: [Task] — $[cost] in [minutes] minutes

Weekly totals:
- Spent: $[amount]
- Remaining: $[amount]
- On track: [yes/no — explain if no]

Decisions made:
- Escalated to [Model] because [reason]
- Batched [X] tasks to save [Y]
- Paused [background task] due to budget

Next session:
- Priority: [what to work on]
- Budget state: [green/yellow/orange/red]
```

---

## Real-World Examples

### Example 1: Task Assignment (Cheap Path)

**Founder request:** "Research how other kids' apps handle parental onboarding"

**Blossom's decision:**
- Task: Market research → Sage's domain
- Cost estimate: Medium ($0.08-0.12)
- Use Haiku (cheaper) or Sonnet (better depth)?
- Decision: Haiku first. If results are shallow, escalate to Sonnet.
- Estimated cost: $0.08

**Result:** Sage uses Haiku, costs $0.07, finds 3 good examples. Done.

---

### Example 2: Batching Work (Efficiency)

**Founder has 3 requests:**
1. "Write the Ian tech brief"
2. "Edit the brand voice guide"
3. "Draft the onboarding flow copy"

**Blossom's decision:**
- All 3 are writing tasks → all go to Reed
- Cost alone: $0.10 × 3 = $0.30
- Batched: single session, cost ~$0.18 (economies of scale)
- Decision: Batch, save $0.12

**Result:** Reed completes all 3 in one session. Saving: $0.12.

---

### Example 3: Escalation with Approval

**Founder request:** "Create a complete COPPA compliance strategy for the product"

**Blossom's decision:**
- Task: Complex regulatory strategy → Willow's domain (child safety)
- Primary model: Sonnet
- Escalate to Opus?
  - Reason: COPPA is non-negotiable; complexity is high; cost of error is high
  - Justify to founder: "This requires Opus-level reasoning. Cost: $0.25. Worth it?"

**Founder's response:** "Yes, do Opus."

**Result:** Willow uses Opus, cost $0.25, produces comprehensive compliance brief.

---

## Monthly Retrospective

**Run on last day of month.**

### Questions

1. **Did we stay within budget?** (Yes/No, variance %)
2. **Which agent was most efficient?** (cost per task)
3. **Which tasks were worth the cost?** (quality-to-cost ratio)
4. **Where did we overspend?** (which agents, which tasks)
5. **What should we do differently next month?**

### Template

```
MONTHLY RETROSPECTIVE — June 2026

Budget: $62.50 allocated | $[X.XX] spent | [Y]% utilization

By agent:
- Blossom: $[X] (tasks: [N], cost/task: $[Y])
- Sage: $[X] (tasks: [N], cost/task: $[Y])
- Reed: $[X] (tasks: [N], cost/task: $[Y])
- Moss: $[X] (tasks: [N], cost/task: $[Y])

Efficiency:
- Tasks completed: [N]
- Average cost per task: $[X]
- Rework rate: [%] (tasks that needed re-doing)

Key learnings:
1. [Insight about agent usage]
2. [Model choice that worked well]
3. [Escalation that paid off]
4. [Efficiency gain we found]

Next month changes:
- [Adjustment 1]
- [Adjustment 2]
```

---

## Implementation Checklist

- [x] Budget framework set ($62.50/month, 50% allocation of Claude Max plan)
- [x] Agent registry created with model assignments
- [x] Weekly tracking template ready
- [x] Autonomous decision rules documented
- [x] Alert thresholds defined
- [x] Session logging protocol ready
- [ ] Implement real-time cost tracking in blossom-platform.html
- [ ] Integrate with Blossom's decision logic (auto-assign tasks)
- [ ] Create weekly report generation script
- [ ] Set up monthly retrospective checklist

---

## Access & Permissions

- **Elizabeth (Founder)**: Full visibility + override authority
- **Blossom (Admin)**: Autonomous assignment + decision logging
- **Sub-agents**: No budget authority; receive assignments with constraints
- **All agents**: Read-only access to session cost logs

**Founder can:**
- Override Blossom's agent assignment
- Authorize spending above budget
- Pause all agent work
- Adjust allocation at any time

**Blossom must:**
- Never exceed budget without founder approval
- Always document why a task cost more than estimated
- Flag trends (recurring overspend, efficiency losses)
- Suggest optimizations monthly

---

## Future Enhancements

- Real-time token usage visualization (show thinking process costs)
- Predictive budget tracking (will we finish under/over?)
- Agent performance scoring (quality + cost + speed)
- Custom cost accounting (charge different rates for different task types)
- Budget reallocation mid-month (shift money between agents)

---

**Last updated:** June 7, 2026  
**Maintained by:** Blossom (Admin Agent)  
**Review cycle:** Weekly (budget) + Monthly (retrospective)
