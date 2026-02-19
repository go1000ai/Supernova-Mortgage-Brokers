"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring, useScroll, useTransform } from "framer-motion";
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
import Image from "next/image";
import LivingNebula from "@/components/ui/living-nebula";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import { BookTestimonial } from "@/components/ui/3d-book-testimonial";
import Navbar from "@/components/navbar";
import { useIsMobile } from "@/hooks/use-is-mobile";

// --- Animation Wrappers ---
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

function SlideInLeft({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

function ScaleIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// --- Animated Counter ---
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const springVal = useSpring(0, { stiffness: 50, damping: 20 });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (isInView) springVal.set(target);
    }, [isInView, springVal, target]);

    useEffect(() => {
        const unsubscribe = springVal.on("change", (v: number) => setDisplay(Math.round(v)));
        return unsubscribe;
    }, [springVal]);

    return <span ref={ref}>{display}{suffix}</span>;
}

// --- Parallax Image ---
function ParallaxImage({ src, alt, className = "", speed = 50 }: { src: string; alt: string; className?: string; speed?: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);
    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.img src={src} alt={alt} className="w-full h-[180%] object-cover" style={{ y }} />
        </div>
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
    { value: 500, suffix: "+", label: "Families Served", prefix: "" },
    { value: 15, suffix: "+", label: "Years Experience", prefix: "" },
    { value: 49, suffix: "", label: "Star Rating", prefix: "", display: "4.9" },
    { value: 200, suffix: "M+", label: "Loans Funded", prefix: "$" },
];

// --- Testimonials ---
const TESTIMONIALS = [
    {
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600",
        name: "Maria & Carlos R.",
        jobtitle: "First-Time Homebuyers",
        rating: 5,
        text: "Supernova made our dream of owning a home a reality. They guided us through every step of the FHA process and found us an incredible rate. We couldn't be happier!",
    },
    {
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
        name: "David Thompson",
        jobtitle: "Refinance Client",
        rating: 5,
        text: "The refinancing process was seamless. Supernova saved us over $400/month on our mortgage. Their expertise and professionalism are unmatched.",
    },
    {
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600",
        name: "Ana Gutierrez",
        jobtitle: "VA Loan Client",
        rating: 5,
        text: "As a veteran, I appreciated how knowledgeable the team was about VA loans. Zero down payment and no PMI — they made the entire process stress-free.",
    },
    {
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600",
        name: "James & Lisa P.",
        jobtitle: "Investment Property",
        rating: 5,
        text: "Outstanding service from start to finish. They helped us secure financing for our investment property with the best terms we could find anywhere.",
    },
    {
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600",
        name: "Robert Chen",
        jobtitle: "Conventional Loan Client",
        rating: 5,
        text: "From pre-approval to closing, Supernova handled everything with professionalism. They found us a rate that beat every other lender we talked to.",
    },
    {
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600",
        name: "Sofia Martinez",
        jobtitle: "First-Time Homebuyer",
        rating: 5,
        text: "I was nervous about buying my first home, but the Supernova team made me feel confident every step of the way. Couldn't recommend them more!",
    },
];

