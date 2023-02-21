import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FigureImage from 'react-bootstrap/FigureImage'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import logo from '../image/logo.png';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Take Camp
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const initialUser = { email: '', password: '', username: '' };

export default function RegisterPage() {
    const [user, setUser] = useState(initialUser)
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)

    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(user);
        if (!user.email || !user.password || !user.username || !confirmPassword) {
          Swal.fire({
            icon: 'error',
            title: 'ข้อมูลผิดพลาด',
            text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
          });
          return;
        }
        
        if (user.password !== confirmPassword) {
          toast.error("Passwords do not match", {
            hideProgressBar: true
          })
          Swal.fire({
            icon: 'error',
            title: 'ข้อมูลผิดพลาด',
            text: 'รหัสผ่านไม่เหมือนกัน',
          })
          return;
        }
        
        const url = "http://localhost:1337/api/auth/local/register";
        try {
          if (user.email && user.password && user.username) {
            const res = await axios.post(url, user)
            console.log(res.data)
            Swal.fire({
              icon: 'success',
              title: 'สำเร็จ',
              text: 'การลงทะเบียน'
            })
            navigate('/login', { replace: true })
          } 
      }catch(err) {
        toast.error("Invalid email or password", {
          hideProgressBar: true
        })
      }}

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'ConfirmPassword') {
            setConfirmPassword(value);
        } else {
            setUser({
              ...user,
              [name]: value,
            });
        }
      };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={3.5}
          sx={{
            backgroundImage: 'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUTITEhJSkrOjo6Fx8/ODMtNyg5LjcBCgoKDQ0NFQ0PDy0ZFRkrKy0rLSsrKysrLSsrKys3Ky0rKzctLS0tKy0rKzcrLS03LTctLSstNy0rLS0tLS0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAAIDBAf/xAAYEAEBAQEBAAAAAAAAAAAAAAAAARESAv/EABgBAQEBAQEAAAAAAAAAAAAAAAEAAgYF/8QAGBEBAQEBAQAAAAAAAAAAAAAAABEBEgL/2gAMAwEAAhEDEQA/APnfmOkg8xuOgzHgbpjUEajTGqFQxpnSkSyikkiiQCigkUgkUUCigCkEkUgkUjRiIBqxWIjWs1mxmt1miNZrFjFdKzYzGq53ymyzGnkkaikakbW6pGooSwoUWhqKJZSKQWFFIHCiEiUKEUgkUkDhSARxJJYUkMDSBZxUiogY0sBxjGbHSs1mN1zTWIRp5pGpBGpDmLdWNKQtM1QowgHCkEcWHCKsWHDiFGFYcIoJxILFhWJAlIBFJJJJJFJBEA0BrAlRiqxAis2Ns2BqsJvEI08sjUUhJ3UVI0WRhw4SBhw4cQEOHDCKFhKAwnDhFZw4cOIVnDhwpVnE0kGVjSSZxY0kgikmUUCBjSxFkY3gwFnBY3iwNOaawJV5mpBGk0jFCQpDIoSEUUysKkOEI4jiFBwnCAsaxYhRixrFiVZxY1gxCjFhSNZTSSZJQQwNYsRGDGsWAsrGsWIs4Maw2BvGMTWIF44YCUYUSEYjEyijCFCjEEUSFI1IjEypDhhxJnFjWJJnBjWJBnA0EgikQsaSQRwhoYGog0KMKBwRYiNbxjCUE8MMRbChUMQUagJZTQhIJBiBMUKZMMDUQMawQpLAQkBSCECkgikQUgUokDhFIDVWBBKpDRojWadiZQh6eWNCGNLTDFCQjFCmUUiDClEDDESE0CmTCEkUEkkkggUiEQkkkkkkCgkGkEEkKgGggUnCNQRotIqGFlFYcQRRwgGIoKFFBGIkJIoJJJJJBBFYkEQiEUkEQiERgIFIqTINAOBJBpzjUikakaWrDikOEVYcUjUiZrOHGpDiFZkONSHCKzixrFiFGHDhxCs4caxSJDFjWKRFnFjeLkKMYsb5XKMYwY6YsSjnixuxYg54sdORyi54sb5WAudjOOtjNiTlYLHSxiwHNYTWJNMSNyDy3IRuiRqQyNSNM1mRqRqeW55SYnkzy6crkKMTyeXTk8qqOXK5duVyqN8uOHl04PJEc55XLryZ5FMc+TPLrPKnkNRz5XLryeVTHHlcu3K5VMceVy7crkVRw4XLtyuTRy4crl2vkcpRx5F8u18jkKON8s3y7WMYRuONjFjvY52IOWJvEi4+XTyksXp08xqQostTy3IkG8a5M8pAtTyZEkWp5XKSMXK5STMPJ5SRhnlYkkcOJBpcrEkVysSQXI5CSV8jlJAcs3ykkzY5+oUmdc7HOwosa56kiX//2Q==)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={10} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 6,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
                <FigureImage width={300} height={300} src={logo} alt="Logo" />
                <Box height={20} />
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
            </Box>
            <Box component="form" noValidate onSubmit={handleSignup} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    onChange={handleChange}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="ConfirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="ConfirmPassword"
                    autoComplete="current-password"
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    สมัครสมาชิก
                </Button>
                <Grid container>
                  <Grid item xs>
                  </Grid>
                  <Grid item>
                    <Link href="login" variant="body2">
                      {"เข้าสู่ระบบ"}
                    </Link>
                  </Grid>
                </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
