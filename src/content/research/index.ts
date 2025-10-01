import { nepalSouthAsiaResearch } from './nepal-south-asia-conversational-ai-2025';

export const researchArticles = [
  nepalSouthAsiaResearch,
];

export function getResearchArticle(slug: string) {
  return researchArticles.find(article => article.slug === slug);
}

export function getAllResearchArticles() {
  return researchArticles;
}
