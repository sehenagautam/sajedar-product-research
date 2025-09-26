import React from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export function MetaTags({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/heroimage-robothand.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  nofollow = false
}: MetaTagsProps) {
  const robots = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ');

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="robots" content={robots} />
      <meta name="author" content="Sajedar" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#22C55E" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Sajedar" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@sajedar" />
      <meta name="twitter:creator" content="@sajedar" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Performance and Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </>
  );
}

interface TutorialMetaTagsProps {
  tutorial: {
    title: string;
    description: string;
    tags: string[];
    author: string;
    publishedAt: string;
    updatedAt: string;
    readTime: number;
    category: string;
  };
  canonical?: string;
}

export function TutorialMetaTags({ tutorial, canonical }: TutorialMetaTagsProps) {
  const title = `${tutorial.title} | Sajedar AI Chatbot Tutorials`;
  const description = `${tutorial.description} Learn ${tutorial.category} with our step-by-step guide. ${tutorial.readTime} minute read.`;
  
  return (
    <MetaTags
      title={title}
      description={description}
      keywords={[
        ...tutorial.tags,
        tutorial.category,
        'ai chatbot tutorial',
        'chatbot development',
        'artificial intelligence',
        'conversational ai'
      ]}
      canonical={canonical}
      ogType="article"
    />
  );
}

interface HomepageMetaTagsProps {
  canonical?: string;
}

export function HomepageMetaTags({ canonical }: HomepageMetaTagsProps) {
  return (
    <MetaTags
      title="Sajedar - Custom AI Chatbot Agency | Build Intelligent Chatbots"
      description="Sajedar is a hands-on agency specializing in designing, building, and supporting custom AI chatbots for ambitious brands. Get your AI chatbot today!"
      keywords={[
        'ai chatbot agency',
        'custom chatbot development',
        'facebook messenger bot',
        'whatsapp bot',
        'conversational ai',
        'chatbot automation',
        'ai chatbot builder',
        'intelligent chatbot',
        'business chatbot',
        'customer support chatbot'
      ]}
      canonical={canonical}
    />
  );
}

interface DemoMetaTagsProps {
  canonical?: string;
}

export function DemoMetaTags({ canonical }: DemoMetaTagsProps) {
  return (
    <MetaTags
      title="Live AI Chatbot Demos | Facebook Messenger Bot Examples"
      description="Try our live AI chatbot demos for Ashwi Furniture, Crackgineers, Health Bridge Hospital, and Deep Darshan Traders. See Facebook Messenger bots in action."
      keywords={[
        'ai chatbot demo',
        'facebook messenger bot demo',
        'live chatbot examples',
        'chatbot showcase',
        'messenger bot demo',
        'ai chatbot test',
        'conversational ai demo'
      ]}
      canonical={canonical}
    />
  );
}
