import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CustomCard from '../layout/CustomCard';
import theme from '../../theme';

// Untermenü-Struktur
const subMenuItems = [
  {
    title: 'Dokumentation',
    description: 'Vollständige Systemdokumentation einsehen',
    icon: <MenuBookIcon fontSize="large" sx={{ color: 'success.main' }} />,
    path: '/hilfe/dokumentation'
  },
  {
    title: 'Tutorial',
    description: 'Schritt-für-Schritt Anleitungen folgen',
    icon: <SchoolIcon fontSize="large" sx={{ color: 'success.main' }} />,
    path: '/hilfe/tutorial'
  },
  {
    title: 'FAQ',
    description: 'Antworten auf häufig gestellte Fragen',
    icon: <QuestionAnswerIcon fontSize="large" sx={{ color: 'success.main' }} />,
    path: '/hilfe/faq'
  }
];

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
  const navigate = useNavigate();
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
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Hilfebereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich finden Sie Hilfestellungen, Dokumentationen und Tutorials zur Verwendung des Systems.
              </Typography>
              
              <Grid container spacing={3}>
                {subMenuItems.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.title}>
                    <CustomCard
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                      path={item.path}
                      accentColor="success.main"
                    />
                  </Grid>
                ))}
              </Grid>
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