import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/login');
  };

  return (
    <div>
      <form className="container-form">
        <input
          data-testid="common_register__input-name"
          type="text"
          name="name"
          id=""
        />
        <input
          data-testid="common_register__input-email"
          type="email"
          name="email"
          id=""
        />
        <input
          data-testid="common_register__input-password"
          type="password"
          name="password"
          id=""
        />
        <button
          data-testid="common_register__button-register"
          type="button"
          onClick={ handleRegister }
        >
          Confirmar
        </button>
      </form>
    </div>
  );
}

export default Register;
