import { nepalSouthAsiaResearch } from './nepal-south-asia-conversational-ai-2025';
import { conversationalUxResearch } from './conversational-ux-best-practices-2025';
import { chatbotRoiResearch } from './chatbot-roi-definitive-guide-2025';
import { nepalConversationalAiResearchAgenda } from './nepal-conversational-ai-research-agenda-2025';
import { fortyAiChatbotProjectsNepal } from './40-ai-chatbot-projects-nepal-2025';

export const researchArticles = [
  fortyAiChatbotProjectsNepal,
  nepalConversationalAiResearchAgenda,
  nepalSouthAsiaResearch,
  conversationalUxResearch,
  chatbotRoiResearch,
];

export function getResearchArticle(slug: string) {
  return researchArticles.find(article => article.slug === slug);
}

export function getAllResearchArticles() {
  return researchArticles;
}
