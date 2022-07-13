import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';

import './cardpack-select.styles.scss';
import Header from '../../components/header/header';
import apiCall from '../../helper/api/api';
import { addCardpack, removeCardpack } from '../../utils/store/selectedCardpacks/selectedCardpacks.action';

interface MyCardpackType {
  id: number;
  cardpack_name: string;
}

interface tagType {
  id: number;
  tag_name: string;
}

const CardpackSelect: React.FC = (props) => {
  const [ownedCardpacks, setOwnedCardpacks] = useState<MyCardpackType[]>([]);
  const [tags, setTags] = useState<tagType[]>([]);
  const {selectedCardpacks} : any = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const getPacks = async (data: string) => {
      let cardPack = await apiCall(cardpackQuery);
      let tags = await apiCall(tagQuery);
      const { cardpack_list } = await cardPack.data;
      const { tag } = await tags.data;
      setOwnedCardpacks(cardpack_list);
      setTags(tag);
    }

    let cardpackQuery = 'cardpack_list { id cardpack_name }';
    let tagQuery = 'tag (order_by: {tag_name: asc}, distinct_on: tag_name) { id tag_name }'
    getPacks(cardpackQuery);
  }, [])

  const handleSelectionClick = (id: any) => {
    if (!selectedCardpacks.includes(id)) {
      dispatch(addCardpack(id));
    } else {
      dispatch(removeCardpack(id));
    }
  }
  
  return (
    <div className='cardpack-select'>
      <Header />
      <div className='sections'>
        <div className='filter'>
          <div className='title'>filter</div>
          <form className='form'>
            {
              tags.map(tag => (
                <label key={tag.id} className='label'>
                  <input type="checkbox" className='input' />
                  {tag.tag_name}
                </label>
              ))
            }
          </form>
        </div>
        <div className='cardpacks'>
          {
            ownedCardpacks.map(cardpack => (
              <div key={cardpack.id} className="cardpack" onClick={() => handleSelectionClick(cardpack.id)}>
                <div className={selectedCardpacks.includes(cardpack.id) ? 'selected green' : 'selected'}>&#10003;</div>
                <div className="cardpack-name">{cardpack.cardpack_name}</div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='buttons'>
        <div className='button game-length'>
          <label>
            How long do you want to play for?
            <select defaultValue={'normal'}>
              <option value='quick'>quick (30 cards: 30 minutes)</option>
              <option value='short'>short (40 cards: 45 minutes)</option>
              <option value='normal'>
                normal (50 cards: 60 minutes)
              </option>
              <option value='short'>long (60 cards: 75 minutes)</option>
            </select>
          </label>
        </div>
        <Link to={'/instructions'} className='shuffle button'>
          Shuffle up and go
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    selectedCardpacks: state.selectedCardpacks.selectedCardpacks
  };
};


export default connect(mapStateToProps)(CardpackSelect);