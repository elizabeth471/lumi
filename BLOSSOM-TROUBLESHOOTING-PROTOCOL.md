# Blossom Troubleshooting Protocol

**Purpose:** Systematic diagnosis of platform, agent, and workflow issues.  
**Activation:** Run anytime something feels off. Ask me "run troubleshooting protocol" or I'll offer it proactively.  
**Format:** Checklist with clear yes/no gates. Updated after each use.

---

## QUICK DIAGNOSTIC (2 minutes)

### 1. Platform Status
- [ ] Blossom OS loading in browser?
- [ ] All views accessible (Today, Threads, Decisions, Agents, Files)?
- [ ] Chat interface responding to input?
- [ ] Agent roster displaying correctly?

**If NO:** Go to **PLATFORM TROUBLESHOOTING**  
**If YES:** Continue to next section

---

### 2. Agent Status
- [ ] Can I activate agents (Sage, Reed, Dev, Grove, etc.)?
- [ ] Agents responding to briefs?
- [ ] No obvious errors in agent outputs?
- [ ] Credit/token usage tracking accurately?

**If NO:** Go to **AGENT TROUBLESHOOTING**  
**If YES:** Continue to next section

---

### 3. Repository & Git Status
- [ ] Git status clean (no uncommitted changes)?
- [ ] Branch correct (claude/blossom-MldX5)?
- [ ] Recent commits visible?
- [ ] Can push/pull without errors?

**If NO:** Go to **GIT TROUBLESHOOTING**  
**If YES:** Platform is healthy. End diagnostics.

---

## PLATFORM TROUBLESHOOTING

**If Blossom OS is not loading or responding:**

### Step 1: Clear & Reload
- [ ] Clear browser cache (Cmd+Shift+Delete)
- [ ] Close all tabs
- [ ] Reload blossom-platform.html from file
- [ ] Test all views again

**Result:** ✅ Fixed? End troubleshooting.  
❌ Still broken? Go to Step 2.

### Step 2: Check File Integrity
- [ ] Open blossom-platform.html in text editor
- [ ] Look for JavaScript errors (search for "Uncaught")
- [ ] Verify file size reasonable (~180 KB)
- [ ] Check closing `</html>` tag exists

**Action needed:**
```bash
# Check file integrity
wc -l blossom-platform.html  # Should be ~2100 lines
grep -c "</html>" blossom-platform.html  # Should return 1
```

**Result:** ✅ Looks good? Try reload again.  
❌ Errors found? Go to Step 3.

### Step 3: Restore from Git
- [ ] Check git log for recent changes
- [ ] If corrupted, reset to last clean commit:

```bash
git checkout HEAD -- blossom-platform.html
npm install  # If using Node
```

- [ ] Reload in browser

**Result:** ✅ Fixed? End troubleshooting.  
❌ Still broken? Contact development team.

---

## AGENT TROUBLESHOOTING

**If agents are not responding or producing errors:**

### Step 1: Check Agent Activation
- [ ] Is agent actually activated (not just briefed)?
- [ ] Is there a task ID assigned?
- [ ] Is agent running in background or foreground?
- [ ] Any timeout errors?

**Action needed:** Ask me to confirm agent status:
```
"Is [Agent name] activated? Show me the task ID."
```

**Result:** ✅ Activated with task ID? Check output.  
❌ Not activated? Re-activate with clear brief.

### Step 2: Check Brief Quality
- [ ] Brief was specific and clear?
- [ ] All required context provided?
- [ ] Success criteria defined?
- [ ] Deadline stated?

**Action needed:** If brief was vague, rebrief with:
- Specific task (not "research X", but "research X in context Y for purpose Z")
- What's already known
- Format of deliverable
- When it's needed

**Result:** ✅ Rebrief clear? Agent should respond better.  
❌ Still stuck? Go to Step 3.

### Step 3: Check Token Usage
- [ ] Agent has sufficient tokens available?
- [ ] Session token budget not exhausted?
- [ ] Agent escalation triggered (going from Haiku → Sonnet)?

**Action needed:**
```
"Check agent credit usage. Are we running low on tokens?"
```

**Result:** ✅ Plenty of tokens? Issue is elsewhere.  
❌ Low on tokens? Wait for monthly reset or allocate emergency credits.

### Step 4: Agent Output Quality Issues
**If agent responded but output is wrong:**

- [ ] Output matches brief requirements?
- [ ] Missing context or research?
- [ ] Hallucinating information?
- [ ] Format incorrect?

**Action needed:** Request revision with specific feedback:
```
"The [section] is wrong because [specific reason]. Revise focusing on [what to fix]."
```

**Result:** ✅ Revision is better? Accept and move on.  
❌ Still not right? Rebrief from scratch or escalate to different agent.

---

## GIT TROUBLESHOOTING

