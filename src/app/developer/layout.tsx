import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developer Listing Form',
  description: 'Submit your profile to be considered for Sajedar developer opportunities.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
    },
  },
};

export default function DeveloperLayout({ children }: { children: React.ReactNode }) {
  return children;
}
