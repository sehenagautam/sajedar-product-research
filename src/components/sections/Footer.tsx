import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full py-10 flex flex-col items-center bg-[#18181b] text-gray-400 text-sm font-sora border-t border-white/10 mt-8">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold leading-6 text-white">Sitemap</h3>
          <ul role="list" className="mt-6 space-y-4">
            <li>
              <a href="/tutorials" className="text-sm leading-6 text-gray-300 hover:text-white">Tutorials</a>
            </li>
            <li>
              <a href="/articles" className="text-sm leading-6 text-gray-300 hover:text-white">Articles</a>
            </li>
            <li>
              <a href="/demo" className="text-sm leading-6 text-gray-300 hover:text-white">Demo</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
          <ul role="list" className="mt-6 space-y-4">
            <li>
              <Link href="/PrivacyPolicy" className="text-sm leading-6 text-gray-300 hover:text-white">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/TermsOfService" className="text-sm leading-6 text-gray-300 hover:text-white">Terms of Service</Link>
            </li>
            <li>
              <Link href="/Contact" className="text-sm leading-6 text-gray-300 hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-orange-400 font-mono font-bold text-lg">Sajedar</span>
        <span>•</span>
        <span className="text-white">AI Agent Builder Agency</span>
      </div>
      <div className="mt-2">© {new Date().getFullYear()} Sajedar. All rights reserved.</div>
    </footer>
  );
} 