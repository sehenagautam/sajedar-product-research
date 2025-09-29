import { Article } from '../../types/article';
import { digitalConciergeArticle } from './digital-concierge';
import { financeArticle } from './finance-ai-chatbots';
import { healthcareAiChatbotsArticle } from './healthcare-ai-chatbots';
import { travelAiInsightsArticle } from './travel-ai-insights';
import { ecommerceAiInsightsArticle } from './ecommerce-ai-insights';
import { realEstateAiInsightsArticle } from './real-estate-ai-insights';

export const articles: Article[] = [
  digitalConciergeArticle,
  financeArticle,
  healthcareAiChatbotsArticle,
  travelAiInsightsArticle,
  ecommerceAiInsightsArticle,
  realEstateAiInsightsArticle,
];

export const getAllArticles = (): Article[] => articles;
export const getArticleBySlug = (slug: string): Article | undefined => articles.find(a => a.slug === slug);
export const getRecentArticles = (count = 6): Article[] => [...articles].sort((a,b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)).slice(0, count);
export const getArticlesByTag = (tag: string): Article[] => articles.filter(a => a.tags.includes(tag));
