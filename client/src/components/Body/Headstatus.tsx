import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const getUserData = () => {
    const stringfiedUser = localStorage.getItem('user') || '';
    if (stringfiedUser) {
      return JSON.parse(stringfiedUser);
    }
    return false;
  };

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const ComplexGrid = () => {
    const userData = getUserData();
  return (
    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 200 }}>
        <Paper
        sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
        elevation={0}
        >
        <Grid container spacing={2} >
            <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="complex" src="/UserMock.png" />
            </ButtonBase>
            </Grid>
            
            <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        <Grid>
                            {userData && <div style={{ fontSize: '32px' }}> {userData.username}</div>}
                        </Grid>
                    </Typography>
                <Typography variant="subtitle1" component="div">
                --------------------------------------------------
                </Typography>
                <Typography variant="body2" gutterBottom>
                    กิจกรรมที่เข้าร่วม 
                </Typography>
                <Typography variant="body2" >
                    รอดำเนินการ กำลังตรวจสอบ
                </Typography>
                </Grid>
            </Grid>
            <Grid item sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            </Grid>
            </Grid>
        </Grid>
        </Paper>
    </Grid>
  );
}

export default ComplexGrid