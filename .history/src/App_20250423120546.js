import React, { useState, useMemo, createContext, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

// Layout
import MainLayout from './components/layout/MainLayout';

// Pages
import HomePage from './components/pages/HomePage';
import Erfassung from './components/pages/Erfassung';
import Auswertung from './components/pages/Auswertung';
import Administration from './components/pages/Administration';
import Hilfe from './components/pages/Hilfe';
import Info from './components/pages/Info';
import Einsatz from './components/pages/Einsatz';
import Benutzerverwaltung from './components/pages/Benutzerverwaltung';
import MediRIG from './components/pages/MediRIG';
import Jahresstatistik from './components/pages/Jahresstatistik';

// Theme Context für den Dark Mode
export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

// Custom Hook für den Zugriff auf das Theme
export const useThemeContext = () => useContext(ThemeContext);

function App() {
  // Dark Mode State
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Funktion für den Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Optional: Dark Mode-Einstellung im localStorage speichern
    localStorage.setItem('darkMode', !darkMode ? 'true' : 'false');
  };

  // Context Value für den Dark Mode
  const themeContextValue = useMemo(
    () => ({
      darkMode,
      toggleDarkMode,
    }),
    [darkMode]
  );

  // Bei Start der App: Gespeicherte Dark Mode-Einstellung laden (optional)
  React.useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="erfassung/*" element={<Erfassung />} />
            <Route path="medirig/*" element={<MediRIG />} />
            <Route path="auswertung/*" element={<Auswertung />} />
            <Route path="administration/*" element={<Administration />} />
            <Route path="hilfe/*" element={<Hilfe />} />
            <Route path="info/*" element={<Info />} />
            <Route path="einsatz/*" element={<Einsatz />} />
            <Route path="benutzerverwaltung/*" element={<Benutzerverwaltung />} />
            <Route path="jahresstatistik/*" element={<Jahresstatistik />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;