import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#005a9e', // NRW-Blau
      light: '#3b89cf',
      dark: '#003f70',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e30613', // Feuerwehr-Rot
      light: '#ff5440',
      dark: '#a90000',
      contrastText: '#ffffff',
    },
    emergency: {
      main: '#e30613', // Notfall-Rot
      contrastText: '#ffffff'
    },
    medical: {
      main: '#2e7d32', // Medizinisch Grün
      contrastText: '#ffffff'
    },
    fire: {
      main: '#ff6d00', // Feuer Orange
      contrastText: '#ffffff'
    },
    police: {
      main: '#1a237e', // Polizei Blau
      contrastText: '#ffffff'
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
    },
    info: {
      main: '#0288d1',
      light: '#29b6f6',
      dark: '#01579b',
    },
    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#0070c9',
          },
        },
        containedSecondary: {
          '&:hover': {
            backgroundColor: '#cf0000',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.08)',
          borderRadius: 12,
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: 'none',
          boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default theme;