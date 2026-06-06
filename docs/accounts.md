# Account Setup Plan — Blossom OS / Company

Goal: every service runs on **dedicated company accounts**, never Eli's or Ian's personal accounts. This is the checklist + dependency order. Eli/Ian create the accounts (Blossom can't sign up for services — Hard Limit); Blossom maintains this doc and wires up the repo/app side once each exists.

**Rule:** no secrets in this file. Passwords/keys live in a password manager (see step 0), never in git.

**The gating decision:** even free accounts need a handle. Pick a provisional name now so you can stop using personal accounts today, and finalize after the trademark scan. Recommended provisional handle: **`lumiworld`** (neutral, already your entity concept, low trademark risk; GitHub orgs and most handles can be renamed later). Lock the real brand after the Sage trademark scan + attorney clearance.

---

## Phase A — Free, do now (no entity/brand needed, reversible)

| # | Account | For | Cost | Depends on | Status |
|---|---------|-----|------|------------|--------|
| 0 | **Password manager** (Bitwarden free / 1Password) | Hold every credential below | Free | — | ☐ |
| 1 | **Dedicated email** (Gmail now, e.g. `lumiworld.ops@gmail.com`) | The address every other account registers under | Free | handle | ☐ |
| 2 | **GitHub organization** (e.g. `lumiworld`) + move the `lumi` repo into it | Code, off personal `elizabeth471` | Free | email | ☐ |
| 3 | **Vercel** (sign in with the GitHub org) | Hosting / the shareable demo | Free | GitHub org | ☐ |

> Once #2 exists, tell Blossom the new repo URL and she repoints the local git remote. Once #3 exists, the demo deploys.

## Phase B — After the name + trademark decision (item #2)

| # | Account | For | Cost | Depends on | Status |
|---|---------|-----|------|------------|--------|
| 4 | **Domain registrar** (Cloudflare / Namecheap) | Company + product domains | ~$12/yr | name cleared | ☐ |
| 5 | **Google Workspace** | Professional email `you@company.com` | ~$6/user/mo | domain | ☐ |
| 6 | **Anthropic / Claude org** | API billing under the company (admin keys) | usage | entity + card | ☐ |

## Phase C — Entity & money (attorney/accountant territory)

| # | Account | For | Cost | Depends on | Status |
|---|---------|-----|------|------------|--------|
| 7 | **Stripe Atlas** (or attorney) — Delaware C-Corp | The legal entity | ~$500 | name cleared | ☐ |
| 8 | **EIN** (IRS) | Tax ID | Free | entity | ☐ |
| 9 | **Mercury** business banking | Company money | Free | EIN | ☐ |

## Deferred / only-if-needed
- **Supabase, Clerk** — from the original brief; likely skip while local-first. Add only if we go multi-user/hosted.

---

**Recommended first move:** do **Phase A** today (all free, all reversible) under the provisional `lumiworld` handle — that alone gets you off personal accounts for code + hosting. Hold Phases B–C until the name is trademark-cleared and the entity decision is made (open item #2). Blossom handles all repo/app wiring once accounts exist.
