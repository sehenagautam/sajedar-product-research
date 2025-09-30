import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTutorialBySlug, getAllTutorials } from '../../../content/tutorials';
import { Tutorial } from '../../../types/tutorial';

interface TutorialPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const tutorials = getAllTutorials();
  return tutorials.map((tutorial) => ({
    slug: tutorial.slug,
  }));
}

export async function generateMetadata({ params }: TutorialPageProps) {
  const tutorial = getTutorialBySlug(params.slug);
  
  if (!tutorial) {
    return {
      title: 'Tutorial Not Found',
    };
  }

  return {
    title: tutorial.seo.metaTitle,
    description: tutorial.seo.metaDescription,
    keywords: tutorial.seo.keywords,
    alternates: { canonical: `/tutorials/${tutorial.slug}` },
    openGraph: {
      title: tutorial.seo.metaTitle,
      description: tutorial.seo.metaDescription,
      url: `https://sajedar.com/tutorials/${tutorial.slug}`,
      type: 'article',
      publishedTime: new Date(tutorial.publishedAt).toISOString(),
      modifiedTime: new Date(tutorial.updatedAt || tutorial.publishedAt).toISOString(),
      authors: [tutorial.author],
      tags: tutorial.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: tutorial.seo.metaTitle,
      description: tutorial.seo.metaDescription,
    },
  };
}

export default function TutorialPage({ params }: TutorialPageProps) {
  const tutorial = getTutorialBySlug(params.slug);

  if (!tutorial) {
    notFound();
  }

  const canonical = `/tutorials/${tutorial.slug}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: tutorial.seo.metaTitle,
    description: tutorial.seo.metaDescription,
    author: { '@type': 'Person', name: tutorial.author },
    datePublished: new Date(tutorial.publishedAt).toISOString(),
    dateModified: new Date(tutorial.updatedAt || tutorial.publishedAt).toISOString(),
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    keywords: (tutorial.tags || []).join(', '),
  } as const;

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: tutorial.title,
    description: tutorial.description,
    totalTime: `PT${Math.max(1, tutorial.readTime)}M`,
    step: [
      { '@type': 'HowToStep', name: 'Follow the guide', text: 'Work through the steps and code blocks in this tutorial.' }
    ],
  } as const;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Tutorials', item: '/tutorials' },
      { '@type': 'ListItem', position: 3, name: tutorial.title, item: canonical },
    ],
  } as const;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '🟢';
      case 'intermediate': return '🟡';
      case 'advanced': return '🔴';
      default: return '⚪';
    }
  };

  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Breadcrumb */}
      <div className="bg-white/5 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <span className="text-gray-600">/</span>
            <Link href="/tutorials" className="text-gray-400 hover:text-white">Tutorials</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">{tutorial.title}</span>
          </nav>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-900/20 to-purple-900/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Build Your Own AI Chatbot?</h2>
          <p className="text-gray-300 mb-8">
            Put this tutorial into practice with Sajedar's expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/?message=I want help implementing this tutorial.#contact"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/tutorials"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              More Tutorials
            </Link>
          </div>
        </div>
      </div>

      {/* Developer CTA Section */}
      <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Are you a developer?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our developer network and get exposure for your work. Connect with potential clients 
            and find new leads for your AI automation projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/developer"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Join Developer Network
            </Link>
            <Link
              href="/?message=I'm a developer interested in collaborating with Sajedar.#contact"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getDifficultyColor(tutorial.difficulty)}`}>
              {getDifficultyIcon(tutorial.difficulty)} {tutorial.difficulty}
            </span>
            <span className="text-gray-400">{tutorial.readTime} min read</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">{tutorial.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            {tutorial.title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {tutorial.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {tutorial.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between py-6 border-t border-b border-white/10">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <div className="text-white font-semibold">{tutorial.author}</div>
                <div className="text-gray-400 text-sm">
                  Published {new Date(tutorial.publishedAt).toLocaleDateString()}
                  {tutorial.updatedAt !== tutorial.publishedAt && (
                    <span> • Updated {new Date(tutorial.updatedAt).toLocaleDateString()}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.682a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div 
            className="tutorial-content"
            dangerouslySetInnerHTML={{ 
              __html: tutorial.content
                .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-900 p-4 rounded-lg overflow-x-auto"><code class="text-green-400">$2</code></pre>')
                .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-white mb-2 mt-4">$1</h3>')
                .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-white mb-3 mt-6">$1</h2>')
                .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-white mb-4 mt-8">$1</h1>')
                .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
                .replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-2 py-1 rounded text-green-400">$1</code>')
                .replace(/^- (.*$)/gm, '<li class="text-gray-300 mb-1">$1</li>')
                .replace(/^\* (.*$)/gm, '<li class="text-gray-300 mb-1">$1</li>')
                .replace(/\n{2,}/g, '<br><br>')
                .replace(/\n/g, '<br>')
            }}
          />
        </article>

        {/* Related Tutorials */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tutorials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {getAllTutorials()
              .filter(t => t.id !== tutorial.id && t.category === tutorial.category)
              .slice(0, 2)
              .map((relatedTutorial) => (
                <Link
                  key={relatedTutorial.id}
                  href={`/tutorials/${relatedTutorial.slug}`}
                  className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all duration-200 group"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {relatedTutorial.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{relatedTutorial.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{relatedTutorial.readTime} min read</span>
                    <span>{new Date(relatedTutorial.publishedAt).toLocaleDateString()}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-900/20 to-purple-900/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Build Your Own AI Chatbot?</h2>
          <p className="text-gray-300 mb-8">
            Put this tutorial into practice with Sajedar's expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/?message=I want help implementing this tutorial.#contact"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/tutorials"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              More Tutorials
            </Link>
          </div>
        </div>
      </div>

      {/* Developer CTA Section */}
      <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Are you a developer?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our developer network and get exposure for your work. Connect with potential clients 
            and find new leads for your AI automation projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/developer"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Join Developer Network
            </Link>
            <Link
              href="/?message=I'm a developer interested in collaborating with Sajedar.#contact"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-900/20 to-purple-900/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Build Your Own AI Chatbot?</h2>
          <p className="text-gray-300 mb-8">
            Put this tutorial into practice with Sajedar's expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/?message=I want help implementing this tutorial.#contact"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/tutorials"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              More Tutorials
            </Link>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-900/20 to-purple-900/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Build Your Own AI Chatbot?</h2>
          <p className="text-gray-300 mb-8">
            Put this tutorial into practice with Sajedar's expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/?message=I want help implementing this tutorial.#contact"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/tutorials"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              More Tutorials
            </Link>
          </div>
        </div>
      </div>

      {/* Developer CTA Section */}
      <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Are you a developer?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our developer network and get exposure for your work. Connect with potential clients 
            and find new leads for your AI automation projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/developer"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Join Developer Network
            </Link>
            <Link
              href="/?message=I'm a developer interested in collaborating with Sajedar.#contact"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
