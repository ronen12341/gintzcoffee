"use client";

import Image, { type ImageProps } from "next/image";

/**
 * Wrapper around next/image that automatically disables optimization for
 * inline data URLs (`data:image/...;base64,...`). Next.js's image optimizer
 * can't process data URLs, so we pass them through unoptimized while still
 * letting regular `/path` or `https://...` sources go through the normal
 * optimization pipeline.
 *
 * This keeps the upload flow simple — products can store either:
 *   - "/some-image.jpg" (legacy: file in public/)
 *   - "https://..." (external URL, must be in next.config remotePatterns)
 *   - "data:image/jpeg;base64,..." (new: image embedded directly in the JSON)
 * and everything renders correctly without per-call thinking.
 */
export default function SmartImage({ alt, src, unoptimized, ...rest }: ImageProps) {
  const isDataUrl = typeof src === "string" && src.startsWith("data:");
  return (
    <Image
      {...rest}
      src={src}
      alt={alt}
      unoptimized={isDataUrl || unoptimized}
    />
  );
}
