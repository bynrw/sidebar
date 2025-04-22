import React, { useState } from 'react';
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
import CustomCard from '../layout/CustomCard';

// Hauptmenü-Struktur
const subMenuItems = [
  {
    title: 'Benutzer',
    description: 'Verwaltung von Benutzern',
    icon: <PersonIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/benutzer',
    hasSubItems: true,
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Gruppen',
    description: 'Verwaltung von Benutzergruppen',
    icon: <GroupIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/gruppen',
    hasSubItems: true,
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Organisation',
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

// Untermenüs für Benutzer
const benutzerSubMenuItems = [
  {
    title: 'Neuer Benutzer',
    description: 'Einen neuen Benutzer anlegen',
    icon: <AddBoxIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/benutzer/neu',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Benutzer bearbeiten',
    description: 'Bestehende Benutzer bearbeiten',
    icon: <EditIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/benutzer/bearbeiten',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Benutzerübersicht',
    description: 'Liste aller Benutzer',
    icon: <FormatListBulletedIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/benutzer/uebersicht',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Passwörter zurücksetzen',
    description: 'Passwörter der Benutzer zurücksetzen',
    icon: <VpnKeyIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/benutzer/passwort-reset',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  }
];

// Untermenüs für Gruppen
const gruppenSubMenuItems = [
  {
    title: 'Neue Gruppe',
    description: 'Eine neue Benutzergruppe anlegen',
    icon: <AddBoxIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/gruppen/neu',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Gruppe bearbeiten',
    description: 'Bestehende Benutzergruppen bearbeiten',
    icon: <EditIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/gruppen/bearbeiten',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Gruppenübersicht',
    description: 'Liste aller Benutzergruppen',
    icon: <FormatListBulletedIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/gruppen/uebersicht',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  }
];

// Untermenüs für Organisation
const organisationSubMenuItems = [
  {
    title: 'Organisationsdaten',
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
const NeuerBenutzer = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Neuer Benutzer</Typography>
    <Typography variant="body1">Hier können Sie einen neuen Benutzer anlegen.</Typography>
  </Paper>
);

const BenutzerBearbeiten = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Benutzer bearbeiten</Typography>
    <Typography variant="body1">Hier können Sie bestehende Benutzer bearbeiten.</Typography>
  </Paper>
);

const BenutzerUebersicht = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Benutzerübersicht</Typography>
    <Typography variant="body1">Liste aller Benutzer im System.</Typography>
  </Paper>
);

const PasswortReset = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Passwörter zurücksetzen</Typography>
    <Typography variant="body1">Hier können Sie Benutzerpasswörter zurücksetzen.</Typography>
  </Paper>
);

const NeueGruppe = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Neue Gruppe</Typography>
    <Typography variant="body1">Hier können Sie eine neue Benutzergruppe anlegen.</Typography>
  </Paper>
);

const GruppeBearbeiten = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Gruppe bearbeiten</Typography>
    <Typography variant="body1">Hier können Sie bestehende Benutzergruppen bearbeiten.</Typography>
  </Paper>
);

const GruppenUebersicht = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Gruppenübersicht</Typography>
    <Typography variant="body1">Liste aller Benutzergruppen im System.</Typography>
  </Paper>
);

const OrganisationsDaten = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Organisationsdaten</Typography>
    <Typography variant="body1">Hier können Sie die Organisationsdaten bearbeiten.</Typography>
  </Paper>
);

// Untermenü-Komponenten im einheitlichen Stil
const BenutzerSubMenu = () => {
  const navigate = useNavigate();
  
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Benutzerverwaltung</Typography>
      <Typography variant="body1" paragraph>
        Hier können Sie Benutzer erstellen, bearbeiten und verwalten.
      </Typography>
      
      <Grid container spacing={3}>
        {benutzerSubMenuItems.map((subItem) => (
          <Grid item xs={12} sm={6} md={4} key={subItem.title}>
            <CustomCard
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

const GruppenSubMenu = () => {
  const navigate = useNavigate();
  
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Gruppenverwaltung</Typography>
      <Typography variant="body1" paragraph>
        Hier können Sie Benutzergruppen erstellen, bearbeiten und verwalten.
      </Typography>
      
      <Grid container spacing={3}>
        {gruppenSubMenuItems.map((subItem) => (
          <Grid item xs={12} sm={6} md={4} key={subItem.title}>
            <CustomCard
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
      <Typography variant="h5" gutterBottom>Organisationsverwaltung</Typography>
      <Typography variant="body1" paragraph>
        Hier können Sie die Organisationsdaten verwalten.
      </Typography>
      
      <Grid container spacing={3}>
        {organisationSubMenuItems.map((subItem) => (
          <Grid item xs={12} sm={6} md={4} key={subItem.title}>
            <CustomCard
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
            <Typography color="text.primary">
              {pathSegments[1].charAt(0).toUpperCase() + pathSegments[1].slice(1).replace(/-/g, ' ')}
            </Typography>
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
                In diesem Bereich können Sie Benutzer, Gruppen und Organisationsdaten verwalten.
              </Typography>
              
              <Grid container spacing={3}>
                {subMenuItems.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.title}>
                    <CustomCard
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
          
          {/* Benutzer Routes */}
          <Route path="benutzer" element={<BenutzerSubMenu />} />
          <Route path="benutzer/neu" element={<NeuerBenutzer />} />
          <Route path="benutzer/bearbeiten" element={<BenutzerBearbeiten />} />
          <Route path="benutzer/uebersicht" element={<BenutzerUebersicht />} />
          <Route path="benutzer/passwort-reset" element={<PasswortReset />} />
          
          {/* Gruppen Routes */}
          <Route path="gruppen" element={<GruppenSubMenu />} />
          <Route path="gruppen/neu" element={<NeueGruppe />} />
          <Route path="gruppen/bearbeiten" element={<GruppeBearbeiten />} />
          <Route path="gruppen/uebersicht" element={<GruppenUebersicht />} />
          
          {/* Organisation Routes */}
          <Route path="organisation" element={<OrganisationSubMenu />} />
          <Route path="organisation/daten" element={<OrganisationsDaten />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Benutzerverwaltung;