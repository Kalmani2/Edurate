import React from 'react';
import HomeNavbar from '../../components/HomeNavbar';
import './lecturersStyle.css';
import { Link } from "react-router-dom";

const Lecturers = () => {
  return (
    <div>
       <HomeNavbar />
       <div className='home-container'>
        <h1>LECTURERS</h1>
       </div>
    </div>
  )
}

export default Lecturers