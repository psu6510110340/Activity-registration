import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FigureImage from 'react-bootstrap/FigureImage'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import logo from '../../image/logo.png';
import backgroundImage from '../../image/PSU.jpg';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';

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

        if (!user.email || !/@(email\.psu\.ac\.th|psu\.ac\.th)$/.test(user.email)) {
          Swal.fire({
            icon: 'error',
            title: 'ข้อมูลผิดพลาด',
            text: 'กรุณากรอกอีเมล์ PSU',
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
    const email = (event: { target: { name: string; value: string; }; }) => {
        setUser({ ...user, [event.target.name]: event.target.value });      
        // Automatically append "@psu.ac.th" to email if it doesn't already have it
        if (
          event.target.name === "email" &&
          !event.target.value.endsWith("@psu.ac.th")
        ) {
          setUser({
            ...user,
            [event.target.name]: `${event.target.value}@psu.ac.th`,
          });
        }
      };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '0vh' }}></Grid>
      <Box
      
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
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
                <Box height={5} />
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
                    InputProps={{endAdornment: <InputAdornment position="end">@psu.ac.th</InputAdornment>,}}
                    onChange={email}
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
        </Box>
    </ThemeProvider>
  );
}
