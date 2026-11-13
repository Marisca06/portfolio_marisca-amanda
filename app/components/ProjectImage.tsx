"use client";

import Image from "next/image";
import { useState } from "react";
import { Laptop } from "lucide-react";

interface ProjectImageProps {
  src?: string;
  alt: string;
  category?: string;
}

export default function ProjectImage({ src, alt, category }: ProjectImageProps) {
  const [error, setError] = useState(false);

  return (
    <div className="homeProjectImageWrap">
      {src && !error ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="homeProjectImage"
          onError={() => setError(true)}
        />
      ) : (
        <div className="projectFallback">
          <div className="projectMockupBar">
            <span className="mockupDot red" />
            <span className="mockupDot yellow" />
            <span className="mockupDot green" />
            <span className="mockupTitle">{category || "Project Preview"}</span>
          </div>
          <div className="projectFallbackBody">
            <div className="projectFallbackIconWrap">
              <Laptop size={26} className="projectFallbackIcon" />
            </div>
            <span className="projectFallbackName">{alt}</span>
            <span className="projectFallbackHint">Replace the images in /public/images/</span>
          </div>
        </div>
      )}
    </div>
  );
}

