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

// Hauptmenü-Struktur für Jahresstatistik
const subMenuItems = [
  {
    title: 'Info',
    description: 'Informationen zur Jahresstatistik',
    icon: <InfoIcon />,
    path: '/jahresstatistik/info',
    hasSubItems: false,
    accentColor: 'secondary.main'
  },
  {
    title: 'Deckblatt',
    description: 'Deckblatt der Jahresstatistik',
    icon: <DescriptionIcon />,
    path: '/jahresstatistik/deckblatt',
    hasSubItems: false,
    accentColor: 'primary.main'
  },
  {
    title: 'Erfassung',
    description: 'Erfassung von statistischen Daten',
    icon: <EditIcon />,
    path: '/jahresstatistik/erfassung',
    hasSubItems: false,
    accentColor: 'info.main'
  },
  {
    title: 'Anzeigen',
    description: 'Anzeigen der statistischen Auswertungen',
    icon: <VisibilityIcon />,
    path: '/jahresstatistik/anzeigen',
    hasSubItems: false,
    accentColor: 'success.main'
  }
];

// Auswertungsoptionen für den Anzeigen-Bereich
const auswertungsOptionen = [
  {
    title: 'Einsatzstatistik',
    description: 'Auswertung der Einsatzdaten nach Kategorien, Regionen und Zeiträumen',
    icon: <BarChartIcon />,
    path: '/jahresstatistik/anzeigen/einsatzstatistik',
    accentColor: 'secondary.main'
  },
  {
    title: 'Ressourcenauswertung',
    description: 'Analyse des Ressourceneinsatzes und der Effizienz',
    icon: <AssessmentIcon />,
    path: '/jahresstatistik/anzeigen/ressourcen',
    accentColor: 'info.main'
  },
  {
    title: 'Berichtsgenerator',
    description: 'Erstellen individueller Berichte und Auswertungen',
    icon: <DescriptionIcon />,
    path: '/jahresstatistik/anzeigen/berichte',
    accentColor: 'success.main'
  }
];

// Subpages für die Untermenüs
const StatistikInfo = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Jahresstatistik - Info</Typography>
    <Typography variant="body1">
      Die Jahresstatistik bietet eine Übersicht aller relevanten statistischen Daten des vergangenen Jahres. 
      Hier finden Sie Informationen zur Datenerhebung, Auswertungsmethoden und rechtliche Grundlagen.
    </Typography>
  </Paper>
);

const StatistikDeckblatt = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Jahresstatistik - Deckblatt</Typography>
    <Typography variant="body1">
      Auf dem Deckblatt können Sie allgemeine Informationen und Zusammenfassungen der Jahresstatistik einsehen.
      Hier werden Kennzahlen, Trends und wichtige Entwicklungen des vergangenen Jahres dargestellt.
    </Typography>
  </Paper>
);

const StatistikErfassung = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Jahresstatistik - Erfassung</Typography>
    <Typography variant="body1">
      Im Bereich Erfassung können Sie neue statistische Daten eingeben, vorhandene Daten bearbeiten 
      und die Datenbasis für die Jahresstatistik pflegen. Achten Sie auf Vollständigkeit und Korrektheit der Eingaben.
    </Typography>
  </Paper>
);

const StatistikAnzeigen = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Jahresstatistik - Anzeigen</Typography>
    <Typography variant="body1">
      Hier können Sie verschiedene Auswertungen und Visualisierungen der Jahresstatistik einsehen.
      Die Daten werden in Form von Tabellen, Diagrammen und Grafiken dargestellt.
    </Typography>
  </Paper>
);

// Info Hauptkomponente
const Info = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Jahresstatistik - Info</Typography>
      <Typography variant="body1" paragraph>
        Die Jahresstatistik bietet eine Übersicht aller relevanten statistischen Daten des vergangenen Jahres. 
        Hier finden Sie Informationen zur Datenerhebung, Auswertungsmethoden und rechtliche Grundlagen.
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Zweck der Jahresstatistik</Typography>
        <Typography variant="body1" paragraph>
          Die Jahresstatistik dient der systematischen Erfassung, Auswertung und Darstellung aller relevanten Daten und Kennzahlen des vergangenen Kalenderjahres.
          Sie bildet eine wichtige Grundlage für die Planung zukünftiger Maßnahmen und die Optimierung von Prozessen.
        </Typography>
        
        <Typography variant="h6" gutterBottom>Rechtliche Grundlagen</Typography>
        <Typography variant="body1" paragraph>
          Die Erhebung und Verarbeitung der Daten erfolgt auf Grundlage gesetzlicher Vorgaben und internen Richtlinien.
          Alle Daten werden unter Beachtung der geltenden Datenschutzbestimmungen verarbeitet.
        </Typography>
        
        <Typography variant="h6" gutterBottom>Verantwortlichkeiten</Typography>
        <Typography variant="body1">
          Für die Erstellung und Pflege der Jahresstatistik ist die Abteilung Statistik verantwortlich.
          Bei Fragen oder Anmerkungen wenden Sie sich bitte an statistik@beispiel.de.
        </Typography>
      </Paper>
      
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => navigate('/jahresstatistik')}
        sx={{ mt: 2 }}
      >
        Zurück zur Übersicht
      </Button>
    </Box>
  );
};

