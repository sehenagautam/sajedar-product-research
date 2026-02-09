import React from 'react';

export function PartnershipsSection() {
  return (
    <section className="w-full bg-[#fafaf9] py-12 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center gap-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight text-[#292524]"
            style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
          >
            <span className="text-[#57534e]">Strategic</span> <span className="text-emerald-500">Partnerships</span>
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {/* Media Partner */}
          <div className="bg-white/60 border border-stone-200 rounded-xl p-6 shadow-sm">
            <div className="text-center">
              <div className="text-blue-600 font-medium text-lg mb-2">Nepal Patra</div>
              <p className="text-[#57534e] text-sm">Media</p>
            </div>
          </div>

          {/* E-commerce Partner */}
          <div className="bg-white/60 border border-stone-200 rounded-xl p-6 shadow-sm">
            <div className="text-center">
              <div className="text-emerald-600 font-medium text-lg mb-2">Hyperce</div>
              <p className="text-[#57534e] text-sm">Ecommerce solutions</p>
            </div>
          </div>

          {/* Hospitality Partner */}
          <div className="bg-white/60 border border-stone-200 rounded-xl p-6 shadow-sm">
            <div className="text-center">
              <div className="text-emerald-600 font-medium text-lg mb-2">Pahunahomes</div>
              <p className="text-[#57534e] text-sm">Hospitality</p>
            </div>
          </div>

          {/* Collaboration Partner */}
          <div className="bg-white/60 border border-stone-200 rounded-xl p-6 shadow-sm">
            <div className="text-center">
              <div className="text-emerald-600 font-medium text-lg mb-2">Scalestro</div>
              <p className="text-[#57534e] text-sm">Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
