import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, Phone } from "lucide-react";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "ההזמנה התקבלה",
  description: "תודה על ההזמנה. נחזור אליכם בקרוב.",
};

export default function OrderSuccessPage({
  searchParams,
}: {
  searchParams: { paid?: string; amount?: string };
}) {
  const paid = searchParams.paid === "1";
  const amount = Number(searchParams.amount);
  const hasAmount = Number.isFinite(amount) && amount > 0;
  const pixelParams = hasAmount
    ? { value: amount, currency: "ILS" }
    : { currency: "ILS" };
  // GA4 purchase params — mark it up so it can be imported into Google Ads as a
  // conversion (previously this page fired ONLY the Meta Pixel, so Google Ads
  // never counted a completed order).
  const gaPurchaseParams = hasAmount
    ? { currency: "ILS", value: amount }
    : { currency: "ILS" };

  return (
    <section className="py-20 bg-cream min-h-[60vh]">
      {/* Meta Pixel — Purchase event (order completed) */}
      <Script id="meta-purchase" strategy="afterInteractive">
        {`if (typeof fbq === 'function') { fbq('track', 'Purchase', ${JSON.stringify(pixelParams)}); }`}
      </Script>
      {/* GA4 / Google Ads — purchase event (order completed) */}
      <Script id="ga-purchase" strategy="afterInteractive">
        {`if (typeof gtag === 'function') { gtag('event', 'purchase', ${JSON.stringify(gaPurchaseParams)}); }`}
      </Script>
      <div className="max-w-2xl mx-auto px-4 text-center">
        <CheckCircle2
          className="w-20 h-20 text-green-600 mx-auto mb-6"
          aria-hidden="true"
        />
        <h1 className="text-4xl font-bold text-brown mb-3">תודה רבה!</h1>
        <p className="text-xl text-brown/75 mb-8">
          {paid ? "התשלום התקבל וההזמנה שלך אושרה" : "ההזמנה שלך התקבלה בהצלחה"}
        </p>

        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 text-start space-y-4 mb-8">
          <h2 className="text-xl font-bold text-brown mb-2">מה הלאה?</h2>
          {paid ? (
            <ol className="space-y-3 text-brown/80">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold text-white font-bold text-sm flex items-center justify-center">
                  1
                </span>
                <div>
                  <p className="font-semibold text-brown">התשלום התקבל בהצלחה</p>
                  <p className="text-sm text-brown/65">
                    חשבונית מס תישלח אליך במייל.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold text-white font-bold text-sm flex items-center justify-center">
                  2
                </span>
                <div>
                  <p className="font-semibold text-brown">אנחנו מכינים את ההזמנה</p>
                  <p className="text-sm text-brown/65">
                    צוות המכירות שלנו רואה אותה עכשיו.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold text-white font-bold text-sm flex items-center justify-center">
                  3
                </span>
                <div>
                  <p className="font-semibold text-brown">משלוח או איסוף</p>
                  <p className="text-sm text-brown/65">
                    משלוח עד הדלת עד 7 ימי עסקים, או תיאום טלפוני לאיסוף עצמי.
                  </p>
                </div>
              </li>
            </ol>
          ) : (
            <ol className="space-y-3 text-brown/80">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold text-white font-bold text-sm flex items-center justify-center">
                  1
                </span>
                <div>
                  <p className="font-semibold text-brown">קיבלנו את ההזמנה</p>
                  <p className="text-sm text-brown/65">
                    צוות המכירות שלנו רואה אותה עכשיו.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold text-white font-bold text-sm flex items-center justify-center">
                  2
                </span>
                <div>
                  <p className="font-semibold text-brown">נחזור אליך תוך יום עסקים</p>
                  <p className="text-sm text-brown/65">
                    לאישור פרטי ההזמנה, אספקה ומחירים סופיים.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold text-white font-bold text-sm flex items-center justify-center">
                  3
                </span>
                <div>
                  <p className="font-semibold text-brown">נשלח לך קישור לתשלום מאובטח</p>
                  <p className="text-sm text-brown/65">
                    לאחר אישור פרטי ההזמנה.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold text-white font-bold text-sm flex items-center justify-center">
                  4
                </span>
                <div>
                  <p className="font-semibold text-brown">משלוח עד הדלת</p>
                  <p className="text-sm text-brown/65">
                    אספקה עד 7 ימי עסקים.
                  </p>
                </div>
              </li>
            </ol>
          )}
        </div>

        <div className="bg-brown text-cream rounded-2xl p-6 mb-6">
          <p className="text-sm text-cream/80 mb-2">צריך לדבר איתנו עכשיו?</p>
          <a
            href="tel:039600550"
            className="inline-flex items-center gap-2 text-2xl font-bold text-gold hover:text-gold-light"
            dir="ltr"
          >
            <Phone className="w-6 h-6" aria-hidden="true" />
            03-9600550
          </a>
        </div>

        <Link href="/" className="btn btn-soft-secondary">
          חזרה לעמוד הבית
        </Link>
      </div>
    </section>
  );
}
