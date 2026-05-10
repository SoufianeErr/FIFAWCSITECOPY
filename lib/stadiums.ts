import { cities } from './cities';

export interface StadiumDetail {
  slug: string;
  name: string;
  citySlug: string;
  cityName: string;
  country: string;
  capacity: number;
  surface: string;
  yearBuilt: number;
  architect: string;
  nflTeam: string;
  lat: number;
  lng: number;
  overview: string;
  recordAttendance: string;
  worldCupHistory: string;
  seatingDescription: string;
  virtualTourEmbed: string;
  features: string[];
}

export const stadiums: StadiumDetail[] = cities.map((city) => ({
  slug: city.stadiumSlug,
  name: city.stadium,
  citySlug: city.slug,
  cityName: city.fullName,
  country: city.country,
  capacity: city.capacity,
  surface: city.surface,
  yearBuilt: city.yearBuilt,
  architect: city.architect,
  nflTeam: city.nflTeam,
  lat: city.lat,
  lng: city.lng,
  overview: city.stadiumOverview,
  recordAttendance: getRecordAttendance(city.stadiumSlug),
  worldCupHistory: getWorldCupHistory(city.stadiumSlug),
  seatingDescription: getSeatingDescription(city.stadiumSlug),
  virtualTourEmbed: '',
  features: getFeatures(city.stadiumSlug),
}));

function getRecordAttendance(slug: string): string {
  const records: Record<string, string> = {
    'metlife-stadium': '89,242 — Super Bowl XLVIII (February 2014)',
    'sofi-stadium': '76,500 — Super Bowl LVI (February 2022)',
    'att-stadium': '105,121 — NBA All-Star Game (February 2010)',
    'levis-stadium': '72,589 — Super Bowl 50 (February 2016)',
    'hard-rock-stadium': '79,534 — Super Bowl XLIV (February 2010)',
    'mercedes-benz-stadium': '75,740 — College Football Playoff (January 2018)',
    'lumen-field': '68,385 — NFL regular season game (2014)',
    'arrowhead-stadium': '82,893 — NFL regular season game (2014)',
    'gillette-stadium': '68,756 — New England Patriots vs. Baltimore Ravens (2009)',
    'lincoln-financial-field': '70,107 — Philadelphia Eagles vs. Dallas Cowboys (2014)',
    'nrg-stadium': '72,278 — Super Bowl LI (February 2017)',
    'estadio-azteca': '114,600 — 1970 FIFA World Cup Final (Brazil vs. Italy)',
    'estadio-akron': '49,850 — Liga MX matches',
    'estadio-bbva': '53,500 — Liga MX matches',
    'bmo-field': '32,702 — Expansion seating configuration',
    'bc-place': '61,516 — Grey Cup CFL Championship',
  };
  return records[slug] || 'Stadium capacity';
}

