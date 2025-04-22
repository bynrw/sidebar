import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MedicationIcon from '@mui/icons-material/Medication';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

// MediRIG Untermenüs
const mediRIGSubMenuItems = [
  {
    title: 'Patient erfassen',
    description: 'Neue Patientendaten erfassen',
    icon: <AddBoxIcon fontSize="large" sx={{ color: 'medical.main' }} />,
    path: '/medirig/patient-erfassen',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'medical.main'
    }
  },
  {
    title: 'Vitalwerte',
    description: 'Vitalwerte überwachen und dokumentieren',
    icon: <MonitorHeartIcon fontSize="large" sx={{ color: 'medical.main' }} />,
    path: '/medirig/vitalwerte',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'medical.main'
    }
  },
  {
    title: 'Diagnose',
    description: 'Diagnosen und Behandlungsempfehlungen',
    icon: <MedicalInformationIcon fontSize="large" sx={{ color: 'medical.main' }} />,
    path: '/medirig/diagnose',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'medical.main'
    }
  },
  {
    title: 'Medikation',
    description: 'Medikation erfassen und verwalten',
    icon: <MedicationIcon fontSize="large" sx={{ color: 'medical.main' }} />,
    path: '/medirig/medikation',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'medical.main'
    }
  },
  {
    title: 'Patientenübersicht',
    description: 'Übersicht aller Patienten',
    icon: <PeopleAltIcon fontSize="large" sx={{ color: 'medical.main' }} />,
    path: '/medirig/patienten',
    borderStyle: { 
      borderLeft: '4px solid',
      borderColor: 'medical.main'
    }
  }
];

// MediRIG Subcomponents
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

function MediRIG() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>MediRIG</Typography>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/medirig" underline="hover" color="inherit">
            MediRIG
          </Link>
          {pathSegments.length > 1 && (
            <Typography color="text.primary">
              {pathSegments[1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Typography>
          )}
        </Breadcrumbs>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Routes>
          <Route index element={
            <Box>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>MediRIG - Medizinisches Rettungsinformationsgerät</Typography>
              <Typography variant="body1" paragraph>
                MediRIG unterstützt medizinisches Personal bei der Erfassung und Dokumentation von Patientendaten im Rettungseinsatz.
              </Typography>
              
              <Grid container spacing={3}>
                {mediRIGSubMenuItems.map((item) => (
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
                        cursor: 'pointer'
                      }}
                      onClick={() => navigate(item.path)}
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
                        <Button size="small" color="medical" onClick={() => navigate(item.path)}>
                          Öffnen
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          } />
          
          {/* MediRIG Untermenüs */}
          <Route path="patient-erfassen" element={<PatientErfassen />} />
          <Route path="vitalwerte" element={<Vitalwerte />} />
          <Route path="diagnose" element={<Diagnose />} />
          <Route path="medikation" element={<Medikation />} />
          <Route path="patienten" element={<Patienten />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default MediRIG;