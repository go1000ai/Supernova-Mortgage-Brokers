export type County = "orange" | "osceola" | "other-fl" | "outside-fl";
export type YesNo = "yes" | "no";
export type HouseholdSize = 1 | 2 | 3 | 4 | 5;
export type IncomeBand = "under-50k" | "50-80k" | "80-120k" | "over-120k";
export type CreditBand = "under-600" | "600-619" | "620-639" | "640-plus";
export type PriceBand = "under-345k" | "345-360k" | "over-360k";
export type Timeline = "0-3" | "3-6" | "6-12" | "12-plus" | "exploring";
export type AmiTier = "very-low" | "low" | "moderate" | "over";

export interface WizardAnswers {
  primaryResidence: YesNo;
  firstTimeBuyer: YesNo;
  county: County;
  centralFlResidency: YesNo;
  householdSize: HouseholdSize;
  income: IncomeBand;
  credit: CreditBand;
  price: PriceBand;
  timeline: Timeline;
}

export interface MatchedProgram {
  id: "orange" | "osceola" | "florida-bond" | "chenoa";
  name: string;
  amount: string;
  badges: string[];
  blurb: { en: string; es: string };
  stackable?: boolean;
}

export interface QualificationResult {
  programs: MatchedProgram[];
  disqualified: boolean;
  reasons: string[];
  amiTier: AmiTier;
}

export function amiTierFor(income: IncomeBand, size: HouseholdSize): AmiTier {
  const thresholds: Record<HouseholdSize, { veryLow: number; low: number; moderate: number }> = {
    1: { veryLow: 42000, low: 67000, moderate: 100000 },
    2: { veryLow: 48000, low: 77000, moderate: 115000 },
    3: { veryLow: 54000, low: 86000, moderate: 129000 },
    4: { veryLow: 60000, low: 96000, moderate: 144000 },
    5: { veryLow: 64800, low: 103700, moderate: 155500 },
  };
  const estimate: Record<IncomeBand, number> = {
    "under-50k": 45000,
    "50-80k": 65000,
    "80-120k": 100000,
    "over-120k": 135000,
  };
  const t = thresholds[size];
  const dollars = estimate[income];
  if (dollars <= t.veryLow) return "very-low";
  if (dollars <= t.low) return "low";
  if (dollars <= t.moderate) return "moderate";
  return "over";
}

function orangeAmount(tier: AmiTier): string {
  if (tier === "very-low") return "$70,000";
  if (tier === "low") return "$40,000";
  if (tier === "moderate") return "$10,000";
  return "$0";
}

function osceolaAmount(tier: AmiTier): string {
  if (tier === "very-low") return "$80,000";
  if (tier === "low") return "$60,000";
  if (tier === "moderate") return "$40,000";
  return "$0";
}

const creditRank: Record<CreditBand, number> = {
  "under-600": 0,
  "600-619": 1,
  "620-639": 2,
  "640-plus": 3,
};

