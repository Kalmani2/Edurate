import React from 'react';
import './navStyle.css';
import { Link } from "react-router-dom";

const Navbar = ({ page }) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">Your Logo</div>
        <div className="spacer"></div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/CourseUnit">Course Units</Link>
          <Link to="/Lecturers">Lecturers</Link>
        </div>
        <div className="spacer"></div>
        <div className="login-button">
            <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;