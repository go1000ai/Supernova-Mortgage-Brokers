import type { Metadata } from "next";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Terms of Service | Supernova Mortgage Brokers",
  description:
    "Terms of Service and Terms & Conditions for Supernova Mortgage Brokers. NMLS #1880516. Read our terms governing the use of our mortgage brokerage services.",
  openGraph: {
    title: "Terms of Service | Supernova Mortgage Brokers",
    description:
      "Terms of Service and Terms & Conditions for Supernova Mortgage Brokers. NMLS #1880516.",
    type: "website",
  },
};

export default function TermsOfServicePage() {
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
            Terms of{" "}
            <span className="bg-gradient-to-r from-[#d29e4a] via-[#e8c47a] to-[#d29e4a] bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto">
            Please read these Terms of Service carefully before using our website
            or engaging our mortgage brokerage services.
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

      {/* Terms Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* 1. Acceptance of Terms */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              1. Acceptance of Terms
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                By accessing or using the website operated by Supernova Mortgage
                Brokers (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;), located at{" "}
                <span className="text-[#e8c47a]">
                  www.snmmortgage.com
                </span>{" "}
                (the &quot;Website&quot;), or by engaging our mortgage brokerage
                services, you (&quot;User,&quot; &quot;you,&quot; or
                &quot;your&quot;) acknowledge that you have read, understood, and
                agree to be bound by these Terms of Service (&quot;Terms&quot;).
              </p>
              <p>
                If you do not agree to these Terms, you must discontinue use of
                this Website immediately and refrain from engaging our services.
                These Terms constitute a legally binding agreement between you and
                Supernova Mortgage Brokers.
              </p>
              <p>
                Your continued use of this Website following the posting of any
                changes to these Terms constitutes acceptance of those changes.
                We encourage you to review these Terms periodically to stay
                informed of updates.
              </p>
            </div>
          </div>

          {/* 2. Company Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              2. Company Information
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                Supernova Mortgage Brokers is a licensed mortgage brokerage
                operating under the following credentials:
              </p>
              <div className="bg-[#0e2922]/60 border border-[#d29e4a]/20 rounded-2xl p-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-[#d29e4a] font-semibold text-sm">
                    NMLS #:
                  </span>
                  <span className="text-white/80">1880516</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-[#d29e4a] font-semibold text-sm">
                    Principal Address:
                  </span>
                  <span className="text-white/80">
                    600 North Thacker Avenue, Kissimmee, FL 34741
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-[#d29e4a] font-semibold text-sm">
                    State Licensing:
                  </span>
                  <span className="text-white/80">
                    Licensed by the Florida Office of Financial Regulation as a
                    Mortgage Broker
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-[#d29e4a] font-semibold text-sm">
                    NMLS Consumer Access:
                  </span>
                  <span className="text-white/80">
                    <a
                      href="https://www.nmlsconsumeraccess.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e8c47a] underline underline-offset-2 hover:text-[#d29e4a] transition-colors"
                    >
                      www.nmlsconsumeraccess.org
                    </a>
                  </span>
                </div>
              </div>
              <p>
                Supernova Mortgage Brokers is an Equal Opportunity Lender lender.
                We do not engage in business practices that discriminate on the
                basis of race, color, religion, national origin, sex, marital
                status, age (provided the applicant has the capacity to enter
                into a binding contract), because all or part of the
                applicant&apos;s income derives from any public assistance
                program, or because the applicant has in good faith exercised any
                right under the Consumer Credit Protection Act. The federal agency
                that administers compliance with this law concerning this
                creditor is the Consumer Financial Protection Bureau, 1700 G
                Street NW, Washington, DC 20552.
              </p>
              <div className="flex items-center gap-3 text-xs text-white/50 bg-[#0e2922]/40 border border-[#d29e4a]/10 rounded-xl px-4 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-[#d29e4a] flex-shrink-0"
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
                <span>
                  Equal Opportunity Lender. All loans are subject to credit
                  approval. Supernova Mortgage Brokers is a division of My
                  Mortgage, Inc., a mortgage lender.
                </span>
              </div>
            </div>
          </div>

          {/* 3. Not a Commitment to Lend */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              3. Not a Commitment to Lend
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                Nothing contained on this Website constitutes a loan commitment,
                loan approval, or guarantee of any terms or conditions. All
                information presented on this Website, including but not limited
                to interest rates, Annual Percentage Rates (APR), loan programs,
                monthly payment estimates, and closing cost estimates, is provided
                for informational and illustrative purposes only and is subject
                to change without notice.
              </p>
              <p>
                Any pre-qualification, pre-approval, or rate quote provided
                through this Website or by our loan officers is preliminary in
                nature and does not constitute a commitment to lend. Formal loan
                approval is contingent upon, among other things:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-white/60">
                <li>
                  Submission and verification of a complete loan application
                  (Uniform Residential Loan Application, Form 1003)
                </li>
                <li>
                  Satisfactory credit evaluation and underwriting review
                </li>
                <li>Acceptable property appraisal and title review</li>
                <li>
                  Verification of income, employment, assets, and liabilities
                </li>
                <li>Compliance with all applicable lender guidelines</li>
                <li>
                  Satisfactory review of all required documentation by the
                  underwriting lender
                </li>
              </ul>
              <p>
                Rates, terms, programs, and conditions are subject to change at
                any time without prior notice. The availability of any particular
                loan program or rate is not guaranteed and may vary based on
                market conditions, investor requirements, and borrower
                qualifications.
              </p>
            </div>
          </div>

          {/* 4. Accuracy of Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              4. Accuracy of Information
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                By using our services or submitting any information through this
                Website, you represent and warrant that all information you
                provide is true, accurate, complete, and current. You agree to
                provide accurate personal, financial, and property-related
                information as required during the loan application process.
              </p>
              <p>
                You understand and acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-white/60">
                <li>
                  Providing false, inaccurate, or misleading information on a
                  mortgage loan application is a violation of federal law (18
                  U.S.C. Section 1014) and may result in civil liability and/or
                  criminal penalties, including fines and imprisonment
                </li>
                <li>
                  We rely on the information you provide to process your loan
                  application, obtain credit reports, verify employment, and
                  submit your application to potential lending partners
                </li>
                <li>
                  Any inaccurate or incomplete information may delay the
                  processing of your loan application, result in denial, or
                  affect the terms of your loan
                </li>
                <li>
                  You are responsible for promptly notifying us of any changes to
                  your financial situation, employment status, or other
                  information relevant to your loan application
                </li>
              </ul>
            </div>
          </div>

          {/* 5. Rate & APR Disclaimers */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              5. Rate &amp; APR Disclaimers
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                Interest rates, Annual Percentage Rates (APR), discount points,
                and other pricing information displayed on this Website are
                provided for illustrative purposes only. These figures are not an
                offer to lend at any specific rate or on any specific terms.
              </p>
              <div className="bg-[#0e2922]/60 border border-[#d29e4a]/20 rounded-2xl p-6 space-y-3 text-white/60 text-sm">
                <p className="text-[#d29e4a] font-semibold text-base">
                  Important Rate Disclosures:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    Rates shown may include discount points and are based on
                    specific assumptions about creditworthiness, loan-to-value
                    ratio, property type, occupancy, and loan amount
                  </li>
                  <li>
                    Your actual interest rate, APR, and monthly payment may be
                    higher or lower depending on your individual credit profile,
                    property value, loan amount, loan type, and loan term
                  </li>
                  <li>
                    APR reflects the total cost of the loan, including interest,
                    discount points, origination fees, mortgage insurance
                    premiums, and certain closing costs, expressed as a yearly
                    rate
                  </li>
                  <li>
                    Rates may vary for adjustable-rate mortgages (ARMs) after the
                    initial fixed-rate period. The APR for ARMs may increase
                    after the initial period based on index rate fluctuations
                  </li>
                  <li>
                    Mortgage insurance may be required for loans with a
                    loan-to-value (LTV) ratio exceeding 80%. The cost of
                    mortgage insurance is not included in all rate quotes unless
                    specifically stated
                  </li>
                  <li>
                    Rate lock policies, expiration periods, and extension fees
                    vary by lender and are subject to change
                  </li>
                </ul>
              </div>
              <p>
                To obtain a personalized rate quote based on your specific
                financial situation, please contact one of our licensed loan
                originators. All rate quotes are subject to credit approval and
                property evaluation.
              </p>
            </div>
          </div>

          {/* 6. Third-Party Services */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              6. Third-Party Services
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                During the mortgage application and closing process, various
                third-party services may be required. These services include, but
                are not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-white/60">
                <li>
                  <span className="text-white/70 font-medium">
                    Credit Bureau Services:
                  </span>{" "}
                  We will obtain credit reports from one or more consumer
                  reporting agencies (Equifax, Experian, TransUnion) as part of
                  the loan application process
                </li>
                <li>
                  <span className="text-white/70 font-medium">
                    Appraisal Services:
                  </span>{" "}
                  An independent, licensed property appraisal will be ordered to
                  determine the market value of the subject property
                </li>
                <li>
                  <span className="text-white/70 font-medium">
                    Title Services:
                  </span>{" "}
                  A title search, title insurance, and closing/settlement
                  services will be provided by a licensed title company or
                  attorney
                </li>
                <li>
                  <span className="text-white/70 font-medium">
                    Homeowners Insurance:
                  </span>{" "}
                  Adequate property insurance must be obtained prior to closing
                </li>
                <li>
                  <span className="text-white/70 font-medium">
                    Flood Certification:
                  </span>{" "}
                  A flood zone determination will be obtained to assess whether
                  flood insurance is required
                </li>
                <li>
                  <span className="text-white/70 font-medium">
                    Home Inspection Services:
                  </span>{" "}
                  While not required for loan approval in most cases, a
                  professional home inspection is strongly recommended
                </li>
              </ul>
              <p>
                Supernova Mortgage Brokers does not control, endorse, or assume
                responsibility for the actions, services, or fees of any
                third-party service provider. You acknowledge that fees charged
                by third-party providers are separate from and in addition to any
                fees charged by Supernova Mortgage Brokers. You have the right to
                select your own service providers for title, insurance, and other
                settlement services, as described in RESPA (Real Estate
                Settlement Procedures Act) Section 9.
              </p>
            </div>
          </div>

          {/* 7. Electronic Communications Consent */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              7. Electronic Communications Consent (E-SIGN Act)
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                By using this Website and/or submitting your information to
                Supernova Mortgage Brokers, you consent to receive electronic
                communications from us in accordance with the Electronic
                Signatures in Global and National Commerce Act (E-SIGN Act, 15
                U.S.C. Section 7001 et seq.) and applicable state laws.
              </p>
              <p>
                Your consent to receive electronic communications includes, but
                is not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-white/60">
                <li>
                  Loan disclosures, estimates, and documents required by federal
                  and state law (including Loan Estimates, Closing Disclosures,
                  and related notices)
                </li>
                <li>
                  Notices regarding changes to your loan application or the
                  status of your transaction
                </li>
                <li>
                  Correspondence related to your account or services, including
                  privacy notices
                </li>
                <li>
                  Marketing communications (subject to your ability to opt out)
                </li>
              </ul>
              <p>
                <span className="text-[#d29e4a] font-semibold">
                  Hardware and Software Requirements:
                </span>{" "}
                To receive electronic communications, you will need a device with
                internet access, a current web browser that supports 128-bit
                encryption, and a valid email address. You may also need software
                to view PDF documents (such as Adobe Acrobat Reader).
              </p>
              <p>
                <span className="text-[#d29e4a] font-semibold">
                  Withdrawal of Consent:
                </span>{" "}
                You may withdraw your consent to receive electronic
                communications at any time by contacting us in writing at the
                address below. Please be aware that withdrawing consent may slow
                the processing of your loan application and may require us to
                communicate with you via U.S. mail, which may delay receipt of
                time-sensitive disclosures.
              </p>
              <p>
                <span className="text-[#d29e4a] font-semibold">
                  Paper Copies:
                </span>{" "}
                You have the right to request paper copies of any electronic
                communication. To request paper copies, contact us at
                supernova@snmmortgage.com or call (689) 262-4400. There may be
                a fee for providing paper copies.
              </p>
            </div>
          </div>

          {/* 8. TCPA Compliance */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              8. TCPA Compliance &amp; Communication Consent
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                By providing your telephone number to Supernova Mortgage Brokers
                through this Website, a loan application, or any other
                communication channel, you expressly consent to receive
                telephone calls and text messages (SMS/MMS) from Supernova
                Mortgage Brokers and its agents, affiliates, and service
                providers, in accordance with the Telephone Consumer Protection
                Act (TCPA, 47 U.S.C. Section 227) and applicable state
                telemarketing laws.
              </p>
              <div className="bg-[#0e2922]/60 border border-[#d29e4a]/20 rounded-2xl p-6 space-y-3 text-white/60 text-sm">
                <p className="text-[#d29e4a] font-semibold text-base">
                  Your TCPA Consent Includes:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    Calls and text messages relating to your loan inquiry, loan
                    application, or account servicing
                  </li>
                  <li>
                    Calls and text messages that may be made using an automatic
                    telephone dialing system (ATDS) or prerecorded/artificial
                    voice messages
                  </li>
                  <li>
                    Marketing calls and text messages regarding mortgage products
                    and services (with opt-out available)
                  </li>
                </ul>
                <p className="mt-3 text-white/50 text-xs">
                  Consent is not a condition of purchasing any property, goods, or
                  services. Message and data rates may apply. Message frequency
                  varies.
                </p>
              </div>
              <p>
                <span className="text-[#d29e4a] font-semibold">
                  Opt-Out Instructions:
                </span>{" "}
                You may revoke your consent to receive calls or text messages at
                any time by replying &quot;STOP&quot; to any text message, by
                calling us at (689) 262-4400, or by emailing
                supernova@snmmortgage.com with the subject line &quot;Opt-Out.&quot;
                Opting out of marketing communications will not affect
                transactional communications related to an active loan
                application.
              </p>
            </div>
          </div>

          {/* 9. Intellectual Property */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              9. Intellectual Property
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                All content on this Website, including but not limited to text,
                graphics, logos, images, icons, photographs, video, audio,
                software, design elements, and the compilation thereof
                (collectively, &quot;Content&quot;), is the exclusive property of
                Supernova Mortgage Brokers or its licensors and is protected by
                United States and international copyright, trademark, patent, and
                other intellectual property laws.
              </p>
              <p>
                The Supernova Mortgage Brokers name, logo, tagline (&quot;Your
                Mortgage, Elevated&quot;), and all related names, logos, product
                and service names, designs, and slogans are trademarks of
                Supernova Mortgage Brokers or its affiliates. You may not use
                such marks without our prior written permission.
              </p>
              <p>
                You may not reproduce, distribute, modify, display, perform,
                prepare derivative works of, republish, download, store, or
                transmit any Content from this Website without our express prior
                written consent, except as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-white/60">
                <li>
                  Your computer or device may temporarily store copies of such
                  materials incidental to your accessing and viewing them
                </li>
                <li>
                  You may store files that are automatically cached by your web
                  browser for display enhancement purposes
                </li>
                <li>
                  You may print or download one copy of a reasonable number of
                  pages of the Website for your own personal, non-commercial use
                  and not for further reproduction, publication, or distribution
                </li>
              </ul>
            </div>
          </div>

          {/* 10. Limitation of Liability */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              10. Limitation of Liability
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p className="uppercase font-semibold text-white/80 text-xs tracking-wide">
                PLEASE READ THIS SECTION CAREFULLY AS IT LIMITS THE LIABILITY OF
                SUPERNOVA MORTGAGE BROKERS AND ITS OFFICERS, DIRECTORS,
                EMPLOYEES, AGENTS, AND AFFILIATES.
              </p>
              <p>
                To the fullest extent permitted by applicable law, in no event
                shall Supernova Mortgage Brokers, its officers, directors,
                employees, agents, affiliates, licensors, or service providers be
                liable for any indirect, incidental, special, consequential,
                punitive, or exemplary damages, including without limitation
                damages for loss of profits, goodwill, use, data, or other
                intangible losses, arising out of or in connection with:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-white/60">
                <li>
                  Your access to, use of, or inability to use this Website or
                  our services
                </li>
                <li>
                  Any conduct or content of any third party on or related to the
                  Website
                </li>
                <li>
                  Any information obtained from the Website, including but not
                  limited to rate quotes, loan estimates, or program information
                </li>
                <li>
                  Unauthorized access, use, or alteration of your transmissions
                  or data
                </li>
                <li>
                  Delay or failure to approve, fund, or close a mortgage loan
                </li>
                <li>
                  Changes in interest rates, market conditions, or lender
                  guidelines after a rate quote or loan estimate is provided
                </li>
                <li>
                  Actions or omissions of third-party lenders, appraisers, title
                  companies, or other service providers
                </li>
              </ul>
              <p>
                This Website and all content are provided on an &quot;AS IS&quot;
                and &quot;AS AVAILABLE&quot; basis without any warranties of any
                kind, whether express or implied, including but not limited to
                implied warranties of merchantability, fitness for a particular
                purpose, non-infringement, and accuracy.
              </p>
              <p>
                In no event shall our total liability to you for all damages,
                losses, and causes of action exceed the amount of fees, if any,
                paid by you to Supernova Mortgage Brokers during the twelve (12)
                months immediately preceding the event giving rise to the claim.
              </p>
            </div>
          </div>

          {/* 11. State-Specific Disclosures */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              11. State-Specific Disclosures
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <div className="bg-[#0e2922]/60 border border-[#d29e4a]/20 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#d29e4a]">
                  Florida Mortgage Broker Disclosure
                </h3>
                <p className="text-white/60 text-sm">
                  Supernova Mortgage Brokers is licensed as a Mortgage Broker by
                  the Florida Office of Financial Regulation under the Florida
                  Mortgage Lending Act (Chapter 494, Florida Statutes).
                </p>
                <p className="text-white/60 text-sm">
                  As a mortgage broker, Supernova Mortgage Brokers arranges but
                  does not make mortgage loans. We submit loan applications to
                  third-party lending institutions on your behalf. We do not
                  represent the borrower or the lender. We will not charge any
                  fees without your prior knowledge and consent.
                </p>
                <p className="text-white/60 text-sm">
                  In accordance with Florida law, the following disclosures
                  apply:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-white/50 text-sm">
                  <li>
                    The borrower shall not be obligated to pay a mortgage broker
                    fee unless the mortgage broker has complied with the
                    disclosure requirements of Section 494.0025, Florida Statutes
                  </li>
                  <li>
                    The borrower has the right to receive a written itemization
                    of all fees and costs associated with the loan before closing
                  </li>
                  <li>
                    Supernova Mortgage Brokers may receive compensation from the
                    lender in addition to, or in lieu of, fees paid by the
                    borrower. All compensation will be fully disclosed in
                    accordance with applicable federal and state law
                  </li>
                  <li>
                    For information or to file a complaint, contact the Florida
                    Office of Financial Regulation at 200 East Gaines Street,
                    Tallahassee, FL 32399-0376, or by phone at (850) 487-9687
                  </li>
                </ul>
              </div>
              <p>
                If you are located in a state other than Florida, additional
                state-specific disclosures may apply. Please contact us for
                disclosures specific to your state of residence or the state in
                which the subject property is located.
              </p>
            </div>
          </div>

          {/* 12. Dispute Resolution */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              12. Dispute Resolution
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                <span className="text-[#d29e4a] font-semibold">
                  Governing Law:
                </span>{" "}
                These Terms shall be governed by and construed in accordance with
                the laws of the State of Florida, without regard to its conflict
                of law principles.
              </p>
              <p>
                <span className="text-[#d29e4a] font-semibold">
                  Informal Resolution:
                </span>{" "}
                Before initiating any formal dispute resolution proceedings, you
                agree to first contact Supernova Mortgage Brokers in writing at
                the address below and allow thirty (30) days to attempt to
                resolve the dispute informally.
              </p>
              <p>
                <span className="text-[#d29e4a] font-semibold">
                  Binding Arbitration:
                </span>{" "}
                Any dispute, claim, or controversy arising out of or relating to
                these Terms or your use of this Website or our services that
                cannot be resolved informally shall be resolved by binding
                arbitration administered by the American Arbitration Association
                (AAA) in accordance with its Consumer Arbitration Rules.
                Arbitration shall take place in Osceola County, Florida.
              </p>
              <p>
                <span className="text-[#d29e4a] font-semibold">
                  Class Action Waiver:
                </span>{" "}
                You agree that any dispute resolution proceedings will be
                conducted only on an individual basis and not in a class,
                consolidated, or representative action. You waive any right to
                participate in a class action lawsuit or class-wide arbitration.
              </p>
              <p>
                <span className="text-[#d29e4a] font-semibold">
                  Exceptions:
                </span>{" "}
                Nothing in this section shall prevent either party from seeking
                injunctive or other equitable relief in a court of competent
                jurisdiction to prevent irreparable harm. Additionally, claims
                within the jurisdiction of a small claims court may be brought in
                such court.
              </p>
              <p>
                <span className="text-[#d29e4a] font-semibold">
                  Regulatory Complaints:
                </span>{" "}
                Nothing in these Terms limits your right to file a complaint with
                any applicable state or federal regulatory agency, including the
                Consumer Financial Protection Bureau (CFPB), the Florida Office
                of Financial Regulation, or any other governmental authority.
              </p>
            </div>
          </div>

          {/* 13. Modifications to Terms */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              13. Modifications to Terms
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                Supernova Mortgage Brokers reserves the right to modify, amend,
                or update these Terms at any time at our sole discretion. When we
                make material changes, we will update the &quot;Last Updated&quot;
                date at the top of this page and may, at our discretion, provide
                additional notification (such as posting a notice on our Website
                homepage or sending an email notification).
              </p>
              <p>
                Your continued use of this Website and/or our services following
                the posting of revised Terms means that you accept and agree to
                the changes. If you do not agree to the revised Terms, you must
                stop using the Website and our services.
              </p>
              <p>
                We recommend that you review these Terms periodically to stay
                informed of any updates. It is your responsibility to check this
                page for changes.
              </p>
            </div>
          </div>

          {/* 14. Contact Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d29e4a]">
              14. Contact Information
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                If you have any questions, concerns, or requests regarding these
                Terms of Service, please contact us using the information below:
              </p>
              <div className="bg-[#0e2922]/60 border border-[#d29e4a]/20 rounded-2xl p-6 space-y-3">
                <p className="text-[#d29e4a] font-bold text-lg">
                  Supernova Mortgage Brokers
                </p>
                <div className="space-y-2 text-white/60 text-sm">
                  <p>600 North Thacker Avenue</p>
                  <p>Kissimmee, FL 34741</p>
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:6892624400"
                      className="text-[#e8c47a] hover:text-[#d29e4a] transition-colors"
                    >
                      (689) 262-4400
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:supernova@snmmortgage.com"
                      className="text-[#e8c47a] hover:text-[#d29e4a] transition-colors"
                    >
                      supernova@snmmortgage.com
                    </a>
                  </p>
                  <p>NMLS #1880516</p>
                  <p>
                    NMLS Consumer Access:{" "}
                    <a
                      href="https://www.nmlsconsumeraccess.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e8c47a] underline underline-offset-2 hover:text-[#d29e4a] transition-colors"
                    >
                      www.nmlsconsumeraccess.org
                    </a>
                  </p>
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
                className="text-white/40 hover:text-[#d29e4a] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-[#d29e4a] font-medium"
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
