'use client';

import React from "react";
import { Crosshair, ScanLine } from "lucide-react";

type SignalType = "Ads" | "Offer" | "Demand" | "Creative" | "Price" | "Saturation" | "Products";

type SignalMetric = {
  label: SignalType;
  value: number;
  angle: number;
};

type BrandTarget = {
  name: string;
  descriptor: string;
  score: number;
  ring: number;
  size: number;
  angle: number;
  metrics: SignalMetric[];
};

const signalAngles: Record<SignalType, number> = {
  Products: -90,
  Ads: -38,
  Creative: 14,
  Offer: 66,
  Demand: 118,
  Price: 190,
  Saturation: 250,
};

const brands: BrandTarget[] = [
  {
    name: "Brand A",
    descriptor: "Leader",
    score: 91,
    ring: 260,
    size: 96,
    angle: -28,
    metrics: [
      { label: "Products", value: 91, angle: signalAngles.Products },
      { label: "Ads", value: 94, angle: signalAngles.Ads },
      { label: "Creative", value: 87, angle: signalAngles.Creative },
      { label: "Offer", value: 88, angle: signalAngles.Offer },
      { label: "Demand", value: 92, angle: signalAngles.Demand },
      { label: "Price", value: 76, angle: signalAngles.Price },
      { label: "Saturation", value: 54, angle: signalAngles.Saturation },
    ],
  },
  {
    name: "Brand B",
    descriptor: "Challenger",
    score: 78,
    ring: 220,
    size: 82,
    angle: 138,
    metrics: [
      { label: "Products", value: 73, angle: signalAngles.Products },
      { label: "Ads", value: 77, angle: signalAngles.Ads },
      { label: "Creative", value: 81, angle: signalAngles.Creative },
      { label: "Offer", value: 52, angle: signalAngles.Offer },
      { label: "Demand", value: 74, angle: signalAngles.Demand },
      { label: "Price", value: 49, angle: signalAngles.Price },
      { label: "Saturation", value: 68, angle: signalAngles.Saturation },
    ],
  },
  {
    name: "Brand C",
    descriptor: "Aggressive",
    score: 86,
    ring: 305,
    size: 90,
    angle: 220,
    metrics: [
      { label: "Products", value: 84, angle: signalAngles.Products },
      { label: "Ads", value: 79, angle: signalAngles.Ads },
      { label: "Creative", value: 82, angle: signalAngles.Creative },
      { label: "Offer", value: 77, angle: signalAngles.Offer },
      { label: "Demand", value: 90, angle: signalAngles.Demand },
      { label: "Price", value: 56, angle: signalAngles.Price },
      { label: "Saturation", value: 58, angle: signalAngles.Saturation }
    ],
  },
  {
    name: "Brand D",
    descriptor: "Emerging",
    score: 64,
    ring: 355,
    size: 34,
    angle: 42,
    metrics: [
      { label: "Products", value: 55, angle: signalAngles.Products },
      { label: "Ads", value: 49, angle: signalAngles.Ads },
      { label: "Creative", value: 57, angle: signalAngles.Creative },
      { label: "Offer", value: 61, angle: signalAngles.Offer },
      { label: "Demand", value: 72, angle: signalAngles.Demand },
      { label: "Price", value: 58, angle: signalAngles.Price },
      { label: "Saturation", value: 44, angle: signalAngles.Saturation },
    ],
  },
];

function polarToXY(angle: number, radius: number) {
  const radian = (angle * Math.PI) / 180;
  return {
    x: Math.cos(radian) * radius,
    y: Math.sin(radian) * radius,
  };
}

function AdWaveIcon() {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <span className="absolute bottom-[18%] left-[12%] h-[28%] w-[10%] rounded-full bg-current" />
      <span className="absolute bottom-[18%] left-[30%] h-[54%] w-[10%] rounded-full bg-current" />
      <span className="absolute bottom-[18%] left-[48%] h-[76%] w-[10%] rounded-full bg-current" />
      <span className="absolute bottom-[18%] left-[66%] h-[44%] w-[10%] rounded-full bg-current" />
      <span className="absolute bottom-[18%] left-[84%] h-[62%] w-[10%] -translate-x-full rounded-full bg-current" />
    </div>
  );
}

