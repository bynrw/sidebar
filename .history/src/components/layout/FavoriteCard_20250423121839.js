import React from 'react';
import CustomCard from './CustomCard';
import { useFavoritesContext } from '../../App';

/**
 * Wrapper für CustomCard mit Favoriten-Funktionalität
 * Diese Komponente kann in der gesamten Anwendung verwendet werden,
 * um die Favoriten-Funktionalität konsistent anzuwenden
 */
const FavoriteCard = (props) => {
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  
  // Bereite die Daten für den toggleFavorite-Aufruf vor
  // Icon ist ein React-Element und kann nicht direkt serialisiert werden
  const handleToggleFavorite = () => {
    // Erstelle eine neue Objektkopie ohne das Icon
    const cardDataForStorage = { ...props };
    // Entferne das Icon-Prop, da es nicht serialisiert werden kann
    delete cardDataForStorage.icon;
    // Bei der Anzeige von Favoriten wird das Icon dynamisch zugewiesen
    // basierend auf dem iconType oder title
    cardDataForStorage.iconType = props.title;
    
    toggleFavorite(cardDataForStorage);
  };
  
  return (
    <CustomCard
      {...props}
      isFavorite={isFavorite(props.title)}
      onToggleFavorite={handleToggleFavorite}
    />
  );
};

export default FavoriteCard;