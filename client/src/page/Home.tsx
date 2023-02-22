import React from 'react'
import Navbar from '../components/NavBar';
import FooterBar from '../components/FooterBar';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div
      >
        <label
          style={{
            width: 'var(--dl-size-size-maxwidth)',
            fontSize: '2rem',
            alignSelf: 'center',
            fontStyle: 'normal',
            textAlign: 'center',
            fontWeight: '900',
            borderColor: 'var(--dl-color-gray-black)',
            borderWidth: '1px',
            backgroundColor: 'rgb(255, 255, 255)',
          }}
        >
          <span>ข่าวสาร</span>
          <br></br>
        </label>
      </div>
      <FooterBar/>
    </div>
  )
}

export default Home