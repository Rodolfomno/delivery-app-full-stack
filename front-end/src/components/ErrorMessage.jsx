import PropTypes from 'prop-types';
import React from 'react';

function ErrorMessage({ testid }) {
  return (
    <span
      data-testis={ testid }
    >
      Mensagem de erro!
    </span>
  );
}

ErrorMessage.propTypes = {
  testid: PropTypes.string.isRequired,
};

export default ErrorMessage;
