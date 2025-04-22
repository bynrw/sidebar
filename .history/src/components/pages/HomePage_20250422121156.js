import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Divider, 
  IconButton, 
  Avatar, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemAvatar,
  ListItemButton,
  Chip,
  LinearProgress,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import DangerousIcon from '@mui/icons-material/Dangerous';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SecurityIcon from '@mui/icons-material/Security';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import RefreshIcon from '@mui/icons-material/Refresh';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import CustomCard from '../layout/CustomCard';

// Statistik-Komponente
const StatCard = ({ title, value, icon, color, subtitle, percent, trend, borderStyle }) => {
  const theme = useTheme();
  
  return (
    <CustomCard
      title={title}
      accentColor={theme.palette[color].main}
      icon={icon}
      stats={{ value: value, change: trend }}
      additionalInfo={subtitle ? { [subtitle]: '' } : null}
    >
      {percent !== undefined && (
        <Box sx={{ mt: 2, width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="caption" color="text.secondary">
              Auslastung
            </Typography>
            <Typography variant="caption" fontWeight="bold" color={
              percent > 80 ? 'error.main' : 
              percent > 60 ? 'warning.main' : 'success.main'
            }>
              {percent}%
            </Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={percent} 
            sx={{ 
              height: 6, 
              borderRadius: 3,
              bgcolor: 'rgba(0,0,0,0.04)',
              '& .MuiLinearProgress-bar': {
                bgcolor: percent > 80 ? theme.palette.error.main : 
                        percent > 60 ? theme.palette.warning.main : 
                        theme.palette.success.main
              }
            }} 
          />
        </Box>
      )}
    </CustomCard>
  );
};

// Einsatzkarten-Komponente
const EmergencyCard = ({ title, location, time, type, status, priority }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  
  // Icon und Farbe basierend auf dem Typ auswählen
  const getTypeIcon = (type) => {
    switch(type) {
      case 'brand':
        return <LocalFireDepartmentIcon />;
      case 'medizin':
        return <LocalHospitalIcon />;
      case 'unfall':
        return <DirectionsCarIcon />;
      default:
        return <WarningAmberIcon />;
    }
  };
  
  const getTypeColor = (type) => {
    switch(type) {
      case 'brand':
        return theme.palette.fire.main;
      case 'medizin':
        return theme.palette.medical.main;
      case 'unfall':
        return theme.palette.warning.main;
      default:
        return theme.palette.primary.main;
    }
  };
  
  // Status-Badge
  const getStatusChip = (status) => {
    switch(status) {
      case 'aktiv':
        return <Chip size="small" label="Aktiv" color="error" sx={{ 
          height: 20, 
          fontSize: '0.7rem', 
          borderLeft: '4px solid',
          borderColor: 'error.main'
        }} />;
      case 'inbearbeitung':
        return <Chip size="small" label="In Bearbeitung" color="warning" sx={{ 
          height: 20, 
          fontSize: '0.7rem',
          borderLeft: '4px solid',
          borderColor: 'warning.main'
        }} />;
      case 'abgeschlossen':
        return <Chip size="small" label="Abgeschlossen" color="success" sx={{ 
          height: 20, 
          fontSize: '0.7rem',
          borderLeft: '4px solid',
          borderColor: 'success.main'
        }} />;
      default:
        return <Chip size="small" label="Offen" color="primary" sx={{ 
          height: 20, 
          fontSize: '0.7rem',
          borderLeft: '4px solid',
          borderColor: 'primary.main'
        }} />;
    }
  };
  
  // Prioritäts-Indikator
  const priorityColor = priority === 'hoch' ? theme.palette.error.main : 
                        priority === 'mittel' ? theme.palette.warning.main : 
                        theme.palette.success.main;
  
  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: 2, 
        borderRadius: 2, 
        mb: 2,
        position: 'relative',
        overflow: 'hidden',
        borderLeft: `4px solid ${getTypeColor(type)}`,
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
        },
        transition: 'box-shadow 0.2s'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <Avatar 
            sx={{ 
              bgcolor: `${getTypeColor(type)}20`, 
              color: getTypeColor(type),
              mr: 1.5 
            }}
          >
            {getTypeIcon(type)}
          </Avatar>
          <Box>
            <Typography variant="body1" fontWeight="bold">{title}</Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Standort: {location}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, mt: 1 }}>
              {getStatusChip(status)}
              <Chip 
                size="small" 
                label={time} 
                variant="outlined" 
                sx={{ height: 20, fontSize: '0.7rem' }}
              />
              <Chip 
                size="small" 
                label={`Priorität: ${priority}`} 
                sx={{ 
                  height: 20, 
                  fontSize: '0.7rem', 
                  bgcolor: `${priorityColor}20`, 
                  color: priorityColor,
                  borderColor: priorityColor 
                }}
                variant="outlined"
              />
            </Box>
          </Box>
        </Box>
        <IconButton 
          size="small" 
          sx={{ color: theme.palette.primary.main }}
          onClick={() => navigate('/einsatz')}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

