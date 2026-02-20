import { Article } from '../../types/article';
import { ecommerceAiInsightsArticle } from './ecommerce-ai-insights';
import { benchmarkClaimsArticle } from './benchmark-claims-vs-routed-reality';
import { conversionRateImprovementMessengerArticle } from './conversion-rate-improvement-messenger';
import { messengerAbandonedCartRecoveryStatsArticle } from './messenger-abandoned-cart-recovery-stats';
import { chatbotProductRecommendationsExamplesArticle } from './chatbot-product-recommendations-examples';
import { messengerRemarketingStrategyArticle } from './messenger-remarketing-strategy';
import { conversationalCheckoutBenefitsArticle } from './conversational-checkout-benefits';

import { metaAdsFollowUpRoiArticle } from './meta-ads-follow-up-roi-statistics';
import { metaAdsResponseTimeArticle } from './meta-ads-response-time-engagement-data';
import { metaAdsAutomationStrategiesArticle } from './facebook-messenger-automation-strategies-for-agencies';

export const articles: Article[] = [
  metaAdsAutomationStrategiesArticle,
  metaAdsResponseTimeArticle,
  metaAdsFollowUpRoiArticle,
  conversationalCheckoutBenefitsArticle,
  messengerRemarketingStrategyArticle,
  chatbotProductRecommendationsExamplesArticle,
  messengerAbandonedCartRecoveryStatsArticle,
  conversionRateImprovementMessengerArticle,
  ecommerceAiInsightsArticle,
  benchmarkClaimsArticle,
];

export const getAllArticles = (): Article[] => articles;
export const getArticleBySlug = (slug: string): Article | undefined => articles.find(a => a.slug === slug);
export const getRecentArticles = (count = 6): Article[] => [...articles].sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)).slice(0, count);
export const getArticlesByTag = (tag: string): Article[] => articles.filter(a => a.tags.includes(tag));
