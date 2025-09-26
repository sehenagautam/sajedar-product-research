import React from 'react';

export function KnowledgeIntegrationSection() {
  return (
    <section className="w-full bg-[#18181b] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">
            Knowledge Integration
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">
            Feed Your Chatbot with <span className="text-emerald-400">Business Knowledge</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-6">
            Connect your chatbot to all your business data sources - databases, PDFs, websites, 
            and knowledge bases. Your chatbot becomes an expert on your business with instant access to accurate information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Features */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Multi-Source Integration</h3>
                  <p className="text-gray-300">Connect databases, PDFs, websites, knowledge bases, and APIs. Your chatbot accesses information from all your business sources seamlessly.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Intelligent Search & Retrieval</h3>
                  <p className="text-gray-300">Advanced search algorithms find the most relevant information from your knowledge base. Context-aware responses with accurate citations.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real-time Data Sync</h3>
                  <p className="text-gray-300">Automatic synchronization with your data sources. Your chatbot always has the latest information, policies, and product details.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Secure & Compliant</h3>
                  <p className="text-gray-300">Enterprise-grade security with role-based access control. Your sensitive business data remains protected while being accessible to your chatbot.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Knowledge Sources Visualization */}
          <div className="relative">
            {/* Knowledge Integration Hub */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Hub Header */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Knowledge Hub</div>
                    <div className="text-xs text-blue-100">Connected Sources: 8</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-blue-100">Synced</span>
                </div>
              </div>

              {/* Knowledge Sources Grid */}
              <div className="p-4 bg-gray-50">
                <div className="grid grid-cols-2 gap-3">
                  {/* Database */}
                  <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                      <span className="text-xs font-medium text-gray-700">Database</span>
                    </div>
                    <div className="text-xs text-gray-500">Product Catalog</div>
                    <div className="text-xs text-green-600 font-medium">Connected</div>
                  </div>

                  {/* PDFs */}
                  <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="text-xs font-medium text-gray-700">PDFs</span>
                    </div>
                    <div className="text-xs text-gray-500">Manuals & Docs</div>
                    <div className="text-xs text-green-600 font-medium">Connected</div>
                  </div>

                  {/* Website */}
                  <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                        </svg>
                      </div>
                      <span className="text-xs font-medium text-gray-700">Website</span>
                    </div>
                    <div className="text-xs text-gray-500">Company Info</div>
                    <div className="text-xs text-green-600 font-medium">Connected</div>
                  </div>

                  {/* API */}
                  <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <span className="text-xs font-medium text-gray-700">API</span>
                    </div>
                    <div className="text-xs text-gray-500">External Data</div>
                    <div className="text-xs text-green-600 font-medium">Connected</div>
                  </div>
                </div>

                {/* Knowledge Stats */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-center">
                    <div className="text-lg font-bold text-blue-600">2.5K</div>
                    <div className="text-xs text-blue-700">Documents</div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-2 text-center">
                    <div className="text-lg font-bold text-green-600">15K</div>
                    <div className="text-xs text-green-700">Products</div>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-2 text-center">
                    <div className="text-lg font-bold text-purple-600">500+</div>
                    <div className="text-xs text-purple-700">Articles</div>
                  </div>
                </div>

                {/* Search Example */}
                <div className="mt-4 bg-white border border-gray-200 rounded-lg p-3">
                  <h4 className="text-sm font-medium text-gray-800 mb-2">Knowledge Search</h4>
                  <div className="flex space-x-2">
                    <input 
                      type="text" 
                      placeholder="Search knowledge base..." 
                      className="flex-1 px-3 py-1 border border-gray-300 rounded text-xs"
                      value="product pricing"
                      readOnly
                    />
                    <button className="px-3 py-1 bg-blue-500 text-white rounded text-xs">Search</button>
                  </div>
                  <div className="mt-2 text-xs text-gray-600">
                    Found 23 results from 4 sources
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Data Flow Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M50 50 Q200 100 350 150" 
                  stroke="url(#flowGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
                <path 
                  d="M50 100 Q200 150 350 200" 
                  stroke="url(#flowGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />
              </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-900/30 to-emerald-900/30 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Make Your Chatbot a Business Expert?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Connect your chatbot to all your business knowledge sources and watch it become an expert 
              on your products, services, and company information.
            </p>
            <a href="/?message=I want to connect knowledge sources to my chatbot.#contact" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors duration-200 mr-4">
              Connect Knowledge Sources
            </a>
            <a href="/?message=Please show a knowledge integration demo.#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-lg transition-colors duration-200">
              View Integration Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 