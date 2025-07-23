import { useEffect, useRef } from 'react';

export function HeroSection() {
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

  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-32 pb-24 px-4 min-h-[80vh] text-center overflow-hidden">
      {/* Animated background for hero */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none animate-gradient-x bg-gradient-to-br from-[#23243a] via-[#18181b] to-[#1a1a2e]" 
        style={{ backgroundSize: '200% 200%' }} 
      />
      
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
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="5" width="18" height="14" rx="7" fill="#fff" />
            <rect x="7" y="2" width="10" height="7" rx="3.5" fill="#22c55e" />
            <circle cx="8.5" cy="12" r="1.5" fill="#22c55e" />
            <circle cx="15.5" cy="12" r="1.5" fill="#22c55e" />
          </svg>
        </span>
        <span className="text-lg font-semibold text-emerald-400 tracking-wide">
          Conversational AI for Ambitious Brands
        </span>
      </div>
      
      {/* Subheadline badges */}
      <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest text-gray-300 mb-10 z-10">
        <span>Trusted by early adopters and growing brands</span>
        <span>Fast, friendly support from real people</span>
        <span>Built with the latest AI technology</span>
      </div>
      
      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 z-10">
        <a 
          href="#" 
          className="px-8 py-4 rounded-lg bg-white text-gray-900 font-semibold text-lg shadow hover:bg-gray-100 transition"
        >
          Try it free
        </a>
        <a 
          href="#" 
          className="px-8 py-4 rounded-lg border border-white text-white font-semibold text-lg hover:bg-white/10 transition"
        >
          See a live demo
        </a>
      </div>
    </section>
  );
} 