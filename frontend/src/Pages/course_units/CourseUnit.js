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

       <div class="courses-viewing-options-container">
        <div class="drop-down-container">
          <label class="course-unit-label" for="dropdown"><b>SORT BY:</b></label>
            <select class="course-unit-select" id="dropdown" name="sorting">
            <option value="rating">RATING</option>
            <option value="ascending">A TO Z</option>
            <option value="descending">Z TO A</option>
            </select>
        </div>
        <input type="text" placeholder="Search courses..."></input>
       </div>

       <div class="course-container">
        <div class="course-unit">
            <h3>COMP16321</h3>
            <p>Introduction to Computer Science</p>
            <button class="info-button" onclick="showInfo('COMP16321')">More Info</button>
        </div>
        <div class="course-unit">
            <h3>COMP10120</h3>
            <p>Foundations of Computation</p>
            <button class="info-button" onclick="showInfo('COMP10120')">More Info</button>
        </div>
       </div>
    
    </div>
  )
}

export default CourseUnit;