import Navbar from '../../components/Body/StatusNavbar';
import React from 'react';
import CardLog from '../../components/Body/Popupcard';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FigureImage from 'react-bootstrap/FigureImage'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { storeUser } from '../../helper';
import logo from '../../image/logo.png';
import backgroundImage from '../../image/PSU.jpg';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

import './Profile.css'
import { AppBar, Avatar, Container, Toolbar } from '@mui/material';
import FooterBar from '../../components/FooterBar';
import IconButton from '@mui/joy/IconButton/IconButton';

const getUserData = () => {
  const stringfiedUser = localStorage.getItem('user') || '';
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};

const Profile = () => {
  const userData = getUserData();
  if (!userData) {
    return (
      <div>
        <CardLog/>
      </div>
    );
  }

  return (
    <>
      <div>
        <Navbar />
        <a className='my_button1'>ตรวจเช็คสถานะ</a>
        <a className='my_button2'>กิจกรรมที่เคยเข้าร่วม</a>
      </div>
        <div className='Image'></div>
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
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};

export default Profile;
