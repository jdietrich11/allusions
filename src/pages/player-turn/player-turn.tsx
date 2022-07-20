import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import './player-turn.styles.scss';

const PlayerTurn: React.FC = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(60);
  
  useEffect(() => {
    const tickTimer = () => {
      if (timer > 0) {
        setTimeout(() => {
          setTimer(timer - 1);
        }, 1000);
        console.log(timer);
      }
      if (timer === 0) {
        navigate('/scores');
        console.log('Timer Done');
      }
    }
    tickTimer();
  }, [timer, setTimer]);

  return (
    <div className='player-turn'>
      <div className='timer'>{timer}</div>
      <div className='card'>
        <img className='image' src='#' alt='julius caesar' />
        <div className='info'>
          <div className='name'>Julius Caesar</div>
          <div className='description'>
            Gaius Julius Caesar was a Roman general and statesman. A member of
            the First Triumvirate, Caesar led the Roman armies in the Gallic
            Wars before defeating his political rival Pompey in a civil war, and
            subsequently became dictator of Rome from 49 BC until his
            assassination in 44 BC.
          </div>
        </div>
        <div className='point-value'>1</div>
      </div>
      <div className='buttons'>
        <div className='wrong button'>x</div>
        <div className='right button'>&#10003;</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    activePlayer: state.activePlayer.activePlayer,
    turnCounter: state.turnCounter.turnCounter,
  };
};

export default connect(mapStateToProps)(PlayerTurn);
