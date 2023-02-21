import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar sx={{ bgcolor: '#6890F8' }} position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
          <Link href="/homeuser" variant="body2">
            <Button sx={{ flexGrow: 1 , color: '#000000' }}>
              {"<< Back"}
            </Button>
          </Link>
        </Typography>
        <Typography variant="h6" component="div" sx={{ marginLeft: 'auto' }}>
          <Box sx={{ margin: 'auto' }}>
            <img src="/logo2.png" width="140" height="59" />
          </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
