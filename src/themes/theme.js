import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#81C784',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