// Deckblatt Hauptkomponente
const Deckblatt = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Jahresstatistik - Deckblatt</Typography>
      <Typography variant="body1" paragraph>
        Das Deckblatt der Jahresstatistik bietet einen Überblick über die wichtigsten Kennzahlen und Ergebnisse des vergangenen Jahres.
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Zusammenfassung des Jahres 2024</Typography>
        
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
        
        <Typography variant="h6" gutterBottom>Wichtige Meilensteine</Typography>
        <Typography variant="body1" paragraph>
          • Erfolgreiche Einführung des neuen Einsatzleitsystems<br />
          • Verbesserung der durchschnittlichen Reaktionszeit um 12%<br />
          • Abschluss von 24 Großprojekten mit einem Gesamtvolumen von 2,3 Mio. Euro
        </Typography>
      </Paper>
      
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => navigate('/jahresstatistik')}
        sx={{ mt: 2 }}
      >
        Zurück zur Übersicht
      </Button>
    </Box>
  );
};

// Erfassung Hauptkomponente
const Erfassung = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Jahresstatistik - Erfassung</Typography>
      <Typography variant="body1" paragraph>
        In diesem Bereich können Sie statistische Daten für die Jahresauswertung erfassen und bearbeiten.
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Datenerfassung</Typography>
        <Typography variant="body1" paragraph>
          Bitte beachten Sie bei der Erfassung der Daten folgende Punkte:
        </Typography>
        
        <Typography variant="body1" component="ul" sx={{ mb: 3 }}>
          <li>Vollständigkeit der Daten sicherstellen</li>
          <li>Plausibilitätsprüfung durchführen</li>
          <li>Bei Unklarheiten Rücksprache mit der Fachabteilung halten</li>
          <li>Änderungen dokumentieren</li>
        </Typography>
        
        <Typography variant="body1" paragraph>
          Die Datenerfassung für die Jahresstatistik 2024 ist bis zum 15.01.2025 abzuschließen.
        </Typography>
        
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item>
            <Button variant="contained" color="primary">
              Neue Erfassung starten
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Bestehende Erfassung bearbeiten
            </Button>
          </Grid>
        </Grid>
      </Paper>
      
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => navigate('/jahresstatistik')}
        sx={{ mt: 2 }}
      >
        Zurück zur Übersicht
      </Button>
    </Box>
  );
};

// Anzeigen Hauptkomponente
const Anzeigen = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Jahresstatistik - Anzeigen</Typography>
      <Typography variant="body1" paragraph>
        Hier können Sie verschiedene Auswertungen und Visualisierungen der Jahresstatistik einsehen.
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Verfügbare Auswertungen</Typography>
        
        <Grid container spacing={3}>
          {auswertungsOptionen.map((option) => (
            <Grid item xs={12} sm={6} md={4} key={option.title}>
              <CustomCard
                title={option.title}
                description={option.description}
                icon={option.icon}
                accentColor={option.accentColor}
                path={option.path}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
      
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => navigate('/jahresstatistik')}
        sx={{ mt: 2 }}
      >
        Zurück zur Übersicht
      </Button>
    </Box>
  );
};

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
          <Link component={RouterLink} to="/jahresstatistik" underline="hover" color="inherit">
            Jahresstatistik
          </Link>
          {pathSegments.length > 1 && (
            <Typography color="text.primary">
              {pathSegments[1].charAt(0).toUpperCase() + pathSegments[1].slice(1)}
            </Typography>
          )}
        </Breadcrumbs>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Routes>
          <Route index element={
            <Box>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>Jahresstatistik-Bereich</Typography>
              <Typography variant="body1" paragraph>
                In diesem Bereich können Sie die Jahresstatistik einsehen, erfassen und auswerten. 
                Wählen Sie eine der folgenden Optionen, um fortzufahren.
              </Typography>
              
              <Grid container spacing={3}>
                {subMenuItems.map((item) => (
                  <Grid item xs={12} sm={6} md={3} key={item.title}>
                    <CustomCard
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                      path={item.path}
                      accentColor={item.accentColor}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          } />
          
          {/* Untermenüs */}
          <Route path="info" element={<Info />} />
          <Route path="deckblatt" element={<Deckblatt />} />
          <Route path="erfassung" element={<Erfassung />} />
          <Route path="anzeigen" element={<Anzeigen />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default Jahresstatistik;