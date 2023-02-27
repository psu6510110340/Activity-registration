import Navbar from '../../components/Body/StatusNavbar';
import React from 'react';
import CardLog from '../../components/Body/Popupcard';

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
    <div>
      <Navbar />
    </div>
  );
};

export default Profile;
