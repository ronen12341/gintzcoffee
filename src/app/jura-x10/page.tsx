import type { Metadata } from "next";
import Link from "next/link";
import {
  Coffee,
  Snowflake,
  Gauge,
  Cpu,
  CreditCard,
  Sparkles,
  Building2,
  UtensilsCrossed,
  Hotel,
  Store,
  Check,
  ChevronLeft,
} from "lucide-react";
import SmartImage from "@/components/SmartImage";
import LeadForm from "@/components/LeadForm";
import { coffeeMachines } from "@/data/products";

const X10 = coffeeMachines.find((m) => m.id === "jura-x10");

const X10_IMAGE =
  X10?.image ?? "https://www.jura.co.il/wp-content/uploads/2024/06/X10Main.webp";

export const metadata: Metadata = {
  title: "JURA X10 — מכונת הקפה המקצועית לעסק שלך | קפה גינץ",
  description:
    "JURA X10 — 35 משקאות חמים וקרים, כולל Cold Brew אוטומטי, עד 100 כוסות ביום. השאירו פרטים וקבלו הצעת מחיר מותאמת מקפה גינץ.",
  openGraph: {
    title: "JURA X10 — מכונת הקפה המקצועית לעסק שלך",
    description:
      "35 משקאות, Cold Brew אוטומטי, עד 100 כוסות ביום. הצעת מחיר מהירה.",
    images: [X10_IMAGE],
  },
};

const STATS = [
  { value: "35", label: "סוגי משקאות" },
  { value: "9", label: "משקאות Cold Brew" },
  { value: "100", label: "כוסות ביום" },
  { value: '3.5"', label: "מסך מגע צבעוני" },
];

const FEATURES = [
  {
    icon: Snowflake,
    title: "Cold Brew אוטומטי",
    text: "9 משקאות חליטה קרה בלחיצת כפתור — קפה קר חלק ועשיר, ללא המתנה.",
  },
  {
    icon: Coffee,
    title: "35 משקאות שונים",
    text: "מאספרסו קצר ועד לאטה מקיאטו וקפה קר — תפריט מלא לכל טעם.",
  },
  {
    icon: Gauge,
    title: "עד 100 כוסות ביום",
    text: "בנויה לעומס. אמינה, חזקה ועקבית גם בשעות העמוסות ביותר.",
  },
  {
    icon: Cpu,
    title: "מטחנת P.A.G.2+",
    text: "טחינה טרייה ומדויקת לכל כוס, עם בקרת ארומה חכמה.",
  },
  {
    icon: CreditCard,
    title: "תמיכה בתשלום חכם",
    text: "ממשק MDB מובנה — אידאלי לעמדות שירות עצמי ותשלום.",
  },
  {
    icon: Sparkles,
    title: "ניקוי אוטומטי",
    text: "תוכניות שטיפה והדחה אוטומטיות — תחזוקה פשוטה והיגיינה מלאה.",
  },
];

const AUDIENCE = [
  { icon: Building2, label: "משרדים" },
  { icon: UtensilsCrossed, label: "מסעדות ובתי קפה" },
  { icon: Hotel, label: "מלונות" },
  { icon: Store, label: "חנויות וקייטרינג" },
];

