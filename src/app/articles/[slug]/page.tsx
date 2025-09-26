import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllArticles, getArticleBySlug } from '../../../content/articles';

export async function generateStaticParams() {
  return getAllArticles().map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: 'Article Not Found' };
  return {
    title: article.seo.metaTitle,
    description: article.seo.metaDescription,
    keywords: article.seo.keywords,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: { title: article.seo.metaTitle, description: article.seo.metaDescription, url: `https://sajedar.com/articles/${article.slug}` },
    twitter: { card: 'summary_large_image', title: article.seo.metaTitle, description: article.seo.metaDescription }
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  let html = article.content
    // blockquote
    .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-emerald-500 pl-4 italic text-gray-300 my-4">$1</blockquote>')
    // bold (**text**)
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
    // highlight ranges and numbers (order matters: ranges before singles)
    // currency ranges like $7.8–$8.6B, €1–€2M or with hyphen
    .replace(/[€$][0-9][\d\.,]*(?:[KMBT])?[\u2013\-][€$][0-9][\d\.,]*(?:[KMBT])?/g, '<span class="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">$&</span>')
    // percentage ranges like +7–25% or 24-30%
    .replace(/[+\-]?\d+(?:\.\d+)?[\u2013\-]\d+(?:\.\d+)?%/g, '<span class="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">$&</span>')
    // single currency with optional suffix like $1T, €20M, $190.3B, $300K
    .replace(/[€$][0-9][\d\.,]*(?:[KMBT])?/g, '<span class="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">$&</span>')
    // single percentages including decimals and optional +/−
    .replace(/[+\-]?\d+(?:\.\d+)?%/g, '<span class="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">$&</span>')
    // headings
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-white mt-6 mb-2">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-white mt-8 mb-3">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-white mt-10 mb-4">$1</h1>')
    // nested lists: level 3 (4+ spaces), level 2 (2 spaces), then level 1 (no spaces)
    .replace(/^\s{4,}- (.*$)/gm, '<li data-level="3" class="mb-1 text-gray-300">$1</li>')
    .replace(/^\s{2}- (.*$)/gm, '<li data-level="2" class="mb-1 text-gray-300">$1</li>')
    .replace(/^- (.*$)/gm, '<li data-level="1" class="mb-1 text-gray-300">$1</li>')
    // wrap level 3 sequences (sub-sublist)
    .replace(/(?:<li[^>]*data-level=\"3\"[^>]*>[\s\S]*?<\/li>\s*)+/g, (m) => `<ul class=\"list-disc pl-12 mt-1 mb-2\">${m}</ul>`)
    // wrap level 2 sequences (sublist)
    .replace(/(?:<li[^>]*data-level=\"2\"[^>]*>(?:[\s\S]*?)<\/li>\s*(?:<ul[^>]*>[\s\S]*?<\/ul>\s*)?)+/g, (m) => `<ul class=\"list-disc pl-10 mt-1 mb-3\">${m}</ul>`)
    // wrap level 1 sequences (top-level)
    .replace(/(?:<li[^>]*data-level=\"1\"[^>]*>(?:[\s\S]*?)<\/li>\s*(?:<ul[^>]*>[\s\S]*?<\/ul>\s*)?)+/g, (m) => `<ul class=\"list-disc pl-8 mt-1 mb-4\">${m}</ul>`)
    // paragraphs and breaks
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, '<br>')
    // ensure a larger gap after closing ul before next paragraph
    .replace(/<\/ul>\s*<p>/g, '</ul><p class="mt-4">')
    // wrap in paragraph
    .replace(/^/, '<p>')
    .replace(/$/, '</p>');

  // Style Sources heading smaller and wrap entire Sources content in grey container
  html = html
    .replace(/<h3[^>]*>\s*(Sources[^<]*)<\/h3>/i, '<h3 class="text-base font-semibold text-gray-400 mt-6 mb-2">$1</h3>')
    .replace(/<h2[^>]*>\s*(Sources[^<]*)<\/h2>/i, '<h2 class="text-lg font-semibold text-gray-400 mt-6 mb-2">$1</h2>')
    .replace(/(<h[23][^>]*>\s*Sources[^<]*<\/h[23]>\s*)([\s\S]*)$/i, '$1<div class="text-sm text-gray-400">$2</div>');

  const youtubeEmbed = article.youtubeUrl
    ? `<div class="my-8 rounded-2xl overflow-hidden border border-white/10 shadow-xl"><iframe class="w-full aspect-video" src="https://www.youtube.com/embed/${new URL(article.youtubeUrl).searchParams.get('v')}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`
    : '';

  return (
    <main className="min-h-screen bg-[#18181b] text-white">
      {/* Breadcrumb */}
      <div className="bg-white/5 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <span className="text-gray-600">/</span>
            <Link href="/articles" className="text-gray-400 hover:text-white">Articles</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">{article.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-gray-400 text-sm">{new Date(article.publishedAt).toLocaleDateString()} • {article.readTime} min read</div>
            {article.category && <span className="px-2 py-1 text-xs rounded bg-emerald-500/20 text-emerald-300">{article.category}</span>}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">{article.title}</h1>
          <p className="text-lg text-gray-300">{article.excerpt}</p>
        </div>

        {/* YouTube embed (if any) */}
        <div dangerouslySetInnerHTML={{ __html: youtubeEmbed }} />

        {/* Article body */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>

        {/* CTA */}
        <div className="mt-12 p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-900/20 to-purple-900/20">
          <h3 className="text-xl font-bold mb-2">Want a concierge like this for your hotel?</h3>
          <p className="text-gray-300 mb-4">We’ll tailor an AI assistant for your property in days, not months.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/?message=I want a digital concierge for my hotel.#contact" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition">Talk to us</Link>
            <a href={article.youtubeUrl || '#'} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition">Watch the intro</a>
            <Link href="/demo" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition">See live demos</Link>
          </div>
        </div>
      </div>
    </main>
  );
} 