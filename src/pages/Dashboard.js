import React from 'react';
import { Box, CssBaseline, Typography } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Dashboard() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Admin Dashboard
          </Typography>
          {/* Add your page content here */}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Dashboard;
