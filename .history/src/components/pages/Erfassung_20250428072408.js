import React, { useContext } from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid, Card, CardContent, CardActions, Button, IconButton } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HistoryIcon from '@mui/icons-material/History';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MedicationIcon from '@mui/icons-material/Medication';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FavoritesContext } from '../../context/FavoritesContext';

// Erweiterte Untermenü-Struktur mit zusätzlichen Ebenen
const subMenuItems = [
  {
    title: 'Sirene',
    description: 'Verwaltung von Sirenen und Alarmeinrichtungen',
    icon: <NotificationsActiveIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/sirene',
    hasSubItems: true,
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Schadenslage',
    description: 'Verwaltung von Schadenslagen',
    icon: <HistoryIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/schadenslage',
    hasSubItems: true,
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Opta',
    description: 'Opta-Verwaltung',
    icon: <ListAltIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/opta',
    hasSubItems: true,
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Krisenstab',
    description: 'Krisenstab-Verwaltung',
    icon: <PeopleAltIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/krisenstab',
    hasSubItems: true,
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Standorte',
    description: 'Verwaltung von Einsatzstandorten',
    icon: <LocationOnIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/standorte',
    hasSubItems: true,
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  }
];

// Untermenüs für Sirene
const sireneSubMenuItems = [
  {
    title: 'Neue Sirene',
    description: 'Erfassung einer neuen Sirenenanlage',
    icon: <AddBoxIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/sirene/neu',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Sirene bearbeiten',
    description: 'Bestehende Sirenenanlagen bearbeiten',
    icon: <EditIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/sirene/bearbeiten',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Sirenenübersicht',
    description: 'Liste aller Sirenenanlagen',
    icon: <FormatListBulletedIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/sirene/uebersicht',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  }
];

// Untermenüs für Schadenslage
const schadensLageSubMenuItems = [
  {
    title: 'Info',
    description: 'Informationen zu aktuellen Schadenslagen',
    icon: <InfoIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/schadenslage/info',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Landeslagen',
    description: 'Übersicht der Landeslagen',
    icon: <LocationOnIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/schadenslage/landeslagen',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  }
];

// Untermenüs für Opta
const optaSubMenuItems = [
  {
    title: 'Info',
    description: 'Informationen zur Opta-Verwaltung',
    icon: <InfoIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/opta/info',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Neu',
    description: 'Neue Opta-Einträge erstellen',
    icon: <AddBoxIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/opta/neu',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Liste',
    description: 'Liste aller Opta-Einträge',
    icon: <FormatListBulletedIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/opta/liste',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Warenkorb',
    description: 'Opta-Warenkorb verwalten',
    icon: <ListAltIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/opta/warenkorb',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  }
];

// Untermenüs für Krisenstab
const krisenstabSubMenuItems = [
  {
    title: 'Übersicht',
    description: 'Übersicht des Krisenstabs',
    icon: <PeopleAltIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/krisenstab/uebersicht',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Mitglieder',
    description: 'Verwaltung der Krisenstab-Mitglieder',
    icon: <PeopleAltIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/krisenstab/mitglieder',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  }
];

// Untermenüs für Standorte
const standorteSubMenuItems = [
  {
    title: 'Info',
    description: 'Informationen zu Einsatzstandorten',
    icon: <InfoIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/standorte/info',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Liste',
    description: 'Übersicht aller Standorte',
    icon: <FormatListBulletedIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/standorte/liste',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  },
  {
    title: 'Neu',
    description: 'Neuen Standort erfassen',
    icon: <AddBoxIcon fontSize="large" sx={{ color: 'primary.main' }} />,
    path: '/erfassung/standorte/neu',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'primary.main'
    }
  }
];

// MediRIG Komponente mit Untermenüs
const mediRIGSubMenuItems = [
  {
    title: 'Patient erfassen',
    description: 'Neue Patientendaten erfassen',
    icon: <AddBoxIcon fontSize="large" sx={{ color: 'medical.main' }} />,
    path: '/erfassung/medirig/patient-erfassen',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'medical.main'
    }
  },
  {
    title: 'Vitalwerte',
    description: 'Vitalwerte überwachen und dokumentieren',
    icon: <MonitorHeartIcon fontSize="large" sx={{ color: 'medical.main' }} />,
    path: '/erfassung/medirig/vitalwerte',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'medical.main'
    }
  },
  {
    title: 'Diagnose',
    description: 'Diagnosen und Behandlungsempfehlungen',
    icon: <MedicalInformationIcon fontSize="large" sx={{ color: 'medical.main' }} />,
    path: '/erfassung/medirig/diagnose',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'medical.main'
    }
  },
  {
    title: 'Medikation',
    description: 'Medikation erfassen und verwalten',
    icon: <MedicationIcon fontSize="large" sx={{ color: 'medical.main' }} />,
    path: '/erfassung/medirig/medikation',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'medical.main'
    }
  },
  {
    title: 'Patientenübersicht',
    description: 'Übersicht aller Patienten',
    icon: <PeopleAltIcon fontSize="large" sx={{ color: 'medical.main' }} />,
    path: '/erfassung/medirig/patienten',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'medical.main'
    }
  }
];

