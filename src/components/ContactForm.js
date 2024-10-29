// ContactForm.js
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ContactForm = () => {
  return (
    <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#fff' }}>
      <Typography variant="h4" gutterBottom>
        Contact Information
      </Typography>
      <TextField fullWidth label="Email" variant="outlined" margin="normal" />
      <TextField fullWidth label="Phone Number" variant="outlined" margin="normal" />
      <TextField fullWidth label="Address" variant="outlined" margin="normal" multiline rows={2} />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Save Contact
      </Button>
    </Box>
  );
};

export default ContactForm;
