'use client';

import React, { useState, useMemo } from 'react';
import Header from '../../../components/Header';
import {

    Copy,
    Video,
    Image as ImageIcon,
    Clapperboard,
    Check,
    Download
} from 'lucide-react';

// --- Constants & Types ---



type SceneArchetype = 'Arrival' | 'Character' | 'Belonging' | 'Resolve' | 'Custom';

interface DoctrineRule {
    psychology: string;
    visual: string;
    constraint: string;
    defaultMotion: string;
    defaultAngle: string;
}

const SCENE_DOCTRINE: Record<SceneArchetype, DoctrineRule> = {
    'Arrival': {
        psychology: 'Triggers attention without demand. Signals intention, not urgency. "Something is here."',
        visual: 'Object alone in space. Partial reveal or silhouette. Light entering toward the object.',
        constraint: 'Never explain or demonstrate. If paused, it should still work. Stillness is a feature.',
        defaultMotion: 'Lateral drift',
        defaultAngle: 'Eye-Level'
    },
    'Character': {
        psychology: 'Builds trust through specificity. "This is what it’s made of."',
        visual: 'Macro surface study. Repeating geometric detail. Light moving across texture.',
        constraint: 'No wide shots allowed. Reveal material honesty.',
        defaultMotion: 'Slow rack focus',
        defaultAngle: 'Close-Up'
    },
    'Belonging': {
        psychology: 'Resolves subconscious friction. "This already exists where I want to be."',
        visual: 'Quiet architectural spaces. Soft human presence. Natural light interaction.',
        constraint: 'Nothing in the scene should draw attention away from the object.',
        defaultMotion: 'Forward glide',
        defaultAngle: 'Eye-Level'
    },
    'Resolve': {
        psychology: 'Creates closure. Locks brand memory. Replaces curiosity with certainty.',
        visual: 'Hero silhouette. Clean studio composition. Extreme restraint.',
        constraint: 'End on confidence. Reduce motion. Leave emotional residue.',
        defaultMotion: 'Static shot with subtle lighting changes',
        defaultAngle: 'Top-Down'
    },
    'Custom': {
        psychology: 'User defined scene.',
        visual: 'Standard product showcase.',
        constraint: 'Maintain visual consistency.',
        defaultMotion: 'Cinematic orbit around the product',
        defaultAngle: 'Three-Quarter View'
    }
};

const ENVIRONMENTS = [
    'Modern Living Room', 'Minimal Studio', 'Luxury Hotel Suite',
    'Showroom', 'Outdoor Patio', 'Industrial Loft', 'Cozy Bedroom',
    'Sunlit Conservatory', 'Art Gallery', 'Office Lounge', 'Rooftop Terrace',
    'Rustic Cabin', 'Marble Foyer', 'Japanese Zen Garden'
];

const MOTIONS = [
    'Lateral drift', 'Slow push-in', 'Locked-off frame with environmental motion', // Arrival
    'Micro push', 'Slow rack focus', 'Controlled parallax', // Character
    'Forward glide', 'Shoulder-height perspective', // Belonging
    'Static shot with subtle lighting changes', 'Fade through light', // Resolve
    'Slow pan right revealing the furniture',
    'Smooth zoom in on texture details',
    'Cinematic orbit around the product',
    'Pull back to reveal full room context',
    'Person walking past in background (blurred)',
    'Sunlight shifting across the surface (Time lapse)'
];

const LIGHTING_MOODS = [
    'Soft Diffused (Studio)', 'Moody Chiaroscuro', 'Golden Hour (Warm)',
    'Hard Sunlight (Contrast)', 'Cool Nordic Morning', 'Cinematic Blue Hour',
    'Dark & Elegant'
];

const ASPECT_RATIOS = [
    { label: 'Vertical (9:16)', value: '--ar 9:16', description: 'Reels / TikTok' },
    { label: 'Widescreen (16:9)', value: '--ar 16:9', description: 'YouTube / TV' },
    { label: 'Square (1:1)', value: '--ar 1:1', description: 'Instagram Post' }
];

