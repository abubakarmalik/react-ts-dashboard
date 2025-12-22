import type { PaletteOptions } from '@mui/material/styles';

const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#FF6767',
    light: '#ff7878ff',
    // contrastText: '',
  },
  secondary: {
    main: '#F24E1E',
    light: '#fa6031ff',
    // contrastText: '',
  },
  error: {
    main: '#F21E1E',
    // light: '',
    // contrastText: '',
  },
  success: {
    main: '#05A301',
    // light: '',
    // contrastText: '',
  },
  // warning: {
  //   main: '',
  //   light: '',
  //   contrastText: '',
  // },

  info: {
    main: '#0225FF',
    light: '#3ABEFF',
    // contrastText: '',
  },
  background: {
    default: '#F8F8F8',
    // paper: '#FF6767',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#000000',
    secondary: '#FF6767',
    disabled: '#747474',
  },
};

export default palette;
