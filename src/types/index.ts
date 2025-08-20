export type BettingMode = 'cash' | 'coin';

export interface OddsData {
  id: string;
  value: string;
  isPositive: boolean;
}

export interface BettingOption {
  id: string;
  title: string;
  odds: OddsData[];
  isSelected?: boolean;
}

export interface ToggleProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  mode: BettingMode;
}

export interface Team {
  name: string;
  logo: string;
}

export interface GameLine {
  id: string;
  awayTeam: Team;
  homeTeam: Team;
  date: string;
  spread: {
    away: string;
    home: string;
  };
  money: {
    away: string;
    home: string;
  };
  total: {
    over: string;
    under: string;
  };
} 