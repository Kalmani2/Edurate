import React from 'react';
import Navbar from '../../components/Navbar';
import './lecturersStyle.css';
import { Link } from "react-router-dom";

const Lecturers = () => {
  return (
    <div>
       <Navbar />
       <div className='home-container'>
        <h1>LECTURERS</h1>
       </div>
    </div>
  )
}

export default Lecturers