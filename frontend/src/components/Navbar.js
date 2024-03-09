import React, { useState } from 'react'
import './navStyle.css';
import { Link } from "react-router-dom";

const Navbar = () => {

  return (<nav>
    <div className='nav-logo-container'>

    </div>
    <div className='navbar-links-container'>
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About</Link>
        <Link to="/">Contacts</Link>
        <Link to="/">Login</Link>
    </div>
    <div className='navbar-menu-container'>
    </div>
  </nav>)
}

export default Navbar
