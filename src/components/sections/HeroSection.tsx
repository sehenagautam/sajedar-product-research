import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  useEffect(() => {
    // Simple scroll animation without anime.js
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
    <section className="relative w-full flex flex-col items-center justify-center pt-24 pb-16 px-4 min-h-[90vh] bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
                AI-Powered <span className="text-emerald-400">Business Automation</span> That Actually Works
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Stop losing customers to slow responses. Get a custom AI chatbot that handles inquiries, 
                books appointments, and converts leads 24/7 - all while you sleep.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/?message=I want to build my own AI Messenger bot for my business.#contact" 
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors duration-200 text-center"
              >
                Get Your Custom Chatbot
              </Link>
              <Link 
                href="/demo" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors duration-200 text-center border border-white/20"
              >
                See a Live Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm">No Coding Required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm">Setup in Days</span>
              </div>
            </div>
          </div>

          {/* Right Side - Video with Perfect Aspect Ratio */}
          <div className="relative flex justify-center">
            {/* Video Container with 9:16 aspect ratio (vertical video) */}
            <div className="relative w-full max-w-48 sm:max-w-56 md:max-w-64 lg:max-w-72 xl:max-w-80 aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover object-center"
                              >
                <source src="/sajedar_intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              

            </div>


          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}