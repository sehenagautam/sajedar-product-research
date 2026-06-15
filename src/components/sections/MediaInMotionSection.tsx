import React from 'react';
import Link from 'next/link';

export function MediaInMotionSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] border-t border-b border-emerald-500/20 relative">
      {/* Title and Subtitle */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white" style={{ fontFamily: 'DM Serif Display, serif' }}>
          Media in Motion - <span className="text-emerald-500">Cinematic Showcase</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Express more with Sajedar. Text. Picture. Voice. Video. Every message, beautifully delivered.
        </p>
      </div>

      {/* Media Feature Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
        {/* Text Block */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:bg-white/10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h3 className="text-lg font-semibold text-emerald-500">Text</h3>
                <div className="w-px h-6 bg-gray-600"></div>
                <p className="text-sm text-gray-300">Instant communication</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Block */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:bg-white/10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h3 className="text-lg font-semibold text-emerald-500">Image</h3>
                <div className="w-px h-6 bg-gray-600"></div>
                <p className="text-sm text-gray-300">Send & receive</p>
              </div>
            </div>
          </div>
        </div>

        {/* Audio Block */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:bg-white/10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h3 className="text-lg font-semibold text-emerald-500">Audio</h3>
                <div className="w-px h-6 bg-gray-600"></div>
                <p className="text-sm text-gray-300">Send & receive</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Block */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:bg-white/10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h3 className="text-lg font-semibold text-emerald-500">Video</h3>
                <div className="w-px h-6 bg-gray-600"></div>
                <p className="text-sm text-gray-300">Send only</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connecting Statement */}
      <div className="text-center mb-8 max-w-4xl mx-auto">
        <p className="text-lg text-gray-300 leading-relaxed">
          From words to visuals, from voice to motion - Sajedar lets businesses connect like never before.
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <Link
          href="/demo"
          className="inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-all duration-200 text-lg shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
        >
          Learn More
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
