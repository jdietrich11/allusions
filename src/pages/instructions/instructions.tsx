import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import './instructions.styles.scss';
import shuffle from '../../helper/shuffleDeck/shuffleDeck';
import { setRound } from '../../utils/store/round/round.action';
import { increaseTurnCounter } from '../../utils/store/turnCounter/turnCounter.action';
import { shuffleDeck } from '../../utils/store/deck/deck.action';
import apiCall from '../../helper/api/api';
import { setDeck } from '../../utils/store/deck/deck.action';
import { resetDeck } from '../../utils/store/deck/deck.action';

const Instructions: React.FC = (props) => {
  let { round, deck, selectedCardpacks }: any = props;
  console.log(selectedCardpacks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDeck());
    let getDeck = async () => {
      for (let j = 0; j < selectedCardpacks.length; j++) {
        let cardsQuery = `card (where: {cardpack_id : {_eq: ${selectedCardpacks[j]}}}) { id card_name card_hint point_value}`;
        let cards = await apiCall(cardsQuery);
        let { card } = await cards.data;
        for (let i = 0; i < card.length; i++) {
          dispatch(setDeck(card[i]));
        }
      }  
    }
    getDeck();
    let newDeck = shuffle(deck);
    dispatch(shuffleDeck(newDeck));
    dispatch(increaseTurnCounter(0));
  }, [])
  

  const setRules = (round : number) => {
    if (round === 1) {
      return 'Each player will have 60 seconds to get their team to guess as many cards correctly. Use any words as long as it is not shared with the card. Points are calculated by card point value X round. Each player will recieve individual points for your team guessing correctly that will then be totalled up for a team and individual total at the end of the game.'
    }
    if (round === 2) {
      return 'Each player will have 45 seconds to get their team to guess as many cards correctly. Use only 1 word as long as it is not shared with the card. Points are calculated by card point value X round. Each player will recieve indidual points for your team guessing correctly that will then be totalled up for a team and individual total at the end of the game.'
    }
    if (round === 3) {
      return 'Each player will have 60 seconds to get their team to guess as many cards correctly. Using actions only, NO WORDS.'
    }
  }

  return (
    <div className='instructions'>
      <div className='round'>{`Round: ${round}/3`}</div>
      <div className='rules'>
        {
          setRules(round)
        }
      </div>
      <Link to='/player-select' className='ready'>
        &#10003;
      </Link>
    </div>
  );
};

const mapStateToProps = (state : any) => {
  return {
    round: state.round.round,
    deck: state.deck.deck,
    selectedCardpacks: state.selectedCardpacks.selectedCardpacks,
  }
}

export default connect(mapStateToProps)(Instructions);
