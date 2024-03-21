import React from 'react';
import HomeNavbar from '../../components/HomeNavbar';
import './homeStyle.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
       <HomeNavbar />
       <div className='home-container'>
        <h1>EDURATE</h1>
        <p>DETAILED REVIEWS AND DISCUSSIONS OF LECTURERS AND COURSE UNITS</p>
       </div>
       <div className="button-container">
        <Link to="/CourseUnit" className="button">Course Units</Link>
        <Link to="/lecturers" className="button">Lecturers</Link>
       </div>
       <div className='about-container'>
        <Link to="/aboutus" className="about-button">About Us</Link>
       </div>
    </div>
  )
}

export default Home