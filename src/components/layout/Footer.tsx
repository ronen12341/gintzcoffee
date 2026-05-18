import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const links = [
  { href: "/", label: "בית" },
  { href: "/machines", label: "מכונות קפה" },
  { href: "/beans", label: "פולי קפה" },
  { href: "/cups", label: "כוסות ממותגות" },
  { href: "/bargains", label: "מציאון" },
  { href: "/contact", label: "צור קשר" },
];

export default function Footer() {
  return (
    <footer className="bg-brown text-cream" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="block text-gold font-bold text-2xl font-heebo">קפה גינץ</span>
              <span className="text-cream/50 text-xs font-montserrat tracking-widest uppercase">
                Gintz Coffee
              </span>
            </div>
            <p className="text-cream/65 text-sm leading-relaxed mb-5">
              פתרונות קפה מלאים לעסקים. מכונות, פולים וכוסות ממותגות — הכל ממקום אחד,
              בשירות אישי ומחיר משתלם.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/gintzcoffee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="קפה גינץ בפייסבוק"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-gold flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/gintzcoffee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="קפה גינץ באינסטגרם"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-gold flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              קישורים מהירים
            </h3>
            <ul className="space-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-cream/65 hover:text-gold text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              צור קשר
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0399600550"
                  className="flex items-center gap-2.5 text-cream/65 hover:text-gold text-sm transition-colors"
                  aria-label="התקשר: 03-9600550"
                >
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
                  <span dir="ltr">03-9600550</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@aspagil.com"
                  className="flex items-center gap-2.5 text-cream/65 hover:text-gold text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
                  <span dir="ltr">sales@aspagil.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-cream/65 text-sm">
                <MapPin
                  className="w-4 h-4 text-gold flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <address className="not-italic leading-snug">
                  רחוב הירקון 39, בני ברק, קומה 3
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-10 pt-6 text-center text-cream/40 text-xs">
          © {new Date().getFullYear()} קפה גינץ / Gintz Coffee. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
