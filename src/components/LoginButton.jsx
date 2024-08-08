import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/login')}>Login / Sign Up</button>
  );
};

export default LoginButton;
