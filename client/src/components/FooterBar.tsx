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
import facebook from '../image/Facebook.png';
import line from '../image/Line.png';
import instagram from '../image/Instagram.png';

const FooterBar = () => {
  return (
    <footer
        style={{
          width: '100%',  //แถบฟุตเตอร์บาร์
          height: '72px',
          display: 'flex',
          maxWidth: 'var(--dl-size-size-maxwidth)',
          boxShadow: 'rgb(124, 124, 124) 0px 0px 10px 5px',
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
            width: '900px',
            zIndex: '100',
            fontSize: '1.7rem',
            alignSelf: 'center',
            textAlign: 'center',
            fontWeight: '900',
          }}
        ></span>
        <span
          style={{
            color: 'rgb(255, 255, 255)', //Contact
            width: 'auto',
            zIndex: '100',
            fontSize: '1.7rem',
            alignSelf: 'center',
            textAlign: 'center',
            fontWeight: '700',
          }}
        >
          Contact :
        </span>
        <img
          alt="Facebook"
          src={facebook}
          style={{
            width: '40px',
            height: '40px',
            objectFit: 'cover',
          }}
        />
        <img
          alt="Line"
          src={line}
          style={{
            width: '40px',
            height: '40px',
            objectFit: 'cover',
          }}
        />
        <img
          alt="Instagram"
          src={instagram}
          style={{
            width: '40px',
            height: '40px',
            objectFit: 'cover',
          }}
        />
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
      </footer>
  )
}

export default FooterBar