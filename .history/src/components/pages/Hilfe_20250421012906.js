import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Subpages
const Dokumentation = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Dokumentation</Typography>
    <Typography variant="body1">Ausführliche Dokumentation zum System.</Typography>
  </Paper>
);

const Tutorial = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Tutorial</Typography>
    <Typography variant="body1">Schritt-für-Schritt Anleitungen für Systemfunktionen.</Typography>
  </Paper>
);

const FAQ = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>FAQ</Typography>
    <Typography variant="body1">Häufig gestellte Fragen und deren Antworten.</Typography>
  </Paper>
);

function Hilfe() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Hilfe</Typography>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/hilfe" underline="hover" color="inherit">
            Hilfe
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
              <Typography variant="h5" gutterBottom>Hilfebereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich finden Sie Hilfestellungen, Dokumentationen und Tutorials zur Verwendung des Systems.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/hilfe/dokumentation" underline="none">
                    <Typography variant="h6" color="success.main">Dokumentation</Typography>
                  </Link>
                  <Typography variant="body2">Vollständige Systemdokumentation einsehen.</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/hilfe/tutorial" underline="none">
                    <Typography variant="h6" color="success.main">Tutorial</Typography>
                  </Link>
                  <Typography variant="body2">Schritt-für-Schritt Anleitungen folgen.</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/hilfe/faq" underline="none">
                    <Typography variant="h6" color="success.main">FAQ</Typography>
                  </Link>
                  <Typography variant="body2">Antworten auf häufig gestellte Fragen.</Typography>
                </Paper>
              </Box>
            </Box>
          } />
          <Route path="dokumentation" element={<Dokumentation />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="faq" element={<FAQ />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Hilfe;