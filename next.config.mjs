/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // --- הפניות 301 מהאתר הישן (עמודי .html שעדיין מאונדקסים בגוגל) ---
      { source: "/About.html", destination: "/", permanent: true },
      { source: "/קפהלעסקים.html", destination: "/business-solutions", permanent: true },
      { source: "/קפהלעסקים-1.html", destination: "/business-solutions", permanent: true },
      { source: "/JURA-WE8.html", destination: "/machines", permanent: true },
      { source: "/מכונות-קפה-ראש-אחד.html", destination: "/machines", permanent: true },
      { source: "/מכונות-אספרסו.html", destination: "/machines", permanent: true },
      // --- הפניות 301 ממוקדות לפי דוח Search Console (31 עמודים שהיו מופנים לדף הבית) ---
      { source: "/מכונת-NIVONA-520-עם-קפוצ-ינטור-מובנה-3-קילוגרם-קפה-באספקה-חודשית-קבועה-והמכונה-שלכם-לתמיד.html", destination: "/business-solutions", permanent: true },
      { source: "/1-קילוגרם-קפה-מכונת-אספרסו-מסוג-פסקל-מחיר-220-ש-ח-לחודש.html", destination: "/business-solutions", permanent: true },
      { source: "/500-גרם-קפה-מכונת-אספרסו-מסוג-פסקל-עם-מקציף-חיצוני-מחיר-210-ש-ח-לחודש.html", destination: "/business-solutions", permanent: true },
      { source: "/מכונה-לא-שלי-כמות-כוסות.html", destination: "/business-solutions", permanent: true },
      { source: "/מכונה-שלי.html", destination: "/business-solutions", permanent: true },
      { source: "/3-קילוגרם-קפה-מכונת-אספרסו-מסוג-פסקל-מחיר-390-ש-ח-לחודש.html", destination: "/business-solutions", permanent: true },
      { source: "/50-עובדים-8-קילו-1030.html", destination: "/business-solutions", permanent: true },
      { source: "/מכונת-קפה-יורה-ENA-8-דור-3.html", destination: "/machines/machine-ena8", permanent: true },
      { source: "/תקנון.html", destination: "/", permanent: true },
      { source: "/כמות-כוסות.html", destination: "/cups", permanent: true },
      { source: "/מציאון-מכונות-משומשות.html", destination: "/bargains", permanent: true },
      { source: "/ברזיל-סרדו-100-ערביקה-500-גרם-Brazil-Cerado.html", destination: "/beans/brazil-cerrado", permanent: true },
      { source: "/ECM-Barista-professional-coffee-machine-אי-סי-אם-באריסטה-מכונת-קפה-מקצועית.html", destination: "/machines", permanent: true },
      { source: "/3-קילוגרם-קפה-מכונת-אספרסו-מסוג-פסקל-עם-מקציף-חיצוני-מחיר-410-ש-ח-לחודש.html", destination: "/business-solutions", permanent: true },
      { source: "/1-5.html", destination: "/", permanent: true },
      { source: "/מבצע-300-קפסולות.html", destination: "/", permanent: true },
      { source: "/קפה-Silver-משקל-500-גרם.html", destination: "/beans/silver-blend", permanent: true },
      { source: "/קולומביה-Colombia-ערביקה-100-500-גרם.html", destination: "/beans/colombia-supremo", permanent: true },
      { source: "/ידנית-1.html", destination: "/", permanent: true },
      { source: "/ברזיל-סרדו-100-ערביקה-Brazil-Cerado.html", destination: "/beans/brazil-cerrado", permanent: true },
      { source: "/מכונות-קפה-שני-ראשים.html", destination: "/machines", permanent: true },
      { source: "/מכונת-אספרסו.html", destination: "/machines", permanent: true },
      { source: "/קפה-Gold-משקל-500-גרם.html", destination: "/beans/espresso-blend", permanent: true },
      { source: "/1-5-קילוגרם-קפה-מכונת-אספרסו-מסוג-פסקל-מחיר-260-ש-ח-לחודש.html", destination: "/business-solutions", permanent: true },
      { source: "/כוסות-נייר-המשך.html", destination: "/cups", permanent: true },
      { source: "/מכונת-אספרסו-סופר-אוטומטית-510-שקלים-לחודש-עבור-קפה-לשנה-ומכונה.html", destination: "/business-solutions", permanent: true },
      { source: "/קוסטה-ריקה-Costa-Rice-ערביקה-100.html", destination: "/beans/costa-rica", permanent: true },
      { source: "/2000-כוסות-נייר-עם-הדפסה.html", destination: "/cups", permanent: true },
      { source: "/האוס-בלנד-House-Blend.html", destination: "/beans/single-origin-ethiopia", permanent: true },
      { source: "/Profitec-PROT64-מטחנת-קפה-פרופיטק.html", destination: "/machines", permanent: true },
      // רשת ביטחון: כל עמוד .html ישן אחר מופנה לדף הבית במקום 404
      { source: "/:path((?!google).*\\.html)", destination: "/", permanent: true },
      // אותו דבר לשרידי האתר הישן עוד יותר (ASP) — searchShop.asp, showAlbumOrImage.asp וכו'
      { source: "/:path(.*\\.asp)", destination: "/", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.jura.com",
      },
      {
        protocol: "https",
        hostname: "us.jura.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.jura.co.il",
      },
      {
        protocol: "https",
        hostname: "www.coffeeman.co.il",
      },
      {
        protocol: "https",
        hostname: "www.gilcups.com",
      },
    ],
  },
};

export default nextConfig;
