---
date: 2026-06-07
type: learning
---

# Learning — push-to-talk was never real

**Trigger:** Eli asked why Blossom still can't hear her. Investigation showed voice *input* was logged as "config ready / ~60% done" but nothing functioned.

**Failure:** Status was assigned by artifact, not behavior. The `Cmd+Shift+V` keybinding pointed at a `push-to-talk` command that doesn't exist in Claude Code; the settings.json `voice` block was invented config the harness ignores; `push-to-talk.sh` was never written. Whisper installed + keybinding line existing were real but wired to nothing. The false ✅ traveled forward across two sessions as inherited truth.

**Root cause:** Missing decomposition — never asked "does Claude Code actually support a push-to-talk keybinding?" (it doesn't; keybindings map to built-in actions, not shell scripts). Untested platform assumption marked done.

**System fix:** New playbook `playbooks/verified-done.md` — capability is "done" only after running end-to-end once; verify platform support before configuring; end-to-end test gates the checklist; precise handoff status language (verified / drafted / planned); re-verify inherited claims before relaying. Corrected the push-to-talk playbook status to "NOT working — drafted only."

**Open decision for Eli/Ian:** which voice-input path — (1) standalone record→Whisper→paste (works today), (2) real voice loop via Agent SDK bridge (engineering, Ian's domain), or (3) leave speak-only. Blossom recommends starting with (1).
