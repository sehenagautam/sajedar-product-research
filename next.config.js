/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standard Next.js configuration for Vercel deployment
  trailingSlash: false,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false,
  },
}

module.exports = nextConfig 