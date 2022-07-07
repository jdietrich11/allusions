import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import './choose-teams.styles.scss';
import Header from '../../components/header/header';

import {
  addUserToTeam1,
  addUserToTeam2,
  removeUserFromTeam1,
  removeUserFromTeam2,
} from '../../utils/store/teams/teams.action';

const ChooseTeams: React.FC = (props) => {
  const dispatch = useDispatch();
  const [placeholder, setPlaceHolder] = useState('');
  const [placeholder2, setPlaceHolder2] = useState('');
  addUserToTeam1('josh');

  const { team1, team2 }: any = props;

  return (
    <div className='choose-teams'>
      <Header />
      <div className='teams'>
        <div className='team'>
          <div className='team1'>Team 1</div>
          {!team1 ? (
            <div></div>
          ) : (
            team1.map((teamMember: any) => (
              <div className='player' key={teamMember + 1}>
                {teamMember}
                <div
                  className='x'
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(removeUserFromTeam1(teamMember));
                  }}
                >
                  x
                </div>
              </div>
            ))
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(addUserToTeam1(placeholder));
              setPlaceHolder('');
            }}
          >
            <input
              type='text'
              onChange={(e) => setPlaceHolder(e.target.value)}
              value={placeholder}
            />
          </form>
        </div>
        <div className='team'>
          <div className='team2'>Team 2</div>
          {!team2 ? (
            <></>
          ) : (
            team2.map((teamMember: any) => (
              <div className='player' key={teamMember}>
                {teamMember}
                <div
                  className='x'
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(removeUserFromTeam2(teamMember));
                  }}
                >
                  x
                </div>
              </div>
            ))
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(addUserToTeam2(placeholder2));
              setPlaceHolder2('');
            }}
          >
            <input
              type='text'
              onChange={(e) => setPlaceHolder2(e.target.value)}
              value={placeholder2}
            />
          </form>
        </div>
      </div>
      <div className='confirm-teams'>
        <Link to='/mode-select' className='confirm-teams-link'>
          Confirm Teams
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    team1: state.teams.team1,
    team2: state.teams.team2,
  };
};

export default connect(mapStateToProps)(ChooseTeams);
