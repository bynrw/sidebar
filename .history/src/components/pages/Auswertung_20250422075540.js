import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import InsightsIcon from '@mui/icons-material/Insights';
import AssessmentIcon from '@mui/icons-material/Assessment';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import TimelineIcon from '@mui/icons-material/Timeline';
import MapIcon from '@mui/icons-material/Map';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupsIcon from '@mui/icons-material/Groups';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BusinessIcon from '@mui/icons-material/Business';
import CampaignIcon from '@mui/icons-material/Campaign';

// Untermenü-Struktur
const subMenuItems = [
  {
    title: 'DZ/Karte',
    description: 'Darstellung auf Karte',
    icon: <MapIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/dzkarte',
    hasSubItems: false,
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  },
  {
    title: 'Suche',
    description: 'Verschiedene Suchmöglichkeiten',
    icon: <SearchIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/suche',
    hasSubItems: true,
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  },
  {
    title: 'Berichte',
    description: 'Generieren und anzeigen von Berichten',
    icon: <BarChartIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/berichte',
    hasSubItems: true,
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  },
  {
    title: 'Statistiken',
    description: 'Statistische Auswertungen anzeigen',
    icon: <PieChartIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/statistiken',
    hasSubItems: true,
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  },
  {
    title: 'Grafiken',
    description: 'Grafische Darstellungen und Diagramme',
    icon: <InsightsIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/grafiken',
    hasSubItems: false,
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  }
];

