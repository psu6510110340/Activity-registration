import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import {useEffect } from 'react';
import './Announcement.css';

const Announcement = () => {
  useEffect(() => {
    localStorage.removeItem('user')
})
  return (
      <div>
      <Grid className="grid-container" >
          <text className='text'>TakeCamp </text>
        <Link href="Home" variant="body2">
          <a className='button' href='http://localhost:3000/Home'>เข้าสู่เว็บไซต์</a>
        </Link>
      </Grid>
      </div>
  )
}

export default Announcement