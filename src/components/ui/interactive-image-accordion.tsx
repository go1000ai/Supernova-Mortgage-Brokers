"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// --- Mortgage Program Data (all 6 programs with full details) ---
const accordionItems = [
    {
        id: 1,
        title: "FHA Loans",
        imageUrl:
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
        description: "Low down payment options for first-time homebuyers. Flexible credit requirements and competitive rates.",
        features: ["3.5% minimum down payment", "Lower credit score accepted", "Gift funds allowed"],
    },
    {
        id: 2,
        title: "VA Loans",
        imageUrl:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
        description: "Exclusive benefits for veterans and active-duty service members. No down payment required.",
        features: ["0% down payment", "No PMI required", "Competitive interest rates"],
    },
    {
        id: 3,
        title: "Conventional",
        imageUrl:
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
        description: "Traditional financing with flexible terms for qualified buyers. Ideal for strong credit profiles.",
        features: ["Up to 97% financing", "Fixed & adjustable rates", "Primary & investment"],
    },
    {
        id: 4,
        title: "Cash Out Refi",
        imageUrl:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
        description: "Tap into your home's equity for renovations, debt consolidation, or major purchases.",
        features: ["Access home equity", "Lower your rate", "Consolidate debt"],
    },
    {
        id: 5,
        title: "Bank Statement",
        imageUrl:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
        description: "Alternative documentation for self-employed borrowers. Use bank statements instead of tax returns.",
        features: ["12-24 month statements", "Self-employed friendly", "Flexible income docs"],
    },
    {
        id: 6,
        title: "Reverse Mortgage",
        imageUrl:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
        description: "Convert home equity into cash for homeowners aged 62+. No monthly mortgage payments required.",
        features: ["Ages 62 and older", "No monthly payments", "Stay in your home"],
    },
];

// --- Types ---
interface AccordionItemData {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    features: string[];
}

interface AccordionItemProps {
    item: AccordionItemData;
    isActive: boolean;
    onMouseEnter: () => void;
}

// --- Accordion Item Component ---
function AccordionItem({ item, isActive, onMouseEnter }: AccordionItemProps) {
    return (
        <div
            className={`
                relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
                transition-all duration-700 ease-in-out
                ${isActive ? "flex-[4]" : "flex-[0.5]"}
            `}
            onMouseEnter={onMouseEnter}
        >
            {/* Background Image */}
            <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Caption */}
            <span
                className={`
                    absolute text-white font-semibold whitespace-nowrap
                    transition-all duration-500 ease-in-out
                    ${
                        isActive
                            ? "bottom-6 left-6 rotate-0 opacity-100 text-xl"
                            : "bottom-24 left-1/2 -translate-x-1/2 rotate-90 opacity-80 text-base"
                    }
                `}
            >
                {item.title}
            </span>

            {/* Details (visible when active) */}
            <div
                className={`
                    absolute left-6 right-6 transition-all duration-500
                    ${isActive ? "bottom-16 opacity-100" : "bottom-10 opacity-0 pointer-events-none"}
                `}
            >
                <p className="text-white/70 text-sm mb-3 leading-relaxed">
                    {item.description}
                </p>
                <ul className="space-y-1.5">
                    {item.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-white/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

// --- Main Export ---
export function LandingAccordionItem() {
    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <section id="services" className="bg-[#0a1628] py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Text Content */}
                    <div className="w-full lg:w-2/5 text-center lg:text-left">
                        <p className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-4">
                            Our Programs
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                            Mortgage Solutions for{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                Every Need
                            </span>
                        </h2>
                        <p className="text-lg text-white/50 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
                            From first-time buyers to seasoned investors, explore our full
                            range of loan programs. Hover over each to learn more.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5"
                        >
                            Get Pre-Qualified <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Right: Image Accordion */}
                    <div className="w-full lg:w-3/5">
                        <div className="flex flex-row items-center gap-3 overflow-hidden">
                            {accordionItems.map((item, index) => (
                                <AccordionItem
                                    key={item.id}
                                    item={item}
                                    isActive={index === activeIndex}
                                    onMouseEnter={() => setActiveIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
