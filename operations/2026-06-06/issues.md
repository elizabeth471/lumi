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
- **Chat wasn't real** — wired the live Claude API (`/api/chat`, claude-sonnet-4-6 + her profile as system prompt); the Today chat now streams real Blossom responses (Week 2).
- **Meadow had no profile file** — created `agents/meadow.md` (Customer Voice), matching the sub-agent format; roster is now complete and consistent.
- **UI/UX accessibility gaps** — applied a verified accessibility pass from an external audit: semantic landmarks + headings, ARIA labels, skip link, `aria-current`, `role="log"`/`status`, combobox roles, contrast tokens, 44px nav targets, `prefers-reduced-motion`, per-route titles.

- **Vercel 404 on deployment** — build completed in 36ms with no output because Vercel wasn't detecting Next.js. Fixed by adding `vercel.json` with explicit framework + build command. Deployed via Vercel CLI (`vercel --prod`). **https://lumi-snowy.vercel.app** is now live.
- **Chrome extension not connecting to Blossom** — intermittent all session; browser tools unavailable to Blossom the entire session. Restarting device to see if it resolves.

## Tabled (revisit later)
- **Rotate the API key pasted into chat** — Ian is fine continuing for now. *Revisit when the Anthropic org/Business account is set up.*
- **Admin API key + org key listing** (`~/anthropic-keys.sh`) — needs an org admin key Ian doesn't have yet. *Revisit after Business plan.*
- **Persistent memory (Week 3)** — chat resets on reload; wire session memory + feed the `operations/` log back in. *Next big build item.*
- **UI/UX audit — deferred polish** — SVG nav icons, markdown rendering in Files, skeleton/loading states, profile-switch dropdown, mobile/responsive pass, `/design` token route, status-colour system. *Scoped follow-ups, lower priority than Week 3.*
- **Run Blossom fully locally with strong reasoning** — open models on this hardware aren't there yet. *Revisit as open-weight models improve; keep architecture model-agnostic.*
- **Wire live Claude API (Week 2) + persistent memory (Week 3)** — sequenced after the static Week 1 build. *Revisit next build session.*

## Update — late 2026-06-06
- ✅ **Claude Desktop file-MCP "not loading"** — RESOLVED. Root cause: config was in `~/Library/Application Support/Claude/` but this build reads `Claude-3p/`. Moved it; now connected + scoped to `~/Documents/lumi`. (Not a build/sandbox limit — just the wrong file.)
- ✅ **Blossom had no voice** — adopted Kokoro (local neural TTS), persistent warm server + boot greeting via LaunchAgents.
- 🔶 **Chrome extension** — root cause is NOT a config bug: **account-type mismatch.** Claude-in-Chrome requires a consumer Claude.ai paid plan; this Mac is console/API ("custom3p"). Not fixable by reconfiguring or adding API credits — only by logging into a paid consumer plan. Re-test post-reboot whether the 23:10 claude.ai login changes anything (unlikely unless it's paid).
