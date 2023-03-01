import { count } from 'console'
import React from 'react'
import { Button } from 'react-bootstrap'
import Navbar from '../../components/NavBar'

const adminhome = () => {
  return (
    <div> 
        <Navbar/>
        <Button href='/adminForm'>สร้างกิจกรรม</Button>
    </div>
  )
}

export default adminhome