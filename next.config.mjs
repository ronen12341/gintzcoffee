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
      // רשת ביטחון: כל עמוד .html ישן אחר מופנה לדף הבית במקום 404
      { source: "/:path(.*\\.html)", destination: "/", permanent: true },
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
