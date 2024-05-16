import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
   <li> <NavLink  to='/'>Home</NavLink></li>
   <li> <NavLink  to='/contact'>Contact</NavLink></li>
   <li> <NavLink  to='/Signup'>Signup</NavLink></li>

    </>
  )
}

export default Navbar
