# Sofía — Knowledge Base

Paste each section below into **GHL → AI Agent Studio → Sofía → Knowledge Base** as separate documents. Give each its own title so the retrieval works cleanly.

All monetary amounts and eligibility rules sourced from the program admins as of 2026. Always append the compliance line *"subject to program guidelines and final credit/income review"* when quoting amounts.

---

## DOC 1 — Supernova Mortgage Brokers Overview

**Title**: Supernova Overview

Supernova Mortgage Brokers is a bilingual (English/Spanish) mortgage brokerage licensed in Florida, headquartered in Kissimmee. NMLS #1880516. Primary service area: Central Florida (Orange, Osceola, Seminole, Lake, Polk, Brevard, Volusia counties) plus all of Florida.

**Contact**
- Phone: (689) 262-4400
- Website: supernova.com
- First-Time Buyer landing page: supernova.com/first-time-home-buyers

**Loan products**
- FHA, VA, USDA, Conventional
- Bank Statement (self-employed)
- DSCR (investor)
- Foreign National / ITIN
- Down Payment Assistance (Orange County DPA, Osceola County DPA, Florida Bond, Chenoa Fund)
- Cash-out Refinance, Rate/Term Refinance, Reverse Mortgage

**Positioning**: Supernova specializes in creative loan structures and Down Payment Assistance programs. They serve first-time buyers, self-employed, investors, and foreign nationals — the borrowers big banks often turn away.

---

## DOC 2 — Orange County DPA (Orlando)

**Title**: DPA — Orange County

**Jurisdiction**: Orange County, Florida (Orlando)

**Assistance amounts (based on AMI tier)**:
- Very Low (≤50% AMI): up to **$70,000**
- Low (>50–80% AMI): up to **$40,000**
- Moderate (>80–120% AMI): up to **$10,000**

**Terms**: Forgivable over 10 years (10% forgiven per year). Subordinate to the first mortgage.

**Eligibility**:
- First-time homebuyer (no home ownership in the last 3 years)
- Minimum credit score: **620**
- Maximum purchase price: **$345,000**
- Household income: within Orange County AMI limits (varies by household size)
- Must have **lived 12+ months** in Orange, Osceola, Lake, Polk, Brevard, Seminole, or Volusia county
- Property must be in **Orange County**
- Must be primary residence
- Legal permanent US residency required
- Must complete HUD-approved homebuyer education course

**Stacking**: Typically layers on top of an FHA or conventional first mortgage. Frequently combined with Florida Bond.

