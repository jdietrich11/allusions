import React from 'react';
import { Link } from 'react-router-dom';

import './landing.styles.scss';
import video from '../../assets/nebula.mp4';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='landing-page'>
        <video autoPlay={true} loop muted className='video'>
          <source src={video} type='video/mp4' />
        </video>
      </div>
      <div className='border'>
        <Link to='/login' className='text'>
          start
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
