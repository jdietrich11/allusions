import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header/header';
import SignInForm from '../../components/SignIn/sign-in';
import CreateUser from '../../components/create-user/create-user';

import './login.styles.scss';

const LoginPage: React.FC = (props: any) => {
  const [hasAccount, setHasAccount] = useState(true);
  const { currentUser } = props;
  const navigate = useNavigate();
  console.log(currentUser);

  useEffect(() => {  
    return () => {
      if (currentUser.email) {
        navigate('/choose-teams');
        return;

      }
      else {
        return;
      }
    }
  }, [])
  

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

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(LoginPage);
