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

const NavBar = () => {
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
        backgroundColor: '#D9D9D9',
      }}
    >
      <header
        data-role="Header"
        style={{
          width: '100%',
          height: '97px',
          display: 'flex',
          maxWidth: '100%',
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
        <img
          alt="WhiteLogo"
          src="/image/WhiteLogo.png"
          style={{
            width: 'var(--dl-size-size-xxlarge)',
            height: '79px',
            objectFit: 'cover',
          }}
        />
        <input
          type="text"
          placeholder="Search"
          style={{
            width: '531px',
            height: '46px',
            backgroundColor: '#d9d9d9',
          }}
        />
        <img
          alt="WhiteBell"
          src="../image/WhiteBell.png"
          style={{
            width: '46px',
            height: '46px',
            objectFit: 'cover',
          }}
        />
        <span
          style={{
            color: 'rgb(255, 255, 255)',
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
        <button
          style={{
            color: 'var(--dl-color-gray-black)',
            width: '199px',
            height: '64px',
            position: 'relative',
            boxShadow: '5px 5px 10px 0px #7c7c7c',
            textAlign: 'center',
            textTransform: 'capitalize',
          }}
        >
          <Link href="../login" >
            <h1
              style={{
                top: '0px',
                left: '0px',
                color: 'rgb(53, 58, 104)',
                right: '0px',
                width: 'auto',
                bottom: '0px',
                height: '38px',
                margin: 'auto',
                position: 'absolute',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  fontWeight: '700',
                }}
              >
                Login
              </span>
              <br></br>
            </h1>
          </Link>
        </button>
      </header>
      <div
        style={{
          width: '100%',
          height: '370px',
          display: 'flex',
          position: 'relative',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div
          style={{
            flex: '0 0 auto',
            width: '138px',
            border: '2px dashed rgba(120, 120, 120, 0.4)',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}
        ></div>
        <div
          style={{
            flex: '0 0 auto',
            width: '138px',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}
        >
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '73px',
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            flex: '0 0 auto',
            width: '138px',
            border: '2px dashed rgba(120, 120, 120, 0.4)',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}
        ></div>
        <label
          style={{
            width: 'var(--dl-size-size-maxwidth)',
            fontSize: '2rem',
            alignSelf: 'center',
            boxShadow: 'rgb(124, 124, 124) 5px 5px 10px 0px',
            fontStyle: 'normal',
            textAlign: 'center',
            fontWeight: '900',
            borderColor: 'var(--dl-color-gray-black)',
            borderWidth: '1px',
            backgroundColor: 'rgb(255, 255, 255)',
          }}
        >
          <span>ข่าวสาร</span>
          <br></br>
        </label>
        <div
          style={{
            flex: '0 0 auto',
            width: '136px',
            border: '2px dashed rgba(120, 120, 120, 0.4)',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}
        ></div>
      </div>
      <div
        style={{
          width: '100%',
          border: '2px dashed rgba(120, 120, 120, 0.4)',
          height: '33px',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      ></div>
      <footer
        style={{
          width: '100%',
          height: '72px',
          display: 'flex',
          maxWidth: 'var(--dl-size-size-maxwidth)',
          alignItems: 'center',
          paddingTop: 'var(--dl-space-space-twounits)',
          paddingLeft: 'var(--dl-space-space-threeunits)',
          paddingRight: 'var(--dl-space-space-threeunits)',
          paddingBottom: 'var(--dl-space-space-twounits)',
          justifyContent: 'space-between',
          backgroundColor: '#6890F8',
        }}
      >
        <div
          style={{
            flex: '0 0 auto',
            width: '200px',
            border: '2px dashed rgba(120, 120, 120, 0.4)',
            height: '100px',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}
        ></div>
        <span>Contact :</span>
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-2yqg-200h.png"
        />
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-epx4-200h.png"
        />
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-92fk-200h.png"
        />
      </footer>
    </div>
  )
}

export default NavBar