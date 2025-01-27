import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Menu as MenuIcon, ViewModule as ViewModuleIcon } from '@mui/icons-material';

const AppBarHeader = ({ title = 'Task Manager', onToggleView }) => {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Button
          color="inherit"
          startIcon={<ViewModuleIcon />}
          onClick={onToggleView}
          aria-label="Toggle view"
        >
          Toggle View
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarHeader;
