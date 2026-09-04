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
  { href: "/business-solutions", label: "לעסקים" },
  { href: "/machines", label: "מכונות קפה" },
  { href: "/beans", label: "פולי קפה" },
  { href: "/roastery", label: "בית הקלייה" },
  { href: "/blog", label: "בלוג" },
  { href: "https://www.gilcups.com", label: "כוסות ממותגות", external: true },
  { href: "/bargains", label: "מכונות מחודשות" },
  { href: "/faq", label: "שאלות נפוצות" },
  { href: "/contact", label: "צור קשר" },
];

const desktopLinks = navLinks.filter(
  ({ href }) => href !== "/faq" && href !== "/contact"
);

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
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="flex h-[76px] items-center justify-between gap-4">
            {/* Right side (in RTL): hamburger (mobile) + logo */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-cream transition-all hover:border-gold/40 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold lg:hidden"
                aria-label="פתח תפריט"
                aria-expanded={drawerOpen}
                aria-controls="side-drawer"
              >
                <Menu className="w-5 h-5" aria-hidden="true" />
              </button>

              <Link
                href="/"
                className="group flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
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
                    width={46}
                    height={46}
                    className="relative rounded-full bg-white object-contain ring-1 ring-white/20 transition-all group-hover:ring-gold/60"
                    priority
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span
                    className="text-xl font-bold tracking-wide text-gold"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Gintz
                  </span>
                  <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-cream/55 sm:text-[10px]">
                    Coffee Roastery
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-0.5 lg:flex" aria-label="ניווט ראשי">
              {desktopLinks.map(({ href, label, external }) => {
                const active = pathname === href;
                if (external) {
                  return (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link"
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
                      active && "nav-link-active"
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            {/* Left side (in RTL): quote CTA + phone + cart */}
            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="hidden min-h-11 items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-gold-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:inline-flex"
              >
                קבלו הצעה
              </Link>
              <a
                href="tel:039600550"
                className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-cream/65 transition-colors hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold xl:flex"
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

      </header>

      {/* Slide-in side drawer (mobile only — triggered by hamburger) */}
      <div
        className={cn("drawer-backdrop lg:hidden", drawerOpen && "open")}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="side-drawer"
        className={cn("drawer-panel lg:hidden", drawerOpen && "open")}
        role="dialog"
        aria-label="תפריט ראשי"
        aria-modal="true"
        aria-hidden={!drawerOpen}
      >
        <div className="flex h-[76px] items-center justify-between border-b border-white/10 px-5">
          <div>
            <span className="block text-xl font-bold tracking-wide text-gold" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Gintz Coffee
            </span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.25em] text-cream/45">Boutique Roastery</span>
          </div>
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
          {navLinks.map(({ href, label, external }) => {
            const active = pathname === href;
            if (external) {
              return (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="drawer-link"
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
        <div className="space-y-3 border-t border-white/10 px-5 py-5 text-sm">
          <Link
            href="/contact"
            onClick={() => setDrawerOpen(false)}
            className="mb-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gold px-5 py-2.5 font-bold text-white transition hover:bg-gold-dark"
          >
            קבלו הצעת מחיר
          </Link>
          <a
            href="tel:039600550"
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
