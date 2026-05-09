import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Website & Custom CRM Nepal | Sajedar',
  description: 'A complete operating system for your Nepali business. Get a premium custom website and a tailored social-commerce CRM to manage customers, orders, and sales floor automation.',
  keywords: [
    'business website nepal',
    'custom crm nepal',
    'ecommerce website nepal',
    'social media crm nepal',
    'facebook order management nepal',
    'sajedar website crm',
    'online business os nepal',
    'affordable website design nepal',
  ],
  alternates: { canonical: '/website-crm' },
  openGraph: {
    title: 'Website & CRM: The Operating System for Nepali Businesses',
    description: 'Stop juggling spreadsheets and generic templates. Get a premium custom website and a social-commerce CRM built for your exact sales process.',
    url: 'https://sajedar.com/website-crm',
    siteName: 'Sajedar',
    type: 'website',
  },
};

export default function WebsiteCrmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
