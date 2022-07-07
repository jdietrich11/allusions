import React from 'react';
import { Link } from 'react-router-dom';
import IcomoonReact, { iconList } from 'icomoon-react';

import iconSet from '../../assets/selection.json';

import './header.scss';

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='section'>
        <Link to='/choose-teams' className='logo'>
          Allusions
        </Link>
      </div>
      <div className='section section-2'>
        <Link to='/store' className='store-icon'>
          <IcomoonReact
            iconSet={iconSet}
            icon='shopping-cart'
            className='icon icon-cart'
          />
        </Link>
        <Link to='/user' className='user-icon'>
          <IcomoonReact
            iconSet={iconSet}
            icon='user'
            className='icon icon-user'
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
