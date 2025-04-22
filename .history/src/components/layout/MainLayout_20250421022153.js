import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  Box, 
  AppBar, 
  Toolbar, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  IconButton, 
  Typography, 
  Divider, 
  Avatar, 
  Menu, 
  MenuItem, 
  Badge, 
  Chip, 
  useTheme, 
  Container,
  Tooltip,
  Collapse,
  Alert,
  LinearProgress
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import BarChartIcon from '@mui/icons-material/BarChart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SecurityIcon from '@mui/icons-material/Security';
import ArticleIcon from '@mui/icons-material/Article';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { useTheme as useMuiTheme } from '@mui/material/styles';

// Logo Komponente
const Logo = () => {
  const theme = useMuiTheme();
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', py: 1 }}>
      <Box sx={{ 
        backgroundColor: theme.palette.primary.main, 
        borderRadius: '8px', 
        width: 40, 
        height: 40, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        mr: 1,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <SecurityIcon sx={{ color: '#fff', fontSize: 24 }} />
      </Box>
      <Box>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ lineHeight: 1, color: theme.palette.primary.main }}>
          IG NRW
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1 }}>
          Gefahrenabwehr
        </Typography>
      </Box>
    </Box>
  );
};

// Menüelemente
const menuItems = [
  {
    title: 'MediRIG',
    icon: <MedicalServicesIcon />,
    path: '/erfassung/medirig',
    color: 'medical',
    description: 'Medizinisches Rettungsinformationsgerät',
    badge: true
  },
  {
    title: 'Erfassung',
    icon: <DescriptionIcon />,
    path: '/erfassung',
    color: 'primary',
    description: 'Datenerfassung und -management'
  },
  {
    title: 'Einsatz',
    icon: <NotificationImportantIcon />,
    path: '/einsatz',
    color: 'error',
    description: 'Einsatzplanung und -management',
    badge: true
  },
  {
    title: 'Auswertung',
    icon: <BarChartIcon />,
    path: '/auswertung',
    color: 'secondary',
    description: 'Berichte und Statistiken'
  },
  {
    title: 'Benutzerverwaltung',
    icon: <PeopleIcon />,
    path: '/benutzerverwaltung',
    color: 'primary',
    description: 'Benutzer und Berechtigungen'
  },
  {
    title: 'Administration',
    icon: <AdminPanelSettingsIcon />,
    path: '/administration',
    color: 'info',
    description: 'Systemadministration'
  },
  {
    title: 'Hilfe',
    icon: <HelpOutlineIcon />,
    path: '/hilfe',
    color: 'success',
    description: 'Hilfe und Support'
  },
  {
    title: 'Info',
    icon: <InfoIcon />,
    path: '/info',
    color: 'warning',
    description: 'Systeminformationen'
  }
];

