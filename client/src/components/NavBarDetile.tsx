import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo from '../image/WhiteLogo.png';
import { TextField } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ButtonUser from './Body/Buttonuser';

const getUserData = () => {
  const stringfiedUser = localStorage.getItem('usser') || '';
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};

function NavBarDetile () {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

  const userData = getUserData();
  
    return (
        <AppBar position="static" >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <img
                alt="Logo"                          //LOGO
                src={logo}
                style={{
                  width: '250px',
                  height: '65px',
                  margin: '5px 25px 5px 0px'
                }}
              />
             
              <Box
                sx={{
                  width: '800px',
                  height: '10%',                //Search
                  background: '#ffffff',
                  borderRadius: 3,
                  margin: '10px 25px 10px 0px'
                }}
              >
                
              </Box>
              
              

              <div>
               
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <ArrowRightIcon />
                    กิจกรรมมหาวิทยาลัย
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                    <ArrowRightIcon />
                    กิจกรรมจิตอาสา
                  </MenuItem>
                </StyledMenu>
              </div>
              <ButtonUser/>

          </Toolbar>
        </Container>
      </AppBar>
    );
  }

export default NavBarDetile