// Aktuelles-Events-Komponente
const EventItem = ({ title, time, type, icon }) => {
  const theme = useTheme();
  
  const getEventColor = (type) => {
    switch(type) {
      case 'einsatz':
        return theme.palette.error.main;
      case 'besprechung':
        return theme.palette.info.main;
      case 'training':
        return theme.palette.success.main;
      default:
        return theme.palette.primary.main;
    }
  };
  
  return (
    <ListItem 
      disableGutters 
      sx={{ 
        px: 0, 
        py: 1,
        borderLeft: `3px solid ${getEventColor(type)}`,
        pl: 1,
        mb: 1,
        bgcolor: 'rgba(0,0,0,0.02)',
        borderRadius: '0 4px 4px 0'
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: `${getEventColor(type)}20`, color: getEventColor(type) }}>
          {icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={time}
        primaryTypographyProps={{ variant: 'body2', fontWeight: 'medium' }}
        secondaryTypographyProps={{ variant: 'caption' }}
      />
    </ListItem>
  );
};

// Schnellzugriff-Komponente
const QuickAccessButton = ({ icon, title, path, color, borderStyle }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  
  return (
    <Card 
      elevation={0}
      sx={{ 
        textAlign: 'center',
        height: '100%',
        cursor: 'pointer',
        borderRadius: 2,
        border: '1px solid rgba(0,0,0,0.05)',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          transform: 'translateY(-4px)'
        },
        transition: 'transform 0.2s, box-shadow 0.2s',
        ...borderStyle
      }}
      onClick={() => navigate(path)}
    >
      <CardContent sx={{ p: 2 }}>
        <Avatar 
          sx={{ 
            width: 48, 
            height: 48, 
            mx: 'auto', 
            mb: 1,
            bgcolor: theme.palette[color].main
          }}
        >
          {icon}
        </Avatar>
        <Typography variant="body2" fontWeight="medium">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Hauptkomponente
function HomePage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleTimeString());
  
  // Funktion zum Aktualisieren des Dashboards
  const handleRefresh = () => {
    setLastUpdate(new Date().toLocaleTimeString());
    // Hier würden in einer realen Anwendung die Daten neu geladen
  };
  
  return (
    <Box>
      {/* Dashboard Header mit Notfallbutton */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap',
        mb: 3
      }}>
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Willkommen im Informationssystem Gefahrenabwehr NRW
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Chip 
            icon={<SlowMotionVideoIcon fontSize="small" />} 
            label={`Letzte Aktualisierung: ${lastUpdate}`} 
            variant="outlined" 
            size="small"
            sx={{ height: 28 }}
          />
          <Button
            variant="contained"
            color="error"
            startIcon={<AddAlertIcon />}
            onClick={() => navigate('/einsatz')}
            sx={{ 
              fontWeight: 'bold', 
              boxShadow: '0 4px 8px rgba(227, 6, 19, 0.3)',
              '&:hover': {
                boxShadow: '0 6px 12px rgba(227, 6, 19, 0.4)',
              }
            }}
          >
            Notfall melden
          </Button>
          <IconButton onClick={handleRefresh}>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
      
      {/* Hauptinhalt */}
      <Grid container spacing={3}>
        {/* Schnellzugriff-Buttons */}
        <Grid item xs={12}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 3, 
              mb: 3, 
              borderRadius: 3, 
              background: 'linear-gradient(135deg, rgba(0, 90, 158, 0.04) 0%, rgba(0, 90, 158, 0.08) 100%)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <SecurityIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
              Schnellzugriff
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3} md={2}>
                <QuickAccessButton 
                  icon={<NotificationImportantIcon />} 
                  title="Einsatz" 
                  path="/einsatz" 
                  color="error" 
                  borderStyle={{ borderLeft: `4px solid ${theme.palette.error.main}` }}
                />
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <QuickAccessButton 
                  icon={<DescriptionIcon />} 
                  title="Erfassung" 
                  path="/erfassung" 
                  color="primary" 
                  borderStyle={{ borderLeft: `4px solid ${theme.palette.primary.main}` }}
                />
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <QuickAccessButton 
                  icon={<BarChartIcon />} 
                  title="Statistik" 
                  path="/auswertung/statistiken" 
                  color="secondary" 
                  borderStyle={{ borderLeft: `4px solid ${theme.palette.secondary.main}` }}
                />
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <QuickAccessButton 
                  icon={<PeopleAltIcon />} 
                  title="Benutzer" 
                  path="/benutzerverwaltung" 
                  color="primary" 
                  borderStyle={{ borderLeft: `4px solid ${theme.palette.primary.main}` }}
                />
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <QuickAccessButton 
                  icon={<LocalHospitalIcon />} 
                  title="Medizin" 
                  path="/erfassung/sirene" 
                  color="medical" 
                  borderStyle={{ borderLeft: `4px solid ${theme.palette.medical.main}` }}
                />
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <QuickAccessButton 
                  icon={<LocalFireDepartmentIcon />} 
                  title="Feuerwehr" 
                  path="/einsatz/planung" 
                  color="fire" 
                  borderStyle={{ borderLeft: `4px solid ${theme.palette.fire.main}` }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        {/* Statistische Übersicht */}
        <Grid item xs={12} md={8}>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                <BarChartIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />
                Statistische Übersicht
              </Typography>
              <Button 
                endIcon={<ArrowForwardIcon />} 
                size="small"
                onClick={() => navigate('/auswertung')}
              >
                Alle anzeigen
              </Button>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} lg={3}>
                <StatCard 
                  title="Aktive Einsätze" 
                  value="12" 
                  icon={<ErrorOutlineIcon />} 
                  color="error" 
                  percent={75} 
                  trend={8}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <StatCard 
                  title="Verfügbare Einsatzkräfte" 
                  value="87" 
                  icon={<PeopleAltIcon />} 
                  color="primary" 
                  percent={42} 
                  trend={-3}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <StatCard 
                  title="Fahrzeuge im Einsatz" 
                  value="28" 
                  icon={<DirectionsCarIcon />} 
                  color="warning" 
                  percent={68} 
                  trend={12}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <StatCard 
                  title="Monatl. Einsätze" 
                  value="342" 
                  icon={<BarChartIcon />} 
                  color="info" 
                  subtitle="Aktueller Monat" 
                  trend={5}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        
        {/* Kalender und Events */}
        <Grid item xs={12} md={4}>
          <Card 
            elevation={0} 
            sx={{ 
              height: '100%', 
              borderRadius: 3,
              border: '1px solid rgba(0,0,0,0.05)',
              '&:hover': {
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transform: 'translateY(-4px)'
              },
              transition: 'transform 0.2s, box-shadow 0.2s',
              borderStyle: { borderLeft: `4px solid ${theme.palette.primary.main}` }
            }}
          >
            <CardContent sx={{ p: 3, height: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                  <CalendarMonthIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                  Aktuelles
                </Typography>
                <Button 
                  endIcon={<ArrowForwardIcon />} 
                  size="small"
                  onClick={() => navigate('/einsatz')}
                >
                  Kalender
                </Button>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <List sx={{ p: 0 }}>
                <EventItem 
                  title="Großeinsatz Stadtmitte" 
                  time="Heute • 10:30" 
                  type="einsatz" 
                  icon={<DangerousIcon />} 
                />
                <EventItem 
                  title="Lagebeurteilung" 
                  time="Heute • 14:00" 
                  type="besprechung" 
                  icon={<EventAvailableIcon />} 
                />
                <EventItem 
                  title="Training: Katastrophenschutz" 
                  time="Morgen • 09:00" 
                  type="training" 
                  icon={<DateRangeIcon />} 
                />
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Aktuell laufende Einsätze */}
        <Grid item xs={12} lg={8}>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                <NotificationImportantIcon sx={{ mr: 1, color: theme.palette.error.main }} />
                Aktuell laufende Einsätze
              </Typography>
              <Button 
                endIcon={<ArrowForwardIcon />} 
                size="small"
                onClick={() => navigate('/einsatz')}
              >
                Alle anzeigen
              </Button>
            </Box>
            <EmergencyCard 
              title="Großbrand Industriegebiet" 
              location="Industriestraße 27, Düsseldorf" 
              time="Seit 10:15 Uhr" 
              type="brand" 
              status="aktiv"
              priority="hoch"
            />
            <EmergencyCard 
              title="Verkehrsunfall mit mehreren Verletzten" 
              location="B1 Abschnitt 34, Dortmund" 
              time="Seit 09:32 Uhr" 
              type="unfall" 
              status="inbearbeitung"
              priority="mittel"
            />
            <EmergencyCard 
              title="Medizinischer Notfall" 
              location="Marktplatz 3, Köln" 
              time="Seit 08:45 Uhr" 
              type="medizin" 
              status="inbearbeitung"
              priority="mittel"
            />
          </Box>
        </Grid>
        
        {/* Systemmeldungen */}
        <Grid item xs={12} lg={4}>
          <Card 
            elevation={0} 
            sx={{ 
              borderRadius: 3,
              border: '1px solid rgba(0,0,0,0.05)',
              height: '100%',
              '&:hover': {
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transform: 'translateY(-4px)'
              },
              transition: 'transform 0.2s, box-shadow 0.2s',
              borderStyle: { borderLeft: `4px solid ${theme.palette.warning.main}` }
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                  <WarningAmberIcon sx={{ mr: 1, color: theme.palette.warning.main }} />
                  Systemmeldungen
                </Typography>
                <IconButton size="small">
                  <MoreHorizIcon />
                </IconButton>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <List disablePadding>
                <ListItemButton 
                  sx={{ 
                    borderRadius: 2, 
                    mb: 1,
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' }
                  }}
                >
                  <ListItemText 
                    primary="Hochwasserwarnung" 
                    secondary="Stufe 2 für Rhein bei Köln"
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 'medium' }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                  <Chip 
                    size="small" 
                    label="Neu" 
                    color="warning" 
                    sx={{ 
                      height: 20, 
                      fontSize: '0.7rem',
                      borderLeft: '4px solid',
                      borderColor: 'warning.main'
                    }}
                  />
                </ListItemButton>
                <ListItemButton 
                  sx={{ 
                    borderRadius: 2, 
                    mb: 1,
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' }
                  }}
                >
                  <ListItemText 
                    primary="Systemupdate" 
                    secondary="Geplant für 22.04.2025, 02:00 Uhr"
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 'medium' }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItemButton>
                <ListItemButton 
                  sx={{ 
                    borderRadius: 2,
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' }
                  }}
                >
                  <ListItemText 
                    primary="Unwetterwarnung" 
                    secondary="Gewitter mit Starkregen für Westfalen"
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 'medium' }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItemButton>
              </List>
            </CardContent>
            <Divider />
            <CardActions sx={{ p: 2, justifyContent: 'center' }}>
              <Button 
                size="small" 
                onClick={() => navigate('/administration/protokolle')}
              >
                Alle Meldungen anzeigen
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;