import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BusinessIcon from '@mui/icons-material/Business';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddBoxIcon from '@mui/icons-material/AddBox';
import BarChartIcon from '@mui/icons-material/BarChart';
import DateRangeIcon from '@mui/icons-material/DateRange';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteCard from '../layout/FavoriteCard';

// Untermenü-Struktur
const subMenuItems = [
  {
    title: 'Organisation',
    description: 'Organisationsverwaltung',
    icon: <BusinessIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/organisation',
    hasSubItems: true,
    borderStyle: { borderLeft: '4px solid', borderColor: 'info.main' }
  },
  {
    title: 'Jahresstatistik',
    description: 'Jahresstatistiken verwalten',
    icon: <BarChartIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/jahresstatistik',
    hasSubItems: true,
    borderStyle: { borderLeft: '4px solid', borderColor: 'info.main' }
  },
  {
    title: 'OPTA',
    description: 'OPTA-Einstellungen konfigurieren',
    icon: <SettingsApplicationsIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/opta',
    hasSubItems: true,
    borderStyle: { borderLeft: '4px solid', borderColor: 'info.main' }
  }
];

// Untermenüs für Organisation
const organisationSubMenuItems = [
  {
    title: 'Liste',
    description: 'Liste aller Organisationen anzeigen',
    icon: <ListAltIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/organisation/liste',
    borderStyle: { borderLeft: '4px solid', borderColor: 'info.main' }
  },
  {
    title: 'Neu',
    description: 'Neue Organisation anlegen',
    icon: <AddBoxIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/organisation/neu',
    borderStyle: { borderLeft: '4px solid', borderColor: 'info.main' }
  }
];

// Untermenüs für Jahresstatistik
const jahresstatistikSubMenuItems = [
  {
    title: 'Stichtag',
    description: 'Stichtag für Jahresstatistik festlegen',
    icon: <DateRangeIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/jahresstatistik/stichtag',
    borderStyle: { borderLeft: '4px solid', borderColor: 'info.main' }
  },
  {
    title: 'Ressourcen neu ermitteln',
    description: 'Neuberechnung der Ressourcen durchführen',
    icon: <RefreshIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/jahresstatistik/ressourcen',
    borderStyle: { borderLeft: '4px solid', borderColor: 'info.main' }
  }
];

// Untermenüs für OPTA
const optaSubMenuItems = [
  {
    title: 'Zuordnung Organisation',
    description: 'Organisationen im OPTA-System zuordnen',
    icon: <AccountTreeIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/opta/zuordnung-organisation',
    borderStyle: { borderLeft: '4px solid', borderColor: 'info.main' }
  },
  {
    title: 'Zuordnung Funktion',
    description: 'Funktionen im OPTA-System zuordnen',
    icon: <WorkIcon fontSize="large" sx={{ color: 'info.main' }} />,
    path: '/administration/opta/zuordnung-funktion',
    borderStyle: { borderLeft: '4px solid', borderColor: 'info.main' }
  }
];

// Subpages für Organisation
const OrganisationListe = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Organisationsliste</Typography>
    <Typography variant="body1">Übersicht aller Organisationen im System.</Typography>
  </Paper>
);

const OrganisationNeu = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Neue Organisation</Typography>
    <Typography variant="body1">Hier können Sie eine neue Organisation anlegen.</Typography>
  </Paper>
);

// Subpages für Jahresstatistik
const Stichtag = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Stichtag festlegen</Typography>
    <Typography variant="body1">Legen Sie den Stichtag für die Jahresstatistik fest.</Typography>
  </Paper>
);

const RessourcenNeuErmitteln = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Ressourcen neu ermitteln</Typography>
    <Typography variant="body1">Starten Sie eine Neuberechnung der Ressourcen für die Jahresstatistik.</Typography>
  </Paper>
);

// Subpages für OPTA
const ZuordnungOrganisation = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>OPTA Zuordnung Organisation</Typography>
    <Typography variant="body1">Verwalten Sie die Zuordnung von Organisationen im OPTA-System.</Typography>
  </Paper>
);

const ZuordnungFunktion = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>OPTA Zuordnung Funktion</Typography>
    <Typography variant="body1">Verwalten Sie die Zuordnung von Funktionen im OPTA-System.</Typography>
  </Paper>
);

// Hauptkomponente für Organisation
const Organisation = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Organisationsverwaltung</Typography>
      <Typography variant="body1" paragraph>
        Hier können Sie Organisationen verwalten und neue Organisationen anlegen.
      </Typography>
      
      <Grid container spacing={3}>
        {organisationSubMenuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <FavoriteCard
              title={item.title}
              description={item.description}
              icon={item.icon}
              path={item.path}
              accentColor="info.main"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// Hauptkomponente für Jahresstatistik
const Jahresstatistik = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Jahresstatistik</Typography>
      <Typography variant="body1" paragraph>
        Verwalten Sie die Einstellungen für die Jahresstatistik.
      </Typography>
      
      <Grid container spacing={3}>
        {jahresstatistikSubMenuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <FavoriteCard
              title={item.title}
              description={item.description}
              icon={item.icon}
              path={item.path}
              accentColor="info.main"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// Hauptkomponente für OPTA
const OPTA = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>OPTA-Verwaltung</Typography>
      <Typography variant="body1" paragraph>
        Konfigurieren Sie die OPTA-Einstellungen und Zuordnungen.
      </Typography>
      
      <Grid container spacing={3}>
        {optaSubMenuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <FavoriteCard
              title={item.title}
              description={item.description}
              icon={item.icon}
              path={item.path}
              accentColor="info.main"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

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
                In diesem Bereich können Sie Organisationen, Jahresstatistiken und OPTA-Einstellungen verwalten.
              </Typography>
              
              <Grid container spacing={3}>
                {subMenuItems.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.title}>
                    <FavoriteCard
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                      path={item.path}
                      accentColor="info.main"
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          } />
          
          {/* Organisation-Untermenüs */}
          <Route path="organisation" element={<Organisation />} />
          <Route path="organisation/liste" element={<OrganisationListe />} />
          <Route path="organisation/neu" element={<OrganisationNeu />} />
          
          {/* Jahresstatistik-Untermenüs */}
          <Route path="jahresstatistik" element={<Jahresstatistik />} />
          <Route path="jahresstatistik/stichtag" element={<Stichtag />} />
          <Route path="jahresstatistik/ressourcen" element={<RessourcenNeuErmitteln />} />
          
          {/* OPTA-Untermenüs */}
          <Route path="opta" element={<OPTA />} />
          <Route path="opta/zuordnung-organisation" element={<ZuordnungOrganisation />} />
          <Route path="opta/zuordnung-funktion" element={<ZuordnungFunktion />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Administration;