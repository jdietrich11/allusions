import React from 'react';

import './user.styles.scss';
import Header from '../../components/header/header';

const UserPage: React.FC = () => {
  return (
    <div className='user-page'>
      <Header />
      <div className='user'>
        <div className='username'>UserName</div>
        <div className='to-change'>
          <div className='change-user'>
            <input type='text' placeholder='new username' />
            <div className='button btn-username'>change User name</div>
          </div>
          <div className='change-password'>
            <input type='text' placeholder='old password' />
            <input type='text' placeholder='new password' />
            <input type='text' placeholder='confirm new password' />
            <div className='button btn-password'>change password</div>
          </div>
        </div>
        <div className='settings'>
          <label>
            <input type='checkbox' />
            allow adult content
          </label>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
