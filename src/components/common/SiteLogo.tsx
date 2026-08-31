'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface SiteLogoProps {
  url?: string;
  logoUrl?: string;
  name: string;
  className?: string;
  size?: number;
}

export default function SiteLogo({
  url = '',
  logoUrl = '',
  name,
  className = 'w-full h-full object-cover',
  size = 48
}: SiteLogoProps) {
  const getDomain = useCallback((rawUrl: string) => {
    if (!rawUrl) return '';
    try {
      const u = new URL(rawUrl.startsWith('http') ? rawUrl : `https://${rawUrl}`);
      return u.hostname;
    } catch {
      return '';
    }
  }, []);

  const domain = getDomain(url);
  const imgRef = useRef<HTMLImageElement>(null);

  // Stage 0: Direct logoUrl
  // Stage 1: Google Favicon S2 (sz=128)
  // Stage 2: DuckDuckGo icons
  // Stage 3: Fallback Avatar
  const [stage, setStage] = useState<number>(() => {
    if (logoUrl && logoUrl.trim() && !logoUrl.includes('placeholder')) return 0;
    if (domain) return 1;
    return 3;
  });

  const [hasLoaded, setHasLoaded] = useState(false);

  const handleError = useCallback(() => {
    setStage(prev => {
      if (prev === 0 && domain) return 1;
      if (prev === 1 && domain) return 2;
      return 3;
    });
    setHasLoaded(false);
  }, [domain]);

  useEffect(() => {
    if (logoUrl && logoUrl.trim() && !logoUrl.includes('placeholder')) {
      setStage(0);
    } else if (domain) {
      setStage(1);
    } else {
      setStage(3);
    }
    setHasLoaded(false);
  }, [logoUrl, url, domain]);

  // Check pre-hydration image load status & add safety timeout
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    if (img.complete) {
      if (img.naturalWidth > 0) {
        setHasLoaded(true);
      } else {
        handleError();
      }
    }

    // Safety fallback timeout: if image hasn't loaded within 3s, advance stage
    const timer = setTimeout(() => {
      if (!hasLoaded && stage < 3) {
        handleError();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [stage, handleError, hasLoaded]);

  const char = (name || 'V').trim().charAt(0).toUpperCase();

  let currentSrc = '';
  if (stage === 0) {
    currentSrc = logoUrl;
  } else if (stage === 1) {
    currentSrc = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  } else if (stage === 2) {
    currentSrc = `https://icons.duckduckgo.com/ip3/${domain}.ico`;
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-800 rounded-lg">
      {/* Background Avatar layer (always ready, zero empty state) */}
      <div 
        className="absolute inset-0 w-full h-full rounded-lg bg-linear-to-br from-orange-500 via-rose-500 to-red-600 flex items-center justify-center text-white font-bold shadow-inner select-none"
        style={{ fontSize: Math.max(14, Math.floor(size * 0.42)) }}
      >
        {char}
      </div>

      {/* Image layer that fades in smoothly over the avatar once loaded */}
      {stage < 3 && currentSrc && (
        <img
          ref={imgRef}
          key={`${domain}-${stage}`}
          src={currentSrc}
          alt={name}
          className={`${className} absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setHasLoaded(true)}
          onError={handleError}
          loading="lazy"
        />
      )}
    </div>
  );
}
