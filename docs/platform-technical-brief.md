# Lumi Platform — Technical Brief
**Version 1.0 — June 2026**
**Status: Pre-build. Awaiting entity formation and developer.**

---

## What You're Building

A browser-based AI operating system for the Lumi company. It has two functions:

1. **Blossom OS** — the founder's internal admin platform: persistent multi-agent chat, backlog, threads, decisions, and session memory. The founder's primary interface for running the company with AI assistance.

2. **Lumi Ops Platform** — the same shell, extended for the full team in Phase 1 and 2. Co-founders, contractors, and advisors log in and use the same system. Agents activate as the team grows.

These are not two separate projects. They are one platform built in two stages. Everything built for Blossom in Stage 1 is used and extended in Stage 2. No throwaway code.

---

## Design Reference

The visual design, layout, and interaction patterns are fully specified in a working HTML/CSS prototype located at:

```
/blossom-platform.html
```

This file is the source of truth for:
- Color tokens and typography
- All five view layouts (Today, Threads, Decisions, Agents, Files)
- Component inventory (cards, pills, bubbles, agent avatars, modals)
- Animation patterns (Blossom character, agent floats, transitions)
- Interaction patterns (⌘K palette, keyboard nav, toasts, quick-asks)

The developer's job is to make this prototype real — not redesign it. Aesthetic direction is locked. Functionality is what gets added.

---

## Technical Stack

Every choice below prioritizes: (1) developer speed, (2) low operational cost, (3) ability to hand off to a new developer if needed. No exotic choices.

### Frontend
| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | **Next.js 14** (App Router) | Full-stack in one repo, deploys to Vercel in one step, every React developer knows it |
| Styling | **Tailwind CSS** | Fast, consistent, maps directly to the existing CSS token system in the prototype |
| State | **Zustand** | Lightweight, simple, no boilerplate — sufficient for this scale |
| Streaming | **Vercel AI SDK** | First-class Claude API streaming, `useChat` hook handles 90% of the chat interface |

### Backend
| Layer | Choice | Reason |
|-------|--------|--------|
| Runtime | **Next.js API Routes** | Co-located with frontend, no separate server to manage |
| AI | **Anthropic Claude API** | Direct SDK, no wrapper. Key stays server-side only |
| Auth | **Clerk** | Fastest auth setup, multi-device sync, easy to add team members later |
| Database | **Supabase** (Postgres) | Hosted, free tier covers Phase 0–1, Postgres means real queries |
| ORM | **Prisma** | Type-safe, readable schema, migrations are simple |

### Deployment
| Layer | Choice | Reason |
|-------|--------|--------|
| Hosting | **Vercel** | One-command deploy, auto-deploys on git push, free tier is sufficient |
| Database | **Supabase** hosted | Free up to 500MB, no DevOps required |
| Domain | **[brand].com** or **app.[brand].com** | Register after entity formation |
| Environment | `.env.local` (dev) → Vercel env vars (prod) | Standard Next.js pattern |

### No-goes
- No Docker at this stage — adds complexity with no benefit for one developer
- No GraphQL — REST API routes are sufficient
- No Redis — Postgres handles session/cache needs at this scale
- No microservices — monorepo until headcount justifies splitting

---

## Database Schema

