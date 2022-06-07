import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './ButtonCardProduct.css';

function ButtonCardProduc({ id }) {
  const [countProduct, setCountProduct] = useState(0);
  return (
    <div className="btn-rm-add">
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        onClick={ () => setCountProduct(countProduct - 1) }
      >
        -
      </button>
      <span data-testid={ `customer_products__input-card-quantity-${id}` }>
        {countProduct}
      </span>
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        onClick={ () => setCountProduct(countProduct + 1) }
      >
        +
      </button>
    </div>
  );
}

ButtonCardProduc.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ButtonCardProduc;
