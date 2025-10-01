import { nepalSouthAsiaResearch } from './nepal-south-asia-conversational-ai-2025';
import { conversationalUxResearch } from './conversational-ux-best-practices-2025';

export const researchArticles = [
  nepalSouthAsiaResearch,
  conversationalUxResearch,
];

export function getResearchArticle(slug: string) {
  return researchArticles.find(article => article.slug === slug);
}

export function getAllResearchArticles() {
  return researchArticles;
}