export default function JuraX10LandingPage() {
  return (
    <>
      {/* Page-scoped animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes x10Float {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-1.5deg); }
        }
        @keyframes x10Glow {
          0%,100% { opacity: .45; transform: scale(1); }
          50% { opacity: .8; transform: scale(1.08); }
        }
        @keyframes x10Rise {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes x10Marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes x10Spin {
          to { transform: rotate(360deg); }
        }
        .x10-float { animation: x10Float 6s ease-in-out infinite; }
        .x10-glow { animation: x10Glow 5s ease-in-out infinite; }
        .x10-rise { animation: x10Rise .8s cubic-bezier(.22,1,.36,1) both; }
        .x10-rise-1 { animation-delay: .1s; }
        .x10-rise-2 { animation-delay: .25s; }
        .x10-rise-3 { animation-delay: .4s; }
        .x10-rise-4 { animation-delay: .55s; }
        .x10-ring { animation: x10Spin 40s linear infinite; }
        .x10-marquee-track { animation: x10Marquee 22s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .x10-float,.x10-glow,.x10-rise,.x10-ring,.x10-marquee-track { animation: none !important; }
          .x10-rise { opacity: 1 !important; transform: none !important; }
        }
      `,
        }}
      />

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden bg-hero-gradient"
        aria-label="JURA X10"
      >
        {/* decorative rotating rings */}
        <div
          className="x10-ring absolute -top-40 -start-40 w-[34rem] h-[34rem] rounded-full border border-gold/10"
          aria-hidden="true"
        />
        <div
          className="x10-ring absolute -bottom-48 -end-48 w-[30rem] h-[30rem] rounded-full border border-gold/10"
          style={{ animationDirection: "reverse" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* copy */}
            <div className="text-center lg:text-start">
              <span className="x10-rise x10-rise-1 inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-4 py-1.5 text-gold text-sm font-semibold mb-5">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                חדש בקפה גינץ · סדרת PROFESSIONAL
              </span>

              <h1 className="x10-rise x10-rise-2 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5">
                <span className="text-cream">JURA</span>{" "}
                <span className="bg-gradient-to-l from-gold-light to-gold bg-clip-text text-transparent">
                  X10
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-cream/90 font-bold mt-2">
                  הקפה של העסק שלך — ברמה אחרת
                </span>
              </h1>

              <p className="x10-rise x10-rise-3 text-cream/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                מכונה מקצועית אחת שעושה הכל: 35 משקאות חמים וקרים, כולל{" "}
                <span className="text-gold font-semibold">Cold Brew אוטומטי</span>,
                עד 100 כוסות ביום. לחיצת כפתור — וקפה מושלם בכל פעם.
              </p>

              <div className="x10-rise x10-rise-4 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="#lead" className="btn btn-primary btn-lg">
                  קבלו הצעת מחיר
                </a>
                <a href="#features" className="btn btn-outline btn-lg">
                  מה היא יודעת לעשות?
                </a>
              </div>
            </div>

            {/* machine image */}
            <div className="relative flex items-center justify-center">
              <div
                className="x10-glow absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gold/30 blur-3xl"
                aria-hidden="true"
              />
              <div className="x10-float relative">
                <SmartImage
                  src={X10_IMAGE}
                  alt="מכונת קפה JURA X10"
                  width={460}
                  height={520}
                  priority
                  className="relative z-10 w-auto h-[320px] sm:h-[420px] md:h-[480px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div className="relative z-10 border-t border-gold/15 bg-brown-dark/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-gold">
                  {s.value}
                </div>
                <div className="text-cream/60 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── scrolling benefit marquee ── */}
      <div className="bg-gold text-brown-dark py-3 overflow-hidden">
        <div className="x10-marquee-track flex w-max gap-10 whitespace-nowrap font-bold text-sm sm:text-base">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex gap-10" aria-hidden={dup === 1}>
              <span>☕ קפה חם מושלם</span>
              <span>❄️ Cold Brew אוטומטי</span>
              <span>⚡ עד 100 כוסות ביום</span>
              <span>🥛 מערכת חלב מתקדמת</span>
              <span>🔧 שירות ותחזוקה מקפה גינץ</span>
              <span>💳 תמיכה בתשלום חכם</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section id="features" className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-3">
              למה X10?
            </h2>
            <p className="text-brown/60 max-w-2xl mx-auto">
              כל מה שצריך כדי להגיש קפה איכותי בעסק — בלי טכנאי, בלי בלאגן, בלחיצת
              כפתור.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-cream-dark"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-4 group-hover:bg-gold/25 transition-colors">
                    <Icon className="w-6 h-6 text-gold-dark" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-brown mb-2">{f.title}</h3>
                  <p className="text-brown/65 text-sm leading-relaxed">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COLD BREW highlight ── */}
      <section className="relative overflow-hidden bg-brown text-cream py-16 sm:py-20">
        <div
          className="x10-glow absolute -top-20 -end-20 w-80 h-80 rounded-full bg-gold/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Snowflake className="w-10 h-10 text-gold mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            הקיץ כבר כאן — וה־X10 מוכנה
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
            9 משקאות Cold Brew אוטומטיים לחלוטין. חליטה קרה איטית שמפיקה קפה קר
            רך, מתוק ועשיר — בלי קרח שמדלל, בלי המתנה של שעות.
          </p>
          <a href="#lead" className="btn btn-primary btn-lg">
            אני רוצה X10 בעסק
          </a>
        </div>
      </section>

      {/* ── AUDIENCE ── */}
      <section className="py-14 bg-cream-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-brown mb-8">
            מתאימה בדיוק לעסק שלך
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {AUDIENCE.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.label}
                  className="bg-white rounded-2xl py-7 px-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Icon
                    className="w-8 h-8 text-gold-dark mx-auto mb-3"
                    aria-hidden="true"
                  />
                  <div className="text-brown font-semibold text-sm">{a.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ── */}
      <section
        id="lead"
        className="py-16 sm:py-20 bg-cream"
        aria-labelledby="x10-lead-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* left: value recap */}
            <div>
              <h2
                id="x10-lead-heading"
                className="text-3xl sm:text-4xl font-bold text-brown mb-4"
              >
                קבלו הצעת מחיר מותאמת
              </h2>
              <p className="text-brown/65 leading-relaxed mb-6">
                השאירו פרטים ונחזור אליכם עם הצעה אישית ל־JURA X10, כולל אפשרויות
                רכישה, השכרה ושירות. ללא התחייבות.
              </p>
              <ul className="space-y-3">
                {(X10?.features ?? FEATURES.map((f) => f.title))
                  .slice(0, 5)
                  .map((f) => (
                    <li key={f} className="flex items-start gap-2 text-brown">
                      <Check
                        className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
              </ul>

              <Link
                href="/machines/jura-x10"
                className="inline-flex items-center gap-1 text-sm text-gold-dark font-semibold mt-6 hover:gap-2 transition-all"
              >
                למפרט הטכני המלא
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* right: form card */}
            <div className="bg-white rounded-2xl shadow-xl p-7 sm:p-8 border border-cream-dark">
              <LeadForm title="פרטים ליצירת קשר" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
