import NavBar from '../../components/NavBar';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import MDAC from '../../Models/ModelsActivity';
import Repo from '../../Repository';
import ReactMarkdown from 'react-markdown';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';

const Admincheck = () => {
  const [registrants, setRegistrants] = useState([]);
  const { id } = useParams();
  const [userresult, setUserResult] = useState<MDAC[]>([]);
  

  useEffect(() => {
    const fetchRegistrants = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/statuses?ActivityID=${id}`);
        setRegistrants(response.data.map((item: { Username: string }) => ({ Username: item.Username }))
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchRegistrants();
  }, [id]);

  return (
    <div>
      <h2>รายชื่อผู้เข้าร่วมกิจกรรม</h2>
      <p>test0</p>
      <p>test1</p>
    </div>
  );
};

export default Admincheck;