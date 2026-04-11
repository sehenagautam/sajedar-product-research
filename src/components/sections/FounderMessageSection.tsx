'use client';

import Image from 'next/image';

export default function FounderMessageSection() {
  return (
    <section className="w-full py-24 px-4 bg-[#fafaf9] relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Founder Image */}
        <div className="flex-shrink-0">
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border border-stone-200">
            <Image
              src="/founder_pic.webp"
              alt="Founder of Sajedar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Founder Message Content */}
        <div className="flex-1">
          <p className="uppercase tracking-widest text-sm text-emerald-500 mb-4">
            Founder&apos;s Message
          </p>

          <h2
            className="text-3xl md:text-4xl font-semibold text-[#292524] mb-6"
            style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
          >
            Why I Started <span className="text-emerald-500">Sajedar</span>
          </h2>

          <p className="text-[#57534e] text-lg leading-relaxed mb-5">
            I started Sajedar because I saw too many businesses struggling to keep up with
            technology. They knew they needed &quot;AI&quot;, but they didn&apos;t know how to
            implement it without losing their brand&apos;s voice.
          </p>

          <p className="text-[#57534e] text-lg leading-relaxed mb-6">
            I wanted to build a firm that sits right beside you - solving the hard problems
            so you can enjoy the benefits.
          </p>

          <p className="text-[#44403c] italic mb-3">
            Let&apos;s build something great together.
          </p>

          <p className="text-[#292524] font-medium">
            - Dimanjan Dahal, <span className="text-[#57534e]">Founder of the Top AI Agent Builder in Nepal</span>
          </p>
        </div>
      </div>
    </section>
  );
}