```sql
-- Users (managed by Clerk, mirrored here for relations)
users
  id            uuid PRIMARY KEY
  clerk_id      text UNIQUE NOT NULL
  email         text NOT NULL
  role          text DEFAULT 'founder'   -- founder | cofounder | contractor | advisor
  created_at    timestamptz DEFAULT now()

-- Agent definitions (Blossom, Sage, Reed, etc.)
agents
  id            uuid PRIMARY KEY
  name          text NOT NULL            -- "Blossom", "Sage", etc.
  slug          text UNIQUE NOT NULL     -- "blossom", "sage", etc.
  role          text NOT NULL            -- "Admin Orchestrator", "Research & Strategy"
  system_prompt text NOT NULL            -- full system prompt from admin-assistant.md
  model         text NOT NULL            -- "claude-sonnet-4-6", "claude-haiku-4-5"
  escalate_to   text                     -- model to escalate to
  phase         integer DEFAULT 0        -- 0 = always active, 1 = on-demand, 2 = dormant
  status        text DEFAULT 'active'    -- active | idle | dormant
  avatar_svg    text                     -- SVG string for the character icon
  updated_at    timestamptz DEFAULT now()

-- Conversation sessions
sessions
  id            uuid PRIMARY KEY
  user_id       uuid REFERENCES users(id)
  title         text                     -- auto-generated or founder-named
  date          date NOT NULL
  summary       text                     -- Blossom's session-end summary (written at close)
  status        text DEFAULT 'open'      -- open | closed
  created_at    timestamptz DEFAULT now()
  closed_at     timestamptz

-- Messages
messages
  id            uuid PRIMARY KEY
  session_id    uuid REFERENCES sessions(id)
  agent_id      uuid REFERENCES agents(id)  -- null if from user
  role          text NOT NULL            -- "user" | "assistant"
  content       text NOT NULL
  agent_slug    text                     -- which agent sent this
  tokens_used   integer
  created_at    timestamptz DEFAULT now()

-- Threads (named workstreams)
threads
  id            uuid PRIMARY KEY
  title         text NOT NULL
  body          text                     -- current state description
  status        text DEFAULT 'active'    -- active | waiting | queued | blocked | done
  track         text                     -- validation | formation | product | team | ops
  pinned        boolean DEFAULT false
  agent_slugs   text[]                   -- which agents are involved
  blocked_by    text                     -- named blocker if status = blocked
  created_at    timestamptz DEFAULT now()
  updated_at    timestamptz DEFAULT now()

-- Decisions
decisions
  id            uuid PRIMARY KEY
  title         text NOT NULL
  body          text NOT NULL
  tier          integer NOT NULL         -- 1 = Blossom executes | 2 = recommend | 3 = founder only
  status        text DEFAULT 'open'      -- open | resolved | deferred
  priority      text DEFAULT 'normal'    -- urgent | high | normal | low
  blocked_by    text
  resolved_at   timestamptz
  resolution    text                     -- what was decided
  created_at    timestamptz DEFAULT now()

-- Backlog items
backlog_items
  id            uuid PRIMARY KEY
  title         text NOT NULL
  track         text NOT NULL            -- validation | formation | product | team | ops
  status        text DEFAULT 'idea'      -- idea | queued | active | blocked | done
  next_action   text
  owner         text DEFAULT 'founder'
  blocked_by    text
  moscow        text                     -- must | should | could | wont
  phase         integer DEFAULT 0
  created_at    timestamptz DEFAULT now()
  updated_at    timestamptz DEFAULT now()

-- Session memory (for context retrieval)
memory_entries
  id            uuid PRIMARY KEY
  session_id    uuid REFERENCES sessions(id)
  type          text NOT NULL            -- decision | milestone | context | risk
  content       text NOT NULL
  embedding     vector(1536)             -- pgvector for semantic search (Phase 2)
  created_at    timestamptz DEFAULT now()
```

---

## Agent Architecture

Each agent is a system prompt + model assignment stored in the `agents` table. When the user sends a message, the server:

1. Loads the active agent's system prompt
2. Retrieves the last N messages from this session + the session summary
3. Appends relevant memory entries (decisions made, open threads) as context
4. Sends to Claude API with streaming enabled
5. Streams response back to the browser token by token
6. Stores the completed message in the `messages` table
7. Updates token count

**Agent routing:** Blossom decides which sub-agent to consult based on the message content. She can either handle it herself or trigger a sub-agent consultation (which the UI shows as "consulting Sage…"). This is implemented as a tool call or a structured Blossom response that includes a routing instruction.

**System prompt construction (per request):**
```
[Agent system prompt from DB]
[Session context: date, phase, active threads summary]
[Open decisions (abbreviated)]
[Last 20 messages]
[User message]
```

**Token management:**
- Haiku-tier agents: max 8,000 input tokens
- Sonnet-tier agents: max 16,000 input tokens
- Session summaries keep the history compressed — older sessions are summarized, not fully loaded

---

## Memory Architecture

This is the most important architectural decision. Get it right and Blossom remembers everything. Get it wrong and every session starts cold.

### Session-level memory (immediate)
Every message is stored. The current session loads in full. This is the conversation context.

### Cross-session memory (persistent)
At session close, Blossom writes a structured summary:
```json
{
  "date": "2026-06-05",
  "decisions_made": ["Jelex confirmed as brand name"],
  "threads_updated": ["Naming → Done", "Entity Formation → Active"],
  "open_questions": ["Spanish pronunciation test needed"],
  "next_session_start": ["Answer: did pronunciation test pass?"]
}
```

This summary is loaded at the next session start. The founder never has to re-explain context.

### Long-term retrieval (Phase 2 upgrade)
Once the volume of sessions grows, add `pgvector` to Supabase for semantic search. Blossom can retrieve relevant past decisions and context by similarity, not just recency. This is a database extension — no application code changes required.

---

## File Structure

