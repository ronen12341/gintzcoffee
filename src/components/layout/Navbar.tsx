"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import CartIcon from "@/components/layout/CartIcon";

const navLinks = [
  { href: "/", label: "בית" },
  { href: "/business-solutions", label: "פתרונות לעסקים", emphasis: true },
  { href: "/machines", label: "רכישת מכונות" },
  { href: "/beans", label: "פולי קפה" },
  { href: "/cups", label: "כוסות ממותגות" },
  { href: "/bargains", label: "מכונות יד2" },
  { href: "/contact", label: "צור קשר" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Drop the elevated shadow once the user has scrolled — keeps the header
  // visually anchored to content rather than floating awkwardly at the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 nav-shell",
        scrolled && "nav-shell-scrolled"
      )}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px] gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md group"
            aria-label="קפה גינץ – דף הבית"
          >
            <div className="relative">
              <span
                className="absolute inset-0 rounded-full bg-gold/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />
              <Image
                src="/logo.png"
                alt="לוגו קפה גינץ"
                width={44}
                height={44}
                className="relative rounded-full object-contain bg-white ring-1 ring-gold/30 group-hover:ring-gold/60 transition-all"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-gold font-bold text-xl tracking-wide"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Gintz
              </span>
              <span className="text-cream/55 text-[10px] font-montserrat tracking-[0.25em] uppercase mt-0.5">
                Coffee · קפה גינץ
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="ניווט ראשי">
            {navLinks.map(({ href, label, emphasis }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "nav-link",
                    emphasis && "nav-link-emphasis",
                    active && !emphasis && "nav-link-active",
                    active && emphasis && "nav-link-active"
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: phone + cart + hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:0399600550"
              className="hidden sm:flex items-center gap-1.5 text-cream/70 hover:text-gold text-sm font-medium transition-colors px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="התקשר אלינו: 03-9600550"
            >
              <Phone className="w-4 h-4 text-gold" aria-hidden="true" />
              <span dir="ltr" className="font-mono tracking-tight">
                03-9600550
              </span>
            </a>
            <CartIcon />
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-cream bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "סגור תפריט" : "פתח תפריט"}
            >
              {open ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — smooth slide-down */}
      <nav
        id="mobile-nav"
        className={cn(
          "md:hidden overflow-hidden transition-[max-height] duration-300 ease-out",
          open ? "max-h-[520px]" : "max-h-0"
        )}
        aria-label="ניווט נייד"
      >
        <div className="px-4 py-4 bg-brown-dark/95 backdrop-blur-sm border-t border-gold/10 space-y-1">
          {navLinks.map(({ href, label, emphasis }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  emphasis
                    ? "bg-gold/15 text-gold ring-1 ring-gold/30 hover:bg-gold/25"
                    : "text-cream/80 hover:text-gold hover:bg-white/5",
                  active &&
                    (emphasis
                      ? "bg-gold/30 ring-gold/50"
                      : "text-gold bg-white/10")
                )}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="tel:0399600550"
            className="flex items-center gap-2 px-4 py-3 mt-2 text-gold font-medium border-t border-white/10"
            onClick={() => setOpen(false)}
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span dir="ltr">03-9600550</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
