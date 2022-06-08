import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartTotalValue, setCartTotalValue] = useState(0);

  const contextValue = {
    products,
    setProducts,
    cartTotalValue,
    setCartTotalValue,
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
