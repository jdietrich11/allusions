import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import { drawCard, discardCard } from '../../utils/store/deck/deck.action';

import './player-turn.styles.scss';

const PlayerTurn: React.FC = (props) => {
  const {deck, activeCard}: any = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(60);
  console.log(deck);
  
  useEffect(() => {
    // const tickTimer = () => {
    //   if (timer > 0) {
    //     setTimeout(() => {
    //       setTimer(timer - 1);
    //     }, 1000);
    //     console.log(timer);
    //   }
    //   if (timer === 0) {
    //     navigate('/scores');
    //     console.log('Timer Done');
    //   }
    // }
    // tickTimer();
    dispatch(drawCard());

  }, [timer, setTimer]);

  const handleWrongClick = () => {console.log('wrong')};

  const handleRightClick = (card: any) => {
    dispatch(discardCard(card));
    dispatch(drawCard());
  };

  return (
    <div className='player-turn'>
      <div className='timer'>{timer}</div>
      <div className='card'>
        <img className='image' src='#' alt={activeCard.card_name} />
        <div className='info'>
          <div className='name'>{activeCard.card_name}</div>
          <div className='description'>
            {activeCard.card_hint}
          </div>
        </div>
        <div className='point-value'>{activeCard.point_value}</div>
      </div>
      <div className='buttons'>
        <div onClick={() => handleWrongClick()} className='wrong button'>x</div>
        <div onClick={() => handleRightClick(activeCard)} className='right button'>&#10003;</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    activePlayer: state.activePlayer.activePlayer,
    turnCounter: state.turnCounter.turnCounter,
    deck: state.deck.deck,
    activeCard: state.deck.activeCard,
  };
};

export default connect(mapStateToProps)(PlayerTurn);
