import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full py-10 flex flex-col items-center bg-[#18181b] text-gray-400 text-sm font-sora border-t border-white/10 mt-8">
      {/* Main Navigation Links - Centered */}
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        <div className="text-center">
          <h3 className="text-sm font-semibold leading-6 text-white mb-4">Sitemap</h3>
          <ul role="list" className="space-y-3">
            <li>
              <a href="/tutorials" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Tutorials</a>
            </li>
            <li>
              <a href="/articles" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Articles</a>
            </li>
            <li>
              <a href="/demo" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Demo</a>
            </li>
          </ul>
        </div>
        
        <div className="text-center">
          <h3 className="text-sm font-semibold leading-6 text-white mb-4">Legal</h3>
          <ul role="list" className="space-y-3">
            <li>
              <Link href="/PrivacyPolicy" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/TermsOfService" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
            </li>
            <li>
              <Link href="/Contact" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Brand Section - Centered */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-orange-400 font-mono font-bold text-lg">Sajedar</span>
        <span>•</span>
        <span className="text-white">AI Agent Builder Agency</span>
      </div>
      
      {/* Copyright - Centered */}
      <div className="text-center">© {new Date().getFullYear()} Sajedar. All rights reserved.</div>
    </footer>
  );
}
