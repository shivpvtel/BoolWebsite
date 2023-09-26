import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
    <video src='/videos/video-3.mp4' autoPlay loop muted />
    <h1>BE ON OUR LINE</h1>
    <p>What are you waiting for?</p>
    <div className='hero-btns'>
     <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
        DOWNLOAD (Coming Soon)
      </Button>
  
    
      <Button
        className='btn'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        // onClick={console.log('hey')}
      >
        MEET THE TEAM {/*<i className='far fa-play-circle' /> */}
      </Button>
    </div>
  </div>
  );
}

export default HeroSection;
