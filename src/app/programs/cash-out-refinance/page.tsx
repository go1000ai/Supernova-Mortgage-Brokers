import { Metadata } from "next";
import ProgramPageLayout from "@/components/program-page-layout";

export const metadata: Metadata = {
  title:
    "Cash Out Refinance | Supernova Mortgage Brokers - Unlock Your Home Equity in Florida",
  description:
    "Tap into your home equity with a cash out refinance from Supernova Mortgage Brokers in Kissimmee, FL. Consolidate debt, fund renovations, or access cash for major expenses. Competitive rates and expert guidance. NMLS #1880516.",
};

export default function CashOutRefinancePage() {
  return (
    <ProgramPageLayout
      title="Cash Out Refinance"
      subtitle="Refinance Program"
      heroImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
      description="Your home is more than a place to live — it's a powerful financial asset. A cash out refinance allows you to replace your existing mortgage with a new, larger loan and receive the difference as cash at closing. Whether you want to consolidate high-interest debt, fund a major home renovation, cover education expenses, or build an emergency reserve, a cash out refinance turns the equity you've built over time into money you can use today — often at a significantly lower interest rate than credit cards or personal loans."
      benefits={[
        "Access the equity you've built in your home as tax-advantaged cash",
        "Potentially secure a lower interest rate than your current mortgage",
        "Consolidate high-interest credit card and personal loan debt into one payment",
        "Fund home improvements that can further increase your property value",
        "Flexible loan terms from 15 to 30 years to match your financial goals",
        "Simplify your finances with one predictable monthly mortgage payment",
      ]}
      features={[
        {
          title: "How Cash Out Works",
          description:
            "A cash out refinance replaces your current mortgage with a new loan for more than you owe. The difference between the new loan amount and your existing balance is paid to you in cash at closing. For example, if your home is worth $400,000 and you owe $250,000, you could refinance for $320,000 and receive approximately $70,000 in cash after closing costs.",
        },
        {
          title: "Maximum LTV",
          description:
            "Most cash out refinance programs allow you to borrow up to 80% of your home's appraised value, meaning you retain at least 20% equity in the property. Some programs, such as VA cash out refinances, may allow up to 100% LTV for eligible veterans. The maximum amount you can access depends on your home's current value, outstanding mortgage balance, and the specific loan program.",
        },
        {
          title: "Rate & Term Options",
          description:
            "Choose between fixed-rate and adjustable-rate options for your new mortgage. Fixed-rate cash out refinances give you a locked-in payment for the entire loan term, providing long-term predictability. Adjustable-rate options may offer a lower initial rate, which can be advantageous if you plan to pay down the balance quickly or sell the property within a few years.",
        },
        {
          title: "Closing Process",
          description:
            "The cash out refinance closing process typically takes 30 to 45 days from application to funding. After submitting your application and documentation, an appraisal will be ordered to determine your home's current market value. Once approved, you'll review and sign your closing documents, and the cash proceeds are typically available within three business days after closing.",
        },
      ]}
      faqs={[
        {
          question:
            "How much cash can I take out of my home?",
          answer:
            "The amount of cash you can access depends on your home's current appraised value and your outstanding mortgage balance. Most conventional cash out refinance programs allow you to borrow up to 80% of your home's value. For example, if your home appraises at $500,000, you could potentially refinance up to $400,000. If your current loan balance is $280,000, you could receive up to $120,000 in cash, minus closing costs.",
        },
        {
          question:
            "Will a cash out refinance increase my monthly payment?",
          answer:
            "Because you are borrowing more than your current mortgage balance, your monthly payment may increase. However, if current interest rates are lower than the rate on your existing mortgage, the increase may be minimal — and in some cases, your payment could actually decrease. Additionally, if you use the cash to pay off high-interest debts, your overall monthly obligations could be significantly lower.",
        },
        {
          question:
            "How long do I need to own my home before I can do a cash out refinance?",
          answer:
            "Most lenders require a seasoning period of at least six months — meaning you must have owned and lived in the property for at least six months before applying. Some loan programs may require 12 months of ownership. You will also need to have built sufficient equity in the home, typically at least 20%, to qualify for a cash out refinance.",
        },
        {
          question:
            "Can I use cash out refinance funds for anything I want?",
          answer:
            "In most cases, yes. Common uses include home renovations, debt consolidation, education expenses, medical bills, starting a business, or building an emergency fund. However, the funds cannot be used for certain restricted purposes depending on the loan program. Your loan officer can help you understand any limitations based on the specific program you choose.",
        },
        {
          question:
            "What are the closing costs on a cash out refinance?",
          answer:
            "Closing costs for a cash out refinance typically range from 2% to 5% of the total loan amount. These include appraisal fees, title insurance, origination fees, recording fees, and prepaid items like property taxes and homeowner's insurance. In many cases, you have the option to roll closing costs into the new loan amount so you don't have to pay them out of pocket.",
        },
      ]}
      eligibility={[
        "Sufficient home equity — typically at least 20% equity remaining after the cash out",
        "Current mortgage must be in good standing with no late payments in the past 12 months",
        "Minimum credit score of 620 for conventional programs (VA and FHA cash out may differ)",
        "Full income documentation including pay stubs, W-2s, and tax returns for the past two years",
        "Property appraisal required to confirm current market value and condition of the home",
      ]}
      ctaText="Start Your Cash Out Refi"
    />
  );
}
