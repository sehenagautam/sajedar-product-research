import { Metadata } from 'next';
import Link from 'next/link';
import { getAllResearchArticles } from '../../content/research';
import { Calendar, Clock, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Research | Sajedar',
  description: 'In-depth research articles on conversational AI, market trends, and strategic insights across Nepal and South Asia.',
  alternates: { canonical: 'https://sajedar.com/research' },
  openGraph: {
    title: 'Research | Sajedar',
    description: 'In-depth research articles on conversational AI, market trends, and strategic insights across Nepal and South Asia.',
    url: 'https://sajedar.com/research',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sajedar',
    creator: '@sajedar',
    title: 'Research | Sajedar',
    description: 'In-depth research articles on conversational AI, market trends, and strategic insights across Nepal and South Asia.',
  },
};

export default function ResearchPage() {
  const articles = getAllResearchArticles();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e]">
      {/* Header */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
            Research & <span className="text-emerald-400">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            In-depth analysis of conversational AI trends, market opportunities, and strategic insights across Nepal and South Asia.
          </p>
        </div>
      </div>

      {/* Research Articles Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/research/${article.slug}`}
              className="group bg-gradient-to-br from-[#23243a] to-[#18181b] rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
              
              <div className="flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
