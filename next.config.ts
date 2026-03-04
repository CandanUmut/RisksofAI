import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Required for GitHub Pages — repo is served from /RisksofAI/
  basePath: "/RisksofAI",
};

export default nextConfig;
