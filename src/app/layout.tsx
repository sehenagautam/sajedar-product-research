import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Sajedar - Custom AI Chatbot Agency',
  description: 'Sajedar is a hands-on agency specializing in designing, building, and supporting custom AI chatbots for ambitious brands.',
  keywords: 'AI chatbot, custom chatbot, business automation, customer support, conversational AI',
  authors: [{ name: 'Sajedar' }],
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
