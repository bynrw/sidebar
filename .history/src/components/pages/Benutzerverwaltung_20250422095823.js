import React, { useState } from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid, Card, CardContent, CardActions, Button, List, ListItem, ListItemText, ListItemIcon, Collapse } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate, Outlet } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';
import EditIcon from '@mui/icons-material/Edit';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import theme from '../../theme';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

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
    title: 'Rechte',
    description: 'Verwaltung von Benutzerrechten',
    icon: <AdminPanelSettingsIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/rechte',
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

// Untermenüs für Rechte
const rechteSubMenuItems = [
  {
    title: 'Rechteverwaltung',
    description: 'Rechte für Benutzer und Gruppen verwalten',
    icon: <SettingsIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/rechte/verwaltung',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Rechteübersicht',
    description: 'Übersicht aller Zugriffsrechte',
    icon: <FormatListBulletedIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/benutzerverwaltung/rechte/uebersicht',
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

// Benutzer-Komponenten
const Benutzer = () => {
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
                ...subItem.borderStyle
              }}
              onClick={() => navigate(subItem.path)}
            >
              <CardContent sx={{ padding: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                  {subItem.icon}
                </Box>
                <Typography variant="h6" component="h2" gutterBottom>
                  {subItem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {subItem.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button size="small" onClick={(e) => {
                  e.stopPropagation();
                  navigate(subItem.path);
                }}>
                  Öffnen
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

// Gruppen-Komponenten
const Gruppen = () => {
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
                ...subItem.borderStyle
              }}
              onClick={() => navigate(subItem.path)}
            >
              <CardContent sx={{ padding: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                  {subItem.icon}
                </Box>
                <Typography variant="h6" component="h2" gutterBottom>
                  {subItem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {subItem.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button size="small" onClick={(e) => {
                  e.stopPropagation();
                  navigate(subItem.path);
                }}>
                  Öffnen
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

// Rechte-Komponenten
const Rechte = () => {
  const navigate = useNavigate();
  
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Rechteverwaltung</Typography>
      <Typography variant="body1" paragraph>
        Hier können Sie Zugriffsrechte und Berechtigungen verwalten.
      </Typography>
      
      <Grid container spacing={3}>
        {rechteSubMenuItems.map((subItem) => (
          <Grid item xs={12} sm={6} md={4} key={subItem.title}>
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
                ...subItem.borderStyle
              }}
              onClick={() => navigate(subItem.path)}
            >
              <CardContent sx={{ padding: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                  {subItem.icon}
                </Box>
                <Typography variant="h6" component="h2" gutterBottom>
                  {subItem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {subItem.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button size="small" onClick={(e) => {
                  e.stopPropagation();
                  navigate(subItem.path);
                }}>
                  Öffnen
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

// Organisation-Komponenten
const Organisation = () => {
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
                ...subItem.borderStyle
              }}
              onClick={() => navigate(subItem.path)}
            >
              <CardContent sx={{ padding: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                  {subItem.icon}
                </Box>
                <Typography variant="h6" component="h2" gutterBottom>
                  {subItem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {subItem.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button size="small" onClick={(e) => {
                  e.stopPropagation();
                  navigate(subItem.path);
                }}>
                  Öffnen
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

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

const RechteVerwaltung = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Rechteverwaltung</Typography>
    <Typography variant="body1">Hier können Sie Rechte für Benutzer und Gruppen verwalten.</Typography>
  </Paper>
);

const RechteUebersicht = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Rechteübersicht</Typography>
    <Typography variant="body1">Übersicht aller Zugriffsrechte im System.</Typography>
  </Paper>
);

const OrganisationsDaten = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Organisationsdaten</Typography>
    <Typography variant="body1">Hier können Sie die Organisationsdaten bearbeiten.</Typography>
  </Paper>
);

function Benutzerverwaltung() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleExpand = (title) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  // Funktion zum Rendern des entsprechenden Untermenüs basierend auf dem aktuellen Pfad
  const renderSubMenu = () => {
    if (pathSegments.length > 1) {
      const secondSegment = pathSegments[1];
      
      if (secondSegment === 'benutzer') {
        return <Benutzer />;
      } else if (secondSegment === 'gruppen') {
        return <Gruppen />;
      } else if (secondSegment === 'rechte') {
        return <Rechte />;
      } else if (secondSegment === 'organisation') {
        return <Organisation />;
      }
    }
    
    // Standard-Ansicht, wenn kein spezifisches Untermenü ausgewählt ist
    return (
      <Box>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Benutzerverwaltungsbereich</Typography>
        <Typography variant="body1" paragraph>
          In diesem Bereich können Sie Benutzer, Gruppen, Rechte und Organisationsdaten verwalten.
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
                  <Button size="small" onClick={(e) => {
                    e.stopPropagation();
                    navigate(item.path);
                  }}>
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
          <Route index element={renderSubMenu()} />
          
          {/* Benutzer Routes */}
          <Route path="benutzer" element={<Benutzer />} />
          <Route path="benutzer/neu" element={<NeuerBenutzer />} />
          <Route path="benutzer/bearbeiten" element={<BenutzerBearbeiten />} />
          <Route path="benutzer/uebersicht" element={<BenutzerUebersicht />} />
          <Route path="benutzer/passwort-reset" element={<PasswortReset />} />
          
          {/* Gruppen Routes */}
          <Route path="gruppen" element={<Gruppen />} />
          <Route path="gruppen/neu" element={<NeueGruppe />} />
          <Route path="gruppen/bearbeiten" element={<GruppeBearbeiten />} />
          <Route path="gruppen/uebersicht" element={<GruppenUebersicht />} />
          
          {/* Rechte Routes */}
          <Route path="rechte" element={<Rechte />} />
          <Route path="rechte/verwaltung" element={<RechteVerwaltung />} />
          <Route path="rechte/uebersicht" element={<RechteUebersicht />} />
          
          {/* Organisation Routes */}
          <Route path="organisation" element={<Organisation />} />
          <Route path="organisation/daten" element={<OrganisationsDaten />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Benutzerverwaltung;