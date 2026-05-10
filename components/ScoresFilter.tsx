'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { allMatches, groups, groupTeams, rounds, type ScoreMatch } from '@/lib/scores';

// ─── Timezones ────────────────────────────────────────────────────────────────
const TIMEZONES = [
  { label: 'ET — New York',         tz: 'America/New_York' },
  { label: 'CT — Chicago',          tz: 'America/Chicago' },
  { label: 'MT — Denver',           tz: 'America/Denver' },
  { label: 'PT — Los Angeles',      tz: 'America/Los_Angeles' },
  { label: 'AKT — Anchorage',       tz: 'America/Anchorage' },
  { label: 'HT — Honolulu',         tz: 'Pacific/Honolulu' },
  { label: 'BRT — São Paulo',       tz: 'America/Sao_Paulo' },
  { label: 'GMT — London',          tz: 'Europe/London' },
  { label: 'CET — Paris / Madrid',  tz: 'Europe/Paris' },
  { label: 'EET — Athens / Cairo',  tz: 'Europe/Athens' },
  { label: 'MSK — Moscow',          tz: 'Europe/Moscow' },
  { label: 'GST — Dubai',           tz: 'Asia/Dubai' },
  { label: 'IST — India',           tz: 'Asia/Kolkata' },
  { label: 'ICT — Bangkok',         tz: 'Asia/Bangkok' },
  { label: 'CST — Beijing',         tz: 'Asia/Shanghai' },
  { label: 'JST — Tokyo / Seoul',   tz: 'Asia/Tokyo' },
  { label: 'AEST — Sydney',         tz: 'Australia/Sydney' },
  { label: 'NZST — Auckland',       tz: 'Pacific/Auckland' },
];

// Month name → 0-based index
const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4,  Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

// All times in lib/scores.ts are stored as EDT (UTC-4, active Jun–Jul 2026)
function parseToUTC(dateStr: string, timeStr: string): Date | null {
  if (!timeStr || timeStr === 'TBD') return null;
  const tm = timeStr.match(/^(\d+):(\d+)\s+(AM|PM)\s+ET$/);
  const dm = dateStr.match(/^(\w{3})\s+(\d+),\s+(\d+)$/);
  if (!tm || !dm) return null;

  let h = parseInt(tm[1]);
  const m = parseInt(tm[2]);
  const ampm = tm[3];
  if (ampm === 'PM' && h !== 12) h += 12;
  if (ampm === 'AM' && h === 12) h = 0;

  const month = MONTHS[dm[1]];
  const day   = parseInt(dm[2]);
  const year  = parseInt(dm[3]);

  // EDT = UTC-4 → add 4 hours to get UTC
  return new Date(Date.UTC(year, month, day, h + 4, m));
}

function formatInTZ(date: Date, tz: string): string {
  return new Intl.DateTimeFormat('en-US', {
    hour:         'numeric',
    minute:       '2-digit',
    timeZone:     tz,
    timeZoneName: 'short',
  }).format(date);
}

// ─── Flag badges ──────────────────────────────────────────────────────────────
const teamFlagCode: Record<string, string> = {
  'Mexico': 'mx', 'South Africa': 'za', 'Korea Republic': 'kr', 'Czechia': 'cz',
  'Canada': 'ca', 'Switzerland': 'ch', 'Qatar': 'qa', 'Bosnia & Herzegovina': 'ba',
  'USA': 'us', 'Paraguay': 'py', 'Turkiye': 'tr', 'Australia': 'au',
  'Iran': 'ir', 'New Zealand': 'nz', 'Belgium': 'be', 'Egypt': 'eg',
  'Netherlands': 'nl', 'Japan': 'jp', 'Sweden': 'se', 'Tunisia': 'tn',
  'Argentina': 'ar', 'Austria': 'at', 'Jordan': 'jo', 'Algeria': 'dz',
  'France': 'fr', 'Senegal': 'sn', 'Norway': 'no', 'Iraq': 'iq',
  'Brazil': 'br', 'Morocco': 'ma', 'Scotland': 'gb-sct', 'Haiti': 'ht',
  'Ecuador': 'ec', 'Germany': 'de', 'Curaçao': 'cw', "Cote d'Ivoire": 'ci',
  'England': 'gb-eng', 'Panama': 'pa', 'Croatia': 'hr', 'Ghana': 'gh',
  'Saudi Arabia': 'sa', 'Uruguay': 'uy', 'Cabo Verde': 'cv', 'Spain': 'es',
  'Colombia': 'co', 'Portugal': 'pt', 'Congo DR': 'cd', 'Uzbekistan': 'uz',
};

