import { useEffect, useRef } from 'react';

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      import('animejs').then((animeModule: any) => {
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

  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-24 pb-16 px-4 min-h-[90vh] bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div>
              <h1
                ref={headlineRef}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
                style={{
                  fontFamily: 'DM Serif Display, serif',
                }}
              >
                <span className="block">Build</span>
                <span className="block text-emerald-400">Intelligent</span>
                <span className="block">AI Agents</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Transform your business with custom AI chatbots that engage customers, 
                automate support, and drive growth. Sajedar creates intelligent agents 
                tailored to your brand.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-300">24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-300">Multi-Platform Integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-300">Custom Brand Voice</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-300">Advanced Analytics</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/#contact"
                className="px-8 py-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg transition-colors duration-200 cursor-pointer text-center"
                style={{
                  fontFamily: 'Inter, Arial, sans-serif',
                }}
              >
                Get Your Custom Chatbot
              </a>
              <a
                href="/demo"
                className="px-8 py-4 rounded-lg border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black font-bold text-lg transition-colors duration-200 cursor-pointer text-center"
                style={{
                  fontFamily: 'Inter, Arial, sans-serif',
                }}
              >
                See a Live Demo
              </a>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Video Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                  style={{ aspectRatio: '9/16' }}
                >
                  <source src="/sajedar_intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Overlay Info */}
                <div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-semibold">Sajedar Intro</span>
                  </div>
                </div>

                {/* Play Button Overlay (for fallback) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center animate-bounce">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
}
