# Operations Log — Blossom's Daily Record

Blossom maintains one folder per day of operation here, starting **2026-06-06**. This is the company's running record of what Blossom and the team actually did, decided, resolved, and tabled — the durable, portable memory layer described in *Purpose of Blossom OS*.

## Why this exists (and why it's plain files, not a database)

This log is deliberately stored as **plain Markdown + JSON in git**, not in a hosted database. That makes it:

- **Portable** — owned by the company, not locked to any vendor or model.
- **Model-agnostic** — any future Blossom (hosted *or* local) can ingest it: read the Markdown directly, parse the JSON for structured queries, or embed it for semantic search. This is the concrete thing that lets Blossom eventually run locally with her full operating history intact.
- **Human-readable** — Ian can open any day and read it without tooling.
- **Versioned** — every change is a git diff; nothing is silently lost.

## Folder structure

```
operations/
  README.md                  # this file — the schema (keep it current)
  YYYY-MM-DD/                 # one folder per day of operation
    day.json                 # STRUCTURED source of truth (machine-readable)
    brief.md                 # the day's morning brief(s), as delivered
    decisions.md             # decisions made + whose input + tier + outcome
    issues.md                # issues resolved and issues tabled
    activity.md              # chronological log of everything Blossom did
    eod.md                   # end-of-day blurb (the day in a paragraph)
```

## The schema — `day.json`

`day.json` is the canonical structured record; the `.md` files are the human-readable rendering of the same facts (keep them consistent — single source of truth, per the Self-Update & File Maintenance Protocol). Stable shape so it stays parseable across every day:

```jsonc
{
  "date": "YYYY-MM-DD",
  "phase": 0,                        // company phase at the time
  "tldr": ["", "", ""],              // the day in 3 points (max 3)
  "briefs": [
    { "time": "9:14 am", "title": "", "body": "", "questions": [""] }
  ],
  "decisions": [
    { "id": 1, "decision": "", "input_from": ["Ian"], "tier": 2, "outcome": "", "time": "" }
  ],
  "issues_resolved": [
    { "issue": "", "resolution": "", "time": "" }
  ],
  "issues_tabled": [
    { "issue": "", "reason": "", "revisit_when": "" }
  ],
  "activity": [
    { "time": "", "entry": "" }
  ],
  "eod": ""                          // end-of-day summary paragraph
}
```

**Field rules:** `tldr` is at most 3 items. `input_from` lists who informed each decision (e.g. `"Ian"`, `"Sage"`, `"Blossom"`). `tier` is the Decision Tier (1/2/3). Times are local, human-format. Dates are ISO `YYYY-MM-DD`. New fields may be added over time but existing ones are never renamed or repurposed (so historical days stay parseable).
