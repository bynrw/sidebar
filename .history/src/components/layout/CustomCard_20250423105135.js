import React from 'react';
import { Card, CardContent, CardActions, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
  children
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (path) {
      navigate(path);
    }
  };

  return (
    <Card 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        height: 280, // Feste Höhe als Zahl für konsistentere Anwendung
        m: 0, // Keine Margins für konsistentere Größe
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 4,
        },
        cursor: path || onClick ? 'pointer' : 'default',
        borderLeft: '4px solid',
        borderColor: accentColor,
        position: 'relative', // Für absolute Positionierung des Buttons
        borderRadius: '4px',
        overflow: 'hidden' // Verhindert jegliches Überlaufen
      }}
      onClick={handleClick}
    >
      <CardContent sx={{ 
        p: 3, 
        height: path ? 'calc(100% - 48px)' : '100%', // Feste Höhe, abzüglich der Aktionsleiste falls vorhanden
        boxSizing: 'border-box', // Wichtig: Padding ist Teil der Höhe
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center',
        overflow: 'hidden' // Verhindert Überlauf
      }}>
        {icon && (
          <Box sx={{ 
            mb: 2, 
            display: 'flex', 
            justifyContent: 'center',
            backgroundColor: `${accentColor}15`,  // 15% Transparenz der Akzentfarbe
            borderRadius: '50%',
            padding: '16px',
            width: 64,
            height: 64,
            minHeight: 64, // Verhindert Komprimierung
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            {React.cloneElement(icon, { 
              fontSize: "large", 
              sx: { color: accentColor } 
            })}
          </Box>
        )}
        
        <Typography 
          variant="h6" 
          component="h2" 
          gutterBottom 
          sx={{ 
            height: 32, // Feste Höhe für den Titel
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1.2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '100%'
          }}
        >
          {title}
        </Typography>
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            height: 60, // Feste Höhe für 3 Zeilen Text
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            lineHeight: 1.5
          }}
        >
          {description}
        </Typography>
        
        {stats && (
          <Box sx={{ width: '100%', mt: 1, height: 50 }}>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              {stats.value}{stats.unit && <Typography component="span" variant="body2">{stats.unit}</Typography>}
            </Typography>
            
            {stats.change && (
              <Typography 
                variant="body2" 
                sx={{ 
                  color: stats.change > 0 ? 'success.main' : 'error.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {stats.change > 0 ? '+' : ''}{stats.change}%
              </Typography>
            )}
          </Box>
        )}
        
        {additionalInfo && (
          <Box sx={{ width: '100%', mt: 2, maxHeight: 60, overflow: 'hidden' }}>
            {Object.entries(additionalInfo).map(([key, value], idx) => (
              idx < 3 && (
                <Typography key={key} variant="body2" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{key}:</span>
                  <span>{value}</span>
                </Typography>
              )
            ))}
          </Box>
        )}
        
        {children}
      </CardContent>
      
      {path && (
        <CardActions sx={{ 
          justifyContent: 'center', 
          p: 0,
          pb: 1.5,
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 48, // Feste Höhe für die Actions-Leiste
          backgroundColor: 'background.paper'
        }}>
          <Button size="small" color="primary" onClick={(e) => {
            e.stopPropagation(); // Verhindert doppelte Klick-Ereignisse
            navigate(path);
          }}>
            Öffnen
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default CustomCard;