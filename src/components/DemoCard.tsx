'use client';

import { trackViewContent, trackInitiateCheckout } from './FacebookPixel';

interface DemoCardProps {
  demo: {
    id: string;
    name: string;
    description: string;
    facebookUrl: string;
    messengerUrl: string;
    youtubeUrl?: string;
    features: string[];
    color: string;
  };
  getColorClasses: (color: string) => string;
}

export function DemoCard({ demo, getColorClasses }: DemoCardProps) {
  const handleDemoClick = (demoName: string) => {
    trackViewContent(`Demo: ${demoName}`, 'Demo');
    trackInitiateCheckout(0, 'USD');
  };

  return (
    <div id={demo.id} className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div className={`h-4 ${getColorClasses(demo.color)}`}></div>
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{demo.name}</h3>
          <div className="flex space-x-2">
            <a 
              href={demo.facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Facebook Page
            </a>
            <a 
              href={demo.messengerUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => handleDemoClick(demo.name)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Try Demo
            </a>
          </div>
        </div>
        <p className="text-gray-600 mb-6">{demo.description}</p>
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">Key Features:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {demo.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}