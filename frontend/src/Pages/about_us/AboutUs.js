import React from 'react';
import Navbar from '../../components/Navbar';
import './aboutStyle.css';

const AboutUs = () => {
  return (
    <div>
        <Navbar />
        <div className="about-us-container">
            <h1>ABOUT US</h1>
            <p>
            Welcome Edurate! We are a group of students from the University of Manchester
            and created Edurate as our First Year Team Project module coursework. 
            </p>
            <p>
            Our focus is to be able to create a centralized platform for
            students to be able to honestly rate, review, and discuss lecturers
            and course units as offered by the university.
            </p>
            <h2>OUR TEAM</h2>
            <p>Saleh Al Zayer</p>
            <p>Conor Bourne</p>
            <p>Muhammad Kalmani</p>
            <p>Hamza Khan</p>
            <p>Ayush Kumar</p>
            <p>Leo Makhnovskiy</p>
        </div>
    </div>
  );
};

export default AboutUs;