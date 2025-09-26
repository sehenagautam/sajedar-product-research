import { Tutorial, TutorialCategory } from '../../types/tutorial';
import { buildingFirstAiChatbot } from './building-first-ai-chatbot-openai';
import { facebookMessengerBot } from './facebook-messenger-bot-development';
import { advancedChatbotMemoryTutorial } from './advanced-chatbot-memory-context-management';
import { n8nWorkflowAutomation } from './n8n-workflow-automation-business';
import { whatsappBusinessApi } from './whatsapp-business-api-integration';
import { voiceEnabledAssistants } from './building-voice-enabled-ai-assistants';

export const categories: TutorialCategory[] = [
  {
    id: 'ai-chatbots',
    name: 'AI Chatbots',
    slug: 'ai-chatbots',
    description: 'Learn to build intelligent chatbots with AI',
    icon: '🤖'
  },
  {
    id: 'facebook-messenger',
    name: 'Facebook Messenger',
    slug: 'facebook-messenger',
    description: 'Facebook Messenger bot development',
    icon: '💬'
  },
  {
    id: 'automation',
    name: 'Automation',
    slug: 'automation',
    description: 'Business process automation',
    icon: '⚡'
  },
  {
    id: 'n8n-workflows',
    name: 'n8n Workflows',
    slug: 'n8n-workflows',
    description: 'Visual workflow automation',
    icon: '🔧'
  },
  {
    id: 'whatsapp-bots',
    name: 'WhatsApp Bots',
    slug: 'whatsapp-bots',
    description: 'WhatsApp Business API integration',
    icon: '📱'
  },
  {
    id: 'voice-assistants',
    name: 'Voice Assistants',
    slug: 'voice-assistants',
    description: 'Voice-enabled AI assistants',
    icon: '🎤'
  }
];

export const tutorials: Tutorial[] = [
  buildingFirstAiChatbot,
  facebookMessengerBot,
  n8nWorkflowAutomation,
  whatsappBusinessApi,
  voiceEnabledAssistants,
  advancedChatbotMemoryTutorial
];

export function getTutorialBySlug(slug: string): Tutorial | undefined {
  return tutorials.find(tutorial => tutorial.slug === slug);
}

export function getTutorialsByCategory(category: string): Tutorial[] {
  return tutorials.filter(tutorial => tutorial.category === category);
}

export function getFeaturedTutorials(): Tutorial[] {
  return tutorials.filter(tutorial => tutorial.featured);
}

export function getAllTutorials(): Tutorial[] {
  return tutorials.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

// Import new tutorials
import { chatbotAnalyticsTutorial } from './chatbot-analytics-tracking';
import { chatbotSecurityTutorial } from './chatbot-security-best-practices';
import { chatbotDeploymentTutorial } from './chatbot-deployment-production';
import { chatbotNlpTutorial } from './chatbot-nlp-advanced';

// Add new categories
export const categories: TutorialCategory[] = [
  {
    id: 'ai-chatbots',
    name: 'AI Chatbots',
    slug: 'ai-chatbots',
    description: 'Learn to build intelligent chatbots with AI',
    icon: '🤖'
  },
  {
    id: 'facebook-messenger',
    name: 'Facebook Messenger',
    slug: 'facebook-messenger',
    description: 'Facebook Messenger bot development',
    icon: '💬'
  },
  {
    id: 'automation',
    name: 'Automation',
    slug: 'automation',
    description: 'Business process automation',
    icon: '⚡'
  },
  {
    id: 'n8n-workflows',
    name: 'n8n Workflows',
    slug: 'n8n-workflows',
    description: 'Visual workflow automation',
    icon: '🔧'
  },
  {
    id: 'whatsapp-bots',
    name: 'WhatsApp Bots',
    slug: 'whatsapp-bots',
    description: 'WhatsApp Business API integration',
    icon: '📱'
  },
  {
    id: 'voice-assistants',
    name: 'Voice Assistants',
    slug: 'voice-assistants',
    description: 'Voice-enabled AI assistants',
    icon: '🎤'
  },
  {
    id: 'analytics',
    name: 'Analytics',
    slug: 'analytics',
    description: 'Chatbot analytics and tracking',
    icon: '📊'
  },
  {
    id: 'security',
    name: 'Security',
    slug: 'security',
    description: 'Chatbot security best practices',
    icon: '🔒'
  },
  {
    id: 'deployment',
    name: 'Deployment',
    slug: 'deployment',
    description: 'Production deployment and scaling',
    icon: '🚀'
  },
  {
    id: 'nlp',
    name: 'NLP',
    slug: 'nlp',
    description: 'Natural language processing',
    icon: '🧠'
  }
];

// Updated tutorials array with new tutorials
export const tutorials: Tutorial[] = [
  buildingFirstAiChatbot,
  facebookMessengerBot,
  n8nWorkflowAutomation,
  whatsappBusinessApi,
  voiceEnabledAssistants,
  advancedChatbotMemoryTutorial,
  chatbotAnalyticsTutorial,
  chatbotSecurityTutorial,
  chatbotDeploymentTutorial,
  chatbotNlpTutorial
];
