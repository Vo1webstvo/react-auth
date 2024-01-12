import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../redux/slice/userSlice';
import Form from './Form';
import { useNavigate, Navigate } from 'react-router-dom';

const SingUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return <Form title={'Register'} handleClick={handleRegister} />;
};

export default SingUp;
