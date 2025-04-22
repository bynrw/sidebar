import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#005A9E', // Blau für Allgemeine Polizei/Behörden
      light: '#3D7CAF',
      dark: '#004B82',
      contrastText: '#fff',
    },
    secondary: {
      main: '#43425D', // Dunkel für Navigation und Überschriften
      light: '#5F5E74',
      dark: '#33324B',
      contrastText: '#fff',
    },
    error: {
      main: '#E30613', // Rot für kritische Alarme und Notfälle
      light: '#FF4D58',
      dark: '#C20000',
      contrastText: '#fff',
    },
    warning: {
      main: '#F59C00', // Orange für Warnungen
      light: '#FFB946',
      dark: '#D68000',
      contrastText: '#fff',
    },
    info: {
      main: '#0097B2', // Türkis für Informationen
      light: '#27B7CF',
      dark: '#007A92',
      contrastText: '#fff',
    },
    success: {
      main: '#21A67A', // Grün für Erfolg und Verfügbarkeit
      light: '#4BC49E',
      dark: '#158962',
      contrastText: '#fff',
    },
    medical: { // Spezifisch für medizinische Einsätze
      main: '#9F0086',
      light: '#C040AA',
      dark: '#7D0069',
      contrastText: '#fff',
    },
    fire: { // Spezifisch für Feuerwehreinsätze
      main: '#FF3A2F',
      light: '#FF6B63',
      dark: '#D81B15',
      contrastText: '#fff',
    },
    police: { // Spezifisch für Polizeieinsätze
      main: '#3A6EA8',
      light: '#5D8FC1',
      dark: '#2D5990',
      contrastText: '#fff',
    },
    tech: { // Für technische Hilfseinsätze
      main: '#706D6E',
      light: '#908E8F',
      dark: '#575455',
      contrastText: '#fff',
    },
    background: {
      default: '#F7F9FC',
      paper: '#FFFFFF',
      sidebar: '#FCFCFC',
      submenu: 'rgba(159, 0, 134, 0.03)',
    },
    text: {
      primary: '#2A3842',
      secondary: '#64748B',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
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
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
    submenu: {
      fontSize: '0.815rem',
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#333333',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '6px 16px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          },
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#0068b8',
            boxShadow: '0 4px 12px rgba(0, 90, 158, 0.3)',
          },
        },
        containedSuccess: {
          '&:hover': {
            backgroundColor: '#25b789',
            boxShadow: '0 4px 12px rgba(33, 166, 122, 0.3)',
          },
        },
        containedError: {
          '&:hover': {
            backgroundColor: '#f0071c',
            boxShadow: '0 4px 12px rgba(227, 6, 19, 0.3)',
          },
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FCFCFC',
          color: '#333333',
          borderRight: '1px solid rgba(0,0,0,0.05)',
          boxShadow: '0 0 20px rgba(0,0,0,0.02)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: '2px 8px',
          transition: 'all 0.2s ease',
          '&.Mui-selected': {
            backgroundColor: 'rgba(0, 90, 158, 0.08)',
            color: '#005A9E',
            '&:hover': {
              backgroundColor: 'rgba(0, 90, 158, 0.12)',
            },
            '& .MuiListItemIcon-root': {
              color: '#005A9E',
            },
          },
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.875rem',
          minWidth: 100,
          padding: '12px 16px',
          '&.Mui-selected': {
            color: '#005A9E',
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 90, 158, 0.04)',
          '& .MuiTableCell-head': {
            color: '#005A9E',
            fontWeight: 600,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontSize: '0.875rem',
        },
        standardSuccess: {
          backgroundColor: 'rgba(33, 166, 122, 0.12)',
          color: '#21A67A',
        },
        standardError: {
          backgroundColor: 'rgba(227, 6, 19, 0.12)',
          color: '#E30613',
        },
        standardWarning: {
          backgroundColor: 'rgba(245, 156, 0, 0.12)',
          color: '#F59C00',
        },
        standardInfo: {
          backgroundColor: 'rgba(0, 151, 178, 0.12)',
          color: '#0097B2',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          fontWeight: 500,
        },
        colorPrimary: {
          backgroundColor: 'rgba(0, 90, 158, 0.1)',
          color: '#005A9E',
        },
        colorSecondary: {
          backgroundColor: 'rgba(67, 66, 93, 0.1)',
          color: '#43425D',
        },
        colorError: {
          backgroundColor: 'rgba(227, 6, 19, 0.1)',
          color: '#E30613',
        },
        colorWarning: {
          backgroundColor: 'rgba(245, 156, 0, 0.1)',
          color: '#F59C00',
        },
        colorInfo: {
          backgroundColor: 'rgba(0, 151, 178, 0.1)',
          color: '#0097B2',
        },
        colorSuccess: {
          backgroundColor: 'rgba(33, 166, 122, 0.1)',
          color: '#21A67A',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontWeight: 600,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 6,
          fontSize: '0.75rem',
          padding: '6px 12px',
        },
      },
    },
    MuiCollapse: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(159, 0, 134, 0.03)',
          margin: '0 8px',
          borderRadius: 8,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 40,
          color: '#64748B',
        },
      },
    },
  },
});

export default theme;