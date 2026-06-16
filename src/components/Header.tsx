'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  logoSrc?: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc = "/sajedar-new-logo-jun16.png" }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-6 lg:gap-8">
            <Link
              href="/"
              className="flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-80"
            >
              <div className="relative h-7 w-7 flex-shrink-0 overflow-hidden rounded-md bg-white">
                <Image
                  src={logoSrc}
                  alt="Sajedar Logo"
                  fill
                  sizes="28px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-[#18181b]">
                Sajedar
              </span>
            </Link>

            <nav className="hidden items-center gap-5 sm:flex">
              {[
                { href: '/about', label: 'About' },
                { href: '/career', label: 'Careers' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium text-[#71717a] transition-colors duration-200 hover:text-[#18181b]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Services CTA */}
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 rounded-lg bg-black/[0.02] px-3.5 py-1.5 text-[13px] font-medium text-[#18181b] transition-all duration-200 hover:border-emerald-500/30 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Services
            <svg className="h-3 w-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
