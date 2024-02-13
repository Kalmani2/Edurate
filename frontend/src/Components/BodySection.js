import React from 'react';
import { checkForToxicity } from '../functions.js';

const BodySection = () => {
  return (
    <div className='body-section'>
      <h1>EDURATE</h1>
      <p>DETAILED REVIEWS AND DISCUSSIONS OF LECTURERS AND COURSE UNITS</p>
      {/* Add other content for your body section as needed */}
      <form id="myForm" onSubmit={(event) => {event.preventDefault(); checkForToxicity("Hello there sir");}}>
          <label htmlFor="fname">Text</label><br />
          <input type="text" id="fname" name="fname" /><br />
          <input type="submit" value="Submit" />
        </form>   /*Remove after testing toxicity function*/
    </div>
  );
};

export default BodySection;
