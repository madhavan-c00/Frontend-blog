import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tech-stacks/:slug",
        destination: "/learn/:slug",
        permanent: true, // 301 redirect — good for SEO
      },
    ];
  },
};

export default nextConfig;