const DEFAULT_NEGATIVE_PROMPT = "text, watermark, logo, split screen, distorted geometry, extra legs, mutation, blurry, low quality, monochrome, people, ugly, deformed, noisy";

const FILM_STOCKS = [
    { label: 'Clean Digital 8K (Default)', value: '8k, sharp focus, digital cinema, clean look' },
    { label: 'Kodak Portra 400 (Warm)', value: 'Kodak Portra 400, warm tones, fine grain, nostalgic, cinematic warmth' },
    { label: 'Fujifilm Eterna (Soft)', value: 'Fujifilm Eterna, soft contrast, desaturated greens, cinematic flat profile' },
    { label: 'Black & White Noir', value: 'Black and white, high contrast, film noir aesthetic, dramatic lighting' },
    { label: 'Editorial Fashion', value: 'High fashion photography, sharp, studio lighting, bold contrast' }
];

const PACING_GUIDE: Record<number, string> = {
    1: 'Imperceptible movement, stillness, meditative, slow-motion',
    2: 'Very slow, gentle drift, calm',
    3: 'Natural speed, smooth flow, steady',
    4: 'Active camera, energetic movement',
    5: 'High energy, rapid transition, dynamic movement, fast-paced'
};

const CAMERA_ANGLES = [
    'Eye-Level', 'Low Angle', 'High Angle', 'Top-Down', 'Three-Quarter View', 'Close-Up',
    'Macro (Detail)', 'Shoulder-Height'
];

interface Scene {
    id: number;
    type: SceneArchetype;
    motion: string;
    cameraAngle: string;
    customMotion?: string;
}

interface GeneratedScene {
    id: number;
    type: SceneArchetype;
    imagePrompt: string;
    videoPrompt: string;
}

// --- Component ---

