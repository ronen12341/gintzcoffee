"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import CartIcon from "@/components/layout/CartIcon";

const navLinks = [
  { href: "/", label: "בית" },
  { href: "/business-solutions", label: "פתרונות לעסקים", emphasis: true },
  { href: "/machines", label: "רכישת מכונות" },
  { href: "/beans", label: "פולי קפה" },
  { href: "/roastery", label: "בית הקלייה" },
  { href: "https://www.gilcups.com", label: "כוסות ממותגות", external: true },
  { href: "/bargains", label: "מכונות יד2" },
  { href: "/faq", label: "שאלות נפוצות" },
  { href: "/contact", label: "צור קשר" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  // Drop the elevated shadow once the user has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Prevent body scroll while drawer open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 nav-shell",
          scrolled && "nav-shell-scrolled"
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px] gap-3 sm:gap-4">
            {/* Right side (in RTL): hamburger (mobile) + logo */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-cream bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-gold/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="פתח תפריט"
                aria-expanded={drawerOpen}
                aria-controls="side-drawer"
              >
                <Menu className="w-5 h-5" aria-hidden="true" />
              </button>

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
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="ניווט ראשי">
              {navLinks.map(({ href, label, emphasis, external }) => {
                const active = pathname === href;
                if (external) {
                  return (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn("nav-link", emphasis && "nav-link-emphasis")}
                    >
                      {label}
                    </a>
                  );
                }
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

            {/* Left side (in RTL): phone (desktop) + cart */}
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

        {/* Mobile nav chips — horizontal scroll. Stays visible alongside the
            hamburger so quick links remain one tap away. */}
        <nav
          className="md:hidden border-t border-white/5"
          aria-label="ניווט מהיר"
        >
          <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 py-2.5">
            {navLinks.map(({ href, label, emphasis, external }) => {
              const active = pathname === href;
              if (external) {
                return (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn("nav-chip", emphasis && "nav-chip-emphasis")}
                  >
                    {label}
                  </a>
                );
              }
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

      {/* Slide-in side drawer (mobile only — triggered by hamburger) */}
      <div
        className={cn("drawer-backdrop md:hidden", drawerOpen && "open")}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="side-drawer"
        className={cn("drawer-panel md:hidden", drawerOpen && "open")}
        role="dialog"
        aria-label="תפריט ראשי"
        aria-modal="true"
        aria-hidden={!drawerOpen}
      >
        <div className="flex items-center justify-between px-5 h-[68px] border-b border-white/10">
          <span
            className="text-gold font-bold text-lg tracking-wide"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Gintz Coffee
          </span>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full text-cream bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="סגור תפריט"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1" aria-label="ניווט בתפריט נשלף">
          {navLinks.map(({ href, label, emphasis, external }) => {
            const active = pathname === href;
            if (external) {
              return (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("drawer-link", emphasis && "drawer-link-emphasis")}
                  onClick={() => setDrawerOpen(false)}
                >
                  {label}
                </a>
              );
            }
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "drawer-link",
                  emphasis && "drawer-link-emphasis",
                  active && "drawer-link-active"
                )}
                onClick={() => setDrawerOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Contact strip at the bottom of the drawer */}
        <div className="border-t border-white/10 px-5 py-4 space-y-3 text-sm">
          <a
            href="tel:0399600550"
            className="flex items-center gap-3 text-cream/75 hover:text-gold transition-colors"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 ring-1 ring-gold/25">
              <Phone className="w-4 h-4 text-gold" aria-hidden="true" />
            </span>
            <span dir="ltr" className="font-mono">
              03-9600550
            </span>
          </a>
          <a
            href="mailto:salesaspagil@gmail.com"
            className="flex items-center gap-3 text-cream/75 hover:text-gold transition-colors"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 ring-1 ring-gold/25">
              <Mail className="w-4 h-4 text-gold" aria-hidden="true" />
            </span>
            <span dir="ltr">salesaspagil@gmail.com</span>
          </a>
          <div className="flex items-start gap-3 text-cream/55 leading-snug">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 ring-1 ring-gold/25 flex-shrink-0">
              <MapPin className="w-4 h-4 text-gold" aria-hidden="true" />
            </span>
            <address className="not-italic pt-1.5">
              רחוב הירקון 39, בני ברק
            </address>
          </div>
        </div>
      </aside>
    </>
  );
}
