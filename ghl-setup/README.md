# Supernova — GHL AI Agent Automation Setup

Everything needed to stand up **Sofía**, a bilingual AI agent that pre-qualifies social-comment leads for Supernova Mortgage Brokers and routes them into GoHighLevel.

## What this automates

Prospect comments a keyword (`DPA`, `FHA`, `VA`, `REFI`, `SELF`, `DSCR`, `VISA`, `USDA`, `CONV`, `CASHOUT`, `RATE`) on any Instagram or Facebook post → public reply posted → DM opened with Sofía → Sofía runs a bilingual pre-qualification flow tailored to the keyword → lead lands in GHL with custom fields populated, matched-program tags added, loan officer notified, calendar booked.

## Keyword map

| Keyword | Flow | Tag |
|---|---|---|
| `DPA` | First-Time Buyer / Down Payment Assistance | `social-comment-dpa` |
| `FHA` | FHA Loans | `social-comment-fha` |
| `VA` | VA Loans | `social-comment-va` |
| `USDA` | USDA (rural) | `social-comment-usda` |
| `CONV` | Conventional | `social-comment-conv` |
| `REFI` | Refinance (rate/term) | `social-comment-refi` |
| `CASHOUT` | Cash-out Refinance | `social-comment-cashout` |
| `SELF` | Bank Statement / Self-Employed | `social-comment-self` |
| `DSCR` | DSCR / Investor | `social-comment-dscr` |
| `VISA` | Foreign National / ITIN | `social-comment-visa` |
| `RATE` | Generic rate quote | `social-comment-rate` |

## Files in this folder

- **[sofia-system-prompt.md](sofia-system-prompt.md)** — paste into Agent Studio → Instructions
- **[sofia-knowledge-base.md](sofia-knowledge-base.md)** — upload each DOC as a separate KB document
- **[workflow-setup.md](workflow-setup.md)** — build steps for 4 workflows + agent actions
- **[../scripts/seed-ghl.mjs](../scripts/seed-ghl.mjs)** — one-shot script to create 21 custom fields via GHL API

## Setup order

1. `node scripts/seed-ghl.mjs` — creates custom fields (idempotent, safe to re-run)
2. In GHL Settings → Tags, verify/create tags listed in script output
3. Build Sofía in AI Agent Studio (system prompt + KB + actions)
4. Build Workflow 1 (Social Comment → Sofía Handoff)
5. Build Workflow 2 (Qualified Lead Router)
6. Build Workflow 3 (Human Escalation)
7. Test end-to-end with a test IG/FB account

Full checklist in [workflow-setup.md](workflow-setup.md).

## Connection to the website wizard

The [`/first-time-home-buyers`](../src/app/first-time-home-buyers/page.tsx) landing page uses the same keyword, custom-field, and tag vocabulary. A prospect who completes the website wizard and one who completes Sofía's DPA flow land as structurally identical contacts in GHL — the loan officer sees the same fields populated either way. The `Wizard Source` field distinguishes them (`Website Wizard` vs `Instagram Comment — DPA` etc.).

## Optional hardening

- Build `/api/ghl-qualify` on the website so Sofía uses deterministic matching logic from [qualification.ts](../src/app/first-time-home-buyers/qualification.ts) instead of reasoning through program rules. Reduces hallucinations on edge cases.
- Add analytics: tag inbound source with UTM-style tags (`utm-post-may-2026-event`, `utm-reel-dpa-carousel-01`) so conversion can be attributed to specific posts.
- Weekly report: export GHL contacts where `Wizard Source` contains "Comment" to see which keyword + post combinations convert best.
