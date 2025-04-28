import React, { useState, useMemo, createContext, useContext, useEffect } from 'react';
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

// Favorites Context für die Card-Favoriten
export const FavoritesContext = createContext({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
});

// Custom Hook für den Zugriff auf Favoriten
export const useFavoritesContext = () => useContext(FavoritesContext);

function App() {
  // Dark Mode State
  const [darkMode, setDarkMode] = useState(false);

  // Favoriten State
  const [favorites, setFavorites] = useState([]);

  // Toggle Funktion für den Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Optional: Dark Mode-Einstellung im localStorage speichern
    localStorage.setItem('darkMode', !darkMode ? 'true' : 'false');
  };

  // Toggle Funktion für Favoriten
  const toggleFavorite = (cardData) => {
    setFavorites(prevFavorites => {
      // Prüfe, ob die Karte bereits als Favorit existiert
      const existingIndex = prevFavorites.findIndex(fav => fav.title === cardData.title);
      
      let newFavorites;
      if (existingIndex !== -1) {
        // Wenn bereits in Favoriten, entfernen
        newFavorites = prevFavorites.filter(fav => fav.title !== cardData.title);
      } else {
        // Wenn nicht in Favoriten, hinzufügen
        newFavorites = [...prevFavorites, cardData];
      }
      
      // Speichere Favoriten im localStorage
      localStorage.setItem('cardFavorites', JSON.stringify(newFavorites));
      
      return newFavorites;
    });
  };

  // Prüfen, ob eine Karte ein Favorit ist
  const isFavorite = (title) => {
    return favorites.some(fav => fav.title === title);
  };

  // Context Value für den Dark Mode
  const themeContextValue = useMemo(
    () => ({
      darkMode,
      toggleDarkMode,
    }),
    [darkMode]
  );

  // Context Value für Favoriten
  const favoritesContextValue = useMemo(
    () => ({
      favorites,
      toggleFavorite,
      isFavorite
    }),
    [favorites]
  );

  // Bei Start der App: Gespeicherte Einstellungen laden
  useEffect(() => {
    // Dark Mode aus localStorage laden
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      setDarkMode(true);
    }
    
    // Favoriten aus localStorage laden
    const savedFavorites = localStorage.getItem('cardFavorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Fehler beim Laden der Favoriten:', error);
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <FavoritesContext.Provider value={favoritesContextValue}>
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
      </FavoritesContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;