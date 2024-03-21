import React from 'react';
import './navStyle.css';
import { Link } from "react-router-dom";

const HomeNavbar = ({ page }) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">Your Logo</div>
        <div className="spacer"></div>
        <div className="login-button">
            <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;