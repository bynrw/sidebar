import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  Box, 
  Drawer, 
  AppBar, 
  Toolbar, 
  Typography, 
  Divider, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Collapse, 
  useTheme, 
  useMediaQuery 
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  Description as DescriptionIcon,
  Assessment as AssessmentIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Info as InfoIcon,
  Work as WorkIcon,
  Person as PersonIcon,
  ExpandLess,
  ExpandMore
} from '@mui/icons-material';

// Drawer width
const drawerWidth = 260;

// Define the menu structure with submenus
const menuItems = [
  {
    title: 'Home',
    icon: <DashboardIcon />,
    path: '/',
    subItems: []
  },
  {
    title: 'Erfassung',
    icon: <DescriptionIcon />,
    path: '/erfassung',
    subItems: [
      { title: 'Neue Erfassung', path: '/erfassung/neu' },
      { title: 'Liste der Erfassungen', path: '/erfassung/liste' },
      { title: 'Verlauf', path: '/erfassung/verlauf' }
    ]
  },
  {
    title: 'Auswertung',
    icon: <AssessmentIcon />,
    path: '/auswertung',
    subItems: [
      { title: 'Berichte', path: '/auswertung/berichte' },
      { title: 'Statistiken', path: '/auswertung/statistiken' },
      { title: 'Grafiken', path: '/auswertung/grafiken' }
    ]
  },
  {
    title: 'Administration',
    icon: <SettingsIcon />,
    path: '/administration',
    subItems: [
      { title: 'Systemeinstellungen', path: '/administration/system' },
      { title: 'Datenbanken', path: '/administration/datenbanken' },
      { title: 'Protokolle', path: '/administration/protokolle' }
    ]
  },
  {
    title: 'Hilfe',
    icon: <HelpIcon />,
    path: '/hilfe',
    subItems: [
      { title: 'Dokumentation', path: '/hilfe/dokumentation' },
      { title: 'Tutorial', path: '/hilfe/tutorial' },
      { title: 'FAQ', path: '/hilfe/faq' }
    ]
  },
  {
    title: 'Info',
    icon: <InfoIcon />,
    path: '/info',
    subItems: [
      { title: 'Versionshinweise', path: '/info/versions' },
      { title: 'Lizenzen', path: '/info/lizenzen' },
      { title: 'Über', path: '/info/ueber' }
    ]
  },
  {
    title: 'Einsatz',
    icon: <WorkIcon />,
    path: '/einsatz',
    subItems: [
      { title: 'Einsatzplanung', path: '/einsatz/planung' },
      { title: 'Einsatzübersicht', path: '/einsatz/uebersicht' },
      { title: 'Einsatzhistorie', path: '/einsatz/historie' }
    ]
  },
  {
    title: 'Benutzerverwaltung',
    icon: <PersonIcon />,
    path: '/benutzerverwaltung',
    subItems: [
      { title: 'Benutzer', path: '/benutzerverwaltung/benutzer' },
      { title: 'Rollen', path: '/benutzerverwaltung/rollen' },
      { title: 'Berechtigungen', path: '/benutzerverwaltung/berechtigungen' }
    ]
  }
];

function MainLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(!isMobile);
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    if (isMobile) {
      setOpen(false);
    }
  };

  const handleSubMenuToggle = (title) => {
    setExpanded({
      ...expanded,
      [title]: !expanded[title]
    });
  };

  // Check if the current path is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Render menu items with submenus
  const renderMenuItems = () => {
    return menuItems.map((item) => {
      const isItemActive = isActive(item.path);
      const isItemExpanded = expanded[item.title] || isItemActive;

      return (
        <React.Fragment key={item.title}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                if (item.subItems.length > 0) {
                  handleSubMenuToggle(item.title);
                } else {
                  handleMenuItemClick(item.path);
                }
              }}
              sx={{
                bgcolor: isItemActive ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.08)',
                },
                paddingY: 1.2
              }}
            >
              <ListItemIcon sx={{ color: isItemActive ? theme.palette.primary.main : 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.title} 
                sx={{ 
                  '& .MuiListItemText-primary': { 
                    fontWeight: isItemActive ? 600 : 400,
                    color: isItemActive ? theme.palette.primary.main : 'inherit'
                  } 
                }} 
              />
              {item.subItems.length > 0 && (isItemExpanded ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
          </ListItem>
          
          {item.subItems.length > 0 && (
            <Collapse in={isItemExpanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subItems.map((subItem) => {
                  const isSubItemActive = location.pathname === subItem.path;
                  
                  return (
                    <ListItemButton
                      key={subItem.title}
                      onClick={() => handleMenuItemClick(subItem.path)}
                      sx={{
                        pl: 4,
                        bgcolor: isSubItemActive ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                        '&:hover': {
                          bgcolor: 'rgba(0, 0, 0, 0.08)',
                        }
                      }}
                    >
                      <ListItemText 
                        primary={subItem.title} 
                        sx={{ 
                          '& .MuiListItemText-primary': { 
                            fontSize: '0.9rem',
                            fontWeight: isSubItemActive ? 600 : 400,
                            color: isSubItemActive ? theme.palette.primary.main : 'inherit'
                          } 
                        }}
                      />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* App bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: open ? `calc(100% - ${drawerWidth}px)` : '100%' },
          ml: { sm: open ? `${drawerWidth}px` : 0 },
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          boxShadow: 1
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar drawer */}
      <Drawer
        variant={isMobile ? "temporary" : "persistent"}
        open={open}
        onClose={isMobile ? handleDrawerToggle : undefined}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Toolbar 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            px: [1],
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            minHeight: '64px !important'
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
            Admin Portal
          </Typography>
        </Toolbar>
        <Divider />
        <Box sx={{ overflow: 'auto', mt: 2 }}>
          <List component="nav" dense>
            {renderMenuItems()}
          </List>
        </Box>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: open ? `${drawerWidth}px` : 0 },
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          mt: '64px',
          height: 'calc(100vh - 64px)',
          overflow: 'auto',
          bgcolor: '#f5f5f5'
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;