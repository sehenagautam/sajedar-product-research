'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const handleDownloadProposal = () => {
    const link = document.createElement('a');
    link.href = '/Sajedar-Business-Proposal_AI_Chatbot.pdf';
    link.download = 'Sajedar-Business-Proposal_AI_Chatbot.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#18181b]/90 via-[#23243a]/90 to-[#1a1a2e]/90 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden">
              <Image
                src="/sajedar-new-logo.png"
                alt="Sajedar Logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div 
              className="text-xl font-semibold tracking-tight" 
              style={{ 
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                color: '#2eb447'
              }}
            >
              Sajedar
            </div>
          </Link>

          {/* Download Proposal Button */}
          <button
            onClick={handleDownloadProposal}
            className="px-4 py-2 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2 cursor-pointer hover:opacity-90"
            style={{ 
              fontFamily: 'Inter, Arial, sans-serif',
              backgroundColor: '#2eb447'
            }}
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            Download Proposal
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
