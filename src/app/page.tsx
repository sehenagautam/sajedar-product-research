// Sajedar Landing Page - Modern, Unique, Animation-rich
'use client';
import { useEffect, useState, useRef } from 'react';
import Player from 'lottie-react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Mic, Users, Rocket, Lightbulb, Linkedin, Facebook } from 'lucide-react';
import Image from 'next/image';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import ChatDashboard from './ChatDashboard';
import Link from 'next/link';
import ChatDemoSection from './ChatDemo';

// Import fonts
import '@fontsource/dm-serif-display';
import '@fontsource/inter';

// Remove Lottie JSON imports and use undefined as placeholder
// Placeholder Lottie animation imports (replace with your own JSON files in /public)
// import heroBg from '../../public/hero-bg.json';
// import heroBot from '../../public/hero-bot.json';
// import showcase from '../../public/showcase.json';
// import benefits from '../../public/benefits.json';

const GREEN = 'from-emerald-400 via-emerald-500 to-emerald-600';
const GREEN_SOLID = 'text-emerald-500';

// Helper: Animate a dot along a given SVG path string (d)
function AnimatedDotOnPath({ d, color, progress }: { d: string, color: string, progress: number }) {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [d]);

  useEffect(() => {
    if (pathRef.current && pathLength > 0) {
      const t = progress;
      const pt = pathRef.current.getPointAtLength(t * pathLength);
      setDotPos({ x: pt.x, y: pt.y });
    }
  }, [progress, pathLength]);

  return (
    <g>
      <path ref={pathRef} d={d} fill="none" stroke="none" />
      <motion.circle
        r={7}
        fill={color}
        cx={dotPos.x}
        cy={dotPos.y}
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </g>
  );
}

// --- Agentic Flow Animation Sequence ---
const WEBHOOK6_END = { x: 200, y: 110 };
const AGENT_CENTER = { x: 410, y: 110 };
const RESPOND8_LEFT = { x: 800, y: 110 };
const TOOL_NODES = [
  { x: 200, y: 222 },
  { x: 340, y: 222 },
  { x: 480, y: 222 },
  { x: 620, y: 222 },
  { x: 760, y: 222 },
  { x: 900, y: 222 },
];
const ORANGE_PATHS = [
  'M410 110 Q 305 170 200 222',
  'M410 110 Q 375 170 340 222',
  'M410 110 Q 445 170 480 222',
  'M410 110 Q 515 170 620 222',
  'M410 110 Q 585 170 760 222',
  'M410 110 Q 655 170 900 222',
];

