import Link from 'next/link';
import { getAllArticles } from '../../content/articles';

export const metadata = {
  title: 'Articles for Business | Sajedar',
  description: 'Plain-language articles to help everyday businesspeople understand AI benefits.'
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  return (
    <main className="min-h-screen bg-[#18181b] text-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">Articles</h1>
        <p className="text-gray-300 mb-10">Short, practical reads — no jargon.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((a) => (
            <Link key={a.id} href={`/articles/${a.slug}`} className="group block bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400">{new Date(a.publishedAt).toLocaleDateString()} • {a.readTime} min read</span>
                {a.category && <span className="px-2 py-1 text-xs rounded bg-emerald-500/20 text-emerald-300">{a.category}</span>}
              </div>
              <h2 className="text-xl font-semibold group-hover:text-emerald-400 transition-colors mb-2">{a.title}</h2>
              <p className="text-gray-300 text-sm">{a.excerpt}</p>
              <div className="mt-4 text-emerald-400 text-sm">Read more →</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 