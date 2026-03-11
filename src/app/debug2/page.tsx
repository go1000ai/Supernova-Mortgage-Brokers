"use client";

/**
 * DEBUG PAGE 2: LivingNebula canvas isolation test
 *
 * PURPOSE: Test if the LivingNebula particle canvas is causing the freeze.
 * Uses REDUCED particle count (100 instead of 1400) first.
 *
 * URL: http://localhost:3050/debug2
 *
 * WHAT TO EXPECT:
 * - If this page FREEZES even with 100 particles => LivingNebula has a bug (infinite loop, memory leak, etc.)
 * - If this works fine => try /debug2?particles=1400 in the URL bar to test with full count
 * - If 1400 freezes but 100 works => it's a raw performance issue from too many particles
 */

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import LivingNebula from "@/components/ui/living-nebula";

function NebulaTest() {
  const searchParams = useSearchParams();
  const particleCount = Number(searchParams.get("particles")) || 100;

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <LivingNebula
        particleCount={particleCount}
        trailLength={0.12}
        canvasGlow={25}
        pulseFrequency={0.002}
        emissionRate={3}
        className="flex items-center justify-center"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            color: "#fff",
            fontFamily: "system-ui, sans-serif",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Debug Page 2: LivingNebula Canvas
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#aaa" }}>
            Currently rendering <strong style={{ color: "#d29e4a" }}>{particleCount}</strong> particles
          </p>
          <p style={{ marginTop: "1rem", color: "#888", maxWidth: 500 }}>
            If this works, try increasing:{" "}
            <a href="/debug2?particles=500" style={{ color: "#4af" }}>500</a>{" | "}
            <a href="/debug2?particles=1000" style={{ color: "#4af" }}>1000</a>{" | "}
            <a href="/debug2?particles=1400" style={{ color: "#4af" }}>1400</a>{" | "}
            <a href="/debug2?particles=2000" style={{ color: "#4af" }}>2000</a>
          </p>
          <p style={{ marginTop: "2rem", color: "#666", fontSize: "0.85rem" }}>
            Next test: <a href="/debug3" style={{ color: "#4af" }}>/debug3</a> (framer-motion infinite animations)
          </p>
        </div>
      </LivingNebula>
    </div>
  );
}

export default function DebugPage2() {
  return (
    <Suspense
      fallback={
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#111", color: "#fff" }}>
          Loading...
        </div>
      }
    >
      <NebulaTest />
    </Suspense>
  );
}
