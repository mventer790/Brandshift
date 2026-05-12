import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheLife: {
    default: {
      stale: 300,
      revalidate: 900,
      expire: 0xfffffffe,
    },
  },
};

export default nextConfig;
