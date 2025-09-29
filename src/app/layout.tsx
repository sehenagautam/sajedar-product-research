import React from 'react';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://sajedar.com'),
  title: {
    default: 'Sajedar - Custom AI Chatbot Agency',
    template: '%s | Sajedar'
  },
  description: 'Sajedar is a hands-on agency specializing in designing, building, and supporting custom AI chatbots for ambitious brands.',
  keywords: ['Sajedar','AI chatbot','custom chatbot','business automation','ai business automation','chatbots for business','ai agents','customer support automation','conversational AI','facebook messenger bot','whatsapp bot','agentic ai','sajedar ai','sajedar chatbots','sajedar business automation'],
  authors: [{ name: 'Sajedar' }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, maxSnippet: -1, maxImagePreview: 'large', maxVideoPreview: -1 } },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://sajedar.com/',
    siteName: 'Sajedar',
    title: 'Sajedar - Custom AI Chatbot Agency',
    description: 'We design, build, and support AI chatbots for ambitious brands.',
    images: [{ url: '/sajedar-logo.png', width: 1200, height: 630, alt: 'Sajedar AI Chatbot Agency' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sajedar',
    creator: '@sajedar',
    title: 'Sajedar - Custom AI Chatbot Agency',
    description: 'We design, build, and support AI chatbots for ambitious brands.',
    images: ['/sajedar-logo.png']
  },
  icons: { 
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/sajedar-logo.png', sizes: 'any' }
    ],
    shortcut: '/sajedar-logo.png',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#22C55E'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Sajedar',
              url: 'https://sajedar.com',
              logo: 'https://sajedar.com/sajedar-logo.png',
              sameAs: ['https://www.facebook.com/']
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Sajedar',
              url: 'https://sajedar.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://sajedar.com/?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
