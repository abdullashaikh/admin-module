// Sidebar.js
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
  { text: 'Account Manage', icon: <AccountCircleIcon />, value: 'account' },
  { text: 'About', icon: <InfoIcon />, value: 'about' },
  { text: 'Contacts', icon: <ContactsIcon />, value: 'contact' },
  { text: 'Experiences', icon: <WorkIcon />, value: 'experiences' },
  { text: 'Professional Info', icon: <AssignmentIcon />, value: 'professionInfo' },
  { text: 'Projects', icon: <FolderIcon />, value: 'projects' },
];

const Sidebar = ({ onNavigate }) => {
  const [open, setOpen] = useState(true);

  const handleMenuItemClick = (value) => {
    onNavigate(value);  // Call the onNavigate function passed from Dashboard
  };

  return (
    <Drawer
      variant="permanent"
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
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <IconButton onClick={() => setOpen(!open)} sx={{ color: '#ECF0F1', mr: open ? 1 : 0 }}>
          <MenuIcon />
        </IconButton>
        {open && <Typography variant="h6" noWrap>Admin Dashboard</Typography>}
      </Box>

      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => handleMenuItemClick(item.value)}  // Call handleMenuItemClick with item's value
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
            <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', color: 'inherit' }}>
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
