/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // --- הפניות 301 מהאתר הישן (עמודי .html שעדיין מאונדקסים בגוגל) ---
      { source: "/About.html", destination: "/", permanent: true },
      { source: "/%D7%A7%D7%A4%D7%94%D7%9C%D7%A2%D7%A1%D7%A7%D7%99%D7%9D.html", destination: "/business-solutions", permanent: true },
      { source: "/%D7%A7%D7%A4%D7%94%D7%9C%D7%A2%D7%A1%D7%A7%D7%99%D7%9D-1.html", destination: "/business-solutions", permanent: true },
      { source: "/JURA-WE8.html", destination: "/machines", permanent: true },
      { source: "/%D7%9E%D7%9B%D7%95%D7%A0%D7%95%D7%AA-%D7%A7%D7%A4%D7%94-%D7%A8%D7%90%D7%A9-%D7%90%D7%97%D7%93.html", destination: "/machines", permanent: true },
      { source: "/%D7%9E%D7%9B%D7%95%D7%A0%D7%95%D7%AA-%D7%90%D7%A1%D7%A4%D7%A8%D7%A1%D7%95.html", destination: "/machines", permanent: true },
      // --- הפניות 301 ממוקדות לפי דוח Search Console (31 עמודים שהיו מופנים לדף הבית) ---
      { source: "/%D7%9E%D7%9B%D7%95%D7%A0%D7%AA-NIVONA-520-%D7%A2%D7%9D-%D7%A7%D7%A4%D7%95%D7%A6-%D7%99%D7%A0%D7%98%D7%95%D7%A8-%D7%9E%D7%95%D7%91%D7%A0%D7%94-3-%D7%A7%D7%99%D7%9C%D7%95%D7%92%D7%A8%D7%9D-%D7%A7%D7%A4%D7%94-%D7%91%D7%90%D7%A1%D7%A4%D7%A7%D7%94-%D7%97%D7%95%D7%93%D7%A9%D7%99%D7%AA-%D7%A7%D7%91%D7%95%D7%A2%D7%94-%D7%95%D7%94%D7%9E%D7%9B%D7%95%D7%A0%D7%94-%D7%A9%D7%9C%D7%9B%D7%9D-%D7%9C%D7%AA%D7%9E%D7%99%D7%93.html", destination: "/business-solutions", permanent: true },
      { source: "/1-%D7%A7%D7%99%D7%9C%D7%95%D7%92%D7%A8%D7%9D-%D7%A7%D7%A4%D7%94-%D7%9E%D7%9B%D7%95%D7%A0%D7%AA-%D7%90%D7%A1%D7%A4%D7%A8%D7%A1%D7%95-%D7%9E%D7%A1%D7%95%D7%92-%D7%A4%D7%A1%D7%A7%D7%9C-%D7%9E%D7%97%D7%99%D7%A8-220-%D7%A9-%D7%97-%D7%9C%D7%97%D7%95%D7%93%D7%A9.html", destination: "/business-solutions", permanent: true },
      { source: "/500-%D7%92%D7%A8%D7%9D-%D7%A7%D7%A4%D7%94-%D7%9E%D7%9B%D7%95%D7%A0%D7%AA-%D7%90%D7%A1%D7%A4%D7%A8%D7%A1%D7%95-%D7%9E%D7%A1%D7%95%D7%92-%D7%A4%D7%A1%D7%A7%D7%9C-%D7%A2%D7%9D-%D7%9E%D7%A7%D7%A6%D7%99%D7%A3-%D7%97%D7%99%D7%A6%D7%95%D7%A0%D7%99-%D7%9E%D7%97%D7%99%D7%A8-210-%D7%A9-%D7%97-%D7%9C%D7%97%D7%95%D7%93%D7%A9.html", destination: "/business-solutions", permanent: true },
      { source: "/%D7%9E%D7%9B%D7%95%D7%A0%D7%94-%D7%9C%D7%90-%D7%A9%D7%9C%D7%99-%D7%9B%D7%9E%D7%95%D7%AA-%D7%9B%D7%95%D7%A1%D7%95%D7%AA.html", destination: "/business-solutions", permanent: true },
      { source: "/%D7%9E%D7%9B%D7%95%D7%A0%D7%94-%D7%A9%D7%9C%D7%99.html", destination: "/business-solutions", permanent: true },
      { source: "/3-%D7%A7%D7%99%D7%9C%D7%95%D7%92%D7%A8%D7%9D-%D7%A7%D7%A4%D7%94-%D7%9E%D7%9B%D7%95%D7%A0%D7%AA-%D7%90%D7%A1%D7%A4%D7%A8%D7%A1%D7%95-%D7%9E%D7%A1%D7%95%D7%92-%D7%A4%D7%A1%D7%A7%D7%9C-%D7%9E%D7%97%D7%99%D7%A8-390-%D7%A9-%D7%97-%D7%9C%D7%97%D7%95%D7%93%D7%A9.html", destination: "/business-solutions", permanent: true },
      { source: "/50-%D7%A2%D7%95%D7%91%D7%93%D7%99%D7%9D-8-%D7%A7%D7%99%D7%9C%D7%95-1030.html", destination: "/business-solutions", permanent: true },
      { source: "/%D7%9E%D7%9B%D7%95%D7%A0%D7%AA-%D7%A7%D7%A4%D7%94-%D7%99%D7%95%D7%A8%D7%94-ENA-8-%D7%93%D7%95%D7%A8-3.html", destination: "/machines/machine-ena8", permanent: true },
      { source: "/%D7%AA%D7%A7%D7%A0%D7%95%D7%9F.html", destination: "/", permanent: true },
      { source: "/%D7%9B%D7%9E%D7%95%D7%AA-%D7%9B%D7%95%D7%A1%D7%95%D7%AA.html", destination: "/cups", permanent: true },
      { source: "/%D7%9E%D7%A6%D7%99%D7%90%D7%95%D7%9F-%D7%9E%D7%9B%D7%95%D7%A0%D7%95%D7%AA-%D7%9E%D7%A9%D7%95%D7%9E%D7%A9%D7%95%D7%AA.html", destination: "/bargains", permanent: true },
      { source: "/%D7%91%D7%A8%D7%96%D7%99%D7%9C-%D7%A1%D7%A8%D7%93%D7%95-100-%D7%A2%D7%A8%D7%91%D7%99%D7%A7%D7%94-500-%D7%92%D7%A8%D7%9D-Brazil-Cerado.html", destination: "/beans/brazil-cerrado", permanent: true },
      { source: "/ECM-Barista-professional-coffee-machine-%D7%90%D7%99-%D7%A1%D7%99-%D7%90%D7%9D-%D7%91%D7%90%D7%A8%D7%99%D7%A1%D7%98%D7%94-%D7%9E%D7%9B%D7%95%D7%A0%D7%AA-%D7%A7%D7%A4%D7%94-%D7%9E%D7%A7%D7%A6%D7%95%D7%A2%D7%99%D7%AA.html", destination: "/machines", permanent: true },
      { source: "/3-%D7%A7%D7%99%D7%9C%D7%95%D7%92%D7%A8%D7%9D-%D7%A7%D7%A4%D7%94-%D7%9E%D7%9B%D7%95%D7%A0%D7%AA-%D7%90%D7%A1%D7%A4%D7%A8%D7%A1%D7%95-%D7%9E%D7%A1%D7%95%D7%92-%D7%A4%D7%A1%D7%A7%D7%9C-%D7%A2%D7%9D-%D7%9E%D7%A7%D7%A6%D7%99%D7%A3-%D7%97%D7%99%D7%A6%D7%95%D7%A0%D7%99-%D7%9E%D7%97%D7%99%D7%A8-410-%D7%A9-%D7%97-%D7%9C%D7%97%D7%95%D7%93%D7%A9.html", destination: "/business-solutions", permanent: true },
      { source: "/1-5.html", destination: "/", permanent: true },
      { source: "/%D7%9E%D7%91%D7%A6%D7%A2-300-%D7%A7%D7%A4%D7%A1%D7%95%D7%9C%D7%95%D7%AA.html", destination: "/", permanent: true },
      { source: "/%D7%A7%D7%A4%D7%94-Silver-%D7%9E%D7%A9%D7%A7%D7%9C-500-%D7%92%D7%A8%D7%9D.html", destination: "/beans/silver-blend", permanent: true },
      { source: "/%D7%A7%D7%95%D7%9C%D7%95%D7%9E%D7%91%D7%99%D7%94-Colombia-%D7%A2%D7%A8%D7%91%D7%99%D7%A7%D7%94-100-500-%D7%92%D7%A8%D7%9D.html", destination: "/beans/colombia-supremo", permanent: true },
      { source: "/%D7%99%D7%93%D7%A0%D7%99%D7%AA-1.html", destination: "/", permanent: true },
      { source: "/%D7%91%D7%A8%D7%96%D7%99%D7%9C-%D7%A1%D7%A8%D7%93%D7%95-100-%D7%A2%D7%A8%D7%91%D7%99%D7%A7%D7%94-Brazil-Cerado.html", destination: "/beans/brazil-cerrado", permanent: true },
      { source: "/%D7%9E%D7%9B%D7%95%D7%A0%D7%95%D7%AA-%D7%A7%D7%A4%D7%94-%D7%A9%D7%A0%D7%99-%D7%A8%D7%90%D7%A9%D7%99%D7%9D.html", destination: "/machines", permanent: true },
      { source: "/%D7%9E%D7%9B%D7%95%D7%A0%D7%AA-%D7%90%D7%A1%D7%A4%D7%A8%D7%A1%D7%95.html", destination: "/machines", permanent: true },
      { source: "/%D7%A7%D7%A4%D7%94-Gold-%D7%9E%D7%A9%D7%A7%D7%9C-500-%D7%92%D7%A8%D7%9D.html", destination: "/beans/espresso-blend", permanent: true },
      { source: "/1-5-%D7%A7%D7%99%D7%9C%D7%95%D7%92%D7%A8%D7%9D-%D7%A7%D7%A4%D7%94-%D7%9E%D7%9B%D7%95%D7%A0%D7%AA-%D7%90%D7%A1%D7%A4%D7%A8%D7%A1%D7%95-%D7%9E%D7%A1%D7%95%D7%92-%D7%A4%D7%A1%D7%A7%D7%9C-%D7%9E%D7%97%D7%99%D7%A8-260-%D7%A9-%D7%97-%D7%9C%D7%97%D7%95%D7%93%D7%A9.html", destination: "/business-solutions", permanent: true },
      { source: "/%D7%9B%D7%95%D7%A1%D7%95%D7%AA-%D7%A0%D7%99%D7%99%D7%A8-%D7%94%D7%9E%D7%A9%D7%9A.html", destination: "/cups", permanent: true },
      { source: "/%D7%9E%D7%9B%D7%95%D7%A0%D7%AA-%D7%90%D7%A1%D7%A4%D7%A8%D7%A1%D7%95-%D7%A1%D7%95%D7%A4%D7%A8-%D7%90%D7%95%D7%98%D7%95%D7%9E%D7%98%D7%99%D7%AA-510-%D7%A9%D7%A7%D7%9C%D7%99%D7%9D-%D7%9C%D7%97%D7%95%D7%93%D7%A9-%D7%A2%D7%91%D7%95%D7%A8-%D7%A7%D7%A4%D7%94-%D7%9C%D7%A9%D7%A0%D7%94-%D7%95%D7%9E%D7%9B%D7%95%D7%A0%D7%94.html", destination: "/business-solutions", permanent: true },
      { source: "/%D7%A7%D7%95%D7%A1%D7%98%D7%94-%D7%A8%D7%99%D7%A7%D7%94-Costa-Rice-%D7%A2%D7%A8%D7%91%D7%99%D7%A7%D7%94-100.html", destination: "/beans/costa-rica", permanent: true },
      { source: "/2000-%D7%9B%D7%95%D7%A1%D7%95%D7%AA-%D7%A0%D7%99%D7%99%D7%A8-%D7%A2%D7%9D-%D7%94%D7%93%D7%A4%D7%A1%D7%94.html", destination: "/cups", permanent: true },
      { source: "/%D7%94%D7%90%D7%95%D7%A1-%D7%91%D7%9C%D7%A0%D7%93-House-Blend.html", destination: "/beans/single-origin-ethiopia", permanent: true },
      { source: "/Profitec-PROT64-%D7%9E%D7%98%D7%97%D7%A0%D7%AA-%D7%A7%D7%A4%D7%94-%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%98%D7%A7.html", destination: "/machines", permanent: true },
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
