import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firestore/firestore';

import { setCurrentUser } from '../../utils/store/user/user.action';

import './create-user.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const CreateUser: React.FC = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
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

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user }: any = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName });
      dispatch(setCurrentUser(user));
      resetFormFields();
      if (user) {
        navigate('/choose-teams');
      }
    } catch (err: any) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          alert('Email already in use');
          break;
        default:
          console.error(err.code);
      }
    }
  };

  return (
    <>
      <h2 className='create-user-heading'>Create User</h2>
      <form onSubmit={handleSubmit} className='form'>
        <input
          className='form-input'
          type='displayName'
          placeholder='displayName'
          name='displayName'
          value={displayName}
          onChange={handleChange}
        />
        <input
          className='form-input'
          type='password'
          placeholder='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        <input
          className='form-input'
          type='password'
          placeholder='confirm password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
        />
        <input
          className='form-input'
          type='email'
          placeholder='email'
          name='email'
          value={email}
          onChange={handleChange}
        />
        <label className='form-label'>
          <input type='checkbox' className='form-checkbox' />
          <span>
            I agree to the <Link to='terms'>terms and service</Link>
          </span>
        </label>
        <button
          onClick={() => console.log('submit new user')}
          type='submit'
          className='form-button green'
        >
          Create Account
        </button>
      </form>
    </>
  );
};

export default CreateUser;
