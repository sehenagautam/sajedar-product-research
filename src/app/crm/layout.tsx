import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom CRM Nepal for Social Media Businesses',
  description: 'Custom CRM for Nepali businesses that sell through Facebook, Instagram, WhatsApp, and social media. Setup starts at Rs 10,000 with Rs 0.1 per customer per month.',
  keywords: [
    'custom crm nepal',
    'crm for nepali business',
    'social media crm nepal',
    'facebook crm nepal',
    'instagram crm nepal',
    'online business crm nepal',
    'customer management system nepal',
    'crm for facebook sellers',
    'crm for ecommerce nepal',
    'sajedar crm',
  ],
  alternates: { canonical: '/crm' },
  openGraph: {
    title: 'Custom CRM Nepal for Social Media Businesses',
    description: 'Manage customers, alerts, social accounts, and dashboards in one custom CRM for Nepali online businesses.',
    url: 'https://sajedar.com/crm',
    siteName: 'Sajedar',
    type: 'website',
  },
};

export default function CrmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
