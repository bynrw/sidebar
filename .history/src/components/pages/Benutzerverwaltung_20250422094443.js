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

// Untermenü-Struktur mit Submenüs
const subMenuItems = [
  {
    title: 'Persönliche-Angaben',
    description: 'Persönliche Angaben verwalten',
    icon: <PersonIcon fontSize="large" sx={{ color: 'primary.dark' }} />,
    path: '/benutzerverwaltung/persoenliche-angaben',
    subMenu: [
      {
        title: 'Daten bearbeiten',
        icon: <EditIcon />,
        path: '/benutzerverwaltung/persoenliche-angaben/daten-bearbeiten'
      },
      {
        title: 'Passwort ändern',
        icon: <VpnKeyIcon />,
        path: '/benutzerverwaltung/persoenliche-angaben/passwort-aendern'
      }
    ]
  },
  {
    title: 'Benutzerbestand',
    description: 'Benutzerbestand verwalten',
    icon: <GroupIcon fontSize="large" sx={{ color: 'primary.dark' }} />,
    path: '/benutzerverwaltung/benutzerbestand',
    subMenu: [
      {
        title: 'Liste',
        icon: <FormatListBulletedIcon />,
        path: '/benutzerverwaltung/benutzerbestand/liste'
      },
      {
        title: 'Neuer Benutzer',
        icon: <PersonAddIcon />,
        path: '/benutzerverwaltung/benutzerbestand/neuer-benutzer'
      }
    ]
  },
  {
    title: 'Organisationsdaten',
    description: 'Organisationsdaten konfigurieren',
    icon: <BusinessIcon fontSize="large" sx={{ color: 'primary.dark' }} />,
    path: '/benutzerverwaltung/organisationsdaten',
    subMenu: [
      {
        title: 'Daten bearbeiten',
        icon: <EditIcon />,
        path: '/benutzerverwaltung/organisationsdaten/daten-bearbeiten'
      }
    ]
  }
];

// Subpages für Persönliche-Angaben
const PersoenlicheAngaben = () => {
  return <Outlet />;
};

const DatenBearbeiten = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Daten bearbeiten</Typography>
    <Typography variant="body1">Persönliche Daten bearbeiten.</Typography>
  </Paper>
);

const PasswortAendern = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Passwort ändern</Typography>
    <Typography variant="body1">Passwort ändern und verwalten.</Typography>
  </Paper>
);

// Subpages für Benutzerbestand
const Benutzerbestand = () => {
  return <Outlet />;
};

const BenutzerListe = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Benutzerliste</Typography>
    <Typography variant="body1">Liste aller Benutzer im System.</Typography>
  </Paper>
);

const NeuerBenutzer = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Neuer Benutzer</Typography>
    <Typography variant="body1">Neuen Benutzer anlegen.</Typography>
  </Paper>
);

// Subpages für Organisationsdaten
const Organisationsdaten = () => {
  return <Outlet />;
};

const OrgaDatenBearbeiten = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Organisationsdaten bearbeiten</Typography>
    <Typography variant="body1">Organisationsdaten bearbeiten und verwalten.</Typography>
  </Paper>
);

// Submenu Component
const SubMenu = ({ item, expanded, toggleExpand }) => {
  return (
    <>
      <ListItem 
        button 
        onClick={toggleExpand}
        sx={{ 
          pl: 2,
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.08)'
          }
        }}
      >
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.title} />
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.subMenu.map((subItem) => (
            <ListItem 
              key={subItem.title}
              button 
              component={RouterLink}
              to={subItem.path}
              sx={{ 
                pl: 4,
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.08)'
                }
              }}
            >
              <ListItemIcon>
                {subItem.icon}
              </ListItemIcon>
              <ListItemText primary={subItem.title} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

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
                In diesem Bereich können Sie Ihre persönlichen Angaben, den Benutzerbestand und Organisationsdaten verwalten.
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
                        borderLeft: `4px solid ${theme.palette.primary.main}`
                      }}
                      onClick={() => {
                        toggleExpand(item.title);
                        navigate(item.path);
                      }}
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
          } />
          
          {/* Persönliche-Angaben Routes */}
          <Route path="persoenliche-angaben" element={<PersoenlicheAngaben />}>
            <Route index element={
              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>Persönliche Angaben</Typography>
                <Typography variant="body1" paragraph>
                  Hier können Sie Ihre persönlichen Daten verwalten und Ihr Passwort ändern.
                </Typography>
                <List>
                  <SubMenu 
                    item={subMenuItems[0]} 
                    expanded={expandedMenus[subMenuItems[0].title] || false}
                    toggleExpand={() => toggleExpand(subMenuItems[0].title)}
                  />
                </List>
              </Paper>
            } />
            <Route path="daten-bearbeiten" element={<DatenBearbeiten />} />
            <Route path="passwort-aendern" element={<PasswortAendern />} />
          </Route>
          
          {/* Benutzerbestand Routes */}
          <Route path="benutzerbestand" element={<Benutzerbestand />}>
            <Route index element={
              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>Benutzerbestand</Typography>
                <Typography variant="body1" paragraph>
                  Hier können Sie den Benutzerbestand einsehen und neue Benutzer anlegen.
                </Typography>
                <List>
                  <SubMenu 
                    item={subMenuItems[1]} 
                    expanded={expandedMenus[subMenuItems[1].title] || false}
                    toggleExpand={() => toggleExpand(subMenuItems[1].title)}
                  />
                </List>
              </Paper>
            } />
            <Route path="liste" element={<BenutzerListe />} />
            <Route path="neuer-benutzer" element={<NeuerBenutzer />} />
          </Route>
          
          {/* Organisationsdaten Routes */}
          <Route path="organisationsdaten" element={<Organisationsdaten />}>
            <Route index element={
              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>Organisationsdaten</Typography>
                <Typography variant="body1" paragraph>
                  Hier können Sie die Organisationsdaten verwalten.
                </Typography>
                <List>
                  <SubMenu 
                    item={subMenuItems[2]} 
                    expanded={expandedMenus[subMenuItems[2].title] || false}
                    toggleExpand={() => toggleExpand(subMenuItems[2].title)}
                  />
                </List>
              </Paper>
            } />
            <Route path="daten-bearbeiten" element={<OrgaDatenBearbeiten />} />
          </Route>
        </Routes>
      </Box>
    </Container>
  );
}

export default Benutzerverwaltung;