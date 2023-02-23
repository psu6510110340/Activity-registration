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
          
          <Link href='https://th-th.facebook.com/'>
            <Box sx={{ margin: '0px 30px 0px 0px' }}>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={ facebook } //Facebook
                  sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}}}/>
                </IconButton>
            </Box>
          </Link>

          <Link href='https://access.line.me/oauth2/v2.1/login?returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fscope%3Dopenid%2Bprofile%2Bfriends%2Bgroups%2Btimeline.post%2Bmessage.write%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fsocial-plugins.line.me%252Fwidget%252FloginCallback%253FreturnUrl%253Dhttps%25253A%25252F%25252Fsocial-plugins.line.me%25252Fwidget%25252Fclose%26state%3D9fec98665820574ebc349f47d089a6%26client_id%3D1446101138&loginChannelId=1446101138#/'>
            <Box sx={{ margin: '0px 30px 0px 0px' }}>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={ line } //Line
                  sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}}}/>
                </IconButton>
            </Box>
          </Link>

          <Link href='https://z-p15.www.instagram.com/accounts/login/?hl=th'>
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