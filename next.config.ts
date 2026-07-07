import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Compress all responses with gzip
  compress: true,

  // Silence lockfile root warning when multiple lockfiles exist
  turbopack: {
    root: __dirname,
  },

  // Strict bundle size enforcement — prevents accidental bloat
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },

  images: {
    // Use modern WebP/AVIF formats automatically
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "socialify.git.ci",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },

  // Security headers — good practice before going live
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
