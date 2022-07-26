import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { setToken, requestLogin, requestData } from '../../service/request';
import ErrorMessage from '../../components/ErrorMessage';
import './register.css';

function Register() {
  const NUMBER = 6;
  const LENGTH_NAME = 12;

  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isDisabled, setIsDisabled] = useState(true);
  const [failedTryRegister, setFailedTryRegister] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setRegister({ ...register, [name]: value });
  };

  const registerInto = async (e) => {
    e.preventDefault();
    const endpoint = '/register';
    const endpoint2 = '/products';

    try {
      const dataRegister = await requestLogin(endpoint, register);
      const { id, name, email, role, token } = dataRegister;
      setToken(token);
      const data = await requestData(endpoint2);
      localStorage.setItem('user', JSON.stringify({ id, name, email, role, token }));
      localStorage.setItem('products', JSON.stringify(data));
      setIsLogged(true);
    } catch (error) {
      console.log(error);
      setFailedTryRegister(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    if (
      validateEmail(register.email)
      && register.password.length >= NUMBER
      && register.name.length >= LENGTH_NAME
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [register]);

  if (isLogged) return <Navigate to="/customer/products" />;

  return (
    <div>
      <form onSubmit={ (e) => registerInto(e) } className="container-form">
        <label htmlFor="email" className="inputs-register">
          Name
          <input
            data-testid="common_register__input-name"
            type="text"
            name="name"
            id="name"
            value={ register.name }
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="email" className="inputs-register">
          Email
          <input
            data-testid="common_register__input-email"
            type="email"
            name="email"
            id="email"
            value={ register.email }
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="password" className="inputs-register">
          Password
          <input
            data-testid="common_register__input-password"
            type="password"
            name="password"
            id="password"
            value={ register.password }
            onChange={ handleInputChange }
          />
        </label>

        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ isDisabled }
          className="btn-register"
        >
          Cadastrar
        </button>
        {failedTryRegister
          && <ErrorMessage testid="common_register__element-invalid_register" />}
      </form>
    </div>
  );
}

export default Register;
