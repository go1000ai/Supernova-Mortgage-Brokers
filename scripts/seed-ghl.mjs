#!/usr/bin/env node
/**
 * Seed GHL custom fields for the Sofía AI Agent Studio automation.
 *
 * Run once after configuring .env.local with GHL_API_KEY + GHL_LOCATION_ID:
 *   node scripts/seed-ghl.mjs
 *
 * The script is idempotent — it will skip fields that already exist by name.
 */

import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "..", ".env.local");
const envText = readFileSync(envPath, "utf8");
for (const line of envText.split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim().replace(/^['"]|['"]$/g, "");
}

const API_KEY = process.env.GHL_API_KEY;
const LOCATION_ID = process.env.GHL_LOCATION_ID;
if (!API_KEY || !LOCATION_ID) {
  console.error("Missing GHL_API_KEY or GHL_LOCATION_ID in .env.local");
  process.exit(1);
}

const BASE = "https://services.leadconnectorhq.com";
const HEADERS = {
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Version: "2021-07-28",
};

const FIELDS = [
  { name: "Wizard Source", dataType: "TEXT", placeholder: "e.g. Instagram DPA Comment, Website Wizard" },
  { name: "Keyword Trigger", dataType: "TEXT", placeholder: "DPA, FHA, VA, REFI, etc." },
  { name: "Primary Residence", dataType: "RADIO", options: ["Yes", "No"] },
  { name: "First Time Buyer", dataType: "RADIO", options: ["Yes (no ownership in 3 years)", "No"] },
  { name: "County", dataType: "RADIO", options: ["Orange", "Osceola", "Other Florida", "Outside Florida"] },
  { name: "Central FL Residency 12mo", dataType: "RADIO", options: ["Yes", "No"] },
  { name: "Household Size", dataType: "RADIO", options: ["1", "2", "3", "4", "5+"] },
  { name: "Income Band", dataType: "RADIO", options: ["Under $50K", "$50K-$80K", "$80K-$120K", "Over $120K"] },
  { name: "Credit Band", dataType: "RADIO", options: ["Under 600", "600-619", "620-639", "640+"] },
  { name: "Target Price", dataType: "RADIO", options: ["Under $345K", "$345K-$360K", "Over $360K"] },
  { name: "Buying Timeline", dataType: "RADIO", options: ["0-3 months", "3-6 months", "6-12 months", "12+ months", "Just exploring"] },
  { name: "AMI Tier", dataType: "RADIO", options: ["Very Low", "Low", "Moderate", "Over 120%"] },
  { name: "Matched Programs", dataType: "LARGE_TEXT", placeholder: "Comma-separated program matches from the agent" },
  { name: "Qualification Summary", dataType: "LARGE_TEXT", placeholder: "Full agent-generated summary" },
  { name: "Preferred Language", dataType: "RADIO", options: ["English", "Spanish"] },
  { name: "Loan Intent", dataType: "RADIO", options: ["Purchase", "Refinance", "Cash-out Refi", "Investment", "Bank Statement", "DSCR", "Foreign National", "VA", "USDA", "FHA"] },
  { name: "Current Rate", dataType: "TEXT", placeholder: "Used for REFI flow" },
  { name: "Loan Balance", dataType: "TEXT", placeholder: "Used for REFI flow" },
  { name: "Property Type", dataType: "RADIO", options: ["Single Family", "Condo", "Townhome", "2-4 Unit", "Manufactured"] },
  { name: "Military Status", dataType: "RADIO", options: ["Active Duty", "Veteran", "Reserve/Guard", "Surviving Spouse", "N/A"] },
  { name: "Visa/Residency Status", dataType: "RADIO", options: ["US Citizen", "Permanent Resident", "Work Visa", "Foreign National (no US ties)", "ITIN only"] },
];

const TAGS_TO_ENSURE = [
  "social-comment-dpa",
  "social-comment-fha",
  "social-comment-va",
  "social-comment-usda",
  "social-comment-conv",
  "social-comment-refi",
  "social-comment-cashout",
  "social-comment-self",
  "social-comment-dscr",
  "social-comment-visa",
  "social-comment-rate",
  "wizard-website",
  "wizard-sofia-agent",
  "dpa-orange",
  "dpa-osceola",
  "dpa-florida-bond",
  "dpa-chenoa",
  "qualified-dpa",
  "disqualified-credit",
  "disqualified-income",
  "disqualified-ownership",
  "disqualified-investment",
  "lang-en",
  "lang-es",
  "agent-escalated",
  "agent-completed",
];

async function listCustomFields() {
  const res = await fetch(`${BASE}/locations/${LOCATION_ID}/customFields`, { headers: HEADERS });
  if (!res.ok) throw new Error(`List fields failed: ${res.status} ${await res.text()}`);
  const json = await res.json();
  return json.customFields || [];
}

async function createCustomField(field) {
  const payload = {
    name: field.name,
    dataType: field.dataType,
    placeholder: field.placeholder,
    position: 0,
    model: "contact",
  };
  if (field.options) {
    payload.picklistOptions = field.options.map((o) => ({ key: o, value: o }));
  }
  const res = await fetch(`${BASE}/locations/${LOCATION_ID}/customFields`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Create "${field.name}" failed: ${res.status} ${err}`);
  }
  return res.json();
}

async function main() {
  console.log(`Seeding GHL location ${LOCATION_ID}...\n`);

  const existing = await listCustomFields();
  const existingByName = new Map(existing.map((f) => [f.name.toLowerCase(), f]));

  console.log("=== Custom fields ===");
  for (const field of FIELDS) {
    const hit = existingByName.get(field.name.toLowerCase());
    if (hit) {
      console.log(`  ✓ SKIP  ${field.name}  (id: ${hit.id})`);
      continue;
    }
    try {
      const created = await createCustomField(field);
      const id = created?.customField?.id ?? created?.id ?? "?";
      console.log(`  + CREATE ${field.name}  (id: ${id})`);
    } catch (err) {
      console.log(`  ✗ FAIL  ${field.name}  ${err.message}`);
    }
  }

  console.log("\n=== Tags ===");
  console.log("  Tags are created implicitly when first applied to a contact.");
  console.log("  The following tags are referenced by the agent + workflows —");
  console.log("  create them manually in GHL Settings → Tags, or let them auto-create:");
  for (const t of TAGS_TO_ENSURE) console.log(`    - ${t}`);

  console.log("\nDone. Next step: open ghl-setup/ and configure the AI Agent Studio + Workflows.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
