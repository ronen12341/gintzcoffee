"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Phone, RotateCcw } from "lucide-react";

/**
 * Site-wide error boundary — there was no error.tsx anywhere in the app
 * before this, so ANY unhandled render exception (a bad image URL, a
 * malformed product entry, anything unforeseen) blank-screened every visitor
 * on that route with no way back except reloading. On a site paid ad
 * traffic lands on, that's a lost customer with no recovery path. This
 * caps the damage of any future bug we haven't found yet: a friendly page
 * with a retry button and the phone number, instead of a dead end.
 */
export default function ErrorBoundary({
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
    <section className="py-20 bg-cream min-h-[60vh]">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <AlertTriangle className="w-16 h-16 text-gold mx-auto mb-6" aria-hidden="true" />
        <h1 className="text-3xl font-bold text-brown mb-3">משהו השתבש</h1>
        <p className="text-xl text-brown/75 mb-8">
          אירעה תקלה טכנית בטעינת העמוד. אפשר לנסות שוב, או פשוט להתקשר אלינו —
          נשמח לעזור.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button type="button" onClick={() => reset()} className="btn btn-primary">
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            נסו שוב
          </button>
          <Link href="/" className="btn btn-soft-secondary">
            חזרה לדף הבית
          </Link>
        </div>

        <div className="bg-gradient-to-b from-cream to-cream-dark text-brown rounded-3xl p-6 shadow-sm ring-1 ring-brown/[0.06]">
          <p className="text-sm text-brown/70 mb-2">צריך עזרה עכשיו?</p>
          <a
            href="tel:039600550"
            className="inline-flex items-center gap-2 text-2xl font-bold text-gold-dark hover:text-gold"
            dir="ltr"
          >
            <Phone className="w-6 h-6" aria-hidden="true" />
            03-9600550
          </a>
        </div>
      </div>
    </section>
  );
}
