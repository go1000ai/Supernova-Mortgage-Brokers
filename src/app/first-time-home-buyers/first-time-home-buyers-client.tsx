"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone, Home, DollarSign, MapPin } from "lucide-react";
import Navbar from "@/components/navbar";
import Wizard from "./wizard";
import { copy, t, type Lang } from "./copy";

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

export default function FirstTimeHomeBuyersClient() {
  const [lang, setLang] = useState<Lang>("en");
  const c = copy;

  return (
    <div className="min-h-screen bg-[#0e2922] text-white overflow-x-hidden">
      <Navbar />

      <section className="relative pt-28 sm:pt-36 pb-20 px-4 sm:px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#d29e4a]/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#d29e4a]/5 blur-[100px]" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex justify-end mb-6">
            <LangToggle lang={lang} onChange={setLang} />
          </div>

          <FadeIn className="text-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#d29e4a] font-semibold mb-6">
              {t(c.hero.eyebrow, lang)}
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
              <span className="block text-white">{t(c.hero.titleA, lang)}</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#d29e4a] to-[#e8c47a]">
                {t(c.hero.titleB, lang)}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
              {t(c.hero.subtitle, lang)}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#prequalify"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] font-semibold shadow-lg shadow-[#d29e4a]/30 hover:shadow-xl hover:shadow-[#d29e4a]/50 transition-shadow"
              >
                {t(c.hero.cta, lang)}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/80 font-semibold hover:bg-white/5 transition-colors"
              >
                {t(c.hero.ctaSecondary, lang)}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 bg-[#0a1f1a]">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t(c.value.heading, lang)}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.value.items.map((item, i) => {
              const Icon = [CheckCircle2, DollarSign, Home][i];
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="h-full bg-white/[0.03] border border-[#d29e4a]/15 rounded-3xl p-8 hover:border-[#d29e4a]/40 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d29e4a] to-[#e8c47a] flex items-center justify-center mb-5 shadow-lg shadow-[#d29e4a]/20">
                      <Icon className="w-6 h-6 text-[#0e2922]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t(item.title, lang)}</h3>
                    <p className="text-white/60 leading-relaxed">{t(item.body, lang)}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="programs" className="relative py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t(c.programs.heading, lang)}</h2>
            <p className="text-white/60 max-w-2xl mx-auto">{t(c.programs.subheading, lang)}</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ProgramCard program={c.programs.orange} lang={lang} />
            <ProgramCard program={c.programs.osceola} lang={lang} />
            <ProgramCard program={c.programs.floridaBond} lang={lang} />
            <ProgramCard program={c.programs.chenoa} lang={lang} />
          </div>
        </div>
      </section>

      <section id="prequalify" className="relative py-20 px-4 sm:px-6 bg-[#0a1f1a] scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-10">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#d29e4a] font-semibold mb-4">
              {t(c.wizard.sectionEyebrow, lang)}
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t(c.wizard.sectionHeading, lang)}</h2>
            <p className="text-white/60 max-w-xl mx-auto">{t(c.wizard.sectionSub, lang)}</p>
          </FadeIn>
          <Wizard lang={lang} />
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t(c.eligibility.heading, lang)}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.eligibility.items.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4 bg-white/[0.03] border border-[#d29e4a]/15 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d29e4a] to-[#e8c47a] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#d29e4a]/20">
                    <CheckCircle2 className="w-5 h-5 text-[#0e2922]" />
                  </div>
                  <p className="text-white/80 leading-relaxed pt-1.5">{t(item, lang)}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-[#0a1f1a] to-black">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold mb-5">
              {lang === "en" ? "Ready to own your first home?" : "¿Listo para tener tu primera casa?"}
            </h2>
            <p className="text-white/60 text-lg mb-8">
              {lang === "en"
                ? "Take the 2-minute prequalification or call us directly — either way, no cost, no obligation."
                : "Toma la pre-calificación de 2 minutos o llámanos directamente — sin costo, sin compromiso."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#prequalify"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] font-semibold shadow-lg shadow-[#d29e4a]/30"
              >
                {t(c.hero.cta, lang)}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:6892624400"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#d29e4a]/40 text-white font-semibold hover:bg-[#d29e4a]/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (689) 262-4400
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

function LangToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div className="inline-flex items-center bg-white/[0.04] border border-[#d29e4a]/20 rounded-full p-1">
      <button
        onClick={() => onChange("en")}
        className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all ${
          lang === "en" ? "bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922]" : "text-white/60 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onChange("es")}
        className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all ${
          lang === "es" ? "bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922]" : "text-white/60 hover:text-white"
        }`}
      >
        ES
      </button>
    </div>
  );
}

interface ProgramCardData {
  name: { readonly en: string; readonly es: string };
  location: { readonly en: string; readonly es: string };
  badges: ReadonlyArray<{ readonly en: string; readonly es: string }>;
  tiers: ReadonlyArray<{ readonly label: { readonly en: string; readonly es: string }; readonly amount: string }>;
}

function ProgramCard({ program, lang }: { program: ProgramCardData; lang: Lang }) {
  return (
    <div className="bg-white/[0.03] border border-[#d29e4a]/20 rounded-3xl p-6 sm:p-7 hover:border-[#d29e4a]/50 transition-colors">
      <div className="flex items-start justify-between mb-2 gap-2">
        <h3 className="text-xl sm:text-2xl font-bold">{t(program.name, lang)}</h3>
      </div>
      <p className="text-white/50 text-sm mb-5 flex items-center gap-1.5">
        <MapPin className="w-3.5 h-3.5 text-[#d29e4a]" />
        {t(program.location, lang)}
      </p>
      <div className="space-y-2 mb-5 border-t border-[#d29e4a]/10 pt-4">
        {program.tiers.map((tier, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <span className="text-white/70">{t(tier.label, lang)}</span>
            <span className="text-[#e8c47a] font-bold font-mono">{tier.amount}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {program.badges.map((b, i) => (
          <span
            key={i}
            className="inline-flex items-center px-3 py-1 rounded-full bg-[#d29e4a]/15 border border-[#d29e4a]/30 text-[#e8c47a] text-xs font-semibold"
          >
            {t(b, lang)}
          </span>
        ))}
      </div>
    </div>
  );
}
