import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import InsightsIcon from '@mui/icons-material/Insights';

// Untermenü-Struktur
const subMenuItems = [
  {
    title: 'Berichte',
    description: 'Generieren und anzeigen von Berichten',
    icon: <BarChartIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/berichte'
  },
  {
    title: 'Statistiken',
    description: 'Statistische Auswertungen anzeigen',
    icon: <PieChartIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/statistiken'
  },
  {
    title: 'Grafiken',
    description: 'Grafische Darstellungen und Diagramme',
    icon: <InsightsIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/grafiken'
  }
];

// Subpages
const Berichte = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Berichte</Typography>
    <Typography variant="body1">Hier können Sie Berichte einsehen und generieren.</Typography>
  </Paper>
);

const Statistiken = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Statistiken</Typography>
    <Typography variant="body1">Übersicht statistischer Auswertungen.</Typography>
  </Paper>
);

const Grafiken = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Grafiken</Typography>
    <Typography variant="body1">Grafische Darstellungen und Visualisierungen.</Typography>
  </Paper>
);

function Auswertung() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Auswertung</Typography>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/auswertung" underline="hover" color="inherit">
            Auswertung
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
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Auswertungsbereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich können Sie Berichte erstellen, Statistiken einsehen und verschiedene grafische Darstellungen anzeigen.
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
                        <Button size="small" color="secondary" onClick={() => navigate(item.path)}>
                          Öffnen
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          } />
          <Route path="berichte" element={<Berichte />} />
          <Route path="statistiken" element={<Statistiken />} />
          <Route path="grafiken" element={<Grafiken />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Auswertung;