import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Switch, AppBar, Toolbar, Typography } from "@mui/material";
import { lightTheme, darkTheme } from "./styles/theme";
import TaskList from "./components/TaskList";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
          <Switch checked={darkMode} onChange={handleToggle} />
        </Toolbar>
      </AppBar>
      <main style={{ padding: "20px" }}>
        <TaskList />
      </main>
    </ThemeProvider>
  );
};

export default App;
