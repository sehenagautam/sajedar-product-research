import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Graphics Nepal | Rs 200 per Post',
  description: 'Branded social media graphics for Nepali businesses. Get high-quality designs for Facebook, Instagram, and TikTok starting at just Rs 200.',
  keywords: [
    'social media graphics nepal',
    'facebook post design nepal',
    'instagram post design nepal',
    'graphic design nepal',
    'business graphics nepal',
    'social media design nepal',
    'post design for nepali business',
    'sajedar graphics',
    'cheap graphic design nepal',
    'professional social media posts nepal',
  ],
  alternates: { canonical: '/social-media-graphics' },
  openGraph: {
    title: 'Social Media Graphics Nepal | Professional Designs at Rs 200',
    description: 'Stop posting boring photos. Get branded social media graphics for your Nepali business at Rs 200 per graphic.',
    url: 'https://sajedar.com/social-media-graphics',
    siteName: 'Sajedar',
    type: 'website',
  },
};

export default function SocialMediaGraphicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
