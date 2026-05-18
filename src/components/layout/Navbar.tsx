"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "בית" },
  { href: "/machines", label: "מכונות קפה" },
  { href: "/beans", label: "פולי קפה" },
  { href: "/cups", label: "כוסות ממותגות" },
  { href: "/bargains", label: "מציאון" },
  { href: "/contact", label: "צור קשר" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-brown shadow-lg" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-brown rounded"
            aria-label="קפה גינץ – דף הבית"
          >
            <Image
              src="/logo.png"
              alt="לוגו קפה גינץ"
              width={48}
              height={48}
              className="rounded-full object-contain bg-white"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="text-gold font-bold text-xl font-heebo">קפה גינץ</span>
              <span className="text-cream/60 text-[10px] font-montserrat tracking-widest uppercase">
                Gintz Coffee
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="ניווט ראשי">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === href
                    ? "text-gold bg-white/10"
                    : "text-cream/80 hover:text-gold hover:bg-white/5"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Phone + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0399600550"
              className="hidden sm:flex items-center gap-1.5 text-gold hover:text-gold-light text-sm font-medium transition-colors"
              aria-label="התקשר אלינו: 03-9600550"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span dir="ltr">03-9600550</span>
            </a>
            <button
              className="md:hidden text-cream p-1.5 rounded-md hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "סגור תפריט" : "פתח תפריט"}
            >
              {open ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden bg-brown-dark border-t border-white/10"
          aria-label="ניווט נייד"
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "block px-3 py-2.5 rounded-md text-base font-medium transition-colors",
                  pathname === href
                    ? "text-gold bg-white/10"
                    : "text-cream/80 hover:text-gold hover:bg-white/5"
                )}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a
              href="tel:0399600550"
              className="flex items-center gap-2 px-3 py-2.5 text-gold font-medium"
              onClick={() => setOpen(false)}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span dir="ltr">03-9600550</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
