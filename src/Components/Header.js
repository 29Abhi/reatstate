import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='main_div' >
     <img src='https://cdn3.vectorstock.com/i/1000x1000/60/87/home-logo-vector-23096087.jpg'  className='logo' />
     <input placeholder='Search your property' />
   
     <NavLink to={"/"} className="home" >
     Home
     </NavLink>
     <NavLink to={"/property"} className="home" >
     Property
     </NavLink>
     <NavLink to={"/register"} className="home" >
     Register
     </NavLink>
     <NavLink to={"/register"} className="home" >
     Login
     </NavLink>
     </div>
     
    </>
  )
}

export default Header