import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Play, Pause, Volume2 } from 'lucide-react';

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const whatsappMessage = encodeURIComponent(
    'Hi Sajedar! I want to request a demo for the AI Sales Agent.'
  );
  const requestDemoHref = `https://wa.me/9779860479751?text=${whatsappMessage}`;

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-24 pb-16 px-4 h-[90vh] bg-[#fafaf9] text-[#44403c] overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1
                className="text-4xl md:text-6xl font-semibold tracking-tight text-[#292524]"
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                <span className="text-white" style={{ WebkitTextStroke: '2px #57534e' }}>
                  Facebook Page
                </span>
                <br />
                <span className="text-emerald-500">AI Sales Agent</span>
              </h1>
            </div>

            <div className="mb-8">
              <p className="text-xl md:text-2xl leading-relaxed text-[#44403c] mb-4 mt-6">
                Top AI Agent Builder in Nepal
              </p>
              <div className="flex items-center gap-2 text-sm text-[#57534e] bg-emerald-50 w-fit px-3 py-1.5 rounded-full border border-emerald-100">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Sajedar's agent has now interacted with <strong>more than 20,000 people</strong>.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={requestDemoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors duration-200 text-center"
              >
                Request Demo
              </a>
            </div>

            <div className="pt-4">
              <Link
                href="/case-studies/latta-kapada-case-study"
                className="text-[#57534e] hover:text-[#292524] transition-colors duration-200 text-sm"
                style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                See how the agent guided incoming leads to make payments →
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div 
              className="relative w-full max-w-48 sm:max-w-56 md:max-w-64 lg:max-w-72 xl:max-w-80 aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              onClick={togglePlay}
            >
              <video 
                ref={videoRef}
                autoPlay 
                muted 
                loop 
                playsInline 
                poster="/sajedar_intro_thumb.jpg"
                className="w-full h-full object-cover object-center"
              >
                <source src="/sajedar_intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay with Play/Pause button */}
              <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white fill-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    )}
                  </div>
                </div>
              </div>

              {/* Sound Control */}
              <div 
                className="absolute bottom-4 right-4 z-20 transition-transform hover:scale-110 active:scale-95"
                onClick={toggleMute}
              >
                <div className={`flex items-center gap-2 rounded-full px-3 py-1.5 backdrop-blur-md border border-white/10 ${isMuted ? 'bg-black/40' : 'bg-emerald-500/80'}`}>
                  <Volume2 className={`h-3.5 w-3.5 text-white ${!isMuted ? 'animate-pulse' : ''}`} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">
                    {isMuted ? 'Sound Off' : 'Sound On'}
                  </span>
                </div>
              </div>

              {!isPlaying && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md shadow-lg">
                    Paused
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