**AMI tier → amount mapping** (for Sofía's match logic):
| Income band × Household size | Very Low ($70K) | Low ($40K) | Moderate ($10K) | Over (nothing) |
|---|---|---|---|---|
| Under $50K | usually Very Low | | | |
| $50–80K | depends on household size | often Low | | |
| $80–120K | | sometimes | often Moderate | |
| Over $120K | | | | usually Over |

---

## DOC 3 — Osceola County DPA (Kissimmee / St. Cloud)

**Title**: DPA — Osceola County

**Jurisdiction**: Osceola County, Florida (Kissimmee and St. Cloud)

**Assistance amounts (based on AMI tier)**:
- Very Low (≤50% AMI): up to **$80,000**
- Low (>50–80% AMI): up to **$60,000**
- Moderate (>80–120% AMI): up to **$40,000**

**Terms**: **Zero monthly payments** (deferred). Due on sale, refinance, or non-owner-occupancy per SHIP rules. Often forgiven over the affordability period.

**Eligibility**:
- First-time homebuyer (no ownership in 3 years)
- Minimum credit score: **640** (FICO mid-score)
- Maximum purchase price: **~$360,000**
- Household income: ≤120% AMI (varies by household size)
- Must complete HUD-approved homebuyer education course **plus** Osceola County's pre-purchase orientation
- Primary residence
- Must use a **participating SHIP lender** — Supernova is a participating lender

**Stacking**: Pairs with a first mortgage (FHA / Conventional). Frequently combined with Florida Bond.

---

## DOC 4 — Florida Bond (Florida Housing Finance Corporation)

**Title**: DPA — Florida Bond

**Jurisdiction**: Statewide Florida

**Programs included** (Florida Bond is an umbrella — Sofía refers to the bucket):
- HFA Preferred (Conventional)
- HFA Advantage (Conventional)
- Government Bond (FHA / VA / USDA first mortgage)
- FL Assist ($10K deferred second, 0%)
- FL HLP ($10K–$12.5K repayable second, 3%)
- PLUS (3%, 4%, or 5% of loan amount, forgivable over 5 years)
- Hometown Heroes (up to 5% / $35K for eligible essential workers)
- Salute Our Soldiers (Veterans)

**Amounts**: 3%–5% of loan amount, up to **~$80,000**

**Terms by sub-program**:
- FL Assist: deferred, 0%, due-on-sale
- FL HLP: repayable, 3%, monthly payments
- PLUS: forgivable over 5 years (20%/yr)

**Eligibility**:
- First-time homebuyer (waived for Veterans and Targeted Areas)
- Minimum credit score: **640** (some overlays allow 620)
- Household income: ≤140% AMI (county-specific chart)
- Purchase price: county-specific caps
- Primary residence
- Must complete homebuyer education

**Stacking**: Florida Bond is itself a first-mortgage + DPA program. It layers with Orange or Osceola County DPA in the right setups. A lender structures it.

---

## DOC 5 — Chenoa Fund (CBC Mortgage Agency)

**Title**: DPA — Chenoa Fund

**Jurisdiction**: **National** (49 states — not NY)

**Amount**: **3.5% or 5%** of the sales price

**Key differentiators**:
- **No income limit** — available to higher-income borrowers too
- **No first-time buyer requirement** — repeat buyers welcome
- **Minimum credit score: 600** (DPA Edge tier)

**Loan type**: FHA first mortgage (some conventional options available)

**Terms**:
- **Forgivable**: 0% interest, forgiven after 36 consecutive on-time primary-mortgage payments (any late payment resets the clock)
- **Repayable**: 10-year amortizing option also available

**Eligibility**:
- Primary residence only
- Credit 600+ (education course required for 600–619; any HUD-approved course for 620–639; waived for 640+)
- Borrower must qualify for the FHA first mortgage

**When to pitch Chenoa**: this is the universal fallback. It's the best option when someone:
- Has owned a home in the last 3 years (repeat buyer)
- Earns above the county AMI limits
- Needs the 600–619 credit floor
- Wants a home outside Orange/Osceola counties

---

## DOC 6 — Stacking & Combinations

**Title**: DPA Stacking Rules

- **Orange County DPA + Florida Bond**: common stack — county grant layered on top of Florida Housing first mortgage + DPA.
- **Osceola County DPA + Florida Bond**: same pattern. Max assistance in Osceola (Very Low tier) with stacking can approach $80K county + 5% Florida Bond.
- **Chenoa + Florida Bond**: generally not stackable — Chenoa is its own DPA on an FHA first.
- **Chenoa + County DPA**: generally not combined — county DPA pairs with Florida Bond first.

Sofía's rule of thumb:
- If the prospect is in Orange or Osceola and first-time and ≤120% AMI and 640+ credit → present County DPA + Florida Bond as the stack.
- If in another FL county and first-time and 640+ and within AMI → present Florida Bond.
- If repeat buyer, over-income, 600–619 credit, or outside FL → present Chenoa.
- If no match → offer advisor call without promising a program.

---

## DOC 7 — AMI Tier Estimation (rough)

**Title**: AMI Tier Rough Table

Use these as an approximation when the prospect gives an income band + household size. Always add "subject to program verification of exact AMI limits."

| Household size | Very Low (≤50%) | Low (≤80%) | Moderate (≤120%) |
|---|---|---|---|
| 1 | under ~$42K | ~$42K–$67K | ~$67K–$100K |
| 2 | under ~$48K | ~$48K–$77K | ~$77K–$115K |
| 3 | under ~$54K | ~$54K–$86K | ~$86K–$129K |
| 4 | under ~$60K | ~$60K–$96K | ~$96K–$144K |
| 5+ | under ~$65K | ~$65K–$104K | ~$104K–$156K |

Anything above the Moderate column = over-income for county DPA. Chenoa still works.

---

## DOC 8 — Non-DPA Loan Fit Summary

**Title**: Loan Products Quick Reference

**FHA**
- 3.5% down with 580+ credit; 10% down with 500–579
- Primary only; single family / condo / 2–4 unit / manufactured OK
- Upfront MIP 1.75% + annual MIP
- Seller can contribute up to 6% toward closing

**VA**
- 0% down for eligible service members / vets / surviving spouses
- No MI; funding fee (waived for disabled vets)
- Primary only

**USDA**
- 0% down in USDA-eligible rural zones
- Income limits (varies by county and household size)
- Primary only

**Conventional**
- 3–5% down for first-time; 10–20% for others
- 620+ credit typical
- PMI if <20% down (removable at 20% equity)
- Primary / second home / investment all eligible

**Bank Statement (self-employed)**
- 12 or 24 months of personal or business bank statements in lieu of tax returns
- 620+ credit typical
- 10–20% down
- Primary or investment

**DSCR (investor)**
- Qualifies on property cash flow (rent / PITIA), not personal income
- 20–25% down typical
- 620+ credit typical
- Investment properties only
- DSCR ratio ≥ 1.0 is baseline; ≥ 1.2 gets best pricing

**Foreign National / ITIN**
- No US credit required
- 25–30% down typical
- Documentation of income in home country
- Primary, second, or investment possible

**Cash-out Refinance**
- Up to 80% LTV typical (75% on investment)
- 620+ credit typical
- Proceeds must be seasoned 6+ months in most products

**Refinance (rate/term)**
- Break-even analysis: new rate must save enough to recoup costs within 2–3 years ideally
- Streamline options on existing FHA or VA

---

## DOC 9 — What Sofía Should NEVER Say

**Title**: Guardrails

- Never quote a specific interest rate or APR.
- Never promise approval ("you qualify" → use "may qualify" or "sounds like a fit").
- Never commit to a specific DPA amount without the "subject to program guidelines" caveat.
- Never ask for SSN, DOB, full bank account numbers, or income docs in chat.
- Never give legal, tax, or immigration advice.
- Never recommend one lender over Supernova.
- Never disclose internal pricing or lender relationships.
- Never fabricate programs or eligibility terms. If unsure, escalate.

---

## DOC 10 — Escalation Triggers

**Title**: When to Escalate

Call `Transfer to Human` when:
1. Prospect asks for a specific rate quote.
2. Prospect asks a legal, tax, or immigration question.
3. Prospect has a loan scenario not covered by the 11 flows (e.g., reverse mortgage, HELOC, construction loan).
4. Prospect provides conflicting info and clarification twice fails.
5. Prospect expresses frustration or unhappiness.
6. Prospect explicitly asks to speak to a person.
7. Prospect mentions pending foreclosure, bankruptcy < 2 years old, or short sale in the last 12 months.

On escalation, tag `agent-escalated` and send the warm handoff message from the system prompt.
