import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Player, Category, GameSettings, GameState } from '../types';
import { importedCategories, standardCategories } from '../data';

interface StoreState {
  settings: GameSettings;
  players: Player[];
  categories: Category[];
  selectedCategoryIds: string[];
  gameState: GameState;
  
  // Actions
  updateSettings: (settings: Partial<GameSettings>) => void;
  setPlayers: (players: Player[]) => void;
  addPlayer: (name: string) => void;
  removePlayer: (id: string) => void;
  updatePlayer: (id: string, name: string) => void;
  addCategory: (category: Omit<Category, 'id'>) => void;
  removeCategory: (id: string) => void;
  toggleCategorySelection: (id: string) => void;
  startGame: () => void;
  nextPlayerReveal: () => void;
  endGame: () => void;
  resetGame: () => void;
}

const defaultCategories: Category[] = [
  ...standardCategories,
  ...importedCategories
];

export function getMaxImposters(playersCount: number): number {
  if (playersCount <= 5) return 1;
  if (playersCount <= 7) return 2;
  if (playersCount <= 10) return 3;
  if (playersCount <= 13) return 4;
  if (playersCount <= 16) return 5;
  return 6;
}

export const useGameStore = create<StoreState>()(
  persist(
    (set) => ({
      settings: {
        playersCount: 4,
        impostersCount: 1,
        hintsEnabled: true,
        timeLimitEnabled: true,
        durationMinutes: 5,
      },
      players: [
        { id: 'p-1', name: 'Player 1' },
        { id: 'p-2', name: 'Player 2' },
        { id: 'p-3', name: 'Player 3' },
        { id: 'p-4', name: 'Player 4' },
      ],
      categories: defaultCategories,
      selectedCategoryIds: ['cat-1', 'cat-3'],
      gameState: {
        currentRoundPlayers: [],
        imposters: [],
        imposterHistory: [],
        secretWord: '',
        secretCategory: '',
        secretHints: [],
        currentPlayerIndex: 0,
        phase: 'setup',
      },

      updateSettings: (newSettings) => set((state) => {
        const nextSettings = { ...state.settings, ...newSettings };
        
        if (newSettings.playersCount !== undefined) {
          const maxImps = getMaxImposters(newSettings.playersCount);
          if (nextSettings.impostersCount > maxImps) {
            nextSettings.impostersCount = maxImps;
          }
        }

        return {
          settings: nextSettings,
          // Auto-adjust players array size if player count changes via stepper
          players: newSettings.playersCount !== undefined
            ? Array.from({ length: newSettings.playersCount }).map((_, i) => state.players[i] || { id: `p-${Date.now()}-${i}`, name: `Player ${i + 1}` })
            : state.players
        };
      }),

      setPlayers: (players) => set((state) => {
        const maxImps = getMaxImposters(players.length);
        return { 
          players,
          settings: { 
            ...state.settings, 
            playersCount: players.length,
            impostersCount: Math.min(state.settings.impostersCount, maxImps)
          }
        };
      }),

      addPlayer: (name) => set((state) => {
        const newPlayers = [...state.players, { id: `p-${Date.now()}`, name }];
        const maxImps = getMaxImposters(newPlayers.length);
        return { 
          players: newPlayers,
          settings: { 
            ...state.settings, 
            playersCount: newPlayers.length,
            impostersCount: Math.min(state.settings.impostersCount, maxImps)
          }
        };
      }),

      removePlayer: (id) => set((state) => {
        const newPlayers = state.players.filter(p => p.id !== id);
        const maxImps = getMaxImposters(newPlayers.length);
        return {
          players: newPlayers,
          settings: { 
            ...state.settings, 
            playersCount: newPlayers.length,
            impostersCount: Math.min(state.settings.impostersCount, maxImps)
          }
        };
      }),

      updatePlayer: (id, name) => set((state) => ({
        players: state.players.map(p => p.id === id ? { ...p, name } : p)
      })),

      addCategory: (category) => set((state) => ({
        categories: [...state.categories, { ...category, id: `cat-${Date.now()}`, isCustom: true }]
      })),

      removeCategory: (id) => set((state) => ({
        categories: state.categories.filter(c => c.id !== id),
        selectedCategoryIds: state.selectedCategoryIds.filter(catId => catId !== id)
      })),

      toggleCategorySelection: (id) => set((state) => ({
        selectedCategoryIds: state.selectedCategoryIds.includes(id)
          ? state.selectedCategoryIds.filter(catId => catId !== id)
          : [...state.selectedCategoryIds, id]
      })),

      startGame: () => set((state) => {
        const { settings, players, categories, selectedCategoryIds, gameState } = state;
        
        // Validation
        if (players.length < 3) {
          alert('Need at least 3 players');
          return state;
        }

        const activeCategories = categories.filter(c => selectedCategoryIds.includes(c.id));
        if (activeCategories.length === 0) {
          alert('Select at least one category');
          return state;
        }

        const randomCategory = activeCategories[Math.floor(Math.random() * activeCategories.length)];
        const wordItem = randomCategory.words[Math.floor(Math.random() * randomCategory.words.length)];
        const secretWord = typeof wordItem === 'string' ? wordItem : wordItem.text;
        const allHints = typeof wordItem === 'string' ? [] : (wordItem.hints || []);
        const secretHints = allHints.length > 0 ? [allHints[Math.floor(Math.random() * allHints.length)]] : [];

        // Imposter Selection Logic
        let availablePool = players.map(p => p.id);
        let currentHistory = gameState.imposterHistory || [];
        
        let nonRepeats = availablePool.filter(id => !currentHistory.includes(id));
        const actualImpostersCount = settings.impostersCount || 1;
        
        // If we don't have enough players who haven't been an imposter yet,
        // we must clear the history cycle so everyone is eligible again.
        if (nonRepeats.length < actualImpostersCount) {
          const lastGameImposters = gameState.imposters || [];
          const exceptLast = availablePool.filter(id => !lastGameImposters.includes(id));
          
          // Try to exclude at least the immediate past imposters
          if (exceptLast.length >= actualImpostersCount) {
             currentHistory = [...lastGameImposters];
             nonRepeats = exceptLast;
          } else {
             // Fallback if mathematically impossible
             currentHistory = [];
             nonRepeats = availablePool;
          }
        }

        availablePool = nonRepeats;

        // Shuffle and pick imposters
        const shuffledPool = [...availablePool].sort(() => 0.5 - Math.random());
        const selectedImposters = shuffledPool.slice(0, actualImpostersCount);
        
        const nextHistory = [...currentHistory, ...selectedImposters];

        return {
          gameState: {
            ...gameState,
            currentRoundPlayers: players,
            imposters: selectedImposters,
            imposterHistory: nextHistory,
            secretWord,
            secretCategory: randomCategory.name,
            secretHints,
            currentPlayerIndex: 0,
            phase: 'pass-and-play',
          }
        };
      }),

      nextPlayerReveal: () => set((state) => {
        const { gameState } = state;
        const nextIndex = gameState.currentPlayerIndex + 1;
        
        if (nextIndex >= gameState.currentRoundPlayers.length) {
          return {
            gameState: { ...gameState, phase: 'active' }
          };
        }
        
        return {
          gameState: { ...gameState, currentPlayerIndex: nextIndex }
        };
      }),

      endGame: () => set((state) => ({
        gameState: {
          ...state.gameState,
          phase: 'game-over',
        }
      })),

      resetGame: () => set((state) => ({
        gameState: {
          ...state.gameState,
          phase: 'setup',
          currentPlayerIndex: 0,
        }
      }))
    }),
    {
      name: 'imposter-game-storage',
      version: 1, // Bumping version to force refresh of the new categories
      partialize: (state) => ({
        settings: state.settings,
        players: state.players,
        categories: state.categories,
        selectedCategoryIds: state.selectedCategoryIds,
        gameState: {
          ...state.gameState,
          phase: 'setup', // Always load into setup phase
          currentPlayerIndex: 0,
          imposterHistory: state.gameState.imposterHistory || [], // Keep history
        }
      }),
    }
  )
);
