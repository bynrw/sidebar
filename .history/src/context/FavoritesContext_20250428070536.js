import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  // Favoriten aus dem localStorage laden, falls vorhanden
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Favoriten im localStorage speichern, wenn sie sich ändern
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Funktion zum Umschalten des Favoritenstatus
  const toggleFavorite = (item) => {
    setFavorites(prevFavorites => {
      // Prüfen, ob das Element bereits in den Favoriten ist
      const existingIndex = prevFavorites.findIndex(fav => 
        fav.title === item.title && 
        fav.path === item.path && 
        fav.cardType === item.cardType
      );
      
      if (existingIndex !== -1) {
        // Wenn bereits in Favoriten, entfernen
        return prevFavorites.filter((_, index) => index !== existingIndex);
      } else {
        // Wenn nicht in Favoriten, hinzufügen
        return [...prevFavorites, item];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};