import { Metadata } from 'next';
import Link from 'next/link';
import { MessageSquare, BookOpen, Users, TrendingUp, Shield, Globe, Zap, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Facebook Messenger AI Sales Agent Resources',
  description: 'Tutorials, guides, and implementation resources for Facebook Messenger AI sales agents, lead qualification, and automation.',
  keywords: [
    'facebook messenger chatbot',
    'facebook messenger ai chatbot',
    'facebook messenger agent tutorial',
    'facebook messenger bot development',
    'messenger agent guide',
    'facebook agent resources',
    'messenger ai chatbot',
    'facebook messenger automation'
  ],
  alternates: { canonical: 'https://sajedar.com/facebook-messenger' },
  openGraph: {
    type: 'website',
    title: 'Facebook Messenger AI Sales Agent Resources',
    description: 'Tutorials, guides, and implementation resources for Facebook Messenger AI sales agents and automation.',
    url: 'https://sajedar.com/facebook-messenger',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facebook Messenger AI Sales Agent Resources',
    description: 'Tutorials, guides, and implementation resources for Facebook Messenger AI sales agents and automation.'
  }
};

export default function FacebookMessengerPage() {
  const tutorials = [
    {
      title: 'How to Create Facebook Messenger AI Chatbot',
      description: 'Complete step-by-step guide to building your first Facebook Messenger AI agent from scratch.',
      href: '/facebook-messenger-chatbot-tutorial',
      icon: MessageSquare,
      category: 'Getting Started',
      readTime: '15 min read',
      featured: true
    },
    {
      title: 'Facebook Messenger Chatbot for E-commerce',
      description: 'Learn how to create e-commerce chatbots that boost sales by 67% and automate customer support.',
      href: '/tutorials/facebook-messenger-chatbot-ecommerce',
      icon: Target,
      category: 'E-commerce',
      readTime: '12 min read',
      featured: true
    },
    {
      title: 'Facebook Messenger Chatbot for Healthcare',
      description: 'HIPAA-compliant agent setup for healthcare that automates appointments and reduces call volume by 20%.',
      href: '/tutorials/facebook-messenger-chatbot-healthcare',
      icon: Shield,
      category: 'Healthcare',
      readTime: '15 min read',
      featured: true
    },
    {
      title: 'Facebook Messenger Chatbot for Real Estate',
      description: 'Lead generation agent for real estate that captures prospects 24/7 and boosts conversions by 40%.',
      href: '/tutorials/facebook-messenger-chatbot-real-estate',
      icon: Users,
      category: 'Real Estate',
      readTime: '14 min read',
      featured: true
    },
    {
      title: 'Facebook Messenger Chatbot for Education',
      description: 'Student support agent for educational institutions that automates inquiries and improves engagement.',
      href: '/tutorials/facebook-messenger-chatbot-education',
      icon: BookOpen,
      category: 'Education',
      readTime: '13 min read',
      featured: false
    },
    {
      title: 'Facebook Messenger Chatbot for Banking',
      description: 'Secure banking agent with PCI DSS compliance for account management and financial services.',
      href: '/tutorials/facebook-messenger-chatbot-banking',
      icon: Shield,
      category: 'Banking',
      readTime: '16 min read',
      featured: false
    },
    {
      title: 'Facebook Messenger Chatbot for Travel',
      description: 'Travel and tourism agent for booking assistance, itinerary planning, and 24/7 travel support.',
      href: '/tutorials/facebook-messenger-chatbot-travel',
      icon: Globe,
      category: 'Travel',
      readTime: '15 min read',
      featured: false
    }
  ];

  const categories = [
    { name: 'All', count: tutorials.length, active: true },
    { name: 'Getting Started', count: tutorials.filter(t => t.category === 'Getting Started').length },
    { name: 'E-commerce', count: tutorials.filter(t => t.category === 'E-commerce').length },
    { name: 'Healthcare', count: tutorials.filter(t => t.category === 'Healthcare').length },
    { name: 'Real Estate', count: tutorials.filter(t => t.category === 'Real Estate').length },
    { name: 'Education', count: tutorials.filter(t => t.category === 'Education').length },
    { name: 'Banking', count: tutorials.filter(t => t.category === 'Banking').length },
    { name: 'Travel', count: tutorials.filter(t => t.category === 'Travel').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e]">
      {/* Header */}
      <div className="pt-24 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-semibold rounded-full mb-4">
              Complete Resource Collection
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight tracking-tight">
              Facebook Messenger AI Chatbot Resources
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
              Master Facebook Messenger chatbots with our comprehensive collection of tutorials, guides, and resources.
              From basic setup to advanced industry-specific implementations.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <MessageSquare className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">{tutorials.length}</div>
            <div className="text-sm text-gray-300">Comprehensive Guides</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">7</div>
            <div className="text-sm text-gray-300">Industry Sectors</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">67%</div>
            <div className="text-sm text-gray-300">Average Sales Boost</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">24/7</div>
            <div className="text-sm text-gray-300">Automation Support</div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category.active
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Featured Tutorials */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Tutorials</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.filter(t => t.featured).map((tutorial) => (
            <Link
              key={tutorial.href}
              href={tutorial.href}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/10"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <tutorial.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded">
                      {tutorial.category}
                    </span>
                    <span className="text-xs text-gray-400">{tutorial.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {tutorial.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* All Tutorials */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">All Facebook Messenger Tutorials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.href}
              href={tutorial.href}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/10"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <tutorial.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded">
                      {tutorial.category}
                    </span>
                    <span className="text-xs text-gray-400">{tutorial.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {tutorial.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Build Your Facebook Messenger Chatbot?</h2>
          <p className="text-gray-300 mb-6">
            Start with our comprehensive tutorial and build a agent that transforms your business.
            No coding experience required - we'll guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/facebook-messenger-chatbot-tutorial"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors text-center"
            >
              Start Building Now
            </Link>
            <Link
              href="/demo"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors text-center border border-white/20"
            >
              See Live Demos
            </Link>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="max-w-6xl mx-auto px-4 pb-24">
        <h2 className="text-2xl font-bold text-white mb-6">Related Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/research"
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:bg-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-2">Research Articles</h3>
            <p className="text-gray-300 text-sm">Deep insights into conversational AI trends and market analysis.</p>
          </Link>
          <Link
            href="/case-studies"
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:bg-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-2">Case Studies</h3>
            <p className="text-gray-300 text-sm">Real-world success stories and implementation examples.</p>
          </Link>
          <Link
            href="/tutorials"
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:bg-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-2">All Tutorials</h3>
            <p className="text-gray-300 text-sm">Complete collection of AI agent tutorials and guides.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
