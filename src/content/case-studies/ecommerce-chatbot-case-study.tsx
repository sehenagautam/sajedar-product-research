import React from 'react';

export const ecommerceChatbotCaseStudy = {
  slug: 'ecommerce-chatbot-case-study',
  title: 'E-commerce AI Chatbot Implementation',
  description: 'How we increased online sales by 340% with an intelligent chatbot for a major e-commerce platform.',
  industry: 'E-commerce',
  duration: '3 months',
  results: ['340% increase in online sales', '85% reduction in support tickets', '92% customer satisfaction rate'],
  featured: true,
  date: new Date('2024-10-05'),
  component: function EcommerceChatbotCaseStudy() {
    return (
      <div className="w-full bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        {/* Case Study Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            E-commerce Case Study
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            AI-Powered Shopping Assistant
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming online shopping experience with intelligent product recommendations, 
            automated customer support, and personalized shopping assistance.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-500/30 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">340%</div>
            <div className="text-sm text-gray-300">Increase in Sales</div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
            <div className="text-sm text-gray-300">Reduction in Support Tickets</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">92%</div>
            <div className="text-sm text-gray-300">Customer Satisfaction</div>
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
              <li>• High cart abandonment rates (68%)</li>
              <li>• Overwhelmed customer support team</li>
              <li>• Limited product discovery</li>
              <li>• Poor mobile shopping experience</li>
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
              <li>• Intelligent product recommendations</li>
              <li>• 24/7 AI customer support</li>
              <li>• Personalized shopping experience</li>
              <li>• Mobile-optimized chat interface</li>
            </ul>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Implementation Timeline</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500/30"></div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Week 1-2: Analysis & Planning</h4>
                  <p className="text-gray-300">Comprehensive analysis of existing customer behavior, pain points, and technical requirements.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Week 3-6: Development</h4>
                  <p className="text-gray-300">Building the AI chatbot with product recommendation engine and customer support capabilities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Week 7-10: Testing & Optimization</h4>
                  <p className="text-gray-300">Rigorous testing, user feedback integration, and performance optimization.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Week 11-12: Launch & Monitoring</h4>
                  <p className="text-gray-300">Full deployment with continuous monitoring and real-time adjustments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Detailed Results</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <thead className="bg-blue-500/20">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">Metric</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Before</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">After</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Improvement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/5">
                  <td className="px-6 py-4 text-gray-300">Cart Abandonment Rate</td>
                  <td className="px-6 py-4 text-red-400">68%</td>
                  <td className="px-6 py-4 text-emerald-400">23%</td>
                  <td className="px-6 py-4 text-emerald-400 font-semibold">-66%</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="px-6 py-4 text-gray-300">Average Order Value</td>
                  <td className="px-6 py-4 text-gray-300">$45</td>
                  <td className="px-6 py-4 text-emerald-400">$78</td>
                  <td className="px-6 py-4 text-emerald-400 font-semibold">+73%</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="px-6 py-4 text-gray-300">Customer Support Tickets</td>
                  <td className="px-6 py-4 text-gray-300">1,200/day</td>
                  <td className="px-6 py-4 text-emerald-400">180/day</td>
                  <td className="px-6 py-4 text-emerald-400 font-semibold">-85%</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="px-6 py-4 text-gray-300">Response Time</td>
                  <td className="px-6 py-4 text-gray-300">4.2 hours</td>
                  <td className="px-6 py-4 text-emerald-400">2.3 minutes</td>
                  <td className="px-6 py-4 text-emerald-400 font-semibold">-99%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Technology Stack</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'OpenAI GPT-4', category: 'AI Engine' },
              { name: 'React', category: 'Frontend' },
              { name: 'Node.js', category: 'Backend' },
              { name: 'MongoDB', category: 'Database' },
              { name: 'Redis', category: 'Caching' },
              { name: 'WebSocket', category: 'Real-time' },
              { name: 'AWS', category: 'Cloud' },
              { name: 'Docker', category: 'Deployment' }
            ].map((tech, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                <div className="text-white font-semibold mb-1">{tech.name}</div>
                <div className="text-gray-400 text-sm">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 border border-emerald-500/30 rounded-2xl p-8 text-center">
          <div className="text-6xl text-emerald-400 mb-4">"</div>
          <blockquote className="text-xl text-gray-300 mb-6 italic">
            "The AI chatbot has completely transformed our customer experience. Sales have increased dramatically, 
            and our support team can now focus on complex issues while the AI handles routine inquiries. 
            It's been a game-changer for our business."
          </blockquote>
          <div className="text-white font-semibold">Sarah Johnson</div>
          <div className="text-gray-400">CEO, TechStore Solutions</div>
        </div>
      </div>
    );
  }
};
