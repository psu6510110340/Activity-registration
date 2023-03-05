import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const CardStatus = () => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 750,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                รายการกิจกรรม
              </Typography>
              <Typography variant="body2" gutterBottom>
                กิจกรรม..............
              </Typography>
              <Typography variant="body2" color="text.secondary">
                กิจกรม..............
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
                Status
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CardStatus