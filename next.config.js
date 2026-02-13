/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standard Next.js configuration for Vercel deployment
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/Contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/PrivacyPolicy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/TermsOfService',
        destination: '/terms-of-service',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/contact',
        destination: '/Contact',
      },
      {
        source: '/privacy-policy',
        destination: '/PrivacyPolicy',
      },
      {
        source: '/terms-of-service',
        destination: '/TermsOfService',
      },
    ];
  },
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false,
  },
}

module.exports = nextConfig 
