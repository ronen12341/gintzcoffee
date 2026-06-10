"use client";

import { useEffect } from "react";

/**
 * Adds the `.in` class to `.x10p .reveal` elements as they scroll into view,
 * triggering the fade-up animation defined in the page's scoped CSS.
 * Renders nothing.
 */
export default function X10Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".x10p .reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
