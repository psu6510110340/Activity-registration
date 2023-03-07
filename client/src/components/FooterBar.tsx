import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';

import facebook from '../image/Facebook.png';
import line from '../image/Line.png';
import instagram from '../image/Instagram.png';


function FooterBar() {



  return (
    <AppBar position="static"> 
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography
            variant="h6" //#1976D2
            noWrap
            component="a"
            sx={{
              margin: '0px 30px 0px 930px', //Contact:
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Contact :
          </Typography>
          
          <Link href='https://www.facebook.com/profile.php?id=100090454999072'>
            <Box sx={{ margin: '0px 30px 0px 0px' }}>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={ facebook } //Facebook
                  sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}}}/>
                </IconButton>
            </Box>
          </Link>

          <Link href='https://line.me/R/ti/p/@255fcoog'>
            <Box sx={{ margin: '0px 30px 0px 0px' }}>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={ line } //Line
                  sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}}}/>
                </IconButton>
            </Box>
          </Link>

          <Link href='https://instagram.com/takecamp_official?igshid=YmMyMTA2M2Y='>
            <Box sx={{ margin: '0px 0px 0px 0px' }}>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={ instagram } //Instagram
                  sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}}}/>
                </IconButton>
            </Box>
          </Link>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default FooterBar;