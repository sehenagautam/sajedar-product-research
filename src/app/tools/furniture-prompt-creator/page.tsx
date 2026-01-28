'use client';

import React, { useState, useMemo } from 'react';
import Header from '../../../components/Header';
import {
    Copy,
    Download,
    Check,
    Info,
    User,
    Image as ImageIcon
} from 'lucide-react';

// --- Types & Constants ---

interface SceneSettings {
    environment: string;
    lighting: string;
    timeOfDay: string;
    floorMaterial: string;
    backgroundProps: string;
    humanPresence: string;
    cameraLens: string;
    cameraAngle: string;
    composition: string;
    mood: string;
}

interface Dimensions {
    // Imperial
    heightFt: string;
    heightIn: string;
    widthFt: string;
    widthIn: string;
    depthFt: string;
    depthIn: string;
    // Metric
    heightCm: string;
    widthCm: string;
    depthCm: string;

    unit: 'ft' | 'cm';
}

// Scene Options
const ENVIRONMENTS = [
    'Modern Living Room', 'Minimal Studio', 'Luxury Hotel Suite',
    'Showroom', 'Outdoor Patio', 'Industrial Loft', 'Cozy Bedroom',
    'Sunlit Conservatory', 'Art Gallery', 'Office Lounge', 'Rooftop Terrace',
    'Rustic Cabin', 'Marble Foyer', 'Japanese Zen Garden'
];
const LIGHTING_OPTIONS = [
    'Soft Natural Daylight', 'Studio Softbox', 'Golden Hour',
    'Neutral Commercial Lighting', 'Dramatic Shadows', 'Moody Evening',
    'Cinematic Rim Light', 'Dappled Sunlight (Gobo)', 'Warm Tungsten',
    'Cool North Light', 'Neon Accents'
];
const TIMES_OF_DAY = [
    'Morning', 'High Noon', 'Golden Hour', 'Blue Hour', 'Midnight', 'Overcast Afternoon'
];
const FLOOR_MATERIALS = [
    'Polished Concrete', 'Herringbone Oak', 'White Marble', 'Terrazzo',
    'Plush Carpet', 'Black Slate', 'Old Wooden Planks', 'Tatami Mats',
    'Polished Hardwood', 'Raw Concrete', 'Mosaic Tiles', 'Persian Rug'
];
const BACKGROUND_PROPS = [
    'Minimalist - Empty', 'Indoor Plants', 'Abstract Art', 'Coffee Table Books',
    'Architectural Columns', 'Bookshelves', 'Floor Lamp', 'Rug & Textures'
];

const HUMAN_PRESENCE = [
    'No People (Product Only)',
    'Person sitting comfortably on it',
    'Person standing nearby looking at it',
    'Hand touching the material detail',
    'Blurred figure walking in background',
    'Group of people socializing nearby',
    'Child playing on the floor nearby',
    'Abstract human silhouette'
];

const LENSES = ['35mm (Wide)', '50mm (Standard)', '85mm (Portrait)', '100mm (Macro)', '24mm (Architectural)'];
const ANGLES = ['Eye-Level', 'Slight 3/4', 'Low Angle (Hero)', 'Top-Down (Flat Lay)', 'Detail Shot'];
const COMPOSITIONS = ['Centered', 'Rule of Thirds', 'Negative Space for Ads', 'Catalog Framing', 'Symmetrical'];
const MOODS = ['Warm & Cozy', 'Calm & Zen', 'Premium & Luxury', 'Minimalist & Clean', 'Energetic & Bright', 'Dark & Moody', 'Etheral'];

// --- Component ---

