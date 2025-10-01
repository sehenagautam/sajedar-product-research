// Facebook Pixel Configuration
// Replace with your actual Facebook Pixel ID
export const FACEBOOK_PIXEL_ID = 'YOUR_PIXEL_ID_HERE';

// Event tracking configuration
export const PIXEL_EVENTS = {
  // Standard events
  PAGE_VIEW: 'PageView',
  LEAD: 'Lead',
  CONTACT: 'Contact',
  VIEW_CONTENT: 'ViewContent',
  COMPLETE_REGISTRATION: 'CompleteRegistration',
  INITIATE_CHECKOUT: 'InitiateCheckout',
  PURCHASE: 'Purchase',
  
  // Custom events for Sajedar
  DEMO_VIEW: 'DemoView',
  TUTORIAL_VIEW: 'TutorialView',
  ARTICLE_VIEW: 'ArticleView',
  DEVELOPER_APPLICATION: 'DeveloperApplication',
  WHATSAPP_CLICK: 'WhatsAppClick',
  LINKEDIN_CLICK: 'LinkedInClick',
  FACEBOOK_CLICK: 'FacebookClick',
  YOUTUBE_CLICK: 'YouTubeClick',
  TIKTOK_CLICK: 'TikTokClick',
  DISCORD_CLICK: 'DiscordClick'
} as const;

// Content categories for better tracking
export const CONTENT_CATEGORIES = {
  DEMO: 'Demo',
  TUTORIAL: 'Tutorial',
  ARTICLE: 'Article',
  CONTACT: 'Contact',
  SOCIAL: 'Social Media',
  COMMUNITY: 'Community'
} as const;

// Currency configuration
export const CURRENCY = 'USD';

// Default values for events
export const DEFAULT_VALUES = {
  LEAD_VALUE: 0,
  DEMO_VALUE: 0,
  TUTORIAL_VALUE: 0,
  ARTICLE_VALUE: 0
} as const;
