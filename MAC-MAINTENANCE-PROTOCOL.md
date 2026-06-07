# Mac Device Maintenance Protocol

**Purpose**: Ensure Mac is optimized for development, testing, and running Blossom systems. Runs automatically on a schedule and is manually reviewable anytime.

**Frequency**: Weekly (Monday 8 AM), with manual runs as needed  
**Owner**: Blossom (automated) + Elizabeth (confirmation)  
**Duration**: 10-15 minutes

---

## Pre-Maintenance Checklist

Before running any maintenance:
- [ ] No active development work in progress (commits pushed)
- [ ] All applications saved and closed (or safe to interrupt)
- [ ] Power adapter connected (don't want to lose power mid-protocol)
- [ ] Internet connection stable

---

## Weekly Maintenance Protocol

### 1. System Health Check (2 minutes)

**What it does**: Verifies Mac is functioning normally.

```bash
# Check system uptime
uptime

# Check disk space
df -h / | tail -1

# Check memory pressure
vm_stat | grep "Pages free"

# Check thermal status
system_profiler SPPowerDataType | grep -i thermal

# Check for kernel panics (last 7 days)
log show --predicate 'eventMessage contains "kernel panic"' --last 7d
```

**Expected results**:
- Disk: >20% free space (warn if <10%)
- Memory: System responsive (no constant paging)
- Thermal: Normal range (<80°C)
- Kernel panics: None

**Action if issues found**:
- Disk full: Delete node_modules, clear caches, run `brew cleanup`
- Memory pressure: Restart Mac
- Thermal: Close unnecessary apps, check for runaway processes
- Kernel panic: Log issue and notify Elizabeth

### 2. Homebrew Updates (3 minutes)

**What it does**: Keeps package manager and dependencies current.

```bash
# Update Homebrew
brew update

# Upgrade packages (non-breaking)
brew upgrade

# Check for issues
brew doctor

# Clean up old downloads
brew cleanup -s
```

**Expected results**: All upgrades successful, no Homebrew issues.

**Action if issues found**:
- Upgrade failures: Note the package, investigate, skip if safe
- Doctor warnings: Read warnings, fix if safe (usually disk space)

### 3. Node.js & npm Check (2 minutes)

**What it does**: Verifies Node.js development environment is current and healthy.

```bash
# Check versions
node --version
npm --version

# Check npm cache
npm cache verify

# Check for outdated global packages
npm outdated -g

# Verify npm works
npm list -g --depth=0
```

**Expected results**:
- Node 18+ and npm 8+
- Cache verified
- No deprecated global packages

**Action if issues found**:
- Old Node/npm: Run `brew upgrade node` (via Homebrew)
- Cache issues: Run `npm cache clean --force`

### 4. Project Dependencies Audit (3 minutes)

**What it does**: Checks Lumi project dependencies for security issues and updates.

```bash
# Check for vulnerabilities
npm audit --audit-level=moderate

# Check for outdated packages (non-breaking)
npm outdated

# Same for Blossom Companion
cd blossom-companion
npm audit --audit-level=moderate
npm outdated
cd ..
```

**Expected results**: No moderate+ vulnerabilities, no critical outdated packages.

**Action if issues found**:
- Vulnerabilities: Run `npm audit fix`, commit changes
- Outdated packages: Review, update if safe, test after

### 5. Git Repository Health (2 minutes)

**What it does**: Ensures Git repos are in good state.

```bash
# Check git status
git status
git log --oneline -5

# Check for uncommitted changes
git diff --name-only
git diff --staged --name-only

# Verify remote is reachable
git fetch origin --dry-run

# Check for branch issues
git branch -v
```

**Expected results**:
- No uncommitted changes (or documented temporary work)
- Remote reachable
- On correct branch (claude/blossom-MldX5)
- Latest commits pushed

**Action if issues found**:
- Uncommitted changes: Commit or stash them
- Remote unreachable: Check network
- Unpushed commits: Push to origin

### 6. Port & Process Check (2 minutes)

**What it does**: Ensures no stray processes blocking development ports.

```bash
# Check common dev ports
lsof -i :3000
lsof -i :3001
lsof -i :8080
lsof -i :9000

# Check for runaway npm/node processes
ps aux | grep -E 'node|npm' | grep -v grep

# Check for Electron processes
ps aux | grep -i electron | grep -v grep
```

**Expected results**: No unnecessary processes holding ports.

**Action if issues found**:
- Ports in use: Kill process if safe (`kill -9 PID`)
- Runaway processes: Kill and investigate

### 7. Storage Cleanup (2 minutes)

**What it does**: Removes temporary files and caches safely.

```bash
# Clear npm cache (safe)
npm cache clean --force

# Find large directories in projects
du -sh ~/lumi/* 2>/dev/null | sort -rh | head -5

# Check for old node_modules
find ~/lumi -type d -name "node_modules" -exec du -sh {} \; 2>/dev/null | sort -rh

# Temporary files cleanup (safe)
rm -rf ~/lumi/**/.DS_Store 2>/dev/null
rm -rf ~/lumi/**/*.swp 2>/dev/null
```

**Expected results**: Cache cleaned, large directories identified.

**Action if issues found**:
- Large node_modules: OK if recent (after `npm install`)
- DS_Store files: Removed (system files, safe to delete)

### 8. Development Tool Verification (1 minute)

**What it does**: Confirms essential dev tools are available.

```bash
# Check for required tools
which git
which node
which npm
which code
which claude

# Quick version check
git --version
node --version
npm --version
code --version
claude --version 2>/dev/null || echo "Claude Code not found"
```

**Expected results**: All tools found and accessible.

**Action if issues found**:
- Tool missing: Reinstall via Homebrew or npm
- Version outdated: Update via Homebrew

---

## Maintenance Report Template

After running maintenance, log results:

```
MAC MAINTENANCE REPORT — [Date] [Time]

System Health:
- Disk space: [% free]
- Memory: [status]
- Thermal: [normal/warning/critical]
- Kernel panics: [count in last 7 days]

Package Management:
- Homebrew: [status — updated/errors]
- Node.js: [version]
- npm: [version]

Security:
- npm audit: [pass/fail — # of issues if any]
- Vulnerabilities: [none/[details]]

Repository:
- Branch: [current branch]
- Uncommitted changes: [count]
- Last push: [time ago]

Processes:
- Port conflicts: [none/[details]]
- Runaway processes: [none/[details]]

Storage:
- Cache cleaned: [yes/no]
- Largest directories: [top 3]

Issues found: [none/[list]]
Actions taken: [none/[list]]

Status: ✅ PASS / ⚠️ WARNING / 🚨 CRITICAL
```

---

## Monthly Deep Maintenance (Run on 1st of month)

In addition to weekly protocol, run once monthly:

### Extended Storage Review

```bash
# Find all npm cache
find ~/.npm -type f -mtime +30 -delete 2>/dev/null

# Check for duplicate dependencies
npm ls | grep -E "deduped|invalid"

# Analyze project size
du -sh ~/lumi

# Check for old backups
ls -lah ~/ | grep -E "\.bak|\.backup|~$"
```

### System Cache Clean

```bash
# Clear browser cache (optional, safe)
rm -rf ~/Library/Caches/Google/Chrome/Default/Cache 2>/dev/null

# Clear system cache (careful)
sudo purge
```

### Full dependency audit with fixes

```bash
cd ~/lumi
npm audit fix
npm outdated

cd blossom-companion
npm audit fix
npm outdated
```

---

## Automated Scheduling (Future)

Once this protocol is tested, I will:

1. Create shell script: `~/lumi/scripts/mac-maintenance.sh`
2. Add to launchd with plist in `~/Library/LaunchAgents/`
3. Schedule for: **Mondays 8:00 AM** (before you start work)
4. Log output to: `~/lumi/logs/maintenance.log`
5. Send summary to Blossom OS dashboard

**For now**: Run manually weekly, log results, adjust as needed.

---

## What I Monitor Automatically

Without manual runs, I also track:

- **Daily**: API usage, token costs (from session logs)
- **Weekly**: Agent performance (cost/task efficiency)
- **Monthly**: Resource trends (budget, agent usage patterns)

This maintenance protocol covers the **Mac infrastructure** side. Combined with resource management (agents/budget), we have full visibility.

---

## Troubleshooting Common Issues

### "Disk space low"
```bash
# Find large files
find ~ -type f -size +100M 2>/dev/null | head -20

# Delete old Xcode files
rm -rf ~/Library/Developer/Xcode/DerivedData/*
rm -rf ~/Library/Developer/Xcode/Archives/*
```

### "npm install slow or failing"
```bash
# Clear npm cache completely
npm cache clean --force

# Reinstall packages
rm -rf node_modules package-lock.json
npm install
```

### "Port 3000 in use"
```bash
# Find what's using it
lsof -i :3000

# Kill the process
kill -9 [PID]
```

### "Git fetch/push failing"
```bash
# Check SSH keys
ssh -T git@github.com

# Check internet connection
curl -I https://github.com

# Retry with verbose output
git fetch -v origin
```

---

## Maintenance Protocol Owner

| Role | Responsibility |
|------|---|
| **Blossom** | Runs protocol weekly, logs results, flags issues |
| **Elizabeth** | Reviews logs, confirms everything looks good, approves any fixes |
| **Dev environment** | Stays optimized and ready for work |

---

## Success Metrics

Protocol is working well if:
- ✅ Maintenance completes in <15 minutes
- ✅ No critical issues found on weekly runs
- ✅ npm install/build times stay <5 minutes
- ✅ No port conflicts blocking development
- ✅ Storage usage stays <50GB for projects

---

## Next Steps

1. **Review this protocol** — Does it match your Mac setup?
2. **Run manually once** — See if all commands work
3. **Adjust as needed** — Any steps that don't apply or need tweaking?
4. **Schedule it** — Once confirmed, I'll automate the weekly run

---

**Created**: June 7, 2026  
**For**: Mac device optimization and development health  
**Status**: Ready for testing and Elizabeth's review