**If Git is not working (push fails, status shows weird state, etc.):**

### Step 1: Check Branch Status
```bash
git status
git branch -a
git log --oneline -5
```

Expected:
- Current branch: `claude/blossom-MldX5`
- No uncommitted changes
- Recent commits visible

**Result:** ✅ Clean? Try push again.  
❌ Issues? Go to Step 2.

### Step 2: Fix Uncommitted Changes
```bash
# See what changed
git diff

# Commit if changes are good
git add [files]
git commit -m "[clear message]"

# Or discard if unwanted
git checkout -- [files]
```

**Result:** ✅ Clean now? Try push.  
❌ Conflicts? Go to Step 3.

### Step 3: Fix Merge Conflicts
```bash
# Check what's conflicted
git status

# Edit each file to resolve conflicts (remove <<<<<<< and >>>>>>>)
# Then stage and commit
git add [files]
git commit -m "Resolve merge conflicts"
git push -u origin claude/blossom-MldX5
```

**Result:** ✅ Pushed? End troubleshooting.  
❌ Still failing? Go to Step 4.

### Step 4: Network/Auth Issues
```bash
# Test connection
git fetch origin

# Check credentials
git config --list | grep -i auth

# Reset remote if needed
git remote -v
git remote set-url origin https://github.com/elizabeth471/lumi.git

# Try again
git push -u origin claude/blossom-MldX5
```

**Result:** ✅ Works now? End troubleshooting.  
❌ Still stuck? Contact GitHub support or team.

---

## WORKFLOW TROUBLESHOOTING

**If the process feels slow, unclear, or inefficient:**

### Questions to Ask
- [ ] Am I waiting on a decision that's unclear?
- [ ] Is an agent brief too vague?
- [ ] Are we repeating work instead of reusing?
- [ ] Is documentation missing (slowing understanding)?
- [ ] Am I doing work that should be automated?

**Action:** Flag to Blossom:
```
"The [part of process] feels slow/unclear because [specific issue]. 
Can we [suggested fix]?"
```

**Note:** These are logged and fed into process improvement.

---

## PLATFORM FEATURE CHECKLIST

**If a feature isn't working as expected:**

| Feature | Expected Behavior | Test |
|---------|---|---|
| Login | Redirects to correct view | Try each login (Founder/CoFounder/Ian) |
| Chat | Messages appear, typing works | Send test message |
| Agent Roster | All agents visible with status | Check "Agents" view |
| Threads | Can search, filter, create | Try search for a word |
| Decisions | Can view urgency levels | Check "Decisions" view |
| Files | Can select and preview | Click "Files" view |
| Command Palette | Opens with ⌘K | Press ⌘K and search |
| Keyboard Nav | 1-5 switches views | Press 1, then 2, then 3 |

**If a feature fails:** Note which one, then go to PLATFORM TROUBLESHOOTING.

---

## PERFORMANCE CHECKLIST

**If the platform feels slow:**

- [ ] Browser tab is the active tab (not backgrounded)?
- [ ] No excessive number of tabs open in browser?
- [ ] Computer has 2+ GB free RAM?
- [ ] No other heavy apps running?
- [ ] Internet connection stable?

**Action:** If all clear, try:
1. Close all other browser tabs
2. Reload blossom-platform.html
3. Test responsiveness again

---

## ESCALATION PATH

**If troubleshooting doesn't fix it:**

1. **Document the issue:** Screenshot, error message, exact steps to reproduce
2. **Check recent changes:** `git log --oneline -10` — what changed recently?
3. **Revert if needed:** `git revert [commit hash]` if recent change broke something
4. **Contact team:** Message Blossom with:
   - What were you trying to do?
   - What happened instead?
   - Steps to reproduce
   - Screenshot/error message
   - What you've tried to fix it

---

## MAINTENANCE

**This checklist is updated:**
- [ ] After each major troubleshooting session
- [ ] When new issues are discovered
- [ ] When new features are added to platform
- [ ] Monthly (every first of month)

**Last updated:** [Auto-filled by Blossom]  
**Next review:** [Auto-filled by Blossom]

---

## Quick Commands Reference

```bash
# Platform
open blossom-platform.html  # Open in browser

# Git
git status                   # Check current state
git log --oneline -5         # See recent commits
git diff                     # See uncommitted changes
git add [file]              # Stage file
git commit -m "[msg]"       # Create commit
git push -u origin claude/blossom-MldX5  # Push to branch

# Agents
# Ask: "Activate [Agent] for [task]"
# Ask: "Show agent status"
# Ask: "Check token usage"
```

---

**To run this protocol:** Ask me "run troubleshooting protocol" or tell me what's wrong and I'll navigate this automatically.

**To update this:** Tell me "add [issue] to troubleshooting protocol" and I'll update it.
