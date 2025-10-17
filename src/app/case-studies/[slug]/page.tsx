import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllCaseStudies, getCaseStudyBySlug } from '../../../content/case-studies';
import { notFound } from 'next/navigation';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Sajedar',
      description: 'The requested case study could not be found.',
    };
  }

  return {
    title: `${caseStudy.title} | Sajedar`,
    description: caseStudy.description,
    alternates: { canonical: `/case-studies/${caseStudy.slug}` },
    openGraph: {
      title: `${caseStudy.title} | Sajedar`,
      description: caseStudy.description,
      url: `https://sajedar.com/case-studies/${caseStudy.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} | Sajedar`,
      description: caseStudy.description,
    },
  };
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);
  
  if (!caseStudy) {
    notFound();
  }

  const CaseStudyComponent = caseStudy.component;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e]">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] py-16 px-4 flex flex-col items-center border-b border-white/10">
        <div className="max-w-4xl w-full mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Link 
              href="/case-studies" 
              className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
            >
              ← Back to Case Studies
            </Link>
          </div>
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 block">
            {caseStudy.industry}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
            {caseStudy.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {caseStudy.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full">
              {caseStudy.duration}
            </span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
              {caseStudy.industry}
            </span>
            {caseStudy.featured && (
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                Featured
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <CaseStudyComponent />
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
              href="/case-studies"
              className="px-8 py-4 bg-transparent border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold rounded-lg transition-colors duration-200"
            >
              View More Case Studies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
