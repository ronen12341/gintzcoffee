import type { Metadata } from "next";

// עמוד ה-FAQ הוא client component ולכן לא יכול לייצא metadata בעצמו.
// ה-layout הזה נותן לו title, description ו-canonical משלו.
export const metadata: Metadata = {
  title: "שאלות נפוצות — פתרונות קפה למשרד ולעסק",
  description:
    "כל התשובות על פתרונות קפה למשרד: מכונות קפה לעסקים, פולי קפה טריים, אספקה, תחזוקה ושירות מבית קלייה גינץ.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "שאלות נפוצות — פתרונות קפה למשרד ולעסק | קפה גינץ",
    description:
      "כל התשובות על פתרונות קפה למשרד: מכונות קפה, פולי קפה טריים, אספקה, תחזוקה ושירות מבית קלייה גינץ.",
    url: "https://www.gintz.co.il/faq",
    type: "website",
    siteName: "קפה גינץ",
    locale: "he_IL",
    images: [{ url: "/logo.png", width: 1079, height: 1080, alt: "קפה גינץ" }],
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
