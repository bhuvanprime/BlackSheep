export interface Player {
  id: string;
  name: string;
}

export interface WordObj {
  text: string;
  hints?: string[];
}

export interface Category {
  id: string;
  name: string;
  words: (string | WordObj)[];
  isCustom?: boolean;
}

export interface GameSettings {
  playersCount: number;
  impostersCount: number;
  hintsEnabled: boolean;
  timeLimitEnabled: boolean;
  durationMinutes: number;
}

export interface GameState {
  currentRoundPlayers: Player[];
  imposters: string[]; // Player IDs who are imposters
  imposterHistory: string[]; // Player IDs who were imposters recently
  secretWord: string;
  secretCategory: string;
  secretHints: string[]; // Store hints for the chosen word
  currentPlayerIndex: number; // For pass and play flow
  phase: 'setup' | 'pass-and-play' | 'active' | 'game-over';
}
