import React from 'react';
import Navbar from '../../components/Navbar';
import group_picture from '../../components/group_photo.jpg';
import './aboutStyle.css';

const AboutUs = () => {
  return (
    <div>
        <Navbar />
        <div className="about-us-container">
            <h1>ABOUT US</h1>
            <p>
            Welcome to Edurate! We are a group of students from the University of Manchester
            and we created Edurate for our First Year Team Project module coursework. 
            </p>
            <p>
            Our focus is to create a centralized platform for students to be able to honestly 
            rate and review the lecturers and course units at The University of Manchester.
            </p>
            <h2>OUR TEAM</h2>
            <p>Saleh Alzayer | Conor Bourne | Muhammad Kalmani | Hamza Khan | Ayush Kumar | Leo Makhnovskiy</p>
            <h2>CONTACT</h2>
            <p>edurate_team@gmail.com</p>
        </div>
        <div className='picture-container'>
          <img src={group_picture} alt="This is a picture of us" className='group-picture'/>
        </div>
    </div>
  );
};

export default AboutUs;