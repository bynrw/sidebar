import React, { useState, useEffect, useContext } from 'react';
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
  LinearProgress,
  TextField,
  InputAdornment
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
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SpeedIcon from '@mui/icons-material/Speed';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MedicationIcon from '@mui/icons-material/Medication';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import BadgeIcon from '@mui/icons-material/Badge';
import HistoryIcon from '@mui/icons-material/History';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BusinessIcon from '@mui/icons-material/Business';

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
    path: '/medirig',
    color: 'medical',
    description: 'Medizinisches Rettungsinformationsgerät',
    badge: true,
    subMenu: [
      {
        title: 'Teilnehmer-Bestnachweis',
        path: '/medirig/teilnehmer-bestnachweis'
      }
    ]
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
    title: 'Jahresstatistik',
    icon: <BarChartIcon />,
    path: '/jahresstatistik',
    color: 'secondary',
    description: 'Jahresstatistiken und Berichte',
    subMenu: [
      {
        title: 'Info',
        path: '/jahresstatistik/info'
      },
      {
        title: 'Deckblatt',
        path: '/jahresstatistik/deckblatt'
      },
      {
        title: 'Erfassung',
        path: '/jahresstatistik/erfassung'
      },
      {
        title: 'Anzeigen',
        path: '/jahresstatistik/anzeigen'
      }
    ]
  },
  {
    title: 'Auswertung',
    icon: <ShowChartIcon />,
    path: '/auswertung',
    color: 'info',
    description: 'Berichte und Statistiken'
  },
  {
    title: 'Benutzerverwaltung',
    icon: <PeopleIcon />,
    path: '/benutzerverwaltung',
    color: 'primary',
    description: 'Benutzer und Berechtigungen',
    subMenu: [
      {
        title: 'Info',
        path: '/benutzerverwaltung/info'
      },
      {
        title: 'Persönliche-Angaben',
        path: '/benutzerverwaltung/persoenliche-angaben',
        subMenu: [
          {
            title: 'Daten bearbeiten',
            path: '/benutzerverwaltung/persoenliche-angaben/daten-bearbeiten'
          },
          {
            title: 'Passwort ändern',
            path: '/benutzerverwaltung/persoenliche-angaben/passwort-aendern'
          }
        ]
      },
      {
        title: 'Benutzerbestand',
        path: '/benutzerverwaltung/benutzerbestand',
        subMenu: [
          {
            title: 'Liste',
            path: '/benutzerverwaltung/benutzerbestand/liste'
          },
          {
            title: 'Neuer Benutzer',
            path: '/benutzerverwaltung/benutzerbestand/neuer-benutzer'
          }
        ]
      },
      {
        title: 'Organisationsdaten',
        path: '/benutzerverwaltung/organisationsdaten',
        subMenu: [
          {
            title: 'Datenbearbeiten',
            path: '/benutzerverwaltung/organisationsdaten/datenbearbeiten'
          }
        ]
      }
    ]
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
    status: "Aktiv",
    icon: <ErrorOutlineIcon />,
    ort: "Düsseldorf-Eller",
    zeit: "10:15"
  },
  {
    id: 2,
    titel: "MANV Köln - Massenkarambolage A3",
    patienten: 15,
    kategorie: "MANV 15+",
    farbe: "warning.main",
    status: "Aktiv",
    icon: <WarningAmberIcon />,
    ort: "Köln-Porz",
    zeit: "09:32"
  },
  {
    id: 3,
    titel: "MANV Bonn - Chemieunfall in Fabrik",
    patienten: 8,
    kategorie: "MANV 5+", 
    farbe: "info.main",
    status: "Bearbeitung",
    icon: <LocalHospitalIcon />,
    ort: "Bonn-Nord",
    zeit: "08:45"
  },
  {
    id: 4,
    titel: "MANV Aachen - Brand im Krankenhaus",
    patienten: 12,
    kategorie: "MANV 10+",
    farbe: "medical.main",
    status: "Bearbeitung",
    icon: <LocalHospitalIcon />,
    ort: "Universitätsklinikum",
    zeit: "07:23"
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
  const [tickerPosition, setTickerPosition] = useState(100);
  const [tickerPaused, setTickerPaused] = useState(false);
  const [tickerSpeed, setTickerSpeed] = useState(1); // 1 = normal, 0.5 = langsam, 2 = schnell
  // State to track which menus are expanded
  const [expandedMenus, setExpandedMenus] = useState({});
  
  // Benutzerinformationen als State
  const [currentUser, setCurrentUser] = useState({
    name: "Administrator",
    role: "Administrator",
    location: "Leitstelle Düsseldorf"
  });
  
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  // Automatische Rotation für den Liveticker
  // useEffect(() => {
  //   let interval;
  //   if (showLiveticker) {
  //     interval = setInterval(() => {
  //       setCurrentManvIndex((prevIndex) => (prevIndex + 1) % manvFaelle.length);
  //     }, 5000);
  //   }
  //   return () => clearInterval(interval);
  // }, [showLiveticker]);

  // Animation für das Laufband mit variabler Geschwindigkeit
  useEffect(() => {
    let animationFrame;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Geschwindigkeit der Animation anpassen basierend auf tickerSpeed
      // Pausieren, wenn tickerPaused true ist
      if (!tickerPaused) {
        // Änderung: Geschwindigkeit anpassen und Bereich reduzieren für gleichmäßige Bewegung
        const newPosition = 100 - (progress * 0.015 * tickerSpeed % 160);
        setTickerPosition(newPosition);
      }
      
      animationFrame = requestAnimationFrame(animate);
    };

    if (showLiveticker) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [showLiveticker, tickerPaused, tickerSpeed]);

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

  // Funktion zum Klicken auf einen MANV-Fall
  const handleManvClick = (id) => {
    // MANV-Fall fokussieren und zur entsprechenden Ansicht navigieren
    setCurrentManvIndex(manvFaelle.findIndex(fall => fall.id === id));
    navigate(`/erfassung/medirig/manv/${id}`);
  };

  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = (item) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(item)) {
        return prevFavorites.filter((fav) => fav !== item);
      } else {
        return [...prevFavorites, item];
      }
    });
  };

  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Here you would actually toggle the theme in a real application
    // For example, using a theme context provider
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
        backgroundColor: 'rgba(0, 90, 158, 0.04)',
        paddingTop:'45px',
      }}>
        <Avatar 
          sx={{ 
            bgcolor: theme.palette.primary.main, 
            width: 40, 
            height: 40,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            
        }}>
          <AdminPanelSettingsIcon />
        </Avatar>
        <Box sx={{ ml: 2 }}>
          <Typography variant="subtitle2">{currentUser.name}</Typography>
          <Typography variant="caption" color="text.secondary">{currentUser.location}</Typography>
        </Box>
      </Box>
      
      <Divider />
      
      {/* Search Box */}

      
      {/* Main Menu */}
      <List sx={{ flexGrow: 1, py: 0 }}>
        {menuItems.map((item) => (
          <React.Fragment key={item.title}>
            <MenuItem
              item={item}
              isSelected={isActive(item.path)}
              onMenuItemClick={(item) => {
                navigate(item.path);
                if (window.innerWidth < 900) {
                  setDrawerOpen(false);
                }
              }}
              isFavorite={favorites.includes(item)}
              onToggleFavorite={handleFavoriteToggle}
            />
          </React.Fragment>
        ))}
      </List>
      
      <Divider />
      
      {/* Quick Access Panel */}
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Schnellzugriff
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Chip
            icon={<AddBoxIcon />}
            label="Neuer Patient"
            onClick={() => navigate('/erfassung/medirig/patient-erfassen')}
            size="small"
            color="primary"
            sx={{ 
              borderRadius: 1,
              border: `1px solid ${theme.palette.primary.main}`,
              '&:hover': {
                boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
                backgroundColor: `${theme.palette.primary.light}30`
              }
            }}
          />
          <Chip
            icon={<ErrorOutlineIcon />}
            label="MANV"
            onClick={() => navigate('/einsatz/manv')}
            size="small"
            color="error"
            sx={{ 
              borderRadius: 1,
              border: `1px solid ${theme.palette.error.main}`,
              '&:hover': {
                boxShadow: `0 0 0 1px ${theme.palette.error.main}`,
                backgroundColor: `${theme.palette.error.light}30`
              }
            }}
          />
          <Chip
            icon={<SpeedIcon />}
            label="Dashboard"
            onClick={() => navigate('/auswertung/dashboard')}
            size="small"
            color="secondary"
            sx={{ 
              borderRadius: 1,
              border: `1px solid ${theme.palette.secondary.main}`,
              '&:hover': {
                boxShadow: `0 0 0 1px ${theme.palette.secondary.main}`,
                backgroundColor: `${theme.palette.secondary.light}30`
              }
            }}
          />
          <Chip
            icon={<PersonIcon />}
            label="Benutzer"
            onClick={() => navigate('/benutzerverwaltung/benutzer')}
            size="small"
            color="info"
            sx={{ 
              borderRadius: 1,
              border: `1px solid ${theme.palette.info.main}`,
              '&:hover': {
                boxShadow: `0 0 0 1px ${theme.palette.info.main}`,
                backgroundColor: `${theme.palette.info.light}30`
              }
            }}
          />
        </Box>
      </Box>
      
      <Box sx={{ 
        p: 2, 
        mt: 'auto', 
        backgroundColor: 'rgba(0, 90, 158, 0.04)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Typography variant="caption" color="text.secondary">
          IG NRW Gefahrenabwehr v1.2.4
        </Typography>
        <Box>
          <Tooltip title={darkMode ? "Light Mode" : "Dark Mode"}>
            <IconButton size="small" color="primary" onClick={toggleDarkMode} sx={{ mr: 1 }}>
              {darkMode ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Abmelden">
            <IconButton size="small" color="primary" onClick={() => console.log('Logout')}>
              <LogoutIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
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
        
        {/* MANV Liveticker als Laufband */}
        <Collapse in={showLiveticker}>
          <Box 
            sx={{ 
              backgroundColor: 'rgba(25, 25, 25, 0.95)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              height: '60px', // Erhöhte Höhe für bessere Sichtbarkeit
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          >
            {/* Ticker Steuerelemente - komplett neu gestaltet */}
            <Box sx={{ 
              position: 'absolute', 
              right: 16, 
              top: '50%', 
              transform: 'translateY(-50%)',
              height: '36px', 
              display: 'flex', 
              alignItems: 'center', 
              zIndex: 10,
              backgroundColor: 'rgba(40, 40, 40, 0.85)',
              padding: '0 8px',
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
              borderRadius: '18px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <Tooltip title={tickerPaused ? "Fortsetzen" : "Pausieren"}>
                <IconButton 
                  size="small" 
                  onClick={() => setTickerPaused(!tickerPaused)}
                  sx={{ 
                    color: 'white', 
                    mx: 0.5,
                    backgroundColor: tickerPaused ? 'rgba(255,70,70,0.7)' : 'rgba(70,255,70,0.3)',
                    width: 28,
                    height: 28,
                    '&:hover': {
                      backgroundColor: tickerPaused ? 'rgba(255,70,70,0.9)' : 'rgba(70,255,70,0.5)',
                      transform: 'scale(1.1)'
                    },
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  {tickerPaused ? 
                    <PlayArrowIcon fontSize="small" /> : 
                    <PauseIcon fontSize="small" />
                  }
                </IconButton>
              </Tooltip>
              
              <Divider orientation="vertical" flexItem sx={{ mx: 1, backgroundColor: 'rgba(255,255,255,0.2)', height: '60%' }} />
              
              <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(30,30,30,0.6)', borderRadius: '14px', padding: '2px' }}>
                <Tooltip title="Langsam">
                  <IconButton 
                    size="small" 
                    onClick={() => setTickerSpeed(0.5)}
                    sx={{ 
                      color: 'white', 
                      mx: 0.25,
                      backgroundColor: tickerSpeed === 0.5 ? theme.palette.primary.main : 'transparent',
                      width: 24,
                      height: 24,
                      '&:hover': {
                        backgroundColor: tickerSpeed === 0.5 ? theme.palette.primary.dark : 'rgba(255,255,255,0.2)',
                      },
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 16, height: 16 }}>
                      <SpeedIcon sx={{ fontSize: 14 }} />
                    </Box>
                  </IconButton>
                </Tooltip>
                
                <Tooltip title="Normal">
                  <IconButton 
                    size="small" 
                    onClick={() => setTickerSpeed(1)}
                    sx={{ 
                      color: 'white', 
                      mx: 0.25,
                      backgroundColor: tickerSpeed === 1 ? theme.palette.primary.main : 'transparent',
                      width: 24,
                      height: 24,
                      '&:hover': {
                        backgroundColor: tickerSpeed === 1 ? theme.palette.primary.dark : 'rgba(255,255,255,0.2)',
                      },
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 16, height: 16 }}>
                      <FormatListBulletedIcon sx={{ fontSize: 14 }} />
                    </Box>
                  </IconButton>
                </Tooltip>
                
                <Tooltip title="Schnell">
                  <IconButton 
                    size="small" 
                    onClick={() => setTickerSpeed(2)}
                    sx={{ 
                      color: 'white', 
                      mx: 0.25,
                      backgroundColor: tickerSpeed === 2 ? theme.palette.primary.main : 'transparent',
                      width: 24,
                      height: 24,
                      '&:hover': {
                        backgroundColor: tickerSpeed === 2 ? theme.palette.primary.dark : 'rgba(255,255,255,0.2)',
                      },
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 16, height: 16 }}>
                      <DoubleArrowIcon sx={{ fontSize: 14 }} />
                    </Box>
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
            
            {/* Titel des Tickers - komplett neu */}
            <Box sx={{ 
              position: 'absolute', 
              left: 0, 
              top: 0, 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              zIndex: 10,
              background: `linear-gradient(90deg, ${theme.palette.error.dark} 0%, rgba(25,25,25,0.95) 100%)`,
              paddingRight: 4,
              clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)',
              minWidth: 170
            }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 2,
                pr: 3
              }}>
                <Badge
                  badgeContent={manvFaelle.length}
                  color="error"
                  sx={{
                    '& .MuiBadge-badge': {
                      animation: tickerPaused ? 'none' : 'pulse 1.5s infinite',
                      '@keyframes pulse': {
                        '0%': { opacity: 1, transform: 'scale(1)' },
                        '50%': { opacity: 0.7, transform: 'scale(1.1)' },
                        '100%': { opacity: 1, transform: 'scale(1)' }
                      }
                    }
                  }}
                >
                  <NotificationImportantIcon sx={{ 
                    mr: 1.5, 
                    fontSize: 24,
                    animation: tickerPaused ? 'none' : 'glowAlert 2s infinite',
                    '@keyframes glowAlert': {
                      '0%': { filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.7))' },
                      '50%': { filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.9))' },
                      '100%': { filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.7))' }
                    }
                  }} />
                </Badge>
                <Box>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: 'bold',
                      letterSpacing: '0.5px',
                      lineHeight: 1,
                      textShadow: '0 0 8px rgba(0,0,0,0.7)'
                    }}
                  >
                    MANV-LIVE
                  </Typography>
                  <Typography 
                    variant="caption"
                    sx={{
                      opacity: 0.8,
                      display: 'block',
                      mt: 0.3
                    }}
                  >
                    Echtzeitinformationen
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            {/* Laufband-Hintergrund mit dynamischen Effekten */}
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at center, rgba(60,60,60,0.2) 0%, rgba(30,30,30,0) 70%)',
              zIndex: 1,
              opacity: tickerPaused ? 0.3 : 0.7,
              transition: 'opacity 0.5s ease'
            }}/>
            
            {/* Laufband Inhalt - komplett überarbeitet */}
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                position: 'absolute',
                whiteSpace: 'nowrap',
                left: `${tickerPosition}%`,
                top: '50%',
                transform: 'translate(-50%, -50%)',
                pl: 20, // Platz für den Titel
                zIndex: 5,
                height: '100%'
              }}
            >
              {manvFaelle.map((fall, index) => (
                <Box 
                  key={fall.id}
                  onClick={() => handleManvClick(fall.id)}
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mx: 4,
                    my: 2,
                    px: 2,
                    py: 0.75,
                    opacity: tickerPaused ? 0.7 : 1,
                    background: `linear-gradient(135deg, ${theme.palette[fall.farbe.split('.')[0]].dark} 0%, ${theme.palette[fall.farbe.split('.')[0]].main} 100%)`,
                    borderRadius: '8px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    transform: `scale(${index === currentManvIndex ? 1.05 : 0.95})`,
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    cursor: 'pointer',
                    border: '1px solid rgba(255,255,255,0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      opacity: 1,
                      transform: 'scale(1.08)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                      zIndex: 15
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
                      zIndex: -1
                    }
                  }}
                >
                  <Avatar 
                    sx={{ 
                      width: 32, 
                      height: 32, 
                      bgcolor: 'rgba(255,255,255,0.2)',
                      mr: 1.5,
                      border: '2px solid rgba(255,255,255,0.3)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                    }}
                  >
                    {fall.icon}
                  </Avatar>
                  <Box mr={2}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        fontWeight: 'bold', 
                        lineHeight: 1.1,
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}
                    >
                      {fall.titel}
                    </Typography>
                    <Box sx={{ display: 'flex', mt: 0.5, alignItems: 'center' }}>
                      <Typography variant="caption" sx={{ 
                        color: 'rgba(255,255,255,0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        mr: 1
                      }}>
                        <PlaceIcon sx={{ fontSize: 12, mr: 0.5 }} /> 
                        {fall.ort}
                      </Typography>
                      <Typography variant="caption" sx={{ 
                        color: 'rgba(255,255,255,0.9)',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <AccessTimeIcon sx={{ fontSize: 12, mr: 0.5 }} /> 
                        {fall.zeit}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box>
                    <Box sx={{ display: 'flex', gap: 0.75, mb: 0.5 }}>
                      <Chip 
                        label={`${fall.patienten} Patienten`} 
                        size="small" 
                        sx={{ 
                          backgroundColor: 'rgba(0,0,0,0.25)', 
                          color: 'white',
                          fontWeight: 'bold',
                          height: 22,
                          border: '1px solid rgba(255,255,255,0.15)',
                          '& .MuiChip-label': {
                            px: 1
                          }
                        }}
                      />
                      <Chip 
                        label={fall.kategorie} 
                        size="small" 
                        sx={{ 
                          backgroundColor: 'rgba(0,0,0,0.25)', 
                          color: 'white',
                          fontWeight: 'bold',
                          height: 22,
                          border: '1px solid rgba(255,255,255,0.15)',
                          '& .MuiChip-label': {
                            px: 1
                          }
                        }}
                      />
                    </Box>
                    
                    <Chip 
                      label={fall.status} 
                      size="small" 
                      variant={fall.status === "Aktiv" ? "filled" : "outlined"}
                      sx={{ 
                        backgroundColor: fall.status === "Aktiv" 
                          ? 'rgba(255,255,255,0.2)' 
                          : 'transparent',
                        borderColor: 'rgba(255,255,255,0.5)',
                        color: 'white',
                        fontWeight: 'bold',
                        height: 22,
                        animation: fall.status === "Aktiv" && !tickerPaused 
                          ? 'pulseChip 2s infinite' 
                          : 'none',
                        '@keyframes pulseChip': {
                          '0%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.4)' },
                          '70%': { boxShadow: '0 0 0 5px rgba(255, 255, 255, 0)' },
                          '100%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)' }
                        }
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          
          {/* Fortschrittsanzeige - komplett neu */}
          <Box sx={{ 
            position: 'relative',
            height: 4,
            backgroundColor: 'rgba(0,0,0,0.2)',
            overflow: 'hidden'
          }}>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                background: `linear-gradient(90deg, 
                  ${theme.palette.error.main} 0%, 
                  ${theme.palette.warning.main} 33%, 
                  ${theme.palette.info.main} 66%, 
                  ${theme.palette.success.main} 100%)`,
                opacity: tickerPaused ? 0.3 : 0.8,
                transform: tickerPaused ? 'translateX(0)' : 'translateX(-50%)',
                animation: tickerPaused 
                  ? 'none' 
                  : 'progressSlide 15s linear infinite',
                '@keyframes progressSlide': {
                  '0%': { transform: 'translateX(-100%)' },
                  '100%': { transform: 'translateX(100%)' }
                }
              }}
            />
          </Box>
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
          // Fixed padding-top value of 35px
          pt: '35px',
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

const MenuItem = ({ item, isSelected, onMenuItemClick, isFavorite, onToggleFavorite }) => {
  const location = useLocation();
  const theme = useTheme();
  const hasSubMenu = item.subMenu && item.subMenu.length > 0;
  
  // Access expandedMenus state from parent component
  const { expandedMenus, setExpandedMenus } = useContext(ExpandedMenuContext);
  const isExpanded = expandedMenus[item.title] || false;

  const handleItemClick = () => {
    if (hasSubMenu) {
      setExpandedMenus(prev => ({
        ...prev,
        [item.title]: !prev[item.title]
      }));
    } else {
      onMenuItemClick(item);
    }
  };

  return (
    <>
      <ListItemButton
        onClick={handleItemClick}
        selected={isSelected}
        sx={{
          mb: 1,
          py: 1,
          borderRadius: 2,
          backgroundColor: isSelected ? `${item.color}.lighter` : 'transparent',
          color: isSelected ? `${item.color}.dark` : 'inherit',
          '&:hover': {
            backgroundColor: isSelected ? `${item.color}.lighter` : 'grey.100'
          }
        }}
      >
        <ListItemIcon sx={{ color: isSelected ? `${item.color}.dark` : item.color }}>
          {item.icon}
        </ListItemIcon>
        <ListItemText 
          primary={item.title} 
          secondary={item.description && item.description}
          primaryTypographyProps={{ variant: 'body1', fontWeight: isSelected ? 'bold' : 'normal' }}
          secondaryTypographyProps={{ variant: 'caption' }}
        />
        {hasSubMenu && (
          isExpanded ? 
            <KeyboardArrowUpIcon fontSize="small" /> : 
            <KeyboardArrowDownIcon fontSize="small" />
        )}
      </ListItemButton>
      
      {hasSubMenu && (
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.subMenu.map((subItem) => (
              <ListItemButton
                key={subItem.title}
                onClick={() => onMenuItemClick(subItem)}
                selected={location.pathname === subItem.path}
                sx={{
                  pl: 4,
                  py: 0.75,
                  borderRadius: 1,
                  ml: 2,
                  mb: 0.5,
                  backgroundColor: location.pathname === subItem.path ? 
                    `${theme.palette[item.color || 'primary'].light}30` : 
                    'transparent',
                  '&:hover': {
                    backgroundColor: location.pathname === subItem.path ? 
                      `${theme.palette[item.color || 'primary'].light}50` : 
                      'rgba(0,0,0,0.04)'
                  }
                }}
              >
                <ListItemText 
                  primary={subItem.title} 
                  primaryTypographyProps={{ 
                    variant: 'body2', 
                    fontWeight: location.pathname === subItem.path ? 'medium' : 'normal',
                    fontSize: '0.875rem'
                  }} 
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default MainLayout;