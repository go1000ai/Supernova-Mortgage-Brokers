"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/navbar";

interface ProgramFeature {
    title: string;
    description: string;
}

interface ProgramFAQ {
    question: string;
    answer: string;
}

interface ProgramPageProps {
    title: string;
    subtitle: string;
    description: string;
    heroImage: string;
    benefits: string[];
    features: ProgramFeature[];
    faqs: ProgramFAQ[];
    eligibility: string[];
    ctaText?: string;
}

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [open, setOpen] = React.useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-[#d29e4a]/10 rounded-2xl overflow-hidden"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
            >
                <span className="font-semibold text-white pr-4">{question}</span>
                <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    className="text-[#d29e4a] text-2xl flex-shrink-0"
                >
                    +
                </motion.span>
            </button>
            <motion.div
                initial={false}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                className="overflow-hidden"
            >
                <p className="px-6 pb-6 text-white/50 leading-relaxed">{answer}</p>
            </motion.div>
        </motion.div>
    );
}

export default function ProgramPageLayout({
    title,
    subtitle,
    description,
    heroImage,
    benefits,
    features,
    faqs,
    eligibility,
    ctaText = "Get Pre-Approved Today",
}: ProgramPageProps) {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div className="bg-black text-white">
            <Navbar />

            {/* ===== HERO ===== */}
            <section ref={heroRef} className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center overflow-hidden">
                <motion.div className="absolute inset-0" style={{ y: heroY }}>
                    <Image
                        src={heroImage}
                        alt={title}
                        width={1920}
                        height={1080}
                        className="w-full h-[120%] object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                </motion.div>

                <motion.div
                    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20"
                    style={{ opacity: heroOpacity }}
                >
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#d29e4a] uppercase mb-3 sm:mb-4"
                    >
                        {subtitle}
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 sm:mb-6 max-w-3xl"
                    >
                        {title.split(" ").slice(0, -1).join(" ")}{" "}
                        <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">
                            {title.split(" ").slice(-1)}
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-base sm:text-lg text-white/50 max-w-2xl mb-8 sm:mb-10 leading-relaxed"
                    >
                        {description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="flex flex-col gap-3 sm:flex-row sm:gap-4"
                    >
                        <a
                            href="/#contact"
                            className="px-8 py-4 text-sm font-semibold rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] shadow-lg shadow-[#d29e4a]/30 hover:shadow-[#d29e4a]/50 hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 text-center"
                        >
                            {ctaText} <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="tel:6892424400"
                            className="px-8 py-4 text-sm font-semibold rounded-full border-2 border-[#d29e4a]/40 text-white hover:bg-[#d29e4a] hover:text-[#0e2922] transition-all inline-flex items-center justify-center gap-2 text-center"
                        >
                            <Phone className="w-4 h-4" /> Call (689) 242-4400
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-xs text-white/40 tracking-widest uppercase">Scroll</span>
                    <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
                        <motion.div
                            className="w-1 h-1.5 bg-[#d29e4a] rounded-full"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* ===== KEY BENEFITS ===== */}
            <section className="py-14 sm:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0e2922]/30 to-black" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                    <FadeIn className="text-center mb-16">
                        <p className="text-sm font-bold tracking-[0.2em] text-[#d29e4a] uppercase mb-4">Benefits</p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Why Choose This{" "}
                            <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">Program</span>
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="p-6 rounded-2xl border border-[#d29e4a]/10 bg-white/[0.02] backdrop-blur-sm hover:border-[#d29e4a]/30 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#d29e4a]/10 flex items-center justify-center mb-4">
                                    <CheckCircle2 className="w-5 h-5 text-[#d29e4a]" />
                                </div>
                                <p className="font-medium text-white/80">{benefit}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FEATURES DETAIL ===== */}
            <section className="py-14 sm:py-20 bg-[#f5f0e8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <FadeIn className="text-center mb-16">
                        <p className="text-sm font-bold tracking-[0.2em] text-[#d29e4a] uppercase mb-4">Program Details</p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#164237]">
                            How It{" "}
                            <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">Works</span>
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="p-8 rounded-2xl bg-white shadow-lg shadow-[#164237]/5 border border-[#d29e4a]/10 hover:shadow-xl transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl font-black text-[#d29e4a]/20">0{i + 1}</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#164237] mb-2">{feature.title}</h3>
                                        <p className="text-[#164237]/60 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== ELIGIBILITY ===== */}
            <section className="py-14 sm:py-20 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <FadeIn className="text-center mb-16">
                        <p className="text-sm font-bold tracking-[0.2em] text-[#d29e4a] uppercase mb-4">Eligibility</p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Who{" "}
                            <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">Qualifies</span>
                        </h2>
                    </FadeIn>

                    <div className="space-y-4">
                        {eligibility.map((item, i) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="flex items-start gap-4 p-5 rounded-xl border border-[#d29e4a]/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                            >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d29e4a] to-[#e8c47a] flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-4 h-4 text-[#0e2922]" />
                                </div>
                                <p className="text-white/70 leading-relaxed">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="py-14 sm:py-20 bg-[#0e2922]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <FadeIn className="text-center mb-16">
                        <p className="text-sm font-bold tracking-[0.2em] text-[#d29e4a] uppercase mb-4">FAQ</p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Common{" "}
                            <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">Questions</span>
                        </h2>
                    </FadeIn>

                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="py-16 sm:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#d29e4a]/10 via-transparent to-[#d29e4a]/10" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <FadeIn>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
                            Ready to{" "}
                            <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">Apply?</span>
                        </h2>
                        <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10">
                            Our team at Supernova Mortgage Brokers is ready to guide you through every step.
                            Get your personalized rate quote in minutes.
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center">
                            <a
                                href="/#contact"
                                className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all text-center"
                            >
                                Get a Free Quote
                            </a>
                            <a
                                href="tel:6892424400"
                                className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-full border-2 border-[#d29e4a]/40 text-white hover:bg-[#d29e4a] hover:text-[#0e2922] transition-all text-center"
                            >
                                Call (689) 242-4400
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ===== COMPLIANCE FOOTER ===== */}
            <footer className="bg-[#0e2922] py-10 sm:py-12 border-t border-[#d29e4a]/10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-5 sm:space-y-6">
                    <a href="/" className="inline-block">
                        <img src="/logo.png" alt="Supernova Mortgage Brokers" className="h-10 sm:h-12 mx-auto" />
                    </a>
                    <p className="text-[10px] sm:text-xs text-white/30 leading-relaxed max-w-3xl mx-auto">
                        Supernova Mortgage Brokers | NMLS #1880516 | 600 North Thacker Avenue, Kissimmee, FL 34741 |
                        Equal Housing Opportunity. All loans are subject to credit approval. Rates, terms, and conditions
                        are subject to change without notice. This is not a commitment to lend. Restrictions may apply.
                        Information is intended for mortgage professionals only. Not all products are available in all states.
                    </p>
                    <p className="text-[10px] sm:text-xs text-white/30 leading-relaxed">
                        Supernova Mortgage Brokers is a DBA of My Mortgage, Inc. NMLS #1880516.
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs text-white/30">
                        <a href="/privacy" className="hover:text-[#d29e4a] transition-colors">Privacy Policy</a>
                        <a href="/terms" className="hover:text-[#d29e4a] transition-colors">Terms of Service</a>
                        <a href="/" className="hover:text-[#d29e4a] transition-colors">Home</a>
                        <span className="flex items-center gap-2">
                            <img src="/equal-housing.jpg" alt="Equal Housing Opportunity" className="h-6 w-auto opacity-50" />
                            Equal Housing Opportunity
                        </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-white/20">&copy; 2026 Supernova Mortgage Brokers. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
