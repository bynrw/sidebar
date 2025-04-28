import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';
import EditIcon from '@mui/icons-material/Edit';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteCard from '../layout/FavoriteCard';

// Hauptmenü-Struktur
const subMenuItems = [
  {
    title: 'Persönliche Angaben',
    description: 'Verwalten Sie Ihre persönlichen Daten',
    icon: <AccountCircleIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/persoenlich',
    hasSubItems: true,
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Benutzerbestand',
    description: 'Verwaltung aller Benutzerkonten',
    icon: <PersonIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/benutzerbestand',
    hasSubItems: true,
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Organisationsdaten',
    description: 'Organisationsdaten verwalten',
    icon: <BusinessIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/organisation',
    hasSubItems: true,
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  }
];

// Untermenüs für Persönliche Angaben
const persoenlichSubMenuItems = [
  {
    title: 'Daten bearbeiten',
    description: 'Bearbeiten Sie Ihre persönlichen Daten',
    icon: <EditIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/persoenlich/daten',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Passwort ändern',
    description: 'Ändern Sie Ihr Passwort',
    icon: <VpnKeyIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/persoenlich/passwort',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  }
];

// Untermenüs für Benutzerbestand
const benutzerbestandSubMenuItems = [
  {
    title: 'Liste',
    description: 'Liste aller Benutzer',
    icon: <FormatListBulletedIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/benutzerbestand/liste',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Neuer Benutzer',
    description: 'Einen neuen Benutzer anlegen',
    icon: <AddBoxIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/benutzerbestand/neu',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  }
];

// Untermenüs für Organisation
const organisationSubMenuItems = [
  {
    title: 'Daten bearbeiten',
    description: 'Organisationsdaten bearbeiten',
    icon: <EditIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/organisation/daten',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  }
];

// Platzhalter-Komponenten für Unterseiten
const PersoenlichDaten = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Persönliche Daten bearbeiten</Typography>
    <Typography variant="body1">Hier können Sie Ihre persönlichen Daten bearbeiten.</Typography>
  </Paper>
);

const PasswortAendern = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Passwort ändern</Typography>
    <Typography variant="body1">Hier können Sie Ihr Passwort ändern.</Typography>
  </Paper>
);

const BenutzerListe = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Benutzerliste</Typography>
    <Typography variant="body1">Liste aller Benutzer im System.</Typography>
  </Paper>
);

const NeuerBenutzer = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Neuer Benutzer</Typography>
    <Typography variant="body1">Hier können Sie einen neuen Benutzer anlegen.</Typography>
  </Paper>
);

const OrganisationsDaten = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Organisationsdaten</Typography>
    <Typography variant="body1">Hier können Sie die Organisationsdaten bearbeiten.</Typography>
  </Paper>
);

// Untermenü-Komponenten im einheitlichen Stil
const PersoenlicheAngabenSubMenu = () => {
  const navigate = useNavigate();
  
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Persönliche Angaben</Typography>
      <Typography variant="body1" paragraph>
        Hier können Sie Ihre persönlichen Daten und Ihr Passwort verwalten.
      </Typography>
      
      <Grid container spacing={3}>
        {persoenlichSubMenuItems.map((subItem) => (
          <Grid item xs={12} sm={6} md={4} key={subItem.title}>
            <FavoriteCard
              title={subItem.title}
              description={subItem.description}
              icon={subItem.icon}
              path={subItem.path}
              accentColor="primary.main"
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

const BenutzerbestandSubMenu = () => {
  const navigate = useNavigate();
  
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Benutzerbestand</Typography>
      <Typography variant="body1" paragraph>
        Hier können Sie alle Benutzer verwalten und neue Benutzer anlegen.
      </Typography>
      
      <Grid container spacing={3}>
        {benutzerbestandSubMenuItems.map((subItem) => (
          <Grid item xs={12} sm={6} md={4} key={subItem.title}>
            <FavoriteCard
              title={subItem.title}
              description={subItem.description}
              icon={subItem.icon}
              path={subItem.path}
              accentColor="primary.main"
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

const OrganisationSubMenu = () => {
  const navigate = useNavigate();
  
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Organisationsdaten</Typography>
      <Typography variant="body1" paragraph>
        Hier können Sie die Organisationsdaten verwalten.
      </Typography>
      
      <Grid container spacing={3}>
        {organisationSubMenuItems.map((subItem) => (
          <Grid item xs={12} sm={6} md={4} key={subItem.title}>
            <FavoriteCard
              title={subItem.title}
              description={subItem.description}
              icon={subItem.icon}
              path={subItem.path}
              accentColor="primary.main"
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

function Benutzerverwaltung() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Benutzerverwaltung</Typography>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/benutzerverwaltung" underline="hover" color="inherit">
            Benutzerverwaltung
          </Link>
          {pathSegments.length > 1 && (
            <Link 
              component={RouterLink} 
              to={`/benutzerverwaltung/${pathSegments[1]}`}
              underline="hover"
              color={pathSegments.length > 2 ? "inherit" : "text.primary"}
            >
              {pathSegments[1].charAt(0).toUpperCase() + pathSegments[1].slice(1).replace(/-/g, ' ')}
            </Link>
          )}
          {pathSegments.length > 2 && (
            <Typography color="text.primary">
              {pathSegments[2].charAt(0).toUpperCase() + pathSegments[2].slice(1).replace(/-/g, ' ')}
            </Typography>
          )}
        </Breadcrumbs>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Routes>
          <Route index element={
            <Box>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Benutzerverwaltungsbereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich können Sie Ihre persönlichen Angaben, den Benutzerbestand und Organisationsdaten verwalten.
              </Typography>
              
              <Grid container spacing={3}>
                {subMenuItems.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.title}>
                    <FavoriteCard
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                      path={item.path}
                      accentColor="primary.main"
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          } />
          
          {/* Persönliche Angaben Routes */}
          <Route path="persoenlich" element={<PersoenlicheAngabenSubMenu />} />
          <Route path="persoenlich/daten" element={<PersoenlichDaten />} />
          <Route path="persoenlich/passwort" element={<PasswortAendern />} />
          
          {/* Benutzerbestand Routes */}
          <Route path="benutzerbestand" element={<BenutzerbestandSubMenu />} />
          <Route path="benutzerbestand/liste" element={<BenutzerListe />} />
          <Route path="benutzerbestand/neu" element={<NeuerBenutzer />} />
          
          {/* Organisation Routes */}
          <Route path="organisation" element={<OrganisationSubMenu />} />
          <Route path="organisation/daten" element={<OrganisationsDaten />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Benutzerverwaltung;