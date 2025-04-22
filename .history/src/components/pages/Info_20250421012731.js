import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Subpages
const Versions = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Versionshinweise</Typography>
    <Typography variant="body1">Informationen zu Systemversionen und Updates.</Typography>
  </Paper>
);

const Lizenzen = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Lizenzen</Typography>
    <Typography variant="body1">Lizenzinformationen und rechtliche Hinweise.</Typography>
  </Paper>
);

const About = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Über</Typography>
    <Typography variant="body1">Allgemeine Informationen über das System und seine Entwicklung.</Typography>
  </Paper>
);

function Info() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Info</Typography>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/info" underline="hover" color="inherit">
            Info
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
              <Typography variant="h5" gutterBottom>Informationsbereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich finden Sie allgemeine Informationen zum System, Versionshinweise und Lizenzinformationen.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/info/versions" underline="none">
                    <Typography variant="h6" color="warning.main">Versionshinweise</Typography>
                  </Link>
                  <Typography variant="body2">Informationen zu Versionen und Updates einsehen.</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/info/lizenzen" underline="none">
                    <Typography variant="h6" color="warning.main">Lizenzen</Typography>
                  </Link>
                  <Typography variant="body2">Lizenzinformationen und rechtliche Hinweise.</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: '1 1 300px' }}>
                  <Link component={RouterLink} to="/info/ueber" underline="none">
                    <Typography variant="h6" color="warning.main">Über</Typography>
                  </Link>
                  <Typography variant="body2">Allgemeine Systeminformationen einsehen.</Typography>
                </Paper>
              </Box>
            </Box>
          } />
          <Route path="versions" element={<Versions />} />
          <Route path="lizenzen" element={<Lizenzen />} />
          <Route path="ueber" element={<About />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Info;