import React from 'react'
import Navbar from './Navbar'
import BodySection from './BodySection';
import './styleSheet.css';

const Home = () => {
  return (
    <div className='home-container'>
       <Navbar />
       <BodySection />
    </div>
  )
}

export default Home