# Mac Setup Guide — Blossom OS Desktop Integration

**Goal:** Make Blossom OS the center of your workspace. When you turn on your Mac, Blossom greets you and opens the platform. Your desktop reflects the Blossom aesthetic and always shows project progress.

---

## Part 1: Startup Greeting & Auto-Launch

**What happens:** Mac starts → Blossom greets you via voice → Asks who's logging in → Opens Blossom OS in browser

### Step 1: Create Startup Script

Create a file: `~/Library/LaunchAgents/com.lumi.blossom.startup.plist`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.lumi.blossom.startup</string>
    <key>ProgramArguments</key>
    <array>
        <string>/bin/bash</string>
        <string>/Users/[YOUR_USERNAME]/lumi/mac-startup.sh</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
```

**Replace:** `[YOUR_USERNAME]` with your actual Mac username (run `whoami` to find it)

### Step 2: Create Startup Script File

Create: `~/lumi/mac-startup.sh`

```bash
#!/bin/bash

# Blossom OS Startup Greeting
# This runs when your Mac starts

# Voice greeting (uses macOS say command)
say "Good morning. Blossom is ready."

# Wait for user response (optional interactive element)
# For now, just open Blossom OS

# Open Blossom OS in default browser
open "file:///Users/$(whoami)/lumi/blossom-platform.html"

# Optional: Also open Claude Code CLI (if installed)
# nohup claude > /dev/null 2>&1 &

exit 0
```

Make it executable:
```bash
chmod +x ~/lumi/mac-startup.sh
```

### Step 3: Install Launch Agent

```bash
# Create LaunchAgents directory if needed
mkdir -p ~/Library/LaunchAgents

# Copy plist file there (adjust path as needed)
cp ~/lumi/com.lumi.blossom.startup.plist ~/Library/LaunchAgents/

# Load it
launchctl load ~/Library/LaunchAgents/com.lumi.blossom.startup.plist

# Test it (this will run the script now)
launchctl start com.lumi.blossom.startup
```

### Step 4: Test Startup

Restart your Mac. When it boots:
- Blossom should greet you via voice ("Good morning. Blossom is ready.")
- Browser should open with Blossom OS loaded
- You can then log in

**Troubleshooting:**
```bash
# Check if launch agent is loaded
launchctl list | grep blossom

# Check for errors
log stream --predicate 'process == "launchd"' --level debug

# Unload if you need to change it
launchctl unload ~/Library/LaunchAgents/com.lumi.blossom.startup.plist
```

---

## Part 2: Desktop Aesthetic Integration

**Goal:** Make your Mac desktop reflect Blossom's brand and show project progress.

### Option A: Desktop Background

Set the Blossom OS as your desktop background using HTML+CSS wallpaper:

1. **Create a desktop app shortcut** (faster than browser)
   - Open Blossom OS in browser
   - Safari: File → Add to Dock (as web app)
   - Give it the name "Blossom OS"
   - Pin to dock for easy access

2. **Alternative: Use a custom background image**
   - Create a high-res Blossom-themed background (3440×1440 for ultrawide, 2560×1600 for standard)
   - Include: Blossom character, project progress summary, color scheme
   - System Preferences → Desktop & Screen Saver → Choose image

### Option B: Always-Visible Window (Recommended for Developer)

Use a tool like **Stickies** or **Übersicht** (free, open-source) to keep Blossom OS visible:

1. **Install Übersicht** (macOS widget system)
   ```bash
   brew install ubersicht
   ```

2. **Create a widget** that displays Blossom OS
   - This keeps your Blossom dashboard visible even when other windows are open
   - Can be positioned in corner or side of screen

3. **Alternative: Alfred** (if you use it)
   - Create an Alfred workflow that opens Blossom OS in a specific window position
   - Hotkey: `Cmd+Shift+B` opens Blossom OS always on top

### Option C: Multi-Monitor Setup (If You Have External Display)

**Left monitor:** Your code editor (VS Code) with Lumi repo  
**Right monitor:** Blossom OS always visible (full browser window)  
**Dock (bottom):** Quick access to terminal, chat, Blossom

---

## Part 3: Desktop Colors & Graphics

### macOS System Colors (Match Blossom Aesthetic)

Set your Mac to use Blossom's color palette:

**System Preferences → General:**
- Appearance: Light (matches Blossom's sand/cream palette)
- Accent Color: Green (matches Cactus green #5a8a50)

**System Preferences → Desktop & Screen Saver:**
- Choose a warm, earthy background (sand/forest tones)
- Or use a custom background with Blossom character

**System Preferences → Dock:**
- Position: Right side (keeps workspace uncluttered)
- Size: Medium (icons visible but not intrusive)
- Color theme: Match green accent

### Custom Blossom Desktop Icon

Create a custom app icon for Blossom OS:

1. **Find or create Blossom icon** (512×512 PNG)
   - Download from design files or create one
   - Use the Blossom cactus character

2. **Convert to macOS icon format**
   ```bash
   sips -i blossom-icon.png
   ```

3. **Apply to Blossom OS web app**
   - Right-click Blossom app in Dock
   - Get Info
   - Drag icon to "Icon" field
   - Done

---

## Part 4: Browser/Terminal Setup for Development

### Terminal Window Setup

Always have your terminal open with Lumi repo:

```bash
# Create an alias to quickly enter Lumi environment
echo 'alias lumi="cd ~/lumi && clear && claude"' >> ~/.zshrc
source ~/.zshrc

