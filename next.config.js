/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standard Next.js configuration for Vercel deployment
  trailingSlash: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: false,
  },

  async redirects() {
    return [
      {
        source: '/social-media-graphics',
        destination: '/creatives',
        permanent: true,
      },
      {
        source: '/motionmandu',
        destination: '/creatives',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 
