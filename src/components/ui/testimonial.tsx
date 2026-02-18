"use client";

import { Star } from "lucide-react";

const TESTIMONIALS = [
    {
        quote: "Supernova made our dream of owning a home a reality. They guided us through every step of the FHA process and found us an incredible rate. We couldn't be happier with our new home!",
        name: "Maria & Carlos R.",
        role: "First-Time Homebuyers",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600",
    },
    {
        quote: "The refinancing process was seamless. Supernova saved us over $400/month on our mortgage. Their expertise and professionalism are unmatched. I recommend them to everyone.",
        name: "David Thompson",
        role: "Refinance Client",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
    },
    {
        quote: "As a veteran, I appreciated how knowledgeable the team was about VA loans. Zero down payment and no PMI — they made the entire process stress-free and got us into our home fast.",
        name: "Ana Gutierrez",
        role: "VA Loan Client",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600",
    },
];

function StarRating() {
    return (
        <div className="flex items-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#d29e4a] text-[#d29e4a]" />
            ))}
        </div>
    );
}

// Quote icon SVG
function QuoteIcon() {
    return (
        <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203" fill="#d29e4a"/>
        </svg>
    );
}

export function TestimonialCards() {
    return (
        <section id="testimonials" className="py-24 md:py-32 bg-[#0e2922]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-bold tracking-[0.2em] text-[#d29e4a] uppercase mb-4">
                        Testimonials
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        What Our{" "}
                        <span className="bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent">
                            Clients Say
                        </span>
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                        Join hundreds of families who found their dream home with Supernova Mortgage Brokers.
                    </p>
                </div>

                {/* Photo Cards Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {TESTIMONIALS.map((t) => (
                        <div key={t.name} className="bg-[#164237] border border-[#d29e4a]/10 text-white rounded-2xl hover:-translate-y-1 transition-all duration-300">
                            <div className="relative -mt-px overflow-hidden rounded-t-2xl">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="h-[270px] w-full rounded-t-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
                                />
                                <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-[#164237] to-transparent" />
                            </div>
                            <div className="px-5 pb-5">
                                <p className="font-medium text-sm text-white/70 border-b border-[#d29e4a]/10 pb-5 leading-relaxed italic">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <p className="mt-4 font-semibold">&mdash; {t.name}</p>
                                <p className="text-sm font-medium bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-transparent bg-clip-text">
                                    {t.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detail Cards Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                    {TESTIMONIALS.map((t) => (
                        <div key={`detail-${t.name}`} className="flex flex-col items-start bg-white/[0.03] border border-[#d29e4a]/10 p-6 rounded-2xl hover:bg-white/[0.06] transition-all duration-300">
                            <QuoteIcon />
                            <StarRating />
                            <p className="text-sm mt-4 text-white/50 leading-relaxed">
                                {t.quote}
                            </p>
                            <div className="flex items-center gap-3 mt-5 pt-5 border-t border-[#d29e4a]/10 w-full">
                                <img
                                    className="h-12 w-12 rounded-full object-cover"
                                    src={t.image}
                                    alt={t.name}
                                />
                                <div>
                                    <h3 className="text-base text-white font-semibold">{t.name}</h3>
                                    <p className="text-sm text-white/40">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
