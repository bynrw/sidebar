import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Subpages
const Benutzer = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Benutzer</Typography>
    <Typography variant="body1">Benutzerverwaltung und -konfiguration.</Typography>
  </Paper>
);

const Rollen = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Rollen</Typography>
    <Typography variant="body1">Rollenverwaltung und -zuweisung.</Typography>
  </Paper>
);

const Berechtigungen = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Berechtigungen</Typography>
    <Typography variant="body1">Verwaltung von Zugriffsberechtigungen.</Typography>
  </Paper>
);

function Benutzerverwaltung() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Benutzerverwaltung</Typography>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/benutzerverwaltung" underline="hover" color="inherit">
            Benutzerverwaltung
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
              <Typography variant="h5" gutterBottom>Benutzerverwaltungsbereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich können Sie Benutzer, Rollen und Berechtigungen verwalten.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/benutzerverwaltung/benutzer" underline="none">
                    <Typography variant="h6" color="primary.dark">Benutzer</Typography>
                  </Link>
                  <Typography variant="body2">Benutzer anlegen, bearbeiten und verwalten.</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/benutzerverwaltung/rollen" underline="none">
                    <Typography variant="h6" color="primary.dark">Rollen</Typography>
                  </Link>
                  <Typography variant="body2">Rollen definieren und zuweisen.</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/benutzerverwaltung/berechtigungen" underline="none">
                    <Typography variant="h6" color="primary.dark">Berechtigungen</Typography>
                  </Link>
                  <Typography variant="body2">Zugriffsberechtigungen konfigurieren.</Typography>
                </Paper>
              </Box>
            </Box>
          } />
          <Route path="benutzer" element={<Benutzer />} />
          <Route path="rollen" element={<Rollen />} />
          <Route path="berechtigungen" element={<Berechtigungen />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Benutzerverwaltung;