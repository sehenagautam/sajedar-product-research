import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = 'https://sajedar.com'
  const privatePaths = ['/admin/', '/private/', '/tools/', '/policy/', '/developer', '/demo-request', '/crm/demo']

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: privatePaths
      },
      // Major search engines
      { userAgent: 'Googlebot', allow: '/', disallow: privatePaths },
      { userAgent: 'Bingbot', allow: '/', disallow: privatePaths },
      { userAgent: 'DuckDuckBot', allow: '/', disallow: privatePaths },
      { userAgent: 'GPTBot', allow: '/', disallow: privatePaths },
      { userAgent: 'ChatGPT-User', allow: '/', disallow: privatePaths },
      { userAgent: 'Google-Extended', allow: '/', disallow: privatePaths },
      { userAgent: 'CCBot', allow: '/', disallow: privatePaths },
      { userAgent: 'PerplexityBot', allow: '/', disallow: privatePaths },
      { userAgent: 'ClaudeBot', allow: '/', disallow: privatePaths },
      { userAgent: 'Claude-Web', allow: '/', disallow: privatePaths },
      { userAgent: 'anthropic-ai', allow: '/', disallow: privatePaths },
      { userAgent: 'Omgilibot', allow: '/', disallow: privatePaths },
      { userAgent: 'Omgili', allow: '/', disallow: privatePaths },
      { userAgent: 'FacebookBot', allow: '/', disallow: privatePaths },
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: privatePaths }
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
