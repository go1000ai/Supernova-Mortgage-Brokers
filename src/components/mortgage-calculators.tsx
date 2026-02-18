"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Home, RefreshCw, DollarSign, TrendingDown, PiggyBank } from "lucide-react";

// ─── Utility ────────────────────────────────────────────────
function fmt(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
function fmtDecimal(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function pmt(rate: number, nper: number, pv: number) {
    if (rate === 0) return pv / nper;
    const x = Math.pow(1 + rate, nper);
    return (pv * rate * x) / (x - 1);
}

// ─── Shared Input ───────────────────────────────────────────
function SliderInput({ label, value, onChange, min, max, step, prefix = "", suffix = "" }: {
    label: string; value: number; onChange: (v: number) => void;
    min: number; max: number; step: number; prefix?: string; suffix?: string;
}) {
    const pct = ((value - min) / (max - min)) * 100;
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-sm">
                <span className="text-white/60">{label}</span>
                <span className="text-[#e8c47a] font-semibold">
                    {prefix}{typeof value === "number" && step < 1 ? value.toFixed(step < 0.1 ? 3 : 2) : value.toLocaleString()}{suffix}
                </span>
            </div>
            <input
                type="range"
                min={min} max={max} step={step} value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                    background: `linear-gradient(to right, #d29e4a ${pct}%, rgba(255,255,255,0.1) ${pct}%)`,
                }}
            />
            <div className="flex justify-between text-[10px] text-white/30">
                <span>{prefix}{min.toLocaleString()}{suffix}</span>
                <span>{prefix}{max.toLocaleString()}{suffix}</span>
            </div>
        </div>
    );
}

function ResultCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-[#d29e4a]/10 to-[#d29e4a]/5 border border-[#d29e4a]/20 rounded-xl p-3 sm:p-4 text-center"
        >
            <p className="text-[10px] sm:text-xs text-white/50 mb-1">{label}</p>
            <p className="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent break-all">{value}</p>
            {sub && <p className="text-[9px] sm:text-[10px] text-white/30 mt-1">{sub}</p>}
        </motion.div>
    );
}

