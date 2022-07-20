import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import { setActivePlayer } from '../../utils/store/activePlayer/activeplayer.action';
import { increaseTurnCounter } from '../../utils/store/turnCounter/turnCounter.action';

import './player-select.styles.scss';

const PlayerSelect: React.FC = (props: any) => {
  const dispatch = useDispatch();
  const { team1, team2, activePlayer, turnCounter } = props;

  useEffect(() => {
    console.log(activePlayer);
    if (!activePlayer) {
      dispatch(setActivePlayer(team1[0]));
      console.log('run');
    }
    if (team1.indexOf(activePlayer) !== -1) {
      let index = team1.indexOf(activePlayer);
      dispatch(setActivePlayer(team2[turnCounter]))
      console.log('run 1');
    } 
    if (team2.indexOf(activePlayer) !== -1) {
      let index = team2.indexOf(activePlayer);
      dispatch(increaseTurnCounter(turnCounter + 1));
      dispatch(setActivePlayer(team1[turnCounter]));
      console.log('run 2');
  
    }
    if (team1.indexOf(activePlayer) === -1 && team2.indexOf(activePlayer) === -1) {
      dispatch(increaseTurnCounter(0));
      console.log('run 3')
    }
    
    return () => {
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
