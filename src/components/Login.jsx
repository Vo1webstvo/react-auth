import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Form from './Form';
import { useNavigate, Navigate } from 'react-router-dom';
import { setUser } from '../redux/slice/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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

  return <Form title={'Login'} handleClick={handleLogin} />;
};

export default Login;