# Now just type "lumi" to enter the project
```

### VS Code Setup

```bash
# Open Lumi repo in VS Code
code ~/lumi

# Recommended extensions:
# - Markdown Preview (for briefs)
# - Git Graph (visualize commits)
# - Thunder Client (test APIs)
# - Tailwind CSS IntelliSense (for prototype)
```

### Browser Tabs Setup (for Morning)

Keep these pinned:
1. **Blossom OS** — `file:///Users/[username]/lumi/blossom-platform.html`
2. **GitHub** — `github.com/elizabeth471/lumi`
3. **Prototype** — `http://localhost:3000` (after npm run dev)
4. **Briefs** — GitHub markdown files

---

## Part 5: Voice Integration (Read-Aloud)

### Enable Blossom to Speak to You

When I need to get your attention:

```bash
# In my responses, I can trigger:
osascript -e 'say "Your message here"'
```

**Examples:**
- "Blossom troubleshooting protocol activated"
- "Ian is logging in now"
- "Agent completed their task"

### macOS Accessibility Settings

System Preferences → Accessibility → Speech:
- Default voice: "Alex" (friendly, clear)
- Rate: 0.5 (deliberate, easy to understand)
- Volume: 0.8 (noticeable but not intrusive)

---

## Part 6: Status Bar / Menu Bar Widget

### Quick Access Blossom from Menu Bar

Use **SwiftBar** (free, open-source) to add a Blossom status widget:

```bash
brew install swiftbar
```

Create script: `~/lumi/swiftbar-blossom.sh`

```bash
#!/bin/bash
echo "🌵 Blossom"
echo "---"
echo "Open Blossom OS | shell='open' param1='file:///Users/$(whoami)/lumi/blossom-platform.html'"
echo "Project Status | shell='cat' param1='~/lumi/SESSION-PROGRESS-JUNE-7.md'"
echo "Git Status | shell='cd ~/lumi && git status' terminal=true"
```

Add to SwiftBar → status widget in menu bar with one click

---

## Part 7: Quick Launch Commands

### Create Command-Line Shortcuts

Add to `~/.zshrc`:

```bash
# Blossom OS
alias blossom="open file:///Users/$(whoami)/lumi/blossom-platform.html"

# Prototype dev server
alias prototype-dev="cd ~/lumi/prototype && npm run dev"

# Project status
alias project-status="cat ~/lumi/SESSION-PROGRESS-JUNE-7.md"

# Troubleshooting
alias troubleshoot="cat ~/lumi/BLOSSOM-TROUBLESHOOTING-PROTOCOL.md"

# Enter Lumi environment with Claude Code
alias lumi="cd ~/lumi && claude"
```

Now use:
```bash
blossom          # Opens Blossom OS
prototype-dev    # Starts Next.js prototype
project-status   # Shows progress
troubleshoot     # Shows troubleshooting guide
lumi             # Opens Claude Code in lumi repo
```

---

## Part 8: Notifications & Alerts

### Get Alerted When Important Events Happen

Use **terminal-notifier** (Mac notifications):

```bash
brew install terminal-notifier
```

I can trigger:
```bash
terminal-notifier -title "Blossom" -message "Ian logged in" -sound Glass
```

---

## Startup Checklist

When you set up your Mac for Blossom:

- [ ] Created LaunchAgent plist file
- [ ] Created mac-startup.sh script
- [ ] Made script executable (chmod +x)
- [ ] Installed LaunchAgent (launchctl load)
- [ ] Tested on Mac restart
- [ ] Added Blossom to Dock
- [ ] Set system colors to match palette
- [ ] Added terminal aliases (~/.zshrc)
- [ ] Optional: Installed SwiftBar for menu bar widget
- [ ] Optional: Configured voice settings (Accessibility)

---

## Troubleshooting Mac Setup

**Blossom doesn't open on startup:**
```bash
# Check if agent is loaded
launchctl list | grep blossom

# Check logs
log stream --predicate 'process == "launchd"'

# Unload and reload
launchctl unload ~/Library/LaunchAgents/com.lumi.blossom.startup.plist
launchctl load ~/Library/LaunchAgents/com.lumi.blossom.startup.plist
```

**Browser doesn't open:**
- Check file path in script is correct
- Make sure file exists: `ls ~/lumi/blossom-platform.html`
- Try running script manually: `bash ~/lumi/mac-startup.sh`

**Voice doesn't work:**
- Test: `say "Hello"`
- Check System Preferences → Accessibility → Speech

---

**Questions?** Ask me to help set up any part of this.

**Want me to do it?** Tell me your Mac username and I'll create the scripts for you.
