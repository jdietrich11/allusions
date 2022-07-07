import React from 'react';
import { Link } from 'react-router-dom';

import './score-screen.styles.scss';
import Header from '../../components/header/header';

const ScoreScreen: React.FC = () => {
  return (
    <div className='score-screen'>
      <Header />
      <div className='scores'>
        <div className='team-score'>
          <div className='team-name'>Team 1 - 1200 </div>
          <ul className='list'>
            <li className='list-item'>user 1 - 800</li>
            <li className='list-item'>user 3 - 300</li>
            <li className='list-item'>user 2 - 100</li>
          </ul>
        </div>
        <div className='team-score'>
          <div className='team-name'>Team 2 - 1250 &#9733;</div>
          <ul className='list'>
            <li className='list-item'>user 6 - 450</li>
            <li className='list-item'>user 4 - 400</li>
            <li className='list-item'>user 5 - 400</li>
          </ul>
        </div>
      </div>
      <div className='play-again'>
        <Link className='link' to='/instructions'>
          play again?
        </Link>
      </div>
    </div>
  );
};

export default ScoreScreen;
