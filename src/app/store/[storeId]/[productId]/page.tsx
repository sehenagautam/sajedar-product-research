'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '../../../../components/Header';
import { Footer } from '../../../../components/sections';
import storesData from '../../../../data/stores.json';

interface PageProps {
    params: {
        storeId: string;
        productId: string;
    };
}

export default function ProductPage({ params }: PageProps) {
    const store = storesData.find((s) => s.id === params.storeId);

    if (!store) {
        return notFound();
    }

    const product = store.products.find((p) => p.id === params.productId);

    if (!product) {
        return notFound();
    }

    const otherProducts = store.products.filter((p) => p.id !== params.productId);

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
                        <Link href={`/store/${store.id}`} className="text-[#57534e] hover:text-emerald-600 transition-colors">
                            {store.name}
                        </Link>
                        <span className="mx-2 text-stone-300">/</span>
                        <span className="text-[#292524] font-medium">{product.name}</span>
                    </nav>

                    {/* Product Details */}
                    <div className="bg-white rounded-2xl p-8 mb-16 border border-stone-200 shadow-sm">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl font-bold text-[#292524] mb-4">
                                {product.name}
                            </h1>
                            <div className="text-3xl font-bold text-emerald-600 mb-6">
                                NRS {product.price.toLocaleString()}
                            </div>
                            <p className="text-lg text-[#57534e] mb-8 leading-relaxed whitespace-pre-line">
                                {product.description}
                            </p>

                            {/* Messenger Button */}
                            {/* @ts-ignore - messengerUrl might not exist on all stores yet */}
                            {/* Messenger/WhatsApp Button */}
                            {/* @ts-ignore - messengerUrl might not exist on all stores yet */}
                            {store.messengerUrl ? (() => {
                                // @ts-ignore
                                const isWhatsApp = store.messengerUrl.includes('wa.me') || store.messengerUrl.includes('whatsapp.com');
                                // @ts-ignore
                                const actionUrl = isWhatsApp
                                    ? `${store.messengerUrl}?text=${encodeURIComponent(`Hi, I'm interested in ${product.name} (ID: ${product.id}). Price: NRS ${product.price.toLocaleString()}`)}`
                                    : `${store.messengerUrl}?ref=buy_${product.id}`;

                                return (
                                    <a
                                        href={actionUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-block w-full md:w-auto px-8 py-4 ${isWhatsApp ? 'bg-[#25D366] hover:bg-[#128C7E]' : 'bg-[#0084FF] hover:bg-[#0078e7]'} text-white font-bold rounded-lg transition-colors duration-200 text-center shadow-md hover:shadow-lg`}
                                    >
                                        {isWhatsApp ? 'Buy on WhatsApp' : 'Buy from Facebook Messenger'}
                                    </a>
                                );
                            })() : (

                                <button className="w-full md:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors duration-200 text-center">
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Also Available */}
                    {otherProducts.length > 0 && (
                        <>
                            <h2 className="text-2xl font-bold text-[#292524] mb-6 border-b border-stone-200 pb-2">
                                Also Available from {store.name}
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {otherProducts.map((otherProduct) => (
                                    <Link
                                        href={`/store/${store.id}/${otherProduct.id}`}
                                        key={otherProduct.id}
                                        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200 flex flex-col p-6"
                                    >
                                        <div className="flex-grow flex flex-col">
                                            <h3 className="text-lg font-semibold text-[#292524] mb-2 group-hover:text-emerald-600 transition-colors">
                                                {otherProduct.name}
                                            </h3>
                                            <div className="font-bold text-emerald-600 mt-auto">
                                                NRS {otherProduct.price.toLocaleString()}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </main >

            <Footer />
        </div >
    );
}
