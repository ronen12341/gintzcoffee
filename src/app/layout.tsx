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
        {/* Captures ?gclid= from the landing URL into localStorage so a later
            order/lead submission can carry it — the only way to link a real
            order back to the ad click that produced it, since Google Ads
            reporting is aggregate-only and never exposes who clicked. Runs
            before the click can be lost to internal navigation. */}
        <Script id="gclid-capture" strategy="afterInteractive">
          {`
            (function(){
              try {
                var gclid = new URLSearchParams(window.location.search).get('gclid');
                if (gclid) {
                  localStorage.setItem('gintz-gclid', JSON.stringify({ value: gclid, ts: Date.now() }));
                }
              } catch (e) {}
            })();
          `}
        </Script>
        {/* Traffic-source capture (Google Ads / Meta / organic / AI / referral)
            — first + last landing kept 90 days; sent with orders and leads.
            See src/lib/attribution.ts. */}
        <Script id="attribution-capture" strategy="afterInteractive">
          {`(function(){
  var KEY = 'gintz-attribution';
  var MAX_AGE = 90 * 24 * 60 * 60 * 1000;
  var OWN = ["gintz.co.il","sumit.co.il","myofficeguy.com"];
  var PARAMS = ['gclid','gbraid','wbraid','fbclid','msclkid','ttclid','utm_source','utm_medium','utm_campaign','utm_content','utm_term','utm_id'];
  function host(u){ try { return new URL(u).hostname.replace(/^www\\./,'').toLowerCase(); } catch(e){ return ''; } }
  function isOwn(h){ if(!h) return false; for (var i=0;i<OWN.length;i++){ if (h===OWN[i] || h.slice(-(OWN[i].length+1))==='.'+OWN[i]) return true; } return false; }
  try {
    var q = new URLSearchParams(window.location.search), t = {}, has = false;
    for (var i=0;i<PARAMS.length;i++){ var v = q.get(PARAMS[i]); if (v){ t[PARAMS[i]] = v.slice(0,300); has = true; } }
    var ref = document.referrer || '';
    var rh = host(ref);
    if (ref && rh !== window.location.hostname.replace(/^www\\./,'') && !isOwn(rh)) { t.referrer = ref.slice(0,300); has = true; }
    if (has) {
      t.landing = (window.location.pathname + window.location.search).slice(0,300);
      t.ts = Date.now();
      var s = {}; try { s = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch(e) { s = {}; }
      if (!s.first || !s.first.ts || Date.now() - s.first.ts > MAX_AGE) s.first = t;
      s.last = t;
      localStorage.setItem(KEY, JSON.stringify(s));
    }
  } catch(e) {}
  window.getAttribution = function(){
    try {
      var s = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (!s || !s.last || Date.now() - s.last.ts > MAX_AGE) return undefined;
      return s;
    } catch(e) { return undefined; }
  };
})();`}
        </Script>
        {/* Phone + WhatsApp click tracking — B2B visitors call or WhatsApp
            instead of filling a form, and those leads were invisible in
            Google Ads. Fires a GA4 event AND the Google Ads conversion
            "קליק וואטסאפ/טלפון באתר" on any tel: or WhatsApp link.
            Capture phase + beacon so it survives the app/tab switch. */}
        <Script id="phone-click-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('click', function (e) {
              var a = e.target && e.target.closest && e.target.closest('a[href^="tel:"], a[href*="wa.me/"], a[href*="api.whatsapp.com"], a[href*="whatsapp://"]');
              if (!a || typeof gtag !== 'function') return;
              var href = a.getAttribute('href') || '';
              var isTel = href.indexOf('tel:') === 0;
              gtag('event', isTel ? 'phone_click' : 'whatsapp_click', {
                link_url: href.slice(0, 100),
                link_text: (a.textContent || '').trim().slice(0, 100)
              });
              gtag('event', 'conversion', {
                send_to: 'AW-766413183/wQNKCLTq5qsdEP-Suu0C',
                transport_type: 'beacon'
              });
            }, true);
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
              email: "sales@aspagil.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "הירקון 39",
                addressLocality: "בני ברק",
                addressCountry: "IL",
              },
              // Kept in sync with the Google Maps embed on /contact (the
              // actual pin for this address) — these two had drifted ~1.5km
              // apart, which could send a customer trusting the search-
              // result map pin to the wrong location in Bnei Brak.
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.0968866,
                longitude: 34.8281619,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "09:00",
                  closes: "16:00",
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
