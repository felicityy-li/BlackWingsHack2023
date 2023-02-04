import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#6B37AF',
    },
    secondary: {
      main: '#181B68',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;