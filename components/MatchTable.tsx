'use client';

import { useState } from 'react';
import type { Match } from '@/lib/cities';

interface MatchTableProps {
  matches: Match[];
  cityName: string;
  stadiumName: string;
}

const roundColors: Record<string, string> = {
  'Opening Match': 'bg-yellow-100 text-yellow-800 border border-yellow-300',
  'Group Stage': 'bg-blue-100 text-blue-700',
  'Round of 32': 'bg-purple-100 text-purple-700',
  'Round of 16': 'bg-orange-100 text-orange-700',
  'Quarter-Final': 'bg-red-100 text-red-700',
  'Semi-Final': 'bg-pink-100 text-pink-700',
  FINAL: 'bg-gold/20 text-yellow-800 font-bold border border-gold',
};

export default function MatchTable({ matches, cityName, stadiumName }: MatchTableProps) {
  const [sortBy, setSortBy] = useState<'date' | 'round'>('date');

  const sorted = [...matches].sort((a, b) => {
    if (sortBy === 'date') return new Date(a.date).getTime() - new Date(b.date).getTime();
    return a.round.localeCompare(b.round);
  });

  return (
    <section className="my-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-2xl font-bold text-navy">
          Match Schedule at {stadiumName}
        </h2>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Sort by:</span>
          <button
            onClick={() => setSortBy('date')}
            className={`px-3 py-1 rounded-full transition-colors ${sortBy === 'date' ? 'bg-navy text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            Date
          </button>
          <button
            onClick={() => setSortBy('round')}
            className={`px-3 py-1 rounded-full transition-colors ${sortBy === 'round' ? 'bg-navy text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            Round
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left px-4 py-3 font-semibold">Date</th>
              <th className="text-left px-4 py-3 font-semibold">Round</th>
              <th className="text-left px-4 py-3 font-semibold">Teams</th>
              <th className="text-left px-4 py-3 font-semibold">Time (ET)</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((match, index) => (
              <tr
                key={index}
                className={`border-t border-gray-100 ${match.round === 'FINAL' ? 'bg-gold/10' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <td className="px-4 py-3 font-medium text-navy whitespace-nowrap">{match.date}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${roundColors[match.round] || 'bg-gray-100 text-gray-700'}`}>
                    {match.round}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{match.teams}</td>
                <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{match.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-400 mt-3">
        * Match times are subject to change. All times shown in Eastern Time (ET). {cityName} is hosting {matches.length} FIFA World Cup 2026 matches.
      </p>
    </section>
  );
}
