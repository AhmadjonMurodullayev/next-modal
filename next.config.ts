import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.kun.uz",
        port: "",
      },
    ],
  },
};

export default nextConfig;
