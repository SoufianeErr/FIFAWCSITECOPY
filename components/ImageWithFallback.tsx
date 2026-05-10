'use client';

import Image from 'next/image';
import { useState } from 'react';

const countryGradients: Record<string, string> = {
  USA: 'linear-gradient(135deg, #1e3a5f 0%, #0A1628 60%, #1a3a6e 100%)',
  Canada: 'linear-gradient(135deg, #7f1d1d 0%, #0A1628 60%, #991b1b 100%)',
  Mexico: 'linear-gradient(135deg, #14532d 0%, #0A1628 60%, #15803d 100%)',
};

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  country?: 'USA' | 'Canada' | 'Mexico';
  label?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  fill,
  className,
  sizes,
  priority,
  placeholder,
  blurDataURL,
  country = 'USA',
  label,
}: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`${className ?? ''} flex flex-col items-center justify-center gap-2 select-none`}
        style={{ background: countryGradients[country] }}
        aria-label={alt}
      >
        <span className="text-5xl opacity-20">⚽</span>
        {label && (
          <span className="text-white/30 text-xs font-semibold uppercase tracking-wider px-2 text-center">
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onError={() => setErrored(true)}
    />
  );
}
