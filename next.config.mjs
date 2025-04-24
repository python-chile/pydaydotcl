/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["framer-motion"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
