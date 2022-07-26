import PropTypes from 'prop-types';
import React from 'react';

function ErrorMessage({ testid }) {
  return (
    <span
      data-testid={ testid }
    >
      Usuário ou senha inválido!
    </span>
  );
}

ErrorMessage.propTypes = {
  testid: PropTypes.string.isRequired,
};

export default ErrorMessage;
