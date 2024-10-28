import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: '#2C3E50',
        color: '#ECF0F1',
        py: 2,
        boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        justifyContent: 'space-between', // Adjust as needed (e.g., space-between for icons)
        alignItems: 'center',
        px: 3,
      }}
    >
      <Typography variant="body2" sx={{ textAlign: 'center', flexGrow: 1 }}>
        Made by Abdulla Shaikh
      </Typography>
      <Box>
        <IconButton href="https://www.linkedin.com" target="_blank" color="inherit" sx={{ color: '#ECF0F1' }}>
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://github.com" target="_blank" color="inherit" sx={{ color: '#ECF0F1' }}>
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank" color="inherit" sx={{ color: '#ECF0F1' }}>
          <TwitterIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