// MANV Fälle für den Liveticker
const manvFaelle = [
  {
    id: 1,
    titel: "MANV Düsseldorf - Mehrere Verletzte bei Einsturz",
    patienten: 23,
    kategorie: "MANV 25+",
    farbe: "error.main",
    status: "Aktiv"
  },
  {
    id: 2,
    titel: "MANV Köln - Massenkarambolage A3",
    patienten: 15,
    kategorie: "MANV 15+",
    farbe: "warning.main",
    status: "Aktiv"
  },
  {
    id: 3,
    titel: "MANV Bonn - Chemieunfall in Fabrik",
    patienten: 8,
    kategorie: "MANV 5+", 
    farbe: "info.main",
    status: "Bearbeitung"
  },
  {
    id: 4,
    titel: "MANV Aachen - Brand im Krankenhaus",
    patienten: 12,
    kategorie: "MANV 10+",
    farbe: "medical.main",
    status: "Bearbeitung"
  }
];

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [showLiveticker, setShowLiveticker] = useState(false);
  const [currentManvIndex, setCurrentManvIndex] = useState(0);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  // Automatische Rotation für den Liveticker
  useEffect(() => {
    let interval;
    if (showLiveticker) {
      interval = setInterval(() => {
        setCurrentManvIndex((prevIndex) => (prevIndex + 1) % manvFaelle.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [showLiveticker]);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  // MediRIG-Klick Handler
  const handleMediRIGClick = (path) => {
    navigate(path);
    setShowLiveticker(!showLiveticker);
    if (window.innerWidth < 900) {
      setDrawerOpen(false);
    }
  };

  // Simulierte Notfallereignisse
  const notifications = [
    {
      id: 1,
      title: 'Großbrand Industriegebiet',
      type: 'emergency',
      time: '10:15',
      icon: <ErrorOutlineIcon />,
      color: theme.palette.error.main
    },
    {
      id: 2,
      title: 'Verkehrsunfall B1',
      type: 'alert',
      time: '09:32',
      icon: <LocalHospitalIcon />,
      color: theme.palette.medical.main
    },
    {
      id: 3,
      title: 'Hochwasserwarnung',
      type: 'warning',
      time: '08:45',
      icon: <WarningAmberIcon />,
      color: theme.palette.warning.main
    }
  ];

  // Funktion zum Umgang mit Notfallaktionen
  const handleEmergencyAction = (id) => {
    // Hier würde die Logik für den Umgang mit Notfällen implementiert
    console.log(`Notfall ${id} bearbeiten`);
    handleNotificationClose();
    // Je nach Notfalltyp zur entsprechenden Seite navigieren
    navigate('/einsatz');
  };

  const drawer = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        p: 2, 
        backgroundColor: 'background.paper' 
      }}>
        <Logo />
        <IconButton onClick={handleDrawerToggle} size="small">
          <CloseIcon />
        </IconButton>
      </Box>
      
      <Divider />
      
      {/* User Profile Summary */}
      <Box sx={{ 
        py: 2, 
        px: 2, 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0, 90, 158, 0.04)'
      }}>
        <Avatar 
          sx={{ 
            bgcolor: theme.palette.primary.main, 
            width: 40, 
            height: 40,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
          <AdminPanelSettingsIcon />
        </Avatar>
        <Box sx={{ ml: 2 }}>
          <Typography variant="subtitle2">Max Mustermann</Typography>
          <Typography variant="caption" color="text.secondary">Leitstelle Düsseldorf</Typography>
        </Box>
      </Box>
      
      <Divider />
      
      {/* Main Menu */}
      <List sx={{ flexGrow: 1, py: 0 }}>
        {menuItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton 
              onClick={() => {
                if (item.title === 'MediRIG') {
                  handleMediRIGClick(item.path);
                } else {
                  navigate(item.path);
                  if (window.innerWidth < 900) {
                    setDrawerOpen(false);
                  }
                }
              }}
              selected={isActive(item.path)}
              sx={{ 
                borderLeft: isActive(item.path) ? `4px solid ${theme.palette[item.color].main}` : '4px solid transparent',
                py: 1.5,
                '&.Mui-selected': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                },
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.08)'
                }
              }}
            >
              <ListItemIcon sx={{ 
                color: isActive(item.path) ? theme.palette[item.color].main : 'text.secondary',
                minWidth: 40
              }}>
                {item.badge ? 
                  <Badge badgeContent={3} color="error">
                    {item.icon}
                  </Badge> : 
                  item.icon
                }
              </ListItemIcon>
              <ListItemText 
                primary={
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontWeight: isActive(item.path) ? 'bold' : 'regular',
                      color: isActive(item.path) ? 'text.primary' : 'text.secondary'
                    }}
                  >
                    {item.title}
                  </Typography>
                }
                secondary={
                  isActive(item.path) && (
                    <Typography variant="caption" color="text.secondary">
                      {item.description}
                    </Typography>
                  )
                }
              />
              {item.badge && !isActive(item.path) && (
                <Chip 
                  label="Neu" 
                  size="small" 
                  color="error" 
                  sx={{ height: 20, fontSize: '0.7rem' }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Divider />
      
      {/* System Status */}
      <Box sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
        <Typography variant="caption" color="text.secondary">
          System-Status: <span style={{ color: theme.palette.success.main, fontWeight: 'bold' }}>●</span> Online
        </Typography>
        <Typography variant="caption" display="block" color="text.secondary">
          Version 2.4.1 • Letzte Aktualisierung: 21.04.2025
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* AppBar */}
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'background.paper',
          color: 'text.primary',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Logo />
          </Box>
          
          <Box sx={{ display: { xs: 'block', md: 'none' }, flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="subtitle1" fontWeight="bold" color="primary">IG NRW</Typography>
          </Box>
          
          <Box sx={{ flexGrow: { xs: 0, md: 1 } }} />
          
          {/* Notification Icon */}
          <Tooltip title="Benachrichtigungen">
            <IconButton 
              color="inherit" 
              sx={{ ml: 1 }} 
              onClick={handleNotificationClick}
            >
              <Badge badgeContent={notifications.length} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          
          {/* User Profile */}
          <Tooltip title="Benutzerprofil">
            <IconButton 
              onClick={handleProfileClick}
              color="inherit"
              sx={{ ml: 1 }}
            >
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
        
        {/* MANV Liveticker */}
        <Collapse in={showLiveticker}>
          <Box 
            sx={{ 
              p: 1, 
              backgroundColor: theme.palette[manvFaelle[currentManvIndex].farbe.split('.')[0]].main,
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocalHospitalIcon sx={{ mr: 1 }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                {manvFaelle[currentManvIndex].titel}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Chip 
                label={`${manvFaelle[currentManvIndex].patienten} Patienten`} 
                size="small" 
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  fontWeight: 'bold'
                }}
              />
              <Chip 
                label={manvFaelle[currentManvIndex].kategorie} 
                size="small" 
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  fontWeight: 'bold'
                }}
              />
              <Chip 
                label={manvFaelle[currentManvIndex].status} 
                size="small" 
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  fontWeight: 'bold'
                }}
              />
            </Box>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={(currentManvIndex / (manvFaelle.length - 1)) * 100}
            sx={{ 
              height: 3, 
              backgroundColor: theme.palette.grey[300],
              '& .MuiLinearProgress-bar': {
                backgroundColor: theme.palette[manvFaelle[currentManvIndex].farbe.split('.')[0]].main,
              }
            }}
          />
        </Collapse>
      </AppBar>
      
      {/* Notifications Menu */}
      <Menu
        anchorEl={notificationAnchorEl}
        open={Boolean(notificationAnchorEl)}
        onClose={handleNotificationClose}
        sx={{ mt: 1 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          elevation: 3,
          sx: {
            maxWidth: 320,
            width: 320,
            overflow: 'hidden',
            borderRadius: 2
          }
        }}
      >
        <Box sx={{ px: 2, py: 1.5, backgroundColor: 'background.default' }}>
          <Typography variant="subtitle1" fontWeight="bold">Benachrichtigungen</Typography>
        </Box>
        <Divider />
        
        {notifications.map((notification) => (
          <MenuItem 
            key={notification.id}
            onClick={() => handleEmergencyAction(notification.id)}
            sx={{ 
              py: 1.5,
              borderLeft: `4px solid ${notification.color}`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
              <Avatar sx={{ bgcolor: `${notification.color}20`, color: notification.color, mr: 1.5, mt: 0.5 }}>
                {notification.icon}
              </Avatar>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 0.5 }}>
                  <Typography variant="body2" fontWeight="bold">{notification.title}</Typography>
                  <Typography variant="caption" color="text.secondary">{notification.time}</Typography>
                </Box>
                <Typography variant="caption" color="text.secondary">
                  {notification.type === 'emergency' && 'Notfallsituation erfordert sofortiges Handeln'}
                  {notification.type === 'alert' && 'Medizinischer Notfall gemeldet'}
                  {notification.type === 'warning' && 'Potenzielle Gefahr, Vorsicht geboten'}
                </Typography>
              </Box>
            </Box>
          </MenuItem>
        ))}
        
        <Divider />
        <Box sx={{ p: 1.5, textAlign: 'center' }}>
          <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }} onClick={() => navigate('/einsatz')}>
            Alle Meldungen anzeigen
          </Typography>
        </Box>
      </Menu>
      
      {/* User Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileClose}
        sx={{ mt: 1 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          elevation: 3,
          sx: {
            minWidth: 200,
            borderRadius: 2
          }
        }}
      >
        <MenuItem onClick={handleProfileClose}>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Profil</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleProfileClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Einstellungen</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleProfileClose}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Abmelden</ListItemText>
        </MenuItem>
      </Menu>
      
      {/* Sidebar */}
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
      
      <Drawer
        variant="permanent"
        sx={{
          width: 280,
          flexShrink: 0,
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            borderRight: '1px solid rgba(0, 0, 0, 0.08)',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
      
      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: { xs: 7, sm: 8 },
          height: '100vh',
          overflow: 'auto',
          backgroundColor: 'background.default'
        }}
      >
        <Container maxWidth="xl" sx={{ py: 3 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default MainLayout;