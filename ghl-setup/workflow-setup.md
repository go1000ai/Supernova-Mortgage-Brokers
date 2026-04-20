# GHL Workflow Setup

Three workflows wire Sofía end-to-end. Build them in this order in **GHL → Automation → Workflows**.

## Workflow 1 — "Social Comment → Sofía Handoff"

Fires when a prospect comments a keyword on any Instagram or Facebook post. Replies publicly, creates the contact, sets the keyword context, and assigns Sofía to the DM.

### Trigger
- **Facebook Comment** (add a second trigger for **Instagram Comment** in the same workflow, or duplicate the workflow for IG)
- **Filter — Comment contains (any of):** `DPA`, `FHA`, `VA`, `USDA`, `CONV`, `REFI`, `CASHOUT`, `SELF`, `DSCR`, `VISA`, `RATE`
- (Case-insensitive — GHL matches any case.)

### Actions (in order)

**1. Reply to Comment** (public)
- EN: *"Check your DMs — sending you the prequal now 👋"*
- ES: *"Revisa tus mensajes — te envío la pre-calificación ya 👋"*
- Use a conditional based on `{{contact.preferred_language}}` or send bilingual: *"Check your DMs 👋 / Revisa tus DM 👋"*

**2. Find or Create Contact**
- GHL auto-creates a contact from the commenter's profile. If the contact already exists, it's found.
- Set source: `Instagram Comment — {{trigger.keyword}}` or `Facebook Comment — {{trigger.keyword}}`.

**3. Update Contact Field** — `Keyword Trigger`
- Value: the exact keyword that matched (DPA, FHA, etc.). This is how Sofía knows which flow to run.
- In GHL, extract with a regex or use If/Else branches per keyword and set the field accordingly.

**4. Update Contact Field** — `Wizard Source`
- Value: `Instagram Comment — {{keyword}}` or `Facebook Comment — {{keyword}}`.

**5. Add Tag**
- Value: `social-comment-{{keyword-lowercase}}` (e.g., `social-comment-dpa`)

**6. Send DM / Start Conversation** — pick the right channel action:
- **Instagram:** "Send Instagram Message"
- **Facebook:** "Send Facebook Message"
- Message: the OPENING message from Sofía's system prompt (bilingual — Sofía detects language from reply).

**7. Assign AI Agent**
- Agent: **Sofía**
- From this point Sofía drives the conversation. She reads `Keyword Trigger`, runs the matching flow from the system prompt, and updates custom fields as she collects answers.

### Stop conditions
- If the comment is from the Supernova page itself → skip (filter on trigger).
- If the prospect has tag `do-not-contact` → skip.

---

## Workflow 2 — "DPA/Loan Lead Qualified"

Fires from inside Sofía's flow via `Trigger Workflow` action when she finishes the qualification. Routes the lead to the right place.

### Trigger
- **Workflow Event** → name it `DPA/Loan Lead Qualified` so Sofía's `Trigger Workflow` action can call it.

### Actions (branch on `Keyword Trigger`)

**Branch A — DPA (qualified):**
1. Add tags based on Sofía's matches (already set by agent: `dpa-orange`, `dpa-osceola`, `dpa-florida-bond`, `dpa-chenoa`)
2. Internal notification to loan officer team (email + SMS): *"New DPA lead — {{contact.name}} — matched: {{contact.matched_programs}}. Notes: {{contact.qualification_summary}}"*
3. Assign contact to round-robin loan officer
4. Enroll in nurture campaign: **"DPA Nurture — 7 days"**
5. Send prospect a follow-up confirmation with calendar link (if not yet booked)

**Branch B — FHA/VA/USDA/CONV (fit):**
1. Tag `qualified-{{product}}`
2. Internal notification (lighter — email only)
3. Assign to round-robin loan officer
4. Enroll in nurture campaign: **"Purchase Loan Nurture — 7 days"**

**Branch C — REFI/CASHOUT (fit):**
1. Tag `qualified-refi`
2. Internal notification (email + SMS if current rate in `Current Rate` field > 7%)
3. Enroll in nurture: **"Refi Nurture — 5 days"**

**Branch D — SELF/DSCR/VISA (fit):**
1. Tag `qualified-specialty`
2. Route to the specialty loan officer (not round-robin — these need expertise)
3. Internal notification (email + SMS)
4. Enroll in nurture: **"Specialty Loan Nurture — 7 days"**

**Branch E — RATE (any):**
1. Tag `inquiry-rate`
2. Lower-priority — email notification only, no SMS
3. Enroll in nurture: **"General Rate Inquiry — 14 days"**

**Branch F — Disqualified:**
1. Tag `disqualified-{{reason}}` (already set by Sofía)
2. Enroll in nurture: **"Credit Building Nurture — 30 days"** (if `disqualified-credit`)
3. No loan officer assignment — let the nurture do the work

---

## Workflow 3 — "Sofía Escalation to Human"

Fires when Sofía calls `Transfer to Human`.

### Trigger
- **Contact Tag Added** → tag: `agent-escalated`

### Actions
1. Internal notification (SMS + email, high priority) to on-duty loan officer: *"Sofía escalation — {{contact.name}} — {{contact.keyword_trigger}} — last 3 messages: ..."*
2. Assign contact to the on-duty loan officer
3. Pause any nurture campaigns the contact is in
4. Send prospect an internal confirmation: *"Bringing in a loan officer now — they'll message you shortly."* / *"Te conecto con un agente ahora — te escribirán en un momento."*
5. Add tag `needs-human-followup`
6. Create a **Task** for the loan officer: "Respond to {{contact.name}} within 15 min" — due in 15 minutes.

