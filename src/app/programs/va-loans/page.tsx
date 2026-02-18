import { Metadata } from "next";
import ProgramPageLayout from "@/components/program-page-layout";

export const metadata: Metadata = {
    title: "VA Loans | Supernova Mortgage Brokers - Zero Down Payment Home Loans for Veterans in Florida",
    description:
        "VA home loans for veterans, active-duty military, and eligible surviving spouses in Florida. Zero down payment, no PMI, and competitive rates. Supernova Mortgage Brokers NMLS #1880516.",
};

export default function VALoansPage() {
    return (
        <ProgramPageLayout
            title="VA Home Loans"
            subtitle="Veterans Program"
            heroImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            description="VA loans are a powerful home financing benefit earned by those who have served our country. Guaranteed by the U.S. Department of Veterans Affairs, VA loans offer unmatched advantages including zero down payment, no private mortgage insurance, and some of the lowest interest rates available -- helping veterans, active-duty service members, and eligible surviving spouses achieve homeownership with exceptional terms."
            benefits={[
                "Zero down payment required -- finance 100% of the home's purchase price",
                "No private mortgage insurance (PMI) saving you hundreds of dollars each month",
                "Competitive interest rates that are typically lower than conventional and FHA loans",
                "Flexible credit guidelines with no minimum score set by the VA, though lenders may have overlays",
                "Limited closing costs with caps on what veterans can be charged, reducing out-of-pocket expenses",
                "Assumable loan feature allows a qualified buyer to take over your VA loan at its existing rate",
            ]}
            features={[
                {
                    title: "Eligibility & Certificate of Eligibility (COE)",
                    description:
                        "To qualify for a VA loan, you must obtain a Certificate of Eligibility (COE) from the VA, which confirms your military service meets the program requirements. Eligible borrowers include veterans, active-duty service members with at least 90 days of continuous service, National Guard and Reserve members with six or more years of service, and certain surviving spouses of veterans who died in the line of duty or from a service-connected disability.",
                },
                {
                    title: "Zero Down Payment",
                    description:
                        "One of the most significant benefits of a VA loan is the ability to purchase a home with absolutely no down payment. Unlike FHA loans requiring 3.5% or conventional loans requiring 3-20%, VA loans allow you to finance the entire purchase price. This means you can buy a home sooner without needing years to save for a down payment, keeping more cash available for moving costs, furnishings, or an emergency fund.",
                },
                {
                    title: "No PMI Advantage",
                    description:
                        "Conventional loans typically require private mortgage insurance when you put down less than 20%, and FHA loans require mortgage insurance premiums for the life of the loan. VA loans eliminate this cost entirely. On a $350,000 home, skipping PMI can save you $150 to $300 per month -- that's $1,800 to $3,600 per year back in your pocket, making your monthly payment significantly more affordable.",
                },
                {
                    title: "VA Funding Fee",
                    description:
                        "Instead of mortgage insurance, VA loans include a one-time VA funding fee that supports the program for future veterans. The fee ranges from 1.25% to 3.3% of the loan amount depending on your down payment, type of service, and whether it is your first VA loan. This fee can be rolled into your loan balance. Veterans receiving VA disability compensation and certain surviving spouses are exempt from the funding fee entirely.",
                },
            ]}
            faqs={[
                {
                    question: "Who is eligible for a VA home loan?",
                    answer: "VA loans are available to veterans who meet minimum service requirements, active-duty service members with at least 90 continuous days of service, National Guard and Reserve members with at least six years of service (or 90 days of active-duty service under Title 10), and certain surviving spouses of veterans. You must obtain a Certificate of Eligibility (COE) to prove your qualification.",
                },
                {
                    question: "Is there really no down payment required?",
                    answer: "Yes, VA loans truly allow you to purchase a home with zero down payment, up to the conforming loan limit in your county. There is no requirement to put any money down, making it one of the most powerful homebuying benefits available. You may choose to make a down payment to reduce your VA funding fee or lower your monthly payment, but it is entirely optional.",
                },
                {
                    question: "What is the VA funding fee and can it be waived?",
                    answer: "The VA funding fee is a one-time charge that helps sustain the VA loan program. For first-time VA loan users with no down payment, the fee is typically 2.15% of the loan amount. The fee can be financed into your loan so you do not need to pay it upfront. Veterans receiving VA disability compensation, Purple Heart recipients on active duty, and eligible surviving spouses are fully exempt from paying the funding fee.",
                },
                {
                    question: "Can I use a VA loan more than once?",
                    answer: "Absolutely. Your VA loan benefit can be used multiple times throughout your life. Once you sell a home and pay off the VA loan, your full entitlement is restored. In some cases, you may even be able to have two VA loans at the same time if you have remaining entitlement. There is no limit to how many times you can use your VA benefit over your lifetime.",
                },
                {
                    question: "What types of properties can I buy with a VA loan?",
                    answer: "VA loans can be used to purchase single-family homes, VA-approved condominiums, and multi-unit properties up to four units (as long as you occupy one unit as your primary residence). The home must be your primary residence -- VA loans cannot be used for investment properties or vacation homes. New construction is also eligible when working with a VA-approved builder.",
                },
            ]}
            eligibility={[
                "Veterans with a discharge status of honorable or under honorable conditions who meet minimum active-duty service requirements",
                "Active-duty service members currently serving with at least 90 continuous days of active service",
                "National Guard and Reserve members with at least six years of service, or 90 days of active-duty service under Title 10 orders",
                "Surviving spouses of veterans who died in the line of duty or from a service-connected disability, who have not remarried (or remarried after age 57)",
                "A valid Certificate of Eligibility (COE) from the U.S. Department of Veterans Affairs is required to verify your entitlement",
            ]}
            ctaText="Start Your VA Application"
        />
    );
}
