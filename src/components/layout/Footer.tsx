import Link from "next/link";
import { Phone, Mail, MapPin, Coffee } from "lucide-react";

const links = [
  { href: "/", label: "בית" },
  { href: "/business-solutions", label: "פתרונות לעסקים" },
  { href: "/machines", label: "רכישת מכונות" },
  { href: "/beans", label: "פולי קפה" },
  { href: "https://www.aspagil.com", label: "כוסות ממותגות" },
  { href: "/bargains", label: "מכונות יד2" },
  { href: "/faq", label: "שאלות נפוצות" },
  { href: "/contact", label: "צור קשר" },
];

export default function Footer() {
  return (
    <footer
      className="relative text-cream overflow-hidden"
      role="contentinfo"
      style={{
        background:
          "linear-gradient(180deg, #3B1F0A 0%, #2A1506 60%, #1F0F03 100%)",
      }}
    >
      {/* Decorative top accent line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(200,146,42,0.45) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* Decorative ambient glow */}
      <div
        className="absolute -top-32 start-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,146,42,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gold/15 ring-1 ring-gold/30"
                aria-hidden="true"
              >
                <Coffee className="w-5 h-5 text-gold" />
              </span>
              <div className="leading-none">
                <span
                  className="block text-gold text-2xl font-bold tracking-wide"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Gintz Coffee
                </span>
                <span className="text-cream/45 text-[11px] font-montserrat tracking-[0.25em] uppercase mt-1 block">
                  Boutique · Since 2005
                </span>
              </div>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed mb-6 max-w-sm">
              פתרונות קפה מלאים לעסקים — מכונות, פולים טריים מבית הקלייה שלנו,
              וכוסות ממותגות. הכל ממקור אחד, בשירות אישי.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/gintzcoffee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="קפה גינץ בפייסבוק"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 ring-1 ring-white/10 hover:ring-blue-400/50 flex items-center justify-center transition-all hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-cream" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/gintzcoffee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="קפה גינץ באינסטגרם"
                className="w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 hover:ring-pink-400/50 flex items-center justify-center transition-all hover:-translate-y-0.5 group"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-none stroke-cream group-hover:stroke-pink-300 stroke-2 transition-colors"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://wa.me/97239600550"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="קפה גינץ בוואטסאפ"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 ring-1 ring-white/10 hover:ring-green-400/50 flex items-center justify-center transition-all hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-cream" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.82 14.13c-.25.7-1.42 1.32-1.96 1.4-.5.07-1.13.1-1.83-.12-.42-.13-.97-.31-1.66-.61-2.93-1.27-4.85-4.22-5-4.41-.15-.2-1.2-1.6-1.2-3.05s.76-2.17 1.03-2.46c.26-.3.57-.37.77-.37l.55.01c.18.01.41-.07.64.49.25.59.83 2.04.9 2.19.07.15.12.32.02.52-.1.2-.15.32-.3.49l-.45.5c-.15.15-.3.32-.13.62.17.3.78 1.28 1.67 2.08 1.16 1.03 2.13 1.36 2.43 1.5.3.15.47.13.65-.07.18-.2.75-.87.94-1.17.2-.3.4-.25.66-.15.27.1 1.7.8 1.99.94.3.15.5.22.57.35.07.13.07.75-.18 1.45z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-gold font-semibold mb-5 text-xs uppercase tracking-[0.2em]">
              קישורים מהירים
            </h3>
            <ul className="space-y-1">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-semibold mb-5 text-xs uppercase tracking-[0.2em]">
              צור קשר
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0399600550"
                  className="flex items-center gap-3 text-cream/65 hover:text-gold text-sm transition-colors group"
                  aria-label="התקשר: 03-9600550"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gold/10 ring-1 ring-gold/20 group-hover:bg-gold/20 group-hover:ring-gold/40 transition-all">
                    <Phone className="w-4 h-4 text-gold" aria-hidden="true" />
                  </span>
                  <span dir="ltr" className="font-mono tracking-tight">
                    03-9600550
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:salesaspagil@gmail.com"
                  className="flex items-center gap-3 text-cream/65 hover:text-gold text-sm transition-colors group"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gold/10 ring-1 ring-gold/20 group-hover:bg-gold/20 group-hover:ring-gold/40 transition-all">
                    <Mail className="w-4 h-4 text-gold" aria-hidden="true" />
                  </span>
                  <span dir="ltr">salesaspagil@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-cream/65 text-sm">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gold/10 ring-1 ring-gold/20 flex-shrink-0">
                  <MapPin className="w-4 h-4 text-gold" aria-hidden="true" />
                </span>
                <address className="not-italic leading-snug pt-1">
                  רחוב הירקון 39
                  <br />
                  בני ברק, קומה 3
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-6 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/40">
          <span>
            © {new Date().getFullYear()} קפה גינץ · Gintz Coffee. כל הזכויות שמורות.
          </span>
          <span className="font-montserrat tracking-widest uppercase text-[10px]">
            Boutique Coffee Roastery
          </span>
        </div>
      </div>
    </footer>
  );
}
