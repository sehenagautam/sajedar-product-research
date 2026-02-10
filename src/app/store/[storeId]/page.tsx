'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import storesData from '../../../data/stores.json';

interface PageProps {
    params: {
        storeId: string;
    };
}

export default function StorePage({ params }: PageProps) {
    const store = storesData.find((s) => s.id === params.storeId);

    if (!store) {
        return notFound();
    }

    return (
        <div className="min-h-screen w-full bg-[#fafaf9] text-[#44403c] flex flex-col font-sans">
            <Header />

            <main className="flex-grow pt-24 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="mb-8 text-sm">
                        <Link href="/stores" className="text-[#57534e] hover:text-emerald-600 transition-colors">
                            Stores
                        </Link>
                        <span className="mx-2 text-stone-300">/</span>
                        <span className="text-[#292524] font-medium">{store.name}</span>
                    </nav>

                    {/* Store Header */}
                    <div className="bg-white rounded-2xl p-8 mb-12 border border-stone-200 shadow-sm flex flex-col items-start">
                        <h1 className="text-4xl font-bold text-[#292524] mb-4">
                            {store.name}
                        </h1>
                        <p className="text-lg text-[#57534e] max-w-2xl">
                            {store.description}
                        </p>
                    </div>

                    {/* Products Grid */}
                    <h2 className="text-2xl font-bold text-[#292524] mb-6 border-b border-stone-200 pb-2">
                        Available Products
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {store.products.map((product) => (
                            <Link
                                href={`/store/${store.id}/${product.id}`}
                                key={product.id}
                                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200 flex flex-col p-6"
                            >
                                <div className="flex-grow flex flex-col">
                                    <h3 className="text-lg font-semibold text-[#292524] mb-2 group-hover:text-emerald-600 transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-[#57534e] text-sm mb-4 line-clamp-2 flex-grow">
                                        {product.description}
                                    </p>
                                    <div className="font-bold text-emerald-600 mt-auto">
                                        NRS {product.price.toLocaleString()}
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
