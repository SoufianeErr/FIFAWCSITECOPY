'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const articles = [
  {
    slug: 'best-host-cities-2026',
    title: 'Best Host Cities to Visit for FIFA World Cup 2026',
    description: 'Not sure which city to visit for the 2026 World Cup? We rank all 16 host cities by fan experience, atmosphere, tourism value, and accessibility.',
    category: 'Cities',
    date: 'January 15, 2026',
    readTime: '8 min read',
    featured: true,
    image: '/images/cities/best-host-cities.jpg',
  },
  {
    slug: 'how-to-get-tickets',
    title: 'How to Get Tickets for FIFA World Cup 2026',
    description: 'Complete guide to buying FIFA World Cup 2026 tickets. Official channels, pricing tiers, the ballot system, and tips to maximize your chances.',
    category: 'Tickets',
    date: 'January 20, 2026',
    readTime: '6 min read',
    featured: true,
    image: '/images/cities/tickets.jpg',
  },
  {
    slug: 'biggest-stadiums-ranked',
    title: 'Biggest Stadiums at FIFA World Cup 2026 Ranked',
    description: 'We rank all 16 FIFA World Cup 2026 stadiums by capacity, from the legendary Estadio Azteca to the intimate BMO Field in Toronto.',
    category: 'Stadiums',
    date: 'February 1, 2026',
    readTime: '5 min read',
    featured: false,
    image: '/images/cities/biggest-stadiums.jpg',
  },
  {
    slug: 'travel-guide-usa',
    title: 'Travel Guide: USA for FIFA World Cup 2026 Fans',
    description: 'International fans visiting the USA for the World Cup — everything you need to know about visas, transport, money, accommodation, and getting around.',
    category: 'Travel Tips',
    date: 'February 10, 2026',
    readTime: '10 min read',
    featured: false,
    image: '/images/cities/travel.jpg',
  },
  {
    slug: 'mexico-city-vs-los-angeles',
    title: 'Mexico City vs Los Angeles: Which World Cup City to Visit?',
    description: 'Two iconic cities, two World Cup experiences. We compare Mexico City and Los Angeles across culture, food, atmosphere, cost, and logistics.',
    category: 'Cities',
    date: 'February 20, 2026',
    readTime: '7 min read',
    featured: false,
    image: '/images/cities/mexico-city-la.jpg',
  },
  {
    slug: 'players-injured-world-cup-2026',
    title: "Stars Who Will Miss FIFA World Cup 2026 Through Injury — Cruel Blow",
    description: "Injuries have cruelly ended the World Cup dreams of some of football's biggest stars. These players will be watching the 2026 tournament from the sidelines.",
    category: 'Teams',
    date: 'May 12, 2026',
    readTime: '7 min read',
    featured: true,
    image: '/images/cities/streamingtv.jpg',
  },
  {
    slug: 'players-missing-world-cup-2026',
    title: "The Legends Who Won't Be at FIFA World Cup 2026 — End of an Era",
    description: "From Karim Benzema to Luka Modric, these legendary footballers will not be playing at FIFA World Cup 2026. A farewell to icons who defined a generation.",
    category: 'Teams',
    date: 'May 12, 2026',
    readTime: '8 min read',
    featured: true,
    image: '/images/cities/fanzone.jpg',
  },
  {
    slug: 'world-cup-2026-fan-fest-locations',
    title: 'World Cup 2026 Fan Fest Locations — Watch Every Match for Free',
    description: "Can't get tickets? Official Fan Fests across all 16 host cities let you watch every game live on giant screens for free. Here's everything you need to know.",
    category: 'Fan Guides',
    date: 'May 10, 2026',
    readTime: '7 min read',
    featured: true,
    image: '/images/cities/fanzone.jpg',
  },
  {
    slug: 'how-to-watch-world-cup-2026',
    title: 'How to Watch FIFA World Cup 2026 — TV Channels & Streaming Guide',
    description: 'Complete guide to watching FIFA World Cup 2026 on TV and online. Every channel and streaming service in the USA, Canada, Mexico, UK and worldwide.',
    category: 'Fan Guides',
    date: 'May 10, 2026',
    readTime: '6 min read',
    featured: true,
    image: '/images/cities/streamingtv.jpg',
  },
];

const categories = ['All', 'Cities', 'Stadiums', 'Travel Tips', 'Tickets', 'Fan Guides', 'Teams'];

const categoryColors: Record<string, string> = {
  Cities: 'bg-blue-100 text-blue-700',
  Stadiums: 'bg-purple-100 text-purple-700',
  'Travel Tips': 'bg-green-100 text-green-700',
  Tickets: 'bg-orange-100 text-orange-700',
  'Fan Guides': 'bg-pink-100 text-pink-700',
  'Teams': 'bg-red-100 text-red-700',
};

export default function NewsFilter() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    const cat = searchParams.get('category') || 'All';
    setActiveCategory(cat);
  }, [searchParams]);

  const filtered =
    activeCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featured = filtered.filter((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured);

  return (
    <>
      {/* Category Pills */}
      <div className="flex gap-2 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeCategory === cat
                ? 'bg-navy text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-5xl mb-4">📰</p>
          <p className="text-lg font-semibold">No articles in this category yet.</p>
          <button
            onClick={() => setActiveCategory('All')}
            className="mt-4 text-gold font-semibold hover:underline"
          >
            View all articles →
          </button>
        </div>
      ) : (
        <>
          {/* Featured Articles */}
          {featured.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {featured.map((article) => (
                <Link
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="h-52 relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}>
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-xs bg-gold text-navy font-bold px-2 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-navy group-hover:text-gold transition-colors mb-3 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed">{article.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-gold font-semibold text-sm group-hover:gap-2 transition-all">
                      Read Article <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* More Articles */}
          {rest.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-navy mb-6">
                {featured.length > 0 ? 'More Articles' : 'Articles'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {rest.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/news/${article.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
                  >
                    <div className="h-36 relative overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}>
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-gray-400 mb-2">{article.date} · {article.readTime}</div>
                      <h3 className="font-bold text-navy group-hover:text-gold transition-colors leading-snug">
                        {article.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