function getWorldCupHistory(slug: string): string {
  const history: Record<string, string> = {
    'metlife-stadium': 'MetLife Stadium will host the 2026 FIFA World Cup Final — its first-ever World Cup match. The New York/New Jersey region previously hosted matches in the 1994 World Cup at Giants Stadium.',
    'sofi-stadium': 'SoFi Stadium will make its World Cup debut in 2026. The Los Angeles area hosted 1994 World Cup matches at the Rose Bowl, which drew the tournament\'s highest attendance including the Final.',
    'att-stadium': 'AT&T Stadium will host its first-ever FIFA World Cup matches in 2026. The Dallas area has no prior World Cup history but has extensive experience hosting major international events.',
    'levis-stadium': "Levi's Stadium will host its first FIFA World Cup matches in 2026. The San Francisco Bay Area previously hosted 1994 World Cup matches at Stanford Stadium.",
    'hard-rock-stadium': 'Hard Rock Stadium previously hosted Copa América Centenario matches in 2016 and has served as a key international football venue in the USA.',
    'mercedes-benz-stadium': 'Mercedes-Benz Stadium will host its first FIFA World Cup matches in 2026. Atlanta was not a 1994 host city.',
    'lumen-field': 'Lumen Field will host its first FIFA World Cup matches in 2026. Seattle (Seahawks/Sounders home) has become one of America\'s strongest football cities.',
    'arrowhead-stadium': 'Arrowhead Stadium will host its first FIFA World Cup matches in 2026. Kansas City is making its World Cup debut as a host city.',
    'gillette-stadium': 'Gillette Stadium will host its first FIFA World Cup matches in 2026. The Boston area hosted 1994 World Cup matches at Foxboro Stadium (now demolished and replaced by Gillette).',
    'lincoln-financial-field': 'Lincoln Financial Field will host its first FIFA World Cup matches in 2026. Philadelphia hosted 1994 World Cup matches at Veterans Stadium.',
    'nrg-stadium': 'NRG Stadium will host its first FIFA World Cup matches in 2026. Houston hosted 1994 World Cup matches at the Silverdome in Pontiac, Michigan (Houston was not a direct host).',
    'estadio-azteca': 'Estadio Azteca is the most storied World Cup venue in history, having hosted the 1970 and 1986 FIFA World Cup Finals. It witnessed Pelé\'s triumph in 1970 and Diego Maradona\'s "Hand of God" and "Goal of the Century" in 1986.',
    'estadio-akron': 'Estadio Akron will host its first FIFA World Cup matches in 2026. The Guadalajara region hosted 1970 and 1986 World Cup matches at Estadio Jalisco.',
    'estadio-bbva': 'Estadio BBVA will host its first FIFA World Cup matches in 2026. Monterrey hosted 1986 World Cup matches at Estadio Universitario.',
    'bmo-field': 'BMO Field hosted 2015 FIFA Women\'s World Cup matches. The 2026 tournament will be Canada\'s first Men\'s World Cup as a host country.',
    'bc-place': 'BC Place hosted the Final and multiple matches of the 2015 FIFA Women\'s World Cup. The 2026 tournament will be Canada\'s first Men\'s World Cup.',
  };
  return history[slug] || 'This stadium will make its FIFA World Cup debut in 2026.';
}

function getSeatingDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    'metlife-stadium': 'MetLife Stadium features four seating levels: Club, Field, Mezzanine, and Upper. Premium club seats offer indoor climate-controlled spaces between levels. The 80+ luxury suites are arranged on the Club and Mezzanine levels. For the World Cup, all levels offer excellent sightlines to the pitch.',
    'sofi-stadium': 'SoFi Stadium offers Field Level, Club Level, Suite Level, and Upper Level seating beneath its distinctive translucent roof. The double-sided Oculus video board provides excellent views from every seat. Premium Hollywood Park Club seats offer all-inclusive food and beverage.',
    'att-stadium': 'AT&T Stadium features Club seating, End Zone Club, Terrace Club, and Upper seating levels. The retractable roof covers all seats. Massive end zone video boards and the center-hung LED display ensure every seat has a great view of the action.',
    'levis-stadium': "Levi's Stadium provides Field Level, Club, and Upper Deck seating with a rooftop garden suite level. The open south end zone maximizes natural airflow. Solar panels on the canopy generate enough energy to power every home game.",
    'hard-rock-stadium': 'Hard Rock Stadium\'s distinctive canopy covers all 65,000+ seats. The stadium features Field Level, Club Level, and Upper Level seating with 88 luxury suites. The redesigned concourses and club spaces make it one of the fan-friendliest venues in the NFL.',
    'mercedes-benz-stadium': 'Mercedes-Benz Stadium features the unique 360-degree Halo Board — the world\'s largest and highest-resolution LED video board, hanging above the field in a ring. Seating is arranged in a steep bowl for excellent sightlines. The retractable roof petals can open to reveal the sky.',
    'lumen-field': 'Lumen Field\'s steep seating bowl creates one of the most intimate atmospheres in professional sports. The partial roof traps crowd noise, amplifying the legendary "12th Man" atmosphere. Seating comprises Main, Club, and Upper levels with excellent sightlines throughout.',
    'arrowhead-stadium': 'Arrowhead Stadium features a classic American football bowl design with Club, Main, and Upper levels. The steep upper deck brings fans close to the field and contributes to the record-breaking noise levels. Red seating throughout creates the famous "Sea of Red" visual.',
    'gillette-stadium': 'Gillette Stadium offers Field, Club, Loge, and Upper seating levels. The stadium\'s distinctive lighthouse towers are iconic features. Recent renovations added premium club spaces and improved Wi-Fi and connectivity throughout.',
    'lincoln-financial-field': 'Lincoln Financial Field features a modern open-air design with Field, Club, and Upper Deck levels. The stadium\'s steep seating bowl ensures excellent sightlines from all areas. Eagles fans are known for creating one of the most passionate home field advantages in American sports.',
    'nrg-stadium': 'NRG Stadium offers Club Level, Mezzanine, and Upper Level seating with over 170 luxury suites. The retractable roof and natural grass combination is unique among NFL venues. Climate-controlled concourses and modern amenities make it one of the most comfortable World Cup venues.',
    'estadio-azteca': 'Estadio Azteca features a classic European-style seating bowl with Lower, Middle, and Upper tiers. The steep gradient of the upper tiers brings fans close to the action and creates the cauldron-like atmosphere for which the stadium is famous. Renovation ahead of 2026 is improving facilities while maintaining the historic character.',
    'estadio-akron': 'Estadio Akron is a purpose-built football stadium with a compact, steep seating bowl that maximizes atmosphere. All 49,850 seats are covered by the distinctive roof canopy. As a football-specific venue, every design decision prioritizes the viewing experience and supporter engagement.',
    'estadio-bbva': 'Estadio BBVA\'s seating is arranged in a tight, steeply-raked bowl with the Sierra Madre mountains visible through the open end. The intimate design brings every fan close to the pitch. Upper tier fans enjoy some of the most dramatic mountain backdrop views in world football.',
    'bmo-field': 'BMO Field is an intimate football-specific stadium expanded from its original configuration. The seating bowl wraps around three-quarters of the pitch with the open end facing Exhibition Place. Its compact design means no seat is far from the action.',
    'bc-place': 'BC Place\'s seating is arranged in a three-tier configuration beneath the retractable roof. The stadium offers some of the best sightlines of any covered stadium in North America. Downtown views from upper tier seats extend across False Creek to the mountains beyond.',
  };
  return descriptions[slug] || 'This stadium offers excellent sightlines from all seating areas for FIFA World Cup 2026 matches.';
}

function getFeatures(slug: string): string[] {
  const baseFeatures = [
    'FIFA World Cup 2026 certified venue',
    'High-definition video screens',
    'Modern concession facilities',
    'Accessible seating and facilities',
    'First aid stations',
  ];

  const extraFeatures: Record<string, string[]> = {
    'metlife-stadium': ['Retractable field', '200+ luxury suites', 'Multiple club lounges'],
    'sofi-stadium': ['Retractable translucent roof', 'World\'s largest double-sided video board', 'Full air conditioning'],
    'att-stadium': ['Retractable roof', 'Retractable end zone doors', 'Natural grass surface'],
    'mercedes-benz-stadium': ['Retractable petal roof', '360-degree Halo Board', 'LEED Platinum certified', '$5 concession prices'],
    'arrowhead-stadium': ['Guinness World Record noise venue', 'Natural grass surface'],
    'nrg-stadium': ['Fully retractable roof', 'Natural grass with roof open', 'Full air conditioning'],
    'estadio-azteca': ['UNESCO World Cup history', 'Largest stadium at 2026 WC', 'High altitude (2,240m)'],
    'estadio-bbva': ['Mountain backdrop views', 'Football-specific design', 'Stadium of the Year 2015'],
    'estadio-akron': ['Football-specific design', 'Full roof coverage', 'One of Mexico\'s best modern stadiums'],
    'bmo-field': ['Football-specific design', 'Waterfront location', 'Intimate atmosphere'],
    'bc-place': ['Retractable roof', 'Downtown location', 'Women\'s WC 2015 Final venue'],
  };

  return [...baseFeatures, ...(extraFeatures[slug] || [])];
}

export function getStadiumBySlug(slug: string): StadiumDetail | undefined {
  return stadiums.find((s) => s.slug === slug);
}

export const stadiumsByCapacity = [...stadiums].sort((a, b) => b.capacity - a.capacity);