function ViralCreativeIcon() {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <span className="absolute left-1/2 top-1/2 h-[24%] w-[24%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
      <span className="absolute left-0 top-0 h-[15%] w-[15%] rounded-full bg-current/70" />
      <span className="absolute right-0 top-0 h-[15%] w-[15%] rounded-full bg-current/70" />
      <span className="absolute bottom-0 left-0 h-[15%] w-[15%] rounded-full bg-current/70" />
      <span className="absolute bottom-0 right-0 h-[15%] w-[15%] rounded-full bg-current/70" />
      <span className="absolute left-[22%] top-[22%] h-px w-[54%] rotate-45 bg-current/35" />
      <span className="absolute right-[22%] top-[22%] h-px w-[54%] -rotate-45 bg-current/35" />
      <span className="absolute bottom-[22%] left-[22%] h-px w-[54%] -rotate-45 bg-current/35" />
      <span className="absolute bottom-[22%] right-[22%] h-px w-[54%] rotate-45 bg-current/35" />
    </div>
  );
}

function WinningOfferIcon() {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <span className="absolute left-[10%] top-[10%] h-[58%] w-[58%] rounded-lg border border-current bg-current/5" />
      <span className="absolute bottom-[10%] right-[10%] h-[58%] w-[58%] rounded-lg border border-current bg-current/10" />
      <span className="absolute left-[30%] top-[32%] h-px w-[42%] bg-current" />
      <span className="absolute left-[30%] top-[46%] h-px w-[32%] bg-current/65" />
      <span className="absolute bottom-[22%] right-[22%] h-[14%] w-[14%] rounded-full bg-current" />
    </div>
  );
}

function LocalDemandIcon() {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <span className="absolute bottom-[12%] left-[12%] right-[8%] h-px bg-current/25" />
      <span className="absolute bottom-[12%] left-[12%] top-[8%] w-px bg-current/25" />
      <span className="absolute left-[18%] top-[22%] h-px w-[68%] rotate-[28deg] bg-current" />
      <span className="absolute left-[18%] top-[72%] h-px w-[68%] -rotate-[28deg] bg-current/55" />
      <span className="absolute left-[44%] top-[44%] h-[20%] w-[20%] rounded-full bg-current" />
    </div>
  );
}

function ProductCrystalIcon() {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <span className="absolute left-[34%] top-[2%] h-[42%] w-[42%] rotate-45 rounded-[20%] border border-current bg-current/5" />
      <span className="absolute bottom-[3%] left-[2%] h-[42%] w-[42%] rotate-45 rounded-[20%] border border-current bg-current/5" />
      <span className="absolute bottom-[3%] right-[2%] h-[42%] w-[42%] rotate-45 rounded-[20%] border border-current bg-current/5" />
    </div>
  );
}

function SaturationDensityIcon() {
  return (
    <div className="grid h-full w-full grid-cols-3 place-items-center gap-[8%]" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, index) => (
        <span key={index} className="h-[34%] w-[34%] rounded-full bg-current" />
      ))}
    </div>
  );
}

function PricePositionIcon() {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <span className="absolute left-1/2 top-[8%] h-[72%] w-px -translate-x-1/2 bg-current/70" />
      <span className="absolute left-1/2 top-[22%] h-px w-[86%] -translate-x-1/2 bg-current" />
      <span className="absolute bottom-[14%] left-[2%] h-[28%] w-[28%] rounded-full border border-current bg-current/5" />
      <span className="absolute bottom-[14%] right-[2%] h-[28%] w-[28%] rounded-full border border-current bg-current/5" />
      <span className="absolute bottom-[4%] left-1/2 h-px w-[44%] -translate-x-1/2 bg-current/70" />
    </div>
  );
}

const signalIconMap: Record<SignalType, React.ComponentType> = {
  Ads: AdWaveIcon,
  Creative: ViralCreativeIcon,
  Offer: WinningOfferIcon,
  Demand: LocalDemandIcon,
  Products: ProductCrystalIcon,
  Saturation: SaturationDensityIcon,
  Price: PricePositionIcon,
};

