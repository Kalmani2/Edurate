import React from 'react';
import Navbar from '../../Components/Navbar';

const Review = () => {
  // Function to handle form submission (you can replace the console.log with your logic)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Rating:', e.target.rating.value);
    console.log('Review:', e.target.review.value);
    // Add your logic to handle the data (e.g., send it to a server, store in state, etc.)
  };

  return (
    
    <div>
      <Navbar />
      <h1>Review Form</h1>
      <form onSubmit={handleSubmit}>
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