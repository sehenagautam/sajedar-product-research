import { Article } from '../../types/article';
import { coreServicePages, industryPages, proofPages, SeoPageLink, useCasePages } from './agencyPages';

const keywordRules: Array<{ keywords: string[]; hrefs: string[] }> = [
  {
    keywords: ['abandoned cart', 'cart recovery'],
    hrefs: ['/abandoned-cart-messenger-automation', '/messenger-marketing-agency'],
  },
  {
    keywords: ['recommendation', 'aov', 'product discovery'],
    hrefs: ['/product-recommendation-chatbot', '/ecommerce-chatbot-setup-service'],
  },
  {
    keywords: ['checkout', 'purchase completion'],
    hrefs: ['/conversational-checkout-chatbot', '/messenger-ecommerce-automation'],
  },
  {
    keywords: ['lead', 'qualification'],
    hrefs: ['/lead-qualification-chatbot', '/chatbot-automation-agency'],
  },
  {
    keywords: ['clothing', 'fashion', 'apparel'],
    hrefs: ['/chatbot-for-clothing-brands', '/messenger-ecommerce-automation'],
  },
  {
    keywords: ['restaurant', 'menu', 'reservation'],
    hrefs: ['/chatbot-for-restaurants', '/lead-qualification-chatbot'],
  },
  {
    keywords: ['education', 'admissions', 'student'],
    hrefs: ['/chatbot-for-education', '/lead-qualification-chatbot'],
  },
  {
    keywords: ['local store', 'retail'],
    hrefs: ['/chatbot-for-local-stores', '/messenger-marketing-agency'],
  },
];

function findLinkByHref(href: string): SeoPageLink | undefined {
  return [...coreServicePages, ...useCasePages, ...industryPages, ...proofPages].find((page) => page.href === href);
}

export function getArticleIntentLinks(article: Article): SeoPageLink[] {
  const text = `${article.title} ${article.excerpt} ${(article.tags || []).join(' ')} ${article.category || ''}`.toLowerCase();

  const selectedHrefs: string[] = [
    '/chatbot-automation-agency',
    '/messenger-ecommerce-automation',
    '/case-studies',
  ];

  for (const rule of keywordRules) {
    if (rule.keywords.some((keyword) => text.includes(keyword))) {
      selectedHrefs.push(...rule.hrefs);
    }
  }

  const uniqueLinks: SeoPageLink[] = [];
  const seen = new Set<string>();

  for (const href of selectedHrefs) {
    if (seen.has(href)) {
      continue;
    }

    const link = findLinkByHref(href);
    if (link) {
      uniqueLinks.push(link);
      seen.add(href);
    }
  }

  // Keep the block concise while preserving service + use-case + proof coverage.
  return uniqueLinks.slice(0, 6);
}
