# Blossom OS Feedback & Change Management

**Who this is for:** Anyone using Blossom OS (founders, co-founders, Ian, future team members)

**Purpose:** Clear workflow for requesting changes, improvements, or new features to the platform

---

## Overview

You have **three ways to request changes** to Blossom OS:

1. **Wishlist** — Log an idea for future work (low urgency)
2. **Schedule** — Plan a specific timeline with the team (medium urgency)
3. **Live Edit** — Make the change right now with confirmation (high urgency)

---

## Option 1: Wishlist

**Use when:** You have an idea but it's not urgent. Nice to have, can wait.

**How:**
1. Tell Blossom: "Add [feature/change] to the wishlist"
2. Be specific:
   - **What:** Feature name, functionality
   - **Why:** Why does this matter?
   - **Impact:** How does it improve the platform?

**Example:**
```
"Add Ian's login preferences to a user profile card visible on the sidebar. 
This way, when I log in next time, I see his schedule and communication preferences 
at a glance instead of having to scroll back through chat."
```

**What happens:**
- Blossom logs it to `BLOSSOM-OS-WISHLIST.md`
- Team reviews in next sprint planning
- Gets scheduled based on priority + impact
- You get notified when it's being worked on

---

## Option 2: Schedule a Change

**Use when:** This is important enough to plan for, but not needed immediately. You want to coordinate with the team.

**How:**
1. Tell Blossom: "Schedule [change] for [timeline]"
2. Be specific:
   - **What:** Clear description of the change
   - **When:** Next week? Next month? Before Ian joins?
   - **Why:** Why this timeline matters

**Example:**
```
"Schedule: Add activity analytics dashboard to Blossom OS for next month.
This will let me see which screens Ian spent time on, which briefs he requested, 
which agents were most useful. Timeline: need it before we do the first metrics review."
```

**What happens:**
- Blossom adds to sprint backlog
- Coordinates with Grove (design), Reed (copy), Dev (code) as needed
- Builds it in the specified timeline
- You test/confirm before it goes live
- Gets committed and documented

**Timeline examples:**
- "Next week" = high priority, fits in next development cycle
- "Next two weeks" = medium priority, planned for near future
- "Next month" = lower priority, batched with other work
- "When Ian joins" = dependent on co-founder onboarding

---

## Option 3: Live Edit (Do It Now)

**Use when:** This is urgent and simple enough to do in real-time. You want it done today.

**How:**

### Step 1: Request the Change
Tell Blossom: "I want to [change] on Blossom OS. Do it now."

**Be as specific as possible:**
- **Location:** Which view/screen is this on? (Today, Threads, Agents, etc.)
- **Current state:** What's there now?
- **Desired state:** What should it be instead?
- **Example:** If it's text, show me the old text and new text

### Step 2: I Show You the Change
I will:
1. Tell you which file I'm editing: `blossom-platform.html` or similar
2. Show you the exact line numbers I'm changing
3. Show you the old code + new code (in a clear format)
4. Ask: "Does this look right?"

**Example:**
```
File: blossom-platform.html
Lines 1234-1245

OLD:
<div class="brief-card">
  <div class="card-body">Status: Waiting</div>
</div>

NEW:
<div class="brief-card">
  <div class="card-body">Status: Ready to Review</div>
  <div class="card-update-time">Updated 2 min ago</div>
</div>

Does this look right?
```

### Step 3: You Confirm or Request Adjustments

**If it looks good:**
```
"Looks good, go ahead and commit."
```

I will:
- Make the change
- Commit with clear message
- Push to branch
- Confirm it's live

**If you want adjustments:**
```
"Change the text to [new text] instead" 
or
"I need to see [additional element] too"
```

I will:
- Show you the adjusted version
- Ask for confirmation again
- Then commit

**If you want to cancel:**
```
"Actually, don't do this."
```

I will:
- Not make the change
- Not commit anything
- Ask if you want to adjust the request instead

### Step 4: Confirmation & Commit

