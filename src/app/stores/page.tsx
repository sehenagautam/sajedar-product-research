'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import { Footer } from '../../components/sections';
import storesData from '../../data/stores.json';

export default function StoresPage() {
    return (
        <div className="min-h-screen w-full bg-[#fafaf9] text-[#44403c] flex flex-col font-sans">
            <Header />

            <main className="flex-grow pt-24 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#292524] mb-4">
                            Our Partner Stores
                        </h1>
                        <p className="text-lg text-[#57534e] max-w-2xl mx-auto">
                            Explore a variety of stores powered by Sajedar's AI agents.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {storesData.map((store) => (
                            <Link
                                href={`/store/${store.id}`}
                                key={store.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200 flex flex-col p-6"
                            >
                                <div className="flex-grow flex flex-col">
                                    <h2 className="text-2xl font-bold text-[#292524] mb-2 group-hover:text-emerald-600 transition-colors">
                                        {store.name}
                                    </h2>
                                    <p className="text-[#57534e] mb-4 flex-grow">
                                        {store.description}
                                    </p>
                                    <div className="flex items-center text-emerald-600 font-medium mt-auto">
                                        Visit Store
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
