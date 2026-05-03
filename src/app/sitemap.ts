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
      url: `${base}/pricing`,
      priority: 0.9,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/services`,
      priority: 0.95,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/motionmandu`,
      priority: 0.9,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/meta-ads`,
      priority: 0.92,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/crm`,
      priority: 0.92,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/website`,
      priority: 0.92,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/sales-agent`,
      priority: 0.95,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/about`,
      priority: 0.75,
      changeFrequency: 'monthly' as const,
      lastModified: now
    },
    {
      url: `${base}/iq-test`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
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
      url: `${base}/chatbot-automation-agency`,
      priority: 0.95,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/messenger-marketing-agency`,
      priority: 0.9,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/ecommerce-chatbot-setup-service`,
      priority: 0.9,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/messenger-ecommerce-automation`,
      priority: 0.92,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/lead-qualification-chatbot`,
      priority: 0.86,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/abandoned-cart-messenger-automation`,
      priority: 0.86,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/product-recommendation-chatbot`,
      priority: 0.86,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/conversational-checkout-chatbot`,
      priority: 0.86,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/chatbot-for-clothing-brands`,
      priority: 0.88,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/chatbot-for-local-stores`,
      priority: 0.8,
      changeFrequency: 'monthly' as const,
      lastModified: now
    },
    {
      url: `${base}/chatbot-for-restaurants`,
      priority: 0.8,
      changeFrequency: 'monthly' as const,
      lastModified: now
    },
    {
      url: `${base}/chatbot-for-education`,
      priority: 0.8,
      changeFrequency: 'monthly' as const,
      lastModified: now
    },
    {
      url: `${base}/facebook-page-ai-sales-agent`,
      priority: 0.95,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/facebook-messenger-ai-sales-agent`,
      priority: 0.95,
      changeFrequency: 'weekly' as const,
      lastModified: now
    },
    {
      url: `${base}/ecommerce/facebook-sales-agent`,
      priority: 0.9,
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
      url: `${base}/contact`, 
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
      url: `${base}/privacy-policy`, 
      priority: 0.5, 
      changeFrequency: 'yearly' as const,
      lastModified: now
    },
    { 
      url: `${base}/terms-of-service`, 
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
