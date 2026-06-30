'use client';

import React, { useEffect, useState, useTransition } from 'react';
import Link from 'next/link';
import {
  Activity,
  AlertCircle,
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Database,
  Gauge,
  LineChart,
  Loader2,
  Radar,
  SearchCheck,
  ShieldAlert,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
} from 'lucide-react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections/Footer';
import type { ProductResearchReport } from '../../../lib/productResearch';

const sourceChips = ['Google Trends', 'Google Search', 'Daraz Marketplace', 'Server-side analysis'];

function formatAxisDate(timestamp: number) {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    month: 'short',
    year: '2-digit',
    timeZone: 'UTC',
  });
}

function clampForecastValue(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function formatCompactNumber(value: number | null) {
  if (value === null) return 'N/A';
  return new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(value);
}

function formatCurrency(value: number | null) {
  if (value === null) return 'N/A';
  return `Rs ${value.toLocaleString()}`;
}

function buildTrendForecast(timeline: ProductResearchReport['facts']['trends']['timeline']) {
  const visibleTimeline = timeline.slice(-52);
  const recent12 = visibleTimeline.slice(-12);
  const recent4 = visibleTimeline.slice(-4);
  const seasonalBuckets = new Map<number, number[]>();

  for (const point of timeline) {
    const month = new Date(point.timestamp * 1000).getUTCMonth();
    const bucket = seasonalBuckets.get(month) || [];
    bucket.push(point.value);
    seasonalBuckets.set(month, bucket);
  }

  const recent12Average = recent12.length ? recent12.reduce((sum, point) => sum + point.value, 0) / recent12.length : 0;
  const recent4Average = recent4.length ? recent4.reduce((sum, point) => sum + point.value, 0) / recent4.length : 0;
  const momentumBias = (recent4Average - recent12Average) * 0.55;
  const lastPoint = visibleTimeline[visibleTimeline.length - 1];

  if (!lastPoint) {
    return [] as Array<{ timestamp: number; value: number }>;
  }

  return Array.from({ length: 12 }, (_, index) => {
    const timestamp = lastPoint.timestamp + (index + 1) * 7 * 24 * 60 * 60;
    const month = new Date(timestamp * 1000).getUTCMonth();
    const seasonalMonthValues = seasonalBuckets.get(month) || [];
    const seasonalAverage =
      seasonalMonthValues.length > 0
        ? seasonalMonthValues.reduce((sum, value) => sum + value, 0) / seasonalMonthValues.length
        : lastPoint.value;
    const blendWeight = 0.68 - Math.min(index, 6) * 0.04;
    const anchoredTrend = lastPoint.value + momentumBias * ((index + 1) / 4);
    const value = clampForecastValue((anchoredTrend * Math.max(blendWeight, 0.38)) + (seasonalAverage * (1 - Math.max(blendWeight, 0.38))));

    return { timestamp, value };
  });
}

function getCurrentPointNarrative(
  report: ProductResearchReport
): {
  label: string;
  note: string;
} {
  const { demandCurve } = report.analysis;
  const { currentVsPeakPercent, velocity12Week, velocity4Week, seasonalityScore } = report.facts.trends;

  if (demandCurve === 'Seasonal') {
    if (velocity4Week >= 10) {
      return { label: 'Entering seasonal rise', note: 'Demand is climbing into its active seasonal window.' };
    }
    if (velocity4Week <= -10) {
      return { label: 'Post-peak cooldown', note: 'Demand is fading after a recent seasonal high.' };
    }
    return { label: 'Seasonal baseline', note: 'Demand is sitting between larger seasonal spikes.' };
  }

  if (demandCurve === 'Growth') {
    if (currentVsPeakPercent < 45) {
      return { label: 'Early growth', note: 'Demand is rising but still far from peak saturation.' };
    }
    if (currentVsPeakPercent < 75) {
      return { label: 'Mid growth', note: 'Demand is accelerating toward mainstream adoption.' };
    }
    return { label: 'Late growth', note: 'Demand is strong and approaching maturity.' };
  }

  if (demandCurve === 'Mature') {
    if (velocity12Week >= 8) {
      return { label: 'Healthy mature demand', note: 'The market is stable with mild upward pressure.' };
    }
    if (velocity12Week <= -8) {
      return { label: 'Softening maturity', note: 'Demand is still established but starting to cool.' };
    }
    return { label: 'Stable maturity', note: 'The market is proven and relatively flat.' };
  }

  if (demandCurve === 'Declining') {
    if (currentVsPeakPercent > 45) {
      return { label: 'Early decline', note: 'Demand is off peak and slipping downward.' };
    }
    return { label: 'Late decline', note: 'Demand is well below peak and still weakening.' };
  }

  if (demandCurve === 'Fad') {
    if (currentVsPeakPercent >= 65) {
      return { label: 'Near fad peak', note: 'Demand is elevated but vulnerable to a sharp reversal.' };
    }
    return { label: 'Fad fadeout', note: 'Demand has already dropped off its spike.' };
  }

  return {
    label: currentVsPeakPercent >= 65 ? 'Fashion upswing' : 'Fashion build phase',
    note: 'Demand is trend-led and moving more gradually than a fad.',
  };
}

function scoreTone(score: number) {
  if (score >= 75) return 'text-emerald-700 bg-emerald-50 ring-emerald-100';
  if (score >= 50) return 'text-amber-700 bg-amber-50 ring-amber-100';
  return 'text-rose-700 bg-rose-50 ring-rose-100';
}

function recommendationTone(recommendation: ProductResearchReport['analysis']['recommendation']) {
  switch (recommendation) {
    case 'Launch':
    case 'Scale':
      return 'bg-emerald-600 text-white';
    case 'Test':
      return 'bg-stone-950 text-white';
    case 'Wait':
      return 'bg-amber-500 text-stone-950';
    case 'Avoid':
      return 'bg-rose-600 text-white';
  }
}

function confidenceTone(confidence: 'Low' | 'Medium' | 'High') {
  if (confidence === 'High') return 'bg-emerald-50 text-emerald-700 ring-emerald-100';
  if (confidence === 'Medium') return 'bg-amber-50 text-amber-700 ring-amber-100';
  return 'bg-rose-50 text-rose-700 ring-rose-100';
}

function EntityList({
  title,
  eyebrow,
  icon: Icon,
  entities,
  emptyLabel,
}: {
  title: string;
  eyebrow: string;
  icon: React.ComponentType<{ className?: string }>;
  entities: ProductResearchReport['facts']['industry']['currentPlayers'];
  emptyLabel: string;
}) {
  return (
    <div className="rounded-[2rem] bg-white p-6 ring-1 ring-stone-200">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-stone-400">{eyebrow}</p>
          <h3 className="mt-1 text-2xl font-black text-stone-950">{title}</h3>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        {entities.length ? entities.map((entity) => (
          <a
            key={entity.link}
            href={entity.link}
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-stone-200 p-4 transition hover:border-emerald-200 hover:bg-emerald-50/40"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-black text-stone-950">{entity.name}</p>
              <span className="shrink-0 rounded-full bg-stone-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-stone-500">
                {entity.domain}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{entity.snippet || 'Source surfaced from live search results for this market.'}</p>
          </a>
        )) : (
          <div className="rounded-2xl bg-stone-50 p-4 text-sm font-semibold text-stone-600">
            {emptyLabel}
          </div>
        )}
      </div>
    </div>
  );
}

function DemandCurve({ report }: { report: ProductResearchReport }) {
  const curve = report.analysis.demandCurve;
  const currentPoint = getCurrentPointNarrative(report);
  const observedTimeline = report.facts.trends.timeline.slice(-52);
  const forecastTimeline = buildTrendForecast(report.facts.trends.timeline);
  const combinedTimeline = [...observedTimeline, ...forecastTimeline];
  const chartWidth = 336;
  const chartHeight = 172;
  const chartLeft = 28;
  const chartTop = 18;
  const chartBottom = chartTop + chartHeight;
  const chartRight = chartLeft + chartWidth;
  const yMax = Math.max(100, ...combinedTimeline.map((point) => point.value));
  const yMid = Math.round(yMax / 2);
  const firstPoint = combinedTimeline[0];
  const midPoint = combinedTimeline[Math.floor(combinedTimeline.length / 2)];
  const lastPoint = combinedTimeline[combinedTimeline.length - 1];

  const observedPlotPoints = observedTimeline.map((point, index) => {
    const x =
      combinedTimeline.length === 1
        ? chartLeft
        : chartLeft + (index / (combinedTimeline.length - 1)) * chartWidth;
    const y = chartBottom - (point.value / yMax) * chartHeight;
    return { x, y, value: point.value, timestamp: point.timestamp };
  });

  const forecastPlotPoints = forecastTimeline.map((point, index) => {
    const combinedIndex = observedTimeline.length + index;
    const x =
      combinedTimeline.length === 1
        ? chartLeft
        : chartLeft + (combinedIndex / (combinedTimeline.length - 1)) * chartWidth;
    const y = chartBottom - (point.value / yMax) * chartHeight;
    return { x, y, value: point.value, timestamp: point.timestamp };
  });

  const observedLinePath = observedPlotPoints
    .map((point, index) => `${index === 0 ? 'M' : 'L'}${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(' ');
  const latestObservedPoint = observedPlotPoints[observedPlotPoints.length - 1] || {
    x: chartLeft,
    y: chartBottom,
    value: 0,
    timestamp: 0,
  };
  const areaPath = `${observedLinePath} L ${latestObservedPoint.x} ${chartBottom} L ${chartLeft} ${chartBottom} Z`;
  const forecastLinePath =
    forecastPlotPoints.length > 0
      ? [`M${latestObservedPoint.x.toFixed(1)} ${latestObservedPoint.y.toFixed(1)}`]
          .concat(forecastPlotPoints.map((point) => `L${point.x.toFixed(1)} ${point.y.toFixed(1)}`))
          .join(' ')
      : '';
  const forecastEndPoint = forecastPlotPoints[forecastPlotPoints.length - 1];

  return (
    <div className="rounded-[2rem] bg-white p-6 ring-1 ring-stone-200">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-emerald-700">Demand curve</p>
          <h3 className="mt-2 text-2xl font-black text-stone-950">{curve}</h3>
          <p className="mt-2 text-sm font-semibold text-stone-600">
            Current point: <span className="text-emerald-700">{currentPoint.label}</span>
          </p>
        </div>
        <div className="rounded-2xl bg-stone-50 px-4 py-3 text-right ring-1 ring-stone-200">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-stone-400">Latest trend</p>
          <p className="mt-1 text-lg font-black text-stone-950">{latestObservedPoint.value}/100</p>
          <p className="text-xs font-semibold text-stone-500">{formatAxisDate(latestObservedPoint.timestamp)}</p>
        </div>
      </div>
      <svg viewBox="0 0 392 226" className="h-64 w-full" role="img" aria-label={`${curve} demand curve`}>
        <defs>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
          <linearGradient id="curveAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <line x1={chartLeft} y1={chartBottom} x2={chartRight} y2={chartBottom} stroke="#d6d3d1" strokeWidth="2" />
        <line x1={chartLeft} y1={chartTop} x2={chartLeft} y2={chartBottom} stroke="#d6d3d1" strokeWidth="2" />
        <line x1={chartLeft} y1={chartTop} x2={chartRight} y2={chartTop} stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1={chartLeft} y1={chartTop + chartHeight / 2} x2={chartRight} y2={chartTop + chartHeight / 2} stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d={areaPath} fill="url(#curveAreaGradient)" />
        <path d={observedLinePath} fill="none" stroke="url(#curveGradient)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        {forecastLinePath && (
          <path d={forecastLinePath} fill="none" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="7 7" opacity="0.75" />
        )}
        <circle cx={latestObservedPoint.x} cy={latestObservedPoint.y} r="8" fill="#ffffff" stroke="#059669" strokeWidth="4" />
        <circle cx={latestObservedPoint.x} cy={latestObservedPoint.y} r="3" fill="#059669" />
        <path d={`M${latestObservedPoint.x} ${latestObservedPoint.y - 22} L${latestObservedPoint.x} ${latestObservedPoint.y - 10}`} stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
        <text
          x={Math.min(Math.max(latestObservedPoint.x - 34, chartLeft), chartRight - 76)}
          y={Math.max(latestObservedPoint.y - 28, chartTop + 10)}
          className="fill-emerald-700 text-[10px] font-black"
        >
          Current
        </text>
        {forecastEndPoint && (
          <>
            <circle cx={forecastEndPoint.x} cy={forecastEndPoint.y} r="5.5" fill="#0f172a" />
            <text
              x={Math.min(Math.max(forecastEndPoint.x - 26, chartLeft), chartRight - 62)}
              y={Math.max(forecastEndPoint.y - 10, chartTop + 10)}
              className="fill-slate-700 text-[10px] font-black"
            >
              12w
            </text>
          </>
        )}
        <text x="2" y={chartTop + 4} className="fill-stone-400 text-[10px] font-semibold">{yMax}</text>
        <text x="6" y={chartTop + chartHeight / 2 + 4} className="fill-stone-400 text-[10px] font-semibold">{yMid}</text>
        <text x="14" y={chartBottom + 4} className="fill-stone-400 text-[10px] font-semibold">0</text>
        {firstPoint && (
          <text x={chartLeft} y="206" className="fill-stone-400 text-[10px] font-semibold">
            {formatAxisDate(firstPoint.timestamp)}
          </text>
        )}
        {midPoint && (
          <text x={chartLeft + chartWidth / 2 - 18} y="206" className="fill-stone-400 text-[10px] font-semibold">
            {formatAxisDate(midPoint.timestamp)}
          </text>
        )}
        {lastPoint && (
          <text x={chartRight - 40} y="206" className="fill-stone-400 text-[10px] font-semibold">
            {formatAxisDate(lastPoint.timestamp)}
          </text>
        )}
      </svg>
      <div className="mt-3 grid gap-3 rounded-2xl bg-stone-50 p-4 ring-1 ring-stone-200 sm:grid-cols-[auto_auto_1fr] sm:items-center">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-6 rounded-full bg-emerald-500" />
          <span className="text-[11px] font-bold text-stone-600">Observed demand</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-6 border-t-2 border-dashed border-slate-700" />
          <span className="text-[11px] font-bold text-stone-600">12-week projection</span>
        </div>
        <p className="text-[11px] font-semibold leading-relaxed text-stone-500">
          Y-axis: Google Trends interest index. X-axis: weekly timeline from the latest observed year plus forward projection.
        </p>
      </div>
      <div className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold leading-relaxed text-emerald-800 ring-1 ring-emerald-100">
        {currentPoint.note} The dashed segment is a short forecast using the recent trend plus seasonal pattern from the historical series.
      </div>
    </div>
  );
}

export default function ProductResearchWorkspace() {
  const [productIdea, setProductIdea] = useState('Raincoat');
  const [market, setMarket] = useState('Nepal');
  const [priceGoal, setPriceGoal] = useState('1500');
  const [goal, setGoal] = useState('Quick validation');
  const [report, setReport] = useState<ProductResearchReport | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const runResearch = (nextProductIdea = productIdea, nextMarket = market, nextPriceGoal = priceGoal, nextGoal = goal) => {
    startTransition(async () => {
      setError(null);
      try {
        const response = await fetch('/api/product-market-research/report', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            productIdea: nextProductIdea,
            market: nextMarket,
            priceGoal: nextPriceGoal,
            goal: nextGoal,
          }),
        });

        const payload = await response.json();
        if (!response.ok) {
          throw new Error(payload.error || 'Unable to generate the report.');
        }

        setReport(payload);
      } catch (fetchError) {
        setReport(null);
        setError(fetchError instanceof Error ? fetchError.message : 'Unable to generate the report.');
      }
    });
  };

  useEffect(() => {
    runResearch('Raincoat', 'Nepal', '1500', 'Quick validation');
  }, []);

  const metrics = report
    ? [
        { label: 'Demand Score', value: report.analysis.demandScore, icon: SearchCheck },
        { label: 'Trend Velocity', value: report.analysis.trendVelocityScore, icon: TrendingUp },
        { label: 'Ad Density', value: report.analysis.adDensityScore, icon: Radar },
        { label: 'Competition', value: report.analysis.competitionScore, icon: Target },
      ]
    : [];

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="pt-14">
        <section className="relative overflow-hidden bg-white pb-16 pt-20 md:pb-24 md:pt-28">
          <div className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(80%_70%_at_top_right,white,transparent)]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="workspace-grid" width="44" height="44" patternUnits="userSpaceOnUse">
                  <path d="M 44 0 L 0 0 0 44" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#workspace-grid)" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-sm font-bold text-emerald-700">
                  <Sparkles className="h-4 w-4" />
                  Product Validation Engine
                </div>
                <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight text-stone-950 md:text-6xl">
                  Research a product idea with <span className="text-emerald-600">live market evidence</span>.
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  This workspace pulls factual inputs from Google Trends, Google Search, and marketplace listings, then derives a validation view from those observed signals.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {sourceChips.map((chip) => (
                    <span key={chip} className="rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-stone-600">
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-10 rounded-[2rem] bg-stone-950 p-6 text-white">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-emerald-300">Current engine read</p>
                  {report ? (
                    <>
                      <p className="mt-3 text-3xl font-black">{report.analysis.validationScore}/100</p>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">{report.analysis.summary}</p>
                    </>
                  ) : (
                    <div className="mt-4 flex items-center gap-3 text-sm text-white/70">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Fetching live data sources...
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-[2.25rem] border border-stone-200 bg-[#fafaf9] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-8">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-stone-400">Research request</p>
                    <h2 className="mt-2 text-2xl font-black text-stone-950">Generate a factual report</h2>
                  </div>
                  <Database className="h-5 w-5 text-emerald-600" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-stone-700">Product idea</span>
                    <input
                      value={productIdea}
                      onChange={(event) => setProductIdea(event.target.value)}
                      className="h-14 w-full rounded-2xl border border-stone-200 bg-white px-4 text-base font-semibold text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                      placeholder="Raincoat"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-stone-700">Market</span>
                    <input
                      value={market}
                      onChange={(event) => setMarket(event.target.value)}
                      className="h-14 w-full rounded-2xl border border-stone-200 bg-white px-4 text-base font-semibold text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                      placeholder="Nepal"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-stone-700">Target selling price</span>
                    <input
                      value={priceGoal}
                      onChange={(event) => setPriceGoal(event.target.value)}
                      className="h-14 w-full rounded-2xl border border-stone-200 bg-white px-4 text-base font-semibold text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                      placeholder="1500"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-stone-700">Research objective</span>
                    <select
                      value={goal}
                      onChange={(event) => setGoal(event.target.value)}
                      className="h-14 w-full rounded-2xl border border-stone-200 bg-white px-4 text-base font-semibold text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                    >
                      <option>Quick validation</option>
                      <option>Pre-launch pricing</option>
                      <option>Competitive gap analysis</option>
                      <option>Scale readiness</option>
                    </select>
                  </label>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => runResearch()}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-stone-950 px-6 text-base font-bold text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={isPending}
                  >
                    {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <BarChart3 className="h-5 w-5" />}
                    {isPending ? 'Researching...' : 'Run live research'}
                  </button>
                  <div className="flex h-14 items-center rounded-2xl bg-white px-4 text-sm font-semibold text-stone-500 ring-1 ring-stone-200">
                    No mock data. Results only render from live sources.
                  </div>
                </div>

                {error && (
                  <div className="mt-6 rounded-[1.5rem] border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                      <p>{error}</p>
                    </div>
                  </div>
                )}

                {report && (
                  <div className="mt-6 rounded-[1.75rem] bg-white p-5 ring-1 ring-stone-200">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-stone-400">Decision snapshot</p>
                        <p className="mt-2 text-lg font-black text-stone-950">
                          {report.query.productIdea} in {report.query.market} shows <span className="text-emerald-600">{report.analysis.opportunityLevel.toLowerCase()} opportunity</span>.
                        </p>
                      </div>
                      <div className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] ${recommendationTone(report.analysis.recommendation)}`}>
                        {report.analysis.recommendation}
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-stone-600">
                      Objective: <span className="font-bold text-stone-900">{report.query.goal || 'Quick validation'}</span>. Generated from live sources on{' '}
                      <span className="font-bold text-stone-900">{new Date(report.generatedAt).toLocaleString()}</span>.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">
                      Category model: <span className="font-bold capitalize text-stone-900">{report.analysis.category}</span>.
                      {report.analysis.priceFitScore !== null ? (
                        <> Price-fit score: <span className="font-bold text-stone-900">{report.analysis.priceFitScore}/100</span>.</>
                      ) : null}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fafaf9] py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-start gap-6 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
            <div className="grid content-start gap-6 self-start">
              {report ? (
                <>
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {metrics.map((metric) => (
                      <div key={metric.label} className="rounded-[1.75rem] bg-white p-5 ring-1 ring-stone-200">
                        <div className="flex items-center justify-between">
                          <metric.icon className="h-5 w-5 text-emerald-600" />
                          <span className={`rounded-full px-3 py-1 text-xs font-black ring-1 ${scoreTone(metric.value)}`}>
                            {metric.value}/100
                          </span>
                        </div>
                        <p className="mt-6 text-sm font-bold text-stone-500">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <DemandCurve report={report} />

                  <div className="grid items-start gap-6 xl:grid-cols-2">
                    <div className="rounded-[2rem] bg-white p-6 ring-1 ring-stone-200">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                          <Activity className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-stone-400">Reasoning</p>
                          <h3 className="mt-1 text-2xl font-black text-stone-950">Why the engine classified it this way</h3>
                        </div>
                      </div>
                      <div className="mt-6 space-y-4">
                        {report.analysis.rationale.map((item) => (
                          <div key={item} className="flex gap-3 rounded-2xl bg-stone-50 p-4">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                            <p className="text-sm leading-relaxed text-stone-600">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[2rem] bg-stone-950 p-6 text-white">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                          <Gauge className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/40">Decision</p>
                          <h3 className="mt-1 text-2xl font-black">Risk and opportunity</h3>
                        </div>
                      </div>
                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-white/40">Risk level</p>
                          <p className="mt-3 text-3xl font-black">{report.analysis.riskLevel}</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-white/40">Opportunity</p>
                          <p className="mt-3 text-3xl font-black text-emerald-300">{report.analysis.opportunityLevel}</p>
                        </div>
                      </div>
                      <div className="mt-6 rounded-2xl bg-emerald-500/10 p-4 text-sm leading-relaxed text-emerald-100">
                        Recommendation: <span className="font-black text-white">{report.analysis.recommendation}</span>. This is derived from observed trend movement, visible competitor domains, and marketplace pricing and sold-count evidence.
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[2rem] bg-white p-6 ring-1 ring-stone-200">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-stone-400">Observed trend facts</p>
                        <h3 className="mt-1 text-2xl font-black text-stone-950">Demand and seasonality inputs</h3>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                      <div className="rounded-2xl bg-stone-50 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-stone-400">Latest 12 weeks</p>
                        <p className="mt-2 text-3xl font-black text-stone-950">{report.facts.trends.latest12WeekAverage}</p>
                      </div>
                      <div className="rounded-2xl bg-stone-50 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-stone-400">Previous 12 weeks</p>
                        <p className="mt-2 text-3xl font-black text-stone-950">{report.facts.trends.previous12WeekAverage}</p>
                      </div>
                      <div className="rounded-2xl bg-stone-50 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-stone-400">12-week velocity</p>
                        <p className="mt-2 text-3xl font-black text-stone-950">{report.facts.trends.velocity12Week}%</p>
                      </div>
                      <div className="rounded-2xl bg-stone-50 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-stone-400">Current vs peak</p>
                        <p className="mt-2 text-3xl font-black text-stone-950">{report.facts.trends.currentVsPeakPercent}%</p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {report.facts.trends.topMonths.map((month) => (
                        <span key={month.month} className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
                          {month.month}: {month.average}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="rounded-[2rem] bg-white p-10 ring-1 ring-stone-200">
                  <div className="flex items-center gap-3 text-stone-500">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <p className="text-sm font-semibold">Loading factual research signals...</p>
                  </div>
                </div>
              )}
            </div>

            <div className="grid content-start gap-6 self-start">
              {report && (
                <>
                  <div className="rounded-[2rem] bg-white p-6 ring-1 ring-stone-200">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                        <BarChart3 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-stone-400">Actionable next steps</p>
                        <h3 className="mt-1 text-2xl font-black text-stone-950">Recommended actions</h3>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      {report.analysis.actions.map((action) => (
                        <div key={action} className="rounded-2xl bg-stone-50 p-4 text-sm font-semibold leading-relaxed text-stone-700">
                          {action}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2rem] bg-white p-6 ring-1 ring-stone-200">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 ring-1 ring-amber-100">
                        <ShieldAlert className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-stone-400">Observed gaps</p>
                        <h3 className="mt-1 text-2xl font-black text-stone-950">Spaces worth checking</h3>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      {report.analysis.marketGaps.length ? report.analysis.marketGaps.map((gap) => (
                        <div key={gap} className="rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
                          {gap}
                        </div>
                      )) : (
                        <div className="rounded-2xl bg-stone-50 p-4 text-sm font-semibold text-stone-600">
                          No obvious gap surfaced from the current top listing sample.
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-[2rem] bg-white p-6 ring-1 ring-stone-200">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                        <Radar className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-stone-400">Marketplace facts</p>
                        <h3 className="mt-1 text-2xl font-black text-stone-950">Pricing and sales evidence</h3>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-3">
                      <div className="rounded-2xl border border-stone-200 px-4 py-3 text-sm font-semibold text-stone-700">
                        Visible price range: Rs {report.facts.marketplace.priceMin?.toLocaleString() || 'N/A'} to Rs {report.facts.marketplace.priceMax?.toLocaleString() || 'N/A'}
                      </div>
                      <div className="rounded-2xl border border-stone-200 px-4 py-3 text-sm font-semibold text-stone-700">
                        Median observed price: Rs {report.facts.marketplace.priceMedian?.toLocaleString() || 'N/A'}
                      </div>
                      <div className="rounded-2xl border border-stone-200 px-4 py-3 text-sm font-semibold text-stone-700">
                        Parsed sold-count total: {report.facts.marketplace.soldCountTotal?.toLocaleString() || 'N/A'}
                      </div>
                      <div className="rounded-2xl border border-stone-200 px-4 py-3 text-sm font-semibold text-stone-700">
                        Parsed review total: {report.facts.marketplace.reviewCountTotal?.toLocaleString() || 'N/A'} • Review coverage {report.facts.marketplace.reviewCoverageRatio}%
                      </div>
                      <div className="rounded-2xl border border-stone-200 px-4 py-3 text-sm font-semibold text-stone-700">
                        Price spread: {report.facts.marketplace.priceSpreadPercent !== null ? `${report.facts.marketplace.priceSpreadPercent}%` : 'N/A'} • Sold coverage {report.facts.marketplace.soldCoverageRatio}%
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {report.facts.marketplace.priceClusters.map((cluster) => (
                        <span key={cluster.label} className="rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-stone-600">
                          {cluster.label}: {cluster.count}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 space-y-3">
                      {report.facts.marketplace.topListings.map((listing) => (
                        <a
                          key={listing.url}
                          href={listing.url}
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-2xl bg-stone-50 p-4 transition hover:bg-stone-100"
                        >
                          <p className="text-sm font-black text-stone-950">{listing.title}</p>
                          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                            Rs {listing.price.toLocaleString()}
                            {listing.soldCount !== null ? ` • ${listing.soldCount} sold` : ''}
                            {listing.reviewCount !== null ? ` • ${listing.reviewCount} reviews` : ''}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2rem] bg-white p-6 ring-1 ring-stone-200">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                        <UsersRound className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-stone-400">Estimated buyer volume</p>
                        <h3 className="mt-1 text-2xl font-black text-stone-950">How many users seem to be buying</h3>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-stone-50 p-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-stone-400">Confidence</p>
                        <p className="mt-2 text-2xl font-black text-stone-950">{report.facts.marketplace.buyerEstimate.confidence}</p>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-black ring-1 ${confidenceTone(report.facts.marketplace.buyerEstimate.confidence)}`}>
                        Estimate only
                      </span>
                    </div>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      <div className="rounded-2xl border border-stone-200 px-4 py-3 text-sm font-semibold text-stone-700">
                        Visible sold units: {report.facts.marketplace.buyerEstimate.visibleSoldUnits?.toLocaleString() || 'N/A'}
                      </div>
                      <div className="rounded-2xl border border-stone-200 px-4 py-3 text-sm font-semibold text-stone-700">
                        Review-derived orders: {report.facts.marketplace.buyerEstimate.reviewDerivedLow?.toLocaleString() || 'N/A'} to {report.facts.marketplace.buyerEstimate.reviewDerivedHigh?.toLocaleString() || 'N/A'}
                      </div>
                      <div className="rounded-2xl border border-stone-200 px-4 py-3 text-sm font-semibold text-stone-700">
                        Estimated buyer range: {report.facts.marketplace.buyerEstimate.estimatedBuyerRangeLow?.toLocaleString() || 'N/A'} to {report.facts.marketplace.buyerEstimate.estimatedBuyerRangeHigh?.toLocaleString() || 'N/A'}
                      </div>
                      <div className="rounded-2xl border border-stone-200 px-4 py-3 text-sm font-semibold text-stone-700">
                        Blended estimate: {report.facts.marketplace.buyerEstimate.blendedEstimatedBuyers?.toLocaleString() || 'N/A'}
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-stone-600">
                      {report.facts.marketplace.buyerEstimate.method}
                    </p>
                  </div>

                  <div className="rounded-[2rem] bg-white p-6 ring-1 ring-stone-200">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                        <LineChart className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-stone-400">Estimated market size</p>
                        <h3 className="mt-1 text-2xl font-black text-stone-950">Visible demand and revenue band</h3>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-3 md:grid-cols-2">
                      <div className="rounded-2xl bg-stone-50 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-stone-400">Active buyers</p>
                        <p className="mt-2 text-3xl font-black text-stone-950">
                          {formatCompactNumber(report.facts.industry.estimatedMarketSize.activeBuyerRangeLow)} to {formatCompactNumber(report.facts.industry.estimatedMarketSize.activeBuyerRangeHigh)}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-stone-50 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-stone-400">Annual visible revenue</p>
                        <p className="mt-2 text-3xl font-black text-stone-950">
                          {formatCompactNumber(report.facts.industry.estimatedMarketSize.annualRevenueRangeLow)} to {formatCompactNumber(report.facts.industry.estimatedMarketSize.annualRevenueRangeHigh)}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-stone-200 px-4 py-3 text-sm font-semibold text-stone-700">
                        Midpoint estimate: {formatCurrency(report.facts.industry.estimatedMarketSize.annualRevenueMid)}
                      </div>
                      <div className="rounded-2xl border border-stone-200 px-4 py-3 text-sm font-semibold text-stone-700">
                        Confidence: <span className="font-black text-stone-950">{report.facts.industry.estimatedMarketSize.confidence}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-stone-600">
                      {report.facts.industry.estimatedMarketSize.method}
                    </p>
                  </div>

                  <EntityList
                    title="Current players"
                    eyebrow="Observed competitors"
                    icon={Target}
                    entities={report.facts.industry.currentPlayers}
                    emptyLabel="No strong player list surfaced from the current live search sample."
                  />

                  <EntityList
                    title="Supplier details"
                    eyebrow="Sourcing evidence"
                    icon={Database}
                    entities={report.facts.industry.suppliers}
                    emptyLabel="No clear supplier pages were found in the current live search sample."
                  />

                  <EntityList
                    title="Local factories"
                    eyebrow="Manufacturing evidence"
                    icon={Building2}
                    entities={report.facts.industry.localFactories}
                    emptyLabel="No clear local factory or manufacturer pages were found in the current live search sample."
                  />

                  <div className="rounded-[2rem] bg-white p-6 ring-1 ring-stone-200">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-stone-400">Competitor evidence</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-stone-50 p-4 text-sm font-semibold text-stone-700">
                        Total Google results: {report.facts.search.totalResults?.toLocaleString() || 'N/A'}
                      </div>
                      <div className="rounded-2xl bg-stone-50 p-4 text-sm font-semibold text-stone-700">
                        Ecommerce domains: {report.facts.search.ecommerceDomainCount} • Social domains: {report.facts.search.socialDomainCount}
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {report.facts.search.competitorDomains.map((domain) => (
                        <span key={domain} className="rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-stone-600">
                          {domain}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 space-y-3">
                      {report.facts.search.results.map((result) => (
                        <a
                          key={result.link}
                          href={result.link}
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-2xl border border-stone-200 p-4 transition hover:border-emerald-200 hover:bg-emerald-50/40"
                        >
                          <p className="text-sm font-black text-stone-950">{result.title}</p>
                          <p className="mt-2 text-sm leading-relaxed text-stone-600">{result.snippet}</p>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2rem] bg-white p-6 ring-1 ring-stone-200">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-stone-400">Source log</p>
                    <div className="mt-4 space-y-3">
                      {report.sources.map((source) => (
                        <a
                          key={source.url}
                          href={source.url}
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-2xl bg-stone-50 p-4 transition hover:bg-stone-100"
                        >
                          <p className="text-sm font-black text-stone-950">{source.name}</p>
                          <p className="mt-1 text-sm leading-relaxed text-stone-600">{source.note}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="bg-white pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="rounded-[2.5rem] bg-stone-950 p-10 text-white md:p-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-emerald-300">Coverage note</p>
                  <h2 className="mt-3 text-4xl font-black tracking-tight">This version is factual, but still expandable.</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/65">
                    Right now the page uses live Google Trends, live Google search results, and live Daraz marketplace evidence. We can extend it next with Meta Ad Library and TikTok trend sources once you want those connected too.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/product-market-research"
                    className="inline-flex h-14 items-center justify-center rounded-2xl bg-white px-6 text-base font-bold text-stone-950 transition hover:bg-stone-100"
                  >
                    Back to service page
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 text-base font-bold text-white transition hover:bg-emerald-700"
                  >
                    Add more sources
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
