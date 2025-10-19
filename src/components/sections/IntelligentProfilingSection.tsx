import React from "react";
import { Mail, Phone, Clock, MapPin, Star } from "lucide-react";

const HEADSHOT_DATA_URI =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
  <svg width='512' height='512' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='256' cy='256' r='230' fill='#10b981' />
    <circle cx='190' cy='230' r='22' fill='white'/>
    <circle cx='322' cy='230' r='22' fill='white'/>
    <circle cx='190' cy='230' r='9' fill='#047857'/>
    <circle cx='322' cy='230' r='9' fill='#047857'/>
    <path d='M176 320 Q256 380 336 320' stroke='white' stroke-width='8' stroke-linecap='round'/>
  </svg>`);

const CUSTOMER_AVATAR =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
  <svg width='96' height='96' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'>
    <defs>
      <linearGradient id='grad' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='#d1fae5'/>
        <stop offset='100%' stop-color='#6ee7b7'/>
      </linearGradient>
    </defs>
    <rect x='0' y='0' width='96' height='96' rx='48' fill='url(#grad)' />
    <circle cx='48' cy='42' r='18' fill='#065f46' opacity='0.9'/>
    <rect x='26' y='60' width='44' height='14' rx='7' fill='#065f46' opacity='0.9'/>
    <circle cx='40' cy='40' r='4' fill='white'/>
    <circle cx='56' cy='40' r='4' fill='white'/>
    <path d='M38 50 Q48 56 58 50' stroke='white' stroke-width='3' stroke-linecap='round'/>
  </svg>`);

export default function IntelligentProfilingSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] border-t border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.1),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 py-28 md:py-36">
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between w-full">
          {/* Left Side with Title and AI Avatar */}
          <div className="flex flex-col items-center md:items-start gap-8 ml-0 md:ml-40">
            <div className="text-center md:text-left max-w-md">
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-gray-400">Intelligent</span> <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Profiling</span>
              </h1>
            </div>
            
            {/* AI Avatar */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src={HEADSHOT_DATA_URI}
                alt="Friendly AI Avatar"
                className="absolute inset-0 h-full w-full rounded-full object-cover ring-8 ring-emerald-500/40 shadow-2xl"
              />
            </div>
            
            <div className="text-center md:text-left max-w-md">
              <p className="text-base leading-relaxed">
                <span className="text-gray-400">AI-powered customer insights that deliver</span> <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">personalized experiences at scale.</span>
              </p>
            </div>
          </div>

          {/* Customer Card */}
          <div className="mt-12 md:mt-0 md:ml-0 w-full max-w-md">
            <div className="relative overflow-hidden border-0 bg-gradient-to-br from-[#23243a] to-[#18181b] shadow-2xl rounded-3xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 rounded-3xl opacity-40" />

              <div className="relative flex flex-col gap-6 p-8 z-20">
                <div className="flex items-center gap-4 border-b border-emerald-500/20 pb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden ring-4 ring-emerald-500/30 shadow-md">
                    <img src={CUSTOMER_AVATAR} alt="Sita Lama" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Sita Lama</p>
                    <p className="text-sm text-emerald-300 font-medium">Everyday Shopper</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500/5 to-emerald-600/5 rounded-xl px-3 py-2 shadow-sm border border-emerald-500/10"><Mail className="h-4 w-4 text-emerald-300" /> sita.lama@example.com</div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500/5 to-emerald-600/5 rounded-xl px-3 py-2 shadow-sm border border-emerald-500/10"><Phone className="h-4 w-4 text-emerald-300" /> +977 984-1234567</div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500/5 to-emerald-600/5 rounded-xl px-3 py-2 shadow-sm border border-emerald-500/10"><MapPin className="h-4 w-4 text-emerald-300" /> Boudha, Kathmandu</div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500/5 to-emerald-600/5 rounded-xl px-3 py-2 shadow-sm border border-emerald-500/10"><Clock className="h-4 w-4 text-emerald-300" /> Prefers: 11 AM - 3 PM</div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 px-4 py-1.5 text-xs font-semibold text-emerald-300 shadow-sm border border-emerald-500/30">
                    Conversion Probability: 72%
                  </span>
                  <span className="rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 px-4 py-1.5 text-xs font-semibold text-teal-300 shadow-sm border border-teal-500/30">
                    Segment: Retail Shopper
                  </span>
                  <span className="rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 px-4 py-1.5 text-xs font-semibold text-emerald-300 shadow-sm border border-emerald-500/30">
                    Engagement: Moderate
                  </span>
                </div>

                <div className="mt-6 border-t border-emerald-500/20 pt-4 text-xs text-gray-300">
                  <p className="font-semibold text-white mb-2 flex items-center gap-1"><Star className="h-3 w-3 text-emerald-400" /> Recent Interactions</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl px-3 py-2 shadow-sm border border-gray-600/30"><span className="text-lg">🛒</span> Browsed kitchen appliances - Today</li>
                    <li className="flex items-center gap-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl px-3 py-2 shadow-sm border border-gray-600/30"><span className="text-lg">👟</span> Added sneakers to wishlist - 2 days ago</li>
                    <li className="flex items-center gap-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl px-3 py-2 shadow-sm border border-gray-600/30"><span className="text-lg">🪴</span> Viewed home décor sale - 1 week ago</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
