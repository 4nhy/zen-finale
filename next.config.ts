import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `output: "standalone"` is for Docker-style deploys. On Vercel it clashes
  // with Vercel's own build tracing under Next 16.3 (ENOENT on
  // .next/next-server.js.nft.json). Vercel handles output natively — leave
  // this off there.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "byhuy.b-cdn.net" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "github.com" },
    ],
  },
};

export default nextConfig;
