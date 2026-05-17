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
    default: "קפה גינץ | פתרונות קפה לעסקים",
    template: "%s | קפה גינץ",
  },
  description:
    "מכונות קפה לעסקים, פולי קפה איכותיים וכוסות ממותגות. קפה גינץ — שותף הקפה שלכם.",
  keywords: ["מכונות קפה", "פולי קפה", "כוסות ממותגות", "קפה לעסקים", "גינץ קפה"],
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
