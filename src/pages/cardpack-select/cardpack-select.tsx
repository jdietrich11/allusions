import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './cardpack-select.styles.scss';
import Header from '../../components/header/header';
import axios from 'axios';

const CardpackSelect: React.FC = () => {
  const [ownedCardpacks, setOwnedCardpacks] = useState([]);

  useEffect(() => {
    axios({
      url: 'https://allusiondb.hasura.app/v1/graphql',
      method: 'post',
      headers: {'x-hasura-admin-secret': 'StXrciDZFfqn1mAYf1UxmbTcfLz9uq9doE7p6AAh1293YZcHcwEsXQcVxkI07mgU'},
      data: {
        query: 'query MyQuery {cardpack_list { cardpack_name }}'
      }
    }).then(res => {
      setOwnedCardpacks(res.data.data.cardpack_list); 
      console.log(ownedCardpacks)
    })
  }, [])
  
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

        </div>
      </div>
      <div className='buttons'>
        <div className='button game-length'>
          <label>
            How long do you want to play for?
            <select defaultValue={'normal'}>
              <option value='quick'>quick (30 cards: 30 minutes)</option>
              <option value='short'>short (40 cards: 45 minutes)</option>
              <option value='normal'>
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

/**
  url: 'https://allusiondb.hasura.app/v1/graphql',
  method: 'post',
  headers: {'x-hasura-admin-secret': 'StXrciDZFfqn1mAYf1UxmbTcfLz9uq9doE7p6AAh1293YZcHcwEsXQcVxkI07mgU'},
  data: {
    query: 'query MyQuery {cardpack_list { cardpack_name }}'

                ownedCardpacks.map(cardpack => (
              <div key={cardpack} className='cardpack'>
                <div className='selected green'><span>&#10003;</span></div>
                <div className="cardpack-name">{cardpack}</div>
              </div>
            ))
            // ownedCardpacks.map((cardPack: ['']) => (
              // <div key={Math.random()}>
              //   <div className='cardpack' onClick={() => setIsSelected(!selected)}>
              //     <div className={selected ? 'selected green' : 'selected'}>
              //       {selected ? <span>&#10003;</span>: ''}
              //     </div>
              //     <div className="cardpack-name">{cardPack}</div>
              //   </div>
              // </div>
            // ))
  }
 */