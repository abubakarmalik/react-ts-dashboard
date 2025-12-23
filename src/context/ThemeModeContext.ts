import { createContext, useContext } from 'react';

export type ThemeModeContextType = {
  mode: 'light' | 'dark';
  toggleMode: () => void;
};

export const ThemeModeContext = createContext<ThemeModeContextType | null>(
  null,
);

export const useThemeMode = () => {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) {
    throw new Error('useThemeMode must be used inside ThemeModeProvider');
  }
  return ctx;
};
