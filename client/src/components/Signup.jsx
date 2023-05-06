import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
    
    
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    
    Stack,
    DatePicker,
  } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1515165562839-978bbcf18277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(50px)'
        }}
      >
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} >
          <Box
            sx={{
              my: 1,
              mx: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{width:470, mt: 1}}>
            <TextField
                margin="normal"
                required
                
                id="fname"
                label="First Name"
                name="fname"
                autoComplete="fname"
                autoFocus
                sx={{m:1}}
              />
               <TextField
                margin="normal"
                required
                
                id="lname"
                label="Last Name"
                name="lname"
                autoComplete="lname"
                autoFocus
                sx={{m:1}}
              />
              
            
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="phone"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="dob"
                label="Date of Birth"
                name="dob"
                autoComplete="dob"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
                  <TextField
                margin="normal"
                required
                fullWidth
                name="cpassword"
                label="Confirm Password"
                type="cpassword"
                id="cpassword"
                autoComplete="cpassword"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Senior Citizen"
              />
               <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Disabled"
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
              
            </Box>
          </Box>
        </Grid>
      </Box>
      <CssBaseline />
    </ThemeProvider>
  );
}
