import React from 'react';
import { Link } from 'react-router-dom';

import './player-select.styles.scss';

const PlayerSelect: React.FC = () => {
  return (
    <div className='player-select'>
      <div className='player'>User 3</div>

      <div className='ready-container'>
        <label className='label'>
          (timer will start when player clicks ready)
        </label>
        <Link to='/player-turn' className='ready'>
          &#10003;
        </Link>
      </div>
    </div>
  );
};

export default PlayerSelect;