// Subpages für Sirene - zweite Ebene
const NeueSirene = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Neue Sirene</Typography>
    <Typography variant="body1">Hier können Sie eine neue Sirenenanlage erfassen.</Typography>
  </Paper>
);

const SireneBearbeiten = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Sirene bearbeiten</Typography>
    <Typography variant="body1">Bestehende Sirenenanlagen können hier bearbeitet werden.</Typography>
  </Paper>
);

const SireneUebersicht = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Sirenenübersicht</Typography>
    <Typography variant="body1">Liste aller erfassten Sirenenanlagen.</Typography>
  </Paper>
);

// Schadenslage Subpages
const SchadensLageInfo = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Schadenslage - Info</Typography>
    <Typography variant="body1">Informationen zu aktuellen Schadenslagen.</Typography>
  </Paper>
);

const SchadensLageLandeslagen = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Landeslagen</Typography>
    <Typography variant="body1">Übersicht der aktuellen Landeslagen.</Typography>
  </Paper>
);

// Opta Subpages
const OptaInfo = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Opta - Info</Typography>
    <Typography variant="body1">Informationen zur Opta-Verwaltung.</Typography>
  </Paper>
);

const OptaNeu = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Opta - Neu</Typography>
    <Typography variant="body1">Erstellen neuer Opta-Einträge.</Typography>
  </Paper>
);

const OptaListe = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Opta - Liste</Typography>
    <Typography variant="body1">Liste aller Opta-Einträge.</Typography>
  </Paper>
);

const OptaWarenkorb = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Opta - Warenkorb</Typography>
    <Typography variant="body1">Verwaltung des Opta-Warenkorbs.</Typography>
  </Paper>
);

// Krisenstab Subpages
const KrisenstabUebersicht = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Krisenstab - Übersicht</Typography>
    <Typography variant="body1">Übersicht des Krisenstabs.</Typography>
  </Paper>
);

const KrisenstabMitglieder = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Krisenstab - Mitglieder</Typography>
    <Typography variant="body1">Verwaltung der Krisenstab-Mitglieder.</Typography>
  </Paper>
);

// MediRIG Komponenten
const PatientErfassen = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Patient erfassen</Typography>
    <Typography variant="body1">Hier können Sie neue Patientendaten erfassen.</Typography>
  </Paper>
);

const Vitalwerte = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Vitalwerte</Typography>
    <Typography variant="body1">Überwachung und Dokumentation von Vitalparametern.</Typography>
  </Paper>
);

const Diagnose = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Diagnose</Typography>
    <Typography variant="body1">Diagnosestellung und Behandlungsempfehlungen.</Typography>
  </Paper>
);

const Medikation = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Medikation</Typography>
    <Typography variant="body1">Erfassung und Verwaltung von Medikamenten.</Typography>
  </Paper>
);

