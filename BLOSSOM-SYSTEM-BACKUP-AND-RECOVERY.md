# Blossom System — Complete Backup & Recovery Kit

**Purpose**: Recreate the entire Blossom setup from scratch if needed

**Scope**: All code, prompts, configurations, documentation, system state

**Accounts**: Both Google accounts (Elizabeth primary, secondary backup)

**Privacy**: All sensitive data encrypted or stored locally only

---

## What's Included in This Backup

### 1. **Source Code** (Everything in Git)
- Blossom Companion Electron app (`/blossom-companion/`)
- Next.js prototype (`/prototype/`)
- Agent profiles (`/agents/`)
- All documentation and guides

**Location**: 
- Primary: `https://github.com/elizabeth471/lumi` (public repo)
- Backup: Local clone on both machines

### 2. **System Configuration** (Must Keep Private)
- `admin-assistant.md` — Blossom's profile and operating rules
- `CLAUDE.md` — Project memory and context
- Agent briefs and prompts
- Resource allocation rules
- Learning log framework

**Location**: 
- Primary: `/home/user/lumi/` (local, version controlled)
- Backup: Private Google Drive folder

### 3. **API Keys & Secrets** (NEVER in Git)
- Claude API key
- Google Cloud credentials
- Twilio account tokens
- Any future service keys

**Location**: 
- Primary: Environment variables (`.env` file, in `.gitignore`)
- Backup: Password manager or Google Drive (encrypted file)

### 4. **User-Specific Settings** (Your Preferences)
- Mac configuration
- Blossom color schemes
- Custom prompts
- Testing preferences

**Location**: 
- Primary: Local files (`config.json`, etc.)
- Backup: Google Drive folder

### 5. **Learning History** (Session Logs)
- Every session learning log
- Monthly syntheses
- Pattern analysis

**Location**: 
- Primary: `/lumi/logs/` (git tracked)
- Backup: Google Drive (dated archives)

---

## Backup Strategy by Account

### Account 1: Elizabeth (Primary - Your Main Account)

**What to Back Up**:
- GitHub repo (via git clone)
- Local `/lumi/` folder (entire directory)
- `.env` file (sensitive — separate backup)
- `learning-logs/` directory
- Any custom agent briefs or modifications

**Backup Location**: 
```
Google Drive / Elizabeth / Blossom-System-Backup/
├── code-snapshots/             (git clone backup)
├── configs/                    (sensitive configs)
├── learning-logs/              (session history)
└── recovery-instructions.md    (how to restore)
```

**How to Create Backup** (Monthly):
```bash
# Create archive of entire system
tar -czf ~/blossom-backup-$(date +%Y%m%d).tar.gz ~/lumi/

# Copy to Google Drive
cp ~/blossom-backup-*.tar.gz ~/Google\ Drive/Blossom-System-Backup/code-snapshots/

# Document what was backed up
echo "Backup created: $(date)" >> ~/Google\ Drive/Blossom-System-Backup/backup-log.txt
```

### Account 2: Secondary Google Account (Redundant Backup)

**What to Back Up**:
- Read-only copy of all code
- Documentation only (no secrets)
- Recovery instructions
- Public materials

**Backup Location**:
```
Google Drive / Secondary Account / Blossom-Archive/
├── code-repo/                  (public repo clone)
├── documentation/              (all .md files)
└── RECOVERY-INSTRUCTIONS.md    (how to get from Account 1)
```

**Why This Account**:
- If primary account is compromised, you have clean backup
- If GitHub repo is deleted, you have local copy
- If something goes wrong, you can restore from secondary

---

## Recovery Instructions (If You Ever Need Them)

### Scenario 1: Need to Restore to New Mac

**Step 1: Get the Backup**
```bash
# From Google Drive, download the latest backup
cd ~/
tar -xzf ~/Downloads/blossom-backup-20260607.tar.gz
# This restores ~/lumi/ with everything
```

**Step 2: Install Dependencies**
```bash
cd ~/lumi/blossom-companion
npm install

cd ~/lumi/prototype
npm install
```

**Step 3: Restore Secrets** (from your password manager)
```bash
# Create .env files with API keys
cd ~/lumi/blossom-companion
cat > .env << EOF
ANTHROPIC_API_KEY=your_key_here
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
EOF
```

**Step 4: Test**
```bash
cd ~/lumi/blossom-companion
npm run dev
# Blossom should launch
```

**Step 5: Verify All Systems**
- ✓ Blossom Companion runs (`npm run dev`)
- ✓ Prototype runs (`cd prototype && npm run dev`)
- ✓ Git history intact (`git log`)
- ✓ All documentation accessible
- ✓ Learning logs present

### Scenario 2: Need to Share Setup with Ian

**What to Give Ian**:
```
Everything EXCEPT:
- .env file (API keys)
- CLAUDE.md (your private instructions)
- admin-assistant.md (internal rules)
- Any custom prompts or preferences

What TO give:
- /blossom-companion/ (code)
- /prototype/ (code)
- All documentation files
- /agents/ (public agent profiles)
- Recovery instructions
```

**How to Share**:
1. Create fresh GitHub branch
2. Push public materials only
3. Send Ian the repo link + recovery instructions
4. He follows setup steps to get his own copy running
5. He gets his own API keys from Anthropic

