"use client";

/**
 * DEBUG PAGE 4: BookTestimonial flipbook isolation test
 *
 * PURPOSE: Test if the react-pageflip BookTestimonial component is causing the freeze.
 * This imports the exact same component with the exact same testimonial data.
 *
 * URL: http://localhost:3050/debug4
 *
 * WHAT TO EXPECT:
 * - If this freezes => the BookTestimonial / react-pageflip library is the culprit
 * - If this works => proceed to /debug5 (everything minus LivingNebula)
 */

import { BookTestimonial } from "@/components/ui/3d-book-testimonial";

const TESTIMONIALS = [
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600",
    name: "Maria & Carlos R.",
    jobtitle: "First-Time Homebuyers",
    rating: 5,
    text: "Supernova made our dream of owning a home a reality. They guided us through every step of the FHA process and found us an incredible rate.",
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
    name: "David Thompson",
    jobtitle: "Refinance Client",
    rating: 5,
    text: "The refinancing process was seamless. Supernova saved us over $400/month on our mortgage.",
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600",
    name: "Ana Gutierrez",
    jobtitle: "VA Loan Client",
    rating: 5,
    text: "As a veteran, I appreciated how knowledgeable the team was about VA loans. Zero down payment and no PMI.",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600",
    name: "James & Lisa P.",
    jobtitle: "Investment Property",
    rating: 5,
    text: "Outstanding service from start to finish. They helped us secure financing for our investment property.",
  },
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600",
    name: "Robert Chen",
    jobtitle: "Conventional Loan Client",
    rating: 5,
    text: "From pre-approval to closing, Supernova handled everything with professionalism.",
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600",
    name: "Sofia Martinez",
    jobtitle: "First-Time Homebuyer",
    rating: 5,
    text: "I was nervous about buying my first home, but the Supernova team made me feel confident every step of the way.",
  },
];

export default function DebugPage4() {
  return (
    <div
      style={{
        background: "#f5f0e8",
        fontFamily: "system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div style={{ padding: "2rem", textAlign: "center", background: "#111", color: "#fff" }}>
        <h1 style={{ fontSize: "2rem" }}>Debug Page 4: BookTestimonial Flipbook</h1>
        <p style={{ color: "#888" }}>
          Tests the react-pageflip BookTestimonial component in isolation.
        </p>
      </div>

      {/* BookTestimonial component */}
      <div style={{ padding: "2rem 1rem" }}>
        <BookTestimonial testimonials={TESTIMONIALS} />
      </div>

      {/* Navigation */}
      <div style={{ padding: "3rem", textAlign: "center", background: "#111" }}>
        <p style={{ color: "#666" }}>
          <a href="/debug" style={{ color: "#4af" }}>/debug</a> |{" "}
          <a href="/debug2" style={{ color: "#4af" }}>/debug2</a> |{" "}
          <a href="/debug3" style={{ color: "#4af" }}>/debug3</a> |{" "}
          <strong style={{ color: "#fff" }}>/debug4</strong> |{" "}
          <a href="/debug5" style={{ color: "#4af" }}>/debug5</a>
        </p>
      </div>
    </div>
  );
}
