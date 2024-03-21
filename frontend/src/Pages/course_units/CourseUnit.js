import React from 'react';
import HomeNavbar from '../../components/HomeNavbar';
import './courseUnitStyle.css';
import { Link } from "react-router-dom";

const CourseUnit = () => {
  return (
    <div>
       <HomeNavbar />
       <div className='home-container'>
        <h1>EDURATE</h1>
       </div>
    </div>
  )
}

export default CourseUnit