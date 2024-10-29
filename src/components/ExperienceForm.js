// ExperienceForm.js
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ExperienceForm = () => {
  return (
    <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#fff' }}>
      <Typography variant="h4" gutterBottom>
        Work Experience
      </Typography>
      <TextField fullWidth label="Job Title" variant="outlined" margin="normal" />
      <TextField fullWidth label="Company Name" variant="outlined" margin="normal" />
      <TextField fullWidth label="Duration" variant="outlined" margin="normal" />
      <TextField fullWidth label="Responsibilities" variant="outlined" margin="normal" multiline rows={4} />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Save Experience
      </Button>
    </Box>
  );
};

export default ExperienceForm;
