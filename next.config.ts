import type { NextConfig } from "next";

// Allow only the selected, licensed ZenCare hero photograph from Unsplash.
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-1769506551162-f56c343f0642",
      },
    ],
  },
};

export default nextConfig;
