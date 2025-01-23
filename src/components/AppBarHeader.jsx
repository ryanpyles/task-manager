import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const AppBarHeader = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#FF7F00", color: "white" }}>
      <Toolbar>
      <Box
  component="img"
  src="/tasklogo.svg"
  alt="Task Manager Logo"
  sx={{ height: 40, marginRight: 2 }}
/>
        <Typography variant="h6" component="div">
          Task Manager
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarHeader;
