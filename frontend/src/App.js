import React, { useState, createContext, useContext, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { CssBaseline, Container, Typography, AppBar, Toolbar, Button, Box, IconButton, Avatar, Tooltip, ThemeProvider, createTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CallIcon from '@mui/icons-material/Call';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Dashboard from './components/Dashboard';
import ProfileView from './components/ProfileView';
import CallManagement from './components/CallManagement';

// Create a theme context
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const NavButton = ({ to, icon, label }) => (
  <Button
    component={Link}
    to={to}
    color="inherit"
    sx={{
      mx: 1,
      borderRadius: '12px',
      padding: '8px 16px',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: 'rgba(255, 255, 255, 0.1)',
        transform: 'translateY(-2px)'
      }
    }}
    startIcon={icon}
  >
    {label}
  </Button>
);

const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  const [mode, setMode] = useState('dark');
  
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light' 
            ? {
                // Light mode
                primary: {
                  main: '#1976d2',
                },
                secondary: {
                  main: '#f50057',
                },
                background: {
                  default: '#f5f5f5',
                  paper: '#ffffff',
                },
              } 
            : {
                // Dark mode
                primary: {
                  main: '#90caf9',
                },
                secondary: {
                  main: '#f48fb1',
                },
                background: {
                  default: '#121212',
                  paper: '#1e1e1e',
                },
              }),
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <Box sx={{ 
            minHeight: '100vh',
            background: mode === 'dark' 
              ? 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)' 
              : 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
          }}>
            <AppBar 
              position="sticky" 
              elevation={0}
              sx={{ 
                background: mode === 'dark'
                  ? 'rgba(26, 26, 26, 0.8)'
                  : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: mode === 'dark'
                  ? '1px solid rgba(255,255,255,0.1)'
                  : '1px solid rgba(0,0,0,0.1)'
              }}
            >
              <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Typography 
                      variant="h5" 
                      component="div" 
                      sx={{ 
                        mr: 4,
                        background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold'
                      }}
                    >
                      Matchmaking Pro
                    </Typography>
                  </motion.div>

                  <NavButton to="/" icon={<PeopleIcon />} label="Profiles" />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Tooltip title="Toggle dark/light mode">
                    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Notifications">
                    <IconButton color="inherit">
                      <NotificationsIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Settings">
                    <IconButton color="inherit">
                      <SettingsIcon />
                    </IconButton>
                  </Tooltip>
                  <Avatar 
                    sx={{ 
                      cursor: 'pointer',
                      border: mode === 'dark'
                        ? '2px solid rgba(255,255,255,0.2)'
                        : '2px solid rgba(0,0,0,0.2)',
                      '&:hover': {
                        border: mode === 'dark'
                          ? '2px solid rgba(255,255,255,0.5)'
                          : '2px solid rgba(0,0,0,0.5)'
                      }
                    }}
                  />
                </Box>
              </Toolbar>
            </AppBar>

            <Container 
              maxWidth="xl" 
              sx={{ 
                pt: 4,
                pb: 8
              }}
            >
              <PageTransition>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/Profileview" element={<ProfileView />} />
                  <Route path="/call-management" element={<CallManagement />} />
                  <Route path="/call-management/:profileId" element={<CallManagement />} />
                </Routes>
              </PageTransition>
            </Container>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Box 
                component="footer" 
                sx={{ 
                  textAlign: 'center',
                  py: 3,
                  color: mode === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                  borderTop: mode === 'dark' 
                    ? '1px solid rgba(255,255,255,0.1)'
                    : '1px solid rgba(0,0,0,0.1)'
                }}
              >
                <Typography variant="body2">
                  © 2024 Matchmaking Pro. All rights reserved.
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
