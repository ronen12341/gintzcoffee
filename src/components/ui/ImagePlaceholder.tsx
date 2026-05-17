import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ImagePlaceholder({
  label = "הוסף תמונה",
  width = 400,
  height = 300,
  className,
}: ImagePlaceholderProps) {
  const paddingPercent = (height / width) * 100;

  return (
    <div
      className={cn(
        "relative w-full bg-[#D1D5DB] border-2 border-dashed border-gray-400 rounded-lg overflow-hidden",
        className
      )}
      style={{ paddingBottom: `${paddingPercent}%` }}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <Camera className="w-10 h-10 text-gray-400" aria-hidden="true" />
        <span className="text-gray-500 text-sm font-heebo">{label}</span>
        <span className="text-gray-400 text-xs">
          {width} × {height}
        </span>
      </div>
    </div>
  );
}
