"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Shield,
    FileText,
    Users,
    ArrowRight,
    Star,
    Phone,
    Mail,
    MapPin,
    Clock,
    CheckCircle2,
} from "lucide-react";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import { TestimonialCards } from "@/components/ui/testimonial";
import Navbar from "@/components/navbar";

// --- Animated Section Wrapper ---
function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// --- Trust Bar ---
const TRUST_ITEMS = [
    { icon: Shield, label: "Licensed & Insured" },
    { icon: Users, label: "500+ Families Served" },
    { icon: Star, label: "5-Star Rated" },
    { icon: Clock, label: "Fast Approvals" },
    { icon: FileText, label: "NMLS #1880516" },
];

// --- Process Steps ---
const PROCESS_STEPS = [
    { number: "01", title: "Pre-Qualification", description: "Quick assessment of your financial situation and borrowing power." },
    { number: "02", title: "Application", description: "Complete your loan application with our streamlined digital process." },
    { number: "03", title: "Processing", description: "We handle underwriting, appraisal, and all the paperwork for you." },
    { number: "04", title: "Closing", description: "Sign your documents and get the keys to your new home." },
];

// --- Stats ---
const STATS = [
    { value: "500+", label: "Families Served" },
    { value: "15+", label: "Years Experience" },
    { value: "4.9", label: "Star Rating" },
    { value: "$200M+", label: "Loans Funded" },
];

