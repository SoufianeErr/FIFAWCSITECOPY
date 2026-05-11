import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { cities, cityStats } from '@/lib/cities';
import { stadiumsByCapacity } from '@/lib/stadiums';
import CityFilter from '@/components/CityFilter';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import StadiumCard from '@/components/StadiumCard';
import { organizationSchema } from '@/lib/seo';

const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), { ssr: false });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://footballworldcupnews.com';

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 Scores, Results & Host Cities Guide',
  description:
    'Your complete FIFA World Cup 2026 hub — scores, results, all 16 host cities and stadiums across the USA, Canada, and Mexico. Match schedules, tickets, travel tips, and hotels.',
  openGraph: {
    title: 'FIFA World Cup 2026 Scores, Results & Host Cities Guide',
    description: 'Scores, results, host cities, stadiums, tickets and travel tips for FIFA World Cup 2026.',
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/og/home.jpg`, width: 1200, height: 630 }],
  },
  alternates: { canonical: SITE_URL },
};

// Fixed positions so server and client render identically (no Math.random)
const BALL_POSITIONS: [number, number][] = [
  [5, 10], [12, 85], [22, 45], [30, 70], [40, 20],
  [50, 55], [60, 80], [70, 30], [80, 60], [90, 15],
  [8, 35], [18, 65], [28, 90], [38, 5],  [48, 40],
  [58, 75], [68, 50], [78, 25], [88, 55], [95, 80],
];

const homepageFaqs = [
  {
    question: 'Where is the FIFA World Cup 2026 being held?',
    answer: 'The FIFA World Cup 2026 will be held across 16 host cities in three countries: the United States (11 cities), Canada (2 cities), and Mexico (3 cities). It is the first World Cup to be hosted by three nations simultaneously.',
  },
  {
    question: 'When does the FIFA World Cup 2026 start and end?',
    answer: 'The FIFA World Cup 2026 opens on June 11, 2026 with the Opening Match at Estadio Azteca in Mexico City, and concludes with the Final on July 19, 2026 at MetLife Stadium in New York/New Jersey.',
  },
  {
    question: 'How many teams are in the 2026 FIFA World Cup?',
    answer: 'The 2026 FIFA World Cup will feature 48 teams — an expansion from the previous 32-team format. The tournament will include 104 matches played across all 16 host cities.',
  },
  {
    question: 'Which stadium is hosting the 2026 World Cup Final?',
    answer: "MetLife Stadium in East Rutherford, New Jersey (New York area) will host the 2026 FIFA World Cup Final on July 19, 2026. With a capacity of 82,500, it is one of the largest stadiums in the tournament.",
  },
  {
    question: 'Which city is hosting the most World Cup 2026 matches?',
    answer: 'New York/New Jersey (MetLife Stadium) and Los Angeles (SoFi Stadium) are hosting the most matches — 8 and 7 respectively — including the Final and one of the Semi-Finals.',
  },
  {
    question: 'How do I buy FIFA World Cup 2026 tickets?',
    answer: 'Official FIFA World Cup 2026 tickets will be sold exclusively through FIFA\'s official ticketing portal at FIFA.com. Register for ticket ballot notifications on the official FIFA website to get early access.',
  },
  {
    question: 'What countries are hosting the 2026 FIFA World Cup?',
    answer: 'The 2026 FIFA World Cup is jointly hosted by the United States, Canada, and Mexico — making it only the second World Cup to be hosted by multiple nations (after South Korea/Japan 2002), and the first to involve three countries.',
  },
  {
    question: 'Is Estadio Azteca hosting the World Cup 2026 Opening Match?',
    answer: 'Yes! Estadio Azteca in Mexico City will host the Opening Match of the FIFA World Cup 2026, making it the only stadium to have hosted the Opening Match and also previously hosted two World Cup Finals (1970 and 1986).',
  },
  {
    question: 'Which is the biggest stadium at the 2026 World Cup?',
    answer: 'Estadio Azteca in Mexico City is the largest stadium at the 2026 FIFA World Cup, with a capacity of 87,523 seats. MetLife Stadium in New York/New Jersey (82,500) is the second largest and hosts the Final.',
  },
  {
    question: 'Do I need a visa to attend the 2026 World Cup in the USA?',
    answer: 'Visa requirements for the USA depend on your nationality. Many countries participate in the Visa Waiver Program (ESTA). FIFA and the US government are expected to implement streamlined entry procedures for World Cup ticket holders. Check US Embassy or USCIS websites for your specific country\'s requirements.',
  },
];

export default function HomePage() {
  const featuredCities = cities.filter((c) =>
    ['new-york-new-jersey', 'los-angeles', 'miami', 'mexico-city'].includes(c.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />

      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-blue-900/30" />
          {/* Pattern */}
          {BALL_POSITIONS.map(([top, left], i) => (
            <div
              key={i}
              className="absolute text-white/5 text-9xl select-none"
              style={{ top: `${top}%`, left: `${left}%` }}
            >
              ⚽
            </div>
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold text-sm font-semibold px-4 py-2 rounded-full mb-6">
            🏆 FIFA World Cup 2026 — June 11 to July 19, 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            FIFA World Cup 2026 —{' '}
            <span className="text-gold">Scores, Cities & Stadiums Guide</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Your complete FIFA World Cup 2026 hub. Follow scores and results, explore all 16 host cities across the USA, Canada, and Mexico — stadiums, tickets, travel tips, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/scores"
              className="btn-primary text-lg px-8 py-4"
            >
              View Scores & Results ⚽
            </Link>
            <Link
              href="/cities"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20 font-bold px-8 py-4 rounded-full text-lg transition-colors inline-flex items-center gap-2"
            >
              Explore All 16 Cities 🗺️
            </Link>
            <Link
              href="/news/how-to-get-tickets"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20 font-bold px-8 py-4 rounded-full text-lg transition-colors inline-flex items-center gap-2"
            >
              Get Tickets Info 🎟️
            </Link>
          </div>
        </div>
      </section>

      {/* Ad slot */}
      <div className="bg-gray-50 py-2">
        <AdSlot format="leaderboard" />
      </div>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-navy to-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '16', label: 'Host Cities', icon: '🏙️' },
              { value: '3', label: 'Countries', icon: '🌎' },
              { value: '48', label: 'Teams', icon: '⚽' },
              { value: '104', label: 'Matches', icon: '🏟️' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-4xl font-black text-gold">{stat.value}</div>
                <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h2 className="section-heading mb-3">
            All 16 FIFA World Cup 2026 Host Cities
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Click any pin on the map to see stadium details, capacity, and number of matches. Color-coded by country.
          </p>
        </div>
        <InteractiveMap cities={cities} />
      </section>

      {/* City Grid with Filter */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading mb-3">Browse All Host Cities</h2>
            <p className="text-gray-500">
              Filter by country or search for your city. Each guide includes stadium info, hotels, transport, and attractions.
            </p>
          </div>
          <CityFilter cities={cities} />
        </div>
      </section>

      <AdSlot format="in-content-1" />

      {/* Most Searched Cities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-heading mb-3">Most Popular World Cup Destinations</h2>
        <p className="text-gray-500 mb-8">
          The most searched FIFA World Cup 2026 host cities — featuring the Final, Opening Match, and top fan destinations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredCities.map((city, index) => (
            <Link
              key={city.slug}
              href={`/cities/${city.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-navy text-white p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{city.countryFlag}</span>
                  {index === 0 && (
                    <span className="text-xs font-bold bg-gold text-navy px-2 py-1 rounded-full">
                      🏆 FINAL VENUE
                    </span>
                  )}
                  {city.slug === 'mexico-city' && (
                    <span className="text-xs font-bold bg-green-500 text-white px-2 py-1 rounded-full">
                      🎬 OPENING MATCH
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-black mb-2 group-hover:text-gold transition-colors">
                  {city.fullName}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{city.stadium}</p>
                <div className="flex gap-4 text-sm">
                  <span className="text-gold font-bold">{city.capacity.toLocaleString('en-US')} seats</span>
                  <span className="text-gray-400">·</span>
                  <span className="text-gray-300">{city.matchCount} matches</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
                  View Full Guide <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stadium Capacity Chart */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-white mb-3">
            2026 World Cup Stadiums Ranked by Capacity
          </h2>
          <p className="text-gray-400 mb-10">
            All 16 FIFA World Cup 2026 stadiums, from largest to smallest.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stadiumsByCapacity.map((stadium, index) => (
              <StadiumCard key={stadium.slug} stadium={stadium} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <AdSlot format="in-content-2" />

      {/* Latest News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-heading">Latest Articles</h2>
          <Link href="/news" className="text-gold font-semibold hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              slug: 'world-cup-2026-fan-fest-locations',
              title: 'World Cup 2026 Fan Fest Locations — Watch Every Match for Free',
              category: 'Fan Guides',
              date: 'May 10, 2026',
              image: '/images/cities/fanzone.jpg',
            },
            {
              slug: 'how-to-watch-world-cup-2026',
              title: 'How to Watch FIFA World Cup 2026 — TV Channels & Streaming',
              category: 'Fan Guides',
              date: 'May 10, 2026',
              image: '/images/cities/streamingtv.jpg',
            },
            {
              slug: 'how-to-get-tickets',
              title: 'How to Get Tickets for FIFA World Cup 2026',
              category: 'Tickets',
              date: 'Jan 20, 2026',
              image: '/images/cities/tickets.jpg',
            },
          ].map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="h-40 relative overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-bold bg-gold text-navy px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-400 mb-2">{article.date}</p>
                <h3 className="font-bold text-navy group-hover:text-gold transition-colors leading-snug">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-heading mb-3 text-center">
          FIFA World Cup 2026 — Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-center mb-10">
          Everything you need to know about the 2026 FIFA World Cup host cities, venues, tickets, and travel.
        </p>
        <FAQSection faqs={homepageFaqs} title="People Also Ask" />
      </section>

      {/* Ad slot */}
      <AdSlot format="end-of-content" />

      {/* Sticky footer ad (mobile) */}
      <AdSlot format="sticky-footer" />
    </>
  );
}
