import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './cardpack-select.styles.scss';
import Header from '../../components/header/header';
import axios from 'axios';

interface MyCardpackType {
  id: number;
  cardpack_name: string;
}

const CardpackSelect: React.FC = () => {
  const [ownedCardpacks, setOwnedCardpacks] = useState<MyCardpackType[]>([]);

  useEffect(() => {
    const getPacks = async () => {
      let res : any = await axios({
        url: 'https://allusiondb.hasura.app/v1/graphql',
        method: 'post',
        headers: {'x-hasura-admin-secret': 'StXrciDZFfqn1mAYf1UxmbTcfLz9uq9doE7p6AAh1293YZcHcwEsXQcVxkI07mgU'},
        data: {
          query: 'query MyQuery {cardpack_list { cardpack_name }}'
        }
      })

      await setOwnedCardpacks(res.data.data.cardpack_list);
      console.log(res.data.data.cardpack_list);
    }

    getPacks();
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
          {
            ownedCardpacks.map(cardpack => (
              <div key={cardpack.id} className="cardpack">
                <div className="selected green">&#10003;</div>
                <div className="cardpack_name">{cardpack.cardpack_name}</div>
              </div>
            ))
          }
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