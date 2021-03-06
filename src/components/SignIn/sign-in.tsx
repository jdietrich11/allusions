import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import { signInAuthUserWithEmailAndPassword } from '../../utils/firestore/firestore';
import { setCurrentUser } from '../../utils/store/user/user.action';

import './sign-in.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm: React.FC = (props) => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    let name = (e.target as HTMLInputElement).name;
    let value = (e.target as HTMLInputElement).value;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let { user }: any = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      dispatch(setCurrentUser(user));

      resetFormFields();
      if (user) {
        navigate('/choose-teams');
      }
    } catch (err: any) {
      let code = err.code;
      switch (code) {
        case 'auth/wrong-password':
          alert('wrong password!');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.error(err);
      }
    }
  };

  return (
    <div className='sign-in-container'>
      <h2 className='sign-in-heading'>Sign-In</h2>
      <form onSubmit={handleSubmit} className='form'>
        <input
          className='input'
          placeholder='Email'
          type='email'
          required
          name='email'
          value={email}
          onChange={handleChange}
        />
        <input
          className='input'
          placeholder='Password'
          type='password'
          required
          name='password'
          value={password}
          onChange={handleChange}
        />

        <button className='form-button green'>Sign In</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(SignInForm);
