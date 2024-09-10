/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "iexypggcyfvjcyynccbi.supabase.co",
      "https://saran-farm-git-main-engineerpawanguptas-projects.vercel.app/",
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: "/_next/image",
    loader: "default",
  },
};

module.exports = nextConfig;
