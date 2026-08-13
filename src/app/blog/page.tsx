import type { Metadata } from "next";
import Link from "next/link";
import { Coffee, Wallet, Scale, Calculator, Heart } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "בלוג | מדריכים לקפה למשרד ולעסק",
  description:
    "מדריכים מקצועיים על מכונות קפה למשרד, פולי קפה טריים ותקציב קפה לעסקים - מבית קלייה גינץ, מאז 2005.",
  openGraph: {
    title: "בלוג קפה גינץ | מדריכים לקפה למשרד ולעסק",
    description: "מדריכים מקצועיים על מכונות קפה, פולי קפה ותקציב קפה לעסקים.",
    url: "https://www.gintz.co.il/blog",
  },
};

const posts = [
  {
    slug: "choosing-office-coffee-machine",
    icon: Coffee,
    category: "מכונות קפה",
    title: "איך לבחור מכונת קפה למשרד — המדריך המלא",
    excerpt:
      "מכונה אוטומטית או מחצה-אוטומטית? כמה עובדים מצדיקים איזה דגם? כל מה שצריך לדעת לפני שבוחרים מכונת קפה למשרד.",
    readTime: "7 דקות קריאה",
  },
  {
    slug: "office-coffee-budget-guide",
    icon: Wallet,
    category: "תקציב ועלויות",
    title: "כמה עולה קפה למשרד? מדריך תקציב מלא לעסקים",
    excerpt:
      "עלות מכונה, עלות פולים חודשית, ותחזוקה - פירוט מלא של תקציב הקפה השנתי למשרד, לפי גודל הצוות.",
    readTime: "6 דקות קריאה",
  },
  {
    slug: "beans-vs-capsules",
    icon: Scale,
    category: "פולי קפה",
    title: "פולים או קפסולות? מה עדיף לקפה במשרד",
    excerpt:
      "פולי קפה טריים מול קפסולות למשרד - השוואת עלות, איכות, נוחות והשפעה סביבתית.",
    readTime: "5 דקות קריאה",
  },
  {
    slug: "how-much-coffee-does-an-office-need",
    icon: Calculator,
    category: "תכנון ותקציב",
    title: "כמה קפה (פולים) צריך למשרד בחודש?",
    excerpt:
      "מדריך כמויות פולי קפה למשרד - כמה קילוגרם בחודש לפי מספר עובדים.",
    readTime: "4 דקות קריאה",
  },
  {
    slug: "matching-coffee-to-taste",
    icon: Heart,
    category: "בית הקלייה שלנו",
    title: "איך מתאימים קפה לטעם של העובדים",
    excerpt:
      "הסבר על תהליך התאמת רמת קלייה ובלנד לטעם הספציפי של הצוות שלכם.",
    readTime: "5 דקות קריאה",
  },
];

export default function BlogPage() {
  return (
    <>
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)" }}
        aria-labelledby="blog-heading"
      >
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-gold/80 text-sm font-montserrat tracking-widest uppercase mb-3">
            Gintz Coffee · Blog
          </p>
          <h1 id="blog-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            הבלוג של קפה גינץ
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            מדריכים מקצועיים על קפה למשרד ולעסק — ידע מבית קלייה, מאז 2005.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {posts.map(({ slug, icon: Icon, category, title, excerpt, readTime }) => (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/15 text-gold-dark mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold text-gold-dark uppercase tracking-wide mb-2">
                  {category}
                </span>
                <h2 className="text-xl font-bold text-brown mb-2 group-hover:text-gold-dark transition-colors">
                  {title}
                </h2>
                <p className="text-brown/65 text-sm leading-relaxed mb-4 flex-1">{excerpt}</p>
                <span className="text-xs text-brown/45">{readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
