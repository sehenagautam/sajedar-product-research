import { Metadata } from 'next';
import CreativesClient from './CreativesClient';

export const metadata: Metadata = {
  title: 'Sajedar Creatives - Premium AI Videos & Social Graphics',
  description: 'High-converting AI videos and branded social media graphics for businesses in Nepal. Motion design, product reels, and feed-ready creatives.',
  alternates: { canonical: '/creatives' },
};

export default function CreativesPage() {
  return <CreativesClient />;
}