function sizeFromValue(value: number) {
  if (value >= 80) return 58;
  if (value >= 60) return 44;
  return 30;
}

function signalTone(value: number) {
  if (value >= 80) {
    return {
      shell: "border-red-200/80 bg-red-50/95 text-red-600 shadow-[0_12px_32px_rgba(220,38,38,0.18)]",
      label: "High concern",
    };
  }

  if (value >= 60) {
    return {
      shell: "border-yellow-200/90 bg-yellow-50/95 text-yellow-700 shadow-[0_10px_28px_rgba(202,138,4,0.14)]",
      label: "Medium concern",
    };
  }

  return {
    shell: "border-emerald-200/90 bg-emerald-50/95 text-emerald-600 shadow-[0_8px_22px_rgba(5,150,105,0.12)]",
    label: "Low concern",
  };
}

function SignalSatellite({ metric, radius }: { metric: SignalMetric; radius: number }) {
  const Icon = signalIconMap[metric.label];
  const position = polarToXY(metric.angle, radius);
  const size = sizeFromValue(metric.value);
  const iconSize = Math.round(size * 0.55);
  const tone = signalTone(metric.value);

  return (
    <div
      className={`absolute z-30 grid place-items-center rounded-full border backdrop-blur-xl ${tone.shell}`}
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        width: size + 58,
        height: size,
        transform: "translate(-50%, -50%)",
      }}
      title={`${metric.label}: ${metric.value} · ${tone.label}`}
      aria-label={`${metric.label} signal strength ${metric.value}, ${tone.label}`}
    >
      <div className="flex items-center gap-1.5 px-1">
        <div style={{ width: iconSize, height: iconSize }}>
          <Icon />
        </div>
        <span
          className={`whitespace-nowrap font-semibold ${
            size >= 58 ? "text-[10px]" : size >= 44 ? "text-[9px]" : "text-[8px]"
          }`}
        >
          {metric.label}
        </span>
      </div>
    </div>
  );
}

function BrandTargetNode({ brand }: { brand: BrandTarget }) {
  const position = polarToXY(brand.angle, brand.ring);
  const satelliteRadius = brand.size / 2 + 64;
  const wrapperSize = brand.size + 210;

  return (
    <div
      className="absolute z-30"
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        width: wrapperSize,
        height: wrapperSize,
        marginLeft: -wrapperSize / 2,
        marginTop: -wrapperSize / 2,
      }}
    >
      <div className="relative h-full w-full">
        <div
          className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-neutral-900/10"
          style={{
            width: satelliteRadius * 2,
            height: satelliteRadius * 2,
            transform: "translate(-50%, -50%)",
          }}
        />

        {brand.metrics.map((metric) => (
          <SignalSatellite key={`${brand.name}-${metric.label}`} metric={metric} radius={satelliteRadius} />
        ))}

        <div
          className="absolute left-1/2 top-1/2 z-40 grid place-items-center rounded-[2rem] border border-white/80 bg-white/90 text-center shadow-[0_22px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
          style={{
            width: brand.size,
            height: brand.size,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="px-2 text-center">
            <p
              className={`truncate font-semibold text-neutral-700 ${
                brand.size < 40 ? "text-[7px]" : brand.size < 60 ? "text-[9px]" : "text-[11px]"
              }`}
            >
              {brand.name}
            </p>
            <p
              className={`font-semibold uppercase text-neutral-400 ${
                brand.size < 40 ? "mt-px text-[5px] tracking-[0.04em]" : "mt-0.5 text-[9px] tracking-[0.14em]"
              }`}
            >
              {brand.descriptor}
            </p>
          </div>
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

      <div className="relative mx-auto h-[48rem] w-full max-w-[60rem] overflow-visible px-6 scale-[0.7] sm:scale-100 origin-center">
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

        <div className="absolute left-1/2 top-1/2 z-20 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2.5rem] bg-red-600 text-white shadow-[0_28px_100px_rgba(220,38,38,0.3)]">
          <div className="text-center">
            <Crosshair className="mx-auto mb-3 text-white/70" size={28} />
            <p className="text-xl font-semibold tracking-[-0.06em]">Jasus AI</p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/35">
              Scanner Core
            </p>
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