// --- CTA Section with Parallax Background ---
function CtaParallaxSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const bgY = useTransform(scrollYProgress, [0, 1], [-400, 400]);

    return (
        <section ref={ref} className="py-32 md:py-40 relative overflow-hidden">
            <motion.div className="absolute -inset-y-96 inset-x-0" style={{ y: bgY }}>
                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#164237]/85" />
            </motion.div>
            {/* Floating gold particles */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-[#d29e4a]/30"
                    style={{ left: `${10 + i * 8}%`, top: `${20 + (i * 13) % 60}%` }}
                    animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <ScaleIn>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10">
                        Your mortgage, elevated. Contact Supernova Mortgage Brokers today for a
                        free consultation and take the first step toward your dream home.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center">
                        <a
                            href="#contact"
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
                </ScaleIn>
            </div>
        </section>
    );
}

export default function HomePage() {
    const isMobile = useIsMobile();

    return (
        <div className="bg-black text-white">
            <Navbar />

            {/* ===== HERO — Supernova Nebula ===== */}
            <LivingNebula
                particleCount={isMobile ? 300 : 800}
                trailLength={0.12}
                canvasGlow={25}
                pulseFrequency={0.002}
                emissionRate={3}
                className="flex flex-col items-center justify-center text-center px-6"
            >
                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
                    {/* Logo — the epicenter of the blast, explodes from tiny to huge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.08, y: 0 }}
                        animate={{ opacity: 1, scale: 1, y: isMobile ? 30 : 65 }}
                        transition={{
                            duration: 2,
                            ease: [0.16, 1, 0.3, 1],
                            opacity: { duration: 0.4 },
                        }}
                        className="relative mb-6"
                    >
                        {/* Neon outline glow — static glow for performance */}
                        <motion.div
                            className="relative z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 2 }}
                            style={{
                                filter: "drop-shadow(0 0 20px rgba(210,158,74,0.9)) drop-shadow(0 0 50px rgba(232,196,122,0.5))",
                            }}
                        >
                            <Image
                                src="/logo-transparent.png"
                                alt="Supernova Mortgage Brokers"
                                width={375}
                                height={375}
                                className="mx-auto w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] lg:w-[375px] lg:h-[375px]"
                                priority
                            />
                        </motion.div>
                    </motion.div>

                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-white" style={{ textShadow: '0 0 20px rgba(255,255,255,0.6), 0 0 50px rgba(255,255,255,0.3), 0 0 100px rgba(255,255,255,0.15)' }}>Your Home Journey,</span>
                        <br />
                        <span
                            className="relative inline-block text-[#f5d98a]"
                            style={{
                                textShadow: '0 0 15px rgba(210,158,74,0.9), 0 0 40px rgba(210,158,74,0.5), 2px 2px 0 #0e2922, -2px -2px 0 #0e2922, 2px -2px 0 #0e2922, -2px 2px 0 #0e2922',
                            }}
                        >
                            Ignited.
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-white/50 max-w-lg mb-8 sm:mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 2.3 }}
                    >
                        We fuel your path to homeownership with the power of a supernova.
                    </motion.p>

                    <motion.div
                        className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-12 sm:mb-16 w-full sm:w-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 2.6 }}
                    >
                        <a
                            href="#contact"
                            className="px-8 py-4 text-sm font-semibold rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] shadow-lg shadow-[#d29e4a]/30 hover:shadow-[#d29e4a]/50 hover:-translate-y-0.5 transition-all text-center"
                        >
                            Get a Free Quote
                        </a>
                        <a
                            href="tel:6892424400"
                            className="px-8 py-4 text-sm font-semibold rounded-full border-2 border-[#d29e4a]/40 text-white hover:bg-[#d29e4a] hover:text-[#0e2922] transition-all backdrop-blur-sm text-center"
                        >
                            Call (689) 242-4400
                        </a>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="text-xs text-white/40 tracking-widest uppercase">Scroll</span>
                    <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
                        <motion.div
                            className="w-1 h-1.5 bg-[#d29e4a] rounded-full"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>
            </LivingNebula>

            {/* ===== TRUST BAR — White Background Marquee ===== */}
            <section className="bg-white py-6 border-b border-[#164237]/10 overflow-hidden">
                <div className="relative">
                    <motion.div
                        className="flex items-center gap-16 whitespace-nowrap"
                        animate={{ x: [0, -800] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        {[...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS].map((item, i) => (
                            <div key={`${item.label}-${i}`} className="flex items-center gap-3 text-[#164237]/60 flex-shrink-0">
                                <item.icon className="w-5 h-5 text-[#d29e4a]" />
                                <span className="text-sm font-semibold tracking-wide">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== PROGRAMS ACCORDION — Dark ===== */}
            <LandingAccordionItem />

            {/* ===== ABOUT — White Background ===== */}
            <section id="about" className="py-16 sm:py-24 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
                        <ScaleIn>
                            <div className="relative">
                                <motion.div
                                    className="aspect-[4/5] rounded-3xl overflow-hidden ring-2 ring-[#d29e4a]/20"
                                    whileHover={{ rotateY: 3, rotateX: -2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    style={{ transformPerspective: 1000 }}
                                >
                                    <ParallaxImage
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                                        alt="Professional mortgage advisor"
                                        className="w-full h-full"
                                        speed={200}
                                    />
                                </motion.div>

                                {/* Floating Card */}
                                <div className="absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-6 bg-white border border-[#164237]/10 rounded-2xl p-4 sm:p-6 shadow-2xl max-w-[180px] sm:max-w-none">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#d29e4a] to-[#e8c47a] flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-5 h-5 sm:w-7 sm:h-7 text-[#0e2922]" />
                                        </div>
                                        <div>
                                            <p className="text-xl sm:text-2xl font-extrabold text-[#164237]">15+</p>
                                            <p className="text-[10px] sm:text-xs text-[#164237]/50">Years of Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScaleIn>

                        <SlideInLeft delay={0.2}>
                            <p className="text-sm font-bold tracking-[0.2em] text-[#d29e4a] uppercase mb-4">
                                About Us
                            </p>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#164237] mb-6">
                                Mortgage Solutions That{" "}
                                <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">
                                    Shine Brighter
                                </span>
                            </h2>
                            <p className="text-[#164237]/60 leading-relaxed mb-8">
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
                                            <h4 className="font-bold mb-1 text-[#164237]">{item.title}</h4>
                                            <p className="text-sm text-[#164237]/50">{item.desc}</p>
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
                        </SlideInLeft>
                    </div>
                </div>
            </section>

            {/* ===== STATS — Bold Gold Background ===== */}
            <section className="py-16 bg-[#d29e4a] relative overflow-hidden">
                {/* Diagonal pattern overlay */}
                <div className="absolute inset-0 opacity-[0.06]" style={{
                    backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, #0e2922 10px, #0e2922 20px)"
                }} />
                <div className="relative max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
                        {STATS.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
                            >
                                <p className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0e2922] mb-1">
                                    {stat.prefix}{stat.display ?? <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
                                    {stat.display && stat.suffix}
                                </p>
                                <p className="text-xs font-semibold text-[#0e2922]/60 uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROCESS / HOW IT WORKS — Black Background ===== */}
            <section id="process" className="py-16 sm:py-24 md:py-32 bg-black relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <div className="relative text-center p-8">
                                    {i < PROCESS_STEPS.length - 1 && (
                                        <div className="hidden lg:block absolute top-12 right-0 w-full h-px bg-gradient-to-r from-[#d29e4a]/20 to-transparent translate-x-1/2" />
                                    )}
                                    <motion.div
                                        className="w-20 h-20 rounded-full bg-gradient-to-br from-[#d29e4a] to-[#e8c47a] flex items-center justify-center mx-auto mb-6 text-lg font-extrabold text-[#0e2922] shadow-[0_0_30px_rgba(210,158,74,0.4)]"
                                        whileInView={{ scale: [0.8, 1.05, 1] }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: i * 0.15 }}
                                    >
                                        {step.number}
                                    </motion.div>
                                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS — Animated Cards Stack on Cream ===== */}
            <section id="testimonials" className="bg-[#f5f0e8] px-4 sm:px-6 py-16 sm:py-24 md:py-32">
                <div className="text-center mb-4">
                    <p className="text-sm font-bold tracking-[0.2em] text-[#d29e4a] uppercase mb-4">
                        Testimonials
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#164237] mb-6">
                        What Our{" "}
                        <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">
                            Clients Say
                        </span>
                    </h2>
                    <p className="text-lg text-[#164237]/50 max-w-2xl mx-auto leading-relaxed">
                        Join hundreds of families who found their dream home with Supernova Mortgage Brokers.
                    </p>
                </div>
                <BookTestimonial testimonials={TESTIMONIALS} />
            </section>

            {/* ===== CTA — Background Image ===== */}
            <CtaParallaxSection />

            {/* ===== CONTACT — White Background ===== */}
            <section id="contact" className="py-16 sm:py-24 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
                        <SlideInLeft>
                            <p className="text-sm font-bold tracking-[0.2em] text-[#d29e4a] uppercase mb-4">
                                Contact Us
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#164237] mb-6">
                                Let&apos;s Discuss Your{" "}
                                <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">
                                    Mortgage Options
                                </span>
                            </h2>
                            <p className="text-[#164237]/50 leading-relaxed mb-10">
                                Whether you&apos;re buying your first home, refinancing, or looking
                                for investment property financing, we&apos;re here to help.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Phone, label: "Phone", value: "(689) 242-4400", href: "tel:6892424400" },
                                    { icon: Mail, label: "Email", value: "info@supernovamortgage.com", href: "mailto:info@supernovamortgage.com" },
                                    { icon: MapPin, label: "Address", value: "600 North Thacker Avenue, Kissimmee, FL 34741", href: "#" },
                                    { icon: Clock, label: "Hours", value: "Mon-Fri: 9AM - 6PM | Sat: By Appointment", href: "#" },
                                ].map((item) => (
                                    <a key={item.label} href={item.href} className="flex gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-[#d29e4a]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d29e4a]/20 transition-colors">
                                            <item.icon className="w-5 h-5 text-[#d29e4a]" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm mb-0.5 text-[#164237]">{item.label}</p>
                                            <p className="text-sm text-[#164237]/50">{item.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </SlideInLeft>

                        <FadeInSection delay={0.2}>
                            <div className="bg-[#0e2922] rounded-3xl p-8 md:p-10 shadow-2xl">
                                <h3 className="text-xl font-bold mb-8 text-white">Send Us a Message</h3>
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

            {/* Gold separator */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#d29e4a] to-transparent" />

            {/* ===== FOOTER ===== */}
            <footer className="bg-black pt-12 sm:pt-20 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
                                {[
                                    { label: "FHA Loans", href: "/programs/fha-loans" },
                                    { label: "VA Loans", href: "/programs/va-loans" },
                                    { label: "Conventional", href: "/programs/conventional" },
                                    { label: "Cash Out Refinance", href: "/programs/cash-out-refinance" },
                                    { label: "Reverse Mortgage", href: "/programs/reverse-mortgage" },
                                    { label: "Bank Statement", href: "/programs/bank-statement" },
                                ].map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-sm text-white/40 hover:text-[#d29e4a] transition-colors">
                                            {link.label}
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
                                    <a href="tel:6892424400" className="flex items-center gap-2 hover:text-[#d29e4a] transition-colors">
                                        <Phone className="w-4 h-4 text-[#d29e4a]/50" />
                                        (689) 242-4400
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

                    {/* Compliance Disclaimer */}
                    <div className="pt-10 border-t border-[#d29e4a]/10 mt-10">
                        <p className="text-[10px] text-white/20 leading-relaxed text-center max-w-4xl mx-auto mb-6">
                            Supernova Mortgage Brokers | NMLS #1880516 | Florida Licensed Mortgage Lender | 600 North Thacker Avenue, Kissimmee, FL 34741 |
                            Equal Opportunity Lender. All loans are subject to credit approval. Rates, terms, and conditions are subject to change without notice.
                            This is not a commitment to lend. Not all products are available in all states. Information provided is for educational purposes and does not constitute a loan offer or solicitation.
                            Actual rates, payments, and costs may vary. Borrowers must qualify based on creditworthiness, income, assets, and property valuation.
                            Mortgage insurance may be required for certain loan programs. Consult with a licensed mortgage professional for specific program eligibility and terms.
                        </p>
                        <p className="text-[10px] text-white/20 leading-relaxed text-center max-w-4xl mx-auto">
                            My Mortgage, Inc. doing business as Supernova Mortgage Brokers. NMLS #1880516.
                        </p>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-6 flex flex-col items-center gap-4 text-xs text-white/30 text-center">
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                            <a href="/privacy" className="hover:text-[#d29e4a] transition-colors">Privacy Policy</a>
                            <a href="/terms" className="hover:text-[#d29e4a] transition-colors">Terms of Service</a>
                            <span className="flex items-center gap-2 text-white/30">
                                <img src="/equal-housing.jpg" alt="Equal Opportunity Lender" className="h-6 w-auto invert opacity-40" />
                                Equal Opportunity Lender
                            </span>
                        </div>
                        <p>&copy; 2026 Supernova Mortgage Brokers. NMLS #1880516. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
