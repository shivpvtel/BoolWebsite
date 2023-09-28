import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function HeroSection() {
  return (
    <div className='hero-container'>
    <video src='/videos/video-3.mp4' autoPlay loop muted />
    <h1>BE ON OUR LINE</h1>
    <p>What are you waiting for?</p>
    <div className='hero-btns'>
   
     <Button className='download' buttonStyle='btn--outline' buttonSize='btn--large'>
     
          Download
        
      </Button>
      
      {/* <Button to='/components/pages/SignUp' className='team' buttonStyle='btn--primary' buttonSize='btn--large'
      
      >
          MEET THE TEAM
      
      </Button> */}
        
    </div>
  </div>
  );
}

export default HeroSection;
