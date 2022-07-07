import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';

import './store.styles.scss';

const temporaryCardpacks = [
  'History',
  'Marvel',
  'DC',
  'Shake-spear',
  '90s TV',
  'F1',
];

const StorePage: React.FC = () => {
  const [cart, addToCart] = useState(['']);

  useEffect(() => {}, [cart]);

  return (
    <div className='store-page'>
      <Header />
      <div className='store'>
        <div className='section'>
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
        </div>
        <div className='section'>
          <div className='cardpacks'>
            {temporaryCardpacks.map((cardpack) => (
              <div
                key={cardpack}
                className='cardpack'
                onClick={() => {
                  if (!cart.includes(cardpack)) {
                    addToCart([...cart, `${cardpack}`]);
                  } else {
                    let index = cart.indexOf(`${cardpack}`);
                    cart.splice(index, 1);
                  }
                }}
              >
                <div
                  className={
                    cart.includes(`${cardpack}`) ? 'selected green' : 'selected'
                  }
                >
                  <span>&#10003;</span>
                </div>
                <div className='cardpack-name'>{cardpack}</div>
                <div className='card-count'>(60 cards)</div>
                <div className='price'>5.99</div>
              </div>
            ))}
          </div>
        </div>
        <div className='section'>
          <div className='checkout'>
            <div className='cart'>
              <div className='title'>Items in cart</div>
              <div>
                {cart.map((cartItem) => (
                  <div className='cart-item' key={cartItem}>
                    {cartItem}
                  </div>
                ))}
              </div>
            </div>
            <div className='purchase'>
              <div className='total'>
                Total: ${(cart.length * 5.99).toFixed(2)}
              </div>
              <div className='buy-now'>Buy Now!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
