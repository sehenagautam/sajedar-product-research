import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = 'https://sajedar.com'
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/private/'
        ]
      },
      // Major search engines
      { userAgent: 'Googlebot', allow: '/', disallow: ['/admin/','/private/'] },
      { userAgent: 'Bingbot', allow: '/', disallow: ['/admin/','/private/'] },
      { userAgent: 'DuckDuckBot', allow: '/', disallow: ['/admin/','/private/'] },
      // AI crawlers — explicitly allowed
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' }
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
