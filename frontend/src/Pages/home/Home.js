import React from 'react';
import Navbar from '../../components/Navbar';
import BodySection from './BodySection';
import './homeStyle.css';

const Home = () => {
  return (
    <div>
       <Navbar />
       <div className='home-container'>
        <BodySection />
       </div>
    </div>
  )
}

export default Home