export default function FurniturePromptCreator() {
    const [furnitureName, setFurnitureName] = useState('');
    const [dimensions, setDimensions] = useState<Dimensions>({
        heightFt: '', heightIn: '',
        widthFt: '', widthIn: '',
        depthFt: '', depthIn: '',
        heightCm: '', widthCm: '', depthCm: '',
        unit: 'ft' // Default to feet
    });

    const [scene, setScene] = useState<SceneSettings>({
        environment: 'Modern Living Room',
        lighting: 'Soft Natural Daylight',
        timeOfDay: 'Morning',
        floorMaterial: 'Herringbone Oak',
        backgroundProps: 'Indoor Plants',
        humanPresence: 'No People (Product Only)',
        cameraLens: '50mm (Standard)',
        cameraAngle: 'Eye-Level',
        composition: 'Centered',
        mood: 'Premium & Luxury',
    });
    const [platform, setPlatform] = useState<'ChatGPT' | 'Gemini' | 'Generic'>('ChatGPT');
    const [copied, setCopied] = useState(false);

    const generatedPrompt = useMemo(() => {
        if (!furnitureName) return "Enter a furniture name to generate a prompt.";

        let prompt = "";

        // --- REFERENCE IMAGE MODE ONLY ---
        // Explicit instructions to use the image as the source of truth
        prompt += `Photorealistic image of the ${furnitureName} shown in the attached reference image. `;
        prompt += `EXTRACT ALL DESIGN DETAILS directly from the provided image. `;
        prompt += `The furniture's materials, textures, geometry, and proportions must perfectly match the reference image. `;
        prompt += `The furniture's materials, textures, geometry, and proportions must perfectly match the reference image. `;

        // Dimensions Logic
        // Dimensions Logic
        const getDimString = (type: 'height' | 'width' | 'depth') => {
            if (dimensions.unit === 'cm') {
                const val = (dimensions as any)[`${type}Cm`];
                return val ? `${val}cm` : '';
            } else {
                const ft = (dimensions as any)[`${type}Ft`];
                const inch = (dimensions as any)[`${type}In`];
                if (!ft && !inch) return '';
                return `${ft || '0'}'${inch || '0'}"`;
            }
        };

        const hStr = getDimString('height');
        const wStr = getDimString('width');
        const dStr = getDimString('depth');

        if (hStr || wStr || dStr) {
            const dimParts = [];
            if (hStr) dimParts.push(`Height: ${hStr}`);
            if (wStr) dimParts.push(`Width: ${wStr}`);
            if (dStr) dimParts.push(`Depth: ${dStr}`);

            prompt += `Render the furniture with accurate scale. Physical dimensions: ${dimParts.join(' x ')}. `;
        }

        prompt += `Place this exact product into a ${scene.environment.toLowerCase()}. `;

        // Lighting
        prompt += `Adapt the environment lighting (${scene.lighting.toLowerCase()}) to match the product's perspective, or subtly relight the product to match the scene without changing its texture. `;

        // --- Scene Description (Common) ---
        prompt += `\n\nSCENE DETAILS:\n`;
        prompt += `The room features a ${scene.floorMaterial.toLowerCase()} floor. `;

        if (scene.backgroundProps !== 'Minimalist - Empty') {
            prompt += `Background elements include ${scene.backgroundProps.toLowerCase()} effectively styled to complement the product. `;
        }

        // Human Presence
        if (scene.humanPresence !== 'No People (Product Only)') {
            prompt += `Include a ${scene.humanPresence.toLowerCase()}. Ensure the human interaction is natural and realistic. `;
        }

        prompt += `The atmosphere is ${scene.mood.toLowerCase()}. `;
        prompt += `Time of day: ${scene.timeOfDay.toLowerCase()}. `;

        // Camera
        prompt += `\n\nCAMERA:\nShot using a ${scene.cameraLens} lens at ${scene.cameraAngle.toLowerCase()} with ${scene.composition.toLowerCase()} composition. `;

        // Quality
        prompt += `\n\nQUALITY:\nUltra-realistic, high-detail textures, accurate materials, real-world shadows, 8k resolution. `;

        // Platform Tweaks
        if (platform === 'Gemini') {
            prompt += "Ensure high fidelity to the described materials.";
        } else if (platform === 'ChatGPT') {
            prompt += "DALL-E 3 settings: Use the uploaded image as strict reference (gen_id if available).";
        }

        return prompt;
    }, [furnitureName, scene, platform, dimensions]);

    const negativePrompt = "no design changes, no stylization, no futuristic elements, no altered materials, no abstract furniture, no cartoon rendering, no distorted geometry, no text, no watermarks, no cluttered background" + (scene.humanPresence === 'No People (Product Only)' ? ", no people" : "");

    const copyToClipboard = () => {
        navigator.clipboard.writeText(
            platform === 'Generic'
                ? `Prompt:\n${generatedPrompt}\n\nNegative Prompt:\n${negativePrompt}`
                : generatedPrompt
        );
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const downloadJson = () => {
        const data = {
            furniture_name: furnitureName,
            workflow: 'Reference Image',
            scene,
            platform,
            prompt: generatedPrompt,
            negative_prompt: negativePrompt
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${furnitureName.replace(/\s+/g, '_')}_prompt.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-gray-950 text-white font-helvetica">
            <Header />

            <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">

                {/* Header */}
                <header className="mb-10 text-center pt-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-wide">
                        Furniture Prompt <span className="text-emerald-400">Creator</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Generate high-fidelity prompts for placing your <strong>existing furniture images</strong> into new scenes.
                        <br />
                        <span className="text-xs uppercase tracking-widest text-emerald-500/80 mt-2 inline-block">Reference Image Workflow</span>
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT COLUMN: Controls (Config) */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* 1. Main Input */}
                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm shadow-glass">
                            <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-500 mb-2">
                                Furniture Name (Required)
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={furnitureName}
                                    onChange={(e) => setFurnitureName(e.target.value)}
                                    placeholder="e.g., My Velvet Armchair"
                                    className="w-full bg-gray-950 border border-gray-700 text-white text-lg rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder-gray-600 font-helvetica"
                                />
                            </div>
                            <div className="mt-3 bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 flex items-start gap-2">
                                <ImageIcon className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                <p className="text-xs text-blue-200/80 leading-relaxed">
                                    <strong>Workflow:</strong> Upload your furniture image to the AI (ChatGPT/Gemini) first, then paste the generated prompt below. The AI will use your image as the design source.
                                </p>
                            </div>
                        </div>


                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm shadow-glass">
                            <div className="flex items-center justify-between mb-4">
                                <label className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
                                    Physical Dimensions (Optional)
                                </label>
                                <div className="flex bg-gray-950 rounded-lg p-1 border border-gray-800">
                                    {['ft', 'cm'].map((u) => (
                                        <button
                                            key={u}
                                            onClick={() => setDimensions({ ...dimensions, unit: u as any })}
                                            className={`text-[10px] font-medium px-3 py-1 rounded-md transition-all ${dimensions.unit === u
                                                ? 'bg-emerald-600 text-white shadow-sm'
                                                : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                                                }`}
                                        >
                                            {u.toUpperCase()}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {['height', 'width', 'depth'].map((dim) => (
                                    <div key={dim} className="flex items-center gap-3">
                                        <label className="w-16 text-[10px] uppercase tracking-wider text-gray-400 font-semibold pl-1">
                                            {dim}
                                        </label>

                                        {dimensions.unit === 'cm' ? (
                                            <div className="relative flex-1">
                                                <input
                                                    type="text"
                                                    placeholder="0"
                                                    value={(dimensions as any)[`${dim}Cm`]}
                                                    onChange={(e) => setDimensions({ ...dimensions, [`${dim}Cm`]: e.target.value })}
                                                    className="w-full bg-gray-950 border border-gray-700 text-white text-sm rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder-gray-600 font-helvetica text-left pl-3"
                                                />
                                                <span className="absolute right-3 top-2.5 text-gray-500 text-xs">cm</span>
                                            </div>
                                        ) : (
                                            <div className="flex gap-2 flex-1">
                                                <div className="relative flex-1">
                                                    <input
                                                        type="text"
                                                        placeholder="0"
                                                        value={(dimensions as any)[`${dim}Ft`]}
                                                        onChange={(e) => setDimensions({ ...dimensions, [`${dim}Ft`]: e.target.value })}
                                                        className="w-full bg-gray-950 border border-gray-700 text-white text-sm rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder-gray-600 font-helvetica"
                                                    />
                                                    <span className="absolute right-3 top-2.5 text-gray-500 text-xs">ft</span>
                                                </div>
                                                <div className="relative flex-1">
                                                    <input
                                                        type="text"
                                                        placeholder="0"
                                                        value={(dimensions as any)[`${dim}In`]}
                                                        onChange={(e) => setDimensions({ ...dimensions, [`${dim}In`]: e.target.value })}
                                                        className="w-full bg-gray-950 border border-gray-700 text-white text-sm rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder-gray-600 font-helvetica"
                                                    />
                                                    <span className="absolute right-3 top-2.5 text-gray-500 text-xs">in</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. Scene Builder (Creative Zone) */}
                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm shadow-glass">
                            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
                                Scene Builder
                                <span className="text-xs font-normal text-gray-500 ml-2 border border-gray-700 rounded-full px-2 py-0.5">Customize Environment</span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

                                {/* Human Presence */}
                                <div className="col-span-1 md:col-span-2 space-y-1.5 p-1">
                                    <label className="text-[10px] uppercase tracking-wider text-blue-300 font-bold flex items-center gap-1">
                                        <User className="w-3 h-3" />
                                        Human Presence
                                    </label>
                                    <select
                                        value={scene.humanPresence}
                                        onChange={(e) => setScene({ ...scene, humanPresence: e.target.value })}
                                        className="w-full bg-blue-900/20 border border-blue-500/30 rounded-lg px-3 py-2.5 text-sm text-blue-100 focus:border-blue-500 transition-colors outline-none font-helvetica"
                                    >
                                        {HUMAN_PRESENCE.map(v => <option key={v} value={v}>{v}</option>)}
                                    </select>
                                </div>

                                {/* Environment */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Environment</label>
                                    <select
                                        value={scene.environment}
                                        onChange={(e) => setScene({ ...scene, environment: e.target.value })}
                                        className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5 text-sm hover:border-blue-500/50 focus:border-blue-500 transition-colors outline-none font-helvetica"
                                    >
                                        {ENVIRONMENTS.map(v => <option key={v} value={v}>{v}</option>)}
                                    </select>
                                </div>
                                {/* Floor Material */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold text-blue-300/80">Floor Material</label>
                                    <select
                                        value={scene.floorMaterial}
                                        onChange={(e) => setScene({ ...scene, floorMaterial: e.target.value })}
                                        className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5 text-sm hover:border-blue-500/50 focus:border-blue-500 transition-colors outline-none font-helvetica"
                                    >
                                        {FLOOR_MATERIALS.map(v => <option key={v} value={v}>{v}</option>)}
                                    </select>
                                </div>
                                {/* Lighting */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Lighting</label>
                                    <select
                                        value={scene.lighting}
                                        onChange={(e) => setScene({ ...scene, lighting: e.target.value })}
                                        className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5 text-sm hover:border-blue-500/50 focus:border-blue-500 transition-colors outline-none font-helvetica"
                                    >
                                        {LIGHTING_OPTIONS.map(v => <option key={v} value={v}>{v}</option>)}
                                    </select>
                                </div>
                                {/* Time of Day */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold text-blue-300/80">Time of Day</label>
                                    <select
                                        value={scene.timeOfDay}
                                        onChange={(e) => setScene({ ...scene, timeOfDay: e.target.value })}
                                        className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5 text-sm hover:border-blue-500/50 focus:border-blue-500 transition-colors outline-none font-helvetica"
                                    >
                                        {TIMES_OF_DAY.map(v => <option key={v} value={v}>{v}</option>)}
                                    </select>
                                </div>
                                {/* Backgrounds Props */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold text-blue-300/80">Background Props</label>
                                    <select
                                        value={scene.backgroundProps}
                                        onChange={(e) => setScene({ ...scene, backgroundProps: e.target.value })}
                                        className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5 text-sm hover:border-blue-500/50 focus:border-blue-500 transition-colors outline-none font-helvetica"
                                    >
                                        {BACKGROUND_PROPS.map(v => <option key={v} value={v}>{v}</option>)}
                                    </select>
                                </div>
                                {/* Mood */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Mood</label>
                                    <select
                                        value={scene.mood}
                                        onChange={(e) => setScene({ ...scene, mood: e.target.value })}
                                        className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5 text-sm hover:border-blue-500/50 focus:border-blue-500 transition-colors outline-none font-helvetica"
                                    >
                                        {MOODS.map(v => <option key={v} value={v}>{v}</option>)}
                                    </select>
                                </div>
                                {/* Camera Angle */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Camera Angle</label>
                                    <select
                                        value={scene.cameraAngle}
                                        onChange={(e) => setScene({ ...scene, cameraAngle: e.target.value })}
                                        className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5 text-sm hover:border-blue-500/50 focus:border-blue-500 transition-colors outline-none font-helvetica"
                                    >
                                        {ANGLES.map(v => <option key={v} value={v}>{v}</option>)}
                                    </select>
                                </div>
                                {/* Lens */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Lens</label>
                                    <select
                                        value={scene.cameraLens}
                                        onChange={(e) => setScene({ ...scene, cameraLens: e.target.value })}
                                        className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5 text-sm hover:border-blue-500/50 focus:border-blue-500 transition-colors outline-none font-helvetica"
                                    >
                                        {LENSES.map(v => <option key={v} value={v}>{v}</option>)}
                                    </select>
                                </div>
                                {/* Composition */}
                                <div className="col-span-1 md:col-span-2 space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Composition</label>
                                    <select
                                        value={scene.composition}
                                        onChange={(e) => setScene({ ...scene, composition: e.target.value })}
                                        className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5 text-sm hover:border-blue-500/50 focus:border-blue-500 transition-colors outline-none font-helvetica"
                                    >
                                        {COMPOSITIONS.map(v => <option key={v} value={v}>{v}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Output (Sticky) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="sticky top-8 space-y-6">

                            {/* Output Preview */}
                            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl shadow-emerald-500/5">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Generated Prompt</h3>
                                    {/* Platform Toggles */}
                                    <div className="flex bg-gray-950 rounded-lg p-1 border border-gray-800">
                                        {['ChatGPT', 'Gemini'].map((p) => (
                                            <button
                                                key={p}
                                                onClick={() => setPlatform(p as any)}
                                                className={`text-[10px] font-medium px-3 py-1.5 rounded-md transition-all ${platform === p
                                                    ? 'bg-emerald-600 text-white shadow-sm'
                                                    : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                                                    }`}
                                            >
                                                {p}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-2 text-[10px] text-blue-400 bg-blue-900/20 px-2 py-1 rounded border border-blue-900/40">
                                    MODE: Reference Image (Upload photo to AI)
                                </div>

                                <div className="relative group">
                                    <textarea
                                        readOnly
                                        value={generatedPrompt}
                                        className="w-full h-80 bg-gray-950/50 border border-gray-700 rounded-xl p-4 text-sm leading-relaxed text-gray-300 outline-none resize-none font-mono group-hover:border-gray-600 transition-colors font-helvetica"
                                    />
                                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <button
                                            onClick={copyToClipboard}
                                            className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-lg shadow-lg border border-emerald-400/20 active:scale-95 transition-all"
                                            title="Copy to Clipboard"
                                        >
                                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Negative Prompt Preview (Collapsed/Small) */}
                                <div className="mt-4 pt-4 border-t border-gray-800">
                                    <p className="text-xs text-red-400 font-mono opacity-60 line-clamp-2" title={negativePrompt}>
                                        <span className="font-bold text-red-500/80 mr-2">NEGATIVE:</span>
                                        {negativePrompt}
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-2 gap-3 mt-6">
                                    <button
                                        onClick={copyToClipboard}
                                        className="flex items-center justify-center gap-2 bg-white text-gray-950 font-bold py-3 px-4 rounded-xl hover:bg-gray-100 transition-all active:scale-95"
                                    >
                                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                        {copied ? 'Copied!' : 'Copy Prompt'}
                                    </button>
                                    <button
                                        onClick={downloadJson}
                                        className="flex items-center justify-center gap-2 bg-gray-800 text-white font-medium py-3 px-4 rounded-xl border border-gray-700 hover:bg-gray-750 hover:border-gray-600 transition-all active:scale-95"
                                    >
                                        <Download className="w-4 h-4" />
                                        JSON
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
