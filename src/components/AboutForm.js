// AboutForm.js
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const AboutForm = () => {
  return (
    <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#fff' }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <TextField fullWidth label="Biography" variant="outlined" margin="normal" multiline rows={4} />
      <TextField fullWidth label="Skills" variant="outlined" margin="normal" />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Save About Info
      </Button>
    </Box>
  );
};

export default AboutForm;
