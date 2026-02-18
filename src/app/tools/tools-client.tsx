"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Phone } from "lucide-react";
import Navbar from "@/components/navbar";
import MortgageCalculators from "@/components/mortgage-calculators";

export default function ToolsPageClient() {
    return (
        <div className="min-h-screen bg-[#0e2922] text-white">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-28 sm:pt-40 pb-12 sm:pb-20 overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d29e4a]/5 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d29e4a]/10 border border-[#d29e4a]/20 text-[#e8c47a] text-xs font-medium mb-4 sm:mb-6">
                            <Calculator className="w-3.5 h-3.5" />
                            Free Mortgage Tools
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
                            <span className="bg-gradient-to-r from-[#d29e4a] via-[#e8c47a] to-[#d29e4a] bg-clip-text text-transparent">
                                Mortgage Calculators
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto">
                            Estimate your payments, discover how much home you can afford, or see if refinancing makes sense — all in seconds.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto px-3 sm:px-6"
                >
                    <div className="bg-white/[0.02] border border-[#d29e4a]/10 rounded-2xl p-4 sm:p-6 md:p-10 backdrop-blur-sm">
                        <MortgageCalculators />
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="py-14 sm:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e2922] via-[#0e2922]/80 to-transparent pointer-events-none" />
                <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                            Ready to{" "}
                            <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">
                                get started?
                            </span>
                        </h2>
                        <p className="text-sm sm:text-base text-white/50 mb-8 max-w-xl mx-auto">
                            Numbers only tell part of the story. Talk to one of our licensed mortgage professionals
                            for personalized guidance tailored to your unique situation.
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row items-center justify-center sm:gap-4">
                            <motion.a
                                href="/#contact"
                                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] font-semibold shadow-lg shadow-[#d29e4a]/25 flex items-center justify-center gap-2 text-center"
                                whileHover={{ y: -2, boxShadow: "0 15px 30px rgba(210,158,74,0.4)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Apply Now <ArrowRight className="w-4 h-4" />
                            </motion.a>
                            <a
                                href="tel:3213350399"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#d29e4a]/30 text-[#e8c47a] text-sm font-medium hover:bg-[#d29e4a]/10 transition-colors text-center"
                            >
                                <Phone className="w-4 h-4" />
                                (321) 335-0399
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer compliance */}
            <footer className="border-t border-[#d29e4a]/10 py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
                    <p className="text-[10px] text-white/20 leading-relaxed">
                        Supernova Mortgage Brokers | NMLS #1880516 | 600 North Thacker Avenue, Kissimmee, FL 34741 |
                        Equal Housing Opportunity. These calculators are for illustrative purposes only and do not constitute
                        a loan offer or commitment to lend. Actual rates, payments, and terms may vary.
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
