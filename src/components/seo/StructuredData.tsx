import React from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface TutorialStructuredDataProps {
  tutorial: {
    title: string;
    description: string;
    author: string;
    publishedAt: string;
    updatedAt: string;
    tags: string[];
    category: string;
    readTime: number;
  };
  breadcrumbs?: BreadcrumbItem[];
}

export function TutorialStructuredData({ tutorial, breadcrumbs = [] }: TutorialStructuredDataProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://sajedar.com${item.url}`
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": tutorial.title,
    "description": tutorial.description,
    "author": {
      "@type": "Organization",
      "name": tutorial.author,
      "url": "https://sajedar.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sajedar",
      "url": "https://sajedar.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sajedar.com/favicon.ico"
      }
    },
    "datePublished": tutorial.publishedAt,
    "dateModified": tutorial.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://sajedar.com/tutorials/${tutorial.title.toLowerCase().replace(/\s+/g, '-')}`
    },
    "keywords": tutorial.tags.join(", "),
    "articleSection": tutorial.category,
    "wordCount": tutorial.readTime * 200,
    "timeRequired": `PT${tutorial.readTime}M`,
    "inLanguage": "en-US"
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": tutorial.title,
    "description": tutorial.description,
    "totalTime": `PT${tutorial.readTime}M`,
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Computer with internet connection"
      },
      {
        "@type": "HowToSupply", 
        "name": "Basic programming knowledge"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Code editor"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Setup and Prerequisites",
        "text": "Follow the setup instructions in the tutorial"
      },
      {
        "@type": "HowToStep",
        "name": "Implementation",
        "text": "Implement the code examples provided"
      },
      {
        "@type": "HowToStep",
        "name": "Testing and Deployment",
        "text": "Test your implementation and deploy"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}

interface OrganizationStructuredDataProps {
  organization: {
    name: string;
    url: string;
    logo: string;
    description: string;
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    contactPoint?: {
      telephone: string;
      email: string;
      contactType?: string;
    };
    sameAs: string[];
  };
}

export function OrganizationStructuredData({ organization }: OrganizationStructuredDataProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": organization.name,
    "url": organization.url,
    "logo": organization.logo,
    "description": organization.description,
    "address": organization.address ? {
      "@type": "PostalAddress",
      "streetAddress": organization.address.streetAddress,
      "addressLocality": organization.address.addressLocality,
      "addressRegion": organization.address.addressRegion,
      "postalCode": organization.address.postalCode,
      "addressCountry": organization.address.addressCountry
    } : undefined,
    "contactPoint": organization.contactPoint ? {
      "@type": "ContactPoint",
      "telephone": organization.contactPoint.telephone,
      "contactType": organization.contactPoint.contactType,
      "email": organization.contactPoint.email
    } : undefined,
    "sameAs": organization.sameAs
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

interface FAQStructuredDataProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQStructuredData({ faqs }: FAQStructuredDataProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