export function qualify(a: WizardAnswers): QualificationResult {
  const programs: MatchedProgram[] = [];
  const reasons: string[] = [];
  const tier = amiTierFor(a.income, a.householdSize);

  if (a.primaryResidence === "no") {
    return {
      programs: [],
      disqualified: true,
      reasons: ["DPA programs require the home to be your primary residence."],
      amiTier: tier,
    };
  }

  if (creditRank[a.credit] < 1) {
    return {
      programs: [],
      disqualified: true,
      reasons: [
        "A minimum credit score of 600 is required for DPA programs. Supernova can help you build your credit.",
      ],
      amiTier: tier,
    };
  }

  const firstTime = a.firstTimeBuyer === "no";

  const orangeEligible =
    a.county === "orange" &&
    firstTime &&
    a.centralFlResidency === "yes" &&
    creditRank[a.credit] >= 2 &&
    a.price !== "over-360k" &&
    a.price !== "345-360k" &&
    tier !== "over";

  if (orangeEligible) {
    programs.push({
      id: "orange",
      name: "Orange County DPA",
      amount: `Up to ${orangeAmount(tier)}`,
      badges: ["Forgivable", "First-Time Buyer"],
      blurb: {
        en: "Forgivable assistance for Orange County homes up to $345K. Amount based on your income tier.",
        es: "Ayuda condonable para casas en Orange County hasta $345K. El monto depende del nivel de ingresos.",
      },
      stackable: true,
    });
  } else if (a.county === "orange") {
    if (!firstTime) reasons.push("Orange County DPA requires first-time buyer status (no ownership in 3 years).");
    if (a.centralFlResidency === "no") reasons.push("Orange County DPA requires 12+ months of residency in Central Florida.");
    if (creditRank[a.credit] < 2) reasons.push("Orange County DPA requires a 620+ credit score.");
    if (a.price === "over-360k" || a.price === "345-360k") reasons.push("Orange County DPA caps purchase price at $345K.");
    if (tier === "over") reasons.push("Orange County DPA requires income at or below 120% AMI.");
  }

  const osceolaEligible =
    a.county === "osceola" &&
    firstTime &&
    creditRank[a.credit] >= 3 &&
    a.price !== "over-360k" &&
    tier !== "over";

  if (osceolaEligible) {
    programs.push({
      id: "osceola",
      name: "Osceola County DPA",
      amount: `Up to ${osceolaAmount(tier)}`,
      badges: ["0 Payments", "Max $360K"],
      blurb: {
        en: "Deferred assistance with zero monthly payments for Osceola County homes up to $360K.",
        es: "Asistencia diferida sin pagos mensuales para casas en Osceola County hasta $360K.",
      },
      stackable: true,
    });
  } else if (a.county === "osceola") {
    if (!firstTime) reasons.push("Osceola County DPA requires first-time buyer status.");
    if (creditRank[a.credit] < 3) reasons.push("Osceola County DPA requires a 640+ credit score.");
    if (a.price === "over-360k") reasons.push("Osceola County DPA caps purchase price at $360K.");
    if (tier === "over") reasons.push("Osceola County DPA requires income at or below 120% AMI.");
  }

  const isFlCounty = a.county === "orange" || a.county === "osceola" || a.county === "other-fl";
  const floridaBondEligible =
    isFlCounty && firstTime && creditRank[a.credit] >= 3 && tier !== "over";

  if (floridaBondEligible) {
    const stackable = a.county === "orange" || a.county === "osceola";
    programs.push({
      id: "florida-bond",
      name: "Florida Bond (Florida Housing)",
      amount: "3%–5% loan up to $80,000",
      badges: stackable ? ["Combinable", "Deferred", "Stacks with County DPA"] : ["Combinable", "Deferred"],
      blurb: {
        en: stackable
          ? "Statewide first-mortgage + DPA that can be stacked on top of your county DPA for maximum assistance."
          : "Statewide assistance from Florida Housing — deferred second mortgage available in any Florida county.",
        es: stackable
          ? "Primera hipoteca estatal + DPA combinable con el DPA del condado para máxima asistencia."
          : "Asistencia estatal de Florida Housing — segunda hipoteca diferida disponible en cualquier condado de Florida.",
      },
      stackable: true,
    });
  } else if (isFlCounty) {
    if (!firstTime) reasons.push("Florida Bond requires first-time buyer status.");
    if (creditRank[a.credit] < 3) reasons.push("Florida Bond requires a 640+ credit score.");
    if (tier === "over") reasons.push("Florida Bond requires income within county AMI limits.");
  }

  const chenoaEligible = creditRank[a.credit] >= 1;
  if (chenoaEligible) {
    programs.push({
      id: "chenoa",
      name: "Chenoa Fund",
      amount: "Up to 5% DPA",
      badges: ["Forgivable", "FHA", "No Income Limit"],
      blurb: {
        en: "Nationwide FHA down payment assistance with no income limit — available to repeat buyers too.",
        es: "Asistencia nacional FHA sin límite de ingresos — también disponible para compradores recurrentes.",
      },
    });
  }

  return {
    programs,
    disqualified: programs.length === 0,
    reasons,
    amiTier: tier,
  };
}

export function summaryForNotes(a: WizardAnswers, r: QualificationResult): string {
  const countyLabel: Record<County, string> = {
    orange: "Orange County, FL",
    osceola: "Osceola County, FL",
    "other-fl": "Other Florida County",
    "outside-fl": "Outside Florida",
  };
  const tierLabel: Record<AmiTier, string> = {
    "very-low": "Very Low (<50% AMI)",
    low: "Low (50-80% AMI)",
    moderate: "Moderate (80-120% AMI)",
    over: "Over 120% AMI",
  };
  const incomeLabel: Record<IncomeBand, string> = {
    "under-50k": "Under $50K",
    "50-80k": "$50K-$80K",
    "80-120k": "$80K-$120K",
    "over-120k": "Over $120K",
  };
  const creditLabel: Record<CreditBand, string> = {
    "under-600": "Under 600",
    "600-619": "600-619",
    "620-639": "620-639",
    "640-plus": "640+",
  };
  const priceLabel: Record<PriceBand, string> = {
    "under-345k": "Under $345K",
    "345-360k": "$345K-$360K",
    "over-360k": "Over $360K",
  };
  const timelineLabel: Record<Timeline, string> = {
    "0-3": "0-3 months",
    "3-6": "3-6 months",
    "6-12": "6-12 months",
    "12-plus": "12+ months",
    exploring: "Just exploring",
  };

  const lines = [
    "--- DPA Wizard Submission ---",
    `Timeline: ${timelineLabel[a.timeline]}`,
    `County: ${countyLabel[a.county]}`,
    `First-time buyer: ${a.firstTimeBuyer === "no" ? "Yes (no ownership in 3 yrs)" : "No (owned in last 3 yrs)"}`,
    `Primary residence: ${a.primaryResidence}`,
    `Central FL 12-mo residency: ${a.centralFlResidency}`,
    `Household size: ${a.householdSize}`,
    `Income band: ${incomeLabel[a.income]} (AMI tier: ${tierLabel[r.amiTier]})`,
    `Credit band: ${creditLabel[a.credit]}`,
    `Target price: ${priceLabel[a.price]}`,
    "",
    "Matched programs:",
    ...(r.programs.length > 0 ? r.programs.map((p) => `  • ${p.name} — ${p.amount}`) : ["  • None — needs advisor follow-up"]),
  ];
  if (r.reasons.length > 0) {
    lines.push("", "Gating notes:", ...r.reasons.map((x) => `  - ${x}`));
  }
  return lines.join("\n");
}
