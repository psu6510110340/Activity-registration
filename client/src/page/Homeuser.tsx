import React from 'react'
import Navbar1 from '../components/NavBar1'
import CardLog from '../components/Body/Popupcard';

const getUserData = () => {
  const stringfiedUser = localStorage.getItem('user') || '';
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};

const Homeuser = () => {
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
      <Navbar1/>
    </div>
  );
};

export default Homeuser