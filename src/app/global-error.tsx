"use client";

import { useEffect } from "react";

/**
 * Last-resort error boundary — error.tsx (src/app/error.tsx) does NOT catch
 * exceptions thrown by the root layout itself (fonts, the GA4/Meta Pixel
 * script tags, the JSON-LD blocks) or by error.tsx. Only global-error.tsx
 * does, per Next.js App Router semantics, and it has to render its own
 * <html>/<body> since it replaces the root layout entirely when it fires.
 * Kept dependency-free (inline styles, no Tailwind/next/font) since if the
 * root layout crashed we can't assume anything it set up is safe to rely on.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html dir="rtl" lang="he">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5F0E8",
          fontFamily: "Arial, sans-serif",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: "480px", textAlign: "center" }}>
          <h1 style={{ color: "#3B1F0A", fontSize: "28px", marginBottom: "12px" }}>
            משהו השתבש
          </h1>
          <p style={{ color: "#5C3015", fontSize: "17px", marginBottom: "28px" }}>
            אירעה תקלה טכנית באתר. אפשר לנסות שוב, או פשוט להתקשר אלינו.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              backgroundColor: "#C8922A",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: 700,
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            נסו שוב
          </button>
          <div
            style={{
              backgroundColor: "#3B1F0A",
              color: "#F5F0E8",
              borderRadius: "12px",
              padding: "16px",
            }}
          >
            <p style={{ fontSize: "13px", opacity: 0.8, marginBottom: "6px" }}>
              צריך עזרה עכשיו?
            </p>
            <a
              href="tel:039600550"
              dir="ltr"
              style={{
                color: "#C8922A",
                fontSize: "22px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              03-9600550
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
