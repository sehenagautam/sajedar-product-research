import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#18181b] text-white">
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-serif font-bold mb-4">Page not found</h1>
        <p className="text-gray-300 mb-8">The page you’re looking for doesn’t exist or may have been moved.</p>

        <div className="grid gap-4 md:grid-cols-2 text-left">
          <div className="rounded-lg border border-white/10 p-5 bg-white/5">
            <h2 className="text-lg font-semibold mb-2">Quick links</h2>
            <ul className="space-y-2 text-emerald-300">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/demo" className="hover:underline">Live Demos</Link></li>
              <li><Link href="/articles" className="hover:underline">Articles</Link></li>
              <li><Link href="/tutorials" className="hover:underline">Tutorials</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div className="rounded-lg border border-white/10 p-5 bg-white/5">
            <h2 className="text-lg font-semibold mb-2">Report a broken link</h2>
            <p className="text-gray-400 mb-3">Spotted an issue? Tell us and we’ll fix it fast.</p>
            <Link href="/?message=I found a broken link on your site.#contact" className="inline-block px-5 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg text-white font-semibold">Report now</Link>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white">Back to homepage</Link>
        </div>
      </div>
    </main>
  );
}
