/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["framer-motion"],
  trailingSlash: true,
  htmlLimitedBots: [
    /facebookexternalhit/i, 
    /twitterbot/i, 
    /linkedinbot/i, 
    /discordbot/i, 
    /whatsapp/i
  ],
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
