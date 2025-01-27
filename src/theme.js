import { createTheme } from '@mui/material/styles';

const theme = (mode) =>
  createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#1976d2', // Blue
      },
      secondary: {
        main: '#dc004e', // Red
      },
      background: {
        default: mode === 'light' ? '#f4f6f8' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
      },
      text: {
        primary: mode === 'light' ? '#333' : '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            padding: '16px',
            margin: '16px 0',
            borderRadius: '8px',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            backgroundColor: mode === 'light' ? '#1976d2' : '#333',
          },
        },
      },
    },
  });

export default theme;
