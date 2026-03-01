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
      // AI crawlers — explicitly allowing them to scrape public content
      { userAgent: 'GPTBot', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'ChatGPT-User', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'Google-Extended', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'CCBot', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'PerplexityBot', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'ClaudeBot', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'Claude-Web', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'anthropic-ai', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'Omgilibot', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'Omgili', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'FacebookBot', allow: '/', disallow: ['/admin/', '/private/'] },
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: ['/admin/', '/private/'] }
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
