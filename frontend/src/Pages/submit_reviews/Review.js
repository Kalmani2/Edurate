import React from 'react';
import Navbar from '../../components/Navbar';
import { checkForToxicity } from '../../functions.js';

const Review = () => {
  // Function to handle form submission (you can replace the console.log with your logic)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Rating:', e.target.rating.value);
    console.log('Review:', e.target.review.value);
  };

  return (
    
    <div>
      <Navbar />
      <h1>Review Form</h1>
      <form id="myForm" onSubmit={(event) => {event.preventDefault(); checkForToxicity(event);}}>
        <div>
          <label htmlFor="rating">Enter rating: </label>
          <input
            type="number"
            id="rating"
            name="rating"
            required
          />
        </div>
        <div>
          <label htmlFor="review">Enter review: </label>
          <textarea
            id="review"
            name="review"
            required
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Review;