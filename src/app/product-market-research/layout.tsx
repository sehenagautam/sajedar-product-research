import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Market Research Nepal | Validate Before Launch',
  description: 'Product market research for Nepali businesses. Validate demand, study competitors, pricing, positioning, and launch channels before investing in inventory or ads.',
  keywords: [
    'product market research nepal',
    'market research nepal',
    'product validation nepal',
    'competitor research nepal',
    'business research nepal',
    'ecommerce product research nepal',
    'product launch research nepal',
    'sajedar product research',
    'nepal market entry strategy',
  ],
  alternates: { canonical: '/product-market-research' },
  openGraph: {
    title: 'Product Market Research Nepal | Professional Validation',
    description: 'Stop guessing. Validate product demand and competitor landscapes in the Nepali market before you spend a rupee on stock.',
    url: 'https://sajedar.com/product-market-research',
    siteName: 'Sajedar',
    type: 'website',
  },
};

export default function ProductMarketResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
