import React from 'react';
import { Box, Typography, Breadcrumbs, Link, Container } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Jahresstatistik() {
  const location = useLocation();

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

      {/* Leere Seite ohne Sektionen */}
    </Container>
  );
}

export default Jahresstatistik;