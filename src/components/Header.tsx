'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf9]/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">

          {/* Left Section: Logo + Navigation */}
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 min-w-0 flex-1">
            <Link
              href="/"
              className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/header-logo-transparent.webp"
                  alt="Sajedar Logo"
                  fill
                  sizes="(max-width: 640px) 32px, 40px"
                  className="object-contain"
                  priority
                />
              </div>
              <div
                className="text-base sm:text-lg md:text-xl font-semibold tracking-tight whitespace-nowrap"
                style={{
                  fontFamily:
                    'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  color: '#10b981',
                }}
              >
                Sajedar
              </div>
            </Link>

            {/* Navigation Links - Hidden on very small screens */}
            <nav className="hidden sm:flex items-center space-x-4 md:space-x-6">
              <Link
                href="/services"
                className="text-xs sm:text-sm font-medium text-[#292524] hover:text-emerald-500 transition-colors duration-200 whitespace-nowrap"
                style={{ fontFamily: 'Inter, Arial, sans-serif' }}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-xs sm:text-sm font-medium text-[#292524] hover:text-emerald-500 transition-colors duration-200 whitespace-nowrap"
                style={{ fontFamily: 'Inter, Arial, sans-serif' }}
              >
                About Us
              </Link>
              <Link
                href="/career"
                className="text-xs sm:text-sm font-medium text-[#292524] hover:text-emerald-500 transition-colors duration-200 whitespace-nowrap"
                style={{ fontFamily: 'Inter, Arial, sans-serif' }}
              >
                Careers
              </Link>
            </nav>
          </div>

          {/* Right Section: Download Button */}
          <Link
            href="/pricing"
            className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg transition-colors duration-200 flex items-center gap-1 sm:gap-2 cursor-pointer hover:opacity-90 flex-shrink-0 whitespace-nowrap"
            style={{
              fontFamily: 'Inter, Arial, sans-serif',
              backgroundColor: '#10b981',
            }}
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="hidden sm:inline">View</span>
            <span className="hidden md:inline"> Pricing</span>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;
