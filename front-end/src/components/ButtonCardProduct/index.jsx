import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './ButtonCardProduct.css';

function ButtonCardProduc({ product }) {
  // const { id, name, price, urlImage } = product;
  const [countProduct, setCountProduct] = useState(0);

  // const updateLocalStora = (boolean, cart) => {
  //   if (boolean) {
  //     const updateQtd = cart.map((prod) => ({ ...prod, qtd: countProduct + 1 }));
  //     localStorage.setItem('cart', JSON.stringify(updateQtd));
  //   } else {
  //     cart.push({ ...product, qtd: countProduct + 1 });
  //     localStorage.setItem('cart', JSON.stringify(cart));
  //   }
  // };

  const removeProduct = () => {
    if (countProduct !== 0) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCountProduct(countProduct - 1);
      const updateQtd = cart.map((prod) => ({ ...prod, qtd: countProduct - 1 }));
      localStorage.setItem('cart', JSON.stringify(updateQtd));
    }
  };

  const addProduct = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCountProduct(countProduct + 1);
    console.log(cart);
    const ifContained = cart.some((prod) => prod.id === product.id);
    // updateLocalStora(ifContained, cart);
    if (ifContained) {
      const updateQtd = cart.map((prod) => ({ ...prod, qtd: countProduct + 1 }));
      localStorage.setItem('cart', JSON.stringify(updateQtd));
    } else {
      cart.push({ ...product, qtd: countProduct + 1 });
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  const handleCoutProduct = ({ target }) => {
    const { value } = target;
    setCountProduct(Number(value));
  };
  return (
    <div className="btn-rm-add">
      <button
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        className="btn-rm"
        type="button"
        onClick={ removeProduct }
      >
        -
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        value={ countProduct }
        onChange={ handleCoutProduct }
        type="number"
        min={ 0 }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
        className="btn-add"
        type="button"
        onClick={ addProduct }
      >
        +
      </button>
    </div>
  );
}

ButtonCardProduc.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default ButtonCardProduc;
