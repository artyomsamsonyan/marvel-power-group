import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [50, 75, 90, 100], // добавь эту строку
  },
};

export default nextConfig;