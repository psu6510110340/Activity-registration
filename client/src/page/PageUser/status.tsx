import Grid from '@mui/material/Grid';
import NavBarDetile from '../../components/NavBarDetile';
import ComplexGrid from '../../components/Body/Headstatus';
import CardStatus from '../../components/Body/UserStatusCard';
import Logout from '../Pagelogin/Logout';
import { Button } from 'react-bootstrap';
import Link from '@mui/material/Link';
import CardLog from '../../components/Body/Popupcard';


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
        <NavBarDetile />
        <ComplexGrid />
        <CardStatus/>
      </div>
    </div>
  );
};

export default Status;
