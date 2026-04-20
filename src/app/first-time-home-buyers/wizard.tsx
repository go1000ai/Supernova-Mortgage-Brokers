"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, RotateCcw, Sparkles } from "lucide-react";
import { copy, t, type Lang } from "./copy";
import {
  qualify,
  summaryForNotes,
  type CreditBand,
  type County,
  type HouseholdSize,
  type IncomeBand,
  type PriceBand,
  type Timeline,
  type WizardAnswers,
  type YesNo,
  type QualificationResult,
} from "./qualification";

type StepKey =
  | "primaryResidence"
  | "firstTimeBuyer"
  | "county"
  | "centralFlResidency"
  | "householdSize"
  | "income"
  | "credit"
  | "price"
  | "timeline"
  | "contact";

interface WizardProps {
  lang: Lang;
}

const BASE_STEPS: StepKey[] = [
  "primaryResidence",
  "firstTimeBuyer",
  "county",
  "householdSize",
  "income",
  "credit",
  "price",
  "timeline",
  "contact",
];

export default function Wizard({ lang }: WizardProps) {
  const [answers, setAnswers] = useState<Partial<WizardAnswers>>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [contact, setContact] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [result, setResult] = useState<QualificationResult | null>(null);

  const steps: StepKey[] = useMemo(() => {
    if (answers.county === "orange") {
      const out = [...BASE_STEPS];
      out.splice(3, 0, "centralFlResidency");
      return out;
    }
    return BASE_STEPS;
  }, [answers.county]);

  const totalSteps = steps.length;
  const currentStep = steps[stepIndex];
  const progressPct = ((stepIndex + 1) / totalSteps) * 100;

  const wizardCopy = copy.wizard;

  function setAnswer<K extends keyof WizardAnswers>(key: K, value: WizardAnswers[K]) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function goNext() {
    if (stepIndex < totalSteps - 1) setStepIndex(stepIndex + 1);
  }

  function goBack() {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
    setSubmitError(null);
  }

  function canAdvance(): boolean {
    if (currentStep === "contact") {
      return (
        contact.firstName.trim().length > 0 &&
        contact.lastName.trim().length > 0 &&
        /^\S+@\S+\.\S+$/.test(contact.email) &&
        contact.phone.trim().length > 0
      );
    }
    return answers[currentStep as keyof WizardAnswers] !== undefined;
  }

  async function submit() {
    const fullAnswers: WizardAnswers = {
      primaryResidence: answers.primaryResidence ?? "yes",
      firstTimeBuyer: answers.firstTimeBuyer ?? "no",
      county: answers.county ?? "other-fl",
      centralFlResidency: answers.centralFlResidency ?? "no",
      householdSize: answers.householdSize ?? 2,
      income: answers.income ?? "50-80k",
      credit: answers.credit ?? "640-plus",
      price: answers.price ?? "under-345k",
      timeline: answers.timeline ?? "3-6",
    };
    const r = qualify(fullAnswers);
    setResult(r);

    setSubmitting(true);
    setSubmitError(null);

    const matchedNames = r.programs.map((p) => p.name).join(" + ") || "Advisor follow-up";
    const message = summaryForNotes(fullAnswers, r);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: contact.firstName,
          lastName: contact.lastName,
          email: contact.email,
          phone: contact.phone,
          loanType: `First-Time Homebuyer DPA — ${matchedNames}`,
          message,
          tags: ["first-time-homebuyer-wizard", ...r.programs.map((p) => `dpa-${p.id}`)],
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStepIndex(totalSteps);
    } catch {
      setSubmitError(t(wizardCopy.errors.submit, lang));
    } finally {
      setSubmitting(false);
    }
  }

  function restart() {
    setAnswers({});
    setContact({ firstName: "", lastName: "", email: "", phone: "" });
    setResult(null);
    setStepIndex(0);
    setSubmitError(null);
  }

  const showResults = stepIndex === totalSteps;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {!showResults && (
        <>
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#d29e4a] font-semibold">
                {t(wizardCopy.stepLabel, lang)} {stepIndex + 1} {t(wizardCopy.stepOf, lang)} {totalSteps}
              </span>
              <span className="text-xs text-white/50 font-mono">{Math.round(progressPct)}%</span>
            </div>
            <div className="h-2 bg-[#d29e4a]/15 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] rounded-full"
                initial={false}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="bg-white/[0.03] border border-[#d29e4a]/20 rounded-3xl p-6 sm:p-10 backdrop-blur-sm"
            >
              {renderStep(
                currentStep,
                lang,
                answers,
                setAnswer,
                contact,
                setContact
              )}
            </motion.div>
          </AnimatePresence>

          {submitError && (
            <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-sm text-center">
              {submitError}
            </div>
          )}

          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              onClick={goBack}
              disabled={stepIndex === 0}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 text-white/70 text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t(wizardCopy.back, lang)}
            </button>
            {currentStep === "contact" ? (
              <button
                onClick={submit}
                disabled={!canAdvance() || submitting}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] text-sm font-semibold shadow-lg shadow-[#d29e4a]/25 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-[#d29e4a]/40 transition-shadow"
              >
                {submitting ? t(wizardCopy.submitting, lang) : t(wizardCopy.submit, lang)}
                {!submitting && <Sparkles className="w-4 h-4" />}
              </button>
            ) : (
              <button
                onClick={goNext}
                disabled={!canAdvance()}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] text-sm font-semibold shadow-lg shadow-[#d29e4a]/25 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-[#d29e4a]/40 transition-shadow"
              >
                {t(wizardCopy.next, lang)}
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </>
      )}

      {showResults && result && <ResultsScreen result={result} lang={lang} onRestart={restart} />}
    </div>
  );
}

