import React from 'react';

export function DataCollectionSection() {
  return (
    <section className="w-full bg-[#18181b] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-2 block">
            Smart Data Collection
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">
            Turn Conversations into <span className="text-emerald-500">Actionable Data</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-6">
            Automatically capture, organize, and export customer information from every chat.
            No more manual data entry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Features */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="bg-emerald-500/5 border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Auto-Extraction</h3>
                  <p className="text-gray-300">Intelligently identifies and saves names, emails, phone numbers, and custom data points from natural conversation.</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-500/5 border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Instant Export</h3>
                  <p className="text-gray-300">Sync collected data to Google Sheets, CRM, or your database in real-time via webhooks.</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-500/5 border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Lead Qualification</h3>
                  <p className="text-gray-300">Automatically categorizes leads based on collected data and conversation intent (e.g., Hot, Warm, Cold).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Google Sheets Mockup */}
          <div className="relative">
            {/* Google Sheets Container */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Google Sheets Header */}
              <div className="bg-gray-100 border-b border-gray-300 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Sajedar Leads Database</div>
                    <div className="text-xs text-gray-500">Google Sheets</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-500">Live</span>
                </div>
              </div>

              {/* Google Sheets Content */}
              <div className="p-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 bg-gray-50 font-medium text-gray-700">Name</th>
                        <th className="text-left py-2 px-3 bg-gray-50 font-medium text-gray-700">Email</th>
                        <th className="text-left py-2 px-3 bg-gray-50 font-medium text-gray-700">Company</th>
                        <th className="text-left py-2 px-3 bg-gray-50 font-medium text-gray-700">Status</th>
                        <th className="text-left py-2 px-3 bg-gray-50 font-medium text-gray-700">Score</th>
                        <th className="text-left py-2 px-3 bg-gray-50 font-medium text-gray-700">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-2 px-3 text-gray-900">Sarah Johnson</td>
                        <td className="py-2 px-3 text-blue-600">sarah@techcorp.com</td>
                        <td className="py-2 px-3 text-gray-700">TechCorp Inc</td>
                        <td className="py-2 px-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Qualified</span></td>
                        <td className="py-2 px-3 text-gray-700">85</td>
                        <td className="py-2 px-3 text-gray-500">2024-01-15</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-2 px-3 text-gray-900">Mike Chen</td>
                        <td className="py-2 px-3 text-blue-600">mike@startup.io</td>
                        <td className="py-2 px-3 text-gray-700">Startup.io</td>
                        <td className="py-2 px-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Contacted</span></td>
                        <td className="py-2 px-3 text-gray-700">72</td>
                        <td className="py-2 px-3 text-gray-500">2024-01-14</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-2 px-3 text-gray-900">Emma Davis</td>
                        <td className="py-2 px-3 text-blue-600">emma@enterprise.com</td>
                        <td className="py-2 px-3 text-gray-700">Enterprise Solutions</td>
                        <td className="py-2 px-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Meeting Set</span></td>
                        <td className="py-2 px-3 text-gray-700">91</td>
                        <td className="py-2 px-3 text-gray-500">2024-01-13</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-2 px-3 text-gray-900">David Wilson</td>
                        <td className="py-2 px-3 text-blue-600">david@consulting.com</td>
                        <td className="py-2 px-3 text-gray-700">Consulting Group</td>
                        <td className="py-2 px-3"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Proposal Sent</span></td>
                        <td className="py-2 px-3 text-gray-700">88</td>
                        <td className="py-2 px-3 text-gray-500">2024-01-12</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-3 text-gray-900">Lisa Brown</td>
                        <td className="py-2 px-3 text-blue-600">lisa@agency.net</td>
                        <td className="py-2 px-3 text-gray-700">Digital Agency</td>
                        <td className="py-2 px-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Qualified</span></td>
                        <td className="py-2 px-3 text-gray-700">79</td>
                        <td className="py-2 px-3 text-gray-500">2024-01-11</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 border border-emerald-500/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Automate Your Lead Collection?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Connect your agent to Google Sheets and start capturing leads automatically.
              No manual data entry required.
            </p>
            <a href="/?message=I want to connect Google Sheets and start collecting leads automatically.#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-lg transition-colors duration-200">
              Start Collecting Leads Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 