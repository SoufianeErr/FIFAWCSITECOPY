import Link from 'next/link';
import Image from 'next/image';
import { cities } from '@/lib/cities';

const usaCities = cities.filter((c) => c.country === 'USA');
const canadaCities = cities.filter((c) => c.country === 'Canada');
const mexicoCities = cities.filter((c) => c.country === 'Mexico');

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <Image
                src="/images/cities/logo.png"
                alt="FIFA World Cup 2026 Guide Logo"
                width={72}
                height={72}
                className="object-contain"
              />
              <div>
                <div className="text-white font-black text-sm">FIFA World Cup 2026</div>
                <div className="text-gold text-xs">Host Cities & Stadiums Guide</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Your complete guide to the FIFA World Cup 2026. Covering all 16 host cities across the USA,
              Canada, and Mexico — stadiums, tickets, travel tips, and more.
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 5.98zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* USA Cities */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              🇺🇸 USA Cities
            </h3>
            <ul className="space-y-2">
              {usaCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/cities/${city.slug}`}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Canada & Mexico Cities */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              🇨🇦 Canada
            </h3>
            <ul className="space-y-2 mb-6">
              {canadaCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/cities/${city.slug}`}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              🇲🇽 Mexico
            </h3>
            <ul className="space-y-2">
              {mexicoCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/cities/${city.slug}`}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/cities', label: 'All Host Cities' },
                { href: '/news', label: 'News & Articles' },
                { href: '/news/how-to-get-tickets', label: 'Tickets Guide' },
                { href: '/news/travel-guide-usa', label: 'Travel Guide' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
                { href: '/sitemap', label: 'Site Map' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left" suppressHydrationWarning>
            © {new Date().getFullYear()} FIFA World Cup 2026 Guide. This is an independent fan guide.
            Not affiliated with FIFA or any official tournament organizer.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/about" className="hover:text-gold transition-colors">
              About
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-gold transition-colors">
              Contact
            </Link>
            <span>·</span>
            <Link href="/sitemap" className="hover:text-gold transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
