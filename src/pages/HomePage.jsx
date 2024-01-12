import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hook/use-auth';
import { removeUser } from '../redux/slice/userSlice';
import { useDispatch } from 'react-redux';

const HomePage = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => dispatch(removeUser())}>Разлогиниться</button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
