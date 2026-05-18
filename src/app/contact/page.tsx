import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "צור קשר",
  description: "צרו קשר עם קפה גינץ. טלפון, וואטסאפ, אימייל ואפשרות לקבלת הצעת מחיר.",
};

const WHATSAPP_URL =
  "https://wa.me/97239600550?text=" +
  encodeURIComponent("שלום, אני מעוניין/ת בשירותי קפה גינץ");

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)" }}
        aria-labelledby="contact-heading"
      >
        <div className="max-w-2xl mx-auto px-4">
          <h1 id="contact-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            צור קשר
          </h1>
          <p className="text-cream/70 text-lg">
            נשמח לשמוע ממכם. נחזור אליכם תוך שעות ספורות.
          </p>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-brown mb-8">פרטי התקשרות</h2>

              {/* Phone / WhatsApp */}
              <div className="space-y-4 mb-8">
                <a
                  href="tel:0399600550"
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
                  aria-label="התקשר אלינו: 03-9600550"
                >
                  <span className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-brown/50 mb-0.5">טלפון</p>
                    <p className="font-bold text-brown" dir="ltr">
                      03-9600550
                    </p>
                  </div>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                  aria-label="שלח הודעת וואטסאפ"
                >
                  <span className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-brown/50 mb-0.5">וואטסאפ</p>
                    <p className="font-bold text-brown" dir="ltr">
                      972-3-9600550
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:sales@aspagil.com"
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
                >
                  <span className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-brown/50 mb-0.5">אימייל</p>
                    <p className="font-bold text-brown" dir="ltr">
                      sales@aspagil.com
                    </p>
                  </div>
                </a>
              </div>

              {/* Address */}
              <div className="bg-white rounded-xl p-4 shadow-sm mb-6 flex items-start gap-4">
                <span className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-brown/50 mb-0.5">כתובת</p>
                  <address className="not-italic text-brown font-medium leading-relaxed">
                    רחוב הירקון 39, בני ברק
                    <br />
                    קומה 3
                  </address>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl p-4 shadow-sm flex items-start gap-4">
                <span className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-brown/50 mb-2">שעות פעילות</p>
                  <p className="text-xs text-gold font-medium mt-1">* יש לתאם הגעה מראש</p>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="mt-6 rounded-xl overflow-hidden shadow-sm" style={{ height: 220 }}>
                <iframe
                  src="https://maps.google.com/maps?q=הירקון+39,+בני+ברק&output=embed&hl=iw"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="מיקום קפה גינץ — רחוב הירקון 39, בני ברק"
                  aria-label="מפה — רחוב הירקון 39, בני ברק"
                />
              </div>
            </div>

            {/* Lead form */}
            <div>
              <h2 className="text-2xl font-bold text-brown mb-8">שלח פנייה</h2>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <LeadForm title="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
