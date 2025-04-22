import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Subpages
const NeueErfassung = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Neue Erfassung</Typography>
    <Typography variant="body1">Hier können Sie neue Daten erfassen.</Typography>
  </Paper>
);

const ErfassungsListe = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Liste der Erfassungen</Typography>
    <Typography variant="body1">Übersicht aller erfassten Daten.</Typography>
  </Paper>
);

const ErfassungsVerlauf = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Verlauf</Typography>
    <Typography variant="body1">Verlaufshistorie der Erfassungen.</Typography>
  </Paper>
);

function Erfassung() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Erfassung</Typography>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/erfassung" underline="hover" color="inherit">
            Erfassung
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
              <Typography variant="h5" gutterBottom>Erfassungsbereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich können Sie Daten erfassen, bestehende Erfassungen einsehen und den Erfassungsverlauf überwachen.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/erfassung/neu" underline="none">
                    <Typography variant="h6" color="primary">Neue Erfassung</Typography>
                  </Link>
                  <Typography variant="body2">Erstellen Sie eine neue Datenerfassung.</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/erfassung/liste" underline="none">
                    <Typography variant="h6" color="primary">Liste der Erfassungen</Typography>
                  </Link>
                  <Typography variant="body2">Sehen Sie alle erfassten Daten ein.</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/erfassung/verlauf" underline="none">
                    <Typography variant="h6" color="primary">Verlauf</Typography>
                  </Link>
                  <Typography variant="body2">Verfolgen Sie den Verlauf der Erfassungen.</Typography>
                </Paper>
              </Box>
            </Box>
          } />
          <Route path="neu" element={<NeueErfassung />} />
          <Route path="liste" element={<ErfassungsListe />} />
          <Route path="verlauf" element={<ErfassungsVerlauf />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Erfassung;