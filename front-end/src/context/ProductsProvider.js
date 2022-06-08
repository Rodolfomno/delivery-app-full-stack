import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const contextValue = {
    products,
    setProducts,
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
