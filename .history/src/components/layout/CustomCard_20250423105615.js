import React from 'react';
import { Card, CardContent, CardActions, Typography, Box, Button, useTheme, useMediaQuery } from '@mui/material';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (path) {
      navigate(path);
    }
  };

  // Dynamische Höheneinstellungen je nach Bildschirmgröße
  const cardHeight = isMobile ? 260 : 280;
  const iconSize = isMobile ? 56 : 64;
  const titleHeight = isMobile ? 28 : 32;
  const descriptionHeight = isMobile ? 54 : 60;

  return (
    <Card 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        height: cardHeight,
        width: '100%', // Ermöglicht Responsive-Verhalten innerhalb des Grid-Items
        m: 0,
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 4,
        },
        cursor: path || onClick ? 'pointer' : 'default',
        borderLeft: '4px solid',
        borderColor: accentColor,
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)' // Konsistenter Schatten für alle Karten
      }}
      onClick={handleClick}
    >
      <CardContent sx={{ 
        p: isMobile ? 2 : 3, 
        height: path ? `calc(100% - ${isMobile ? 40 : 48}px)` : '100%',
        boxSizing: 'border-box',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'flex-start', // Ausrichtung am oberen Rand
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {icon && (
          <Box sx={{ 
            mb: 2, 
            display: 'flex', 
            justifyContent: 'center',
            backgroundColor: `${accentColor}15`,
            borderRadius: '50%',
            padding: isMobile ? '12px' : '16px',
            width: iconSize,
            height: iconSize,
            minHeight: iconSize,
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            {React.cloneElement(icon, { 
              fontSize: isMobile ? "medium" : "large", 
              sx: { color: accentColor } 
            })}
          </Box>
        )}
        
        <Typography 
          variant={isMobile ? "subtitle1" : "h6"}
          component="h2" 
          gutterBottom 
          sx={{ 
            height: titleHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1.2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '100%',
            fontWeight: 600
          }}
        >
          {title}
        </Typography>
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            height: descriptionHeight,
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
          <Box sx={{ width: '100%', mt: 1, height: isMobile ? 40 : 50 }}>
            <Typography variant={isMobile ? "h5" : "h4"} component="div" sx={{ fontWeight: 'bold' }}>
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
          <Box sx={{ width: '100%', mt: 2, maxHeight: isMobile ? 50 : 60, overflow: 'hidden' }}>
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
          pb: isMobile ? 1 : 1.5,
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: isMobile ? 40 : 48,
          backgroundColor: 'background.paper'
        }}>
          <Button 
            size="small" 
            color="primary" 
            onClick={(e) => {
              e.stopPropagation();
              navigate(path);
            }}
            sx={{
              borderRadius: '20px',
              px: 2,
              fontWeight: 500,
              textTransform: 'none' // Moderner Look ohne Großbuchstaben
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