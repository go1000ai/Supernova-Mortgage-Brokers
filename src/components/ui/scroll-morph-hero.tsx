"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
    src: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    label: string;
    tagline: string;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// Card back labels — loan programs + short inspirational words
const CARD_LABELS: { label: string; tagline: string }[] = [
    { label: "FHA", tagline: "Dream Big" },
    { label: "VA", tagline: "You Served" },
    { label: "Conventional", tagline: "Solid Choice" },
    { label: "Refinance", tagline: "Save More" },
    { label: "Cash Out", tagline: "Unlock Equity" },
    { label: "FHA", tagline: "First Home" },
    { label: "VA", tagline: "Honor" },
    { label: "Reverse", tagline: "Enjoy Life" },
    { label: "Bank Statement", tagline: "Self-Made" },
    { label: "Conventional", tagline: "Build Wealth" },
    { label: "FHA", tagline: "New Start" },
    { label: "Refinance", tagline: "Lower Rate" },
    { label: "VA", tagline: "Thank You" },
    { label: "Cash Out", tagline: "Renovate" },
    { label: "Conventional", tagline: "Invest" },
    { label: "Bank Statement", tagline: "Your Way" },
    { label: "FHA", tagline: "Affordable" },
    { label: "Reverse", tagline: "Freedom" },
    { label: "Refinance", tagline: "Fresh Start" },
    { label: "VA", tagline: "Welcome Home" },
];

// --- FlipCard Component ---
const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;

function FlipCard({
    src,
    index,
    total,
    phase,
    label,
    tagline,
    target,
}: FlipCardProps) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 15,
            }}
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-[#164237] ring-1 ring-[#d29e4a]/15"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={`hero-${index}`}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-[#0e2922] flex flex-col items-center justify-center p-4 border border-[#d29e4a]/20"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[7px] font-bold text-[#d29e4a] uppercase tracking-widest mb-1">{label}</p>
                        <p className="text-[10px] font-medium text-white/80 italic">{tagline}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Main Hero Component ---
const TOTAL_IMAGES = 20;
const MAX_SCROLL = 3000;

// Mortgage & Home-themed Unsplash images
const IMAGES = [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&q=80",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=300&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a8?w=300&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=300&q=80",
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=300&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=300&q=80",
    "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=300&q=80",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&q=80",
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=300&q=80",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=300&q=80",
    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=300&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=300&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=300&q=80",
    "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=300&q=80",
    "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=300&q=80",
];

// Helper for linear interpolation
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function IntroAnimation() {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // --- Container Size ---
    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    // --- Virtual Scroll Logic ---
    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            // Release scroll when animation is complete (scrolling down at max) or at top (scrolling up)
            if (scrollRef.current >= MAX_SCROLL && e.deltaY > 0) return;
            if (scrollRef.current <= 0 && e.deltaY < 0) return;

            e.preventDefault();

            const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;
            touchStartY = touchY;

            // Release scroll when animation is complete (swiping up at max) or at top (swiping down)
            if (scrollRef.current >= MAX_SCROLL && deltaY > 0) return;
            if (scrollRef.current <= 0 && deltaY < 0) return;

            e.preventDefault();

            const newScroll = Math.min(Math.max(scrollRef.current + deltaY * 2, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        container.addEventListener("wheel", handleWheel, { passive: false });
        container.addEventListener("touchstart", handleTouchStart, { passive: false });
        container.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };
    }, [virtualScroll]);

    const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

    const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

    // --- Mouse Parallax ---
    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 100);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    // --- Intro Sequence ---
    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    // --- Random Scatter Positions ---
    const scatterPositions = useMemo(() => {
        return IMAGES.map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, []);

    // --- Render Loop ---
    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
        const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeMorph();
            unsubscribeRotate();
            unsubscribeParallax();
        };
    }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

    // --- Content Opacity ---
    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

    return (
        <div ref={containerRef} className="relative w-full h-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
                    alt=""
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay with gradient */}
                <div className="absolute inset-0 bg-black/75" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            </div>

            <div className="relative flex h-full w-full flex-col items-center justify-center perspective-1000">

                {/* Intro Text (Fades out) — fits inside card circle */}
                <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2 w-[200px] md:w-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 1 }}
                        className="text-lg font-semibold tracking-tight text-white md:text-4xl leading-tight"
                    >
                        <span className="md:hidden flex flex-col items-center gap-1">
                            <span>Your</span>
                            <span>Mortgage,</span>
                            <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">Elevated.</span>
                        </span>
                        <span className="hidden md:inline">Your Mortgage, <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">Elevated.</span></span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.5 - morphValue } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-3 text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#d29e4a]/60"
                    >
                        SCROLL TO EXPLORE
                    </motion.p>
                </div>

                {/* Arc Active Content (Fades in) */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-[10%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
                >
                    <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tight mb-4">
                        Your Mortgage,{" "}
                        <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">Elevated.</span>
                    </h2>
                    <p className="text-sm md:text-base text-white/60 max-w-lg leading-relaxed">
                        Supernova Mortgage Brokers — personalized loan solutions from a team that puts your goals first. <br className="hidden md:block" />
                        FHA, VA, Conventional, Refinance — let&apos;s find your perfect fit.
                    </p>
                </motion.div>

                {/* Cards Container */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const lineSpacing = 70;
                            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else {
                            const isMobile = containerSize.width < 768;
                            const minDimension = Math.min(containerSize.width, containerSize.height);

                            const circleRadius = Math.min(minDimension * 0.35, 350);
                            const circleAngle = (i / TOTAL_IMAGES) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                            };

                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                            const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
                            const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
                            const arcCenterY = arcApexY + arcRadius;

                            const spreadAngle = isMobile ? 100 : 130;
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = spreadAngle / (TOTAL_IMAGES - 1);

                            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                            const maxRotation = spreadAngle * 0.8;
                            const boundedRotation = -scrollProgress * maxRotation;

                            const currentArcAngle = startAngle + (i * step) + boundedRotation;
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 1.4 : 1.8,
                            };

                            target = {
                                x: lerp(circlePos.x, arcPos.x, morphValue),
                                y: lerp(circlePos.y, arcPos.y, morphValue),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                scale: lerp(1, arcPos.scale, morphValue),
                                opacity: 1,
                            };
                        }

                        return (
                            <FlipCard
                                key={i}
                                src={src}
                                index={i}
                                total={TOTAL_IMAGES}
                                phase={introPhase}
                                label={CARD_LABELS[i].label}
                                tagline={CARD_LABELS[i].tagline}
                                target={target}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
