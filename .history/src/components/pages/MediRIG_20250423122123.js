import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteCard from '../layout/FavoriteCard';

// MediRIG Untermenüs
const mediRIGSubMenuItems = [
  {
    title: 'Teilnehmer Bettnachweis',
    description: 'Verwaltung der Teilnehmer am Bettennachweis',
    icon: <PeopleAltIcon fontSize="large" sx={{ color: 'medical.main' }} />,
    path: '/medirig/teilnehmer-bettnachweis',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'medical.main'
    }
  },
  {
    title: 'Krankenhausdaten',
    description: 'Daten der Krankenhäuser verwalten',
    icon: <LocalHospitalIcon fontSize="large" sx={{ color: 'medical.main' }} />,
    path: '/medirig/krankenhausdaten',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'medical.main'
    }
  },
  {
    title: 'Krankenhaussuche',
    description: 'Krankenhäuser nach verschiedenen Kriterien suchen',
    icon: <SearchIcon fontSize="large" sx={{ color: 'medical.main' }} />,
    path: '/medirig/krankenhaussuche',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'medical.main'
    }
  }
];

// MediRIG Subcomponents
const TeilnehmerBettnachweis = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Teilnehmer Bettnachweis</Typography>
    <Typography variant="body1">Verwaltung und Übersicht aller Teilnehmer am Bettennachweis.</Typography>
  </Paper>
);

const Krankenhausdaten = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Krankenhausdaten</Typography>
    <Typography variant="body1">Hier können Sie die Daten der Krankenhäuser einsehen und bearbeiten.</Typography>
  </Paper>
);

const Krankenhaussuche = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Krankenhaussuche</Typography>
    <Typography variant="body1">Suchen Sie nach Krankenhäusern anhand verschiedener Kriterien.</Typography>
  </Paper>
);

function MediRIG() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>MediRIG</Typography>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/medirig" underline="hover" color="inherit">
            MediRIG
          </Link>
          {pathSegments.length > 1 && (
            <Typography color="text.primary">
              {pathSegments[1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Typography>
          )}
        </Breadcrumbs>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Routes>
          <Route index element={
            <Box>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>MediRIG - Medizinisches Rettungsinformationsgerät</Typography>
              <Typography variant="body1" paragraph>
                MediRIG unterstützt medizinisches Personal bei der Erfassung und Dokumentation von Patientendaten im Rettungseinsatz.
              </Typography>
              
              <Grid container spacing={3}>
                {mediRIGSubMenuItems.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.title}>
                    <FavoriteCard
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                      path={item.path}
                      accentColor="medical.main"
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          } />
          
          {/* MediRIG Untermenüs */}
          <Route path="teilnehmer-bettnachweis" element={<TeilnehmerBettnachweis />} />
          <Route path="krankenhausdaten" element={<Krankenhausdaten />} />
          <Route path="krankenhaussuche" element={<Krankenhaussuche />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default MediRIG;