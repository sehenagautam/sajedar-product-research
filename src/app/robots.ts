import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = 'https://sajedar.com'
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/private/']
      },
      // Major search engines
      { userAgent: 'Googlebot', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'Bingbot', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'DuckDuckBot', allow: '/', disallow: ['/admin/', '/private/'] },
      // AI crawlers — now restricted from admin/private too
      { userAgent: 'GPTBot', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'Google-Extended', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'CCBot', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'PerplexityBot', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'ClaudeBot', allow: '/', disallow: ['/admin/', '/private/'] }
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
