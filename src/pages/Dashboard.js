import React, { useState } from 'react';
import { Box, CssBaseline, Typography } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ProjectForm from '../components/ProjectForm';
import ExperienceForm from '../components/ExperienceForm';
import ContactForm from '../components/ContactForm';
import AboutForm from '../components/AboutForm';
import ProfessionInfoForm from '../components/ProfessionInfoForm';

function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState('projects');

  // Render content based on selected component
  const renderContent = () => {
    switch (selectedComponent) {
      case 'projects':
        return <ProjectForm />;
      case 'experiences':
        return <ExperienceForm />;
      case 'contact':
        return <ContactForm />;
      case 'about':
        return <AboutForm />;
      case 'professionInfo':
        return <ProfessionInfoForm />;
      default:
        return <Typography variant="h4">Welcome to the Admin Dashboard</Typography>;
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content Wrapper with margin-top equal to header height */}
      <Box sx={{ display: 'flex', flexGrow: 1, mt: '64px', overflowY: 'auto', height: 'calc(100vh - 120px)' }}>
        <Sidebar onNavigate={setSelectedComponent} />
        <Box component="main" sx={{ flexGrow: 1, p: 3, overflowY: 'auto' }}>
          {renderContent()}
        </Box>
      </Box>
      
      {/* Sticky Footer */}
      <Footer />
    </Box>
  );
}

export default Dashboard;
