import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { requestLogin, requestData, setToken } from '../../service/request';
import ErrorMessage from '../../components/ErrorMessage';
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
  const [typeUser, setTypeUser] = useState({
    role: '',
    page: '',
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setLogin({ ...login, [name]: value });
  };

  const loginInto = async (e) => {
    e.preventDefault();
    const endpoint1 = '/login';
    const endpoint2 = '/products';
    try {
      const dataLogin = await requestLogin(endpoint1, login);
      const { id, name, email, role, token } = dataLogin;
      localStorage.setItem('user', JSON.stringify({ id, name, email, role, token }));
      setToken(token);
      const data = await requestData(endpoint2);
      localStorage.setItem('products', JSON.stringify(data));

      if (role === 'customer') {
        localStorage.setItem('typeUser', JSON.stringify({ role, page: 'products' }));
        setTypeUser({ role, page: 'products' });
      } else {
        localStorage.setItem('typeUser', JSON.stringify({ role, page: 'orders' }));
        setTypeUser({ role, page: 'orders' });
      }

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
    if (JSON.parse(localStorage.getItem('user'))) {
      const { role, page } = JSON.parse(localStorage.getItem('typeUser'));
      setTypeUser({ role, page });
      setIsLogged(true);
    }
  }, []);
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

  if (isLogged) return <Navigate to={ `/${typeUser.role}/${typeUser.page}` } />;

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
        { failedTryLogin
          && <ErrorMessage testid="common_login__element-invalid-email" /> }
      </form>
    </div>
  );
}

export default Login;
