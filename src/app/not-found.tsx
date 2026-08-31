import type { Metadata } from "next";
import Link from "next/link";
import { Coffee, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "העמוד לא נמצא",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="py-20 bg-cream min-h-[60vh]">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <Coffee className="w-16 h-16 text-gold mx-auto mb-6" aria-hidden="true" />
        <h1 className="text-4xl font-bold text-brown mb-3">404</h1>
        <p className="text-xl text-brown/75 mb-8">
          העמוד שחיפשתם לא נמצא — כנראה הועבר או שכתובת הקישור השתנתה.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Link href="/" className="btn btn-primary">
            חזרה לדף הבית
          </Link>
          <Link href="/machines" className="btn btn-soft-secondary">
            מכונות קפה
          </Link>
          <Link href="/beans" className="btn btn-soft-secondary">
            פולי קפה
          </Link>
          <Link href="/business-solutions" className="btn btn-soft-secondary">
            פתרונות לעסקים
          </Link>
        </div>

        <div className="bg-brown text-cream rounded-2xl p-6">
          <p className="text-sm text-cream/80 mb-2">לא מוצאים מה שחיפשתם?</p>
          <a
            href="tel:039600550"
            className="inline-flex items-center gap-2 text-2xl font-bold text-gold hover:text-gold-light"
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
