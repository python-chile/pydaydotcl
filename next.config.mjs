/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["framer-motion"],
  trailingSlash: true,
  htmlLimitedBots:
    '[Ff]acebookexternalhit|[Tt]witterbot|[Ll]inkedinbot|[Dd]iscordbot|[Ww]hatsapp',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
    ],
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 86400,
    unoptimized: false,
  },
};

export default nextConfig;
