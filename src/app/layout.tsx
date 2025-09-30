import type { Metadata } from 'next';
import { Inter, DM_Serif_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const dmSerif = DM_Serif_Display({ 
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
  weight: '400'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sajedar.com'),
  title: {
    default: 'Sajedar - AI Business Automation & Chatbots',
    template: '%s | Sajedar'
  },
  description: 'Sajedar builds AI business automation and custom chatbots that increase revenue, reduce costs, and improve customer experience. Get your custom AI chatbot today.',
  keywords: [
    'Sajedar', 'AI chatbot', 'custom chatbot', 'business automation', 
    'ai business automation', 'chatbots for business', 'ai powered sales',
    'ai sales automation', 'sales automation with ai', 'ai agents',
    'customer support automation', 'conversational AI', 'facebook messenger bot',
    'whatsapp bot', 'agentic ai', 'sajedar ai', 'sajedar chatbots',
    'sajedar business automation'
  ],
  authors: [{ name: 'Sajedar Team' }],
  creator: 'Sajedar',
  publisher: 'Sajedar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sajedar.com',
    title: 'Sajedar - AI Business Automation & Chatbots',
    description: 'Sajedar builds AI business automation and custom chatbots that increase revenue, reduce costs, and improve customer experience.',
    siteName: 'Sajedar',
    images: [
      {
        url: '/sajedar-logo.png',
        width: 1200,
        height: 630,
        alt: 'Sajedar - AI Business Automation & Chatbots',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sajedar',
    creator: '@sajedar',
    title: 'Sajedar - AI Business Automation & Chatbots',
    description: 'Sajedar builds AI business automation and custom chatbots that increase revenue, reduce costs, and improve customer experience.',
    images: ['/sajedar-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
  alternates: {
    canonical: 'https://sajedar.com/',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-H94EHFF2ED"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H94EHFF2ED');
            `
          }}
        />
        
        {/* Resource hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Critical resources */}
        <link rel="preload" href="/sajedar-logo.png" as="image" />
        
        {/* PWA meta tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Sajedar" />
        <meta name="apple-mobile-web-app-title" content="Sajedar" />
        <meta name="theme-color" content="#18181b" />
        <meta name="msapplication-navbutton-color" content="#18181b" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-starturl" content="/" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}