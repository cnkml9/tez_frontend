import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1" color="inherit">
          © {new Date().getFullYear()} Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
