'use client';

import { useState } from 'react';
import Image from 'next/image';
import { allMatches, groups, groupTeams, rounds, type ScoreMatch } from '@/lib/scores';

// ISO 3166-1 alpha-2 codes for flagcdn.com
const teamFlagCode: Record<string, string> = {
  'Mexico': 'mx',
  'South Africa': 'za',
  'Korea Republic': 'kr',
  'Czechia': 'cz',
  'Canada': 'ca',
  'Switzerland': 'ch',
  'Qatar': 'qa',
  'Bosnia & Herzegovina': 'ba',
  'USA': 'us',
  'Paraguay': 'py',
  'Turkiye': 'tr',
  'Australia': 'au',
  'Iran': 'ir',
  'New Zealand': 'nz',
  'Belgium': 'be',
  'Egypt': 'eg',
  'Netherlands': 'nl',
  'Japan': 'jp',
  'Sweden': 'se',
  'Tunisia': 'tn',
  'Argentina': 'ar',
  'Austria': 'at',
  'Jordan': 'jo',
  'Algeria': 'dz',
  'France': 'fr',
  'Senegal': 'sn',
  'Norway': 'no',
  'Iraq': 'iq',
  'Brazil': 'br',
  'Morocco': 'ma',
  'Scotland': 'gb-sct',
  'Haiti': 'ht',
  'Ecuador': 'ec',
  'Germany': 'de',
  'Curaçao': 'cw',
  "Cote d'Ivoire": 'ci',
  'England': 'gb-eng',
  'Panama': 'pa',
  'Croatia': 'hr',
  'Ghana': 'gh',
  'Saudi Arabia': 'sa',
  'Uruguay': 'uy',
  'Cabo Verde': 'cv',
  'Spain': 'es',
  'Colombia': 'co',
  'Portugal': 'pt',
  'Congo DR': 'cd',
  'Uzbekistan': 'uz',
};

function TeamFlag({ name }: { name: string }) {
  const code = teamFlagCode[name];
  if (!code) {
    return <span className="text-3xl">🏳️</span>;
  }
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-12 h-8 rounded overflow-hidden shadow border border-gray-200 relative">
        <Image
          src={`https://flagcdn.com/w80/${code}.png`}
          alt={`${name} flag`}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    </div>
  );
}

const roundColors: Record<string, string> = {
  'Group Stage': 'bg-blue-100 text-blue-700',
  'Round of 32': 'bg-purple-100 text-purple-700',
  'Round of 16': 'bg-orange-100 text-orange-700',
  'Quarter-Final': 'bg-red-100 text-red-700',
  'Semi-Final': 'bg-pink-100 text-pink-700',
  'Third-Place': 'bg-gray-100 text-gray-700',
  'Final': 'bg-gold/20 text-yellow-700',
};

function MatchCard({ match }: { match: ScoreMatch }) {
  const isFinished = match.status === 'finished';
  const isTBD = match.home === 'TBD';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-4">
      {/* Top meta */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          {match.group && (
            <span className="text-xs font-bold bg-navy text-white px-2 py-0.5 rounded-full">
              Group {match.group}
            </span>
          )}
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${roundColors[match.round] || 'bg-gray-100 text-gray-600'}`}>
            {match.round}
          </span>
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isFinished ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
          {isFinished ? 'Full Time' : 'Upcoming'}
        </span>
      </div>

      {/* Teams & Score */}
      <div className="flex items-center justify-between gap-2">
        {/* Home */}
        <div className="flex-1 flex flex-col items-center text-center gap-1.5">
          <TeamFlag name={match.home} />
          <span className={`text-sm font-bold ${isFinished && match.homeScore! > match.awayScore! ? 'text-navy' : 'text-gray-700'}`}>
            {match.home}
          </span>
        </div>

        {/* Score / VS */}
        <div className="flex flex-col items-center min-w-[72px]">
          {isFinished ? (
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-navy">{match.homeScore}</span>
              <span className="text-xl text-gray-400 font-light">–</span>
              <span className="text-3xl font-black text-navy">{match.awayScore}</span>
            </div>
          ) : (
            <span className="text-2xl font-black text-gray-300">{isTBD ? '?' : 'vs'}</span>
          )}
          <span className="text-xs text-gray-400 mt-1">{match.time}</span>
        </div>

        {/* Away */}
        <div className="flex-1 flex flex-col items-center text-center gap-1.5">
          <TeamFlag name={match.away} />
          <span className={`text-sm font-bold ${isFinished && match.awayScore! > match.homeScore! ? 'text-navy' : 'text-gray-700'}`}>
            {match.away}
          </span>
        </div>
      </div>

      {/* Bottom meta */}
      <div className="mt-3 pt-3 border-t border-gray-50 text-center text-xs text-gray-400">
        📅 {match.date} &nbsp;·&nbsp; 🏟️ {match.stadium} &nbsp;·&nbsp; 📍 {match.city}
      </div>
    </div>
  );
}

export default function ScoresFilter() {
  const [activeRound, setActiveRound] = useState('All');
  const [activeGroup, setActiveGroup] = useState('All');

  const filtered = allMatches.filter((m) => {
    if (activeRound === 'All') return true;
    if (activeRound === 'Group Stage') {
      if (m.round !== 'Group Stage') return false;
      if (activeGroup !== 'All') return m.group === activeGroup;
      return true;
    }
    return m.round === activeRound;
  });

  const finished = filtered.filter((m) => m.status === 'finished');
  const upcoming = filtered.filter((m) => m.status === 'upcoming');

  return (
    <>
      {/* ── Round filter ── */}
      <div className="flex gap-2 flex-wrap mb-4">
        {rounds.map((r) => (
          <button
            key={r}
            onClick={() => { setActiveRound(r); setActiveGroup('All'); }}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
              activeRound === r
                ? 'bg-navy text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* ── Group sub-filter (only when Group Stage active) ── */}
      {activeRound === 'Group Stage' && (
        <div className="flex gap-2 flex-wrap mb-8">
          <button
            onClick={() => setActiveGroup('All')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
              activeGroup === 'All' ? 'bg-gold text-navy' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Groups
          </button>
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setActiveGroup(g)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                activeGroup === g ? 'bg-gold text-navy' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Group {g}
              <span className="ml-1 text-gray-400 font-normal hidden sm:inline">
                · {groupTeams[g].join(', ')}
              </span>
            </button>
          ))}
        </div>
      )}

      {activeRound !== 'Group Stage' && <div className="mb-8" />}

      {/* ── Results ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-5xl mb-4">⚽</p>
          <p className="text-lg font-semibold">No matches found.</p>
        </div>
      ) : (
        <>
          {/* Finished */}
          {finished.length > 0 && (
            <div className="mb-10">
              <h2 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                Results ({finished.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {finished.map((m) => <MatchCard key={m.id} match={m} />)}
              </div>
            </div>
          )}

          {/* Upcoming */}
          {upcoming.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
                Upcoming ({upcoming.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {upcoming.map((m) => <MatchCard key={m.id} match={m} />)}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
