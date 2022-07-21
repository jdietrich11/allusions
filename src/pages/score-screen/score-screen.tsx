import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './score-screen.styles.scss';
import Header from '../../components/header/header';

const ScoreScreen: React.FC = (props) => {
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const { team1, team2 }: any = props;

  useEffect(() => {
    let team1Total = 0;
    let team2Total = 0;
    for (let i = 0; i < team1.length; i++) {
      team1Total = team1Total + team1[i].score + 1;
    }
    for ( let j = 0; j < team2.length; j++) {
      team2Total = team2Total + team2[j].score + 1;
    }
    setTeam1Score(team1Total);
    setTeam2Score(team2Total);
  }, [])
  

  return (
    <div className='score-screen'>
      <Header />
      <div className='scores'>
        <div className='team-score'>
          <div className='team-name'>Team 1 - {team1Score}</div>
          <ul className='list'>
            {
              team1.map((teamMember: any) => (
                <li key={teamMember.player} className='list-item'>{teamMember.player} - {teamMember.score}</li>
              ))
            }
          </ul>
        </div>
        <div className='team-score'>
          <div className='team-name'>Team 2 - {team2Score}&#9733;</div>
          <ul className='list'>
            {
              team2.map((teamMember: any) => (
                <li key={teamMember.player} className='list-item'>{teamMember.player} - {teamMember.score}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className='play-again'>
        <Link className='link' to='/instructions'>
          play again?
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    team1: state.teams.team1,
    team2: state.teams.team2,
  }
}

export default connect(mapStateToProps)(ScoreScreen);
