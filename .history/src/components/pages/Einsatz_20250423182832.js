import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import MapIcon from '@mui/icons-material/Map';
import PublicIcon from '@mui/icons-material/Public';
import WarningIcon from '@mui/icons-material/Warning';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BusinessIcon from '@mui/icons-material/Business';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import FavoriteCard from '../layout/FavoriteCard';

// Untermenü-Struktur
const subMenuItems = [
  {
    title: 'NRW-Einheiten',
    description: 'Übersicht über Einheiten in NRW',
    icon: <GroupWorkIcon fontSize="large" sx={{ color: 'error.main' }} />,
    path: '/einsatz/nrw-einheiten',
    hasSubItems: true,
    borderStyle: { borderLeft: '4px solid', borderColor: 'error.main' }
  },
  {
    title: 'Schadenslage',
    description: 'Aktuelle Schadenslagen',
    icon: <WarningIcon fontSize="large" sx={{ color: 'error.main' }} />,
    path: '/einsatz/schadenslage',
    hasSubItems: true,
    borderStyle: { borderLeft: '4px solid', borderColor: 'error.main' }
  },
  {
    title: 'DZ/Karte',
    description: 'Kartendarstellung und Einsatzzentrale',
    icon: <MapIcon fontSize="large" sx={{ color: 'error.main' }} />,
    path: '/einsatz/karte',
    hasSubItems: false,
    borderStyle: { borderLeft: '4px solid', borderColor: 'error.main' }
  }
];

// Untermenüs für NRW-Einheiten
const nrwEinheitenSubMenuItems = [
  {
    title: 'Gesamt NRW',
    description: 'Übersicht aller Einheiten in Nordrhein-Westfalen',
    icon: <PublicIcon fontSize="large" sx={{ color: 'error.main' }} />,
    path: '/einsatz/nrw-einheiten/gesamt',
    borderStyle: { borderLeft: '4px solid', borderColor: 'error.main' }
  },
  {
    title: 'Krisenstab/SAE',
    description: 'Krisenstab und Sonderaufbau-Einheiten',
    icon: <MeetingRoomIcon fontSize="large" sx={{ color: 'error.main' }} />,
    path: '/einsatz/nrw-einheiten/krisenstab',
    borderStyle: { borderLeft: '4px solid', borderColor: 'error.main' }
  }
];

// Untermenüs für Schadenslage
const schadensLageSubMenuItems = [
  {
    title: 'Landeslagen',
    description: 'Übersicht über aktuelle Landeslagen',
    icon: <BusinessIcon fontSize="large" sx={{ color: 'error.main' }} />,
    path: '/einsatz/schadenslage/landeslagen',
    borderStyle: { borderLeft: '4px solid', borderColor: 'error.main' }
  }
];

// Subpages für NRW-Einheiten
const GesamtNRW = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Gesamt NRW</Typography>
    <Typography variant="body1">Übersicht aller Einheiten in Nordrhein-Westfalen.</Typography>
  </Paper>
);

const Krisenstab = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Krisenstab/SAE</Typography>
    <Typography variant="body1">Übersicht über Krisenstab und Sonderaufbau-Einheiten.</Typography>
  </Paper>
);

// Subpages für Schadenslage
const Landeslagen = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Landeslagen</Typography>
    <Typography variant="body1">Übersicht über aktuelle Landeslagen.</Typography>
  </Paper>
);

// Subpage für Karte
const DZKarte = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>DZ/Karte</Typography>
    <Typography variant="body1">Kartendarstellung und Einsatzzentrale.</Typography>
  </Paper>
);

// Hauptkomponente für NRW-Einheiten
const NRWEinheiten = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>NRW-Einheiten</Typography>
      <Typography variant="body1" paragraph>
        Hier erhalten Sie eine Übersicht über alle Einheiten in Nordrhein-Westfalen.
      </Typography>
      
      <Grid container spacing={3}>
        {nrwEinheitenSubMenuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <FavoriteCard
              title={item.title}
              description={item.description}
              icon={item.icon}
              path={item.path}
              accentColor="error.main"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// Hauptkomponente für Schadenslage
const Schadenslage = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Schadenslage</Typography>
      <Typography variant="body1" paragraph>
        Hier erhalten Sie Informationen zu aktuellen Schadenslagen.
      </Typography>
      
      <Grid container spacing={3}>
        {schadensLageSubMenuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <FavoriteCard
              title={item.title}
              description={item.description}
              icon={item.icon}
              path={item.path}
              accentColor="error.main"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

function Einsatz() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Einsatz</Typography>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/einsatz" underline="hover" color="inherit">
            Einsatz
          </Link>
          {pathSegments.length > 1 && (
            <Link 
              component={RouterLink} 
              to={`/einsatz/${pathSegments[1]}`}
              underline="hover"
              color={pathSegments.length > 2 ? "inherit" : "text.primary"}
            >
              {pathSegments[1].charAt(0).toUpperCase() + pathSegments[1].slice(1).replace(/-/g, ' ')}
            </Link>
          )}
          {pathSegments.length > 2 && (
            <Typography color="text.primary">
              {pathSegments[2].charAt(0).toUpperCase() + pathSegments[2].slice(1).replace(/-/g, ' ')}
            </Typography>
          )}
        </Breadcrumbs>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Routes>
          <Route index element={
            <Box>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Einsatzbereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich können Sie NRW-Einheiten, Schadenslagen und die Kartendarstellung einsehen.
              </Typography>
              
              <Grid container spacing={3}>
                {subMenuItems.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.title}>
                    <FavoriteCard
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                      path={item.path}
                      accentColor="error.main"
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          } />
          
          {/* NRW-Einheiten Routen */}
          <Route path="nrw-einheiten" element={<NRWEinheiten />} />
          <Route path="nrw-einheiten/gesamt" element={<GesamtNRW />} />
          <Route path="nrw-einheiten/krisenstab" element={<Krisenstab />} />
          
          {/* Schadenslage Routen */}
          <Route path="schadenslage" element={<Schadenslage />} />
          <Route path="schadenslage/landeslagen" element={<Landeslagen />} />
          
          {/* DZ/Karte Route */}
          <Route path="karte" element={<DZKarte />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Einsatz;