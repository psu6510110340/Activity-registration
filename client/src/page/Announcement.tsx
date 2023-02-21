import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
          <img src="/anm.png" width='1284' height='580'/>
        </Box>
      </Grid>
      <Grid item>
        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Link href="Home" variant="body2">
            <Button type="submit"  variant="contained"  sx={{ mt: 5, mb: 1, width: '300px', height: '50px' }}>
              เข้าสู่เว็ปไซต์
            </Button>
          </Link>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Announcement
