'use client';

import React, { useMemo, useState } from 'react';
import Header from '../../../components/Header';
import { Copy, Check, Download, Image as ImageIcon, Shirt, Camera } from 'lucide-react';

interface SceneSettings {
  environment: string;
  lighting: string;
  timeOfDay: string;
  modelType: string;
  cameraAngle: string;
  composition: string;
  mood: string;
}

const ENVIRONMENTS = [
  'Premium Studio Backdrop',
  'Lifestyle Boutique Interior',
  'Streetwear Urban Scene',
  'Outdoor Golden Hour',
  'Minimal White Cyclorama',
  'Runway Editorial Setup',
];

const LIGHTING_OPTIONS = [
  'Soft Studio Softbox',
  'Natural Window Light',
  'Golden Hour Warm Light',
  'High-Contrast Editorial Light',
  'Even Commercial Catalog Lighting',
];

const TIMES_OF_DAY = ['Morning', 'Afternoon', 'Golden Hour', 'Evening', 'Night'];

const MODEL_TYPES = [
  'No model (product only)',
  'Female model wearing outfit',
  'Male model wearing outfit',
  'Pair of models (catalog style)',
  'Half-body crop with model',
];

const ANGLES = ['Front view', '3/4 angle', 'Side profile', 'Close-up detail', 'Full body look'];
const COMPOSITIONS = ['Centered product focus', 'Rule of thirds', 'Negative space for ad text', 'Lookbook framing'];
const MOODS = ['Clean commercial', 'Luxury fashion', 'Streetwear bold', 'Minimal premium', 'Youthful vibrant'];

