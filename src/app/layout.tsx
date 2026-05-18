import type { Metadata } from "next";
import { Heebo, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "קפה גינץ | פתרונות קפה למשרד ולעסק",
    template: "%s | קפה גינץ",
  },
  description:
    "קפה גינץ — בית קלייה בוטיק מאז 2005. פתרונות קפה למשרד ולעסק: מכונת קפה למשרד, פולי קפה טריים וכוסות ממותגות. קפה לעסק בהתאמה אישית, אספקה תוך 48 שעות.",
  keywords: [
    "פתרונות קפה למשרד",
    "פתרונות קפה לעסק",
    "קפה למשרד",
    "קפה לעסק",
    "מכונת קפה למשרד",
    "מכונות קפה לעסקים",
    "בית קלייה בוטיק",
    "פולי קפה טריים",
    "קפה גינץ",
    "כוסות ממותגות",
    "קפה בני ברק",
  ],
  metadataBase: new URL("https://www.gintz.co.il"),
  alternates: {
    canonical: "https://www.gintz.co.il",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://www.gintz.co.il",
    siteName: "קפה גינץ",
    title: "קפה גינץ | פתרונות קפה למשרד ולעסק",
    description:
      "בית קלייה בוטיק מאז 2005. מכונת קפה למשרד, פולי קפה טריים וכוסות ממותגות. קפה לעסק בהתאמה אישית.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${playfair.variable} ${montserrat.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "קפה גינץ",
              alternateName: "Gintz Coffee",
              description:
                "בית קלייה בוטיק מאז 2005. פתרונות קפה למשרד ולעסק: מכונות קפה, פולי קפה טריים וכוסות ממותגות בהתאמה אישית.",
              url: "https://www.gintz.co.il",
              telephone: "+97239600550",
              email: "sales@aspagil.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "הירקון 39",
                addressLocality: "בני ברק",
                addressCountry: "IL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.0853,
                longitude: 34.8337,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
              priceRange: "$$",
              servesCuisine: "קפה",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "פתרונות קפה לעסקים",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "מכונת קפה למשרד" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "פולי קפה טריים לעסקים" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "כוסות ממותגות לעסקים" } },
                ],
              },
              sameAs: [
                "https://wa.me/97239600550",
                "https://www.facebook.com/share/1BocDeD4Xd/",
                "https://www.instagram.com/gintzcoffee",
              ],
            }),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-50 focus:bg-gold focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          דלג לתוכן הראשי
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
