'use client';

import { useEffect, useRef } from 'react';
import type { Map as LeafletMap } from 'leaflet';
import type { City } from '@/lib/cities';

interface InteractiveMapProps {
  cities: City[];
  centerLat?: number;
  centerLng?: number;
  zoom?: number;
  singleCity?: boolean;
}

const countryColors: Record<string, string> = {
  USA: '#2563EB',
  Canada: '#DC2626',
  Mexico: '#16A34A',
};

export default function InteractiveMap({
  cities,
  centerLat = 30,
  centerLng = -95,
  zoom = 3,
  singleCity = false,
}: InteractiveMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // If a map is already attached to this DOM node, destroy it first.
    // This handles React StrictMode's double-invoke and fast-refresh re-mounts.
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    let cancelled = false;

    const initMap = async () => {
      const L = (await import('leaflet')).default;

      // Guard: component may have unmounted while the dynamic import was in-flight
      if (cancelled || !containerRef.current) return;

      // Guard: Leaflet stamps _leaflet_id on the container when it initialises.
      // If somehow a stale instance left it behind, clear it so L.map() won't throw.
      const el = containerRef.current as HTMLDivElement & { _leaflet_id?: number };
      if (el._leaflet_id) {
        delete el._leaflet_id;
      }

      // Fix default icon paths broken by webpack bundling
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(containerRef.current, {
        center: [centerLat, centerLng],
        zoom,
        zoomControl: true,
        scrollWheelZoom: !singleCity,
      });

      mapRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      cities.forEach((city) => {
        const color = countryColors[city.country] ?? '#6B7280';

        const icon = L.divIcon({
          html: `<div style="
            width:36px;height:36px;
            background:${color};
            border:3px solid white;
            border-radius:50%;
            box-shadow:0 2px 8px rgba(0,0,0,.4);
            display:flex;align-items:center;justify-content:center;
            font-size:14px;cursor:pointer;">⚽</div>`,
          className: '',
          iconSize: [36, 36],
          iconAnchor: [18, 18],
          popupAnchor: [0, -20],
        });

        const popup = `
          <div style="min-width:200px;font-family:system-ui,sans-serif;">
            <div style="background:#0A1628;color:white;padding:10px 14px;margin:-14px -14px 10px;border-radius:4px 4px 0 0;">
              <strong style="font-size:14px;">${city.countryFlag} ${city.fullName}</strong>
            </div>
            <p style="margin:0 0 4px;font-size:13px;color:#374151;">🏟️ ${city.stadium}</p>
            <p style="margin:0 0 4px;font-size:13px;color:#374151;">👥 ${city.capacity.toLocaleString('en-US')} capacity</p>
            <p style="margin:0 0 10px;font-size:13px;color:#374151;">⚽ ${city.matchCount} matches</p>
            <a href="/cities/${city.slug}" style="
              display:block;text-align:center;
              background:#C9A84C;color:#0A1628;
              padding:6px 12px;border-radius:6px;
              text-decoration:none;font-weight:700;font-size:13px;">
              View Full Guide →
            </a>
          </div>`;

        L.marker([city.lat, city.lng], { icon })
          .addTo(map)
          .bindPopup(popup, { maxWidth: 250 });
      });
    };

    initMap();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  // Re-run only when the data actually changes, not on every render
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [centerLat, centerLng, zoom, singleCity, cities.map((c) => c.slug).join(',')]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200"
        style={{ height: singleCity ? '350px' : '500px' }}
        aria-label="Interactive map of FIFA World Cup 2026 host cities"
      />
      {!singleCity && (
        <div className="absolute bottom-4 left-4 z-[1000] flex gap-2 flex-wrap">
          {Object.entries(countryColors).map(([country, color]) => (
            <div
              key={country}
              className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow text-xs font-semibold"
            >
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
              {country === 'USA' ? '🇺🇸' : country === 'Canada' ? '🇨🇦' : '🇲🇽'} {country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
