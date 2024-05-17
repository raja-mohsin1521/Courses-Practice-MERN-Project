import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <>
      <Navigation>
        <div className='logo'>
          <img src="" alt="Logo" />
        </div>
        <div className='navLinks'>
          <NavLink className='link' to='/'>Home</NavLink>
          <NavLink className='link' to='/shop'>Shop</NavLink>
          <NavLink className='link' to='/about'>About</NavLink>
          <NavLink className='link' to='/contact'>Contact Us</NavLink>
          <NavLink className='link' to='/login'>Login</NavLink>
          <NavLink className='link' to='/Signup'>Signup</NavLink>
        </div>
      </Navigation>
    </>
  )
}

const Navigation = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  height: 8vh;

  .logo {
    width: 30%;
  }

  .navLinks {
    margin-left: auto;
    display: flex;
    justify-content: space-around;
    width: 50%; 
    margin-right: 50px;
  }
.active{
  font-weight: bold;
  
}
  .link {
    text-decoration: none;
    font-size: large;
    color: #000;
    transition: all 0.2s;

    &:hover {
      color: #007bff;
    }
  }
`

export default Navbar
