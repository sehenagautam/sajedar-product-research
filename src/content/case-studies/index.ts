import { ecommerceChatbotCaseStudy } from './ecommerce-chatbot-case-study';
import { healthcareAIAssistantCaseStudy } from './healthcare-ai-assistant-case-study';
import { hospitalityAutomationCaseStudy } from './hospitality-automation-case-study';
import { ashwiFurnituresCaseStudy } from './ashwi-furnitures-case-study';
import { conversationalAiNepalEcosystemCaseStudy } from './conversational-ai-nepal-ecosystem-2025';

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  industry: string;
  duration: string;
  results: string[];
  component: React.ComponentType;
  date: Date;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  conversationalAiNepalEcosystemCaseStudy,
  ashwiFurnituresCaseStudy,
  ecommerceChatbotCaseStudy,
  healthcareAIAssistantCaseStudy,
  hospitalityAutomationCaseStudy,
];

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(caseStudy => caseStudy.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter(caseStudy => caseStudy.featured);
}
