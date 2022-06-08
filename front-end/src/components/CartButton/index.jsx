import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';

import './CartButton.css';

function CartButton() {
  const navigate = useNavigate();
  const { cartTotalValue, isDisabledButtonCart } = useContext(MyContext);

  return (
    <button
      data-testid="customer_products__button-cart"
      className="cart-btn"
      type="button"
      disabled={ isDisabledButtonCart }
      onClick={ () => navigate('/customer/checkout') }
    >
      <span
        data-testid="customer_products__checkout-bottom-value"
      >
        { `Ver Carrinho: ${cartTotalValue} `}
      </span>
    </button>
  );
}

export default CartButton;
