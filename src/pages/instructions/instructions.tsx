import React from 'react';
import { Link } from 'react-router-dom';

import './instructions.styles.scss';

const Instructions: React.FC = () => {
  return (
    <div className='instructions'>
      <div className='round'>Round: 1/3</div>
      <div className='rules'>
        Each player will have 60 seconds to get their team to guess as many
        cards correctly. Use any words, sounds, or gestures. You can't use the
        name itself. If you use any part of the name, you loose your turn and
        foreit all points. points are calculated by card point value X round.
        Each player will recieve individual points for your team guessing
        correctly that will then be totalled up for a team and individual total
        at the end of the game.
      </div>
      <Link to='/player-select' className='ready'>
        &#10003;
      </Link>
    </div>
  );
};

export default Instructions;
