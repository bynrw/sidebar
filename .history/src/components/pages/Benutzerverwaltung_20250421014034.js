import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LockIcon from '@mui/icons-material/Lock';

// Untermenü-Struktur
const subMenuItems = [
  {
    title: 'Benutzer',
    description: 'Benutzer anlegen, bearbeiten und verwalten',
    icon: <PersonIcon fontSize="large" sx={{ color: 'primary.dark' }} />,
    path: '/benutzerverwaltung/benutzer'
  },
  {
    title: 'Rollen',
    description: 'Rollen definieren und zuweisen',
    icon: <AdminPanelSettingsIcon fontSize="large" sx={{ color: 'primary.dark' }} />,
    path: '/benutzerverwaltung/rollen'
  },
  {
    title: 'Berechtigungen',
    description: 'Zugriffsberechtigungen konfigurieren',
    icon: <LockIcon fontSize="large" sx={{ color: 'primary.dark' }} />,
    path: '/benutzerverwaltung/berechtigungen'
  }
];

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
  const navigate = useNavigate();
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
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Benutzerverwaltungsbereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich können Sie Benutzer, Rollen und Berechtigungen verwalten.
              </Typography>
              
              <Grid container spacing={3}>
                {subMenuItems.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.title}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: 4,
                        },
                        cursor: 'pointer'
                      }}
                      onClick={() => navigate(item.path)}
                    >
                      <CardContent sx={{ padding: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                          {item.icon}
                        </Box>
                        <Typography variant="h6" component="h2" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                        <Button size="small" onClick={() => navigate(item.path)}>
                          Öffnen
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
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