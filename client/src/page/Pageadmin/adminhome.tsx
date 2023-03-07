import { count } from 'console'
import React from 'react'
import Button from "@mui/material/Button";
import NavbarAdmin from '../../components/NavBarAdmin'
import Fixdisplay from '../../components/Body/fixdisplay'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FooterBar from '../../components/FooterBar';
import { Link } from "react-router-dom";

const adminhome = () => {
  return (
    <div> 
        <NavbarAdmin/>

        <Link to='/adminForm'>
          <Button sx={{margin: '1% auto 1% 87%',width: '150px', hight: '15px', fontWeight: '900', fontSize: '1.0rem',
            '&:hover': {
              background: '#1976D2', color: 'white'
            }}}
            variant="outlined"
          >
            สร้างกิจกรรม
          </Button>
        </Link>

        <Box
        sx={{
          margin: '0% 10% 3% 10%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#1976D2',
          padding: '0.7rem',
          borderRadius: '1rem',
        }}
        >
        <Typography component="h1" variant="h5" sx={{ color: 'white', fontWeight: '900' }}>
          กิจกรรม
        </Typography>
      </Box>
        <Fixdisplay/>
      <FooterBar />
    </div>
  )
}

export default adminhome