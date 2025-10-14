import { MetadataRoute } from 'next'
import { getAllTutorials } from '../content/tutorials'
import { getAllArticles } from '../content/articles'
import { getAllResearchArticles } from '../content/research'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sajedar.com'
  const now = new Date().toISOString()
  
  // Static pages with priorities and change frequencies
  const staticPages = [
    { 
      url: `${base}/`, 
      priority: 1.0, 
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    { 
      url: `${base}/demo`, 
      priority: 0.9, 
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    { 
      url: `${base}/tutorials`, 
      priority: 0.9, 
      changeFrequency: 'daily' as const,
      lastModified: now
    },
    { 
      url: `${base}/research`, 
      priority: 0.8, 
      changeFrequency: 'monthly' as const,
      lastModified: now
    },
    { 
      url: `${base}/case-studies`, 
      priority: 0.85, 
      changeFrequency: 'monthly' as const,
      lastModified: now
    },
    { 
      url: `${base}/articles`, 
      priority: 0.85, 
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    { 
      url: `${base}/forum`, 
      priority: 0.8, 
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    { 
      url: `${base}/developer`, 
      priority: 0.8, 
      changeFrequency: 'monthly' as const,
      lastModified: now
    },
    { 
      url: `${base}/Contact`, 
      priority: 0.8, 
      changeFrequency: 'monthly' as const,
      lastModified: now
    },
    { 
      url: `${base}/facebook-messenger`, 
      priority: 0.9, 
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    { 
      url: `${base}/facebook-messenger-chatbot-tutorial`, 
      priority: 0.95, 
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    { 
      url: `${base}/PrivacyPolicy`, 
      priority: 0.5, 
      changeFrequency: 'yearly' as const,
      lastModified: now
    },
    { 
      url: `${base}/TermsOfService`, 
      priority: 0.5, 
      changeFrequency: 'yearly' as const,
      lastModified: now
    },
  ]

  // Tutorial pages with dynamic priorities
  const tutorialPages = getAllTutorials().map((tutorial) => {
    const priority = tutorial.featured ? 0.9 : 0.8;
    const changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']> = tutorial.updatedAt !== tutorial.publishedAt ? 'monthly' : 'yearly';
    
    return {
      url: `${base}/tutorials/${tutorial.slug}`,
      lastModified: tutorial.updatedAt,
      changeFrequency,
      priority,
    } as const;
  });

  // Article pages
  const articlePages = getAllArticles().map((article) => ({
    url: `${base}/articles/${article.slug}`,
    lastModified: article.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Research pages
  const researchPages = getAllResearchArticles().map((article) => ({
    url: `${base}/research/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Category pages
  const categoryPages = [
    { 
      url: `${base}/tutorials/category/ai-chatbots`, 
      priority: 0.8, 
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    { 
      url: `${base}/tutorials/category/facebook-messenger`, 
      priority: 0.8, 
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    { 
      url: `${base}/tutorials/category/automation`, 
      priority: 0.8, 
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    { 
      url: `${base}/tutorials/category/n8n-workflows`, 
      priority: 0.8, 
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    { 
      url: `${base}/tutorials/category/whatsapp-bots`, 
      priority: 0.8, 
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    { 
      url: `${base}/tutorials/category/voice-assistants`, 
      priority: 0.8, 
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
  ];

  return [
    ...staticPages,
    ...tutorialPages,
    ...articlePages,
    ...researchPages,
    ...categoryPages,
  ];
}
