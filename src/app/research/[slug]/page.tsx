import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getResearchArticle, getAllResearchArticles } from '../../../content/research';
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';

interface ResearchArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = getAllResearchArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ResearchArticlePageProps): Promise<Metadata> {
  const article = getResearchArticle(params.slug);
  
  if (!article) {
    return {
      title: 'Research Article Not Found',
    };
  }

  return {
    title: article.seo.metaTitle,
    description: article.seo.metaDescription,
    keywords: article.seo.keywords,
    alternates: { canonical: `https://sajedar.com/research/${article.slug}` },
    openGraph: {
      title: article.seo.metaTitle,
      description: article.seo.metaDescription,
      url: `https://sajedar.com/research/${article.slug}`,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@sajedar',
      creator: '@sajedar',
      title: article.seo.metaTitle,
      description: article.seo.metaDescription,
    },
  };
}

export default function ResearchArticlePage({ params }: ResearchArticlePageProps) {
  const article = getResearchArticle(params.slug);

  if (!article) {
    notFound();
  }

  // Convert markdown to HTML with custom styling
  const formatContent = (content: string) => {
    return content
      // Headers
      .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-bold text-white mt-8 mb-4">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-3xl font-bold text-white mt-10 mb-6">$1</h2>')
      .replace(/^# (.*$)/gm, '<h2 class="text-4xl font-bold text-white mt-12 mb-8">$1</h2>')
      
      // Bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-emerald-400">$1</strong>')
      
      // Lists
      .replace(/^- (.*$)/gm, '<li class="text-gray-300 mb-2">$1</li>')
      .replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside space-y-2 my-4">$1</ul>')
      
      // Line breaks
      .replace(/\n\n/g, '</p><p class="text-gray-300 leading-relaxed mb-4">')
      .replace(/\n/g, '<br />');
  };

  const formattedContent = formatContent(article.content);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e]">
      {/* Header */}
      <div className="pt-24 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/research" 
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Research
          </Link>
          
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-semibold rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight tracking-tight">
              {article.title}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 border-b border-white/10 pb-6">
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pb-24">
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: `<p class="text-gray-300 leading-relaxed mb-4">${formattedContent}</p>` }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center space-x-2 mb-4">
            <Tag size={20} className="text-gray-400" />
            <span className="text-gray-400 font-medium">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-emerald-900/30 to-transparent border border-emerald-500/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Implement AI Solutions?</h3>
          <p className="text-gray-300 mb-6">
            Based on this research, let Sajedar help you build conversational AI solutions tailored for the Nepal and South Asia market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/?message=I'm interested in implementing AI solutions based on your research insights.#contact"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors duration-200 text-center"
            >
              Get Started
            </Link>
            <Link 
              href="/research"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors duration-200 text-center border border-white/20"
            >
              More Research
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
