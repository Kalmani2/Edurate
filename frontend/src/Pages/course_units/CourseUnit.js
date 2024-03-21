import React from 'react';
import Navbar from '../../components/Navbar';
import './courseUnitStyle.css';
import { Link } from "react-router-dom";

const CourseUnit = () => {
  return (
    <div>
       <Navbar />
       <div className='home-container'>
        <h1>COURSE UNITS</h1>
       </div>
    </div>
  )
}

export default CourseUnit