Once you confirm:
- I make the change
- I commit with a message like: `"Update [feature] per Ian request"`
- I push to `claude/blossom-MldX5`
- I tell you it's live
- You can reload and see the change immediately

---

## Change Types & Examples

### Text/Copy Changes
**Easiest, fastest to do live**

Example:
```
Change "Waiting for founder approval" to "Awaiting founder review" 
in the Decisions view.
```

Time: 2-5 minutes

### Layout/Positioning Changes
**Medium complexity, can do live**

Example:
```
Move the Agent Roster to the right side instead of center.
Add it as a sidebar widget like the Open Decisions widget.
```

Time: 10-20 minutes

### New Features
**Complex, usually schedule these**

Example:
```
Add a "Preferences" button to my user badge that saves my timezone, 
communication style, and notification frequency.
```

Better to schedule this with the design team.

### Visual/Design Updates
**Schedule with Grove**

Example:
```
Change the Blossom character's colors to match the new season (autumn palette).
```

Time: Coordinate with Grove, 1-2 hours

---

## Feedback Loop Example

**You:** "I want to add my preferences to my user profile. Do it now."

**Me:** "Got it. Here's what I'll do:
1. Add a 'Preferences' button next to your name in the topbar
2. When clicked, opens a modal with: timezone, communication style (chat/voice/async), schedule
3. Saves to localStorage (temporary, will use backend later)

Show me the code:"

```
File: blossom-platform.html, lines 865-870

OLD:
<div class="user-badge" onclick="logOut()">
  <div class="user-av" id="user-av">🌱</div>
  <div class="user-name" id="user-name">Founder</div>
</div>

NEW:
<div class="user-badge">
  <div class="user-av" id="user-av">🌱</div>
  <div class="user-name" id="user-name">Founder</div>
  <button onclick="openPreferences()">⚙️</button>
</div>
```

**You:** "I like it. Also add an edit button next to each preference so I can change them."

**Me:** "Adjusted. New code:"

```
NEW (adjusted):
<div class="preferences-modal" id="prefs-modal">
  <div class="pref-item">
    <label>Timezone:</label>
    <input type="text" value="PST"/>
    <button onclick="editPref('timezone')">✏️</button>
  </div>
  ...
</div>
```

**You:** "Perfect. Commit it."

**Me:** "Done. Changes committed and live. Reload Blossom OS to see preferences button in topbar."

**You:** Reload, click preferences button, see your new settings interface.

---

## What I Can Change (Live Edit)

✅ **Easy — Do anytime:**
- Text/copy in views
- Colors in stylesheets (CSS variables)
- Button labels
- Layout positioning (flexbox/grid)
- Visibility toggle (show/hide elements)
- Status messages

⚠️ **Medium — Check with me first:**
- New UI components
- Adding buttons/inputs
- Changing navigation flow
- Saving/retrieving preferences

❌ **Hard — Schedule with team:**
- New major features
- API integration
- Complex animations
- Design system changes
- Significant refactoring

---

## Documenting Changes

Every change gets logged:

1. **Commit message:** Clear description of what changed
2. **Jira/GitHub issue:** Links to discussion
3. **This guide:** Updated if workflows change
4. **Changelog:** (Future) automated changelog when features complete

This keeps the team synchronized and creates a record of how the platform evolved.

---

## Performance Note

**Blossom OS is a live learning document.** It changes as we learn what works best. This is intentional.

Every change teaches us:
- What features are actually useful
- What workflows are efficient
- What frustrates users
- What delights them

Your feedback directly shapes the platform.

---

## Questions?

- **"Can I request [specific change]?"** → Tell me and I'll assess if it's wishlist/schedule/live
- **"How long will [change] take?"** → I'll estimate when I see it
- **"Can we do [major feature]?"** → Schedule it with the team
- **"I changed my mind about [request]"** → Tell me anytime, we adjust

---

**Next time you want to change something about Blossom OS:**

Just tell me: "I want to [change]. [Wishlist / Schedule for X / Do it now]."

I'll take it from there.
