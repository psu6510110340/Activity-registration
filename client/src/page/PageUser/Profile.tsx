import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import NavBarDetile from '../../components/NavBarDetile';
import './Profile.css'

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
    <div className='color'>
    <NavBarDetile />
      <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 913,marginTop:'-12%' }}>
        <Paper
          sx={{
            p: 2,
            margin:'auto' ,
            maxWidth: 350,
            flexGrow: 1,
            backgroundColor:'hsl(224, 100%, 92%)',
          }}
          elevation={0}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 350, height: 350 }}>
                <Img alt="complex" src="/UserMock.png" />
              </ButtonBase>
            </Grid>

            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" >
                <Grid item xs>
                    <Grid>
                      {userData && <div style={{ fontSize: '50px',display: 'flex', alignItems: 'center', justifyContent: 'center', }}> {userData.username}</div>}
                    </Grid>
                    <div className='body1'>
                      <a className= "my_button1" href='http://localhost:3000/status'>ตรวจเช็คสถานะ</a>
                    </div>
                </Grid>
              </Grid>
              </Grid>
            </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default ComplexGrid