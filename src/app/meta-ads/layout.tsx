import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Meta Ads Planning Nepal | Sajedar',
  description: 'Plan Facebook and Instagram ad budgets for Nepalese businesses. From micro-budgets of $3/day to professional Ads Manager setups, we solve the dollar card barrier.',
  keywords: [
    'meta ads nepal',
    'facebook ads nepal',
    'instagram ads nepal',
    'dollar card ads nepal',
    'facebook ads budget nepal',
    'meta ads agency nepal',
    'digital marketing nepal',
    'boost post vs ads manager nepal',
    'sajedar meta ads',
  ],
  alternates: { canonical: '/meta-ads' },
  openGraph: {
    title: 'Professional Meta Ads Planning for Nepalese Businesses',
    description: 'Stop wasting money on Boost Post. Plan a professional Meta ads strategy with Sajedar, starting from $3/day.',
    url: 'https://sajedar.com/meta-ads',
    siteName: 'Sajedar',
    type: 'website',
  },
};

export default function MetaAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
