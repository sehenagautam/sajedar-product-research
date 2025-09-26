import React from 'react';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://sajedar.com'),
  title: {
    default: 'Sajedar - Custom AI Chatbot Agency',
    template: '%s | Sajedar'
  },
  description: 'Sajedar is a hands-on agency specializing in designing, building, and supporting custom AI chatbots for ambitious brands.',
  keywords: ['AI chatbot','custom chatbot','business automation','customer support','conversational AI','facebook messenger bot','whatsapp bot','agentic ai'],
  authors: [{ name: 'Sajedar' }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://sajedar.com/',
    siteName: 'Sajedar',
    title: 'Sajedar - Custom AI Chatbot Agency',
    description: 'We design, build, and support AI chatbots for ambitious brands.',
    images: [{ url: '/heroimage-robothand.png', width: 1200, height: 630, alt: 'Sajedar AI Chatbot Agency' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sajedar',
    creator: '@sajedar',
    title: 'Sajedar - Custom AI Chatbot Agency',
    description: 'We design, build, and support AI chatbots for ambitious brands.',
    images: ['/heroimage-robothand.png']
  },
  icons: { icon: '/favicon.ico' }
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
              logo: 'https://sajedar.com/favicon.ico',
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
