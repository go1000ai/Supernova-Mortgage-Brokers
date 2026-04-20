import type { Metadata } from "next";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Privacy Policy | Supernova Mortgage Brokers",
  description:
    "Privacy Policy for Supernova Mortgage Brokers. NMLS #1880516. Learn how we collect, use, share, and protect your personal and financial information in compliance with GLBA.",
  openGraph: {
    title: "Privacy Policy | Supernova Mortgage Brokers",
    description:
      "Privacy Policy for Supernova Mortgage Brokers. NMLS #1880516. GLBA-compliant privacy practices for mortgage services.",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero / Header */}
      <section className="pt-36 pb-16 px-6 relative overflow-hidden">
        {/* Subtle gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2922]/40 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-[#d29e4a] uppercase mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Privacy{" "}
            <span className="bg-gradient-to-r from-[#d29e4a] via-[#e8c47a] to-[#d29e4a] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto">
            This Privacy Policy describes how Supernova Mortgage Brokers
            collects, uses, shares, and protects your personal and financial
            information when you use our website or engage our mortgage brokerage
            services.
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-white/40">
            <span>Effective Date: February 17, 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#d29e4a]/50" />
            <span>Last Updated: February 17, 2026</span>
          </div>
        </div>
      </section>

      {/* Gold separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#d29e4a]/40 to-transparent" />

      {/* Privacy Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* 1. Introduction & Scope */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              1. Introduction &amp; Scope
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                Supernova Mortgage Brokers (&quot;Company,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;), NMLS #1880516, is committed
                to protecting the privacy and security of your personal
                information. This Privacy Policy explains our practices concerning
                the collection, use, disclosure, and safeguarding of information
                we obtain from and about you when you visit our website at{" "}
                <span className="text-[#e8c47a]">
                  www.supernovamortgage.com
                </span>{" "}
                (the &quot;Website&quot;), contact us by phone or email, or apply
                for mortgage services.
              </p>
              <p>
                This Privacy Policy is provided in accordance with the
                Gramm-Leach-Bliley Act (GLBA, 15 U.S.C. Section 6801 et seq.),
                the Fair Credit Reporting Act (FCRA), the California Consumer
                Privacy Act (CCPA) as amended by the California Privacy Rights
                Act (CPRA), and all other applicable federal and state privacy
                laws and regulations.
              </p>
              <p>
                By accessing our Website, providing us with your information, or
                using our services, you acknowledge that you have read and
                understood this Privacy Policy. If you do not agree with the
                practices described in this policy, please do not use our Website
                or services.
              </p>
            </div>
          </div>

          {/* 2. Information We Collect */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              2. Information We Collect
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                In connection with providing mortgage brokerage services, we may
                collect the following categories of information from you:
              </p>

              {/* Personal Information */}
              <div className="bg-[#0e2922]/60 border border-[#d29e4a]/20 rounded-2xl p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#d29e4a]">
                  A. Personal Identifying Information
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-2 text-white/60 text-sm">
                  <li>Full legal name, aliases, and previous names</li>
                  <li>
                    Social Security Number (SSN) or Individual Taxpayer
                    Identification Number (ITIN)
                  </li>
                  <li>Date of birth</li>
                  <li>Current and previous residential addresses</li>
                  <li>Phone numbers (home, work, mobile)</li>
                  <li>Email address</li>
                  <li>Marital status and number of dependents</li>
                  <li>Citizenship and immigration status</li>
                  <li>
                    Government-issued identification (driver&apos;s license, passport,
                    or state ID)
                  </li>
                  <li>Military/veteran status (for VA loan eligibility)</li>
                </ul>
              </div>

              {/* Financial Information */}
              <div className="bg-[#0e2922]/60 border border-[#d29e4a]/20 rounded-2xl p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#d29e4a]">
                  B. Financial Information
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-2 text-white/60 text-sm">
                  <li>
                    Employment information (employer name, position, length of
                    employment, income)
                  </li>
                  <li>
                    Income documentation (pay stubs, W-2 forms, tax returns, 1099
                    forms, profit &amp; loss statements)
                  </li>
                  <li>
                    Bank account information (account numbers, statements,
                    balances)
                  </li>
                  <li>
                    Investment and retirement account information (401k, IRA,
                    brokerage accounts)
                  </li>
                  <li>
                    Other assets (real estate owned, vehicles, personal property)
                  </li>
                  <li>
                    Liabilities and debts (credit card balances, student loans,
                    auto loans, child support, alimony)
                  </li>
                  <li>
                    Credit history and credit scores (obtained from consumer
                    reporting agencies with your authorization)
                  </li>
                  <li>
                    Bankruptcy, foreclosure, and judgement history
                  </li>
                  <li>Gift funds documentation (gift letters, donor information)</li>
                </ul>
              </div>

              {/* Property Information */}
              <div className="bg-[#0e2922]/60 border border-[#d29e4a]/20 rounded-2xl p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#d29e4a]">
                  C. Property Information
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-2 text-white/60 text-sm">
                  <li>Subject property address and legal description</li>
                  <li>
                    Property type (single-family, condo, multi-unit,
                    manufactured home)
                  </li>
                  <li>Occupancy type (primary residence, second home, investment)</li>
                  <li>Estimated or appraised property value</li>
                  <li>Purchase price and contract details</li>
                  <li>Current mortgage information (for refinance transactions)</li>
                  <li>
                    Homeowners association (HOA) information and fees
                  </li>
                  <li>Property tax information</li>
                  <li>Insurance information (homeowners, flood, wind)</li>
                </ul>
              </div>

              {/* Device and Usage Data */}
              <div className="bg-[#0e2922]/60 border border-[#d29e4a]/20 rounded-2xl p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#d29e4a]">
                  D. Device &amp; Usage Data
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-2 text-white/60 text-sm">
                  <li>
                    IP address, browser type and version, operating system
                  </li>
                  <li>Device identifiers and device type</li>
                  <li>
                    Pages visited, time spent on pages, links clicked, and
                    referring URLs
                  </li>
                  <li>
                    Location data (general geographic location derived from IP
                    address)
                  </li>
                  <li>
                    Cookies, web beacons, pixel tags, and similar tracking
                    technologies (see Section 8)
                  </li>
                  <li>
                    Information provided through forms, chat widgets, and contact
                    forms on our Website
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. How We Use Your Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              3. How We Use Your Information
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-white/60">
                <li>
                  <span className="text-white/70 font-medium">
                    Loan Processing &amp; Origination:
                  </span>{" "}
                  To process, evaluate, and submit your mortgage loan application
                  to potential lending partners; to verify your identity, income,
                  employment, assets, and creditworthiness
                </li>
                <li>
                  <span className="text-white/70 font-medium">
                    Underwriting Support:
                  </span>{" "}
                  To provide necessary documentation and information to
                  underwriters at lending institutions to facilitate loan approval
                </li>
                <li>
                  <span className="text-white/70 font-medium">
                    Servicing &amp; Communication:
                  </span>{" "}
                  To communicate with you regarding the status of your loan
                  application, provide updates, request additional documentation,
                  and respond to your inquiries
                </li>
                <li>
                  <span className="text-white/70 font-medium">
                    Compliance &amp; Legal Obligations:
                  </span>{" "}
                  To comply with applicable federal and state laws, regulations,
                  and regulatory requirements, including RESPA, TILA, ECOA, HMDA,
                  and the USA PATRIOT Act
                </li>
                <li>
                  <span className="text-white/70 font-medium">
                    Fraud Prevention:
                  </span>{" "}
                  To detect, investigate, and prevent fraudulent transactions and
                  other illegal activities, and to protect the rights and
                  property of Supernova Mortgage Brokers and our clients
                </li>
                <li>
                  <span className="text-white/70 font-medium">
                    Quality Improvement:
                  </span>{" "}
                  To improve our Website, services, and customer experience
                  through analytics and user feedback
                </li>
                <li>
                  <span className="text-white/70 font-medium">
                    Marketing (with Opt-Out):
                  </span>{" "}
                  To send you information about mortgage products, services,
                  promotions, educational content, and market updates that may be
                  of interest to you. You may opt out of marketing
                  communications at any time (see Section 7)
                </li>
              </ul>
            </div>
          </div>

          {/* 4. GLBA Privacy Notice */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              4. GLBA Privacy Notice
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <div className="bg-[#0e2922]/60 border border-[#d29e4a]/20 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#d29e4a]">
                  Rev. February 2026
                </h3>
                <div className="border-b border-[#d29e4a]/10 pb-4">
                  <h4 className="text-white/80 font-semibold mb-2">
                    FACTS: WHAT DOES SUPERNOVA MORTGAGE BROKERS DO WITH YOUR
                    PERSONAL INFORMATION?
                  </h4>
                  <p className="text-white/50 text-sm">
                    Financial companies choose how they share your personal
                    information. Federal law gives consumers the right to limit
                    some but not all sharing. Federal law also requires us to tell
                    you how we collect, share, and protect your personal
                    information. Please read this notice carefully to understand
                    what we do.
                  </p>
                </div>

                <div className="border-b border-[#d29e4a]/10 pb-4">
                  <h4 className="text-white/80 font-semibold mb-2">
                    Types of Personal Information We Collect
                  </h4>
                  <p className="text-white/50 text-sm mb-2">
                    The types of personal information we collect and share depend
                    on the product or service you have with us. This information
                    can include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-white/50 text-sm">
                    <li>Social Security number and date of birth</li>
                    <li>Income, assets, and employment information</li>
                    <li>Credit history and credit scores</li>
                    <li>Account balances and payment history</li>
                    <li>Property information and mortgage/loan details</li>
                    <li>Transaction history</li>
                  </ul>
                </div>

                <div className="border-b border-[#d29e4a]/10 pb-4">
                  <h4 className="text-white/80 font-semibold mb-2">
                    How We Collect Your Personal Information
                  </h4>
                  <p className="text-white/50 text-sm mb-2">
                    We collect your personal information, for example, when you:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-white/50 text-sm">
                    <li>Apply for a loan or request a rate quote</li>
                    <li>Provide income or employment information</li>
                    <li>Authorize a credit check</li>
                    <li>Provide account or property information</li>
                    <li>Submit documents for loan processing</li>
                  </ul>
                  <p className="text-white/50 text-sm mt-2">
                    We also collect your personal information from others, such
                    as credit bureaus, employers, and other financial
                    institutions.
                  </p>
                </div>

                <div className="border-b border-[#d29e4a]/10 pb-4">
                  <h4 className="text-white/80 font-semibold mb-2">
                    Why We Share Your Personal Information
                  </h4>
                  <p className="text-white/50 text-sm mb-3">
                    All financial companies need to share customers&apos; personal
                    information to run their everyday business. In the section
                    below, we list the reasons financial companies can share
                    their customers&apos; personal information; the reasons
                    Supernova Mortgage Brokers chooses to share; and whether you
                    can limit this sharing.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead>
                        <tr className="border-b border-[#d29e4a]/20">
                          <th className="py-2 pr-4 text-[#d29e4a] font-semibold">
                            Reasons We Can Share
                          </th>
                          <th className="py-2 pr-4 text-[#d29e4a] font-semibold text-center">
                            Do We Share?
                          </th>
                          <th className="py-2 text-[#d29e4a] font-semibold text-center">
                            Can You Limit?
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-white/50">
                        <tr className="border-b border-white/5">
                          <td className="py-3 pr-4">
                            For our everyday business purposes — such as to
                            process your transactions, maintain your account(s),
                            respond to court orders and legal investigations, or
                            report to credit bureaus
                          </td>
                          <td className="py-3 pr-4 text-center text-white/70 font-medium">
                            Yes
                          </td>
                          <td className="py-3 text-center text-white/70 font-medium">
                            No
                          </td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 pr-4">
                            For our marketing purposes — to offer our products
                            and services to you
                          </td>
                          <td className="py-3 pr-4 text-center text-white/70 font-medium">
                            Yes
                          </td>
                          <td className="py-3 text-center text-white/70 font-medium">
                            Yes
                          </td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 pr-4">
                            For joint marketing with other financial companies
                          </td>
                          <td className="py-3 pr-4 text-center text-white/70 font-medium">
                            No
                          </td>
                          <td className="py-3 text-center text-white/70 font-medium">
                            N/A
                          </td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 pr-4">
                            For our affiliates&apos; everyday business purposes —
                            information about your transactions and experiences
                          </td>
                          <td className="py-3 pr-4 text-center text-white/70 font-medium">
                            Yes
                          </td>
                          <td className="py-3 text-center text-white/70 font-medium">
                            No
                          </td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 pr-4">
                            For our affiliates&apos; everyday business purposes —
                            information about your creditworthiness
                          </td>
                          <td className="py-3 pr-4 text-center text-white/70 font-medium">
                            No
                          </td>
                          <td className="py-3 text-center text-white/70 font-medium">
                            N/A
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4">
                            For non-affiliates to market to you
                          </td>
                          <td className="py-3 pr-4 text-center text-white/70 font-medium">
                            No
                          </td>
                          <td className="py-3 text-center text-white/70 font-medium">
                            N/A
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-white/80 font-semibold mb-2">
                    To Limit Our Sharing
                  </h4>
                  <p className="text-white/50 text-sm">
                    To limit our sharing for marketing purposes, you may contact
                    us by phone at{" "}
                    <a
                      href="tel:6892624400"
                      className="text-[#e8c47a] hover:text-[#d29e4a] transition-colors"
                    >
                      (689) 262-4400
                    </a>{" "}
                    or email us at{" "}
                    <a
                      href="mailto:supernova@snmmortgage.com"
                      className="text-[#e8c47a] hover:text-[#d29e4a] transition-colors"
                    >
                      supernova@snmmortgage.com
                    </a>
                    . Please note: If you are a new customer, we can begin
                    sharing your information 30 days from the date we sent our
                    initial privacy notice. When you are no longer our customer,
                    we continue to share your information as described in this
                    notice. However, you can contact us at any time to limit our
                    sharing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Information Sharing & Disclosure */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              5. Information Sharing &amp; Disclosure
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                We may share your personal and financial information with the
                following categories of recipients, as permitted or required by
                law:
              </p>

              <div className="space-y-4">
                <div className="bg-[#0e2922]/40 border border-[#d29e4a]/10 rounded-xl p-5">
                  <h4 className="text-[#d29e4a] font-semibold mb-2">
                    Lending Partners &amp; Affiliates
                  </h4>
                  <p className="text-white/50 text-sm">
                    We share your loan application and supporting documentation
                    with wholesale lenders, correspondent lenders, and investor
                    partners to whom we submit your loan for approval and
                    funding. This sharing is essential to process your mortgage
                    loan.
                  </p>
                </div>

                <div className="bg-[#0e2922]/40 border border-[#d29e4a]/10 rounded-xl p-5">
                  <h4 className="text-[#d29e4a] font-semibold mb-2">
                    Service Providers
                  </h4>
                  <p className="text-white/50 text-sm">
                    We share information with third-party service providers who
                    perform services on our behalf, including but not limited to:
                    appraisal management companies, title and settlement
                    companies, credit reporting agencies, document preparation
                    vendors, verification services (income, employment, assets),
                    flood certification providers, technology and hosting
                    providers, and marketing service providers. These service
                    providers are contractually obligated to use your information
                    only for the purposes for which it was disclosed and to
                    maintain its confidentiality.
                  </p>
                </div>

                <div className="bg-[#0e2922]/40 border border-[#d29e4a]/10 rounded-xl p-5">
                  <h4 className="text-[#d29e4a] font-semibold mb-2">
                    Credit Bureaus &amp; Reporting Agencies
                  </h4>
                  <p className="text-white/50 text-sm">
                    With your authorization, we obtain credit reports from
                    consumer reporting agencies (Equifax, Experian, TransUnion).
                    We may also report information about your loan to these
                    agencies as required by law. You have rights under the Fair
                    Credit Reporting Act to dispute inaccurate information on
                    your credit report.
                  </p>
                </div>

                <div className="bg-[#0e2922]/40 border border-[#d29e4a]/10 rounded-xl p-5">
                  <h4 className="text-[#d29e4a] font-semibold mb-2">
                    Government Agencies &amp; Regulatory Bodies
                  </h4>
                  <p className="text-white/50 text-sm">
                    We may disclose your information as required by law,
                    regulation, court order, subpoena, or other governmental
                    request. This includes reporting to agencies such as the
                    Consumer Financial Protection Bureau (CFPB), the Florida
                    Office of Financial Regulation, the Department of Housing and
                    Urban Development (HUD), the Department of Veterans Affairs
                    (VA), the Federal Housing Administration (FHA), and other
                    federal, state, and local agencies. We are required to report
                    certain loan data under the Home Mortgage Disclosure Act
                    (HMDA).
                  </p>
                </div>

                <div className="bg-[#0e2922]/40 border border-[#d29e4a]/10 rounded-xl p-5">
                  <h4 className="text-[#d29e4a] font-semibold mb-2">
                    With Your Consent
                  </h4>
                  <p className="text-white/50 text-sm">
                    We may share your information with other parties when you
                    have given us specific, written consent to do so. For
                    example, if you authorize us to share your information with a
                    real estate agent, financial planner, attorney, or other
                    professional involved in your transaction.
                  </p>
                </div>
              </div>

              <p>
                We do not sell your personal information to third parties for
                their independent marketing purposes without your explicit
                consent.
              </p>
            </div>
          </div>

          {/* 6. Safeguarding Your Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              6. Safeguarding Your Information
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                Supernova Mortgage Brokers is committed to maintaining the
                security and confidentiality of your personal and financial
                information. We have implemented comprehensive administrative,
                technical, and physical safeguards designed to protect your
                information from unauthorized access, use, disclosure,
                alteration, or destruction, in compliance with the GLBA
                Safeguards Rule (16 CFR Part 314) and applicable state data
                protection laws.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0e2922]/40 border border-[#d29e4a]/10 rounded-xl p-5">
                  <h4 className="text-[#d29e4a] font-semibold mb-2">
                    Encryption &amp; Secure Transmission
                  </h4>
                  <p className="text-white/50 text-sm">
                    We use industry-standard SSL/TLS encryption to protect data
                    transmitted between your browser and our servers.
                    Sensitive data, including Social Security numbers and
                    financial account numbers, is encrypted at rest and in
                    transit using AES-256 encryption or equivalent standards.
                  </p>
                </div>

                <div className="bg-[#0e2922]/40 border border-[#d29e4a]/10 rounded-xl p-5">
                  <h4 className="text-[#d29e4a] font-semibold mb-2">
                    Access Controls
                  </h4>
                  <p className="text-white/50 text-sm">
                    Access to personal information is restricted to authorized
                    personnel who need such access to perform their job functions.
                    We employ role-based access controls, multi-factor
                    authentication, and unique user identifiers to ensure that
                    only authorized individuals can access sensitive data.
                  </p>
                </div>

                <div className="bg-[#0e2922]/40 border border-[#d29e4a]/10 rounded-xl p-5">
                  <h4 className="text-[#d29e4a] font-semibold mb-2">
                    Employee Training
                  </h4>
                  <p className="text-white/50 text-sm">
                    All employees and contractors receive regular training on
                    data privacy, information security, and our internal policies
                    for handling personal and financial information. Employees
                    are required to sign confidentiality agreements.
                  </p>
                </div>

                <div className="bg-[#0e2922]/40 border border-[#d29e4a]/10 rounded-xl p-5">
                  <h4 className="text-[#d29e4a] font-semibold mb-2">
                    Incident Response
                  </h4>
                  <p className="text-white/50 text-sm">
                    We maintain an incident response plan to address potential
                    data breaches and security incidents. In the event of a
                    breach involving your personal information, we will notify
                    you and applicable regulatory authorities as required by law
                    in a timely manner.
                  </p>
                </div>
              </div>

              <p className="text-white/50 text-sm">
                While we take reasonable measures to protect your information, no
                method of transmission over the Internet or electronic storage
                is 100% secure. We cannot guarantee absolute security but are
                committed to continuously improving our safeguards.
              </p>
            </div>
          </div>

          {/* 7. Your Rights */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              7. Your Rights
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                You have certain rights regarding your personal information,
                subject to applicable law:
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-[#d29e4a] font-semibold mb-1">
                    Right to Access
                  </h4>
                  <p className="text-white/60 text-sm">
                    You have the right to request a copy of the personal
                    information we have collected about you. To make an access
                    request, contact us using the information in Section 12.
                  </p>
                </div>

                <div>
                  <h4 className="text-[#d29e4a] font-semibold mb-1">
                    Right to Correction
                  </h4>
                  <p className="text-white/60 text-sm">
                    You have the right to request that we correct inaccurate
                    personal information. If you believe any information we hold
                    about you is incorrect or incomplete, please contact us
                    promptly so we can update our records.
                  </p>
                </div>

                <div>
                  <h4 className="text-[#d29e4a] font-semibold mb-1">
                    Right to Opt Out of Marketing
                  </h4>
                  <p className="text-white/60 text-sm">
                    You may opt out of receiving marketing communications at any
                    time by: clicking the &quot;unsubscribe&quot; link in any marketing
                    email; replying &quot;STOP&quot; to any marketing text message;
                    calling us at (689) 262-4400; or emailing us at
                    supernova@snmmortgage.com. Please note that opting out of
                    marketing does not affect transactional communications
                    related to your loan application or account.
                  </p>
                </div>

                <div>
                  <h4 className="text-[#d29e4a] font-semibold mb-1">
                    Do Not Call
                  </h4>
                  <p className="text-white/60 text-sm">
                    You may request to be placed on our internal Do Not Call list
                    by contacting us at (689) 262-4400 or by emailing
                    supernova@snmmortgage.com. We will process your request
                    within a reasonable timeframe and in compliance with the
                    National Do Not Call Registry and applicable state Do Not Call
                    regulations.
                  </p>
                </div>

                <div className="bg-[#0e2922]/60 border border-[#d29e4a]/20 rounded-2xl p-6 space-y-3">
                  <h4 className="text-lg font-bold text-[#d29e4a]">
                    California Consumer Rights (CCPA/CPRA)
                  </h4>
                  <p className="text-white/50 text-sm">
                    If you are a California resident, you have additional rights
                    under the California Consumer Privacy Act (CCPA) as amended
                    by the California Privacy Rights Act (CPRA), to the extent
                    they apply to information not otherwise exempt under GLBA:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2 text-white/50 text-sm">
                    <li>
                      <span className="text-white/60 font-medium">
                        Right to Know:
                      </span>{" "}
                      You have the right to request that we disclose the
                      categories and specific pieces of personal information we
                      have collected about you, the categories of sources from
                      which it was collected, the business or commercial purpose
                      for collection, and the categories of third parties with
                      whom we share it
                    </li>
                    <li>
                      <span className="text-white/60 font-medium">
                        Right to Delete:
                      </span>{" "}
                      You have the right to request that we delete personal
                      information we have collected from you, subject to certain
                      exceptions (such as information needed for legal
                      compliance, completing a transaction, or exercising legal
                      rights)
                    </li>
                    <li>
                      <span className="text-white/60 font-medium">
                        Right to Correct:
                      </span>{" "}
                      You have the right to request correction of inaccurate
                      personal information
                    </li>
                    <li>
                      <span className="text-white/60 font-medium">
                        Right to Non-Discrimination:
                      </span>{" "}
                      We will not discriminate against you for exercising any of
                      your CCPA rights
                    </li>
                    <li>
                      <span className="text-white/60 font-medium">
                        Right to Opt Out of Sale/Sharing:
                      </span>{" "}
                      We do not sell or share your personal information as
                      defined under the CCPA/CPRA
                    </li>
                  </ul>
                  <p className="text-white/50 text-sm mt-2">
                    Please note that much of the personal information we collect
                    in connection with mortgage transactions is exempt from the
                    CCPA under the GLBA exemption. To submit a CCPA request,
                    contact us using the information in Section 12. We may need
                    to verify your identity before fulfilling your request.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 8. Cookies and Tracking Technologies */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              8. Cookies &amp; Tracking Technologies
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                Our Website uses cookies, web beacons, pixel tags, and similar
                technologies to enhance your browsing experience, analyze website
                traffic, and personalize content. By using our Website, you
                consent to the use of these technologies as described below.
              </p>

              <div className="space-y-4">
                <div className="bg-[#0e2922]/40 border border-[#d29e4a]/10 rounded-xl p-5">
                  <h4 className="text-[#d29e4a] font-semibold mb-2">
                    Essential Cookies
                  </h4>
                  <p className="text-white/50 text-sm">
                    Required for the Website to function properly. These cookies
                    enable core functionality such as page navigation, form
                    submissions, and access to secure areas. The Website cannot
                    function properly without these cookies.
                  </p>
                </div>

                <div className="bg-[#0e2922]/40 border border-[#d29e4a]/10 rounded-xl p-5">
                  <h4 className="text-[#d29e4a] font-semibold mb-2">
                    Analytics Cookies
                  </h4>
                  <p className="text-white/50 text-sm">
                    Used to collect information about how visitors use our
                    Website, including the number of visitors, the pages visited,
                    and the sources of traffic. We use this information to
                    improve our Website and the quality of our services. These
                    cookies may be provided by third-party analytics services
                    such as Google Analytics.
                  </p>
                </div>

                <div className="bg-[#0e2922]/40 border border-[#d29e4a]/10 rounded-xl p-5">
                  <h4 className="text-[#d29e4a] font-semibold mb-2">
                    Marketing &amp; Advertising Cookies
                  </h4>
                  <p className="text-white/50 text-sm">
                    Used to deliver relevant advertisements and track the
                    effectiveness of our marketing campaigns. These cookies may
                    be set by third-party advertising partners and used to build
                    a profile of your interests to show you relevant ads on other
                    websites.
                  </p>
                </div>

                <div className="bg-[#0e2922]/40 border border-[#d29e4a]/10 rounded-xl p-5">
                  <h4 className="text-[#d29e4a] font-semibold mb-2">
                    Chat &amp; Communication Widgets
                  </h4>
                  <p className="text-white/50 text-sm">
                    We use third-party chat widgets (such as LeadConnector) to
                    provide real-time customer support. These widgets may use
                    cookies or similar technologies to identify returning visitors
                    and provide a better user experience.
                  </p>
                </div>
              </div>

              <p>
                <span className="text-[#d29e4a] font-semibold">
                  Managing Cookies:
                </span>{" "}
                Most web browsers allow you to control cookies through their
                settings. You can set your browser to refuse all cookies, accept
                only certain cookies, or alert you when a cookie is placed.
                However, disabling cookies may limit certain features or
                functionality of our Website. For more information about cookies
                and how to manage them, visit{" "}
                <a
                  href="https://www.allaboutcookies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e8c47a] underline underline-offset-2 hover:text-[#d29e4a] transition-colors"
                >
                  www.allaboutcookies.org
                </a>
                .
              </p>
            </div>
          </div>

          {/* 9. Children's Privacy */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              9. Children&apos;s Privacy
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                Our Website and services are not directed to, and we do not
                knowingly collect personal information from, individuals under
                the age of 18. Mortgage loan applications require the applicant
                to have the legal capacity to enter into a binding contract,
                which generally requires the applicant to be at least 18 years of
                age.
              </p>
              <p>
                If we learn that we have inadvertently collected personal
                information from a child under 18, we will take steps to delete
                such information from our records as promptly as possible. If you
                believe that a child under 18 has provided personal information
                to us, please contact us immediately using the information in
                Section 12.
              </p>
            </div>
          </div>

          {/* 10. Data Retention */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              10. Data Retention
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                We retain your personal and financial information for as long as
                necessary to fulfill the purposes for which it was collected, to
                comply with our legal and regulatory obligations, to resolve
                disputes, and to enforce our agreements. Specific retention
                periods are determined based on:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-white/60">
                <li>
                  <span className="text-white/70 font-medium">
                    Active Loan Files:
                  </span>{" "}
                  Loan application files, disclosures, and supporting
                  documentation are retained for a minimum of three (3) years
                  after the date of loan closing or denial, or as otherwise
                  required by applicable federal and state law (including RESPA,
                  TILA, ECOA, and HMDA requirements)
                </li>
                <li>
                  <span className="text-white/70 font-medium">
                    HMDA Data:
                  </span>{" "}
                  Home Mortgage Disclosure Act data is retained for a minimum of
                  three (3) years as required by Regulation C
                </li>
                <li>
                  <span className="text-white/70 font-medium">
                    Marketing Data:
                  </span>{" "}
                  Contact information used for marketing purposes is retained
                  until you opt out, plus a reasonable period to process the
                  opt-out request
                </li>
                <li>
                  <span className="text-white/70 font-medium">
                    Website Usage Data:
                  </span>{" "}
                  Analytics and cookie data is generally retained for up to
                  twenty-six (26) months
                </li>
                <li>
                  <span className="text-white/70 font-medium">
                    Tax and Financial Records:
                  </span>{" "}
                  As required by applicable tax law and IRS regulations
                </li>
              </ul>
              <p>
                When personal information is no longer needed for its original
                purpose and no legal retention obligation exists, we will securely
                delete or anonymize the information in accordance with our data
                destruction policies.
              </p>
            </div>
          </div>

          {/* 11. Changes to This Policy */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              11. Changes to This Policy
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                Supernova Mortgage Brokers reserves the right to update or
                modify this Privacy Policy at any time. When we make material
                changes, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-white/60">
                <li>
                  Update the &quot;Last Updated&quot; date at the top of this page
                </li>
                <li>
                  Post the revised policy on our Website
                </li>
                <li>
                  Provide notice of material changes through our Website, by
                  email, or by other appropriate means as required by applicable
                  law
                </li>
              </ul>
              <p>
                We encourage you to review this Privacy Policy periodically to
                stay informed about how we protect your information. Your
                continued use of our Website and services after any changes to
                this Privacy Policy constitutes your acceptance of the revised
                policy.
              </p>
              <p>
                As required by the GLBA, we will provide you with an annual
                privacy notice describing our information sharing practices, to
                the extent required by applicable regulations.
              </p>
            </div>
          </div>

          {/* 12. Contact Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              12. Contact Information
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, or if you wish to exercise
                any of your privacy rights, please contact us:
              </p>
              <div className="bg-[#0e2922]/60 border border-[#d29e4a]/20 rounded-2xl p-6 space-y-3">
                <p className="text-[#d29e4a] font-bold text-lg">
                  Supernova Mortgage Brokers
                </p>
                <div className="space-y-2 text-white/60 text-sm">
                  <p>
                    <span className="text-white/70 font-medium">
                      Mailing Address:
                    </span>{" "}
                    600 North Thacker Avenue, Kissimmee, FL 34741
                  </p>
                  <p>
                    <span className="text-white/70 font-medium">Phone:</span>{" "}
                    <a
                      href="tel:6892624400"
                      className="text-[#e8c47a] hover:text-[#d29e4a] transition-colors"
                    >
                      (689) 262-4400
                    </a>
                  </p>
                  <p>
                    <span className="text-white/70 font-medium">Email:</span>{" "}
                    <a
                      href="mailto:supernova@snmmortgage.com"
                      className="text-[#e8c47a] hover:text-[#d29e4a] transition-colors"
                    >
                      supernova@snmmortgage.com
                    </a>
                  </p>
                  <p>
                    <span className="text-white/70 font-medium">
                      Privacy Inquiries:
                    </span>{" "}
                    <a
                      href="mailto:supernova@snmmortgage.com"
                      className="text-[#e8c47a] hover:text-[#d29e4a] transition-colors"
                    >
                      supernova@snmmortgage.com
                    </a>
                  </p>
                  <p>
                    <span className="text-white/70 font-medium">Hours:</span>{" "}
                    Monday - Friday, 9:00 AM - 6:00 PM EST
                  </p>
                </div>
              </div>
              <p>
                We will respond to privacy-related requests within thirty (30)
                days, or within the timeframe required by applicable law. For
                CCPA/CPRA requests from California residents, we will respond
                within forty-five (45) days, with the possibility of an
                extension of an additional forty-five (45) days if reasonably
                necessary.
              </p>
            </div>
          </div>

          {/* 13. Regulatory Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              13. Regulatory Information
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <div className="bg-[#0e2922]/60 border border-[#d29e4a]/20 rounded-2xl p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-[#d29e4a] font-semibold mb-3">
                      Company Licensing
                    </h4>
                    <div className="space-y-2 text-white/60 text-sm">
                      <p>
                        <span className="text-white/70 font-medium">
                          Company Name:
                        </span>{" "}
                        Supernova Mortgage Brokers
                      </p>
                      <p>
                        <span className="text-white/70 font-medium">
                          NMLS #:
                        </span>{" "}
                        1880516
                      </p>
                      <p>
                        <span className="text-white/70 font-medium">
                          License Type:
                        </span>{" "}
                        Mortgage Broker
                      </p>
                      <p>
                        <span className="text-white/70 font-medium">
                          Licensing Authority:
                        </span>{" "}
                        Florida Office of Financial Regulation
                      </p>
                      <p>
                        <span className="text-white/70 font-medium">
                          Principal Place of Business:
                        </span>{" "}
                        600 North Thacker Avenue, Kissimmee, FL 34741
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[#d29e4a] font-semibold mb-3">
                      Regulatory Resources
                    </h4>
                    <div className="space-y-2 text-white/60 text-sm">
                      <p>
                        <a
                          href="https://www.nmlsconsumeraccess.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#e8c47a] underline underline-offset-2 hover:text-[#d29e4a] transition-colors"
                        >
                          NMLS Consumer Access
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://www.consumerfinance.gov/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#e8c47a] underline underline-offset-2 hover:text-[#d29e4a] transition-colors"
                        >
                          Consumer Financial Protection Bureau (CFPB)
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://flofr.gov/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#e8c47a] underline underline-offset-2 hover:text-[#d29e4a] transition-colors"
                        >
                          Florida Office of Financial Regulation
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://www.hud.gov/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#e8c47a] underline underline-offset-2 hover:text-[#d29e4a] transition-colors"
                        >
                          U.S. Department of Housing and Urban Development (HUD)
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#d29e4a]/10 pt-4">
                  <h4 className="text-[#d29e4a] font-semibold mb-3">
                    Equal Opportunity Lender
                  </h4>
                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-[#d29e4a] flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    <p className="text-white/50 text-sm">
                      Supernova Mortgage Brokers is an Equal Opportunity Lender
                      lender. We are committed to complying with all federal,
                      state, and local fair lending laws and regulations,
                      including the Equal Credit Opportunity Act (ECOA) and the
                      Fair Housing Act. We do not discriminate on the basis of
                      race, color, religion, national origin, sex, familial
                      status, disability, marital status, age, sexual
                      orientation, gender identity, or any other characteristic
                      protected by law.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#d29e4a]/10 pt-4">
                  <h4 className="text-[#d29e4a] font-semibold mb-2">
                    Filing a Complaint
                  </h4>
                  <p className="text-white/50 text-sm">
                    If you have a complaint about our privacy practices or
                    believe your rights have been violated, you may file a
                    complaint with:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-white/50 text-sm mt-2">
                    <li>
                      <span className="text-white/60 font-medium">
                        Consumer Financial Protection Bureau (CFPB):
                      </span>{" "}
                      1-855-411-CFPB (2372) or{" "}
                      <a
                        href="https://www.consumerfinance.gov/complaint/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e8c47a] hover:text-[#d29e4a] transition-colors"
                      >
                        consumerfinance.gov/complaint
                      </a>
                    </li>
                    <li>
                      <span className="text-white/60 font-medium">
                        Florida Office of Financial Regulation:
                      </span>{" "}
                      (850) 487-9687 or 200 East Gaines Street, Tallahassee, FL
                      32399-0376
                    </li>
                    <li>
                      <span className="text-white/60 font-medium">
                        Federal Trade Commission (FTC):
                      </span>{" "}
                      1-877-FTC-HELP (382-4357) or{" "}
                      <a
                        href="https://www.ftc.gov/complaint"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e8c47a] hover:text-[#d29e4a] transition-colors"
                      >
                        ftc.gov/complaint
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Gold separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#d29e4a]/40 to-transparent" />

      {/* Footer */}
      <footer className="bg-black py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a
                href="/"
                className="text-white/40 hover:text-[#d29e4a] transition-colors"
              >
                Home
              </a>
              <a
                href="/privacy"
                className="text-[#d29e4a] font-medium"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-white/40 hover:text-[#d29e4a] transition-colors"
              >
                Terms of Service
              </a>
            </div>
            <div className="text-xs text-white/30 text-center md:text-right">
              <p>
                &copy; 2026 Supernova Mortgage Brokers. NMLS #1880516. All
                rights reserved.
              </p>
              <p className="mt-1">Equal Opportunity Lender.</p>
              <p className="mt-1">My Mortgage, Inc. doing business as Supernova Mortgage Brokers.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
