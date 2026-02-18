import { Metadata } from "next";
import ProgramPageLayout from "@/components/program-page-layout";

export const metadata: Metadata = {
  title:
    "Bank Statement Loans | Supernova Mortgage Brokers - Self-Employed Home Loans in Florida",
  description:
    "Bank statement loans for self-employed borrowers in Kissimmee, FL and throughout Florida. No tax returns required — qualify using 12-24 months of bank statements. Supernova Mortgage Brokers, NMLS #1880516.",
};

export default function BankStatementPage() {
  return (
    <ProgramPageLayout
      title="Bank Statement Loans"
      subtitle="Self-Employed Program"
      heroImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80"
      description="Traditional mortgage qualification relies on tax returns and W-2s, but that approach often underrepresents the true earning power of self-employed professionals. Bank statement loans offer an alternative documentation path that lets business owners, freelancers, and entrepreneurs qualify based on actual cash flow rather than adjusted gross income. By analyzing 12 to 24 months of personal or business bank statements, lenders can see the real picture of your finances — giving you the buying power you deserve without the limitations of conventional underwriting."
      benefits={[
        "No tax returns required",
        "12-24 month bank statements accepted",
        "Self-employed friendly qualification",
        "Competitive interest rates",
        "Purchase & refinance available",
        "Up to $3M loan amounts",
      ]}
      features={[
        {
          title: "How Bank Statement Loans Work",
          description:
            "Instead of relying on tax returns and traditional income documentation, bank statement loans analyze your deposits over 12 to 24 months to determine qualifying income. Lenders calculate an average monthly deposit amount and apply an expense factor to arrive at your net income, giving self-employed borrowers a more accurate reflection of their earning capacity.",
        },
        {
          title: "Documentation Requirements",
          description:
            "You will need to provide 12 or 24 months of consecutive personal or business bank statements, a valid business license or CPA letter confirming self-employment, a profit and loss statement, and standard asset documentation. The streamlined process eliminates the need for W-2s, 1099s, or full tax returns.",
        },
        {
          title: "Rate Structure",
          description:
            "Bank statement loan rates are typically slightly higher than conventional mortgages due to the alternative documentation approach. However, competitive pricing is available depending on your credit score, down payment amount, and loan-to-value ratio. Rates improve with stronger credit profiles and larger down payments.",
        },
        {
          title: "Eligible Properties",
          description:
            "Bank statement loans can be used to finance primary residences, second homes, and investment properties. Eligible property types include single-family homes, condominiums, townhouses, and multi-unit properties up to four units, giving self-employed borrowers flexibility in their real estate goals.",
        },
      ]}
      faqs={[
        {
          question: "What exactly is a bank statement loan?",
          answer:
            "A bank statement loan is a type of non-QM (non-qualified mortgage) that allows self-employed borrowers to qualify using bank statements instead of traditional income documentation like tax returns and W-2s. Lenders review 12 to 24 months of bank statements to calculate your average monthly income and determine how much you can borrow.",
        },
        {
          question: "Who qualifies for a bank statement loan?",
          answer:
            "Bank statement loans are designed for self-employed individuals, including business owners, freelancers, independent contractors, and gig workers who have been self-employed for at least two years. You will need a credit score of 660 or higher, sufficient reserves, and a down payment of 10-20% depending on the loan amount.",
        },
        {
          question: "How are bank deposits calculated for qualification?",
          answer:
            "Lenders total all eligible deposits over the statement period and divide by the number of months to determine your average monthly income. For personal bank statements, 100% of deposits may be counted. For business bank statements, an expense factor (typically 50%) is applied to account for business operating costs, though this can vary based on your industry.",
        },
        {
          question: "What credit score do I need for a bank statement loan?",
          answer:
            "Most bank statement loan programs require a minimum credit score of 660, though some lenders may go as low as 620 with compensating factors such as a larger down payment or significant reserves. Higher credit scores — 700 and above — will qualify you for better interest rates and more favorable terms.",
        },
        {
          question: "Can I use my business bank account to qualify?",
          answer:
            "Yes, you can use either personal or business bank statements to qualify. Many self-employed borrowers prefer using business accounts because they often show higher deposit volumes. When using business bank statements, lenders typically apply an expense factor to separate business revenue from personal income, which is why a CPA letter or profit and loss statement may be requested.",
        },
      ]}
      eligibility={[
        "2+ years of self-employment history",
        "12-24 months of consecutive bank statements",
        "660+ credit score typically required",
        "10-20% down payment depending on loan amount",
        "Business license or CPA letter verifying self-employment",
      ]}
      ctaText="Start Your Bank Statement Application"
    />
  );
}
