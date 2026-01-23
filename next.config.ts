import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/moen-flo-installation",
        destination: "/moen-flo-smart-water-monitor",
        permanent: true, // 308 permanent redirect
      },
      {
        source: "/hemel",
        destination: "/hemet",
        permanent: true, // 308 permanent redirect
      },
    ];
  },
};

export default nextConfig;
