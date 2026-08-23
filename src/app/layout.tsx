import type { Metadata } from "next";
import Script from "next/script";
import { Heebo, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/layout/SiteShell";
import { CartProvider } from "@/lib/cart";
import { GA_MEASUREMENT_ID, GA_MEASUREMENT_ID_SECONDARY, GOOGLE_ADS_ID } from "@/lib/gtag";

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
    default: "קפה גינץ | בית קלייה לקפה ופתרונות קפה לעסקים",
    template: "%s | קפה גינץ",
  },
  description:
    "מתאימים את הקפה לטעם העובדים שלכם, וקולים אותו בעצמנו בבית הקלייה. פתרונות קפה למשרד ולעסק: מכונת קפה, פולי קפה טריים וכוסות ממותגות. קפה לעסק בהתאמה אישית, אספקה עד 7 ימי עסקים.",
  keywords: [
    "פתרונות קפה למשרד",
    "פתרונות קפה לעסק",
    "קפה לעסק",
    "פולי קפה טריים",
    "קפה גינץ",
    "כוסות ממותגות",
    "קפה בני ברק",
  ],
  metadataBase: new URL("https://www.gintz.co.il"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "MjFd73aHbURjkw0Xnt3ShgLlkWr_q9PfTCpZ3JoNgow",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://www.gintz.co.il",
    siteName: "קפה גינץ",
    title: "קפה גינץ | פתרונות קפה למשרד ולעסק",
    description:
      "בית קלייה בוטיק מאז 2005. מכונת קפה למשרד, פולי קפה טריים וכוסות ממותגות. קפה לעסק בהתאמה אישית.",
    images: [{ url: "/logo.png", width: 1079, height: 1080, alt: "קפה גינץ" }],
  },
  twitter: {
    card: "summary",
    title: "קפה גינץ | פתרונות קפה למשרד ולעסק",
    description:
      "בית קלייה בוטיק מאז 2005. מכונת קפה למשרד, פולי קפה טריים וכוסות ממותגות.",
    images: ["/logo.png"],
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
        {/* Google tag (gtag.js) — GA4 + Google Ads */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            gtag('config', '${GA_MEASUREMENT_ID_SECONDARY}');
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
        {/* Meta Pixel — גינץ פתרונות קפה */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2239208016131254');
            fbq('track', 'PageView');
          `}
        </Script>
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
              email: "salesaspagil@gmail.com",
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
                "https://www.facebook.com/gintzcoffee",
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
        <CartProvider>
          <SiteShell>{children}</SiteShell>
        </CartProvider>
      </body>
    </html>
  );
}
