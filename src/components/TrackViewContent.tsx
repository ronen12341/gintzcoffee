"use client";

import { useEffect } from "react";
import { trackViewContent } from "@/lib/gtag";

/** Fires the product-page ViewContent / view_item event once per mount. */
export default function TrackViewContent(props: {
  id: string;
  name: string;
  category: string;
  priceNumeric?: number;
}) {
  const { id, name, category, priceNumeric } = props;
  useEffect(() => {
    trackViewContent({ id, name, category, priceNumeric });
  }, [id, name, category, priceNumeric]);
  return null;
}
