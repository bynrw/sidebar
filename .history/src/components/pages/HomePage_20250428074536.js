import React, { useContext } from 'react';
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
  Chip
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
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import StarIcon from '@mui/icons-material/Star';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FavoritesContext } from '../../context/FavoritesContext';

// Schnellzugriff-Komponente
const QuickAccessButton = ({ icon, title, path, color, borderStyle }) => {
  const navigate = useNavigate();
  const theme = useTheme();

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
          {icon}
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
  const navigate = useNavigate();
  const { favorites } = useContext(FavoritesContext);

  // Gruppiere die Favoriten nach cardType
  const groupedFavorites = favorites.reduce((groups, favorite) => {
    const type = favorite.cardType || 'menu';
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(favorite);
    return groups;
  }, {});

  // Default-Icons für jede Kategorie, falls das Icon in den Favoriten fehlt oder ungültig ist
  const defaultIcons = {
    menu: <SecurityIcon />,
    erfassung: <DescriptionIcon />,
    sirene: <NotificationImportantIcon />,
    schadenslage: <WarningAmberIcon />,
    opta: <ListAltIcon />,
    krisenstab: <PeopleAltIcon />,
    medirig: <LocalHospitalIcon />,
    standorte: <LocationOnIcon />
  };

  // Icon sicher rendern - gibt ein Standard-Icon zurück wenn item.icon nicht valide ist
  const renderSafeIcon = (item, type) => {
    // Icons können nicht direkt aus localStorage wiederhergestellt werden,
    // daher verwenden wir Default-Icons basierend auf dem Typ
    return defaultIcons[type] || <StarIcon />;
  };

  return (
    <Box>
      {/* Favoriten-Bereich */}
      {favorites.length > 0 && (
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.04) 0%, rgba(255, 193, 7, 0.08) 100%)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <StarIcon sx={{ mr: 1, color: theme.palette.warning.main }} />
            Meine Favoriten
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* Menü-Favoriten */}
          {favorites.filter(fav => !fav.cardType || fav.cardType === 'menu').length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                Menüs
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {favorites
                  .filter(fav => !fav.cardType || fav.cardType === 'menu')
                  .map((item, index) => (
                    <Chip
                      key={`menu-${index}`}
                      icon={renderSafeIcon(item, 'menu')}
                      label={item.title}
                      onClick={() => navigate(item.path)}
                      size="medium"
                      color={item.color || 'primary'}
                      sx={{ 
                        borderRadius: 2,
                        border: `1px solid ${theme.palette[item.color || 'primary'].main}`,
                        '&:hover': {
                          boxShadow: `0 0 0 1px ${theme.palette[item.color || 'primary'].main}`,
                          backgroundColor: `${theme.palette[item.color || 'primary'].light}30`
                        }
                      }}
                    />
                  ))}
              </Box>
            </Box>
          )}

          {/* CustomCard-Favoriten - Erfassung */}
          {groupedFavorites['erfassung'] && groupedFavorites['erfassung'].length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                Erfassung
              </Typography>
              <Grid container spacing={2}>
                {groupedFavorites['erfassung'].map((item, index) => (
                  <Grid item xs={6} sm={3} md={2} key={`erfassung-${index}`}>
                    <QuickAccessButton
                      icon={renderSafeIcon(item, 'erfassung')}
                      title={item.title}
                      path={item.path}
                      color={item.color || 'primary'}
                      borderStyle={{ borderLeft: `4px solid ${theme.palette[item.color || 'primary'].main}` }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Sirene-Favoriten */}
          {groupedFavorites['sirene'] && groupedFavorites['sirene'].length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                Sirene
              </Typography>
              <Grid container spacing={2}>
                {groupedFavorites['sirene'].map((item, index) => (
                  <Grid item xs={6} sm={3} md={2} key={`sirene-${index}`}>
                    <QuickAccessButton
                      icon={renderSafeIcon(item, 'sirene')}
                      title={item.title}
                      path={item.path}
                      color={item.color || 'primary'}
                      borderStyle={{ borderLeft: `4px solid ${theme.palette[item.color || 'primary'].main}` }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Schadenslage-Favoriten */}
          {groupedFavorites['schadenslage'] && groupedFavorites['schadenslage'].length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                Schadenslage
              </Typography>
              <Grid container spacing={2}>
                {groupedFavorites['schadenslage'].map((item, index) => (
                  <Grid item xs={6} sm={3} md={2} key={`schadenslage-${index}`}>
                    <QuickAccessButton
                      icon={renderSafeIcon(item, 'schadenslage')}
                      title={item.title}
                      path={item.path}
                      color={item.color || 'primary'}
                      borderStyle={{ borderLeft: `4px solid ${theme.palette[item.color || 'primary'].main}` }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* OPTA-Favoriten */}
          {groupedFavorites['opta'] && groupedFavorites['opta'].length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                Opta
              </Typography>
              <Grid container spacing={2}>
                {groupedFavorites['opta'].map((item, index) => (
                  <Grid item xs={6} sm={3} md={2} key={`opta-${index}`}>
                    <QuickAccessButton
                      icon={renderSafeIcon(item, 'opta')}
                      title={item.title}
                      path={item.path}
                      color={item.color || 'primary'}
                      borderStyle={{ borderLeft: `4px solid ${theme.palette[item.color || 'primary'].main}` }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Krisenstab-Favoriten */}
          {groupedFavorites['krisenstab'] && groupedFavorites['krisenstab'].length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                Krisenstab
              </Typography>
              <Grid container spacing={2}>
                {groupedFavorites['krisenstab'].map((item, index) => (
                  <Grid item xs={6} sm={3} md={2} key={`krisenstab-${index}`}>
                    <QuickAccessButton
                      icon={renderSafeIcon(item, 'krisenstab')}
                      title={item.title}
                      path={item.path}
                      color={item.color || 'primary'}
                      borderStyle={{ borderLeft: `4px solid ${theme.palette[item.color || 'primary'].main}` }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* MediRIG-Favoriten */}
          {groupedFavorites['medirig'] && groupedFavorites['medirig'].length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                MediRIG
              </Typography>
              <Grid container spacing={2}>
                {groupedFavorites['medirig'].map((item, index) => (
                  <Grid item xs={6} sm={3} md={2} key={`medirig-${index}`}>
                    <QuickAccessButton
                      icon={renderSafeIcon(item, 'medirig')}
                      title={item.title}
                      path={item.path}
                      color={item.color || 'medical'}
                      borderStyle={{ borderLeft: `4px solid ${theme.palette[item.color || 'medical'].main}` }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Standorte-Favoriten */}
          {groupedFavorites['standorte'] && groupedFavorites['standorte'].length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                Standorte
              </Typography>
              <Grid container spacing={2}>
                {groupedFavorites['standorte'].map((item, index) => (
                  <Grid item xs={6} sm={3} md={2} key={`standorte-${index}`}>
                    <QuickAccessButton
                      icon={renderSafeIcon(item, 'standorte')}
                      title={item.title}
                      path={item.path}
                      color={item.color || 'primary'}
                      borderStyle={{ borderLeft: `4px solid ${theme.palette[item.color || 'primary'].main}` }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Submenu-Favoriten (wenn keine spezifische Kategorie) */}
          {favorites.filter(fav => fav.isSubmenu && !groupedFavorites[fav.cardType]).length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                Untermenüs
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {favorites
                  .filter(fav => fav.isSubmenu && !groupedFavorites[fav.cardType])
                  .map((item, index) => (
                    <Chip
                      key={`submenu-${index}`}
                      icon={renderSafeIcon(item, 'submenu')}
                      label={`${item.parentTitle || ''}: ${item.title}`}
                      onClick={() => navigate(item.path)}
                      size="medium"
                      color={item.color || 'primary'}
                      sx={{ 
                        borderRadius: 2,
                        border: `1px solid ${theme.palette[item.color || 'primary'].main}`,
                        '&:hover': {
                          boxShadow: `0 0 0 1px ${theme.palette[item.color || 'primary'].main}`,
                          backgroundColor: `${theme.palette[item.color || 'primary'].light}30`
                        }
                      }}
                    />
                  ))}
              </Box>
            </Box>
          )}
        </Paper>
      )}

      {/* Hinweis wenn keine Favoriten vorhanden sind */}
      {favorites.length === 0 && (
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(0, 90, 158, 0.04) 0%, rgba(0, 90, 158, 0.08) 100%)',
            border: '1px solid rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
            <StarIcon sx={{ fontSize: 60, color: 'text.disabled', mb: 2 }} />
            <Typography variant="h6" gutterBottom>Keine Favoriten vorhanden</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
              Markieren Sie Menüs und Funktionen mit dem Stern-Symbol, um sie hier als Favoriten anzuzeigen.
            </Typography>
          </Box>
        </Paper>
      )}
    </Box>
  );
}

export default HomePage;