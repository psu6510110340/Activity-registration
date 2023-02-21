import Grid from '@mui/material/Grid';
import Navbar from '../components/Body/StatusNavbar';
import ComplexGrid from '../components/Body/Headstatus';
import CardStatus from '../components/Body/UserStatusCard';
import Logout from './Logout';
import { Button } from 'react-bootstrap';
import Link from '@mui/material/Link';
import CardLog from '../components/Body/Popupcard';


const getUserData = () => {
  const stringfiedUser = localStorage.getItem('user') || '';
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};

const Status = () => {
  const userData = getUserData();
  if (!userData) {
    return (
      <div>
        <CardLog/>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Navbar />
        <ComplexGrid />
        <CardStatus/>
        <Button>
          <Link href="/logout" variant="body2">
            Logout
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Status;
