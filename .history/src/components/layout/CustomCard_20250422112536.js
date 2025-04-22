import React from 'react';
import { Card, CardContent, CardActions, Typography, Box, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

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
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (path) {
      navigate(path);
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Verhindert, dass das Klickereignis zur übergeordneten Karte weitergeleitet wird
    setIsFavorite(!isFavorite);
  };

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
        borderColor: accentColor,
        position: 'relative'
      }}
      onClick={handleClick}
    >
      {/* Stern-Icon in der oberen rechten Ecke */}
      <IconButton 
        sx={{ 
          position: 'absolute', 
          top: 8, 
          right: 8, 
          zIndex: 1,
          color: isFavorite ? 'gold' : 'grey.400',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          width: 32,
          height: 32,
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }
        }}
        onClick={handleFavoriteClick}
        size="small"
      >
        {isFavorite ? <StarIcon /> : <StarBorderIcon />}
      </IconButton>
      
      <CardContent sx={{ 
        padding: 3, 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center' 
      }}>
        {icon && (
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
            {React.cloneElement(icon, { 
              fontSize: "large", 
              sx: { color: accentColor } 
            })}
          </Box>
        )}
        
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        
        {stats && (
          <Box sx={{ width: '100%', mt: 1 }}>
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
          <Box sx={{ width: '100%', mt: 2 }}>
            {Object.entries(additionalInfo).map(([key, value]) => (
              <Typography key={key} variant="body2" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{key}:</span>
                <span>{value}</span>
              </Typography>
            ))}
          </Box>
        )}
        
        {children}
      </CardContent>
      
      {path && (
        <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button size="small" color="primary" onClick={() => navigate(path)}>
            Öffnen
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default CustomCard;