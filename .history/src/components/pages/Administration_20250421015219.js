import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SettingsIcon from '@mui/icons-material/Settings';
import StorageIcon from '@mui/icons-material/Storage';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SecurityIcon from '@mui/icons-material/Security';
import BackupIcon from '@mui/icons-material/Backup';
import TuneIcon from '@mui/icons-material/Tune';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TableViewIcon from '@mui/icons-material/TableView';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';

// Untermenü-Struktur
const subMenuItems = [
  {
    title: 'Systemeinstellungen',
    description: 'Grundlegende Systemkonfiguration verwalten',
    icon: <SettingsIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/system',
    hasSubItems: true
  },
  {
    title: 'Datenbanken',
    description: 'Datenbanken konfigurieren und verwalten',
    icon: <StorageIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/datenbanken',
    hasSubItems: true
  },
  {
    title: 'Protokolle',
    description: 'Systemprotokolle und Ereignisprotokolle einsehen',
    icon: <ReceiptLongIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/protokolle',
    hasSubItems: false
  }
];

// Untermenüs für Systemeinstellungen
const systemSubMenuItems = [
  {
    title: 'Sicherheit',
    description: 'Konfiguration der Systemsicherheit',
    icon: <SecurityIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/system/sicherheit'
  },
  {
    title: 'Datensicherung',
    description: 'Backup-Einstellungen verwalten',
    icon: <BackupIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/system/backup'
  },
  {
    title: 'Leistungsoptimierung',
    description: 'Systemleistung optimieren',
    icon: <TuneIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/system/leistung'
  }
];

// Untermenüs für Datenbanken
const datenbankSubMenuItems = [
  {
    title: 'Datenmodelle',
    description: 'Datenmodelle konfigurieren',
    icon: <DataObjectIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/datenbanken/modelle'
  },
  {
    title: 'Tabellen',
    description: 'Tabellen verwalten',
    icon: <TableViewIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/datenbanken/tabellen'
  },
  {
    title: 'Datenbereinigung',
    description: 'Datenbereinigungsfunktionen',
    icon: <DataThresholdingIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/datenbanken/bereinigung'
  }
];

// Subpages für die erste Ebene
const Protokolle = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Protokolle</Typography>
    <Typography variant="body1">System- und Anwendungsprotokolle einsehen.</Typography>
  </Paper>
);

// Komponente für Systemeinstellungen
const Systemeinstellungen = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Systemeinstellungen</Typography>
      <Typography variant="body1" paragraph>
        Hier können Sie grundlegende Systemeinstellungen verwalten.
      </Typography>
      
      <Grid container spacing={3}>
        {systemSubMenuItems.map((item) => (
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
  );
};

// Komponente für Datenbanken
const Datenbanken = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Datenbankverwaltung</Typography>
      <Typography variant="body1" paragraph>
        Hier können Sie Datenbanken konfigurieren und verwalten.
      </Typography>
      
      <Grid container spacing={3}>
        {datenbankSubMenuItems.map((item) => (
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
  );
};

// Subpages für Systemeinstellungen - zweite Ebene
const Sicherheit = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Sicherheitseinstellungen</Typography>
    <Typography variant="body1">Konfiguration der Systemsicherheit.</Typography>
  </Paper>
);

const Datensicherung = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Datensicherung</Typography>
    <Typography variant="body1">Backup-Einstellungen verwalten.</Typography>
  </Paper>
);

const Leistungsoptimierung = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Leistungsoptimierung</Typography>
    <Typography variant="body1">Systemleistung optimieren.</Typography>
  </Paper>
);

// Subpages für Datenbanken - zweite Ebene
const Datenmodelle = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Datenmodelle</Typography>
    <Typography variant="body1">Datenmodelle konfigurieren.</Typography>
  </Paper>
);

const Tabellen = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Tabellen</Typography>
    <Typography variant="body1">Tabellen verwalten.</Typography>
  </Paper>
);

const Datenbereinigung = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Datenbereinigung</Typography>
    <Typography variant="body1">Datenbereinigungsfunktionen.</Typography>
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
            <Link 
              component={RouterLink} 
              to={`/administration/${pathSegments[1]}`}
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
          
          {/* Systemeinstellungen-Untermenüs */}
          <Route path="system" element={<Systemeinstellungen />} />
          <Route path="system/sicherheit" element={<Sicherheit />} />
          <Route path="system/backup" element={<Datensicherung />} />
          <Route path="system/leistung" element={<Leistungsoptimierung />} />
          
          {/* Datenbanken-Untermenüs */}
          <Route path="datenbanken" element={<Datenbanken />} />
          <Route path="datenbanken/modelle" element={<Datenmodelle />} />
          <Route path="datenbanken/tabellen" element={<Tabellen />} />
          <Route path="datenbanken/bereinigung" element={<Datenbereinigung />} />
          
          {/* Andere Routen */}
          <Route path="protokolle" element={<Protokolle />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Administration;