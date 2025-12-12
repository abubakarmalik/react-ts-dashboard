import { createTheme } from '@mui/material/styles';
import palette from './palette';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: '"Montserrat", Arial, sans-serif',
  },
});
