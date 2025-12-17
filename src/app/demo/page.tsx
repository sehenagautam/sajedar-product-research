import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Live Facebook Messenger AI Chatbot Demos | Try AI Chatbots',
  description:
    'Try live Facebook Messenger AI chatbots for Ashwi Furniture, Osha Clothing & Apparels, Sajedar, Vibely and BJ Store.',
  alternates: { canonical: 'https://sajedar.com/demo' }
};

export default function DemoPage() {
  const demos = [
    {
      id: 'ashwi-furniture',
      name: 'Ashwi Furniture',
      description: 'AI-powered furniture consultation and sales assistant',
      facebookUrl: 'https://www.facebook.com/profile.php?id=61579049243889',
      messengerUrl: 'https://m.me/61579049243889',
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
        'Of course it wouldn’t be nice if I didn’t use my agent to respond on my own Facebook page.',
      facebookUrl: 'https://www.facebook.com/sajedardotcom',
      messengerUrl: 'https://www.facebook.com/messages/t/401877156348283',
      features: [
        'Lead qualification',
        'Service explanations',
        'Instant replies',
        'Founder-used AI agent'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'vibely',
      name: 'Vibely',
      description: 'AI assistant for brand engagement and customer interaction',
      facebookUrl: 'https://www.facebook.com/vibely.life/',
      messengerUrl: 'https://www.facebook.com/messages/t/393893210481261',
      features: [
        'Customer engagement',
        'Automated replies',
        'Product discovery',
        'Brand voice consistency'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'bj-store',
      name: 'BJ Store',
      description: 'Retail-focused AI assistant for sales and customer queries',
      facebookUrl: 'https://www.facebook.com/profile.php?id=61584587782485',
      messengerUrl: 'https://www.facebook.com/messages/t/874032905799014',
      features: [
        'Product inquiries',
        'Pricing support',
        'Order assistance',
        'Instant responses'
      ],
      color: 'from-blue-500 to-purple-600'
    }
  ];

  const getColorClasses = () => 'bg-gradient-to-r from-blue-500 to-purple-600';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 py-16">
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
                  <h3 className="text-2xl font-bold text-white">{demo.name}</h3>
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
                    className="block text-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
                  >
                    💬 Chat with {demo.name}
                  </a>
                  <a
                    href={demo.facebookUrl}
                    target="_blank"
                    className="block text-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg"
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
          >
            Build Your Own AI Chatbot
          </Link>
        </div>
      </div>
    </div>
  );
}
