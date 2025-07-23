import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full py-10 flex flex-col items-center bg-[#18181b] text-gray-400 text-sm font-sora border-t border-white/10 mt-8">
      <div className="flex gap-4 mb-2">
        <Link href="/PrivacyPolicy" className="hover:text-emerald-500 transition">
          Privacy Policy
        </Link>
        <Link href="/TermsOfService" className="hover:text-emerald-500 transition">
          Terms of Service
        </Link>
        <Link href="/Contact" className="hover:text-emerald-500 transition">
          Contact
        </Link>
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