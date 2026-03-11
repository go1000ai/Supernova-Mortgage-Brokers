"use client";

/**
 * DEBUG PAGE 1: Bare minimum page
 *
 * PURPOSE: Test if the LAYOUT itself (including the LeadConnector chat widget
 * script in layout.tsx) is causing the browser freeze.
 *
 * URL: http://localhost:3050/debug
 *
 * WHAT TO EXPECT:
 * - If this page FREEZES => the problem is in layout.tsx (likely the LeadConnector widget)
 * - If this page loads FINE => the problem is in one of the page components (proceed to /debug2)
 */
export default function DebugPage1() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#111",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Debug Page 1: Bare Minimum
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#aaa", maxWidth: 600, textAlign: "center" }}>
        This page has ZERO custom components. Only the layout wrapper (with the
        LeadConnector chat widget script) is active.
      </p>
      <p style={{ marginTop: "2rem", color: "#d29e4a", fontWeight: "bold" }}>
        If this page freezes, the problem is the LeadConnector widget in layout.tsx.
      </p>
      <p style={{ marginTop: "0.5rem", color: "#888" }}>
        If this page loads fine, go to{" "}
        <a href="/debug2" style={{ color: "#4af" }}>/debug2</a> to test the canvas.
      </p>

      <div style={{ marginTop: "3rem", padding: "1rem 2rem", border: "1px solid #333", borderRadius: "8px" }}>
        <p style={{ color: "#666", fontSize: "0.9rem" }}>
          Timestamp: {new Date().toISOString()}
        </p>
      </div>
    </div>
  );
}
