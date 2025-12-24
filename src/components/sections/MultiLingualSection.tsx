'use client';
import React from 'react';

export function MultilingualSection() {
  const features = [
    {
      title: "Native‑Level Fluency",
      description: "Communicate with the natural fluency and nuance of native speakers across all supported languages."
    },
    {
      title: "Cultural Adaptation",
      description: "Understand and adapt to cultural contexts, ensuring appropriate communication for each region."
    },
    {
      title: "Real‑Time Translation",
      description: "Instant, accurate translation that maintains context and meaning across language barriers."
    },
    {
      title: "Dialect Recognition",
      description: "Recognize and respond appropriately to regional dialects and linguistic variations."
    }
  ];

  const countryFlags = [
    { code: 'JP', name: 'Japan' },
    { code: 'IN', name: 'India' },
    { code: 'BR', name: 'Brazil' },
    { code: 'NP', name: 'Nepal' },
    { code: 'KR', name: 'South Korea' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'IT', name: 'Italy' },
    { code: 'RU', name: 'Russia' },
    { code: 'TR', name: 'Turkey' },
    { code: 'SE', name: 'Sweden' },
    { code: 'NO', name: 'Norway' },
    { code: 'FI', name: 'Finland' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'ES', name: 'Spain' }
  ];

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] border-t border-b border-blue-900/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Country Flags Row */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          {countryFlags.map((country, index) => (
            <div
              key={country.code}
              className="w-12 h-12 rounded-full bg-gray-200/10 border border-gray-300/20 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <span className="text-2xl" role="img" aria-label={country.name}>
                {country.code === 'JP' && '🇯🇵'}
                {country.code === 'IN' && '🇮🇳'}
                {country.code === 'BR' && '🇧🇷'}
                {country.code === 'NP' && '🇳🇵'}
                {country.code === 'KR' && '🇰🇷'}
                {country.code === 'CA' && '🇨🇦'}
                {country.code === 'GB' && '🇬🇧'}
                {country.code === 'IT' && '🇮🇹'}
                {country.code === 'RU' && '🇷🇺'}
                {country.code === 'TR' && '🇹🇷'}
                {country.code === 'SE' && '🇸🇪'}
                {country.code === 'NO' && '🇳🇴'}
                {country.code === 'FI' && '🇫🇮'}
                {country.code === 'DE' && '🇩🇪'}
                {country.code === 'FR' && '🇫🇷'}
                {country.code === 'ES' && '🇪🇸'}
              </span>
            </div>
          ))}
        </div>

        {/* Main Title */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl px-8 py-4 border border-blue-400/30">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-200 tracking-tight">
              Multilingual
            </h2>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
            >
              {/* Connection Line */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-gray-200 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Animated background effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-cyan-300/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
    </section>
  );
}
