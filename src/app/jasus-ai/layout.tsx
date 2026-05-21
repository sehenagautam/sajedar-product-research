import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jasus AI | Competitor Insights & Market Intelligence Nepal',
  description: 'Understand competitor strategies with Jasus AI. We review public market signals, ad creatives, pricing shifts, and customer engagement patterns in the Nepali market.',
  keywords: [
    'competitor insights nepal',
    'market intelligence nepal',
    'jasus ai',
    'facebook ad library insights nepal',
    'e-commerce competitor insights',
    'nepali business intelligence',
    'competitor pricing insights nepal',
    'sajedar jasus ai',
  ],
  alternates: { canonical: '/jasus-ai' },
  openGraph: {
    title: 'Jasus AI: Competitor Insights for Nepali Brands',
    description: 'See what is working in your category. Market intelligence and ad insights for ambitious Nepali businesses.',
    url: 'https://sajedar.com/jasus-ai',
    siteName: 'Sajedar',
    type: 'website',
  },
};

export default function JasusAiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
