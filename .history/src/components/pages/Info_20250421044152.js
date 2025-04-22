import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import GavelIcon from '@mui/icons-material/Gavel';
import InfoIcon from '@mui/icons-material/Info';
import theme from '../../theme';

// Untermenü-Struktur
const subMenuItems = [
  {
    title: 'Versionshinweise',
    description: 'Informationen zu Versionen und Updates',
    icon: <NewReleasesIcon fontSize="large" sx={{ color: 'warning.main' }} />,
    path: '/info/versions'
  },
  {
    title: 'Lizenzen',
    description: 'Lizenzinformationen und rechtliche Hinweise',
    icon: <GavelIcon fontSize="large" sx={{ color: 'warning.main' }} />,
    path: '/info/lizenzen'
  },
  {
    title: 'Über',
    description: 'Allgemeine Systeminformationen',
    icon: <InfoIcon fontSize="large" sx={{ color: 'warning.main' }} />,
    path: '/info/ueber'
  }
];

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
  const navigate = useNavigate();
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
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Informationsbereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich finden Sie allgemeine Informationen zum System, Versionshinweise und Lizenzinformationen.
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
                        borderRadius: 3,
                        border: '1px solid rgba(0,0,0,0.05)',
                        borderLeft: `4px solid ${theme.palette.warning.main}`
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
                        <Button size="small" color="warning" onClick={() => navigate(item.path)}>
                          Öffnen
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
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