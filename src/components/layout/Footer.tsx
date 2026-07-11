import Link from "next/link";
import { Phone, Mail, MapPin, Coffee } from "lucide-react";

const links = [
  { href: "/", label: "בית" },
  { href: "/business-solutions", label: "פתרונות לעסקים" },
  { href: "/machines", label: "רכישת מכונות" },
  { href: "/beans", label: "פולי קפה" },
  { href: "/roastery", label: "בית הקלייה" },
  { href: "https://www.gilcups.com", label: "כוסות ממותגות" },
  { href: "/bargains", label: "מכונות יד2" },
  { href: "/faq", label: "שאלות נפוצות" },
  { href: "/contact", label: "צור קשר" },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-cream-dark text-brown overflow-hidden border-t border-brown/10"
      role="contentinfo"
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gold/15 ring-1 ring-gold/25"
                aria-hidden="true"
              >
                <Coffee className="w-4 h-4 text-gold-dark" />
              </span>
              <div className="leading-none">
                <span
                  className="block text-brown text-lg font-bold tracking-wide"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Gintz Coffee
                </span>
                <span className="text-brown/45 text-[10px] font-montserrat tracking-[0.2em] uppercase mt-1 block">
                  Boutique · Since 2005
                </span>
              </div>
            </div>
            <p className="text-brown/60 text-sm leading-relaxed mb-5 max-w-sm">
              פתרונות קפה מלאים לעסקים — מכונות, פולים טריים מבית הקלייה שלנו,
              וכוסות ממותגות. הכל ממקור אחד, בשירות אישי.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://www.facebook.com/gintzcoffee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="קפה גינץ בפייסבוק"
                className="w-8 h-8 rounded-full bg-brown/5 hover:bg-brown/10 ring-1 ring-brown/10 flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-brown/70" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/gintzcoffee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="קפה גינץ באינסטגרם"
                className="w-8 h-8 rounded-full bg-brown/5 hover:bg-brown/10 ring-1 ring-brown/10 flex items-center justify-center transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-none stroke-brown/70 stroke-2"
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
                className="w-8 h-8 rounded-full bg-brown/5 hover:bg-brown/10 ring-1 ring-brown/10 flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-brown/70" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.82 14.13c-.25.7-1.42 1.32-1.96 1.4-.5.07-1.13.1-1.83-.12-.42-.13-.97-.31-1.66-.61-2.93-1.27-4.85-4.22-5-4.41-.15-.2-1.2-1.6-1.2-3.05s.76-2.17 1.03-2.46c.26-.3.57-.37.77-.37l.55.01c.18.01.41-.07.64.49.25.59.83 2.04.9 2.19.07.15.12.32.02.52-.1.2-.15.32-.3.49l-.45.5c-.15.15-.3.32-.13.62.17.3.78 1.28 1.67 2.08 1.16 1.03 2.13 1.36 2.43 1.5.3.15.47.13.65-.07.18-.2.75-.87.94-1.17.2-.3.4-.25.66-.15.27.1 1.7.8 1.99.94.3.15.5.22.57.35.07.13.07.75-.18 1.45z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-brown/80 font-semibold mb-4 text-xs uppercase tracking-[0.15em]">
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
            <h3 className="text-brown/80 font-semibold mb-4 text-xs uppercase tracking-[0.15em]">
              צור קשר
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0399600550"
                  className="flex items-center gap-2.5 text-brown/65 hover:text-gold-dark text-sm transition-colors group"
                  aria-label="התקשר: 03-9600550"
                >
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gold/10 flex-shrink-0">
                    <Phone className="w-3.5 h-3.5 text-gold-dark" aria-hidden="true" />
                  </span>
                  <span dir="ltr" className="font-mono tracking-tight">
                    03-9600550
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:salesaspagil@gmail.com"
                  className="flex items-center gap-2.5 text-brown/65 hover:text-gold-dark text-sm transition-colors group"
                >
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gold/10 flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 text-gold-dark" aria-hidden="true" />
                  </span>
                  <span dir="ltr">salesaspagil@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-brown/65 text-sm">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gold/10 flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-gold-dark" aria-hidden="true" />
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
        <div className="mt-10 pt-5 border-t border-brown/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brown/45">
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
