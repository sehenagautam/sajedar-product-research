import React from 'react';
import Link from 'next/link';
import { getAllTutorials, getFeaturedTutorials, categories } from '../../content/tutorials';
import { Tutorial } from '../../types/tutorial';

export const metadata = {
  title: 'AI Chatbot Tutorials & Guides',
  description: 'Learn to build AI chatbots, Facebook Messenger bots, and automation workflows. Step-by-step tutorials with code examples.',
  alternates: { canonical: '/tutorials' },
  openGraph: {
    title: 'AI Chatbot Tutorials & Guides | Sajedar',
    description: 'Learn to build AI chatbots, Facebook Messenger bots, and automation workflows. Step-by-step tutorials with code examples.',
    url: 'https://sajedar.com/tutorials'
  }
};

export default function TutorialsPage() {
  const allTutorials = getAllTutorials();
  const featuredTutorials = getFeaturedTutorials();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.icon || '📚';
  };

  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900/20 to-purple-900/20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 block">
              Learning Center
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
              AI Chatbot <span className="text-emerald-400">Tutorials</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Master the art of building AI chatbots, Facebook Messenger bots, and automation workflows. 
              Step-by-step guides with real code examples and best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Free Tutorials</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-sm text-gray-300">Code Examples</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-sm text-gray-300">Step-by-Step</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Browse by Category</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/tutorials/category/${category.slug}`}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all duration-200 group"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-gray-400 text-sm">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Tutorials */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Tutorials</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredTutorials.map((tutorial) => (
            <Link
              key={tutorial.id}
              href={`/tutorials/${tutorial.slug}`}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{getCategoryIcon(tutorial.category)}</span>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getDifficultyColor(tutorial.difficulty)}`}>
                    {tutorial.difficulty}
                  </span>
                  <span className="text-gray-400 text-sm">{tutorial.readTime} min read</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {tutorial.title}
              </h3>
              <p className="text-gray-400 mb-4">{tutorial.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tutorial.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>By {tutorial.author}</span>
                <span>{new Date(tutorial.publishedAt).toLocaleDateString()}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* All Tutorials */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">All Tutorials</h2>
        <div className="space-y-6">
          {allTutorials.map((tutorial) => (
            <Link
              key={tutorial.id}
              href={`/tutorials/${tutorial.slug}`}
              className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-2xl">{getCategoryIcon(tutorial.category)}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getDifficultyColor(tutorial.difficulty)}`}>
                        {tutorial.difficulty}
                      </span>
                      <span className="text-gray-400 text-sm">{tutorial.readTime} min read</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{tutorial.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tutorial.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right text-sm text-gray-500 ml-4">
                  <div>By {tutorial.author}</div>
                  <div>{new Date(tutorial.publishedAt).toLocaleDateString()}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-900/20 to-purple-900/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Own AI Chatbot?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Put your learning into practice. Let Sajedar help you build a custom AI chatbot for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/?message=I would like help building an AI chatbot.#contact"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/demo"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors duration-200"
            >
              View Demos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
