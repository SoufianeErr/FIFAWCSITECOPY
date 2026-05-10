import type { Metadata } from 'next';
import { cities, cityStats } from '@/lib/cities';
import CityFilter from '@/components/CityFilter';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'All 16 FIFA World Cup 2026 Host Cities — USA, Canada & Mexico',
  description:
    'Explore all 16 FIFA World Cup 2026 host cities across the USA, Canada, and Mexico. Click any city for stadium info, travel guides, hotels, and match schedules.',
  path: '/cities',
});

export default function CitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'All Host Cities', href: '/cities' }]} />
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            FIFA World Cup 2026 — All Host Cities
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-8">
            The 2026 FIFA World Cup spans 16 cities across 3 countries — the United States, Canada, and Mexico. Each city guide includes stadium info, travel tips, hotels, and the match schedule.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-white/10 rounded-full px-4 py-2">
              🇺🇸 {cityStats.usa} USA cities
            </div>
            <div className="bg-white/10 rounded-full px-4 py-2">
              🇨🇦 {cityStats.canada} Canadian cities
            </div>
            <div className="bg-white/10 rounded-full px-4 py-2">
              🇲🇽 {cityStats.mexico} Mexican cities
            </div>
          </div>
        </div>
      </div>

      {/* Ad */}
      <AdSlot format="leaderboard" />

      {/* Cities Grid with Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CityFilter cities={cities} />
      </div>

      {/* Quick Facts */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-6">
            FIFA World Cup 2026 Host Cities — Quick Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-bold text-navy mb-2">Final Venue</h3>
              <p className="text-gray-600 text-sm">
                MetLife Stadium, New York/New Jersey hosts the 2026 World Cup Final on July 19, 2026.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🎬</div>
              <h3 className="font-bold text-navy mb-2">Opening Match</h3>
              <p className="text-gray-600 text-sm">
                Estadio Azteca in Mexico City hosts the Opening Match on June 11, 2026 — the first-ever World Cup opened in Mexico City.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-navy mb-2">Largest Venue</h3>
              <p className="text-gray-600 text-sm">
                Estadio Azteca (87,523 seats) is the largest stadium. MetLife (82,500) hosts the Final despite being second-largest.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AdSlot format="end-of-content" />
    </div>
  );
}
