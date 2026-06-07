# Blossom — Technical Architecture Options (research, 2026-06-06)

Lightweight research pass (option 1: targeted web search + synthesis, **not** the full adversarial-verify harness). Confidence is **medium** — sourced mostly from vendor docs + 2026 blog posts; MCP custom connectors and the local-model ecosystem are **changing fast**, so re-verify before committing. Anti-bias note: this deliberately includes non-Anthropic and open-standard options.

## The five requirements (how we score each option)
- **R1 — Containment:** access limited to project dirs only; never sees personal files or learns from personal sessions.
- **R2 — Reach/surfaces:** custom "Blossom OS" web UI, official Claude Chrome extension, Claude Desktop, and/or terminal.
- **R3 — Cost:** economical.
- **R4 — Safety:** meets our standards (Hard Limits, no secret exposure, least privilege).
- **R5 — Not vendor-locked:** open standards / portable.

A recurring theme: **MCP is the portability layer.** Build Blossom's capabilities once as an MCP server scoped to `~/Documents/lumi`, and most clients below can consume it — which is what keeps you un-locked-in (R5) and contained (R1).

---

## Option 1 — Claude Code, project-scoped CLAUDE.md (terminal)
- **How:** Define Blossom only in `~/Documents/lumi/CLAUDE.md` (already exists); remove persona from global `~/.claude/CLAUDE.md`. Launch `claude` from the project dir. Native file tools.
- **R1 containment:** ✅ Strong — persona + work scoped to the project; personal sessions elsewhere are plain Claude. (This is the "reverse device-wide" move in STATUS decision #7.)
- **R2 surfaces:** Terminal only. **No** Blossom OS look.
- **R3 cost:** Your existing Claude Code subscription/usage; no extra infra.
- **R4 safety:** Strong — runs locally as you; native permission prompts.
- **R5 lock-in:** Medium — Anthropic client, but your files/playbooks are plain Markdown and portable.
- **Limit:** No GUI; it's the power-user surface. This is essentially what she is today.

## Option 2 — Claude Desktop + local (stdio) MCP server
- **How:** Add a filesystem (or custom) MCP server to `~/Library/Application Support/Claude/claude_desktop_config.json`, scoped to `~/Documents/lumi` only. Runs locally; Claude Desktop is the chat UI.
- **R1 containment:** ✅✅ Strongest practical option — "the filesystem server only grants access to the directories you explicitly list; Claude cannot access anything outside those paths." Use `--read-only` where possible.
- **R2 surfaces:** Claude Desktop app. **Cannot be reskinned** to look like Blossom OS.
- **R3 cost:** Free server (runs on the Mac); model usage on your plan.
- **R4 safety:** ✅✅ Nothing leaves the machine; least-privilege by directory scope; can sandbox in Docker.
- **R5 lock-in:** Medium-low — the MCP server is portable to any MCP client; only the Desktop UI is Anthropic.
- **Limit:** No custom UI. Best when you accept Claude's UI in exchange for cheap + very safe real file access.

## Option 3 — Remote MCP "custom connector" → official Claude Chrome extension / claude.ai
- **How:** Host an MCP server publicly; add it under Customize → Connectors in claude.ai/the extension.
- **R1 containment:** ⚠️ Data scoped if the server only exposes `~/Documents/lumi` — but it runs in your **personal** account context; persona containment in the browser is weak (you just don't invoke her there).
- **R2 surfaces:** The official Chrome extension / claude.ai. No bespoke UI.
- **R3 cost:** ✗ Needs a **public-internet-reachable** server (Claude calls it from Anthropic's cloud, not your Mac) → hosting or a tunnel, **plus OAuth 2.1 + PKCE** build.
- **R4 safety:** ⚠️ Highest attack surface — a publicly reachable file server. Safe **only** with OAuth, read-mostly scoping, no secrets.
- **R5 lock-in:** Low on the protocol (MCP is open), but tied to the Claude client for this surface.
- **Limit:** Most work, most exposure. Free plan allows only 1 custom connector. Beta.

## Option 4 — Messages API + hand-rolled tools in the self-hosted Next.js app (current Blossom OS)
- **How:** Extend the existing `/api/chat` route with tool-use; execute tools (read/write `~/Documents/lumi`, run playbooks) in your server code.
- **R1 containment:** ✅ You control exactly which dirs/tools the server touches.
- **R2 surfaces:** ✅✅ **This is the only path that gives the real "Blossom OS" look** — it's your own UI.
- **R3 cost:** API tokens (sonnet-4-6 ≈ $3/$15 per 1M; opus-4-8 ≈ $5/$25); leanest token use because you put only the tools you need in context. Hosting = the existing local app / tunnel / Vercel.
- **R4 safety:** ✅ Full control; enforce Hard Limits in code.
- **R5 lock-in:** Medium — Anthropic API, but swappable (the app could call other providers; see Option 6).
- **Limit:** You build and maintain the agent loop and tool layer yourself.

## Option 5 — Anthropic Managed Agents
- **How:** Anthropic hosts the agent loop **and** a per-session container where file/bash tools run; supports MCP, skills, memory stores, SSE events.
- **R1 containment:** ✅ Memory stores + scoped resources; but data lives in Anthropic's cloud, not your Mac.
- **R2 surfaces:** No consumer UI — it's a backend; you'd build a UI on top (could be the Blossom OS look).
- **R3 cost:** Model tokens + hosted infra; pricier than local.
- **R4 safety:** Strong infra, but **off-device** — conflicts with "dedicated device / local-first" if that's a hard value.
- **R5 lock-in:** ✗✗ **Highest** — proprietary Anthropic agent API.
- **Limit:** Purpose-built for hosted, autonomous agents; overkill + lock-in for a local-first personal agent.

## Option 6 — Self-hosted chat UI (LibreChat / Open WebUI) + Claude API and/or local models + MCP
- **How:** Run **LibreChat** (or Open WebUI) on the Mac. It speaks to Anthropic, OpenAI, Google, **and local Ollama** behind one UI, and integrates **MCP** tool servers.
- **R1 containment:** ✅ MCP server scoped to the project; self-hosted.
- **R2 surfaces:** A polished web chat UI with **basic branding** (title/logo/welcome) — *partial* Blossom OS look, not a bespoke dashboard. (Branding extent uncertain — verify.)
- **R3 cost:** Free/open-source app; pay only for whatever model you call (or $0 with local models).
- **R4 safety:** ✅ Self-hosted; OAuth/SAML/2FA available.
- **R5 lock-in:** ✅✅ **Lowest** — provider-agnostic by design; swap Claude ↔ local model from a dropdown. Best fit for "not Anthropic-exclusive." (LibreChat's MCP support is stronger than Open WebUI's.)
- **Limit:** Another service to run/update; not your exact custom UI.

## Option 7 — Local open models (Ollama / LM Studio / llama.cpp) as the model backend
- **How:** Run an open model locally; drive tools via an MCP bridge (Ollama has **no built-in MCP** as of 2026 — needs MCPHost / ollama-mcp-bridge / a custom client). Pair with Option 6's UI or a custom app.
- **R1 containment:** ✅✅ Everything local.
- **R2 surfaces:** Whatever UI you pair it with.
- **R3 cost:** ✅✅ **$0 inference** after hardware; no per-token cost.
- **R4 safety:** ✅✅ Fully offline-capable; nothing leaves the Mac.
- **R5 lock-in:** ✅✅ None.
- **Limit:** **Capability gap** — best local models (Qwen2.5-Coder-32B ~84% tool-calling, Gemma/Qwen3.5 improving) still trail Opus/Sonnet on hard reasoning + long-horizon agentic work. Needs a capable Mac. The current STATUS already notes "open models on this hardware aren't there yet."

## Option 8 — Open agent framework (LangGraph / CrewAI) as orchestration behind a custom UI
- **How:** Use a framework to run Blossom's multi-step logic + sub-agents; expose via your own UI; call any model (Claude or local); consume MCP tools.
- **R1 containment:** ✅ You control tools and dir scope.
- **R2 surfaces:** ✅ Build any UI (could be the Blossom OS look).
- **R3 cost:** Framework free; pay model usage.
- **R4 safety:** ✅ Full control.
- **R5 lock-in:** ✅ Low — model- and provider-agnostic; **LangGraph** has the deepest MCP integration of the big three. (AutoGen is now in maintenance mode → Microsoft Agent Framework; CrewAI active.)
- **Limit:** Most engineering. Overlaps heavily with what Blossom OS already hand-rolls; adopt only if orchestration complexity grows.

---

## Comparison matrix

| Option | R1 Contain | R2 Surfaces | R3 Cost | R4 Safety | R5 Open | "Blossom OS" look? |
|---|---|---|---|---|---|---|
| 1. Claude Code (project CLAUDE.md) | ✅ | terminal | $ | ✅ | ◐ | ✗ |
| 2. Claude Desktop + local MCP | ✅✅ | Desktop | $ | ✅✅ | ◐ | ✗ |
| 3. Remote MCP connector (extension) | ⚠️ | extension/web | $$ (host+OAuth) | ⚠️ | ◐ | ✗ |
| 4. Messages API + Next.js app | ✅ | **custom UI** | $$ tokens | ✅ | ◐ | ✅✅ |
| 5. Managed Agents | ✅ (off-device) | build-your-own | $$$ | ✅ (cloud) | ✗✗ | ◐ |
| 6. LibreChat/Open WebUI + MCP | ✅ | web UI | $/free | ✅ | ✅✅ | ◐ (branding) |
| 7. Local models (Ollama) | ✅✅ | pair w/ UI | **free** | ✅✅ | ✅✅ | (depends) |
| 8. LangGraph/CrewAI + custom UI | ✅ | **custom UI** | $$ tokens | ✅ | ✅ | ✅ |

Legend: ✅✅ excellent · ✅ good · ◐ partial · ⚠️ caution · ✗ no · $ cheap → $$$ pricier.

## Reading of the field (not a decision — for circle-back)
- **Containment (R1) is solved the same way everywhere:** an MCP server (or app tool layer) scoped to `~/Documents/lumi` + project-scoped persona. Do this regardless of surface.
- **The real fork is the UI ↔ effort/lock-in tradeoff:**
  - Want it **cheap + very safe now, accept Claude's UI** → Option 2 (Desktop + local MCP).
  - Want the **true Blossom OS look** → Option 4 (your app) or Option 8 (framework + custom UI).
  - Want **maximum portability / not Anthropic-locked** → Option 6 (LibreChat) and/or Option 7 (local models), with Claude as one selectable backend.
- **Build the MCP server once** and it serves Options 2, 3, 6, 7, 8 — so that's the highest-leverage first build whenever you decide to proceed.

## Flagged uncertainties (verify before committing)
- Custom connectors are **beta** and the public-server/OAuth requirement may evolve.
- LibreChat/Open WebUI **custom-branding depth** not confirmed (title/logo likely; full bespoke dashboard unlikely).
- Local-model tool-calling reliability is **improving monthly** — re-benchmark near decision time.
- Sourced from secondary blogs + vendor docs; treat capability claims as medium-confidence.
