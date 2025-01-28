// Enhanced application design with advanced UI/UX and styling
import React, { useState, useEffect } from 'react';
import AppBarHeader from './components/AppBarHeader.jsx';
import TaskCalendar from './components/TaskCalendar.jsx';
import KanbanBoard from './components/KanbanBoard.jsx';
import TaskModal from './components/TaskModal.jsx';
import { Button, Box, CssBaseline, ThemeProvider, createTheme, Typography, Drawer, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [themeMode, setThemeMode] = useState('light');
  const [view, setView] = useState('board');
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Create theme with refined palette and typography
  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#ff6600',
      },
      secondary: {
        main: '#00bcd4',
      },
      background: {
        default: themeMode === 'light' ? '#f0f2f5' : '#1c1c1c',
        paper: themeMode === 'light' ? '#ffffff' : '#2a2a2a',
      },
      text: {
        primary: themeMode === 'light' ? '#333333' : '#e0e0e0',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      h6: {
        fontWeight: 600,
      },
      body1: {
        fontSize: '1rem',
      },
    },
  });

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Toggle between Kanban and Calendar views
  const toggleView = () => {
    setView((prevView) => (prevView === 'board' ? 'calendar' : 'board'));
  };

  // Add a new task to the list
  const handleAddTask = (status, newTask) => {
    const taskId = uuidv4(); // Generate a secure unique ID
    setTasks((prevTasks) => [...prevTasks, { id: taskId, ...newTask, status }]);
  };

  // Force re-render on task updates
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div role="main" aria-label="Task Master Application">
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              width: '240px',
            },
          }}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant="h6">Navigation</Typography>
            <Button fullWidth onClick={toggleView} sx={{ justifyContent: 'flex-start', marginTop: 2 }}>
              Toggle View
            </Button>
          </Box>
        </Drawer>

        <AppBarHeader
          title="Task Master"
          onToggleView={toggleView}
          toggleDrawer={() => setIsDrawerOpen(true)}
        />

        <Box
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            backgroundColor: 'background.default',
            minHeight: '100vh',
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Manage Your Tasks Efficiently
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsModalOpen(true)}
            sx={{ alignSelf: 'center', padding: '10px 20px', fontSize: '1rem' }}
          >
            Add Task
          </Button>

          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={12} md={8}>
              <Box
                component="div"
                sx={{
                  backgroundColor: 'background.paper',
                  boxShadow: 2,
                  borderRadius: 2,
                  padding: 4,
                }}
              >
                {view === 'board' ? (
                  <KanbanBoard tasks={tasks} setTasks={setTasks} />
                ) : (
                  <TaskCalendar tasks={tasks} />
                )}
              </Box>
            </Grid>
          </Grid>

          <TaskModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddTask}
          />
        </Box>

        <footer
          style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            padding: '10px 0',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">© 2025 Task Manager. All rights reserved.</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 1 }}>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Button
            onClick={toggleTheme}
            variant="text"
            style={{ color: 'white', textTransform: 'capitalize', marginTop: '10px' }}
          >
            Switch to {themeMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </footer>
      </div>
    </ThemeProvider>
  );
}
