'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Code, Plus, Trash2, Smartphone, Layout } from 'lucide-react';

type ButtonType = 'web_url' | 'postback';

interface Button {
    type: ButtonType;
    title: string;
    url?: string;
    payload?: string;
}

export default function MessengerBuilderPage() {
    const [title, setTitle] = useState('Welcome to Sajedar');
    const [subtitle, setSubtitle] = useState('The best agent agency in Nepal.');
    const [imageUrl, setImageUrl] = useState('https://sajedar.com/sajedar-new-logo-jun16.png');
    const [actionUrl, setActionUrl] = useState('');
    const [buttons, setButtons] = useState<Button[]>([]);

    const [jsonOutput, setJsonOutput] = useState('');
    const [copied, setCopied] = useState(false);

    // Update JSON whenever inputs change
    useEffect(() => {
        // Construct the Facebook Generic Template JSON structure
        const element: any = {
            title: title,
            subtitle: subtitle,
            image_url: imageUrl,
        };

        if (actionUrl) {
            element.default_action = {
                type: "web_url",
                url: actionUrl,
                webview_height_ratio: "tall"
            };
        }

        if (buttons.length > 0) {
            element.buttons = buttons.map(btn => {
                if (btn.type === 'web_url') {
                    return { type: 'web_url', url: btn.url, title: btn.title };
                } else {
                    return { type: 'postback', payload: btn.payload, title: btn.title };
                }
            });
        }

        const payload = {
            attachment: {
                type: "template",
                payload: {
                    template_type: "generic",
                    elements: [element]
                }
            }
        };

        setJsonOutput(JSON.stringify(payload, null, 2));
    }, [title, subtitle, imageUrl, actionUrl, buttons]);

    const addButton = () => {
        if (buttons.length >= 3) {
            alert("Facebook limits Generic Templates to 3 buttons.");
            return;
        }
        setButtons([...buttons, { type: 'web_url', title: 'Visit Website', url: 'https://' }]);
    };

    const removeButton = (index: number) => {
        const newButtons = [...buttons];
        newButtons.splice(index, 1);
        setButtons(newButtons);
    };

    const updateButton = (index: number, field: keyof Button, value: string) => {
        const newButtons = [...buttons];
        // @ts-ignore
        newButtons[index][field] = value;
        setButtons(newButtons);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(jsonOutput);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-7xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Chatbot Pro
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Facebook Messenger JSON Builder
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Stop writing JSON by hand. Visually build "Generic Templates" (Cards) and get error-free code for ManyChat or n8n.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Visual Editor */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6">
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                            <Layout size={20} className="text-emerald-400" /> Card Details
                        </h3>

                        <div>
                            <label className="block text-gray-400 text-xs mb-1">Title (max 80 chars)</label>
                            <input
                                type="text"
                                maxLength={80}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 text-xs mb-1">Subtitle (max 80 chars)</label>
                            <input
                                type="text"
                                maxLength={80}
                                value={subtitle}
                                onChange={(e) => setSubtitle(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 text-xs mb-1">Image URL</label>
                            <input
                                type="text"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none font-mono text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 text-xs mb-1">Default Action URL (Optional)</label>
                            <input
                                type="text"
                                value={actionUrl}
                                onChange={(e) => setActionUrl(e.target.value)}
                                placeholder="https://..."
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none font-mono text-sm"
                            />
                        </div>

                        {/* Buttons Section */}
                        <div className="pt-4 border-t border-white/10">
                            <div className="flex justify-between items-center mb-4">
                                <label className="text-gray-300 text-sm font-bold">Buttons ({buttons.length}/3)</label>
                                {buttons.length < 3 && (
                                    <button
                                        onClick={addButton}
                                        className="text-xs bg-emerald-500 hover:bg-emerald-600 text-white px-2 py-1 rounded flex items-center gap-1 transition-colors"
                                    >
                                        <Plus size={14} /> Add Button
                                    </button>
                                )}
                            </div>

                            <div className="space-y-3">
                                {buttons.map((btn, index) => (
                                    <div key={index} className="bg-white/5 p-3 rounded-lg border border-white/5 animate-in fade-in">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-xs text-gray-500">Button #{index + 1}</span>
                                            <button onClick={() => removeButton(index)} className="text-red-400 hover:text-red-300">
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 mb-2">
                                            <input
                                                type="text"
                                                value={btn.title}
                                                onChange={(e) => updateButton(index, 'title', e.target.value)}
                                                placeholder="Label"
                                                maxLength={20}
                                                className="bg-black/20 border border-white/10 rounded px-2 py-1 text-white text-sm focus:border-emerald-500 outline-none"
                                            />
                                            <select
                                                value={btn.type}
                                                onChange={(e) => updateButton(index, 'type', e.target.value as ButtonType)}
                                                className="bg-black/20 border border-white/10 rounded px-2 py-1 text-white text-sm focus:border-emerald-500 outline-none [&>option]:bg-gray-800"
                                            >
                                                <option value="web_url">URL</option>
                                                <option value="postback">Postback</option>
                                            </select>
                                        </div>
                                        {btn.type === 'web_url' ? (
                                            <input
                                                type="text"
                                                value={btn.url || ''}
                                                onChange={(e) => updateButton(index, 'url', e.target.value)}
                                                placeholder="https://..."
                                                className="w-full bg-black/20 border border-white/10 rounded px-2 py-1 text-white text-sm focus:border-emerald-500 outline-none"
                                            />
                                        ) : (
                                            <input
                                                type="text"
                                                value={btn.payload || ''}
                                                onChange={(e) => updateButton(index, 'payload', e.target.value)}
                                                placeholder="PAYLOAD_ID"
                                                className="w-full bg-black/20 border border-white/10 rounded px-2 py-1 text-white text-sm focus:border-emerald-500 outline-none font-mono"
                                            />
                                        )}
                                    </div>
                                ))}
                                {buttons.length === 0 && (
                                    <p className="text-xs text-gray-500 italic">No buttons added.</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Preview & Code */}
                    <div className="space-y-8">
                        {/* Visual Preview */}
                        <div className="bg-black/20 rounded-2xl border border-white/5 p-6 flex justify-center">
                            <div className="w-[300px] bg-white rounded-xl overflow-hidden shadow-2xl">
                                <div className="aspect-[1.91/1] bg-gray-200 relative">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/600x315?text=Invalid+Image')} />
                                </div>
                                <div className="p-4 bg-white">
                                    <h4 className="font-bold text-gray-900 text-base leading-tight mb-1">{title || 'Title'}</h4>
                                    <p className="text-gray-500 text-sm">{subtitle || 'Subtitle'}</p>
                                </div>
                                {buttons.map((btn, i) => (
                                    <div key={i} className="border-t border-gray-100 py-3 text-center text-blue-600 font-bold text-sm hover:bg-gray-50">
                                        {btn.title || 'Button'}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Code Output */}
                        <div className="bg-[#1e1e1e] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                            <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex justify-between items-center">
                                <span className="text-gray-400 text-xs font-mono flex items-center gap-2">
                                    <Code size={14} /> JSON Payload
                                </span>
                                <button
                                    onClick={copyToClipboard}
                                    className={`text-xs font-bold px-3 py-1.5 rounded transition-all flex items-center gap-2 ${copied
                                            ? 'bg-emerald-500 text-white'
                                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                        }`}
                                >
                                    {copied ? 'Copied!' : 'Copy Code'}
                                </button>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="font-mono text-xs text-blue-300 leading-relaxed">
                                    {jsonOutput}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}