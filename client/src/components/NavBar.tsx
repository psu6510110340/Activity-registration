import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider ,ThemeOptions } from '@mui/material/styles';
import logo from '../image/WhiteLogo.png';
import bell from '../image/WhiteBell.png';
import ButtonUser from './Body/Buttonuser';

const getUserData = () => {
  const stringfiedUser = localStorage.getItem('user') || '';
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};

const NavBar = () => {
  const userData = getUserData();
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        overflow: 'auto',
        minHeight: '100vh',
        alignItems: 'center',
        borderColor: 'var(--dl-color-gray-black)',
        borderWidth: '5px',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#D9D9D9', //Background
      }}
    >
      <header
        data-role="Header"
        style={{
          width: '100%',
          height: '75px', //ความสูงแถบบาร์
          display: 'flex',
          position: 'relative',
          boxShadow: '5px 5px 10px 0px #545454',
          alignItems: 'center',
          paddingTop: 'var(--dl-space-space-twounits)',
          paddingLeft: 'var(--dl-space-space-threeunits)',
          paddingRight: 'var(--dl-space-space-threeunits)',
          paddingBottom: 'var(--dl-space-space-twounits)',
          justifyContent: 'space-between',
          backgroundColor: '#6890F8',
        }}
      >
        <span
          style={{
            color: 'rgb(255, 255, 255)', //ช่องว่าง
            width: 'auto',
            zIndex: '100',
            fontSize: '1.7rem',
            alignSelf: 'center',
            textAlign: 'center',
            fontWeight: '900',
          }}
        ></span>
        <img
          alt="WhiteLogo"
          src={logo} //logo
          style={{
            width: '250px',
            height: '100px',
            objectFit: 'cover',
          }}
        />
        <input
          type="text"
          placeholder="Search" //ค้นหา
          style={{
            width: '531px',
            height: '40px',
            backgroundColor: '#d9d9d9',
          }}
        />
        <img
          alt="WhiteBell" //แจ้งเตือน
          src={bell}
          style={{
            width: '40px',
            height: '40px',
            objectFit: 'cover',
          }}
        />
        <span
          style={{
            color: 'rgb(255, 255, 255)', //หมวดหมู่
            width: 'auto',
            zIndex: '100',
            fontSize: '1.7rem',
            alignSelf: 'center',
            textAlign: 'center',
            fontWeight: '900',
          }}
        >
          หมวดหมู่
        </span>
        <ButtonUser/>
        <span
          style={{
            color: 'rgb(255, 255, 255)', //ช่องว่าง
            width: 'auto',
            zIndex: '100',
            fontSize: '1.7rem',
            alignSelf: 'center',
            textAlign: 'center',
            fontWeight: '900',
          }}
        ></span>
        <p>
          
        </p>
      </header>  
    </div>
  )
}

export default NavBar