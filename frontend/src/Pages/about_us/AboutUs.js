import React from 'react';
import Navbar from '../../components/Navbar';
import guy from '../../components/guy.jpg';
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
            <p>Saleh Al Zayer | Conor Bourne | Muhammad Kalmani | Hamza Khan | Leo Makhnovskiy</p>
            <h1>CONTACTS</h1>
            <p>sample@email.com</p>
        </div>
        <img src={guy} alt="This is a picture of us" className='group-picture'/>
    </div>
  );
};

export default AboutUs;