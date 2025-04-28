import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Avatar,
  Divider,
  useTheme,
  Alert
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import DescriptionIcon from '@mui/icons-material/Description';
import BarChartIcon from '@mui/icons-material/BarChart';
import SecurityIcon from '@mui/icons-material/Security';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useFavoritesContext } from '../../App';
import FavoriteCard from '../layout/FavoriteCard';

// Icon-Mapping für die Wiederherstellung von Icons aus gespeicherten Favoriten
const iconMapping = {
  "MANV Erfassung": <LocalHospitalIcon />,
  "Sirenenalarm": <NotificationImportantIcon />,
  "Einsatzstatistik": <BarChartIcon />,
  "Benutzerverwaltung": <PeopleAltIcon />,
  // Default Icon für unbekannte Kartentypen
  "default": <DescriptionIcon />
};

// Schnellzugriff-Komponente
const QuickAccessButton = ({ icon, title, path, color, borderStyle, iconType }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  
  // Bestimme das anzuzeigende Icon - entweder übergeben oder aus dem Mapping
  const displayIcon = icon || (iconType && iconMapping[iconType]) || iconMapping["default"];

  return (
    <Card
      elevation={0}
      sx={{
        textAlign: 'center',
        height: '100%',
        cursor: 'pointer',
        borderRadius: 2,
        border: '1px solid rgba(0,0,0,0.05)',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          transform: 'translateY(-4px)'
        },
        transition: 'transform 0.2s, box-shadow 0.2s',
        ...borderStyle
      }}
      onClick={() => navigate(path)}
    >
      <CardContent sx={{ p: 2 }}>
        <Avatar
          sx={{
            width: 48,
            height: 48,
            mx: 'auto',
            mb: 1,
            bgcolor: theme.palette[color].main
          }}
        >
          {displayIcon}
        </Avatar>
        <Typography variant="body2" fontWeight="medium">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Hauptkomponente
function HomePage() {
  const theme = useTheme();
  const { favorites, toggleFavorite } = useFavoritesContext();
  const navigate = useNavigate();

  // Beispiel-Karten, die auf der Hauptseite angezeigt werden könnten
  const exampleCards = [
    {
      title: "MANV Erfassung",
      description: "Massenanfall von Verletzten und Erkrankten dokumentieren",
      icon: <LocalHospitalIcon />,
      path: "/medirig/manv",
      accentColor: "error.main"
    },
    {
      title: "Sirenenalarm",
      description: "Auslösung und Verwaltung von Sirenen",
      icon: <NotificationImportantIcon />,
      path: "/einsatz/sirenen",
      accentColor: "warning.main"
    },
    {
      title: "Einsatzstatistik",
      description: "Auswertung und Analyse von Einsätzen",
      icon: <BarChartIcon />,
      path: "/auswertung/statistik",
      accentColor: "info.main"
    },
    {
      title: "Benutzerverwaltung",
      description: "Verwaltung von Benutzern und Berechtigungen",
      icon: <PeopleAltIcon />,
      path: "/benutzerverwaltung",
      accentColor: "primary.main"
    }
  ];

  return (
    <Box>
      {/* Favorisierte Karten im Schnellzugriff */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 3,
          background: 'linear-gradient(135deg, rgba(0, 90, 158, 0.04) 0%, rgba(0, 90, 158, 0.08) 100%)',
          border: '1px solid rgba(0,0,0,0.05)',
          mb: 4
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <SecurityIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
          Schnellzugriff
        </Typography>
        <Divider sx={{ my: 2 }} />
        
        {favorites.length > 0 ? (
          <Grid container spacing={2}>
            {favorites.map((favorite) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={favorite.title}>
                <QuickAccessButton
                  icon={null} // Icon explizit auf null setzen, um das Mapping zu nutzen
                  iconType={favorite.iconType || favorite.title}
                  title={favorite.title}
                  path={favorite.path}
                  color={favorite.accentColor?.split('.')[0] || "primary"}
                  borderStyle={{ 
                    borderLeft: `4px solid ${favorite.accentColor || theme.palette.primary.main}` 
                  }}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Alert 
            severity="info" 
            icon={<StarBorderIcon />}
            sx={{ 
              borderRadius: 2, 
              backgroundColor: 'rgba(0, 151, 178, 0.08)',
              '& .MuiAlert-icon': {
                color: 'warning.main'
              }
            }}
          >
            Füge Karten zu deinen Favoriten hinzu, indem du auf das Stern-Symbol klickst.
          </Alert>
        )}
      </Paper>
      
      {/* Beispielkarten zum Favorisieren */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 3,
          background: 'linear-gradient(135deg, rgba(245, 156, 0, 0.04) 0%, rgba(245, 156, 0, 0.08) 100%)',
          border: '1px solid rgba(0,0,0,0.05)'
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <StarIcon sx={{ mr: 1, color: theme.palette.warning.main }} />
          Verfügbare Karten
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={3}>
          {exampleCards.map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={card.title}>
              <FavoriteCard 
                title={card.title}
                description={card.description}
                icon={card.icon}
                path={card.path}
                accentColor={card.accentColor}
                favorites={favorites}
                handleFavoriteToggle={toggleFavorite}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}

export default HomePage;