import type { Metadata } from 'next';
import Link from 'next/link';
import { cities } from '@/lib/cities';
import { stadiums } from '@/lib/stadiums';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Sitemap — FIFA World Cup 2026 Guide',
  description: 'Complete sitemap of all pages on the FIFA World Cup 2026 Host Cities & Stadiums Guide.',
  path: '/sitemap',
});

const newsArticles = [
  { slug: 'best-host-cities-2026', title: 'Best Host Cities to Visit for FIFA World Cup 2026' },
  { slug: 'how-to-get-tickets', title: 'How to Get Tickets for FIFA World Cup 2026' },
  { slug: 'biggest-stadiums-ranked', title: 'Biggest Stadiums at FIFA World Cup 2026 Ranked' },
  { slug: 'travel-guide-usa', title: 'Travel Guide: USA for FIFA World Cup 2026 Fans' },
  { slug: 'mexico-city-vs-los-angeles', title: 'Mexico City vs Los Angeles: Which City to Visit?' },
];

export default function SitemapPage() {
  const usaCities = cities.filter((c) => c.country === 'USA');
  const canadaCities = cities.filter((c) => c.country === 'Canada');
  const mexicoCities = cities.filter((c) => c.country === 'Mexico');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs items={[{ name: 'Sitemap', href: '/sitemap' }]} />

      <h1 className="text-4xl font-black text-navy mb-8">HTML Sitemap</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Main Pages */}
        <section>
          <h2 className="text-xl font-bold text-navy border-b border-gold pb-2 mb-4">Main Pages</h2>
          <ul className="space-y-2">
            {[
              { href: '/', label: 'Home — FIFA World Cup 2026 Guide' },
              { href: '/cities', label: 'All 16 Host Cities' },
              { href: '/news', label: 'News & Travel Guides' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact Us' },
              { href: '/privacy-policy', label: 'Privacy Policy' },
            ].map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="text-gray-600 hover:text-gold transition-colors text-sm">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* News */}
        <section>
          <h2 className="text-xl font-bold text-navy border-b border-gold pb-2 mb-4">News & Articles</h2>
          <ul className="space-y-2">
            {newsArticles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/news/${article.slug}`}
                  className="text-gray-600 hover:text-gold transition-colors text-sm"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* USA Cities */}
        <section>
          <h2 className="text-xl font-bold text-navy border-b border-gold pb-2 mb-4">
            🇺🇸 USA Host Cities
          </h2>
          <ul className="space-y-2">
            {usaCities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/cities/${city.slug}`}
                  className="text-gray-600 hover:text-gold transition-colors text-sm"
                >
                  {city.fullName} — {city.stadium}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Canada & Mexico Cities */}
        <section>
          <h2 className="text-xl font-bold text-navy border-b border-gold pb-2 mb-4">
            🇨🇦 Canada & 🇲🇽 Mexico Host Cities
          </h2>
          <ul className="space-y-2">
            {[...canadaCities, ...mexicoCities].map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/cities/${city.slug}`}
                  className="text-gray-600 hover:text-gold transition-colors text-sm"
                >
                  {city.countryFlag} {city.fullName} — {city.stadium}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Stadiums */}
        <section className="md:col-span-2">
          <h2 className="text-xl font-bold text-navy border-b border-gold pb-2 mb-4">
            🏟️ Stadium Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {stadiums.map((stadium) => (
              <Link
                key={stadium.slug}
                href={`/stadiums/${stadium.slug}`}
                className="text-gray-600 hover:text-gold transition-colors text-sm"
              >
                {stadium.name} ({stadium.cityName})
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
