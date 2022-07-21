import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import { drawCard, discardCard } from '../../utils/store/deck/deck.action';
import { setRound } from '../../utils/store/round/round.action';
import { increaseActiveScore } from '../../utils/store/activePlayer/activeplayer.action';
import './player-turn.styles.scss';

const PlayerTurn: React.FC = (props) => {
  const {deck, activeCard, team1, team2, activePlayer, round, turnCounter}: any = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const tickTimer = () => {
      if (timer > 0) {
        setTimeout(() => {
          setTimer(timer - 1);
        }, 100);
      }
      if (timer === 0) {
        if (round < 3) {
          console.log('run <= 3')
          if (deck.length < 1) {
            dispatch(setRound(round + 1))
            navigate('/instructions');
          }
          if (deck.length > 0) {
            console.log('eh' + deck.length);
            navigate('/player-select');
          }
        }
        if (round >= 3) {
          console.log('run > 3');
          navigate('/scores');
        }
        console.log('Timer Done');
      }
    }
    tickTimer();
    dispatch(drawCard());

  }, [timer, setTimer]);

  const handleWrongClick = (card:any) => {    
    dispatch(discardCard(card));
    dispatch(drawCard());
  };

  const handleRightClick = (card: any) => {
    let score = activePlayer.score + (activeCard.point_value * round);
    for ( let i = 0; i < team1.length; i++) {
      if (team1[i].player === activePlayer.player) {
        team1[i].score = score;
        dispatch(increaseActiveScore(score));
        console.log('FuckingTRash');
      }
    }
    for ( let j = 0; j <team2.length; j++) {
      if (team2[j].player === activePlayer.player) {
        team2[j].score = score;
        dispatch(increaseActiveScore(score));
        console.log('IHATE YOU')
      }
    }
    dispatch(discardCard(card));
    dispatch(drawCard());
    
  };

  return (
    <div className='player-turn'>
      <div className='timer'>{timer}</div>
      <div className='card'>
        <img className='image' src='#' alt={activeCard ? activeCard.card_name : ''} />
        <div className='info'>
          <div className='name'>{activeCard ? activeCard.card_name : ''}</div>
          <div className='description'>
            {activeCard ? activeCard.card_hint : ''}
          </div>
        </div>
        <div className='point-value'>{activeCard ? activeCard.point_value : ''}</div>
      </div>
      <div className='buttons'>
        <div onClick={() => handleWrongClick(activeCard)} className='wrong button'>x</div>
        <div onClick={() => handleRightClick(activeCard)} className='right button'>&#10003;</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    team1: state.teams.team1,
    team2: state.teams.team2,
    activePlayer: state.activePlayer.activePlayer,
    turnCounter: state.turnCounter.turnCounter,
    deck: state.deck.deck,
    activeCard: state.deck.activeCard,
    round: state.round.round,
  };
};

export default connect(mapStateToProps)(PlayerTurn);
