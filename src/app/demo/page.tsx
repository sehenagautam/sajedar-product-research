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
      logo: '/lattakapadalogo.webp',
      features: [
        'Product details & discovery',
        'Address collection',
        'Rs 100 advance payment',
        'Store owner notifications'
      ],
      color: 'from-blue-500 to-purple-600'
    }
  ];

  const getColorClasses = () => 'bg-emerald-500';

  return (
    <div className="min-h-screen w-full bg-[#fafaf9] text-[#44403c] flex flex-col items-center justify-center font-sans relative overflow-x-hidden">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-16 w-full pt-32">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-6xl font-semibold tracking-tight text-[#292524] mb-6"
            style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
          >
            <span
              className="text-white"
              style={{ WebkitTextStroke: '2px #57534e' }}
            >
              Live AI Sales Agents
            </span>{' '}
            <span className="text-emerald-500">Demos</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-sans">
            Experience real AI Agents in action across different businesses.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {demos.map((demo) => (
              <div
                key={demo.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className={`${getColorClasses()} p-6`}>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-4">
                      <div className="bg-white p-1 rounded-full shadow-sm">
                        <Image
                          src={demo.logo}
                          alt={`${demo.name} logo`}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white font-serif">{demo.name}</h3>
                    </div>
                    <span className="text-sm text-white/80 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Live
                    </span>
                  </div>
                  <p className="text-emerald-50 font-medium">{demo.description}</p>
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {demo.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 bg-emerald-50 text-emerald-700 font-medium rounded-full text-sm border border-emerald-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                    <a
                      href={demo.messengerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl tracking-wide transition-colors shadow-sm"
                      onClick={() => trackEvent('cta_click', { cta_type: 'messenger_chat', demo_id: demo.id })}
                    >
                      Test AI Assistant 💬
                    </a>
                    <a
                      href={demo.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-6 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-200 transition-colors shadow-sm"
                      onClick={() => trackEvent('cta_click', { cta_type: 'facebook_page_visit', demo_id: demo.id })}
                    >
                      Visit Parent Page
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20 mb-10">
          <Link
            href="/?message=I want to build my own AI Messenger bot for my business.#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            onClick={() => trackEvent('demo_booked', { source_page: '/demo' })}
          >
            Build Your Own AI Chatbot &rarr;
          </Link>
        </div>

      </div>

      <ContactSection />
      <Footer />
    </div>
  );
}
