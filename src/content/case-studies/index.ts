import { ecommerceChatbotCaseStudy } from './ecommerce-chatbot-case-study';
import { healthcareAIAssistantCaseStudy } from './healthcare-ai-assistant-case-study';
import { hospitalityAutomationCaseStudy } from './hospitality-automation-case-study';
import { ashwiFurnituresCaseStudy } from './ashwi-furnitures-case-study';
import { conversationalAiNepalEcosystemCaseStudy } from './conversational-ai-nepal-ecosystem-2025';
import { artisanAiVsSajedarStrategicAnalysis } from './artisan-ai-vs-sajedar-strategic-analysis';
import { sajedarVsSynapseTechnologiesComparison } from './sajedar-vs-synapse-technologies-comparison';
import { sajedarVsPlexBitInfosystemsComparison } from './sajedar-vs-plex-bit-infosystems-comparison';
import { sajedarVsCubitComparison } from './sajedar-vs-cubit-comparison';
import { sajedarVsAwecodeComparison } from './sajedar-vs-awecode-comparison';
import { sajedarVsHaptikComparison } from './sajedar-vs-haptik-comparison';
import { sajedarVsYellowAiComparison } from './sajedar-vs-yellow-ai-comparison';
import { sajedarVsLeenaAiComparison } from './sajedar-vs-leena-ai-comparison';
import { sajedarVsDriftComparison } from './sajedar-vs-drift-comparison';
import { sajedarVsCognigyComparison } from './sajedar-vs-cognigy-comparison';

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
  artisanAiVsSajedarStrategicAnalysis,
  sajedarVsSynapseTechnologiesComparison,
  sajedarVsPlexBitInfosystemsComparison,
  sajedarVsCubitComparison,
  sajedarVsAwecodeComparison,
  sajedarVsHaptikComparison,
  sajedarVsYellowAiComparison,
  sajedarVsLeenaAiComparison,
  sajedarVsDriftComparison,
  sajedarVsCognigyComparison,
  conversationalAiNepalEcosystemCaseStudy,
  ashwiFurnituresCaseStudy,
  ecommerceChatbotCaseStudy,
  healthcareAIAssistantCaseStudy,
  hospitalityAutomationCaseStudy,
];

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(caseStudy => caseStudy.slug === slug);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(caseStudy => caseStudy.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter(caseStudy => caseStudy.featured);
}
