import React from 'react'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
const Admin = () => {
  return (
    <>
      <Navbar navMessage="OEP Admin Dashboard" type="Admin"/> 
      <Login type="Admin"/>
      
    </>
  )
}

export default Admin