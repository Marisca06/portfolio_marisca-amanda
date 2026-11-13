"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroPhoto() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="heroPhoto">
      <div className="heroPhotoFrame">
        {!imgError && (
          <Image
            src="/images/marisca.jpg"
            alt="Marisca Amanda Hidayat"
            fill
            className="heroPhotoImg"
            priority
            onError={() => setImgError(true)}
          />
        )}
        {/* Placeholder tampil jika foto belum ada / gagal load
        <div className="heroPhotoPlaceholder">
          <span>RSA</span>
        </div> */}
      </div>
      {/* floating badge */}
      <div className="heroBadge">
        <span className="heroBadgeDot" />
        <span>Available for work</span>
      </div>
    </div>
  );
}