function useAgenticFlowSequence() {
  // States: 'blue-to-agent', 'orange-out', 'orange-back', 'green-to-respond', 'reset'
  const [phase, setPhase] = useState('blue-to-agent');
  const [orangeProgress, setOrangeProgress] = useState(Array(6).fill(0));
  const [orangeReturning, setOrangeReturning] = useState(false);
  const [blueProgress, setBlueProgress] = useState(0);
  const [greenProgress, setGreenProgress] = useState(0);
  // Track if blue animation has started (to prevent blip at agent)
  const [blueStarted, setBlueStarted] = useState(false);

  // --- Robust Animation Management ---
  const rafRef = useRef<number | null>(null);
  const timeoutRefs = useRef<number[]>([]);
  const mountedRef = useRef(true);
  // Track if blue phase just started to avoid blue ball blip at agent
  const blueJustStartedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      timeoutRefs.current.forEach((id) => clearTimeout(id));
      timeoutRefs.current = [];
    };
  }, []);

  useEffect(() => {
    // On phase change, clear previous timeouts and animation frames
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    timeoutRefs.current.forEach((id) => clearTimeout(id));
    timeoutRefs.current = [];

    // Helper to safely update state only if mounted
    const safeSet = (setter: (v: any) => void, value: any) => {
      if (mountedRef.current) setter(value);
    };

    // --- Animation Phases ---
    if (phase === 'blue-to-agent') {
      setBlueStarted(false); // Reset blueStarted on phase change
      safeSet(setBlueProgress, 0);
      safeSet(setOrangeProgress, Array(6).fill(0));
      safeSet(setOrangeReturning, false);
      safeSet(setGreenProgress, 0);
      const start = performance.now();
      function animate(ts: number) {
        if (!mountedRef.current) return;
        const t = Math.min((ts - start) / 1200, 1);
        safeSet(setBlueProgress, t);
        if (t > 0) safeSet(setBlueStarted, true); // Mark blue as started after first frame
        if (blueJustStartedRef.current && t > 0) blueJustStartedRef.current = false;
        if (t < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          const timeoutId = window.setTimeout(() => mountedRef.current && setPhase('orange-out'), 200);
          timeoutRefs.current.push(timeoutId);
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    } else if (phase === 'orange-out') {
      safeSet(setOrangeProgress, Array(6).fill(0));
      safeSet(setOrangeReturning, false);
      const start = performance.now();
      function animate(ts: number) {
        if (!mountedRef.current) return;
        const t = Math.min((ts - start) / 900, 1);
        safeSet(setOrangeProgress, Array(6).fill(t));
        if (t < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          const timeoutId = window.setTimeout(() => mountedRef.current && setPhase('orange-back'), 200);
          timeoutRefs.current.push(timeoutId);
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    } else if (phase === 'orange-back') {
      safeSet(setOrangeReturning, true);
      const start = performance.now();
      function animate(ts: number) {
        if (!mountedRef.current) return;
        const t = Math.min((ts - start) / 900, 1);
        safeSet(setOrangeProgress, Array(6).fill(1 - t));
        if (t < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          const timeoutId = window.setTimeout(() => mountedRef.current && setPhase('green-to-respond'), 200);
          timeoutRefs.current.push(timeoutId);
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    } else if (phase === 'green-to-respond') {
      safeSet(setGreenProgress, 0);
      const start = performance.now();
      function animate(ts: number) {
        if (!mountedRef.current) return;
        const t = Math.min((ts - start) / 1200, 1);
        safeSet(setGreenProgress, t);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          const timeoutId = window.setTimeout(() => mountedRef.current && setPhase('reset'), 400);
          timeoutRefs.current.push(timeoutId);
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    } else if (phase === 'reset') {
      const timeoutId = window.setTimeout(() => mountedRef.current && setPhase('blue-to-agent'), 600);
      timeoutRefs.current.push(timeoutId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  return {
    phase,
    bluePos: {
      x: WEBHOOK6_END.x + (AGENT_CENTER.x - WEBHOOK6_END.x) * blueProgress,
      y: WEBHOOK6_END.y,
      // Only show blue ball if phase is blue-to-agent, animation has started, and it hasn't reached Agent11
      visible: phase === 'blue-to-agent' && blueStarted && blueProgress < 1,
    },
    orangeBalls: ORANGE_PATHS.map((d, i) => ({
      d,
      progress: orangeProgress[i],
      visible: phase === 'orange-out' || phase === 'orange-back',
    })),
    greenPos: {
      x: AGENT_CENTER.x + (RESPOND8_LEFT.x - AGENT_CENTER.x) * greenProgress,
      y: AGENT_CENTER.y,
      // Only show green ball while animating, not after it reaches Webhook8
      visible: phase === 'green-to-respond' && greenProgress < 1,
    },
  };
}

// --- Agentic Flow Diagram as a dedicated component to minimize re-renders and memory usage ---
function AgenticFlowDiagram() {
  // Animation logic is fully contained here, so only this component re-renders on animation frame changes.
  const flow = useAgenticFlowSequence();
  return (
    <div className="w-full max-w-5xl mx-auto flex justify-center items-center relative">
      {/* SVG Flow Diagram with animated dot splitting and recombining */}
      <svg viewBox="0 0 1100 400" width="100%" height="400" className="block mx-auto" style={{ maxWidth: 1100 }}>
        {/* Main flow boxes (make Webhook6 and Respond to Webhook8 taller) */}
        <rect x="80" y="70" width="120" height="80" rx="16" fill="#23243a" stroke="#b6c6e3" strokeWidth="2" />
        <rect x="320" y="80" width="180" height="60" rx="16" fill="#23243a" stroke="#b6c6e3" strokeWidth="2" />
        <rect x="800" y="70" width="180" height="80" rx="16" fill="#23243a" stroke="#b6c6e3" strokeWidth="2" />
        {/* Connecting lines */}
        <line x1="200" y1="110" x2="320" y2="110" stroke="#64748b" strokeWidth="3" />
        <line x1="500" y1="110" x2="800" y2="110" stroke="#64748b" strokeWidth="3" />
        {/* Webhook6 icon+label inside box */}
        <text x="140" y="105" fontSize="32" fontFamily="monospace" textAnchor="middle">🔗</text>
        <text x="140" y="130" fontSize="16" fill="#fff" textAnchor="middle">Webhook6</text>
        {/* AI Agent11 icon above label, both above box (moved up by 16px) */}
        <text x="410" y="54" fontSize="32" fontFamily="monospace" textAnchor="middle">🤖</text>
        <text x="410" y="74" fontSize="16" fill="#22c55e" fontWeight="bold" textAnchor="middle">AI Agent11</text>
        {/* Respond to Webhook8 icon+label inside box */}
        <text x="890" y="105" fontSize="32" fontFamily="monospace" textAnchor="middle">🔗</text>
        <text x="890" y="130" fontSize="16" fill="#fff" textAnchor="middle">Respond to Webhook8</text>
        {/* Tool/Model/Memory nodes */}
        <circle cx="200" cy="260" r="38" fill="#23243a" stroke="#b6c6e3" strokeWidth="2" />
        <circle cx="340" cy="260" r="38" fill="#23243a" stroke="#b6c6e3" strokeWidth="2" />
        <circle cx="480" cy="260" r="38" fill="#23243a" stroke="#b6c6e3" strokeWidth="2" />
        <circle cx="620" cy="260" r="38" fill="#23243a" stroke="#b6c6e3" strokeWidth="2" />
        <circle cx="760" cy="260" r="38" fill="#23243a" stroke="#b6c6e3" strokeWidth="2" />
        <circle cx="900" cy="260" r="38" fill="#23243a" stroke="#b6c6e3" strokeWidth="2" />
        {/* Node icons */}
        <text x="200" y="270" fontSize="32" textAnchor="middle">🧠</text>
        <text x="340" y="270" fontSize="32" textAnchor="middle">💾</text>
        <text x="480" y="270" fontSize="32" textAnchor="middle">📊</text>
        <text x="620" y="270" fontSize="32" textAnchor="middle">🗄️</text>
        <text x="760" y="270" fontSize="32" textAnchor="middle">🧩</text>
        <text x="900" y="270" fontSize="32" textAnchor="middle">🔗</text>
        {/* Node labels (moved down by 8px) */}
        <text x="200" y="318" fontSize="14" fill="#fff" textAnchor="middle">OpenAI7</text>
        <text x="340" y="318" fontSize="14" fill="#fff" textAnchor="middle">Simple Memory5</text>
        <text x="480" y="318" fontSize="14" fill="#fff" textAnchor="middle">Airtable</text>
        <text x="620" y="318" fontSize="14" fill="#fff" textAnchor="middle">Microsoft SQL1</text>
        <text x="760" y="318" fontSize="14" fill="#fff" textAnchor="middle">HubSpot1</text>
        <text x="900" y="318" fontSize="14" fill="#22c55e" textAnchor="middle">Call another Agent</text>
        {/* --- Curvy Dotted Connections from Agent to Tools --- */}
        <path d="M410 110 Q 305 170 200 222" stroke="#b6c6e3" strokeWidth="2" strokeDasharray="6,6" fill="none" />
        <path d="M410 110 Q 375 170 340 222" stroke="#b6c6e3" strokeWidth="2" strokeDasharray="6,6" fill="none" />
        <path d="M410 110 Q 445 170 480 222" stroke="#b6c6e3" strokeWidth="2" strokeDasharray="6,6" fill="none" />
        <path d="M410 110 Q 515 170 620 222" stroke="#b6c6e3" strokeWidth="2" strokeDasharray="6,6" fill="none" />
        <path d="M410 110 Q 585 170 760 222" stroke="#b6c6e3" strokeWidth="2" strokeDasharray="6,6" fill="none" />
        <path d="M410 110 Q 655 170 900 222" stroke="#b6c6e3" strokeWidth="2" strokeDasharray="6,6" fill="none" />
        {/* --- Animated Dots on Curvy Paths --- */}
        {/* Blue dot: from Webhook6 to agent */}
        {flow.bluePos.visible && (
          <motion.circle
            r="12"
            fill="#3b82f6"
            cx={flow.bluePos.x}
            cy={flow.bluePos.y}
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
        {/* Orange balls: out and back along Bezier paths */}
        {flow.orangeBalls.map((ball, i) =>
          ball.visible ? (
            <AnimatedDotOnPath
              key={i}
              d={ball.d}
              color="#f59e42"
              progress={ball.progress}
            />
          ) : null
        )}
        {/* Green dot: from agent to Respond8 left border */}
        {flow.greenPos.visible && (
          <motion.circle
            r="12"
            fill="#22c55e"
            cx={flow.greenPos.x}
            cy={flow.greenPos.y}
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </svg>
    </div>
  );
}

export default function Home() {
  // Anime.js effect for headline
  const headlineRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (headlineRef.current) {
      import('animejs').then((animeModule) => {
        // @ts-ignore
        animeModule.animate({
          targets: headlineRef.current!.children,
          translateY: [40, 0],
          opacity: [0, 1],
          delay: animeModule.stagger(80),
          easing: 'easeOutExpo',
          duration: 900,
        });
      });
    }
  }, []);

  // Particle options for a modern greenish look
  // Reduce particle count and size for lower memory usage
  const particlesOptions = {
    fullScreen: false,
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    particles: {
      number: { value: 20, density: { enable: true, area: 800 } }, // was 60
      color: { value: ['#22C55E', '#4ade80', '#bbf7d0'] },
      links: { enable: true, color: '#22C55E', distance: 120, opacity: 0.3, width: 1 },
      move: { enable: true, speed: 1.2, direction: 'none' as const, random: false, straight: false, outModes: { default: 'out' as const } },
      size: { value: { min: 0.5, max: 1.5 } }, // was 1-3
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
    },
    detectRetina: true,
  };

  const [engineReady, setEngineReady] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  // --- Agentic Flow Animation State ---
  // const flow = useAgenticFlowSequence(); // This state is now managed by AgenticFlowDiagram

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col items-center justify-center font-sans relative overflow-x-hidden">
      {/* Particles background removed for memory optimization. Restore if needed. */}
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center pt-32 pb-24 px-4 min-h-[80vh] text-center overflow-hidden">
        {/* Animated background for hero */}
        <div className="absolute inset-0 z-0 pointer-events-none animate-gradient-x bg-gradient-to-br from-[#23243a] via-[#18181b] to-[#1a1a2e]" style={{ backgroundSize: '200% 200%' }} />
        {/* Floating dots animation */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg width="100%" height="100%" className="absolute inset-0">
            <circle cx="60" cy="80" r="10" fill="#22c55e" opacity="0.10">
              <animate attributeName="cy" values="80;120;80" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="40" r="6" fill="#f59e42" opacity="0.08">
              <animate attributeName="cy" values="40;70;40" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="400" cy="120" r="8" fill="#3b82f6" opacity="0.08">
              <animate attributeName="cy" values="120;160;120" dur="4.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="60" r="12" fill="#22c55e" opacity="0.07">
              <animate attributeName="cy" values="60;100;60" dur="5s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        {/* Modern chat bubble icon and tagline */}
        <div className="mb-8 z-10 flex flex-col items-center justify-center">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg mb-2">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="7" fill="#fff" /><rect x="7" y="2" width="10" height="7" rx="3.5" fill="#22c55e" /><circle cx="8.5" cy="12" r="1.5" fill="#22c55e" /><circle cx="15.5" cy="12" r="1.5" fill="#22c55e" /></svg>
          </span>
          <span className="text-lg font-semibold text-emerald-400 tracking-wide">Conversational AI for Ambitious Brands</span>
        </div>
        {/* Subheadline badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest text-gray-300 mb-10 z-10">
          <span>Trusted by early adopters and growing brands</span>
          <span>Fast, friendly support from real people</span>
          <span>Built with the latest AI technology</span>
        </div>
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 z-10">
          <a href="#" className="px-8 py-4 rounded-lg bg-white text-gray-900 font-semibold text-lg shadow hover:bg-gray-100 transition">Try it free</a>
          <a href="#" className="px-8 py-4 rounded-lg border border-white text-white font-semibold text-lg hover:bg-white/10 transition">See a live demo</a>
        </div>
        {/* Trusted by logos */}
        <div className="text-gray-400 text-xs uppercase tracking-widest mb-2 z-10">Trusted by teams at</div>
        <div className="flex flex-wrap justify-center gap-8 opacity-70 z-10">
          {['Culture Amp', 'Clay', 'Lightspeed', 'Anthropic', 'Monday.com', 'Amplitude', 'Synthe'].map((logo, i) => (
            <span key={i} className="text-white text-lg font-semibold tracking-wide opacity-70" style={{ filter: 'blur(0.5px)' }}>{logo}</span>
          ))}
        </div>
      </section>

      {/* Agentic Flow Diagram Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] border-t border-b border-blue-900/20 relative overflow-x-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-gray-300" style={{ fontFamily: 'DM Serif Display, serif' }}>
          Single Agent + <span className="text-emerald-400">Dynamically Call Other Agents</span>
        </h2>
        <AgenticFlowDiagram />
      </section>

      {/* Chat Demo Section */}
      <ChatDemoSection />

      {/* Extended AI Agent System Section */}
      <section className="w-full bg-[#18181b] py-24 px-4 flex flex-col items-center border-t border-white/10">
        <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
          {/* Headline and description for agency */}
          <div className="flex flex-col items-center text-center gap-4">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">Custom Chatbot Agency</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">AI Chatbots, Tailored for Your Business</h2>
            <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-6">
              <span className="text-emerald-400 font-bold">Sajedar</span> is a <span className="text-emerald-400 font-bold">hands-on agency</span> specializing in designing, building, and supporting <span className="text-emerald-400 font-bold">custom AI chatbots</span> for <span className="text-emerald-400 font-bold">ambitious brands</span>. We <span className="text-emerald-400 font-bold">work closely with you</span> from first strategy call to launch and beyond, ensuring your chatbot fits your unique needs and delivers <span className="text-emerald-400 font-bold">real value</span> to your customers and team. <span className="text-emerald-400 font-bold">No off-the-shelf bots</span>—just <span className="text-emerald-400 font-bold">thoughtful, tailored solutions</span> that help you stand out and grow.
            </p>
            <a href="#" className="inline-block px-7 py-3 rounded-lg border border-white text-white font-semibold text-lg hover:bg-white/10 transition mb-2">Book a Free Consultation</a>
          </div>

          {/* Performance/Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center w-full">
            {/* Stat Cards */}
            <div className="flex flex-col gap-6 items-center">
              <div className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-mono font-bold text-emerald-400">98%</span>
               <span className="text-gray-400 text-lg uppercase tracking-widest">Client Satisfaction</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-mono font-bold text-emerald-400">30,000+</span>
               <span className="text-gray-400 text-lg uppercase tracking-widest text-center">Conversations Automated</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-mono font-bold text-emerald-400">25+</span>
               <span className="text-gray-400 text-lg uppercase tracking-widest">Custom Bots Launched</span>
              </div>
            </div>
            {/* Donut Chart for Resolution Rate */}
            <div className="flex flex-col items-center justify-center">
              <svg width="180" height="180" viewBox="0 0 180 180">
                <circle cx="90" cy="90" r="80" stroke="#23243a" strokeWidth="20" fill="none" />
                <circle cx="90" cy="90" r="80" stroke="#22c55e" strokeWidth="20" fill="none" strokeDasharray="502" strokeDashoffset="200" strokeLinecap="round" />
                <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="2.5rem" fill="#22c55e" fontFamily="monospace" fontWeight="bold">20%+</text>
              </svg>
             <span className="text-gray-400 text-sm mt-2">Avg. Increase in Engagement</span>
            </div>
            {/* Bar Chart for Competitor Comparison */}
            <div className="flex flex-col items-center">
              <svg width="200" height="120" viewBox="0 0 200 120">
                <rect x="20" y="60" width="24" height="40" rx="6" fill="#23243a" />
                <rect x="56" y="50" width="24" height="50" rx="6" fill="#23243a" />
                <rect x="92" y="30" width="24" height="70" rx="6" fill="#22c55e" />
                <rect x="128" y="70" width="24" height="30" rx="6" fill="#23243a" />
                <rect x="164" y="55" width="24" height="45" rx="6" fill="#23243a" />
                <text x="104" y="28" textAnchor="middle" fontSize="1.5rem" fill="#22c55e" fontFamily="monospace" fontWeight="bold">#1</text>
              </svg>
             <span className="text-gray-400 text-sm mt-2">Among Peers (Client Engagement)</span>
            </div>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {/* Integrations */}
            <div className="bg-[#23243a] rounded-2xl p-8 flex flex-col items-center gap-4 shadow border border-white/10">
              <Rocket size={36} stroke="#22c55e" strokeWidth={2} />
              <span className="text-4xl font-mono font-bold text-emerald-400">50+</span>
              <span className="text-2xl font-bold text-white">Integrations</span>
              <span className="text-gray-400 text-sm uppercase tracking-widest">Plug-and-play</span>
              <span className="text-gray-300 text-center">Connect your chatbot to the tools you already use—no headaches.</span>
            </div>
            {/* Support */}
            <div className="bg-[#23243a] rounded-2xl p-8 flex flex-col items-center gap-4 shadow border border-white/10">
              <Users size={36} stroke="#22c55e" strokeWidth={2} />
              <span className="text-4xl font-mono font-bold text-emerald-400">24/7</span>
              <span className="text-2xl font-bold text-white">Support</span>
              <span className="text-gray-400 text-sm uppercase tracking-widest">Always-on</span>
              <span className="text-gray-300 text-center">We’re a small team, but we’re always here when you need us.</span>
            </div>
            {/* Faster Response */}
            <div className="bg-[#23243a] rounded-2xl p-8 flex flex-col items-center gap-4 shadow border border-white/10">
              <Sparkles size={36} stroke="#22c55e" strokeWidth={2} />
              <span className="text-4xl font-mono font-bold text-emerald-400">3x</span>
              <span className="text-2xl font-bold text-white">Faster Response</span>
              <span className="text-gray-400 text-sm uppercase tracking-widest">Speed & Analytics</span>
              <span className="text-gray-300 text-center">Our bots help you reply to customers in seconds, not hours.</span>
            </div>
            {/* More Deals */}
            <div className="bg-[#23243a] rounded-2xl p-8 flex flex-col items-center gap-4 shadow border border-white/10">
              <Lightbulb size={36} stroke="#22c55e" strokeWidth={2} />
              <span className="text-4xl font-mono font-bold text-emerald-400">15%</span>
              <span className="text-2xl font-bold text-white">More Deals Closed</span>
              <span className="text-gray-400 text-sm uppercase tracking-widest">AI-Powered</span>
              <span className="text-gray-300 text-center">Clients have seen a measurable lift in sales and qualified leads.</span>
            </div>
            {/* Voice Enabled */}
            <div className="bg-[#23243a] rounded-2xl p-8 flex flex-col items-center gap-4 shadow border border-white/10">
              <Mic size={36} stroke="#22c55e" strokeWidth={2} />
              <span className="text-2xl font-bold text-white">Voice & Multilingual</span>
              <span className="text-gray-400 text-sm uppercase tracking-widest">Conversational</span>
              <span className="text-gray-300 text-center">Support for voice and multiple languages, so you can reach more people.</span>
            </div>
            {/* Avg. Rating */}
            <div className="bg-[#23243a] rounded-2xl p-8 flex flex-col items-center gap-4 shadow border border-white/10">
              <Bot size={36} stroke="#22c55e" strokeWidth={2} />
              <span className="text-4xl font-mono font-bold text-emerald-400">4.8/5</span>
              <span className="text-2xl font-bold text-white">Avg. Rating</span>
              <span className="text-gray-400 text-sm uppercase tracking-widest">Loved by Customers</span>
              <span className="text-gray-300 text-center">Our clients and their customers love the personal, on-brand experience.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Tracking Dashboard Section */}
      <ChatDashboard />

      {/* FAQ Section */}
      <section className="w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] py-20 px-4 flex flex-col items-center border-t border-white/10">
        <div className="max-w-2xl w-full mx-auto flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
          <div className="w-full flex flex-col gap-4">
            {/* FAQ 1 */}
            <div className="bg-[#23243a] rounded-2xl p-6 border border-white/10 shadow">
              <h3 className="text-lg font-bold text-emerald-400 mb-2">What makes Sajedar different from other chatbot providers?</h3>
              <p className="text-gray-300">We build every chatbot from scratch, tailored to your business needs—no templates or generic bots. You get a solution that fits your brand, your workflows, and your goals.</p>
          </div>
            {/* FAQ 2 */}
            <div className="bg-[#23243a] rounded-2xl p-6 border border-white/10 shadow">
              <h3 className="text-lg font-bold text-emerald-400 mb-2">How long does it take to launch a custom chatbot?</h3>
              <p className="text-gray-300">Most projects go live in 2–4 weeks, depending on complexity and integrations. We work fast, but never at the expense of quality.</p>
              </div>
            {/* FAQ 3 */}
            <div className="bg-[#23243a] rounded-2xl p-6 border border-white/10 shadow">
              <h3 className="text-lg font-bold text-emerald-400 mb-2">Can you integrate with our existing tools and CRM?</h3>
              <p className="text-gray-300">Yes! We support 50+ integrations and can connect your chatbot to most modern platforms, CRMs, and business tools.</p>
              </div>
            {/* FAQ 4 */}
            <div className="bg-[#23243a] rounded-2xl p-6 border border-white/10 shadow">
              <h3 className="text-lg font-bold text-emerald-400 mb-2">What kind of support do you offer after launch?</h3>
              <p className="text-gray-300">We provide ongoing support, monitoring, and optimization. You’ll always have a direct line to our team for help or improvements.</p>
            </div>
            {/* FAQ 5 */}
            <div className="bg-[#23243a] rounded-2xl p-6 border border-white/10 shadow">
              <h3 className="text-lg font-bold text-emerald-400 mb-2">Is Sajedar suitable for small businesses or startups?</h3>
              <p className="text-gray-300">Absolutely. We work with companies of all sizes and can tailor our approach to fit your budget and growth stage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] py-24 px-4 flex flex-col items-center border-t border-white/10">
        <div className="max-w-xl w-full mx-auto flex flex-col items-center gap-8">
          <div className="flex flex-col items-center text-center gap-2 mb-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">Let's Build Your Custom Chatbot</h2>
            <p className="text-lg text-gray-300 max-w-lg">Ready to see what Sajedar can do for your business? Tell us a bit about your needs and our team will reach out for a free consultation.</p>
        </div>
          <form className="w-full bg-gradient-to-br from-[#23243a] to-[#18181b] rounded-3xl shadow-2xl border border-white/10 p-8 flex flex-col gap-6 backdrop-blur-md" action="https://formspree.io/f/xqaqogoj" method="POST">
            <input type="text" name="name" placeholder="Your Name" required className="bg-[#18181b] bg-opacity-80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400 transition shadow" />
            <input type="email" name="email" placeholder="Your Email" required className="bg-[#18181b] bg-opacity-80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400 transition shadow" />
            <input type="text" name="company" placeholder="Your Company" required className="bg-[#18181b] bg-opacity-80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400 transition shadow" />
            <textarea name="message" placeholder="Your Message" required className="bg-[#18181b] bg-opacity-80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400 transition shadow min-h-[120px] resize-none" />
            <button type="submit" className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition text-lg">Send Message</button>
          </form>
          {/* Social/contact links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 w-full">
            <a href="https://wa.me/9779860479751?text=Hi%2C%20I%20found%20Sajedar%20and%20would%20like%20to%20know%20more!" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 text-white font-semibold shadow hover:opacity-90 transition text-lg w-full sm:w-auto justify-center">
              {/* WhatsApp icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/><circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" fill="none"/></svg>
              WhatsApp
            </a>
            <a href="https://www.linkedin.com/company/sajedar/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#23243a] border border-white/10 text-white font-semibold shadow hover:bg-emerald-900/20 transition text-lg w-full sm:w-auto justify-center">
              {/* LinkedIn icon */}
              <Linkedin size={22} stroke="#22c55e" fill="none" />
              LinkedIn
            </a>
            <a href="https://www.facebook.com/sajedardotcom" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#23243a] border border-white/10 text-white font-semibold shadow hover:bg-emerald-900/20 transition text-lg w-full sm:w-auto justify-center">
              {/* Facebook icon */}
              <Facebook size={22} stroke="#22c55e" fill="none" />
              Facebook
            </a>
              </div>
        </div>
      </section>

      {/* Footer - showcase style */}
      <footer className="w-full py-10 flex flex-col items-center bg-[#18181b] text-gray-400 text-sm font-sora border-t border-white/10 mt-8">
        <div className="flex gap-4 mb-2">
          <Link href="/PrivacyPolicy" className="hover:text-emerald-500 transition">Privacy Policy</Link>
          <Link href="/TermsOfService" className="hover:text-emerald-500 transition">Terms of Service</Link>
          <Link href="/Contact" className="hover:text-emerald-500 transition">Contact</Link>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-orange-400 font-mono font-bold text-lg">Sajedar</span>
          <span>•</span>
          <span className="text-white">AI Agent Builder Agency</span>
        </div>
        <div className="mt-2">© {new Date().getFullYear()} Sajedar. All rights reserved.</div>
      </footer>
    </div>
  );
}
