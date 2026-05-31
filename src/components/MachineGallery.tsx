"use client";

import { useState } from "react";
import SmartImage from "@/components/SmartImage";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

interface MachineGalleryProps {
  images: string[];
  alt: string;
}

/**
 * Product image gallery: a large main image with clickable thumbnails below.
 * Falls back to a placeholder when no images are supplied. Single-image case
 * skips the thumbnail row entirely.
 */
export default function MachineGallery({ images, alt }: MachineGalleryProps) {
  const [selected, setSelected] = useState(0);

  if (images.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <SmartImagePlaceholder label="הוסף תמונה" width={600} height={500} />
      </div>
    );
  }

  const currentImage = images[selected] ?? images[0];

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative w-full aspect-square sm:aspect-[4/3] bg-white rounded-2xl shadow-md overflow-hidden">
        <SmartImage
          src={currentImage}
          alt={alt}
          fill
          className="object-contain p-4 sm:p-8"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setSelected(i)}
              aria-label={`תמונה ${i + 1}`}
              aria-pressed={i === selected}
              className={`relative aspect-square bg-white rounded-lg overflow-hidden border-2 transition-colors ${
                i === selected
                  ? "border-gold ring-1 ring-gold"
                  : "border-cream-dark hover:border-gold/60"
              }`}
            >
              <SmartImage
                src={src}
                alt=""
                fill
                className="object-contain p-1"
                sizes="120px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