// ─── 1. Payment Calculator ─────────────────────────────────
function PaymentCalculator() {
    const [loanAmount, setLoanAmount] = useState(350000);
    const [rate, setRate] = useState(6.5);
    const [term, setTerm] = useState(30);
    const [downPct, setDownPct] = useState(10);
    const [propertyTax, setPropertyTax] = useState(3600);
    const [insurance, setInsurance] = useState(1200);

    const results = useMemo(() => {
        const downPayment = loanAmount * (downPct / 100);
        const principal = loanAmount - downPayment;
        const monthlyRate = rate / 100 / 12;
        const months = term * 12;
        const monthlyPI = pmt(monthlyRate, months, principal);
        const monthlyTax = propertyTax / 12;
        const monthlyIns = insurance / 12;
        const pmiRate = downPct < 20 ? 0.005 : 0;
        const monthlyPMI = (principal * pmiRate) / 12;
        const totalMonthly = monthlyPI + monthlyTax + monthlyIns + monthlyPMI;
        const totalPaid = monthlyPI * months;
        const totalInterest = totalPaid - principal;

        return { downPayment, principal, monthlyPI, monthlyTax, monthlyIns, monthlyPMI, totalMonthly, totalInterest, totalPaid };
    }, [loanAmount, rate, term, downPct, propertyTax, insurance]);

    // Donut chart data
    const segments = [
        { label: "Principal & Interest", value: results.monthlyPI, color: "#d29e4a" },
        { label: "Property Tax", value: results.monthlyTax, color: "#e8c47a" },
        { label: "Insurance", value: results.monthlyIns, color: "#8B7355" },
        ...(results.monthlyPMI > 0 ? [{ label: "PMI", value: results.monthlyPMI, color: "#C4A265" }] : []),
    ];
    const total = segments.reduce((s, x) => s + x.value, 0);

    let cumulativePercent = 0;
    const donutSegments = segments.map((seg) => {
        const pct = (seg.value / total) * 100;
        const start = cumulativePercent;
        cumulativePercent += pct;
        return { ...seg, start, pct };
    });

    function buildConicGradient() {
        const parts = donutSegments.map(
            (seg) => `${seg.color} ${seg.start}% ${seg.start + seg.pct}%`
        );
        return `conic-gradient(${parts.join(", ")})`;
    }

    return (
        <div className="space-y-6">
            <div className="grid gap-5">
                <SliderInput label="Home Price" value={loanAmount} onChange={setLoanAmount} min={50000} max={2000000} step={5000} prefix="$" />
                <SliderInput label="Down Payment" value={downPct} onChange={setDownPct} min={0} max={50} step={1} suffix="%" />
                <SliderInput label="Interest Rate" value={rate} onChange={setRate} min={2} max={12} step={0.125} suffix="%" />
                <SliderInput label="Loan Term" value={term} onChange={setTerm} min={10} max={30} step={5} suffix=" yrs" />
                <SliderInput label="Annual Property Tax" value={propertyTax} onChange={setPropertyTax} min={0} max={20000} step={100} prefix="$" />
                <SliderInput label="Annual Insurance" value={insurance} onChange={setInsurance} min={0} max={6000} step={100} prefix="$" />
            </div>

            {/* Donut Chart */}
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-48 h-48">
                    <div
                        className="w-full h-full rounded-full"
                        style={{ background: buildConicGradient() }}
                    />
                    <div className="absolute inset-4 rounded-full bg-[#0e2922] flex flex-col items-center justify-center">
                        <span className="text-[10px] text-white/40">Monthly</span>
                        <span className="text-lg font-bold text-[#e8c47a]">{fmtDecimal(results.totalMonthly)}</span>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    {segments.map((seg) => (
                        <div key={seg.label} className="flex items-center gap-1.5 text-[10px] text-white/50">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: seg.color }} />
                            {seg.label}: {fmtDecimal(seg.value)}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <ResultCard label="Monthly Payment" value={fmtDecimal(results.totalMonthly)} />
                <ResultCard label="Down Payment" value={fmt(results.downPayment)} sub={`${downPct}% of home price`} />
                <ResultCard label="Loan Amount" value={fmt(results.principal)} />
                <ResultCard label="Total Interest" value={fmt(results.totalInterest)} sub={`Over ${term} years`} />
            </div>

            {results.monthlyPMI > 0 && (
                <p className="text-xs text-[#d29e4a]/60 text-center">
                    * PMI estimated at 0.5% annually. PMI can be removed once you reach 20% equity.
                </p>
            )}
        </div>
    );
}

// ─── 2. Affordability Calculator ────────────────────────────
function AffordabilityCalculator() {
    const [income, setIncome] = useState(85000);
    const [monthlyDebt, setMonthlyDebt] = useState(500);
    const [downPayment, setDownPayment] = useState(50000);
    const [rate, setRate] = useState(6.5);
    const [term, setTerm] = useState(30);

    const results = useMemo(() => {
        const monthlyIncome = income / 12;
        // Front-end ratio: 28% of gross monthly income
        const maxHousing28 = monthlyIncome * 0.28;
        // Back-end ratio: 36% of gross monthly income minus debts
        const maxHousing36 = monthlyIncome * 0.36 - monthlyDebt;
        const maxMonthlyPayment = Math.min(maxHousing28, maxHousing36);

        // Reverse PMT to find max loan amount
        const monthlyRate = rate / 100 / 12;
        const months = term * 12;
        let maxLoan: number;
        if (monthlyRate === 0) {
            maxLoan = maxMonthlyPayment * months;
        } else {
            const x = Math.pow(1 + monthlyRate, months);
            maxLoan = maxMonthlyPayment * (x - 1) / (monthlyRate * x);
        }

        const maxHomePrice = maxLoan + downPayment;
        const dti = ((maxMonthlyPayment + monthlyDebt) / monthlyIncome) * 100;

        return { maxMonthlyPayment, maxLoan, maxHomePrice, dti };
    }, [income, monthlyDebt, downPayment, rate, term]);

    return (
        <div className="space-y-6">
            <div className="grid gap-5">
                <SliderInput label="Annual Gross Income" value={income} onChange={setIncome} min={20000} max={500000} step={5000} prefix="$" />
                <SliderInput label="Monthly Debt Payments" value={monthlyDebt} onChange={setMonthlyDebt} min={0} max={5000} step={50} prefix="$" />
                <SliderInput label="Down Payment Savings" value={downPayment} onChange={setDownPayment} min={0} max={500000} step={5000} prefix="$" />
                <SliderInput label="Expected Rate" value={rate} onChange={setRate} min={2} max={12} step={0.125} suffix="%" />
                <SliderInput label="Loan Term" value={term} onChange={setTerm} min={10} max={30} step={5} suffix=" yrs" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <ResultCard label="You Can Afford" value={fmt(results.maxHomePrice)} sub="Maximum home price" />
                <ResultCard label="Max Loan Amount" value={fmt(results.maxLoan)} />
                <ResultCard label="Monthly Budget" value={fmtDecimal(results.maxMonthlyPayment)} sub="For housing costs" />
                <ResultCard label="Debt-to-Income" value={`${results.dti.toFixed(1)}%`} sub="Target: under 36%" />
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-[#d29e4a]/10">
                <h4 className="text-sm font-semibold text-[#e8c47a] mb-2">How this is calculated</h4>
                <p className="text-xs text-white/40 leading-relaxed">
                    Based on the standard 28/36 rule: your monthly housing costs should not exceed 28% of your gross monthly income,
                    and your total debt payments (including housing) should not exceed 36%. These are guidelines — actual approval
                    may vary based on credit score, loan program, and other factors.
                </p>
            </div>
        </div>
    );
}

// ─── 3. Refinance Calculator ────────────────────────────────
function RefinanceCalculator() {
    const [currentBalance, setCurrentBalance] = useState(300000);
    const [currentRate, setCurrentRate] = useState(7.5);
    const [currentTerm, setCurrentTerm] = useState(25);
    const [newRate, setNewRate] = useState(6.25);
    const [newTerm, setNewTerm] = useState(30);
    const [closingCosts, setClosingCosts] = useState(5000);

    const results = useMemo(() => {
        const currentMonthlyRate = currentRate / 100 / 12;
        const currentMonths = currentTerm * 12;
        const currentPayment = pmt(currentMonthlyRate, currentMonths, currentBalance);
        const currentTotalPaid = currentPayment * currentMonths;

        const newMonthlyRate = newRate / 100 / 12;
        const newMonths = newTerm * 12;
        const newPayment = pmt(newMonthlyRate, newMonths, currentBalance);
        const newTotalPaid = newPayment * newMonths;

        const monthlySavings = currentPayment - newPayment;
        const totalSavings = currentTotalPaid - newTotalPaid - closingCosts;
        const breakEvenMonths = monthlySavings > 0 ? Math.ceil(closingCosts / monthlySavings) : 0;

        return { currentPayment, newPayment, monthlySavings, totalSavings, breakEvenMonths };
    }, [currentBalance, currentRate, currentTerm, newRate, newTerm, closingCosts]);

    return (
        <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-5">
                    <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Current Loan</h4>
                    <SliderInput label="Remaining Balance" value={currentBalance} onChange={setCurrentBalance} min={50000} max={1500000} step={5000} prefix="$" />
                    <SliderInput label="Current Rate" value={currentRate} onChange={setCurrentRate} min={2} max={12} step={0.125} suffix="%" />
                    <SliderInput label="Years Remaining" value={currentTerm} onChange={setCurrentTerm} min={5} max={30} step={1} suffix=" yrs" />
                </div>
                <div className="space-y-5">
                    <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider">New Loan</h4>
                    <SliderInput label="New Rate" value={newRate} onChange={setNewRate} min={2} max={12} step={0.125} suffix="%" />
                    <SliderInput label="New Term" value={newTerm} onChange={setNewTerm} min={10} max={30} step={5} suffix=" yrs" />
                    <SliderInput label="Closing Costs" value={closingCosts} onChange={setClosingCosts} min={0} max={20000} step={500} prefix="$" />
                </div>
            </div>

            {/* Comparison Bar */}
            <div className="bg-white/5 rounded-xl p-5 border border-[#d29e4a]/10 space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-white/50">Current Payment</span>
                    <span className="text-lg font-bold text-white/70">{fmtDecimal(results.currentPayment)}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-white/50">New Payment</span>
                    <span className="text-lg font-bold text-[#e8c47a]">{fmtDecimal(results.newPayment)}</span>
                </div>
                <div className="h-px bg-[#d29e4a]/20" />
                <div className="flex items-center justify-between">
                    <span className="text-sm text-white/50">Monthly Savings</span>
                    <span className={`text-lg font-bold ${results.monthlySavings > 0 ? "text-green-400" : "text-red-400"}`}>
                        {results.monthlySavings > 0 ? "+" : ""}{fmtDecimal(results.monthlySavings)}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <ResultCard label="Monthly Savings" value={fmtDecimal(Math.abs(results.monthlySavings))} sub={results.monthlySavings >= 0 ? "You save each month" : "You pay more each month"} />
                <ResultCard label="Break-Even" value={results.breakEvenMonths > 0 ? `${results.breakEvenMonths} months` : "N/A"} sub="When savings cover costs" />
                <ResultCard label="Lifetime Savings" value={fmt(Math.abs(results.totalSavings))} sub={results.totalSavings >= 0 ? "Total net savings" : "Total added cost"} />
            </div>
        </div>
    );
}

// ─── Tab Layout ─────────────────────────────────────────────
const TABS = [
    { id: "payment", label: "Payment", icon: Calculator, component: PaymentCalculator },
    { id: "afford", label: "Affordability", icon: Home, component: AffordabilityCalculator },
    { id: "refi", label: "Refinance", icon: RefreshCw, component: RefinanceCalculator },
] as const;

export default function MortgageCalculators() {
    const [activeTab, setActiveTab] = useState<string>("payment");

    const ActiveComponent = TABS.find((t) => t.id === activeTab)?.component ?? PaymentCalculator;

    return (
        <div className="w-full">
            {/* Tab Selector */}
            <div className="flex justify-center mb-6 sm:mb-8 px-2">
                <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:inline-flex bg-white/5 rounded-2xl sm:rounded-full p-1.5 sm:p-1 border border-[#d29e4a]/10 gap-1 sm:gap-0">
                    {TABS.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-full text-sm font-medium transition-all duration-300 ${
                                    isActive ? "text-[#0e2922]" : "text-white/50 hover:text-white/70"
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activePill"
                                        className="absolute inset-0 bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] rounded-xl sm:rounded-full"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <Icon className="w-4 h-4" />
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Calculator Body */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <ActiveComponent />
                </motion.div>
            </AnimatePresence>

            {/* Disclaimer */}
            <p className="text-[10px] text-white/20 text-center mt-8 max-w-2xl mx-auto">
                These calculators are for informational purposes only and do not constitute a loan offer, pre-qualification, or pre-approval.
                Actual rates, payments, and terms may vary. Contact a Supernova Mortgage licensed loan officer for personalized guidance.
                NMLS #1880516.
            </p>
        </div>
    );
}
