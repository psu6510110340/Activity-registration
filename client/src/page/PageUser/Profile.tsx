import Navbar from '../../components/Body/StatusNavbar';
import CardLog from '../../components/Body/Popupcard';
import Typography from '@mui/material/Typography';
import './Profile.css'
import { AppBar,Container, Toolbar } from '@mui/material';

const getUserData = () => {
  const stringfiedUser = localStorage.getItem('user') || '';
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};

const Profile = () => {
  const userData = getUserData();
  if (!userData) {
    return (
      <div>
        <CardLog/>
      </div>
    );
  }

  return (
    <><div className='backround'>
        <div>
          <Navbar />
          <a className='my_button1'>ตรวจเช็คสถานะ</a>
          <a className='my_button2'>กิจกรรมที่เคยเข้าร่วม</a>
          <div className='Image'></div>
          <div className='line'></div>
          <AppBar position="static"> 
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6" //#1976D2
              noWrap
              component="a"
              sx={{
                margin: '0px 30px 0px 930px', //Contact:
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      </div>
    </div>
    </>
  );
};

export default Profile;
