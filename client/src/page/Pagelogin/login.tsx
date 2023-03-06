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
import { useState,useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { storeUser } from '../../helper';
import logo from '../../image/logo.png';
import backgroundImage from '../../image/PSU.jpg';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';


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
      if (isValidEmail && user.password ) {
        const url = "http://localhost:1337/api/auth/local"
        try {
          const { data } = await axios.post(url, user)
          console.log(data)
          if (data.jwt) {
            Swal.fire({
              icon: 'success',
              title: 'ล็อคอินสำเร็จ',
              text: 'ยินดีต้อนรับสู่ TakeCamp'
            })
            storeUser(data)
            toast.success('Login successful', {
              hideProgressBar: true
            })
            setUser(initialUser)
            navigate('/Checkadmin')
          }
        } catch (err) {
          Swal.fire({
            icon: 'error',
            title: 'ล็อคอินผิดพลาด',
            text: 'กรุณาตรวจสอบ email หรือ password ของท่าน'
          })
          toast.error("Invalid email or password", {
            hideProgressBar: true
          })
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'ล็อคอินผิดพลาด',
          text: 'กรุณาตรวจสอบ email หรือ password ของท่าน'
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

    useEffect(() => {
      localStorage.removeItem('user')
  })
  
    return (
      <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '0vh' }}></Grid>
      <Box
      
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '90vh',
          backgroundImage: `url(${backgroundImage})`,// กำหนดพื้นหลังเป็นรูปภาพ
            backgroundSize: 'cover', // ปรับขนาดภาพให้เต็มพื้นที่
            backgroundPosition: 'center', // กำหนดตำแหน่งภาพให้อยู่ตรงกลาง // กำหนดความสูงเท่ากับความสูงของหน้าจอ
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: '1rem',
            borderRadius: '0.5rem',
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
          </Box>
      </ThemeProvider>
    );
    }
