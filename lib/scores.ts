export type MatchStatus = 'upcoming' | 'finished';

export interface ScoreMatch {
  id: string;
  date: string;
  time: string;
  group?: string;
  round: string;
  home: string;
  homeFlag: string;
  away: string;
  awayFlag: string;
  homeScore: number | null;
  awayScore: number | null;
  status: MatchStatus;
  stadium: string;
  city: string;
}

// ─── GROUP A: Mexico · South Africa · Korea Republic · Czechia ───────────────
const groupA: ScoreMatch[] = [
  { id: 'A1', date: 'Jun 11, 2026', time: '3:00 PM ET', group: 'A', round: 'Group Stage', home: 'Mexico', homeFlag: '🇲🇽', away: 'South Africa', awayFlag: '🇿🇦', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Estadio Azteca', city: 'Mexico City' },
  { id: 'A2', date: 'Jun 11, 2026', time: '10:00 PM ET', group: 'A', round: 'Group Stage', home: 'Korea Republic', homeFlag: '🇰🇷', away: 'Czechia', awayFlag: '🇨🇿', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Estadio Akron', city: 'Guadalajara' },
  { id: 'A3', date: 'Jun 18, 2026', time: '12:00 PM ET', group: 'A', round: 'Group Stage', home: 'Czechia', homeFlag: '🇨🇿', away: 'South Africa', awayFlag: '🇿🇦', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Mercedes-Benz Stadium', city: 'Atlanta' },
  { id: 'A4', date: 'Jun 18, 2026', time: '9:00 PM ET', group: 'A', round: 'Group Stage', home: 'Mexico', homeFlag: '🇲🇽', away: 'Korea Republic', awayFlag: '🇰🇷', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Estadio Akron', city: 'Guadalajara' },
  { id: 'A5', date: 'Jun 24, 2026', time: '9:00 PM ET', group: 'A', round: 'Group Stage', home: 'South Africa', homeFlag: '🇿🇦', away: 'Korea Republic', awayFlag: '🇰🇷', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Estadio BBVA', city: 'Monterrey' },
  { id: 'A6', date: 'Jun 24, 2026', time: '9:00 PM ET', group: 'A', round: 'Group Stage', home: 'Mexico', homeFlag: '🇲🇽', away: 'Czechia', awayFlag: '🇨🇿', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Estadio Azteca', city: 'Mexico City' },
];

// ─── GROUP B: Canada · Switzerland · Qatar · Bosnia & Herzegovina ─────────────
const groupB: ScoreMatch[] = [
  { id: 'B1', date: 'Jun 12, 2026', time: '3:00 PM ET', group: 'B', round: 'Group Stage', home: 'Canada', homeFlag: '🇨🇦', away: 'Bosnia & Herzegovina', awayFlag: '🇧🇦', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'BMO Field', city: 'Toronto' },
  { id: 'B2', date: 'Jun 13, 2026', time: '3:00 PM ET', group: 'B', round: 'Group Stage', home: 'Qatar', homeFlag: '🇶🇦', away: 'Switzerland', awayFlag: '🇨🇭', homeScore: null, awayScore: null, status: 'upcoming', stadium: "Levi's Stadium", city: 'San Francisco' },
  { id: 'B3', date: 'Jun 18, 2026', time: '3:00 PM ET', group: 'B', round: 'Group Stage', home: 'Switzerland', homeFlag: '🇨🇭', away: 'Bosnia & Herzegovina', awayFlag: '🇧🇦', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'SoFi Stadium', city: 'Los Angeles' },
  { id: 'B4', date: 'Jun 18, 2026', time: '6:00 PM ET', group: 'B', round: 'Group Stage', home: 'Canada', homeFlag: '🇨🇦', away: 'Qatar', awayFlag: '🇶🇦', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'BC Place', city: 'Vancouver' },
  { id: 'B5', date: 'Jun 24, 2026', time: '3:00 PM ET', group: 'B', round: 'Group Stage', home: 'Bosnia & Herzegovina', homeFlag: '🇧🇦', away: 'Qatar', awayFlag: '🇶🇦', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Lumen Field', city: 'Seattle' },
  { id: 'B6', date: 'Jun 24, 2026', time: '3:00 PM ET', group: 'B', round: 'Group Stage', home: 'Switzerland', homeFlag: '🇨🇭', away: 'Canada', awayFlag: '🇨🇦', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'BC Place', city: 'Vancouver' },
];

// ─── GROUP C: USA · Paraguay · Turkiye · Australia ───────────────────────────
const groupC: ScoreMatch[] = [
  { id: 'C1', date: 'Jun 12, 2026', time: '9:00 PM ET', group: 'C', round: 'Group Stage', home: 'USA', homeFlag: '🇺🇸', away: 'Paraguay', awayFlag: '🇵🇾', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'SoFi Stadium', city: 'Los Angeles' },
  { id: 'C2', date: 'Jun 12, 2026', time: '12:00 AM ET', group: 'C', round: 'Group Stage', home: 'Australia', homeFlag: '🇦🇺', away: 'Turkiye', awayFlag: '🇹🇷', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'BC Place', city: 'Vancouver' },
  { id: 'C3', date: 'Jun 18, 2026', time: '12:00 AM ET', group: 'C', round: 'Group Stage', home: 'Turkiye', homeFlag: '🇹🇷', away: 'Paraguay', awayFlag: '🇵🇾', homeScore: null, awayScore: null, status: 'upcoming', stadium: "Levi's Stadium", city: 'San Francisco' },
  { id: 'C4', date: 'Jun 19, 2026', time: '3:00 PM ET', group: 'C', round: 'Group Stage', home: 'USA', homeFlag: '🇺🇸', away: 'Australia', awayFlag: '🇦🇺', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Lumen Field', city: 'Seattle' },
  { id: 'C5', date: 'Jun 25, 2026', time: '10:00 PM ET', group: 'C', round: 'Group Stage', home: 'USA', homeFlag: '🇺🇸', away: 'Turkiye', awayFlag: '🇹🇷', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'SoFi Stadium', city: 'Los Angeles' },
  { id: 'C6', date: 'Jun 25, 2026', time: '10:00 PM ET', group: 'C', round: 'Group Stage', home: 'Paraguay', homeFlag: '🇵🇾', away: 'Australia', awayFlag: '🇦🇺', homeScore: null, awayScore: null, status: 'upcoming', stadium: "Levi's Stadium", city: 'San Francisco' },
];

// ─── GROUP D: Iran · New Zealand · Belgium · Egypt ───────────────────────────
const groupD: ScoreMatch[] = [
  { id: 'D1', date: 'Jun 15, 2026', time: '9:00 PM ET', group: 'D', round: 'Group Stage', home: 'Iran', homeFlag: '🇮🇷', away: 'New Zealand', awayFlag: '🇳🇿', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'SoFi Stadium', city: 'Los Angeles' },
  { id: 'D2', date: 'Jun 15, 2026', time: '3:00 PM ET', group: 'D', round: 'Group Stage', home: 'Belgium', homeFlag: '🇧🇪', away: 'Egypt', awayFlag: '🇪🇬', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Lumen Field', city: 'Seattle' },
  { id: 'D3', date: 'Jun 21, 2026', time: '3:00 PM ET', group: 'D', round: 'Group Stage', home: 'Belgium', homeFlag: '🇧🇪', away: 'Iran', awayFlag: '🇮🇷', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'SoFi Stadium', city: 'Los Angeles' },
  { id: 'D4', date: 'Jun 21, 2026', time: '9:00 PM ET', group: 'D', round: 'Group Stage', home: 'New Zealand', homeFlag: '🇳🇿', away: 'Egypt', awayFlag: '🇪🇬', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'BC Place', city: 'Vancouver' },
  { id: 'D5', date: 'Jun 26, 2026', time: '11:00 PM ET', group: 'D', round: 'Group Stage', home: 'Egypt', homeFlag: '🇪🇬', away: 'Iran', awayFlag: '🇮🇷', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Lumen Field', city: 'Seattle' },
  { id: 'D6', date: 'Jun 26, 2026', time: '11:00 PM ET', group: 'D', round: 'Group Stage', home: 'New Zealand', homeFlag: '🇳🇿', away: 'Belgium', awayFlag: '🇧🇪', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'BC Place', city: 'Vancouver' },
];

// ─── GROUP E: Netherlands · Japan · Sweden · Tunisia ─────────────────────────
const groupE: ScoreMatch[] = [
  { id: 'E1', date: 'Jun 14, 2026', time: '4:00 PM ET', group: 'E', round: 'Group Stage', home: 'Netherlands', homeFlag: '🇳🇱', away: 'Japan', awayFlag: '🇯🇵', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'AT&T Stadium', city: 'Dallas' },
  { id: 'E2', date: 'Jun 14, 2026', time: '10:00 PM ET', group: 'E', round: 'Group Stage', home: 'Sweden', homeFlag: '🇸🇪', away: 'Tunisia', awayFlag: '🇹🇳', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Estadio BBVA', city: 'Monterrey' },
  { id: 'E3', date: 'Jun 20, 2026', time: '1:00 PM ET', group: 'E', round: 'Group Stage', home: 'Netherlands', homeFlag: '🇳🇱', away: 'Sweden', awayFlag: '🇸🇪', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'NRG Stadium', city: 'Houston' },
  { id: 'E4', date: 'Jun 20, 2026', time: '12:00 AM ET', group: 'E', round: 'Group Stage', home: 'Tunisia', homeFlag: '🇹🇳', away: 'Japan', awayFlag: '🇯🇵', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Estadio BBVA', city: 'Monterrey' },
  { id: 'E5', date: 'Jun 25, 2026', time: '7:00 PM ET', group: 'E', round: 'Group Stage', home: 'Japan', homeFlag: '🇯🇵', away: 'Sweden', awayFlag: '🇸🇪', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'AT&T Stadium', city: 'Dallas' },
  { id: 'E6', date: 'Jun 25, 2026', time: '7:00 PM ET', group: 'E', round: 'Group Stage', home: 'Tunisia', homeFlag: '🇹🇳', away: 'Netherlands', awayFlag: '🇳🇱', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Arrowhead Stadium', city: 'Kansas City' },
];

// ─── GROUP F: Argentina · Austria · Jordan · Algeria ─────────────────────────
const groupF: ScoreMatch[] = [
  { id: 'F1', date: 'Jun 15, 2026', time: '12:00 AM ET', group: 'F', round: 'Group Stage', home: 'Austria', homeFlag: '🇦🇹', away: 'Jordan', awayFlag: '🇯🇴', homeScore: null, awayScore: null, status: 'upcoming', stadium: "Levi's Stadium", city: 'San Francisco' },
  { id: 'F2', date: 'Jun 16, 2026', time: '9:00 PM ET', group: 'F', round: 'Group Stage', home: 'Argentina', homeFlag: '🇦🇷', away: 'Algeria', awayFlag: '🇩🇿', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Arrowhead Stadium', city: 'Kansas City' },
  { id: 'F3', date: 'Jun 22, 2026', time: '1:00 PM ET', group: 'F', round: 'Group Stage', home: 'Argentina', homeFlag: '🇦🇷', away: 'Austria', awayFlag: '🇦🇹', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'AT&T Stadium', city: 'Dallas' },
  { id: 'F4', date: 'Jun 22, 2026', time: '11:00 PM ET', group: 'F', round: 'Group Stage', home: 'Jordan', homeFlag: '🇯🇴', away: 'Algeria', awayFlag: '🇩🇿', homeScore: null, awayScore: null, status: 'upcoming', stadium: "Levi's Stadium", city: 'San Francisco' },
  { id: 'F5', date: 'Jun 27, 2026', time: '10:00 PM ET', group: 'F', round: 'Group Stage', home: 'Jordan', homeFlag: '🇯🇴', away: 'Argentina', awayFlag: '🇦🇷', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'AT&T Stadium', city: 'Dallas' },
  { id: 'F6', date: 'Jun 27, 2026', time: '10:00 PM ET', group: 'F', round: 'Group Stage', home: 'Algeria', homeFlag: '🇩🇿', away: 'Austria', awayFlag: '🇦🇹', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Arrowhead Stadium', city: 'Kansas City' },
];

// ─── GROUP G: France · Senegal · Norway · Iraq ───────────────────────────────
const groupG: ScoreMatch[] = [
  { id: 'G1', date: 'Jun 16, 2026', time: '3:00 PM ET', group: 'G', round: 'Group Stage', home: 'France', homeFlag: '🇫🇷', away: 'Senegal', awayFlag: '🇸🇳', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'MetLife Stadium', city: 'New York / NJ' },
  { id: 'G2', date: 'Jun 16, 2026', time: '6:00 PM ET', group: 'G', round: 'Group Stage', home: 'Iraq', homeFlag: '🇮🇶', away: 'Norway', awayFlag: '🇳🇴', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Gillette Stadium', city: 'Boston' },
  { id: 'G3', date: 'Jun 22, 2026', time: '8:00 PM ET', group: 'G', round: 'Group Stage', home: 'Norway', homeFlag: '🇳🇴', away: 'Senegal', awayFlag: '🇸🇳', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'MetLife Stadium', city: 'New York / NJ' },
  { id: 'G4', date: 'Jun 22, 2026', time: '5:00 PM ET', group: 'G', round: 'Group Stage', home: 'France', homeFlag: '🇫🇷', away: 'Iraq', awayFlag: '🇮🇶', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Lincoln Financial Field', city: 'Philadelphia' },
  { id: 'G5', date: 'Jun 26, 2026', time: '3:00 PM ET', group: 'G', round: 'Group Stage', home: 'Norway', homeFlag: '🇳🇴', away: 'France', awayFlag: '🇫🇷', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Gillette Stadium', city: 'Boston' },
  { id: 'G6', date: 'Jun 27, 2026', time: '3:00 PM ET', group: 'G', round: 'Group Stage', home: 'Senegal', homeFlag: '🇸🇳', away: 'Iraq', awayFlag: '🇮🇶', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'BMO Field', city: 'Toronto' },
];

// ─── GROUP H: Brazil · Morocco · Scotland · Haiti ────────────────────────────
const groupH: ScoreMatch[] = [
  { id: 'H1', date: 'Jun 13, 2026', time: '6:00 PM ET', group: 'H', round: 'Group Stage', home: 'Brazil', homeFlag: '🇧🇷', away: 'Morocco', awayFlag: '🇲🇦', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'MetLife Stadium', city: 'New York / NJ' },
  { id: 'H2', date: 'Jun 13, 2026', time: '9:00 PM ET', group: 'H', round: 'Group Stage', home: 'Haiti', homeFlag: '🇭🇹', away: 'Scotland', awayFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Gillette Stadium', city: 'Boston' },
  { id: 'H3', date: 'Jun 19, 2026', time: '6:00 PM ET', group: 'H', round: 'Group Stage', home: 'Scotland', homeFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', away: 'Morocco', awayFlag: '🇲🇦', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Gillette Stadium', city: 'Boston' },
  { id: 'H4', date: 'Jun 19, 2026', time: '9:00 PM ET', group: 'H', round: 'Group Stage', home: 'Brazil', homeFlag: '🇧🇷', away: 'Haiti', awayFlag: '🇭🇹', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Lincoln Financial Field', city: 'Philadelphia' },
  { id: 'H5', date: 'Jun 24, 2026', time: '6:00 PM ET', group: 'H', round: 'Group Stage', home: 'Scotland', homeFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', away: 'Brazil', awayFlag: '🇧🇷', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Hard Rock Stadium', city: 'Miami' },
  { id: 'H6', date: 'Jun 24, 2026', time: '6:00 PM ET', group: 'H', round: 'Group Stage', home: 'Morocco', homeFlag: '🇲🇦', away: 'Haiti', awayFlag: '🇭🇹', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Mercedes-Benz Stadium', city: 'Atlanta' },
];

// ─── GROUP I: Ecuador · Germany · Curaçao · Cote d'Ivoire ───────────────────
const groupI: ScoreMatch[] = [
  { id: 'I1', date: 'Jun 14, 2026', time: '7:00 PM ET', group: 'I', round: 'Group Stage', home: "Cote d'Ivoire", homeFlag: '🇨🇮', away: 'Ecuador', awayFlag: '🇪🇨', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Lincoln Financial Field', city: 'Philadelphia' },
  { id: 'I2', date: 'Jun 14, 2026', time: '1:00 PM ET', group: 'I', round: 'Group Stage', home: 'Germany', homeFlag: '🇩🇪', away: 'Curaçao', awayFlag: '🇨🇼', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'NRG Stadium', city: 'Houston' },
  { id: 'I3', date: 'Jun 20, 2026', time: '8:00 PM ET', group: 'I', round: 'Group Stage', home: 'Ecuador', homeFlag: '🇪🇨', away: 'Curaçao', awayFlag: '🇨🇼', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Arrowhead Stadium', city: 'Kansas City' },
  { id: 'I4', date: 'Jun 20, 2026', time: '4:00 PM ET', group: 'I', round: 'Group Stage', home: 'Germany', homeFlag: '🇩🇪', away: "Cote d'Ivoire", awayFlag: '🇨🇮', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'BMO Field', city: 'Toronto' },
  { id: 'I5', date: 'Jun 25, 2026', time: '4:00 PM ET', group: 'I', round: 'Group Stage', home: 'Ecuador', homeFlag: '🇪🇨', away: 'Germany', awayFlag: '🇩🇪', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'MetLife Stadium', city: 'New York / NJ' },
  { id: 'I6', date: 'Jun 25, 2026', time: '4:00 PM ET', group: 'I', round: 'Group Stage', home: 'Curaçao', homeFlag: '🇨🇼', away: "Cote d'Ivoire", awayFlag: '🇨🇮', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Lincoln Financial Field', city: 'Philadelphia' },
];

// ─── GROUP J: England · Panama · Croatia · Ghana ─────────────────────────────
const groupJ: ScoreMatch[] = [
  { id: 'J1', date: 'Jun 17, 2026', time: '4:00 PM ET', group: 'J', round: 'Group Stage', home: 'England', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', away: 'Croatia', awayFlag: '🇭🇷', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'AT&T Stadium', city: 'Dallas' },
  { id: 'J2', date: 'Jun 17, 2026', time: '7:00 PM ET', group: 'J', round: 'Group Stage', home: 'Ghana', homeFlag: '🇬🇭', away: 'Panama', awayFlag: '🇵🇦', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'BMO Field', city: 'Toronto' },
  { id: 'J3', date: 'Jun 23, 2026', time: '4:00 PM ET', group: 'J', round: 'Group Stage', home: 'England', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', away: 'Ghana', awayFlag: '🇬🇭', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Gillette Stadium', city: 'Boston' },
  { id: 'J4', date: 'Jun 23, 2026', time: '7:00 PM ET', group: 'J', round: 'Group Stage', home: 'Panama', homeFlag: '🇵🇦', away: 'Croatia', awayFlag: '🇭🇷', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'BMO Field', city: 'Toronto' },
  { id: 'J5', date: 'Jun 27, 2026', time: '5:00 PM ET', group: 'J', round: 'Group Stage', home: 'Panama', homeFlag: '🇵🇦', away: 'England', awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'MetLife Stadium', city: 'New York / NJ' },
  { id: 'J6', date: 'Jun 27, 2026', time: '5:00 PM ET', group: 'J', round: 'Group Stage', home: 'Croatia', homeFlag: '🇭🇷', away: 'Ghana', awayFlag: '🇬🇭', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Lincoln Financial Field', city: 'Philadelphia' },
];

// ─── GROUP K: Saudi Arabia · Uruguay · Cabo Verde · Spain ────────────────────
const groupK: ScoreMatch[] = [
  { id: 'K1', date: 'Jun 15, 2026', time: '6:00 PM ET', group: 'K', round: 'Group Stage', home: 'Saudi Arabia', homeFlag: '🇸🇦', away: 'Uruguay', awayFlag: '🇺🇾', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Hard Rock Stadium', city: 'Miami' },
  { id: 'K2', date: 'Jun 15, 2026', time: '12:00 PM ET', group: 'K', round: 'Group Stage', home: 'Spain', homeFlag: '🇪🇸', away: 'Cabo Verde', awayFlag: '🇨🇻', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Mercedes-Benz Stadium', city: 'Atlanta' },
  { id: 'K3', date: 'Jun 21, 2026', time: '6:00 PM ET', group: 'K', round: 'Group Stage', home: 'Uruguay', homeFlag: '🇺🇾', away: 'Cabo Verde', awayFlag: '🇨🇻', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Hard Rock Stadium', city: 'Miami' },
  { id: 'K4', date: 'Jun 21, 2026', time: '12:00 PM ET', group: 'K', round: 'Group Stage', home: 'Spain', homeFlag: '🇪🇸', away: 'Saudi Arabia', awayFlag: '🇸🇦', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Mercedes-Benz Stadium', city: 'Atlanta' },
  { id: 'K5', date: 'Jun 26, 2026', time: '8:00 PM ET', group: 'K', round: 'Group Stage', home: 'Uruguay', homeFlag: '🇺🇾', away: 'Spain', awayFlag: '🇪🇸', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Estadio Akron', city: 'Guadalajara' },
  { id: 'K6', date: 'Jun 26, 2026', time: '8:00 PM ET', group: 'K', round: 'Group Stage', home: 'Cabo Verde', homeFlag: '🇨🇻', away: 'Saudi Arabia', awayFlag: '🇸🇦', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'NRG Stadium', city: 'Houston' },
];

// ─── GROUP L: Colombia · Portugal · Congo DR · Uzbekistan ────────────────────
const groupL: ScoreMatch[] = [
  { id: 'L1', date: 'Jun 17, 2026', time: '1:00 PM ET', group: 'L', round: 'Group Stage', home: 'Portugal', homeFlag: '🇵🇹', away: 'Congo DR', awayFlag: '🇨🇩', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'NRG Stadium', city: 'Houston' },
  { id: 'L2', date: 'Jun 17, 2026', time: '10:00 PM ET', group: 'L', round: 'Group Stage', home: 'Uzbekistan', homeFlag: '🇺🇿', away: 'Colombia', awayFlag: '🇨🇴', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Estadio Azteca', city: 'Mexico City' },
  { id: 'L3', date: 'Jun 23, 2026', time: '1:00 PM ET', group: 'L', round: 'Group Stage', home: 'Portugal', homeFlag: '🇵🇹', away: 'Uzbekistan', awayFlag: '🇺🇿', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'NRG Stadium', city: 'Houston' },
  { id: 'L4', date: 'Jun 23, 2026', time: '10:00 PM ET', group: 'L', round: 'Group Stage', home: 'Colombia', homeFlag: '🇨🇴', away: 'Congo DR', awayFlag: '🇨🇩', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Estadio Akron', city: 'Guadalajara' },
  { id: 'L5', date: 'Jun 27, 2026', time: '7:30 PM ET', group: 'L', round: 'Group Stage', home: 'Colombia', homeFlag: '🇨🇴', away: 'Portugal', awayFlag: '🇵🇹', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Hard Rock Stadium', city: 'Miami' },
  { id: 'L6', date: 'Jun 27, 2026', time: '7:30 PM ET', group: 'L', round: 'Group Stage', home: 'Congo DR', homeFlag: '🇨🇩', away: 'Uzbekistan', awayFlag: '🇺🇿', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Mercedes-Benz Stadium', city: 'Atlanta' },
];

// ─── KNOCKOUT STAGE ───────────────────────────────────────────────────────────
const knockoutStage: ScoreMatch[] = [
  // Round of 32 (Jun 29 – Jul 3)
  { id: 'R32-1',  date: 'Jun 29, 2026', time: '4:30 PM ET', round: 'Round of 32', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Gillette Stadium', city: 'Boston' },
  { id: 'R32-2',  date: 'Jun 29, 2026', time: 'TBD',        round: 'Round of 32', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'NRG Stadium', city: 'Houston' },
  { id: 'R32-3',  date: 'Jun 30, 2026', time: '5:00 PM ET', round: 'Round of 32', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'MetLife Stadium', city: 'New York / NJ' },
  { id: 'R32-4',  date: 'Jun 30, 2026', time: '9:00 PM ET', round: 'Round of 32', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Estadio Azteca', city: 'Mexico City' },
  { id: 'R32-5',  date: 'Jul 1, 2026',  time: '12:00 PM ET', round: 'Round of 32', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Mercedes-Benz Stadium', city: 'Atlanta' },
  { id: 'R32-6',  date: 'Jul 1, 2026',  time: '4:00 PM ET', round: 'Round of 32', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Lumen Field', city: 'Seattle' },
  { id: 'R32-7',  date: 'Jul 1, 2026',  time: '8:00 PM ET', round: 'Round of 32', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: "Levi's Stadium", city: 'San Francisco' },
  { id: 'R32-8',  date: 'Jul 2, 2026',  time: '3:00 PM ET', round: 'Round of 32', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'SoFi Stadium', city: 'Los Angeles' },
  { id: 'R32-9',  date: 'Jul 2, 2026',  time: '7:00 PM ET', round: 'Round of 32', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'BMO Field', city: 'Toronto' },
  { id: 'R32-10', date: 'Jul 2, 2026',  time: '11:00 PM ET', round: 'Round of 32', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'BC Place', city: 'Vancouver' },
  { id: 'R32-11', date: 'Jul 3, 2026',  time: '2:00 PM ET', round: 'Round of 32', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'AT&T Stadium', city: 'Dallas' },
  { id: 'R32-12', date: 'Jul 3, 2026',  time: '6:00 PM ET', round: 'Round of 32', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Hard Rock Stadium', city: 'Miami' },
  { id: 'R32-13', date: 'Jul 3, 2026',  time: '9:30 PM ET', round: 'Round of 32', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Arrowhead Stadium', city: 'Kansas City' },
  { id: 'R32-14', date: 'Jul 3, 2026',  time: 'TBD',        round: 'Round of 32', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Estadio Azteca', city: 'Mexico City' },
  { id: 'R32-15', date: 'Jul 4, 2026',  time: '1:00 PM ET', round: 'Round of 32', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'NRG Stadium', city: 'Houston' },
  { id: 'R32-16', date: 'Jul 4, 2026',  time: '5:00 PM ET', round: 'Round of 32', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Lincoln Financial Field', city: 'Philadelphia' },

  // Round of 16 (Jul 4 – Jul 7)
  { id: 'R16-1', date: 'Jul 5, 2026', time: '4:00 PM ET', round: 'Round of 16', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'MetLife Stadium', city: 'New York / NJ' },
  { id: 'R16-2', date: 'Jul 5, 2026', time: '8:00 PM ET', round: 'Round of 16', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Estadio Azteca', city: 'Mexico City' },
  { id: 'R16-3', date: 'Jul 6, 2026', time: '3:00 PM ET', round: 'Round of 16', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'AT&T Stadium', city: 'Dallas' },
  { id: 'R16-4', date: 'Jul 6, 2026', time: '8:00 PM ET', round: 'Round of 16', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Lumen Field', city: 'Seattle' },
  { id: 'R16-5', date: 'Jul 7, 2026', time: '12:00 PM ET', round: 'Round of 16', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Hard Rock Stadium', city: 'Miami' },
  { id: 'R16-6', date: 'Jul 7, 2026', time: '4:00 PM ET', round: 'Round of 16', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'BC Place', city: 'Vancouver' },
  { id: 'R16-7', date: 'Jul 10, 2026', time: '12:00 PM ET', round: 'Round of 16', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'SoFi Stadium', city: 'Los Angeles' },
  { id: 'R16-8', date: 'Jul 10, 2026', time: '4:00 PM ET', round: 'Round of 16', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Mercedes-Benz Stadium', city: 'Atlanta' },

  // Quarter-Finals (Jul 9, 11)
  { id: 'QF-1', date: 'Jul 9, 2026',  time: '4:00 PM ET', round: 'Quarter-Final', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Gillette Stadium', city: 'Boston' },
  { id: 'QF-2', date: 'Jul 11, 2026', time: 'TBD',        round: 'Quarter-Final', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Hard Rock Stadium', city: 'Miami' },
  { id: 'QF-3', date: 'Jul 11, 2026', time: '9:00 PM ET', round: 'Quarter-Final', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Arrowhead Stadium', city: 'Kansas City' },
  { id: 'QF-4', date: 'Jul 12, 2026', time: '12:00 PM ET', round: 'Quarter-Final', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'SoFi Stadium', city: 'Los Angeles' },

  // Semi-Finals (Jul 14, 15)
  { id: 'SF-1', date: 'Jul 14, 2026', time: '3:00 PM ET', round: 'Semi-Final', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'AT&T Stadium', city: 'Dallas' },
  { id: 'SF-2', date: 'Jul 15, 2026', time: '3:00 PM ET', round: 'Semi-Final', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Mercedes-Benz Stadium', city: 'Atlanta' },

  // Third-Place Match
  { id: 'TP', date: 'Jul 18, 2026', time: '5:00 PM ET', round: 'Third-Place', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'Hard Rock Stadium', city: 'Miami' },

  // Final
  { id: 'FINAL', date: 'Jul 19, 2026', time: '3:00 PM ET', round: 'Final', home: 'TBD', homeFlag: '🏳️', away: 'TBD', awayFlag: '🏳️', homeScore: null, awayScore: null, status: 'upcoming', stadium: 'MetLife Stadium', city: 'New York / NJ' },
];

export const allMatches: ScoreMatch[] = [
  ...groupA, ...groupB, ...groupC, ...groupD,
  ...groupE, ...groupF, ...groupG, ...groupH,
  ...groupI, ...groupJ, ...groupK, ...groupL,
  ...knockoutStage,
];

export const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

export const groupTeams: Record<string, string[]> = {
  A: ['Mexico', 'South Africa', 'Korea Republic', 'Czechia'],
  B: ['Canada', 'Switzerland', 'Qatar', 'Bosnia & Herzegovina'],
  C: ['USA', 'Paraguay', 'Turkiye', 'Australia'],
  D: ['Iran', 'New Zealand', 'Belgium', 'Egypt'],
  E: ['Netherlands', 'Japan', 'Sweden', 'Tunisia'],
  F: ['Argentina', 'Austria', 'Jordan', 'Algeria'],
  G: ['France', 'Senegal', 'Norway', 'Iraq'],
  H: ['Brazil', 'Morocco', 'Scotland', 'Haiti'],
  I: ['Ecuador', 'Germany', 'Curaçao', "Cote d'Ivoire"],
  J: ['England', 'Panama', 'Croatia', 'Ghana'],
  K: ['Saudi Arabia', 'Uruguay', 'Cabo Verde', 'Spain'],
  L: ['Colombia', 'Portugal', 'Congo DR', 'Uzbekistan'],
};

export const rounds = [
  'All',
  'Group Stage',
  'Round of 32',
  'Round of 16',
  'Quarter-Final',
  'Semi-Final',
  'Third-Place',
  'Final',
];
