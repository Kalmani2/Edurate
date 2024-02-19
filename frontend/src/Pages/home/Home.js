import React from 'react';
import Navbar from '../../Components/Navbar';
import BodySection from './BodySection';
import './homeStyle.css';

const Home = () => {
  return (
    <div className='home-container'>
       <Navbar />
       <BodySection />
    </div>
  )
}

export default Home