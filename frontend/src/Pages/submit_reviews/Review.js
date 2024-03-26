import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import './reviewStyle.css';
import { checkForToxicity } from '../../functions.js';

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setShowDropdown(true);
  };

  return (
    <div className='dropdown-container'>
      <h2 className='dropdown-label'>Review:</h2>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="Lecturer">Lecturer</option>
        <option value="Course Unit">Course Unit</option>
      </select>
      {selectedOption && showDropdown && (
        <div>
          {selectedOption === 'Lecturer' ? (
            <div>
              <h3 className='dropdown-label'>Select the Lecturer:</h3>
              <select>
                <option>Lecturer 1</option>
                <option>Lecturer 2</option>
                <option>Lecturer 3</option>
              </select>
            </div>
          ) : (
            <div className='dropdown-label'>
              <h3>Select the Course Unit:</h3>
              <select>
                <option>COMP15111</option>
                <option>COMP12111</option>
                <option>COMP10120</option>
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Review = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Rating:', e.target.rating.value);
    console.log('Review:', e.target.review.value);
  };

  return (
    
    <div>
      <Navbar />
      <div className='review-container'>
        <h1>SUBMIT REVIEW</h1>
      </div>
      <DropdownMenu />
      <form id="myForm" onSubmit={(event) => {event.preventDefault(); checkForToxicity(event);}}>

        <div className='form-container'>
          <div className='rating-submission-container'>
            <label htmlFor="rating" className='rating-submission'>Enter rating: </label>
            <input
              type="number"
              id="rating"
              name="rating"
              required
            />
          </div>
          <div className='review-submission-container'>
            <div className='review-submission'>
              <label htmlFor="review">Enter review: </label>
              <textarea
                id="review"
                name="review"
                required
              />
            </div>
          </div>
        </div>
        <div className='submit-button-container'>
          <button type="submit" className='submit-button'>Submit Review</button>
        </div>
      </form>
    </div>
  );
};

export default Review;