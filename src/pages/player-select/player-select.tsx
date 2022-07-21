import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import { setActivePlayer } from '../../utils/store/activePlayer/activeplayer.action';
import { increaseTurnCounter } from '../../utils/store/turnCounter/turnCounter.action';

import './player-select.styles.scss';

const PlayerSelect: React.FC = (props: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { team1, team2, activePlayer, turnCounter } = props;

  useEffect(() => {
    console.log(activePlayer);
    if (!activePlayer) {
      dispatch(setActivePlayer(team1[0]));
    }
    else {
      for ( let i = 0; i < team1.length; i++) {
        if (team1[i].player === activePlayer.player) {
          dispatch(setActivePlayer(team2[turnCounter]));
        }
      }
      for (let j = 0; j < team2.length; j++) {
        if (team2[j].player === activePlayer.player) {
          dispatch(increaseTurnCounter(turnCounter + 1));
          dispatch(setActivePlayer(team1[turnCounter]));
        }
      }
    }
  }, [])
  

  return (
    <div className='player-select'>
      <div className='player'>{!activePlayer ? '' : activePlayer.player}</div>
      <div className="current-score">score: {!activePlayer ? '' : activePlayer.score}</div>

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

const mapStateToProps = (state: any) => {
  return {
    team1: state.teams.team1,
    team2: state.teams.team2,
    activePlayer: state.activePlayer.activePlayer,
    turnCounter: state.turnCounter.turnCounter,
  };
};

export default connect(mapStateToProps)(PlayerSelect);