const Patienten = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Patientenübersicht</Typography>
    <Typography variant="body1">Liste aller erfassten Patienten.</Typography>
  </Paper>
);

// Standorte Subpages
const StandorteInfo = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Standorte - Info</Typography>
    <Typography variant="body1">Informationen zu allen Einsatzstandorten.</Typography>
  </Paper>
);

const StandorteListe = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Standorte - Liste</Typography>
    <Typography variant="body1">Übersicht aller verfügbaren Einsatzstandorte.</Typography>
  </Paper>
);

const StandorteNeu = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Neuen Standort erfassen</Typography>
    <Typography variant="body1">Hier können Sie einen neuen Einsatzstandort anlegen.</Typography>
  </Paper>
);

// Sirene Hauptkomponente mit Untermenüs
const Sirene = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Sirenenbereich</Typography>
      <Typography variant="body1" paragraph>
        In diesem Bereich können Sie Sirenenanlagen verwalten, neue Anlagen erfassen und bestehende bearbeiten.
      </Typography>
      
      <Grid container spacing={3}>
        {sireneSubMenuItems.map((item) => {
          const isFavorite = favorites.some(fav => 
            fav.title === item.title && 
            fav.path === item.path && 
            fav.cardType === 'sirene'
          );
          
          return (
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
                  ...item.borderStyle,
                  position: 'relative'
                }}
                onClick={() => navigate(item.path)}
              >
                {/* Favoriten-Icon */}
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite({
                      ...item,
                      color: 'primary',
                      cardType: 'sirene',
                      parentTitle: 'Sirene'
                    });
                  }}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    zIndex: 2,
                    color: isFavorite ? 'warning.main' : 'text.disabled',
                    '&:hover': {
                      color: 'warning.main',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {isFavorite ? <StarIcon fontSize="small" /> : <StarBorderIcon fontSize="small" />}
                </IconButton>
                
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
                  <Button size="small" color="primary" onClick={() => navigate(item.path)}>
                    Öffnen
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

// Schadenslage Hauptkomponente
const Schadenslage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Schadenslage</Typography>
      <Typography variant="body1" paragraph>
        In diesem Bereich können Sie Informationen zu Schadenslagen einsehen und verwalten.
      </Typography>
      
      <Grid container spacing={3}>
        {schadensLageSubMenuItems.map((item) => {
          const isFavorite = favorites.some(fav => 
            fav.title === item.title && 
            fav.path === item.path && 
            fav.cardType === 'schadenslage'
          );
          
          return (
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
                  ...item.borderStyle,
                  position: 'relative'
                }}
                onClick={() => navigate(item.path)}
              >
                {/* Favoriten-Icon */}
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite({
                      ...item,
                      color: 'primary',
                      cardType: 'schadenslage',
                      parentTitle: 'Schadenslage'
                    });
                  }}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    zIndex: 2,
                    color: isFavorite ? 'warning.main' : 'text.disabled',
                    '&:hover': {
                      color: 'warning.main',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {isFavorite ? <StarIcon fontSize="small" /> : <StarBorderIcon fontSize="small" />}
                </IconButton>
                
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
                  <Button size="small" color="primary" onClick={() => navigate(item.path)}>
                    Öffnen
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

// Opta Hauptkomponente
const Opta = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Opta-Verwaltung</Typography>
      <Typography variant="body1" paragraph>
        In diesem Bereich können Sie Opta-Einträge verwalten, neue Einträge erstellen und den Warenkorb einsehen.
      </Typography>
      
      <Grid container spacing={3}>
        {optaSubMenuItems.map((item) => {
          const isFavorite = favorites.some(fav => 
            fav.title === item.title && 
            fav.path === item.path && 
            fav.cardType === 'opta'
          );
          
          return (
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
                  ...item.borderStyle,
                  position: 'relative'
                }}
                onClick={() => navigate(item.path)}
              >
                {/* Favoriten-Icon */}
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite({
                      ...item,
                      color: 'primary',
                      cardType: 'opta',
                      parentTitle: 'Opta'
                    });
                  }}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    zIndex: 2,
                    color: isFavorite ? 'warning.main' : 'text.disabled',
                    '&:hover': {
                      color: 'warning.main',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {isFavorite ? <StarIcon fontSize="small" /> : <StarBorderIcon fontSize="small" />}
                </IconButton>
                
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
                  <Button size="small" color="primary" onClick={() => navigate(item.path)}>
                    Öffnen
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

// Krisenstab Hauptkomponente
const Krisenstab = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Krisenstab</Typography>
      <Typography variant="body1" paragraph>
        In diesem Bereich können Sie den Krisenstab und dessen Mitglieder verwalten.
      </Typography>
      
      <Grid container spacing={3}>
        {krisenstabSubMenuItems.map((item) => {
          const isFavorite = favorites.some(fav => 
            fav.title === item.title && 
            fav.path === item.path && 
            fav.cardType === 'krisenstab'
          );
          
          return (
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
                  ...item.borderStyle,
                  position: 'relative'
                }}
                onClick={() => navigate(item.path)}
              >
                {/* Favoriten-Icon */}
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite({
                      ...item,
                      color: 'primary',
                      cardType: 'krisenstab',
                      parentTitle: 'Krisenstab'
                    });
                  }}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    zIndex: 2,
                    color: isFavorite ? 'warning.main' : 'text.disabled',
                    '&:hover': {
                      color: 'warning.main',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {isFavorite ? <StarIcon fontSize="small" /> : <StarBorderIcon fontSize="small" />}
                </IconButton>
                
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
                  <Button size="small" color="primary" onClick={() => navigate(item.path)}>
                    Öffnen
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

// MediRIG Hauptkomponente
const MediRIG = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>MediRIG - Medizinisches Rettungsinformationsgerät</Typography>
      <Typography variant="body1" paragraph>
        MediRIG unterstützt medizinisches Personal bei der Erfassung und Dokumentation von Patientendaten im Rettungseinsatz.
      </Typography>
      
      <Grid container spacing={3}>
        {mediRIGSubMenuItems.map((item) => {
          const isFavorite = favorites.some(fav => 
            fav.title === item.title && 
            fav.path === item.path && 
            fav.cardType === 'medirig'
          );
          
          return (
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
                  borderLeft: '4px solid',
                  borderColor: 'medical.main',
                  cursor: 'pointer',
                  ...item.borderStyle,
                  position: 'relative'
                }}
                onClick={() => navigate(item.path)}
              >
                {/* Favoriten-Icon */}
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite({
                      ...item,
                      color: 'medical',
                      cardType: 'medirig',
                      parentTitle: 'MediRIG'
                    });
                  }}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    zIndex: 2,
                    color: isFavorite ? 'warning.main' : 'text.disabled',
                    '&:hover': {
                      color: 'warning.main',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {isFavorite ? <StarIcon fontSize="small" /> : <StarBorderIcon fontSize="small" />}
                </IconButton>
                
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
                  <Button size="small" color="medical" onClick={() => navigate(item.path)}>
                    Öffnen
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

// Standorte Hauptkomponente
const Standorte = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Standorte</Typography>
      <Typography variant="body1" paragraph>
        In diesem Bereich können Sie Einsatzstandorte verwalten, neue Standorte anlegen und bestehende einsehen.
      </Typography>
      
      <Grid container spacing={3}>
        {standorteSubMenuItems.map((item) => {
          const isFavorite = favorites.some(fav => 
            fav.title === item.title && 
            fav.path === item.path && 
            fav.cardType === 'standorte'
          );
          
          return (
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
                  ...item.borderStyle,
                  position: 'relative'
                }}
                onClick={() => navigate(item.path)}
              >
                {/* Favoriten-Icon */}
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite({
                      ...item,
                      color: 'primary',
                      cardType: 'standorte',
                      parentTitle: 'Standorte'
                    });
                  }}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    zIndex: 2,
                    color: isFavorite ? 'warning.main' : 'text.disabled',
                    '&:hover': {
                      color: 'warning.main',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {isFavorite ? <StarIcon fontSize="small" /> : <StarBorderIcon fontSize="small" />}
                </IconButton>
                
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
                  <Button size="small" color="primary" onClick={() => navigate(item.path)}>
                    Öffnen
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

function Erfassung() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Erfassung</Typography>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/erfassung" underline="hover" color="inherit">
            Erfassung
          </Link>
          {pathSegments.length > 1 && (
            <Link 
              component={RouterLink} 
              to={`/erfassung/${pathSegments[1]}`}
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
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Erfassungsbereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich können Sie Daten erfassen, bestehende Erfassungen einsehen und den Erfassungsverlauf überwachen.
              </Typography>
              
              <Grid container spacing={3}>
                {subMenuItems.map((item) => {
                  const isFavorite = favorites.some(fav => 
                    fav.title === item.title && 
                    fav.path === item.path && 
                    fav.cardType === 'erfassung'
                  );
                  
                  return (
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
                          ...item.borderStyle,
                          position: 'relative'
                        }}
                        onClick={() => navigate(item.path)}
                      >
                        {/* Favoriten-Icon */}
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite({
                              ...item,
                              color: 'primary',
                              cardType: 'erfassung'
                            });
                          }}
                          sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            zIndex: 2,
                            color: isFavorite ? 'warning.main' : 'text.disabled',
                            '&:hover': {
                              color: 'warning.main',
                              backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            }
                          }}
                        >
                          {isFavorite ? <StarIcon fontSize="small" /> : <StarBorderIcon fontSize="small" />}
                        </IconButton>
                        
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
                          <Button size="small" color="primary" onClick={() => navigate(item.path)}>
                            Öffnen
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          } />
          
          {/* Sirenenuntermenüs */}
          <Route path="sirene" element={<Sirene />} />
          <Route path="sirene/neu" element={<NeueSirene />} />
          <Route path="sirene/bearbeiten" element={<SireneBearbeiten />} />
          <Route path="sirene/uebersicht" element={<SireneUebersicht />} />
          
          {/* Schadenslage Untermenüs */}
          <Route path="schadenslage" element={<Schadenslage />} />
          <Route path="schadenslage/info" element={<SchadensLageInfo />} />
          <Route path="schadenslage/landeslagen" element={<SchadensLageLandeslagen />} />
          
          {/* Opta Untermenüs */}
          <Route path="opta" element={<Opta />} />
          <Route path="opta/info" element={<OptaInfo />} />
          <Route path="opta/neu" element={<OptaNeu />} />
          <Route path="opta/liste" element={<OptaListe />} />
          <Route path="opta/warenkorb" element={<OptaWarenkorb />} />
          
          {/* Krisenstab Untermenüs */}
          <Route path="krisenstab" element={<Krisenstab />} />
          <Route path="krisenstab/uebersicht" element={<KrisenstabUebersicht />} />
          <Route path="krisenstab/mitglieder" element={<KrisenstabMitglieder />} />
          
          {/* MediRIG Untermenüs */}
          <Route path="medirig" element={<MediRIG />} />
          <Route path="medirig/patient-erfassen" element={<PatientErfassen />} />
          <Route path="medirig/vitalwerte" element={<Vitalwerte />} />
          <Route path="medirig/diagnose" element={<Diagnose />} />
          <Route path="medirig/medikation" element={<Medikation />} />
          <Route path="medirig/patienten" element={<Patienten />} />
          
          {/* Standorte Untermenüs */}
          <Route path="standorte" element={<Standorte />} />
          <Route path="standorte/info" element={<StandorteInfo />} />
          <Route path="standorte/liste" element={<StandorteListe />} />
          <Route path="standorte/neu" element={<StandorteNeu />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Erfassung;