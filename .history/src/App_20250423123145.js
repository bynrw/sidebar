import React, { useState, useMemo, createContext, useContext, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
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
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Favoriten toggle-Funktion
  const handleFavoriteToggle = (item) => {
    setFavorites(prevFavorites => {
      // Prüfen ob das Item bereits in den Favoriten ist
      const favoriteIndex = prevFavorites.findIndex(
        fav => fav.title === item.title && fav.path === item.path
      );
      
      let newFavorites;
      if (favoriteIndex !== -1) {
        // Favorit entfernen wenn er bereits existiert
        newFavorites = prevFavorites.filter((_, index) => index !== favoriteIndex);
      } else {
        // Favorit hinzufügen wenn er noch nicht existiert
        newFavorites = [...prevFavorites, item];
      }
      
      // Favoriten im localStorage speichern
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  // Modus toggle-Funktion
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  const theme = createTheme(getThemeOptions(darkMode));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <MainLayout 
              darkMode={darkMode} 
              toggleDarkMode={toggleDarkMode}
              favorites={favorites}
              handleFavoriteToggle={handleFavoriteToggle}
            />
          }>
            <Route index element={<HomePage />} />
            <Route path="erfassung" element={<Erfassung />} />
            <Route path="auswertung" element={<Auswertung />} />
            <Route path="einsatz" element={<Einsatz />} />
            <Route path="jahresstatistik" element={<Jahresstatistik />} />
            <Route path="admin" element={<Administration />} />
            <Route path="admin/users" element={<Benutzerverwaltung />} />
            <Route path="medirig" element={<MediRIG />} />
            <Route path="info" element={<Info />} />
            <Route path="hilfe" element={<Hilfe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;