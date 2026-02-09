import React from 'react';

export function BusinessDashboardSection() {
  return (
    <section className="w-full bg-[#18181b] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-2 block">
            Business Intelligence
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">
            Real-Time <span className="text-emerald-500">Business Dashboard</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-6">
            Track performance, monitor conversations, and make data-driven decisions with our
            comprehensive analytics dashboard.
          </p>
        </div>

        {/* Dashboard Mockup - Main Visual */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900">
          <div className="absolute top-0 w-full h-1 bg-emerald-500"></div>

          {/* Dashboard Header */}
          <div className="bg-gray-800 border-b border-gray-700 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="h-6 w-px bg-gray-600"></div>
              <span className="text-gray-300 font-medium">Sajedar Business Analytics</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Last updated: Just now</span>
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold text-xs">
                JD
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-2">
                <div className="text-gray-400 text-sm">Total Conversations</div>
                <div className="text-emerald-500 text-xs font-semibold bg-emerald-500/10 px-2 py-1 rounded">+12.5%</div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">1,248</div>
              <div className="text-gray-500 text-xs">vs. 1,109 last week</div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-2">
                <div className="text-gray-400 text-sm">Automated Resolution</div>
                <div className="text-emerald-500 text-xs font-semibold bg-emerald-500/10 px-2 py-1 rounded">+5.2%</div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">94.8%</div>
              <div className="text-gray-500 text-xs">Only 5.2% escalated</div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-2">
                <div className="text-gray-400 text-sm">Avg. Response Time</div>
                <div className="text-emerald-500 text-xs font-semibold bg-emerald-500/10 px-2 py-1 rounded">-30s</div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">1.2s</div>
              <div className="text-gray-500 text-xs">Instant replies</div>
            </div>

            {/* Main Chart Area (Placeholder) */}
            <div className="col-span-1 md:col-span-2 bg-gray-800/30 rounded-xl p-6 border border-gray-700 min-h-[300px] flex items-end justify-between gap-2 relative overflow-hidden">
              {/* Grid Lines */}
              <div className="absolute inset-0 grid grid-rows-4 p-6 pointer-events-none">
                <div className="border-t border-gray-700/50 w-full"></div>
                <div className="border-t border-gray-700/50 w-full"></div>
                <div className="border-t border-gray-700/50 w-full"></div>
                <div className="border-t border-gray-700/50 w-full"></div>
              </div>

              {/* Bars */}
              <div className="w-full bg-emerald-900/40 h-[40%] rounded-t hover:bg-emerald-600/50 transition-all cursor-pointer relative group">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Mon</div>
              </div>
              <div className="w-full bg-emerald-800/40 h-[60%] rounded-t hover:bg-emerald-700/50 transition-all cursor-pointer relative group">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Tue</div>
              </div>
              <div className="w-full bg-emerald-700/40 h-[50%] rounded-t hover:bg-emerald-600/50 transition-all cursor-pointer relative group">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Wed</div>
              </div>
              <div className="w-full bg-emerald-600/40 h-[75%] rounded-t hover:bg-emerald-500/50 transition-all cursor-pointer relative group">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Thu</div>
              </div>
              <div className="w-full bg-emerald-500/40 h-[85%] rounded-t hover:bg-emerald-500/50 transition-all cursor-pointer relative group">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Fri</div>
              </div>
              <div className="w-full bg-emerald-500/40 h-[95%] rounded-t hover:bg-emerald-500/40 transition-all cursor-pointer relative group">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Sat</div>
              </div>
              <div className="w-full bg-emerald-500 h-[90%] rounded-t hover:bg-emerald-500 transition-all cursor-pointer relative group">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Sun</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Live Feed</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-gray-300">New lead captured: <span className="text-white font-medium">Mike R.</span></span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-gray-300">Order #1029 confirmed</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span className="text-gray-300">Escalation requested (ID: 442)</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-gray-300">Appointment scheduled: <span className="text-white font-medium">Tomorrow 2PM</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-emerald-500/5 p-6 rounded-xl border border-emerald-500/30 text-center hover:bg-emerald-500/10 transition-colors">
            <h3 className="text-white font-bold mb-2">User Analytics</h3>
            <p className="text-sm text-gray-400">Total users, active sessions, and retention rates.</p>
          </div>
          <div className="bg-emerald-500/5 p-6 rounded-xl border border-emerald-500/30 text-center hover:bg-emerald-500/10 transition-colors">
            <h3 className="text-white font-bold mb-2">Conversation Metrics</h3>
            <p className="text-sm text-gray-400">Message volume, response times, and sentiment.</p>
          </div>
          <div className="bg-emerald-500/5 p-6 rounded-xl border border-emerald-500/30 text-center hover:bg-emerald-500/10 transition-colors">
            <h3 className="text-white font-bold mb-2">Sales Funnel</h3>
            <p className="text-sm text-gray-400">Lead qualification, conversion rates, and revenue.</p>
          </div>
          <div className="bg-emerald-500/5 p-6 rounded-xl border border-emerald-500/30 text-center hover:bg-emerald-500/10 transition-colors">
            <h3 className="text-white font-bold mb-2">System Health</h3>
            <p className="text-sm text-gray-400">Uptime, API latency, and error rates.</p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16 max-w-6xl w-full mx-auto">
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Take Control of Your Business?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get access to your business dashboard and start making data-driven decisions today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/?message=I want access to the business dashboard.#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors duration-200 w-full sm:w-auto">
              Access Dashboard
            </a>
            <a href="/?message=Please schedule a demo of the business dashboard.#contact" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors duration-200 w-full sm:w-auto">
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}