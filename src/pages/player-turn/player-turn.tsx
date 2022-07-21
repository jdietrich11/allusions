import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import { drawCard, discardCard } from '../../utils/store/deck/deck.action';
import { correctGuessTeam1, correctGuessTeam2 } from '../../utils/store/teams/teams.action';
import { increaseActiveScore } from '../../utils/store/activePlayer/activeplayer.action';
import './player-turn.styles.scss';

const PlayerTurn: React.FC = (props) => {
  const {deck, activeCard, team1, team2, activePlayer, round}: any = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(60);

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

  const handleWrongClick = (card:any) => {        
    dispatch(discardCard(card));
    dispatch(drawCard());
  };

  const handleRightClick = (card: any) => {
    console.log(team1.indexOf(activePlayer));
    console.log(team2.indexOf(activePlayer));
    let score = activePlayer.score + (activeCard.point_value * round);

      if (team1.indexOf(activePlayer) >= 0) {
        let i = team1.indexOf(activePlayer);
        dispatch(correctGuessTeam1(i, activePlayer.player, score))
        dispatch(increaseActiveScore(score));
        console.log('run2');
        dispatch(discardCard(card));
        dispatch(drawCard());
      }
      if (team2.indexOf(activePlayer) >= 0) {
        let j = team2.indexOf(activePlayer);
        console.log('run3');
      if ((team1.indexOf(activePlayer) < 0) && (team2.indexOf(activePlayer) < 0)) {
        console.log('fuck this stupdi game');
      }
    }
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
