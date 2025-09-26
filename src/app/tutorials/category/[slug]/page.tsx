import React from 'react';
import Link from 'next/link';
import { getTutorialsByCategory, categories } from '../../../../content/tutorials';
import { Tutorial } from '../../../../types/tutorial';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = categories.find(cat => cat.slug === params.slug);
  
  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} Tutorials - AI Chatbot Learning`,
    description: `Learn ${category.name.toLowerCase()} with our comprehensive tutorials. ${category.description}`,
    alternates: { canonical: `/tutorials/category/${category.slug}` },
    openGraph: {
      title: `${category.name} Tutorials | Sajedar`,
      description: `Learn ${category.name.toLowerCase()} with our comprehensive tutorials.`,
      url: `https://sajedar.com/tutorials/category/${category.slug}`,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(cat => cat.slug === params.slug);
  const tutorials = getTutorialsByCategory(params.slug);

  if (!category) {
    return <div>Category not found</div>;
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      {/* Breadcrumb */}
      <div className="bg-white/5 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <span className="text-gray-600">/</span>
            <Link href="/tutorials" className="text-gray-400 hover:text-white">Tutorials</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">{category.icon}</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {category.name} Tutorials
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>

        {/* Tutorials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.id}
              href={`/tutorials/${tutorial.slug}`}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getDifficultyColor(tutorial.difficulty)}`}>
                  {tutorial.difficulty}
                </span>
                <span className="text-gray-400 text-sm">{tutorial.readTime} min read</span>
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

        {tutorials.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-white mb-2">No tutorials yet</h3>
            <p className="text-gray-400">We're working on adding more tutorials in this category.</p>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-emerald-900/20 to-purple-900/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Want to Learn More?</h2>
          <p className="text-gray-300 mb-8">
            Explore all our tutorials or get personalized guidance from our experts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tutorials"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              All Tutorials
            </Link>
            <Link
              href="/Contact"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Get Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
