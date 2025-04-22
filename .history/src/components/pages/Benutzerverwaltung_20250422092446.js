import React, { useState } from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid, Card, CardContent, CardActions, Button, Tabs, Tab, AppBar, Toolbar, Divider, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate, Navigate, Outlet } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LockIcon from '@mui/icons-material/Lock';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GroupIcon from '@mui/icons-material/Group';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import theme from '../../theme';

// Hauptmenü für Benutzerverwaltung
const mainMenuItems = [
  {
    title: 'Info',
    icon: <InfoIcon />,
    path: '/benutzerverwaltung/info'
  },
  {
    title: 'Persönliche-Angaben',
    icon: <AccountCircleIcon />,
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
    icon: <GroupIcon />,
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
  }
];

// Submenu Component
const SubMenu = ({ item, onItemClick, selected }) => {
  return (
    <>
      <ListItem 
        button 
        onClick={() => onItemClick(item.path)}
        selected={selected === item.path}
        sx={{ 
          pl: 4,
          '&.Mui-selected': {
            backgroundColor: 'rgba(25, 118, 210, 0.08)',
            borderRight: `4px solid ${theme.palette.primary.main}`
          },
          '&.Mui-selected:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.12)'
          }
        }}
      >
        <ListItemIcon sx={{ minWidth: '40px' }}>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    </>
  );
};

// SubPages Components
const Info = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Info</Typography>
    <Typography variant="body1">Informationen zur Benutzerverwaltung und zum System.</Typography>
  </Paper>
);

const PersoenlicheAngaben = () => {
  return <Outlet />;
};

const DatenBearbeiten = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Daten bearbeiten</Typography>
    <Typography variant="body1">Hier können Sie Ihre persönlichen Daten bearbeiten.</Typography>
    {/* Form for editing personal data would go here */}
  </Paper>
);

const PasswortAendern = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Passwort ändern</Typography>
    <Typography variant="body1">Hier können Sie Ihr Passwort ändern.</Typography>
    {/* Form for changing password would go here */}
  </Paper>
);

const Benutzerbestand = () => {
  return <Outlet />;
};

const BenutzerListe = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Benutzerliste</Typography>
    <Typography variant="body1">Übersicht aller Benutzer im System.</Typography>
    {/* User list table would go here */}
  </Paper>
);

const NeuerBenutzer = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Neuer Benutzer anlegen</Typography>
    <Typography variant="body1">Hier können Sie einen neuen Benutzer anlegen.</Typography>
    {/* Form for creating new user would go here */}
  </Paper>
);

function Benutzerverwaltung() {
  const location = useLocation();
  const navigate = useNavigate();
  const [openSubmenu, setOpenSubmenu] = useState(null);
  
  const currentPath = location.pathname;
  const pathSegments = currentPath.split('/').filter(Boolean);
  
  // Determine if a main menu item should be selected
  const isMainMenuSelected = (path) => {
    const mainPath = path.split('/').slice(0, 3).join('/');
    return currentPath.startsWith(mainPath);
  };

  // Handle main menu item click
  const handleMainMenuClick = (menuItem) => {
    if (menuItem.subMenu) {
      // Toggle submenu
      setOpenSubmenu(openSubmenu === menuItem.title ? null : menuItem.title);
      
      // Navigate to first submenu item if not already in a submenu
      if (!menuItem.subMenu.some(item => currentPath.includes(item.path.split('/')[3]))) {
        navigate(menuItem.subMenu[0].path);
      }
    } else {
      // Navigate to main menu item with no submenu
      navigate(menuItem.path);
    }
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

      <Grid container spacing={3}>
        {/* Left side menu */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <List component="nav" sx={{ p: 0 }}>
              {mainMenuItems.map((item) => (
                <React.Fragment key={item.title}>
                  <ListItem 
                    button 
                    onClick={() => handleMainMenuClick(item)}
                    selected={isMainMenuSelected(item.path)}
                    sx={{ 
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(25, 118, 210, 0.08)',
                        borderRight: `4px solid ${theme.palette.primary.main}`
                      },
                      '&.Mui-selected:hover': {
                        backgroundColor: 'rgba(25, 118, 210, 0.12)'
                      }
                    }}
                  >
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItem>
                  
                  {item.subMenu && openSubmenu === item.title && (
                    <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.02)' }}>
                      {item.subMenu.map((subItem) => (
                        <SubMenu 
                          key={subItem.title} 
                          item={subItem} 
                          onItemClick={navigate} 
                          selected={currentPath}
                        />
                      ))}
                    </Box>
                  )}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Right side content */}
        <Grid item xs={12} md={9}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Routes>
              <Route index element={<Navigate to="/benutzerverwaltung/info" replace />} />
              <Route path="info" element={<Info />} />
              
              <Route path="persoenliche-angaben" element={<PersoenlicheAngaben />}>
                <Route index element={<Navigate to="/benutzerverwaltung/persoenliche-angaben/daten-bearbeiten" replace />} />
                <Route path="daten-bearbeiten" element={<DatenBearbeiten />} />
                <Route path="passwort-aendern" element={<PasswortAendern />} />
              </Route>
              
              <Route path="benutzerbestand" element={<Benutzerbestand />}>
                <Route index element={<Navigate to="/benutzerverwaltung/benutzerbestand/liste" replace />} />
                <Route path="liste" element={<BenutzerListe />} />
                <Route path="neuer-benutzer" element={<NeuerBenutzer />} />
              </Route>
            </Routes>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Benutzerverwaltung;