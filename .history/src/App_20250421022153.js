import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

// Layout
import MainLayout from './components/layout/MainLayout';

// Pages
import HomePage from './components/pages/HomePage';
import Erfassung from './components/pages/Erfassung';
import Auswertung from './components/pages/Auswertung';
import Administration from './components/pages/Administration';
import Hilfe from './components/pages/Hilfe';
import Info from './components/pages/Info';
import Einsatz from './components/pages/Einsatz';
import Benutzerverwaltung from './components/pages/Benutzerverwaltung';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="erfassung/*" element={<Erfassung />} />
          <Route path="auswertung/*" element={<Auswertung />} />
          <Route path="administration/*" element={<Administration />} />
          <Route path="hilfe/*" element={<Hilfe />} />
          <Route path="info/*" element={<Info />} />
          <Route path="einsatz/*" element={<Einsatz />} />
          <Route path="benutzerverwaltung/*" element={<Benutzerverwaltung />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;