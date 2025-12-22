import type { PaletteOptions } from '@mui/material/styles';

const palette = (mode: 'light' | 'dark'): PaletteOptions => ({
  mode,
  primary: {
    main: mode === 'light' ? '#FF6767' : '#FF5252',
    light: mode === 'light' ? '#ff7878' : '#FF6B6B',
  },
  secondary: {
    main: mode === 'light' ? '#F24E1E' : '#FF5722',
    light: mode === 'light' ? '#fa6031ff' : '#FF6F43',
  },
  error: {
    main: mode === 'light' ? '#F21E1E' : '#EF5350',
  },
  success: {
    main: mode === 'light' ? '#05A301' : '#66BB6A',
  },
  info: {
    main: mode === 'light' ? '#0225FF' : '#42A5F5',
    light: mode === 'light' ? '#3ABEFF' : '#64B5F6',
  },
  background: {
    default: mode === 'light' ? '#F8F8F8' : '#121212',
    paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
  },
  text: {
    primary: mode === 'light' ? '#000000' : '#FFFFFF',
    secondary: mode === 'light' ? '#FF6767' : '#FF5252',
    disabled: mode === 'light' ? '#747474' : '#9E9E9E',
  },
  divider: mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)',
});

export default palette;
