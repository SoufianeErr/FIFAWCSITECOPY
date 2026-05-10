import type { WeatherData } from '@/lib/cities';

interface WeatherWidgetProps {
  cityName: string;
  june: WeatherData;
  july: WeatherData;
}

export default function WeatherWidget({ cityName, june, july }: WeatherWidgetProps) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-navy mb-2">
        Weather in {cityName} During the World Cup
      </h2>
      <p className="text-gray-600 mb-6 text-sm">
        Average temperatures and rainfall for June–July 2026 (World Cup period)
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <WeatherCard month="June 2026" data={june} icon="☀️" />
        <WeatherCard month="July 2026" data={july} icon="🌤️" />
      </div>

      <div className="mt-4 p-4 bg-white/70 rounded-xl text-sm text-gray-600">
        <p className="font-medium text-navy mb-1">Travel Tip</p>
        <p>{june.description}</p>
      </div>
    </section>
  );
}

function WeatherCard({ month, data, icon }: { month: string; data: WeatherData; icon: string }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-navy text-lg">{month}</h3>
        <span className="text-3xl">{icon}</span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <span>🌡️</span> High
          </span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-red-500">{data.avgHigh}°C</span>
            <span className="text-gray-400 text-xs">({Math.round(data.avgHigh * 9 / 5 + 32)}°F)</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <span>🌡️</span> Low
          </span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-500">{data.avgLow}°C</span>
            <span className="text-gray-400 text-xs">({Math.round(data.avgLow * 9 / 5 + 32)}°F)</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <span>🌧️</span> Rainfall
          </span>
          <span className="font-bold text-blue-400">{data.rainfall}mm</span>
        </div>

        <div className="pt-2 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <TemperatureBar high={data.avgHigh} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TemperatureBar({ high }: { high: number }) {
  const maxTemp = 40;
  const percentage = Math.min((high / maxTemp) * 100, 100);
  const color =
    high < 20 ? 'bg-blue-400' : high < 28 ? 'bg-green-400' : high < 34 ? 'bg-yellow-400' : 'bg-red-400';

  return (
    <div className="w-full">
      <div className="text-xs text-gray-400 mb-1">Temperature comfort</div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>0°C</span>
        <span>Cool</span>
        <span>Hot</span>
        <span>40°C</span>
      </div>
    </div>
  );
}
