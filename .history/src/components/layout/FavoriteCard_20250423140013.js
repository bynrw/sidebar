import React from 'react';
import CustomCard from './CustomCard';
import { useFavoritesContext } from '../../App';
import { Chip, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/**
 * Wrapper für CustomCard mit Favoriten-Funktionalität
 * Diese Komponente kann in der gesamten Anwendung verwendet werden,
 * um die Favoriten-Funktionalität konsistent anzuwenden
 */
const FavoriteCard = (props) => {
  // Wir beziehen jetzt die Daten aus dem Context statt aus den Props
  const { favorites, toggleFavorite } = useFavoritesContext();
  const theme = useTheme();
  
  // Bestimme die Menüfarbe basierend auf accentColor oder der Kategorie
  const getMenuColor = () => {
    // Extrahiere den Farbtyp aus dem accentColor (z.B. "primary.main" -> "primary")
    if (props.accentColor) {
      const colorType = props.accentColor.split('.')[0];
      return colorType;
    }
    
    // Fallback-Werte basierend auf dem Pfad oder Titel
    if (props.path) {
      if (props.path.includes('/einsatz')) return 'error';
      if (props.path.includes('/erfassung')) return 'primary';
      if (props.path.includes('/auswertung')) return 'secondary';
      if (props.path.includes('/jahresstatistik')) return 'secondary';
      if (props.path.includes('/administration')) return 'info';
      if (props.path.includes('/benutzerverwaltung')) return 'primary';
      if (props.path.includes('/hilfe')) return 'success';
      if (props.path.includes('/medical')) return 'medical';
      if (props.path.includes('/fire')) return 'fire';
      if (props.path.includes('/police')) return 'police';
      if (props.path.includes('/tech')) return 'tech';
    }
    
    // Standardwert
    return 'primary';
  };
  
  // Bestimme den Anzeigenamen für den Chip
  const getMenuName = () => {
    if (props.path) {
      if (props.path.includes('/einsatz')) return 'Einsatz';
      if (props.path.includes('/erfassung')) return 'Erfassung';
      if (props.path.includes('/auswertung')) return 'Auswertung';
      if (props.path.includes('/jahresstatistik')) return 'Statistik';
      if (props.path.includes('/administration')) return 'Admin';
      if (props.path.includes('/benutzerverwaltung')) return 'Benutzer';
      if (props.path.includes('/hilfe')) return 'Hilfe';
      if (props.path.includes('/medical')) return 'Medizin';
      if (props.path.includes('/fire')) return 'Feuer';
      if (props.path.includes('/police')) return 'Polizei';
      if (props.path.includes('/tech')) return 'Technik';
    }
    
    // Standardwert
    return 'Menü';
  };
  
  // Bereite die Daten für den toggleFavorite-Aufruf vor
  // Icon ist ein React-Element und kann nicht direkt serialisiert werden
  const handleToggleFavorite = () => {
    // Erstelle eine neue Objektkopie ohne das Icon
    const cardDataForStorage = { 
      title: props.title,
      path: props.path,
      accentColor: props.accentColor || 'primary.main',
      // Bei der Anzeige von Favoriten wird das Icon dynamisch zugewiesen
      // basierend auf dem iconType oder title
      iconType: props.iconType || props.title
    };
    
    toggleFavorite(cardDataForStorage);
  };
  
  // Prüfe, ob die Karte ein Favorit ist
  const checkIsFavorite = () => {
    return favorites && favorites.some(fav => 
      fav.title === props.title && fav.path === props.path
    );
  };
  
  // Menüfarbe und Name für Chip
  const menuColor = getMenuColor();
  const menuName = getMenuName();
  
  // Erstelle erweiterte Props mit Chip
  const enhancedProps = {
    ...props,
    children: (
      <Box sx={{ mt: 'auto', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Chip
          size="small"
          label={menuName}
          color={menuColor}
          sx={{
            height: 22,
            fontSize: '0.7rem',
            fontWeight: 500,
            borderLeft: '4px solid',
            borderColor: `${menuColor}.main`,
            marginTop: 1
          }}
        />
      </Box>
    )
  };
  
  return (
    <CustomCard
      {...enhancedProps}
      isFavorite={checkIsFavorite()}
      onToggleFavorite={handleToggleFavorite}
    />
  );
};

export default FavoriteCard;