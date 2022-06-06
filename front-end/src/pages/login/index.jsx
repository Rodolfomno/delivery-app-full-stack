import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage';
import { requestLogin } from '../../service/request';
import './login.css';

function Login() {
  const navigate = useNavigate();
  const NUMBER = 6;

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [isDisabled, setIsDisabled] = useState(true);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setLogin({ ...login, [name]: value });
  };

  const loginInto = async (e) => {
    e.preventDefault();

    try {
      const endpoint = '/login';

      // const { token, user } = await requestLogin(endpoint, { email, password });
      const dataLogin = await requestLogin(endpoint, login);
      // localStorage.setItem('user', JSON.stringify({ token, ...user }));
      localStorage.setItem('user', JSON.stringify(dataLogin));
      setIsLogged(true);
    } catch (error) {
      console.log('ERRO:', error);
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };
  useEffect(() => {
    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    if (validateEmail(login.email) && login.password.length >= NUMBER) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [login]);

  if (isLogged) return <Navigate to="/customer/products" />;

  return (
    <div>
      <form
        onSubmit={ (e) => loginInto(e) }
        className="container-form"
      >
        <label htmlFor="email" className="inputs-login">
          Email
          <input
            data-testid="common_login__input-email"
            type="email"
            name="email"
            id="email"
            value={ login.email }
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="password" className="inputs-login">
          Password
          <input
            data-testid="common_login__input-password"
            type="password"
            name="password"
            id="password"
            value={ login.password }
            onChange={ handleInputChange }
          />
        </label>

        <button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ isDisabled }
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
        { failedTryLogin && <ErrorMessage /> }
      </form>
    </div>
  );
}

export default Login;
