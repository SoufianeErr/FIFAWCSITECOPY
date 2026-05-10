'use client';

import { useEffect, useRef } from 'react';

type AdFormat =
  | 'leaderboard'
  | 'in-content-1'
  | 'in-content-2'
  | 'sidebar'
  | 'end-of-content'
  | 'sticky-footer';

interface AdSlotProps {
  format: AdFormat;
  className?: string;
}

const adConfig: Record<
  AdFormat,
  { width: number; height: number; mobileWidth: number; mobileHeight: number; label: string }
> = {
  leaderboard: { width: 728, height: 90, mobileWidth: 320, mobileHeight: 50, label: 'Advertisement' },
  'in-content-1': { width: 300, height: 250, mobileWidth: 300, mobileHeight: 250, label: 'Advertisement' },
  'in-content-2': { width: 300, height: 250, mobileWidth: 300, mobileHeight: 250, label: 'Advertisement' },
  sidebar: { width: 300, height: 600, mobileWidth: 300, mobileHeight: 250, label: 'Advertisement' },
  'end-of-content': { width: 336, height: 280, mobileWidth: 300, mobileHeight: 250, label: 'Advertisement' },
  'sticky-footer': { width: 320, height: 50, mobileWidth: 320, mobileHeight: 50, label: 'Advertisement' },
};

export default function AdSlot({ format, className = '' }: AdSlotProps) {
  const config = adConfig[format];
  const slotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // AdSense ads load here when real publisher ID is configured
    if (typeof window !== 'undefined' && (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle) {
      try {
        ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || []).push({});
      } catch {
        // AdSense not yet configured
      }
    }
  }, []);

  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  if (format === 'sticky-footer') {
    return (
      <div
        aria-hidden="true"
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden flex justify-center bg-white border-t border-gray-200 py-1 ${className}`}
        style={{ minHeight: `${config.mobileHeight}px` }}
      >
        <div className="text-xs text-gray-400 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 bg-white px-1">
          {config.label}
        </div>
        {publisherId ? (
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: config.mobileWidth, height: config.mobileHeight }}
            data-ad-client={publisherId}
            data-ad-slot="REPLACE_WITH_SLOT_ID"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        ) : (
          <div
            className="bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs"
            style={{ width: config.mobileWidth, height: config.mobileHeight }}
          >
            Ad · {config.mobileWidth}×{config.mobileHeight}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={slotRef}
      aria-hidden="true"
      className={`ad-slot ad-slot-${format} flex flex-col items-center my-6 ${className}`}
      style={{ minHeight: `${config.height}px` }}
    >
      <span className="text-xs text-gray-400 mb-1">{config.label}</span>
      {publisherId ? (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={publisherId}
          data-ad-slot="REPLACE_WITH_SLOT_ID"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <div
          className="bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm rounded w-full"
          style={{ maxWidth: config.width, height: config.height }}
        >
          Ad Slot · {format} · {config.width}×{config.height}
        </div>
      )}
    </div>
  );
}
