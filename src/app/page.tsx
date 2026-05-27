import Link from "next/link";
import Image from "next/image";
import { Coffee, Package, Award, Zap, DollarSign, HeartHandshake, Flame, Sliders, Leaf } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import ProductCard from "@/components/ProductCard";
import { coffeeMachines } from "@/data/products";

export default function HomePage() {
  const featured = coffeeMachines.filter((m) => m.featured);

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#2A1506" }}
        aria-label="כותרת ראשית"
      >
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-110 saturate-110"
          aria-hidden="true"
        >
          <source
            src="/coffee-roasting.mp4.mp4"
            type="video/mp4"
          />
        </video>

        {/* Lighter overlay so video is clearly visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(42,21,6,0.55) 0%, rgba(59,31,10,0.50) 45%, rgba(92,48,21,0.45) 75%, rgba(59,31,10,0.55) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Decorative rings */}
        <div
          className="absolute -top-32 -end-32 w-96 h-96 rounded-full border border-gold/10 opacity-50"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 -start-16 w-64 h-64 rounded-full border border-gold/10 opacity-40"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gold mb-4 font-heebo">
            קפה גינץ
          </h2>
          <p className="text-gold/80 text-sm font-montserrat tracking-widest uppercase mb-4">
            Boutique Coffee Roastery · Since 2005
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream leading-tight mb-4">
            בית קלייה בוטיק
            <span className="block text-gold mt-1">לפי הטעם שלכם</span>
          </h1>
          <p className="text-cream/75 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            אנחנו קולים את הקפה בעצמנו — בהתאם לטעם האישי של כל לקוח.
            פולים טריים, מכונות מקצועיות וכוסות ממותגות, הכל ממקור אחד.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gold hover:bg-gold-dark text-white font-bold px-8 py-3.5 rounded-full text-base transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-brown"
            >
              קבל הצעת מחיר
            </a>
            <a
              href="#products"
              className="border-2 border-cream/60 text-cream hover:bg-cream hover:text-brown font-bold px-8 py-3.5 rounded-full text-base transition-colors focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-brown"
            >
              הכר את מכונות הקפה שלנו
            </a>
          </div>
        </div>
      </section>

      {/* ── Photo strip ── */}
      <section className="grid grid-cols-1 sm:grid-cols-3 h-56 sm:h-72" aria-label="גלריית תמונות">
        <div className="relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80"
            alt="קלייה של פולי קפה טריים"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-brown/30" />
          <span className="absolute bottom-4 start-4 text-white font-bold text-sm tracking-wide drop-shadow">
            קלייה טרייה
          </span>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
            alt="אנשי עסקים שותים קפה בפגישה"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-brown/20" />
          <span className="absolute bottom-4 start-4 text-white font-bold text-sm tracking-wide drop-shadow">
            קפה לעסקים
          </span>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80"
            alt="פולי קפה קלויים איכותיים"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-brown/25" />
          <span className="absolute bottom-4 start-4 text-white font-bold text-sm tracking-wide drop-shadow">
            פולים פרימיום
          </span>
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
              href="/cups"
            />
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(180deg, #3B1F0A 0%, #2A1506 100%)" }}
        aria-labelledby="whyus-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              id="whyus-heading"
              className="text-3xl font-bold text-gold mb-3"
            >
              למה לבחור בנו?
            </h2>
            <p className="text-cream/55 text-base max-w-xl mx-auto">
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
                ctaHref="#contact"
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
              <Link
                href="/cups"
                className="inline-block bg-brown hover:bg-brown-light text-cream font-bold px-7 py-3 rounded-full transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2"
              >
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
      <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-4 text-gold">
        {icon}
      </div>
      <h3 className="text-gold font-bold text-xl mb-2">{title}</h3>
      <p className="text-cream/65 text-sm leading-relaxed">{description}</p>
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
