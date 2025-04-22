import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Subpages
const Planung = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Einsatzplanung</Typography>
    <Typography variant="body1">Planung und Organisation von Einsätzen.</Typography>
  </Paper>
);

const Uebersicht = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Einsatzübersicht</Typography>
    <Typography variant="body1">Aktuelle Einsätze im Überblick.</Typography>
  </Paper>
);

const Historie = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Einsatzhistorie</Typography>
    <Typography variant="body1">Vergangene Einsätze und deren Ergebnisse.</Typography>
  </Paper>
);

function Einsatz() {
  const location = useLocation();
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
              <Typography variant="h5" gutterBottom>Einsatzbereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich können Sie Einsätze planen, aktuelle Einsätze überwachen und die Einsatzhistorie einsehen.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/einsatz/planung" underline="none">
                    <Typography variant="h6" color="error.main">Einsatzplanung</Typography>
                  </Link>
                  <Typography variant="body2">Einsätze planen und organisieren.</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/einsatz/uebersicht" underline="none">
                    <Typography variant="h6" color="error.main">Einsatzübersicht</Typography>
                  </Link>
                  <Typography variant="body2">Aktuelle Einsätze im Überblick anzeigen.</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/einsatz/historie" underline="none">
                    <Typography variant="h6" color="error.main">Einsatzhistorie</Typography>
                  </Link>
                  <Typography variant="body2">Vergangene Einsätze und deren Ergebnisse einsehen.</Typography>
                </Paper>
              </Box>
            </Box>
          } />
          <Route path="planung" element={<Planung />} />
          <Route path="uebersicht" element={<Uebersicht />} />
          <Route path="historie" element={<Historie />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Einsatz;