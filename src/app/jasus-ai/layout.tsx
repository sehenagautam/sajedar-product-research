import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jasus AI | Competition Spying & Market Intelligence Nepal',
  description: 'Uncover your competitors strategies with Jasus AI. We track their best-selling products, ad creatives, pricing shifts, and customer engagement patterns in the Nepali market.',
  keywords: [
    'competitor spying nepal',
    'market intelligence nepal',
    'jasus ai',
    'facebook ad library spying nepal',
    'e-commerce competitor tracking',
    'nepali business intelligence',
    'track competitor pricing nepal',
    'sajedar jasus ai',
  ],
  alternates: { canonical: '/jasus-ai' },
  openGraph: {
    title: 'Jasus AI: Professional Competition Spying for Nepali Brands',
    description: 'Know what your competitors are doing before they do. Professional market intelligence and ad tracking for ambitious Nepali businesses.',
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
