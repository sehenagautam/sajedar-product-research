import React from 'react';
import Link from 'next/link';
import { Tutorial } from '../../types/tutorial';

interface RelatedContentProps {
  currentTutorial: Tutorial;
  allTutorials: Tutorial[];
  maxItems?: number;
}

export function RelatedContent({ currentTutorial, allTutorials, maxItems = 3 }: RelatedContentProps) {
  const relatedTutorials = allTutorials
    .filter(tutorial => 
      tutorial.id !== currentTutorial.id && 
      (tutorial.category === currentTutorial.category || 
       tutorial.tags.some(tag => currentTutorial.tags.includes(tag)))
    )
    .slice(0, maxItems);

  if (relatedTutorials.length === 0) return null;

  return (
    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-4">Related Tutorials</h3>
      <div className="space-y-4">
        {relatedTutorials.map((tutorial) => (
          <Link
            key={tutorial.id}
            href={`/tutorials/${tutorial.slug}`}
            className="block hover:bg-white/10 rounded-lg p-4 transition-colors"
          >
            <h4 className="text-lg font-medium text-white mb-2 hover:text-emerald-400 transition-colors">
              {tutorial.title}
            </h4>
            <p className="text-gray-400 text-sm mb-2">{tutorial.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{tutorial.readTime} min read</span>
              <span>{tutorial.difficulty}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

interface CategoryNavigationProps {
  currentCategory?: string;
  categories: Array<{
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: string;
  }>;
}

export function CategoryNavigation({ currentCategory, categories }: CategoryNavigationProps) {
  return (
    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-4">Browse by Category</h3>
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/tutorials/category/${category.slug}`}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              currentCategory === category.id 
                ? 'bg-emerald-500/20 text-emerald-300' 
                : 'hover:bg-white/10 text-gray-300'
            }`}
          >
            <span className="text-2xl">{category.icon}</span>
            <div>
              <div className="font-medium">{category.name}</div>
              <div className="text-xs text-gray-400">{category.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

interface BreadcrumbProps {
  items: Array<{
    name: string;
    href: string;
  }>;
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-6" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="text-gray-600">/</span>}
          {index === items.length - 1 ? (
            <span className="text-white font-medium">{item.name}</span>
          ) : (
            <Link 
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

interface TagCloudProps {
  tags: string[];
  currentTag?: string;
  baseUrl?: string;
}

export function TagCloud({ tags, currentTag, baseUrl = '/tutorials' }: TagCloudProps) {
  const uniqueTags = [...new Set(tags)].sort();
  
  return (
    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-4">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {uniqueTags.map((tag) => (
          <Link
            key={tag}
            href={`${baseUrl}?tag=${encodeURIComponent(tag)}`}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              currentTag === tag
                ? 'bg-emerald-500 text-white'
                : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
            }`}
          >
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  );
}

interface TutorialSeriesProps {
  series: Array<{
    title: string;
    slug: string;
    order: number;
    completed?: boolean;
  }>;
  currentSlug?: string;
}

export function TutorialSeries({ series, currentSlug }: TutorialSeriesProps) {
  const sortedSeries = series.sort((a, b) => a.order - b.order);
  const currentIndex = sortedSeries.findIndex(item => item.slug === currentSlug);
  
  return (
    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-4">Tutorial Series</h3>
      <div className="space-y-3">
        {sortedSeries.map((tutorial, index) => (
          <Link
            key={tutorial.slug}
            href={`/tutorials/${tutorial.slug}`}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              tutorial.slug === currentSlug
                ? 'bg-emerald-500/20 text-emerald-300'
                : 'hover:bg-white/10 text-gray-300'
            }`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              tutorial.completed 
                ? 'bg-green-500 text-white' 
                : tutorial.slug === currentSlug
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-500 text-white'
            }`}>
              {tutorial.completed ? '✓' : index + 1}
            </div>
            <div className="flex-1">
              <div className="font-medium">{tutorial.title}</div>
              <div className="text-xs text-gray-400">
                {tutorial.completed ? 'Completed' : 
                 tutorial.slug === currentSlug ? 'Current' : 
                 'Upcoming'}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