export default function HomePage() {
    return (
        <div className="bg-[#164237] text-white">
            <Navbar />

            {/* ===== HERO SECTION — Scroll Expansion ===== */}
            <ScrollExpandMedia
                mediaType="image"
                mediaSrc="https://images.unsplash.com/photo-1600596542815-ffad4c1539a8?w=1280&q=80"
                bgImageSrc="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
                title="Your Mortgage, Elevated."
                date="Supernova Mortgage Brokers"
                scrollToExpand="Scroll to Explore"
                textBlend
            />

            {/* ===== TRUST BAR ===== */}
            <section className="bg-[#0e2922] border-y border-[#d29e4a]/10 py-6">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                        {TRUST_ITEMS.map((item) => (
                            <div key={item.label} className="flex items-center gap-3 text-white/40">
                                <item.icon className="w-5 h-5 text-[#d29e4a]/50" />
                                <span className="text-sm font-medium">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROGRAMS ACCORDION ===== */}
            <LandingAccordionItem />

            {/* ===== ABOUT ===== */}
            <section id="about" className="py-24 md:py-32 bg-[#0e2922]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <FadeInSection>
                            <div className="relative">
                                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#164237] to-[#d29e4a]/30 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                                        alt="Professional mortgage advisor"
                                        className="w-full h-full object-cover mix-blend-overlay opacity-60"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e2922] via-transparent to-transparent" />
                                </div>

                                {/* Floating Card */}
                                <div className="absolute -bottom-6 -right-6 bg-[#164237] border border-[#d29e4a]/20 rounded-2xl p-6 shadow-2xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d29e4a] to-[#e8c47a] flex items-center justify-center">
                                            <CheckCircle2 className="w-7 h-7 text-[#0e2922]" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-extrabold">15+</p>
                                            <p className="text-xs text-white/50">Years of Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>

                        <FadeInSection delay={0.2}>
                            <p className="text-sm font-bold tracking-[0.2em] text-[#d29e4a] uppercase mb-4">
                                About Us
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                                Mortgage Solutions That{" "}
                                <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">
                                    Shine Brighter
                                </span>
                            </h2>
                            <p className="text-white/50 leading-relaxed mb-8">
                                At Supernova Mortgage Brokers, we are dedicated to
                                making your home financing experience smooth, transparent, and
                                stress-free. Based in Kissimmee, FL, we serve families across
                                Florida with personalized mortgage solutions.
                            </p>

                            <div className="space-y-5 mb-8">
                                {[
                                    { title: "Personalized Service", desc: "Every client gets a tailored strategy based on their unique financial goals." },
                                    { title: "Transparent Process", desc: "No hidden fees, no surprises. We keep you informed at every step." },
                                    { title: "Fast Closings", desc: "Our streamlined process gets you from application to closing quickly." },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#d29e4a]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircle2 className="w-4 h-4 text-[#d29e4a]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">{item.title}</h4>
                                            <p className="text-sm text-white/50">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] shadow-lg shadow-[#d29e4a]/25 hover:shadow-[#d29e4a]/40 transition-all hover:-translate-y-0.5"
                            >
                                Get in Touch <ArrowRight className="w-4 h-4" />
                            </a>
                        </FadeInSection>
                    </div>
                </div>
            </section>

            {/* ===== STATS ===== */}
            <section className="py-20 bg-gradient-to-r from-[#164237] via-[#0e2922] to-[#164237] border-y border-[#d29e4a]/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {STATS.map((stat, i) => (
                            <FadeInSection key={stat.label} delay={i * 0.1} className="text-center">
                                <p className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">{stat.value}</p>
                                <p className="text-sm text-white/50">{stat.label}</p>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROCESS / HOW IT WORKS ===== */}
            <section id="process" className="py-24 md:py-32 bg-[#164237]">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeInSection className="text-center mb-16">
                        <p className="text-sm font-bold tracking-[0.2em] text-[#d29e4a] uppercase mb-4">
                            How It Works
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Four Simple Steps to{" "}
                            <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">
                                Your New Home
                            </span>
                        </h2>
                    </FadeInSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {PROCESS_STEPS.map((step, i) => (
                            <FadeInSection key={step.number} delay={i * 0.15}>
                                <div className="relative text-center p-8">
                                    {i < PROCESS_STEPS.length - 1 && (
                                        <div className="hidden lg:block absolute top-12 right-0 w-full h-px bg-gradient-to-r from-[#d29e4a]/20 to-transparent translate-x-1/2" />
                                    )}
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d29e4a] to-[#e8c47a] flex items-center justify-center mx-auto mb-6 text-lg font-extrabold text-[#0e2922] shadow-lg shadow-[#d29e4a]/20">
                                        {step.number}
                                    </div>
                                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <TestimonialCards />

            {/* ===== CTA ===== */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#164237] via-[#0e2922] to-[#164237]" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#d29e4a]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#d29e4a]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <FadeInSection>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed mb-10">
                            Your mortgage, elevated. Contact Supernova Mortgage Brokers today for a
                            free consultation and take the first step toward your dream home.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
                            >
                                Get a Free Quote
                            </a>
                            <a
                                href="tel:3213350399"
                                className="px-8 py-4 text-base font-semibold rounded-full border-2 border-[#d29e4a]/40 text-white hover:bg-[#d29e4a] hover:text-[#0e2922] transition-all"
                            >
                                Call (321) 335-0399
                            </a>
                        </div>
                    </FadeInSection>
                </div>
            </section>

            {/* ===== CONTACT ===== */}
            <section id="contact" className="py-24 md:py-32 bg-[#0e2922]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <FadeInSection>
                            <p className="text-sm font-bold tracking-[0.2em] text-[#d29e4a] uppercase mb-4">
                                Contact Us
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                                Let&apos;s Discuss Your{" "}
                                <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">
                                    Mortgage Options
                                </span>
                            </h2>
                            <p className="text-white/50 leading-relaxed mb-10">
                                Whether you&apos;re buying your first home, refinancing, or looking
                                for investment property financing, we&apos;re here to help.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Phone, label: "Phone", value: "(321) 335-0399", href: "tel:3213350399" },
                                    { icon: Mail, label: "Email", value: "info@supernovamortgage.com", href: "mailto:info@supernovamortgage.com" },
                                    { icon: MapPin, label: "Address", value: "600 North Thacker Avenue, Kissimmee, FL 34741", href: "#" },
                                    { icon: Clock, label: "Hours", value: "Mon-Fri: 9AM - 6PM | Sat: By Appointment", href: "#" },
                                ].map((item) => (
                                    <a key={item.label} href={item.href} className="flex gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-[#d29e4a]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d29e4a]/20 transition-colors">
                                            <item.icon className="w-5 h-5 text-[#d29e4a]" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm mb-0.5">{item.label}</p>
                                            <p className="text-sm text-white/50">{item.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </FadeInSection>

                        <FadeInSection delay={0.2}>
                            <div className="bg-white/[0.03] border border-[#d29e4a]/10 rounded-2xl p-8 md:p-10">
                                <h3 className="text-xl font-bold mb-8">Send Us a Message</h3>
                                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="w-full px-4 py-3.5 bg-white/[0.05] border border-[#d29e4a]/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#d29e4a]/50 focus:bg-white/[0.08] transition-all"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="w-full px-4 py-3.5 bg-white/[0.05] border border-[#d29e4a]/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#d29e4a]/50 focus:bg-white/[0.08] transition-all"
                                        />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full px-4 py-3.5 bg-white/[0.05] border border-[#d29e4a]/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#d29e4a]/50 focus:bg-white/[0.08] transition-all"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-3.5 bg-white/[0.05] border border-[#d29e4a]/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#d29e4a]/50 focus:bg-white/[0.08] transition-all"
                                    />
                                    <select
                                        className="w-full px-4 py-3.5 bg-white/[0.05] border border-[#d29e4a]/10 rounded-xl text-sm text-white/50 focus:outline-none focus:border-[#d29e4a]/50 focus:bg-white/[0.08] transition-all"
                                    >
                                        <option value="">Loan Type</option>
                                        <option value="purchase">Purchase</option>
                                        <option value="refinance">Refinance</option>
                                        <option value="cashout">Cash Out Refinance</option>
                                        <option value="fha">FHA Loan</option>
                                        <option value="va">VA Loan</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <textarea
                                        placeholder="Tell us about your situation..."
                                        rows={4}
                                        className="w-full px-4 py-3.5 bg-white/[0.05] border border-[#d29e4a]/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#d29e4a]/50 focus:bg-white/[0.08] transition-all resize-none"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full py-4 text-sm font-semibold rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] shadow-lg shadow-[#d29e4a]/25 hover:shadow-[#d29e4a]/40 transition-all hover:-translate-y-0.5"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="bg-black pt-20 pb-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#d29e4a]/10">
                        {/* Brand */}
                        <div className="lg:col-span-1">
                            <div className="relative inline-block mb-6">
                                <div className="absolute -inset-1.5 rounded-xl bg-gradient-to-r from-[#d29e4a] via-[#e8c47a] to-[#d29e4a] opacity-30 blur-md" />
                                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#d29e4a] via-[#e8c47a] to-[#d29e4a] opacity-15 blur-sm" />
                                <img
                                    src="/logo.png"
                                    alt="Supernova Mortgage Brokers"
                                    className="relative h-14 w-auto rounded-lg border border-[#d29e4a]/30 shadow-[0_0_15px_rgba(210,158,74,0.2),0_0_30px_rgba(210,158,74,0.1)]"
                                />
                            </div>
                            <p className="text-sm text-white/40 leading-relaxed mb-6">
                                Your mortgage, elevated. Serving families
                                across Florida with personalized home financing solutions.
                            </p>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-white/40 hover:bg-[#d29e4a] hover:text-[#0e2922] transition-all"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-white/40 hover:bg-gradient-to-br hover:from-[#d29e4a] hover:to-[#e8c47a] hover:text-[#0e2922] transition-all"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-bold text-sm mb-6 text-[#d29e4a]">Quick Links</h4>
                            <ul className="space-y-3">
                                {["About Us", "Loan Programs", "Calculators", "Testimonials", "Contact Us"].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm text-white/40 hover:text-[#d29e4a] transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Loan Programs */}
                        <div>
                            <h4 className="font-bold text-sm mb-6 text-[#d29e4a]">Loan Programs</h4>
                            <ul className="space-y-3">
                                {["FHA Loans", "VA Loans", "Conventional", "Refinance", "Reverse Mortgage", "Bank Statement"].map((link) => (
                                    <li key={link}>
                                        <a href="#services" className="text-sm text-white/40 hover:text-[#d29e4a] transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-bold text-sm mb-6 text-[#d29e4a]">Contact</h4>
                            <ul className="space-y-3 text-sm text-white/40">
                                <li className="flex items-start gap-2">
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#d29e4a]/50" />
                                    600 North Thacker Avenue, Kissimmee, FL 34741
                                </li>
                                <li>
                                    <a href="tel:3213350399" className="flex items-center gap-2 hover:text-[#d29e4a] transition-colors">
                                        <Phone className="w-4 h-4 text-[#d29e4a]/50" />
                                        (321) 335-0399
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@supernovamortgage.com" className="flex items-center gap-2 hover:text-[#d29e4a] transition-colors">
                                        <Mail className="w-4 h-4 text-[#d29e4a]/50" />
                                        info@supernovamortgage.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
                        <p>&copy; 2026 Supernova Mortgage Brokers. NMLS #1880516. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-[#d29e4a] transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-[#d29e4a] transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-[#d29e4a] transition-colors">Equal Housing Lender</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
