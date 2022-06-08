import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../../context/MyContext';
import './ButtonCardProduct.css';

function ButtonCardProduc({ product }) {
  // const { id, name, price, urlImage } = product;
  const [countProduct, setCountProduct] = useState(0);
  const { setCartTotalValue } = useContext(MyContext);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('LS', cart);
    if (cart.length) {
      const totalValue = cart.map((prod) => Number(prod.price) * prod.qtd)
        .reduce((acc, price) => acc + price, 0);
      console.log('totalValueRDC', totalValue);
      setCartTotalValue(totalValue
        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
      console.log('DEptotalValueRDC', totalValue);
      console.log('useEffect', cart);
    }
  }, [countProduct]);

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
    const ifContained = cart.some((prod) => prod.id === product.id);
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
