import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SettingsIcon from '@mui/icons-material/Settings';
import StorageIcon from '@mui/icons-material/Storage';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

// Untermenü-Struktur
const subMenuItems = [
  {
    title: 'Systemeinstellungen',
    description: 'Grundlegende Systemkonfiguration verwalten',
    icon: <SettingsIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/system'
  },
  {
    title: 'Datenbanken',
    description: 'Datenbanken konfigurieren und verwalten',
    icon: <StorageIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/datenbanken'
  },
  {
    title: 'Protokolle',
    description: 'Systemprotokolle und Ereignisprotokolle einsehen',
    icon: <ReceiptLongIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/protokolle'
  }
];

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
  const navigate = useNavigate();
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
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Administrationsbereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich können Sie Systemeinstellungen konfigurieren, Datenbanken verwalten und Protokolle einsehen.
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
                        <Button size="small" color="info" onClick={() => navigate(item.path)}>
                          Öffnen
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
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