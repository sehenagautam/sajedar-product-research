import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo Request',
  description: 'Private Sajedar demo request form.',
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

export default function DemoRequestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