### Scenario 3: Complete System Failure

**Recovery Path**:
1. **Clone from GitHub** (if repo still exists)
   ```bash
   git clone https://github.com/elizabeth471/lumi.git
   cd lumi
   ```

2. **Restore from Local Backup** (if GitHub down)
   ```bash
   tar -xzf ~/blossom-backup-20260607.tar.gz
   ```

3. **Restore from Secondary Account** (if primary account inaccessible)
   - Log into secondary Google account
   - Download archive from Blossom-Archive folder
   - Follow Step 1-5 above

4. **Restore from GitHub Raw Files** (if everything local is gone)
   ```bash
   # Each file can be downloaded individually from:
   # https://raw.githubusercontent.com/elizabeth471/lumi/main/filename.md
   ```

---

## What NOT to Back Up (Security)

**NEVER commit to Git**:
- `.env` files with API keys
- `node_modules/` (too large, regenerated by npm install)
- `.DS_Store` (system files)
- Personal notes with passwords

**NEVER share in public**:
- `admin-assistant.md` (your internal instructions)
- Custom agent prompts with proprietary logic
- Learning logs with sensitive decisions
- Financial/budget details

**Store separately**:
- API keys → Password manager or encrypted file
- Personal preferences → Local config only
- Sensitive decisions → Local learning logs, not shared

---

## Backup Checklist (Do This Monthly)

- [ ] Git push all changes to main branch
- [ ] Export `.env` file to password manager
- [ ] Create tar.gz of entire `/lumi/` folder
- [ ] Upload to Google Drive / Blossom-System-Backup/
- [ ] Verify download works (test restore once per quarter)
- [ ] Update secondary account with public materials only
- [ ] Document any new API keys or configurations
- [ ] Review learning logs, archive old ones

---

## File Organization (Both Accounts)

### Primary Account (Elizabeth)

```
Google Drive/
├── Blossom-System-Backup/              [PRIVATE]
│   ├── code-snapshots/
│   │   ├── blossom-backup-20260607.tar.gz
│   │   ├── blossom-backup-20260614.tar.gz
│   │   └── blossom-backup-20260621.tar.gz
│   ├── configs/
│   │   ├── .env.backup                 [ENCRYPTED]
│   │   ├── config.json.backup
│   │   └── api-keys-manifest.txt       [REFERENCE ONLY]
│   ├── learning-logs/
│   │   ├── 2026-06-session-logs/
│   │   └── 2026-07-session-logs/
│   └── recovery-instructions.md        [THIS FILE]
│
└── Blossom-Shared/                     [PUBLIC - for team/Ian]
    ├── Code/
    │   ├── source-code/
    │   └── documentation/
    └── Setup-Guide.md
```

### Secondary Account (Backup)

```
Google Drive/
├── Blossom-Archive/                    [PUBLIC ONLY]
│   ├── code-repo/
│   │   └── lumi-public-materials/
│   ├── documentation/
│   │   ├── README.md
│   │   ├── BLOSSOM-COMPANION-README.md
│   │   ├── TECHNICAL-BRIEF.md
│   │   └── [all .md files, no secrets]
│   └── RECOVERY-FROM-PRIMARY-ACCOUNT.md
```

---

## Testing Recovery (Quarterly)

**Every 3 months**, test that you can actually restore:

```bash
# Step 1: Download backup
# Step 2: Extract to test location
mkdir ~/blossom-test
cd ~/blossom-test
tar -xzf ~/Downloads/blossom-backup-latest.tar.gz

# Step 3: Try to build and run
cd lumi/blossom-companion
npm install
npm run dev  # Should work

# Step 4: Verify git history
cd ../
git log --oneline | head -20  # Should show commits

# Step 5: Clean up
cd ~/
rm -rf blossom-test
```

**If restore fails**, figure out why BEFORE disaster strikes:
- Check tar.gz integrity
- Verify .env secrets are accessible
- Confirm npm can install
- Test git access

---

## Privacy Guidelines

### What's Public (OK to Share)
- Code in `/blossom-companion/`, `/prototype/`
- Documentation files (guides, briefs, protocols)
- Architecture diagrams
- General setup instructions

### What's Private (Keep Secret)
- `admin-assistant.md` (my operating rules)
- `CLAUDE.md` (project memory)
- API keys and credentials
- Personal learning logs with sensitive decisions
- Custom agent prompts with proprietary methods

### What's Encrypted/Secured
- `.env` files → Password manager
- API keys → Encrypted backup or password manager
- Sensitive configs → Separate from code backup

---

## Summary

**This ensures**:
- ✓ You can recreate Blossom on any machine
- ✓ You have redundant backups on two accounts
- ✓ Sensitive data stays private
- ✓ Public materials can be shared with Ian or others
- ✓ System state is preserved (learning logs, configurations)
- ✓ You're never locked out or unable to restore

**When to Use This**:
- Setting up new Mac → Follow "Restore" section
- Monthly backup → Follow "Checklist"
- Quarterly test → Follow "Testing Recovery"
- Sharing with Ian → Follow "Scenario 2"
- Emergency restore → Follow "Scenario 3"

---

**Created**: June 7, 2026  
**Status**: Ready to use immediately  
**Test Frequency**: Monthly backups, quarterly restore tests  
**Security**: Private data encrypted, public materials shared freely
