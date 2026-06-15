import React from "react";
import { Mail, Phone, Clock, MapPin, Star } from "lucide-react";
import Image from "next/image";

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
    <section className="relative min-h-screen w-full overflow-hidden bg-[#fafaf9]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.05),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 py-28 md:py-36">
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between w-full">
          {/* Left Side with Title and AI Avatar */}
          <div className="flex flex-col items-center md:items-start gap-8 ml-0 md:ml-40">
            <div className="text-center md:text-left max-w-md">
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-[#292524]">Intelligent</span> <span className="text-emerald-500">Profiling</span>
              </h1>
            </div>

            {/* AI Avatar */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src={HEADSHOT_DATA_URI}
                alt="Friendly AI Avatar"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="absolute inset-0 rounded-full object-cover ring-8 ring-emerald-500/20 shadow-2xl"
                unoptimized
              />
            </div>

            <div className="text-center md:text-left max-w-md">
              <p className="text-base leading-relaxed text-[#57534e]">
                <span className="text-[#44403c]">AI-powered customer insights that deliver</span> <span className="text-emerald-500">personalized experiences at scale.</span>
              </p>
            </div>
          </div>

          {/* Customer Card */}
          <div className="mt-12 md:mt-0 md:ml-0 w-full max-w-md">
            <div className="relative overflow-hidden border-0 bg-white shadow-xl rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-teal-50/50 rounded-3xl opacity-60" />

              <div className="relative flex flex-col gap-6 p-8 z-20">
                <div className="flex items-center gap-4 pb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden ring-4 ring-emerald-100 shadow-md">
                    <Image
                      src={CUSTOMER_AVATAR}
                      alt="Sita Lama"
                      fill
                      sizes="64px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#292524] text-lg">Sita Lama</p>
                    <p className="text-sm text-emerald-600 font-medium">Everyday Shopper</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#57534e]">
                  <div className="flex items-center gap-2 bg-stone-50 rounded-xl px-3 py-2 shadow-sm min-w-0">
                    <Mail className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis">sita.lama@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 bg-stone-50 rounded-xl px-3 py-2 shadow-sm min-w-0">
                    <Phone className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span className="whitespace-nowrap">+977 984-1234567</span>
                  </div>
                  <div className="flex items-center gap-2 bg-stone-50 rounded-xl px-3 py-2 shadow-sm min-w-0">
                    <MapPin className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span className="whitespace-nowrap">Boudha, Kathmandu</span>
                  </div>
                  <div className="flex items-center gap-2 bg-stone-50 rounded-xl px-3 py-2 shadow-sm min-w-0">
                    <Clock className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span className="whitespace-nowrap">Prefers: 11 AM - 3 PM</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm border border-emerald-100">
                    Conversion Probability: 72%
                  </span>
                  <span className="rounded-full bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700 shadow-sm border border-teal-100">
                    Segment: Retail Shopper
                  </span>
                  <span className="rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm border border-emerald-100">
                    Engagement: Moderate
                  </span>
                </div>

                <div className="mt-6 pt-4 text-xs text-[#57534e]">
                  <p className="font-semibold text-[#292524] mb-2 flex items-center gap-1"><Star className="h-3 w-3 text-emerald-500" /> Recent Interactions</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 bg-stone-50 rounded-xl px-3 py-2 shadow-sm"><span className="text-lg">🛒</span> Browsed kitchen appliances - Today</li>
                    <li className="flex items-center gap-2 bg-stone-50 rounded-xl px-3 py-2 shadow-sm"><span className="text-lg">👟</span> Added sneakers to wishlist - 2 days ago</li>
                    <li className="flex items-center gap-2 bg-stone-50 rounded-xl px-3 py-2 shadow-sm"><span className="text-lg">🪴</span> Viewed home décor sale - 1 week ago</li>
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
