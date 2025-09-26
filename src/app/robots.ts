import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = 'https://sajedar.com'
  return {
    rules: [
      { 
        userAgent: '*', 
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '*.json$',
          '/search?*',
          '/tutorials?*tag=*',
          '/tutorials?*category=*'
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/'
        ]
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/'
        ]
      }
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
