import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartTotalValue, setCartTotalValue] = useState('R$ 0,00');
  const [isDisabledButtonCart, setisDisabledButtonCart] = useState(true);
  const [totalCheckoutValor, setTotalCheckoutValor] = useState('R$ 0,00');
  const [orderDetails, setOrderDetails] = useState(null);

  const contextValue = {
    products,
    setProducts,
    cartTotalValue,
    setCartTotalValue,
    isDisabledButtonCart,
    setisDisabledButtonCart,
    totalCheckoutValor,
    setTotalCheckoutValor,
    orderDetails,
    setOrderDetails,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsProvider;
