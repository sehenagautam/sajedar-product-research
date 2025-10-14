import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, Users, MessageSquare, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Create Facebook Messenger AI Chatbot - Complete Tutorial 2025',
  description: 'Learn how to create Facebook Messenger AI chatbot step-by-step. Free tutorial for building AI chatbots on Facebook Messenger. No coding required. Start building your chatbot today!',
  keywords: [
    'how to create chatbot in messenger',
    'facebook messenger chatbot tutorial',
    'how to make chatbot for facebook messenger',
    'connect chatbot to facebook messenger',
    'facebook messenger ai chatbot',
    'ai chatbot for facebook messenger',
    'facebook ai chatbot',
    'chatbot facebook messenger free',
    'facebook messenger chatbot tutorial',
    'best ai chatbot for facebook messenger',
    'free ai chatbot for facebook messenger',
    'facebook chatbot tutorial',
    'messenger chatbot tutorial',
    'create facebook chatbot',
    'facebook messenger bot tutorial'
  ],
  alternates: { canonical: 'https://sajedar.com/facebook-messenger-chatbot-tutorial' },
  openGraph: {
    type: 'article',
    title: 'How to Create Facebook Messenger AI Chatbot - Complete Tutorial 2025',
    description: 'Learn how to create Facebook Messenger AI chatbot step-by-step. Free tutorial for building AI chatbots on Facebook Messenger. No coding required.',
    url: 'https://sajedar.com/facebook-messenger-chatbot-tutorial',
    publishedTime: '2025-01-25',
    modifiedTime: '2025-01-25',
    authors: ['Sajedar Team'],
    tags: ['Facebook Messenger', 'AI Chatbot', 'Tutorial', 'Chatbot Builder', 'Facebook Bot'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Create Facebook Messenger AI Chatbot - Complete Tutorial 2025',
    description: 'Learn how to create Facebook Messenger AI chatbot step-by-step. Free tutorial for building AI chatbots on Facebook Messenger.',
  }
};

export default function FacebookMessengerChatbotTutorialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e]">
      {/* Header */}
      <div className="pt-24 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-semibold rounded-full mb-4">
              Complete Tutorial
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight tracking-tight">
              How to Create Facebook Messenger AI Chatbot
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Learn how to build, deploy, and optimize Facebook Messenger AI chatbots that increase sales, 
              automate customer support, and boost engagement. Complete step-by-step guide for 2025.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pb-24">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Facebook Messenger AI Chatbots?</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <Users className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">2.8B+ Active Users</h3>
              <p className="text-gray-300">Facebook Messenger has over 2.8 billion active users worldwide, making it the perfect platform for your AI chatbot.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <MessageSquare className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">80% Open Rate</h3>
              <p className="text-gray-300">Facebook Messenger messages have an 80% open rate compared to 20% for email marketing.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <Zap className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Automation</h3>
              <p className="text-gray-300">AI chatbots work 24/7, handling customer inquiries, sales, and support without human intervention.</p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Tutorial */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Step-by-Step Tutorial: Create Your Facebook Messenger AI Chatbot</h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Set Up Your Facebook Page</h3>
                  <p className="text-gray-300 mb-4">
                    First, you need a Facebook Page for your business. If you don't have one, create it at facebook.com/pages/create.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />Go to facebook.com/pages/create</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />Choose "Business or Brand"</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />Enter your business name and category</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />Add profile picture and cover photo</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Connect Your Page to Sajedar</h3>
                  <p className="text-gray-300 mb-4">
                    Sajedar makes it easy to connect your Facebook Page and create an AI chatbot without coding.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />Sign up for Sajedar (free)</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />Connect your Facebook Page</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />Authorize permissions</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />Verify connection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Design Your AI Chatbot</h3>
                  <p className="text-gray-300 mb-4">
                    Use Sajedar's intuitive chatbot builder to design your AI assistant's personality, responses, and capabilities.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />Choose your chatbot's personality</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />Set up conversation flows</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />Add product information</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />Configure AI responses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Test and Deploy</h3>
                  <p className="text-gray-300 mb-4">
                    Test your chatbot thoroughly before going live, then deploy it to start engaging with customers.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />Test all conversation flows</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />Check AI responses</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />Deploy to Facebook Messenger</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />Monitor performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Facebook Messenger AI Chatbot Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">✅ Do's</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Keep responses conversational and natural</li>
                <li>• Use quick replies and buttons for easy navigation</li>
                <li>• Provide clear value propositions</li>
                <li>• Include human handoff options</li>
                <li>• Test regularly and optimize</li>
                <li>• Use rich media (images, videos, carousels)</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">❌ Don'ts</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Don't make responses too long</li>
                <li>• Avoid overly promotional language</li>
                <li>• Don't ignore user context</li>
                <li>• Avoid complex navigation flows</li>
                <li>• Don't forget to set expectations</li>
                <li>• Avoid generic responses</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Advanced Facebook Messenger AI Chatbot Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <Star className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Responses</h3>
              <p className="text-gray-300">Use advanced AI to understand context and provide intelligent responses to customer queries.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <MessageSquare className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Rich Media Support</h3>
              <p className="text-gray-300">Send images, videos, carousels, and interactive elements to enhance user experience.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <Zap className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Automation & Integration</h3>
              <p className="text-gray-300">Integrate with CRM, email marketing, and other business tools for seamless automation.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 border border-emerald-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Your Facebook Messenger AI Chatbot?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Start building your Facebook Messenger AI chatbot today with Sajedar. 
            No coding required, setup in minutes, and see results immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/?message=I want to create a Facebook Messenger AI chatbot for my business.#contact" 
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors"
            >
              Create My Chatbot
            </Link>
            <Link 
              href="/demo" 
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors border border-white/20"
            >
              See Live Demos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
