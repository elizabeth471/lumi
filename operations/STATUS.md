# Blossom OS — Current Platform State (authoritative ground truth)

_Updated 2026-06-06. This is the real state of the app/repo. Do NOT speculate about what's built — rely on this._

## Built & working
- Next.js app; all views live locally: **Today** (dashboard + team briefing + live chat), **Projects**, **Threads**, **Decisions**, **Costs**, **Agents**, **Files**.
- **Live Claude chat** (`claude-sonnet-4-6`) — real, not a mockup. Local machine only.
- **Memory loop works**: chat persists locally, loads the last day's summary on open (carry-forward), and **Session Wrap** writes a summary.
- **Projects system**: Blossom OS (priority), LightTroupeKids, Benchlife, Beast Academy, Open Authoring Kit + "New project".
- **Cost tracker** (`/costs`): MacBook $2,149.99 logged; Claude costs still pending figures.
- **Operations log is initialized** at `operations/<date>/`; `playbooks/` exists (Naming Protocol, with Blossom OS + LightTroupeKids runs logged).
- **Device-wide Blossom**: global `~/.claude/CLAUDE.md` + SessionStart/PreCompact hooks.
- **Official shareable link deployed and working**: **https://lumi-snowy.vercel.app/** — stable, always-on. All views functional. Live chat requires API key as Vercel env var (separate task, not yet done). Deployed via Vercel CLI (`vercel --prod`) with `vercel.json` explicitly setting Next.js framework.

## Open — waiting on Eli/Ian
- Entity/registration + attorney trademark clearance ("Blossom" internal-only; public name TBD; LightTroupeKids is the proposed public brand for the kids product, pending pronunciation test + attorney clearance).
- API key rotation.
- Claude cost figures.
- Per-project separation design decisions (see *Next tasks* #2 for details).

## Next tasks (queued — added 2026-06-06)

### 1. ✅ DONE — Official shareable link
Deployed to **https://lumi-snowy.vercel.app/** (2026-06-06). UI demo is live. Live chat rebuild queued but not in scope for this task.

### 2. Per-project separation across the platform (CURRENT PRIORITY)
Scope **everything** in the app to its project so Blossom OS / LightTroupeKids / Benchlife / Beast Academy / Open Authoring Kit never bleed together. Today the Projects list exists, but threads, decisions, costs, files, and briefs are not cleanly partitioned per project.
- **Goal:** every artifact carries a `projectId`; each view (Threads, Decisions, Costs, Files, Today brief) filters to the active project; a clear project switcher; "All projects" only where it genuinely helps.
- **Open design Qs (decide before build):** are **agents** shared across projects or project-scoped? Is the **operations log / memory** per-project or global with project tags? Is **chat** one stream filtered by project, or a separate thread per project?
- **Owners:** design pass (Blossom + Grove/Fern), then build. No external blocker — can start once the design Qs are answered.

## Decisions to circle back to (open — researching options, 2026-06-06)
_Eli/Ian deferred these pending more option research. Do NOT implement until decided._
- **Containment — reverse "device-wide" → project-scoped Blossom?** (decision #7) Remove persona from global `~/.claude/CLAUDE.md`, keep `~/Documents/lumi/CLAUDE.md`; scope any MCP server to `~/Documents/lumi`. Goal: project work only; never learn from personal Claude sessions.
- **Access path for Blossom** — pick one or mix: (a) Claude Desktop + local MCP scoped to lumi (cheapest/safest, Claude's UI); (b) build the Blossom OS app UI + bridge to tools; (c) public remote-MCP custom connector for the official Claude Chrome extension (most exposure; needs OAuth + public host). Note: Claude Desktop **cannot** be reskinned to look like Blossom OS.
- **Anti-bias / fresh-research principle** (decision #8) — formalize in `admin-assistant.md`; guardrail edit → needs Ian.
- **Official shareable link** lane — A/B/C (see Next tasks #1).
- **Scheduled proactivity** + **MCP server (evaluate)** — see `docs/wishlist.md`.
- **Naming** — LightTroupeKids gates: multilingual pronunciation test (Thistle) + attorney TESS clearance. **NOTE:** the 'Kids' suffix is a NEW mark — re-run Sage's landscape scan on 'LightTroupeKids' (the prior scan was for 'LightTroupe').

## Known limits
- The in-app chat **cannot write repo files** — that's Claude Code in Terminal.
- Serving a production build means **code changes need a rebuild**.
