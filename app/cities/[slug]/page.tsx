import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { Metadata } from 'next';
import { cities, getCityBySlug, getRelatedCities } from '@/lib/cities';
import ImageWithFallback from '@/components/ImageWithFallback';
import { buildCityMetadata, sportsEventSchema, breadcrumbSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import MatchTable from '@/components/MatchTable';
import WeatherWidget from '@/components/WeatherWidget';
import SocialShare from '@/components/SocialShare';
import AdSlot from '@/components/AdSlot';
import CityCard from '@/components/CityCard';

const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), { ssr: false });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fifaworldcup2026guide.com';

export async function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const city = getCityBySlug(params.slug);
  if (!city) return {};
  return buildCityMetadata(city);
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = getCityBySlug(params.slug);
  if (!city) notFound();

  const relatedCities = getRelatedCities(city.relatedCities);

  const eventSchema = sportsEventSchema(city);
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Cities', url: `${SITE_URL}/cities` },
    { name: city.fullName, url: `${SITE_URL}/cities/${city.slug}` },
  ]);

  const countryColors: Record<string, string> = {
    USA: 'bg-blue-600',
    Canada: 'bg-red-600',
    Mexico: 'bg-green-600',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <div className="relative bg-navy min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={city.imagePath}
            alt={`${city.fullName} FIFA World Cup 2026`}
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
            country={city.country}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <Breadcrumbs
            items={[
              { name: 'Cities', href: '/cities' },
              { name: city.fullName, href: `/cities/${city.slug}` },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-white text-xs font-bold px-3 py-1 rounded-full ${countryColors[city.country]}`}
            >
              {city.countryFlag} {city.country}
            </span>
            <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
              {city.matchCount} Matches
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            {city.fullName} — FIFA World Cup 2026
          </h1>
          <p className="text-xl text-gray-300 mb-4">{city.stadium}</p>
          <SocialShare title={`${city.fullName} FIFA World Cup 2026 Guide — ${city.stadium}`} />
        </div>
      </div>

      {/* Ad */}
      <AdSlot format="leaderboard" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">
                World Cup 2026 in {city.fullName}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">{city.overview}</p>
            </section>

            <AdSlot format="in-content-1" />

            {/* Stadium Section */}
            <section className="bg-navy text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gold">
                {city.stadium} — Stadium Guide
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">{city.stadiumOverview}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Capacity', value: city.capacity.toLocaleString('en-US'), icon: '👥' },
                  { label: 'Surface', value: city.surface, icon: '🌿' },
                  { label: 'Year Built', value: city.yearBuilt.toString(), icon: '🏗️' },
                  { label: 'WC Matches', value: city.matchCount.toString(), icon: '⚽' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="font-bold text-white text-lg">{stat.value}</div>
                    <div className="text-gray-400 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Architect:</span> {city.architect} ·{' '}
                  <span className="font-semibold text-white">Home Team:</span> {city.nflTeam}
                </p>
              </div>
            </section>

            {/* Map */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">
                {city.stadium} — Location Map
              </h2>
              <InteractiveMap
                cities={[city]}
                centerLat={city.lat}
                centerLng={city.lng}
                zoom={13}
                singleCity
              />
            </section>

            {/* Match Schedule */}
            <MatchTable
              matches={city.matches}
              cityName={city.fullName}
              stadiumName={city.stadium}
            />

            <AdSlot format="in-content-2" />

            {/* Getting There */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">
                Getting to {city.stadium}
              </h2>
              <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">✈️</span>
                  <div>
                    <h3 className="font-bold text-navy">Nearest Airport</h3>
                    <p className="text-gray-600">
                      {city.airport} ({city.airportCode}) — {city.airportDistance} from stadium
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-navy mb-3">Transport Options</h3>
              <ul className="space-y-2">
                {city.transportOptions.map((option, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="text-gold mt-1">✓</span>
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Where to Stay */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">
                Where to Stay Near {city.stadium}
              </h2>
              <div className="grid gap-4">
                {city.hotels.map((hotel, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-navy">{hotel.name}</h3>
                      <p className="text-sm text-gray-500">{hotel.distance}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-gold font-bold text-sm">{hotel.priceRange}</div>
                      <a
                        href={hotel.link} target='_blank'
                        className="text-xs text-blue-600 hover:underline"
                      >
                        Check availability →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Things to Do */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">
                Things to Do in {city.name}
              </h2>
              <div className="grid gap-4">
                {city.attractions.map((attraction, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy font-bold flex-shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">{attraction.name}</h3>
                      <p className="text-gray-600 text-sm">{attraction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Weather */}
            <WeatherWidget
              cityName={city.name}
              june={city.weatherJune}
              july={city.weatherJuly}
            />

            {/* Food & Culture */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">
                Food & Culture in {city.name}
              </h2>
              <div className="bg-amber-50 rounded-2xl p-6">
                <ul className="space-y-3">
                  {city.foodTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="text-xl flex-shrink-0">🍽️</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* FAQ */}
            <FAQSection
              faqs={city.faqs}
              title={`${city.fullName} World Cup 2026 — FAQ`}
            />

            {/* Ad */}
            <AdSlot format="end-of-content" />
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* Quick Info Card */}
              <div className="bg-navy text-white rounded-2xl p-6">
                <h3 className="font-bold text-gold mb-4 text-lg">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Country</span>
                    <span className="font-semibold">{city.countryFlag} {city.country}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Stadium</span>
                    <span className="font-semibold text-right ml-4">{city.stadium}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Capacity</span>
                    <span className="font-semibold">{city.capacity.toLocaleString('en-US')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">WC Matches</span>
                    <span className="font-semibold">{city.matchCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Airport</span>
                    <span className="font-semibold">{city.airportCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Surface</span>
                    <span className="font-semibold">{city.surface}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Built</span>
                    <span className="font-semibold">{city.yearBuilt}</span>
                  </div>
                </div>
              </div>

              {/* Sidebar Ad */}
              <AdSlot format="sidebar" />

              {/* Internal Links */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-navy mb-4">Explore More</h3>
                <div className="space-y-2">
                  <Link
                    href="/cities"
                    className="block text-sm text-gray-600 hover:text-gold transition-colors"
                  >
                    → All 16 Host Cities
                  </Link>
                  <Link
                    href={`/stadiums/${city.stadiumSlug}`}
                    className="block text-sm text-gray-600 hover:text-gold transition-colors"
                  >
                    → {city.stadium} Stadium Guide
                  </Link>
                  <Link
                    href="/news/how-to-get-tickets"
                    className="block text-sm text-gray-600 hover:text-gold transition-colors"
                  >
                    → How to Get Tickets
                  </Link>
                  <Link
                    href="/news/travel-guide-usa"
                    className="block text-sm text-gray-600 hover:text-gold transition-colors"
                  >
                    → USA Travel Guide
                  </Link>
                  <Link
                    href="/news"
                    className="block text-sm text-gray-600 hover:text-gold transition-colors"
                  >
                    → Latest News
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Cities */}
        {relatedCities.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-navy mb-6">
              You Might Also Like — Related Cities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedCities.map((relCity) => (
                <CityCard key={relCity.slug} city={relCity} />
              ))}
            </div>
          </section>
        )}

        {/* Internal linking footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Explore all FIFA World Cup 2026 host cities:{' '}
            {cities.slice(0, 8).map((c, i) => (
              <span key={c.slug}>
                <Link href={`/cities/${c.slug}`} className="text-gold hover:underline">
                  {c.name}
                </Link>
                {i < 7 && <span className="mx-1">·</span>}
              </span>
            ))}
            {' '}· <Link href="/cities" className="text-gold hover:underline">View all 16 →</Link>
          </p>
        </div>
      </div>

      {/* Sticky mobile ad */}
      <AdSlot format="sticky-footer" />
    </>
  );
}
