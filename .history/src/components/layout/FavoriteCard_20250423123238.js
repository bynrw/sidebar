import React from 'react';
import CustomCard from './CustomCard';
import { useFavoritesContext } from '../../App';

/**
 * Wrapper für CustomCard mit Favoriten-Funktionalität
 * Diese Komponente kann in der gesamten Anwendung verwendet werden,
 * um die Favoriten-Funktionalität konsistent anzuwenden
 */
const FavoriteCard = (props) => {
  const { favorites, handleFavoriteToggle } = props;
  
  // Bereite die Daten für den toggleFavorite-Aufruf vor
  // Icon ist ein React-Element und kann nicht direkt serialisiert werden
  const handleToggleFavorite = () => {
    // Erstelle eine neue Objektkopie ohne das Icon
    const cardDataForStorage = { 
      title: props.title,
      path: props.path,
      color: props.color || 'primary',
      // Bei der Anzeige von Favoriten wird das Icon dynamisch zugewiesen
      // basierend auf dem iconType oder title
      iconType: props.iconType || props.title
    };
    
    handleFavoriteToggle(cardDataForStorage);
  };
  
  // Prüfe, ob die Karte ein Favorit ist
  const checkIsFavorite = () => {
    return favorites && favorites.some(fav => 
      fav.title === props.title && fav.path === props.path
    );
  };
  
  return (
    <CustomCard
      {...props}
      isFavorite={checkIsFavorite()}
      onToggleFavorite={handleToggleFavorite}
    />
  );
};

export default FavoriteCard;