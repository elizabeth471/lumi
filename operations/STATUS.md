# Blossom OS — Current Platform State (authoritative ground truth)

_Updated 2026-06-06. This is the real state of the app/repo. Do NOT speculate about what's built — rely on this._

## Built & working
- Next.js app; all views live locally: **Today** (dashboard + team briefing + live chat), **Projects**, **Threads**, **Decisions**, **Costs**, **Agents**, **Files**.
- **Live Claude chat** (`claude-sonnet-4-6`) — real, not a mockup. Local machine only.
- **Memory loop works**: chat persists locally, loads the last day's summary on open (carry-forward), and **Session Wrap** writes a summary.
- **Projects system**: Blossom OS (priority), Lumi, Benchlife, Beast Academy, Open Authoring Kit + "New project".
- **Cost tracker** (`/costs`): MacBook $2,149.99 logged; Claude costs still pending figures.
- **Operations log is initialized** at `operations/<date>/`; `playbooks/` exists (Naming Protocol, with Blossom OS + LightTroupe runs logged).
- **Device-wide Blossom**: global `~/.claude/CLAUDE.md` + SessionStart/PreCompact hooks.
- **Shareable tunnel link** for Ian (chat is locked on the tunnel; only localhost chats live).

## Open — waiting on Eli/Ian
- Hosting decision (no Vercel account yet) for a permanent link.
- Entity/registration + attorney trademark clearance ("Blossom" internal-only; public name TBD; LightTroupe is a promising Lumi candidate pending clearance).
- API key rotation.
- Claude cost figures.

## Known limits
- The in-app chat **cannot write repo files** — that's Claude Code in Terminal.
- Serving a production build means **code changes need a rebuild**.
