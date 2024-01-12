import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login />
      <p>
        Или <Link to="/register">Зарегестрироваться</Link>
      </p>
    </div>
  );
};

export default LoginPage;
