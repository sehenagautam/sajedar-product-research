'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Copy, RefreshCw, Wand2, Image as ImageIcon, User, Type, LayoutTemplate } from 'lucide-react';

// --- DATA & LOGIC MAPPING ---

const FORMATS = [
    { label: 'Square (1:1)', value: '--ar 1:1', desc: 'Best for Carousel Ads' },
    { label: 'Portrait (4:5)', value: '--ar 4:5', desc: 'Best for Mobile Newsfeed' },
    { label: 'Landscape (1.91:1)', value: '--ar 1.91:1', desc: 'Link Preview Style' },
];

const STYLES = {
    corporate: {
        label: "Corporate Trust",
        tokens: "clean bright lighting, blue and white color palette, 8k resolution, stock photography style, trustworthy, professional, Canon 5D Mark IV"
    },
    warm: {
        label: "Warm & Local",
        tokens: "golden hour sunlight, warm tones, authentic nepal street atmosphere, bokeh background, cinematic lighting, emotional connection, warm glow"
    },
    luxury: {
        label: "High-End Luxury",
        tokens: "dramatic moody lighting, dark background, gold accents, macro details, sharp focus, ray tracing, product photography, editorial look"
    },
    neon: {
        label: "Neon / Tech",
        tokens: "cyberpunk colors, purple and teal lighting, futuristic, glow effects, digital art style, octane render, volumetric fog"
    },
    minimal: {
        label: "Ultra Minimal",
        tokens: "heavy negative space, flat soft lighting, pastel color palette, studio backdrop, minimalist composition, behance style"
    }
};

const NEGATIVE_PROMPT = "--no text, watermark, bad hands, distorted fingers, extra limbs, blur, grainy, low resolution, ugly, deformed";

