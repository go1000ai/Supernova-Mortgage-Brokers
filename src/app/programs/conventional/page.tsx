import { Metadata } from "next";
import ProgramPageLayout from "@/components/program-page-layout";

export const metadata: Metadata = {
  title:
    "Conventional Loans | Supernova Mortgage Brokers - Flexible Home Financing in Florida",
  description:
    "Explore conventional home loan options with Supernova Mortgage Brokers in Kissimmee, FL. Competitive rates, flexible terms, and up to 97% financing for qualified borrowers. NMLS #1880516.",
};

export default function ConventionalLoansPage() {
  return (
    <ProgramPageLayout
      title="Conventional Home Loans"
      subtitle="Purchase Program"
      heroImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
      description="Conventional loans are the gold standard for borrowers with strong credit profiles and stable financial histories. Backed by Fannie Mae and Freddie Mac rather than a government agency, conventional loans offer unmatched flexibility in terms, property types, and down payment options. Whether you're purchasing your first home, upgrading to your dream property, or investing in real estate, a conventional loan gives you the competitive rates and straightforward structure you need to move forward with confidence."
      benefits={[
        "Up to 97% financing available for qualified first-time homebuyers",
        "Choose from fixed-rate and adjustable-rate mortgage options",
        "No upfront mortgage insurance fee required",
        "Eligible for primary residences, second homes, and investment properties",
        "Private mortgage insurance (PMI) is removable once you reach 80% loan-to-value",
        "Flexible loan terms ranging from 10 to 30 years to fit your budget",
      ]}
      features={[
        {
          title: "Loan Types & Terms",
          description:
            "Select from fixed-rate mortgages that lock in your payment for the life of the loan, or adjustable-rate mortgages (ARMs) that offer lower initial rates. Terms are available in 10, 15, 20, 25, and 30-year options, giving you full control over your monthly payment and total interest costs.",
        },
        {
          title: "Down Payment Options",
          description:
            "Put as little as 3% down with conventional loan programs designed for first-time buyers. Traditional borrowers can choose from 5%, 10%, 15%, or 20% down payment options. A larger down payment reduces your monthly payment and can eliminate the need for private mortgage insurance entirely.",
        },
        {
          title: "PMI Details",
          description:
            "Private mortgage insurance is required when your down payment is less than 20%, but unlike FHA loans, PMI on a conventional loan is not permanent. Once your loan balance reaches 80% of your home's original value, you can request PMI removal — and it automatically cancels at 78%, saving you money over the life of the loan.",
        },
        {
          title: "Property Types",
          description:
            "Conventional loans cover a wide range of property types including single-family homes, condominiums, townhouses, and multi-unit properties up to four units. They can also be used for second homes and investment properties, making them the most versatile loan option available for building your real estate portfolio.",
        },
      ]}
      faqs={[
        {
          question:
            "What credit score do I need for a conventional loan?",
          answer:
            "Most conventional loan programs require a minimum credit score of 620. However, borrowers with scores of 740 or higher typically qualify for the best interest rates and lowest PMI premiums. If your score is between 620 and 740, you can still qualify but may see slightly higher rates or insurance costs.",
        },
        {
          question:
            "How is a conventional loan different from an FHA loan?",
          answer:
            "Conventional loans are not insured by a government agency, which means they have stricter credit requirements but offer significant advantages. Unlike FHA loans, conventional loans allow PMI to be removed, have no upfront mortgage insurance premium, and can be used for investment properties and second homes. They also tend to have lower total costs over the life of the loan for borrowers with good credit.",
        },
        {
          question:
            "Can I use a conventional loan to buy an investment property?",
          answer:
            "Yes. Conventional loans are one of the few loan types that allow financing for investment properties. Typically, you will need a larger down payment of 15% to 25% for an investment property, along with a strong credit score and cash reserves. Rental income from the property may be used to help qualify.",
        },
        {
          question:
            "How much are closing costs on a conventional loan?",
          answer:
            "Closing costs on a conventional loan typically range from 2% to 5% of the loan amount. These costs include appraisal fees, title insurance, origination fees, and prepaid items such as taxes and insurance. In some cases, the seller can contribute toward your closing costs — up to 3% for primary residences with less than 10% down, and up to 6% with 10% to 25% down.",
        },
        {
          question:
            "What is the maximum loan amount for a conventional mortgage in Florida?",
          answer:
            "For 2025, the conforming loan limit for most Florida counties is $806,500 for a single-family home. Higher limits may apply in designated high-cost areas. Loans that exceed the conforming limit are classified as jumbo loans and may have different qualification requirements. Contact us for the most current limits in your county.",
        },
      ]}
      eligibility={[
        "Minimum credit score of 620 (higher scores unlock better rates and lower PMI)",
        "Stable employment history with at least two years of consistent income",
        "Debt-to-income (DTI) ratio generally at or below 45%, with some exceptions up to 50%",
        "Sufficient assets for down payment and closing costs, verified through bank statements",
        "Property must meet appraisal requirements and be in acceptable condition per lender guidelines",
      ]}
      ctaText="Start Your Conventional Application"
    />
  );
}
