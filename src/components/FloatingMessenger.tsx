"use client";

import React from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export function FloatingMessenger() {
    return (
        <Link
            href="https://m.me/sajedardotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#0084FF] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            aria-label="Chat on Messenger"
        >
            <div className="absolute inset-0 rounded-full bg-[#0084FF] animate-ping opacity-20 group-hover:opacity-0 delay-150 duration-1000"></div>

            {/* Messenger Icon Custom SVG to match brand exactly or use Lucide as fallback */}
            <svg
                viewBox="0 0 28 28"
                fill="currentColor"
                height="28"
                width="28"
                className="relative z-10"
            >
                <path d="M14 0C6.223 0 0 5.86 0 13.56c0 4.027 1.705 7.64 4.502 10.165v4.96l4.28-2.352c1.64.455 3.395.703 5.218.703 7.777 0 14-5.86 14-13.56C28 5.86 21.758 0 14 0zm1.75 18.2L11.55 13.7l-7.7 4.2 8.4-9.1 4.55 4.55 7-4.2-8.05 9.05z" />
            </svg>

            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Chat with us
                <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white transform -translate-y-1/2 rotate-45"></div>
            </span>
        </Link>
    );
}
