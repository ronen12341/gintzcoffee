"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
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
                    active && "nav-link-active"
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: phone (desktop) + cart */}
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
          </div>
        </div>
      </div>

      {/* Mobile nav chips — horizontal scroll. Visible only on small screens
          since desktop has the inline nav above. */}
      <nav
        className="md:hidden border-t border-white/5"
        aria-label="ניווט מהיר"
      >
        <div
          className="flex gap-2 overflow-x-auto scrollbar-hide px-4 py-2.5"
          style={{ scrollPaddingInline: "1rem" }}
        >
          {navLinks.map(({ href, label, emphasis }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "nav-chip",
                  emphasis && "nav-chip-emphasis",
                  active && "nav-chip-active"
                )}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="tel:0399600550"
            className="nav-chip flex items-center gap-1.5"
            aria-label="התקשר 03-9600550"
          >
            <Phone className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
            <span dir="ltr" className="font-mono">
              03-9600550
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
