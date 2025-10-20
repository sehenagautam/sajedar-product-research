import React from 'react';

export const ashwiFurnituresCaseStudy = {
  slug: 'ashwi-furnitures-case-study',
  title: 'Ashwi Furnitures: AI-Powered Sales Assistant',
  description: 'How we transformed a furniture business with a Nepali AI chatbot that generated $250 in sales from just $10 in ad spend.',
  industry: 'Furniture Retail',
  duration: '2 months',
  results: ['2500% ROI on ad spend', '100 messages handled daily', 'Devanagari Nepali optimization', 'AI-generated promotional content'],
  featured: true,
  date: new Date('2024-10-08'),
  component: function AshwiFurnituresCaseStudy() {
    return (
      <div className="w-full bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        {/* Case Study Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
            </svg>
            Furniture Retail Case Study
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Aarya: The AI Sales Assistant
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming furniture sales with a Nepali-speaking AI assistant that handles customer inquiries, 
            provides product information, and drives sales through personalized conversations.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-500/30 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">2500%</div>
            <div className="text-sm text-gray-300">ROI on Ad Spend</div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">100</div>
            <div className="text-sm text-gray-300">Messages/Day</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">5%</div>
            <div className="text-sm text-gray-300">Discount Authority</div>
          </div>
          <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/30 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">$250</div>
            <div className="text-sm text-gray-300">Total Sales</div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-red-300 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              The Challenge
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Limited customer engagement on social media</li>
              <li>• High cost of traditional advertising</li>
              <li>• Language barriers with Nepali customers</li>
              <li>• Need for 24/7 customer support</li>
              <li>• Difficulty in showcasing product variety</li>
            </ul>
          </div>
          
          <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-emerald-300 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Our Solution
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Nepali-speaking AI assistant "Aarya"</li>
              <li>• Devanagari script optimization</li>
              <li>• AI-generated promotional content</li>
              <li>• Automated discount authority (5%)</li>
              <li>• Phone number extraction system</li>
            </ul>
          </div>
        </div>

        {/* Implementation Journey */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Implementation Journey</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-amber-500/30"></div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Initial Setup & Identity Creation</h4>
                  <p className="text-gray-300">Created "Aarya" persona with friendly, professional tone. Gave the chatbot its own identity and discount authority up to 5%.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Language Optimization Experiments</h4>
                  <p className="text-gray-300">Tested English-only, Nepali-only, and Romanized Nepali. Found Devanagari script Nepali performed best for local customers.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Prompt Engineering Balance</h4>
                  <p className="text-gray-300">Initially too loose (went off-topic), then too tight (frequent failures). Found the perfect middle ground for natural conversations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-white mb-2">AI-Generated Content & Optimization</h4>
                  <p className="text-gray-300">Created AI-generated promotional images and female models for dressing table promotions. Optimized for phone number extraction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Breakdown */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Detailed Results</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Financial Performance</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Ad Spend</span>
                  <span className="text-red-400 font-semibold">$10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Sales</span>
                  <span className="text-emerald-400 font-semibold">$250</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">ROI</span>
                  <span className="text-emerald-400 font-semibold">2500%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Operational Metrics</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Daily Messages</span>
                  <span className="text-blue-400 font-semibold">100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Language Optimization</span>
                  <span className="text-purple-400 font-semibold">Devanagari</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Discount Authority</span>
                  <span className="text-amber-400 font-semibold">5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Features Implemented</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Nepali Language Support', 
                description: 'Full Devanagari script support for authentic local communication',
                icon: '🌐'
              },
              { 
                title: 'AI-Generated Content', 
                description: 'Automated promotional images and model generation for marketing',
                icon: '🎨'
              },
              { 
                title: 'Discount Authority', 
                description: 'AI can offer up to 5% discounts autonomously to close sales',
                icon: '💰'
              },
              { 
                title: 'Phone Number Extraction', 
                description: 'Primary goal of collecting customer contact information',
                icon: '📞'
              },
              { 
                title: 'Product Catalog Integration', 
                description: 'Complete furniture catalog with prices and specifications',
                icon: '🛋️'
              },
              { 
                title: 'Future OCR Integration', 
                description: 'Exploring PaddleOCR and docTR for image reading capabilities',
                icon: '👁️'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* System Prompt Highlight */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">AI Persona: Aarya</h3>
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-500/30 rounded-2xl p-8">
            <div className="bg-black/20 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-amber-300 mb-4">Core AI Identity</h4>
              <p className="text-gray-300 mb-4">
                "You are Aarya (Thapa), a helpful and engaging AI assistant for a furniture business. 
                Your job is to answer questions from potential customers who have replied to a Meta ad 
                and encourage conversation. Your tone should be friendly, professional, and you should 
                occasionally use emojis to add warmth and personality."
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-white font-semibold mb-2">Primary Objective</h5>
                <p className="text-gray-300 text-sm">Engage customers, understand their needs, and smoothly acquire their phone number for follow-up calls.</p>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-2">Business Focus</h5>
                <p className="text-gray-300 text-sm">LaxmiNarayan Furniture Udhyog Pvt Ltd - Specializing in sofas, dressing tables, and custom furniture.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology & Future Plans */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Technology Stack & Future Plans</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Current Technology</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Meta Ads Integration</li>
                <li>• Nepali NLP Processing</li>
                <li>• JSON Response Format</li>
                <li>• Image Generation AI</li>
                <li>• WhatsApp Integration</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Future Enhancements</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• OCR Integration (PaddleOCR/docTR)</li>
                <li>• Image Reading Capabilities</li>
                <li>• Advanced Product Recognition</li>
                <li>• Enhanced Multimodal Support</li>
                <li>• Scalability Improvements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-500/30 rounded-2xl p-8 text-center">
          <div className="text-6xl text-amber-400 mb-4">"</div>
          <blockquote className="text-xl text-gray-300 mb-6 italic">
            "Aarya has revolutionized how we interact with customers. The Nepali language support made all the difference, 
            and the AI-generated content saves us so much time. We went from struggling with customer engagement to 
            generating $250 in sales from just $10 in ads. It's incredible!"
          </blockquote>
          <div className="text-white font-semibold">Ashwi Furnitures Team</div>
          <div className="text-gray-400">LaxmiNarayan Furniture Udhyog Pvt Ltd</div>
        </div>

        {/* Action Links */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Try Aarya Yourself</h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <a
              href="https://m.me/61580366211478"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
            >
              💬 Chat with Aarya
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61580366211478"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors text-center"
            >
              📘 Visit Facebook Page
            </a>
            <a
              href="/demo"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
            >
              🎯 View All Demos
            </a>
          </div>
        </div>
      </div>
    );
  }
};
