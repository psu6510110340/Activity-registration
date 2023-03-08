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
import NavBaradmin from '../../components/NavBarAdmin';
import "./Admincheck.css"
import conf from '../../conf';

const Admincheck = () => {
  const [registrants, setRegistrants] = useState([]);
  const { id } = useParams();
  console.log(id)
  const [userresult, setUserResult] = useState<MDAC[]>([]);
  const fetchData = async () => {
    try {
      const data = await fetch(
        `${conf.apiPrefix}/api/statuses?filters[ActivityID]=${id}`
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
      <NavBaradmin/>
      <h2 className='Register'>รายชื่อผู้เข้าร่วมกิจกรรม</h2>
      {userresult.length === 0 ? (
        <p>ขณะนี้ยังไม่มีผู้เข้าร่วมกิจกรรม</p>
      ) : (
        <>
          <h3 className='Activity'>ชื่อกิจกรรม: {userresult[0].attributes.title}</h3>
          <h3 className='Number'>จำนวนผู้เข้าร่วม: {userresult.length} คน</h3>
          {userresult.map((item,index) => (
            <Card key={index}>
              <CardContent>
                <h2 className='user'>ผู้สมัคร : {item.attributes.Username}</h2>
                <p className='time'>เวลาลงทะเบียน: {item.attributes.createdAt.toString().slice(0,10)} Time: {item.attributes.createdAt.toString().slice(11,16)}</p>
              </CardContent>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};

export default Admincheck;