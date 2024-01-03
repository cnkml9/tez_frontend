import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
  >
    <Toolbar />
    <Box sx={{ overflow: 'auto' }}>
      <List>
       
          <ListItem  enablePadding>
            <ListItemButton href="/products">
              <ListItemText primary="Dashboard"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem   disablePadding>
            <ListItemButton>
              <ListItemText primary="Products"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemText primary="Orders"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemText primary="Return Web"></ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
  
    </Box>
  </Drawer>
  );
};

export default Sidebar;
