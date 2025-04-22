import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import InfoIcon from '@mui/icons-material/Info';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AssessmentIcon from '@mui/icons-material/Assessment';

// Untermenü-Struktur für Jahresstatistik
const subMenuItems = [
  {
    title: 'Info',
    description: 'Informationen zur Jahresstatistik',
    icon: <InfoIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/jahresstatistik/info',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Deckblatt',
    description: 'Deckblatt der Jahresstatistik',
    icon: <DescriptionIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/jahresstatistik/deckblatt',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Erfassung',
    description: 'Erfassung von statistischen Daten',
    icon: <EditIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/jahresstatistik/erfassung',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Anzeigen',
    description: 'Anzeigen der statistischen Auswertungen',
    icon: <VisibilityIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/jahresstatistik/anzeigen',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  }
];

// Subpages für die Untermenüs
const StatistikInfo = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Jahresstatistik - Info</Typography>
    <Typography variant="body1">
      Die Jahresstatistik bietet eine Übersicht aller relevanten statistischen Daten des vergangenen Jahres. 
      Hier finden Sie Informationen zur Datenerhebung, Auswertungsmethoden und rechtliche Grundlagen.
    </Typography>
  </Paper>
);

const StatistikDeckblatt = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Jahresstatistik - Deckblatt</Typography>
    <Typography variant="body1">
      Auf dem Deckblatt können Sie allgemeine Informationen und Zusammenfassungen der Jahresstatistik einsehen.
      Hier werden Kennzahlen, Trends und wichtige Entwicklungen des vergangenen Jahres dargestellt.
    </Typography>
  </Paper>
);

const StatistikErfassung = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Jahresstatistik - Erfassung</Typography>
    <Typography variant="body1">
      Im Bereich Erfassung können Sie neue statistische Daten eingeben, vorhandene Daten bearbeiten 
      und die Datenbasis für die Jahresstatistik pflegen. Achten Sie auf Vollständigkeit und Korrektheit der Eingaben.
    </Typography>
  </Paper>
);

const StatistikAnzeigen = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Jahresstatistik - Anzeigen</Typography>
    <Typography variant="body1">
      Hier können Sie verschiedene Auswertungen und Visualisierungen der Jahresstatistik einsehen.
      Die Daten werden in Form von Tabellen, Diagrammen und Grafiken dargestellt.
    </Typography>
  </Paper>
);

function Jahresstatistik() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Jahresstatistik</Typography>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/jahresstatistik" underline="hover" color="inherit">
            Jahresstatistik
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
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Jahresstatistik-Bereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich können Sie die Jahresstatistik einsehen, erfassen und auswerten. 
                Wählen Sie eine der folgenden Optionen, um fortzufahren.
              </Typography>
              
              <Grid container spacing={3}>
                {subMenuItems.map((item) => (
                  <Grid item xs={12} sm={6} md={3} key={item.title}>
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
          
          {/* Untermenüs */}
          <Route path="info" element={<StatistikInfo />} />
          <Route path="deckblatt" element={<StatistikDeckblatt />} />
          <Route path="erfassung" element={<StatistikErfassung />} />
          <Route path="anzeigen" element={<StatistikAnzeigen />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Jahresstatistik;