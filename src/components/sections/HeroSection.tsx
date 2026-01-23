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
            <div className="space-y-2">
              <h1
                className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                <span className="text-gray-400">Advanced</span>{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Facebook Page</span>{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Agent</span>{' '}
                <span className="text-gray-400">for</span>{' '}
                <span className="text-white">Small and Medium Businesses</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              <span className="text-gray-400">Stop losing customers to slow responses. Get a custom AI Agent that converts leads</span> <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent"> 24/7 - all while you sleep. </span>
              <br />
              Commission Basis: We put skin in the game. If we don’t generate measurable revenue, we don’t get paid.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/?message=I want to build my own AI Messenger bot for my business.#contact"
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors duration-200 text-center"
              >
                Hire Sales Agent for your Facebook Page.
              </Link>
              <Link
                href="/demo"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors duration-200 text-center border border-white/20"
              >
                See a Live Demo
              </Link>
            </div>

            {/* Automation Readiness Link */}
            <div className="text-center">
              <Link
                href="/readiness"
                className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 underline decoration-emerald-400/50 hover:decoration-emerald-300/70 underline-offset-4"
              >
                Calculate your automation readiness score →
              </Link>
            </div>



            {/* Case Study Link */}
            <div className="pt-4">
              <Link
                href="/case-studies/latta-kapada-case-study"
                className="text-gray-500 hover:text-gray-400 transition-colors duration-200 text-sm"
                style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                See how to automate Advance Payments of tactical gears on Facebook Page →
              </Link>
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
