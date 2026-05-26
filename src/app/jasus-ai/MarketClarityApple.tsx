'use client';

import React from "react";
import Image from "next/image";
import { ScanLine } from "lucide-react";

type BrandTarget = {
  name: string;
  descriptor: string;
  ring: number;
  size: number;
  angle: number;
  color: 'red' | 'yellow' | 'emerald';
};

const brands: BrandTarget[] = [
  {
    name: "Brand A",
    descriptor: "Leader",
    ring: 240,
    size: 110,
    angle: -30,
    color: 'red'
  },
  {
    name: "Brand B",
    descriptor: "Challenger",
    ring: 320,
    size: 90,
    angle: 150,
    color: 'yellow'
  },
  {
    name: "Brand C",
    descriptor: "Aggressive",
    ring: 260,
    size: 95,
    angle: 240,
    color: 'red'
  },
  {
    name: "Brand D",
    descriptor: "Emerging",
    ring: 360,
    size: 70,
    angle: 45,
    color: 'emerald'
  },
];

function polarToXY(angle: number, radius: number) {
  const radian = (angle * Math.PI) / 180;
  return {
    x: Math.cos(radian) * radius,
    y: Math.sin(radian) * radius,
  };
}

function BrandTargetNode({ brand }: { brand: BrandTarget }) {
  const position = polarToXY(brand.angle, brand.ring);
  
  const colorClasses = {
    red: "border-red-500/30 bg-red-500/10 text-red-500",
    yellow: "border-yellow-500/30 bg-yellow-500/10 text-yellow-500",
    emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-500",
  };

  return (
    <div
      className="absolute z-30"
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        width: brand.size,
        height: brand.size,
        marginLeft: -brand.size / 2,
        marginTop: -brand.size / 2,
      }}
    >
      <div className={`relative h-full w-full flex items-center justify-center rounded-full border backdrop-blur-md shadow-2xl transition-transform hover:scale-110 ${colorClasses[brand.color]}`}>
        <div className="px-2 text-center">
          <p
            className={`truncate font-black ${
              brand.size < 80 ? "text-[10px]" : "text-[12px]"
            }`}
          >
            {brand.name}
          </p>
          <p
            className={`font-bold uppercase opacity-60 ${
              brand.size < 80 ? "text-[6px] tracking-tight" : "text-[8px] tracking-widest"
            }`}
          >
            {brand.descriptor}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MarketClarityApple() {
  return (
    <section className="relative overflow-hidden bg-[#0f0f15] py-24 text-white">
      <div className="pointer-events-none absolute left-1/2 top-[-20rem] h-[38rem] w-[62rem] -translate-x-1/2 rounded-full bg-red-500/5 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-5 lg:px-8 mb-16 relative z-50">
        <div className="max-w-3xl">
          <h2 className="text-xs font-black uppercase tracking-[0.25em] text-red-500">Market Clarity</h2>
          <h3 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Clear signals make better decisions.
          </h3>
          <p className="mt-6 text-lg text-slate-500">
            Our visualization engine maps competitor signals in real-time, 
            identifying high-risk areas and low-competition opportunities.
          </p>
        </div>
      </div>

      <div className="relative mx-auto h-[48rem] w-full max-w-[60rem] overflow-visible px-6 scale-[0.6] sm:scale-100 origin-center">
        {[190, 240, 290, 340, 390].map((radius) => (
          <div
            key={radius}
            className="absolute left-1/2 top-1/2 rounded-full border border-white/[0.05]"
            style={{
              width: radius * 2,
              height: radius * 2,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/5" />
        <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

        <div className="absolute left-1/2 top-1/2 h-px w-[92%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-[92%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-px w-[80%] -translate-x-1/2 rotate-45 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-px w-[80%] -translate-x-1/2 -rotate-45 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 z-20 h-28 w-28 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
          <div className="relative h-full w-full">
            <Image
              src="/jasus-ai-icon.png"
              alt="Jasus AI"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 z-10 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-2xl" />

        {brands.map((brand) => (
          <BrandTargetNode key={brand.name} brand={brand} />
        ))}

        <div className="absolute right-0 top-0 z-50 rounded-2xl border border-white/5 bg-slate-900/80 px-3 py-2 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            <ScanLine size={12} /> Risk
          </div>
          <div className="mt-1 flex items-center gap-2 text-[9px] font-semibold text-slate-400">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" /> High
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" /> Mid
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Low
          </div>
        </div>
      </div>
    </section>
  );
}
