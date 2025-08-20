import { BettingOption, GameLine, Team } from '../types';

export const MOCK_BETTING_DATA: BettingOption[] = [
  {
    id: '1',
    title: 'Team A vs Team B',
    odds: [
      { id: '1a', value: '+1.5', isPositive: true },
      { id: '1b', value: '-155', isPositive: false },
    ],
  },
  {
    id: '2',
    title: 'Player Performance',
    odds: [
      { id: '2a', value: '+2.5', isPositive: true },
      { id: '2b', value: '-180', isPositive: false },
    ],
  },
  {
    id: '3',
    title: 'Game Total',
    odds: [
      { id: '3a', value: '+3.0', isPositive: true },
      { id: '3b', value: '-165', isPositive: false },
    ],
  },
  {
    id: '4',
    title: 'Quarter Score',
    odds: [
      { id: '4a', value: '+1.8', isPositive: true },
      { id: '4b', value: '-145', isPositive: false },
    ],
  },
  {
    id: '5',
    title: 'Player Stats',
    odds: [
      { id: '5a', value: '+2.2', isPositive: true },
      { id: '5b', value: '-175', isPositive: false },
    ],
  },
];

export const NFL_GAMES: GameLine[] = [
  {
    id: '1',
    awayTeam: { name: 'LA Chargers', logo: '⚡' },
    homeTeam: { name: 'DET Lions', logo: '🦁' },
    date: 'Sep 4, 8:21PM ET',
    spread: { away: '+1.5', home: '-1.5' },
    money: { away: '-155', home: '+135' },
    total: { over: 'O 48.5', under: 'U 48.5' },
  },
  {
    id: '2',
    awayTeam: { name: 'LA Chargers', logo: '⚡' },
    homeTeam: { name: 'DET Lions', logo: '🦁' },
    date: 'Sep 4, 8:21PM ET',
    spread: { away: '+1.5', home: '-1.5' },
    money: { away: '-155', home: '+135' },
    total: { over: 'O 48.5', under: 'U 48.5' },
  },
];

export const FEATURED_MATCH = {
  awayTeam: { name: 'LA Chargers', logo: '⚡' },
  homeTeam: { name: 'DET Lions', logo: '🦁' },
  date: 'Dec 25 • 4:30pm ET',
  peoplePlaced: 540,
};

export const CURRENT_SPORT = {
  name: 'NFL',
  logo: '🏈',
  gamesAvailable: 23,
}; 