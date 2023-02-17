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

const theme = createTheme({
  palette: {
    background: {
      default: '#F5FFFA', // set to light blue color
    },
  },
});

const Announcement = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 500 }}>
        <Box sx={{ margin: 'auto' }}>
          <img src="/anm.png" width='841' height='410'/>
        </Box>
      </Grid>
      <Grid item>
        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Link href="Home" variant="body2">
            <Button type="submit" variant="contained" sx={{ mr: 1 }}>
              เข้าสู่เว็ปไซต์
            </Button>
          </Link>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Announcement
