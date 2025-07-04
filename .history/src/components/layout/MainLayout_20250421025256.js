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
    badge: true,
    hasSubItems: true,
    subItems: [
      {
        title: 'Patient erfassen',
        icon: <AddBoxIcon />,
        path: '/erfassung/medirig/patient-erfassen',
        color: 'medical'
      },
      {
        title: 'Vitalwerte',
        icon: <MonitorHeartIcon />,
        path: '/erfassung/medirig/vitalwerte',
        color: 'medical'
      },
      {
        title: 'Diagnose',
        icon: <MedicalInformationIcon />,
        path: '/erfassung/medirig/diagnose',
        color: 'medical'
      },
      {
        title: 'Medikation',
        icon: <MedicationIcon />,
        path: '/erfassung/medirig/medikation',
        color: 'medical'
      },
      {
        title: 'Patientenübersicht',
        icon: <PeopleAltIcon />,
        path: '/erfassung/medirig/patienten',
        color: 'medical'
      }
    ]
  },
  {
    title: 'Erfassung',
    icon: <DescriptionIcon />,
    path: '/erfassung',
    color: 'primary',
    description: 'Datenerfassung und -management',
    hasSubItems: true,
    expanded: false,
    subItems: [
      {
        title: 'Neue Erfassung',
        icon: <AddBoxIcon />,
        path: '/erfassung/neu',
        color: 'primary'
      },
      {
        title: 'Laufende Erfassungen',
        icon: <FormatListBulletedIcon />,
        path: '/erfassung/laufend',
        color: 'primary'
      },
      {
        title: 'Archiv',
        icon: <BookmarksIcon />,
        path: '/erfassung/archiv',
        color: 'primary'
      }
    ]
  },
  {
    title: 'Einsatz',
    icon: <NotificationImportantIcon />,
    path: '/einsatz',
    color: 'error',
    description: 'Einsatzplanung und -management',
    badge: true,
    hasSubItems: true,
    expanded: false,
    subItems: [
      {
        title: 'Einsätze',
        icon: <ErrorOutlineIcon />,
        path: '/einsatz/liste',
        color: 'error'
      },
      {
        title: 'Ressourcen',
        icon: <LocalHospitalIcon />,
        path: '/einsatz/ressourcen',
        color: 'error'
      },
      {
        title: 'MANV-Einsätze',
        icon: <WarningAmberIcon />,
        path: '/einsatz/manv',
        color: 'error',
        badge: true
      },
      {
        title: 'Lagekarte',
        icon: <PlaceIcon />,
        path: '/einsatz/lagekarte',
        color: 'error'
      }
    ]
  },
  {
    title: 'Auswertung',
    icon: <BarChartIcon />,
    path: '/auswertung',
    color: 'secondary',
    description: 'Berichte und Statistiken',
    hasSubItems: true,
    expanded: false,
    subItems: [
      {
        title: 'Dashboard',
        icon: <SpeedIcon />,
        path: '/auswertung/dashboard',
        color: 'secondary'
      },
      {
        title: 'Berichte',
        icon: <ArticleIcon />,
        path: '/auswertung/berichte',
        color: 'secondary'
      },
      {
        title: 'Statistiken',
        icon: <BarChartIcon />,
        path: '/auswertung/statistiken',
        color: 'secondary'
      },
      {
        title: 'Trends',
        icon: <ShowChartIcon />,
        path: '/auswertung/trends',
        color: 'secondary'
      }
    ]
  },
  {
    title: 'Benutzerverwaltung',
    icon: <PeopleIcon />,
    path: '/benutzerverwaltung',
    color: 'primary',
    description: 'Benutzer und Berechtigungen',
    hasSubItems: true,
    expanded: false,
    subItems: [
      {
        title: 'Benutzer',
        icon: <PersonIcon />,
        path: '/benutzerverwaltung/benutzer',
        color: 'primary'
      },
      {
        title: 'Gruppen',
        icon: <GroupsIcon />,
        path: '/benutzerverwaltung/gruppen',
        color: 'primary'
      },
      {
        title: 'Rollen',
        icon: <BadgeIcon />,
        path: '/benutzerverwaltung/rollen',
        color: 'primary'
      },
      {
        title: 'Zugriffsprotokolle',
        icon: <HistoryIcon />,
        path: '/benutzerverwaltung/logs',
        color: 'primary'
      }
    ]
  },
  {
    title: 'Administration',
    icon: <AdminPanelSettingsIcon />,
    path: '/administration',
    color: 'info',
    description: 'Systemadministration',
    hasSubItems: true,
    expanded: false,
    subItems: [
      {
        title: 'Systemeinstellungen',
        icon: <SettingsIcon />,
        path: '/administration/einstellungen',
        color: 'info'
      },
      {
        title: 'Berechtigungen',
        icon: <SecurityIcon />,
        path: '/administration/berechtigungen',
        color: 'info'
      },
      {
        title: 'Protokolle',
        icon: <ArticleIcon />,
        path: '/administration/protokolle',
        color: 'info'
      },
      {
        title: 'Systemdiagnose',
        icon: <SpeedIcon />,
        path: '/administration/diagnose',
        color: 'info'
      }
    ]
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
  const [menuItems, setMenuItems] = useState([
    {
      title: 'MediRIG',
      icon: <MedicalServicesIcon />,
      path: '/erfassung/medirig',
      color: 'medical',
      description: 'Medizinisches Rettungsinformationsgerät',
      badge: true,
      hasSubItems: true,
      expanded: false,
      subItems: [
        {
          title: 'Patient erfassen',
          icon: <AddBoxIcon />,
          path: '/erfassung/medirig/patient-erfassen',
          color: 'medical'
        },
        {
          title: 'Vitalwerte',
          icon: <MonitorHeartIcon />,
          path: '/erfassung/medirig/vitalwerte',
          color: 'medical'
        },
        {
          title: 'Diagnose',
          icon: <MedicalInformationIcon />,
          path: '/erfassung/medirig/diagnose',
          color: 'medical'
        },
        {
          title: 'Medikation',
          icon: <MedicationIcon />,
          path: '/erfassung/medirig/medikation',
          color: 'medical'
        },
        {
          title: 'Patientenübersicht',
          icon: <PeopleAltIcon />,
          path: '/erfassung/medirig/patienten',
          color: 'medical'
        }
      ]
    },
    {
      title: 'Erfassung',
      icon: <DescriptionIcon />,
      path: '/erfassung',
      color: 'primary',
      description: 'Datenerfassung und -management',
      hasSubItems: true,
      expanded: false,
      subItems: [
        {
          title: 'Neue Erfassung',
          icon: <AddBoxIcon />,
          path: '/erfassung/neu',
          color: 'primary'
        },
        {
          title: 'Laufende Erfassungen',
          icon: <FormatListBulletedIcon />,
          path: '/erfassung/laufend',
          color: 'primary'
        },
        {
          title: 'Archiv',
          icon: <BookmarksIcon />,
          path: '/erfassung/archiv',
          color: 'primary'
        }
      ]
    },
    {
      title: 'Einsatz',
      icon: <NotificationImportantIcon />,
      path: '/einsatz',
      color: 'error',
      description: 'Einsatzplanung und -management',
      badge: true,
      hasSubItems: true,
      expanded: false,
      subItems: [
        {
          title: 'Einsätze',
          icon: <ErrorOutlineIcon />,
          path: '/einsatz/liste',
          color: 'error'
        },
        {
          title: 'Ressourcen',
          icon: <LocalHospitalIcon />,
          path: '/einsatz/ressourcen',
          color: 'error'
        },
        {
          title: 'MANV-Einsätze',
          icon: <WarningAmberIcon />,
          path: '/einsatz/manv',
          color: 'error',
          badge: true
        },
        {
          title: 'Lagekarte',
          icon: <PlaceIcon />,
          path: '/einsatz/lagekarte',
          color: 'error'
        }
      ]
    },
    {
      title: 'Auswertung',
      icon: <BarChartIcon />,
      path: '/auswertung',
      color: 'secondary',
      description: 'Berichte und Statistiken',
      hasSubItems: true,
      expanded: false,
      subItems: [
        {
          title: 'Dashboard',
          icon: <SpeedIcon />,
          path: '/auswertung/dashboard',
          color: 'secondary'
        },
        {
          title: 'Berichte',
          icon: <ArticleIcon />,
          path: '/auswertung/berichte',
          color: 'secondary'
        },
        {
          title: 'Statistiken',
          icon: <BarChartIcon />,
          path: '/auswertung/statistiken',
          color: 'secondary'
        },
        {
          title: 'Trends',
          icon: <ShowChartIcon />,
          path: '/auswertung/trends',
          color: 'secondary'
        }
      ]
    },
    {
      title: 'Benutzerverwaltung',
      icon: <PeopleIcon />,
      path: '/benutzerverwaltung',
      color: 'primary',
      description: 'Benutzer und Berechtigungen',
      hasSubItems: true,
      expanded: false,
      subItems: [
        {
          title: 'Benutzer',
          icon: <PersonIcon />,
          path: '/benutzerverwaltung/benutzer',
          color: 'primary'
        },
        {
          title: 'Gruppen',
          icon: <GroupsIcon />,
          path: '/benutzerverwaltung/gruppen',
          color: 'primary'
        },
        {
          title: 'Rollen',
          icon: <BadgeIcon />,
          path: '/benutzerverwaltung/rollen',
          color: 'primary'
        },
        {
          title: 'Zugriffsprotokolle',
          icon: <HistoryIcon />,
          path: '/benutzerverwaltung/logs',
          color: 'primary'
        }
      ]
    },
    {
      title: 'Administration',
      icon: <AdminPanelSettingsIcon />,
      path: '/administration',
      color: 'info',
      description: 'Systemadministration',
      hasSubItems: true,
      expanded: false,
      subItems: [
        {
          title: 'Systemeinstellungen',
          icon: <SettingsIcon />,
          path: '/administration/einstellungen',
          color: 'info'
        },
        {
          title: 'Berechtigungen',
          icon: <SecurityIcon />,
          path: '/administration/berechtigungen',
          color: 'info'
        },
        {
          title: 'Protokolle',
          icon: <ArticleIcon />,
          path: '/administration/protokolle',
          color: 'info'
        },
        {
          title: 'Systemdiagnose',
          icon: <SpeedIcon />,
          path: '/administration/diagnose',
          color: 'info'
        }
      ]
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
  ]);

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
        const newPosition = 100 - (progress * 0.02 * tickerSpeed % 200);
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
      
      {/* Search Box */}
      <Box sx={{ p: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Suchen..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small">
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Box>
      
      {/* Main Menu */}
      <List sx={{ flexGrow: 1, py: 0 }}>
        {menuItems.map((item) => (
          <React.Fragment key={item.title}>
            <ListItem disablePadding>
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
                  
                  // Toggle submenu for items with subItems
                  if (item.hasSubItems) {
                    setMenuItems(prev => prev.map(menuItem => 
                      menuItem.title === item.title 
                        ? { ...menuItem, expanded: !menuItem.expanded } 
                        : menuItem
                    ));
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
                {item.hasSubItems && (
                  <IconButton size="small" onClick={(e) => {
                    e.stopPropagation();
                    setMenuItems(prev => prev.map(menuItem => 
                      menuItem.title === item.title 
                        ? { ...menuItem, expanded: !menuItem.expanded } 
                        : menuItem
                    ));
                  }}>
                    {item.expanded ? (
                      <KeyboardArrowUpIcon fontSize="small" />
                    ) : (
                      <KeyboardArrowDownIcon fontSize="small" />
                    )}
                  </IconButton>
                )}
                <IconButton size="small" onClick={(e) => {
                  e.stopPropagation();
                  handleFavoriteToggle(item);
                }}>
                  {favorites.includes(item) ? (
                    <StarIcon fontSize="small" color="primary" />
                  ) : (
                    <StarOutlineIcon fontSize="small" />
                  )}
                </IconButton>
              </ListItemButton>
            </ListItem>
            
            {/* Sub menu items */}
            {item.hasSubItems && (
              <Collapse in={item.expanded} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem key={subItem.title} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          navigate(subItem.path);
                          if (window.innerWidth < 900) {
                            setDrawerOpen(false);
                          }
                        }}
                        selected={location.pathname === subItem.path}
                        sx={{ 
                          pl: 7,
                          py: 1,
                          borderLeft: location.pathname === subItem.path 
                            ? `4px solid ${theme.palette[subItem.color || item.color].main}` 
                            : '4px solid transparent',
                          '&.Mui-selected': {
                            backgroundColor: `rgba(${
                              subItem.color === 'medical' 
                                ? '159, 0, 134'
                                : '0, 90, 158'
                            }, 0.08)`
                          }
                        }}
                      >
                        <ListItemIcon sx={{ 
                          color: location.pathname === subItem.path 
                            ? theme.palette[subItem.color || item.color].main 
                            : 'text.secondary',
                          minWidth: 24,
                          mr: 1
                        }}>
                          {subItem.icon}
                        </ListItemIcon>
                        <ListItemText 
                          primary={
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                fontWeight: location.pathname === subItem.path ? 'medium' : 'regular',
                                color: location.pathname === subItem.path ? 'text.primary' : 'text.secondary'
                              }}
                            >
                              {subItem.title}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
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
            sx={{ borderRadius: 1 }}
          />
          <Chip
            icon={<ErrorOutlineIcon />}
            label="MANV"
            onClick={() => navigate('/einsatz/manv')}
            size="small"
            color="error"
            sx={{ borderRadius: 1 }}
          />
          <Chip
            icon={<SpeedIcon />}
            label="Dashboard"
            onClick={() => navigate('/auswertung/dashboard')}
            size="small"
            color="secondary"
            sx={{ borderRadius: 1 }}
          />
          <Chip
            icon={<PersonIcon />}
            label="Benutzer"
            onClick={() => navigate('/benutzerverwaltung/benutzer')}
            size="small"
            color="info"
            sx={{ borderRadius: 1 }}
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
              backgroundColor: theme.palette.grey[900],
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              height: '48px',
              borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {/* Ticker Steuerelemente */}
            <Box sx={{ 
              position: 'absolute', 
              right: 16, 
              top: 0, 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              zIndex: 10,
              backgroundColor: theme.palette.grey[900],
              paddingLeft: 2,
              boxShadow: '-10px 0 15px rgba(33, 33, 33, 0.9)'
            }}>
              <Tooltip title={tickerPaused ? "Fortsetzen" : "Pausieren"}>
                <IconButton 
                  size="small" 
                  onClick={() => setTickerPaused(!tickerPaused)}
                  sx={{ color: 'white', mx: 0.5 }}
                >
                  {tickerPaused ? 
                    <PlayArrowIcon fontSize="small" /> : 
                    <PauseIcon fontSize="small" />
                  }
                </IconButton>
              </Tooltip>
              <Tooltip title="Langsamer">
                <IconButton 
                  size="small" 
                  onClick={() => setTickerSpeed(0.5)}
                  sx={{ 
                    color: 'white', 
                    mx: 0.5,
                    backgroundColor: tickerSpeed === 0.5 ? 'rgba(255,255,255,0.2)' : 'transparent'
                  }}
                >
                  <SpeedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Normal">
                <IconButton 
                  size="small" 
                  onClick={() => setTickerSpeed(1)}
                  sx={{ 
                    color: 'white', 
                    mx: 0.5,
                    backgroundColor: tickerSpeed === 1 ? 'rgba(255,255,255,0.2)' : 'transparent'
                  }}
                >
                  <FormatListBulletedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Schneller">
                <IconButton 
                  size="small" 
                  onClick={() => setTickerSpeed(2)}
                  sx={{ 
                    color: 'white', 
                    mx: 0.5,
                    backgroundColor: tickerSpeed === 2 ? 'rgba(255,255,255,0.2)' : 'transparent'
                  }}
                >
                  <DoubleArrowIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            
            {/* Titel des Tickers */}
            <Box sx={{ 
              position: 'absolute', 
              left: 0, 
              top: 0, 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              zIndex: 10,
              backgroundColor: theme.palette.grey[900],
              paddingRight: 2,
              boxShadow: '10px 0 15px rgba(33, 33, 33, 0.9)'
            }}>
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  fontWeight: 'bold', 
                  px: 2,
                  borderRight: `1px solid rgba(255,255,255,0.3)`,
                  height: '70%',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <NotificationImportantIcon sx={{ mr: 1, color: theme.palette.error.main }} /> MANV-LIVE
              </Typography>
            </Box>
            
            {/* Laufband Inhalt */}
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                position: 'absolute',
                whiteSpace: 'nowrap',
                left: `${tickerPosition}%`,
                transform: 'translateX(-50%)',
                pl: 16 // Platz für den Titel
              }}
            >
              {manvFaelle.map((fall, index) => (
                <Box 
                  key={fall.id}
                  onClick={() => handleManvClick(fall.id)}
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mx: 3,
                    px: 2,
                    py: 0.5,
                    opacity: index === currentManvIndex ? 1 : 0.8,
                    backgroundColor: theme.palette[fall.farbe.split('.')[0]].main,
                    borderRadius: '24px',
                    boxShadow: index === currentManvIndex ? '0 0 15px rgba(255,255,255,0.3)' : 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      opacity: 1,
                      transform: 'scale(1.05)',
                      boxShadow: '0 0 15px rgba(255,255,255,0.3)'
                    }
                  }}
                >
                  <Avatar 
                    sx={{ 
                      width: 24, 
                      height: 24, 
                      bgcolor: 'rgba(255,255,255,0.2)',
                      mr: 1
                    }}
                  >
                    {fall.icon}
                  </Avatar>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mr: 1.5 }}>
                    {fall.titel}
                  </Typography>
                  <Chip 
                    label={`${fall.patienten} Patienten`} 
                    size="small" 
                    sx={{ 
                      backgroundColor: 'rgba(0,0,0,0.3)', 
                      color: 'white',
                      fontWeight: 'bold',
                      mr: 0.75,
                      height: 22
                    }}
                  />
                  <Chip 
                    label={fall.kategorie} 
                    size="small" 
                    sx={{ 
                      backgroundColor: 'rgba(0,0,0,0.3)', 
                      color: 'white',
                      fontWeight: 'bold',
                      mr: 0.75,
                      height: 22
                    }}
                  />
                  <Chip 
                    label={fall.status} 
                    size="small" 
                    variant={fall.status === "Aktiv" ? "filled" : "outlined"}
                    sx={{ 
                      backgroundColor: fall.status === "Aktiv" ? 'rgba(255,255,255,0.2)' : 'transparent',
                      borderColor: 'rgba(255,255,255,0.5)',
                      color: 'white',
                      fontWeight: 'bold',
                      mr: 0.75,
                      height: 22
                    }}
                  />
                  <Typography variant="caption" sx={{ 
                    color: 'rgba(255,255,255,0.7)',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <PlaceIcon sx={{ fontSize: 12, mr: 0.5 }} /> 
                    {fall.ort}
                  </Typography>
                  <Typography variant="caption" sx={{ 
                    color: 'rgba(255,255,255,0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    ml: 1
                  }}>
                    <AccessTimeIcon sx={{ fontSize: 12, mr: 0.5 }} /> 
                    {fall.zeit}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          
          <Box sx={{ 
            height: 4, 
            background: `linear-gradient(90deg, 
              ${theme.palette.error.main} 0%, 
              ${theme.palette.error.main} 25%, 
              ${theme.palette.warning.main} 25%, 
              ${theme.palette.warning.main} 50%, 
              ${theme.palette.info.main} 50%, 
              ${theme.palette.info.main} 75%, 
              ${theme.palette.medical.main} 75%, 
              ${theme.palette.medical.main} 100%)`,
            opacity: tickerPaused ? 0.5 : 1
          }} />
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