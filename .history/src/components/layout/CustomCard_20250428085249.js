import React, { useContext } from 'react';
import { Card, CardContent, CardActions, Typography, Box, Button, IconButton, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FavoritesContext } from '../../context/FavoritesContext';

/**
 * Einheitliche Kachelkomponente für das gesamte Projekt
 * 
 * @param {Object} props - Die Komponenten-Props
 * @param {string} props.title - Titel der Kachel
 * @param {string} props.description - Beschreibung der Kachel
 * @param {React.ReactNode} props.icon - Icon-Komponente
 * @param {string} props.path - Navigationspfad (optional)
 * @param {string} props.accentColor - Akzentfarbe (default: 'primary.main')
 * @param {Object} props.stats - Statistikdaten (optional) { value, unit, change }
 * @param {Object} props.additionalInfo - Zusätzliche Informationen (optional)
 * @param {function} props.onClick - Optionale Click-Handler-Funktion
 * @param {boolean} props.favoritable - Gibt an, ob die Karte als Favorit markiert werden kann
 * @param {string} props.cardType - Typ der Karte (für das Favorisieren)
 * @param {string} props.parentMenu - Name des übergeordneten Menüs (optional)
 */
const CustomCard = ({ 
  title, 
  description, 
  icon, 
  path, 
  accentColor = 'primary.main',
  stats,
  additionalInfo,
  onClick,
  children,
  favoritable = true,
  cardType = 'submenu',
  parentMenu = ''
}) => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const theme = useTheme(); // Theme für konsistente Farbgebung

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (path) {
      navigate(path);
    }
  };

  // Prüfen, ob diese Karte bereits favorisiert ist
  const isFavorite = favorites.some(fav => 
    fav.title === title && 
    fav.path === path && 
    fav.cardType === cardType
  );

  // Favoriten-Toggle verarbeiten
  const handleFavoriteToggle = (e) => {
    e.stopPropagation(); // Verhindern, dass der Card-Click ausgelöst wird
    toggleFavorite({
      title,
      description,
      icon,
      path,
      color: accentColor.split('.')[0], // 'primary.main' -> 'primary'
      cardType,
      parentTitle: parentMenu
    });
  };

  // Farbe normalisieren - sicherstellen, dass wir immer eine gültige Farbe haben
  const normalizedColor = accentColor.includes('.') ? 
    theme.palette[accentColor.split('.')[0]][accentColor.split('.')[1]] : 
    theme.palette[accentColor].main;

  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 4,
        },
        cursor: path || onClick ? 'pointer' : 'default',
        borderLeft: '4px solid',
        borderColor: normalizedColor, // Verwende normalisierte Farbe
        position: 'relative', // Für die absolute Positionierung des Favoriten-Icons
        backgroundColor: theme.palette.background.paper, // Explizite Hintergrundfarbe
        color: theme.palette.text.primary, // Explizite Textfarbe
        overflow: 'hidden', // Verhindert Überlauf von Inhalten
        boxSizing: 'border-box', // Konsistentes Box-Modell
        margin: 0, // Konsistente Ränder
        width: '100%' // Sicherstellen einer konsistenten Breite
      }}
      onClick={handleClick}
    >
      {/* Favoriten-Icon */}
      {favoritable && (
        <IconButton
          size="small"
          onClick={handleFavoriteToggle}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 2,
            color: isFavorite ? theme.palette.warning.main : theme.palette.text.disabled,
            '&:hover': {
              color: theme.palette.warning.main,
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            },
            width: '28px',
            height: '28px',
            padding: '4px' // Konsistente Größe des Icon-Buttons
          }}
        >
          {isFavorite ? <StarIcon fontSize="small" /> : <StarBorderIcon fontSize="small" />}
        </IconButton>
      )}

      <CardContent sx={{ 
        padding: 3, 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center',
        '&:last-child': { // Override des standardmäßigen padding-bottom von MUI
          paddingBottom: theme.spacing(3) 
        }
      }}>
        {icon && (
          <Box sx={{ 
            mb: 2, 
            display: 'flex', 
            justifyContent: 'center',
            backgroundColor: `${normalizedColor}15`,  // 15% Transparenz der Akzentfarbe
            borderRadius: '50%',
            padding: '16px',
            width: '64px',
            height: '64px',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            boxSizing: 'content-box' // Konsistente Größenberechnung
          }}>
            {React.cloneElement(icon, { 
              fontSize: "large", 
              sx: { color: normalizedColor, width: '32px', height: '32px' } // Feste Größe für Icons
            })}
          </Box>
        )}
        
        <Typography variant="h6" component="h2" gutterBottom sx={{ 
          fontWeight: 'medium', 
          fontSize: '1.25rem',
          lineHeight: 1.3,
          marginBottom: theme.spacing(1),
          maxWidth: '100%', // Verhindert Textüberlauf
          wordWrap: 'break-word' // Umbruch langer Wörter
        }}>
          {title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ 
          mb: 2,
          fontSize: '0.875rem',
          lineHeight: 1.5,
          maxWidth: '100%', // Verhindert Textüberlauf
          wordWrap: 'break-word', // Umbruch langer Wörter
          height: '2.6em', // Ungefähr 2 Zeilen Text
          overflow: 'hidden', // Text abschneiden, wenn er zu lang ist
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          textOverflow: 'ellipsis'
        }}>
          {description}
        </Typography>
        
        {stats && (
          <Box sx={{ width: '100%', mt: 1 }}>
            <Typography variant="h4" component="div" sx={{ 
              fontWeight: 'bold',
              fontSize: '2rem', // Einheitliche Schriftgröße
              lineHeight: 1.2
            }}>
              {stats.value}{stats.unit && (
                <Typography component="span" variant="body2" sx={{ ml: 0.5 }}>
                  {stats.unit}
                </Typography>
              )}
            </Typography>
            
            {stats.change && (
              <Typography 
                variant="body2" 
                sx={{ 
                  color: stats.change > 0 ? theme.palette.success.main : theme.palette.error.main,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  fontWeight: 'medium'
                }}
              >
                {stats.change > 0 ? '+' : ''}{stats.change}%
              </Typography>
            )}
          </Box>
        )}
        
        {additionalInfo && (
          <Box sx={{ 
            width: '100%', 
            mt: 2,
            borderTop: `1px solid ${theme.palette.divider}`,
            paddingTop: theme.spacing(1)
          }}>
            {Object.entries(additionalInfo).map(([key, value]) => (
              <Typography 
                key={key} 
                variant="body2" 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  fontSize: '0.875rem',
                  padding: '4px 0',
                  borderBottom: `1px dashed ${theme.palette.divider}` // Trennlinien für bessere Lesbarkeit
                }}
              >
                <span>{key}:</span>
                <span>{value}</span>
              </Typography>
            ))}
          </Box>
        )}
        
        {children}
      </CardContent>
      
      {path && (
        <CardActions sx={{ 
          justifyContent: 'center', 
          pb: 2,
          pt: 0, // Reduzierter oberer Abstand
          padding: theme.spacing(0, 2, 2),
          borderTop: 'none' // Entfernt den standardmäßigen Rand
        }}>
          <Button 
            size="small" 
            variant="text"
            color={accentColor.split('.')[0]} // Konsistente Farbpalette
            onClick={(e) => {
              e.stopPropagation(); // Verhindert doppelte Klick-Ereignisse
              navigate(path);
            }}
            sx={{
              textTransform: 'none', // Keine Großbuchstaben
              fontWeight: 'medium',
              fontSize: '0.875rem',
              minWidth: '80px', // Konsistente Breite
              height: '32px' // Konsistente Höhe
            }}
          >
            Öffnen
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default CustomCard;