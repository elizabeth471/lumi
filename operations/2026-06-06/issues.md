---
date: 2026-06-06
type: issues
---

# Issues — June 6, 2026

## Resolved
- **Admin console threw an error** — `console.anthropic.com` has moved to `platform.claude.com`; opened the new URL.
- **API curl failed (env vars unset)** — stored the working API key at `~/.anthropic/api_key` (chmod 600) and created `~/ask-claude.sh` so the key never needs to be pasted again.
- **No Chrome; Safari was default** — installed Chrome from the DMG and set it as the system default browser.
- **Mockup was a static file, not an app** — scaffolded Next.js and converted it to a running app with real routing.

## Tabled (revisit later)
- **Rotate the API key pasted into chat** — Ian is fine continuing for now. *Revisit when the Anthropic org/Business account is set up.*
- **Admin API key + org key listing** (`~/anthropic-keys.sh`) — needs an org admin key Ian doesn't have yet. *Revisit after Business plan.*
- **Meadow has no profile file** — appears in the UI roster but no `agents/meadow.md`. *Revisit next session (Ian's call).*
- **Run Blossom fully locally with strong reasoning** — open models on this hardware aren't there yet. *Revisit as open-weight models improve; keep architecture model-agnostic.*
- **Wire live Claude API (Week 2) + persistent memory (Week 3)** — sequenced after the static Week 1 build. *Revisit next build session.*
