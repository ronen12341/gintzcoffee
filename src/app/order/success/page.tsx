import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "ההזמנה התקבלה",
  description: "תודה על ההזמנה. נחזור אליכם בקרוב.",
};

export default function OrderSuccessPage() {
  return (
    <section className="py-20 bg-cream min-h-[60vh]">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <CheckCircle2
          className="w-20 h-20 text-green-600 mx-auto mb-6"
          aria-hidden="true"
        />
        <h1 className="text-4xl font-bold text-brown mb-3">תודה רבה!</h1>
        <p className="text-xl text-brown/75 mb-8">
          ההזמנה שלך התקבלה בהצלחה
        </p>

        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 text-start space-y-4 mb-8">
          <h2 className="text-xl font-bold text-brown mb-2">מה הלאה?</h2>
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
                <p className="font-semibold text-brown">חיוב טלפוני באשראי</p>
                <p className="text-sm text-brown/65">
                  לאחר האישור — נקבל את פרטי האשראי בשיחה מאובטחת.
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
                  אספקה תוך 48 שעות ברוב המקרים.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-brown text-cream rounded-2xl p-6 mb-6">
          <p className="text-sm text-cream/80 mb-2">צריך לדבר איתנו עכשיו?</p>
          <a
            href="tel:0399600550"
            className="inline-flex items-center gap-2 text-2xl font-bold text-gold hover:text-gold-light"
            dir="ltr"
          >
            <Phone className="w-6 h-6" aria-hidden="true" />
            03-9600550
          </a>
        </div>

        <Link
          href="/"
          className="inline-block bg-cream-dark hover:bg-cream text-brown font-medium py-3 px-6 rounded-lg transition-colors"
        >
          חזרה לעמוד הבית
        </Link>
      </div>
    </section>
  );
}
