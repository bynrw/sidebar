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
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import WarningIcon from '@mui/icons-material/Warning';
import MapIcon from '@mui/icons-material/Map';
import PublicIcon from '@mui/icons-material/Public';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import BusinessIcon from '@mui/icons-material/Business';
import { useFavoritesContext } from '../../App';

// Icon-Mapping für die Wiederherstellung von Icons aus gespeicherten Favoriten
const iconMapping = {
  "MANV Erfassung": <LocalHospitalIcon />,
  "Sirenenalarm": <NotificationImportantIcon />,
  "Einsatzstatistik": <BarChartIcon />,
  "Benutzerverwaltung": <PeopleAltIcon />,
  "NRW-Einheiten": <GroupWorkIcon />,
  "Schadenslage": <WarningIcon />,
  "DZ/Karte": <MapIcon />,
  "Gesamt NRW": <PublicIcon />,
  "Krisenstab/SAE": <MeetingRoomIcon />,
  "Landeslagen": <BusinessIcon />,
  // Default Icon für unbekannte Kartentypen
  "default": <DescriptionIcon />
};

// Schnellzugriff-Komponente
const QuickAccessButton = ({ icon, title, path, color, borderStyle, iconType }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  
  // Bestimme das anzuzeigende Icon - entweder übergeben oder aus dem Mapping
  const displayIcon = icon || (iconType && iconMapping[iconType]) || iconMapping["default"];

  // Extrahiere die Farbkomponente, wenn sie im Format "error.main" ist
  let colorName = color;
  if (typeof color === 'string' && color.includes('.')) {
    colorName = color.split('.')[0];
  }

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
            bgcolor: theme.palette[colorName]?.main || theme.palette.primary.main
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
  const { favorites } = useFavoritesContext();
  const navigate = useNavigate();

  return (
    <Box>
      {/* Favorisierte Karten im Schnellzugriff */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 3,
          background: 'linear-gradient(135deg, rgba(0, 90, 158, 0.04) 0%, rgba(0, 90, 158, 0.08) 100%)',
          border: '1px solid rgba(0,0,0,0.05)'
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
    </Box>
  );
}

export default HomePage;