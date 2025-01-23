import React from "react";
import { AppBar, Toolbar, Typography, Switch, Box } from "@mui/material";

const AppBarHeader = ({ title, darkMode, onToggleDarkMode }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Box>
          <Typography variant="body2" sx={{ display: "inline", marginRight: 1 }}>
            {darkMode ? "Dark Mode" : "Light Mode"}
          </Typography>
          <Switch checked={darkMode} onChange={onToggleDarkMode} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarHeader;
