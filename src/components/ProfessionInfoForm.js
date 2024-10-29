// ProfessionInfoForm.js
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ProfessionInfoForm = () => {
  return (
    <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#fff' }}>
      <Typography variant="h4" gutterBottom>
        Professional Information
      </Typography>
      <TextField fullWidth label="Degree" variant="outlined" margin="normal" />
      <TextField fullWidth label="Certifications" variant="outlined" margin="normal" />
      <TextField fullWidth label="Portfolio URL" variant="outlined" margin="normal" />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Save Professional Info
      </Button>
    </Box>
  );
};

export default ProfessionInfoForm;
