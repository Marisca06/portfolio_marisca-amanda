
"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface SectionImageProps {
  src?: string;
  alt: string;
  hint?: string;
  aspect?: "landscape" | "portrait" | "square";
  className?: string;
  fill?: boolean;
}

const aspectMap = {
  landscape: { height: 220 },
  portrait: { height: 320 },
  square: { height: 220 },
};

export default function SectionImage({
  src,
  alt,
  hint = "Tambahkan foto di /public/images/",
  aspect = "landscape",
  className = "",
  fill = false,
}: SectionImageProps) {
  const [error, setError] = useState(false);

  return (
    <div
      className={`sectionImgWrap sectionImg--${aspect} ${className}`}
      style={{
        height: fill ? "100%" : aspectMap[aspect].height,
        minHeight: fill ? 0 : undefined,
      }}
    >
      {src && !error ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          className="sectionImgEl"
          onError={() => setError(true)}
        />
      ) : (
        <div className="sectionImgPlaceholder">
          <ImageIcon size={28} className="sectionImgIcon" />
          <span className="sectionImgHint">{hint}</span>
        </div>
      )}
    </div>
  );
}
