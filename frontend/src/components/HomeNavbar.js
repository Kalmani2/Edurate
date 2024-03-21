import React from 'react';
import './navStyle.css';
import react_logo from './react_logo.png';
import { Link } from "react-router-dom";

const HomeNavbar = ({ page }) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div>
          <img src={react_logo} alt="Logo" className="logo"/>
        </div>
        <div className="spacer"></div>
        <div className='login-box'>
            <Link to="/" className='login-button'>LOGIN</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;