import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full py-10 flex flex-col items-center bg-[#fafaf9] text-[#57534e] text-sm font-sora border-t border-stone-200 mt-8">
      {/* Main Navigation Links - Centered */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <Link
          href="/chatbot-automation-agency"
          className="px-6 py-2 rounded-full border border-stone-300 hover:bg-stone-200 transition-colors text-[#292524] font-medium"
        >
          AI Sales Agent Services
        </Link>
        <Link
          href="/messenger-ecommerce-automation"
          className="px-6 py-2 rounded-full border border-stone-300 hover:bg-stone-200 transition-colors text-[#292524] font-medium"
        >
          Use Cases
        </Link>
        <Link
          href="/resources"
          className="px-6 py-2 rounded-full border border-stone-300 hover:bg-stone-200 transition-colors text-[#292524] font-medium"
        >
          Resources
        </Link>
        <Link
          href="/career"
          className="px-6 py-2 rounded-full border border-stone-300 hover:bg-stone-200 transition-colors text-[#292524] font-medium"
        >
          Careers
        </Link>
      </div>

      {/* Brand Section - Centered */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-emerald-500 font-bold ml-[2px]">Sajedar</span>
        <span className="text-[#292524] font-medium ml-2">|</span>
        <span className="text-[#292524]">Top AI Agent Builder in Nepal</span>
      </div>

      {/* Copyright - Centered */}
      <div className="text-center">© {new Date().getFullYear()} Sajedar. All rights reserved.</div>
    </footer>
  );
}
