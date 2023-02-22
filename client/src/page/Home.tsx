import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import FooterBar from '../components/FooterBar';
import { Box, CardMedia, Slider, Typography } from '@mui/material';
import firstImage from '../image/ไม่ยากถ้าอยากรู้จัก TPM.jpg';
import secondImage from '../image/ไม่ยากถ้าอยากรู้จัก TPM.jpg';
import thirdImage from '../image/Falling in Food With Shadow.png';
import { Label } from '@mui/icons-material';

const images = [firstImage, secondImage, thirdImage];

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
      <Box sx={{ width: '40%', margin: '0 auto' }}>
      < CardMedia
            component = "img"
            height="50px"
            image={images[slideIndex]}
            alt = "image"
            sx={{ maxWidth: '100%', height: 'auto' }}
          />
        <Box sx={{ width: 300 }}>
        </Box>
      </Box>
      <FooterBar />
    </div>
  );
};

export default Home;