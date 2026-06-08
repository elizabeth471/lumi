# Push-to-Talk Setup Playbook

**Status:** NOT working. Drafted config only — never verified end-to-end.

⚠️ **Correction (2026-06-07):** A prior note logged this as "config ready / ~60% done." That was false. The `Cmd+Shift+V` keybinding points at a `"command": "push-to-talk"` that does not exist in Claude Code, and the `voice` block in settings.json is invented config the harness ignores. Whisper is installed and the keybinding line exists, but they connect to nothing. **Claude Code keybindings map to built-in actions, not arbitrary shell scripts — there is no native path to inject live mic transcription into a running CLI session.** Real voice input requires an external bridge (a wrapper that owns the mic + Whisper and feeds the Agent SDK directly), not a config tweak. See [[verified-done]].

## Overview
Enables Eli & Ian to speak directly to Blossom in real time. When activated, pressing `Cmd+Shift+V` starts recording; release to stop. Blossom transcribes the audio (locally via Whisper), responds in text + voice.

## Architecture
- **Hotkey:** `Cmd+Shift+V` (configurable)
- **Audio capture:** macOS system audio via local MCP server
- **Speech-to-text:** OpenAI Whisper (runs locally, audio stays on device)
- **Response:** Claude processes text, Kokoro TTS plays reply back
- **Visual feedback:** "Listening..." indicator in UI + hotkey LED (if available)

## Config Location
- Hotkey binding: `~/.claude/keybindings.json`
- Whisper setup: `~/.claude/settings.json` (voice section)
- Boot script trigger: `~/blossom-voice/push-to-talk.sh`

## Safety defaults
- **Push-to-talk only** — no always-on listening
- **Local processing** — Whisper runs on this Mac, audio never transmitted
- **Auto-timeout** — recording caps at 60s per message
- **Clear indicator** — "Listening..." shown whenever mic is active
- **No background capture** — mic silent when hotkey is released

## Activation checklist
- [ ] Ian confirms: "Yes, set up push-to-talk for voice input"
- [ ] Whisper binary installed (`brew install openai-whisper`)
- [ ] Hotkey tested (`Cmd+Shift+V` triggers recording)
- [ ] Kokoro TTS response working (already verified)
- [ ] Visual "Listening..." indicator shows in app
- [ ] Test end-to-end: press hotkey → speak → Blossom transcribes + replies

## Next steps (after Ian's go-ahead)
1. Install Whisper if not present
2. Configure hotkey in `keybindings.json`
3. Wire MCP audio server
4. Test end-to-end
5. Document in `admin-assistant.md` as standard Blossom capability
