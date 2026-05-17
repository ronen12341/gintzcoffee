/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ],
  },
};

export default nextConfig;
