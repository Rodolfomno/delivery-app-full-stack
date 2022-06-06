import PropTypes from 'prop-types';
import React from 'react';

function ErrorMessage({ testid }) {
  return (
    <span
      data-testid={ testid }
    >
      Mensagem de erro!
    </span>
  );
}

ErrorMessage.propTypes = {
  testid: PropTypes.string.isRequired,
};

export default ErrorMessage;
