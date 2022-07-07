import React from 'react';
import { useNavigate } from 'react-router-dom';

import './mode-select.styles.scss';
import Header from '../../components/header/header';

const ModeSelect: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (loc: string) => {
    navigate(`${loc}`);
  };

  return (
    <div className='mode-select'>
      <Header />
      <div className='buttons'>
        <div
          className='shuffle-type random'
          onClick={() => handleClick('/instructions')}
        >
          <div className='title'>Random Shuffle</div>
          <div className='hint'>
            (will randomly shuffle cards from all cardpacks automatically)
          </div>
        </div>
        <div
          className='shuffle-type choice'
          onClick={() => handleClick('/cardpack-select')}
        >
          <div className='title'>Choice Shuffle</div>
          <div className='hint'>
            (Choose which decks you want to use, then they will be shuffled
            automatically)
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeSelect;
