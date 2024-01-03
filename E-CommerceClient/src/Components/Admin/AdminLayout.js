import React, { Component } from 'react'

import { Outlet } from 'react-router-dom';


import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Header from './Layout/Header/header';
import Sidebar from './Layout/Sidebar/sidebar';
import { Button,Stack } from 'react-bootstrap';

 function AdminLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    <Header/>
    <Sidebar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet/>

        <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>

      </Box>
    </Box>
  );
}

export default AdminLayout;