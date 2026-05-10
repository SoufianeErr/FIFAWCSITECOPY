import Link from 'next/link';
import type { City } from '@/lib/cities';
import ImageWithFallback from './ImageWithFallback';

interface CityCardProps {
  city: City;
}

const countryColors: Record<string, string> = {
  USA: 'bg-blue-100 text-blue-700',
  Canada: 'bg-red-100 text-red-700',
  Mexico: 'bg-green-100 text-green-700',
};

export default function CityCard({ city }: CityCardProps) {
  return (
    <Link
      href={`/cities/${city.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={city.imagePath}
          alt={`${city.fullName} FIFA World Cup 2026 — ${city.stadium}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          country={city.country}
          label={city.fullName}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${countryColors[city.country]}`}
          >
            {city.countryFlag} {city.country}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 bg-gold text-navy text-xs font-bold px-2 py-1 rounded-full">
          {city.matchCount} matches
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors mb-1">
          {city.fullName}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{city.stadium}</p>

        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="text-lg font-bold text-navy">
              {city.capacity.toLocaleString('en-US')}
            </div>
            <div className="text-xs text-gray-400">Capacity</div>
          </div>
          <div className="h-8 w-px bg-gray-200" />
          <div className="text-center">
            <div className="text-lg font-bold text-navy">{city.matchCount}</div>
            <div className="text-xs text-gray-400">Matches</div>
          </div>
          <div className="h-8 w-px bg-gray-200" />
          <div className="text-center">
            <div className="text-sm font-bold text-navy">{city.country}</div>
            <div className="text-xs text-gray-400">Country</div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-4">
        <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold group-hover:gap-2 transition-all">
          View Guide
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
