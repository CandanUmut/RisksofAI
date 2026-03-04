import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set basePath to repo name for GitHub Pages
  // basePath: "/RisksofAI",
};

export default nextConfig;
