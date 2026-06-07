# Wishlist — Future Blossom Capabilities & Playbooks

Backlog of capabilities and playbooks to build *when needed*. Maintained per the **Self-Update & File Maintenance Protocol**: entries are added when a need is identified, refined before they're built, and removed once implemented (graduated into `agents/` or a `playbooks/` file). An item being here means "worth building later," not "build now."

---

## Product Assessment Protocol

**Status:** Wishlist — build when we evaluate the next product idea after LightTroupeKids.

**Purpose:** A reusable, repeatable protocol Blossom runs to evaluate a *new* product idea before Eli and Ian commit time or money — so each new idea is vetted faster and more rigorously than the last. This is the operational expression of *Purpose of Blossom OS*: the method (assess → decide → build, efficiently, with AI agents) is the constant; the product is the variable. LightTroupeKids is the first product run through the system, not the last.

**Why it's needed:** LightTroupeKids was the first idea and it wasn't run through a structured gate — the naming-without-trademark-check failure is exactly what happens without one. Future ideas should never start from zero; they should pass through a known, improving checklist that gets sharper each time.

**Intended shape (to refine before building):**
1. **Problem & demand** — Who has the problem, how acute is it, and what *evidence* says it's real (not assumed)? Require real signal before any build.
2. **Market & competition** — Sage scans the landscape: who already exists, where the gaps are, why now. Label verified vs. inferred.
3. **Feasibility by AI agents** — Can this be built efficiently by the agent team plus minimal humans? Rough build cost and time. (Directly serves the "built as efficiently as possible by AI agents" goal.)
4. **Safety & regulatory gate** — If it touches children, personal data, health, or money → Willow/COPPA and legal flags come *first* and can stop the idea. Non-negotiable.
5. **Differentiation & moat** — Why this, why us, why now.
6. **Business model & unit economics** — Moss: can it sustain itself / make money?
7. **Kill criteria** — The specific evidence that would make us stop, defined up front so it can't be rationalized away later.
8. **Go / No-Go** — Delivered in the Tier-2 format: recommendation, confidence, key assumptions, strongest counterargument, what would change the call, and a clear decision prompt. The decision stays with Eli and Ian.

**Efficiency target:** each run reuses and sharpens the prior run's template, scans, and heuristics — the protocol should get measurably faster and sharper with every product assessed. That improvement curve *is* the point of Blossom OS.

---

## Scheduled Proactivity (autonomous routines)

**Status:** Wishlist — build if/when a self-firing cadence is wanted.

**Purpose:** Let Blossom run on a clock — via Claude Code routines / `/schedule` — not only when a session is opened. The motivating example is a weekday-morning brief and an end-of-day recap that execute whether or not Eli or Ian are at the machine. This is the one "Ron / RonOS" capability Blossom currently lacks; everything else Ron has (file-access vault, persistent memory, cross-domain synthesis, persona/voice, coaching, reusable playbooks) she already has.

**Why it's needed:** Today her proactivity is *session-triggered* — it fires when a human opens her. She can't surface the morning brief or guarantee the end-of-day operations log on her own; if no one opens a session, nothing runs.

**Intended shape (to refine before building):**
1. Routines should **trigger Blossom's existing protocols**, not introduce a parallel system. The cron is just a clock; the work is still the Daily Operations Log Protocol and the brief.
2. **Morning brief** — read the latest `operations/<date>/` state + `STATUS.md`, write that day's `brief.md`, surface what changed and the top decisions awaiting Eli/Ian.
3. **End-of-day recap** — ensure the Daily Operations Log + `eod.md` are written (belt-and-suspenders on the existing protocol).
4. **Constraints:** change nothing in `~/.claude/CLAUDE.md`, the SessionStart/PreCompact hooks, or `agents/`. Verify with `/schedule list` and a dry `/schedule run`.

---

## MCP Server for Blossom OS (evaluate)

**Status:** Wishlist — evaluate; **not** needed for the current single-app, local-first setup.

**Purpose:** Decide whether to expose Blossom's tools/resources (operations log, naming protocol, sub-agent roster, repo files) via a **Model Context Protocol** server, so multiple clients (the app, Claude Desktop, Claude Code, a future hosted app) share one tool layer instead of each reimplementing it.

**Why it would earn its place (the cases that justify it):**
- **Bridging the *hosted* app to local tools/data** — a Vercel-hosted app can't reach this Mac's file system; an MCP server is one way to bridge that gap (ties to the "official link" task).
- **Reuse across clients** — the same tools available to the app, Claude Desktop, and Claude Code without duplicating handlers.
- **External data sources** (calendar, email, GitHub) behind one standard interface.

**Current decision / default:** Stick with the **API route** (`/api/chat` + Messages API tool use) to make the app's chat able to *act*. It's the direct, lowest-cost, lowest-infra path for a single local app. Adopt MCP only once ≥2 clients or external-data integration is the real need. MCP is a *tool-exposure protocol*, not a chat UI or model — it still needs an LLM client driving it, so it adds a layer rather than replacing the route.

**Intended shape (to refine before building):** an MCP server exposing read/write tools for the ops log + playbooks; the app's chat gains an MCP client; auth + hosting decided alongside the official-link task.
