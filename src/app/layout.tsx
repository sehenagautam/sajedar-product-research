import type { Metadata } from 'next';
import { Inter, DM_Serif_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { FloatingMessenger } from '../components/FloatingMessenger';

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
    default: 'Sajedar - Facebook Messenger AI Chatbot Builder | Custom AI Chatbots',
    template: '%s | Sajedar'
  },
  description: 'Build custom Facebook Messenger AI chatbots with Sajedar. Create AI chatbots for Facebook Messenger that increase sales, automate customer support, and boost engagement. Free setup, no coding required.',
  keywords: [
    'facebook ai chatbot', 'facebook messenger chatbot', 'ai agent for facebook messenger',
    'facebook messenger ai chatbot', 'how to create agent in messenger', 'connect agent to facebook messenger',
    'chatbot facebook messenger free', 'facebook messenger agent tutorial', 'how to make agent for facebook messenger',
    'best ai agent for facebook messenger', 'free ai agent for facebook messenger', 'facebook chatbot',
    'messenger chatbot', 'facebook messenger bot', 'ai agent facebook messenger deutsch',
    'open ai agent on facebook messenger', 'facebook ai chat bot', 'chatbots on facebook',
    'Sajedar', 'AI agent builder', 'custom chatbot', 'business automation',
    'ai business automation', 'chatbots for business', 'ai powered sales',
    'ai sales automation', 'sales automation with ai', 'ai agents',
    'customer support automation', 'conversational AI', 'whatsapp bot', 'agentic ai'
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
    title: 'Sajedar - Facebook Messenger AI Chatbot Builder | Custom AI Chatbots',
    description: 'Build custom Facebook Messenger AI chatbots with Sajedar. Create AI chatbots for Facebook Messenger that increase sales, automate customer support, and boost engagement.',
    siteName: 'Sajedar',
    images: [
      {
        url: '/sajedar-new-logo.png',
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
    title: 'Sajedar - Facebook Messenger AI Chatbot Builder | Custom AI Chatbots',
    description: 'Build custom Facebook Messenger AI chatbots with Sajedar. Create AI chatbots for Facebook Messenger that increase sales, automate customer support, and boost engagement.',
    images: ['/sajedar-new-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'BiEAfyaXaxXl3el5L7dP3DfWT_deTSIMy1keH5VAfqg',
  },
  alternates: {
    canonical: 'https://sajedar.com/',
  },
  icons: {
    icon: [
      { url: '/sajedar-new-logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/sajedar-new-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/sajedar-new-logo.png', sizes: 'any' },
    ],
    apple: [
      { url: '/sajedar-new-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/sajedar-new-logo.png' },
      { rel: 'android-chrome-512x512', url: '/sajedar-new-logo.png' },
    ],
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sajedar',
    url: 'https://sajedar.com',
    logo: 'https://sajedar.com/sajedar-new-logo.png',
    sameAs: [
      'https://www.linkedin.com/company/sajedar',
      'https://www.facebook.com/sajedardotcom',
      'https://www.youtube.com/@sajedar_chatbots',
      'https://www.tiktok.com/@sajedar_chatbots',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: 'https://sajedar.com/contact',
      },
    ],
  } as const;

  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <head>
        {/* Resource hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Critical resources */}
        <link rel="preload" href="/sajedar-new-logo.png" as="image" />

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H94EHFF2ED"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H94EHFF2ED');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1889164861630433');
            fbq('track', 'PageView');
          `}
        </Script>

        {children}
        <FloatingMessenger />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1889164861630433&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
