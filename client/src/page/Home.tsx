import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/NavBar';
import FooterBar from '../components/FooterBar';
import { Box, CardMedia, Slider, styled, Typography } from '@mui/material';
import firstImage from '../image/ArtActivity.png';
import secondImage from '../image/Asean.png';
import thirdImage from '../image/CoachDigital.png';
import fourthImage from '../image/Council.png';
import fifthImage from '../image/Falling.png';
import sixthImage from '../image/Kahoot.png';
import seventhImage from '../image/Malaysia.png';
import eighthImage from '../image/PSUHealth.png';
import ninethImage from '../image/TPM.png';
import ActivityHomeCard from '../components/ActivityHomeCard';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const images = [firstImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage, seventhImage, eighthImage, ninethImage];

const Home: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setSlideIndex(newValue as number);
  };

      return (
        <div>
          <Navbar />
          <Box sx={{ width: '100%', height: '50%', margin: '0 auto' }}>
            <CardMedia
                component = "img"
                height="550px"
                image={images[slideIndex]}
                alt = "image"
              />
          </Box>
          
          <Box
            sx={{
              margin: '2% 10% 2% 10%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#1976D2',
              padding: '0.7rem',
              borderRadius: '1rem',
            }}
          >
              <Typography component="h1" variant="h5" sx={{ color: 'white', fontWeight: '900' }}>
                  ข่าวสาร
              </Typography>
          </Box>

          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ margin: '50px'}}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} >
                    <Grid item xs={4}>
                      <ActivityHomeCard />
                    </Grid>
                </Grid>
              </Box>
            </Container>
          </React.Fragment>

          <FooterBar />
        </div>
      );
    };

export default Home