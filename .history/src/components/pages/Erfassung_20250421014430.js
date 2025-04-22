import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HistoryIcon from '@mui/icons-material/History';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

// Erweiterte Untermenü-Struktur mit zusätzlichen Ebenen
const subMenuItems = [
  {
    title: 'Sirene',
    description: 'Verwaltung von Sirenen und Alarmeinrichtungen',
    icon: <NotificationsActiveIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/sirene',
    hasSubItems: true
  },
  {
    title: 'Liste der Erfassungen',
    description: 'Übersicht aller erfassten Daten',
    icon: <ListAltIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/liste',
    hasSubItems: false
  },
  {
    title: 'Verlauf',
    description: 'Verlaufshistorie der Erfassungen',
    icon: <HistoryIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/verlauf',
    hasSubItems: false
  }
];

// Untermenüs für Sirene
const sireneSubMenuItems = [
  {
    title: 'Neue Sirene',
    description: 'Erfassung einer neuen Sirenenanlage',
    icon: <AddBoxIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/sirene/neu'
  },
  {
    title: 'Sirene bearbeiten',
    description: 'Bestehende Sirenenanlagen bearbeiten',
    icon: <EditIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/sirene/bearbeiten'
  },
  {
    title: 'Sirenenübersicht',
    description: 'Liste aller Sirenenanlagen',
    icon: <FormatListBulletedIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/sirene/uebersicht'
  }
];

// Subpages für die erste Ebene
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

// Subpages für Sirene - zweite Ebene
const NeueSirene = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Neue Sirene</Typography>
    <Typography variant="body1">Hier können Sie eine neue Sirenenanlage erfassen.</Typography>
  </Paper>
);

const SireneBearbeiten = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Sirene bearbeiten</Typography>
    <Typography variant="body1">Bestehende Sirenenanlagen können hier bearbeitet werden.</Typography>
  </Paper>
);

const SireneUebersicht = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Sirenenübersicht</Typography>
    <Typography variant="body1">Liste aller erfassten Sirenenanlagen.</Typography>
  </Paper>
);

// Sirene Hauptkomponente mit Untermenüs
const Sirene = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Sirenenbereich</Typography>
      <Typography variant="body1" paragraph>
        In diesem Bereich können Sie Sirenenanlagen verwalten, neue Anlagen erfassen und bestehende bearbeiten.
      </Typography>
      
      <Grid container spacing={3}>
        {sireneSubMenuItems.map((item) => (
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
  );
};

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
            <Link 
              component={RouterLink} 
              to={`/erfassung/${pathSegments[1]}`}
              underline="hover"
              color={pathSegments.length > 2 ? "inherit" : "text.primary"}
            >
              {pathSegments[1].charAt(0).toUpperCase() + pathSegments[1].slice(1)}
            </Link>
          )}
          {pathSegments.length > 2 && (
            <Typography color="text.primary">
              {pathSegments[2].charAt(0).toUpperCase() + pathSegments[2].slice(1)}
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
          
          {/* Sirenenuntermenüs */}
          <Route path="sirene" element={<Sirene />} />
          <Route path="sirene/neu" element={<NeueSirene />} />
          <Route path="sirene/bearbeiten" element={<SireneBearbeiten />} />
          <Route path="sirene/uebersicht" element={<SireneUebersicht />} />
          
          {/* Andere Routen */}
          <Route path="liste" element={<ErfassungsListe />} />
          <Route path="verlauf" element={<ErfassungsVerlauf />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Erfassung;