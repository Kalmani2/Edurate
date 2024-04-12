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

       <div class="lecturer-viewing-options-container">
        <div class="drop-down-container">
          <label class="lecturer-label" for="dropdown"><b>SORT BY:</b></label>
            <select class="lecturer-select" id="dropdown" name="sorting">
            <option value="rating">RATING</option>
            <option value="ascending">A TO Z</option>
            <option value="descending">Z TO A</option>
            </select>
        </div>
        <input type="text" placeholder="Search lecturers..."></input>
       </div>

       <div class="lecturer-container">
        <div class="lecturer">
            <h3>Somebody1</h3>
            <p>Some description</p>
            <button class="info-button" onclick="showInfo('Somebody1')">More Info</button>
        </div>
        <div class="lecturer">
            <h3>Somebody2</h3>
            <p>Some description</p>
            <button class="info-button" onclick="showInfo('Somebody2')">More Info</button>
        </div>
       </div>

    </div>

    
  )
}

export default Lecturers;