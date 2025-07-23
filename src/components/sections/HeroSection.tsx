import { useEffect, useRef } from 'react';
import Image from 'next/image';

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      import('animejs').then((animeModule) => {
        const anime = typeof animeModule === 'function'
          ? animeModule
          : animeModule.default;
        if (typeof anime === 'function') {
          anime({
            targets: headlineRef.current!.children,
            translateY: [40, 0],
            opacity: [0, 1],
            delay: (animeModule.stagger || anime.stagger)(80),
            easing: 'easeOutExpo',
            duration: 900,
          });
        } else {
          console.error('animejs import did not return a function:', animeModule);
        }
      });
    }
  }, []);

  // Sajedar-specific info bubbles
  const bubbles = [
    {
      text: '24/7 AI-powered customer support',
      className: 'top-[18%] left-[18%]',
    },
    {
      text: 'Seamless integration with your business tools',
      className: 'bottom-[18%] left-[18%]',
    },
    {
      text: 'Custom chatbots tailored for your brand',
      className: 'top-[18%] right-[18%]',
    },
    {
      text: 'Boost engagement & automate conversations',
      className: 'bottom-[18%] right-[18%]',
    },
  ];

  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-16 pb-16 px-4 min-h-[90vh] bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] overflow-hidden">
      {/* Headline */}
      <div className="mb-8">
        <h1
          ref={headlineRef}
          className="text-3xl md:text-5xl font-bold uppercase text-center tracking-widest mb-2"
          style={{
            color: '#22c55e',
            letterSpacing: '0.1em',
            fontFamily: 'DM Serif Display, serif',
          }}
        >
          Sajedar: Custom AI Chatbots
        </h1>
        <h2 className="text-2xl md:text-3xl text-white text-center tracking-wide font-light">
          Empowering Brands with Intelligent Automation
        </h2>
      </div>
      {/* Centered image with emerald circular frame */}
      <div className="relative flex items-center justify-center mb-10 w-full" style={{ minHeight: 340 }}>
        {/* Emerald circle (no blur) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[320px] h-[320px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-emerald-400/30 via-emerald-500/20 to-transparent z-0" />
        {/* Dotted emerald circle */}
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" width="340" height="340" viewBox="0 0 340 340">
          <circle cx="170" cy="170" r="160" fill="none" stroke="#22c55e" strokeDasharray="8,8" strokeWidth="2" />
        </svg>
        {/* Robotic hand image (no drop-shadow) */}
        <div className="relative z-20 rounded-full overflow-visible w-[220px] h-[220px] md:w-[300px] md:h-[300px] flex items-center justify-center">
          <Image
            src="/heroimage-robothand.png"
            alt="3D Robotic Hand Automation"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 80vw, 300px"
            priority
          />
        </div>
        {/* Info bubbles (no boxShadow, no textShadow, no blur) */}
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            className={`absolute z-30 max-w-[180px] px-4 py-2 bg-emerald-900/60 border-2 border-emerald-400 rounded-lg text-emerald-200 text-xs md:text-sm font-semibold ${bubble.className}`}
            style={{
              borderStyle: 'dashed',
              fontFamily: 'Inter, Arial, sans-serif',
            }}
          >
            {bubble.text}
          </div>
        ))}
      </div>
      {/* CTAs (no boxShadow, no textShadow) */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 z-40 mt-8">
        <a
          href="#"
          className="px-8 py-4 rounded-lg bg-emerald-400 text-black font-bold text-lg hover:bg-emerald-500 transition border-2 border-emerald-200"
          style={{
            fontFamily: 'Inter, Arial, sans-serif',
          }}
        >
          Get Your Custom Chatbot
        </a>
        <a
          href="#"
          className="px-8 py-4 rounded-lg border-2 border-emerald-400 text-emerald-200 font-bold text-lg hover:bg-emerald-400 hover:text-black transition"
          style={{
            fontFamily: 'Inter, Arial, sans-serif',
          }}
        >
          See a Live Demo
        </a>
      </div>
    </section>
  );
}