export default function PromptBuilderPage() {
    // --- STATE MANAGEMENT ---
    
    // Slot 1: Format
    const [format, setFormat] = useState(FORMATS[0]);

    // Slot 2: Category
    const [category, setCategory] = useState<'product' | 'human' | 'backdrop'>('product');

    // Slot 3: Subject Details (Dynamic)
    const [productName, setProductName] = useState('');
    const [productMaterial, setProductMaterial] = useState('');
    
    const [humanRole, setHumanRole] = useState('');
    const [humanDemographic, setHumanDemographic] = useState('Nepali man'); // Default

    // Slot 4: Context / Action
    const [context, setContext] = useState('');

    // Slot 5: Style
    const [styleKey, setStyleKey] = useState<keyof typeof STYLES>('corporate');

    // Output State
    const [finalPrompt, setFinalPrompt] = useState('');
    const [copied, setCopied] = useState(false);

    // --- LOGIC ENGINE ---

    // Define context options based on category
    const getContextOptions = () => {
        if (category === 'product') return [
            { label: "Floating", value: "floating in mid-air, zero gravity, dynamic angle, suspended" },
            { label: "Podium", value: "placed on a minimal geometric podium, pristine studio setup" },
            { label: "In Use", value: "being held by a hand, first-person perspective, lifestyle context" },
            { label: "Flat Lay", value: "knolling photography, arranged neatly from above, 90 degree angle" }
        ];
        if (category === 'human') return [
            { label: "Working", value: "focused expression, in the middle of a task, candid documentary style, busy atmosphere" },
            { label: "Helping", value: "interacting with a happy client, pointing at a document, smiling warmly, friendly interaction" },
            { label: "Portrait", value: "looking directly at camera, arms crossed confidently, professional headshot, shallow depth of field" }
        ];
        return []; // Backdrop has fixed context
    };

    // Auto-select first context when category changes
    useEffect(() => {
        const options = getContextOptions();
        if (options.length > 0) setContext(options[0].value);
    }, [category]);

    // --- PROMPT ASSEMBLY (The Deterministic Part) ---
    useEffect(() => {
        let parts = [];

        // 1. Subject Construction
        if (category === 'product') {
            const name = productName || "a generic product";
            const mat = productMaterial ? `made of ${productMaterial}` : "";
            parts.push(`A professional product shot of ${name} ${mat},`);
        } 
        else if (category === 'human') {
            const role = humanRole || "professional";
            parts.push(`A photo of a ${humanDemographic} ${role},`);
        } 
        else if (category === 'backdrop') {
            parts.push("An abstract background image with heavy negative space in the center,");
        }

        // 2. Context Construction
        if (category !== 'backdrop') {
            parts.push(context + ",");
        } else {
            parts.push("minimalist composition, low contrast center area for text overlay, blurred details,");
        }

        // 3. Style Injection
        parts.push(STYLES[styleKey].tokens);

        // 4. Format & Negative
        parts.push(format.value);
        parts.push(" - v 6.0"); // Midjourney specific (optional)
        parts.push(NEGATIVE_PROMPT);

        setFinalPrompt(parts.join(' '));
    }, [format, category, productName, productMaterial, humanRole, humanDemographic, context, styleKey]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(finalPrompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-7xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        AI Architecture
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Sajedar Prompt Architect
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Don't guess words. Build scientifically optimized prompts for Midjourney & Stable Diffusion using our deterministic logic tree.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    
                    {/* LEFT SIDE: CONTROLS (Slots) - Spans 7 cols */}
                    <div className="lg:col-span-7 space-y-6">
                        
                        {/* Slot 1: Format */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                            <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                <LayoutTemplate size={16} /> 1. Format Slot
                            </h3>
                            <div className="grid grid-cols-3 gap-3">
                                {FORMATS.map((f) => (
                                    <button
                                        key={f.label}
                                        onClick={() => setFormat(f)}
                                        className={`p-3 rounded-xl border text-left transition-all ${
                                            format.label === f.label 
                                                ? 'bg-emerald-500/20 border-emerald-500 text-white' 
                                                : 'bg-black/20 border-white/10 text-gray-400 hover:bg-white/10'
                                        }`}
                                    >
                                        <div className="font-bold text-sm mb-1">{f.label}</div>
                                        <div className="text-[10px] opacity-70 leading-tight">{f.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Slot 2: Category Selector */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                            <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                <Wand2 size={16} /> 2. Category Slot
                            </h3>
                            <div className="flex gap-4 border-b border-white/10 pb-6 mb-6">
                                <button 
                                    onClick={() => setCategory('product')}
                                    className={`flex-1 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${category === 'product' ? 'bg-white text-black' : 'bg-black/40 text-gray-400 hover:bg-white/10'}`}
                                >
                                    <ImageIcon size={16} /> Product
                                </button>
                                <button 
                                    onClick={() => setCategory('human')}
                                    className={`flex-1 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${category === 'human' ? 'bg-white text-black' : 'bg-black/40 text-gray-400 hover:bg-white/10'}`}
                                >
                                    <User size={16} /> Human
                                </button>
                                <button 
                                    onClick={() => setCategory('backdrop')}
                                    className={`flex-1 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${category === 'backdrop' ? 'bg-white text-black' : 'bg-black/40 text-gray-400 hover:bg-white/10'}`}
                                >
                                    <Type size={16} /> Text Backdrop
                                </button>
                            </div>

                            {/* Slot 3 & 4: Dynamic Inputs */}
                            <div className="space-y-4 animate-in fade-in">
                                {category === 'product' && (
                                    <>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-gray-400 text-xs font-bold mb-2">Product Name</label>
                                                <input 
                                                    type="text" 
                                                    value={productName}
                                                    onChange={(e) => setProductName(e.target.value)}
                                                    placeholder="e.g. Luxury Wristwatch"
                                                    className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 text-xs font-bold mb-2">Material / Color</label>
                                                <input 
                                                    type="text" 
                                                    value={productMaterial}
                                                    onChange={(e) => setProductMaterial(e.target.value)}
                                                    placeholder="e.g. Gold and Leather"
                                                    className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-xs font-bold mb-2">Placement Context</label>
                                            <div className="grid grid-cols-2 gap-2">
                                                {getContextOptions().map((opt) => (
                                                    <button
                                                        key={opt.label}
                                                        onClick={() => setContext(opt.value)}
                                                        className={`px-3 py-2 rounded text-xs font-bold text-left transition-all ${context === opt.value ? 'bg-emerald-500 text-white' : 'bg-black/40 text-gray-400 hover:bg-white/10'}`}
                                                    >
                                                        {opt.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}

                                {category === 'human' && (
                                    <>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-gray-400 text-xs font-bold mb-2">Role / Profession</label>
                                                <input 
                                                    type="text" 
                                                    value={humanRole}
                                                    onChange={(e) => setHumanRole(e.target.value)}
                                                    placeholder="e.g. Gym Trainer"
                                                    className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 text-xs font-bold mb-2">Demographic</label>
                                                <select 
                                                    value={humanDemographic}
                                                    onChange={(e) => setHumanDemographic(e.target.value)}
                                                    className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none [&>option]:bg-gray-800"
                                                >
                                                    <option>Nepali man</option>
                                                    <option>Nepali woman</option>
                                                    <option>Asian professional</option>
                                                    <option>Diverse group</option>
                                                    <option>Elderly person</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-xs font-bold mb-2">Action Context</label>
                                            <div className="grid grid-cols-3 gap-2">
                                                {getContextOptions().map((opt) => (
                                                    <button
                                                        key={opt.label}
                                                        onClick={() => setContext(opt.value)}
                                                        className={`px-3 py-2 rounded text-xs font-bold text-center transition-all ${context === opt.value ? 'bg-emerald-500 text-white' : 'bg-black/40 text-gray-400 hover:bg-white/10'}`}
                                                    >
                                                        {opt.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}

                                {category === 'backdrop' && (
                                    <div className="bg-blue-900/20 border border-blue-500/20 p-4 rounded-lg text-sm text-blue-200">
                                        <p><strong>Configured for Text Overlay:</strong> Logic automatically set to generate minimalist backgrounds with heavy negative space (empty areas) perfect for placing Facebook Ad copy.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Slot 5: Style Engine */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                            <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                <RefreshCw size={16} /> 3. Vibe Engine (Style Slot)
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {Object.entries(STYLES).map(([key, data]) => (
                                    <button
                                        key={key}
                                        onClick={() => setStyleKey(key as keyof typeof STYLES)}
                                        className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden group ${
                                            styleKey === key 
                                                ? 'bg-gradient-to-br from-emerald-900/40 to-black border-emerald-500 text-white' 
                                                : 'bg-black/20 border-white/10 text-gray-400 hover:bg-white/10'
                                        }`}
                                    >
                                        <div className="font-bold text-sm z-10 relative">{data.label}</div>
                                        {styleKey === key && <div className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full m-2"></div>}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE: OUTPUT (Sticky) - Spans 5 cols */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-24 space-y-4">
                            
                            <div className="bg-[#1e1e1e] rounded-2xl border border-white/10 p-1 shadow-2xl">
                                <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex justify-between items-center rounded-t-xl">
                                    <span className="text-gray-400 text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                                        <Wand2 size={12} className="text-emerald-400" /> Generated Prompt
                                    </span>
                                    <div className="flex gap-2">
                                        <div className="bg-black/40 px-2 py-1 rounded text-[10px] text-gray-500 font-mono">
                                            {finalPrompt.length} chars
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <textarea
                                        readOnly
                                        value={finalPrompt}
                                        className="w-full h-48 bg-transparent text-emerald-300 font-mono text-sm leading-relaxed focus:outline-none resize-none"
                                    />
                                </div>

                                <div className="p-4 border-t border-white/10 bg-black/20 rounded-b-xl">
                                    <button
                                        onClick={copyToClipboard}
                                        className={`w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                                            copied
                                                ? 'bg-emerald-500 text-white'
                                                : 'bg-white/10 hover:bg-white/20 text-white'
                                        }`}
                                    >
                                        {copied ? 'Copied to Clipboard!' : <><Copy size={16} /> Copy Prompt</>}
                                    </button>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-900/20 to-black/40 border border-purple-500/20 p-6 rounded-2xl">
                                <h4 className="text-purple-400 font-bold text-sm mb-2">Pro Tip:</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    This prompt is optimized for <strong>Midjourney v6</strong>. You can paste this directly into Discord (`/imagine`). It also works well with Stable Diffusion XL if you remove the `--ar` parameters.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}