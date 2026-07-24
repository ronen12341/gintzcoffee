import type { Metadata } from "next";

// עמוד העגלה הוא client component ולכן לא יכול לייצא metadata בעצמו.
// עמוד טרנזקציוני — לא אמור להיות מאונדקס בגוגל.
export const metadata: Metadata = {
  title: "עגלת קניות",
  robots: { index: false, follow: false },
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
