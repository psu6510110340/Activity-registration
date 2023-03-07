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
  console.log(id)
  const [userresult, setUserResult] = useState<MDAC[]>([]);
  const fetchData = async () => {
    try {
      const data = await fetch(
        `http://localhost:1337/api/statuses?filters[ActivityID]=${id}`
      );
      if (data) {
        const data1 = await data.json();
        console.log(data1);
        setUserResult(data1.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>รายชื่อผู้เข้าร่วมกิจกรรม</h2>
      {userresult.length === 0 ? (
        <p>ขณะนี้ยังไม่มีผู้เข้าร่วมกิจกรรม</p>
      ) : (
        <>
          <h3>ชื่อกิจกรรม: {userresult[0].attributes.title}</h3>
          <h3>จำนวนผู้เข้าร่วม: {userresult.length} คน</h3>
          {userresult.map((item,index) => (
            <Card key={index}>
              <CardContent>
                <h2>ชื่อผู้ใช้งาน: {item.attributes.Username}</h2>
                <p>เวลาลงทะเบียน: {item.attributes.createdAt}</p>
              </CardContent>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};

export default Admincheck;