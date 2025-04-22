import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';

// Untermenü-Struktur
const subMenuItems = [
  {
    title: 'Einsatzplanung',
    description: 'Planung und Organisation von Einsätzen',
    icon: <CalendarTodayIcon fontSize="large" sx={{ color: 'error.main' }} />,
    path: '/einsatz/planung',
    borderStyle: { borderLeft: '4px solid', borderColor: 'error.main' }
  },
  {
    title: 'Einsatzübersicht',
    description: 'Aktuelle Einsätze im Überblick',
    icon: <DashboardIcon fontSize="large" sx={{ color: 'error.main' }} />,
    path: '/einsatz/uebersicht',
    borderStyle: { borderLeft: '4px solid', borderColor: 'error.main' }
  },
  {
    title: 'Einsatzhistorie',
    description: 'Vergangene Einsätze und deren Ergebnisse',
    icon: <HistoryIcon fontSize="large" sx={{ color: 'error.main' }} />,
    path: '/einsatz/historie',
    borderStyle: { borderLeft: '4px solid', borderColor: 'error.main' }
  }
];

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
  const navigate = useNavigate();
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
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Einsatzbereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich können Sie Einsätze planen, aktuelle Einsätze überwachen und die Einsatzhistorie einsehen.
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
                        cursor: 'pointer',
                        ...item.borderStyle
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
                        <Button size="small" color="error" onClick={() => navigate(item.path)}>
                          Öffnen
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
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