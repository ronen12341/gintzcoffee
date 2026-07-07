import type { Metadata } from "next";

// עמוד ה-FAQ הוא client component ולכן לא יכול לייצא metadata בעצמו.
// ה-layout הזה נותן לו title, description ו-canonical משלו.
export const metadata: Metadata = {
  title: "שאלות נפוצות — פתרונות קפה למשרד ולעסק",
  description:
    "כל התשובות על פתרונות קפה למשרד: מכונות קפה לעסקים, פולי קפה טריים, אספקה, תחזוקה ושירות מבית קלייה גינץ.",
  alternates: { canonical: "/faq" },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
