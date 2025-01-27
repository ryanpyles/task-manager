// Refactored application components with enhanced theming
import React, { useState } from 'react';
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

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#ff6600',
      },
      background: {
        default: getTheme(themeMode).background,
        paper: getTheme(themeMode).card,
      },
      text: {
        primary: getTheme(themeMode).text,
      },
    },
  });

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const toggleView = () => {
    setView((prevView) => (prevView === 'board' ? 'calendar' : 'board'));
  };

  const handleAddTask = (status, newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now().toString(), ...newTask, status },
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
