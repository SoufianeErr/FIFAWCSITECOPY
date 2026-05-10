import { Suspense } from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import ScoresFilter from '@/components/ScoresFilter';

export const metadata: Metadata = buildMetadata({
  title: 'FIFA World Cup 2026 Scores & Results',
  description:
    'Live scores, results and fixtures for all FIFA World Cup 2026 matches. Group stage results, knockout rounds, and full match schedule.',
  path: '/scores',
});

export default function ScoresPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Scores & Results', href: '/scores' }]} />
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            FIFA World Cup 2026 — Scores & Results
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            All match results and upcoming fixtures across every round of the tournament.
            Updated after every game.
          </p>
        </div>
      </div>

      <AdSlot format="leaderboard" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading matches…</div>}>
          <ScoresFilter />
        </Suspense>
      </div>

      <AdSlot format="sticky-footer" />
    </div>
  );
}
