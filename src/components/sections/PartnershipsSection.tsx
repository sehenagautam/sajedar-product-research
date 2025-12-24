import React from 'react';

export function PartnershipsSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] py-12 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center gap-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <h2 
            className="text-3xl md:text-4xl font-semibold tracking-tight text-white"
            style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
          >
            <span className="text-gray-400">Strategic</span> <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Partnerships</span>
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-6 w-full">
          {/* Media Partner */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-center">
              <div className="text-blue-400 font-medium text-lg mb-2">Nepal Patra</div>
              <p className="text-gray-400 text-sm">Media Partner</p>
            </div>
          </div>

          {/* E-commerce Partner */}
          <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-xl p-6">
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent font-medium text-lg mb-2">Hyperce</div>
              <p className="text-gray-400 text-sm">E-commerce Partner</p>
            </div>
          </div>

          {/* Hospitality Partner */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-center">
              <div className="text-emerald-400 font-medium text-lg mb-2">Pahunahomes</div>
              <p className="text-gray-400 text-sm">Hospitality Partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
