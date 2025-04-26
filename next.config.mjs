/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["framer-motion"],
  // output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, 
    remotePatterns: []
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true
};

export default nextConfig;
