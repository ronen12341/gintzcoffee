import type { Metadata } from "next";

// עמוד ה-checkout הוא client component ולכן לא יכול לייצא metadata בעצמו.
// עמוד טרנזקציוני — לא אמור להיות מאונדקס בגוגל.
export const metadata: Metadata = {
  title: "פרטי הזמנה",
  robots: { index: false, follow: false },
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
