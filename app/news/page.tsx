import Link from 'next/link';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import NewsFilter from '@/components/NewsFilter';

export const metadata: Metadata = buildMetadata({
  title: 'FIFA World Cup 2026 News, Travel Tips & Guides',
  description:
    'Latest FIFA World Cup 2026 news, travel guides, ticket information, stadium reviews, and fan guides. Everything you need for the biggest football tournament ever.',
  path: '/news',
});

export default function NewsPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'News & Guides', href: '/news' }]} />
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            FIFA World Cup 2026 — News & Guides
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Travel guides, ticket information, stadium reviews, and everything fans need for the 2026 FIFA World Cup.
          </p>
        </div>
      </div>

      <AdSlot format="leaderboard" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filterable article grid */}
        <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading articles…</div>}>
          <NewsFilter />
        </Suspense>

        <AdSlot format="in-content-1" />

        {/* Internal links */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-navy mb-4">Explore Host Cities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['new-york-new-jersey', 'los-angeles', 'miami', 'dallas', 'mexico-city', 'toronto', 'seattle', 'atlanta'].map((slug) => {
              const name = slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
              return (
                <Link
                  key={slug}
                  href={`/cities/${slug}`}
                  className="text-sm text-gray-600 hover:text-gold transition-colors py-1"
                >
                  → {name}
                </Link>
              );
            })}
          </div>
          <Link href="/cities" className="inline-block mt-4 text-gold font-semibold hover:underline">
            View all 16 host cities →
          </Link>
        </div>
      </div>

      <AdSlot format="sticky-footer" />
    </div>
  );
}
