import { useState, useEffect } from 'react';
import axios from 'axios';
import conf from '../../conf';

interface User {
  id: number;
  username: string;
  email: string;
  role: {
    id: number;
    name: string;
  };
}

const getUserData = () => {
  const stringfiedUser = localStorage.getItem('user') || '';
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};

const checkUserRole = async (token: string): Promise<boolean> => {
  const userData = getUserData();
  try {
    const { data } = await axios.get<User>(`${conf.apiPrefix}/api/users/me?populate=role`, {
        
      headers: { Authorization: `Bearer ${token}` },
    });
// console.log(data)
    if (data.role.name === 'Admin') {
      window.location.href = '/admin';
      return true;
    }else{
      window.location.href = '/Home';
    }
  } catch (error) {
    console.log(error);
    window.location.href = '/Home';
  }
  return false;
};

const Page = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const token = getUserData().jwt
  console.log(token)

  useEffect(() => {
    const token = getUserData().jwt;
    // console.log(token)
    const checkUser = async () => {
      if (token !== '') {
        const isUserAdmin = await checkUserRole(token);
        setIsAuthorized(isUserAdmin);
      } else {
        window.location.href = '/login';
      }
    };
    checkUser();
  }, []);

  return (
    <div>
      {isAuthorized ? (
        <h1>loading...</h1>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default Page;
