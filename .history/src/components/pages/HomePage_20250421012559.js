import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, CardHeader, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Description as DescriptionIcon,
  Assessment as AssessmentIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Info as InfoIcon,
  Work as WorkIcon,
  Person as PersonIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Styled components
const DashboardCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
  cursor: 'pointer',
}));

const IconWrapper = styled(Box)(({ theme, color = 'primary.main' }) => ({
  borderRadius: '50%',
  padding: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.04)',
  color: theme.palette[color.split('.')[0]][color.split('.')[1]] || theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const menuItems = [
  {
    title: 'Erfassung',
    description: 'Daten erfassen und verwalten',
    icon: <DescriptionIcon fontSize="large" />,
    path: '/erfassung',
    color: 'primary.main'
  },
  {
    title: 'Auswertung',
    description: 'Berichte und Statistiken anzeigen',
    icon: <AssessmentIcon fontSize="large" />,
    path: '/auswertung',
    color: 'secondary.main'
  },
  {
    title: 'Administration',
    description: 'Systemeinstellungen konfigurieren',
    icon: <SettingsIcon fontSize="large" />,
    path: '/administration',
    color: 'info.main'
  },
  {
    title: 'Hilfe',
    description: 'Dokumentation und Anleitungen',
    icon: <HelpIcon fontSize="large" />,
    path: '/hilfe',
    color: 'success.main'
  },
  {
    title: 'Info',
    description: 'Systeminfo und Versionshinweise',
    icon: <InfoIcon fontSize="large" />,
    path: '/info',
    color: 'warning.main'
  },
  {
    title: 'Einsatz',
    description: 'Einsatzplanung und -steuerung',
    icon: <WorkIcon fontSize="large" />,
    path: '/einsatz',
    color: 'error.main'
  },
  {
    title: 'Benutzerverwaltung',
    description: 'Benutzer, Rollen und Berechtigungen',
    icon: <PersonIcon fontSize="large" />,
    path: '/benutzerverwaltung',
    color: 'primary.dark'
  }
];

function HomePage() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Paper elevation={0} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Willkommen im Admin Portal
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Wählen Sie eine der folgenden Optionen, um zu beginnen.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => navigate('/erfassung/neu')}>
            Neue Erfassung
          </Button>
          <Button variant="outlined" onClick={() => navigate('/auswertung/berichte')}>
            Berichte anzeigen
          </Button>
        </Stack>
      </Paper>

      <Grid container spacing={3}>
        {menuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.title}>
            <DashboardCard onClick={() => handleCardClick(item.path)}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: 3 }}>
                <IconWrapper color={item.color}>
                  {item.icon}
                </IconWrapper>
                <Typography variant="h6" component="h2" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </DashboardCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HomePage;