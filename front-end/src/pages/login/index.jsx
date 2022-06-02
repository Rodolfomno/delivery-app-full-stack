import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <form className="container-form">
        <input
          data-testid="common_login__input-email"
          type="email"
          name="email"
          id=""
        />
        <input
          data-testid="common_login__input-password"
          type="password"
          name=""
          id=""
        />
        <button
          data-testid="common_login__button-login"
          type="submit"
        >
          Login

        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ handleRegister }
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}

export default Login;
