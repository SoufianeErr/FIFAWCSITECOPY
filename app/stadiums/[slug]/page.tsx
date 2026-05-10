import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { Metadata } from 'next';
import { stadiums, getStadiumBySlug, stadiumsByCapacity } from '@/lib/stadiums';
import { getCityBySlug } from '@/lib/cities';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import SocialShare from '@/components/SocialShare';

const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), { ssr: false });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fifaworldcup2026guide.com';

export async function generateStaticParams() {
  return stadiums.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const stadium = getStadiumBySlug(params.slug);
  if (!stadium) return {};
  return buildMetadata({
    title: `${stadium.name} FIFA World Cup 2026 — Stadium Guide, Seating & Info`,
    description: `Complete guide to ${stadium.name} at FIFA World Cup 2026. Capacity ${stadium.capacity.toLocaleString('en-US')}, seating chart, history, getting there, and match schedule in ${stadium.cityName}.`,
    path: `/stadiums/${stadium.slug}`,
  });
}

export default function StadiumPage({ params }: { params: { slug: string } }) {
  const stadium = getStadiumBySlug(params.slug);
  if (!stadium) notFound();

  const city = getCityBySlug(stadium.citySlug);
  const rank = stadiumsByCapacity.findIndex((s) => s.slug === stadium.slug) + 1;

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Stadiums', url: `${SITE_URL}/cities` },
    { name: stadium.name, url: `${SITE_URL}/stadiums/${stadium.slug}` },
  ]);

  const countryColors: Record<string, string> = {
    USA: 'bg-blue-600',
    Canada: 'bg-red-600',
    Mexico: 'bg-green-600',
  };
  const countryFlags: Record<string, string> = { USA: '🇺🇸', Canada: '🇨🇦', Mexico: '🇲🇽' };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <div className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Cities', href: '/cities' },
              { name: stadium.cityName, href: `/cities/${stadium.citySlug}` },
              { name: stadium.name, href: `/stadiums/${stadium.slug}` },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${countryColors[stadium.country]}`}>
              {countryFlags[stadium.country]} {stadium.country}
            </span>
            <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
              #{rank} by Capacity
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-3">{stadium.name}</h1>
          <p className="text-xl text-gray-300 mb-4">FIFA World Cup 2026 Venue — {stadium.cityName}</p>
          <SocialShare title={`${stadium.name} — FIFA World Cup 2026 Stadium Guide`} />
        </div>
      </div>

      <AdSlot format="leaderboard" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">

            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">{stadium.name} Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{stadium.overview}</p>
            </section>

            {/* Stats Grid */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Stadium Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: 'Capacity', value: stadium.capacity.toLocaleString('en-US'), icon: '👥' },
                  { label: 'Surface', value: stadium.surface, icon: '🌿' },
                  { label: 'Year Opened', value: stadium.yearBuilt.toString(), icon: '🏗️' },
                  { label: 'Architect', value: stadium.architect, icon: '📐' },
                  { label: 'Home Team', value: stadium.nflTeam, icon: '🏈' },
                  { label: 'Country', value: stadium.country, icon: '🌎' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-xl p-4">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="font-bold text-navy text-sm leading-tight">{stat.value}</div>
                    <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Capacity Bar */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Capacity Ranking</h2>
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-navy">{stadium.name}</span>
                  <span className="font-bold text-gold text-lg">{stadium.capacity.toLocaleString('en-US')}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                  <div
                    className="h-4 bg-gradient-to-r from-gold to-yellow-400 rounded-full"
                    style={{ width: `${(stadium.capacity / 87523) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500">
                  Ranked #{rank} of 16 World Cup venues. Maximum capacity: 87,523 (Estadio Azteca).
                </p>
              </div>
            </section>

            <AdSlot format="in-content-1" />

            {/* World Cup History */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">World Cup History</h2>
              <div className="bg-blue-50 rounded-2xl p-6">
                <p className="text-gray-700 leading-relaxed">{stadium.worldCupHistory}</p>
              </div>
            </section>

            {/* Seating Description */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Seating Chart & Layout</h2>
              <p className="text-gray-600 leading-relaxed">{stadium.seatingDescription}</p>
            </section>

            {/* Virtual Tour Placeholder */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">360° Virtual Stadium Tour</h2>
              <div className="bg-navy rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-5xl mb-4">🏟️</div>
                  <p className="font-bold text-lg">Virtual Tour Coming Soon</p>
                  <p className="text-gray-400 text-sm mt-2">360° tour will be available closer to the tournament</p>
                </div>
              </div>
            </section>

            {/* Record Attendance */}
            <section className="bg-gradient-to-br from-gold/10 to-yellow-50 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-navy mb-3">Record Attendance</h2>
              <div className="flex items-start gap-4">
                <span className="text-4xl">🏆</span>
                <div>
                  <p className="font-bold text-navy text-xl">{stadium.recordAttendance.split(' — ')[0]}</p>
                  <p className="text-gray-600 text-sm mt-1">{stadium.recordAttendance.split(' — ')[1] || ''}</p>
                </div>
              </div>
            </section>

            {/* Stadium Features */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Stadium Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stadium.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <span className="text-gold">✓</span>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Map */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Stadium Location</h2>
              {city && (
                <InteractiveMap
                  cities={[city]}
                  centerLat={stadium.lat}
                  centerLng={stadium.lng}
                  zoom={14}
                  singleCity
                />
              )}
            </section>

            <AdSlot format="end-of-content" />

            {/* Link to city page */}
            {city && (
              <div className="bg-navy text-white rounded-2xl p-8">
                <h2 className="text-xl font-bold mb-3">Plan Your Trip to {city.name}</h2>
                <p className="text-gray-300 mb-4">
                  Get the full city guide including hotels, transport, restaurants, tourist attractions, and everything you need for your World Cup trip.
                </p>
                <Link
                  href={`/cities/${city.slug}`}
                  className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
                >
                  View {city.name} City Guide →
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="bg-navy text-white rounded-2xl p-6">
                <h3 className="font-bold text-gold mb-4">Quick Stats</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Capacity</span>
                    <span className="font-bold">{stadium.capacity.toLocaleString('en-US')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Rank</span>
                    <span className="font-bold">#{rank} of 16</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">City</span>
                    <span className="font-bold">{stadium.cityName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Country</span>
                    <span className="font-bold">{stadium.country}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Built</span>
                    <span className="font-bold">{stadium.yearBuilt}</span>
                  </div>
                </div>
                {city && (
                  <Link
                    href={`/cities/${city.slug}`}
                    className="block text-center mt-5 bg-gold text-navy font-bold py-2 rounded-full text-sm hover:bg-yellow-400 transition-colors"
                  >
                    City Guide →
                  </Link>
                )}
              </div>

              <AdSlot format="sidebar" />

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-navy mb-4">All Stadiums</h3>
                <div className="space-y-2">
                  {stadiumsByCapacity.slice(0, 6).map((s) => (
                    <Link
                      key={s.slug}
                      href={`/stadiums/${s.slug}`}
                      className={`block text-sm transition-colors ${s.slug === stadium.slug ? 'text-gold font-bold' : 'text-gray-600 hover:text-gold'}`}
                    >
                      {s.name} ({s.capacity.toLocaleString('en-US')})
                    </Link>
                  ))}
                  <Link href="/cities" className="block text-sm text-gold hover:underline mt-2">
                    View all stadiums →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdSlot format="sticky-footer" />
    </>
  );
}
