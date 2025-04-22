import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HistoryIcon from '@mui/icons-material/History';

// Untermenü-Struktur
const subMenuItems = [
  {
    title: 'Neue Erfassung',
    description: 'Erstellen Sie eine neue Datenerfassung',
    icon: <FileUploadIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/neu'
  },
  {
    title: 'Liste der Erfassungen',
    description: 'Übersicht aller erfassten Daten',
    icon: <ListAltIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/liste'
  },
  {
    title: 'Verlauf',
    description: 'Verlaufshistorie der Erfassungen',
    icon: <HistoryIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/verlauf'
  }
];

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
  const navigate = useNavigate();
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
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Erfassungsbereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich können Sie Daten erfassen, bestehende Erfassungen einsehen und den Erfassungsverlauf überwachen.
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
                        <Button size="small" color="primary" onClick={() => navigate(item.path)}>
                          Öffnen
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
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