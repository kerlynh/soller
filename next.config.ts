import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: { optimizeCss: true, cssChunking: "loose" },
};

export default nextConfig;