export default function FurnitureVideoPromptCreator() {
    const [furnitureName, setFurnitureName] = useState('');
    const [globalEnvironment, setGlobalEnvironment] = useState('Minimal Studio');
    const [globalLighting, setGlobalLighting] = useState('Soft Diffused (Studio)');
    const [aspectRatio, setAspectRatio] = useState(ASPECT_RATIOS[0].value);

    // Advanced State
    const [smartMaterial, setSmartMaterial] = useState('');
    const [filmStock, setFilmStock] = useState(FILM_STOCKS[0].value);
    const [motionPacing, setMotionPacing] = useState(3); // Default to natural (3)

    const [scenes, setScenes] = useState<Scene[]>([
        { id: 1, type: 'Arrival', motion: 'Lateral drift', cameraAngle: 'Eye-Level' },
        { id: 2, type: 'Character', motion: 'Slow rack focus', cameraAngle: 'Close-Up' },
        { id: 3, type: 'Belonging', motion: 'Forward glide', cameraAngle: 'Shoulder-Height' },
        { id: 4, type: 'Resolve', motion: 'Static shot with subtle lighting changes', cameraAngle: 'Eye-Level' }
    ]);
    const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

    // --- Actions ---

    const updateScene = (id: number, field: keyof Scene, value: string) => {
        setScenes(scenes.map(s => s.id === id ? { ...s, [field]: value } : s));
    };

    // --- Prompt Generation ---

    const generatedScenes: GeneratedScene[] = useMemo(() => {
        if (!furnitureName) return [];

        return scenes.map((scene) => {
            const motionText = scene.customMotion || scene.motion;
            const doctrine = SCENE_DOCTRINE[scene.type];
            const pacingInstruction = PACING_GUIDE[motionPacing];

            // 1. Starting Image Prompt (Consistency Anchor)
            let imgPrompt = `Photorealistic image of the ${furnitureName} shown in the attached reference image. `;
            imgPrompt += `Shot from a ${scene.cameraAngle.toLowerCase()} perspective. `;
            imgPrompt += `Place this exact product into a ${globalEnvironment.toLowerCase()}. `;
            imgPrompt += `Lighting Style: ${globalLighting}. `;
            imgPrompt += `Film Look: ${filmStock}. `;
            if (smartMaterial) imgPrompt += `Primary Material: ${smartMaterial}. `;

            imgPrompt += `Visual Archetype: ${doctrine.visual}. `;
            imgPrompt += `[SCENE ROLE: ${scene.type.toUpperCase()}]. `;
            imgPrompt += `Constraint: ${doctrine.constraint} `;

            // Special handling for Character phase (Macro)
            if (scene.type === 'Character') {
                imgPrompt += `Background: Blurred but consistent with ${globalEnvironment}. `;
                if (smartMaterial) imgPrompt += `FOCUS HEAVILY on the texture details of ${smartMaterial}. `;
                else imgPrompt += `Focus on material texture. `;
            }
            imgPrompt += `${aspectRatio} `;
            imgPrompt += `OUTPUT: High-resolution static image for video reference. `;
            imgPrompt += `Negative Prompt: ${DEFAULT_NEGATIVE_PROMPT}`;

            // 2. Video Clip Prompt
            let vidPrompt = `Cinematic 8-second video clip of the ${furnitureName}. `;
            vidPrompt += `Scene Role: ${scene.type.toUpperCase()}. `;
            vidPrompt += `Context: ${doctrine.psychology} `;
            vidPrompt += `Source Image: Use the generated starting image as the strict first frame. `;
            vidPrompt += `Environment: ${globalEnvironment}. `;
            vidPrompt += `Lighting: ${globalLighting}. `;

            // Motion + Pacing
            vidPrompt += `Movement: ${motionText}. `;
            vidPrompt += `Motion Pace: ${pacingInstruction}. `;

            if (smartMaterial) vidPrompt += `Texture Reference: ${smartMaterial}. `;
            vidPrompt += `Film Look: ${filmStock}. `;

            vidPrompt += `Camera: ${scene.cameraAngle} shot. `;
            vidPrompt += `Creative Constraint: ${doctrine.constraint} `;
            vidPrompt += `Quality: 4k, fluid motion, photorealistic, consistency with reference product. `;
            vidPrompt += `${aspectRatio} `;
            vidPrompt += `Negative Prompt: ${DEFAULT_NEGATIVE_PROMPT}`;

            return {
                id: scene.id,
                type: scene.type,
                imagePrompt: imgPrompt,
                videoPrompt: vidPrompt
            };
        });
    }, [furnitureName, scenes, globalEnvironment, globalLighting, aspectRatio, smartMaterial, filmStock, motionPacing]);

    // --- Helpers ---

    const copyText = (text: string, key: string) => {
        navigator.clipboard.writeText(text);
        setCopiedStates({ ...copiedStates, [key]: true });
        setTimeout(() => setCopiedStates(prev => ({ ...prev, [key]: false })), 2000);
    };

    const downloadAllJson = () => {
        const data = {
            project: furnitureName,
            type: 'Video Campaign',
            scenes: generatedScenes
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${furnitureName.replace(/\s+/g, '_')}_video_campaign.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-gray-950 text-white font-helvetica">
            <Header />

            <div className="max-w-6xl mx-auto px-4 py-8 lg:px-8">

                {/* Header Section */}
                <header className="mb-10 text-center pt-8">
                    <div className="inline-flex items-center justify-center p-3 bg-red-500/10 rounded-full mb-4 ring-1 ring-red-500/20">
                        <Clapperboard className="w-6 h-6 text-red-500" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                        Furniture Video <span className="text-red-500">Director</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Orchestrate multi-scene video campaigns for your furniture.
                        Generate consistent starting frames and cinematic motion prompts.
                    </p>
                </header>

                {/* Global Input */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 mb-10 shadow-glass backdrop-blur-sm">
                    <label className="block text-xs font-bold uppercase tracking-wider text-red-500 mb-2">
                        Project & Furniture Name
                    </label>
                    <input
                        type="text"
                        value={furnitureName}
                        onChange={(e) => setFurnitureName(e.target.value)}
                        placeholder="e.g., The Cloud Sofa - Autumn Campaign"
                        className="w-full bg-gray-950 border border-gray-700 text-white text-xl rounded-xl px-5 py-4 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all placeholder-gray-600 font-helvetica"
                    />
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Global Environment */}
                        <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Environment</label>
                            <select
                                value={globalEnvironment}
                                onChange={(e) => setGlobalEnvironment(e.target.value)}
                                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5 text-sm hover:border-red-500/50 focus:border-red-500 transition-colors outline-none font-helvetica"
                            >
                                {ENVIRONMENTS.map(v => <option key={v} value={v}>{v}</option>)}
                            </select>
                        </div>

                        {/* Global Lighting */}
                        <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Lighting Mood</label>
                            <select
                                value={globalLighting}
                                onChange={(e) => setGlobalLighting(e.target.value)}
                                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5 text-sm hover:border-red-500/50 focus:border-red-500 transition-colors outline-none font-helvetica"
                            >
                                {LIGHTING_MOODS.map(v => <option key={v} value={v}>{v}</option>)}
                            </select>
                        </div>

                        {/* Aspect Ratio */}
                        <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Format</label>
                            <div className="grid grid-cols-3 gap-1">
                                {ASPECT_RATIOS.map((ratio) => (
                                    <button
                                        key={ratio.value}
                                        onClick={() => setAspectRatio(ratio.value)}
                                        className={`px-1 py-2.5 text-[10px] font-bold rounded-lg border transition-all ${aspectRatio === ratio.value
                                            ? 'bg-red-500/10 border-red-500 text-red-500'
                                            : 'bg-gray-950 border-gray-800 text-gray-500 hover:border-gray-600'
                                            }`}
                                        title={ratio.description}
                                    >
                                        {ratio.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scenes List */}
                <div className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-white">
                            Campaign Scenes
                        </h2>

                        <div className="flex gap-2">
                            {/* Export moved to bottom */}
                        </div>
                    </div>

                    {scenes.map((scene, index) => {
                        const generated = generatedScenes.find(g => g.id === scene.id);

                        return (
                            <div key={scene.id} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden transition-all hover:border-gray-700">
                                {/* Scene Header */}
                                <div className="bg-gray-950/50 px-6 py-4 border-b border-gray-800 flex items-center justify-between">
                                    <h3 className="font-bold text-white flex items-center gap-3">
                                        <span className="w-6 h-6 flex items-center justify-center bg-gray-800 rounded-full text-xs text-gray-400 font-mono">
                                            {index + 1}
                                        </span>
                                        <div className="flex flex-col">
                                            <span className="text-sm">Scene {index + 1}</span>
                                            <span className={`text-[10px] uppercase tracking-wider font-bold ${scene.type === 'Arrival' ? 'text-emerald-400' :
                                                scene.type === 'Character' ? 'text-blue-400' :
                                                    scene.type === 'Belonging' ? 'text-purple-400' :
                                                        scene.type === 'Resolve' ? 'text-red-400' : 'text-gray-400'
                                                }`}>
                                                {scene.type} phase
                                            </span>
                                        </div>
                                    </h3>
                                    <div className="flex items-center gap-3">
                                        {/* Fixed (No Selector) */}
                                    </div>
                                </div>

                                <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">

                                    {/* Left: Inputs */}
                                    <div className="lg:col-span-4 space-y-4">



                                        {/* Camera */}
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Camera Angle</label>
                                            <select
                                                value={scene.cameraAngle}
                                                onChange={(e) => updateScene(scene.id, 'cameraAngle', e.target.value)}
                                                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5 text-sm hover:border-gray-600 focus:border-red-500 transition-colors outline-none font-helvetica"
                                            >
                                                {CAMERA_ANGLES.map(v => <option key={v} value={v}>{v}</option>)}
                                            </select>
                                        </div>

                                        {/* Motion */}
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Video Motion</label>
                                            <select
                                                value={scene.motion}
                                                onChange={(e) => updateScene(scene.id, 'motion', e.target.value)}
                                                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5 text-sm hover:border-gray-600 focus:border-red-500 transition-colors outline-none font-helvetica mb-2"
                                            >
                                                {MOTIONS.map(v => <option key={v} value={v}>{v}</option>)}
                                            </select>
                                            <input
                                                type="text"
                                                placeholder="Or type custom motion..."
                                                value={scene.customMotion || ''}
                                                onChange={(e) => updateScene(scene.id, 'customMotion', e.target.value)}
                                                className="w-full bg-gray-950/50 border border-gray-800 rounded-lg px-3 py-2 text-xs text-gray-300 focus:border-red-500/50 outline-none font-helvetica"
                                            />
                                        </div>
                                    </div>

                                    {/* Right: Outputs */}
                                    <div className="lg:col-span-8 space-y-4">

                                        {/* Starting Image Prompt */}
                                        <div className="relative group">
                                            <div className="flex items-center justify-between mb-1.5">
                                                <label className="text-[10px] uppercase tracking-wider text-blue-400 font-bold flex items-center gap-1">
                                                    <ImageIcon className="w-3 h-3" />
                                                    1. Start Image Prompt
                                                </label>
                                                {generated && (
                                                    <button
                                                        onClick={() => copyText(generated.imagePrompt, `img-${scene.id}`)}
                                                        className="text-[10px] font-medium text-gray-500 hover:text-white transition-colors flex items-center gap-1"
                                                    >
                                                        {copiedStates[`img-${scene.id}`] ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                                                        {copiedStates[`img-${scene.id}`] ? 'Copied' : 'Copy'}
                                                    </button>
                                                )}
                                            </div>
                                            <textarea
                                                readOnly
                                                value={generated ? generated.imagePrompt : "Enter product name..."}
                                                className="w-full h-24 bg-blue-900/10 border border-blue-500/20 rounded-lg p-3 text-xs leading-relaxed text-blue-100/80 outline-none resize-none font-mono"
                                            />
                                        </div>

                                        {/* Video Clip Prompt */}
                                        <div className="relative group">
                                            <div className="flex items-center justify-between mb-1.5">
                                                <label className="text-[10px] uppercase tracking-wider text-red-400 font-bold flex items-center gap-1">
                                                    <Video className="w-3 h-3" />
                                                    2. Video Clip Prompt (8s)
                                                </label>
                                                {generated && (
                                                    <button
                                                        onClick={() => copyText(generated.videoPrompt, `vid-${scene.id}`)}
                                                        className="text-[10px] font-medium text-gray-500 hover:text-white transition-colors flex items-center gap-1"
                                                    >
                                                        {copiedStates[`vid-${scene.id}`] ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                                                        {copiedStates[`vid-${scene.id}`] ? 'Copied' : 'Copy'}
                                                    </button>
                                                )}
                                            </div>
                                            <textarea
                                                readOnly
                                                value={generated ? generated.videoPrompt : "Enter product name..."}
                                                className="w-full h-24 bg-red-900/10 border border-red-500/20 rounded-lg p-3 text-xs leading-relaxed text-red-100/80 outline-none resize-none font-mono"
                                            />
                                        </div>

                                    </div>

                                </div>
                            </div>
                        );
                    })}

                </div>

                {/* Footer Actions */}
                <div className="mt-8 flex justify-end pb-12">
                    <button
                        onClick={downloadAllJson}
                        disabled={!furnitureName}
                        className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-medium rounded-xl transition-colors shadow-lg shadow-red-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Download className="w-5 h-5" />
                        Download Campaign JSON
                    </button>
                </div>
            </div>
        </div>
    );
}
