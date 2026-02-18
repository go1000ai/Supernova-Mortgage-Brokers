"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
    { label: "About Us", href: "#about" },
    {
        label: "Purchase",
        href: "#services",
        children: [
            { label: "FHA Loans", href: "#services" },
            { label: "VA Loans", href: "#services" },
            { label: "Conventional", href: "#services" },
            { label: "Bank Statement", href: "#services" },
        ],
    },
    {
        label: "Refinance",
        href: "#services",
        children: [
            { label: "Cash Out Refinance", href: "#services" },
            { label: "FHA/VA Streamline", href: "#services" },
            { label: "Reverse Mortgages", href: "#services" },
        ],
    },
    { label: "Tools", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#0e2922]/95 backdrop-blur-md border-b border-[#d29e4a]/10 shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 relative group">
                    <div className="relative">
                        {/* Gold glow layers */}
                        <div className="absolute -inset-1.5 rounded-xl bg-gradient-to-r from-[#d29e4a] via-[#e8c47a] to-[#d29e4a] opacity-40 blur-md group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />
                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#d29e4a] via-[#e8c47a] to-[#d29e4a] opacity-20 blur-sm" />
                        {/* Logo with border */}
                        <img
                            src="/logo.png"
                            alt="Supernova Mortgage Brokers"
                            className="relative h-14 w-auto rounded-lg border border-[#d29e4a]/30 shadow-[0_0_15px_rgba(210,158,74,0.25),0_0_30px_rgba(210,158,74,0.1)]"
                        />
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {NAV_LINKS.map((link) => (
                        <div
                            key={link.label}
                            className="relative"
                            onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <a
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-[#d29e4a] transition-colors rounded-lg hover:bg-white/5 flex items-center gap-1"
                            >
                                {link.label}
                                {link.children && <ChevronDown className="w-3 h-3" />}
                            </a>

                            {/* Dropdown */}
                            <AnimatePresence>
                                {link.children && openDropdown === link.label && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full left-0 mt-1 w-52 bg-[#0e2922] border border-[#d29e4a]/10 rounded-xl shadow-2xl overflow-hidden"
                                    >
                                        {link.children.map((child) => (
                                            <a
                                                key={child.label}
                                                href={child.href}
                                                className="block px-4 py-3 text-sm text-white/70 hover:text-[#d29e4a] hover:bg-white/5 transition-colors"
                                            >
                                                {child.label}
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>

                {/* CTA + Phone */}
                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href="tel:3213350399"
                        className="flex items-center gap-2 text-sm text-white/70 hover:text-[#d29e4a] transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        (321) 335-0399
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] shadow-lg shadow-[#d29e4a]/25 hover:shadow-[#d29e4a]/40 transition-all hover:-translate-y-0.5"
                    >
                        Apply Now
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#0e2922]/98 backdrop-blur-md border-t border-[#d29e4a]/10"
                    >
                        <nav className="flex flex-col p-6 gap-1">
                            {NAV_LINKS.map((link) => (
                                <div key={link.label}>
                                    {link.children ? (
                                        <>
                                            <button
                                                onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                                                className="w-full flex items-center justify-between px-4 py-3 text-white/70 hover:text-[#d29e4a] hover:bg-white/5 rounded-lg transition-colors"
                                            >
                                                {link.label}
                                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === link.label ? "rotate-180" : ""}`} />
                                            </button>
                                            <AnimatePresence>
                                                {mobileDropdown === link.label && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        {link.children.map((child) => (
                                                            <a
                                                                key={child.label}
                                                                href={child.href}
                                                                onClick={() => setMobileOpen(false)}
                                                                className="block pl-8 pr-4 py-2.5 text-sm text-white/50 hover:text-[#d29e4a] hover:bg-white/5 rounded-lg transition-colors"
                                                            >
                                                                {child.label}
                                                            </a>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <a
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block px-4 py-3 text-white/70 hover:text-[#d29e4a] hover:bg-white/5 rounded-lg transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 border-t border-[#d29e4a]/10 mt-2">
                                <a
                                    href="tel:3213350399"
                                    className="flex items-center gap-2 px-4 py-3 text-white/70"
                                >
                                    <Phone className="w-4 h-4" />
                                    (321) 335-0399
                                </a>
                                <a
                                    href="#contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="block mt-2 px-6 py-3 text-center text-sm font-semibold rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922]"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
