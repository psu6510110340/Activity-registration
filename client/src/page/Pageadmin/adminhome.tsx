import { count } from 'console'
import React from 'react'
import { Button } from 'react-bootstrap'
import NavbarAdmin from '../../components/NavBarAdmin'
import Fixdisplay from '../../components/Body/fixdisplay'
import "./adminhome.css"
const adminhome = () => {
  return (
    <div> 
        <NavbarAdmin/>
        <p className='activity'><Button href='/adminForm'>สร้างกิจกรรม</Button></p>
        <p><h1 className='labelActivityadmin'>กิจกรรม</h1></p>
        <Fixdisplay/>
    </div>
  )
}

export default adminhome