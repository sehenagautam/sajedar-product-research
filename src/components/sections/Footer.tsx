import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative border-t border-black/[0.06] bg-[#fafafa] px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Nav */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { href: '/chatbot-automation-agency', label: 'AI Sales Agent' },
            { href: '/messenger-ecommerce-automation', label: 'Use Cases' },
            { href: '/resources', label: 'Resources' },
            { href: '/career', label: 'Careers' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-black/[0.06] bg-black/[0.02] px-5 py-2 text-[13px] font-medium text-[#71717a] transition-all duration-200 hover:border-black/[0.12] hover:text-[#18181b]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="glow-line mx-auto mb-8 max-w-xs" />

        {/* Brand */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-semibold text-emerald-600">Sajedar</span>
            <span className="text-[#d4d4d8]">·</span>
            <span className="text-[13px] text-[#a1a1aa]">Top AI Agent Builder in Nepal</span>
          </div>
          <p className="text-[12px] text-[#a1a1aa]">
            © {new Date().getFullYear()} Sajedar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
