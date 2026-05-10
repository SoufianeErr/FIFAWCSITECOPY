import Link from 'next/link';
import type { StadiumDetail } from '@/lib/stadiums';

interface StadiumCardProps {
  stadium: StadiumDetail;
  rank: number;
}

const countryColors: Record<string, string> = {
  USA: 'bg-blue-100 text-blue-700',
  Canada: 'bg-red-100 text-red-700',
  Mexico: 'bg-green-100 text-green-700',
};

const maxCapacity = 87523;

export default function StadiumCard({ stadium, rank }: StadiumCardProps) {
  const barWidth = Math.round((stadium.capacity / maxCapacity) * 100);

  return (
    <Link
      href={`/stadiums/${stadium.slug}`}
      className="group block bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold/30"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy text-white font-bold text-lg flex items-center justify-center">
          {rank}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-bold text-navy group-hover:text-gold transition-colors text-lg leading-tight">
              {stadium.name}
            </h3>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${countryColors[stadium.country]}`}>
              {stadium.country}
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-3">{stadium.cityName}</p>

          {/* Capacity bar */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-400">Capacity</span>
              <span className="text-sm font-bold text-navy">{stadium.capacity.toLocaleString('en-US')}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-gold to-yellow-400 rounded-full"
                style={{ width: `${barWidth}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
            <span>🏗️ Built {stadium.yearBuilt}</span>
            <span>🌿 {stadium.surface}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
