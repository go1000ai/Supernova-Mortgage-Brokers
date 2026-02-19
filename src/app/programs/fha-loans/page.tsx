import { Metadata } from "next";
import ProgramPageLayout from "@/components/program-page-layout";

export const metadata: Metadata = {
    title: "FHA Loans | Supernova Mortgage Brokers - Low Down Payment Home Loans in Florida",
    description:
        "FHA home loans in Kissimmee, FL with as little as 3.5% down payment. Flexible credit requirements and competitive rates for first-time homebuyers. Supernova Mortgage Brokers NMLS #1880516.",
};

export default function FHALoansPage() {
    return (
        <ProgramPageLayout
            title="FHA Home Loans"
            subtitle="Purchase Program"
            heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            description="FHA loans are one of the most popular mortgage options for first-time homebuyers and those looking for flexible qualifying guidelines. Backed by the Federal Housing Administration, these government-insured loans offer lower down payments, more lenient credit requirements, and competitive interest rates -- making homeownership accessible even if you have limited savings or a less-than-perfect credit history."
            benefits={[
                "Low down payment starting at just 3.5% of the purchase price",
                "Flexible credit requirements with scores as low as 580 accepted",
                "Gift funds from family or approved donors allowed for your down payment",
                "Lower closing costs compared to many conventional loan programs",
                "Sellers can contribute up to 6% of the sale price toward your closing costs",
                "Available for primary residences including single-family homes, condos, and multi-units",
            ]}
            features={[
                {
                    title: "Down Payment Options",
                    description:
                        "With an FHA loan, you can purchase a home with as little as 3.5% down when you have a credit score of 580 or higher. If your score falls between 500 and 579, a 10% down payment is required. Down payment funds can come from savings, financial gifts from family members, or eligible down payment assistance programs.",
                },
                {
                    title: "Credit Requirements",
                    description:
                        "FHA loans are designed to be accessible. Borrowers with credit scores of 580 or above qualify for the minimum 3.5% down payment. Scores between 500 and 579 may still qualify with a larger down payment. FHA guidelines also allow for higher debt-to-income ratios than conventional loans, giving more buyers the chance to qualify.",
                },
                {
                    title: "Mortgage Insurance",
                    description:
                        "FHA loans require both an upfront mortgage insurance premium (UFMIP) of 1.75% of the loan amount and an annual mortgage insurance premium (MIP) paid monthly. The UFMIP can be rolled into the loan balance. MIP rates vary based on loan term, loan-to-value ratio, and loan amount, and typically remain for the life of the loan.",
                },
                {
                    title: "Property Requirements",
                    description:
                        "Properties financed with an FHA loan must meet HUD's minimum property standards, which ensure the home is safe, structurally sound, and habitable. An FHA-approved appraiser will inspect the property. Eligible property types include single-family homes, 2-4 unit properties (owner-occupied), FHA-approved condominiums, and certain manufactured homes.",
                },
            ]}
            faqs={[
                {
                    question: "What is an FHA loan?",
                    answer: "An FHA loan is a mortgage insured by the Federal Housing Administration, a division of the U.S. Department of Housing and Urban Development (HUD). Because the government insures these loans, lenders can offer more favorable terms including lower down payments and flexible credit requirements. FHA loans are especially popular among first-time homebuyers.",
                },
                {
                    question: "What is the minimum credit score for an FHA loan?",
                    answer: "The minimum credit score for an FHA loan is 500. However, borrowers with a score between 500 and 579 must make a 10% down payment, while those with a score of 580 or higher qualify for the 3.5% minimum down payment. At Supernova Mortgage Brokers, we work with you to find the best path forward regardless of where your credit stands today.",
                },
                {
                    question: "How much do I need for a down payment on an FHA loan?",
                    answer: "You need a minimum of 3.5% of the purchase price as a down payment if your credit score is 580 or above. For example, on a $300,000 home, that's just $10,500. If your credit score is between 500 and 579, you will need 10% down. Your down payment can come from personal savings, gift funds from relatives, or qualified down payment assistance programs.",
                },
                {
                    question: "Do FHA loans require PMI or mortgage insurance?",
                    answer: "Yes, FHA loans require mortgage insurance premiums (MIP) rather than traditional PMI. This includes an upfront mortgage insurance premium (UFMIP) of 1.75% of the loan amount, which is typically financed into the loan, and an annual MIP that is paid as part of your monthly mortgage payment. For most FHA loans, MIP is required for the entire duration of the loan.",
                },
                {
                    question: "What are the current FHA loan limits?",
                    answer: "FHA loan limits vary by county and are updated annually. In most areas of Florida, the standard FHA loan limit for a single-family home is competitive with local housing prices. Higher-cost counties may have elevated limits. Contact Supernova Mortgage Brokers at (689) 242-4400 for the most current FHA loan limits in your specific area.",
                },
            ]}
            eligibility={[
                "Must be a U.S. citizen, lawful permanent resident, or eligible non-citizen with a valid Social Security number",
                "Minimum credit score of 500 (580+ for 3.5% down payment; 500-579 requires 10% down)",
                "Steady employment history or verifiable income for at least the past two years",
                "Debt-to-income ratio typically no higher than 43%, though higher ratios may be approved with compensating factors",
                "The property must be your primary residence -- FHA loans cannot be used for investment properties or vacation homes",
            ]}
            ctaText="Start Your FHA Application"
        />
    );
}
