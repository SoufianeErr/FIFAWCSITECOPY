import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'About — FIFA World Cup 2026 Host Cities & Stadiums Guide',
  description:
    'About our FIFA World Cup 2026 guide. Independent fan resource covering all 16 host cities across the USA, Canada, and Mexico with travel tips, stadium info, and more.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />

      <h1 className="text-4xl font-black text-navy mb-6">About This Guide</h1>

      <div className="prose prose-lg max-w-none">
        <p>
          Welcome to the <strong>FIFA World Cup 2026 Host Cities & Stadiums Guide</strong> — your independent, comprehensive resource for everything you need to know about attending, planning, and experiencing the biggest sporting event on Earth.
        </p>

        <h2>Our Mission</h2>
        <p>
          The 2026 FIFA World Cup is historic — the first tournament held across three nations simultaneously, spanning 16 cities from Vancouver to Mexico City, from Seattle to Miami. With 48 teams, 104 matches, and hundreds of thousands of international visitors, it will be the most complex World Cup ever organized.
        </p>
        <p>
          Our mission is simple: <strong>help every fan plan the perfect World Cup trip</strong>. Whether you're traveling from Europe, South America, Asia, or just across state lines, we want you to feel prepared, informed, and excited.
        </p>

        <h2>What We Cover</h2>
        <ul>
          <li><strong>All 16 host cities</strong> — complete guides with stadium info, transport, hotels, and attractions</li>
          <li><strong>Stadium information</strong> — capacity, seating charts, history, and facilities</li>
          <li><strong>Travel tips</strong> — visas, transport between cities, accommodation advice</li>
          <li><strong>Tickets</strong> — how to buy official tickets, what to expect, and pricing</li>
          <li><strong>Match schedules</strong> — dates, times, and round information for all venues</li>
          <li><strong>Food & culture</strong> — making the most of each host city beyond the matches</li>
        </ul>

        <h2>Disclaimer</h2>
        <p>
          This is an <strong>independent fan guide</strong> and is not affiliated with or endorsed by FIFA, the United States Soccer Federation, Canada Soccer, the Mexican Football Federation, or any official tournament organization. All match schedules and information are provided for planning purposes and may change. For official information, visit <a href="https://www.fifa.com" target="_blank" rel="noopener noreferrer">FIFA.com</a>.
        </p>

        <h2>Advertising</h2>
        <p>
          This site is supported by advertising through Google AdSense and may contain affiliate links to hotels and travel services. These relationships allow us to provide free content. Affiliate links are marked and all recommendations are independent.
        </p>

        <h2>Travel Tips — Quick Reference</h2>
        <p>
          Planning a multi-city World Cup trip? Here are some key tips:
        </p>
        <ul>
          <li>Book accommodation <strong>12–18 months in advance</strong> — hotel prices in host cities will be significantly elevated during the tournament</li>
          <li>Consider buying a <strong>pass for multiple matches</strong> rather than booking individual games</li>
          <li>Flying between US cities on budget carriers (Southwest, Spirit, Frontier) can save significant money</li>
          <li>Mexico City and Guadalajara are best connected by <strong>direct flights</strong> from US cities</li>
          <li>Vancouver and Toronto are best connected to US cities via <strong>cross-border coaches</strong> as well as flights</li>
        </ul>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/cities" className="btn-primary">
          Explore All 16 Cities →
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