function renderStep(
  step: StepKey,
  lang: Lang,
  answers: Partial<WizardAnswers>,
  setAnswer: <K extends keyof WizardAnswers>(key: K, value: WizardAnswers[K]) => void,
  contact: { firstName: string; lastName: string; email: string; phone: string },
  setContact: React.Dispatch<React.SetStateAction<{ firstName: string; lastName: string; email: string; phone: string }>>
) {
  const q = copy.wizard.questions;

  if (step === "contact") {
    const c = copy.wizard.contact;
    return (
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t(c.heading, lang)}</h3>
        <p className="text-white/60 mb-8">{t(c.sub, lang)}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={t(c.firstName, lang)} required>
            <input
              type="text"
              value={contact.firstName}
              onChange={(e) => setContact((p) => ({ ...p, firstName: e.target.value }))}
              className={inputClass}
              autoComplete="given-name"
            />
          </Field>
          <Field label={t(c.lastName, lang)} required>
            <input
              type="text"
              value={contact.lastName}
              onChange={(e) => setContact((p) => ({ ...p, lastName: e.target.value }))}
              className={inputClass}
              autoComplete="family-name"
            />
          </Field>
          <Field label={t(c.email, lang)} required>
            <input
              type="email"
              value={contact.email}
              onChange={(e) => setContact((p) => ({ ...p, email: e.target.value }))}
              className={inputClass}
              autoComplete="email"
            />
          </Field>
          <Field label={t(c.phone, lang)} required>
            <input
              type="tel"
              value={contact.phone}
              onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))}
              className={inputClass}
              autoComplete="tel"
            />
          </Field>
        </div>
      </div>
    );
  }

  const questionConfig = q[step];
  return (
    <div>
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight">
        {t(questionConfig.q, lang)}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {questionConfig.options.map((opt) => {
          const currentValue = answers[step as keyof WizardAnswers];
          const optValue = step === "householdSize" ? Number(opt.value) : opt.value;
          const selected = currentValue === optValue;
          return (
            <button
              key={opt.value}
              onClick={() => {
                if (step === "primaryResidence" || step === "firstTimeBuyer" || step === "centralFlResidency") {
                  setAnswer(step, opt.value as YesNo);
                } else if (step === "county") {
                  setAnswer("county", opt.value as County);
                } else if (step === "householdSize") {
                  setAnswer("householdSize", Number(opt.value) as HouseholdSize);
                } else if (step === "income") {
                  setAnswer("income", opt.value as IncomeBand);
                } else if (step === "credit") {
                  setAnswer("credit", opt.value as CreditBand);
                } else if (step === "price") {
                  setAnswer("price", opt.value as PriceBand);
                } else if (step === "timeline") {
                  setAnswer("timeline", opt.value as Timeline);
                }
              }}
              className={`text-left px-5 py-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                selected
                  ? "border-[#d29e4a] bg-[#d29e4a]/10 text-white shadow-lg shadow-[#d29e4a]/10"
                  : "border-white/10 bg-white/[0.02] text-white/70 hover:border-[#d29e4a]/40 hover:bg-white/[0.05]"
              }`}
            >
              <span className="font-medium text-base">{lang === "en" ? opt.en : opt.es}</span>
              {selected && <CheckCircle2 className="w-5 h-5 text-[#d29e4a] flex-shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 focus:border-[#d29e4a] focus:outline-none focus:ring-2 focus:ring-[#d29e4a]/30 transition-all";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-[0.15em] text-white/60 font-semibold">
        {label}
        {required && <span className="text-[#d29e4a] ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}

function ResultsScreen({
  result,
  lang,
  onRestart,
}: {
  result: QualificationResult;
  lang: Lang;
  onRestart: () => void;
}) {
  const r = copy.wizard.results;
  const hasMatches = result.programs.length > 0;
  const hasStackable = result.programs.filter((p) => p.stackable).length >= 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/[0.03] border border-[#d29e4a]/20 rounded-3xl p-6 sm:p-10 backdrop-blur-sm"
    >
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d29e4a] to-[#e8c47a] flex items-center justify-center shadow-lg shadow-[#d29e4a]/30">
          <Sparkles className="w-8 h-8 text-[#0e2922]" />
        </div>
      </div>

      <p className="text-center text-[#d29e4a] font-semibold text-sm uppercase tracking-[0.2em] mb-2">
        {t(r.thanks, lang)}
      </p>

      {hasMatches ? (
        <>
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
            {t(r.matchedHeading, lang)}
          </h3>
          <div className="space-y-4">
            {result.programs.map((p) => (
              <div
                key={p.id}
                className="bg-[#0e2922]/80 border border-[#d29e4a]/30 rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                  <h4 className="text-xl font-bold text-white">{p.name}</h4>
                  <span className="text-[#d29e4a] font-bold text-lg">{p.amount}</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-3">
                  {lang === "en" ? p.blurb.en : p.blurb.es}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-[#d29e4a]/15 border border-[#d29e4a]/30 text-[#e8c47a] text-xs font-semibold"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {hasStackable && (
            <div className="mt-6 p-4 rounded-xl bg-[#d29e4a]/10 border border-[#d29e4a]/30 text-white/80 text-sm">
              <strong className="text-[#d29e4a]">✨ </strong>
              {t(r.stackNote, lang)}
            </div>
          )}
        </>
      ) : (
        <>
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            {t(r.noMatchHeading, lang)}
          </h3>
          <p className="text-white/70 text-center max-w-lg mx-auto leading-relaxed">
            {t(r.noMatchBody, lang)}
          </p>
          {result.reasons.length > 0 && (
            <ul className="mt-6 space-y-2 max-w-lg mx-auto">
              {result.reasons.map((reason, i) => (
                <li key={i} className="text-white/50 text-sm flex gap-2">
                  <span className="text-[#d29e4a] flex-shrink-0">•</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="tel:6892624400"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] font-semibold shadow-lg shadow-[#d29e4a]/25 hover:shadow-xl hover:shadow-[#d29e4a]/40 transition-shadow"
        >
          <Phone className="w-4 h-4" />
          {t(r.ctaCall, lang)}
        </a>
        <button
          onClick={onRestart}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/70 font-semibold hover:bg-white/5 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          {t(r.ctaRestart, lang)}
        </button>
      </div>
    </motion.div>
  );
}
