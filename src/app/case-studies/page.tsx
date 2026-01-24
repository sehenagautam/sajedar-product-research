import React from 'react';
import Link from 'next/link';
import { getAllCaseStudies } from '../../content/case-studies';

export const metadata = {
  title: 'AI Case Studies | Sajedar',
  description: 'Real-world case studies showcasing successful AI implementations across various industries. Learn how our AI solutions drive business results.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'AI Case Studies | Sajedar',
    description: 'Real-world case studies showcasing successful AI implementations across various industries.',
    url: 'https://sajedar.com/case-studies'
  }
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e]">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] py-24 px-4 flex flex-col items-center border-b border-white/10">
        <div className="max-w-4xl w-full mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Link
              href="/"
              className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
            >
              ← Back to Home
            </Link>
          </div>
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 block">
            Real-World Success Stories
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
            AI Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how our AI solutions have transformed businesses across industries.
            Each case study showcases measurable results and innovative approaches.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full">
              {caseStudies.length} Case Studies
            </span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
              Multiple Industries
            </span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
              Proven Results
            </span>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <Link
                key={caseStudy.slug}
                href={`/case-studies/${caseStudy.slug}`}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:bg-white/10"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
                      {caseStudy.industry}
                    </span>
                    {caseStudy.featured && (
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-3">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {caseStudy.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.results.slice(0, 3).map((result, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs"
                    >
                      {result}
                    </span>
                  ))}
                  {caseStudy.results.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs">
                      +{caseStudy.results.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">
                    {caseStudy.duration}
                  </span>
                  <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors text-sm font-medium">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-gradient-to-r from-emerald-900/30 to-blue-900/30 border-t border-white/10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can transform your business. Our team is ready to help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/?message=I want to discuss a custom AI solution for my business.#contact"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors duration-200"
            >
              Start Your Project
            </a>
            <a
              href="/?message=I want to see more case studies and success stories.#contact"
              className="px-8 py-4 bg-transparent border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold rounded-lg transition-colors duration-200"
            >
              View More Examples
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