// Untermenüs für Suche
const sucheSubMenuItems = [
  {
    title: 'Schadensort',
    description: 'Suche nach Schadensorten',
    icon: <LocationOnIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/suche/schadensort',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  },
  {
    title: 'Ressourcen',
    description: 'Suche nach Ressourcen',
    icon: <InventoryIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/suche/ressourcen',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  },
  {
    title: 'NRW-Einheiten',
    description: 'Suche nach NRW-Einheiten',
    icon: <GroupsIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/suche/nrw-einheiten',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  },
  {
    title: 'Sonstige',
    description: 'Sonstige Suchmöglichkeiten',
    icon: <MoreHorizIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/suche/sonstige',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  },
  {
    title: 'Krankenhäuser',
    description: 'Suche nach Krankenhäusern',
    icon: <LocalHospitalIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/suche/krankenhaeuser',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  },
  {
    title: 'Organisation',
    description: 'Suche nach Organisationen',
    icon: <BusinessIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/suche/organisation',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  },
  {
    title: 'Sirenen',
    description: 'Suche nach Sirenen',
    icon: <CampaignIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/suche/sirenen',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  }
];

// Untermenüs für Berichte
const berichteSubMenuItems = [
  {
    title: 'Monatsberichte',
    description: 'Berichte für den aktuellen Monat',
    icon: <AssessmentIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/berichte/monat',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  },
  {
    title: 'Jahresberichte',
    description: 'Zusammenfassung des gesamten Jahres',
    icon: <StackedBarChartIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/berichte/jahr',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  },
  {
    title: 'Benutzerdefinierte Berichte',
    description: 'Erstellen Sie individuelle Berichte',
    icon: <EqualizerIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/berichte/benutzerdefiniert',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  }
];

// Untermenüs für Statistiken
const statistikenSubMenuItems = [
  {
    title: 'Grunddaten',
    description: 'Basisstatistiken und Kennzahlen',
    icon: <BubbleChartIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/statistiken/grund',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  },
  {
    title: 'Vergleichsanalysen',
    description: 'Vergleich verschiedener Zeiträume',
    icon: <DonutLargeIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/statistiken/vergleich',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  },
  {
    title: 'Trends',
    description: 'Erkennen von Entwicklungen und Trends',
    icon: <TimelineIcon fontSize="large" sx={{ color: 'secondary.main' }} />,
    path: '/auswertung/statistiken/trends',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'secondary.main'
    }
  }
];

// Subpages für die erste Ebene
const Grafiken = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Grafiken</Typography>
    <Typography variant="body1">Grafische Darstellungen und Visualisierungen.</Typography>
  </Paper>
);

// Komponente für Berichte
const Berichte = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Berichtsbereich</Typography>
      <Typography variant="body1" paragraph>
        Hier können Sie verschiedene Berichte einsehen und generieren.
      </Typography>
      
      <Grid container spacing={3}>
        {berichteSubMenuItems.map((item) => (
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
                <Button size="small" color="secondary" onClick={() => navigate(item.path)}>
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

// Komponente für Statistiken
const Statistiken = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Statistikbereich</Typography>
      <Typography variant="body1" paragraph>
        Hier können Sie verschiedene statistische Auswertungen einsehen.
      </Typography>
      
      <Grid container spacing={3}>
        {statistikenSubMenuItems.map((item) => (
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
                <Button size="small" color="secondary" onClick={() => navigate(item.path)}>
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

// Subpages für Berichte - zweite Ebene
const MonatsBerichte = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Monatsberichte</Typography>
    <Typography variant="body1">Berichte für den aktuellen Monat.</Typography>
  </Paper>
);

const JahresBerichte = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Jahresberichte</Typography>
    <Typography variant="body1">Zusammenfassung des gesamten Jahres.</Typography>
  </Paper>
);

const BenutzerdefinierteBerichte = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Benutzerdefinierte Berichte</Typography>
    <Typography variant="body1">Erstellen Sie individuelle Berichte.</Typography>
  </Paper>
);

// Subpages für Statistiken - zweite Ebene
const Grunddaten = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Grunddaten</Typography>
    <Typography variant="body1">Basisstatistiken und Kennzahlen.</Typography>
  </Paper>
);

const Vergleichsanalysen = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Vergleichsanalysen</Typography>
    <Typography variant="body1">Vergleich verschiedener Zeiträume.</Typography>
  </Paper>
);

const Trends = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Trends</Typography>
    <Typography variant="body1">Erkennen von Entwicklungen und Trends.</Typography>
  </Paper>
);

// Subpages für Suche - zweite Ebene
const Schadensort = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Schadensort</Typography>
    <Typography variant="body1">Suche nach Schadensorten.</Typography>
  </Paper>
);

const Ressourcen = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Ressourcen</Typography>
    <Typography variant="body1">Suche nach Ressourcen.</Typography>
  </Paper>
);

const NRWEinheiten = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>NRW-Einheiten</Typography>
    <Typography variant="body1">Suche nach NRW-Einheiten.</Typography>
  </Paper>
);

const Sonstige = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Sonstige</Typography>
    <Typography variant="body1">Sonstige Suchmöglichkeiten.</Typography>
  </Paper>
);

const Krankenhaeuser = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Krankenhäuser</Typography>
    <Typography variant="body1">Suche nach Krankenhäusern.</Typography>
  </Paper>
);

const Organisation = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Organisation</Typography>
    <Typography variant="body1">Suche nach Organisationen.</Typography>
  </Paper>
);

const Sirenen = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Sirenen</Typography>
    <Typography variant="body1">Suche nach Sirenen.</Typography>
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
            <Link 
              component={RouterLink} 
              to={`/auswertung/${pathSegments[1]}`}
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
          
          {/* Berichteuntermenüs */}
          <Route path="berichte" element={<Berichte />} />
          <Route path="berichte/monat" element={<MonatsBerichte />} />
          <Route path="berichte/jahr" element={<JahresBerichte />} />
          <Route path="berichte/benutzerdefiniert" element={<BenutzerdefinierteBerichte />} />
          
          {/* Statistikenuntermenüs */}
          <Route path="statistiken" element={<Statistiken />} />
          <Route path="statistiken/grund" element={<Grunddaten />} />
          <Route path="statistiken/vergleich" element={<Vergleichsanalysen />} />
          <Route path="statistiken/trends" element={<Trends />} />
          
          {/* Sucheuntermenüs */}
          <Route path="suche/schadensort" element={<Schadensort />} />
          <Route path="suche/ressourcen" element={<Ressourcen />} />
          <Route path="suche/nrw-einheiten" element={<NRWEinheiten />} />
          <Route path="suche/sonstige" element={<Sonstige />} />
          <Route path="suche/krankenhaeuser" element={<Krankenhaeuser />} />
          <Route path="suche/organisation" element={<Organisation />} />
          <Route path="suche/sirenen" element={<Sirenen />} />

          {/* Andere Routen */}
          <Route path="grafiken" element={<Grafiken />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Auswertung;