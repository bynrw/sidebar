import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Subpages
const SystemSettings = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Systemeinstellungen</Typography>
    <Typography variant="body1">Hier können Sie die Systemeinstellungen konfigurieren.</Typography>
  </Paper>
);

const Databases = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Datenbanken</Typography>
    <Typography variant="body1">Datenbankverwaltung und -konfiguration.</Typography>
  </Paper>
);

const Protocols = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Protokolle</Typography>
    <Typography variant="body1">System- und Anwendungsprotokolle einsehen.</Typography>
  </Paper>
);

function Administration() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Administration</Typography>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/administration" underline="hover" color="inherit">
            Administration
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
              <Typography variant="h5" gutterBottom>Administrationsbereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich können Sie Systemeinstellungen konfigurieren, Datenbanken verwalten und Protokolle einsehen.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/administration/system" underline="none">
                    <Typography variant="h6" color="info.main">Systemeinstellungen</Typography>
                  </Link>
                  <Typography variant="body2">Grundlegende Systemkonfiguration verwalten.</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/administration/datenbanken" underline="none">
                    <Typography variant="h6" color="info.main">Datenbanken</Typography>
                  </Link>
                  <Typography variant="body2">Datenbanken konfigurieren und verwalten.</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/administration/protokolle" underline="none">
                    <Typography variant="h6" color="info.main">Protokolle</Typography>
                  </Link>
                  <Typography variant="body2">Systemprotokolle und Ereignisprotokolle einsehen.</Typography>
                </Paper>
              </Box>
            </Box>
          } />
          <Route path="system" element={<SystemSettings />} />
          <Route path="datenbanken" element={<Databases />} />
          <Route path="protokolle" element={<Protocols />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Administration;