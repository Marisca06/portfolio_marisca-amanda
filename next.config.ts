import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Izinkan gambar lokal dari /public/images
    unoptimized: false,
  },
};
export default nextConfig;
