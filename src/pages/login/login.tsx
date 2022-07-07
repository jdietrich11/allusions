import React, { useState } from 'react';

import Header from '../../components/header/header';
import SignInForm from '../../components/SignIn/sign-in';
import CreateUser from '../../components/create-user/create-user';

import './login.styles.scss';

const LoginPage: React.FC = () => {
  const [hasAccount, setHasAccount] = useState(true);
  return (
    <div className='login'>
      <Header />
      <div className='form-container'>
        <div className='form'>
          {hasAccount ? (
            <>
              <div className='inputs'>
                <SignInForm />
                <button
                  type='button'
                  className='form-button blue'
                  onClick={() => setHasAccount(false)}
                >
                  Create New Account?
                </button>
              </div>
            </>
          ) : (
            <>
              <CreateUser />
              <button
                onClick={() => setHasAccount(true)}
                type='button'
                className='form-button red'
              >
                I already have an Account
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
