import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Card, 
  CardContent, 
  Avatar, 
  Divider,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import DescriptionIcon from '@mui/icons-material/Description';
import BarChartIcon from '@mui/icons-material/BarChart';
import SecurityIcon from '@mui/icons-material/Security';

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
  
  return (
    <Box>
      {/* Hauptinhalt - nur Schnellzugriff */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 3, 
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
          <Grid item xs={6} sm={3} md={2}>
            <QuickAccessButton 
              icon={<DirectionsCarIcon />} 
              title="Fahrzeuge" 
              path="/einsatz/fahrzeuge" 
              color="warning" 
              borderStyle={{ borderLeft: `4px solid ${theme.palette.warning.main}` }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default HomePage;