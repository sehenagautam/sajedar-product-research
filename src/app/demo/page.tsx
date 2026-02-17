'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import { ContactSection, Footer } from '../../components/sections';
import { trackEvent } from '../../lib/analytics';

export default function DemoPage() {
  const demos = [
    {
      id: 'latta-kapada',
      name: 'Latta Kapada',
      description:
        'Our most advanced agent yet — guides users from product discovery to address collection, collects Rs 100 advance payment, and notifies the store owner automatically.',
      facebookUrl: 'https://web.facebook.com/profile.php?id=61575123480268',
      messengerUrl: 'https://m.me/61575123480268',
      logo: '/lattakapadalogo.png',
      features: [
        'Product details & discovery',
        'Address collection',
        'Rs 100 advance payment',
        'Store owner notifications'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'ashwi-furniture',
      name: 'Ashwi Furniture',
      description: 'AI-powered furniture consultation and sales assistant',
      facebookUrl: 'https://www.facebook.com/profile.php?id=61579049243889',
      messengerUrl: 'https://m.me/61579049243889',
      logo: '/ashwifurniturelogo.png',
      features: [
        'Product recommendations',
        'Size consultation',
        'Style matching',
        'Price quotes'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'osha',
      name: 'Osha Clothing & Apparels',
      description: 'AI-powered fashion assistant for product discovery and customer support',
      facebookUrl: 'https://www.facebook.com/profile.php?id=61583871238196',
      messengerUrl: 'https://www.facebook.com/messages/t/779166831957210',
      logo: '/oshaclothinglogo.png',
      features: [
        'Outfit suggestions',
        'Size & fit guidance',
        'Order inquiries',
        'Product availability'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'sajedar',
      name: 'Sajedar Chatbot',
      description:
        "Of course it wouldn't be nice if I didn't use my agent to respond on my own Facebook page.",
      facebookUrl: 'https://www.facebook.com/sajedardotcom',
      messengerUrl: 'https://www.facebook.com/messages/t/401877156348283',
      logo: '/sajedarlogo.png',
      features: [
        'Lead qualification',
        'Service explanations',
        'Instant replies',
        'Founder-used AI agent'
      ],
      color: 'from-blue-500 to-purple-600'
    }
  ];

  const getColorClasses = () => 'bg-gradient-to-r from-blue-500 to-purple-600';

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col items-center justify-center font-sans relative overflow-x-hidden">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Live AI Chatbot <span className="text-emerald-400">Demos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience real AI chatbots in action across different businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className={`${getColorClasses()} p-6`}>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={demo.logo}
                      alt={`${demo.name} logo`}
                      width={48}
                      height={48}
                      className="rounded-full object-cover bg-white/20"
                    />
                    <h3 className="text-2xl font-bold text-white">{demo.name}</h3>
                  </div>
                  <span className="text-sm text-white/80 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>
                <p className="text-white/90">{demo.description}</p>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {demo.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  <a
                    href={demo.messengerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
                    onClick={() => trackEvent('cta_click', { cta_type: 'messenger_chat', demo_id: demo.id })}
                  >
                    💬 Chat with {demo.name}
                  </a>
                  <a
                    href={demo.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg"
                    onClick={() => trackEvent('cta_click', { cta_type: 'facebook_page_visit', demo_id: demo.id })}
                  >
                    📘 Visit Facebook Page
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            href="/?message=I want to build my own AI Messenger bot for my business.#contact"
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg"
            onClick={() => trackEvent('demo_booked', { source_page: '/demo' })}
          >
            Build Your Own AI Chatbot
          </Link>
        </div>
      </div>

      <ContactSection />
      <Footer />
    </div>
  );
}
