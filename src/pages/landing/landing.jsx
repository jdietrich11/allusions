import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './landing.styles.scss';
import video from '../../assets/nebula.mp4';
import { resetDeck } from '../../utils/store/deck/deck.action';
import { resetActivePlayer } from '../../utils/store/activePlayer/activeplayer.action';
import { resetTeams } from '../../utils/store/teams/teams.action';

const LandingPage = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetDeck());
    dispatch(resetActivePlayer());
    dispatch(resetTeams());
  }
  
  return (
    <div className='landing-page'>
      <div className='landing-page'>
        <video autoPlay={true} loop muted className='video'>
          <source src={video} type='video/mp4' />
        </video>
      </div>
      <div className='border'>
        <Link to='/login' onClick={() => handleClick()} className='text'>
          start
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
