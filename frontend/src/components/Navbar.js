import React, { useState } from 'react'
import './navStyle.css';
import { Link } from "react-router-dom";

const Navbar = ({ page }) => {

  return (
  <nav>
    <div className='navbar-links-container'>
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About</Link>
        <Link to="/">Login</Link>
    </div>
  </nav>)
}

export default Navbar
