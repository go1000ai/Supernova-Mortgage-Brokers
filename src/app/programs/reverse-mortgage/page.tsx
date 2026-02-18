import { Metadata } from "next";
import ProgramPageLayout from "@/components/program-page-layout";

export const metadata: Metadata = {
  title:
    "Reverse Mortgage | Supernova Mortgage Brokers - Senior Home Equity in Florida",
  description:
    "Reverse mortgage loans for homeowners aged 62 and older in Kissimmee, FL and throughout Florida. Convert your home equity into tax-free cash with no monthly mortgage payments. Supernova Mortgage Brokers, NMLS #1880516.",
};

export default function ReverseMortgagePage() {
  return (
    <ProgramPageLayout
      title="Reverse Mortgage Loans"
      subtitle="Senior Program"
      heroImage="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=80"
      description="For homeowners aged 62 and older, a reverse mortgage offers a powerful way to convert your home equity into usable cash — without giving up ownership of your home or taking on monthly mortgage payments. Whether you want to supplement retirement income, cover healthcare expenses, eliminate an existing mortgage payment, or simply enjoy greater financial flexibility, a reverse mortgage lets you tap into the wealth you have built in your home while continuing to live in it on your terms."
      benefits={[
        "No monthly mortgage payments required",
        "Stay in your home as long as you wish",
        "Tax-free proceeds typically",
        "Flexible disbursement options",
        "FHA-insured HECM available",
        "Non-recourse loan protection",
      ]}
      features={[
        {
          title: "How Reverse Mortgages Work",
          description:
            "A reverse mortgage works opposite to a traditional mortgage — instead of making monthly payments to a lender, the lender pays you based on the equity in your home. The loan balance grows over time as interest and fees accrue, and repayment is deferred until you sell the home, move out permanently, or pass away. You retain full ownership and title throughout the life of the loan.",
        },
        {
          title: "HECM vs Proprietary Reverse Mortgages",
          description:
            "The Home Equity Conversion Mortgage (HECM) is the most common reverse mortgage and is insured by the Federal Housing Administration. It offers strong consumer protections and is available for homes valued up to FHA limits. Proprietary reverse mortgages, also known as jumbo reverse mortgages, are offered by private lenders and can accommodate higher-value homes that exceed FHA limits, providing access to even more of your equity.",
        },
        {
          title: "Payment Options",
          description:
            "Reverse mortgage proceeds can be received in several ways to suit your financial needs. Choose a lump sum payment for immediate access to a large amount, a line of credit that grows over time and is available whenever you need it, fixed monthly payments for steady supplemental income, or a combination of these options. Your financial advisor can help determine which structure best fits your retirement plan.",
        },
        {
          title: "Repayment Conditions",
          description:
            "The reverse mortgage becomes due when the last surviving borrower sells the home, permanently moves out, or passes away. At that point, the home can be sold to repay the loan, and any remaining equity belongs to you or your heirs. Thanks to non-recourse protection, you or your heirs will never owe more than the home is worth at the time of repayment, even if the loan balance exceeds the property value.",
        },
      ]}
      faqs={[
        {
          question: "What is a reverse mortgage?",
          answer:
            "A reverse mortgage is a loan available to homeowners aged 62 and older that allows you to convert a portion of your home equity into cash. Unlike a traditional mortgage where you make payments to a lender, a reverse mortgage pays you — and repayment is deferred until you no longer live in the home. The most common type is the HECM, which is federally insured and regulated by HUD.",
        },
        {
          question: "Do I still own my home with a reverse mortgage?",
          answer:
            "Yes, absolutely. You retain full ownership and title to your home throughout the life of the reverse mortgage. The lender places a lien on the property, just like a traditional mortgage, but you remain the homeowner. You can continue living in your home, make modifications, and even leave it to your heirs, who will have the option to repay the loan and keep the property.",
        },
        {
          question: "When does a reverse mortgage need to be repaid?",
          answer:
            "A reverse mortgage becomes due and payable when the last surviving borrower sells the home, moves out of the home permanently (such as relocating to a long-term care facility for more than 12 consecutive months), or passes away. At that point, the loan is typically repaid through the sale of the home. Any equity remaining after the loan is settled goes to you or your heirs.",
        },
        {
          question:
            "What about property taxes and homeowner's insurance?",
          answer:
            "Even though you are not required to make monthly mortgage payments, you are still responsible for paying property taxes, homeowner's insurance, and any applicable HOA fees. You must also maintain the home in reasonable condition. Failure to meet these obligations could result in the loan becoming due. Some borrowers choose to set aside a portion of their reverse mortgage proceeds specifically for these ongoing costs.",
        },
        {
          question:
            "Can my spouse stay in the home if I pass away?",
          answer:
            "Yes. If your spouse is listed as a co-borrower on the reverse mortgage, they can continue living in the home and receiving any remaining loan proceeds without interruption. Even if your spouse is a non-borrowing spouse, current HUD rules provide protections that allow them to remain in the home as long as they meet certain conditions, including maintaining the property and paying taxes and insurance.",
        },
      ]}
      eligibility={[
        "Age 62 or older for at least one borrower",
        "Own your home outright or have significant equity",
        "Property must be your primary residence",
        "Complete HUD-approved reverse mortgage counseling",
        "Maintain property taxes, homeowner's insurance, and property upkeep",
      ]}
      ctaText="Explore Reverse Mortgage Options"
    />
  );
}
