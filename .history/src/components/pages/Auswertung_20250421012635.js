import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Subpages
const Berichte = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Berichte</Typography>
    <Typography variant="body1">Hier können Sie Berichte einsehen und generieren.</Typography>
  </Paper>
);

const Statistiken = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Statistiken</Typography>
    <Typography variant="body1">Übersicht statistischer Auswertungen.</Typography>
  </Paper>
);

const Grafiken = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Grafiken</Typography>
    <Typography variant="body1">Grafische Darstellungen und Visualisierungen.</Typography>
  </Paper>
);

function Auswertung() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Auswertung</Typography>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/auswertung" underline="hover" color="inherit">
            Auswertung
          </Link>
          {pathSegments.length > 1 && (
            <Typography color="text.primary">
              {pathSegments[1].charAt(0).toUpperCase() + pathSegments[1].slice(1)}
            </Typography>
          )}
        </Breadcrumbs>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Routes>
          <Route index element={
            <Box>
              <Typography variant="h5" gutterBottom>Auswertungsbereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich können Sie Berichte erstellen, Statistiken einsehen und verschiedene grafische Darstellungen anzeigen.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/auswertung/berichte" underline="none">
                    <Typography variant="h6" color="secondary">Berichte</Typography>
                  </Link>
                  <Typography variant="body2">Berichte erstellen und anzeigen.</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/auswertung/statistiken" underline="none">
                    <Typography variant="h6" color="secondary">Statistiken</Typography>
                  </Link>
                  <Typography variant="body2">Statistische Auswertungen einsehen.</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/auswertung/grafiken" underline="none">
                    <Typography variant="h6" color="secondary">Grafiken</Typography>
                  </Link>
                  <Typography variant="body2">Daten visualisieren und Diagramme erstellen.</Typography>
                </Paper>
              </Box>
            </Box>
          } />
          <Route path="berichte" element={<Berichte />} />
          <Route path="statistiken" element={<Statistiken />} />
          <Route path="grafiken" element={<Grafiken />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Auswertung;