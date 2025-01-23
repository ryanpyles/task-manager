import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { lightTheme, darkTheme } from "./styles/theme";
import TaskList from "./components/TaskList";
import AppBarHeader from "./components/AppBarHeader";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppBarHeader
        title="Task Manager"
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "background.default",
          padding: 2,
        }}
      >
        <TaskList />
      </Box>
    </ThemeProvider>
  );
};

export default App;