function TeamFlag({ name }: { name: string }) {
  const code = teamFlagCode[name];
  if (!code) return <span className="text-3xl">🏳️</span>;
  return (
    <div className="w-12 h-8 rounded overflow-hidden shadow border border-gray-200 relative">
      <Image
        src={`https://flagcdn.com/w80/${code}.png`}
        alt={`${name} flag`}
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  );
}

// ─── Round / category colours ─────────────────────────────────────────────────
const roundColors: Record<string, string> = {
  'Group Stage':   'bg-blue-100 text-blue-700',
  'Round of 32':   'bg-purple-100 text-purple-700',
  'Round of 16':   'bg-orange-100 text-orange-700',
  'Quarter-Final': 'bg-red-100 text-red-700',
  'Semi-Final':    'bg-pink-100 text-pink-700',
  'Third-Place':   'bg-gray-100 text-gray-700',
  'Final':         'bg-gold/20 text-yellow-700',
};

// ─── Match card ───────────────────────────────────────────────────────────────
function MatchCard({ match, timezone }: { match: ScoreMatch; timezone: string }) {
  const isFinished = match.status === 'finished';
  const isTBD      = match.home === 'TBD';

  const utcDate   = parseToUTC(match.date, match.time);
  const localTime = utcDate ? formatInTZ(utcDate, timezone) : match.time;

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
          <span className={`text-sm font-bold leading-tight ${isFinished && match.homeScore! > match.awayScore! ? 'text-navy' : 'text-gray-700'}`}>
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
          <span className="text-xs text-gray-400 mt-1 text-center">{localTime}</span>
        </div>

        {/* Away */}
        <div className="flex-1 flex flex-col items-center text-center gap-1.5">
          <TeamFlag name={match.away} />
          <span className={`text-sm font-bold leading-tight ${isFinished && match.awayScore! > match.homeScore! ? 'text-navy' : 'text-gray-700'}`}>
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

// ─── Main filter component ────────────────────────────────────────────────────
export default function ScoresFilter() {
  const [activeRound,    setActiveRound]    = useState('All');
  const [activeGroup,    setActiveGroup]    = useState('All');
  const [timezone,       setTimezone]       = useState('America/New_York');
  const [tzDetected,     setTzDetected]     = useState(false);

  // Auto-detect user's timezone on mount
  useEffect(() => {
    try {
      const detected = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (detected) {
        setTimezone(detected);
        setTzDetected(true);
      }
    } catch {}
  }, []);

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

  // Find the label for the currently selected timezone
  const currentTZLabel =
    TIMEZONES.find((t) => t.tz === timezone)?.label ??
    timezone.replace('_', ' ').split('/').pop();

  return (
    <>
      {/* ── Timezone switcher ── */}
      <div className="flex items-center gap-3 mb-6 bg-gray-50 rounded-2xl px-4 py-3 flex-wrap">
        <div className="flex items-center gap-2 text-sm font-semibold text-navy">
          <span className="text-lg">🌍</span>
          Your Timezone
          {tzDetected && (
            <span className="text-xs font-normal text-gray-400">(auto-detected)</span>
          )}
        </div>
        <select
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          className="flex-1 min-w-[220px] bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm font-medium text-navy focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
        >
          {/* Show detected timezone at top if not in list */}
          {!TIMEZONES.find((t) => t.tz === timezone) && tzDetected && (
            <option value={timezone}>🔍 {currentTZLabel} (detected)</option>
          )}
          {TIMEZONES.map((t) => (
            <option key={t.tz} value={t.tz}>
              {t.label}
            </option>
          ))}
        </select>
        <p className="text-xs text-gray-400 w-full sm:w-auto">
          All times shown in <span className="font-semibold text-navy">{currentTZLabel}</span>
        </p>
      </div>

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

      {/* ── Group sub-filter ── */}
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

      {/* ── Match list ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-5xl mb-4">⚽</p>
          <p className="text-lg font-semibold">No matches found.</p>
        </div>
      ) : (
        <>
          {finished.length > 0 && (
            <div className="mb-10">
              <h2 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                Results ({finished.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {finished.map((m) => <MatchCard key={m.id} match={m} timezone={timezone} />)}
              </div>
            </div>
          )}

          {upcoming.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
                Upcoming ({upcoming.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {upcoming.map((m) => <MatchCard key={m.id} match={m} timezone={timezone} />)}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
