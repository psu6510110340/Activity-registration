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
import { storeUser } from '../helper';
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

const initialUser = { identifier: '', password: ''};

export default function SignInSide() {
    const [user, setUser] = useState(initialUser)
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(user);
    
      // Check if the identifier is a valid email format
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.identifier);
    
      // If the identifier is a valid email, proceed with login
      if (isValidEmail && user.password) {
        const url = "http://localhost:1337/api/auth/local"
        try {
          const { data } = await axios.post(url, user)
          console.log(data)
          if (data.jwt) {
            Swal.fire({
              icon: 'success',
              title: 'success',
              text: 'Login successful'
            })
            storeUser(data)
            toast.success('Login successful', {
              hideProgressBar: true
            })
            setUser(initialUser)
            navigate('/Home')
            
          }
        } catch (err) {
          toast.error("Invalid email or password", {
            hideProgressBar: true
          })
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Login false'
        })
        // Display error message if the identifier is not a valid email
        toast.error("Please enter a valid email", {
          hideProgressBar: true
        })
      }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setUser({
      ...user,
        [name]: value,
      });
    };

  
    return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={8}
            md={3}
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
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                  <FigureImage width={300} height={300} src={logo} alt="Logo" />
                  <Box height={0} />
                  <Typography component="h1" variant="h5">
                      เข้าสู่ระบบ
                  </Typography>
              </Box>
              <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="identifier"
                    label="Email Address"
                    name="identifier"
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
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    เข้าสู่ระบบ
                </Button>

                <Grid container>
                  <Grid item xs>
                  </Grid>
                  <Grid item>
                    <Link href="register" variant="body2">
                      {"สมัครสมาชิก"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 4 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
  