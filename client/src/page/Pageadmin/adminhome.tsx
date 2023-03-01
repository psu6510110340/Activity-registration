import { count } from 'console'
import React from 'react'
import { Button } from 'react-bootstrap'
import NavbarAdmin from '../../components/NavBarAdmin'

const adminhome = () => {
  return (
    <div> 
        <NavbarAdmin/>
        <Button href='/adminForm'>สร้างกิจกรรม</Button>
    </div>
  )
}

export default adminhome