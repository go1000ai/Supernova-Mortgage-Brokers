"use client";

/**
 * DEBUG PAGE 3: Framer-motion infinite animations isolation test
 *
 * PURPOSE: Test if the INFINITE framer-motion animations are causing the freeze.
 * This page reproduces ALL the repeat:Infinity animations from the hero section:
 *   - drop-shadow filter breathing on the logo
 *   - textShadow pulsing on "Ignited."
 *   - 3 shockwave rings (scale + opacity, repeat:Infinity)
 *   - Trust bar marquee (x translation, repeat:Infinity, linear)
 *   - CTA floating particles (10 elements, y + opacity, repeat:Infinity)
 *   - Scroll indicator pulse
 *
 * URL: http://localhost:3050/debug3
 *
 * WHAT TO EXPECT:
 * - If this freezes => one of the infinite framer-motion animations is the culprit
 * - If this works => proceed to /debug4 (BookTestimonial flipbook)
 */

import { motion } from "framer-motion";

const TRUST_ITEMS = [
  "Licensed & Insured",
  "500+ Families Served",
  "5-Star Rated",
  "Fast Approvals",
  "NMLS #1880516",
];

export default function DebugPage3() {
  return (
    <div
      style={{
        background: "#111",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div style={{ padding: "2rem", textAlign: "center", borderBottom: "1px solid #333" }}>
        <h1 style={{ fontSize: "2rem" }}>Debug Page 3: Infinite Framer-Motion Animations</h1>
        <p style={{ color: "#888" }}>All repeat:Infinity animations from the main page are reproduced below.</p>
      </div>

      {/* ---- TEST 1: Shockwave rings (3 rings, repeat:Infinity) ---- */}
      <section style={{ padding: "3rem", textAlign: "center" }}>
        <h2 style={{ color: "#d29e4a", marginBottom: "1rem" }}>Test 1: Shockwave Rings (3x repeat:Infinity)</h2>
        <div style={{ position: "relative", width: 200, height: 200, margin: "0 auto" }}>
          {/* Outer shockwave */}
          <motion.div
            style={{
              position: "absolute",
              inset: -40,
              borderRadius: "50%",
              border: "2px solid rgba(210,158,74,0.1)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          />
          {/* Mid shockwave */}
          <motion.div
            style={{
              position: "absolute",
              inset: -30,
              borderRadius: "50%",
              border: "1px solid rgba(232,196,122,0.15)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1 }}
          />
          {/* Inner shockwave */}
          <motion.div
            style={{
              position: "absolute",
              inset: -15,
              borderRadius: "50%",
              border: "1px solid rgba(210,158,74,0.25)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
          />
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "rgba(210,158,74,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#d29e4a",
              fontWeight: "bold",
            }}
          >
            LOGO AREA
          </div>
        </div>
      </section>

      {/* ---- TEST 2: drop-shadow filter breathing ---- */}
      <section style={{ padding: "3rem", textAlign: "center", borderTop: "1px solid #333" }}>
        <h2 style={{ color: "#d29e4a", marginBottom: "1rem" }}>Test 2: Drop-Shadow Filter Breathing (repeat:Infinity)</h2>
        <motion.div
          style={{ display: "inline-block", fontSize: "3rem", fontWeight: "bold", color: "#d29e4a" }}
          initial={{ filter: "drop-shadow(0 0 0px rgba(210,158,74,0))" }}
          animate={{
            filter: [
              "drop-shadow(0 0 15px rgba(210,158,74,0.8)) drop-shadow(0 0 40px rgba(232,196,122,0.4))",
              "drop-shadow(0 0 25px rgba(210,158,74,1)) drop-shadow(0 0 60px rgba(232,196,122,0.6))",
              "drop-shadow(0 0 15px rgba(210,158,74,0.8)) drop-shadow(0 0 40px rgba(232,196,122,0.4))",
            ],
          }}
          transition={{
            filter: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          SUPERNOVA
        </motion.div>
      </section>

      {/* ---- TEST 3: textShadow pulsing on "Ignited." ---- */}
      <section style={{ padding: "3rem", textAlign: "center", borderTop: "1px solid #333" }}>
        <h2 style={{ color: "#d29e4a", marginBottom: "1rem" }}>Test 3: textShadow Pulsing (repeat:Infinity)</h2>
        <motion.span
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#f5d98a",
            display: "inline-block",
            textShadow:
              "0 0 10px rgba(210,158,74,0.8), 0 0 30px rgba(210,158,74,0.4), 2px 2px 0 #0e2922, -2px -2px 0 #0e2922, 2px -2px 0 #0e2922, -2px 2px 0 #0e2922",
          }}
          animate={{
            textShadow: [
              "0 0 10px rgba(210,158,74,0.8), 0 0 30px rgba(210,158,74,0.4), 2px 2px 0 #0e2922, -2px -2px 0 #0e2922, 2px -2px 0 #0e2922, -2px 2px 0 #0e2922",
              "0 0 20px rgba(210,158,74,1), 0 0 50px rgba(210,158,74,0.6), 2px 2px 0 #0e2922, -2px -2px 0 #0e2922, 2px -2px 0 #0e2922, -2px 2px 0 #0e2922",
              "0 0 10px rgba(210,158,74,0.8), 0 0 30px rgba(210,158,74,0.4), 2px 2px 0 #0e2922, -2px -2px 0 #0e2922, 2px -2px 0 #0e2922, -2px 2px 0 #0e2922",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Ignited.
        </motion.span>
      </section>

      {/* ---- TEST 4: Trust bar marquee ---- */}
      <section style={{ padding: "3rem 0", borderTop: "1px solid #333", overflow: "hidden" }}>
        <h2 style={{ color: "#d29e4a", marginBottom: "1rem", textAlign: "center" }}>
          Test 4: Trust Bar Marquee (repeat:Infinity, linear)
        </h2>
        <div style={{ background: "#fff", padding: "1rem 0", overflow: "hidden" }}>
          <motion.div
            style={{ display: "flex", gap: "4rem", whiteSpace: "nowrap" }}
            animate={{ x: [0, -800] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS].map((label, i) => (
              <span key={`${label}-${i}`} style={{ color: "#164237", fontSize: "0.9rem", fontWeight: 600, flexShrink: 0 }}>
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---- TEST 5: CTA floating particles (10 elements) ---- */}
      <section style={{ padding: "3rem", textAlign: "center", borderTop: "1px solid #333", position: "relative", minHeight: 200 }}>
        <h2 style={{ color: "#d29e4a", marginBottom: "1rem" }}>
          Test 5: CTA Floating Particles (10x repeat:Infinity)
        </h2>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "rgba(210,158,74,0.3)",
              left: `${10 + i * 8}%`,
              top: `${20 + (i * 13) % 60}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <p style={{ color: "#888", position: "relative", zIndex: 1 }}>
          10 floating gold dots animating y + opacity in a loop
        </p>
      </section>

      {/* ---- TEST 6: Scroll indicator ---- */}
      <section style={{ padding: "3rem", textAlign: "center", borderTop: "1px solid #333" }}>
        <h2 style={{ color: "#d29e4a", marginBottom: "1rem" }}>Test 6: Scroll Indicator (repeat:Infinity)</h2>
        <motion.div
          style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <div
            style={{
              width: 20,
              height: 32,
              border: "2px solid rgba(255,255,255,0.2)",
              borderRadius: 999,
              display: "flex",
              justifyContent: "center",
              paddingTop: 6,
            }}
          >
            <motion.div
              style={{ width: 4, height: 6, background: "#d29e4a", borderRadius: 999 }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Navigation */}
      <div style={{ padding: "3rem", textAlign: "center", borderTop: "1px solid #333" }}>
        <p style={{ color: "#666" }}>
          <a href="/debug" style={{ color: "#4af" }}>/debug</a> |{" "}
          <a href="/debug2" style={{ color: "#4af" }}>/debug2</a> |{" "}
          <strong style={{ color: "#fff" }}>/debug3</strong> |{" "}
          <a href="/debug4" style={{ color: "#4af" }}>/debug4</a> |{" "}
          <a href="/debug5" style={{ color: "#4af" }}>/debug5</a>
        </p>
      </div>
    </div>
  );
}
