import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent } from '@mui/material';

const LoginPage = ({ }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // if (username && password) {
    //   onLogin(true);
    // } else {
    //   alert("Please enter both username and password");
    // }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
      }}
    >
      <Card sx={{ width: 400, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, color: '#1976d2' }}>
            Admin Login
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{ padding: 1, fontSize: 16 }}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
