import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { requestLogin } from '../../service/request';
import ErrorMessage from '../../components/ErrorMessage';
import './register.css';

// test

function Register() {
  // const navigate = useNavigate();
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

    try {
      const dataRegister = await requestLogin(endpoint, register);
      console.log(dataRegister);

      // localStorage.setItem('user', JSON.stringify({ token, ...user }));
      localStorage.setItem('user', JSON.stringify(dataRegister));
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
        <label htmlFor="email" className="inputs-login">
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
        >
          Cadastrar
        </button>
        {failedTryRegister && <ErrorMessage />}
      </form>
    </div>
  );
}

export default Register;
