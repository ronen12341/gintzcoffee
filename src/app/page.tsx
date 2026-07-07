import Link from "next/link";
import Image from "next/image";
import { Coffee, Package, Award, Zap, DollarSign, HeartHandshake, Flame, Sliders, Leaf, Briefcase } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import ProductCard from "@/components/ProductCard";
import BusinessSolutionCard from "@/components/BusinessSolutionCard";
import { coffeeMachines, businessSolutions } from "@/data/products";

export default function HomePage() {
  const featured = coffeeMachines.filter((m) => m.featured);

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden bg-cream"
        aria-label="כותרת ראשית"
      >
        {/* Soft ambient glow — replaces the old hard-edged rings */}
        <div
          className="absolute -top-20 -end-20 w-[28rem] h-[28rem] rounded-full bg-gold/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -start-24 w-80 h-80 rounded-full bg-brown/[0.04] blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 text-center">
          <div className="inline-flex items-center gap-4 mb-3">
            <span className="h-px w-10 bg-gold/40" aria-hidden="true" />
            <div className="flex flex-col items-center leading-tight">
              <span
                className="text-gold-dark font-bold text-4xl tracking-wide"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                קפה גינץ
              </span>
              <span
                className="text-gold-dark/70 font-semibold text-sm tracking-[0.15em] mt-0.5"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Gintz Coffee
              </span>
            </div>
            <span className="h-px w-10 bg-gold/40" aria-hidden="true" />
          </div>
          <p className="text-brown/45 text-xs font-montserrat tracking-[0.25em] uppercase mb-4">
            Boutique Coffee Roastery · Since 2005
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brown leading-tight mb-3">
            פתרונות קפה
            <span className="block text-gold-dark mt-1">לעסקים ולמשרדים</span>
          </h1>
          <p className="text-brown/65 text-lg max-w-xl mx-auto mb-6 leading-relaxed">
            פתרון קפה מלא מקצה לקצה — מכונה מקצועית, פולים טריים מבית הקלייה
            שלנו, התקנה, הדרכה ותמיכה שוטפת. מותאם לגודל העסק ולתקציב.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/business-solutions" className="btn btn-primary btn-lg">
              ראו את הפתרונות לעסקים ←
            </Link>
            <a href="#contact" className="btn btn-outline-brown btn-lg">
              קבל הצעת מחיר עכשיו
            </a>
          </div>
        </div>
      </section>

      {/* ── Photo strip ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="גלריית תמונות">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 h-28 sm:h-36">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80"
              alt="קלייה של פולי קפה טריים"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 33vw, 300px"
            />
            <div className="absolute inset-0 bg-brown/30" />
            <span className="absolute bottom-2 start-2 text-white font-bold text-[11px] sm:text-xs tracking-wide drop-shadow">
              קלייה טרייה
            </span>
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
              alt="אנשי עסקים שותים קפה בפגישה"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 33vw, 300px"
            />
            <div className="absolute inset-0 bg-brown/20" />
            <span className="absolute bottom-2 start-2 text-white font-bold text-[11px] sm:text-xs tracking-wide drop-shadow">
              קפה לעסקים
            </span>
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80"
              alt="פולי קפה קלויים איכותיים"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 33vw, 300px"
            />
            <div className="absolute inset-0 bg-brown/25" />
            <span className="absolute bottom-2 start-2 text-white font-bold text-[11px] sm:text-xs tracking-wide drop-shadow">
              פולים פרימיום
            </span>
          </div>
        </div>
      </section>

      {/* ── Business Solutions — the headline pitch ── */}
      <section
        className="py-16 sm:py-20 bg-gradient-to-b from-cream to-cream-dark"
        id="business-solutions"
        aria-labelledby="home-solutions-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-gold/15 text-gold px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              <Briefcase className="w-4 h-4" aria-hidden="true" />
              העיקר שלנו
            </div>
            <h2
              id="home-solutions-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-brown mb-4 leading-tight"
            >
              פתרונות קפה <span className="text-gold">לעסקים</span>
            </h2>
            <p className="text-brown/70 text-lg max-w-2xl mx-auto leading-relaxed">
              מכונה מקצועית, פולים טריים, התקנה, הדרכה ותמיכה שוטפת — הכל ממקור אחד
              ומותאם לכמות העובדים שלכם.
            </p>
          </div>

          {businessSolutions.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
              {businessSolutions.slice(0, 4).map((s) => (
                <BusinessSolutionCard key={s.id} solution={s} />
              ))}
            </div>
          )}

          <div className="text-center">
            <Link href="/business-solutions" className="btn btn-secondary btn-lg">
              כל הפתרונות לעסקים ←
            </Link>
          </div>
        </div>
      </section>

      {/* ── Boutique Roastery Story ── */}
      <section className="py-16 bg-cream" aria-labelledby="roastery-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="text-gold text-sm font-montserrat tracking-widest uppercase mb-3 block">
                Boutique Roastery
              </span>
              <h2 id="roastery-heading" className="text-3xl font-bold text-brown mb-5 leading-tight">
                הקפה הוא הלב הפועם
                <span className="block text-gold mt-1">של כל עסק</span>
              </h2>
              <p className="text-brown/70 text-base leading-relaxed mb-4">
                בקפה גינץ אנחנו מאמינים שהקפה הוא הלב הפועם של כל עסק. כבית קלייה בוטיק, אנו מתמחים בקלייה קפדנית של פולי קפה איכותיים ביותר, המגיעים ממקורות מכל רחבי העולם.
              </p>
              <p className="text-brown/70 text-base leading-relaxed mb-6">
                תהליך הקלייה המיוחד שלנו מבטיח לכם כוס קפה עשירה, ארומטית ובעלת טעם שאין לו מתחרים. הקפה מגיע אליכם טרי — <strong className="text-brown">עד 10 ימים בלבד מיום הקלייה</strong> — כדי שתוכלו ליהנות מחוויה מושלמת בכל לגימה.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-brown font-bold text-sm mb-1">קלייה קפדנית</h3>
                    <p className="text-brown/60 text-xs leading-relaxed">כל אצווה נקלית בדיוק ובאהבה</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-brown font-bold text-sm mb-1">התאמה אישית</h3>
                    <p className="text-brown/60 text-xs leading-relaxed">מיזוג ורמת קלייה לפי בחירתכם</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-brown font-bold text-sm mb-1">מוצא עולמי</h3>
                    <p className="text-brown/60 text-xs leading-relaxed">פולים ממיטב מטעי העולם</p>
                  </div>
                </div>
              </div>
              <p className="text-gold font-bold text-base">נשמח לצרף אתכם למשפחת הקפה שלנו ☕</p>
            </div>
            <div className="flex-1 relative rounded-2xl overflow-hidden aspect-[4/3] w-full max-w-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80"
                alt="קלייה בוטיק של פולי קפה טריים"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/40 to-transparent" />
              <div className="absolute bottom-5 start-5">
                <span className="bg-gold text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  קולים מאז 2005
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 bg-cream-dark" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="services-heading"
              className="text-3xl font-bold text-brown mb-3"
            >
              מה אנחנו מציעים
            </h2>
            <p className="text-brown/60 text-base max-w-xl mx-auto">
              בניגוד לספקים רגילים — אנחנו בית קלייה. הקפה נולד אצלנו, ומגיע אליכם טרי ומותאם אישית.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Coffee className="w-8 h-8" />}
              title="מכונות קפה לעסקים"
              description="מגוון מכונות אוטומטיות ומקצועיות לכל גודל עסק — עם התקנה, הדרכה ותמיכה."
              href="/machines"
            />
            <ServiceCard
              icon={<Package className="w-8 h-8" />}
              title="קלייה בוטיק לפי הזמנה"
              description="קולים עבורכם בדיוק לפי הטעם שלכם — רמת קלייה, מיזוג ומוצא הפולים. כל אצווה טרייה."
              href="/beans"
            />
            <ServiceCard
              icon={<CupIcon />}
              title="כוסות ממותגות"
              description="כוסות חד פעמיות עם לוגו העסק שלכם — פרסום חכם בכל כוס קפה."
              href="https://www.aspagil.com"
            />
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section
        className="py-16 bg-cream-dark"
        aria-labelledby="whyus-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              id="whyus-heading"
              className="text-3xl font-bold text-brown mb-3"
            >
              למה לבחור בנו?
            </h2>
            <p className="text-brown/60 text-base max-w-xl mx-auto">
              אנחנו לא מפיצים — אנחנו היצרן. הקפה שלכם נקלה אצלנו, לפי הטעם שלכם, ומגיע ישירות אליכם.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <WhyCard
              icon={<Award className="w-8 h-8" />}
              title="בוטיק"
              description="קלייה אומנותית בהתאמה אישית לכל לקוח"
            />
            <WhyCard
              icon={<Zap className="w-8 h-8" />}
              title="טרי תמיד"
              description="אספקה תוך 24–48 שעות מהקלייה ישירות אליכם"
            />
            <WhyCard
              icon={<DollarSign className="w-8 h-8" />}
              title="משתלם"
              description="מחירים תחרותיים ותנאי תשלום גמישים"
            />
            <WhyCard
              icon={<HeartHandshake className="w-8 h-8" />}
              title="שירות אישי"
              description="מלווים אתכם מבחירת הפולים עד הכוס האחרונה"
            />
          </div>
        </div>
      </section>

      {/* ── Featured products ── */}
      <section className="py-16 bg-cream" id="products" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 id="products-heading" className="text-3xl font-bold text-brown">
              מכונות קפה מובילות
            </h2>
            <Link
              href="/machines"
              className="text-gold hover:text-gold-dark font-medium text-sm transition-colors"
              aria-label="לכל מכונות הקפה"
            >
              לכל המכונות ←
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((m) => (
              <ProductCard
                key={m.id}
                name={m.name}
                description={m.description}
                features={m.features}
                image={m.image}
                priceRange={m.price}
                ctaHref={`/machines/${m.id}`}
                ctaLabel="פרטים מלאים ←"
                detailHref={`/machines/${m.id}`}
                cartItem={{
                  id: m.id,
                  name: m.name,
                  price: m.price,
                  priceNumeric: m.priceNumeric,
                  category: "machine",
                  image: m.image,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Cups highlight ── */}
      <section
        className="py-16 border-y border-gold/20"
        style={{ background: "linear-gradient(135deg, #FDF6F0 0%, #F5F0E8 100%)" }}
        aria-labelledby="cups-highlight-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 md:max-w-lg">
              <span className="text-gold text-sm font-montserrat tracking-widest uppercase mb-2 block">
                Gil Cups
              </span>
              <h2
                id="cups-highlight-heading"
                className="text-3xl font-bold text-brown mb-4 leading-tight"
              >
                כוסות עם הלוגו שלכם
              </h2>
              <p className="text-brown/70 text-base leading-relaxed mb-6">
                הפכו כל כוס קפה לפרסומת. כוסות ממותגות איכותיות עם הלוגו של העסק — פתרון
                שיווקי חכם שעובד עבורכם כל יום, כל כוס.
              </p>
              <Link href="https://www.aspagil.com" className="btn btn-secondary">
                לפרטים על כוסות ממותגות ←
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 w-full max-w-sm md:max-w-none">
              <div className="relative rounded-xl overflow-hidden aspect-[6/5]">
                <Image
                  src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80"
                  alt="כוסות קפה ממותגות עם לוגו עסקי"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 20vw"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[6/5]">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80"
                  alt="הדפסה על כוסות חד פעמיות"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 20vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact / Lead form ── */}
      <section
        className="py-16 bg-cream-dark"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              id="contact-heading"
              className="text-3xl font-bold text-brown mb-3"
            >
              קבל הצעת מחיר מותאמת
            </h2>
            <p className="text-brown/65">מלא את הטופס ונחזור אליך תוך שעות ספורות</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <LeadForm title="" />
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 text-center focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
    >
      <div className="text-gold mb-4 flex justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-brown font-bold text-xl mb-2">{title}</h3>
      <p className="text-brown/60 text-sm leading-relaxed">{description}</p>
      <span className="inline-block mt-4 text-gold text-sm font-medium group-hover:underline">
        למידע נוסף ←
      </span>
    </Link>
  );
}

function WhyCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-4 text-gold-dark">
        {icon}
      </div>
      <h3 className="text-brown font-bold text-xl mb-2">{title}</h3>
      <p className="text-brown/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function CupIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 2h12l-1.5 14a2 2 0 01-2 1.8H9.5a2 2 0 01-2-1.8L6 2z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 22h16" />
    </svg>
  );
}
