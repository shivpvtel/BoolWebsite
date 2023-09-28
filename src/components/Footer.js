import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <div style={{ textAlign: 'center' }}>
          <p className='footer-subscription-heading'>
          FOLLOW OUR JOURNEY
          </p>
          <div class='footer-logo'>
          {/* <Link to='/' className='social-logo'>*/}
           
            <img src="favicon.ico" alt="bool" className="logo-image" />  
          </div>
        </div>
          {/* <p className='footer-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div> */}
      </section>
      <section>
      <div style={{ textAlign: 'center' }} >
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            {/* <div class='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>Team</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Investors</Link>
              <Link to='/'>Terms of Service</Link>
            </div> */}
            <div class='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/'>Contact</Link>
              <Link to='/'>Support</Link>
              <Link to='/'>Claim a business</Link>
              {/* <Link to='/'>Sponsorships</Link> */}
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Videos</h2>
              <Link to='/'>Intro to use</Link>
              <Link to='/'>Submit Video</Link>
              <Link to='/'>Video Removal</Link>
              
              {/* <Link to='/'>Influencer</Link> */}
            </div>
            {/* <div class='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Tik Tok</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
            </div> */}
          </div>
        </div>
      </div>
      </section>
      <section class='social-media'>
        <div align='center' class='social-media-wrap'>
          {/* <div class='footer-logo'>
          {/* <Link to='/' className='social-logo'>*/}
           
            {/* <img src="/images/logo-2.ico" alt="bool" className="logo-image" />   */}
          
          
            
        
          {/* </div> */}
          {/* <small class='website-rights'> BOOL © 2023 </small> */}
          <div class='social-icons'>
            {/* <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link> */}
            {/* <div style={{ textAlign: 'center' }}> <Link
              className='social-icon-link twitter'
              to='https://twitter.com/bool_sc' // Use the 'to' prop to specify the URL
              target='_blank'
              rel='noopener noreferrer' // Add this for security and performance
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            </div> */}
            {/* <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
