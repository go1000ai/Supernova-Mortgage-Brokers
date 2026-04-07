"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
    { label: "About Us", href: "/#about" },
    {
        label: "Purchase",
        href: "/programs/fha-loans",
        children: [
            { label: "FHA Loans", href: "/programs/fha-loans" },
            { label: "VA Loans", href: "/programs/va-loans" },
            { label: "Conventional", href: "/programs/conventional" },
            { label: "Bank Statement", href: "/programs/bank-statement" },
        ],
    },
    {
        label: "Refinance",
        href: "/programs/cash-out-refinance",
        children: [
            { label: "Cash Out Refinance", href: "/programs/cash-out-refinance" },
            { label: "Reverse Mortgages", href: "/programs/reverse-mortgage" },
        ],
    },
    { label: "Tools", href: "/tools" },
    { label: "Our Team", href: "/team" },
    { label: "Testimonials", href: "/#testimonials" },
    // { label: "Contact", href: "/#contact" },  // Temporarily hidden for A2P verification
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

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled || mobileOpen
                    ? "bg-black/90 backdrop-blur-xl border-b border-[#d29e4a]/20 shadow-2xl"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20 lg:h-24">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3 relative group flex-shrink-0">
                    <div className="relative">
                        <div className="absolute -inset-1.5 rounded-xl bg-gradient-to-r from-[#d29e4a] via-[#e8c47a] to-[#d29e4a] opacity-40 blur-md group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />
                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#d29e4a] via-[#e8c47a] to-[#d29e4a] opacity-20 blur-sm" />
                        <img
                            src="/logo.png"
                            alt="Supernova Mortgage Brokers"
                            className="relative h-12 sm:h-16 lg:h-20 w-auto rounded-lg border border-[#d29e4a]/30 shadow-[0_0_15px_rgba(210,158,74,0.25),0_0_30px_rgba(210,158,74,0.1)]"
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
                                className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-[#d29e4a] transition-colors rounded-lg hover:bg-white/5 flex items-center gap-1 group"
                            >
                                {link.label}
                                {link.children && <ChevronDown className="w-3 h-3" />}
                                <span className="absolute -bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                            </a>

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
                                                className="block px-4 py-3 text-sm text-white/70 hover:text-[#d29e4a] hover:bg-white/5 transition-all hover:pl-6 duration-200"
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

                {/* CTA + Phone (Desktop) */}
                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href="tel:6892424400"
                        className="flex items-center gap-2 text-sm text-white/70 hover:text-[#d29e4a] transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        (689) 242-4400
                    </a>
                    <motion.a
                        href="#contact"
                        className="px-6 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] shadow-lg shadow-[#d29e4a]/25"
                        whileHover={{ y: -2, boxShadow: "0 15px 30px rgba(210,158,74,0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        Apply Now
                    </motion.a>
                </div>

                {/* Mobile Hamburger — prominent gold-bordered button */}
                <button
                    className="lg:hidden relative p-2.5 rounded-xl border border-[#d29e4a]/40 bg-[#d29e4a]/10 hover:bg-[#d29e4a]/20 transition-all active:scale-95"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        {mobileOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="w-6 h-6 text-[#d29e4a]" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu className="w-6 h-6 text-[#d29e4a]" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu — Full screen overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-[#d29e4a]/10 max-h-[calc(100vh-4rem)] overflow-y-auto"
                    >
                        <nav className="flex flex-col p-5 gap-1">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                >
                                    {link.children ? (
                                        <>
                                            <button
                                                onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                                                className="w-full flex items-center justify-between px-4 py-3.5 text-base text-white/80 hover:text-[#d29e4a] hover:bg-white/5 rounded-xl transition-colors"
                                            >
                                                {link.label}
                                                <ChevronDown className={`w-4 h-4 text-[#d29e4a]/60 transition-transform duration-200 ${mobileDropdown === link.label ? "rotate-180" : ""}`} />
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
                                                                className="block pl-10 pr-4 py-3 text-sm text-white/50 hover:text-[#d29e4a] hover:bg-white/5 rounded-lg transition-colors border-l-2 border-[#d29e4a]/10 ml-4"
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
                                            className="block px-4 py-3.5 text-base text-white/80 hover:text-[#d29e4a] hover:bg-white/5 rounded-xl transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </motion.div>
                            ))}

                            {/* Phone + CTA in mobile menu */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                                className="pt-4 mt-3 border-t border-[#d29e4a]/10 space-y-3"
                            >
                                <a
                                    href="tel:6892424400"
                                    className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-[#d29e4a] transition-colors rounded-xl hover:bg-white/5"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#d29e4a]/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-4 h-4 text-[#d29e4a]" />
                                    </div>
                                    <span className="text-base">(689) 242-4400</span>
                                </a>
                                <a
                                    href="#contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-6 py-4 text-center text-base font-semibold rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] shadow-lg shadow-[#d29e4a]/20"
                                >
                                    Apply Now
                                </a>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
