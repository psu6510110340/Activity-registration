import React from 'react';
import videoBg from '../assets/videoBg.mp4';
import './Announcement.css'

const Main: React.FC = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
            <a className='button' href='http://localhost:3000/Home'>เข้าสู่เว็บไซต์</a>
        </div>
    </div>
  );
};

export default Main;