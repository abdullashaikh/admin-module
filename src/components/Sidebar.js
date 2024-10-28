import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, Typography, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FolderIcon from '@mui/icons-material/Folder';
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = [
  { text: 'Account Manage', icon: <AccountCircleIcon /> },
  { text: 'About', icon: <InfoIcon /> },
  { text: 'Contacts', icon: <ContactsIcon /> },
  { text: 'Experiences', icon: <WorkIcon /> },
  { text: 'Professional Info', icon: <AssignmentIcon /> },
  { text: 'Projects', icon: <FolderIcon /> },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Drawer
      variant="permanent"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      sx={{
        width: open ? 220 : 55,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 220 : 55,
          transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          overflowX: 'hidden',
          boxShadow: 4,
          backgroundColor: '#2C3E50',
          color: '#ECF0F1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', // Align items at the top
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, width: '100%' }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#ECF0F1', mr: open ? 1 : 0 }}>
          <MenuIcon />
        </IconButton>
        {open && <Typography variant="h6" noWrap>Admin Dashboard</Typography>}
      </Box>

      <List sx={{ width: '100%' }}>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: open ? 'flex-start' : 'center',
              px: open ? 2 : 0,
              py: 1,
              color: '#BDC3C7',
              '&:hover': {
                backgroundColor: '#34495E',
                color: '#ECF0F1',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', color: 'inherit', justifyContent: 'center',marginLeft:'10px' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                opacity: open ? 1 : 0,
                transition: 'opacity 0.3s ease',
                whiteSpace: 'nowrap',
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Footer at the bottom */}
      <Box sx={{ width: '100%', textAlign: open ? 'left' : 'center', p: 2, color: '#7F8C8D', mt: 'auto' }}>
        <Typography variant="caption" noWrap>
          {open ? 'Made by Abdulla Shaikh' : 'AS'}
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