```
lumi/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Clerk auth routes
│   ├── (platform)/               # Main app routes
│   │   ├── today/                # Today view
│   │   ├── threads/              # Threads view
│   │   ├── decisions/            # Decisions view
│   │   ├── agents/               # Agent roster view
│   │   └── files/                # Files view
│   ├── api/
│   │   ├── chat/route.ts         # Claude API streaming endpoint
│   │   ├── agents/route.ts       # Agent CRUD
│   │   ├── threads/route.ts      # Thread management
│   │   ├── decisions/route.ts    # Decision management
│   │   ├── backlog/route.ts      # Backlog management
│   │   └── session/route.ts      # Session open/close/summarize
│   └── layout.tsx                # Root layout with Clerk provider
│
├── components/
│   ├── blossom/                  # Blossom character (animated CSS)
│   ├── chat/                     # Message bubbles, input bar, thinking indicator
│   ├── agents/                   # Agent cards, mini avatars, roster
│   ├── threads/                  # Thread cards, search, filters
│   ├── decisions/                # Decision cards, action buttons
│   ├── sidebar/                  # Nav, status pill, character wrap
│   ├── right-panel/              # Progress bars, activity feed, budget
│   └── ui/                       # Toast, command palette, tooltip, badge
│
├── lib/
│   ├── claude.ts                 # Anthropic SDK wrapper
│   ├── agents.ts                 # Agent loading, routing logic
│   ├── memory.ts                 # Session summary, context retrieval
│   └── db.ts                     # Prisma client
│
├── prisma/
│   ├── schema.prisma             # Full schema (above)
│   └── seed.ts                   # Seed agents from admin-assistant.md
│
├── agents/
│   └── admin-assistant.md        # Source of truth for agent profiles
│
└── blossom-platform.html         # Design spec (read-only reference)
```

---

## Development Phases

### Stage 1 — Blossom OS (3 weeks, one developer)

**Week 1: Foundation**
- [ ] Next.js scaffold with Clerk auth
- [ ] Supabase setup, Prisma schema, migrations
- [ ] Vercel deploy pipeline (push → live in 60 seconds)
- [ ] HTML prototype converted to React components (no API yet — static)
- [ ] All 5 views navigable with real routing

**Week 2: AI Integration**
- [ ] Claude API streaming via Vercel AI SDK
- [ ] Blossom system prompt loaded from database
- [ ] Chat sends and receives real responses
- [ ] Message history persisted to Supabase
- [ ] Thinking indicator shows during API call
- [ ] Agent routing: Blossom can trigger sub-agent consultation

**Week 3: Memory + Live Data**
- [ ] Session open/close flow with Blossom's session-end protocol
- [ ] Session summary written to DB on close
- [ ] Next session loads prior summary as context
- [ ] Threads, Decisions, Backlog are real (editable, persistent)
- [ ] Morning brief generated from live data, not hardcoded
- [ ] Progress bars and activity feed pull from DB

**Deliverable:** Working Blossom OS. Founder can use it as primary interface.

---

### Stage 2 — Team Platform (Phase 1, with technical co-founder)

- Multi-user: co-founders each have accounts, different role permissions
- Slack integration: Blossom posts session wraps to a channel
- GitHub integration: backlog items link to issues
- Mobile-responsive: works on phone when away from Mac
- Lumi product workspace: separate agent context for product/design work

---

## Environment Variables

```bash
# Claude API
ANTHROPIC_API_KEY=

# Supabase
DATABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/today

# App
NEXT_PUBLIC_APP_URL=https://app.[yourdomain].com
```

---

## Cost Estimate (Monthly, at full use)

| Service | Tier | Cost |
|---------|------|------|
| Vercel | Hobby (free) | $0 |
| Supabase | Free tier | $0 |
| Clerk | Free (< 10,000 MAU) | $0 |
| Anthropic API | ~$0.003/message on Sonnet | $5–20 |
| Domain | Annual ÷ 12 | ~$1 |
| **Total** | | **~$6–21/month** |

When team grows past 3 people, Supabase Pro ($25/mo) and Vercel Pro ($20/mo) become appropriate. That's a Phase 1 decision.

---

## How to Hand This to a Developer

Give them:
1. This brief
2. `blossom-platform.html` (the design spec)
3. `agents/admin-assistant.md` (Blossom's system prompt — also the agent seed data)
4. Access to the GitHub repo (`elizabeth471/lumi`)
5. A Vercel account and a Supabase project (both free, takes 10 minutes to set up)

The first thing they should do: convert the HTML mockup to a static Next.js app and deploy it to Vercel. If they can do that in under 4 hours, they know what they're doing.

---

## What This Is Not

- Not a consumer app (no user accounts for parents or kids — that's Lumi, Phase 2)
- Not a public product (internal tool only, single-tenant for now)
- Not a chat wrapper around Claude (it's a full operating system — the AI is one component)
- Not something to build before entity formation (needs API billing)

---

*Brief prepared by Blossom — Lumi Admin Orchestrator*
*Last updated: June 5, 2026*
*Source of truth: `/agents/admin-assistant.md` + `/blossom-platform.html`*
