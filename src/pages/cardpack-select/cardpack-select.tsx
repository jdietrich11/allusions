import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './cardpack-select.styles.scss';
import Header from '../../components/header/header';

const CardpackSelect: React.FC = () => {
  const [selected, setIsSelected] = useState(true);

  return (
    <div className='cardpack-select'>
      <Header />
      <div className='sections'>
        <div className='filter'>
          <div className='title'>filter</div>
          <form className='form'>
            <label className='label'>
              <input className='input' type='checkbox' />
              History
            </label>
            <label className='label'>
              <input className='input' type='checkbox' />
              Art
            </label>
            <label className='label'>
              <input className='input' type='checkbox' />
              Languages
            </label>
            <label className='label'>
              <input className='input' type='checkbox' />
              Superheros
            </label>
          </form>
        </div>
        <div className='cardpacks'>
          <div className='cardpack' onClick={() => setIsSelected(!selected)}>
            <div className={selected ? 'selected green' : 'selected'}>
              {selected ? <span>&#10003;</span> : ''}
            </div>
            <div className='cardpack-name'>Starter</div>
            <div className='card-count'>(60 cards)</div>
          </div>
        </div>
      </div>
      <div className='buttons'>
        <div className='button game-length'>
          <label>
            How long do you want to play for?
            <select>
              <option value='quick'>quick (30 cards: 30 minutes)</option>
              <option value='short'>short (40 cards: 45 minutes)</option>
              <option selected value='short'>
                normal (50 cards: 60 minutes)
              </option>
              <option value='short'>long (60 cards: 75 minutes)</option>
            </select>
          </label>
        </div>
        <Link to={'/instructions'} className='shuffle button'>
          Shuffle up and go
        </Link>
      </div>
    </div>
  );
};

export default CardpackSelect;
