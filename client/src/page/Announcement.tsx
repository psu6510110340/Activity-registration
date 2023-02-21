import React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider ,ThemeOptions } from '@mui/material/styles';
import { Height } from '@mui/icons-material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    background: {
      default: '#F0FFFF', // set to light blue color
    },
  },
});

const Announcement = () => {
  useEffect(() => {
    localStorage.removeItem('user')
})
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 600 }}>
        <Box sx={{ margin: 'auto' }}>
          <img src="/anm.png" width='1092vh' height='533vh'/>
        </Box>
      </Grid>
      <Grid item>
        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' ,minHeight: 50 }}>
          <Link href="Home" variant="body2">
            <Button variant="contained" size="medium">
            เข้าสู่เว็บไซต์
          </Button>
          </Link>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Announcement
