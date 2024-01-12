import React from 'react';
import { Link } from 'react-router-dom';
import SingUp from '../components/SingUp';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <SingUp />
      <p>
        Если уже есть аккаунт, войдите <Link to="/login">Войти в аккаут</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