---

## Workflow 4 (optional) — "TikTok Comment → Link Response"

TikTok does not allow DM automation via API. Best available play:

### Trigger
- **TikTok Comment** with keyword filter (DPA, FHA, etc.)

### Actions
1. **Reply to Comment** (public): *"DMs are off on TikTok, but you can prequalify free here: supernova.com/first-time-home-buyers — or call (689) 262-4400 🙌"* / Spanish version if bio is Spanish.
2. Pin the reply to the comment.
3. No contact created — TikTok doesn't expose commenter identity via API in most cases.

This is a best-effort fallback. Primary DM automation lives on IG + Facebook.

---

## AI Agent Studio — Sofía Configuration

### Basic
- **Name**: Sofía
- **Role**: Pre-qualification specialist for Supernova Mortgage Brokers
- **Channels**: Instagram DM, Facebook Messenger, SMS, Web Chat
- **Default language**: Auto-detect (English or Spanish from first message)

### Instructions
Paste the entire contents of [sofia-system-prompt.md](sofia-system-prompt.md) into the Instructions / System Prompt field.

### Knowledge Base
Upload each DOC section from [sofia-knowledge-base.md](sofia-knowledge-base.md) as a separate document with the title specified. This lets Sofía cite the right program when asked.

### Actions (tools)
Configure these actions on the agent:

| Action | GHL Action Type | Notes |
|---|---|---|
| Update Contact Field | Built-in — Update Contact Field | Map each wizard custom field. The agent decides which to update based on the conversation. |
| Add Tag | Built-in — Add Tag | Whitelist the relevant tags (see seed script output for the full list). |
| Remove Tag | Built-in — Remove Tag | For clearing pending/in-progress states. |
| Book Appointment | Built-in — Calendar Action | Connect to the main sales calendar. |
| Trigger Workflow | Built-in — Trigger Workflow | Whitelist: `DPA/Loan Lead Qualified` (Workflow 2). |
| Transfer to Human | Built-in — Transfer / Escalate | Tag `agent-escalated` + assign to on-duty user. |
| Compute DPA Match | Custom Webhook Action | POST to `https://supernova.com/api/ghl-qualify` (see below). |

### Compute DPA Match — custom webhook

This is the only action that needs a new endpoint on the website. It takes the prospect's answers, runs the qualification logic (same as the landing-page wizard), and returns matched programs so Sofía can present them accurately.

- **Method**: POST
- **URL**: `https://supernova.com/api/ghl-qualify`
- **Body**:
  ```json
  {
    "primaryResidence": "yes|no",
    "firstTimeBuyer": "yes|no",
    "county": "orange|osceola|other-fl|outside-fl",
    "centralFlResidency": "yes|no",
    "householdSize": 1-5,
    "income": "under-50k|50-80k|80-120k|over-120k",
    "credit": "under-600|600-619|620-639|640-plus",
    "price": "under-345k|345-360k|over-360k",
    "timeline": "0-3|3-6|6-12|12-plus|exploring"
  }
  ```
- **Response**:
  ```json
  {
    "programs": [
      { "id": "orange", "name": "Orange County DPA", "amount": "Up to $40,000", "badges": ["Forgivable", "First-Time Buyer"] }
    ],
    "disqualified": false,
    "reasons": [],
    "amiTier": "low",
    "summary": "Human-readable summary for the Qualification Summary field"
  }
  ```

The endpoint reuses the `qualify()` function already in [src/app/first-time-home-buyers/qualification.ts](../src/app/first-time-home-buyers/qualification.ts). See "Optional next step" below.

### Escalation conditions
Configure these as agent-level escalation triggers:
- No reply for 24h → send one nudge, then escalate
- Profanity or frustration detected → immediate escalation
- Off-topic loop (3+ messages without flow progress) → escalate

---

## Setup checklist

1. [ ] Run `node scripts/seed-ghl.mjs` from the project root to provision custom fields (the script reads `.env.local` automatically).
2. [ ] In GHL Settings → Tags, verify the tag list from the script output. Create any that didn't auto-create.
3. [ ] AI Agent Studio → New Agent → "Sofía" → paste system prompt and upload knowledge base docs.
4. [ ] Configure the 7 actions on Sofía, mapping each custom field and whitelisting tags.
5. [ ] Build Workflow 1 (Social Comment → Sofía Handoff) — connect IG + FB triggers.
6. [ ] Build Workflow 2 (DPA/Loan Lead Qualified) — the outcome router.
7. [ ] Build Workflow 3 (Sofía Escalation) — the human handoff.
8. [ ] Build Workflow 4 (TikTok Comment Reply) — optional fallback.
9. [ ] (Optional) Build the `/api/ghl-qualify` endpoint on the website if you want the agent to use deterministic matching logic instead of reasoning through the rules. Reuses existing `qualify()` function.
10. [ ] Test: comment `DPA` on a test post with a test IG account → confirm public reply → confirm DM starts → walk through flow → confirm custom fields populate → confirm qualified-lead workflow fires.

## Notes on limitations

- **TikTok**: no DM automation. Comment reply + bio-link rotation is the workaround.
- **Meta app review**: to send proactive IG/FB DMs from a business account, your Meta app needs `instagram_manage_messages` and `pages_messaging` permissions. GHL has these already if your FB page + IG business account are connected through GHL. If not, connect them first.
- **Keyword case sensitivity**: GHL's comment trigger is case-insensitive by default. Plan accordingly.
- **Multi-keyword comments**: if a prospect comments "DPA FHA", the first keyword in the filter order wins. Put DPA first in the keyword list since it's the highest-value lead type.
