import React from 'react';

interface PerformanceOptimizationProps {
  children: React.ReactNode;
}

export function PerformanceOptimization({ children }: PerformanceOptimizationProps) {
  return (
    <>
      {/* Critical CSS inlining would go here */}
      <style jsx global>{`
        /* Critical above-the-fold styles */
        .hero-section {
          background: linear-gradient(135deg, #18181b 0%, #23243a 50%, #1a1a2e 100%);
        }
        
        /* Font loading optimization */
        @font-face {
          font-family: 'DM Serif Display';
          font-display: swap;
          src: url('/fonts/dm-serif-display.woff2') format('woff2');
        }
        
        @font-face {
          font-family: 'Inter';
          font-display: swap;
          src: url('/fonts/inter.woff2') format('woff2');
        }
        
        /* Image optimization */
        img {
          loading: lazy;
          decoding: async;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      
      {/* Resource hints */}
      <link rel="preload" href="/fonts/dm-serif-display.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/heroimage-robothand.png" as="image" />
      
      {/* Critical resource preloading */}
      <link rel="preload" href="/api/tutorials" as="fetch" crossOrigin="anonymous" />
      
      {children}
    </>
  );
}

interface ImageOptimizationProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export function ImageOptimization({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  className = ''
}: ImageOptimizationProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto'
      }}
    />
  );
}

interface LazyComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
}

export function LazyComponent({ 
  children, 
  fallback = <div>Loading...</div>,
  threshold = 0.1 
}: LazyComponentProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref}>
      {isVisible ? children : fallback}
    </div>
  );
}

interface CodeBlockOptimizationProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlockOptimization({ 
  code, 
  language = 'javascript',
  className = ''
}: CodeBlockOptimizationProps) {
  return (
    <pre className={`bg-gray-900 p-4 rounded-lg overflow-x-auto ${className}`}>
      <code className={`language-${language} text-green-400`}>
        {code}
      </code>
    </pre>
  );
}

interface SEOContentOptimizationProps {
  content: string;
  targetKeywords: string[];
  maxKeywordDensity?: number;
}

export function SEOContentOptimization({ 
  content, 
  targetKeywords,
  maxKeywordDensity = 3
}: SEOContentOptimizationProps) {
  const wordCount = content.split(' ').length;
  const keywordCounts = targetKeywords.map(keyword => {
    const regex = new RegExp(keyword, 'gi');
    const matches = content.match(regex);
    return {
      keyword,
      count: matches ? matches.length : 0,
      density: matches ? (matches.length / wordCount) * 100 : 0
    };
  });

  const overOptimized = keywordCounts.some(k => k.density > maxKeywordDensity);

  return (
    <div>
      {overOptimized && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
          <strong>SEO Warning:</strong> Keyword density is too high. Consider reducing keyword usage.
        </div>
      )}
      
      <div 
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ 
          __html: content
            .replace(/\n/g, '<br>')
            .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-900 p-4 rounded-lg overflow-x-auto"><code class="text-green-400">$2</code></pre>')
            .replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-2 py-1 rounded text-green-400">$1</code>')
            .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-white mb-4 mt-8">$1</h1>')
            .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-white mb-3 mt-6">$1</h2>')
            .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-white mb-2 mt-4">$1</h3>')
            .replace(/^\*\* (.*$)/gm, '<li class="text-gray-300 mb-1">$1</li>')
            .replace(/^- (.*$)/gm, '<li class="text-gray-300 mb-1">$1</li>')
        }}
      />
    </div>
  );
}
