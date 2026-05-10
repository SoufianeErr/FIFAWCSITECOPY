'use client';

import { useState, useMemo } from 'react';
import CityCard from './CityCard';
import type { City } from '@/lib/cities';

type Country = 'All' | 'USA' | 'Canada' | 'Mexico';

interface CityFilterProps {
  cities: City[];
}

export default function CityFilter({ cities }: CityFilterProps) {
  const [activeCountry, setActiveCountry] = useState<Country>('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return cities.filter((city) => {
      const matchesCountry = activeCountry === 'All' || city.country === activeCountry;
      const matchesSearch =
        search.trim() === '' ||
        city.name.toLowerCase().includes(search.toLowerCase()) ||
        city.stadium.toLowerCase().includes(search.toLowerCase());
      return matchesCountry && matchesSearch;
    });
  }, [cities, activeCountry, search]);

  const countries: Country[] = ['All', 'USA', 'Canada', 'Mexico'];

  const countLabels: Record<Country, number> = {
    All: cities.length,
    USA: cities.filter((c) => c.country === 'USA').length,
    Canada: cities.filter((c) => c.country === 'Canada').length,
    Mexico: cities.filter((c) => c.country === 'Mexico').length,
  };

  const buttonColors: Record<Country, string> = {
    All: 'bg-navy text-white',
    USA: 'bg-blue-600 text-white',
    Canada: 'bg-red-600 text-white',
    Mexico: 'bg-green-600 text-white',
  };

  const inactiveColors: Record<Country, string> = {
    All: 'bg-white text-navy border border-navy/20 hover:border-navy',
    USA: 'bg-white text-blue-600 border border-blue-200 hover:border-blue-600',
    Canada: 'bg-white text-red-600 border border-red-200 hover:border-red-600',
    Mexico: 'bg-white text-green-600 border border-green-200 hover:border-green-600',
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1 max-w-xs">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search cities or stadiums..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
          />
        </div>

        {/* Country Filters */}
        <div className="flex gap-2 flex-wrap">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setActiveCountry(country)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCountry === country ? buttonColors[country] : inactiveColors[country]
              }`}
            >
              {country === 'All' ? '🌎' : country === 'USA' ? '🇺🇸' : country === 'Canada' ? '🇨🇦' : '🇲🇽'}{' '}
              {country}
              <span className="ml-1 opacity-70">({countLabels[country]})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      {(activeCountry !== 'All' || search) && (
        <p className="text-sm text-gray-500 mb-4">
          Showing {filtered.length} of {cities.length} host cities
          {activeCountry !== 'All' ? ` in ${activeCountry}` : ''}
          {search ? ` matching "${search}"` : ''}
        </p>
      )}

      {/* City Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-2xl mb-2">🔍</p>
          <p className="font-medium">No cities found</p>
          <p className="text-sm">Try a different search term or filter</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
      )}
    </div>
  );
}
