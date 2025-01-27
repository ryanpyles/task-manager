// Refactored application components with enhanced theming and removal of eval dependencies
import React, { useState, useEffect } from 'react';
import AppBarHeader from './components/AppBarHeader';
import TaskCalendar from './components/TaskCalendar';
import KanbanBoard from './components/KanbanBoard';
import TaskModal from './components/TaskModal';
import { Button, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

export default function App() {
  const [themeMode, setThemeMode] = useState('light');
  const [view, setView] = useState('board');
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Create theme without using eval-like behavior
  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#ff6600',
      },
      background: {
        default: themeMode === 'light' ? '#ffffff' : '#121212',
        paper: themeMode === 'light' ? '#f5f5f5' : '#1e1e1e',
      },
      text: {
        primary: themeMode === 'light' ? '#000000' : '#ffffff',
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
    const taskId = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`; // Ensure unique ID without eval-like behavior
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: taskId, ...newTask, status },
    ]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div role="main" aria-label="Task Master Application">
        <AppBarHeader title="Task Master" onToggleView={toggleView} />
        <Box sx={{ padding: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsModalOpen(true)}
            sx={{ marginBottom: 2 }}
          >
            Add Task
          </Button>
          {view === 'board' ? (
            <KanbanBoard tasks={tasks} setTasks={setTasks} />
          ) : (
            <TaskCalendar tasks={tasks} />
          )}
          <TaskModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddTask}
          />
        </Box>
        <footer>
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
          >
            Toggle Theme
          </button>
        </footer>
      </div>
    </ThemeProvider>
  );
}