export default function ClothesPromptGeneratorPage() {
  const [productName, setProductName] = useState('');
  const [fabric, setFabric] = useState('');
  const [fitType, setFitType] = useState('');
  const [colorPattern, setColorPattern] = useState('');
  const [platform, setPlatform] = useState<'ChatGPT' | 'Gemini' | 'Generic'>('ChatGPT');
  const [copied, setCopied] = useState(false);

  const [scene, setScene] = useState<SceneSettings>({
    environment: 'Premium Studio Backdrop',
    lighting: 'Soft Studio Softbox',
    timeOfDay: 'Morning',
    modelType: 'No model (product only)',
    cameraAngle: 'Front view',
    composition: 'Centered product focus',
    mood: 'Clean commercial',
  });

  const [referenceImage, setReferenceImage] = useState<File | null>(null);
  const [referencePreview, setReferencePreview] = useState<string>('');

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setReferenceImage(file);

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setReferencePreview(objectUrl);
    } else {
      setReferencePreview('');
    }
  };

  const generatedPrompt = useMemo(() => {
    if (!productName) return 'Enter clothing/product name and upload a reference image to generate a prompt.';

    let prompt = `Create a photorealistic fashion image for a clothing brand using the attached reference image as the source of truth. `;
    prompt += `Keep the exact garment design, stitching, silhouette, texture, and color balance from the reference image. `;
    prompt += `Do not alter logo/brand identity, garment construction, or key design details. `;

    prompt += `\n\nPRODUCT DETAILS:\n`;
    prompt += `Product: ${productName}. `;
    if (fabric) prompt += `Fabric/material: ${fabric}. `;
    if (fitType) prompt += `Fit/silhouette: ${fitType}. `;
    if (colorPattern) prompt += `Color/pattern: ${colorPattern}. `;
    if (referenceImage) prompt += `Reference image filename: ${referenceImage.name}. `;

    prompt += `\n\nSCENE DIRECTION:\n`;
    prompt += `Environment: ${scene.environment}. `;
    prompt += `Lighting: ${scene.lighting}. `;
    prompt += `Time of day: ${scene.timeOfDay}. `;
    prompt += `Model direction: ${scene.modelType}. `;
    prompt += `Camera angle: ${scene.cameraAngle}. `;
    prompt += `Composition: ${scene.composition}. `;
    prompt += `Mood: ${scene.mood}. `;

    prompt += `\n\nQUALITY:\nUltra-realistic, high-detail textile texture, realistic folds and shadows, commercial fashion photography quality, 8k. `;

    if (platform === 'ChatGPT') {
      prompt += `Use the uploaded image as strict reference in DALL-E mode.`;
    } else if (platform === 'Gemini') {
      prompt += `Prioritize strict visual fidelity to the uploaded garment image.`;
    }

    return prompt;
  }, [productName, fabric, fitType, colorPattern, scene, platform, referenceImage]);

  const negativePrompt = useMemo(() => {
    return [
      'no logo distortion',
      'no text watermark',
      'no altered garment design',
      'no incorrect stitching',
      'no unrealistic body anatomy',
      'no blurry output',
      'no extra limbs',
      scene.modelType === 'No model (product only)' ? 'no people' : '',
    ].filter(Boolean).join(', ');
  }, [scene.modelType]);

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
    const payload = {
      brand: 'Generic Clothing Brand',
      facebook_page: 'N/A',
      product_name: productName,
      fabric,
      fit_type: fitType,
      color_pattern: colorPattern,
      scene,
      platform,
      reference_image: referenceImage?.name || null,
      prompt: generatedPrompt,
      negative_prompt: negativePrompt,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(productName || 'clothing_prompt').replace(/\s+/g, '_')}_prompt.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-helvetica">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
        <header className="mb-10 text-center pt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-wide">
            Clothes Prompt <span className="text-emerald-400">Generator</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
            Generate fashion image prompts for <strong>any clothing brand</strong> from an uploaded reference image.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
              <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-500 mb-2">
                Clothing/Product Name (Required)
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="e.g., Linen Co-ord Set"
                className="w-full bg-gray-950 border border-gray-700 text-white text-lg rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              />

              <div className="grid md:grid-cols-3 gap-3 mt-4">
                <input
                  type="text"
                  value={fabric}
                  onChange={(e) => setFabric(e.target.value)}
                  placeholder="Fabric (e.g. cotton satin)"
                  className="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-emerald-500"
                />
                <input
                  type="text"
                  value={fitType}
                  onChange={(e) => setFitType(e.target.value)}
                  placeholder="Fit (e.g. relaxed fit)"
                  className="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-emerald-500"
                />
                <input
                  type="text"
                  value={colorPattern}
                  onChange={(e) => setColorPattern(e.target.value)}
                  placeholder="Color/Pattern"
                  className="w-full bg-gray-950 border border-gray-700 text-white rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="mt-5 border border-blue-500/30 bg-blue-500/10 rounded-lg p-4">
                <label className="text-[11px] uppercase tracking-wider text-blue-200 font-semibold mb-2 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" /> Upload Reference Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={onFileChange}
                  className="w-full text-sm text-gray-300 file:bg-emerald-600 file:text-white file:border-0 file:rounded-md file:px-3 file:py-2 file:mr-3"
                />
                <p className="text-xs text-blue-200/80 mt-2">
                  Upload the original clothing image first, then paste this generated prompt into your image AI tool.
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                <Shirt className="w-5 h-5 text-emerald-400" /> Scene Builder
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select value={scene.environment} onChange={(e) => setScene({ ...scene, environment: e.target.value })} className="bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5">
                  {ENVIRONMENTS.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
                <select value={scene.lighting} onChange={(e) => setScene({ ...scene, lighting: e.target.value })} className="bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5">
                  {LIGHTING_OPTIONS.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
                <select value={scene.timeOfDay} onChange={(e) => setScene({ ...scene, timeOfDay: e.target.value })} className="bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5">
                  {TIMES_OF_DAY.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
                <select value={scene.modelType} onChange={(e) => setScene({ ...scene, modelType: e.target.value })} className="bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5">
                  {MODEL_TYPES.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
                <select value={scene.cameraAngle} onChange={(e) => setScene({ ...scene, cameraAngle: e.target.value })} className="bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5">
                  {ANGLES.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
                <select value={scene.composition} onChange={(e) => setScene({ ...scene, composition: e.target.value })} className="bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5">
                  {COMPOSITIONS.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
                <select value={scene.mood} onChange={(e) => setScene({ ...scene, mood: e.target.value })} className="bg-gray-950 border border-gray-700 rounded-lg px-3 py-2.5 md:col-span-2">
                  {MOODS.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-8 space-y-6">
              {referencePreview && (
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
                  <div className="text-xs uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-2">
                    <Camera className="w-4 h-4" /> Reference Preview
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={referencePreview} alt="Reference upload" className="w-full h-auto rounded-lg border border-gray-800" />
                </div>
              )}

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Generated Prompt</h3>
                  <div className="flex bg-gray-950 rounded-lg p-1 border border-gray-800">
                    {['ChatGPT', 'Gemini', 'Generic'].map((p) => (
                      <button
                        key={p}
                        onClick={() => setPlatform(p as 'ChatGPT' | 'Gemini' | 'Generic')}
                        className={`text-[10px] font-medium px-3 py-1.5 rounded-md transition-all ${platform === p ? 'bg-emerald-600 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  readOnly
                  value={generatedPrompt}
                  className="w-full h-80 bg-gray-950/50 border border-gray-700 rounded-xl p-4 text-sm leading-relaxed text-gray-300 outline-none resize-none font-mono"
                />

                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-xs text-red-400 font-mono opacity-70" title={negativePrompt}>
                    <span className="font-bold text-red-500/80 mr-2">NEGATIVE:</span>
                    {negativePrompt}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button onClick={copyToClipboard} className="flex items-center justify-center gap-2 bg-white text-gray-950 font-bold py-3 px-4 rounded-xl hover:bg-gray-100 transition-all">
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied!' : 'Copy Prompt'}
                  </button>
                  <button onClick={downloadJson} className="flex items-center justify-center gap-2 bg-gray-800 text-white font-medium py-3 px-4 rounded-xl border border-gray-700 hover:bg-gray-700 transition-all">
                    <Download className="w-4 h-4" /> JSON
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
