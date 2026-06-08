# Verified-Done — status discipline

**One rule:** A capability is "done" only after it has run end-to-end at least once and been observed working. Until then it is **drafted**, never **ready** or **done**.

## Why this exists
The push-to-talk failure (2026-06-07): a voice-input hotkey was logged as "✅ config ready / ~60% done" because config files existed. Nobody had pressed the key. The keybinding pointed at a command that doesn't exist; the settings block was invented config the harness ignored. The ✅ then traveled forward across two sessions as inherited truth until it was finally tested and found to be vapor.

Root cause: **status was assigned by artifact, not by behavior.** The existence of a file is not evidence the thing works.

## The checks (run these, don't skip)
1. **Behavior over artifact.** Never mark something done because a file, config line, or script *exists*. Done = exercised end-to-end and observed working.
2. **Verify platform support before building against it.** Before writing config for a mechanism (a Claude Code keybinding, a settings key, an API, an OS hook), confirm the platform actually supports that mechanism. A 2-minute "does this exist?" check kills bad assumptions on day one.
3. **The end-to-end test gates the checklist — it is not the last box.** If "test it works" is the final item, every item above it can be checked while the thing is broken. Order checklists so nothing upstream is "done" until the test passes.
4. **Status language in handoffs is precise.** Use three states only: **verified** (ran, worked), **drafted** (built, untested), **planned** (not built). No bare ✅ without verification. Optimistic status compounds — the next session inherits it without re-checking.
5. **Re-verify inherited claims before relaying them.** A prior session's "done" is a claim, not a fact. Check before repeating it to Eli or Ian.

## Scope
General — applies to any capability, integration, or infra task, on Lumi or any future project. This is method knowledge, not Lumi-specific.
