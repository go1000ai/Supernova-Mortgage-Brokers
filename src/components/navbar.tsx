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

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10 shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 relative group">
                    <div className="relative">
                        {/* Neon glow layers */}
                        <div className="absolute -inset-1.5 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-60 blur-md group-hover:opacity-90 transition-opacity duration-500 animate-pulse" />
                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 opacity-30 blur-sm" />
                        {/* Logo with border */}
                        <img
                            src="https://secureloan-public.s3.us-west-2.amazonaws.com/21842060/logo/33972_logo.png"
                            alt="My Mortgage Inc."
                            className="relative h-16 w-auto rounded-lg border border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.3),0_0_30px_rgba(59,130,246,0.15)]"
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
                                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5 flex items-center gap-1"
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
                                        className="absolute top-full left-0 mt-1 w-52 bg-[#0f2040] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                                    >
                                        {link.children.map((child) => (
                                            <a
                                                key={child.label}
                                                href={child.href}
                                                className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
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
                        href="tel:3058182020"
                        className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        (305) 818-2020
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5"
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
                        className="lg:hidden bg-[#0a1628]/98 backdrop-blur-md border-t border-white/10"
                    >
                        <nav className="flex flex-col p-6 gap-2">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-white/10 mt-2">
                                <a
                                    href="tel:3058182020"
                                    className="flex items-center gap-2 px-4 py-3 text-white/70"
                                >
                                    <Phone className="w-4 h-4" />
                                    (305) 818-2020
                                </a>
                                <a
                                    href="#contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="block mt-2 px-6 py-3 text-center text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
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
