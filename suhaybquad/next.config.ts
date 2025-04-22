import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['randomuser.me', 'images.unsplash.com'],
  },
  eslint: {
    // Autorise la production même en cas d’erreurs ESLint
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
