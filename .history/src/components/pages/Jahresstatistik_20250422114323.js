import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid, Button } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import InfoIcon from '@mui/icons-material/Info';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BarChartIcon from '@mui/icons-material/BarChart';
import CustomCard from '../layout/CustomCard';

// Hauptmenü-Struktur für Jahresstatistik - ohne Untermenüs
const menuItems = [
  {
    title: 'Info',
    description: 'Informationen zur Jahresstatistik',
    icon: <InfoIcon />,
    path: '/jahresstatistik',
    accentColor: 'secondary.main'
  },
  {
    title: 'Deckblatt',
    description: 'Deckblatt der Jahresstatistik',
    icon: <DescriptionIcon />,
    path: '/jahresstatistik',
    accentColor: 'primary.main'
  },
  {
    title: 'Erfassung',
    description: 'Erfassung von statistischen Daten',
    icon: <EditIcon />,
    path: '/jahresstatistik',
    accentColor: 'info.main'
  },
  {
    title: 'Anzeigen',
    description: 'Anzeigen der statistischen Auswertungen',
    icon: <VisibilityIcon />,
    path: '/jahresstatistik',
    accentColor: 'success.main'
  }
];

// Auswertungsoptionen für die Hauptseite
const auswertungsOptionen = [
  {
    title: 'Einsatzstatistik',
    description: 'Auswertung der Einsatzdaten nach Kategorien, Regionen und Zeiträumen',
    icon: <BarChartIcon />,
    path: '/jahresstatistik',
    accentColor: 'secondary.main'
  },
  {
    title: 'Ressourcenauswertung',
    description: 'Analyse des Ressourceneinsatzes und der Effizienz',
    icon: <AssessmentIcon />,
    path: '/jahresstatistik',
    accentColor: 'info.main'
  },
  {
    title: 'Berichtsgenerator',
    description: 'Erstellen individueller Berichte und Auswertungen',
    icon: <DescriptionIcon />,
    path: '/jahresstatistik',
    accentColor: 'success.main'
  }
];

function Jahresstatistik() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Jahresstatistik</Typography>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Typography color="text.primary">
            Jahresstatistik
          </Typography>
        </Breadcrumbs>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Jahresstatistik-Bereich</Typography>
        <Typography variant="body1" paragraph>
          Im Bereich Jahresstatistik können Sie statistische Daten einsehen, erfassen und auswerten.
          Sie finden hier alle relevanten Informationen zur Statistik des vergangenen Jahres sowie
          Werkzeuge zur Datenanalyse und Berichtserstellung.
        </Typography>
        
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>Grundfunktionen</Typography>
          <Grid container spacing={3}>
            {menuItems.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <CustomCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  onClick={() => console.log(`Klick auf ${item.title}`)}
                  accentColor={item.accentColor}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
        
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>Kennzahlen (2024)</Typography>
          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} md={6}>
              <CustomCard
                title="Gesamtzahl der Einsätze"
                description="Gesamtanzahl aller durchgeführten Einsätze im Jahr 2024"
                accentColor="primary.main"
                icon={<BarChartIcon />}
                stats={{
                  value: "1.247",
                  change: 8.3
                }}
                additionalInfo={{
                  "Vorjahreswert": "1.152",
                  "Steigerung absolut": "+95"
                }}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <CustomCard
                title="Durchschnittliche Einsatzdauer"
                description="Durchschnittliche Zeit pro Einsatz in Minuten"
                accentColor="secondary.main"
                icon={<AssessmentIcon />}
                stats={{
                  value: "37,5",
                  unit: " min",
                  change: -2.1
                }}
                additionalInfo={{
                  "Vorjahreswert": "38,3 min",
                  "Veränderung": "-0,8 min"
                }}
              />
            </Grid>
          </Grid>
        </Paper>
        
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>Verfügbare Auswertungen</Typography>
          <Grid container spacing={3}>
            {auswertungsOptionen.map((option) => (
              <Grid item xs={12} sm={6} md={4} key={option.title}>
                <CustomCard
                  title={option.title}
                  description={option.description}
                  icon={option.icon}
                  accentColor={option.accentColor}
                  onClick={() => console.log(`Klick auf Auswertung: ${option.title}`)}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}

export default Jahresstatistik;