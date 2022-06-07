import React from 'react';
import { MyContext } from './MyContext';

export function ProductsProvider({children}) {
  const contextValue = {};

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  )
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
} 
