import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/site/", "/image/users/*/ftp/"],
    },
    sitemap: "https://www.gintz.co.il/sitemap.xml",
  };
}
